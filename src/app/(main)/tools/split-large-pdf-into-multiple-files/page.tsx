import type { Metadata } from "next";
import Link from "next/link";
import '../../../../../styles/tools/SplitLargePdf.css';

/* ─────────────────────────────────────────────
   METADATA — Full SEO + Open Graph + Schema
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Split Large PDF into Multiple Files Free Online (2026) — No Limits | Scenith",
  description:
    "Need to split a large PDF into multiple smaller files? Scenith's free online PDF splitter lets you divide any large document by page range, chapter, or extract every page — instantly, with zero quality loss and no file size limits.",
  keywords: [
    "split large pdf into multiple files",
    "split large pdf",
    "divide pdf into multiple files",
    "split pdf online free",
    "extract pages from pdf",
    "pdf splitter tool",
    "break pdf into parts",
    "pdf page extractor",
    "split pdf by page range",
    "large pdf split free",
    "how to split a large pdf",
    "pdf splitter no size limit",
    "cut pdf into pieces",
    "pdf divide tool 2026",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/split-large-pdf-into-multiple-files",
  },
  openGraph: {
    title: "Split Large PDF into Multiple Files — Free Online Tool | Scenith",
    description:
      "Divide any large PDF into smaller files for free. Split by page range, extract chapters, or burst every page into individual PDFs — all online, lossless, and instant.",
    url: "https://scenith.in/tools/split-large-pdf-into-multiple-files",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/split-large-pdf.png",
        width: 1200,
        height: 630,
        alt: "Split Large PDF into Multiple Files – Scenith Free Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Split Large PDF into Multiple Files Free | Scenith",
    description:
      "Free online PDF splitter — divide large documents by page range, extract chapters, or burst into individual pages instantly.",
    images: ["https://scenith.in/og/split-large-pdf.png"],
  },
  robots: { index: true, follow: true },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA
───────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Scenith PDF Splitter",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: "https://scenith.in/tools/pdf-tools/split-pdf",
      description:
        "Free online tool to split large PDF files into multiple smaller files by custom page ranges, individual pages, or chapters.",
      featureList: [
        "Split large PDFs without file size limit",
        "Custom page range selection",
        "Burst every page into separate PDFs",
        "100% lossless quality preservation",
        "Secure in-browser processing",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I split a large PDF into multiple files for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload your large PDF to Scenith's PDF splitter, choose your splitting method (all pages or custom ranges), define your page boundaries, and click Process. Your split files are ready in seconds — completely free.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a file size limit when splitting a large PDF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Scenith's splitter places no restrictions on file size or page count. You can split PDFs of any size — whether they are 5 MB or 500 MB documents.",
          },
        },
        {
          "@type": "Question",
          name: "Will my PDF quality be reduced after splitting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely not. Splitting is a lossless operation. Every output file retains 100% of the original resolution, embedded fonts, images, vector graphics, and formatting.",
          },
        },
        {
          "@type": "Question",
          name: "Can I split a large PDF into specific page ranges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Custom Page Ranges mode lets you define as many page-range segments as you need. Each segment becomes its own PDF file, downloaded individually.",
          },
        },
        {
          "@type": "Question",
          name: "Does splitting work on scanned PDF documents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scanned PDFs are handled the same way as text-based PDFs. Each page is extracted faithfully, maintaining the scanned image quality without recompression.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Split Large PDF into Multiple Files",
          item: "https://scenith.in/tools/split-large-pdf-into-multiple-files",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Split a Large PDF into Multiple Files",
      description:
        "Step-by-step guide to splitting any large PDF document into smaller files using Scenith's free online PDF splitter.",
      step: [
        {
          "@type": "HowToStep",
          name: "Upload your large PDF",
          text: "Click the tool link and drag-and-drop or browse to upload your large PDF file. The tool detects the page count automatically.",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Choose a splitting method",
          text: "Select Split All Pages to burst every page into individual files, or Custom Page Ranges to create specific document segments.",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Define page boundaries",
          text: "If using Custom Ranges, set start and end pages for each segment. Add as many ranges as needed.",
          position: 3,
        },
        {
          "@type": "HowToStep",
          name: "Process and download",
          text: "Click Process Split PDF. Your files are ready within seconds and download directly to your device.",
          position: 4,
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   UTM TOOL LINK
───────────────────────────────────────────── */
const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/split-pdf?utm_source=split-large-pdf-landing&utm_medium=cta&utm_campaign=pdf-tools-organic-2026";

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function SplitLargePdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="slp-page">

        {/* ── Breadcrumb ── */}
        <nav className="slp-breadcrumb" aria-label="Breadcrumb">
          <div className="slp-breadcrumb__inner">
            <Link href="/">Home</Link>
            <span className="slp-breadcrumb__sep">›</span>
            <Link href="/tools">Tools</Link>
            <span className="slp-breadcrumb__sep">›</span>
            <span>Split Large PDF into Multiple Files</span>
          </div>
        </nav>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="slp-hero" aria-labelledby="slp-hero-h1">
          <div className="slp-hero__inner">
            <div className="slp-hero__badge">
              <span className="slp-hero__badge-dot" aria-hidden="true" />
              Free · No File Size Limit
            </div>

            <h1 id="slp-hero-h1" className="slp-hero__title">
              Split Large PDF into<br />
              <em>Multiple Smaller Files</em><br />
              — Instantly & Free
            </h1>

            <p className="slp-hero__subtitle">
              Divide any massive PDF document into perfectly sized segments in seconds.
              Custom page ranges, chapter extraction, or burst every page into individual
              files — with zero quality loss and no upload size limits.
            </p>

            <div className="slp-hero__stats" role="list">
              {[
                { icon: "📄", text: "Any PDF size supported" },
                { icon: "⚡", text: "Results in under 15 seconds" },
                { icon: "🔒", text: "Secure & private processing" },
                { icon: "🆓", text: "100% free — always" },
                { icon: "✅", text: "Zero quality loss" },
              ].map((s) => (
                <div className="slp-hero__stat-pill" key={s.text} role="listitem">
                  <span className="slp-hero__stat-pill-icon" aria-hidden="true">{s.icon}</span>
                  {s.text}
                </div>
              ))}
            </div>

            <div className="slp-cta-wrap">
              <a href={TOOL_URL} className="slp-cta-btn" rel="noopener">
                Open Free PDF Splitter Tool
                <span className="slp-cta-btn__arrow" aria-hidden="true">→</span>
              </a>
              <span className="slp-cta-trust">
                 Works on any browser · Files deleted after processing
              </span>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <div className="slp-trust-bar" role="list" aria-label="Trust indicators">
          {[
            { icon: "🛡️", text: "256-bit SSL Encryption" },
            { icon: "🗑️", text: "Auto-deleted after session" },
            { icon: "📱", text: "Works on mobile & desktop" },
            { icon: "🌐", text: "No installation needed" },
            { icon: "♾️", text: "Unlimited splits per day" },
          ].map((t) => (
            <div className="slp-trust-item" key={t.text} role="listitem">
              <span className="slp-trust-item__icon" aria-hidden="true">{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            WHY SPLIT LARGE PDFS
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--alt" aria-labelledby="slp-why-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">The Problem With Large PDFs</p>
            <h2 id="slp-why-h2" className="slp-section-title">
              Why Splitting Large PDFs Has Become<br />a Necessity in 2026
            </h2>
            <p className="slp-section-desc">
              As documents grow in complexity and digital collaboration becomes the norm,
              bloated PDF files create real friction — in email, in cloud storage, in
              review workflows, and on mobile devices. Splitting solves all of it.
            </p>

            <div className="slp-why-grid">
              {[
                {
                  icon: "📧",
                  title: "Email Attachment Limits",
                  body: "Gmail, Outlook, and most corporate mail servers cap attachments at 20–25 MB. A single contract, architectural drawing, or research report can easily exceed this. Splitting into segments gets your documents delivered without workarounds.",
                  accent: "#2563eb",
                },
                {
                  icon: "☁️",
                  title: "Cloud Storage Constraints",
                  body: "Many free-tier cloud plans (Google Drive, Dropbox, OneDrive) apply individual file size limits or throttle large uploads. Breaking a 200 MB scanned report into 10 lean PDFs keeps sync fast and storage organised.",
                  accent: "#16a34a",
                },
                {
                  icon: "👥",
                  title: "Parallel Team Collaboration",
                  body: "When a 400-page product specification has sections owned by engineering, legal, marketing, and design — each team only needs their section. Splitting lets everyone work in parallel without version-conflict issues.",
                  accent: "#d97706",
                },
                {
                  icon: "🔐",
                  title: "Information Access Control",
                  body: "You may need to share a report publicly while keeping its financial appendix private. Physically separating content into distinct files is the simplest, most foolproof access-control strategy available.",
                  accent: "#dc2626",
                },
                {
                  icon: "📱",
                  title: "Mobile & Slow Connection Performance",
                  body: "A 150 MB PDF is unusable on a 4G connection or an older smartphone. Splitting into logical chapters means readers access only what they need — no buffering, no crashes, no frustration.",
                  accent: "#7c3aed",
                },
                {
                  icon: "🗂️",
                  title: "Document Archiving & Compliance",
                  body: "Regulatory frameworks in legal, healthcare, and finance often require individual document filing by section or date range. Splitting a master file into compliant segments saves hours of manual extraction.",
                  accent: "#0369a1",
                },
              ].map((c) => (
                <article
                  className="slp-why-card"
                  key={c.title}
                  style={{ "--card-accent": c.accent } as React.CSSProperties}
                >
                  <span className="slp-why-card__icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="slp-why-card__title">{c.title}</h3>
                  <p className="slp-why-card__body">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            THREE SPLITTING METHODS
        ══════════════════════════════════════ */}
        <section className="slp-section" aria-labelledby="slp-methods-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Splitting Techniques</p>
            <h2 id="slp-methods-h2" className="slp-section-title">
              Three Ways to Break a Large PDF<br />Into Multiple Files
            </h2>
            <p className="slp-section-desc">
              Not all PDF splitting tasks are equal. A legal team extracting exhibits needs
              a different approach than a professor splitting a textbook or an engineer
              archiving technical drawings.
            </p>

            <div className="slp-method-grid">
              <article className="slp-method-card slp-method-card--a">
                <span className="slp-method-card__num" aria-hidden="true">01</span>
                <span className="slp-method-card__tag">Method 1</span>
                <h3 className="slp-method-card__title">Burst All Pages</h3>
                <p className="slp-method-card__desc">
                  Convert every page of a large PDF into its own individual file automatically.
                  No configuration needed — upload, click, download a ZIP of single-page PDFs.
                </p>
                <ul className="slp-method-card__list">
                  <li>Distributing pages to different reviewers</li>
                  <li>Creating flashcard-style study materials</li>
                  <li>Archiving scanned document pages individually</li>
                  <li>Uploading pages to image-based platforms</li>
                  <li>Parallel annotation workflows</li>
                </ul>
              </article>

              <article className="slp-method-card slp-method-card--b">
                <span className="slp-method-card__num" aria-hidden="true">02</span>
                <span className="slp-method-card__tag">Method 2</span>
                <h3 className="slp-method-card__title">Custom Page Ranges</h3>
                <p className="slp-method-card__desc">
                  Define precisely which pages belong in which output file. Create two, five,
                  or twenty output segments — each with its own exact page boundaries.
                </p>
                <ul className="slp-method-card__list">
                  <li>Splitting a book by chapter</li>
                  <li>Separating a report&apos;s executive summary from appendices</li>
                  <li>Dividing legal briefs into exhibit packages</li>
                  <li>Creating quarterly sections from an annual report</li>
                  <li>Segmenting a manual by product model</li>
                </ul>
              </article>

              <article className="slp-method-card slp-method-card--c">
                <span className="slp-method-card__num" aria-hidden="true">03</span>
                <span className="slp-method-card__tag">Method 3</span>
                <h3 className="slp-method-card__title">Extract Specific Pages</h3>
                <p className="slp-method-card__desc">
                  Pull non-contiguous pages out of a large PDF into a single new document.
                  Ideal when you need cherry-picked content from different sections of a report.
                </p>
                <ul className="slp-method-card__list">
                  <li>Extracting signature pages from contracts</li>
                  <li>Compiling key charts from a 200-page annual report</li>
                  <li>Pulling selected slides from a PDF presentation</li>
                  <li>Creating a highlights reel from a research paper</li>
                  <li>Building a custom reading list from a textbook</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INLINE CTA #1
        ══════════════════════════════════════ */}
        <div style={{ padding: "0 0 80px" }}>
          <div className="slp-inline-cta">
            <h2 className="slp-inline-cta__title">Ready to Split Your Large PDF Right Now?</h2>
            <p className="slp-inline-cta__sub">
              The tool is free and processes files directly in your browser.
              Your documents never leave your control.
            </p>
            <a href={TOOL_URL} className="slp-cta-btn" rel="noopener">
              Split My PDF Now — It&apos;s Free
              <span className="slp-cta-btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════
            STEP-BY-STEP GUIDE
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--alt" aria-labelledby="slp-guide-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Step-by-Step Guide</p>
            <h2 id="slp-guide-h2" className="slp-section-title">
              How to Split a Large PDF into<br />Multiple Files in 4 Steps
            </h2>
            <p className="slp-section-desc">
              No technical expertise required. From upload to download in under a minute —
              here is exactly what to expect when you use Scenith&apos;s PDF splitter.
            </p>

            <div className="slp-steps" role="list">
              {[
                {
                  n: 1,
                  title: "Upload Your Large PDF Document",
                  desc: "Navigate to the tool (link below) and upload your PDF by dragging it into the upload zone or clicking to browse. The system reads the document and automatically detects the total page count. For very large files, a progress indicator keeps you updated on upload status. Your file is transferred over an encrypted connection and processed in an isolated, secure environment.",
                  tip: "💡 Pro Tip: If your PDF is password-protected, use the Unlock PDF tool first, then come back to split the unlocked version.",
                },
                {
                  n: 2,
                  title: "Choose Your Splitting Method",
                  desc: "You will see two clear options. 'Split All Pages' requires no further configuration — it automatically creates one PDF per page and bundles them in a ZIP archive. 'Custom Page Ranges' opens the range builder, where you can define each output file individually. For most users splitting a large PDF into logical sections, Custom Page Ranges is the right choice.",
                  tip: "💡 Pro Tip: For a 300-page book, try ranges like 1–50 (Intro), 51–150 (Part 1), 151–250 (Part 2), 251–300 (Appendix) — you get four self-contained PDFs in one go.",
                },
                {
                  n: 3,
                  title: "Define Page Ranges or Accept All-Pages Default",
                  desc: "In Custom Ranges mode, click '+ Add Range' to define each output segment. Enter the start and end page numbers for each file. The interface validates your input in real time — it alerts you to overlapping ranges, gaps, or out-of-bound page numbers before you process. You can drag ranges to reorder and preview the range summary at any time.",
                  tip: "💡 Pro Tip: Add as many ranges as you need. There is no limit on the number of output files you can create in one session.",
                },
                {
                  n: 4,
                  title: "Process and Download Your Split Files",
                  desc: "Click 'Process Split PDF'. Average processing time for a 100-page document is under 10 seconds; for 1,000-page documents, under 60 seconds. When complete, each output file appears as a separate download button. Custom range outputs download as individual named PDFs; All-Pages output downloads as a single ZIP. All files maintain full original quality — fonts, images, form fields, annotations, and embedded metadata are preserved exactly.",
                  tip: "💡 Pro Tip: Downloaded files are named by range (e.g., pages-1-50.pdf). Rename them immediately to reflect their content for easier organisation.",
                },
              ].map((step) => (
                <div className="slp-step" key={step.n} role="listitem">
                  <div className="slp-step__num-wrap" aria-hidden="true">
                    <div className="slp-step__num">{step.n}</div>
                  </div>
                  <div className="slp-step__body">
                    <h3 className="slp-step__title">{step.title}</h3>
                    <p className="slp-step__desc">{step.desc}</p>
                    <div className="slp-step__tip">{step.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            USE CASES BY INDUSTRY
        ══════════════════════════════════════ */}
        <section className="slp-section" aria-labelledby="slp-usecase-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Industry Use Cases</p>
            <h2 id="slp-usecase-h2" className="slp-section-title">
              Who Needs to Split Large PDFs —<br />and Why It Matters in Their Work
            </h2>
            <p className="slp-section-desc">
              From courtrooms to classrooms, splitting large PDF documents is a universal
              need across every industry that handles written documentation at scale.
            </p>

            <div className="slp-usecase-grid">
              {[
                {
                  icon: "⚖️", iconBg: "#fef2f2", iconColor: "#dc2626",
                  title: "Legal & Law Firms",
                  items: [
                    "Extract signature pages from multi-party contracts",
                    "Separate exhibits A–Z from the main brief",
                    "Split case files by matter number for docketing",
                    "Divide discovery documents by bates range",
                    "Isolate confidential client sections from public filings",
                    "Create court-submission packages at required page limits",
                  ],
                },
                {
                  icon: "🏥", iconBg: "#f0fdf4", iconColor: "#15803d",
                  title: "Healthcare & Medical",
                  items: [
                    "Split patient record bundles by department",
                    "Extract lab reports from full medical histories",
                    "Divide clinical trial documents by phase",
                    "Separate referral letters from full case notes",
                    "Archive imaging reports individually by date",
                    "Prepare insurance submission packages by claim",
                  ],
                },
                {
                  icon: "🏛️", iconBg: "#eff6ff", iconColor: "#1d4ed8",
                  title: "Government & Public Sector",
                  items: [
                    "Divide RFP/tender documents by section for review",
                    "Split audit reports by department or financial year",
                    "Extract public portions from classified documents",
                    "Create individual forms from bulk application packs",
                    "Archive policy documents by amendment series",
                    "Segment environmental impact reports by topic",
                  ],
                },
                {
                  icon: "📚", iconBg: "#faf5ff", iconColor: "#7c3aed",
                  title: "Education & Research",
                  items: [
                    "Split textbooks into individual chapter PDFs",
                    "Extract specific research paper sections for citation",
                    "Divide dissertation drafts by chapter for supervisor review",
                    "Create targeted reading lists from course materials",
                    "Split exam papers into separate subject sections",
                    "Archive thesis appendices as standalone documents",
                  ],
                },
                {
                  icon: "🏗️", iconBg: "#fff7ed", iconColor: "#d97706",
                  title: "Engineering & Architecture",
                  items: [
                    "Split large technical drawing sets by floor or zone",
                    "Divide construction specs by trade (electrical, plumbing)",
                    "Extract manufacturer data sheets from equipment manuals",
                    "Create vendor-specific sections from master BOQ",
                    "Separate as-built drawings from design drawings",
                    "Archive maintenance manuals by equipment type",
                  ],
                },
                {
                  icon: "💼", iconBg: "#f0fdf4", iconColor: "#0369a1",
                  title: "Finance & Accounting",
                  items: [
                    "Split annual reports into quarterly sections",
                    "Extract audit notes from financial statements",
                    "Divide investor decks by fund or portfolio",
                    "Separate tax filing components for archiving",
                    "Create client-facing summaries from full analysis",
                    "Isolate board presentations from full board packs",
                  ],
                },
              ].map((uc) => (
                <article className="slp-usecase-card" key={uc.title}>
                  <div className="slp-usecase-card__head">
                    <div
                      className="slp-usecase-card__icon-wrap"
                      style={{ background: uc.iconBg, color: uc.iconColor }}
                      aria-hidden="true"
                    >
                      {uc.icon}
                    </div>
                    <h3 className="slp-usecase-card__title">{uc.title}</h3>
                  </div>
                  <div className="slp-usecase-card__body">
                    <ul>
                      {uc.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            STATS ROW (Dark)
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--dark" aria-labelledby="slp-stats-h2">
          <div className="slp-container">
            <h2
              id="slp-stats-h2"
              className="slp-section-title"
              style={{ marginBottom: "40px", textAlign: "center" }}
            >
              Why PDF Splitting Matters at Scale
            </h2>
            <div className="slp-stats-row">
              {[
                { val: "73%", label: "of email bounce-backs caused by oversized PDF attachments" },
                { val: "5×", label: "faster document review when large PDFs are pre-split by section" },
                { val: "2.4 GB", label: "average PDF archive size per enterprise team per year" },
                { val: "< 10s", label: "average split time using Scenith's free PDF tool" },
              ].map((s) => (
                <div className="slp-stat-card" key={s.label}>
                  <div className="slp-stat-card__val">{s.val}</div>
                  <div className="slp-stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRO TIPS
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--alt" aria-labelledby="slp-tips-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Expert Guidance</p>
            <h2 id="slp-tips-h2" className="slp-section-title">
              PDF Splitting Best Practices:<br />What Professionals Actually Do
            </h2>
            <p className="slp-section-desc">
              Splitting a PDF sounds simple, but doing it strategically transforms
              how your documents flow through workflows, inboxes, and archives.
            </p>

            <div className="slp-tips-grid">
              {[
                {
                  cls: "slp-tip-card--blue",
                  heading: "🗂️ Always Split at Logical Boundaries",
                  body: "Resist splitting purely by file size. Instead, split at natural document breaks: chapter headings, section titles, topic changes, or date boundaries. A 'Chapter 3 (pages 47–89).pdf' is infinitely more useful than 'pages-40-80.pdf' to every recipient.",
                },
                {
                  cls: "slp-tip-card--green",
                  heading: "📝 Name Your Output Files Meaningfully",
                  body: "After downloading split files, rename them immediately to reflect content — not page numbers. 'Q1-Financial-Summary.pdf' will be found and opened 10× faster than 'split-1-of-4.pdf', both in email search and in Finder or Explorer.",
                },
                {
                  cls: "slp-tip-card--orange",
                  heading: "🔄 Keep the Original Intact",
                  body: "Splitting is non-destructive — your original PDF is never modified. But always keep the original in a master folder so that if requirements change, you can re-split with different boundaries without re-scanning or re-creating any content.",
                },
                {
                  cls: "slp-tip-card--warn",
                  heading: "🔐 Think About What Each Split Reveals",
                  body: "When splitting documents containing both public and confidential content, double-check that sensitive information does not inadvertently appear in pages you plan to share publicly. Always review the boundary pages of each output file before distributing.",
                },
                {
                  cls: "slp-tip-card--blue",
                  heading: "📐 Plan Your Ranges Before You Upload",
                  body: "For large documents with many sections, note your desired page ranges before opening the tool. Open the original PDF in your viewer, navigate to section boundaries, and record the page numbers. Having a clean list ready makes the splitting process take seconds.",
                },
                {
                  cls: "slp-tip-card--green",
                  heading: "📦 Use Burst + Merge for Reordering",
                  body: "If you need to radically reorganise a large PDF — pulling pages from different parts into new configurations — the most efficient workflow is: Burst all pages into individual files, then use a Merge tool to reassemble them in any order. Maximum flexibility.",
                },
              ].map((t) => (
                <div className={`slp-tip-card ${t.cls}`} key={t.heading}>
                  <h3 className="slp-tip-card__heading">{t.heading}</h3>
                  <p className="slp-tip-card__body">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════ */}
        <section className="slp-section" aria-labelledby="slp-compare-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Tool Comparison</p>
            <h2 id="slp-compare-h2" className="slp-section-title">
              Why Use an Online Splitter vs<br />Desktop Software or Adobe Acrobat?
            </h2>
            <p className="slp-section-desc">
              You have options when it comes to splitting large PDFs. Here is how they compare
              on the factors that matter most for everyday use in 2026.
            </p>

            <div className="slp-table-wrap" role="region" aria-label="PDF splitting tool comparison" tabIndex={0}>
              <table className="slp-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Scenith Free Tool</th>
                    <th scope="col">Adobe Acrobat Pro</th>
                    <th scope="col">Desktop Freeware</th>
                    <th scope="col">Basic Online Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cost", "Free forever", "~$23/month", "Free but limited", "Free, often ads"],
                    ["File size limit", <span key="fs1" className="slp-badge-yes">None</span>, <span key="fs2" className="slp-badge-yes">None</span>, "Often 50–200 MB", "Usually 100 MB"],
                    ["Custom page ranges", <span key="cr1" className="slp-badge-yes">Yes</span>, <span key="cr2" className="slp-badge-yes">Yes</span>, "Limited", <span key="cr3" className="slp-badge-no">Rarely</span>],
                    ["Burst all pages", <span key="ba1" className="slp-badge-yes">Yes</span>, <span key="ba2" className="slp-badge-yes">Yes</span>, "Some tools", "Some tools"],
                    ["No install needed", <span key="ni1" className="slp-badge-yes">Yes</span>, <span key="ni2" className="slp-badge-no">No</span>, <span key="ni3" className="slp-badge-no">No</span>, <span key="ni4" className="slp-badge-yes">Yes</span>],
                    ["Works on mobile", <span key="mo1" className="slp-badge-yes">Yes</span>, "App only", <span key="mo2" className="slp-badge-no">No</span>, "Varies"],
                    ["Output quality", "100% lossless", "100% lossless", "Varies", "Often compressed"],
                    ["Batch multiple ranges", <span key="bm1" className="slp-badge-yes">Yes</span>, <span key="bm2" className="slp-badge-yes">Yes</span>, "Rarely", <span key="bm3" className="slp-badge-no">No</span>],
                    ["No data retention", <span key="dr1" className="slp-badge-yes">Yes</span>, "Cloud stored", "Local only", "Varies"],
                    ["Sign-up required", <span key="su1" className="slp-badge-no">No</span>, <span key="su2" className="slp-badge-yes">Yes</span>, <span key="su3" className="slp-badge-no">No</span>, "Often"],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INLINE CTA #2
        ══════════════════════════════════════ */}
        <div style={{ padding: "0 0 80px" }}>
          <div className="slp-inline-cta">
            <h2 className="slp-inline-cta__title">Stop Struggling With Oversized PDFs</h2>
            <p className="slp-inline-cta__sub">
              Split any large document into perfectly sized files in under a minute.
               No software. No cost.
            </p>
            <a href={TOOL_URL} className="slp-cta-btn" rel="noopener">
              Use the Free PDF Splitter
              <span className="slp-cta-btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════
            DEEP-DIVE TECHNICAL CONTENT
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--alt" aria-labelledby="slp-knowledge-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Technical Knowledge</p>
            <h2 id="slp-knowledge-h2" className="slp-section-title">
              Understanding How PDF Splitting<br />Actually Works Under the Hood
            </h2>

            <div className="slp-rich-text" style={{ maxWidth: 820 }}>
              <p>
                For most users, splitting a PDF is a one-click operation. But understanding
                the underlying mechanics helps you make better decisions about when to split,
                how to name files, and what to expect in terms of output fidelity.
              </p>

              <h3>The PDF File Structure and Why Splitting Is Lossless</h3>
              <p>
                A PDF (Portable Document Format) file is not a flat sequence of images like a
                JPEG stack. It is a structured container of objects: fonts, images, form
                fields, annotations, metadata, and page dictionaries. Each page in a PDF is
                defined by a page object that references the resources it needs — fonts,
                color spaces, embedded images — via an internal cross-reference table.
              </p>
              <p>
                When you split a PDF, the splitter reads this object graph and creates new PDF
                containers that include only the page objects (and their referenced resources)
                corresponding to the pages you selected. The page content itself — text streams,
                vector paths, rasterized images — is copied verbatim into the output file without
                any re-encoding or re-compression. This is why splitting is inherently lossless.
                Unlike resizing an image (which requires re-sampling) or converting a video format
                (which requires re-encoding), splitting a PDF simply reorganizes existing data
                into a new container without any transformation of the underlying content.
              </p>

              <h3>What Happens to Fonts, Images, and Embedded Resources?</h3>
              <p>
                PDF fonts can be either embedded (the full font data lives inside the PDF) or
                referenced (the PDF assumes the font exists on the reader&apos;s system). Good
                quality PDFs — which is most PDFs created by modern tools — embed all fonts.
                When those pages are split into a new file, the embedded font data travels
                with them, preserving the visual appearance on any device. Images within PDFs
                are stored as compressed binary data using formats like JPEG, JBIG2, or Flate
                compression. The splitter does not decompress and re-compress images — it copies
                the raw compressed binary into the output file unchanged, guaranteeing 100% image
                fidelity with no generation loss.
              </p>
              <p>
                Form fields and annotations (comments, highlights, signatures) are also
                stored as discrete objects linked to their page. A high-quality splitter
                correctly identifies and includes all annotations associated with each
                extracted page, so your output PDFs are fully interactive and complete
                documents, not stripped-down shells.
              </p>

              <h3>Why Split File Sizes Sometimes Exceed Expectations</h3>
              <p>
                Users sometimes expect that splitting a 100 MB PDF into 10 parts yields
                ten exactly 10 MB files. In practice, the total size of the output files
                can slightly exceed the original for two reasons: first, shared resources
                such as embedded fonts used across multiple pages get included in each output
                file that uses them, rather than being stored once globally. Second, each PDF
                file carries a small amount of structural overhead — header, cross-reference
                table, trailer — that adds a few kilobytes per file. For most use cases,
                this overhead is negligible. If file size compression is needed after
                splitting, running each output through a PDF compressor is the recommended
                next step.
              </p>

              <h3>Handling Complex PDF Features: Signatures, Layers, and Form Fields</h3>
              <p>
                Interactive form fields (fillable text boxes, checkboxes, dropdowns) are
                preserved when their pages are extracted — the form remains fully interactive
                in the output PDF. Digital signatures, however, are tied to the entire
                document byte range; splitting a digitally signed PDF will invalidate the
                cryptographic signature in the output files. This is expected and unavoidable
                behavior for any PDF splitter. If signature validity is critical, keep the
                original signed file and use split copies only for reference distribution.
              </p>
              <p>
                PDF layers (Optional Content Groups), common in engineering drawings and
                print-ready layouts, are preserved in split output files. Each split PDF
                retains the full layer structure present in the extracted pages, keeping
                all layer visibility settings and layer metadata intact.
              </p>

              <h3>Large PDFs and Performance: What the Tool Handles Server-Side</h3>
              <p>
                Processing very large PDFs — above 100 MB, or above 1,000 pages — in a web
                browser requires careful memory management. Scenith&apos;s splitter processes
                files server-side in an isolated temporary container, meaning your local
                machine&apos;s RAM is not the bottleneck. The file is uploaded over SSL,
                split in a temporary environment, and the output files are streamed back
                to your browser. Temporary files are deleted from the server immediately
                after your download session ends, ensuring both performance and privacy.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section className="slp-section" aria-labelledby="slp-faq-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Frequently Asked Questions</p>
            <h2 id="slp-faq-h2" className="slp-section-title">
              Everything You Need to Know About<br />Splitting Large PDF Files
            </h2>

            <div className="slp-faq-list">
              {[
                {
                  q: "How do I split a large PDF into multiple files for free online?",
                  a: "Visit Scenith's PDF splitter tool (linked above), upload your large PDF, select either 'Split All Pages' or 'Custom Page Ranges', configure your ranges if needed, and click Process. The tool is completely free, requires no account, and your files are ready in seconds. There are no hidden fees, no watermarks, and no post-processing subscriptions required.",
                },
                {
                  q: "Is there a maximum file size limit for splitting large PDFs?",
                  a: "No. Scenith's PDF splitter has no maximum file size or page count restriction. You can upload and split PDFs of any size — whether it is a 5-page contract or a 5,000-page engineering specification. Processing happens server-side, so your local device performance has no impact on whether the split succeeds.",
                },
                {
                  q: "Will splitting a large PDF reduce the quality of images or text?",
                  a: "Absolutely not. PDF splitting is a structurally lossless operation. The content of each page — text, vector graphics, rasterized images, embedded fonts — is extracted byte-for-byte from the original without any re-encoding. Every output file is visually and functionally identical to the corresponding pages in the source document.",
                },
                {
                  q: "Can I split a scanned PDF into multiple files?",
                  a: "Yes. Scanned PDFs are handled exactly the same way as text-based PDFs. The pages are individual compressed image objects within the PDF container. Splitting extracts them cleanly without decompressing or resampling the images, preserving the full scan resolution in every output file.",
                },
                {
                  q: "What is the best way to split a large PDF by chapters or sections?",
                  a: "Open your original PDF in a viewer first and note the page numbers where each chapter or section begins and ends. Then use Custom Page Ranges mode in the splitter — define one range per chapter (e.g., Chapter 1: pages 1–24, Chapter 2: pages 25–61). Each range produces a separate output PDF. Rename the downloaded files to reflect the chapter titles for clarity.",
                },
                {
                  q: "Does splitting a PDF remove interactive elements like hyperlinks and bookmarks?",
                  a: "Hyperlinks and annotations within the extracted pages are preserved. Internal bookmarks that reference pages within the extracted range are also retained. Bookmarks pointing to pages outside the extracted range will become dead links, as those pages no longer exist in the split file — this is expected behavior for any PDF splitter.",
                },
                {
                  q: "How do I split a large PDF into equal parts?",
                  a: "If your PDF has 120 pages and you want four equal parts, divide by four: 1–30, 31–60, 61–90, 91–120. Use Custom Page Ranges and enter these four ranges. If the page count does not divide evenly, you can decide whether to round up or down for the final segment based on your preference.",
                },
                {
                  q: "Is it safe to upload confidential PDFs to an online splitter?",
                  a: "Scenith uses 256-bit SSL encryption for all file transfers. Files are processed in isolated, temporary environments and are automatically deleted from the server immediately after your session ends — they are never stored, indexed, or accessed by anyone. For highly sensitive documents, always verify the tool's privacy policy before uploading.",
                },
                {
                  q: "Can I split a PDF on my phone or tablet?",
                  a: "Yes. Scenith's PDF splitter is fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. Upload from your device's file system or directly from cloud storage apps. Output files download to your default Downloads folder and are accessible immediately.",
                },
                {
                  q: "What file format are the outputs when I split all pages?",
                  a: "When you choose 'Split All Pages', the output is a ZIP archive containing individual PDF files named sequentially (page-1.pdf, page-2.pdf, etc.). When you use Custom Page Ranges, each range downloads as a separate PDF file. All outputs are standard PDF format, compatible with every PDF reader including Adobe Acrobat, Preview, Edge, Chrome, and all mobile PDF apps.",
                },
                {
                  q: "Can I use this tool to divide a PDF into two files?",
                  a: "Absolutely. Just add two ranges in Custom Page Ranges mode — for example, pages 1–50 and pages 51–100 for a 100-page document. You will receive two separate PDF files, each containing exactly the pages you specified. This is the most common use case for splitting large PDFs.",
                },
                {
                  q: "How is this different from extracting pages in Adobe Acrobat?",
                  a: "Adobe Acrobat's page extraction achieves the same result but requires an active Acrobat Pro subscription (~$23/month) and a desktop installation. Scenith's free tool delivers identical output quality — including form fields, annotations, and embedded fonts — directly in any browser, on any device, with no subscription and no software to install.",
                },
              ].map(({ q, a }) => (
                <div className="slp-faq-item" key={q}>
                  <details>
                    <summary>{q}</summary>
                    <div className="slp-faq-body">{a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            RELATED TOOLS
        ══════════════════════════════════════ */}
        <section className="slp-section slp-section--alt" aria-labelledby="slp-related-h2">
          <div className="slp-container">
            <div className="slp-divider" aria-hidden="true" />
            <p className="slp-section-label">Complete Your PDF Workflow</p>
            <h2 id="slp-related-h2" className="slp-section-title">
              Other Free PDF Tools You Might Need<br />After Splitting
            </h2>

            <div className="slp-why-grid">
              {[
                {
                  icon: "🔀",
                  title: "Merge PDFs",
                  body: "Combine multiple PDF files back into a single document. Essential for reconstructing split files, compiling reports from multiple sources, or assembling final submission packages from separately edited sections.",
                  accent: "#2563eb",
                },
                {
                  icon: "🔒",
                  title: "Protect PDF",
                  body: "Add password protection to individual split files before distributing them to different recipients. Ensures that each split section is only accessible to its intended audience with role-appropriate encryption.",
                  accent: "#dc2626",
                },
                {
                  icon: "📉",
                  title: "Compress PDF",
                  body: "After splitting, compress image-heavy output files to reduce their size for email or upload. Scenith's compressor reduces file size while maintaining visual quality within acceptable thresholds.",
                  accent: "#16a34a",
                },
                {
                  icon: "🔄",
                  title: "Convert PDF to Word",
                  body: "Once you have split out the specific section you need to edit, convert it to a Word document for revision. Far more efficient than converting an entire large PDF when you only need to edit three chapters.",
                  accent: "#7c3aed",
                },
                {
                  icon: "🔓",
                  title: "Unlock PDF",
                  body: "Remove password protection from a PDF before splitting. If your large document is password-protected, you will need to unlock it first — the splitter then works normally on the unlocked file.",
                  accent: "#d97706",
                },
                {
                  icon: "🔃",
                  title: "Rotate PDF Pages",
                  body: "Correct page orientation in your split output files. If certain pages in your extracted range are rotated incorrectly (common in scanned documents), fix them before sharing.",
                  accent: "#0369a1",
                },
              ].map((c) => (
                <article
                  className="slp-why-card"
                  key={c.title}
                  style={{ "--card-accent": c.accent } as React.CSSProperties}
                >
                  <span className="slp-why-card__icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="slp-why-card__title">{c.title}</h3>
                  <p className="slp-why-card__body">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════ */}
        <section className="slp-final-cta" aria-labelledby="slp-final-h2">
          <div className="slp-final-cta__inner">
            <p className="slp-final-cta__label">Free · Instant </p>
            <h2 id="slp-final-h2" className="slp-final-cta__title">
              Split Your Large PDF into<br />Multiple Files Right Now
            </h2>
            <p className="slp-final-cta__sub">
              Join thousands of professionals, students, and teams who use Scenith
              to manage large PDF documents efficiently — at zero cost, in seconds,
              with complete privacy.
            </p>
            <div className="slp-final-cta__features" role="list">
              {[
                "No file size limit",
                "100% free forever",
                "Zero quality loss",
                "Works on any device",
                "Secure & private",
              ].map((f) => (
                <span className="slp-final-cta__feat" key={f} role="listitem">✓ {f}</span>
              ))}
            </div>
            <div className="slp-cta-wrap">
              <a href={TOOL_URL} className="slp-cta-btn" rel="noopener">
                Open Free PDF Splitter
                <span className="slp-cta-btn__arrow" aria-hidden="true">→</span>
              </a>
              <span className="slp-cta-trust" style={{ color: "rgba(255,255,255,.45)" }}>
                Files auto-deleted after session · No watermarks · No hidden fees
              </span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}