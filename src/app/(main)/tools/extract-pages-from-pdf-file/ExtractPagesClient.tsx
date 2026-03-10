import React from "react";
import Link from "next/link";
import type { FC } from "react";
import "@/styles/tools/ExtractPages.css";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/split-pdf?utm_source=extract-pages-landing&utm_medium=cta&utm_campaign=pdf-tools-seo&utm_content=extract-pages-from-pdf";

const steps = [
  {
    number: "01",
    title: "Upload Your PDF",
    description:
      "Drag and drop your PDF file into the tool or click to browse. Works with any PDF — scanned documents, contracts, eBooks, reports, and more.",
    icon: "📂",
  },
  {
    number: "02",
    title: "Select Pages to Extract",
    description:
      "Enter the page numbers or ranges you need. For example: page 3, pages 5–12, or a combination like 1, 4–7, 15. You can create multiple extracts at once.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Download Extracted Pages",
    description:
      "Click process and download your extracted pages as clean, individual PDF files — each with 100% original formatting, images, and text intact.",
    icon: "⬇️",
  },
];

const useCases = [
  {
    emoji: "📑",
    title: "Extract a Contract Signature Page",
    description:
      "No need to share an entire 40-page legal agreement. Extract just the signature page and send it independently — keeping the rest of the document private.",
  },
  {
    emoji: "🎓",
    title: "Pull Chapters from a Textbook PDF",
    description:
      "Students and educators can extract individual chapters or topic sections from large academic PDFs for focused reading, printing, or sharing.",
  },
  {
    emoji: "📊",
    title: "Isolate a Financial Summary Page",
    description:
      "Finance teams often need to share quarterly summaries without exposing full internal reports. Extract only the relevant summary pages in seconds.",
  },
  {
    emoji: "🏥",
    title: "Share a Single Medical Report Page",
    description:
      "Healthcare professionals can extract specific test result pages or prescriptions from multi-page patient records for targeted sharing.",
  },
  {
    emoji: "🏗️",
    title: "Extract Blueprints or Diagrams",
    description:
      "Architects and engineers frequently need to share specific floor plans or technical diagrams from large project documents without sending the whole file.",
  },
  {
    emoji: "📧",
    title: "Reduce File Size for Email",
    description:
      "Many email clients reject attachments over 10MB. Extract only the pages you need, shrink the file significantly, and send without hitting attachment limits.",
  },
];

const faqs = [
  {
    question: "Is extracting pages from a PDF different from splitting a PDF?",
    answer:
      "They are closely related but used in different contexts. Splitting a PDF divides it into multiple parts based on page ranges. Extracting pages means selecting specific pages — sometimes non-consecutive — and saving them as a new PDF. SCENITH's tool supports both workflows: you can extract page 1, 5, and 12 into one file, or define ranges like 1–5 and 8–12 as separate outputs.",
  },
  {
    question: "Will extracted pages lose quality — fonts, images, formatting?",
    answer:
      "No. PDF page extraction is a lossless operation. The extracted pages retain 100% of the original content: embedded fonts, vector graphics, high-resolution images, hyperlinks, form fields, and exact layout. There is no re-encoding or compression during extraction.",
  },
  {
    question: "Can I extract pages from a scanned PDF?",
    answer:
      "Yes. Scanned PDFs (image-based pages) are fully supported. Since extraction works at the page object level — not at the text content level — scanned pages are extracted exactly as they appear in the original, with no loss of scan quality.",
  },
  {
    question: "Can I extract non-consecutive pages into one file?",
    answer:
      "Absolutely. You can define multiple page ranges and combine them. For example, extract pages 2, 7, and 13–18 into a single output PDF. The SCENITH tool lets you build complex extraction patterns through its intuitive range interface.",
  },
  {
    question: "Is there a page limit for extraction?",
    answer:
      "There are no page count restrictions. Whether your PDF has 10 pages or 10,000 pages, you can extract any number of pages from it. Processing time scales with file size but remains fast for the vast majority of real-world documents.",
  },
  {
    question: "Is my PDF data private and secure?",
    answer:
      "Yes. All file transfers use HTTPS encryption. Uploaded files are processed in isolated environments and are automatically purged after processing. SCENITH does not store, read, or share your document content.",
  },
  {
    question: "Do I need to create an account to use this tool?",
    answer:
      "Creating a free SCENITH account gives you access to the full PDF page extraction tool with no usage limits. The sign-up process takes under 30 seconds and requires no payment information.",
  },
  {
    question: "What's the difference between 'extract pages' and 'delete pages'?",
    answer:
      "Extracting pages saves your selected pages as a new document. Deleting pages removes certain pages and saves the remainder. These are inverse operations — both can be achieved using the SCENITH Split PDF tool by choosing which pages to keep or remove.",
  },
];

const competitors = [
  {
    name: "Adobe Acrobat",
    limitation: "Requires paid subscription (~$19.99/month) to extract pages",
  },
  {
    name: "ILovePDF",
    limitation: "Free tier limits file size to 15MB and adds watermarks",
  },
  {
    name: "Smallpdf",
    limitation: "Limits free users to 2 operations per day",
  },
  {
    name: "PDF2Go",
    limitation: "Processing speed is slower; UI is cluttered and ad-heavy",
  },
];

const ExtractPagesClient: FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://scenith.in/tools/pdf-tools/extract-pages-from-pdf-file",
        url: "https://scenith.in/tools/pdf-tools/extract-pages-from-pdf-file",
        name: "Extract Pages from PDF File Free Online | SCENITH",
        description:
          "Extract specific pages or page ranges from any PDF file online for free. No software installation, no watermarks, no file size limits.",
        isPartOf: {
          "@id": "https://scenith.in",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
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
              name: "Extract Pages from PDF",
              item: "https://scenith.in/tools/pdf-tools/extract-pages-from-pdf-file",
            },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "SCENITH PDF Page Extractor",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Extract specific pages from PDF",
          "Custom page range selection",
          "Non-consecutive page extraction",
          "Lossless quality preservation",
          "No file size limits",
          "Instant download",
        ],
        url: "https://scenith.in/tools/pdf-tools/split-pdf",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to Extract Pages from a PDF File",
        description:
          "Step-by-step guide to extracting specific pages from a PDF document online for free using SCENITH.",
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.description,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="extract-pages-root">
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="ep-hero">
          <div className="ep-container">
            <nav className="ep-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/tools/pdf-tools">PDF Tools</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Extract Pages from PDF</li>
              </ol>
            </nav>

            <div className="ep-hero-badge">🔥 Free · No Watermarks </div>

            <h1 className="ep-hero-title">
              Extract Pages from a PDF File —{" "}
              <span className="ep-gradient-text">Free &amp; Instant</span>
            </h1>

            <p className="ep-hero-subtitle">
              Need just page 3, or pages 5 through 12, or a mix of non-consecutive
              pages from a large PDF? Pull out exactly the pages you need in seconds.
              No software to install. No file size cap. No quality loss. Ever.
            </p>

            <div className="ep-hero-stats">
              <div className="ep-stat">
                <span className="ep-stat-number">100%</span>
                <span className="ep-stat-label">Quality Preserved</span>
              </div>
              <div className="ep-stat-divider" />
              <div className="ep-stat">
                <span className="ep-stat-number">0</span>
                <span className="ep-stat-label">File Size Limits</span>
              </div>
              <div className="ep-stat-divider" />
              <div className="ep-stat">
                <span className="ep-stat-number">&lt;10s</span>
                <span className="ep-stat-label">Average Processing</span>
              </div>
              <div className="ep-stat-divider" />
              <div className="ep-stat">
                <span className="ep-stat-number">Free</span>
                <span className="ep-stat-label">Always</span>
              </div>
            </div>

            {/* ── PRIMARY CTA ── */}
            <div className="ep-cta-wrapper">
              <Link href={TOOL_URL} className="ep-cta-primary">
                <span className="ep-cta-icon">⚡</span>
                Extract Pages from PDF Now
                <span className="ep-cta-arrow">→</span>
              </Link>
              <p className="ep-cta-subtext">
                Opens SCENITH's free PDF Split &amp; Extract tool — ready to use instantly
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <section className="ep-section ep-section--light" id="how-it-works">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">
                How to Extract Pages from a PDF in 3 Steps
              </h2>
              <p className="ep-section-subtitle">
                The entire process — from upload to download — takes under 30 seconds
                for most documents.
              </p>
            </div>

            <div className="ep-steps">
              {steps.map((step) => (
                <div key={step.number} className="ep-step-card">
                  <div className="ep-step-number">{step.number}</div>
                  <div className="ep-step-icon">{step.icon}</div>
                  <h3 className="ep-step-title">{step.title}</h3>
                  <p className="ep-step-desc">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="ep-cta-center">
              <Link href={TOOL_URL} className="ep-cta-primary ep-cta-medium">
                Start Extracting Pages Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT IS PAGE EXTRACTION ───────────────────────────────── */}
        <section className="ep-section" id="what-is">
          <div className="ep-container ep-two-col">
            <div className="ep-prose">
              <h2>What Does "Extract Pages from PDF" Actually Mean?</h2>
              <p>
                When you extract pages from a PDF file, you are copying one or more
                pages out of an existing document and saving them as a brand-new,
                standalone PDF — without altering the original file in any way.
              </p>
              <p>
                This is fundamentally different from <strong>deleting pages</strong>{" "}
                (which removes pages from the original) or{" "}
                <strong>splitting a PDF</strong> (which divides the whole document
                into sequential chunks). Page extraction gives you surgical
                precision: cherry-pick page 1, page 7, and pages 14–20 and combine
                them into a single new file, leaving everything else untouched.
              </p>
              <p>
                The extracted PDF retains 100% of the original page content — all
                text is searchable, all images remain at full resolution, all fonts
                are embedded, and all hyperlinks remain functional.
              </p>
              <h3>When should you extract pages instead of splitting?</h3>
              <p>
                Use <strong>page extraction</strong> when you need non-consecutive
                pages or a subset of pages that don't form a clean sequential range.
                Use <strong>splitting</strong> when you want to divide a document
                into sequential segments (e.g., chapters 1–5 and chapters 6–10).
                SCENITH's tool handles both with the same interface.
              </p>
            </div>
            <div className="ep-info-box">
              <div className="ep-info-box-header">
                <span>📌</span>
                <strong>Quick Reference: Page Extraction vs. Related Operations</strong>
              </div>
              <ul className="ep-comparison-list">
                <li>
                  <span className="ep-tag ep-tag--green">Extract Pages</span>
                  <span>Select specific pages → new PDF file</span>
                </li>
                <li>
                  <span className="ep-tag ep-tag--blue">Split PDF</span>
                  <span>Divide by sequential ranges → multiple PDFs</span>
                </li>
                <li>
                  <span className="ep-tag ep-tag--orange">Delete Pages</span>
                  <span>Remove pages → modified original PDF</span>
                </li>
                <li>
                  <span className="ep-tag ep-tag--purple">Merge PDF</span>
                  <span>Combine multiple PDFs → one PDF</span>
                </li>
              </ul>
              <div className="ep-info-box-footer">
                All operations available free on SCENITH PDF Tools
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────────────── */}
        <section className="ep-section ep-section--light" id="use-cases">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">
                Real-World Reasons People Extract PDF Pages
              </h2>
              <p className="ep-section-subtitle">
                From legal teams to students to healthcare professionals — page
                extraction is one of the most common PDF tasks across every industry.
              </p>
            </div>

            <div className="ep-use-case-grid">
              {useCases.map((uc) => (
                <div key={uc.title} className="ep-use-case-card">
                  <div className="ep-use-case-emoji">{uc.emoji}</div>
                  <h3 className="ep-use-case-title">{uc.title}</h3>
                  <p className="ep-use-case-desc">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY SCENITH vs COMPETITORS ────────────────────────────── */}
        <section className="ep-section" id="why-scenith">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">
                Why SCENITH Instead of Adobe, iLovePDF, or Smallpdf?
              </h2>
              <p className="ep-section-subtitle">
                Most PDF tools restrict free users with file size caps, daily
                operation limits, or forced watermarks. SCENITH doesn't.
              </p>
            </div>

            <div className="ep-compare-table-wrapper">
              <table className="ep-compare-table">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Free Tier Limitation</th>
                    <th>SCENITH Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c) => (
                    <tr key={c.name}>
                      <td className="ep-compare-name">{c.name}</td>
                      <td className="ep-compare-limit">
                        <span className="ep-badge ep-badge--red">⚠️ {c.limitation}</span>
                      </td>
                      <td className="ep-compare-scenith">
                        <span className="ep-badge ep-badge--green">
                          ✅ Unlimited, free, no watermarks
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ep-feature-pills">
              {[
                "✅ No watermarks ever",
                "✅ No daily operation limits",
                "✅ No file size cap",
                "✅ HTTPS encrypted transfers",
                "✅ Files auto-deleted after processing",
                "✅ Works on mobile & desktop",
                "✅ No software installation",
                "✅ Supports all PDF versions",
              ].map((pill) => (
                <span key={pill} className="ep-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── MIDDLE CTA ────────────────────────────────────────────── */}
        <section className="ep-section ep-section--cta-mid">
          <div className="ep-container ep-text-center">
            <h2 className="ep-cta-mid-title">
              Ready to Pull Out Exactly the Pages You Need?
            </h2>
            <p className="ep-cta-mid-sub">
               Free forever for core features.
            </p>
            <Link href={TOOL_URL} className="ep-cta-primary ep-cta-large">
              <span>⚡</span> Extract PDF Pages for Free
              <span className="ep-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── ADVANCED GUIDE ────────────────────────────────────────── */}
        <section className="ep-section ep-section--light" id="advanced">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">
                Advanced PDF Page Extraction: Tips, Patterns &amp; Best Practices
              </h2>
            </div>

            <div className="ep-advanced-grid">
              <div className="ep-advanced-card">
                <h3>🔢 Extracting Non-Consecutive Pages</h3>
                <p>
                  The most powerful feature of a proper page extractor is
                  non-consecutive selection. Instead of being locked into ranges
                  like "pages 1 to 5," you can pick page 1, page 4, page 9, and
                  pages 14–18 — all going into a single output file. This is
                  essential for creating curated documents: executive summaries,
                  highlight reels, or reviewer-specific subsets.
                </p>
              </div>

              <div className="ep-advanced-card">
                <h3>📐 Preserving Page Orientation During Extraction</h3>
                <p>
                  When extracting from mixed-orientation documents (some portrait,
                  some landscape pages), the extracted pages retain their individual
                  orientations exactly. A landscape chart on page 8 will remain
                  landscape in your extracted PDF — no manual rotation needed after
                  the fact.
                </p>
              </div>

              <div className="ep-advanced-card">
                <h3>📎 Extracting Pages with Embedded Form Fields</h3>
                <p>
                  PDF forms with interactive fields (text inputs, checkboxes,
                  dropdowns) are fully preserved during extraction. If you extract
                  a form page, the form remains interactive in the output. This is
                  critical for HR teams extracting specific form sections from
                  multi-page onboarding packages.
                </p>
              </div>

              <div className="ep-advanced-card">
                <h3>🖼️ Image-Heavy vs Text-Heavy PDFs</h3>
                <p>
                  Extraction performance is similar for both, but file size
                  characteristics differ. Extracting pages from an image-heavy
                  brochure will produce a large output; extracting from a
                  text-only legal brief will produce a small one. Neither affects
                  quality — the output is always a faithful copy of the selected
                  pages.
                </p>
              </div>

              <div className="ep-advanced-card">
                <h3>🔁 Batch Extraction Strategy</h3>
                <p>
                  For repetitive extraction tasks — like pulling monthly summary
                  pages from a year's worth of reports — define your ranges once
                  and process each document sequentially. The interface remembers
                  your last range configuration within a session, reducing
                  re-entry friction significantly.
                </p>
              </div>

              <div className="ep-advanced-card">
                <h3>🔐 Privacy-First Extraction</h3>
                <p>
                  Before sharing sensitive documents, extract only the relevant
                  pages instead of sharing the full file. A vendor proposal spanning
                  30 pages with internal pricing on pages 18–22 can safely be
                  shared as a 17-page extract — with the sensitive appendix never
                  leaving your machine. This is simpler and more reliable than
                  redaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="ep-section" id="faq">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">
                Frequently Asked Questions About PDF Page Extraction
              </h2>
              <p className="ep-section-subtitle">
                Everything you need to know before you extract your first page.
              </p>
            </div>

            <div className="ep-faq-grid">
              {faqs.map((faq) => (
                <div key={faq.question} className="ep-faq-card">
                  <h3 className="ep-faq-question">{faq.question}</h3>
                  <p className="ep-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ─────────────────────────────────────────── */}
        <section className="ep-section ep-section--light" id="related">
          <div className="ep-container">
            <div className="ep-section-header">
              <h2 className="ep-section-title">Related PDF Tools on SCENITH</h2>
              <p className="ep-section-subtitle">
                Everything you need for professional PDF management — in one place.
              </p>
            </div>

            <div className="ep-related-grid">
              {[
                {
                  href: "/tools/pdf-tools/merge-pdf",
                  icon: "🔗",
                  title: "Merge PDF",
                  desc: "Combine multiple PDFs into one document. Page-level drag-and-drop reordering included.",
                },
                {
                  href: "/tools/pdf-tools/compress-pdf",
                  icon: "📦",
                  title: "Compress PDF",
                  desc: "Reduce PDF file size by up to 90% without visible quality loss. Preset, percentage, or target-size modes.",
                },
                {
                  href: "/tools/pdf-tools/rotate-pdf",
                  icon: "🔄",
                  title: "Rotate PDF",
                  desc: "Rotate all pages or specific pages by 90° or 180°. Supports custom page selection.",
                },
                {
                  href: "/tools/pdf-tools/images-to-pdf",
                  icon: "🖼️",
                  title: "Images to PDF",
                  desc: "Convert JPG, PNG, WebP, and other images into a single PDF document with custom page ordering.",
                },
                {
                  href: "/tools/pdf-tools/pdf-to-images",
                  icon: "📷",
                  title: "PDF to Images",
                  desc: "Export every page of a PDF as a high-resolution image file for editing or sharing.",
                },
                {
                  href: "/tools/pdf-tools/add-watermark",
                  icon: "💧",
                  title: "Add Watermark",
                  desc: "Protect your PDFs with custom text watermarks. Control opacity, position, and text.",
                },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="ep-related-card">
                  <span className="ep-related-icon">{tool.icon}</span>
                  <h3 className="ep-related-title">{tool.title}</h3>
                  <p className="ep-related-desc">{tool.desc}</p>
                  <span className="ep-related-link">Use free →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="ep-section ep-section--final-cta">
          <div className="ep-container ep-text-center">
            <div className="ep-final-cta-icon">📄</div>
            <h2 className="ep-final-cta-title">
              Extract the Exact Pages You Need — Right Now
            </h2>
            <p className="ep-final-cta-sub">
              Join thousands of professionals who use SCENITH to handle PDF tasks
              daily. Free, fast, private, and powerful.
            </p>
            <div className="ep-final-cta-buttons">
              <Link href={TOOL_URL} className="ep-cta-primary ep-cta-large">
                <span>⚡</span> Extract PDF Pages Free
                <span className="ep-cta-arrow">→</span>
              </Link>
              <Link href="/tools/pdf-tools" className="ep-cta-secondary">
                Browse All PDF Tools
              </Link>
            </div>
            <p className="ep-final-disclaimer">
              No credit card · No watermarks · No file size limits · Files deleted after processing
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExtractPagesClient;