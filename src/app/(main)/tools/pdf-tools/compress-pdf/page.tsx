import type { Metadata } from "next";
import CompressPdfClient from "./CompressPdfClient";

export const metadata: Metadata = {
  title: 'Compress PDF Online Free – Reduce PDF Size Up to 90% | SCENITH',
  description: 'Free online PDF compressor. Reduce PDF file size by up to 90% while maintaining quality. Choose low, medium, or high compression — no signup, no watermarks, no file size limits.',
  keywords: [
    'compress PDF online free',
    'reduce PDF file size',
    'PDF compressor free',
    'shrink PDF online',
    'make PDF smaller online',
    'PDF file size reducer',
    'compress PDF without losing quality',
    'free PDF compression tool',
    'optimize PDF size online',
    'PDF optimizer free',
    'smallpdf compress alternative',
    'ilovepdf compress alternative',
    'reduce PDF size for email',
    'compress large PDF free',
    'online PDF compressor no signup'
  ],
  openGraph: {
    title: 'Compress PDF Free – Reduce PDF File Size Up to 90% | SCENITH',
    description: 'Free online PDF compressor. Reduce file size by up to 90% while maintaining quality. No signup, no watermarks, no file size limits.',
    type: 'website',
    url: 'https://scenith.in/tools/pdf-tools/compress-pdf',
    images: [{
      url: 'https://scenith.in/images/compress-pdf-screenshot.png',
      width: 1200,
      height: 630,
      alt: 'SCENITH Free PDF Compressor Tool',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PDF Free – Reduce PDF Size Up to 90%',
    description: 'Reduce PDF file sizes by up to 90% while maintaining quality. Free, no signup required.',
    images: ['https://scenith.in/images/compress-pdf-screenshot.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/pdf-tools/compress-pdf',
  },
  other: {
    'article:published_time': '2026-02-23T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
  },
};

export const compressPdfStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Compress a PDF Online for Free",
      "description": "Reduce your PDF file size in seconds using SCENITH's free online PDF compressor.",
      "step": [
        { "@type": "HowToStep", "name": "Upload your PDF", "text": "Click the upload area or drag and drop your PDF file into the browser." },
        { "@type": "HowToStep", "name": "Choose compression level", "text": "Select Low (25–50% reduction), Medium (50–75%), or High (75–90%) compression." },
        { "@type": "HowToStep", "name": "Process and download", "text": "Click 'Process Compress PDF' and download your compressed file instantly." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I compress a PDF file for free without losing quality?",
          "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to SCENITH's free PDF compressor, select 'Low Compression' for maximum quality preservation (25–50% size reduction), and download. Text remains fully searchable and images stay high-resolution. No signup required." }
        },
        {
          "@type": "Question",
          "name": "What is the best free alternative to Smallpdf for compressing PDFs?",
          "acceptedAnswer": { "@type": "Answer", "text": "SCENITH's PDF compressor offers the same compression results as Smallpdf but with no daily limits, no watermarks, no signup, and no file size restrictions — completely free." }
        },
        {
          "@type": "Question",
          "name": "Will compressing a PDF reduce its quality?",
          "acceptedAnswer": { "@type": "Answer", "text": "It depends on the compression level. Low compression maintains near-original quality. Medium balances size and quality for screen viewing. High compression creates the smallest file while keeping text readable. All levels preserve searchable text." }
        },
        {
          "@type": "Question",
          "name": "How much can I reduce a PDF file size?",
          "acceptedAnswer": { "@type": "Answer", "text": "SCENITH can reduce PDF file sizes by up to 90%. For example: a 100MB file can become ~25MB at low compression, ~12MB at medium, or ~10MB at high compression." }
        },
        {
          "@type": "Question",
          "name": "Is it safe to compress PDFs online?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. SCENITH uses 256-bit SSL encryption for all transfers. Files are processed in isolated secure containers and automatically deleted immediately after download. We never store or share your documents." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scenith.in" },
        { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://scenith.in/tools" },
        { "@type": "ListItem", "position": 3, "name": "PDF Tools", "item": "https://scenith.in/tools/pdf-tools" },
        { "@type": "ListItem", "position": 4, "name": "Compress PDF", "item": "https://scenith.in/tools/pdf-tools/compress-pdf" }
      ]
    }
  ]
};

export default function CompressPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compressPdfStructuredData) }}
      />
      <CompressPdfClient />
    </>
  );
}