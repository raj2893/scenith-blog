import type { CSSProperties } from "react";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/pdf-to-images?utm_source=pdf-to-image&utm_medium=cta&utm_campaign=seo-landing";

// ── Inline styles (no extra CSS file needed) ──────────────────────────────────
const s: Record<string, CSSProperties> = {
  /* layout */
  page: { fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1e293b", lineHeight: 1.7 },
  container: { maxWidth: 1160, margin: "0 auto", padding: "0 20px" },

  /* hero */
  hero: {
    background: "linear-gradient(135deg, #0e7490 0%, #155e75 50%, #0f172a 100%)",
    padding: "72px 20px 80px",
    textAlign: "center",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  heroBadge: {
    display: "inline-block",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 100,
    padding: "6px 18px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 22,
    color: "#a5f3fc",
  },
  heroH1: {
    fontSize: "clamp(28px, 4vw, 52px)",
    fontWeight: 900,
    lineHeight: 1.15,
    margin: "0 auto 22px",
    maxWidth: 860,
    color: "#fff",
  },
  heroSub: {
    fontSize: "clamp(15px, 1.8vw, 19px)",
    color: "#cffafe",
    maxWidth: 680,
    margin: "0 auto 42px",
    lineHeight: 1.65,
  },

  /* CTA button */
  ctaWrap: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 36 },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    color: "#0e7490",
    fontWeight: 800,
    fontSize: 18,
    padding: "17px 42px",
    borderRadius: 14,
    textDecoration: "none",
    boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
    transition: "transform 0.18s, box-shadow 0.18s",
    border: "none",
    cursor: "pointer",
  },
  ctaBtnArrow: { fontSize: 22 },

  /* trust pills */
  trustRow: { display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" },
  trustPill: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 13,
    color: "#e0f2fe",
    fontWeight: 500,
  },

  /* breadcrumb */
  breadcrumb: {
  background: "#f1f5f9",
  borderBottom: "1px solid #e2e8f0",
  padding: "10px 20px",
  fontSize: 13,
  color: "#64748b",
  marginTop: 85,
},
  breadcrumbList: { display: "flex", gap: 6, alignItems: "center", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" },
  breadcrumbLink: { color: "#0e7490", textDecoration: "none", fontWeight: 500 },
  breadcrumbSep: { color: "#94a3b8" },

  /* section titles */
  sectionTitle: {
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: 12,
    lineHeight: 1.25,
  },
  sectionLead: { fontSize: 17, color: "#475569", marginBottom: 40, maxWidth: 700 },

  /* section padding */
  section: { padding: "72px 20px" },
  sectionAlt: { padding: "72px 20px", background: "#f8fafc" },

  /* cards */
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    marginTop: 32,
  },
  card: {
    background: "#fff",
    border: "1.5px solid #e2e8f0",
    borderRadius: 16,
    padding: 28,
    boxShadow: "0 2px 12px rgba(14,116,144,0.06)",
  },
  cardTop: {
    borderTop: "4px solid #06b6d4",
    borderRadius: "16px 16px 0 0",
  },
  cardIcon: { fontSize: 36, marginBottom: 12 },
  cardTitle: { fontSize: 20, fontWeight: 700, color: "#0e7490", marginBottom: 10 },
  cardBody: { fontSize: 15, color: "#475569", lineHeight: 1.7 },

  /* steps */
  stepRow: { display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 36, flexWrap: "wrap" },
  stepNum: {
    minWidth: 44,
    height: 44,
    borderRadius: "50%",
    background: "#0e7490",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 18,
    flexShrink: 0,
    marginTop: 2,
  },
  stepContent: { flex: 1 },
  stepTitle: { fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 },
  stepBody: { fontSize: 15, color: "#475569", lineHeight: 1.75 },

  /* format comparison table */
  table: { width: "100%", borderCollapse: "collapse", marginTop: 24, fontSize: 15 },
  th: {
    background: "#0e7490",
    color: "#fff",
    padding: "12px 18px",
    textAlign: "left",
    fontWeight: 700,
    fontSize: 14,
  },
  td: { padding: "12px 18px", borderBottom: "1px solid #e2e8f0", color: "#334155", verticalAlign: "top" },
  tdAlt: { padding: "12px 18px", borderBottom: "1px solid #e2e8f0", color: "#334155", verticalAlign: "top", background: "#f8fafc" },

  /* FAQ */
  faqItem: {
    background: "#fff",
    border: "1.5px solid #e2e8f0",
    borderRadius: 14,
    padding: "24px 28px",
    marginBottom: 16,
  },
  faqQ: { fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 10 },
  faqA: { fontSize: 15, color: "#475569", lineHeight: 1.75, margin: 0 },

  /* mid-page CTA banner */
  ctaBanner: {
    background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    border: "2px solid #06b6d4",
    borderRadius: 20,
    padding: "48px 32px",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: 860,
  },
  ctaBannerTitle: { fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, color: "#0e7490", marginBottom: 12 },
  ctaBannerSub: { fontSize: 16, color: "#155e75", marginBottom: 28 },
  ctaBannerBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#0e7490",
    color: "#fff",
    fontWeight: 800,
    fontSize: 17,
    padding: "15px 38px",
    borderRadius: 12,
    textDecoration: "none",
    boxShadow: "0 6px 24px rgba(14,116,144,0.35)",
  },

  /* use cases */
  useCaseGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 28 },
  useCaseCard: { background: "#fff", borderRadius: 14, padding: 24, border: "1.5px solid #e2e8f0" },
  useCaseIcon: { fontSize: 28, marginBottom: 10 },
  useCaseTitle: { fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 },
  useCaseList: { paddingLeft: 18, margin: 0, color: "#475569", fontSize: 14, lineHeight: 1.8 },

  /* stats bar */
  statsBar: { background: "#0e7490", padding: "40px 20px" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, textAlign: "center" },
  statVal: { fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1 },
  statLabel: { fontSize: 14, color: "#a5f3fc", marginTop: 6, fontWeight: 500 },

  /* comparison vs others */
  vsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 28 },
  vsCard: { background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: 24 },
  vsTitle: { fontSize: 17, fontWeight: 700, color: "#0e7490", marginBottom: 14 },
  vsList: { paddingLeft: 0, margin: 0, listStyle: "none", fontSize: 14, color: "#334155", lineHeight: 2 },

  /* divider */
  divider: { borderTop: "2px solid #e2e8f0", margin: "0 auto", maxWidth: 1160 },

  /* inline link */
  link: { color: "#0e7490", fontWeight: 600, textDecoration: "underline" },

  /* tip box */
  tip: {
    background: "#ecfeff",
    borderLeft: "4px solid #06b6d4",
    padding: "14px 18px",
    borderRadius: "0 10px 10px 0",
    fontSize: 14,
    color: "#155e75",
    marginTop: 14,
  },
};

export default function PdfToImagePage() {
  return (
    <div style={s.page}>
      {/* ── JSON-LD Structured Data ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#webpage",
                url: "https://scenith.in/tools/pdf-tools/pdf-to-image",
                name: "PDF to Image Converter Online Free – JPG, PNG, WebP | SCENITH",
                description:
                  "Convert PDF pages to high-quality images online for free. Extract every page as JPG, PNG, or WebP at 72, 150, or 300 DPI. No signup, no watermark, instant ZIP download.",
                isPartOf: { "@id": "https://scenith.in/#website" },
                breadcrumb: { "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#breadcrumb" },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
                  { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://scenith.in/tools/pdf-tools" },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "PDF to Image Converter",
                    item: "https://scenith.in/tools/pdf-tools/pdf-to-image",
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#howto",
                name: "How to Convert PDF to Image Online",
                description: "Step-by-step guide to converting PDF pages to JPG, PNG, or WebP images using SCENITH.",
                totalTime: "PT1M",
                tool: { "@type": "HowToTool", name: "SCENITH PDF to Image Converter" },
                step: [
                  { "@type": "HowToStep", position: 1, name: "Upload PDF", text: "Drag and drop your PDF or click to browse. Supports PDFs of any page count." },
                  { "@type": "HowToStep", position: 2, name: "Choose Format & DPI", text: "Select JPG, PNG, or WebP output format, then pick 72, 150, or 300 DPI quality." },
                  { "@type": "HowToStep", position: 3, name: "Convert & Download", text: "Click convert. Download all pages as a single ZIP archive in seconds." },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can I convert PDF to image without signing up?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. SCENITH's PDF to image converter requires no account, no signup, and no watermark. Just upload, configure, and download.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What image formats does the PDF to image converter support?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The converter supports JPG (best for photos and general use), PNG (lossless, best for text-heavy pages), and WebP (smallest file size for modern web use).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What DPI should I choose when converting PDF to image?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Choose 72 DPI for screen/web use, 150 DPI for presentations and high-resolution displays, and 300 DPI for professional print-quality output.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a page limit for the PDF to image converter?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. SCENITH's tool supports PDFs with unlimited pages. All pages are extracted and delivered in a single ZIP file.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How are extracted images delivered?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "All pages are automatically named (page-1.jpg, page-2.jpg, etc.) and packed into a single ZIP archive for one-click download.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does converting PDF to image preserve quality?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. SCENITH renders vector PDF content at the chosen DPI, ensuring text stays sharp, colors are accurate, and all graphical elements are faithfully reproduced.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I convert a password-protected PDF to images?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Password-protected PDFs must be unlocked first using the SCENITH Unlock PDF tool. Once unlocked, you can convert them to images freely.",
                    },
                  },
                ],
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://scenith.in/tools/pdf-tools/pdf-to-image#software",
                name: "SCENITH PDF to Image Converter",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Web Browser",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                featureList: [
                  "Convert PDF to JPG, PNG, WebP",
                  "72, 150, 300 DPI quality options",
                  "Unlimited pages per PDF",
                  "Bulk ZIP download",
                  "No watermark",
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={s.breadcrumb}>
        <ol
          style={s.breadcrumbList}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" style={s.breadcrumbLink} itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <span style={s.breadcrumbSep}>›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/pdf-tools" style={s.breadcrumbLink} itemProp="item">
              <span itemProp="name">PDF Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <span style={s.breadcrumbSep}>›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" style={{ color: "#64748b" }}>PDF to Image Converter</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <header style={s.hero}>
        {/* decorative rings */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
        }}>
          {[300, 550, 800].map((size) => (
            <div key={size} style={{
              position: "absolute", top: "50%", left: "50%",
              width: size, height: size,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              transform: `translate(-50%, -50%)`,
            }} />
          ))}
        </div>

        <div style={s.container}>
          <p style={s.heroBadge}>Free Online PDF Tool</p>
          <h1 style={s.heroH1}>
            PDF to Image Converter — Extract Every Page as a{" "}
            High-Quality JPG, PNG, or WebP
          </h1>
          <p style={s.heroSub}>
            The fastest way to turn any PDF document into crisp, ready-to-use images.
            Pick your format, choose your DPI, and download all pages as a ZIP — 100% free,
            no watermark, no sign-up.
          </p>

          {/* ── MAIN CTA ────────────────────────────────────────────────────── */}
          <div style={s.ctaWrap}>
            <a
              href={TOOL_URL}
              style={s.ctaBtn}
              aria-label="Open PDF to Image converter tool on SCENITH"
              rel="noopener"
            >
              <span>🖼️</span>
              <span>Convert PDF to Images Now — It's Free</span>
              <span style={s.ctaBtnArrow}>→</span>
            </a>
          </div>

          <div style={s.trustRow} role="list" aria-label="Key features">
            {[
              "🚫 Zero watermarks",
              "⚡ 10–60 sec conversion",
              "🗜️ ZIP bulk download",
              "🖨️ Up to 300 DPI",
              "📄 Unlimited pages",
            ].map((t) => (
              <span key={t} style={s.trustPill} role="listitem">{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <div style={s.statsBar} aria-hidden>
        <div style={{ ...s.container, ...s.statsGrid }}>
          {[
            { val: "3", label: "Output formats (JPG, PNG, WebP)" },
            { val: "300", label: "Max DPI for print quality" },
            { val: "∞", label: "Pages per PDF supported" },
            { val: "0", label: "Cost — always free" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={s.statVal}>{val}</div>
              <div style={s.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY THIS TOOL ─────────────────────────────────────────────────────── */}
      <section style={s.sectionAlt} aria-labelledby="why-title">
        <div style={s.container}>
          <h2 id="why-title" style={s.sectionTitle}>
            Why Use a Dedicated PDF to Image Converter?
          </h2>
          <p style={s.sectionLead}>
            Sharing, embedding, or editing PDF pages is unnecessarily complex when the content
            you need is visual. Converting PDF pages to images unlocks immediate usability
            across every platform and workflow.
          </p>

          <div style={s.cardGrid}>
            {[
              {
                icon: "🌐",
                title: "Universal Compatibility",
                body: "Images open on every device, browser, and application — no PDF reader required. Share a PNG on Instagram, embed a JPG on your website, or attach a WebP in an email without compatibility concerns.",
              },
              {
                icon: "✏️",
                title: "Editable in Any Design Tool",
                body: "Once a PDF page is an image, you can drag it straight into Photoshop, Canva, Figma, or Google Slides. Annotate, layer, or recompose without wrestling with PDF-native layers.",
              },
              {
                icon: "📊",
                title: "Presentations & Slide Decks",
                body: "Inserting PDF charts or infographics into PowerPoint as images preserves exact formatting and typography, unlike copy-paste methods that strip styles and break layouts.",
              },
              {
                icon: "🔍",
                title: "Searchable Thumbnails & Previews",
                body: "Generate page-1 previews to display document thumbnails in your CMS or e-commerce catalogue without serving multi-megabyte PDFs to end users.",
              },
              {
                icon: "📤",
                title: "Frictionless Sharing",
                body: "Social platforms, messaging apps, and email clients natively preview images. Sharing page-1.jpg as a teaser or all pages for a visual portfolio is effortless.",
              },
              {
                icon: "🖨️",
                title: "Print-Ready Outputs at 300 DPI",
                body: "Professional printers and print-on-demand platforms require rasterised images at 300 DPI. Our converter delivers exactly that, preserving colour accuracy and edge sharpness.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ ...s.card, ...s.cardTop }}>
                <div style={s.cardIcon}>{icon}</div>
                <h3 style={s.cardTitle}>{title}</h3>
                <p style={s.cardBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO CONVERT ────────────────────────────────────────────────────── */}
      <section style={s.section} aria-labelledby="howto-title">
        <div style={s.container}>
          <h2 id="howto-title" style={s.sectionTitle}>
            How to Convert PDF to Image in 3 Steps
          </h2>
          <p style={s.sectionLead}>
            Our converter is built for speed. No learning curve, no settings buried in menus —
            upload, configure, download.
          </p>

          {[
            {
              n: 1,
              title: "Upload Your PDF",
              body: (
                <>
                  Drag your PDF into the upload zone or click to browse your device. The tool
                  instantly detects the total page count so you know exactly how many images
                  you'll receive.{" "}
                  <strong>Password-protected PDFs?</strong> Unlock them first with our{" "}
                  <a href="/pdf-tools/unlock-pdf" style={s.link}>Unlock PDF tool</a>, then
                  convert freely.
                </>
              ),
              tip: "Pro tip: You can also upload PDFs directly from Google Drive via your browser — no extra steps needed.",
            },
            {
              n: 2,
              title: "Choose Format & Quality",
              body: (
                <>
                  Select from three export formats — <strong>JPG</strong> for compact, universally
                  compatible images; <strong>PNG</strong> for lossless quality ideal for text-heavy
                  pages; <strong>WebP</strong> for the smallest file sizes on modern web stacks.
                  Then choose your DPI: <strong>72</strong> for screen/email, <strong>150</strong>{" "}
                  for presentations, or <strong>300</strong> for professional print.
                </>
              ),
              tip: "Not sure which format? Choose PNG for document pages and JPG for photo-heavy PDFs. WebP is best if you're serving images on a website.",
            },
            {
              n: 3,
              title: "Convert & Download as ZIP",
              body: (
                <>
                  Click <strong>Process PDF to Images</strong>. Processing typically completes in
                  10–60 seconds depending on page count and selected DPI. All pages are
                  automatically named (<code>page-1.jpg</code>, <code>page-2.jpg</code>, …) and
                  bundled into a single <strong>ZIP archive</strong> for one-click download.
                </>
              ),
              tip: "All conversions happen server-side with no data retention. Your PDF is processed and immediately discarded — your content stays private.",
            },
          ].map(({ n, title, body, tip }) => (
            <div key={n} style={s.stepRow}>
              <div style={s.stepNum}>{n}</div>
              <div style={s.stepContent}>
                <h3 style={s.stepTitle}>{title}</h3>
                <p style={{ ...s.stepBody, margin: "0 0 0 0" }}>{body}</p>
                <div style={s.tip}>💡 {tip}</div>
              </div>
            </div>
          ))}

          {/* CTA inline */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href={TOOL_URL} style={s.ctaBannerBtn} rel="noopener">
              🖼️ Start Converting My PDF Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMAT COMPARISON TABLE ───────────────────────────────────────────── */}
      <section style={s.sectionAlt} aria-labelledby="format-title">
        <div style={s.container}>
          <h2 id="format-title" style={s.sectionTitle}>
            JPG vs PNG vs WebP — Which Format Should You Choose?
          </h2>
          <p style={s.sectionLead}>
            The right format depends on your end use. Here's a clear breakdown to help you decide instantly.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={s.table} role="table" aria-label="Image format comparison">
              <thead>
                <tr>
                  {["Criteria", "JPG", "PNG", "WebP"].map((h) => (
                    <th key={h} style={s.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Compression", "Lossy (smaller files)", "Lossless (perfect quality)", "Both lossy & lossless"],
                  ["Transparency", "❌ Not supported", "✅ Full alpha channel", "✅ Supported"],
                  ["Best for text pages", "⚠️ May show artifacts", "✅ Crisp & sharp", "✅ Sharp with small size"],
                  ["Best for photo pages", "✅ Excellent", "⚠️ Very large files", "✅ Better than JPG"],
                  ["File size (typical A4)", "~150–400 KB", "~800 KB–2 MB", "~100–300 KB"],
                  ["Browser support", "✅ Universal", "✅ Universal", "✅ All modern browsers"],
                  ["Ideal use case", "Web, email, sharing", "Archiving, editing, print prep", "Web apps, PWAs, CMS"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={i % 2 === 0 ? s.td : s.tdAlt}>
                        {j === 0 ? <strong>{cell}</strong> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DPI GUIDE ────────────────────────────────────────────────────────── */}
      <section style={s.section} aria-labelledby="dpi-title">
        <div style={s.container}>
          <h2 id="dpi-title" style={s.sectionTitle}>
            Understanding DPI: How to Pick the Right Resolution
          </h2>
          <p style={s.sectionLead}>
            DPI (dots per inch) controls the pixel density of your output. Higher DPI means
            sharper images — and larger file sizes. Here's exactly when to use each setting.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              {
                dpi: "72 DPI",
                label: "Screen & Email",
                color: "#0ea5e9",
                uses: ["Website images", "Email attachments", "Slack / Teams shares", "Quick previews", "Social media posts"],
                note: "Smallest file size. Perfectly readable on screens. Not suitable for printing.",
              },
              {
                dpi: "150 DPI",
                label: "Presentations & HD Displays",
                color: "#0e7490",
                uses: ["PowerPoint / Keynote slides", "Retina / HiDPI displays", "Digital magazines", "Video thumbnails", "Digital archives"],
                note: "Sweet spot between quality and file size. Great for professional digital outputs.",
              },
              {
                dpi: "300 DPI",
                label: "Professional Print",
                color: "#155e75",
                uses: ["Commercial printing", "Brochures & flyers", "Large-format posters", "Print-on-demand products", "Photo books"],
                note: "Highest quality output. Industry standard for all print workflows.",
              },
            ].map(({ dpi, label, color, uses, note }) => (
              <div key={dpi} style={{ ...s.card, borderTop: `4px solid ${color}` }}>
                <div style={{ fontSize: 28, fontWeight: 900, color, marginBottom: 4 }}>{dpi}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#64748b", marginBottom: 16 }}>
                  Best for: {label}
                </div>
                <ul style={{ paddingLeft: 18, margin: "0 0 16px", fontSize: 14, color: "#475569", lineHeight: 1.9 }}>
                  {uses.map((u) => <li key={u}>{u}</li>)}
                </ul>
                <div style={{ ...s.tip, marginTop: 0 }}>📌 {note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA BANNER ───────────────────────────────────────────────── */}
      <section style={{ ...s.sectionAlt }}>
        <div style={{ ...s.container, display: "flex", justifyContent: "center" }}>
          <div style={s.ctaBanner}>
            <h2 style={s.ctaBannerTitle}>Ready to Extract Images from Your PDF?</h2>
            <p style={s.ctaBannerSub}>
              Free, instant, and professional quality. No account needed. Works on any device.
            </p>
            <a href={TOOL_URL} style={s.ctaBannerBtn} rel="noopener">
              🚀 Open PDF to Image Converter
            </a>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {["Free forever", "No watermark", "Unlimited pages", "Instant ZIP"].map((t) => (
                <span key={t} style={{ fontSize: 13, color: "#0e7490", fontWeight: 600 }}>✓ {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────────── */}
      <section style={s.section} aria-labelledby="usecases-title">
        <div style={s.container}>
          <h2 id="usecases-title" style={s.sectionTitle}>
            Who Uses PDF to Image Conversion — and How
          </h2>
          <p style={s.sectionLead}>
            From designers to teachers to e-commerce sellers, converting PDF pages to images
            solves a surprisingly broad range of everyday problems.
          </p>

          <div style={s.useCaseGrid}>
            {[
              {
                icon: "🎨",
                title: "Designers & Creatives",
                items: ["Import PDF mockups directly into Figma or Sketch", "Use PDF-based brand guides as image references", "Extract illustrations for social media graphics", "Convert portfolio PDFs to shareable image carousels"],
              },
              {
                icon: "📚",
                title: "Educators & Researchers",
                items: ["Extract diagrams from academic PDFs for slide decks", "Convert textbook pages for digital annotation tools", "Share individual pages as images with students", "Archive research figures in a universal image format"],
              },
              {
                icon: "🛒",
                title: "E-Commerce Sellers",
                items: ["Convert product specification PDFs to listing images", "Extract catalogue pages as individual product shots", "Create Amazon / Etsy listing thumbnails from PDFs", "Generate image previews for digital product downloads"],
              },
              {
                icon: "📈",
                title: "Marketing & Business",
                items: ["Extract report charts and paste into presentations", "Convert PDF pitch decks to image sequences for video", "Turn campaign briefs into shareable visual references", "Build visual case studies from PDF whitepapers"],
              },
              {
                icon: "⚖️",
                title: "Legal & Administrative",
                items: ["Convert signed PDF contracts to image evidence", "Extract and archive specific pages from large documents", "Share individual form pages without exposing full PDFs", "Convert scanned documents to images for OCR workflows"],
              },
              {
                icon: "🎬",
                title: "Content Creators",
                items: ["Turn PDF slide decks into YouTube thumbnail sequences", "Convert PDF scripts / storyboards to image panels", "Extract cover pages for video description previews", "Use PDF infographics as Instagram carousel images"],
              },
            ].map(({ icon, title, items }) => (
              <div key={title} style={s.useCaseCard}>
                <div style={s.useCaseIcon}>{icon}</div>
                <h3 style={s.useCaseTitle}>{title}</h3>
                <ul style={s.useCaseList}>
                  {items.map((it) => <li key={it}>• {it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON VS ALTERNATIVES ────────────────────────────────────────── */}
      <section style={s.sectionAlt} aria-labelledby="vs-title">
        <div style={s.container}>
          <h2 id="vs-title" style={s.sectionTitle}>
            SCENITH PDF to Image Converter vs Alternatives
          </h2>
          <p style={s.sectionLead}>
            There are many tools that promise PDF to image conversion. Here's how SCENITH
            compares to the most common alternatives.
          </p>

          <div style={s.vsGrid}>
            {[
              {
                title: "vs Adobe Acrobat",
                rows: [
                  "✅ SCENITH: Free — no subscription",
                  "❌ Adobe: $14.99/month minimum",
                  "✅ SCENITH: No software install needed",
                  "❌ Adobe: Desktop app required",
                  "✅ SCENITH: JPG, PNG, WebP output",
                  "⚠️ Adobe: Limited format options on basic plans",
                ],
              },
              {
                title: "vs Smallpdf / ILovePDF",
                rows: [
                  "✅ SCENITH: Unlimited pages, no caps",
                  "❌ Others: Page or file-size limits on free tier",
                  "✅ SCENITH: WebP export (modern web-ready format)",
                  "❌ Others: JPG/PNG only",
                  "✅ SCENITH: 300 DPI print-ready output",
                  "⚠️ Others: DPI control only on paid plans",
                ],
              },
              {
                title: "vs Screenshot Method",
                rows: [
                  "✅ SCENITH: All pages converted in one click",
                  "❌ Screenshot: Manual, one page at a time",
                  "✅ SCENITH: 300 DPI sharpness preserved",
                  "❌ Screenshot: Screen resolution only (72 DPI)",
                  "✅ SCENITH: Perfect pixel alignment",
                  "❌ Screenshot: Scaling/zoom issues degrade quality",
                ],
              },
            ].map(({ title, rows }) => (
              <div key={title} style={s.vsCard}>
                <h3 style={s.vsTitle}>{title}</h3>
                <ul style={s.vsList}>
                  {rows.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section style={s.section} aria-labelledby="faq-title">
        <div style={s.container}>
          <h2 id="faq-title" style={s.sectionTitle}>
            Frequently Asked Questions: PDF to Image Conversion
          </h2>
          <p style={s.sectionLead}>
            Everything you need to know before you convert.
          </p>

          <div>
            {[
              {
                q: "Can I convert PDF to image without signing up?",
                a: "Absolutely. SCENITH's PDF to image converter is completely free and requires no account, no email, and no watermark. Just upload your PDF, pick your settings, and download. That's it.",
              },
              {
                q: "Is there a file size or page limit?",
                a: "There is no hard page limit. The tool handles PDFs with hundreds of pages. Very large files at 300 DPI will naturally take longer to process (up to 60 seconds), but all pages are included in the output ZIP.",
              },
              {
                q: "Which format gives the best quality for a text-heavy PDF?",
                a: "PNG is the best choice for text-heavy documents. Because PNG uses lossless compression, text edges stay perfectly crisp with no JPEG-style compression artifacts. For the cleanest output, combine PNG with 150 or 300 DPI.",
              },
              {
                q: "Can I extract just specific pages instead of the whole PDF?",
                a: "The tool converts all pages by default. If you only need certain pages, first use SCENITH's Split PDF tool to isolate the pages you want into a new PDF, then convert that smaller document to images.",
              },
              {
                q: "Does the PDF to image converter work on mobile?",
                a: "Yes. The tool is fully browser-based and works on iOS and Android without any app download. The upload, conversion, and ZIP download work seamlessly in mobile browsers.",
              },
              {
                q: "What happens to my PDF after conversion?",
                a: "Your PDF is processed server-side purely for conversion purposes and is not stored or retained after your session ends. No content from your PDF is logged or shared.",
              },
              {
                q: "Can I use the converted images commercially?",
                a: "Yes — the images are derived from your own PDF file, so standard usage rights apply based on your ownership of the source document. SCENITH imposes no usage restrictions on the output images.",
              },
              {
                q: "Why does a 300 DPI image look identical to 72 DPI on screen?",
                a: "Screens display at 72–96 DPI regardless of the image's native DPI. The difference becomes visible when printing: a 300 DPI image produces sharp, detailed print output, while a 72 DPI image printed at the same physical size will appear pixelated.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={s.faqItem}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 style={s.faqQ} itemProp="name">
                  {q}
                </h3>
                <p
                  style={s.faqA}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ────────────────────────────────────────────────────── */}
      <section style={s.sectionAlt} aria-labelledby="related-title">
        <div style={s.container}>
          <h2 id="related-title" style={s.sectionTitle}>
            Complete Your PDF Workflow with These Free Tools
          </h2>
          <p style={s.sectionLead}>
            SCENITH's PDF suite covers every document task — all free, all in-browser.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: "🔓", label: "Unlock PDF", href: "/pdf-tools/unlock-pdf", desc: "Remove password protection before conversion" },
              { icon: "✂️", label: "Split PDF", href: "/pdf-tools/split-pdf", desc: "Extract specific pages before converting to images" },
              { icon: "🔀", label: "Merge PDF", href: "/pdf-tools/merge-pdf", desc: "Combine PDFs, then extract as an image sequence" },
              { icon: "🗜️", label: "Compress PDF", href: "/pdf-tools/compress-pdf", desc: "Reduce PDF size before sharing or archiving" },
              { icon: "↔️", label: "Word to PDF", href: "/pdf-tools/word-to-pdf", desc: "Convert DOCX to PDF, then to images in one workflow" },
              { icon: "📝", label: "Edit PDF", href: "/pdf-tools/edit-pdf", desc: "Annotate pages before extracting as images" },
            ].map(({ icon, label, href, desc }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 14,
                  padding: 22,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontWeight: 700, color: "#0e7490", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL BOTTOM CTA ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #0e7490 100%)",
          padding: "80px 20px",
          textAlign: "center",
          color: "#fff",
        }}
        aria-labelledby="final-cta-title"
      >
        <div style={s.container}>
          <h2
            id="final-cta-title"
            style={{ fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 900, marginBottom: 18, color: "#fff" }}
          >
            Convert Your PDF to Images in Seconds
          </h2>
          <p style={{ fontSize: 18, color: "#a5f3fc", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            High-quality JPG, PNG, or WebP. Any DPI. Unlimited pages. Completely free —
            no signup, no watermarks, no nonsense.
          </p>
          <a
            href={TOOL_URL}
            style={{
              ...s.ctaBtn,
              fontSize: 20,
              padding: "20px 52px",
              background: "#fff",
              color: "#0e7490",
              borderRadius: 16,
            }}
            rel="noopener"
            aria-label="Open SCENITH PDF to Image converter"
          >
            <span>🖼️</span>
            <span>Convert PDF to Images — Free</span>
            <span>→</span>
          </a>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {["No software needed", "Works on mobile", "Private & secure", "Instant download"].map((t) => (
              <span key={t} style={{ fontSize: 14, color: "#cffafe", fontWeight: 500 }}>✓ {t}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}