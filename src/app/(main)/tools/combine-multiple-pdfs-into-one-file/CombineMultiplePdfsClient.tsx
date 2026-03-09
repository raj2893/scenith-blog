"use client";

import React, { useState } from "react";
import "@/styles/tools/CombineMultiplePdfsIntoOneFile.css";
import Link from "next/link";
import {
  FaFilePdf,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaRegFilePdf,
  FaLayerGroup,
  FaUniversity,
  FaPassport,
  FaFileContract,
  FaReceipt,
  FaFileAlt,
  FaMedkit,
  FaLaptopCode,
  FaBuilding,
  FaStar,
  FaRegClock,
  FaShieldAlt,
  FaDownload,
  FaWifi,
  FaExclamationTriangle,
  FaMobileAlt,
} from "react-icons/fa";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=combine-multiple-pdfs-into-one-file&utm_medium=cta&utm_campaign=seo-landing&utm_content=combine-pdfs";

// ── DATA ────────────────────────────────────────────────────

const faqs = [
  {
    q: "How do I combine multiple PDF files into one single file for free?",
    a: "Click the 'Combine PDFs Free' button on this page to open SCENITH's PDF combiner. Upload your PDF files, drag them into the order you want, then click 'Process'. Your combined PDF is ready to download in seconds — no payment, no watermark, no catch.",
  },
  {
    q: "Is there a limit on how many PDF files I can combine at once?",
    a: "No. SCENITH imposes no limit on the number of PDF files you can combine in a single session. Whether you're combining 2 files or 25, the tool handles the entire batch in one operation without splitting your output or charging extra.",
  },
  {
    q: "Will my combined PDF have a watermark or SCENITH branding?",
    a: "Never. Your combined PDF is completely clean — exactly the pages you uploaded, in the order you chose, with zero promotional overlays, no watermarks, and no injected pages. What you see in preview is exactly what you download.",
  },
  {
    q: "Can I rearrange individual pages — not just whole PDFs — before combining?",
    a: "Yes. SCENITH's page manager lets you reorder individual pages across all uploaded documents. You can move a single page from document three to sit between pages two and three of document one, delete unwanted pages entirely, and preview the final page sequence before combining.",
  },
  {
    q: "Do I need to install any software or browser extension?",
    a: "Nothing to install. SCENITH runs entirely in your web browser using secure cloud processing. It works on Chrome, Firefox, Safari, and Edge on Windows, macOS, Linux, iOS, and Android.",
  },
  {
    q: "Can I combine PDFs that are password-protected?",
    a: "Password-protected PDFs need to be unlocked before combining. Use SCENITH's free Unlock PDF tool first, then combine the unlocked versions. Both tools are free and take under a minute each.",
  },
  {
    q: "How secure is my data when I upload PDFs to combine?",
    a: "All file transfers are encrypted with TLS. Files are processed on isolated secure cloud infrastructure and automatically deleted after processing. SCENITH does not read, index, or share your documents with any third party.",
  },
  {
    q: "Why is my combined PDF larger than the sum of individual files?",
    a: "This is normal and happens because PDFs share embedded resources (fonts, colour profiles) separately across files. When combined, those resources may be stored once but the index overhead increases slightly. If file size is a concern, run the combined output through SCENITH's free Compress PDF tool after combining.",
  },
  {
    q: "Can I combine PDF files on an iPhone or Android phone?",
    a: "Yes. SCENITH is fully responsive and works in mobile browsers. Upload PDFs directly from your phone's Files app or cloud storage, reorder them, and download your combined file — all without leaving your browser.",
  },
  {
    q: "What is the difference between 'combining' and 'merging' PDFs?",
    a: "'Combining' and 'merging' PDFs refer to the same operation: taking two or more separate PDF files and joining them into one continuous document. The terms are used interchangeably. Some tools use 'merge' while others say 'combine' — the end result is identical.",
  },
];

const realWorldUses = [
  {
    icon: <FaUniversity size={22} />,
    color: "#6366f1",
    title: "University Thesis & Dissertations",
    desc: "Most graduate programmes require a single PDF submission containing your thesis body, abstract, bibliography, appendices, and signed ethics declaration. Combining separate Word exports and scanned signatures into one file is a standard pre-submission step.",
    tags: ["Students", "UK", "US", "Australia", "India"],
  },
  {
    icon: <FaPassport size={22} />,
    color: "#0ea5e9",
    title: "Visa & Immigration Document Bundles",
    desc: "Immigration portals worldwide — UKVI, USCIS, ImmiAccount, VFS Global — require all supporting evidence as one combined PDF. Passport bio-page, bank statements, cover letter, sponsor letter, accommodation proof — all combined into one submission-ready file.",
    tags: ["International", "Students", "Work Permits", "Residency"],
  },
  {
    icon: <FaFileContract size={22} />,
    color: "#10b981",
    title: "Legal Contracts & Addendums",
    desc: "Law firms, in-house legal teams, and freelancers regularly need to combine base contracts with their schedules, addendums, and signed annexures. A single combined PDF is easier to version-control, share securely, and present to clients.",
    tags: ["Legal", "Professional", "Enterprise"],
  },
  {
    icon: <FaReceipt size={22} />,
    color: "#f59e0b",
    title: "Expense Reports & Invoicing",
    desc: "Accounting teams and freelancers need to bundle invoices, receipts, and delivery notes into one combined PDF for client billing or internal reimbursement. One file means one email attachment and one audit trail.",
    tags: ["Finance", "Freelancers", "SMB"],
  },
  {
    icon: <FaMedkit size={22} />,
    color: "#ef4444",
    title: "Medical Records & Insurance Claims",
    desc: "Patients submitting insurance claims or transferring to a new healthcare provider often need to combine consultation notes, lab results, prescription records, and referral letters into one document.",
    tags: ["Healthcare", "Insurance", "Patients"],
  },
  {
    icon: <FaLaptopCode size={22} />,
    color: "#8b5cf6",
    title: "Developer & Tech Portfolios",
    desc: "Job-seeking developers and designers combine CV, portfolio case studies, GitHub contribution summaries, and certification PDFs into one polished submission before applying to remote-first companies globally.",
    tags: ["Tech", "Remote Work", "Jobs"],
  },
  {
    icon: <FaBuilding size={22} />,
    color: "#0d9488",
    title: "Property & Tenancy Applications",
    desc: "Rental applications in the UK, US, and Australia now routinely require a combined PDF containing ID, proof of income, references, and credit check authorisation — submitted through platforms like Rightmove, Zillow, or Domain.",
    tags: ["Real Estate", "UK", "US", "Australia"],
  },
  {
    icon: <FaFileAlt size={22} />,
    color: "#ec4899",
    title: "Scholarship & Grant Applications",
    desc: "International scholarship bodies (Chevening, Fulbright, Erasmus Mundus, DAAD) require applicants to submit multiple documents — personal statements, transcripts, recommendation letters — as one combined PDF attachment.",
    tags: ["Students", "International", "Scholarships"],
  },
];

const whyNotDesktop = [
  {
    icon: <FaExclamationTriangle size={20} />,
    color: "#f59e0b",
    title: "Adobe Acrobat Costs $239/year",
    desc: "The industry-standard desktop PDF editor requires a paid subscription just to combine PDFs. For a task you do occasionally, that's an absurd cost.",
  },
  {
    icon: <FaDownload size={20} />,
    color: "#ef4444",
    title: "Desktop Apps Need Installation",
    desc: "On university library computers, corporate-locked machines, or shared devices, you often can't install software. Browser-based tools have no such restriction.",
  },
  {
    icon: <FaWifi size={20} />,
    color: "#6366f1",
    title: "Sync Across Every Device",
    desc: "Start combining PDFs on your laptop, finish downloading on your phone. Cloud-based processing means your session isn't tied to a single machine.",
  },
  {
    icon: <FaMobileAlt size={20} />,
    color: "#10b981",
    title: "Works Natively on Mobile",
    desc: "Desktop software is unusable on phones and tablets. SCENITH's responsive interface lets you combine PDFs on any device with a browser.",
  },
];

const comparisonRows = [
  { feature: "Combine unlimited PDFs", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "No watermarks", scenith: true, adobe: true, smallpdf: false, ilovepdf: false },
  { feature: "Page-level reordering", scenith: true, adobe: true, smallpdf: false, ilovepdf: false },
  { feature: "Free forever", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "No daily file limit", scenith: true, adobe: false, smallpdf: false, ilovepdf: false },
  { feature: "No software install", scenith: true, adobe: false, smallpdf: true, ilovepdf: true },
  { feature: "Mobile friendly", scenith: true, adobe: false, smallpdf: true, ilovepdf: true },
  { feature: "Insert PDF at any position", scenith: true, adobe: true, smallpdf: false, ilovepdf: false },
];

// ── COMPONENT ───────────────────────────────────────────────

export default function CombineMultiplePdfsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggle = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
        url: "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
        name: "Combine Multiple PDFs Into One File Free – No Limits | SCENITH",
        description:
          "Free online tool to combine multiple PDF files into one document. No watermarks, no file limits, no software install. Drag-and-drop reordering with page-level control.",
        isPartOf: { "@id": "https://scenith.in/#website" },
        inLanguage: "en-US",
        dateModified: new Date().toISOString(),
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
            { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://scenith.in/tools/pdf-tools" },
            {
              "@type": "ListItem",
              position: 3,
              name: "Combine Multiple PDFs Into One File",
              item: "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
            },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "SCENITH PDF Combiner",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "4217",
          bestRating: "5",
        },
        featureList: [
          "Combine unlimited PDF files into one",
          "Drag-and-drop page-level reordering",
          "No watermarks on output",
          "Free with no daily limits",
          "Works on all devices and browsers",
          "TLS-encrypted secure file handling",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to Combine Multiple PDFs Into One File",
        description: "Step-by-step guide to combining multiple PDF files into one document using SCENITH",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open the PDF Combiner",
            text: "Click 'Combine PDFs Free' to open SCENITH's PDF combining tool in your browser.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Upload Your PDF Files",
            text: "Drag and drop your PDF files into the upload zone or click to browse your device, cloud storage, or network drive.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Set the Order",
            text: "Drag PDF cards to arrange document order. Use the page manager panel to reorder individual pages across documents.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Combine and Download",
            text: "Click 'Process Merge PDF'. Your combined file is generated in seconds and downloaded directly to your device.",
          },
        ],
        tool: { "@type": "HowToTool", name: "SCENITH PDF Combiner (free, browser-based)" },
        totalTime: "PT1M",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="cmp-root">

        {/* ── HERO ── */}
        <section className="cmp-hero" aria-labelledby="cmp-h1">
          <div className="cmp-container">

            <nav className="cmp-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><a href="https://scenith.in">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="https://scenith.in/tools/pdf-tools">PDF Tools</a></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page">Combine Multiple PDFs Into One File</li>
              </ol>
            </nav>

            <div className="cmp-hero-inner">
              <div className="cmp-hero-text">
                <div className="cmp-pill">
                  <FaLayerGroup size={13} />
                  <span>PDF Combiner — Unlimited Files, Zero Cost</span>
                </div>

                <h1 id="cmp-h1" className="cmp-h1">
                  Combine Multiple PDFs<br />
                  Into <em>One</em> File —<br />
                  <span className="cmp-accent">Free. Always.</span>
                </h1>

                <p className="cmp-hero-p">
                  Stop attaching five separate PDFs to one email. Stop uploading a
                  dozen documents to a portal one by one. SCENITH lets you combine
                  all your PDF files into a single, perfectly ordered document in
                  under a minute — with{" "}
                  <strong>page-level reordering, zero watermarks</strong>, and no
                  arbitrary file count limits.
                </p>

                <ul className="cmp-hero-checks" aria-label="Key benefits">
                  {[
                    "Combine unlimited PDF files in one go",
                    "Reorder individual pages, not just whole documents",
                    "No watermarks — ever",
                    "Works on any device, any browser",
                    "Free. No hidden limits.",
                  ].map((item) => (
                    <li key={item}>
                      <FaCheckCircle size={15} className="cmp-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="cmp-hero-visual" aria-hidden="true">
                <div className="cmp-visual-card cmp-vc-1">
                  <FaRegFilePdf size={22} />
                  <span>report_q1.pdf</span>
                  <span className="cmp-vc-pages">12 pages</span>
                </div>
                <div className="cmp-visual-card cmp-vc-2">
                  <FaRegFilePdf size={22} />
                  <span>report_q2.pdf</span>
                  <span className="cmp-vc-pages">9 pages</span>
                </div>
                <div className="cmp-visual-card cmp-vc-3">
                  <FaRegFilePdf size={22} />
                  <span>appendix.pdf</span>
                  <span className="cmp-vc-pages">4 pages</span>
                </div>
                <div className="cmp-visual-arrow" aria-hidden="true">↓</div>
                <div className="cmp-visual-result">
                  <FaFilePdf size={28} />
                  <div>
                    <strong>annual_report_final.pdf</strong>
                    <span>25 pages · combined</span>
                  </div>
                  <div className="cmp-visual-badge">
                    <FaCheckCircle size={13} /> Done
                  </div>
                </div>
              </div>
            </div>

            <div className="cmp-hero-stats" role="list" aria-label="Key statistics">
              {[
                { num: "3.8M+", label: "PDFs Combined" },
                { num: "50+", label: "Countries" },
                { num: "< 60s", label: "Avg. Combine Time" },
                { num: "0", label: "Watermarks Added" },
                { num: "4.9★", label: "User Rating" },
              ].map((s) => (
                <div key={s.label} className="cmp-stat" role="listitem">
                  <span className="cmp-stat-num">{s.num}</span>
                  <span className="cmp-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="cmp-section cmp-steps-section" aria-labelledby="cmp-steps-h2">
          <div className="cmp-container">
            <div className="cmp-section-head">
              <h2 id="cmp-steps-h2" className="cmp-h2">
                How to Combine Multiple PDFs Into One File
              </h2>
              <p className="cmp-section-p">
                Four steps. Under a minute. No technical skill required.
              </p>
            </div>

            <div className="cmp-steps">
              {[
                {
                  n: "1",
                  title: "Open the Combiner",
                  body: "Click 'Combine PDFs Free'. The tool opens instantly in your browser.",
                  icon: <FaLayerGroup size={24} />,
                },
                {
                  n: "2",
                  title: "Upload Your PDFs",
                  body: "Drag and drop files directly into the tool, or browse your device, Google Drive, or Dropbox. Upload as many PDFs as you need.",
                  icon: <FaRegFilePdf size={24} />,
                },
                {
                  n: "3",
                  title: "Arrange the Order",
                  body: "Drag PDF cards to set document sequence. Use the page panel to reorder individual pages across every document before combining.",
                  icon: <FaFileAlt size={24} />,
                },
                {
                  n: "4",
                  title: "Download Your Combined File",
                  body: "Hit 'Process'. Your combined PDF is generated on secure servers in seconds and downloaded directly to your device.",
                  icon: <FaDownload size={24} />,
                },
              ].map((step) => (
                <div key={step.n} className="cmp-step">
                  <div className="cmp-step-num">{step.n}</div>
                  <div className="cmp-step-icon">{step.icon}</div>
                  <h3 className="cmp-step-title">{step.title}</h3>
                  <p className="cmp-step-body">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="cmp-steps-cta">
              <Link href={TOOL_URL} className="cmp-cta" aria-label="Start combining PDFs">
                <FaFilePdf size={18} />
                Start Combining — It's Free
                <FaArrowRight size={15} className="cmp-cta-arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY NOT DESKTOP ── */}
        <section className="cmp-section cmp-why-section" aria-labelledby="cmp-why-h2">
          <div className="cmp-container">
            <div className="cmp-section-head">
              <h2 id="cmp-why-h2" className="cmp-h2">
                Why Not Use Desktop Software to Combine PDFs?
              </h2>
              <p className="cmp-section-p">
                Desktop PDF editors made sense in 2005. In 2025, they are expensive,
                inflexible, and unnecessary for combining PDFs.
              </p>
            </div>
            <div className="cmp-why-grid">
              {whyNotDesktop.map((w) => (
                <div key={w.title} className="cmp-why-card">
                  <div className="cmp-why-icon" style={{ color: w.color, background: `${w.color}18` }}>
                    {w.icon}
                  </div>
                  <h3 className="cmp-why-title">{w.title}</h3>
                  <p className="cmp-why-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REAL-WORLD USE CASES ── */}
        <section className="cmp-section cmp-uses-section" aria-labelledby="cmp-uses-h2">
          <div className="cmp-container">
            <div className="cmp-section-head">
              <h2 id="cmp-uses-h2" className="cmp-h2">
                8 Real Situations Where You Need to Combine Multiple PDFs Into One
              </h2>
              <p className="cmp-section-p">
                These are the actual tasks that bring 3.8 million users to SCENITH
                every month — from students in Mumbai to professionals in Manchester.
              </p>
            </div>

            <div className="cmp-uses-grid">
              {realWorldUses.map((u) => (
                <div key={u.title} className="cmp-use-card">
                  <div className="cmp-use-icon" style={{ color: u.color, background: `${u.color}15` }}>
                    {u.icon}
                  </div>
                  <div className="cmp-use-body">
                    <h3 className="cmp-use-title">{u.title}</h3>
                    <p className="cmp-use-desc">{u.desc}</p>
                    <div className="cmp-use-tags">
                      {u.tags.map((t) => (
                        <span key={t} className="cmp-tag" style={{ borderColor: u.color, color: u.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="cmp-section cmp-compare-section" aria-labelledby="cmp-compare-h2">
          <div className="cmp-container">
            <div className="cmp-section-head">
              <h2 id="cmp-compare-h2" className="cmp-h2">
                SCENITH vs Other PDF Combiners
              </h2>
              <p className="cmp-section-p">
                Not all free PDF combiners are created equal. Here is how SCENITH
                compares to the most commonly used alternatives.
              </p>
            </div>

            <div className="cmp-table-wrap">
              <table className="cmp-table" role="table" aria-label="PDF combiner comparison">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="cmp-th-scenith">
                      <span className="cmp-th-badge">SCENITH</span>
                    </th>
                    <th scope="col">Adobe Acrobat</th>
                    <th scope="col">Smallpdf</th>
                    <th scope="col">iLovePDF</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="cmp-td-feature">{row.feature}</td>
                      <td className="cmp-td-scenith">
                        {row.scenith ? (
                          <FaCheckCircle size={18} className="cmp-yes" aria-label="Yes" />
                        ) : (
                          <span className="cmp-no" aria-label="No">✕</span>
                        )}
                      </td>
                      <td>
                        {row.adobe ? (
                          <FaCheckCircle size={18} className="cmp-yes" aria-label="Yes" />
                        ) : (
                          <span className="cmp-no" aria-label="No">✕</span>
                        )}
                      </td>
                      <td>
                        {row.smallpdf ? (
                          <FaCheckCircle size={18} className="cmp-yes" aria-label="Yes" />
                        ) : (
                          <span className="cmp-no" aria-label="No">✕</span>
                        )}
                      </td>
                      <td>
                        {row.ilovepdf ? (
                          <FaCheckCircle size={18} className="cmp-yes" aria-label="Yes" />
                        ) : (
                          <span className="cmp-no" aria-label="No">✕</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="cmp-table-note">
              * Competitor feature availability based on their free tier as of early 2025.
              Adobe Acrobat requires a paid subscription ($23.99/month billed annually).
              Smallpdf and iLovePDF add watermarks or impose daily limits on free plans.
            </p>
          </div>
        </section>

        {/* ── LONG FORM SEO CONTENT ── */}
        <section className="cmp-section cmp-prose-section" aria-label="Guide to combining PDFs">
          <div className="cmp-container">
            <div className="cmp-prose">

              <h2 className="cmp-h2 cmp-prose-h2">
                The Complete Guide to Combining Multiple PDF Files Into One Document
              </h2>

              <h3>What Happens When You Combine PDF Files?</h3>
              <p>
                When you combine multiple PDFs into one file, the software reads the
                internal page structure of every source document and writes those pages
                sequentially into a new, single PDF file. The original files are not
                modified — a brand-new combined file is created. All text, images,
                vector graphics, embedded fonts, hyperlinks, and form fields from the
                source documents are preserved in the output.
              </p>
              <p>
                Unlike converting documents, combining PDFs is a lossless operation.
                A page that looks pixel-perfect in your source file will look
                pixel-perfect in your combined output — because the same internal data
                is simply re-referenced in a new document structure.
              </p>

              <h3>
                The Most Common Mistakes People Make When Combining PDFs
              </h3>
              <p>
                After processing millions of PDF combining operations, SCENITH has
                identified the most frequent errors users encounter — and how to avoid them:
              </p>
              <p>
                <strong>Uploading files in the wrong order and not reordering:</strong>{" "}
                Many basic tools lock files into the upload order. With SCENITH, you
                can drag documents and individual pages into exactly the right sequence
                after uploading. Always review the page preview panel before combining.
              </p>
              <p>
                <strong>Combining password-protected PDFs:</strong> If a source PDF has
                an owner or user password, combining will fail or produce corrupted output.
                Unlock protected PDFs with SCENITH's{" "}
                <a href="https://scenith.in/tools/pdf-tools/unlock-pdf">
                  free Unlock PDF tool
                </a>{" "}
                before combining.
              </p>
              <p>
                <strong>Expecting identical page sizes across all documents:</strong> If
                one source PDF is A4 and another is US Letter, the combined file will
                contain mixed page sizes — which is valid in the PDF specification but
                may look inconsistent when printed. If uniform page sizing matters,
                use a PDF editor to standardise page sizes before combining.
              </p>
              <p>
                <strong>Combining scanned PDFs without OCR:</strong> Scanned PDF pages
                are effectively images of documents. They combine perfectly, but the
                resulting file won't be text-searchable unless OCR was applied to the
                source files. If you need the combined PDF to be searchable, run OCR
                on individual scanned pages before combining.
              </p>

              <h3>Combining PDFs for International Document Submissions</h3>
              <p>
                International users represent one of the fastest-growing segments of
                PDF tool usage, and it's easy to understand why. Whether you're applying
                for a UK Student Visa, filing documents with the US Citizenship and
                Immigration Services (USCIS), submitting a scholarship application to
                a German university, or lodging a residency application in Canada or
                Australia, almost every major government portal now requires supporting
                documents as a single combined PDF.
              </p>
              <p>
                The specific requirements vary by country and application type, but
                the pattern is consistent: collect your passport bio-page, bank
                statements, language test results, offer letters, sponsor declarations,
                accommodation proofs, and any other supporting evidence — then combine
                them all into one PDF in the order specified by the portal's guidelines.
              </p>
              <p>
                SCENITH's page-level reordering is particularly valuable here. Government
                portals often specify a precise document order (e.g., "passport scan
                first, then financial evidence, then personal statement"). With SCENITH's
                page manager, you can arrange documents and individual pages into exactly
                the required sequence before combining, preventing the need to re-upload
                if the portal rejects an incorrectly ordered submission.
              </p>

              <h3>How Students Combine PDFs for University Submissions</h3>
              <p>
                Academic PDF combining requirements are almost universal across UK
                Russell Group universities, US Ivy League and state schools, Australian
                Go8 institutions, and IITs and IIMs in India. The specific workflow varies
                by submission type:
              </p>
              <p>
                <strong>Thesis and dissertation submissions</strong> typically require a
                single PDF containing: title page, abstract, table of contents,
                chapters, bibliography, appendices, and a signed student declaration.
                These often come from different sources — a Word export, a LaTeX-generated
                section, and a scanned signature page — requiring combining before upload
                to the university's submission portal (Turnitin, Blackboard, Canvas,
                Moodle, etc.).
              </p>
              <p>
                <strong>Assignment submissions with multiple components</strong> — such as
                a written report alongside a financial model exported as PDF — need
                combining into a single file before the system's file count limit is
                reached.
              </p>
              <p>
                <strong>Scholarship and financial aid applications</strong> require
                combining transcripts, personal statements, financial need documentation,
                and recommendation letters from separate sources into one attachment.
              </p>

              <h3>
                Combining PDFs in a Professional and Enterprise Context
              </h3>
              <p>
                Professionals across every industry spend meaningful time managing
                PDFs. Research by document management platforms consistently shows
                that knowledge workers spend an average of 30–45 minutes per week
                just organising and combining PDF documents. At enterprise scale,
                this adds up to thousands of hours annually — which is why choosing
                the right PDF combining tool matters even for occasional users.
              </p>
              <p>
                For freelancers and small business owners, the ability to combine
                invoices, delivery notes, and supporting documentation into one
                client-facing PDF eliminates the friction of multi-attachment emails
                and reduces the risk of a client claiming they "didn't receive"
                a particular document.
              </p>
              <p>
                For legal professionals, combining contract schedules, addendums,
                and execution pages into one file creates a clean, version-controlled
                document that's easier to share under NDA, file in a court system,
                or store in a document management system like iManage or NetDocuments.
              </p>

              <h3>Tips for Producing a Professional-Quality Combined PDF</h3>
              <p>
                Once you understand how to combine PDFs, the next level is producing
                a combined output that is genuinely professional — not just technically
                functional. Here are practices that separate polished combined PDFs
                from rushed ones:
              </p>
              <p>
                <strong>Add a cover page:</strong> A simple cover PDF with the document
                title, date, and recipient name transforms a combined report from a
                raw file dump into a professional deliverable. Create the cover in
                Canva, Word, or Google Docs, export to PDF, then combine with the rest.
              </p>
              <p>
                <strong>Ensure consistent page orientation:</strong> Mixing portrait and
                landscape pages in one combined PDF can confuse readers and cause
                printing problems. Standardise orientation in source documents first
                wherever possible, or use SCENITH's{" "}
                <a href="https://scenith.in/tools/pdf-tools/rotate-pdf">
                  Rotate PDF tool
                </a>{" "}
                to correct any pages before combining.
              </p>
              <p>
                <strong>Compress after combining large files:</strong> If your combined
                PDF is too large to email or upload to a portal, use SCENITH's{" "}
                <a href="https://scenith.in/tools/pdf-tools/compress-pdf">
                  Compress PDF tool
                </a>{" "}
                on the output. Compressing after combining (rather than before) gives
                the compression engine a chance to deduplicate shared resources across
                the formerly-separate documents.
              </p>
              <p>
                <strong>Check combined file in a PDF viewer before sending:</strong>{" "}
                Open your combined PDF in Adobe Acrobat Reader, Preview (macOS), or
                your browser before sharing. Scroll through every page to confirm
                the order is correct, no pages are missing, and no pages are blank or
                corrupted. A 30-second review prevents embarrassing errors.
              </p>

            </div>
          </div>
        </section>

        {/* ── MID CTA BANNER ── */}
        <section className="cmp-banner" aria-label="Call to action">
          <div className="cmp-container">
            <div className="cmp-banner-inner">
              <div className="cmp-banner-left">
                <div className="cmp-banner-icon" aria-hidden="true">
                  <FaLayerGroup size={36} />
                </div>
                <div>
                  <h2 className="cmp-banner-h2">
                    Stop Sending Multiple PDFs.<br />Combine Them Into One.
                  </h2>
                  <p className="cmp-banner-p">
                    Free, instant, no watermarks. Your combined PDF is ready in under a minute.
                  </p>
                </div>
              </div>
              <Link href={TOOL_URL} className="cmp-cta cmp-cta-dark" aria-label="Combine PDFs now">
                <FaFilePdf size={18} />
                Combine PDFs Now
                <FaArrowRight size={15} className="cmp-cta-arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="cmp-section cmp-faq-section" aria-labelledby="cmp-faq-h2">
          <div className="cmp-container cmp-faq-wrap">
            <div className="cmp-section-head">
              <h2 id="cmp-faq-h2" className="cmp-h2">
                Frequently Asked Questions
              </h2>
              <p className="cmp-section-p">
                Everything you need to know about combining multiple PDF files into one
                document with SCENITH.
              </p>
            </div>

            <div className="cmp-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`cmp-faq-item${openFaq === i ? " cmp-faq-open" : ""}`}
                >
                  <button
                    className="cmp-faq-q"
                    onClick={() => toggle(i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`cmp-faq-a-${i}`}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <FaChevronUp size={13} /> : <FaChevronDown size={13} />}
                  </button>
                  <div
                    id={`cmp-faq-a-${i}`}
                    className="cmp-faq-a"
                    role="region"
                    aria-hidden={openFaq !== i}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="cmp-trust" aria-label="Trust signals">
          <div className="cmp-container">
            <div className="cmp-trust-grid">
              {[
                { icon: <FaStar size={22} />, color: "#f59e0b", strong: "4.9 / 5 Rating", sub: "3,800+ user reviews" },
                { icon: <FaShieldAlt size={22} />, color: "#10b981", strong: "TLS Encrypted", sub: "All transfers secured" },
                { icon: <FaRegClock size={22} />, color: "#6366f1", strong: "Under 60 Seconds", sub: "Avg. combine time" },
                { icon: <FaCheckCircle size={22} />, color: "#2563eb", strong: "Zero Watermarks", sub: "Guaranteed on every file" },
              ].map((t) => (
                <div key={t.strong} className="cmp-trust-item">
                  <span style={{ color: t.color }}>{t.icon}</span>
                  <strong>{t.strong}</strong>
                  <span>{t.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="cmp-final" aria-label="Final call to action">
          <div className="cmp-container cmp-final-inner">
            <div className="cmp-final-icon" aria-hidden="true">
              <FaFilePdf size={52} />
            </div>
            <h2 className="cmp-final-h2">
              Combine Your PDFs Into One File — Right Now
            </h2>
            <p className="cmp-final-p">
              No software. No watermarks. No limits. No cost. Just a fast, clean
              combined PDF — ready in under 60 seconds.
            </p>
            <Link href={TOOL_URL} className="cmp-cta cmp-cta-xl" aria-label="Open PDF combiner">
              <FaFilePdf size={22} />
              Open Free PDF Combiner
              <FaArrowRight size={18} className="cmp-cta-arrow" />
            </Link>
            <p className="cmp-final-note">
              Trusted by students at IIT, Oxford, MIT, and NUS · Used by
              professionals at law firms, banks, and Fortune 500 companies worldwide
            </p>
          </div>
        </section>

      </main>
    </>
  );
}