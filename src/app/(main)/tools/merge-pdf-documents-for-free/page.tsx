import type { Metadata } from 'next';
import '../../../../../styles/tools/merge-pdf-landing.css';

export const metadata: Metadata = {
  title: 'Merge PDF Documents for Free — Combine Multiple PDFs Online (2026)',
  description:
    'Merge multiple PDF files into one document instantly. Free online PDF combiner with no file limits, zero quality loss, drag-and-drop reordering, and military-grade encryption. No watermarks. Works on all devices.',
  keywords: [
    'merge pdf documents for free',
    'combine pdf files online',
    'merge pdf free',
    'pdf merger online',
    'how to merge pdf files',
    'combine multiple pdf into one',
    'free pdf combiner',
    'merge pdf without watermark',
    'online pdf merge tool 2026',
    'join pdf files free',
    'pdf joiner online free',
    'merge pdf google drive',
    'combine pdf files for free',
    'pdf document merger',
    'merge scanned pdf documents',
  ].join(', '),
  openGraph: {
    title: 'Merge PDF Documents for Free — Combine Multiple PDFs Online',
    description:
      'Free PDF merger: combine unlimited PDFs into one document in seconds. No watermarks, no quality loss, no software download. Drag-and-drop, page-level control, instant download.',
    url: 'https://scenith.in/tools/merge-pdf-documents-for-free',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/merge-pdf-og.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Free PDF Merger — Combine Multiple PDF Documents Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Documents for Free — No Watermarks, No Limits',
    description:
      'Combine unlimited PDF files into one document in seconds. Free, secure, no software needed.',
    images: ['https://scenith.in/images/merge-pdf-og.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/merge-pdf-documents-for-free',
  },
};

/* ─── Static Data ────────────────────────────────────────── */

const USE_CASES = [
  {
    icon: '📋',
    category: 'Business',
    color: '#1d4ed8',
    colorBg: '#eff6ff',
    colorBorder: '#bfdbfe',
    title: 'Merging Business Documents',
    intro:
      'In the modern office, document fragmentation is a silent productivity killer. A typical quarterly review involves pulling data from finance (one PDF), operations (another), HR (a third), and legal compliance (a fourth). Each lives in its own file, sent by a different person, in a different format. Merging them into a single authoritative document changes everything.',
    usecases: [
      'Combine monthly financial statements into comprehensive quarterly reports',
      'Merge board meeting agendas with presentation decks and minutes',
      'Consolidate multi-vendor proposals into one evaluation document',
      'Create unified employee onboarding packets from HR templates',
      'Merge purchase orders, invoices, and delivery receipts per vendor',
      'Combine department budgets into company-wide financial overviews',
    ],
    stat: { num: '4.2 hrs', label: 'saved per employee weekly on document management' },
  },
  {
    icon: '⚖️',
    category: 'Legal',
    color: '#b45309',
    colorBg: '#fffbeb',
    colorBorder: '#fde68a',
    title: 'Legal Document Consolidation',
    intro:
      'Legal practice is document-intensive by nature. Contracts spawn exhibits. Litigation generates evidence bundles. Due diligence requires merging hundreds of files into organized data room documents. For attorneys and paralegals, the ability to rapidly combine PDFs with page-level precision is not a convenience — it\'s a billable efficiency.',
    usecases: [
      'Merge main contracts with all addenda, exhibits, and schedules',
      'Combine deposition transcripts with exhibit bundles for trial prep',
      'Create complete due diligence packages from multiple document sources',
      'Merge patent applications with supporting claims and drawings',
      'Combine regulatory submissions with evidence and certifications',
      'Consolidate real estate closing documents into single transaction files',
    ],
    stat: { num: '$350+', label: 'per hour saved vs. manual assembly or paralegal time' },
  },
  {
    icon: '🎓',
    category: 'Education',
    color: '#065f46',
    colorBg: '#ecfdf5',
    colorBorder: '#a7f3d0',
    title: 'Academic & Research Documents',
    intro:
      'Academic document management is chronically underserved by traditional tools. A doctoral thesis may be written in chapters across multiple files over years. A research literature review pulls from dozens of papers. A course reader needs to compile readings from different sources. PDF merging is the invisible infrastructure of serious academic work.',
    usecases: [
      'Merge thesis chapters, bibliography, and appendices into final submission',
      'Combine research literature reviews with annotated sources',
      'Create complete course readers from individual article PDFs',
      'Merge student portfolio submissions from multiple assignment files',
      'Combine conference paper with supplementary data and figures',
      'Consolidate grant applications with supporting documentation',
    ],
    stat: { num: '67%', label: 'of academics report document management as a top frustration' },
  },
  {
    icon: '🏥',
    category: 'Healthcare',
    color: '#be185d',
    colorBg: '#fdf2f8',
    colorBorder: '#f9a8d4',
    title: 'Medical & Health Records',
    intro:
      'In healthcare, a patient\'s complete picture often lives across dozens of separate documents — lab results from one date, imaging reports from another, specialist consultations from a third, insurance authorizations from a fourth. Merging these into coherent patient records or insurance submissions dramatically reduces administrative overhead and improves care coordination.',
    usecases: [
      'Merge lab results, imaging reports, and specialist notes per patient visit',
      'Combine insurance prior authorization requests with supporting clinical evidence',
      'Create complete medical history files from scattered encounter records',
      'Merge discharge summaries with medication lists and follow-up instructions',
      'Combine clinical trial documents from multiple participating sites',
      'Consolidate insurance claim files with diagnosis codes and receipts',
    ],
    stat: { num: '25 min', label: 'average time wasted per patient on fragmented record retrieval' },
  },
];

const VERSUS_DATA = [
  {
    method: 'Scenith PDF Merger',
    cost: 'Free',
    speed: '< 10 seconds',
    watermark: 'Never',
    fileLimit: 'Unlimited',
    install: 'None — browser only',
    mobile: '✅ Full support',
    highlight: true,
  },
  {
    method: 'Adobe Acrobat Pro',
    cost: '$19.99/mo',
    speed: '10–30 seconds',
    watermark: 'No watermark',
    fileLimit: 'Unlimited',
    install: 'Required (~4GB)',
    mobile: '⚠️ Limited',
    highlight: false,
  },
  {
    method: 'Smallpdf',
    cost: 'Free (2/day) / $12/mo',
    speed: '5–15 seconds',
    watermark: 'Free plan: watermarked',
    fileLimit: '2 tasks/day (free)',
    install: 'None',
    mobile: '✅ Supported',
    highlight: false,
  },
  {
    method: 'ILovePDF',
    cost: 'Free (limited)',
    speed: '5–20 seconds',
    watermark: 'Free: watermarked',
    fileLimit: '2 tasks/day',
    install: 'None',
    mobile: '✅ Supported',
    highlight: false,
  },
  {
    method: 'Preview (macOS)',
    cost: 'Free',
    speed: 'Manual — minutes',
    watermark: 'No watermark',
    fileLimit: 'Manual page-by-page',
    install: 'macOS only',
    mobile: '❌ Not supported',
    highlight: false,
  },
  {
    method: 'PDFsam Basic',
    cost: 'Free',
    speed: '5–30 seconds',
    watermark: 'No watermark',
    fileLimit: 'Unlimited',
    install: 'Required (~200MB)',
    mobile: '❌ Not supported',
    highlight: false,
  },
];

const WORKFLOW_TIPS = [
  {
    num: '01',
    title: 'The Naming Convention Trick',
    body: 'Before uploading, rename your PDFs with numeric prefixes: "01-Cover.pdf", "02-Executive-Summary.pdf", "03-Financial-Data.pdf". When you upload multiple files at once, most file browsers will sort them alphabetically — and your numbered names will result in automatic correct ordering. This single habit eliminates the manual reordering step for 80% of your merges.',
    tag: 'Time Saver',
    tagColor: '#1d4ed8',
  },
  {
    num: '02',
    title: 'Section Dividers as Blank Pages',
    body: 'For professional-looking merged documents (client reports, regulatory submissions, legal packages), keep a single-page blank white PDF as a "divider template". Insert it between major document sections during the merge. The visual break signals a new section to readers and makes long merged documents far more navigable — especially when printed double-sided.',
    tag: 'Presentation',
    tagColor: '#065f46',
  },
  {
    num: '03',
    title: 'Merge in Batches for Very Large Documents',
    body: 'If you\'re combining 50+ PDFs or documents totaling 500+ pages, use a two-pass approach: First merge groups of 10–15 related documents into "chapter" files. Then merge the chapter files into the final document. This approach is faster, easier to reorder if you make a mistake, and produces cleaner results with consistent metadata.',
    tag: 'Performance',
    tagColor: '#b45309',
  },
  {
    num: '04',
    title: 'The Selective Page Extraction Technique',
    body: 'You don\'t have to merge entire files. If you only need the signature page from a contract, the executive summary from a 50-page report, or pages 3–7 of a reference document — use the page-level selection to include only what you need. This technique is the difference between a bloated 200-page merged document and a tight, professional 40-page one.',
    tag: 'Precision',
    tagColor: '#be185d',
  },
  {
    num: '05',
    title: 'Version Your Merged Outputs',
    body: 'When merging documents for important deliverables (client submissions, regulatory filings, court bundles), download your merged PDF with a date-stamped filename: "Project-Alpha-Proposal-2026-03-15-v1.pdf". If you need to revise and re-merge, increment the version number. This simple habit has saved countless hours of "wait, which version did we send them?" conversations.',
    tag: 'Organization',
    tagColor: '#7c3aed',
  },
  {
    num: '06',
    title: 'Compress After Merging Large Image-Heavy PDFs',
    body: 'If your merged PDF contains lots of high-resolution images (scanned documents, photo portfolios, product catalogs), the combined file can become very large. After merging, run it through a PDF compressor tool to reduce file size for email attachments. On Scenith, you can do this in the same PDF Tools suite — merge first, compress after, all in the browser.',
    tag: 'File Size',
    tagColor: '#0369a1',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Does merging PDFs online reduce the quality of text and images?',
    a: 'No — not when done correctly. Scenith uses lossless PDF merging technology that reads and reassembles PDF page streams without re-encoding or compressing content. The text in your merged PDF remains fully searchable, images retain their original resolution, embedded fonts render identically, and all vector graphics remain crisp at any zoom level. This is the same standard used by Adobe Acrobat Pro at a fraction of the cost.',
  },
  {
    q: 'How many PDF files can I merge at once?',
    a: 'There is no hard limit on the number of files or total page count. You can merge 2 files or 200 files in a single operation. The system is designed to handle enterprise-scale merging tasks — combining hundreds of scanned documents, entire filing cabinets, or multi-volume reports. Processing time scales linearly with total page count, but even 500-page merges typically complete in under 30 seconds.',
  },
  {
    q: 'Are my PDF files safe to upload? Who can see them?',
    a: 'Your documents are protected from the moment you upload to the moment they\'re deleted. All file transfers use 256-bit TLS/SSL encryption (the same standard used by banks). Files are processed in isolated server containers — no human ever views your documents. After download, files are permanently and irrecoverably deleted within 60 minutes. We operate under strict data minimization principles: we collect only what\'s needed to process your merge and nothing more.',
  },
  {
    q: 'Can I merge password-protected or encrypted PDFs?',
    a: 'Merging encrypted or password-protected PDFs requires that you first unlock them. If you have the password, decrypt the PDF using our PDF unlock tool, then proceed with the merge. We cannot bypass PDF encryption — this is intentional and protects document owners. Note that some PDFs have "print permissions only" restrictions that prevent structural manipulation; these will need to be unlocked first.',
  },
  {
    q: 'Will the merged PDF preserve hyperlinks, forms, and interactive elements?',
    a: 'Yes. Internal document hyperlinks, clickable URLs, fillable form fields, and PDF bookmarks are all preserved during merging. Note that some cross-document bookmarks or form field naming conflicts may require attention when merging forms with identical field names from different source documents. For most business merging use cases — reports, contracts, research documents — all interactive elements transfer intact.',
  },
  {
    q: 'What is the maximum file size for PDF merging?',
    a: 'Individual file upload limits and total merge size depend on your plan. Free tier users can merge files up to a generous size threshold sufficient for most personal and business uses. For very large files — architectural drawings, high-resolution print-ready documents, or multi-hundred-page scanned archives — upgrading to a paid plan removes size restrictions entirely.',
  },
  {
    q: 'Can I merge PDFs that were scanned from physical documents?',
    a: 'Absolutely. Scanned PDFs — even those that are just images without text layer — merge perfectly. The output will be a single PDF containing all scanned page images in the order you specify. If you need the merged scanned document to be searchable, consider running OCR (Optical Character Recognition) on the individual files before merging, then combine the searchable PDFs.',
  },
  {
    q: 'How is Scenith\'s PDF merger different from using Google Drive or Word?',
    a: 'Google Drive\'s PDF merge capability is rudimentary — it was designed for Drive organization, not professional document assembly. Microsoft Word will re-render PDFs as editable documents and then re-export, introducing formatting changes, font substitutions, and image quality degradation. Scenith preserves the PDF natively throughout the entire process — no conversion, no re-rendering, no quality loss. It\'s a purpose-built PDF tool, not a workaround.',
  },
  {
    q: 'Do I need to create an account to merge PDF files?',
    a: 'No account is required to start merging PDFs. You can use the tool immediately without registration. Creating a free account unlocks additional benefits: generation history, higher file size limits, batch processing capabilities, and access to the full Scenith PDF Tools suite including split, compress, rotate, OCR, and more.',
  },
  {
    q: 'Can I rearrange individual pages from different PDFs before merging?',
    a: 'Yes — this is one of Scenith\'s most powerful features. Rather than being forced to merge entire documents in document-order, you can drag individual pages from any uploaded PDF into any position in the final merge sequence. This enables advanced workflows like interleaving pages from two documents, creating custom page sequences, or extracting specific pages from multiple sources into a single curated document.',
  },
];

const RELATED_TOOLS = [
  { emoji: '✂️', name: 'Split PDF', desc: 'Divide one PDF into multiple separate files by page range or every page.', href: '/tools/pdf-tools/split-pdf?utm_source=merge_landing&utm_medium=related_tools&utm_campaign=pdf_tools' },
  { emoji: '🗜️', name: 'Compress PDF', desc: 'Reduce PDF file size by up to 80% without visible quality loss.', href: '/tools/pdf-tools/compress-pdf?utm_source=merge_landing&utm_medium=related_tools&utm_campaign=pdf_tools' },
  { emoji: '🔄', name: 'Convert PDF', desc: 'Convert PDF to Word, Excel, PowerPoint, or image formats and back.', href: '/tools/pdf-tools?utm_source=merge_landing&utm_medium=related_tools&utm_campaign=pdf_tools' },
  { emoji: '🔒', name: 'Protect PDF', desc: 'Add password protection and permission controls to your PDF files.', href: '/tools/pdf-tools?utm_source=merge_landing&utm_medium=related_tools&utm_campaign=pdf_tools' },
];

/* ─── Page Component ─────────────────────────────────────── */

export default function MergePdfLandingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/merge-pdf-documents-for-free',
        name: 'Merge PDF Documents for Free — Combine Multiple PDFs Online',
        description:
          'Free online PDF merger: combine unlimited PDF files into one document. No watermarks, no quality loss, drag-and-drop page control, 256-bit encryption. Works on all devices.',
        url: 'https://scenith.in/tools/merge-pdf-documents-for-free',
        inLanguage: 'en-US',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
            { '@type': 'ListItem', position: 3, name: 'PDF Tools', item: 'https://scenith.in/tools/pdf-tools' },
            { '@type': 'ListItem', position: 4, name: 'Merge PDF Documents for Free', item: 'https://scenith.in/tools/merge-pdf-documents-for-free' },
          ],
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://scenith.in/tools/pdf-tools/merge-pdf',
        name: 'Scenith PDF Merger',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any (Web Browser)',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: [
          'Unlimited PDF file merging',
          'Drag-and-drop page reordering',
          'Page-level selection control',
          'Zero quality loss processing',
          'No watermarks',
          '256-bit SSL encryption',
          'Automatic file deletion',
          'Mobile compatible',
        ],
        url: 'https://scenith.in/tools/pdf-tools/merge-pdf',
        author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://scenith.in/tools/merge-pdf-documents-for-free#faq',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Merge PDF Documents for Free Online',
        description: 'Step-by-step guide to combining multiple PDF files into one document using Scenith PDF Merger',
        totalTime: 'PT2M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Upload your PDF files', text: 'Click the upload area or drag and drop your PDF files. Upload as many as you need — there are no file count limits.' },
          { '@type': 'HowToStep', position: 2, name: 'Arrange pages in order', text: 'Drag to reorder entire documents or individual pages. Remove pages you do not need with the X button.' },
          { '@type': 'HowToStep', position: 3, name: 'Click Merge PDFs', text: 'Hit the Process/Merge button. Your combined PDF is ready in seconds.' },
          { '@type': 'HowToStep', position: 4, name: 'Download your merged PDF', text: 'Download the final document. Zero quality loss, no watermark, full commercial use rights.' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mpdf-page">

        {/* Breadcrumb */}
        <nav className="mpdf-breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools/pdf-tools" itemProp="item"><span itemProp="name">PDF Tools</span></a>
              <meta itemProp="position" content="3" />
            </li>
            <span aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Merge PDF Documents for Free</span>
              <meta itemProp="position" content="4" />
            </li>
          </ol>
        </nav>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <header className="mpdf-hero">
          <div className="mpdf-hero-inner">
            <div className="mpdf-hero-left">
              <div className="mpdf-hero-tags">
                <span className="mpdf-tag mpdf-tag--blue">Free Forever</span>
                <span className="mpdf-tag mpdf-tag--green">No Watermark</span>
                <span className="mpdf-tag mpdf-tag--amber">No Limits</span>
              </div>

              <h1 className="mpdf-hero-h1">
                Merge PDF Documents<br />
                <em>for Free.</em><br />
                <span className="mpdf-hero-h1-line3">No Software. No Signup. No Catch.</span>
              </h1>

              <p className="mpdf-hero-lead">
                Combine unlimited PDF files into one perfectly organized document in seconds. The fastest, cleanest, most privacy-respecting PDF merger available in 2026 — completely free, with full commercial use rights and zero quality compromise.
              </p>

              {/* Stats bar */}
              <div className="mpdf-stats-row" role="list">
                <div className="mpdf-stat" role="listitem">
                  <span className="mpdf-stat-num">∞</span>
                  <span className="mpdf-stat-label">Files per merge</span>
                </div>
                <div className="mpdf-stat-sep" aria-hidden="true" />
                <div className="mpdf-stat" role="listitem">
                  <span className="mpdf-stat-num">0%</span>
                  <span className="mpdf-stat-label">Quality loss</span>
                </div>
                <div className="mpdf-stat-sep" aria-hidden="true" />
                <div className="mpdf-stat" role="listitem">
                  <span className="mpdf-stat-num">60 min</span>
                  <span className="mpdf-stat-label">Until auto-delete</span>
                </div>
                <div className="mpdf-stat-sep" aria-hidden="true" />
                <div className="mpdf-stat" role="listitem">
                  <span className="mpdf-stat-num">$0</span>
                  <span className="mpdf-stat-label">Cost, always</span>
                </div>
              </div>

              {/* PRIMARY CTA */}
              <div className="mpdf-hero-cta">
                <a
                  href="https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge_pdf_landing&utm_medium=hero_cta&utm_campaign=merge_pdf_documents_for_free"
                  className="mpdf-cta-btn mpdf-cta-btn--primary"
                  aria-label="Merge your PDF documents for free on Scenith"
                >
                  <span className="mpdf-cta-icon" aria-hidden="true">📄</span>
                  Merge My PDFs — Free
                  <span className="mpdf-cta-arrow" aria-hidden="true">→</span>
                </a>
                <p className="mpdf-cta-note">No account required. Files deleted automatically. Works on any device.</p>
              </div>

              {/* Trust pills */}
              <div className="mpdf-trust-pills" role="list">
                {['🔒 256-bit SSL', '📵 No data retention', '🚫 No watermarks', '💻 No installation', '📱 Mobile friendly', '✅ Commercial use OK'].map(p => (
                  <span key={p} className="mpdf-trust-pill" role="listitem">{p}</span>
                ))}
              </div>
            </div>

            <div className="mpdf-hero-right" aria-hidden="true">
              <div className="mpdf-doc-stack">
                <div className="mpdf-doc mpdf-doc--1">
                  <div className="mpdf-doc-lines">
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--med" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--short" />
                  </div>
                  <span className="mpdf-doc-label">Report-Q1.pdf</span>
                </div>
                <div className="mpdf-doc mpdf-doc--2">
                  <div className="mpdf-doc-lines">
                    <div className="mpdf-doc-line mpdf-doc-line--med" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--short" />
                    <div className="mpdf-doc-line mpdf-doc-line--med" />
                  </div>
                  <span className="mpdf-doc-label">Contract.pdf</span>
                </div>
                <div className="mpdf-doc mpdf-doc--3">
                  <div className="mpdf-doc-lines">
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--short" />
                    <div className="mpdf-doc-line mpdf-doc-line--med" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                  </div>
                  <span className="mpdf-doc-label">Appendix.pdf</span>
                </div>
                <div className="mpdf-arrow-merge" aria-hidden="true">⬇</div>
                <div className="mpdf-doc mpdf-doc--result">
                  <div className="mpdf-doc-result-icon">✓</div>
                  <div className="mpdf-doc-lines">
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--med" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                    <div className="mpdf-doc-line mpdf-doc-line--short" />
                    <div className="mpdf-doc-line mpdf-doc-line--wide" />
                  </div>
                  <span className="mpdf-doc-label mpdf-doc-label--result">Final-Document.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── DEFINITION SNIPPET ───────────────────────────────── */}
        <section className="mpdf-definition-section">
          <div className="mpdf-container">
            <div className="mpdf-definition-box" itemScope itemType="https://schema.org/DefinedTerm">
              <span className="mpdf-definition-label">Definition</span>
              <p itemProp="description">
                <strong itemProp="name">Merging PDF documents</strong> (also called PDF combining, PDF joining, or PDF concatenation) is the process of combining two or more separate PDF files into a single, unified PDF document while preserving all original content — text, images, fonts, formatting, hyperlinks, and interactive elements — without quality degradation or re-encoding.
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW TO MERGE ─────────────────────────────────────── */}
        <section className="mpdf-section" id="how-to-merge" aria-labelledby="howto-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Step-by-Step Guide</div>
            <h2 id="howto-title" className="mpdf-section-h2">
              How to Merge PDF Documents for Free<br />
              <span className="mpdf-h2-sub">In Four Steps, Under Two Minutes</span>
            </h2>

            <div className="mpdf-steps-grid">
              <article className="mpdf-step-card">
                <div className="mpdf-step-num">01</div>
                <div className="mpdf-step-icon" aria-hidden="true">📁</div>
                <h3>Upload Your PDFs</h3>
                <p>
                  Click the upload zone or drag and drop your PDFs directly into the browser. Upload from your computer, or from cloud storage via your browser. There is no limit on the number of files you can upload in one session.
                </p>
                <div className="mpdf-step-tip">
                  <strong>Pro tip:</strong> Name files "01-filename.pdf", "02-filename.pdf" before uploading — they'll sort into the right order automatically.
                </div>
              </article>

              <article className="mpdf-step-card">
                <div className="mpdf-step-num">02</div>
                <div className="mpdf-step-icon" aria-hidden="true">↕️</div>
                <h3>Arrange & Select Pages</h3>
                <p>
                  Drag entire documents or individual pages into your desired order. Use the X button to remove pages you don't need. You can also interleave pages from different source documents for advanced merge sequences.
                </p>
                <div className="mpdf-step-tip">
                  <strong>Pro tip:</strong> Need only the signature page from a 50-page contract? Select just that page — merge only what you need.
                </div>
              </article>

              <article className="mpdf-step-card">
                <div className="mpdf-step-num">03</div>
                <div className="mpdf-step-icon" aria-hidden="true">⚙️</div>
                <h3>Process the Merge</h3>
                <p>
                  Click "Merge PDFs". Our server processes the merge using lossless PDF concatenation — no re-encoding, no compression, no quality trade-offs. Most merges complete in under 10 seconds regardless of page count.
                </p>
                <div className="mpdf-step-tip">
                  <strong>Pro tip:</strong> Very large merges (500+ pages) complete faster if you group into smaller batches first, then merge the groups.
                </div>
              </article>

              <article className="mpdf-step-card">
                <div className="mpdf-step-num">04</div>
                <div className="mpdf-step-icon" aria-hidden="true">⬇️</div>
                <h3>Download & Use</h3>
                <p>
                  Your merged PDF downloads instantly. Zero watermarks, full commercial use rights. The file is 100% yours — use it for clients, submissions, archiving, or printing. All uploaded files are permanently deleted within 60 minutes.
                </p>
                <div className="mpdf-step-tip">
                  <strong>Pro tip:</strong> Include a date-stamp in the filename for version control: "Proposal-2026-03-15-v1.pdf"
                </div>
              </article>
            </div>

            <div className="mpdf-cta-center">
              <a
                href="https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge_pdf_landing&utm_medium=howto_section&utm_campaign=merge_pdf_documents_for_free"
                className="mpdf-cta-btn mpdf-cta-btn--primary"
              >
                <span className="mpdf-cta-icon" aria-hidden="true">📄</span>
                Open PDF Merger Now
                <span className="mpdf-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────── */}
        <section className="mpdf-section mpdf-section--tinted" id="use-cases" aria-labelledby="usecases-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Who Uses PDF Merging</div>
            <h2 id="usecases-title" className="mpdf-section-h2">
              Real-World PDF Merging Applications<br />
              <span className="mpdf-h2-sub">Across Industries, Roles, and Use Cases</span>
            </h2>
            <p className="mpdf-section-intro">
              PDF merging is one of the most universally needed document operations — yet most people still do it the hard way (or pay for software they use twice a year). Here's how professionals across four industries use free online PDF merging to save hours every week.
            </p>

            <div className="mpdf-usecase-list">
              {USE_CASES.map((uc) => (
                <article
                  key={uc.category}
                  className="mpdf-usecase-card"
                  style={{
                    '--uc-color': uc.color,
                    '--uc-bg': uc.colorBg,
                    '--uc-border': uc.colorBorder,
                  } as React.CSSProperties}
                >
                  <div className="mpdf-usecase-header">
                    <div className="mpdf-usecase-icon" aria-hidden="true">{uc.icon}</div>
                    <div>
                      <span className="mpdf-usecase-category">{uc.category}</span>
                      <h3 className="mpdf-usecase-title">{uc.title}</h3>
                    </div>
                    <div className="mpdf-usecase-stat">
                      <span className="mpdf-usecase-stat-num">{uc.stat.num}</span>
                      <span className="mpdf-usecase-stat-label">{uc.stat.label}</span>
                    </div>
                  </div>
                  <p className="mpdf-usecase-intro">{uc.intro}</p>
                  <ul className="mpdf-usecase-list-items">
                    {uc.usecases.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── VERSUS TABLE ─────────────────────────────────────── */}
        <section className="mpdf-section" id="comparison" aria-labelledby="compare-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Honest Comparison</div>
            <h2 id="compare-title" className="mpdf-section-h2">
              Free PDF Merger vs. Paid Alternatives:<br />
              <span className="mpdf-h2-sub">The Full Breakdown for 2026</span>
            </h2>
            <p className="mpdf-section-intro">
              Before spending money on Adobe Acrobat or settling for a tool that watermarks your documents, see how Scenith compares to every major option.
            </p>

            <div className="mpdf-table-wrap" role="region" aria-label="Comparison of PDF merging tools">
              <table className="mpdf-table">
                <thead>
                  <tr>
                    <th scope="col">Tool</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Speed</th>
                    <th scope="col">Watermark</th>
                    <th scope="col">File Limit</th>
                    <th scope="col">Install Needed</th>
                    <th scope="col">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {VERSUS_DATA.map((row) => (
                    <tr key={row.method} className={row.highlight ? 'mpdf-table-row--highlight' : ''}>
                      <td>
                        <strong>{row.method}</strong>
                        {row.highlight && <span className="mpdf-table-you-badge">← You are here</span>}
                      </td>
                      <td className={row.highlight ? 'mpdf-table-cell--green' : ''}>{row.cost}</td>
                      <td>{row.speed}</td>
                      <td className={row.highlight ? 'mpdf-table-cell--green' : ''}>{row.watermark}</td>
                      <td className={row.highlight ? 'mpdf-table-cell--green' : ''}>{row.fileLimit}</td>
                      <td>{row.install}</td>
                      <td>{row.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mpdf-compare-verdict">
              <h3>The Verdict</h3>
              <p>
                For the vast majority of individuals, students, freelancers, and small business owners — <strong>there is no practical reason to pay for PDF merging in 2026.</strong> Adobe Acrobat Pro offers marginal advantages for very specialized use cases (advanced PDF forms, complex redaction workflows, integrated e-signatures). For document merging specifically, the free tools available today — when properly built — are equivalent in output quality. The key differentiator is whether the free tool adds watermarks (Smallpdf, ILovePDF on free tiers do) or deletes your files securely. Scenith does neither.
              </p>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW TIPS ─────────────────────────────────────── */}
        <section className="mpdf-section mpdf-section--tinted" id="workflow-tips" aria-labelledby="tips-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Power User Playbook</div>
            <h2 id="tips-title" className="mpdf-section-h2">
              6 PDF Merging Techniques<br />
              <span className="mpdf-h2-sub">That Save Serious Time</span>
            </h2>

            <div className="mpdf-tips-grid">
              {WORKFLOW_TIPS.map((tip) => (
                <article key={tip.num} className="mpdf-tip-card">
                  <div className="mpdf-tip-header">
                    <span className="mpdf-tip-num">{tip.num}</span>
                    <span
                      className="mpdf-tip-tag"
                      style={{ color: tip.tagColor, backgroundColor: tip.tagColor + '14', borderColor: tip.tagColor + '30' }}
                    >
                      {tip.tag}
                    </span>
                  </div>
                  <h3 className="mpdf-tip-title">{tip.title}</h3>
                  <p className="mpdf-tip-body">{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECURITY SECTION ─────────────────────────────────── */}
        <section className="mpdf-section" id="security" aria-labelledby="security-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Privacy & Security</div>
            <h2 id="security-title" className="mpdf-section-h2">
              Your Documents Are Private.<br />
              <span className="mpdf-h2-sub">Here's Exactly How We Protect Them</span>
            </h2>

            <div className="mpdf-security-grid">
              <div className="mpdf-security-prose">
                <p>
                  Uploading sensitive documents to an unknown online tool is a legitimate concern. PDFs often contain financial records, legal agreements, medical information, personal data, and confidential business information. Our security architecture is designed to make document privacy a guarantee, not a promise.
                </p>
                <p>
                  We operate on a <strong>data minimization principle</strong>: we collect only what is strictly required to process your merge, for the shortest time possible, with access restricted to automated processing systems only. No human ever views your documents. No files are retained after processing is complete.
                </p>
                <p>
                  Unlike some "free" tools that monetize user data or document content for training AI models, Scenith's business model is subscription-based — meaning we have no incentive to monetize your document content. Your files are a technical input for a process, not a data asset.
                </p>
              </div>

              <div className="mpdf-security-cards">
                {[
                  { icon: '🔐', title: '256-bit TLS/SSL', desc: 'All file transfers are encrypted end-to-end using the same standard as online banking.' },
                  { icon: '📦', title: 'Isolated Processing', desc: 'Files are processed in ephemeral, isolated containers. No cross-user data access is possible.' },
                  { icon: '🗑️', title: 'Auto-Delete in 60 min', desc: 'All uploaded and processed files are permanently and irrecoverably deleted within 60 minutes.' },
                  { icon: '🚫', title: 'No Data Mining', desc: 'Your document content is never analyzed, indexed, used for AI training, or shared with any third party.' },
                  { icon: '📵', title: 'No Account Tracking', desc: 'No-account usage generates zero personal data. Your IP is not retained after session completion.' },
                  { icon: '⚖️', title: 'GDPR Compliant', desc: 'Our data practices comply with GDPR, CCPA, and global privacy regulations.' },
                ].map((item) => (
                  <div key={item.title} className="mpdf-security-card">
                    <div className="mpdf-security-icon" aria-hidden="true">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT GETS PRESERVED ──────────────────────────────── */}
        <section className="mpdf-section mpdf-section--tinted" id="quality" aria-labelledby="quality-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Quality Guarantee</div>
            <h2 id="quality-title" className="mpdf-section-h2">
              What's Preserved in Your Merged PDF<br />
              <span className="mpdf-h2-sub">The Complete Technical Breakdown</span>
            </h2>
            <p className="mpdf-section-intro">
              "100% quality preservation" is a phrase many PDF tools use loosely. Here's exactly what it means in technical terms — and what you should expect from your merged document.
            </p>

            <div className="mpdf-quality-grid">
              {[
                {
                  icon: '🔤',
                  title: 'Text Layer & Searchability',
                  detail: 'Every character in your source PDFs remains fully searchable, copyable, and selectable in the merged output. Text is not rasterized or converted to images. OCR-generated text layers are preserved intact. Screen readers and accessibility tools will continue to read the text correctly.'
                },
                {
                  icon: '🖼️',
                  title: 'Image Resolution & Color',
                  detail: 'Images embedded in PDFs are stored as compressed image streams within the file structure. Merging reassembles these streams without re-encoding — meaning no additional compression, no color profile shifts, and no resolution reduction. A 300 DPI image in your source PDF remains 300 DPI in the merged output.'
                },
                {
                  icon: '🔤',
                  title: 'Font Embedding',
                  detail: 'PDFs embed font data within the file to ensure consistent rendering on any device. Merging preserves all embedded font programs, subset fonts, and font descriptors. If a source PDF uses a rare custom typeface, that typeface data moves into the merged document — no font substitution, no rendering differences.'
                },
                {
                  icon: '🔗',
                  title: 'Hyperlinks & URLs',
                  detail: 'Both internal document hyperlinks (e.g., links to specific pages within the document) and external URLs are preserved in merged documents. Note: internal links that pointed to page numbers in the source document will reference the corresponding new page numbers in the merged output automatically.'
                },
                {
                  icon: '📐',
                  title: 'Page Size & Orientation',
                  detail: 'A4 pages stay A4. Letter pages stay Letter. Landscape pages remain landscape. Portrait pages remain portrait. Mixed-size merged documents are fully supported — a merged PDF can contain pages of different dimensions with each page maintaining its original geometry. No forced page standardization occurs.'
                },
                {
                  icon: '📋',
                  title: 'Form Fields & Annotations',
                  detail: 'Fillable form fields, checkboxes, dropdown menus, radio buttons, and digital signature fields are preserved in merged PDFs. PDF annotations including comments, sticky notes, highlights, and stamps transfer intact. Note: form fields with identical names from different source documents may require renaming to avoid conflicts.'
                },
              ].map((item) => (
                <article key={item.title} className="mpdf-quality-card">
                  <div className="mpdf-quality-icon" aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHEN TO MERGE VS ALTERNATIVES ─────────────────────── */}
        <section className="mpdf-section" id="when-to-merge" aria-labelledby="when-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Decision Guide</div>
            <h2 id="when-title" className="mpdf-section-h2">
              When to Merge — and When to Use a Different Approach
            </h2>

            <div className="mpdf-decision-grid">
              <div className="mpdf-decision-card mpdf-decision-card--yes">
                <div className="mpdf-decision-header">
                  <span className="mpdf-decision-icon" aria-hidden="true">✅</span>
                  <h3>Merge PDFs When...</h3>
                </div>
                <ul>
                  <li>Sending multiple documents to one recipient — merging into one file reduces friction</li>
                  <li>Submitting multi-part documents to a system that accepts only single files</li>
                  <li>Creating a comprehensive archive of related documents for long-term storage</li>
                  <li>Assembling a final deliverable from multiple component documents (report + appendices + cover letter)</li>
                  <li>Building a client-facing document package from internal templates and data files</li>
                  <li>Combining chapters written separately into a single final manuscript or thesis</li>
                  <li>Consolidating a month's invoices into one accounts payable file</li>
                  <li>Creating a complete employee file from multiple onboarding and performance documents</li>
                </ul>
              </div>

              <div className="mpdf-decision-card mpdf-decision-card--alt">
                <div className="mpdf-decision-header">
                  <span className="mpdf-decision-icon" aria-hidden="true">↔️</span>
                  <h3>Consider Alternatives When...</h3>
                </div>
                <ul>
                  <li><strong>Recipients need to edit content:</strong> Send Word/Google Docs source files instead of a merged PDF</li>
                  <li><strong>Collaboration is needed:</strong> Use Google Drive folder sharing or SharePoint instead of a static merged PDF</li>
                  <li><strong>Files change frequently:</strong> Link to a cloud document rather than creating a merged static snapshot</li>
                  <li><strong>Version control is complex:</strong> Document management systems (SharePoint, Notion, DocuWare) handle this better than manual re-merging</li>
                  <li><strong>Recipients need specific pages only:</strong> Split and share only the relevant pages rather than the entire merged document</li>
                  <li><strong>Document structure needs redesigning:</strong> Redesign in InDesign/Word and export as PDF rather than stitching together disparate existing PDFs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── MID-PAGE CTA ─────────────────────────────────────── */}
        <div className="mpdf-mid-cta">
          <div className="mpdf-container">
            <div className="mpdf-mid-cta-inner">
              <div className="mpdf-mid-cta-text">
                <h2>Every PDF tool you need. All free. All in one place.</h2>
                <p>Merge, split, compress, rotate, convert — without switching tools or paying subscription fees.</p>
              </div>
              <a
                href="https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge_pdf_landing&utm_medium=mid_cta&utm_campaign=merge_pdf_documents_for_free"
                className="mpdf-cta-btn mpdf-cta-btn--primary mpdf-cta-btn--lg"
              >
                <span className="mpdf-cta-icon" aria-hidden="true">📄</span>
                Start Merging PDFs — Free
                <span className="mpdf-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="mpdf-section" id="faq" aria-labelledby="faq-title">
          <div className="mpdf-container">
            <div className="mpdf-section-eyebrow">Common Questions</div>
            <h2 id="faq-title" className="mpdf-section-h2">
              Frequently Asked Questions<br />
              <span className="mpdf-h2-sub">About Merging PDF Documents</span>
            </h2>

            <div className="mpdf-faq-list">
              {FAQ_ITEMS.map((item) => (
                <article key={item.q} className="mpdf-faq-item" itemScope itemType="https://schema.org/Question">
                  <h3 itemProp="name">{item.q}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="mpdf-final-cta" aria-labelledby="final-cta-title">
          <div className="mpdf-container">
            <div className="mpdf-final-cta-inner">
              <div className="mpdf-final-cta-badge" aria-hidden="true">📄 + 📄 + 📄</div>
              <h2 id="final-cta-title">
                Stop juggling scattered PDFs.<br />
                Merge them into one — right now.
              </h2>
              <p>
                Free. Instant. No account needed. No watermarks. No quality loss. No software to install. The most straightforward PDF merger available in 2026 — and it costs exactly nothing.
              </p>

              <div className="mpdf-final-cta-actions">
                <a
                  href="https://scenith.in/tools/pdf-tools/merge-pdf?utm_source=merge_pdf_landing&utm_medium=final_cta&utm_campaign=merge_pdf_documents_for_free"
                  className="mpdf-cta-btn mpdf-cta-btn--primary mpdf-cta-btn--xl"
                >
                  <span className="mpdf-cta-icon" aria-hidden="true">📄</span>
                  Merge My PDFs — Free, Right Now
                  <span className="mpdf-cta-arrow" aria-hidden="true">→</span>
                </a>
                <a
                  href="/tools/pdf-tools?utm_source=merge_pdf_landing&utm_medium=final_cta_secondary&utm_campaign=merge_pdf_documents_for_free"
                  className="mpdf-cta-btn mpdf-cta-btn--outline"
                >
                  Browse All PDF Tools →
                </a>
              </div>

              <div className="mpdf-final-features">
                {['Unlimited files', '0% quality loss', 'No watermark', 'Auto-deleted in 60 min', 'Works on mobile', 'Commercial use OK'].map(f => (
                  <span key={f} className="mpdf-final-feature">✓ {f}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ────────────────────────────────────── */}
        <section className="mpdf-related" aria-labelledby="related-title">
          <div className="mpdf-container">
            <h2 id="related-title" className="mpdf-related-h2">More Free PDF Tools from Scenith</h2>
            <div className="mpdf-related-grid">
              {RELATED_TOOLS.map((tool) => (
                <a key={tool.name} href={tool.href} className="mpdf-related-card">
                  <span className="mpdf-related-icon" aria-hidden="true">{tool.emoji}</span>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}