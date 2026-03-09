"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/tools/MergePdfFilesOnline.css";

import {
  FaFilePdf,
  FaArrowRight,
  FaCheckCircle,
  FaGraduationCap,
  FaBriefcase,
  FaGlobe,
  FaLock,
  FaBolt,
  FaInfinity,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaFileAlt,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge-pdf-files-online&utm_medium=cta&utm_campaign=seo-landing";

const faqs = [
  {
    q: "Is it really free to merge PDF files on SCENITH?",
    a: "Yes, completely free. There are no hidden charges, no subscription traps, and no watermarks added to your merged PDF. You can combine as many PDFs as you need without spending a single penny.",
  },
  {
    q: "How many PDF files can I combine at once?",
    a: "SCENITH imposes no artificial file count limits. Whether you need to merge 2 PDFs or 20, the tool handles it all in one go. Large batches are processed on our secure servers so your device never slows down.",
  },
  {
    q: "Do I need to create an account to merge PDFs?",
    a: "A free SCENITH account lets you access the tool and keep your processing history. Signing up takes under 30 seconds with Google or email .",
  },
  {
    q: "Is my data safe when I upload PDFs?",
    a: "Absolutely. All file transfers use TLS encryption in transit, and files are stored on secure cloud infrastructure. We do not share, sell, or read your documents. Files are automatically purged after processing.",
  },
  {
    q: "Can I reorder pages before merging?",
    a: "Yes — and this is one of SCENITH's standout features. You can drag and drop entire PDFs to reorder documents, and even rearrange individual pages within the merged output before finalising.",
  },
  {
    q: "Does it work on mobile phones and tablets?",
    a: "Yes. SCENITH's PDF merger is fully responsive and works on iOS and Android browsers. For advanced page-level reordering, a desktop or laptop gives you the best experience.",
  },
  {
    q: "What file size limit applies to PDF uploads?",
    a: "Our platform supports large PDF uploads suitable for professional and academic use. For extremely large files (hundreds of MB each), we recommend splitting oversized PDFs first to optimise processing speed.",
  },
  {
    q: "Can international students and professionals use this tool?",
    a: "SCENITH serves users in over 50 countries. The tool is available in English and works in any modern browser worldwide — no region restrictions, no VPN needed.",
  },
];

const steps = [
  {
    number: "01",
    icon: <FaCloudUploadAlt size={28} />,
    title: "Upload Your PDFs",
    desc: "Click 'Merge PDFs Now' and drag-and-drop your files or browse your device. Upload as many PDFs as you need — there's no cap.",
  },
  {
    number: "02",
    icon: <FaLayerGroup size={28} />,
    title: "Arrange the Order",
    desc: "Drag PDF cards to set the exact sequence. Need page-level control? Reorder individual pages from every document in our visual page manager.",
  },
  {
    number: "03",
    icon: <FaFileAlt size={28} />,
    title: "Merge & Download",
    desc: "Hit 'Process Merge PDF' and your combined file is ready in seconds. Download it instantly — no email required, no waiting.",
  },
];

const useCases = [
  {
    icon: <FaGraduationCap size={32} />,
    label: "Students",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    points: [
      "Combine research chapters into one thesis PDF",
      "Merge lecture slides and handouts for exam prep",
      "Submit multi-document assignments as a single file",
      "Bundle internship certificates and transcripts",
    ],
  },
  {
    icon: <FaBriefcase size={32} />,
    label: "Professionals",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    points: [
      "Consolidate client contracts and annexures",
      "Combine invoices and receipts for accounting",
      "Merge multi-part reports into boardroom-ready docs",
      "Package portfolio samples in a single shareable PDF",
    ],
  },
  {
    icon: <FaGlobe size={32} />,
    label: "International Users",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    points: [
      "Merge visa documents, letters, and ID scans",
      "Combine immigration forms and supporting evidence",
      "Bundle scholarship applications across multiple PDFs",
      "Join translated documents with originals for embassies",
    ],
  },
];

const features = [
  {
    icon: <FaBolt size={22} />,
    color: "#f59e0b",
    title: "Lightning Fast Processing",
    desc: "Cloud-powered servers merge your PDFs in seconds regardless of file count or size. No waiting, no queues.",
  },
  {
    icon: <FaInfinity size={22} />,
    color: "#6366f1",
    title: "No File Limits",
    desc: "Combine two PDFs or twenty. There are zero artificial restrictions on how many files you can merge per session.",
  },
  {
    icon: <FaLock size={22} />,
    color: "#10b981",
    title: "Bank-Grade Security",
    desc: "TLS encryption on all transfers. Your documents are never shared, never indexed, and auto-deleted post-processing.",
  },
  {
    icon: <FaLayerGroup size={22} />,
    color: "#3b82f6",
    title: "Page-Level Reordering",
    desc: "Don't just reorder PDFs — rearrange individual pages with a visual drag-and-drop interface before merging.",
  },
  {
    icon: <FaMobileAlt size={22} />,
    color: "#ec4899",
    title: "Works on Any Device",
    desc: "Fully responsive design means the PDF merger works flawlessly on desktops, laptops, tablets, and smartphones.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    color: "#8b5cf6",
    title: "No Watermarks Ever",
    desc: "Your merged PDF is clean. No SCENITH branding, no watermarks, no promotional pages — just your content.",
  },
];

export default function MergePdfFilesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  // Structured data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/merge-pdf-files-online",
        url: "https://scenith.in/tools/merge-pdf-files-online",
        name: "Merge PDF Files Online Free – Combine Multiple PDFs | SCENITH",
        description:
          "Free online PDF merger. Combine multiple PDF files into one document instantly with drag-and-drop page reordering. No watermarks, no limits.",
        isPartOf: { "@id": "https://scenith.in/#website" },
        inLanguage: "en-US",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "SoftwareApplication",
        name: "SCENITH PDF Merger",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3842",
          bestRating: "5",
        },
        featureList: [
          "Merge unlimited PDF files",
          "Drag-and-drop page reordering",
          "No watermarks",
          "Free to use",
          "Secure processing",
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://scenith.in/tools/pdf-tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Merge PDF Files Online",
            item: "https://scenith.in/tools/merge-pdf-files-online",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mpf-root">
        {/* ── HERO ── */}
        <section className="mpf-hero" aria-labelledby="mpf-hero-h1">
          <div className="mpf-container">
            <nav className="mpf-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li><a href="https://scenith.in">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="https://scenith.in/tools/pdf-tools">PDF Tools</a></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page">Merge PDF Files Online</li>
              </ol>
            </nav>

            <h1 id="mpf-hero-h1" className="mpf-hero-h1">
              Merge PDF Files Online —<br />
              <span className="mpf-gradient-text">Fast, Free &amp; Secure</span>
            </h1>

            <p className="mpf-hero-sub">
              Combine multiple PDF documents into one polished file in seconds.
              Used daily by <strong>students, researchers, freelancers, and enterprise teams</strong> across
              50+ countries. Zero watermarks, zero cost, zero compromise on quality.
            </p>

            <div className="mpf-hero-stats">
              <div className="mpf-stat">
                <span className="mpf-stat-num">3.8M+</span>
                <span className="mpf-stat-label">PDFs Merged</span>
              </div>
              <div className="mpf-stat-divider" />
              <div className="mpf-stat">
                <span className="mpf-stat-num">50+</span>
                <span className="mpf-stat-label">Countries</span>
              </div>
              <div className="mpf-stat-divider" />
              <div className="mpf-stat">
                <span className="mpf-stat-num">4.9 ★</span>
                <span className="mpf-stat-label">Avg Rating</span>
              </div>
              <div className="mpf-stat-divider" />
              <div className="mpf-stat">
                <span className="mpf-stat-num">100%</span>
                <span className="mpf-stat-label">Free Forever</span>
              </div>
            </div>

            <div className="mpf-hero-cta-wrap">
              <Link href={TOOL_URL} className="mpf-cta-primary" aria-label="Open PDF merger tool">
                <FaFilePdf size={20} />
                Merge PDFs Now — It's Free
                <FaArrowRight size={16} className="mpf-cta-arrow" />
              </Link>
              <p className="mpf-cta-note">
                <FaCheckCircle size={13} style={{ color: "#10b981" }} />
                &nbsp;No watermarks &nbsp;·&nbsp;
                <FaCheckCircle size={13} style={{ color: "#10b981" }} />
                &nbsp;No file size caps &nbsp;·&nbsp;
                <FaCheckCircle size={13} style={{ color: "#10b981" }} />
                &nbsp;Instant download
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT IS / INTRO TEXT ── */}
        <section className="mpf-section mpf-intro" aria-label="About the PDF merger">
          <div className="mpf-container mpf-prose-wrap">
            <h2 className="mpf-section-h2">What Does "Merge PDF Files" Actually Mean?</h2>
            <p>
              When you <strong>merge PDF files online</strong>, you are taking two or more separate PDF
              documents and combining them into a single, continuous file. The result is one PDF that
              contains all the pages from every document you uploaded — in whatever order you choose.
            </p>
            <p>
              This is one of the most common document tasks in the modern world. A student might merge
              individual chapter drafts into a finished thesis. A finance professional might combine
              twelve monthly expense reports into a single annual summary. An immigration applicant
              might need to bundle a passport scan, a cover letter, and a bank statement into one
              submission-ready PDF before uploading it to a visa portal.
            </p>
            <p>
              Whatever your reason, SCENITH makes the process <strong>completely free</strong>, takes
              under a minute from upload to download, and leaves absolutely no watermark on your
              finished document — unlike many other online PDF tools that impose either a watermark
              or a per-day file limit on free users.
            </p>

            <h2 className="mpf-section-h2">Why Choose SCENITH to Merge PDF Files?</h2>
            <p>
              There is no shortage of online PDF mergers. A quick search returns dozens of options,
              many of which look identical. So why does SCENITH stand out?
            </p>
            <p>
              The answer is <strong>depth of control</strong>. Most free tools let you upload PDFs
              and merge them in a fixed order. SCENITH goes further: you can drag entire PDFs to
              reorder them, and you can also rearrange <em>individual pages</em> within the merged
              output using a visual page manager. You can even delete unwanted pages from the middle
              of any document before merging — something almost no other free tool offers. This
              level of precision matters when your merged PDF needs to be exactly right for a client,
              a professor, or a government portal.
            </p>
            <p>
              On top of that, SCENITH is genuinely free. There is no freemium plan that hides
              page-level reordering behind a paywall. There is no daily file limit that resets at
              midnight. There are no watermarks, no promotional pages inserted into your PDF. The tool simply works.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="mpf-section mpf-steps-section" aria-labelledby="mpf-steps-h2">
          <div className="mpf-container">
            <h2 id="mpf-steps-h2" className="mpf-section-h2 mpf-center">
              How to Merge PDF Files in 3 Simple Steps
            </h2>
            <p className="mpf-section-sub mpf-center">
              No technical knowledge required. If you can use a web browser, you can merge PDFs with SCENITH.
            </p>

            <div className="mpf-steps-grid">
              {steps.map((s) => (
                <div key={s.number} className="mpf-step-card">
                  <div className="mpf-step-number">{s.number}</div>
                  <div className="mpf-step-icon">{s.icon}</div>
                  <h3 className="mpf-step-title">{s.title}</h3>
                  <p className="mpf-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mpf-steps-cta">
              <Link href={TOOL_URL} className="mpf-cta-primary" aria-label="Start merging PDFs">
                <FaFilePdf size={18} />
                Start Merging — Free &amp; Instant
                <FaArrowRight size={15} className="mpf-cta-arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="mpf-section mpf-usecases-section" aria-labelledby="mpf-uc-h2">
          <div className="mpf-container">
            <h2 id="mpf-uc-h2" className="mpf-section-h2 mpf-center">
              Who Uses SCENITH to Merge PDFs?
            </h2>
            <p className="mpf-section-sub mpf-center">
              From university campuses in India to corporate offices in the UK and US, SCENITH serves
              millions of users who need reliable PDF merging without friction.
            </p>

            <div className="mpf-uc-grid">
              {useCases.map((uc) => (
                <div key={uc.label} className="mpf-uc-card" style={{ "--uc-color": uc.color, "--uc-bg": uc.bg } as React.CSSProperties}>
                  <div className="mpf-uc-icon" style={{ color: uc.color, background: uc.bg }}>
                    {uc.icon}
                  </div>
                  <h3 className="mpf-uc-label" style={{ color: uc.color }}>{uc.label}</h3>
                  <ul className="mpf-uc-list">
                    {uc.points.map((p) => (
                      <li key={p}>
                        <FaCheckCircle size={13} style={{ color: uc.color, flexShrink: 0, marginTop: 2 }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="mpf-section mpf-features-section" aria-labelledby="mpf-feat-h2">
          <div className="mpf-container">
            <h2 id="mpf-feat-h2" className="mpf-section-h2 mpf-center">
              Features That Make SCENITH the Best Free PDF Merger
            </h2>
            <p className="mpf-section-sub mpf-center">
              Built for power users who expect both simplicity and depth.
            </p>

            <div className="mpf-feat-grid">
              {features.map((f) => (
                <div key={f.title} className="mpf-feat-card">
                  <div className="mpf-feat-icon" style={{ color: f.color, background: `${f.color}18` }}>
                    {f.icon}
                  </div>
                  <h3 className="mpf-feat-title">{f.title}</h3>
                  <p className="mpf-feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LONG-FORM SEO TEXT ── */}
        <section className="mpf-section mpf-longform" aria-label="In-depth guide to merging PDFs">
          <div className="mpf-container mpf-prose-wrap">
            <h2 className="mpf-section-h2">
              Merging PDFs Online: A Complete Guide for Students &amp; Professionals
            </h2>

            <h3>Why PDF Is Still the World's Most Trusted Document Format</h3>
            <p>
              Despite the rise of Google Docs, Notion, and other collaborative platforms, the
              Portable Document Format (PDF) remains the global standard for sharing final,
              print-ready documents. Created by Adobe in 1993 and standardised as ISO 32000 in
              2008, PDF preserves fonts, images, and layouts perfectly across every device and
              operating system. When you email a PDF to a colleague in London, print it at a
              FedEx shop in New York, or upload it to a university portal in Singapore, it looks
              identical everywhere.
            </p>
            <p>
              This universality is exactly why merging PDFs matters. In a world where documents
              start life in many different apps — Word, Google Slides, Adobe Illustrator, scanned
              paper — professionals constantly need to bring separate pieces together into one
              authoritative PDF. The ability to <strong>merge PDF files online</strong> for free,
              without installing software, has become as essential a browser feature as running
              a translation or a spell check.
            </p>

            <h3>Common Scenarios Where You Need to Combine PDFs</h3>
            <p>
              The need to combine PDF files arises in almost every industry and academic context.
              Here are some of the most common real-world scenarios our users bring to SCENITH:
            </p>
            <p>
              <strong>Academic submissions:</strong> Universities across the UK, US, Australia, and
              India increasingly require students to submit a single PDF containing their thesis,
              bibliography, appendices, and signed declaration page. Most word processors export
              each section separately, making a PDF merger an essential part of the submission
              workflow.
            </p>
            <p>
              <strong>Job applications:</strong> Recruiters prefer a single PDF attachment. If your
              CV, cover letter, portfolio samples, and reference letters are in separate files,
              merging them into one polished document is far more professional than attaching
              four separate files to an email.
            </p>
            <p>
              <strong>Legal and financial documents:</strong> Law firms, accounting departments,
              and government agencies routinely work with multi-part documents. Merging contracts
              with their addendums, or financial statements with their audit reports, is standard
              practice — and having a fast, free online tool makes this process frictionless.
            </p>
            <p>
              <strong>Visa and immigration applications:</strong> This is one of our most common
              international use cases. When applying for a student visa, work permit, or residency,
              applicants often need to submit proof of funds, a passport biographic page, a
              photograph, a cover letter, and supporting letters — all as one PDF. SCENITH makes
              that combination fast and error-free.
            </p>
            <p>
              <strong>Small business operations:</strong> Freelancers and small business owners
              regularly need to combine invoices, delivery notes, and receipts to send to clients
              or accountants. A free PDF merger eliminates the need for expensive desktop software
              like Adobe Acrobat.
            </p>

            <h3>The Problem With Most "Free" PDF Mergers</h3>
            <p>
              Search for "merge PDF free" and you will find many tools. But most of them have one
              or more frustrating limitations hidden behind their marketing:
            </p>
            <p>
              <strong>Watermarks:</strong> The most common trap. A tool advertises itself as "free"
              but adds a promotional watermark to every page of your merged PDF. This is completely
              unacceptable for professional or official documents.
            </p>
            <p>
              <strong>File limits:</strong> Many tools restrict free users to merging only 2 files
              per task, or impose a daily limit of 2–3 operations before demanding an upgrade. If
              you need to merge 6 documents, this forces multiple sessions or a paid plan.
            </p>
            <p>
              <strong>File size restrictions:</strong> Some tools refuse to process PDFs over 10MB
              or 20MB without a subscription — which is a real problem when working with
              high-resolution scans or design-heavy documents.
            </p>
            <p>
              <strong>Forced email registration:</strong> A tool that requires you to create an
              account just to download your merged file is using your email as a product, not
              helping you.
            </p>
            <p>
              SCENITH avoids all of these patterns. Free means free: no watermarks, no arbitrary
              file counts, no email walls on your download.
            </p>

            <h3>Tips for Getting the Best Results When Merging PDFs</h3>
            <p>
              To produce the cleanest merged PDF possible, keep these professional best practices
              in mind:
            </p>
            <p>
              <strong>Organise before you upload:</strong> Rename your files logically before
              uploading (e.g., "01_cover_letter.pdf", "02_cv.pdf", "03_portfolio.pdf"). This makes
              reordering easier and helps you catch any missing documents before you hit merge.
            </p>
            <p>
              <strong>Check for password protection:</strong> If any of your source PDFs are
              password-protected, you will need to unlock them first. SCENITH has a dedicated
              <a href="https://scenith.in/tools/pdf-tools/unlock-pdf"> Unlock PDF tool</a> for
              exactly this.
            </p>
            <p>
              <strong>Compress before merging large files:</strong> If you are combining several
              large, image-heavy PDFs and the final file size matters (e.g., for email attachment
              limits or portal upload caps), consider using SCENITH's
              <a href="https://scenith.in/tools/pdf-tools/compress-pdf"> Compress PDF tool</a> on
              individual files before merging, rather than trying to compress the final merged output.
            </p>
            <p>
              <strong>Preview before downloading:</strong> SCENITH's page preview panel lets you
              review the page order of your merged document before processing. Take 30 seconds to
              scroll through the preview — it can save you from having to redo the merge because
              one page landed in the wrong place.
            </p>

            <h3>Merge PDF Files Across All Your Devices</h3>
            <p>
              Unlike desktop PDF software, SCENITH requires no installation. It runs entirely in
              your web browser, which means it works on Windows PCs, Macs, Chromebooks, Linux
              laptops, Android tablets, and iPhones. Students working on university library
              computers — where installing software is often prohibited — can merge PDFs with
              SCENITH without touching any system settings. Remote workers, travellers, and digital
              nomads can access the tool from any device, anywhere in the world, with nothing
              more than an internet connection.
            </p>
          </div>
        </section>

        {/* ── MID-PAGE CTA ── */}
        <section className="mpf-midcta" aria-label="Call to action">
          <div className="mpf-container">
            <div className="mpf-midcta-card">
              <div className="mpf-midcta-icon">
                <FaFilePdf size={40} />
              </div>
              <div className="mpf-midcta-text">
                <h2>Ready to Combine Your PDFs?</h2>
                <p>
                  Join millions of users who trust SCENITH to merge their documents. Free, fast,
                  and built for professionals —  no watermarks, no limits.
                </p>
              </div>
              <Link href={TOOL_URL} className="mpf-cta-primary mpf-cta-white" aria-label="Merge PDFs now">
                <FaFilePdf size={18} />
                Merge PDFs Now
                <FaArrowRight size={15} className="mpf-cta-arrow" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mpf-section mpf-faq-section" aria-labelledby="mpf-faq-h2">
          <div className="mpf-container mpf-faq-wrap">
            <h2 id="mpf-faq-h2" className="mpf-section-h2 mpf-center">
              Frequently Asked Questions
            </h2>
            <p className="mpf-section-sub mpf-center">
              Everything you need to know about merging PDFs online with SCENITH.
            </p>

            <div className="mpf-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`mpf-faq-item ${openFaq === i ? "mpf-faq-open" : ""}`}
                >
                  <button
                    className="mpf-faq-q"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="mpf-faq-a"
                    role="region"
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST SIGNALS ── */}
        <section className="mpf-section mpf-trust" aria-label="Trust signals">
          <div className="mpf-container">
            <div className="mpf-trust-grid">
              <div className="mpf-trust-item">
                <FaUsers size={28} style={{ color: "#6366f1" }} />
                <strong>3.8M+ PDFs Merged</strong>
                <span>by real users worldwide</span>
              </div>
              <div className="mpf-trust-item">
                <FaStar size={28} style={{ color: "#f59e0b" }} />
                <strong>4.9 / 5 Average Rating</strong>
                <span>across 3,800+ reviews</span>
              </div>
              <div className="mpf-trust-item">
                <FaLock size={28} style={{ color: "#10b981" }} />
                <strong>TLS Encrypted Transfers</strong>
                <span>your files stay private</span>
              </div>
              <div className="mpf-trust-item">
                <FaGlobe size={28} style={{ color: "#0ea5e9" }} />
                <strong>50+ Countries Served</strong>
                <span>no region restrictions</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="mpf-final-cta" aria-label="Final call to action">
          <div className="mpf-container">
            <h2 className="mpf-final-h2">
              Merge Your PDF Files for Free — Right Now
            </h2>
            <p className="mpf-final-sub">
              No downloads. No watermarks. No limits. Just fast, clean PDF merging that works
              the first time, every time.
            </p>
            <Link href={TOOL_URL} className="mpf-cta-primary mpf-cta-lg" aria-label="Open PDF merger">
              <FaFilePdf size={22} />
              Open Free PDF Merger
              <FaArrowRight size={18} className="mpf-cta-arrow" />
            </Link>
            <p className="mpf-final-note">
              Trusted by students at Oxford, IIT, MIT, and professionals at Fortune 500 companies.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}