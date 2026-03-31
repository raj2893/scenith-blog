import type { Metadata } from "next";
import Link from "next/link";
import "./pdf-splitter-landing.css";

/* ─────────────────────────────────────────────
   METADATA — heavy SEO focus
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Free Online PDF Page Splitter — Split, Extract & Separate PDF Pages Instantly (2026)",
  description:
    "Split PDF pages online for free — no installation, no sign-up required to preview. Extract individual pages, separate a PDF into multiple files, or define custom page ranges in seconds. 100% browser-based, secure, and fast.",
  keywords: [
    "free online pdf page splitter",
    "split pdf pages online free",
    "pdf page extractor online",
    "separate pdf pages online",
    "extract pages from pdf free",
    "split pdf into multiple files",
    "pdf splitter no watermark",
    "pdf split tool 2026",
    "online pdf page separator",
    "cut pages from pdf online",
    "pdf page range splitter",
    "divide pdf pages online free",
    "pdf split without adobe",
    "pdf page extractor tool",
    "split large pdf online",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/free-online-pdf-page-splitter",
  },
  openGraph: {
    title: "Free Online PDF Page Splitter — Split Any PDF Instantly | Scenith",
    description:
      "The fastest way to split PDF pages online — extract single pages, define custom ranges, or separate every page into its own file. No download. No watermark.",
    url: "https://scenith.in/tools/free-online-pdf-page-splitter",
    siteName: "Scenith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online PDF Page Splitter | Scenith",
    description:
      "Split PDF pages online free — extract, separate & divide PDFs in seconds. No software needed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
───────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith PDF Page Splitter",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any — runs in browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online PDF page splitter that lets you extract individual pages, define custom page ranges, or separate an entire PDF into individual files — no software installation required.",
  url: "https://scenith.in/tools/free-online-pdf-page-splitter",
  publisher: {
    "@type": "Organization",
    name: "Scenith",
    url: "https://scenith.in",
  },
};

const faqData = [
  {
    q: "Is the Scenith PDF page splitter really free?",
    a: "Yes. You can split PDF pages online for free without any hidden charges. Simply upload your PDF, choose how you want to split it, and download the result. No credit card, no subscription required.",
  },
  {
    q: "Do I need to install any software to split PDF pages?",
    a: "Absolutely not. Scenith's PDF page splitter is 100% browser-based. It works on any device — Windows, Mac, Linux, Android, or iOS — without installing Adobe Acrobat or any other software.",
  },
  {
    q: "Can I extract specific pages from a PDF?",
    a: "Yes. You can extract a single page, a custom range (e.g., pages 3–7), or split every page into its own separate file. All three modes are supported.",
  },
  {
    q: "Is my PDF secure when I upload it?",
    a: "Your file is processed on secure servers and automatically deleted after processing. We do not share, sell, or store your documents beyond the time needed to deliver your download.",
  },
  {
    q: "What is the maximum PDF file size I can split?",
    a: "Scenith supports PDFs up to several hundred megabytes. For extremely large files (500MB+), results may vary depending on your internet connection speed.",
  },
  {
    q: "Will the split PDFs have a watermark?",
    a: "No. Unlike many other online tools, Scenith does not add any watermarks, branding, or hidden metadata to your output files.",
  },
  {
    q: "Can I split a password-protected PDF?",
    a: "You will need to unlock the PDF first before splitting it. Scenith also offers a free PDF unlock tool to remove password protection before you split.",
  },
  {
    q: "How long does splitting a PDF take?",
    a: "Most PDFs split in under 10 seconds regardless of page count. Large files with many embedded images may take up to 30 seconds.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your PDF",
    body: "Drag and drop your PDF onto the tool — or click to browse your files. No account needed to get started.",
    icon: "⬆",
  },
  {
    number: "02",
    title: "Choose Your Split Mode",
    body: "Select 'All Pages' to separate every page, or choose 'Custom Range' to extract exactly the pages you need.",
    icon: "⚙",
  },
  {
    number: "03",
    title: "Define Ranges (Optional)",
    body: "Use the intuitive range builder to set from/to pages for each output file. Add as many splits as you need.",
    icon: "✂",
  },
  {
    number: "04",
    title: "Download in Seconds",
    body: "Click 'Process' and your split PDF files are ready almost instantly. Download them individually or as a ZIP.",
    icon: "⬇",
  },
];

const useCases = [
  {
    icon: "📋",
    title: "Extract a Single Chapter",
    body: "Got a 200-page report but only need Chapter 3? Extract pages 44–67 and share just what's relevant — without sending the entire document.",
  },
  {
    icon: "📑",
    title: "Separate Multi-Invoice PDFs",
    body: "Accounting teams often receive batch PDFs with dozens of invoices. Split them into individual files to route each invoice to the right department.",
  },
  {
    icon: "🎓",
    title: "Share Lecture Slides Individually",
    body: "Educators can separate a semester's worth of slides into week-by-week files — making it easy for students to find exactly what they need.",
  },
  {
    icon: "⚖",
    title: "Isolate Legal Documents",
    body: "Legal professionals routinely split merged court filings to extract affidavits, exhibits, and contracts as standalone PDFs for easier referencing.",
  },
  {
    icon: "🏥",
    title: "Medical Records Management",
    body: "Healthcare providers split consolidated patient records into separate test reports, prescriptions, and lab results for cleaner record-keeping.",
  },
  {
    icon: "🏠",
    title: "Real Estate Documents",
    body: "Split a bundled property package into individual floor plans, inspection reports, and deed documents for each stakeholder in a transaction.",
  },
  {
    icon: "📰",
    title: "Publishing & Editorial",
    body: "Publishers split book proofs or magazine layouts by section, sending individual chapters to different editors simultaneously.",
  },
  {
    icon: "🎨",
    title: "Design Portfolio Pages",
    body: "Designers extract individual portfolio pages from a master PDF to send specific work samples tailored to each client's industry.",
  },
];

const comparisonRows = [
  { feature: "100% Free", scenith: true, adobe: false, smallpdf: false },
  { feature: "No Watermark on Output", scenith: true, adobe: false, smallpdf: false },
  { feature: "No Software Install", scenith: true, adobe: false, smallpdf: true },
  { feature: "Custom Page Ranges", scenith: true, adobe: true, smallpdf: true },
  { feature: "Split All Pages at Once", scenith: true, adobe: true, smallpdf: true },
  { feature: "No Daily Limit (logged-in)", scenith: true, adobe: false, smallpdf: false },
  { feature: "File Auto-Delete After Download", scenith: true, adobe: false, smallpdf: true },
  { feature: "Works on Mobile Browser", scenith: true, adobe: false, smallpdf: true },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT (Server Component — no client needed)
───────────────────────────────────────────── */
export default function PDFPageSplitterLanding() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="splitter-root">
        {/* ── HERO ── */}
        <section className="splitter-hero" aria-labelledby="hero-heading">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-blob hero-blob--a" aria-hidden="true" />
          <div className="hero-blob hero-blob--b" aria-hidden="true" />

          <div className="splitter-container">
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              Free &amp; No-Watermark · 2026 · Browser-Based
            </div>

            <h1 id="hero-heading" className="hero-title">
              Free Online{" "}
              <span className="hero-title-accent">PDF Page Splitter</span>
              <br />
              — Split, Extract &amp; Separate in Seconds
            </h1>

            <p className="hero-subtitle">
              The fastest way to split PDF pages online without Adobe Acrobat,
              without watermarks, and without spending a single rupee. Upload
              your PDF, define your ranges, and download clean split files in
              under 10 seconds — every single time.
            </p>

            <div className="hero-cta-wrapper">
              <Link
                href="https://scenith.in/tools/pdf-tools?utm_source=splitter-landing&utm_medium=hero-cta&utm_campaign=pdf-splitter-seo&utm_content=split-pdf-now"
                className="hero-cta-primary"
                rel="noopener"
                aria-label="Open the free PDF splitter tool"
              >
                <span className="cta-icon" aria-hidden="true">✂</span>
                Split My PDF — It's Free
                <span className="cta-arrow" aria-hidden="true">→</span>
              </Link>
              <p className="hero-cta-note">
                 No watermark · Results in &lt;10 seconds
              </p>
            </div>

            <div className="hero-stats" role="list">
              {[
                { value: "2M+", label: "PDFs Processed" },
                { value: "0.0", label: "Watermarks Added" },
                { value: "<10s", label: "Average Split Time" },
                { value: "100%", label: "Browser-Based" },
              ].map((stat) => (
                <div className="stat-card" role="listitem" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS PDF SPLITTING ── */}
        <section className="splitter-section splitter-section--alt" aria-labelledby="what-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">The Basics, Explained Properly</div>
            <h2 id="what-heading" className="section-title">
              What Does "Splitting a PDF" Actually Mean?
            </h2>
            <div className="prose-grid">
              <div className="prose-block">
                <p>
                  When someone says they want to <strong>split a PDF</strong>, they almost always mean one of three things: they want to
                  extract a specific page or range of pages from a large file, they want to divide the PDF at a specific point (e.g., every 10 pages),
                  or they want to separate every single page into its own individual PDF file.
                </p>
                <p>
                  All three are fundamentally different operations — and yet the label "PDF splitter" gets applied to tools that do each of them.
                  Scenith's PDF page splitter handles all three modes in one place, and it does so without any of the usual friction:
                  no watermarks, no page limits on logged-in users, no 2MB caps, and no software installation.
                </p>
              </div>
              <div className="prose-block">
                <p>
                  In 2026, PDF splitting has become one of the most searched-for micro-tasks among office workers, students, and legal professionals alike.
                  The reason is simple: PDFs are everywhere, but most PDF creation tools bundle content together into monolithic files.
                  Whether it's a 300-page annual report, a merged set of invoices from an accounting system, or a textbook exported from a learning management system —
                  the need to carve out exactly what you need, without the rest, is constant.
                </p>
                <p>
                  The problem is that most tools designed to do this are either paywalled after a few uses, slap a "TRIAL WATERMARK" across your output,
                  or are so slow that you could have emailed the whole file and asked someone else to do it faster.
                  Scenith was built specifically to eliminate every one of those frustrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="splitter-section" aria-labelledby="how-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">Step-by-Step</div>
            <h2 id="how-heading" className="section-title">
              How to Split PDF Pages Online — 4 Simple Steps
            </h2>
            <p className="section-subtitle">
              From upload to download in under a minute. Here is exactly what
              happens when you use the Scenith PDF page splitter.
            </p>

            <div className="steps-grid">
              {steps.map((step) => (
                <div className="step-card" key={step.number}>
                  <div className="step-number" aria-hidden="true">{step.number}</div>
                  <div className="step-icon" aria-hidden="true">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-body">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mid-cta-wrapper">
              <Link
                href="https://scenith.in/tools/pdf-tools?utm_source=splitter-landing&utm_medium=steps-cta&utm_campaign=pdf-splitter-seo&utm_content=try-it-now"
                className="mid-cta"
                rel="noopener"
              >
                Try It Now — Free PDF Splitter →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SPLIT MODES DEEP-DIVE ── */}
        <section className="splitter-section splitter-section--alt" aria-labelledby="modes-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">Feature Deep-Dive</div>
            <h2 id="modes-heading" className="section-title">
              Three Ways to Split PDF Pages — Which One Do You Need?
            </h2>

            <div className="modes-grid">
              <article className="mode-card mode-card--featured">
                <div className="mode-tag">Most Popular</div>
                <div className="mode-icon" aria-hidden="true">📄</div>
                <h3 className="mode-title">Split All Pages</h3>
                <p className="mode-body">
                  This is the "nuclear option" — and sometimes exactly what you need. When you split all pages, every single page in your PDF
                  becomes its own standalone file. A 50-page PDF becomes 50 individual PDFs, each named Page 1, Page 2, and so on.
                </p>
                <p className="mode-body">
                  This mode is most useful for scanning situations: when a scanner produces one massive multi-page PDF and you need to route each
                  scanned page to a different folder, recipient, or system. It's also used extensively in legal e-discovery, where each document
                  in a multi-page bundle must be treated as a separate exhibit.
                </p>
                <ul className="mode-list">
                  <li>Upload → click "All Pages" → done</li>
                  <li>Works on PDFs of any size</li>
                  <li>Output files are sequentially named</li>
                  <li>Packaged as a ZIP for easy downloading</li>
                </ul>
              </article>

              <article className="mode-card">
                <div className="mode-icon" aria-hidden="true">✂</div>
                <h3 className="mode-title">Custom Page Ranges</h3>
                <p className="mode-body">
                  The most precise and powerful mode. Define exactly which pages go into which output file using an intuitive range builder
                  (no cryptic syntax required — just set "From" and "To" with + / − buttons or type the numbers directly).
                </p>
                <p className="mode-body">
                  You can define multiple splits at once. For example: Split 1 = Pages 1–15, Split 2 = Pages 16–40, Split 3 = Pages 41–50.
                  Each split becomes a separate PDF. Pages can even overlap between splits if you need a shared introduction across multiple output files.
                </p>
                <ul className="mode-list">
                  <li>Unlimited number of range splits</li>
                  <li>Visual page count for each split shown live</li>
                  <li>Validation prevents invalid ranges</li>
                  <li>Summary card confirms your setup before processing</li>
                </ul>
              </article>
            </div>

            <div className="modes-explainer">
              <h3 className="modes-explainer-title">
                Which mode should you choose?
              </h3>
              <div className="modes-explainer-grid">
                <div className="explainer-item">
                  <span className="explainer-icon" aria-hidden="true">🔵</span>
                  <div>
                    <strong>"I just want one specific page"</strong>
                    <p>Use Custom Range. Set From: 3, To: 3. You'll get a single-page PDF containing only page 3.</p>
                  </div>
                </div>
                <div className="explainer-item">
                  <span className="explainer-icon" aria-hidden="true">🟢</span>
                  <div>
                    <strong>"I want to split this into two halves"</strong>
                    <p>Use Custom Range. Define Split 1 as pages 1–50 and Split 2 as pages 51–100 for a 100-page PDF.</p>
                  </div>
                </div>
                <div className="explainer-item">
                  <span className="explainer-icon" aria-hidden="true">🟡</span>
                  <div>
                    <strong>"I want every page as its own file"</strong>
                    <p>Use Split All Pages mode. Every page becomes a standalone PDF — all packaged in a ZIP download.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="splitter-section" aria-labelledby="usecases-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">Real-World Applications</div>
            <h2 id="usecases-heading" className="section-title">
              8 Everyday Scenarios Where PDF Page Splitting Saves Hours
            </h2>
            <p className="section-subtitle">
              Splitting PDFs isn't a niche need. Millions of professionals do it daily. Here are the most common situations where a free online PDF page splitter becomes essential.
            </p>

            <div className="usecases-grid">
              {useCases.map((uc) => (
                <article className="usecase-card" key={uc.title}>
                  <div className="usecase-icon" aria-hidden="true">{uc.icon}</div>
                  <h3 className="usecase-title">{uc.title}</h3>
                  <p className="usecase-body">{uc.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="splitter-section splitter-section--alt" aria-labelledby="compare-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">Honest Comparison</div>
            <h2 id="compare-heading" className="section-title">
              Scenith vs Adobe Acrobat vs Smallpdf — Which PDF Splitter Wins in 2026?
            </h2>
            <p className="section-subtitle">
              Not all PDF splitters are created equal. Here's an honest, feature-by-feature breakdown of why Scenith consistently outperforms the alternatives for day-to-day splitting tasks.
            </p>

            <div className="table-wrapper" role="region" aria-label="PDF Splitter Comparison Table" tabIndex={0}>
              <table className="compare-table">
                <caption className="sr-only">Comparison of PDF splitting features between Scenith, Adobe Acrobat, and Smallpdf</caption>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="col-scenith">Scenith <span className="recommended-tag">Recommended</span></th>
                    <th scope="col">Adobe Acrobat</th>
                    <th scope="col">Smallpdf</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="feature-col">{row.feature}</td>
                      <td className="col-scenith">
                        <span className={row.scenith ? "check check--yes" : "check check--no"} aria-label={row.scenith ? "Yes" : "No"}>
                          {row.scenith ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.adobe ? "check check--yes" : "check check--no"} aria-label={row.adobe ? "Yes" : "No"}>
                          {row.adobe ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.smallpdf ? "check check--yes" : "check check--no"} aria-label={row.smallpdf ? "Yes" : "No"}>
                          {row.smallpdf ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="compare-note">
              <p>
                <strong>A note on "free":</strong> Adobe Acrobat requires a subscription ($14.99–$23.99/month) for PDF splitting. Smallpdf allows 2 free tasks per day, then locks you behind a €9/month plan, and adds visible branding to free-tier output. Scenith offers PDF splitting free with no daily task limits on logged-in accounts and zero watermarking on any plan.
              </p>
            </div>
          </div>
        </section>

        {/* ── IN-DEPTH GUIDE ── */}
        <section className="splitter-section" aria-labelledby="guide-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">Complete Guide</div>
            <h2 id="guide-heading" className="section-title">
              The Complete Guide to Splitting PDF Pages Online in 2026
            </h2>

            <div className="guide-content">
              <h3>Why PDF Splitting Is More Relevant Than Ever in 2026</h3>
              <p>
                The volume of PDF documents generated globally has never been higher. Regulatory filings, digital-first contracts, AI-generated reports, government documents, academic submissions, and scanned records — all of them arrive as PDFs, and most of them are too large to send or too cluttered to read in full. According to industry estimates, the average office worker encounters at least 3–5 situations per week where they need to extract just a portion of a PDF.
              </p>
              <p>
                What's changed in 2026 is the expectation around tools that handle this task. Users now expect browser-based tools to be fast, clean, and free — the way Gmail is free for email and Google Docs is free for word processing. The era of "pay for a desktop PDF editor just to split a file" is functionally over for individual users and small businesses.
              </p>

              <h3>Understanding PDF Page Extraction vs. PDF Splitting</h3>
              <p>
                These two terms are often used interchangeably, but they're technically distinct operations:
              </p>
              <p>
                <strong>PDF Page Extraction</strong> means removing one or more specific pages from a document and saving them as a new, separate file — while the original PDF can remain intact. If you extract pages 5–10 from a 50-page PDF, you get a new 6-page PDF, and the original 50-page file is unchanged.
              </p>
              <p>
                <strong>PDF Splitting</strong> technically means dividing a PDF into two or more output files at a defined break point or across multiple ranges. The word "splitting" implies that the original content is distributed across output files rather than copied.
              </p>
              <p>
                In practice, most users searching for "free online PDF page splitter" want the extraction behavior — they want to take a chunk of pages and save them separately. Scenith's tool handles both definitions gracefully through its dual-mode approach.
              </p>

              <h3>What Happens to Your File's Formatting When You Split?</h3>
              <p>
                This is one of the most important questions users have — and one that low-quality tools often fail to answer honestly. When you split a PDF using Scenith, the following is preserved in the output files:
              </p>
              <ul>
                <li><strong>All fonts and typography</strong> — embedded fonts remain embedded in output files, so text renders identically regardless of which PDF viewer the recipient uses.</li>
                <li><strong>All images and graphics</strong> — images are preserved at their original resolution. No compression is applied during splitting.</li>
                <li><strong>Hyperlinks and annotations</strong> — if the original PDF contained clickable hyperlinks or annotation layers, these are preserved on the split pages.</li>
                <li><strong>Bookmarks and metadata</strong> — document metadata (author, creation date) is retained. Bookmarks that reference pages within the extracted range are preserved; those pointing to excluded pages are cleanly removed.</li>
                <li><strong>Form fields</strong> — if your PDF contains interactive form fields, they remain functional on the split output pages.</li>
                <li><strong>Page orientation</strong> — portrait and landscape pages each retain their original orientation in the split files.</li>
              </ul>
              <p>
                What is NOT added: no watermarks, no "Processed by Scenith" footers, no metadata modification that would fingerprint or identify the tool.
              </p>

              <h3>How to Split a Large PDF Without Losing Quality</h3>
              <p>
                Large PDFs — anything above 50MB — can be tricky for browser-based tools because the processing happens server-side and results must be transmitted back over the network. Here are best practices when splitting large PDFs:
              </p>
              <ul>
                <li><strong>Use a stable internet connection.</strong> Upload and download of large files benefits from a wired connection or strong Wi-Fi. Mobile data is workable but slower for files above 20MB.</li>
                <li><strong>Split in sensible chunks.</strong> If you have a 400-page PDF, consider splitting it into sections of 50–100 pages rather than extracting individual pages one at a time. Each processing request has a small overhead; batching your ranges is more efficient.</li>
                <li><strong>Don't modify the PDF before splitting.</strong> Sometimes users try to "compress first, then split" — but this often degrades quality unnecessarily. Split the original, then compress individual outputs if needed.</li>
                <li><strong>Check your output immediately.</strong> Open the split PDFs in a reader before closing the tool, to confirm the correct pages were extracted and formatting is intact.</li>
              </ul>

              <h3>PDF Splitting in Professional Workflows: Automation & Integration</h3>
              <p>
                For individual users, a browser-based tool like Scenith is the perfect solution. But what about teams processing hundreds of PDFs per day? Here's how PDF splitting fits into professional workflows at scale:
              </p>
              <p>
                <strong>Accounting &amp; Finance:</strong> Many accounting platforms generate consolidated invoice or statement PDFs from their batch-export functions. AP teams use PDF splitters to break these into per-vendor or per-invoice files before uploading into document management systems or emailing to clients. Some teams do this manually page-by-page; others integrate PDF splitting APIs into their RPA (Robotic Process Automation) scripts.
              </p>
              <p>
                <strong>Legal &amp; Compliance:</strong> Law firms working in e-discovery routinely receive production sets of documents as bundled PDFs. Paralegals must split these into individual documents, tag each with Bates numbers, and import them into review platforms. PDF splitting is one of the highest-volume manual tasks in legal operations.
              </p>
              <p>
                <strong>Education &amp; Publishing:</strong> Publishers working in digital textbook production maintain master PDF files for each edition. When generating chapter-by-chapter ebook files, PDF splitting is often the first step in the production pipeline — extracting chapter ranges before conversion to EPUB or MOBI formats.
              </p>
              <p>
                <strong>Healthcare Records:</strong> Patient record systems often produce consolidated PDF downloads of everything in a patient's file. Medical records teams split these into separate encounter notes, lab reports, imaging results, and prescriptions to ensure each document type is stored in the correct folder within their EMR system.
              </p>

              <h3>Common Mistakes When Splitting PDF Pages (And How to Avoid Them)</h3>
              <ul>
                <li>
                  <strong>Forgetting to check total page count before defining ranges.</strong> Always verify how many pages your PDF has before setting ranges. Scenith shows the page count automatically after upload.
                </li>
                <li>
                  <strong>Overlapping ranges when you don't intend to.</strong> If Split 1 is pages 1–20 and Split 2 is pages 18–40, pages 18–20 will appear in both output files. This is valid if intentional but usually a mistake.
                </li>
                <li>
                  <strong>Splitting a scanned (image-only) PDF expecting searchable text.</strong> If your original PDF is a scanned image, the split output will also be image-only. To get searchable text, run OCR on the original before splitting.
                </li>
                <li>
                  <strong>Using a tool that reorders pages during splitting.</strong> Low-quality tools sometimes alter page order due to PDF structure parsing bugs. Always verify that the first page of your output is what you expected.
                </li>
                <li>
                  <strong>Not naming output files meaningfully.</strong> After splitting, rename files to reflect their content (e.g., "Contract_Section_A.pdf" rather than "split_pages_1-15.pdf") before sharing with colleagues.
                </li>
              </ul>

              <h3>PDF Security and Privacy When Using Online Splitters</h3>
              <p>
                Privacy is a legitimate concern when uploading sensitive documents to any online service. Here's what you should know about how Scenith handles your files:
              </p>
              <p>
                Files are transmitted over HTTPS (TLS 1.3) — meaning the connection between your browser and Scenith's servers is encrypted during upload and download. Files are stored temporarily on secure cloud infrastructure only for the duration needed to process and deliver your download. After you download your result, files are scheduled for automatic deletion. Scenith does not train AI models on user-uploaded content, does not sell file metadata to third parties, and does not index the content of uploaded files.
              </p>
              <p>
                For documents with the highest sensitivity requirements — classified government files, attorney-client privileged communications, personally identifiable health information — our general recommendation is to use server-side or on-premise PDF processing tools that never transmit files over the internet. For the vast majority of business and personal PDF splitting tasks, however, Scenith's approach provides a level of security that is entirely adequate and comparable to sending a file via enterprise email.
              </p>

              <h3>PDF Format Nuances That Affect Splitting</h3>
              <p>
                Not all PDFs are structurally identical, and certain characteristics can influence how splitting behaves:
              </p>
              <p>
                <strong>PDFs with cross-page content streams:</strong> Some PDFs, particularly those generated by older or poorly-optimized export tools, have content that references objects across multiple pages in a non-standard way. When split, these pages may appear blank or malformed in some viewers. Scenith's engine handles this by rebuilding the page content stream references before writing each output file.
              </p>
              <p>
                <strong>Linearized ("fast web view") PDFs:</strong> These are optimized for streaming and page-by-page loading. They are fully supported and split correctly.
              </p>
              <p>
                <strong>PDF/A and PDF/X archival formats:</strong> These are compliance formats used in archiving and print production respectively. Splitting them is supported, and output files maintain the compliance header declarations present in the original.
              </p>
              <p>
                <strong>PDFs with digital signatures:</strong> Digital signatures are cryptographically tied to the document's byte structure. Splitting a signed PDF will invalidate the signature in the output files — this is expected and unavoidable behavior, not a tool bug. If signature validity must be preserved, split before signing.
              </p>
            </div>
          </div>
        </section>

        {/* ── MAIN CTA SECTION ── */}
        <section className="splitter-section cta-section" aria-labelledby="cta-heading">
          <div className="splitter-container">
            <div className="cta-card">
              <div className="cta-decoration cta-decoration--left" aria-hidden="true">✂</div>
              <div className="cta-decoration cta-decoration--right" aria-hidden="true">📄</div>

              <div className="cta-badge">Ready to split?</div>
              <h2 id="cta-heading" className="cta-title">
                Your PDF. Your Pages. Your Way.
              </h2>
              <p className="cta-body">
                Stop emailing entire 200-page documents when you only need 3 pages. Stop
                paying for Adobe Acrobat subscriptions just to split a file once a week.
                Stop dealing with watermarks from free tools that aren't actually free.
              </p>
              <p className="cta-body">
                Scenith's PDF page splitter is the tool that does exactly what it says —
                cleanly, quickly, and completely free. Click below to open the tool and
                split your first PDF in the next 60 seconds.
              </p>

              <Link
                href="https://scenith.in/tools/pdf-tools?utm_source=splitter-landing&utm_medium=main-cta&utm_campaign=pdf-splitter-seo&utm_content=open-splitter-tool"
                className="cta-button"
                rel="noopener"
                aria-label="Open the Scenith PDF splitter tool"
              >
                <span className="cta-button-icon" aria-hidden="true">✂</span>
                Open the Free PDF Splitter
                <span className="cta-button-arrow" aria-hidden="true">→</span>
              </Link>

              <ul className="cta-reassurances" role="list">
                <li role="listitem">✓ No software installation</li>
                <li role="listitem">✓ No watermarks on output</li>
                <li role="listitem">✓ No daily limits (logged-in users)</li>
                <li role="listitem">✓ Files auto-deleted after download</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="splitter-section splitter-section--alt" aria-labelledby="faq-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">FAQ</div>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions About Splitting PDF Pages
            </h2>
            <p className="section-subtitle">
              Everything you need to know before you start splitting.
            </p>

            <div className="faq-list">
              {faqData.map((item, idx) => (
                <details className="faq-item" key={idx}>
                  <summary className="faq-question">
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-chevron" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* FAQ Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqData.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                  })),
                }),
              }}
            />
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="splitter-section" aria-labelledby="related-heading">
          <div className="splitter-container">
            <div className="section-eyebrow">More Free PDF Tools</div>
            <h2 id="related-heading" className="section-title">
              Other PDF Tools You Might Need
            </h2>
            <p className="section-subtitle">
              Scenith is a full PDF toolkit — splitting is just one of many free operations available to you.
            </p>

            <div className="related-grid">
              {[
                { emoji: "🔗", label: "Merge PDFs", desc: "Combine multiple PDF files into one document in any order." },
                { emoji: "📦", label: "Compress PDF", desc: "Reduce file size without visible quality loss." },
                { emoji: "🔄", label: "Rotate PDF", desc: "Fix orientation of individual pages or the whole document." },
                { emoji: "🖼", label: "Images to PDF", desc: "Convert JPG, PNG, or WebP images into a multi-page PDF." },
                { emoji: "📸", label: "PDF to Images", desc: "Extract every page as a high-resolution PNG or JPG." },
                { emoji: "🔒", label: "Lock PDF", desc: "Add password protection to sensitive PDF documents." },
                { emoji: "🔓", label: "Unlock PDF", desc: "Remove password protection from any PDF you own." },
                { emoji: "💧", label: "Add Watermark", desc: "Overlay custom text watermarks on all pages at once." },
              ].map((tool) => (
                <Link
                  key={tool.label}
                  href={`https://scenith.in/tools/pdf-tools?utm_source=splitter-landing&utm_medium=related-tools&utm_campaign=pdf-splitter-seo&utm_content=${tool.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="related-card"
                  rel="noopener"
                >
                  <span className="related-emoji" aria-hidden="true">{tool.emoji}</span>
                  <strong className="related-label">{tool.label}</strong>
                  <p className="related-desc">{tool.desc}</p>
                  <span className="related-link-hint">Try free →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA STICKY FOOTER ── */}
        <div className="sticky-cta-bar" role="complementary" aria-label="Quick access to PDF splitter">
          <div className="sticky-cta-inner">
            <span className="sticky-cta-text">Ready to split your PDF? It takes less than 60 seconds.</span>
            <Link
              href="https://scenith.in/tools/pdf-tools?utm_source=splitter-landing&utm_medium=sticky-footer&utm_campaign=pdf-splitter-seo&utm_content=sticky-cta"
              className="sticky-cta-btn"
              rel="noopener"
            >
              ✂ Split PDF Free →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}