import type { Metadata } from "next";
import "@/styles/tools/SplitPdfOnline.css";

export const metadata: Metadata = {
  title: "Split PDF Online Free — Extract Pages Without Software | SCENITH",
  description:
    "Split PDF files online without installing software. Extract specific pages, define custom page ranges, or separate every page into individual files. Free, secure, instant download.",
  openGraph: {
    title: "Split PDF Online Free — No Software| SCENITH",
    description:
      "The easiest way to split PDF files in a browser. Extract pages, define custom ranges, or separate all pages instantly. 100% free, no watermarks, works on all devices.",
    type: "website",
    url: "https://scenith.in/tools/pdf-tools/split-pdf-online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Split PDF Online Free — Extract Pages Without Software",
    description:
      "Split any PDF into multiple files instantly. Custom page ranges, no watermarks. Works on Windows, Mac, iOS, Android.",
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.in/tools/pdf-tools/split-pdf-online",
    languages: {
      "en-US": "https://scenith.in/tools/pdf-tools/split-pdf-online",
    },
  },
  other: {
    "article:modified_time": "2025-02-15T00:00:00Z",
  },
};

const CTA_URL =
  "https://scenith.in/tools/pdf-tools/split-pdf?utm_source=split-pdf-online&utm_medium=landing_page&utm_campaign=pdf_tools_seo";

export default function SplitPdfOnlinePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/pdf-tools/split-pdf-online#webpage",
        url: "https://scenith.in/tools/pdf-tools/split-pdf-online",
        name: "Split PDF Online Free — Extract Pages Without Software | SCENITH",
        description:
          "Split PDF files online without installing software. Extract specific pages, define custom ranges, or separate all pages. Free and instant.",
        isPartOf: { "@id": "https://scenith.in/#website" },
        breadcrumb: {
          "@id": "https://scenith.in/tools/pdf-tools/split-pdf-online#breadcrumb",
        },
        inLanguage: "en-US",
        dateModified: "2025-02-15T00:00:00Z",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://scenith.in/tools/pdf-tools/split-pdf-online#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://scenith.in/tools/pdf-tools" },
          { "@type": "ListItem", position: 3, name: "Split PDF Online", item: "https://scenith.in/tools/pdf-tools/split-pdf-online" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://scenith.in/tools/pdf-tools/split-pdf-online#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I split a PDF online without installing any software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. SCENITH's PDF splitter runs entirely in your browser. No download, no installation, no admin rights needed. It works on Windows, Mac, Linux, iOS, and Android.",
            },
          },
          {
            "@type": "Question",
            name: "How do I extract specific pages from a PDF online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Upload your PDF, choose Custom Page Ranges, define the page numbers you want to extract (for example pages 3 to 7), and click Split. The extracted pages download as a separate PDF file instantly.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a page limit when splitting PDFs online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. You can split PDFs with any number of pages — from a 5-page document to a 5,000-page document. There is no enforced page count or file size limit.",
            },
          },
          {
            "@type": "Question",
            name: "Will splitting a PDF reduce its quality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Never. PDF splitting is a lossless operation. Every split file preserves 100% of the original quality including searchable text, full image resolution, embedded fonts, and all interactive elements.",
            },
          },
          {
            "@type": "Question",
            name: "What format do I receive the split files in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When splitting all pages, you receive a ZIP file containing individual PDF files named page-1.pdf, page-2.pdf, and so on. When using custom ranges, each range downloads as a separate PDF file.",
            },
          },
          {
            "@type": "Question",
            name: "Are my PDF files secure when I upload them to split?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All uploads use 256-bit SSL/TLS encryption. Files are processed in isolated secure containers and permanently deleted within 60 minutes. SCENITH never stores, reads, or shares your documents.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://scenith.in/tools/pdf-tools/split-pdf-online#howto",
        name: "How to Split PDF Files Online Without Software",
        description:
          "Step-by-step guide to extracting pages and splitting PDF documents using SCENITH's free browser-based tool.",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Upload Your PDF",
            text: "Click the upload area or drag and drop your PDF file into the tool. The page count is detected automatically.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose Split Method",
            text: "Select Split All Pages to separate every page into individual files, or choose Custom Page Ranges to define exactly which pages go into which output file.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Define Ranges and Download",
            text: "For custom splits, enter the page range for each output file. Click Split PDF and download your files instantly — no email, no waiting.",
          },
        ],
      },
    ],
  };

  return (
    <div className="spo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="spo-breadcrumb">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="spo-breadcrumb-sep">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/pdf-tools" itemProp="item"><span itemProp="name">PDF Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="spo-breadcrumb-sep">›</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Split PDF Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="spo-hero" aria-labelledby="spo-hero-title">
        <div className="spo-hero-inner">
          <h1 id="spo-hero-title">
            Split PDF Online — Extract Pages &amp; Divide Documents Without Installing Anything
          </h1>
          <p className="spo-hero-sub">
            Extract individual pages, define custom page ranges, or separate an entire PDF into
            single-page files — all from any browser, on any device. No download, no subscription,
            no watermarks, ever.
          </p>
          <a href={CTA_URL} className="spo-cta-primary" aria-label="Open the free PDF splitter tool">
            ✂️ Split My PDF Now — It's Free
          </a>
          <ul className="spo-trust-bar" aria-label="Key trust signals">
            <li>✅ No page or file size limits</li>
            <li>✅ Custom page range control</li>
            <li>✅ 100% lossless quality</li>
            <li>✅ Files deleted in 60 min</li>
            <li>✅ Works on all devices</li>
          </ul>
        </div>
      </section>

      {/* ── Two Split Methods ── */}
      <section className="spo-section spo-methods" aria-labelledby="methods-title">
        <div className="spo-container">
          <h2 id="methods-title">Two Ways to Split a PDF Online — Which One Do You Need?</h2>
          <p className="spo-section-lead">
            Most PDF splitters give you one option. SCENITH gives you two distinct methods so you
            can match the tool to your exact situation rather than working around its limitations.
          </p>
          <div className="spo-methods-grid">
            <article className="spo-method-card spo-method-card--purple">
              <div className="spo-method-badge">Method 1</div>
              <h3>Split All Pages — Every Page Becomes Its Own File</h3>
              <p>
                Upload your PDF and every single page is extracted automatically into its own
                individual PDF file. All files are packaged into a single ZIP download so you get
                everything in one click.
              </p>
              <h4>Best for:</h4>
              <ul>
                <li>Distributing pages to different team members or departments</li>
                <li>Converting scanned document batches into individual page files</li>
                <li>Creating per-page study materials or flashcards</li>
                <li>Extracting signature pages or specific form pages</li>
                <li>Archiving each page separately for document management systems</li>
              </ul>
              <div className="spo-method-output">
                <strong>Output:</strong> ZIP file containing page-1.pdf, page-2.pdf, page-3.pdf…
              </div>
            </article>

            <article className="spo-method-card spo-method-card--blue">
              <div className="spo-method-badge">Method 2</div>
              <h3>Custom Page Ranges — You Decide Exactly What Goes Where</h3>
              <p>
                Define precise page ranges to create targeted output documents. Add as many ranges
                as you need in a single operation — each range becomes its own PDF file downloaded
                directly, no ZIP required.
              </p>
              <h4>Best for:</h4>
              <ul>
                <li>Extracting a specific chapter from a book or manual</li>
                <li>Separating confidential sections from a document before sharing</li>
                <li>Dividing a report by department, quarter, or topic</li>
                <li>Splitting a large file into smaller parts for email attachment limits</li>
                <li>Creating multiple targeted handouts from one source document</li>
              </ul>
              <div className="spo-method-output">
                <strong>Output:</strong> Separate PDF files — one per defined range
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── How To ── */}
      <section
        className="spo-section spo-howto"
        id="how-to-split-pdf-online"
        aria-labelledby="howto-title"
      >
        <div className="spo-container">
          <h2 id="howto-title">How to Split PDF Files Online in 3 Steps</h2>
          <p className="spo-section-lead">
            The entire process — from upload to download — takes under a minute regardless of which
            split method you choose.
          </p>
          <div className="spo-steps">
            <article className="spo-step">
              <div className="spo-step-num" aria-label="Step 1">1</div>
              <div className="spo-step-body">
                <h3>Upload Your PDF File</h3>
                <p>
                  Click the upload area or drag your PDF directly into the browser window. The tool
                  reads your document immediately and displays the total page count — verify this
                  matches your file before proceeding. You can upload from your hard drive, USB
                  drive, or any cloud storage folder you have open on your desktop.
                </p>
                <div className="spo-step-tip">
                  <strong>💡 Note:</strong> Password-protected PDFs need to be unlocked first.
                  Use our free PDF Unlock tool, then return here to split the unlocked version.
                </div>
              </div>
            </article>

            <article className="spo-step">
              <div className="spo-step-num" aria-label="Step 2">2</div>
              <div className="spo-step-body">
                <h3>Choose Your Split Method and Define Ranges</h3>
                <p>
                  Select <strong>Split All Pages</strong> for automatic single-page extraction with
                  no further input needed. Or select <strong>Custom Page Ranges</strong> to define
                  exactly which pages go into each output file. For custom ranges, use the
                  interactive interface to enter a start page and end page for each split, then
                  click <em>Add Another Split</em> to define as many output files as you need in
                  one operation.
                </p>
                <div className="spo-step-tip">
                  <strong>💡 Example:</strong> A 90-page annual report → Range 1: pages 1–20
                  (Executive Summary), Range 2: pages 21–55 (Financial Data), Range 3: pages
                  56–90 (Appendices). Three output PDFs, one click.
                </div>
              </div>
            </article>

            <article className="spo-step">
              <div className="spo-step-num" aria-label="Step 3">3</div>
              <div className="spo-step-body">
                <h3>Split and Download Your Files</h3>
                <p>
                  Click <strong>Split PDF</strong> and processing completes in seconds. Split All
                  Pages delivers a single ZIP file containing individually named PDFs. Custom Ranges
                  delivers each range as a separate PDF file. Every output file preserves the
                  original text searchability, full image resolution, embedded fonts, active links,
                  and all form fields from the source pages.
                </p>
                <div className="spo-step-tip">
                  <strong>💡 Verify your output:</strong> Open one of the split files and press
                  Ctrl+F to confirm text is still searchable — this confirms the split was truly
                  lossless, not a re-scanned image conversion.
                </div>
              </div>
            </article>
          </div>
          <div className="spo-cta-block">
            <a href={CTA_URL} className="spo-cta-primary" aria-label="Open the free PDF splitter tool">
              ⚡ Start Splitting PDFs — Free &amp; Instant
            </a>
          </div>
        </div>
      </section>

      {/* ── When Do You Need to Split a PDF ── */}
      <section className="spo-section spo-usecases" aria-labelledby="usecases-title">
        <div className="spo-container">
          <h2 id="usecases-title">When Do You Actually Need to Split a PDF?</h2>
          <p className="spo-section-lead">
            Splitting a PDF is one of those tasks that sounds simple but comes up in surprisingly
            varied situations. Here are the most common real-world scenarios.
          </p>
          <div className="spo-usecase-grid">
            <article className="spo-usecase-card">
              <h3>📎 Email Attachment Size Limits</h3>
              <p>
                Gmail, Outlook, and most corporate email servers enforce a 10–25 MB attachment
                limit. A 60-page annual report with charts can easily exceed this. Split it into
                two or three smaller PDFs and send them across multiple emails without losing any
                content or formatting.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>🔒 Confidentiality &amp; Selective Sharing</h3>
              <p>
                A contract may contain public terms alongside confidential pricing schedules or
                internal notes. Extract only the pages the recipient needs to see, share that
                targeted PDF, and keep the sensitive pages in a separate locked file.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>📚 Chapter &amp; Section Extraction</h3>
              <p>
                Students and researchers frequently need specific chapters from a textbook, specific
                sections from a regulation document, or specific exhibits from a legal filing.
                Extract exactly the pages you need rather than sharing or printing the entire
                document.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>👥 Team Collaboration &amp; Parallel Review</h3>
              <p>
                When multiple people need to review different sections of a long document
                simultaneously, splitting by section eliminates version conflicts. Each reviewer
                gets their section as a standalone PDF, annotates it, and returns it — faster
                than fighting over one shared file.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>🗃️ Document Management &amp; Archiving</h3>
              <p>
                Many document management systems (DMS) work better with smaller, topic-specific
                files than with large multi-section PDFs. Split scanned batches into individual
                forms, invoices, or records before uploading to make retrieval and indexing far
                more efficient.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>⚖️ Legal Filings &amp; Court Exhibits</h3>
              <p>
                Court filing portals frequently impose per-document page limits and require
                exhibits to be filed as separate attachments. Split your master document into
                properly formatted individual exhibits before uploading to avoid rejected filings
                and last-minute scrambles.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>🎓 Creating Study Materials</h3>
              <p>
                Teachers who compile resources from multiple PDFs often need to redistribute them
                as individual handouts. Split a comprehensive course packet into per-topic PDFs so
                students receive only what is relevant to each lesson or assignment.
              </p>
            </article>
            <article className="spo-usecase-card">
              <h3>🔄 Preparing Files for Re-Merging</h3>
              <p>
                Sometimes you need to split a document first, reorder specific pages, add content
                to individual sections, and then merge everything back together. Our PDF Merge
                tool pairs directly with the splitter for this kind of surgical document
                restructuring workflow.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── What Is Preserved ── */}
      <section className="spo-section spo-quality" aria-labelledby="quality-title">
        <div className="spo-container">
          <h2 id="quality-title">
            What Is Preserved in Every Split PDF File?
          </h2>
          <p className="spo-section-lead">
            The most important thing to understand about PDF splitting is that it is a structural
            operation, not a conversion. Pages are extracted, not re-rendered. Here is what that
            means for your documents.
          </p>
          <div className="spo-quality-grid">
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Searchable Text Layers</h3>
                <p>
                  Every word on every extracted page remains fully searchable. Ctrl+F works
                  identically in the split file as it did in the original.
                </p>
              </div>
            </div>
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Full Image Resolution</h3>
                <p>
                  Photos, charts, diagrams, and scanned content are not re-compressed at any
                  point in the splitting process. Output files are byte-identical copies of the
                  relevant pages.
                </p>
              </div>
            </div>
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Embedded Fonts</h3>
                <p>
                  Custom fonts and brand typefaces embedded in the original PDF are preserved in
                  every split output. The document renders identically on any device regardless of
                  locally installed fonts.
                </p>
              </div>
            </div>
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Clickable Hyperlinks</h3>
                <p>
                  Internal page links and external URLs on extracted pages remain active and
                  functional. Note that links pointing to pages not included in a split range will
                  no longer resolve — this is expected behavior.
                </p>
              </div>
            </div>
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Form Fields &amp; Annotations</h3>
                <p>
                  Fillable form fields, checkboxes, text annotations, and digital signature fields
                  on extracted pages are fully preserved in the output files.
                </p>
              </div>
            </div>
            <div className="spo-quality-item">
              <span className="spo-quality-check">✅</span>
              <div>
                <h3>Page Size &amp; Orientation</h3>
                <p>
                  A4, Letter, Legal, landscape, portrait — each extracted page retains its original
                  dimensions exactly. Mixed-orientation documents split correctly without
                  normalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="spo-section spo-security" aria-labelledby="security-title">
        <div className="spo-container">
          <h2 id="security-title">
            Is It Safe to Split Sensitive PDFs Online?
          </h2>
          <p className="spo-section-lead">
            Splitting often involves documents you would rather not expose — contracts, medical
            records, financial statements. Here is a plain-language account of every security
            measure protecting your files.
          </p>
          <div className="spo-security-grid">
            <div className="spo-security-card">
              <div className="spo-security-icon">🔒</div>
              <h3>256-bit SSL/TLS Encryption</h3>
              <p>
                Every file transferred between your browser and our processing servers is protected
                by the same encryption standard used by major banks. No one on the same network
                can intercept your documents in transit.
              </p>
            </div>
            <div className="spo-security-card">
              <div className="spo-security-icon">📦</div>
              <h3>Isolated Processing Containers</h3>
              <p>
                Your files are processed inside ephemeral containers created exclusively for your
                session. These containers are destroyed immediately after processing. No other
                user's job can ever access your files.
              </p>
            </div>
            <div className="spo-security-card">
              <div className="spo-security-icon">🗑️</div>
              <h3>Auto-Delete Within 60 Minutes</h3>
              <p>
                Both your uploaded file and all split output files are permanently and
                irrecoverably deleted from our servers within 60 minutes. No manual action
                required on your part.
              </p>
            </div>
            <div className="spo-security-card">
              <div className="spo-security-icon">🚫</div>
              <h3>Zero Data Retention</h3>
              <p>
                SCENITH does not store, log, analyze, sell, or share your document content for
                any purpose whatsoever. Your files exist on our infrastructure only for the
                duration of processing.
              </p>
            </div>
          </div>
          <div className="spo-security-note">
            <p>
              <strong>For attorney-client privileged or HIPAA-regulated documents:</strong> Verify
              your organization's cloud data handling policies before using any browser-based tool,
              including this one. For most business and personal use cases the security
              measures above are more robust than typical office software defaults.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="spo-section spo-comparison" aria-labelledby="comparison-title">
        <div className="spo-container">
          <h2 id="comparison-title">
            Online PDF Splitter vs Desktop Software: Side-by-Side
          </h2>
          <p className="spo-section-lead">
            Is the browser tool actually better than paid desktop software for splitting PDFs?
            Here is an honest, head-to-head comparison.
          </p>
          <div className="spo-comparison-table-wrap">
            <table className="spo-comparison-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Online Splitter (SCENITH)</th>
                  <th>Desktop Software (Adobe Acrobat)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>✅ Completely free</td>
                  <td>❌ $239.88/year</td>
                </tr>
                <tr>
                  <td><strong>Setup time</strong></td>
                  <td>✅ Zero — open a browser tab</td>
                  <td>❌ 15–30 min installation</td>
                </tr>
                <tr>
                  <td><strong>Device support</strong></td>
                  <td>✅ All devices via browser</td>
                  <td>⚠️ Windows &amp; Mac only</td>
                </tr>
                <tr>
                  <td><strong>Works offline</strong></td>
                  <td>❌ Internet required</td>
                  <td>✅ Fully offline</td>
                </tr>
                <tr>
                  <td><strong>Split all pages at once</strong></td>
                  <td>✅ One-click ZIP download</td>
                  <td>✅ Supported</td>
                </tr>
                <tr>
                  <td><strong>Custom page ranges</strong></td>
                  <td>✅ Multiple ranges, one operation</td>
                  <td>✅ Supported</td>
                </tr>
                <tr>
                  <td><strong>Output quality</strong></td>
                  <td>✅ 100% lossless</td>
                  <td>✅ Lossless</td>
                </tr>
                <tr>
                  <td><strong>Watermarks on output</strong></td>
                  <td>✅ Never</td>
                  <td>✅ Never</td>
                </tr>
                <tr>
                  <td><strong>Software updates</strong></td>
                  <td>✅ Automatic, silent</td>
                  <td>❌ Manual, every few weeks</td>
                </tr>
                <tr>
                  <td><strong>Advanced PDF editing</strong></td>
                  <td>⚠️ Separate tools per task</td>
                  <td>✅ Full all-in-one suite</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="spo-comparison-summary">
            <strong>Verdict:</strong> For splitting PDFs — one of the three most common PDF tasks
            — a browser-based tool matches or beats desktop software on every practical dimension
            except offline use. Save the paid subscription for tasks that genuinely require
            advanced editing capabilities.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="spo-section spo-faq" id="faq" aria-labelledby="faq-title">
        <div className="spo-container">
          <h2 id="faq-title">
            Frequently Asked Questions — Splitting PDFs Online
          </h2>
          <div className="spo-faq-grid">
            <article className="spo-faq-item">
              <h3>Can I split a PDF on my phone without downloading an app?</h3>
              <p>
                Yes. Open Chrome on Android or Safari on iPhone, navigate to SCENITH's PDF splitter,
                and use the file picker to select a PDF from your phone storage or a cloud drive.
                The entire split process completes in the browser — no app download required.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>What happens to the pages I do not include in a range?</h3>
              <p>
                They are simply not included in that particular output file. Your original uploaded
                PDF is never modified. If you need pages that were excluded, go back and define a
                new range that includes them, or run a second split operation covering those pages.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>Can I split a scanned PDF where pages are images?</h3>
              <p>
                Yes. Scanned PDFs split identically to text-based PDFs because splitting operates
                on the page structure, not on the content type. Each extracted page — whether it
                contains searchable text or a scanned image — becomes its own standalone PDF.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>Can I split the same PDF into more than two output files?</h3>
              <p>
                Absolutely. Custom Ranges lets you add as many range definitions as you need in a
                single operation. Define ranges for five, ten, or twenty output files at once —
                all of them are processed and made available for download in one go.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>What if my page ranges overlap or leave gaps?</h3>
              <p>
                The tool validates your ranges in real time. Overlapping ranges (where the same
                page would appear in two output files) and gaps (where pages are not assigned to
                any range) are flagged before you submit. You can correct them without losing
                your other range definitions.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>Does splitting a PDF break its bookmarks?</h3>
              <p>
                Bookmarks in the output files will only resolve correctly if the page they point to
                is included in that specific split range. Bookmarks pointing to pages outside the
                range will still appear in the file but will not navigate anywhere. For most use
                cases this is acceptable; for complex navigation-heavy documents, test a small
                split first.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>How do I recombine split PDFs back into one file?</h3>
              <p>
                Use our free PDF Merge tool. Because splitting is lossless, merging all split
                files back in the original order produces a document byte-equivalent to the
                source — perfect text search, full image quality, and all formatting intact.
              </p>
            </article>
            <article className="spo-faq-item">
              <h3>Will the split files open correctly in all PDF viewers?</h3>
              <p>
                Yes. All output files conform to the standard PDF specification and open without
                warnings or compatibility errors in Adobe Acrobat, Adobe Reader, macOS Preview,
                Foxit, Chrome's built-in viewer, and every other major PDF viewer.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="spo-section spo-final-cta" aria-labelledby="final-cta-title">
        <div className="spo-container">
          <div className="spo-final-cta-card">
            <span className="spo-final-cta-emoji" aria-hidden="true">✂️</span>
            <h2 id="final-cta-title">Ready to Split Your PDF Right Now?</h2>
            <p>
              No account. No software. No waiting. Upload your PDF, define your ranges, and
              download your split files in under a minute.
            </p>
            
            <a  href={CTA_URL}
              className="spo-cta-primary spo-cta-large"
              aria-label="Open the free online PDF splitter"
            >
              ✂️ Split My PDF — 100% Free
            </a>
            <ul className="spo-final-trust" aria-label="Final trust signals">
              <li>No watermarks</li>
              <li>Works on all devices</li>
              <li>Files deleted automatically</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Tools ── */}
      <section className="spo-section spo-related" aria-labelledby="related-title">
        <div className="spo-container">
          <h2 id="related-title">Other Free PDF Tools You Might Need</h2>
          <div className="spo-related-grid">
            
            <a  href="https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=split-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="spo-related-card"
            >
              <span className="spo-related-icon" aria-hidden="true">🔗</span>
              <div>
                <h3>Merge PDF</h3>
                <p>Recombine split files or join multiple PDFs into one organized document.</p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/compress-pdf?utm_source=split-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="spo-related-card"
            >
              <span className="spo-related-icon" aria-hidden="true">🗜️</span>
              <div>
                <h3>Compress PDF</h3>
                <p>Reduce split file sizes further for email attachments or cloud uploads.</p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/rotate-pdf?utm_source=split-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="spo-related-card"
            >
              <span className="spo-related-icon" aria-hidden="true">🔄</span>
              <div>
                <h3>Rotate PDF</h3>
                <p>Fix page orientations in split output files before sharing or printing.</p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/unlock-pdf?utm_source=split-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="spo-related-card"
            >
              <span className="spo-related-icon" aria-hidden="true">🔓</span>
              <div>
                <h3>Unlock PDF</h3>
                <p>Remove password protection before splitting a locked PDF document.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}