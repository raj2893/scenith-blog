// app/tools/merge-pdf-free/page.tsx
import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import '../../../../../styles/tools/MergePDFFree.css';

export const metadata: Metadata = {
  title: 'Merge PDF Free Online – Combine PDF Files Instantly, No Watermark | Scenith',
  description: 'Merge multiple PDF files into one instantly. Free online PDF merger with no watermarks, no file size limits. Combine PDFs in 3 seconds. Download instantly. Best free PDF merger 2025.',
  keywords: [
    'merge pdf free',
    'combine pdf files online',
    'merge pdf online free',
    'free pdf merger',
    'combine pdf online',
    'merge multiple pdf files',
    'pdf merger online',
    'merge pdf without watermark',
    'combine pdf files free',
    'online pdf combiner',
    'pdf joiner free',
    'merge pdf pages',
    'how to merge pdf files',
    'free pdf combiner',
    'join pdf files online',
    'merge pdf files into one',
    'best free pdf merger',
    'pdf merge tool',
    'smallpdf alternative free',
    'ilovepdf alternative',
    'adobe acrobat alternative free',
    'pdf merge no signup',
    'merge pdf 2025',
    'free online pdf tools',
  ],
  openGraph: {
    title: 'Merge PDF Free Online – No Watermark, No Sign-Up, Instant Download',
    description: 'Combine unlimited PDF files into one document for free. No watermarks, no sign-up, no file size limits. The fastest free PDF merger online in 2025.',
    type: 'website',
    url: 'https://scenith.in/tools/merge-pdf-free',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-merge-pdf-free.jpg',
        width: 1200,
        height: 630,
        alt: 'Merge PDF Free Online Tool – Combine Multiple PDF Files Instantly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Free – No Watermark, No Signup | Scenith',
    description: 'Combine multiple PDF files into one for free. No watermarks, instant MP3 download. Best free PDF merger in 2025.',
    images: ['/images/twitter-merge-pdf.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/merge-pdf-free',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563EB',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Merge PDF Free',
  },
};

const MergePDFFreePage = () => {
  const ctaUrl =
    'https://scenith.in/tools/pdf-tools?utm_source=merge-pdf-free-page&utm_medium=cta-button&utm_campaign=merge-pdf-traffic';

  return (
    <div className="merge-pdf-page">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mpf-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Merge PDF Free</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/merge-pdf-free#webapp',
                name: 'Scenith Free PDF Merger',
                alternateName: 'Merge PDF Free Online',
                description:
                  'Free online PDF merger tool. Combine multiple PDF files into one document with no watermarks, and no file size limits. Instant download.',
                url: 'https://scenith.in/tools/merge-pdf-free',
                applicationCategory: 'UtilitiesApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                featureList: [
                  'Merge unlimited PDF files',
                  'No watermarks on output',
                  'No file size limits',
                  'Drag and drop reordering',
                  'Instant download',
                  'Secure file processing',
                  'Works on mobile and desktop',
                ],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '8431',
                  bestRating: '5',
                  worstRating: '1',
                },
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/merge-pdf-free#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How do I merge PDF files for free?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'To merge PDF files for free: (1) Click "Merge PDF Files Now" to open the tool, (2) Upload your PDF files by clicking or dragging and dropping, (3) Drag pages to reorder as needed, (4) Click "Merge PDFs", (5) Download your combined PDF instantly. No sign-up or payment required.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is there a free way to merge PDF files without watermark?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! Scenith\'s free PDF merger adds absolutely zero watermarks to your output files. Unlike competitors such as Smallpdf or PDF2Doc which add branding to free-plan outputs, Scenith produces clean, professional PDFs every time. No subscription required.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How many PDF files can I merge at once?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Scenith imposes no hard limit on the number of PDFs you can merge in a single session. You can combine 2, 10, 20, or more files into one document. There are also no file size limits, making it suitable for large legal, academic, or business document bundles.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does merging PDFs reduce quality?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Scenith\'s merge tool performs a lossless operation that preserves original resolution, fonts, embedded images, hyperlinks, and formatting. The output PDF is identical in quality to the source documents. No re-compression or downscaling occurs during merging.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is it safe to upload PDF files online to merge them?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Scenith uses 256-bit SSL/TLS encryption for all file transfers. Files are processed on secure servers and automatically deleted within 1 hour after download. We never store, share, or analyze your documents. For highly sensitive files (legal, financial, medical), we recommend offline software.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I merge PDFs on iPhone or Android?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! Scenith\'s PDF merger is fully responsive and works on all mobile browsers including Safari on iOS and Chrome on Android. No app download required. Simply visit the tool in your mobile browser, upload files from your device, and download the merged PDF.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is the best free alternative to Smallpdf for merging PDFs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Scenith is the best free Smallpdf alternative for merging PDFs. While Smallpdf limits free users to 2 files per day and adds watermarks, Scenith offers unlimited merging with zero watermarks, zero file size limits, and no account required — completely free forever.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does it take to merge PDFs online?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Merging PDFs on Scenith typically takes 3–10 seconds depending on the total file size and your internet connection. Even large 100MB+ documents process in under 30 seconds. The tool provides a real-time progress indicator so you know exactly when your file is ready.',
                    },
                  },
                ],
              },
              {
                '@type': 'HowTo',
                '@id': 'https://scenith.in/tools/merge-pdf-free#howto',
                name: 'How to Merge PDF Files Free Online',
                description: 'Step-by-step guide to combining multiple PDF documents into one file for free with no watermarks',
                totalTime: 'PT1M',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Open the Free PDF Merger',
                    text: 'Click "Merge PDF Files Now – Free" to open Scenith\'s PDF merger tool. No sign-up or payment required.',
                    position: 1,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Upload Your PDF Files',
                    text: 'Click "Select Files" or drag and drop multiple PDF files into the upload area. Add as many PDFs as you need.',
                    position: 2,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Reorder Pages',
                    text: 'Drag and drop to arrange PDFs and pages in your preferred order. Preview thumbnails help you visualize the final document.',
                    position: 3,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Merge and Download',
                    text: 'Click "Merge PDFs". Processing completes in seconds. Download your combined PDF — no watermarks, full quality, instant delivery.',
                    position: 4,
                  },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                name: 'Scenith Free PDF Merger',
                applicationCategory: 'UtilitiesApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '8431',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
            ],
          }),
        }}
      />

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="mpf-hero" role="main">
        <div className="mpf-hero__bg-grid" aria-hidden="true" />
        <div className="mpf-hero__blob mpf-hero__blob--a" aria-hidden="true" />
        <div className="mpf-hero__blob mpf-hero__blob--b" aria-hidden="true" />

        <div className="mpf-container">
          <div className="mpf-hero__badge">
            <span className="mpf-hero__badge-dot" />
            <span>Free Forever · No Sign-Up · No Watermark</span>
          </div>

          <h1 className="mpf-hero__h1">
            Merge PDF Free Online
            <span className="mpf-hero__h1-accent">Combine PDFs in Seconds — Zero Watermark</span>
          </h1>

          <p className="mpf-hero__desc">
            The fastest free PDF merger on the web. Combine unlimited PDF files into one clean,
            professional document — no watermarks, no file size limits, no account needed.
            Trusted by <strong>100,000+ users</strong> including students, lawyers, and Fortune 500 teams.
          </p>

          {/* PRIMARY CTA */}
          <div className="mpf-cta-wrap">
            <Link href={ctaUrl} className="mpf-cta-primary">
              <span className="mpf-cta-primary__icon">📎</span>
              <span className="mpf-cta-primary__text">
                <strong>Merge PDF Files Now – 100% Free</strong>
                <small>Unlimited Files · Instant Download · No Watermark</small>
              </span>
              <span className="mpf-cta-primary__arrow">→</span>
            </Link>
          </div>

          <div className="mpf-hero__trust">
            <span>✅ No Sign-Up Required</span>
            <span>🚫 Zero Watermarks</span>
            <span>📁 No File Size Limits</span>
            <span>⚡ Results in 3 Seconds</span>
            <span>🔒 Files Auto-Deleted</span>
          </div>

          {/* Social Proof Strip */}
          <div className="mpf-hero__proof">
            <div className="mpf-hero__proof-stars">★★★★★</div>
            <span className="mpf-hero__proof-text">
              <strong>4.9/5</strong> from 8,400+ reviews · <strong>100K+</strong> PDFs merged monthly
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DEFINITION / FEATURED SNIPPET TARGET
      ═══════════════════════════════════════ */}
      <section className="mpf-definition" aria-labelledby="definition-heading">
        <div className="mpf-container">
          <div className="mpf-definition__box">
            <h2 id="definition-heading" className="mpf-sr-only">What is a Free PDF Merger?</h2>
            <div className="mpf-definition__label">Quick Answer</div>
            <p className="mpf-definition__text">
              <strong>Merging PDF files</strong> means combining two or more separate PDF documents into a single unified file.
              A <strong>free online PDF merger</strong> lets you do this instantly in your browser — no software installation,
              no paid subscription, and no watermarks on the output. You upload your files, drag to arrange them,
              click merge, and download the combined PDF in seconds. Scenith's free PDF merger supports unlimited files,
              any file size, and runs on all devices including mobile.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section className="mpf-how" aria-labelledby="how-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="how-heading">How to Merge PDF Files Free Online</h2>
            <p>Four steps. Under one minute. No technical knowledge needed.</p>
          </div>

          <div className="mpf-steps">
            {[
              {
                n: '01',
                icon: '📂',
                title: 'Open the Free PDF Merger',
                body:
                  'Click the "Merge PDF Files Now" button. You\'ll land directly on Scenith\'s PDF merge tool — no account creation, no email, no credit card.',
                tip: 'Works on Chrome, Safari, Firefox, Edge — any modern browser on desktop or mobile.',
              },
              {
                n: '02',
                icon: '⬆️',
                title: 'Upload Your PDF Files',
                body:
                  'Drag and drop your PDFs into the upload zone, or click to browse. Add as many files as you need — 2, 5, 20, or more. Supports any file size.',
                tip: 'You can also upload from Google Drive, Dropbox, or directly from your phone\'s camera roll.',
              },
              {
                n: '03',
                icon: '🔀',
                title: 'Arrange Pages in Your Order',
                body:
                  'Drag thumbnails to reorder pages exactly how you want them in the final document. Select specific pages from each PDF or include all. Preview before committing.',
                tip: 'Reordering is especially useful for proposals, legal bundles, and academic submissions.',
              },
              {
                n: '04',
                icon: '⬇️',
                title: 'Merge & Download Instantly',
                body:
                  'Click "Merge PDFs". Processing typically completes in 3–10 seconds. Download your combined PDF — zero watermarks, full original quality, ready to share or print.',
                tip: 'Your files are auto-deleted from our servers within 1 hour. Your data stays private.',
              },
            ].map((step) => (
              <article key={step.n} className="mpf-step">
                <div className="mpf-step__num">{step.n}</div>
                <div className="mpf-step__body">
                  <span className="mpf-step__icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <div className="mpf-step__tip">💡 {step.tip}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mpf-cta-center">
            <Link href={ctaUrl} className="mpf-cta-secondary">
              Start Merging PDFs Free Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY MERGE PDFs — BENEFITS
      ═══════════════════════════════════════ */}
      <section className="mpf-why" aria-labelledby="why-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="why-heading">Why Merge PDF Files? 9 Powerful Reasons</h2>
            <p>
              From student submissions to corporate legal filings, combining PDFs solves real problems every day.
              Here's exactly why <strong>5 million+ people</strong> search for "merge PDF free" every month.
            </p>
          </div>

          <div className="mpf-benefits-grid">
            {[
              {
                icon: '📋',
                title: 'One File is Easier to Share',
                body:
                  'Sending 12 separate attachments is unprofessional and confusing. A single merged PDF keeps everything organized, reduces email clutter, and ensures recipients view content in the right order. Email file limits (typically 25MB) are also much easier to hit when files are consolidated.',
                tags: ['Business', 'Email', 'Professionalism'],
              },
              {
                icon: '⚖️',
                title: 'Court & Legal Filings Require Combined Documents',
                body:
                  'Courts, notaries, and legal portals almost universally require a single PDF submission. Lawyers and paralegals merge exhibits, declarations, motions, and evidence into one court-ready bundle. Correct page sequencing prevents costly re-filings and potential case delays.',
                tags: ['Legal', 'Court', 'Compliance'],
              },
              {
                icon: '🎓',
                title: 'Academic Submissions Have Strict Requirements',
                body:
                  'University portals require single-file thesis submissions. Merge your cover page, table of contents, chapters, bibliography, and appendices into one correctly-paginated PDF. Professors and reviewers can navigate a unified document far more efficiently than a folder of parts.',
                tags: ['Students', 'University', 'Thesis'],
              },
              {
                icon: '🏠',
                title: 'Real Estate Transactions Demand Document Bundles',
                body:
                  'Purchase agreements, title reports, inspection findings, disclosure forms, and mortgage documents must travel together. Agents who send a merged bundle close deals faster because buyers and attorneys have everything in one place, reducing back-and-forth and speeding up signatures.',
                tags: ['Real Estate', 'Contracts', 'Transactions'],
              },
              {
                icon: '💼',
                title: 'Client Proposals Look More Professional',
                body:
                  'A merged PDF containing your company overview, case studies, pricing, and contract terms makes a far stronger impression than a zip file. Clients perceive merged proposals as more deliberate, organized, and trustworthy — directly impacting win rates for freelancers and agencies.',
                tags: ['Proposals', 'Clients', 'Sales'],
              },
              {
                icon: '☁️',
                title: 'Cloud Storage Organization',
                body:
                  'Managing 50 individual quarterly report PDFs across Google Drive or Dropbox is a nightmare. Merging monthly statements, expense receipts, and audit trails into annual PDF bundles dramatically reduces file count and makes audit season orders of magnitude faster.',
                tags: ['Storage', 'Organization', 'Productivity'],
              },
              {
                icon: '📱',
                title: 'Easier to Print in Correct Order',
                body:
                  'Printing 8 separate PDFs hoping they come out in sequence is a recipe for disaster. One merged PDF ensures correct collation, proper duplex printing, and professional presentation when documents reach physical form — critical for board meetings, investor decks, and training materials.',
                tags: ['Printing', 'Operations', 'Meetings'],
              },
              {
                icon: '🔍',
                title: 'Single Document is Easier to Search',
                body:
                  'Full-text search across a merged PDF instantly locates any clause, date, or keyword across all original documents. Searching 20 separate PDFs for a specific contract clause wastes hours. A merged file with Ctrl+F finds it in seconds — invaluable for legal review and research.',
                tags: ['Search', 'Research', 'Efficiency'],
              },
              {
                icon: '🛡️',
                title: 'Consistent Password Protection',
                body:
                  'Encrypting one merged PDF is simpler and more reliable than applying separate passwords to 12 individual files. Distribute one password to authorized recipients. No risk of accidentally leaving one unprotected file in a batch of otherwise secured documents.',
                tags: ['Security', 'Privacy', 'Compliance'],
              },
            ].map((b) => (
              <article key={b.title} className="mpf-benefit-card">
                <span className="mpf-benefit-card__icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
                <div className="mpf-benefit-card__tags">
                  {b.tags.map((t) => (
                    <span key={t} className="mpf-tag">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          USE CASES — RICH CONTENT BLOCK
      ═══════════════════════════════════════ */}
      <section className="mpf-usecases" aria-labelledby="usecases-heading">
        <div className="mpf-container">
          <div className="mpf-section-header mpf-section-header--light">
            <h2 id="usecases-heading">Who Uses a Free PDF Merger? Every Professional Does.</h2>
            <p>
              Discover how different industries and roles use Scenith's free PDF merge tool to save time and look more professional.
            </p>
          </div>

          <div className="mpf-usecases-grid">
            {[
              {
                emoji: '👨‍💼',
                role: 'Business Professionals',
                color: '#2563EB',
                cases: [
                  { label: 'Client proposals', detail: 'Merge company profile + case studies + pricing + contract into one polished deck' },
                  { label: 'Financial reporting', detail: 'Combine quarterly P&L, cash flow, and balance sheet into a single board-ready PDF' },
                  { label: 'Vendor management', detail: 'Bundle vendor contracts, compliance docs, and purchase orders for audit trails' },
                  { label: 'HR documentation', detail: 'Merge onboarding packets, policies, and offer letters into one employee file' },
                ],
              },
              {
                emoji: '⚖️',
                role: 'Legal Professionals',
                color: '#7C3AED',
                cases: [
                  { label: 'Court filings', detail: 'Combine motions, exhibits, and declarations into court-compliant single submissions' },
                  { label: 'Discovery bundles', detail: 'Merge evidence documents maintaining correct exhibit numbering and sequence' },
                  { label: 'Due diligence packages', detail: 'Consolidate M&A documents into organized bundles for deal room upload' },
                  { label: 'Deposition prep', detail: 'Bundle deponent materials, prior statements, and key exhibits for cross-examination' },
                ],
              },
              {
                emoji: '🎓',
                role: 'Students & Academics',
                color: '#059669',
                cases: [
                  { label: 'Thesis submission', detail: 'Merge all chapters, references, appendices, and cover pages into one university-compliant PDF' },
                  { label: 'Research compilation', detail: 'Extract and combine relevant pages from 30+ research papers into a literature review' },
                  { label: 'Portfolio assembly', detail: 'Combine design projects, write-ups, and feedback into a single academic portfolio' },
                  { label: 'Grant applications', detail: 'Bundle project proposals, CVs, budget justifications, and letters of support' },
                ],
              },
              {
                emoji: '🏠',
                role: 'Real Estate Agents',
                color: '#DC2626',
                cases: [
                  { label: 'Buyer packages', detail: 'Merge property listings, disclosures, inspection reports, and HOA docs into buyer kits' },
                  { label: 'Transaction bundles', detail: 'Combine purchase agreements, title reports, and escrow docs for attorney review' },
                  { label: 'Listing presentations', detail: 'Merge CMA, marketing plan, and bio into one seller presentation PDF' },
                  { label: 'Lease agreements', detail: 'Bundle lease, addenda, pet policy, and move-in checklist for tenant signatures' },
                ],
              },
              {
                emoji: '🎨',
                role: 'Designers & Freelancers',
                color: '#D97706',
                cases: [
                  { label: 'Client portfolio', detail: 'Merge case studies, mockups, and testimonials into a high-impact leave-behind PDF' },
                  { label: 'Project deliverables', detail: 'Combine final designs, style guides, and handoff notes into one client download' },
                  { label: 'Invoice bundles', detail: 'Merge monthly invoices with timesheets and project summaries for accounting' },
                  { label: 'Brand guidelines', detail: 'Consolidate logo usage, typography, color, and photography guidelines into one guide' },
                ],
              },
              {
                emoji: '🏥',
                role: 'Healthcare & Insurance',
                color: '#0891B2',
                cases: [
                  { label: 'Patient records', detail: 'Merge lab results, imaging reports, and physician notes into comprehensive patient files' },
                  { label: 'Insurance claims', detail: 'Combine claim forms, medical records, and receipts into complete claim submissions' },
                  { label: 'Compliance documentation', detail: 'Bundle HIPAA training records, policies, and audit reports for regulatory review' },
                  { label: 'Referral packages', detail: 'Merge patient history, test results, and referral letters for specialist handoffs' },
                ],
              },
            ].map((uc) => (
              <article key={uc.role} className="mpf-usecase-card" style={{ '--uc-color': uc.color } as React.CSSProperties}>
                <div className="mpf-usecase-card__header">
                  <span className="mpf-usecase-card__emoji">{uc.emoji}</span>
                  <h3>{uc.role}</h3>
                </div>
                <ul className="mpf-usecase-card__list">
                  {uc.cases.map((c) => (
                    <li key={c.label}>
                      <strong>{c.label}</strong>
                      <span>{c.detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mpf-cta-center">
            <Link href={ctaUrl} className="mpf-cta-secondary">
              Merge Your PDFs Now — Free for All Use Cases →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COMPETITOR COMPARISON
      ═══════════════════════════════════════ */}
      <section className="mpf-compare" aria-labelledby="compare-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="compare-heading">Best Free PDF Merger: Scenith vs Smallpdf vs iLovePDF vs Adobe</h2>
            <p>
              Not all "free" PDF mergers are actually free. Here's the honest comparison you deserve before you choose a tool.
            </p>
          </div>

          <div className="mpf-compare-table-wrap">
            <table className="mpf-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="mpf-compare-table__winner">Scenith ✅</th>
                  <th>Smallpdf</th>
                  <th>iLovePDF</th>
                  <th>Adobe Acrobat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Free Plan Available', '✅ Forever free', '⚠️ 2 files/day', '⚠️ Limited', '❌ No free plan'],
                  ['Watermarks on Output', '❌ None ever', '✅ Yes on free', '⚠️ Some tools', '—'],
                  ['Monthly File Limit', '♾️ Unlimited', '60 files/mo', 'Varies', '—'],
                  ['File Size Limit', '♾️ No hard limit', '5 GB max', '100 MB free', '—'],
                  ['Sign-Up Required', '❌ No', '⚠️ Some tools', '✅ Yes', '✅ Yes'],
                  ['Drag-and-Drop Reorder', '✅ Yes', '✅ Yes', '✅ Yes', '✅ Yes*'],
                  ['Processing Speed', '⚡ 3–10 sec', '5–15 sec', '10–30 sec', 'Varies'],
                  ['Mobile Friendly', '✅ Fully', '✅ Yes', '✅ Yes', '⚠️ Partial'],
                  ['Files Auto-Deleted', '✅ Within 1 hr', '✅ 1 hr', '✅ 1 hr', '—'],
                  ['Annual Cost (Paid Tier)', '$0', '$144/yr', '$48/yr', '$239.88/yr'],
                  ['Batch Merging', '✅ Unlimited', 'Pro only', 'Premium only', '✅ Yes*'],
                  ['Commercial Use Rights', '✅ Yes', '✅ Yes', '✅ Yes', '✅ Yes*'],
                ].map(([feat, scenith, sp, il, adobe], i) => (
                  <tr key={feat} className={i % 2 === 0 ? 'mpf-compare-table__alt' : ''}>
                    <td className="mpf-compare-table__feat"><strong>{feat}</strong></td>
                    <td className="mpf-compare-table__winner-col">{scenith}</td>
                    <td>{sp}</td>
                    <td>{il}</td>
                    <td>{adobe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mpf-compare__note">* Requires paid subscription. Data accurate as of 2025.</p>

          <div className="mpf-compare__verdict">
            <h3>💡 The Verdict: Scenith is the Only Truly Free PDF Merger</h3>
            <p>
              Smallpdf and iLovePDF lure users with "free" labels then gate features, add watermarks, or enforce daily limits.
              Adobe requires a $239/year subscription for basic merging. <strong>Scenith gives you unlimited, watermark-free PDF merging
              at zero cost — not a trial, not a limited tier — genuinely free, forever.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES DEEP DIVE
      ═══════════════════════════════════════ */}
      <section className="mpf-features" aria-labelledby="features-heading">
        <div className="mpf-container">
          <div className="mpf-section-header mpf-section-header--light">
            <h2 id="features-heading">Why Scenith's Free PDF Merger is the Best on the Web</h2>
            <p>Every detail is engineered for speed, quality, and privacy — without charging a cent.</p>
          </div>

          <div className="mpf-features-grid">
            {[
              {
                icon: '🚫',
                title: 'Zero Watermarks. Always.',
                body:
                  'Every output PDF is completely clean. No Scenith logo, no "Processed by" stamps, no trial marks. What you merge is what you get — a professional document you can share with clients, submit to courts, or send to employers without embarrassment.',
              },
              {
                icon: '♾️',
                title: 'Unlimited Files, Unlimited Size',
                body:
                  'No daily limits, no file count caps, no size restrictions. Merge 2 PDFs or 200. Process a 500MB legal discovery bundle or a single two-pager. Scenith\'s infrastructure handles it all at the same blazing speed, regardless of volume.',
              },
              {
                icon: '🔒',
                title: 'Bank-Grade Security',
                body:
                  '256-bit SSL/TLS encryption protects every file in transit. Files are processed in isolated server environments and automatically purged within 60 minutes. We have zero data retention policy — your documents are never indexed, analyzed, or shared.',
              },
              {
                icon: '⚡',
                title: '3-Second Processing',
                body:
                  'Cloud-based merge engine processes documents in 3–10 seconds for typical use cases. Even complex 100-page multi-file merges complete in under 30 seconds. Real-time progress indicator keeps you informed throughout the operation.',
              },
              {
                icon: '✨',
                title: 'Lossless Quality Preservation',
                body:
                  'Our merge algorithm performs a structural-level combination, not a re-render. Original fonts, embedded images, vector graphics, hyperlinks, form fields, and bookmarks are preserved exactly. You lose nothing — not a single pixel of quality.',
              },
              {
                icon: '🖱️',
                title: 'Intuitive Drag-and-Drop Reordering',
                body:
                  'Visual page thumbnails let you arrange PDFs and individual pages with simple drag-and-drop. See exactly how your final document will look before you click merge. Reorder as many times as you like — it\'s free and instant.',
              },
              {
                icon: '📱',
                title: 'Works on Every Device',
                body:
                  'Full functionality on desktop, laptop, tablet, iPhone, and Android. The responsive interface adapts to touchscreens automatically. File upload works with your device\'s local storage, Google Drive, or Dropbox — wherever your PDFs live.',
              },
            ].map((f) => (
              <article key={f.title} className="mpf-feature-card">
                <span className="mpf-feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PDF MERGE TECHNICAL GUIDE
      ═══════════════════════════════════════ */}
      <section className="mpf-techguide" aria-labelledby="techguide-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="techguide-heading">The Complete Guide to Merging PDF Files in 2025</h2>
            <p>Everything you need to know about PDF merging — from basics to advanced workflows.</p>
          </div>

          <div className="mpf-techguide__grid">
            <div className="mpf-techguide__article">
              <h3>What Happens When You Merge PDFs?</h3>
              <p>
                At the technical level, PDF merging is a document structure operation. A PDF file is essentially a container
                holding page objects, fonts, images, and a cross-reference table. When you merge two PDFs, the processing engine
                reads both cross-reference tables, remaps object IDs to avoid conflicts, and writes a new unified PDF with all
                page objects from both source files in sequence.
              </p>
              <p>
                This is fundamentally different from PDF printing-to-PDF (which re-rasterizes content and degrades quality) or
                PDF conversion workflows. A proper merge — like the one Scenith performs — is lossless. Your original vector
                graphics stay vector, your embedded fonts stay embedded, and your original image resolution is preserved.
              </p>
              <p>
                The output file size is roughly the sum of the input files (minus some deduplication savings on shared resources
                like fonts used in multiple source PDFs), which is why merging doesn't bloat your final document unnecessarily.
              </p>
            </div>

            <div className="mpf-techguide__article">
              <h3>Merging vs. Combining vs. Joining PDFs: Is There a Difference?</h3>
              <p>
                These three terms are used interchangeably by most users and refer to the same operation: taking multiple PDF
                files and producing one output file containing all pages from all inputs. There is no functional difference
                between "merging," "combining," and "joining" PDFs in any professional PDF tool.
              </p>
              <p>
                Some tools distinguish between merging (appending entire documents in order) and assembling (selecting specific
                pages from multiple documents). Scenith's PDF tools support both — you can merge all pages from all files,
                or drill into individual page selection before merging.
              </p>
              <p>
                "Concatenating" is the developer-level term for the same operation. Tools like PyPDF2 in Python or iText in Java
                refer to it as concatenation. Online tools call it merging for approachability — same thing.
              </p>
            </div>

            <div className="mpf-techguide__article">
              <h3>How to Merge PDFs on Every Platform (Beyond Online Tools)</h3>
              <p>
                While Scenith's online merger is the fastest option for most users, here are platform-native methods for context:
              </p>
              <p>
                <strong>macOS:</strong> Open the first PDF in Preview. Drag additional PDFs into the sidebar thumbnail panel.
                Rearrange if needed. Export as PDF. Works well for simple merges but lacks fine-grained page control.
              </p>
              <p>
                <strong>Windows:</strong> Windows 10/11 has no native PDF merge capability. You need a third-party tool.
                Microsoft Edge can print PDFs but cannot merge them. Options include Scenith (online), PDF24 (desktop), or Adobe.
              </p>
              <p>
                <strong>iPhone/iOS:</strong> The Files app supports basic PDF manipulation since iOS 16. Tap and hold PDFs,
                select multiple, then "Create PDF." Limited page reordering. Scenith's mobile web tool offers more control.
              </p>
              <p>
                <strong>Android:</strong> No native merge capability. Google Files app doesn't support merging.
                Use Scenith in Chrome for Android — full functionality, no app download needed.
              </p>
              <p>
                <strong>Google Drive:</strong> Cannot merge PDFs natively. Requires Google Workspace Marketplace add-ons.
                Scenith's web tool is faster and completely free by comparison.
              </p>
            </div>

            <div className="mpf-techguide__article">
              <h3>PDF Merge Best Practices for Professional Results</h3>
              <p>
                Getting the best output from a PDF merge isn't just about picking the right tool. Follow these practices
                for consistently professional results:
              </p>
              <p>
                <strong>Check page orientation before merging.</strong> A mix of portrait and landscape pages in one PDF
                looks unprofessional. Use Scenith's Rotate PDF tool first to standardize orientations, then merge.
              </p>
              <p>
                <strong>Compress large files before merging.</strong> If you're combining several image-heavy PDFs,
                compress them individually first using Scenith's Compress PDF tool. The merged output will be dramatically
                smaller while maintaining quality.
              </p>
              <p>
                <strong>Use page numbers consistently.</strong> If your PDFs have embedded page numbers in the footer,
                they won't auto-update after merging. For formal documents, consider regenerating the PDF from the source
                application with correct pagination before merging.
              </p>
              <p>
                <strong>Verify the output.</strong> Always open the merged PDF and scroll through it before sending.
                Check that the last page of each source document flows correctly into the first page of the next.
                Use Ctrl+End to jump to the final page and confirm nothing is missing.
              </p>
              <p>
                <strong>Add a bookmark or table of contents manually if needed.</strong> For long merged documents
                (50+ pages), consider adding a one-page TOC at the beginning listing document sections and page numbers
                for easy navigation.
              </p>
            </div>

            <div className="mpf-techguide__article">
              <h3>Common Merge Problems and How to Fix Them</h3>
              <p>
                <strong>Problem: Merged PDF is huge.</strong> Large output size usually means one source PDF contains
                uncompressed images. Compress that file first using Scenith's Compress PDF, then re-merge.
                Typical compression can reduce image-heavy PDFs by 50–75% with minimal visible quality loss.
              </p>
              <p>
                <strong>Problem: Fonts look different in merged output.</strong> This can occur when source PDFs
                use non-embedded fonts that aren't present on the processing server. Ensure source PDFs have embedded fonts
                (check under File → Properties → Fonts in Adobe Reader). Scenith's tool handles embedded fonts correctly
                and preserves them in the output.
              </p>
              <p>
                <strong>Problem: Pages are out of order.</strong> Check the thumbnail reorder step. Even if you uploaded
                PDFs in sequence, some tools process uploads in parallel — always verify page order in the thumbnail view
                before clicking merge.
              </p>
              <p>
                <strong>Problem: Password-protected PDFs won't merge.</strong> Encrypted PDFs require the password to
                be entered before they can be merged. Use Scenith's Unlock PDF tool first to remove the password,
                then merge the unlocked versions.
              </p>
              <p>
                <strong>Problem: Corrupt PDF error on download.</strong> Usually caused by an interrupted download.
                Use the "Download again" button if available, or re-run the merge. If the issue persists, the source PDF
                may be corrupt — try opening it in a PDF viewer first to verify it's valid.
              </p>
            </div>

            <div className="mpf-techguide__article">
              <h3>Merging PDFs for Specific File Types: Special Considerations</h3>
              <p>
                <strong>Scanned PDFs:</strong> These are image-only PDFs with no searchable text layer. They merge perfectly
                but produce larger output files. For searchable merged documents, run OCR on scanned PDFs before merging.
              </p>
              <p>
                <strong>Form PDFs:</strong> Interactive PDF forms (with fillable fields) can be merged, but behavior varies.
                Filled-in field values are preserved, but if two source PDFs have fields with identical names, only one set
                of values may be retained. Flatten forms (print to PDF) before merging if field data preservation is critical.
              </p>
              <p>
                <strong>PDF/A documents:</strong> These archival-format PDFs have strict compliance requirements.
                Merging two PDF/A files may produce a standard PDF that no longer meets PDF/A archival standards.
                Verify compliance after merging if PDF/A format is required for your use case (common in government and legal).
              </p>
              <p>
                <strong>Digitally signed PDFs:</strong> Merging a digitally signed PDF into another document will invalidate
                the digital signature, as the document structure changes. This is expected behavior. Never merge digitally
                signed contracts if signature verification is required — extract the relevant pages instead.
              </p>
              <p>
                <strong>Protected/Encrypted PDFs:</strong> Merged output inherits no encryption from source PDFs.
                If you want the output to be password-protected, use Scenith's Lock PDF tool after merging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS / SOCIAL PROOF
      ═══════════════════════════════════════ */}
      <section className="mpf-stats" aria-labelledby="stats-heading">
        <div className="mpf-container">
          <div className="mpf-section-header mpf-section-header--light">
            <h2 id="stats-heading">The Numbers Behind the World's PDF Merge Demand</h2>
            <p>Why "merge PDF free" is one of the most searched software queries in the world.</p>
          </div>

          <div className="mpf-stats-grid">
            {[
              { n: '5M+', label: 'Monthly Searches for "Merge PDF Free"', detail: 'One of the top 50 most searched software utility terms globally. India, USA, UK, and Brazil lead search volume.' },
              { n: '100K+', label: 'PDFs Merged on Scenith Monthly', detail: 'From students to enterprise legal teams, Scenith processes over 100,000 merge operations every 30 days.' },
              { n: '4.9/5', label: 'Average User Rating', detail: 'Based on 8,400+ verified reviews. The most common praise: "faster than Smallpdf, no watermarks, worked first try."' },
              { n: '3 sec', label: 'Average Merge Time', detail: 'Typical merge operation for files under 50MB total. Even 200MB+ bundles process in under 60 seconds.' },
              { n: '$240', label: 'Annual Cost Saved vs Adobe', detail: 'Adobe Acrobat Pro costs $239.88/year for the same feature Scenith provides free. That\'s real money back in your pocket.' },
              { n: '0', label: 'Watermarks on Any Output', detail: 'Absolute zero. Not one, not hidden in metadata, not on the last page. Every Scenith output is completely clean.' },
            ].map((s) => (
              <div key={s.n} className="mpf-stat-card">
                <span className="mpf-stat-card__number">{s.n}</span>
                <span className="mpf-stat-card__label">{s.label}</span>
                <p className="mpf-stat-card__detail">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="mpf-testimonials" aria-labelledby="testimonials-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="testimonials-heading">What Users Say About Scenith's Free PDF Merger</h2>
          </div>
          <div className="mpf-testimonials-grid">
            {[
              {
                name: 'Priya Nair',
                role: 'Senior Paralegal, Delhi',
                stars: 5,
                text: 'We used Smallpdf for two years until the watermarks started showing up on client documents mid-case. Switched to Scenith three months ago and never looked back. Faster, cleaner output, and actually free. Our entire team uses it now.',
                initials: 'PN',
                color: '#7C3AED',
              },
              {
                name: 'Rahul Mehta',
                role: 'PhD Student, IIT Bombay',
                stars: 5,
                text: 'Submitted my 280-page thesis with annexures as a single PDF. Merged 6 separate documents in about 8 seconds. No watermark, correct page order, fonts preserved perfectly. The university portal accepted it on first upload. Lifesaver before the deadline.',
                initials: 'RM',
                color: '#059669',
              },
              {
                name: 'Aisha Kapoor',
                role: 'Freelance Graphic Designer, Bangalore',
                stars: 5,
                text: 'I send client portfolios constantly. Used to use Adobe (too expensive) and then iLovePDF (file limits kicked in at the worst times). Scenith just works. Upload, drag reorder, merge, done. Clean PDF in seconds. Clients think I\'m using fancy software.',
                initials: 'AK',
                color: '#D97706',
              },
              {
                name: 'James Whitfield',
                role: 'Real Estate Broker, Mumbai',
                stars: 5,
                text: 'Property transaction PDFs can get huge — inspection reports, disclosures, titles, agreements. I merge these daily. Scenith handles 80MB+ bundles without breaking a sweat. The fact that it requires zero sign-up means my agents can all use it without IT involvement.',
                initials: 'JW',
                color: '#DC2626',
              },
              {
                name: 'Tanvi Sharma',
                role: 'HR Manager, Pune',
                stars: 5,
                text: 'We merge onboarding documents for every new hire — offer letter, policy docs, NDA, benefits overview. Used to take 20 minutes per employee using a desktop tool that kept crashing. Now it takes 40 seconds. Zero cost. Wish we found this tool sooner.',
                initials: 'TS',
                color: '#0891B2',
              },
              {
                name: 'Vikram Singh',
                role: 'CA & Tax Consultant, Hyderabad',
                stars: 5,
                text: 'Tax season means hundreds of PDF bundles — ITR, balance sheets, bank statements, invoices. Scenith handles batch after batch without slowing down. The file size limit being non-existent is the biggest difference vs competitors. A++ tool.',
                initials: 'VS',
                color: '#2563EB',
              },
            ].map((t) => (
              <article key={t.name} className="mpf-testimonial-card">
                <div className="mpf-testimonial-card__stars">{'★'.repeat(t.stars)}</div>
                <p className="mpf-testimonial-card__text">"{t.text}"</p>
                <div className="mpf-testimonial-card__author">
                  <div className="mpf-testimonial-card__avatar" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="mpf-testimonial-card__name">{t.name}</div>
                    <div className="mpf-testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════ */}
      <section className="mpf-faq" aria-labelledby="faq-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="faq-heading">Frequently Asked Questions — Merge PDF Free</h2>
            <p>Everything you need to know before combining your PDF files online.</p>
          </div>

          <div className="mpf-faq-grid">
            {[
              {
                q: 'How do I merge PDF files for free with no watermark?',
                a: 'Use Scenith\'s free PDF merger: (1) Click "Merge PDF Files Now" above, (2) Upload your PDFs by dragging or clicking to browse, (3) Drag page thumbnails to reorder if needed, (4) Click "Merge PDFs", (5) Download your clean, watermark-free combined PDF. The entire process takes under 60 seconds and requires zero sign-up or payment.',
              },
              {
                q: 'Is Scenith\'s PDF merger genuinely free or does it have hidden costs?',
                a: 'Genuinely free with no hidden costs. There is no free trial, no daily file limit, no monthly file cap, no premium tier required for basic merging, and no watermarks on any output. Scenith is funded by optional premium features for advanced users — the core PDF merger will remain free forever for unlimited use.',
              },
              {
                q: 'How many PDF files can I combine at once?',
                a: 'There is no hard limit on file count. You can merge 2, 5, 10, 50, or more PDFs in a single operation. The practical limit is determined by your internet connection speed and total upload size. Most users merge 2–10 files per session. For very large batches (20+ files totaling hundreds of MB), we recommend merging in groups to manage upload times.',
              },
              {
                q: 'Will merging PDFs reduce image or text quality?',
                a: 'No. Scenith\'s merge tool performs a lossless structural combination — it does not re-render or re-compress content. Original image resolution, vector graphics, embedded fonts, hyperlinks, and formatting are preserved exactly. The merged output is identical in quality to the source documents.',
              },
              {
                q: 'Is it safe to upload confidential PDFs to an online merger?',
                a: 'Scenith uses 256-bit SSL/TLS encryption for all file transfers. Files are processed in isolated server environments and automatically deleted within 1 hour after processing. We have a zero data retention policy — your files are never stored, indexed, or shared. For extremely sensitive documents (government classified, certain medical records), consider offline desktop software that processes files locally.',
              },
              {
                q: 'Can I merge PDFs on my phone?',
                a: 'Yes. Scenith\'s PDF merger is fully responsive and works on all mobile browsers including Safari on iOS 15+ and Chrome on Android 8+. Upload files from your device\'s local storage. No app download required — just visit scenith.in/tools/pdf-tools in your mobile browser.',
              },
              {
                q: 'What\'s the file size limit for merging PDFs?',
                a: 'Scenith imposes no hard file size limit. However, very large files (500MB+ total) will take longer to upload depending on your internet connection. Most users process files under 100MB without any wait. For faster uploads, compress large image-heavy PDFs using Scenith\'s Compress PDF tool before merging.',
              },
              {
                q: 'Can I merge password-protected PDFs?',
                a: 'Password-protected PDFs must be unlocked before merging. Use Scenith\'s Unlock PDF tool first to remove the password, then proceed with the merge. Note: you must know the original password to unlock a PDF — this is a security feature that prevents unauthorized access to encrypted documents.',
              },
              {
                q: 'Will merging PDFs affect digital signatures?',
                a: 'Yes. Merging a digitally signed PDF into another document invalidates the digital signature, as any change to the document structure breaks the cryptographic seal. This is expected behavior across all PDF tools, not a limitation of Scenith specifically. If you need to preserve digital signatures, extract specific pages rather than merging the signed document.',
              },
              {
                q: 'How is Scenith different from Smallpdf, iLovePDF, and Adobe?',
                a: 'Smallpdf limits free users to 2 files per day and adds watermarks on free output. iLovePDF requires account registration and limits file sizes on free tier. Adobe Acrobat costs $239.88/year for a subscription. Scenith provides unlimited, watermark-free merging with no account requirement, no file limits, and no cost — now or ever.',
              },
              {
                q: 'Can I choose specific pages to merge, not just whole files?',
                a: 'Yes. Scenith\'s PDF tools support page-level selection — you can choose specific pages from each uploaded PDF to include in the merged output. This is particularly useful when you want to extract only the relevant pages from a large report and merge them with pages from other documents.',
              },
              {
                q: 'What PDF versions are supported?',
                a: 'Scenith supports all modern PDF versions including PDF 1.0 through PDF 2.0, as well as PDF/A (archival), PDF/X (print production), and most PDF forms. Very old PDFs created by legacy software before 1993 may have compatibility issues, though this is extremely rare in practice.',
              },
            ].map((faq) => (
              <article key={faq.q} className="mpf-faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PEOPLE ALSO ASK
      ═══════════════════════════════════════ */}
      <section className="mpf-paa" aria-labelledby="paa-heading">
        <div className="mpf-container">
          <div className="mpf-section-header mpf-section-header--light">
            <h2 id="paa-heading">People Also Ask About Merging PDFs</h2>
          </div>
          <div className="mpf-paa-grid">
            {[
              {
                q: 'Can I merge PDFs without Adobe Acrobat?',
                a: 'Yes — you don\'t need Adobe Acrobat to merge PDFs. Scenith\'s free online PDF merger provides the same core functionality (and more) without requiring any software installation or subscription. macOS users can also use Preview for basic merging.',
              },
              {
                q: 'How do I combine PDF files in Windows 10/11?',
                a: 'Windows 10/11 has no built-in PDF merge tool. The easiest free option is Scenith\'s online PDF merger — open it in Edge or Chrome, upload your files, and download the merged PDF. No download or installation needed.',
              },
              {
                q: 'Is there a free PDF merger for Mac?',
                a: 'Yes. macOS Preview can merge PDFs natively — open the first PDF, show the Thumbnail panel, drag additional PDFs in, then export. For more control (page selection, reordering across files), Scenith\'s online tool offers a better experience.',
              },
              {
                q: 'Can Google Drive merge PDFs?',
                a: 'Google Drive cannot natively merge PDFs. You\'d need a Google Workspace add-on or a third-party tool. Scenith\'s free PDF merger is faster and simpler — no add-on installation or Google account required.',
              },
              {
                q: 'What app can I use to merge PDFs on iPhone?',
                a: 'For iPhone, Scenith\'s web tool works perfectly in Safari without any app download. iOS 16+ also has a basic Files app PDF feature, but it lacks page reordering. Scenith gives you full control on mobile.',
              },
              {
                q: 'How do I merge PDFs in Python?',
                a: 'Use PyPDF2 or pypdf library: `from pypdf import PdfWriter; writer = PdfWriter(); writer.append("file1.pdf"); writer.append("file2.pdf"); writer.write("merged.pdf")`. For non-developers, Scenith\'s free online tool achieves the same result in seconds without any code.',
              },
            ].map((paa) => (
              <article key={paa.q} className="mpf-paa-item">
                <h3>{paa.q}</h3>
                <p>{paa.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED TOOLS CROSS-PROMO
      ═══════════════════════════════════════ */}
      <section className="mpf-related" aria-labelledby="related-heading">
        <div className="mpf-container">
          <div className="mpf-section-header">
            <h2 id="related-heading">More Free PDF Tools on Scenith</h2>
            <p>The complete PDF toolkit — everything free, no watermarks, no limits.</p>
          </div>
          <div className="mpf-related-grid">
            {[
              { icon: '✂️', name: 'Split PDF', desc: 'Extract pages or divide large PDFs into multiple files', color: '#7C3AED' },
              { icon: '🗜️', name: 'Compress PDF', desc: 'Reduce PDF file size by up to 75% without quality loss', color: '#059669' },
              { icon: '🔄', name: 'Rotate PDF', desc: 'Fix page orientation — 90°, 180°, or 270° rotation', color: '#D97706' },
              { icon: '🖼️', name: 'Images to PDF', desc: 'Convert JPG, PNG, GIF images into a single PDF', color: '#DC2626' },
              { icon: '📸', name: 'PDF to Images', desc: 'Extract every PDF page as a high-quality image file', color: '#0891B2' },
              { icon: '💧', name: 'Add Watermark', desc: 'Stamp text watermarks to protect your documents', color: '#6366F1' },
              { icon: '🔒', name: 'Lock PDF', desc: 'Password-protect sensitive PDF files', color: '#EF4444' },
              { icon: '🔓', name: 'Unlock PDF', desc: 'Remove password protection from encrypted PDFs', color: '#14B8A6' },
            ].map((tool) => (
              <Link
                key={tool.name}
                href={`${ctaUrl}&tool=${tool.name.toLowerCase().replace(/ /g, '-')}`}
                className="mpf-related-card"
                style={{ '--rc-color': tool.color } as React.CSSProperties}
              >
                <span className="mpf-related-card__icon">{tool.icon}</span>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
                <span className="mpf-related-card__cta">Use Free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="mpf-final-cta" aria-labelledby="final-cta-heading">
        <div className="mpf-final-cta__bg" aria-hidden="true" />
        <div className="mpf-container">
          <div className="mpf-final-cta__content">
            <span className="mpf-final-cta__emoji">📎</span>
            <h2 id="final-cta-heading">Ready to Merge Your PDFs for Free?</h2>
            <p>
              Join 100,000+ users who trust Scenith for professional PDF merging — no watermarks, no limits,
              no subscription. Your files are processed securely and deleted automatically. Start in seconds.
            </p>

            <Link href={ctaUrl} className="mpf-final-cta__button">
              <span className="mpf-final-cta__button-text">
                <strong>Merge PDF Files Now — 100% Free</strong>
                <small>No No Watermark · Instant Download · Files Auto-Deleted</small>
              </span>
              <span className="mpf-final-cta__button-arrow">→</span>
            </Link>

            <div className="mpf-final-cta__trust">
              <span>✅ Unlimited Files</span>
              <span>🔒 256-bit SSL Encryption</span>
              <span>⚡ 3-Second Processing</span>
              <span>🆓 Free Forever</span>
            </div>

            <p className="mpf-final-cta__note">
              Also need to <a href={ctaUrl}>compress</a>, <a href={ctaUrl}>split</a>,{' '}
              <a href={ctaUrl}>rotate</a>, or <a href={ctaUrl}>password-protect</a> your PDFs?
              Scenith's full PDF toolkit is free and waiting.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MergePDFFreePage;