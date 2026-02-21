import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/tools/MergePDFOnline.css";

export const metadata: Metadata = {
  title: "Merge PDF Online Free — Combine PDF Files Without Software | SCENITH",
  description:
    "Merge PDF files online without installing any software. Combine unlimited PDFs into one document in seconds. Free, secure, no watermarks — works on all devices.",
  openGraph: {
    title: "Merge PDF Online Free — No Software| SCENITH",
    description:
      "The easiest way to combine PDF files online. No software installation, no account needed. Merge unlimited PDFs instantly with drag-and-drop page control.",
    type: "website",
    url: "https://scenith.in/tools/pdf-tools/merge-pdf-online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Online Free — No Software Needed",
    description:
      "Combine multiple PDFs into one file instantly. 100% free, no watermarks. Works on Windows, Mac, iOS, Android.",
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.in/tools/pdf-tools/merge-pdf-online",
    languages: {
      "en-US": "https://scenith.in/tools/pdf-tools/merge-pdf-online",
    },
  },
  other: {
    "article:modified_time": "2025-02-15T00:00:00Z",
  },
};

const CTA_URL =
  "https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge-pdf-online&utm_medium=landing_page&utm_campaign=pdf_tools_seo";

export default function MergePdfOnlinePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/pdf-tools/merge-pdf-online#webpage",
        url: "https://scenith.in/tools/pdf-tools/merge-pdf-online",
        name: "Merge PDF Online Free — Combine PDF Files Without Software | SCENITH",
        description:
          "Merge PDF files online without installing any software. Combine unlimited PDFs into one document in seconds.",
        isPartOf: {
          "@id": "https://scenith.in/#website",
        },
        breadcrumb: {
          "@id":
            "https://scenith.in/tools/pdf-tools/merge-pdf-online#breadcrumb",
        },
        inLanguage: "en-US",
        dateModified: "2025-02-15T00:00:00Z",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://scenith.in/tools/pdf-tools/merge-pdf-online#breadcrumb",
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
            name: "Merge PDF Online",
            item: "https://scenith.in/tools/pdf-tools/merge-pdf-online",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://scenith.in/tools/pdf-tools/merge-pdf-online#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I merge PDF files online without installing software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. SCENITH's PDF merger works entirely in your browser. No software download or installation is required. It works on Windows, Mac, Linux, iOS, and Android.",
            },
          },
          {
            "@type": "Question",
            name: "Is it free to merge PDF files online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Completely free with no hidden costs, no subscriptions, and no credit card required. You can merge unlimited PDFs at no charge.",
            },
          },
          {
            "@type": "Question",
            name: "How many PDF files can I combine at once?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no limit. You can merge 2 files or 200 files in a single operation. The tool handles any volume without extra charges.",
            },
          },
          {
            "@type": "Question",
            name: "Will the merged PDF have watermarks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Never. Every merged PDF you download is completely clean — no watermarks, no branding, no hidden attribution text added by SCENITH.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to merge PDFs online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most merges complete in 5 to 30 seconds depending on file size. Even large 500-page documents typically merge in under a minute.",
            },
          },
          {
            "@type": "Question",
            name: "Are my PDF files safe when I upload them?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All uploaded files are transferred with 256-bit SSL/TLS encryption, processed in isolated secure containers, and permanently deleted within 60 minutes. SCENITH never stores, reads, or shares your documents.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://scenith.in/tools/pdf-tools/merge-pdf-online#howto",
        name: "How to Merge PDF Files Online Without Software",
        description:
          "Step-by-step guide to combining multiple PDF files into one document using SCENITH's free browser-based tool.",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Upload Your PDF Files",
            text: "Click the upload area or drag and drop your PDF files directly into the tool. Select as many files as you need — there is no limit.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Arrange the Order",
            text: "Drag and drop documents or individual pages into your preferred sequence. Remove any pages you do not need.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Merge and Download",
            text: "Click Merge PDFs to combine all files. Your finished document downloads instantly as a clean, watermark-free PDF.",
          },
        ],
      },
    ],
  };

  return (
    <div className="merge-online-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          style={{
            display: "flex",
            gap: "0.5rem",
            listStyle: "none",
            padding: "1rem 2rem",
            margin: 0,
            flexWrap: "wrap",
          }}
        >
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
          <li style={{ color: "#666" }}>›</li>
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
          <li style={{ color: "#666" }}>›</li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name">Merge PDF Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="mpo-hero" aria-labelledby="mpo-hero-title">
        <div className="mpo-hero-inner">
          <h1 id="mpo-hero-title">
            Merge PDF Online — Combine PDF Files Without Installing Anything
          </h1>
          <p className="mpo-hero-sub">
            The fastest way to join multiple PDFs into one polished document.
            Works in any browser on Windows, Mac, iPhone, or Android. Zero
            downloads, zero cost, zero watermarks — every single time.
          </p>
          
        <a href={CTA_URL}
            className="mpo-cta-primary"
            aria-label="Open the free PDF merger tool"
          >
            🚀 Merge My PDFs Now — It's Free
          </a>
          <ul className="mpo-trust-bar" aria-label="Key trust signals">
            <li>✅ No file count limits</li>
            <li>✅ No watermarks ever</li>
            <li>✅ 256-bit SSL encryption</li>
            <li>✅ Files auto-deleted in 60 min</li>
            <li>✅ Works on all devices</li>
          </ul>
        </div>
      </section>

      {/* ── What Makes This Different ── */}
      <section
        className="mpo-section mpo-differentiators"
        aria-labelledby="diff-title"
      >
        <div className="mpo-container">
          <h2 id="diff-title">
            Why Merge PDFs in a Browser Instead of Installing Software?
          </h2>
          <p className="mpo-section-lead">
            Traditional PDF software like Adobe Acrobat costs hundreds of
            dollars a year and takes time to install, update, and learn.
            Browser-based merging eliminates every one of those friction
            points — you open a tab and get to work instantly.
          </p>
          <div className="mpo-diff-grid">
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                ⚡
              </span>
              <h3>Zero Installation Time</h3>
              <p>
                No download, no license key, no admin rights required. Open
                the tool in any browser and upload your first file within
                seconds of arriving on the page.
              </p>
            </article>
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                💻
              </span>
              <h3>Works on Every Device You Own</h3>
              <p>
                Your Windows desktop, MacBook, iPad, Android phone — one URL
                works everywhere. No separate mobile app to track down or
                update.
              </p>
            </article>
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                🔄
              </span>
              <h3>Always the Latest Version</h3>
              <p>
                Browser tools update silently in the background. You always
                get the newest features and security patches without manual
                updates or restart prompts.
              </p>
            </article>
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                💸
              </span>
              <h3>Permanently Free — No Trial Countdown</h3>
              <p>
                No 7-day trial that suddenly paywalls your work. SCENITH's
                merger is free without limits on file count, page count, or
                output file size.
              </p>
            </article>
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                🤝
              </span>
              <h3>Share the Link, Not a File</h3>
              <p>
                Email a colleague the tool URL and both of you can merge
                documents independently — no shared license, no seat count,
                no IT request needed.
              </p>
            </article>
            <article className="mpo-diff-card">
              <span className="mpo-diff-icon" aria-hidden="true">
                🌍
              </span>
              <h3>Accessible from Any Network</h3>
              <p>
                Whether you are in a coffee shop, a hotel, or a corporate
                network with strict software policies, a browser tab is
                always available.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── How to Merge (HowTo Schema target) ── */}
      <section
        className="mpo-section mpo-howto"
        id="how-to-merge-pdf-online"
        aria-labelledby="howto-title"
      >
        <div className="mpo-container">
          <h2 id="howto-title">
            How to Merge PDF Files Online in 3 Steps (No Software)
          </h2>
          <p className="mpo-section-lead">
            The entire process takes under a minute. Here is exactly what to
            expect from the moment you open the tool to the moment your merged
            file lands in your Downloads folder.
          </p>
          <div className="mpo-steps">
            <article className="mpo-step">
              <div className="mpo-step-num" aria-label="Step 1">
                1
              </div>
              <div className="mpo-step-body">
                <h3>Upload — Drag Files In or Click to Browse</h3>
                <p>
                  Select all the PDFs you want to combine. You can pick them
                  from your local storage, a USB drive, or drag them straight
                  from a cloud storage folder you have open on your desktop.
                  There is no limit on how many files you add in a single
                  session — two files or two hundred, it handles them all.
                </p>
                <div className="mpo-step-tip">
                  <strong>💡 Time-saver:</strong> Rename files with numeric
                  prefixes before uploading (01-intro.pdf, 02-body.pdf) and
                  they will appear in the correct sequence automatically.
                </div>
              </div>
            </article>
            <article className="mpo-step">
              <div className="mpo-step-num" aria-label="Step 2">
                2
              </div>
              <div className="mpo-step-body">
                <h3>Arrange — Drag Pages Into Exactly the Right Order</h3>
                <p>
                  After uploading, every page from every document appears as
                  a visual thumbnail. Drag entire PDFs up or down to reorder
                  documents, or drag individual page thumbnails to place a
                  single page exactly where you need it. Click the X on any
                  thumbnail to exclude a page from the final output without
                  deleting your original file.
                </p>
                <div className="mpo-step-tip">
                  <strong>💡 Power move:</strong> You can interleave pages
                  from different documents — perfect for creating alternating
                  English and translated versions of the same content.
                </div>
              </div>
            </article>
            <article className="mpo-step">
              <div className="mpo-step-num" aria-label="Step 3">
                3
              </div>
              <div className="mpo-step-body">
                <h3>Download — Get Your Clean, Watermark-Free PDF</h3>
                <p>
                  Hit the Merge button and the process completes in seconds.
                  The resulting PDF preserves every aspect of the originals:
                  searchable text, full image resolution, embedded fonts,
                  active hyperlinks, form fields, and document metadata.
                  Click Download and the finished file goes directly to your
                  device — no email, no cloud sync, no wait.
                </p>
                <div className="mpo-step-tip">
                  <strong>💡 Quality check:</strong> Open your merged PDF in
                  any viewer and do a quick Ctrl+F search to confirm text
                  searchability was preserved from all source documents.
                </div>
              </div>
            </article>
          </div>
          <div className="mpo-cta-block">
            
            <a  href={CTA_URL}
              className="mpo-cta-primary"
              aria-label="Open the free PDF merger tool"
            >
              ⚡ Start Merging PDFs — Free &amp; Instant
            </a>
          </div>
        </div>
      </section>

      {/* ── Situations / Use Cases ── */}
      <section
        className="mpo-section mpo-usecases"
        aria-labelledby="usecases-title"
      >
        <div className="mpo-container">
          <h2 id="usecases-title">
            When You Actually Need to Combine PDF Files Online
          </h2>
          <p className="mpo-section-lead">
            Merging PDFs sounds like a niche technical task, but it comes up
            constantly across every profession and life situation. Here are
            the most common scenarios where people reach for an online PDF
            merger every day.
          </p>
          <div className="mpo-usecase-grid">
            <article className="mpo-usecase-card">
              <h3>📋 Job Applications &amp; Resumes</h3>
              <p>
                Many employers request a single PDF attachment containing your
                cover letter, resume, portfolio samples, and reference letters.
                Merging them into one file makes you look organized and saves
                the recruiter from juggling multiple attachments.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>🏠 Real Estate &amp; Property Deals</h3>
              <p>
                Purchase agreements, inspection reports, title documents,
                mortgage disclosures, and HOA bylaws arrive as separate PDFs.
                Combining them into a single deal package makes it far easier
                to review, share with your attorney, and archive for future
                reference.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>🎓 Academic Research &amp; Theses</h3>
              <p>
                Chapter drafts, appendices, bibliography, and signed approval
                forms all need to become one submission file. Merge them once
                and submit with confidence, knowing the order and formatting
                are exactly as required.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>🧾 Expense Reports &amp; Reimbursements</h3>
              <p>
                Finance teams often require all receipts attached to a single
                expense report PDF. Instead of scanning everything into one
                file from the start, scan receipts individually and merge
                them with the report template in seconds.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>⚖️ Legal Filings &amp; Court Documents</h3>
              <p>
                Court filing systems frequently accept only a single PDF per
                submission. Merge your motion, supporting exhibits, and
                declarations into one numbered document before uploading to
                avoid rejected filings.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>🏥 Medical Records &amp; Insurance Claims</h3>
              <p>
                Lab results, doctor notes, referral letters, and insurance
                prior-authorization forms arrive from multiple providers.
                Combining them into one patient file makes every follow-up
                appointment and claims submission more efficient.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>📦 E-Commerce &amp; Shipping</h3>
              <p>
                Print packing slips, invoices, and shipping labels as separate
                PDFs, then merge them into a single print job so everything
                goes to the printer in one click without switching between
                tabs.
              </p>
            </article>
            <article className="mpo-usecase-card">
              <h3>🏢 Corporate Report Packages</h3>
              <p>
                Board decks often pull together financial statements from the
                CFO, operational updates from department heads, and market
                data from external analysts — all originally in separate PDFs.
                Merge them before the board meeting without waiting on IT.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── What Gets Preserved ── */}
      <section
        className="mpo-section mpo-quality"
        aria-labelledby="quality-title"
      >
        <div className="mpo-container">
          <h2 id="quality-title">
            What Exactly Is Preserved When You Merge PDFs Online?
          </h2>
          <p className="mpo-section-lead">
            A common concern about online PDF tools is quality degradation.
            Here is a precise breakdown of what our lossless merge engine
            retains from every source document.
          </p>
          <div className="mpo-quality-grid">
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Searchable Text Layers</h3>
                <p>
                  Every word in your original PDFs remains fully searchable
                  and selectable in the merged output. Ctrl+F works exactly
                  as it did in the originals.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Full Image Resolution</h3>
                <p>
                  Photos, diagrams, charts, and scanned images are embedded
                  at 100% of their original resolution. No re-compression or
                  quality reduction is applied at any stage.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Embedded Fonts</h3>
                <p>
                  Custom fonts, brand typefaces, and specialized character
                  sets are preserved. The merged PDF renders identically
                  regardless of which fonts are installed on the viewer's
                  device.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Active Hyperlinks</h3>
                <p>
                  All internal page links, external URLs, and email
                  mailto links in the original documents remain clickable
                  and functional in the merged PDF.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Interactive Form Fields</h3>
                <p>
                  Text inputs, checkboxes, dropdown menus, and digital
                  signature fields in fillable PDFs are fully retained so
                  the merged document remains interactive.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Page Orientation &amp; Size</h3>
                <p>
                  Landscape pages stay landscape, portrait pages stay
                  portrait, A4 stays A4, Letter stays Letter — even when
                  mixing different page sizes within the same merged file.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Document Metadata</h3>
                <p>
                  Title, author, subject, keyword, and creation date
                  metadata from the primary document are carried through
                  into the final merged output.
                </p>
              </div>
            </div>
            <div className="mpo-quality-item">
              <span className="mpo-quality-check">✅</span>
              <div>
                <h3>Bookmarks &amp; Navigation</h3>
                <p>
                  Existing PDF bookmarks and named destinations from the
                  source files are consolidated in the merged document,
                  making long combined reports easy to navigate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Deep Dive ── */}
      <section
        className="mpo-section mpo-security"
        aria-labelledby="security-title"
      >
        <div className="mpo-container">
          <h2 id="security-title">
            Is It Safe to Merge Confidential PDFs Online?
          </h2>
          <p className="mpo-section-lead">
            This is the right question to ask before uploading financial
            statements, legal agreements, or medical records to any online
            tool. Here is a plain-language breakdown of every security measure
            in place.
          </p>
          <div className="mpo-security-grid">
            <div className="mpo-security-card">
              <div className="mpo-security-icon">🔒</div>
              <h3>256-bit SSL/TLS Encryption in Transit</h3>
              <p>
                Every byte of data between your browser and our servers
                travels over the same encryption standard used by major banks.
                No one on the same network can intercept or read your files
                in transit.
              </p>
            </div>
            <div className="mpo-security-card">
              <div className="mpo-security-icon">🏠</div>
              <h3>Isolated Processing Containers</h3>
              <p>
                Your documents are processed inside ephemeral, isolated
                containers that are spun up for your session only and torn
                down immediately after. Other users' jobs cannot access your
                files at any point.
              </p>
            </div>
            <div className="mpo-security-card">
              <div className="mpo-security-icon">🗑️</div>
              <h3>Automatic Deletion Within 60 Minutes</h3>
              <p>
                Every uploaded file and every generated output is permanently
                and irrecoverably deleted from our servers within 60 minutes
                of creation. There is no manual step you need to take.
              </p>
            </div>
            <div className="mpo-security-card">
              <div className="mpo-security-icon">🚫</div>
              <h3>Zero Data Retention Policy</h3>
              <p>
                SCENITH does not store, index, analyze, sell, or share your
                documents for any purpose. We do not train AI models on your
                content. Your files exist on our infrastructure only for the
                duration of processing.
              </p>
            </div>
          </div>
          <div className="mpo-security-note">
            <p>
              <strong>Recommendation for highly sensitive documents:</strong>{" "}
              If you are merging documents that are subject to attorney-client
              privilege or contain personally identifiable information, verify
              your organization's data handling policies before using any
              cloud-based tool, including this one. For most business and
              personal use cases, the security measures above exceed what is
              available in typical office software.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison: Online vs Desktop ── */}
      <section
        className="mpo-section mpo-comparison"
        aria-labelledby="comparison-title"
      >
        <div className="mpo-container">
          <h2 id="comparison-title">
            Online PDF Merger vs Desktop Software: A Practical Comparison
          </h2>
          <p className="mpo-section-lead">
            Both approaches have a place. Here is an honest breakdown so you
            can choose the right tool for each situation.
          </p>
          <div className="mpo-comparison-table-wrap">
            <table className="mpo-comparison-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Online PDF Merger (SCENITH)</th>
                  <th>Desktop Software (Adobe Acrobat)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Cost</strong>
                  </td>
                  <td>✅ Free, no limits</td>
                  <td>❌ $239.88/year</td>
                </tr>
                <tr>
                  <td>
                    <strong>Setup time</strong>
                  </td>
                  <td>✅ Zero — open a browser tab</td>
                  <td>❌ 15–30 min installation</td>
                </tr>
                <tr>
                  <td>
                    <strong>Device compatibility</strong>
                  </td>
                  <td>✅ All devices via browser</td>
                  <td>⚠️ Windows &amp; Mac only</td>
                </tr>
                <tr>
                  <td>
                    <strong>Works offline</strong>
                  </td>
                  <td>❌ Internet required</td>
                  <td>✅ Fully offline capable</td>
                </tr>
                <tr>
                  <td>
                    <strong>File size handling</strong>
                  </td>
                  <td>✅ No size limit enforced</td>
                  <td>✅ No size limit</td>
                </tr>
                <tr>
                  <td>
                    <strong>Page-level reorder</strong>
                  </td>
                  <td>✅ Drag-and-drop thumbnails</td>
                  <td>✅ Full drag-and-drop</td>
                </tr>
                <tr>
                  <td>
                    <strong>Output quality</strong>
                  </td>
                  <td>✅ Lossless, 100% preserved</td>
                  <td>✅ Lossless</td>
                </tr>
                <tr>
                  <td>
                    <strong>Watermarks on output</strong>
                  </td>
                  <td>✅ Never</td>
                  <td>✅ Never</td>
                </tr>
                <tr>
                  <td>
                    <strong>Updates required</strong>
                  </td>
                  <td>✅ Silent &amp; automatic</td>
                  <td>❌ Manual updates every few weeks</td>
                </tr>
                <tr>
                  <td>
                    <strong>Advanced editing (OCR, redact)</strong>
                  </td>
                  <td>⚠️ Separate tools for each task</td>
                  <td>✅ All-in-one suite</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mpo-comparison-summary">
            <strong>Bottom line:</strong> For merging PDFs — the single most
            common PDF task — a browser tool outperforms expensive desktop
            software in almost every dimension that matters for day-to-day
            use. Save the desktop subscription for complex PDF editing
            workflows that genuinely need it.
          </p>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section
        className="mpo-section mpo-faq"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="mpo-container">
          <h2 id="faq-title">
            Frequently Asked Questions — Merging PDF Files Online
          </h2>
          <div className="mpo-faq-grid">
            <article className="mpo-faq-item">
              <h3>
                Can I merge PDF files on my phone without an app?
              </h3>
              <p>
                Yes. Open your mobile browser (Safari on iPhone, Chrome on
                Android), navigate to SCENITH's PDF merger, and use the file
                picker to select PDFs from your phone's storage or cloud
                drives. The entire process works without downloading any app.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Does merging PDFs online change the file size?
              </h3>
              <p>
                The merged PDF size is approximately the sum of the input
                file sizes. Our tool does not re-compress images or re-encode
                content, so you do not lose quality — but you also should not
                expect the output to be smaller than the inputs. If file size
                reduction is a goal, use our PDF Compress tool after merging.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Can I merge password-protected PDFs?
              </h3>
              <p>
                Password-protected PDFs need to be unlocked before merging.
                Use our PDF Unlock tool first to remove the password, then
                proceed with the merge. Attempting to merge a locked PDF will
                return an error rather than silently failing.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                What happens if I upload the wrong file?
              </h3>
              <p>
                No problem. Before you hit the Merge button you can remove
                any file from the queue by clicking the X next to it, or
                clear the entire upload and start fresh. Your original files
                on your device are never modified.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Can I merge a PDF with a Word document or image?
              </h3>
              <p>
                Our merger accepts only PDF files. Convert your Word document
                (.docx) or images (JPG, PNG) to PDF first using a conversion
                tool, then include them in your merge. Converting to PDF first
                also guarantees consistent formatting in the final output.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Is there a limit on total pages across all uploaded files?
              </h3>
              <p>
                There is no enforced page limit. Documents with several
                hundred total pages process successfully. Extremely large
                batches (thousands of pages) may take longer but will
                complete without truncation or errors.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Will the merged PDF open correctly in Adobe Acrobat?
              </h3>
              <p>
                Yes. The output conforms to the PDF specification and opens
                correctly in Adobe Acrobat, Adobe Reader, macOS Preview,
                Foxit, and every other major PDF viewer without compatibility
                warnings.
              </p>
            </article>
            <article className="mpo-faq-item">
              <h3>
                Can I undo a merge after downloading?
              </h3>
              <p>
                The merged file is a single new document — it cannot be
                un-merged automatically. If you need the originals, they are
                still in their original locations on your device. To split a
                PDF back into separate files, use our PDF Split tool.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="mpo-section mpo-final-cta"
        aria-labelledby="final-cta-title"
      >
        <div className="mpo-container">
          <div className="mpo-final-cta-card">
            <span className="mpo-final-cta-emoji" aria-hidden="true">
              📄
            </span>
            <h2 id="final-cta-title">
              Ready to Combine Your PDF Files Right Now?
            </h2>
            <p>
              No account. No software. No waiting. Open the tool, upload your
              files, and download your merged PDF in under a minute.
            </p>
            
            <a  href={CTA_URL}
              className="mpo-cta-primary mpo-cta-large"
              aria-label="Open the free online PDF merger"
            >
              🚀 Merge My PDFs — 100% Free
            </a>
            <ul className="mpo-final-trust" aria-label="Final trust signals">
              <li>No watermarks</li>
              <li>Works on all devices</li>
              <li>Files deleted automatically</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Tools ── */}
      <section
        className="mpo-section mpo-related"
        aria-labelledby="related-title"
      >
        <div className="mpo-container">
          <h2 id="related-title">Other Free PDF Tools You Might Need</h2>
          <div className="mpo-related-grid">
            
            <a  href="https://scenith.in/tools/pdf-tools/split-pdf?utm_source=merge-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="mpo-related-card"
            >
              <span className="mpo-related-icon" aria-hidden="true">
                ✂️
              </span>
              <div>
                <h3>Split PDF</h3>
                <p>
                  Extract specific pages or break a large PDF into smaller
                  individual files.
                </p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/compress-pdf?utm_source=merge-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="mpo-related-card"
            >
              <span className="mpo-related-icon" aria-hidden="true">
                🗜️
              </span>
              <div>
                <h3>Compress PDF</h3>
                <p>
                  Reduce PDF file size for faster email attachments and
                  uploads without visible quality loss.
                </p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/rotate-pdf?utm_source=merge-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="mpo-related-card"
            >
              <span className="mpo-related-icon" aria-hidden="true">
                🔄
              </span>
              <div>
                <h3>Rotate PDF</h3>
                <p>
                  Fix landscape pages mixed with portrait pages before
                  merging for a consistent final document.
                </p>
              </div>
            </a>
            
            <a  href="https://scenith.in/tools/pdf-tools/unlock-pdf?utm_source=merge-pdf-online&utm_medium=related_tools&utm_campaign=pdf_tools_seo"
              className="mpo-related-card"
            >
              <span className="mpo-related-icon" aria-hidden="true">
                🔓
              </span>
              <div>
                <h3>Unlock PDF</h3>
                <p>
                  Remove password protection from PDFs so they can be
                  included in a merge without errors.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}