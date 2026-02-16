import React from "react";
import Link from "next/link";
import "@/styles/tools/CompressPDFOnline.css";

const TOOL_URL =
  "https://scenith.in/pdf-tools/compress-pdf?utm_source=compress_pdf_online&utm_medium=cta_button&utm_campaign=seo_landing_page";

const TOOL_URL_SECONDARY =
  "https://scenith.in/pdf-tools/compress-pdf?utm_source=compress_pdf_online&utm_medium=inline_link&utm_campaign=seo_landing_page";

export default function CompressPdfOnlineClient() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": "https://scenith.in/pdf-tools/compress-pdf-online#webapp",
                name: "Scenith PDF Compressor Online",
                description:
                  "Free online PDF compressor. Reduce PDF file size by up to 90% while maintaining document quality.",
                url: "https://scenith.in/pdf-tools/compress-pdf-online",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "Reduce PDF size up to 90%",
                  "Three compression levels",
                  "No file size limits",
                  "256-bit SSL encryption",
                  "Instant download",
                ],
                author: {
                  "@type": "Organization",
                  "@id": "https://scenith.in/#organization",
                  name: "Scenith",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://scenith.in/pdf-tools/compress-pdf-online#breadcrumb",
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
                    item: "https://scenith.in/pdf-tools",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Compress PDF Online",
                    item: "https://scenith.in/pdf-tools/compress-pdf-online",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://scenith.in/pdf-tools/compress-pdf-online#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How do I compress a PDF online for free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Upload your PDF to Scenith's free PDF compressor, choose your desired compression level (Low, Medium, or High), and click compress. Your reduced PDF will be ready to download in seconds.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much can I reduce a PDF file size online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenith's PDF compressor can reduce file size by 25–90% depending on the compression level and PDF content. Image-heavy PDFs see the most reduction. A 100MB PDF can become as small as 10MB with High compression.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does compressing a PDF reduce its quality?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It depends on the compression level. Low compression maintains near-original quality with 25–50% size reduction. Medium compression balances quality and size (50–75% reduction). High compression maximizes size reduction (up to 90%) with slightly reduced image quality, but text always remains crisp and searchable.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a file size limit for PDF compression?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Scenith's online PDF compressor has no maximum file size limit. You can compress small PDFs of a few MB or large PDFs of 500MB+ with the same fast, secure process.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is it safe to compress PDF files online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. All file transfers are protected with 256-bit SSL encryption. Your PDF is processed in an isolated container and automatically deleted immediately after you download the compressed version. Scenith never stores, reads, or shares your documents.",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id":
                  "https://scenith.in/pdf-tools/compress-pdf-online#howto",
                name: "How to Compress a PDF Online for Free",
                description:
                  "Step-by-step guide to reducing PDF file size online without losing quality using Scenith's free PDF compressor.",
                totalTime: "PT1M",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Upload Your PDF",
                    text: "Click the upload area or drag and drop your PDF file into the Scenith PDF compressor. There is no file size limit.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Choose Compression Level",
                    text: "Select Low (25–50% reduction), Medium (50–75% reduction), or High (75–90% reduction) based on your quality requirements.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Download Compressed PDF",
                    text: "Click 'Compress PDF' and download your optimized file instantly. Text remains fully searchable. Original file is deleted automatically.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div
        style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: "#1a1a2e",
            lineHeight: "1.7",
            paddingTop: "80px", // 👈 pushes entire page below fixed navbar
        }}
        >

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 20px 0",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          <ol
            itemScope
            itemType="https://schema.org/BreadcrumbList"
            style={{
              display: "flex",
              listStyle: "none",
              gap: "8px",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              
            <a    href="/"
                itemProp="item"
                style={{ color: "#10b981", textDecoration: "none" }}
              >
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
              <span style={{ marginLeft: "8px" }}>/</span>
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              
            <a    href="/pdf-tools"
                itemProp="item"
                style={{ color: "#10b981", textDecoration: "none" }}
              >
                <span itemProp="name">PDF Tools</span>
              </a>
              <meta itemProp="position" content="2" />
              <span style={{ marginLeft: "8px" }}>/</span>
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name" style={{ color: "#475569" }}>
                Compress PDF Online
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ─── HERO SECTION ─── */}
        <header
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #065f46 100%)",
            color: "white",
            padding: "80px 20px 100px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
        

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: "1.15",
                marginBottom: "24px",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Compress PDF Online Free
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reduce File Size by Up to 90%
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#94a3b8",
                marginBottom: "40px",
                maxWidth: "640px",
                margin: "0 auto 40px",
                fontFamily: "sans-serif",
                lineHeight: "1.8",
              }}
            >
              The fastest, most reliable way to compress PDF files online without
              losing quality. Three intelligent compression levels, zero file size
              limits, and instant download — completely free.
            </p>

            {/* ── PRIMARY CTA ── */}
            
            <a  href={TOOL_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#10b981",
                color: "white",
                padding: "20px 48px",
                borderRadius: "14px",
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "sans-serif",
                textDecoration: "none",
                boxShadow:
                  "0 0 0 4px rgba(16,185,129,0.3), 0 20px 60px rgba(16,185,129,0.4)",
                transition: "all 0.2s ease",
                letterSpacing: "-0.01em",
              }}
              aria-label="Open free PDF compressor tool"
            >
              <span style={{ fontSize: "24px" }}>📄</span>
              Compress PDF Now — It&apos;s Free
              <span style={{ fontSize: "18px", opacity: 0.9 }}>→</span>
            </a>

        

            {/* Stats strip */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(20px, 5vw, 60px)",
                marginTop: "56px",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "90%", label: "Max Size Reduction" },
                { value: "∞", label: "No File Size Limit" },
                { value: "< 60s", label: "Processing Time" },
                { value: "256-bit", label: "SSL Encryption" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "clamp(24px, 4vw, 36px)",
                      fontWeight: 800,
                      color: "#10b981",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      marginTop: "6px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ─── QUICK DEFINITION (Featured Snippet Target) ─── */}
        <section
          style={{
            backgroundColor: "#f0fdf4",
            borderLeft: "5px solid #10b981",
            maxWidth: "900px",
            margin: "60px auto",
            padding: "30px 36px",
            borderRadius: "0 12px 12px 0",
          }}
          aria-labelledby="definition-heading"
        >
          <h2
            id="definition-heading"
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#059669",
              fontFamily: "sans-serif",
              margin: "0 0 12px",
            }}
          >
            Quick Answer
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#1e293b",
              margin: 0,
              lineHeight: "1.75",
              fontFamily: "sans-serif",
            }}
          >
            <strong>Compressing a PDF online</strong> means reducing its file
            size using a web-based tool — no software installation needed. Free
            online PDF compressors like Scenith analyze the document&apos;s
            content, optimize embedded images, remove redundant data, and apply
            compression algorithms to shrink the file by{" "}
            <strong>25–90%</strong>, while keeping text fully readable and
            searchable.
          </p>
        </section>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          {/* ─── HOW IT WORKS ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="how-it-works-heading"
          >
            <h2
              id="how-it-works-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              How to Compress a PDF Online in 3 Steps
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              No software to install, no account to create. Compress any PDF
              file in under a minute — directly in your browser.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "28px",
              }}
            >
              {[
                {
                  step: "01",
                  icon: "⬆️",
                  title: "Upload Your PDF",
                  body: "Drag and drop your PDF into the compressor or click to browse. Any file size is supported — from 1MB invoices to 500MB+ engineering drawings. Password-protected PDFs are also accepted.",
                  detail: "Supports: All PDF versions (1.0–2.0), encrypted PDFs",
                },
                {
                  step: "02",
                  icon: "⚙️",
                  title: "Choose Compression Level",
                  body: "Select from three intelligent presets: Low (archives, legal docs), Medium (email, general use), or High (mobile sharing, storage). Or dial in a custom percentage for precise control.",
                  detail: "Presets: Low 25–50% · Medium 50–75% · High 75–90%",
                },
                {
                  step: "03",
                  icon: "⬇️",
                  title: "Download Instantly",
                  body: "Processing takes 10–60 seconds depending on file size and complexity. Your compressed PDF downloads automatically. The original is permanently deleted from our servers — your privacy is guaranteed.",
                  detail: "Output: Fully searchable PDF · All links preserved",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "36px 32px",
                    position: "relative",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "56px",
                      fontWeight: 900,
                      color: "#f1f5f9",
                      lineHeight: 1,
                      position: "absolute",
                      top: "20px",
                      right: "24px",
                      fontFamily: "sans-serif",
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      color: "#1e293b",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#475569",
                      marginBottom: "16px",
                      lineHeight: "1.75",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.body}
                  </p>
                  <div
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      backgroundColor: "#f8fafc",
                      borderRadius: "6px",
                      padding: "8px 12px",
                      color: "#64748b",
                      borderLeft: "3px solid #10b981",
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-content CTA */}
            <div
              style={{
                textAlign: "center",
                marginTop: "48px",
                padding: "40px",
                backgroundColor: "#f0fdf4",
                borderRadius: "16px",
                border: "1px solid #bbf7d0",
              }}
            >
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  color: "#065f46",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                Ready to shrink your PDF right now?
              </p>
              
            <a    href={TOOL_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#10b981",
                  color: "white",
                  padding: "16px 40px",
                  borderRadius: "10px",
                  fontSize: "17px",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(16,185,129,0.35)",
                }}
              >
                Open Free PDF Compressor →
              </a>
            </div>
          </section>

          {/* ─── COMPRESSION LEVELS DEEP DIVE ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="levels-heading"
          >
            <h2
              id="levels-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Which PDF Compression Level Should You Choose?
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              The right compression level depends on how the PDF will be used,
              not just on file size. Here&apos;s a complete breakdown.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
              }}
            >
              {[
                {
                  color: "#22c55e",
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  label: "LOW COMPRESSION",
                  emoji: "🟢",
                  reduction: "25–50% size reduction",
                  headline: "Maximum Quality Preserved",
                  paragraphs: [
                    "Low compression applies lossless optimization — removing invisible metadata, duplicate data streams, and unnecessary structure without touching a single pixel of your images or a single character of text.",
                    "This is the right choice when document quality is non-negotiable: legal contracts sent to clients, academic theses submitted to universities, high-fidelity design portfolios, or any document that will be printed professionally.",
                    "After Low compression, your PDF looks and reads identically to the original. The only difference is a smaller, faster-transferring file.",
                  ],
                  useCases: [
                    "Legal contracts & NDA documents",
                    "Academic theses & dissertations",
                    "Medical records & reports",
                    "Architectural drawings & blueprints",
                    "Professional portfolios",
                  ],
                  notFor:
                    "Not ideal if you need the smallest possible file — use Medium or High for that.",
                },
                {
                  color: "#eab308",
                  bg: "#fefce8",
                  border: "#fde68a",
                  label: "MEDIUM COMPRESSION",
                  emoji: "🟡",
                  reduction: "50–75% size reduction",
                  headline: "The Everyday Sweet Spot",
                  paragraphs: [
                    "Medium compression is the most commonly used setting because it delivers a dramatic file size reduction while keeping the document completely professional for on-screen viewing.",
                    "Images are resampled to screen-optimized resolution (typically 150 DPI) — imperceptible on monitors, tablets, and phones, but a major factor in file size reduction. Text remains perfectly crisp at all zoom levels.",
                    "This is the setting most users need: a report that was 18MB becomes 5MB, small enough to attach to Gmail, upload to Google Drive, or share on Slack — without any visible quality degradation.",
                  ],
                  useCases: [
                    "Business reports & proposals",
                    "Email attachments (under 25MB limit)",
                    "Presentation decks",
                    "Product brochures & catalogs",
                    "Invoices & financial statements",
                  ],
                  notFor:
                    "Not ideal for documents that will be printed at high resolution — use Low instead.",
                },
                {
                  color: "#ef4444",
                  bg: "#fef2f2",
                  border: "#fecaca",
                  label: "HIGH COMPRESSION",
                  emoji: "🔴",
                  reduction: "75–90% size reduction",
                  headline: "Smallest File, Still Readable",
                  paragraphs: [
                    "High compression is engineered for situations where file size is the priority above all else: sending PDFs over WhatsApp or Telegram (which has a 100MB limit), uploading to platforms with strict size caps, or storing thousands of archived documents.",
                    "Images are compressed aggressively to 72–96 DPI and JPEG quality is reduced significantly. Text and vector graphics remain unaffected — they stay sharp and searchable regardless of compression level.",
                    "A 100MB scanned document archive can shrink to under 10MB with High compression. Ideal for mobile consumption where bandwidth and storage are limited.",
                  ],
                  useCases: [
                    "WhatsApp & Telegram file sharing",
                    "Uploading to size-restricted portals",
                    "Archiving large document collections",
                    "Mobile-first document distribution",
                    "Reducing cloud storage costs",
                  ],
                  notFor:
                    "Not suitable for printing or documents with fine image detail that must be preserved.",
                },
              ].map((level) => (
                <article
                  key={level.label}
                  style={{
                    backgroundColor: level.bg,
                    border: `1px solid ${level.border}`,
                    borderTop: `4px solid ${level.color}`,
                    borderRadius: "16px",
                    padding: "36px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>{level.emoji}</span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: level.color,
                      }}
                    >
                      {level.label}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      color: "#64748b",
                      marginBottom: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {level.reduction}
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "20px",
                      color: "#1e293b",
                    }}
                  >
                    {level.headline}
                  </h3>
                  {level.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.75",
                        color: "#334155",
                        marginBottom: "14px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {p}
                    </p>
                  ))}
                  <div
                    style={{
                      marginTop: "24px",
                      borderTop: `1px solid ${level.border}`,
                      paddingTop: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: "10px",
                      }}
                    >
                      Best for:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        margin: "0 0 16px",
                      }}
                    >
                      {level.useCases.map((uc) => (
                        <li
                          key={uc}
                          style={{
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            color: "#475569",
                            padding: "4px 0",
                            display: "flex",
                            gap: "8px",
                          }}
                        >
                          <span style={{ color: level.color }}>✓</span> {uc}
                        </li>
                      ))}
                    </ul>
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#94a3b8",
                        fontStyle: "italic",
                      }}
                    >
                      ⚠️ {level.notFor}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ─── RESULTS EXAMPLES ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="results-heading"
          >
            <h2
              id="results-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Real-World Compression Results: What to Expect
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              Compression results vary by document type and content. Here are
              representative results across common PDF types:
            </p>

            <div
              style={{
                overflowX: "auto",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                marginBottom: "32px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#1e293b", color: "white" }}>
                    {[
                      "PDF Type",
                      "Original Size",
                      "After Low",
                      "After Medium",
                      "After High",
                      "Best Level",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "14px 20px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Text-only report",
                      orig: "2 MB",
                      low: "1.5 MB",
                      med: "1 MB",
                      high: "0.6 MB",
                      best: "Low",
                    },
                    {
                      type: "Presentation (images)",
                      orig: "45 MB",
                      low: "30 MB",
                      med: "14 MB",
                      high: "6 MB",
                      best: "Medium",
                    },
                    {
                      type: "Scanned document",
                      orig: "80 MB",
                      low: "55 MB",
                      med: "22 MB",
                      high: "9 MB",
                      best: "High",
                    },
                    {
                      type: "Invoice / form",
                      orig: "1.5 MB",
                      low: "1.1 MB",
                      med: "0.7 MB",
                      high: "0.4 MB",
                      best: "Low / Med",
                    },
                    {
                      type: "Product catalog",
                      orig: "120 MB",
                      low: "85 MB",
                      med: "38 MB",
                      high: "15 MB",
                      best: "Medium",
                    },
                    {
                      type: "Research paper (charts)",
                      orig: "12 MB",
                      low: "8 MB",
                      med: "4 MB",
                      high: "1.8 MB",
                      best: "Medium",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.type}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 20px",
                          fontWeight: 600,
                          color: "#1e293b",
                        }}
                      >
                        {row.type}
                      </td>
                      <td
                        style={{ padding: "14px 20px", color: "#64748b" }}
                      >
                        {row.orig}
                      </td>
                      <td
                        style={{ padding: "14px 20px", color: "#15803d" }}
                      >
                        {row.low}
                      </td>
                      <td
                        style={{ padding: "14px 20px", color: "#a16207" }}
                      >
                        {row.med}
                      </td>
                      <td
                        style={{ padding: "14px 20px", color: "#b91c1c" }}
                      >
                        {row.high}
                      </td>
                      <td style={{ padding: "14px 20px" }}>
                        <span
                          style={{
                            backgroundColor: "#f0fdf4",
                            color: "#15803d",
                            border: "1px solid #bbf7d0",
                            borderRadius: "6px",
                            padding: "3px 10px",
                            fontSize: "12px",
                            fontWeight: 700,
                          }}
                        >
                          {row.best}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
            >
              *Results are representative estimates. Actual compression depends
              on PDF structure, image types, and embedded content.
            </p>
          </section>

          {/* ─── WHY COMPRESS ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="why-compress-heading"
          >
            <h2
              id="why-compress-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Why Compress PDF Files? The Complete Reasoning
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              PDF compression isn&apos;t just about saving storage. Here&apos;s
              every reason professionals compress PDFs in 2024.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: "📧",
                  title: "Email Attachment Limits",
                  body: "Gmail, Outlook, and Yahoo all enforce a 25MB attachment limit. A single presentation PDF from PowerPoint can easily hit 40–80MB. Compressing to Medium level almost always brings it under the threshold — without any visible quality loss.",
                  tip: "Pro tip: If a compressed PDF is still over 25MB, upload to Google Drive and share the link instead.",
                },
                {
                  icon: "☁️",
                  title: "Cloud Storage Costs",
                  body: "Google Drive free storage is 15GB. Dropbox gives 2GB free. If you manage hundreds of PDFs — client files, invoices, reports, contracts — storage fills up fast. Compressing documents to even Medium level can double your effective storage capacity.",
                  tip: "Pro tip: Batch-compress old archives to free up cloud space without deleting any files.",
                },
                {
                  icon: "🌐",
                  title: "Web & Portal Upload Limits",
                  body: "Government portals, job application systems, university submission platforms, and e-signature tools frequently enforce 5–15MB upload limits. This frustrates users with large documents. Compression eliminates this barrier entirely.",
                  tip: "Pro tip: For portals with a 5MB limit, use High compression to safely clear that ceiling.",
                },
                {
                  icon: "📱",
                  title: "WhatsApp & Messaging Apps",
                  body: "WhatsApp has a 100MB document limit. Telegram supports up to 2GB. While these limits seem generous, large PDFs drain recipient storage and take minutes to download on mobile data. Compressing to under 10MB makes sharing instant and considerate.",
                  tip: "Pro tip: Use High compression for documents shared on mobile — the quality is more than sufficient for reading on phone screens.",
                },
                {
                  icon: "⚡",
                  title: "Web Page Load Speed",
                  body: "If your website hosts downloadable PDFs — product manuals, white papers, guides — unoptimized files slow page load times and increase hosting bandwidth costs. Google uses page speed as a ranking factor. Compressed PDFs load faster and improve Core Web Vitals.",
                  tip: "Pro tip: Aim for PDFs under 2MB for inline browser viewing, under 5MB for downloadable resources.",
                },
                {
                  icon: "🗃️",
                  title: "Long-Term Archival",
                  body: "Organizations archiving thousands of documents — contracts, case files, research papers — face exponential storage growth. Applying Low or Medium compression at ingestion time can reduce archive storage requirements by 40–60% while keeping documents fully accessible and professionally presentable.",
                  tip: "Pro tip: Low compression is ideal for archives — you get meaningful size reduction with zero quality trade-off.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "28px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>{card.icon}</span>
                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      margin: "14px 0 12px",
                      color: "#1e293b",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.75",
                      color: "#475569",
                      marginBottom: "16px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {card.body}
                  </p>
                  <div
                    style={{
                      backgroundColor: "#f0fdf4",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "13px",
                      color: "#065f46",
                      fontFamily: "sans-serif",
                    }}
                  >
                    💡 {card.tip}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ─── TECHNICAL DEEP DIVE ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="tech-heading"
          >
            <h2
              id="tech-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              How PDF Compression Actually Works: The Technical Breakdown
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              Understanding the underlying mechanics helps you make better
              decisions about compression levels for different document types.
            </p>

            <div style={{ display: "grid", gap: "28px" }}>
              {[
                {
                  stage: "Stage 1",
                  title: "Metadata & Structure Cleanup",
                  content:
                    "PDF files accumulate invisible overhead: author information, revision history, printer marks, comments, hidden layers, embedded thumbnails, and duplicate color profiles. This metadata can account for 5–20% of total file size. The first compression stage strips all non-essential metadata, reducing file size without any impact on visible content or document functionality.",
                  impact: "5–20% size reduction · Zero quality impact",
                },
                {
                  stage: "Stage 2",
                  title: "Font Optimization & Subsetting",
                  content:
                    "PDFs often embed entire font files even when only a fraction of the characters are used. A full Times New Roman font file is 400–600KB. If your document only uses 80 of the 1,200+ characters in the font, 90% of that font data is wasted. Font subsetting extracts and embeds only the characters actually present in the document — dramatically reducing font overhead while preserving exact typographic fidelity.",
                  impact: "5–35% size reduction on text-heavy documents · Identical visual output",
                },
                {
                  stage: "Stage 3",
                  title: "Image Compression & Resampling",
                  content:
                    "Images are usually the largest contributor to PDF file size. Embedded photos from cameras or design software often contain 300 DPI resolution — far more than necessary for screen viewing (72–96 DPI) or standard office printing (150 DPI). Our algorithm resamples images to the target DPI for your chosen compression level, then re-encodes them with optimized JPEG quality settings. This single stage accounts for 60–80% of the total size reduction achieved.",
                  impact: "Up to 80% size reduction on image-heavy PDFs",
                },
                {
                  stage: "Stage 4",
                  title: "Content Stream Compression",
                  content:
                    "The actual content of a PDF — text positions, drawing commands, path data — is stored as content streams. These streams can be re-encoded using modern compression algorithms (Flate/zlib) for smaller byte footprints. Older or poorly-generated PDFs sometimes have uncompressed or sub-optimally compressed content streams, leaving significant size savings on the table.",
                  impact: "3–15% additional reduction on complex PDFs",
                },
                {
                  stage: "Stage 5",
                  title: "Cross-Reference Table Linearization",
                  content:
                    'PDFs use a cross-reference table that maps each object to its byte position in the file. For optimized "web delivery" (also called linearization or Fast Web View), this table is restructured so the first page can be displayed before the entire file downloads — critical for large PDFs viewed in browser. Scenith\'s compressor applies linearization automatically, improving perceived loading speed even before bytes are saved.',
                  impact: "Faster perceived loading · No additional size reduction",
                },
              ].map((stage, i) => (
                <div
                  key={stage.stage}
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "#10b981",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "sans-serif",
                      fontWeight: 800,
                      fontSize: "14px",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#f8fafc",
                      borderRadius: "12px",
                      padding: "24px 28px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#10b981",
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      {stage.stage}
                    </div>
                    <h3
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        marginBottom: "12px",
                        color: "#1e293b",
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.8",
                        color: "#475569",
                        marginBottom: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {stage.content}
                    </p>
                    <div
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#059669",
                        fontWeight: 600,
                        backgroundColor: "#d1fae5",
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "6px",
                      }}
                    >
                      📊 {stage.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── USE CASES BY INDUSTRY ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="industry-heading"
          >
            <h2
              id="industry-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Compress PDF Online: Use Cases by Industry
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              PDF compression solves real problems across every professional
              field. Here&apos;s how each industry uses it most effectively.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: "⚖️",
                  industry: "Legal & Law Firms",
                  bg: "#fef2f2",
                  border: "#fecaca",
                  accent: "#b91c1c",
                  points: [
                    "Court e-filing systems cap uploads at 10–20MB. High compression makes large case files compliant.",
                    "Contracts sent via DocuSign or Adobe Sign load faster with optimized PDFs, improving client experience.",
                    "Client portals used by law firms often have per-file limits. Medium compression keeps documents accessible.",
                    "Long-term document retention for 7+ years requires storage efficiency. Low compression is ideal for archival.",
                  ],
                },
                {
                  icon: "🏥",
                  industry: "Healthcare & Medical",
                  bg: "#eff6ff",
                  border: "#bfdbfe",
                  accent: "#1e40af",
                  points: [
                    "Patient records shared via secure portals must balance file size with diagnostic image quality.",
                    "Research paper submissions to journals have strict size limits — medium compression consistently works.",
                    "Clinical trial documentation distributed to investigators needs to be email-friendly without quality loss.",
                    "Radiology reports containing embedded scan images can reach 50MB+ — high compression makes them shareable.",
                  ],
                },
                {
                  icon: "🎓",
                  industry: "Education & Academia",
                  bg: "#fefce8",
                  border: "#fde68a",
                  accent: "#a16207",
                  points: [
                    "Thesis submission portals at universities enforce 10–30MB limits. Medium compression is the standard fix.",
                    "Research papers with high-resolution figures and charts routinely exceed journal submission file limits.",
                    "Lecture notes and course materials distributed to hundreds of students benefit from mobile-optimized sizes.",
                    "Academic portfolios for scholarship applications must often stay under 5MB — high compression achieves this.",
                  ],
                },
                {
                  icon: "🏢",
                  industry: "Business & Corporate",
                  bg: "#f0fdf4",
                  border: "#bbf7d0",
                  accent: "#15803d",
                  points: [
                    "Annual reports and investor decks are typically 30–80MB. Medium compression makes them email-distributable.",
                    "RFP (Request for Proposal) responses with supporting documents must fit procurement portal limits.",
                    "Marketing materials updated monthly — brochures, catalogs, price lists — accumulate cloud storage fast.",
                    "Board presentations shared via Microsoft Teams or Zoom benefit from fast-loading optimized files.",
                  ],
                },
                {
                  icon: "🏗️",
                  industry: "Architecture & Engineering",
                  bg: "#faf5ff",
                  border: "#e9d5ff",
                  accent: "#7e22ce",
                  points: [
                    "Technical drawings and blueprints exported from CAD software can reach 200MB+. High compression is essential for sharing.",
                    "Building permit applications submitted online frequently have 20–50MB caps per attachment.",
                    "Client presentation packages combining renders, plans, and specs need to be emailable.",
                    "Low compression is recommended for final archived drawings that may be printed at large format.",
                  ],
                },
                {
                  icon: "🛒",
                  industry: "E-Commerce & Retail",
                  bg: "#fff7ed",
                  border: "#fed7aa",
                  accent: "#c2410c",
                  points: [
                    "Product catalogs with hundreds of item photos are the largest PDFs in retail — compression is critical.",
                    "Supplier agreements and purchase orders sent over email must stay under attachment limits.",
                    "Customer-facing PDF guides and manuals embedded on product pages affect page load speed and SEO.",
                    "Lookbooks and seasonal catalogs distributed digitally should be mobile-optimized for easy browsing.",
                  ],
                },
              ].map((card) => (
                <article
                  key={card.industry}
                  style={{
                    backgroundColor: card.bg,
                    border: `1px solid ${card.border}`,
                    borderRadius: "14px",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ fontSize: "28px" }}>{card.icon}</span>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#1e293b",
                        margin: 0,
                      }}
                    >
                      {card.industry}
                    </h3>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {card.points.map((pt, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontSize: "14px",
                          fontFamily: "sans-serif",
                          lineHeight: "1.6",
                          color: "#334155",
                          padding: "8px 0",
                          borderBottom:
                            i < card.points.length - 1
                              ? `1px solid ${card.border}`
                              : "none",
                        }}
                      >
                        <span style={{ color: card.accent, flexShrink: 0 }}>
                          →
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* ─── SECOND CTA BLOCK ─── */}
          <section
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #065f46 100%)",
              borderRadius: "24px",
              padding: "60px 48px",
              textAlign: "center",
              marginBottom: "80px",
              position: "relative",
              overflow: "hidden",
            }}
            aria-labelledby="mid-cta-heading"
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.12) 0%, transparent 50%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <h2
                id="mid-cta-heading"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 38px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Compress Your PDF in Under 60 Seconds
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#94a3b8",
                  marginBottom: "36px",
                  fontFamily: "sans-serif",
                  maxWidth: "560px",
                  margin: "0 auto 36px",
                }}
              >
                No account. No watermarks. No size limits. Just upload, choose
                a compression level, and download.
              </p>
              
            <a    href={TOOL_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#10b981",
                  color: "white",
                  padding: "20px 52px",
                  borderRadius: "14px",
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  boxShadow:
                    "0 0 0 4px rgba(16,185,129,0.3), 0 20px 60px rgba(16,185,129,0.4)",
                }}
                aria-label="Open free PDF compressor"
              >
                <span style={{ fontSize: "22px" }}>📄</span>
                Compress PDF Free Now
                <span style={{ opacity: 0.9 }}>→</span>
              </a>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "32px",
                  marginTop: "32px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "✅ 100% Free",
                  "🔒 Files Auto-Deleted",
                  "⚡ 60-Second Processing",
                  "📱 Works on Mobile",
                ].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                      color: "#94a3b8",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ─── FAQ ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="faq-heading"
          >
            <h2
              id="faq-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently Asked Questions: Compress PDF Online
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "48px",
                fontFamily: "sans-serif",
                maxWidth: "680px",
              }}
            >
              Everything you need to know before compressing your first PDF
              with Scenith.
            </p>

            <div style={{ display: "grid", gap: "16px" }}>
              {[
                {
                  q: "How do I compress a PDF online for free without losing quality?",
                  a: "Use Low compression in Scenith's free PDF compressor. Low compression applies only lossless optimizations — metadata removal, font subsetting, and content stream optimization — without touching image quality. The result looks identical to the original but is 25–50% smaller. For most professional documents, this level of reduction is all you need.",
                },
                {
                  q: "Can I compress a PDF to a specific file size, like 200KB or 1MB?",
                  a: "Scenith's tool offers three preset levels rather than a target file size input. However, you can use the High compression level for the smallest possible output. If your document is image-heavy, High compression typically achieves 75–90% reduction. For a 10MB PDF, that means roughly 1–2.5MB output. For very precise size targets, try compressing once, check the output, then consider splitting the document if needed.",
                },
                {
                  q: "Will compressing a PDF make the text blurry or unreadable?",
                  a: "Never. Text in PDFs is stored as vector data (mathematical instructions), not as pixels — so it is completely unaffected by any level of compression. Text remains perfectly sharp, fully searchable, and selectable regardless of which compression level you choose. Only raster images (photos, scanned pages) are affected by compression, and even High compression keeps text in scanned PDFs readable.",
                },
                {
                  q: "Is there a maximum file size for online PDF compression?",
                  a: "Scenith's free online PDF compressor has no maximum file size limit. You can upload PDFs of any size — from 100KB to 1GB+. Processing time will vary: small files (under 10MB) complete in 10–20 seconds, while very large files (100MB+) may take 60–120 seconds. There is no queue or wait time.",
                },
                {
                  q: "Can I compress a scanned PDF without losing the text content?",
                  a: "Yes. Scanned PDFs contain pages stored as images. Compression reduces the size of those embedded images, but the page content remains intact. If your scanned PDF has OCR (Optical Character Recognition) applied, the embedded text layer is completely unaffected by image compression — all searchable text is preserved perfectly.",
                },
                {
                  q: "Does compressing a PDF affect its security or password protection?",
                  a: "Password-protected PDFs can be compressed if you provide the correct password at upload. The compression process maintains password protection on the output file — your document remains secured after compression. If you want to remove password protection during compression, that option is available in the full PDF compressor tool.",
                },
                {
                  q: "How is Scenith's PDF compressor different from Adobe Acrobat's?",
                  a: "Adobe Acrobat's PDF compression requires a $23.99/month subscription (Acrobat Standard) or desktop installation. Scenith's compressor is fully free with no account required. Both tools achieve similar compression ratios using comparable algorithms. Scenith is faster for web-based workflows, while Acrobat offers more granular manual controls for enterprise or print production workflows.",
                },
                {
                  q: "Can I compress multiple PDFs at once?",
                  a: "Currently, Scenith's PDF compressor processes one file at a time to ensure maximum quality per document. For batch compression, simply process files sequentially — each takes 10–60 seconds. The fast processing speed makes sequential compression practical even for large batches.",
                },
                {
                  q: "Are my PDF files safe to upload online?",
                  a: "Yes. All file transfers to and from Scenith use 256-bit SSL/TLS encryption — the same standard used by banks. Your PDF is processed in an isolated secure container on our servers. The original file is permanently deleted immediately after you download your compressed version. Scenith never reads, stores, indexes, or shares your document content.",
                },
                {
                  q: "What happens to hyperlinks, bookmarks, and form fields after compression?",
                  a: "All document functionality is preserved after compression. Hyperlinks continue working, bookmarks (table of contents entries) remain intact, fillable form fields stay interactive, digital signatures are preserved, and internal cross-references are maintained. Compression only affects file size, not document functionality.",
                },
              ].map((faq, i) => (
                <article
                  key={i}
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "24px 28px",
                  }}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3
                    itemProp="name"
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#1e293b",
                      marginBottom: "12px",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      itemProp="text"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.75",
                        color: "#475569",
                        margin: 0,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ─── PEOPLE ALSO ASK ─── */}
          <section
            style={{ marginBottom: "80px" }}
            aria-labelledby="paa-heading"
          >
            <h2
              id="paa-heading"
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "32px",
                letterSpacing: "-0.02em",
              }}
            >
              People Also Ask About Compressing PDFs
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  q: "What is the best free PDF compressor online?",
                  a: "Scenith, Smallpdf, and ILovePDF are consistently rated the top free PDF compressors online. Scenith offers no file size limits and making it ideal for quick, one-off compressions. For power users needing batch processing and format conversion, Smallpdf's free tier includes 2 tasks per day.",
                },
                {
                  q: "How do I compress a PDF in Windows 10/11 without software?",
                  a: "The easiest way is to use a free online PDF compressor like Scenith — open your browser, upload the PDF, compress, and download. No software installation needed. Alternatively, Microsoft Word can open and re-save PDFs at a smaller size, though this sometimes alters formatting.",
                },
                {
                  q: "How do I reduce PDF file size on Mac?",
                  a: "Mac's built-in Preview app can compress PDFs: open the PDF, go to File → Export as PDF, then select 'Reduce File Size' from the Quartz Filter dropdown. Results vary widely. For reliable, consistent compression, using Scenith's online compressor typically gives better results with more control.",
                },
                {
                  q: "Can I compress a PDF on iPhone or Android?",
                  a: "Yes — any web-based PDF compressor works on mobile. Open Scenith's PDF compressor in Chrome or Safari on your phone, upload from Files or Google Drive, select your compression level, and download. No app download required. The process is identical to desktop.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "22px 24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1e293b",
                      marginBottom: "10px",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#475569",
                      margin: 0,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── FINAL CTA ─── */}
          <section
            style={{
              textAlign: "center",
              padding: "80px 40px",
              backgroundColor: "#f0fdf4",
              border: "2px solid #bbf7d0",
              borderRadius: "24px",
              marginBottom: "80px",
            }}
            aria-labelledby="final-cta-heading"
          >
            <h2
              id="final-cta-heading"
              style={{
                fontSize: "clamp(24px, 4vw, 42px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Compress Your PDF?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#475569",
                marginBottom: "36px",
                fontFamily: "sans-serif",
                maxWidth: "520px",
                margin: "0 auto 36px",
              }}
            >
              Join thousands of users who reduce PDF file sizes every day with
              Scenith&apos;s free online compressor. No watermarks.
              No limits.
            </p>
            
            <a  href={TOOL_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#10b981",
                color: "white",
                padding: "22px 56px",
                borderRadius: "14px",
                fontSize: "22px",
                fontWeight: 800,
                fontFamily: "sans-serif",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(16,185,129,0.4)",
                letterSpacing: "-0.01em",
              }}
              aria-label="Compress PDF online for free."
            >
              <span style={{ fontSize: "26px" }}>📄</span>
              Compress PDF Online — Free
              <span style={{ fontSize: "20px", opacity: 0.9 }}>→</span>
            </a>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(16px, 3vw, 40px)",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: "✅", text: "100% Free Forever" },
                { icon: "🔒", text: "256-bit SSL Secure" },
                { icon: "⚡", text: "No Size Limits" },
                { icon: "🗑️", text: "Files Auto-Deleted" },
                { icon: "📱", text: "Works on All Devices" },
              ].map((item) => (
                <span
                  key={item.text}
                  style={{
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </section>

          {/* ─── RELATED TOOLS ─── */}
          <section
            style={{ marginBottom: "60px" }}
            aria-labelledby="related-heading"
          >
            <h2
              id="related-heading"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              More Free PDF Tools on Scenith
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { href: "/pdf-tools", icon: "✂️", label: "Split PDF" },
                {
                  href: "/pdf-tools",
                  icon: "🔗",
                  label: "Merge PDF",
                },
                {
                  href: "/pdf-tools",
                  icon: "🔄",
                  label: "PDF to Word",
                },
                { href: "/pdf-tools", icon: "🔐", label: "Protect PDF" },
                {
                  href: "/pdf-tools",
                  icon: "🖼️",
                  label: "PDF to Image",
                },
                {
                  href: "/pdf-tools",
                  icon: "✍️",
                  label: "Sign PDF",
                },
              ].map((tool) => (
                
                <a  key={tool.label}
                  href={tool.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "16px 20px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    textDecoration: "none",
                    color: "#334155",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{tool.icon}</span>
                  {tool.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}