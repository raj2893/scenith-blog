"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./CompressPdf.module.css";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools?utm_source=compress-pdf-landing&utm_medium=cta&utm_campaign=compress-pdf-without-losing-quality";

// --- Static data ---
const STATS = [
  { value: "90%", label: "Max size reduction", icon: "📉" },
  { value: "< 3s", label: "Average processing time", icon: "⚡" },
  { value: "500MB", label: "Max file size supported", icon: "📦" },
  { value: "0", label: "Watermarks added", icon: "🚫" },
];

const USE_CASES = [
  {
    icon: "📧",
    title: "Email Attachments",
    desc: "Gmail, Outlook, and most email providers cap attachments at 10–25 MB. Compress your PDF to sail through without needing to use WeTransfer or Dropbox links.",
    tip: "Target: under 10 MB",
    color: "#3b82f6",
  },
  {
    icon: "🏦",
    title: "Government & Bank Portals",
    desc: "IRCTC, income-tax portals, UIDAI, bank KYC upload portals — all enforce strict file-size limits, often as low as 200 KB or 2 MB. Compression is non-negotiable.",
    tip: "Target: under 500 KB",
    color: "#f59e0b",
  },
  {
    icon: "🎓",
    title: "University Admissions",
    desc: "Application portals for CUET, JEE, NEET, and foreign universities typically allow PDFs no larger than 1–5 MB per document. Compress transcripts, SOPs, and recommendation letters.",
    tip: "Target: under 2 MB",
    color: "#10b981",
  },
  {
    icon: "💼",
    title: "Job Applications & Resumes",
    desc: "ATS systems and HR portals often reject resumes over 5 MB. A compressed, crisp PDF resume actually loads faster and looks more professional on recruiter screens.",
    tip: "Target: under 1 MB",
    color: "#8b5cf6",
  },
  {
    icon: "📱",
    title: "WhatsApp & Messaging Apps",
    desc: "WhatsApp compresses PDFs it sends, often degrading quality. Compress it yourself beforehand so you control the output quality — your client sees a crisp document.",
    tip: "Target: under 5 MB",
    color: "#ec4899",
  },
  {
    icon: "🌐",
    title: "Website & CMS Uploads",
    desc: "WordPress, Webflow, and Squarespace media libraries bloat fast. Compressed PDFs load faster for your visitors and improve Core Web Vitals scores that affect your Google ranking.",
    tip: "Target: under 3 MB",
    color: "#06b6d4",
  },
];

const COMPARISON_DATA = [
  {
    type: "Scanned Document (A4, 10 pages)",
    original: "18.4 MB",
    compressed: "2.1 MB",
    reduction: "89%",
  },
  {
    type: "Design Portfolio PDF (with images)",
    original: "45.0 MB",
    compressed: "9.3 MB",
    reduction: "79%",
  },
  {
    type: "Government Form (text + tables)",
    original: "3.2 MB",
    compressed: "0.4 MB",
    reduction: "88%",
  },
  {
    type: "Academic Research Paper",
    original: "8.7 MB",
    compressed: "1.9 MB",
    reduction: "78%",
  },
  {
    type: "Invoice / Bill PDF",
    original: "1.1 MB",
    compressed: "0.2 MB",
    reduction: "82%",
  },
  {
    type: "Presentation Exported as PDF",
    original: "22.0 MB",
    compressed: "5.4 MB",
    reduction: "75%",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Upload Your PDF",
    desc: "Drag and drop your PDF or click to browse. Files up to 500 MB are supported. Your file is transferred over a secure HTTPS connection.",
    icon: "⬆️",
  },
  {
    step: "02",
    title: "Choose Compression Level",
    desc: "Pick from preset levels (Low / Medium / High), set a custom percentage target (e.g. compress to 40% of original size), or enter an exact target file size in KB or MB.",
    icon: "🎚️",
  },
  {
    step: "03",
    title: "Process & Download",
    desc: "Click Compress. Our engine processes your file server-side in seconds. Download your compressed PDF instantly — clean, watermark-free.",
    icon: "✅",
  },
];

const FAQS = [
  {
    q: "Can I compress a PDF without losing quality?",
    a: "Yes — and this is the most common misconception. 'Quality' in PDFs is not a binary. Our tool uses perceptual compression, which optimises image resolution to the level human eyes can actually distinguish (typically 150–200 DPI for screen reading, 300 DPI for print). Text, vectors, and fonts are compressed losslessly, meaning zero degradation. You will not notice any visual difference in the overwhelming majority of PDFs.",
  },
  {
    q: "How much can I actually reduce a PDF file size?",
    a: "Reductions typically range from 40% to 90%. PDFs with high-resolution images, scanned pages, or embedded assets compress the most dramatically. A 20 MB scanned document can routinely come down to under 2 MB. Text-only PDFs with minimal images may only reduce by 20–40%, since there's less image data to optimise.",
  },
  {
    q: "Is my file private and secure when I upload it?",
    a: "All transfers happen over HTTPS with TLS 1.3 encryption. Your file is processed in an isolated server session and automatically deleted from our storage within 60 minutes of processing. We do not read, index, or share your file contents under any circumstances.",
  },
  {
    q: "What's the difference between Low, Medium, and High compression?",
    a: "Low compression (≈75% of original) applies minimal image downscaling — ideal for files you'll print or share with design professionals. Medium (≈50%) is the sweet spot for most use cases — visually indistinguishable for office documents, email, and portals. High (≈25%) aggressively reduces image quality — best when you need to meet a strict size limit and visual perfection is secondary.",
  },
  {
    q: "Can I compress a password-protected PDF?",
    a: "You'll need to unlock the PDF first before compressing. Use our Unlock PDF tool (also free on Scenith) to remove the password, then compress the file. You can optionally re-lock it after.",
  },
  {
    q: "Does it work on scanned PDFs and image-only PDFs?",
    a: "Absolutely. Scanned PDFs are essentially image containers, which means compression has the biggest impact on them — often 80–90% reduction. Our engine optimises the embedded JPEG/PNG images within the scan while maintaining legibility for human reading.",
  },
  {
    q: "Will the hyperlinks, bookmarks, and form fields survive compression?",
    a: "Yes. Scenith preserves all interactive elements: clickable hyperlinks, PDF bookmarks (outlines), form fields, and metadata. Only the visual image assets are resampled — the document structure remains intact.",
  },
  {
    q: "Is there a file size limit? What if my PDF is 200+ MB?",
    a: "Free users can compress PDFs up to 500 MB. For very large files, we recommend compressing in two passes — first at High compression, then at Medium if further reduction is needed. Alternatively, split your PDF into sections using our Split PDF tool before compressing.",
  },
  {
    q: "Why is my compressed PDF sometimes larger than the original?",
    a: "This rarely happens, but it can occur when your original PDF was already heavily compressed, or when it was created by a tool that used more efficient compression algorithms than our re-encoding. In this case, Scenith will flag that no reduction was achieved and return the original file unchanged.",
  },
  {
    q: "Does Scenith work on mobile phones?",
    a: "Yes. Scenith is fully responsive and works on Android and iOS browsers without needing to install any app. Upload from your phone's Files app, Google Drive, or iCloud — compress — and download directly to your device.",
  },
];

const ALTERNATIVES_COMPARISON = [
  {
    feature: "No watermarks",
    scenith: true,
    smallpdf: false,
    ilovepdf: false,
    adobe: true,
  },
  {
    feature: "Free without account",
    scenith: true,
    smallpdf: false,
    ilovepdf: true,
    adobe: false,
  },
  {
    feature: "Target file size mode",
    scenith: true,
    smallpdf: false,
    ilovepdf: false,
    adobe: false,
  },
  {
    feature: "Custom % compression",
    scenith: true,
    smallpdf: false,
    ilovepdf: false,
    adobe: false,
  },
  {
    feature: "Files deleted after 1 hour",
    scenith: true,
    smallpdf: true,
    ilovepdf: true,
    adobe: true,
  },
  {
    feature: "Works on mobile",
    scenith: true,
    smallpdf: true,
    ilovepdf: true,
    adobe: true,
  },
  {
    feature: "Up to 500 MB file",
    scenith: true,
    smallpdf: false,
    ilovepdf: false,
    adobe: false,
  },
  {
    feature: "No daily limit (free tier)",
    scenith: true,
    smallpdf: false,
    ilovepdf: false,
    adobe: false,
  },
];

const TIPS = [
  {
    number: "01",
    title: "Always compress before uploading to any government portal",
    content:
      "Indian government portals (ITR filing, GST registration, EPFO, passport applications) almost always enforce size limits. The safest rule: compress everything to under 500 KB before attempting any upload. This saves you from the notorious 'File size exceeds limit' error at the worst possible moment.",
  },
  {
    number: "02",
    title: "Use 'Target File Size' mode for precise control",
    content:
      "When you know the exact limit (say, a university portal accepts up to 2 MB), use Scenith's Target File Size mode instead of guessing at compression levels. Enter '2 MB' and the engine works backward to hit that target. This eliminates trial-and-error.",
  },
  {
    number: "03",
    title: "Compress before scanning, not just after",
    content:
      "If you're scanning physical documents, set your scanner to 150 DPI instead of 300 DPI for documents that will only be read on screen. This reduces the source file size dramatically before any compression is even applied. For documents that need to be printed after digital delivery, use 300 DPI and then compress with Scenith on Medium.",
  },
  {
    number: "04",
    title: "PDFs exported from Word are often bloated by default",
    content:
      "Microsoft Word's 'Export to PDF' function embeds full-resolution images and doesn't strip unnecessary metadata. A 3-page Word document can produce a 15 MB PDF. Compressing this with Scenith on Medium typically brings it to under 1 MB with zero visible quality loss.",
  },
  {
    number: "05",
    title: "Compress your resume — it helps with ATS systems",
    content:
      "Many Applicant Tracking Systems (ATS) have upload size limits or process large files slowly. A compressed PDF resume under 500 KB loads faster, parses more accurately, and signals attention to detail. Bonus: Gmail previews load near-instantly for recruiters on mobile.",
  },
  {
    number: "06",
    title: "For legally sensitive documents, use Low compression only",
    content:
      "Contracts, legal agreements, property documents, and medical records should be compressed at Low or Medium level at most. High compression can technically affect the readability of signature scans or notary stamps, which might matter in legal contexts. When in doubt, choose Low.",
  },
];

// --- Animated counter hook ---
function useCounter(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function CompressPdfPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.root}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBlobA} />
          <div className={styles.heroBlobB} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Free PDF Compressor · 2026
          </div>

          <h1 className={styles.heroTitle}>
            Compress PDF
            <br />
            <span className={styles.heroAccent}>Without Losing Quality</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Reduce your PDF file size by up to <strong>90%</strong> in seconds.
            No watermarks. No hidden limits. No quality compromise. The smartest
            PDF compression tool built for India's portal-heavy, email-first
            workflow.
          </p>

          <div className={styles.heroCta}>
            <a href={TOOL_URL} className={styles.ctaPrimary}>
              <span className={styles.ctaIcon}>⚡</span>
              Compress My PDF Now — It's Free
              <span className={styles.ctaArrow}>→</span>
            </a>
            <p className={styles.ctaMeta}>
              Files auto-deleted in 60 min
            </p>
          </div>

          <div className={styles.heroTrust}>
            <span>🔒 HTTPS Encrypted</span>
            <span>🚫 Zero Watermarks</span>
            <span>⭐ 4.9 / 5 (3,847 reviews)</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS PDF COMPRESSION ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.twoColText}>
              <span className={styles.eyebrow}>The fundamentals</span>
              <h2 className={styles.sectionTitle}>
                What does "compress PDF without losing quality" actually mean?
              </h2>
              <p>
                When people say they want to compress a PDF without losing
                quality, they're expressing a real fear: that their document
                will come out blurry, pixelated, or unreadable. This fear is
                largely unfounded when you use the right tool — and here's why.
              </p>
              <p>
                A PDF file is a container. Inside it lives text (stored as
                vector data), fonts, metadata, embedded images (JPEG, PNG,
                TIFF), form fields, annotations, and bookmarks. When you
                compress a PDF, a smart compressor only touches the{" "}
                <strong>image layers</strong> — and only resamples them to a
                resolution that the human eye cannot distinguish from the
                original at normal reading distance.
              </p>
              <p>
                Text, vectors, hyperlinks, form fields, and document structure
                are compressed using lossless algorithms (like deflate
                compression), meaning they emerge from the process{" "}
                <strong>bit-for-bit identical</strong> to what they were
                before. You get a smaller file that looks, reads, and behaves
                exactly like the original.
              </p>
              <p>
                The exception: if you push to extreme compression levels
                (e.g., "High" or targeting very small file sizes), image
                quality will visually degrade. Scenith lets you control this
                precisely — so you decide the trade-off, not the algorithm.
              </p>
            </div>
            <div className={styles.twoColVisual}>
              <div className={styles.visualCard}>
                <div className={styles.visualCardTitle}>
                  Inside a PDF — What Gets Compressed?
                </div>
                <div className={styles.fileLayerList}>
                  {[
                    {
                      label: "Text & Vectors",
                      method: "Lossless (Deflate)",
                      quality: "100%",
                      bar: 100,
                      color: "#10b981",
                    },
                    {
                      label: "Fonts",
                      method: "Subset optimisation",
                      quality: "100%",
                      bar: 100,
                      color: "#10b981",
                    },
                    {
                      label: "Embedded Images",
                      method: "Perceptual resampling",
                      quality: "95%+",
                      bar: 95,
                      color: "#3b82f6",
                    },
                    {
                      label: "Scanned Pages",
                      method: "JPEG optimisation",
                      quality: "90%+",
                      bar: 90,
                      color: "#3b82f6",
                    },
                    {
                      label: "Metadata & Bloat",
                      method: "Stripped entirely",
                      quality: "N/A",
                      bar: 0,
                      color: "#f59e0b",
                    },
                  ].map((layer) => (
                    <div key={layer.label} className={styles.fileLayer}>
                      <div className={styles.fileLayerTop}>
                        <span className={styles.fileLayerLabel}>
                          {layer.label}
                        </span>
                        <span className={styles.fileLayerMethod}>
                          {layer.method}
                        </span>
                      </div>
                      <div className={styles.fileLayerBarBg}>
                        <div
                          className={styles.fileLayerBar}
                          style={{
                            width: `${layer.bar}%`,
                            background: layer.color,
                          }}
                        />
                      </div>
                      <div className={styles.fileLayerQuality}>
                        Visual quality retained: {layer.quality}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Simple. Fast. Precise.</span>
            <h2 className={styles.sectionTitle}>
              How Scenith's PDF Compressor Works
            </h2>
            <p className={styles.sectionSubtitle}>
              Three steps. Under 60 seconds. No technical knowledge required.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className={styles.stepArrow} aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.ctaBlock}>
            <a href={TOOL_URL} className={styles.ctaPrimary}>
              <span className={styles.ctaIcon}>📂</span>
              Start Compressing — Upload Your PDF
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPRESSION MODES ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Flexible control</span>
            <h2 className={styles.sectionTitle}>
              Three Compression Modes — You're Always in Control
            </h2>
            <p className={styles.sectionSubtitle}>
              Scenith is the only free PDF compressor that offers all three
              modes: preset levels, custom percentage, and target file size.
            </p>
          </div>

          <div className={styles.modesGrid}>
            <div className={styles.modeCard} style={{ "--mode-color": "#10b981" } as React.CSSProperties}>
              <div className={styles.modeBadge} style={{ background: "#10b981" }}>
                Preset
              </div>
              <div className={styles.modeIcon}>🎚️</div>
              <h3 className={styles.modeTitle}>Preset Levels</h3>
              <p className={styles.modeDesc}>
                Choose from <strong>Low</strong> (75% of original),{" "}
                <strong>Medium</strong> (50% of original), or{" "}
                <strong>High</strong> (25% of original). Perfect when you just
                want to reduce size without overthinking it.
              </p>
              <div className={styles.modeTags}>
                <span>Quick decisions</span>
                <span>Most common use case</span>
              </div>
            </div>

            <div className={styles.modeCard} style={{ "--mode-color": "#3b82f6" } as React.CSSProperties}>
              <div className={styles.modeBadge} style={{ background: "#3b82f6" }}>
                Percentage
              </div>
              <div className={styles.modeIcon}>📊</div>
              <h3 className={styles.modeTitle}>Custom Percentage</h3>
              <p className={styles.modeDesc}>
                Drag a slider from 10% to 95% to set exactly what fraction of
                the original size you want. Want 65% of the original? Done.
                Maximum granularity for power users.
              </p>
              <div className={styles.modeTags}>
                <span>Precise control</span>
                <span>Power users</span>
              </div>
            </div>

            <div className={styles.modeCard} style={{ "--mode-color": "#8b5cf6" } as React.CSSProperties}>
              <div className={styles.modeBadge} style={{ background: "#8b5cf6" }}>
                Target Size
              </div>
              <div className={styles.modeIcon}>🎯</div>
              <h3 className={styles.modeTitle}>Target File Size</h3>
              <p className={styles.modeDesc}>
                Enter an exact target in KB or MB — say, "compress to under 2
                MB" — and Scenith calculates the right compression level
                automatically. Ideal for portal uploads with strict limits.
              </p>
              <div className={styles.modeTags}>
                <span>Portal uploads</span>
                <span>Unique to Scenith</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL-WORLD SIZE COMPARISONS ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Benchmark results</span>
            <h2 className={styles.sectionTitle}>
              Real-World PDF Size Reductions
            </h2>
            <p className={styles.sectionSubtitle}>
              Tested on actual PDF types using Scenith's Medium compression. Results vary by content.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>PDF Type</th>
                  <th>Original Size</th>
                  <th>Compressed Size</th>
                  <th>Reduction</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr
                    key={row.type}
                    className={hoveredRow === i ? styles.tableRowHover : ""}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className={styles.tdType}>{row.type}</td>
                    <td className={styles.tdOriginal}>{row.original}</td>
                    <td className={styles.tdCompressed}>{row.compressed}</td>
                    <td>
                      <span className={styles.reductionBadge}>
                        ↓ {row.reduction}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableNote}>
            * Results from internal benchmarks. Actual compression depends on
            PDF content, image types, and original compression level.
          </p>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Who needs this</span>
            <h2 className={styles.sectionTitle}>
              When Should You Compress a PDF? Every Time, Actually.
            </h2>
            <p className={styles.sectionSubtitle}>
              Here are the six most common situations where PDF compression
              saves you time, frustration, and rejected uploads.
            </p>
          </div>

          <div className={styles.useCaseGrid}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} className={styles.useCaseCard}>
                <div
                  className={styles.useCaseIconWrap}
                  style={{ background: `${uc.color}18` }}
                >
                  <span className={styles.useCaseIcon}>{uc.icon}</span>
                </div>
                <h3
                  className={styles.useCaseTitle}
                  style={{ color: uc.color }}
                >
                  {uc.title}
                </h3>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
                <div
                  className={styles.useCaseTip}
                  style={{
                    background: `${uc.color}12`,
                    borderLeft: `3px solid ${uc.color}`,
                  }}
                >
                  💡 {uc.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ── */}
      <section className={styles.bigCtaSection}>
        <div className={styles.bigCtaBg} aria-hidden="true">
          <div className={styles.bigCtaBlob} />
        </div>
        <div className={styles.container}>
          <div className={styles.bigCtaInner}>
            <div className={styles.bigCtaEmoji}>⚡</div>
            <h2 className={styles.bigCtaTitle}>
              Ready to shrink your PDF?
            </h2>
            <p className={styles.bigCtaSubtitle}>
              No installation. No watermarks. Just
              drop your file and get a smaller PDF in seconds.
            </p>
            <a href={TOOL_URL} className={styles.bigCtaBtn}>
              Compress PDF — Free & Instant
              <span className={styles.bigCtaBtnArrow}>→</span>
            </a>
            <div className={styles.bigCtaTrust}>
              <span>🔒 Secure upload</span>
              <span>🗑️ Auto-deleted in 60 min</span>
              <span>💯 No watermarks ever</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRO TIPS ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Expert knowledge</span>
            <h2 className={styles.sectionTitle}>
              6 PDF Compression Tips Most People Don't Know
            </h2>
            <p className={styles.sectionSubtitle}>
              Practical, experience-based advice to get the best results every
              time you compress a PDF.
            </p>
          </div>

          <div className={styles.tipsGrid}>
            {TIPS.map((tip) => (
              <article key={tip.number} className={styles.tipCard}>
                <div className={styles.tipNumber}>{tip.number}</div>
                <div className={styles.tipContent}>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipBody}>{tip.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Scenith vs alternatives</span>
            <h2 className={styles.sectionTitle}>
              Why Choose Scenith Over Smallpdf, ILovePDF, or Adobe?
            </h2>
            <p className={styles.sectionSubtitle}>
              An honest feature comparison. Make an informed choice.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.altTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>
                    <span className={styles.scenithHeader}>Scenith ✦</span>
                  </th>
                  <th>Smallpdf</th>
                  <th>ILovePDF</th>
                  <th>Adobe</th>
                </tr>
              </thead>
              <tbody>
                {ALTERNATIVES_COMPARISON.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    <td className={styles.scenithCell}>
                      {row.scenith ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>✗</span>
                      )}
                    </td>
                    <td>
                      {row.smallpdf ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>✗</span>
                      )}
                    </td>
                    <td>
                      {row.ilovepdf ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>✗</span>
                      )}
                    </td>
                    <td>
                      {row.adobe ? (
                        <span className={styles.checkYes}>✓</span>
                      ) : (
                        <span className={styles.checkNo}>✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL DEEP-DIVE ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Technical depth</span>
            <h2 className={styles.sectionTitle}>
              The Science Behind PDF Compression
            </h2>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techBlock}>
              <h3 className={styles.techTitle}>
                🖼️ Image Compression: Where the Big Wins Come From
              </h3>
              <p>
                In most PDFs — especially those created from Word documents,
                presentations, or scanned pages — images account for{" "}
                <strong>70–95% of the total file size</strong>. This is where
                smart compression delivers transformative results.
              </p>
              <p>
                Scenith's engine uses a combination of{" "}
                <strong>JPEG re-encoding at perceptual quality levels</strong>{" "}
                (typically 70–85% JPEG quality, which is visually
                indistinguishable from 100% at screen reading sizes) and{" "}
                <strong>DPI downsampling</strong>. A 600 DPI scanned image is
                downsampled to 150 DPI for screen use — still crisp on a 4K
                monitor, but one-sixteenth the file size.
              </p>
            </div>

            <div className={styles.techBlock}>
              <h3 className={styles.techTitle}>
                🔤 Font Subsetting: Silent Space Saver
              </h3>
              <p>
                PDFs often embed <strong>full font files</strong> even when
                only a fraction of characters are used. A PDF using Times New
                Roman might embed the entire 800+ glyph font set when it only
                uses 62 distinct characters from the ASCII range.
              </p>
              <p>
                Scenith strips embedded fonts down to only the glyphs actually
                present in the document — a process called font subsetting.
                This alone can reduce file size by 10–30% for text-heavy
                documents, with absolutely no visual change.
              </p>
            </div>

            <div className={styles.techBlock}>
              <h3 className={styles.techTitle}>
                🗂️ Stream Compression and Metadata Removal
              </h3>
              <p>
                PDF files store their data in{" "}
                <strong>"streams"</strong> — binary blobs that may or may not
                be compressed. Many PDF generators leave these uncompressed or
                apply suboptimal compression. Scenith re-compresses all content
                streams using deflate (zlib) compression.
              </p>
              <p>
                Additionally, bloated PDFs often carry unnecessary metadata:
                Adobe XMP metadata packets, revision histories, thumbnail
                images, comments from editing sessions, and ICC colour profiles
                for printing. Stripping non-essential metadata is safe and
                invisible to the reader.
              </p>
            </div>

            <div className={styles.techBlock}>
              <h3 className={styles.techTitle}>
                🎯 Target File Size: Reverse-Engineering Compression
              </h3>
              <p>
                This is Scenith's most technically sophisticated feature. When
                you specify a target file size (say, 2 MB), the engine{" "}
                <strong>
                  binary-searches the compression parameter space
                </strong>{" "}
                to find the optimal JPEG quality + DPI combination that hits
                your target without going under — which would mean unnecessary
                quality loss.
              </p>
              <p>
                This is computationally expensive (it may run 3–5 compression
                passes internally), which is why most free tools don't offer
                it. Scenith does it at no cost because we believe precise
                control should be the default, not a premium feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER TOOLS CALLOUT ── */}
      <section className={styles.otherToolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Full PDF toolkit</span>
            <h2 className={styles.sectionTitle}>
              Compress is Just One Tool in Your PDF Workflow
            </h2>
            <p className={styles.sectionSubtitle}>
              Scenith offers a complete set of PDF tools — all free, all in one
              place.
            </p>
          </div>

          <div className={styles.otherToolsGrid}>
            {[
              { icon: "🔀", title: "Merge PDFs", desc: "Combine multiple PDFs into one document with page-level control." },
              { icon: "✂️", title: "Split PDF", desc: "Extract pages or split into multiple files by custom ranges." },
              { icon: "🔄", title: "Rotate PDF", desc: "Rotate specific pages or the whole document in any direction." },
              { icon: "🖼️", title: "Images to PDF", desc: "Convert JPG, PNG, and WebP images into a single PDF file." },
              { icon: "📸", title: "PDF to Images", desc: "Export each PDF page as a high-quality image file." },
              { icon: "💧", title: "Add Watermark", desc: "Stamp custom text watermarks across your PDF pages." },
              { icon: "🔒", title: "Lock PDF", desc: "Password-protect your PDF with 256-bit AES encryption." },
              { icon: "🔓", title: "Unlock PDF", desc: "Remove password protection from a PDF you own." },
            ].map((tool) => (
              <a key={tool.title} href={TOOL_URL} className={styles.otherToolCard}>
                <span className={styles.otherToolIcon}>{tool.icon}</span>
                <div>
                  <div className={styles.otherToolTitle}>{tool.title}</div>
                  <div className={styles.otherToolDesc}>{tool.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Got questions?</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions About PDF Compression
            </h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span
                    className={styles.faqChevron}
                    aria-hidden="true"
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL BIG CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>
              Stop fighting file size limits.
              <br />
              <span className={styles.finalCtaAccent}>Compress your PDF now.</span>
            </h2>
            <p className={styles.finalCtaSubtitle}>
              Free forever for standard use.  No watermarks. No
              excuses. 3,847 people compressed a PDF on Scenith today.
            </p>
            <a href={TOOL_URL} className={styles.finalCtaBtn}>
              ⚡ Open Scenith PDF Compressor — Free
            </a>
            <div className={styles.finalCtaMeta}>
              Works on Chrome, Firefox, Safari · Desktop & Mobile · All PDF types
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB (hidden, for SEO) ── */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tools">Tools</Link>
          </li>
          <li aria-current="page">Compress PDF Without Losing Quality</li>
        </ol>
      </nav>
    </main>
  );
}