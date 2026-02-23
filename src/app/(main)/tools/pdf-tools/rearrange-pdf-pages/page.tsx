"use client";

import React from "react";
import Link from "next/link";

const CTA_URL =
  "https://scenith.in/pdf-tools/mergepdfs?utm_source=rearrange_pdf_page&utm_medium=cta_button&utm_campaign=pdf_tools_cross_linking";

export default function RearrangePdfClient() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id":
                  "https://scenith.in/pdf-tools/rearrange-pdf-pages#webapp",
                name: "Scenith Rearrange PDF Pages",
                description:
                  "Free online tool to rearrange, reorder, and reorganize PDF pages using drag and drop. No watermarks, instant download.",
                url: "https://scenith.in/pdf-tools/rearrange-pdf-pages",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "Drag & drop page reordering",
                  "Reverse page order",
                  "Page-level thumbnail preview",
                  "No watermarks",
                  "Instant PDF download",
                  "100% browser-based, no install",
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
                  "https://scenith.in/pdf-tools/rearrange-pdf-pages#breadcrumb",
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
                    name: "Rearrange PDF Pages",
                    item: "https://scenith.in/pdf-tools/rearrange-pdf-pages",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://scenith.in/pdf-tools/rearrange-pdf-pages#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How do I rearrange pages in a PDF online for free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Upload your PDF to Scenith's PDF tools, drag and drop the page thumbnails into your desired order, then click Download. The entire process takes under 60 seconds and requires no software installation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does rearranging PDF pages reduce quality?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Scenith uses lossless page reordering — text sharpness, image resolution, fonts, and embedded elements are fully preserved after rearranging.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a page limit when reordering PDF pages?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No page limit. You can rearrange PDFs with hundreds of pages. The tool handles large documents efficiently.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my PDF safe when I reorder pages online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Files are encrypted in transit using 256-bit SSL/TLS, processed in isolated containers, and automatically deleted within 60 minutes. Scenith never reads, stores, or shares your documents.",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id":
                  "https://scenith.in/pdf-tools/rearrange-pdf-pages#howto",
                name: "How to Rearrange PDF Pages Online",
                description:
                  "Step-by-step guide to reordering pages in a PDF using Scenith's free online tool.",
                totalTime: "PT1M",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Upload Your PDF",
                    text: "Click 'Open PDF Tool' and upload your PDF file by clicking or dragging and dropping it.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Drag Pages to New Positions",
                    text: "Thumbnail previews of every page appear. Drag them into your desired order or remove unwanted pages.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Download the Reordered PDF",
                    text: "Click Process and download your perfectly reordered PDF in seconds.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "12px 20px", fontSize: "14px", color: "#64748b", maxWidth: "1200px", margin: "0 auto",marginTop: "85px"  }}>
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          style={{ display: "flex", gap: "6px", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item" style={{ color: "#3b82f6", textDecoration: "none" }}>
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
            <span style={{ margin: "0 4px" }}>›</span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/pdf-tools" itemProp="item" style={{ color: "#3b82f6", textDecoration: "none" }}>
              <span itemProp="name">PDF Tools</span>
            </a>
            <meta itemProp="position" content="2" />
            <span style={{ margin: "0 4px" }}>›</span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" style={{ color: "#1e293b", fontWeight: 600 }}>Rearrange PDF Pages</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Hero CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)",
          padding: "80px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        role="main"
        aria-labelledby="hero-title"
      >
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", right: "-40px", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: "100px", padding: "6px 18px", marginBottom: "20px", fontSize: "13px", fontWeight: 600, color: "#e0f2fe", letterSpacing: "0.5px" }}>
            🆓 100% FREE · NO WATERMARKS 
          </div>
          <h1
            id="hero-title"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.5px" }}
          >
            Rearrange PDF Pages Online — Free, Fast & Private
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#bfdbfe", lineHeight: 1.7, marginBottom: "40px", maxWidth: "640px", margin: "0 auto 40px" }}>
            Drag and drop to reorder, reverse, or reorganize pages in any PDF. No software to install. No account required. Your file stays private and is auto-deleted within 60 minutes.
          </p>

          
        <a    href={CTA_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              color: "#1e40af",
              fontWeight: 800,
              fontSize: "18px",
              padding: "18px 44px",
              borderRadius: "14px",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              transition: "transform 0.2s, box-shadow 0.2s",
              letterSpacing: "-0.2px",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.22)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
            }}
            aria-label="Open free PDF page rearrange tool"
          >
            <span style={{ fontSize: "22px" }}>📄</span>
            Open Free PDF Tool →
          </a>

          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "32px", flexWrap: "wrap" }}>
            {["✅ No file size limit", "✅ 100% quality preserved", "✅ Auto-deleted in 60 min", "✅ SSL encrypted"].map((item) => (
              <span key={item} style={{ color: "#bfdbfe", fontSize: "14px", fontWeight: 500 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

        {/* What is section */}
        <section style={{ margin: "70px 0 60px" }} aria-labelledby="what-is-title">
          <h2 id="what-is-title" style={{ fontSize: "32px", fontWeight: 800, color: "#1e293b", marginBottom: "16px" }}>
            What Does "Rearrange PDF Pages" Mean?
          </h2>
          <div style={{ width: "60px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "28px" }} />
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#475569", marginBottom: "20px" }}>
            <strong>Rearranging PDF pages</strong> means changing the sequential order of pages within an existing PDF file without altering the content on those pages. When you rearrange a PDF, you move individual pages — or groups of pages — from their current position to a new position, producing a reorganized document that better suits your presentation, workflow, or audience.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#475569", marginBottom: "20px" }}>
            This is one of the most common PDF editing tasks professionals face. A legal team might need to place a signature page at the end of a contract. A student might want to move the conclusion chapter before appendices. A marketer might need to reorder slides in an exported PDF deck. In every case, the goal is the same: <strong>control over page sequence</strong> without recreating the entire document.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#475569" }}>
            Scenith's free online PDF page organizer handles all of this in your browser — no desktop software like Adobe Acrobat required.
          </p>
        </section>

        {/* How it works */}
        <section style={{ margin: "0 0 70px", background: "#f8fafc", borderRadius: "20px", padding: "48px 40px" }} aria-labelledby="howto-title">
          <h2 id="howto-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            🚀 How to Rearrange PDF Pages in 3 Steps
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "36px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {[
              {
                step: "1",
                icon: "📤",
                title: "Upload Your PDF",
                desc: "Click the button above to open the PDF tool. Upload your file by clicking the drop zone or dragging your PDF directly into the browser. Supports any PDF regardless of page count.",
              },
              {
                step: "2",
                icon: "↕️",
                title: "Drag Pages to Reorder",
                desc: "Thumbnail previews of every page load instantly. Simply drag pages to new positions. You can also remove unwanted pages or insert additional PDFs between existing pages.",
              },
              {
                step: "3",
                icon: "📥",
                title: "Download Your Reordered PDF",
                desc: "Hit Process and your reordered PDF is ready within seconds. Download it directly to your device. Full quality, no watermarks, no branding — it's 100% yours.",
              },
            ].map((item) => (
              <article key={item.step} style={{ background: "#ffffff", borderRadius: "14px", padding: "28px 24px", borderTop: "4px solid #3b82f6", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#3b82f6", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px", flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <span style={{ fontSize: "24px" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#475569", margin: 0 }}>{item.desc}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            
            <a  href={CTA_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#3b82f6",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "16px",
                padding: "14px 36px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(59,130,246,0.35)",
              }}
            >
              Try It Now — Free →
            </a>
          </div>
        </section>

        {/* Why rearrange section */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="why-title">
          <h2 id="why-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            📋 Top Reasons to Rearrange PDF Pages
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {[
              { icon: "⚖️", title: "Legal Documents", desc: "Reorder contract clauses, place signature pages at the end, or reorganize exhibits so they match the reference sequence described in the main agreement body." },
              { icon: "🎓", title: "Academic Papers & Theses", desc: "Move abstract, table of contents, bibliography, and appendices to the correct positions required by your institution's submission guidelines." },
              { icon: "📊", title: "Business Reports & Decks", desc: "Place executive summaries first, reorder quarterly data slides for logical narrative flow, or restructure multi-department reports for board presentations." },
              { icon: "🏗️", title: "Technical Manuals", desc: "Ensure safety instructions precede operational steps. Reorder assembly diagrams so they match the numbered instructions in the accompanying text." },
              { icon: "📸", title: "Photography & Design Portfolios", desc: "Curate page order for maximum visual impact. Front-load your strongest work and arrange the sequence to tell a coherent creative story." },
              { icon: "🏠", title: "Real Estate & Finance Docs", desc: "Reorganize property listing packets, mortgage disclosure packets, or investment prospectuses so clients receive information in priority order." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "16px", padding: "24px", background: "#f8fafc", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "28px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#475569", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features section */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="features-title">
          <h2 id="features-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            🔧 Key Features of Scenith's PDF Page Organizer
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { icon: "🖱️", title: "True Drag & Drop Interface", desc: "Thumbnail-based visual reordering — drag any page to any position with instant live preview of the new sequence before you commit to download." },
              { icon: "🔍", title: "Full-Page Thumbnail Preview", desc: "Every page renders as a clear, clickable thumbnail so you can verify content before moving it. No more guessing by page number alone." },
              { icon: "➕", title: "Insert Pages Mid-Document", desc: "Add pages from a second PDF between existing pages — not just at the start or end. Ideal for inserting cover pages, dividers, or addendums." },
              { icon: "🗑️", title: "Delete Unwanted Pages", desc: "Remove blank filler pages, duplicate pages, or irrelevant sections directly within the reorder view without a separate 'delete pages' step." },
              { icon: "💎", title: "Zero Quality Loss", desc: "Page reordering is purely structural. Text, images, fonts, hyperlinks, form fields, and embedded metadata are completely untouched." },
              { icon: "📱", title: "Works on Any Device", desc: "Fully responsive — rearrange PDF pages on desktop, tablet, or mobile. No app download needed; runs entirely in your browser." },
              { icon: "🔐", title: "End-to-End Encryption", desc: "256-bit SSL/TLS encryption protects your file during upload and download. Files are processed in isolated containers and never stored long-term." },
              { icon: "⚡", title: "Processes in Seconds", desc: "Even large PDFs with 200+ pages are processed in under 15 seconds thanks to Scenith's optimized cloud infrastructure." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "22px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: "26px", marginBottom: "10px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#64748b", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced techniques */}
        <section style={{ margin: "0 0 70px", background: "#f0f9ff", borderRadius: "20px", padding: "48px 40px" }} aria-labelledby="advanced-title">
          <h2 id="advanced-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            🎯 Advanced PDF Page Organization Strategies
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#0ea5e9", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gap: "28px" }}>
            {[
              {
                title: "1. The Executive-First Structure",
                desc: "Most business PDFs are generated with appendices and supporting data at the end. Reorder them so decision-makers see the executive summary, key metrics, and recommended actions on pages 1–3. Detailed evidence follows. Studies consistently show this reduces meeting times because stakeholders arrive informed.",
              },
              {
                title: "2. Reverse-Order Scanning Fix",
                desc: "Physical flatbed and document scanners often produce PDFs with page 1 scanned last, resulting in an inverted document. Instead of rescanning, use the PDF page organizer to reverse the entire page sequence in one action. This is one of the highest-volume use cases for PDF reordering tools.",
              },
              {
                title: "3. Interleaved Bilingual Documents",
                desc: "For international audiences, reorder pages so that each English page is immediately followed by its translated counterpart. This interleaved bilingual structure is standard in EU regulatory documents, multinational contracts, and UN publications — and takes seconds to achieve using drag-and-drop reordering.",
              },
              {
                title: "4. Modular Report Assembly",
                desc: "If multiple departments submit their sections as separate PDFs, use Scenith's merge and rearrange workflow: first merge all files, then reorder pages to follow the master structure template. This is far faster than manually rebuilding a single document from scratch in Word or InDesign.",
              },
              {
                title: "5. Presentation-to-Portfolio Conversion",
                desc: "Slide decks exported as PDFs are often ordered for live presentation flow (hook → problem → solution → CTA). Reorder them for asynchronous reading (summary → deep-dive → supporting slides → appendix) before distributing to stakeholders who weren't in the room.",
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: "24px 28px", background: "#ffffff", borderRadius: "12px", borderLeft: "4px solid #0ea5e9" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0c4a6e", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#475569", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA */}
        <section style={{ margin: "0 0 70px", textAlign: "center", background: "linear-gradient(135deg, #1e40af, #0ea5e9)", borderRadius: "20px", padding: "56px 32px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#ffffff", marginBottom: "14px" }}>
            Ready to Reorganize Your PDF?
          </h2>
          <p style={{ fontSize: "18px", color: "#bfdbfe", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Free, instant, and private. No account, no watermarks, no catches.
          </p>
          
        <a    href={CTA_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              color: "#1e40af",
              fontWeight: 800,
              fontSize: "17px",
              padding: "16px 40px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(0,0,0,0.16)",
            }}
          >
            <span>📄</span> Open PDF Organizer — Free →
          </a>
        </section>

        {/* Comparison section */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="comparison-title">
          <h2 id="comparison-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            Rearrange PDF Pages: Online Tool vs Desktop Software
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ background: "#1e40af", color: "#ffffff" }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", borderRadius: "12px 0 0 0" }}>Feature</th>
                  <th style={{ padding: "16px 20px", textAlign: "center" }}>Scenith (Free Online)</th>
                  <th style={{ padding: "16px 20px", textAlign: "center", borderRadius: "0 12px 0 0" }}>Adobe Acrobat Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "✅ Free", "❌ $239.88/year"],
                  ["Installation Required", "✅ None — browser-based", "❌ Desktop install (~2 GB)"],
                  ["Works on Mac & PC", "✅ Yes — any OS", "⚠️ Separate licenses"],
                  ["Drag & Drop Reordering", "✅ Yes", "✅ Yes"],
                  ["Page Thumbnail Previews", "✅ Yes", "✅ Yes"],
                  ["File Privacy", "✅ Auto-deleted in 60 min", "✅ Local processing"],
                  ["No Watermarks", "✅ Never", "✅ Never"],
                  ["Mobile-Friendly", "✅ Fully responsive", "⚠️ Mobile app, limited features"],
                  ["Merge + Rearrange Together", "✅ Yes", "✅ Yes"],
                ].map(([feature, scenith, adobe], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "#334155", borderBottom: "1px solid #e2e8f0" }}>{feature}</td>
                    <td style={{ padding: "14px 20px", textAlign: "center", color: "#475569", borderBottom: "1px solid #e2e8f0" }}>{scenith}</td>
                    <td style={{ padding: "14px 20px", textAlign: "center", color: "#475569", borderBottom: "1px solid #e2e8f0" }}>{adobe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Industry use cases */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="industry-title">
          <h2 id="industry-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            🏢 Who Uses PDF Page Rearranging? Industry Breakdown
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "📈 Finance & Banking",
                color: "#eff6ff",
                border: "#3b82f6",
                titleColor: "#1e40af",
                items: [
                  "Reorder audit report sections by severity",
                  "Move risk summaries before detailed tables",
                  "Reorganize loan application packets",
                  "Resequence investment prospectus sections",
                ],
              },
              {
                title: "⚕️ Healthcare & Medical",
                color: "#f0fdf4",
                border: "#22c55e",
                titleColor: "#15803d",
                items: [
                  "Order patient intake documents logically",
                  "Sequence clinical trial result pages by phase",
                  "Reorder insurance claim supporting docs",
                  "Organize multi-specialist referral letters",
                ],
              },
              {
                title: "🏛️ Legal & Compliance",
                color: "#fef2f2",
                border: "#ef4444",
                titleColor: "#b91c1c",
                items: [
                  "Position signature pages at document end",
                  "Order exhibits to match reference sequence",
                  "Resequence deposition transcript pages",
                  "Organize discovery document packets",
                ],
              },
              {
                title: "🎓 Education & Research",
                color: "#faf5ff",
                border: "#a855f7",
                titleColor: "#7e22ce",
                items: [
                  "Correct thesis chapter ordering",
                  "Reorder scanned exam papers",
                  "Organize lecture note handouts",
                  "Sequence research publication pages",
                ],
              },
            ].map((section) => (
              <div key={section.title} style={{ background: section.color, borderTop: `4px solid ${section.border}`, borderRadius: "14px", padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: section.titleColor, marginBottom: "16px" }}>{section.title}</h3>
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                  {section.items.map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "#475569", marginBottom: "10px", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security section */}
        <section style={{ margin: "0 0 70px", background: "#fef2f2", borderRadius: "20px", padding: "48px 40px", borderLeft: "6px solid #dc2626" }} aria-labelledby="security-title">
          <h2 id="security-title" style={{ fontSize: "28px", fontWeight: 800, color: "#991b1b", marginBottom: "8px" }}>
            🔐 Your Privacy Is Non-Negotiable
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#dc2626", borderRadius: "2px", marginBottom: "24px" }} />
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#7f1d1d", marginBottom: "28px", maxWidth: "700px" }}>
            When you rearrange PDF pages online, you're trusting a service with potentially sensitive documents. Here's exactly how Scenith protects your data at every step:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { title: "256-bit SSL/TLS Encryption", desc: "All file transfers are encrypted during upload and download — the same standard used by banks." },
              { title: "Isolated Processing Containers", desc: "Your PDF is processed in a sandboxed container, completely isolated from other users' files." },
              { title: "60-Minute Auto-Deletion", desc: "Files are permanently and irrecoverably deleted within 60 minutes of processing — no exceptions." },
              { title: "Zero Data Retention", desc: "Scenith does not read, index, analyze, or retain any content from your PDF files." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#ffffff", padding: "20px", borderRadius: "10px", border: "1px solid #fecaca" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#dc2626", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#64748b", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="faq-title">
          <h2 id="faq-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                q: "How do I rearrange pages in a PDF without Adobe Acrobat?",
                a: "Use Scenith's free online PDF organizer. Upload your file, drag pages to your desired order in the thumbnail view, and download the reordered PDF. The whole process takes under 60 seconds and requires no software installation.",
              },
              {
                q: "Does rearranging PDF pages affect text searchability?",
                a: "No. Page reordering is a purely structural operation. All text, including searchable and selectable text from OCR, remains fully intact and searchable after pages are rearranged.",
              },
              {
                q: "Can I rearrange pages in a password-protected PDF?",
                a: "Password-protected PDFs must be unlocked before rearranging. If you have the password, open the PDF in your browser's built-in viewer, save a copy (which removes the password), then upload that copy to the rearranging tool.",
              },
              {
                q: "How many pages can I rearrange in one PDF?",
                a: "There is no page limit. Scenith's PDF page organizer handles documents of any page count, from a 2-page contract to a 500-page technical manual.",
              },
              {
                q: "Can I undo page reordering after I download?",
                a: "Once downloaded, changes are saved in the new file. To undo, simply re-upload the reordered PDF and drag pages back to their original positions, then download again. There is no limit on how many times you can reorder.",
              },
              {
                q: "Will hyperlinks and bookmarks still work after reordering?",
                a: "Hyperlinks that point to external URLs remain intact. Internal page-number bookmarks may need to be manually updated since the target page numbers have changed.",
              },
              {
                q: "Is there a difference between 'rearrange' and 'reorder' PDF pages?",
                a: "The terms are interchangeable. Both describe changing the sequence of pages within a PDF file. You may also see this called 'reorganize PDF pages,' 'sort PDF pages,' or 'move PDF pages' — all refer to the same action.",
              },
              {
                q: "Can I use this tool to split a PDF by rearranging pages?",
                a: "The rearrange tool is focused on reordering. For splitting a PDF into separate files, Scenith offers a dedicated PDF splitter tool. You can combine workflows: split first, then rearrange pages within each section.",
              },
            ].map((item) => (
              <div key={item.q} style={{ background: "#f8fafc", padding: "24px 28px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>🤔 {item.q}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#475569", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section style={{ margin: "0 0 70px" }} aria-labelledby="related-title">
          <h2 id="related-title" style={{ fontSize: "28px", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
            🛠️ Related PDF Tools You Might Need
          </h2>
          <div style={{ width: "50px", height: "4px", background: "#3b82f6", borderRadius: "2px", marginBottom: "32px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { icon: "🔀", title: "Merge PDF Files", desc: "Combine multiple PDFs into one document with full control over file order.", href: "https://scenith.in/pdf-tools/mergepdfs" },
              { icon: "✂️", title: "Split PDF", desc: "Divide a large PDF into smaller files by page range, size, or bookmarks.", href: "/pdf-tools/split-pdf" },
              { icon: "🗜️", title: "Compress PDF", desc: "Reduce PDF file size without visible quality loss for easy sharing.", href: "/pdf-tools/compress-pdf" },
              { icon: "🔄", title: "Rotate PDF Pages", desc: "Fix sideways or upside-down pages in any PDF with a single click.", href: "/pdf-tools/rotate-pdf" },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} style={{ display: "block", padding: "24px", background: "#ffffff", borderRadius: "14px", border: "1px solid #e2e8f0", textDecoration: "none", transition: "box-shadow 0.2s", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{tool.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>{tool.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#64748b", margin: 0 }}>{tool.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ margin: "0 0 80px", textAlign: "center", background: "#ecfdf5", borderRadius: "20px", padding: "56px 32px", border: "2px solid #10b981" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#047857", marginBottom: "12px" }}>
            🚀 Rearrange Your PDF Pages Now — It's Free
          </h2>
          <p style={{ fontSize: "17px", color: "#065f46", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
             No watermark. No file size limit. Just drag, drop, and download.
          </p>
          
        <a    href={CTA_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#10b981",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "17px",
              padding: "16px 44px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(16,185,129,0.35)",
            }}
          >
            <span>📄</span> Open Free PDF Tool →
          </a>
          <div style={{ marginTop: "20px", fontSize: "13px", color: "#6ee7b7", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <span>✅ 100% Free</span>
            <span>✅ No watermarks</span>
            <span>✅ SSL encrypted</span>
            <span>✅ Auto-deleted in 60 min</span>
          </div>
        </section>
      </div>
    </>
  );
}