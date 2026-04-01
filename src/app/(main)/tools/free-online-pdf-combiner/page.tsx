import type { Metadata } from "next";
import Link from "next/link";
import "./PdfCombiner.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Free Online PDF Combiner — Merge PDFs Instantly (No Install, No Login)",
  description:
    "Combine PDF files online for free in seconds. Our free PDF combiner lets you merge unlimited PDFs, reorder pages visually, and download your file instantly. No software installation. No watermarks. Works on every device.",
  keywords: [
    "free online pdf combiner",
    "merge pdf files free",
    "combine pdf online",
    "pdf merger no watermark",
    "join pdf files online free",
    "merge multiple pdf into one",
    "pdf combiner tool",
    "online pdf merge",
    "free pdf joiner",
    "combine pdf documents",
    "pdf merge without email",
    "merge pdf pages",
    "free pdf merge 2026",
    "combine pdf files no signup",
    "best free pdf combiner",
    "pdf combiner for students",
    "pdf combiner for business",
    "scenith pdf tools",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/free-online-pdf-combiner",
  },
  openGraph: {
    title: "Free Online PDF Combiner — Merge PDFs in Seconds | Scenith",
    description:
      "Merge unlimited PDF files online free. Drag, drop, reorder pages visually, and combine into one polished document. No watermarks. No account needed.",
    url: "https://scenith.in/tools/free-online-pdf-combiner",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/pdf-combiner.png",
        width: 1200,
        height: 630,
        alt: "Scenith Free Online PDF Combiner Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online PDF Combiner — Merge PDFs in Seconds",
    description:
      "Combine multiple PDF files into one instantly. Free, no watermarks, no signup required. Works on desktop and mobile.",
    images: ["https://scenith.in/og/pdf-combiner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://scenith.in/tools/free-online-pdf-combiner#app",
      name: "Free Online PDF Combiner",
      url: "https://scenith.in/tools/free-online-pdf-combiner",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Merge unlimited PDF files",
        "Visual drag-and-drop page reordering",
        "No watermarks",
        "No account required",
        "Mobile and desktop compatible",
        "Instant download",
      ],
      description:
        "Combine multiple PDF files into a single document online for free. No watermarks, no email required, no software to install.",
      publisher: {
        "@type": "Organization",
        name: "Scenith",
        url: "https://scenith.in",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://scenith.in/tools/free-online-pdf-combiner#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this PDF combiner completely free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's PDF combiner is 100% free to use. There are no hidden fees, no premium tiers required for basic merging, and no watermarks added to your output file.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to create an account to merge PDFs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can upload and preview your PDFs without an account. A free Scenith account is needed to process and download the merged file, which takes under 30 seconds to set up.",
          },
        },
        {
          "@type": "Question",
          name: "How many PDF files can I combine at once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no hard limit on the number of files. You can merge two PDFs or twenty. The tool is designed to handle large multi-file merges efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Will my PDFs be stored on your servers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Files are temporarily processed on our secure servers and automatically deleted after your session ends. We never share or sell your documents.",
          },
        },
        {
          "@type": "Question",
          name: "Can I reorder pages when combining PDFs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's merger includes a full visual page manager. You can drag and drop individual pages — not just entire files — into any order before merging.",
          },
        },
        {
          "@type": "Question",
          name: "Does it work on mobile phones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The tool works on iOS and Android browsers. For the best page-level reordering experience, a desktop or tablet screen is recommended.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum file size I can upload?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Individual files up to 100 MB are supported. For larger documents, we recommend compressing them first using Scenith's free PDF compressor.",
          },
        },
        {
          "@type": "Question",
          name: "Will the output PDF look exactly like my originals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith preserves the original formatting, fonts, images, and vector content of each input PDF. The merged file is an exact combination of your source documents.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://scenith.in/tools/pdf-tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Free Online PDF Combiner",
          item: "https://scenith.in/tools/free-online-pdf-combiner",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Combine PDF Files Online for Free",
      description: "Step-by-step guide to merging multiple PDF documents into one file using Scenith's free online PDF combiner.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Open the PDF Combiner",
          text: "Click the 'Combine My PDFs Free' button to open the Scenith PDF merger tool.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload your PDF files",
          text: "Drag and drop your PDF files into the upload zone, or click to browse your device. You can upload as many files as you need.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Arrange pages visually",
          text: "Use the visual page panel to drag individual pages into your preferred order across all uploaded PDFs.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Merge and download",
          text: "Click 'Process Merge PDF' and your combined PDF will be ready to download within seconds.",
        },
      ],
      totalTime: "PT1M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Scenith Free PDF Combiner",
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────
const CTAUrl =
  "https://scenith.in/tools/pdf-tools?utm_source=landing&utm_medium=cta&utm_campaign=pdf-combiner&utm_content=hero";

const features = [
  {
    icon: "⚡",
    title: "Lightning-Fast Processing",
    body: "Our cloud infrastructure processes your PDFs in parallel, not sequentially. A ten-file merge that would take minutes on desktop software finishes in under fifteen seconds on Scenith.",
  },
  {
    icon: "🎯",
    title: "Page-Level Reordering",
    body: "Most online PDF mergers only let you reorder entire files. Scenith goes deeper — you get a full visual grid of every page across all your uploads, and you can drag any single page to any position before merging.",
  },
  {
    icon: "🔒",
    title: "Zero Watermarks, Zero Tracking",
    body: "Your merged PDF will look exactly as if you paid for desktop software — no Scenith branding, no forced upsell watermarks, and no pixel-tracking embedded in the output. The file is entirely yours.",
  },
  {
    icon: "📱",
    title: "Works on Every Device",
    body: "Built as a progressive web app, the combiner runs natively in Safari, Chrome, Edge, and Firefox on iPhone, Android, Mac, and Windows — without a single app store download.",
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    body: "Every upload is encrypted in transit with TLS 1.3. Files are stored in isolated buckets with time-limited presigned URLs and automatically purged from our servers after your session ends.",
  },
  {
    icon: "♾️",
    title: "Unlimited Files Per Merge",
    body: "Merge a two-page contract with a 400-page report and a dozen image-heavy brochures in a single pass. Scenith doesn't cap how many files you can combine in one operation.",
  },
];

const useCases = [
  {
    tag: "Students",
    headline: "Combine All Your Assignments Into One Clean Submission",
    body: "Universities increasingly require single-file submissions for portfolios, dissertations, and lab reports. Instead of emailing professors five attachments, merge all your work into one polished PDF in under a minute.",
    color: "#3b82f6",
  },
  {
    tag: "Legal & Finance",
    headline: "Bundle Contracts, Annexures, and Evidence Into One File",
    body: "Legal documents are notoriously scattered across dozens of files — NDAs, schedules, exhibits, supporting affidavits. Combining them into a single paginated PDF eliminates confusion in court filings, due diligence packages, and client deliverables.",
    color: "#7c3aed",
  },
  {
    tag: "HR & Recruiters",
    headline: "Package Resumes, Cover Letters, and Portfolios Together",
    body: "Hiring managers lose track of scattered attachments. A professionally merged PDF — résumé on page one, portfolio right after, references at the end — makes every candidate submission immediately readable and ATS-friendly.",
    color: "#059669",
  },
  {
    tag: "Small Business",
    headline: "Merge Invoices, Receipts, and Reports for Clean Bookkeeping",
    body: "Accountants and bookkeepers deal with mountains of individual transaction PDFs. Combining monthly receipts, bank statements, and supplier invoices into quarterly files slashes reconciliation time and simplifies year-end tax submissions.",
    color: "#dc2626",
  },
  {
    tag: "Healthcare",
    headline: "Consolidate Patient Records and Lab Results Safely",
    body: "Clinicians often receive diagnostic PDFs from multiple labs, imaging centres, and referral specialists. Merging them into a single chronological patient record improves handoff quality and reduces the risk of missing critical information.",
    color: "#0891b2",
  },
  {
    tag: "Marketing Teams",
    headline: "Compile Decks, Brochures, and Data Sheets Into One Deliverable",
    body: "Sales teams need self-contained packages — product brochure, pricing sheet, case studies, all in one file. A merged PDF keeps your brand storytelling uninterrupted and makes forwarding to prospects effortless.",
    color: "#d97706",
  },
];

const comparisonData = [
  { feature: "Completely Free", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "No Watermarks", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "Page-Level Drag & Drop", scenith: true, adobe: true, smallpdf: false, ilovepdf: false },
  { feature: "No File Count Limit", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "No Account Required to Preview", scenith: true, adobe: false, smallpdf: true, ilovepdf: true },
  { feature: "Instant Server-Side Processing", scenith: true, adobe: true, smallpdf: true, ilovepdf: true },
  { feature: "Auto-Delete After Session", scenith: true, adobe: false, smallpdf: true, ilovepdf: false },
  { feature: "Mobile Friendly", scenith: true, adobe: true, smallpdf: true, ilovepdf: true },
  { feature: "Compress + Merge in One Place", scenith: true, adobe: true, smallpdf: true, ilovepdf: true },
  { feature: "PDF Watermark Tool Included", scenith: true, adobe: true, smallpdf: false, ilovepdf: true },
];

const tips = [
  {
    number: "01",
    title: "Compress Before You Merge",
    body: "If any of your source PDFs are image-heavy, run them through Scenith's free PDF compressor before merging. This keeps the final file size manageable without visible quality loss. A 50 MB image-heavy report can often compress to under 8 MB.",
  },
  {
    number: "02",
    title: "Use Consistent Page Sizes",
    body: "PDFs with mixed page sizes (A4 mixed with Letter, landscape mixed with portrait) can look untidy after merging. If uniformity matters, use Scenith's rotate and resize options before combining.",
  },
  {
    number: "03",
    title: "Name Your Files Strategically Before Uploading",
    body: "Files appear in the upload panel in the order they're selected. Naming them '01-intro.pdf', '02-body.pdf', '03-appendix.pdf' means they'll appear in the right order automatically, saving you drag-and-drop time.",
  },
  {
    number: "04",
    title: "Use Page-Level Reordering for Selective Merging",
    body: "You don't have to include every page. Use the right-hand page manager to delete individual pages from the merge — for example, removing cover pages from all but the first document, or stripping blank pages.",
  },
  {
    number: "05",
    title: "Add a Watermark After Merging for Distribution",
    body: "If you're distributing a merged document to external parties, use Scenith's watermark tool immediately after merging to stamp 'CONFIDENTIAL', 'DRAFT', or your company name across all pages.",
  },
  {
    number: "06",
    title: "Lock the Final Merged PDF",
    body: "For sensitive documents, always password-protect the merged output using Scenith's Lock PDF tool. This prevents unauthorized users from copying, editing, or printing your content.",
  },
];

const faqItems = [
  {
    q: "Is this PDF combiner completely free?",
    a: "Yes. Scenith's PDF combiner is 100% free to use. There are no hidden fees, no premium tiers required for basic merging, and no watermarks added to your output file.",
  },
  {
    q: "Do I need to create an account to merge PDFs?",
    a: "You can browse and preview the tool without an account. A free Scenith account is needed to process and download the merged file — it takes under 30 seconds to set up, and you can use Google sign-in.",
  },
  {
    q: "How many PDF files can I combine at once?",
    a: "There is no hard limit. You can merge two PDFs or twenty. The tool is built to handle large multi-file operations efficiently, with parallel server-side processing.",
  },
  {
    q: "Will my PDFs be stored on your servers permanently?",
    a: "No. Files are processed in isolated, temporary storage buckets and automatically purged after your session ends. We never retain, share, or sell your documents.",
  },
  {
    q: "Can I reorder individual pages when combining PDFs?",
    a: "Yes — and this is where Scenith stands apart. The tool includes a full visual page grid. You can drag any single page to any position across all uploaded files before triggering the merge.",
  },
  {
    q: "Does the merger work on mobile phones?",
    a: "Yes. The tool runs in iOS Safari and Android Chrome. For drag-and-drop page reordering across many files, a tablet or desktop gives you a better viewport.",
  },
  {
    q: "What is the maximum file size for each PDF?",
    a: "Individual files up to 100 MB are supported. For oversized documents, we recommend using Scenith's free compressor first, which typically reduces PDF sizes by 50–75% without visible quality loss.",
  },
  {
    q: "Will the output PDF look exactly like my originals?",
    a: "Yes. Scenith preserves the original rendering of each input — fonts, vector graphics, embedded images, annotations, and hyperlinks. The merged file is a faithful combination, not a re-rendered export.",
  },
  {
    q: "Can I remove specific pages before merging?",
    a: "Absolutely. In the page manager panel, you can delete any individual page from the merge by clicking the × button next to it. You only merge exactly what you want.",
  },
  {
    q: "Is Scenith's PDF tool safe for confidential documents?",
    a: "All uploads use TLS 1.3 encryption in transit. Server-side files are stored in isolated buckets with no cross-user access. For maximum security, we recommend using our Lock PDF feature to password-protect the merged output.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function FreePdfCombinerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="combiner-root">
        {/* ── Breadcrumb ── */}
        <nav className="combiner-breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true" className="bc-sep">›</span>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <Link href="/tools/pdf-tools" itemProp="item"><span itemProp="name">PDF Tools</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true" className="bc-sep">›</span>
            <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
              <span itemProp="name">Free PDF Combiner</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════ */}
        <section className="combiner-hero" aria-labelledby="hero-heading">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-1" aria-hidden="true" />
          <div className="hero-orb hero-orb-2" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-badge">
              <span className="badge-dot" />
              Free · No Watermarks · No Software Install
            </div>

            <h1 id="hero-heading" className="hero-h1">
              The Free Online<br />
              <span className="hero-accent">PDF Combiner</span><br />
              That Actually Works
            </h1>

            <p className="hero-sub">
              Merge unlimited PDF files into one polished document. Drag pages into any order.
              Download instantly. No watermarks. No hidden limits. No credit card.
              The most powerful free PDF merger built for 2026.
            </p>

            <div className="hero-stats" aria-label="Key statistics">
              <div className="stat-pill">
                <strong>100%</strong> Free
              </div>
              <div className="stat-divider" aria-hidden="true" />
              <div className="stat-pill">
                <strong>0</strong> Watermarks
              </div>
              <div className="stat-divider" aria-hidden="true" />
              <div className="stat-pill">
                <strong>∞</strong> Files
              </div>
              <div className="stat-divider" aria-hidden="true" />
              <div className="stat-pill">
                <strong>&lt;15s</strong> Processing
              </div>
            </div>

            <a
              href={CTAUrl}
              className="hero-cta"
              aria-label="Open the free PDF combiner tool"
            >
              <span className="cta-icon" aria-hidden="true">📄</span>
              Combine My PDFs — It's Free
              <span className="cta-arrow" aria-hidden="true">→</span>
            </a>

            <p className="hero-footnote">
               Works on Chrome, Safari, Edge, Firefox
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section" aria-labelledby="how-heading">
          <div className="section-inner">
            <div className="section-label">Simple 4-Step Process</div>
            <h2 id="how-heading" className="section-h2">
              How to Combine PDFs Online in Under a Minute
            </h2>
            <p className="section-sub">
              No tutorials needed. Scenith's PDF combiner is engineered for speed — from
              first upload to final download in four straightforward steps.
            </p>

            <ol className="steps-grid" aria-label="Steps to merge PDFs">
              {[
                {
                  n: "01",
                  title: "Open the Combiner",
                  body: "Click the CTA button anywhere on this page. You'll land directly on Scenith's PDF merge workspace — no account required to start uploading.",
                  icon: "🖥️",
                },
                {
                  n: "02",
                  title: "Upload Your PDFs",
                  body: "Drag and drop files directly onto the upload zone, or click to browse your device. You can add as many PDFs as you need, and additional files can be inserted between existing ones at any position.",
                  icon: "📤",
                },
                {
                  n: "03",
                  title: "Arrange Pages Your Way",
                  body: "A visual grid shows every page from every uploaded PDF. Drag individual pages into your exact preferred order. Remove pages you don't need. The middle preview pane lets you click any thumbnail for a full-screen view.",
                  icon: "🗂️",
                },
                {
                  n: "04",
                  title: "Merge & Download",
                  body: "Click 'Process Merge PDF'. Our servers combine your files in parallel. Your merged PDF is ready to download in seconds — clean, complete, and watermark-free.",
                  icon: "⬇️",
                },
              ].map((step) => (
                <li key={step.n} className="step-card">
                  <div className="step-num">{step.n}</div>
                  <div className="step-icon" aria-hidden="true">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-body">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="cta-row">
              <a href={CTAUrl} className="inline-cta" aria-label="Start combining PDFs now">
                Start Merging PDFs Now →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURES GRID
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section combiner-section--alt" aria-labelledby="features-heading">
          <div className="section-inner">
            <div className="section-label">Why Scenith</div>
            <h2 id="features-heading" className="section-h2">
              Features That Set This PDF Combiner Apart
            </h2>
            <p className="section-sub">
              We built this tool because every other free PDF merger either slaps a watermark on
              your file, limits you to two files, or makes you subscribe to download. Scenith
              removes every one of those friction points.
            </p>

            <ul className="features-grid" aria-label="Key features">
              {features.map((f) => (
                <li key={f.title} className="feature-card">
                  <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-body">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            USE CASES
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section" aria-labelledby="usecases-heading">
          <div className="section-inner">
            <div className="section-label">Who Uses It</div>
            <h2 id="usecases-heading" className="section-h2">
              Why Millions of People Need a PDF Combiner in 2026
            </h2>
            <p className="section-sub">
              PDFs have become the universal language of professional document exchange.
              Whether you're submitting a dissertation, closing a deal, or managing a medical
              record — the ability to merge PDFs cleanly is no longer optional. It's essential.
            </p>

            <ul className="usecases-grid" aria-label="Use cases for merging PDFs">
              {useCases.map((u) => (
                <li key={u.tag} className="usecase-card">
                  <span className="usecase-tag" style={{ background: u.color }}>
                    {u.tag}
                  </span>
                  <h3 className="usecase-headline">{u.headline}</h3>
                  <p className="usecase-body">{u.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DEEP CONTENT: WHY PDF MERGING MATTERS
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section combiner-section--alt" aria-labelledby="why-heading">
          <div className="section-inner section-inner--prose">
            <div className="section-label">Deep Dive</div>
            <h2 id="why-heading" className="section-h2">
              Why Combining PDF Files Is One of the Most Valuable Productivity Skills in 2026
            </h2>

            <div className="prose-block">
              <p>
                The modern knowledge worker generates and receives hundreds of PDF documents every
                month. Contracts, reports, presentations, invoices, permits, certificates, medical
                records, tax filings — virtually every formal document that passes between
                organisations ends up as a PDF. Yet despite how ubiquitous PDF creation has become,
                the ability to intelligently <em>combine</em> those PDFs into a single coherent file
                remains something that most people handle badly.
              </p>

              <p>
                The typical workflow looks like this: a professional collects ten relevant documents,
                emails them as individual attachments, and then follows up with a message explaining
                which file is which. The recipient has to open each one individually, scroll back and
                forth between them, and try to mentally assemble the picture. It's inefficient,
                error-prone, and — frankly — it looks unprofessional.
              </p>

              <h3>The Hidden Cost of Scattered PDFs</h3>

              <p>
                Research consistently shows that document fragmentation is one of the leading causes
                of workplace inefficiency. When related information is spread across multiple files,
                people spend disproportionate time switching between them — a phenomenon sometimes
                called "tab thrashing" in the context of browser-based knowledge work. Studies in
                digital workplace productivity estimate that professionals lose between 20 and 35
                minutes per day simply hunting for documents or assembling context from multiple
                sources.
              </p>

              <p>
                The fix, in many cases, is simple: consolidate your PDFs before you share them.
                A well-merged document is self-contained. The reader can navigate it linearly or
                jump to any section. It can be searched as a whole. It can be printed start-to-finish
                without managing multiple queues. And it communicates care and organisation — a
                subtle but real signal of professionalism.
              </p>

              <h3>What Makes a Good PDF Combiner in 2026?</h3>

              <p>
                Early-generation online PDF mergers were blunt instruments. They let you select
                multiple files and concatenate them in whatever order they happened to be selected —
                no preview, no reordering, no quality control. The result was often a jumbled,
                oversized file that needed further manual editing.
              </p>

              <p>
                Modern PDF combiners — including Scenith — operate at the page level, not just the
                file level. This distinction is critical. Here's why: imagine you're a paralegal
                assembling a case file. You have a 30-page contract, a 5-page amendment, a 12-page
                exhibit, and a 3-page cover letter. You don't just want to stack these files in order.
                You want the cover letter first, then the contract, then the amendment immediately
                following the relevant clause in the contract, then the exhibit. That requires
                page-level control.
              </p>

              <p>
                Scenith's merger gives you a visual grid of every page across every uploaded PDF.
                You can drag page 3 of file 2 to appear between pages 8 and 9 of file 1. You can
                delete duplicate cover sheets. You can reorder sections on the fly. The output is
                exactly what you intended — not just what the files happened to be stacked as.
              </p>

              <h3>The Watermark Problem — and Why It Still Plagues Free Tools</h3>

              <p>
                It's worth addressing the elephant in the room: why do most free PDF tools add
                watermarks? The answer is commercial: they want to monetise your frustration.
                Every time you produce a watermarked document and can't use it professionally,
                you're pushed toward a paid subscription.
              </p>

              <p>
                This model is deeply user-hostile, and it's particularly damaging for students,
                freelancers, and small businesses who genuinely can't justify a monthly subscription
                for a tool they use occasionally. A watermarked PDF is often worse than no PDF at
                all — it looks unprofessional, signals that you used a free tool, and can't be
                submitted to official processes.
              </p>

              <p>
                Scenith's position is different. Our revenue model is not built on weaponising your
                output. The PDF combiner is genuinely, completely free — no watermarks, no quality
                degradation, no nag screens during download. We believe that a free tool should
                produce professional-quality output, or it's not actually free in any meaningful sense.
              </p>

              <h3>Security and Privacy: What Happens to Your Files?</h3>

              <p>
                This is the question that matters most for anyone merging sensitive documents — and
                it should be. When you upload a contract, a medical record, or a financial statement
                to any online service, you are trusting that service with genuinely sensitive information.
              </p>

              <p>
                Here's exactly how Scenith handles your files: uploads are transmitted over TLS 1.3
                (the current strongest transport encryption standard). On the server side, files are
                stored in isolated, user-specific buckets — no file is accessible to any other user.
                Access is controlled by time-limited presigned URLs that expire after your session.
                Files are automatically deleted from our servers after processing is complete.
                We do not analyse, train on, read, or share the contents of your documents.
              </p>

              <p>
                If you're merging truly confidential documents — attorney-client privileged materials,
                medical records covered by HIPAA or GDPR, financial information subject to regulatory
                controls — we strongly recommend using Scenith's Lock PDF feature immediately after
                merging to password-protect the output before downloading it.
              </p>

              <h3>Offline vs. Online PDF Merging: Which Is Better in 2026?</h3>

              <p>
                The honest answer depends on your context. Offline desktop tools like Adobe Acrobat
                Pro offer the deepest feature sets and the guarantee that your files never leave your
                machine. If you're merging classified government documents or highly sensitive
                intellectual property, offline processing is the right choice.
              </p>

              <p>
                For the overwhelming majority of everyday PDF merging tasks, however, online tools
                like Scenith are superior in practice: they require no installation, they work on
                any device (including Chromebooks and iPads that can't run desktop software), they
                receive updates instantly without user action, and they process files on powerful
                cloud infrastructure rather than your local CPU. A complex merge that takes 45 seconds
                on a mid-range laptop finishes in under 10 seconds on Scenith's servers.
              </p>

              <p>
                The other dimension to consider is accessibility. Adobe Acrobat Pro costs upward of
                $240 per year. For occasional use — the student who needs to merge documents for a
                semester project, the freelancer who combines client deliverables once a month, the
                job applicant assembling a portfolio — that annual fee is impossible to justify.
                Scenith makes professional-grade PDF merging available to anyone with a browser.
              </p>

              <h3>PDF Merging Across Industries: A 2026 Perspective</h3>

              <p>
                The rise of hybrid and remote work since 2020 has massively increased the volume of
                PDF-based document exchange. Physical document handoffs have been replaced by digital
                PDF packages. This trend shows no sign of reversing — if anything, the expansion of
                e-signature platforms, digital-first government services, and remote notarisation has
                accelerated it.
              </p>

              <p>
                In legal practice, the shift to electronic court filing has made well-organised merged
                PDFs a professional baseline expectation. In healthcare, the transition to electronic
                health records has created constant demand for consolidating fragmented patient
                documentation from different systems. In education, institutions that transitioned to
                online learning now receive PDF portfolios and digital submissions as a matter of
                course.
              </p>

              <p>
                Across all of these contexts, the ability to produce a clean, correctly ordered,
                professionally formatted merged PDF is not a niche technical skill — it's basic
                digital literacy. And having access to a tool that does it well, free, is genuinely
                consequential for individual productivity and professional outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section" aria-labelledby="compare-heading">
          <div className="section-inner">
            <div className="section-label">Tool Comparison</div>
            <h2 id="compare-heading" className="section-h2">
              Scenith vs. Other Free PDF Combiners
            </h2>
            <p className="section-sub">
              Not all "free" PDF mergers are created equal. Here's an honest feature-by-feature
              comparison across the most commonly used online PDF tools.
            </p>

            <div className="compare-wrapper" role="region" aria-label="Feature comparison table" tabIndex={0}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="col-scenith">Scenith ✦</th>
                    <th scope="col">Adobe Online</th>
                    <th scope="col">Smallpdf</th>
                    <th scope="col">iLovePDF</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td className="col-scenith">
                        <span className={row.scenith ? "check yes" : "check no"} aria-label={row.scenith ? "Yes" : "No"}>
                          {row.scenith ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.adobe ? "check yes" : "check no"} aria-label={row.adobe ? "Yes" : "No"}>
                          {row.adobe ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.smallpdf ? "check yes" : "check no"} aria-label={row.smallpdf ? "Yes" : "No"}>
                          {row.smallpdf ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.ilovepdf ? "check yes" : "check no"} aria-label={row.ilovepdf ? "Yes" : "No"}>
                          {row.ilovepdf ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="compare-note">
              * Comparison based on free tier features as of early 2026. Features may vary by plan.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            EXPERT TIPS
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section combiner-section--alt" aria-labelledby="tips-heading">
          <div className="section-inner">
            <div className="section-label">Pro Tips</div>
            <h2 id="tips-heading" className="section-h2">
              6 Expert Tips to Get the Best Results When Merging PDFs
            </h2>
            <p className="section-sub">
              Merging PDFs takes seconds. Merging PDFs <em>well</em> takes a few more minutes —
              and a few professional habits that most people don't know about.
            </p>

            <ul className="tips-grid" aria-label="Expert tips for merging PDFs">
              {tips.map((tip) => (
                <li key={tip.number} className="tip-card">
                  <span className="tip-num" aria-hidden="true">{tip.number}</span>
                  <h3 className="tip-title">{tip.title}</h3>
                  <p className="tip-body">{tip.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ADDITIONAL DEEP CONTENT
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section" aria-labelledby="advanced-heading">
          <div className="section-inner section-inner--prose">
            <div className="section-label">Advanced Guide</div>
            <h2 id="advanced-heading" className="section-h2">
              Advanced PDF Merging: What the Guides Don't Tell You
            </h2>

            <div className="prose-block">
              <h3>Understanding PDF Structure Before You Merge</h3>
              <p>
                A PDF is not just an image of a page. It's a complex container format that can hold
                vector graphics, embedded fonts, interactive form fields, digital signatures, metadata,
                bookmarks (called "outlines"), embedded attachments, JavaScript actions, and layer
                information. When you merge two PDFs, all of this internal structure needs to be
                handled correctly — otherwise you end up with broken links, garbled text, or forms
                that no longer function.
              </p>
              <p>
                Cheap or poorly-built PDF mergers flatten this structure. They render each page as
                a rasterised image and reassemble those images into a new PDF. The result looks fine
                on screen but is no longer searchable, has no embedded text for accessibility
                screen readers, and is typically much larger in file size than the originals. Scenith
                uses a native PDF processing library that understands and preserves the internal
                object structure of each source file, including cross-references, content streams,
                and resource dictionaries.
              </p>

              <h3>The Difference Between Merging and Printing to PDF</h3>
              <p>
                A surprisingly common mistake is to "merge" PDFs by opening them all and printing
                to a PDF printer (Microsoft Print to PDF, Apple's PDF option in the Print dialog,
                etc.). This approach rasterises all content, strips metadata, destroys searchability,
                and inflates file size — sometimes by 300% or more. It also loses all document
                structure including bookmarks, form fields, and hyperlinks.
              </p>
              <p>
                A proper PDF combiner like Scenith operates at the PDF object level, not the render
                level. Your hyperlinks survive. Your embedded fonts remain embedded. Your vector
                graphics stay crisp at any zoom level. Searchable text remains searchable. The output
                is a first-class PDF, not a scanned-document imposter.
              </p>

              <h3>What About Password-Protected PDFs?</h3>
              <p>
                If any of your source PDFs are password-protected, you'll need to remove that
                protection before they can be merged. Scenith's Unlock PDF tool handles this —
                you provide the password, the tool removes the protection, and you can then include
                the unlocked file in your merge. Note that you should only unlock documents you
                own or have legal authority to process.
              </p>

              <h3>Merging PDFs with Mixed Orientations and Page Sizes</h3>
              <p>
                A common pain point is merging documents that have different page sizes (ISO A4 vs.
                US Letter is the most frequent mismatch) or mixed orientations (some pages portrait,
                some landscape). Scenith's merger preserves each page at its original size and
                orientation — it does not try to force everything into a uniform format, because
                forcing different-sized content onto a uniform canvas always causes layout problems.
              </p>
              <p>
                If you need all pages to be the same size for a specific submission requirement
                (some courts and regulatory bodies require documents in a specific page format),
                use Scenith's PDF tools to adjust orientation and sizing before merging. Handle
                each file individually first, then combine the standardised versions.
              </p>

              <h3>File Naming and Organisation After Merging</h3>
              <p>
                Your merged PDF filename matters more than you might think. A file named
                "merged_output_final_v3.pdf" communicates nothing. A file named
                "Smith_v_Jones_Case_File_2025Q4.pdf" is immediately identifiable, searchable in
                file systems, and professional-looking in email clients that show attachment names.
              </p>
              <p>
                Make it a habit to rename your merged output immediately after download. Include:
                the document type or project name, relevant date or version, and the intended
                recipient or purpose if it's context-specific. This takes five seconds and saves
                enormous confusion six months later when you're searching for a specific file.
              </p>

              <h3>Bookmarks and Table of Contents in Merged PDFs</h3>
              <p>
                For long merged documents — particularly those combining multiple source files into
                a comprehensive report or case file — navigability is crucial. If your source PDFs
                contained PDF bookmarks (the clickable navigation entries in the sidebar of PDF
                readers), Scenith's merger preserves these. If they didn't have bookmarks, and your
                merged document is long, consider adding them after merging using a full-featured
                PDF editor.
              </p>
              <p>
                As a practical alternative, many professionals add a hand-crafted table of contents
                as the first page of their merged document — a simple page listing the sections with
                their starting page numbers. This is easy to create as a Word document, export as
                a PDF, and insert as the first file in your Scenith merge.
              </p>

              <h3>Archival-Quality PDF Merging</h3>
              <p>
                For document archiving — particularly in legal, medical, or financial contexts where
                records must be preserved for years or decades — consider the PDF/A standard. PDF/A
                is an ISO-standardised subset of PDF specifically designed for long-term archiving.
                It prohibits features that depend on external resources (like embedded JavaScript or
                external font dependencies) that might not render correctly decades later.
              </p>
              <p>
                If your source documents are PDF/A compliant, Scenith's merger maintains their
                compliance. For general business use, standard PDF output is perfectly adequate and
                far more universally compatible.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            OTHER PDF TOOLS CTA STRIP
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section tools-strip-section" aria-labelledby="tools-heading">
          <div className="section-inner">
            <div className="section-label">Complete Toolkit</div>
            <h2 id="tools-heading" className="section-h2">
              More Free PDF Tools You Might Need
            </h2>
            <p className="section-sub">
              Scenith's PDF suite goes beyond combining. Every tool below is free, watermark-free,
              and available in the same workspace as the combiner.
            </p>

            <ul className="tools-strip" aria-label="Other available PDF tools">
              {[
                { icon: "✂️", name: "Split PDF", desc: "Extract specific pages or split by range", color: "#8b5cf6" },
                { icon: "🗜️", name: "Compress PDF", desc: "Reduce file size by up to 80%", color: "#10b981" },
                { icon: "🔄", name: "Rotate PDF", desc: "Fix orientation for any or all pages", color: "#f59e0b" },
                { icon: "🖼️", name: "Images to PDF", desc: "Convert JPG, PNG, WebP to PDF", color: "#ec4899" },
                { icon: "📸", name: "PDF to Images", desc: "Export every page as a high-res image", color: "#06b6d4" },
                { icon: "💧", name: "Add Watermark", desc: "Stamp text across every page", color: "#6366f1" },
                { icon: "🔒", name: "Lock PDF", desc: "Password-protect your documents", color: "#ef4444" },
                { icon: "🔓", name: "Unlock PDF", desc: "Remove password protection", color: "#14b8a6" },
              ].map((t) => (
                <li key={t.name} className="tool-strip-card">
                  <a
                    href={`https://scenith.in/tools/pdf-tools?utm_source=landing&utm_medium=related_tools&utm_campaign=pdf-combiner&utm_content=${t.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="tool-strip-link"
                    aria-label={`${t.name}: ${t.desc}`}
                  >
                    <span className="tool-strip-icon" style={{ background: t.color }} aria-hidden="true">
                      {t.icon}
                    </span>
                    <div>
                      <strong className="tool-strip-name">{t.name}</strong>
                      <span className="tool-strip-desc">{t.desc}</span>
                    </div>
                    <span className="tool-strip-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════ */}
        <section className="combiner-section combiner-section--alt" aria-labelledby="faq-heading">
          <div className="section-inner">
            <div className="section-label">FAQ</div>
            <h2 id="faq-heading" className="section-h2">
              Frequently Asked Questions About Our Free PDF Combiner
            </h2>

            <dl className="faq-list">
              {faqItems.map((item, i) => (
                <div key={i} className="faq-item">
                  <dt className="faq-q">
                    <span className="faq-icon" aria-hidden="true">?</span>
                    {item.q}
                  </dt>
                  <dd className="faq-a">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════════ */}
        <section className="combiner-final-cta" aria-labelledby="final-cta-heading">
          <div className="final-cta-orb final-cta-orb-1" aria-hidden="true" />
          <div className="final-cta-orb final-cta-orb-2" aria-hidden="true" />
          <div className="final-cta-inner">
            <h2 id="final-cta-heading" className="final-cta-h2">
              Ready to Merge Your PDFs?
            </h2>
            <p className="final-cta-sub">
              Join thousands of students, professionals, and businesses who use Scenith every day
              to combine PDFs without watermarks, limits, or unnecessary cost.
              Your files. Your output. Completely free.
            </p>
            <a
              href={CTAUrl}
              className="final-cta-btn"
              aria-label="Open the free PDF combiner tool now"
            >
              <span aria-hidden="true">📄</span>
              Combine PDFs for Free — Open Tool
              <span aria-hidden="true">→</span>
            </a>
            <p className="final-cta-note">
              Free forever · No watermarks · No file count limit · Works on all devices
            </p>
          </div>
        </section>
      </div>
    </>
  );
}