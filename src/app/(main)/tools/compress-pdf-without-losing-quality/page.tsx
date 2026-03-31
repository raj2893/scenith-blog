import type { Metadata } from "next";
import Link from "next/link";
import CompressPdfPageClient from "./CompressPdfPageClient";

export const metadata: Metadata = {
  title: "Compress PDF Without Losing Quality — Free Online PDF Compressor 2026",
  description:
    "Compress PDF files without losing quality. Reduce PDF size by up to 90% instantly — no watermarks, no sign-up required for preview. Supports scanned PDFs, image-heavy files, and presentations. Trusted by 50,000+ users.",
  keywords: [
    "compress pdf without losing quality",
    "reduce pdf file size",
    "compress pdf online free",
    "shrink pdf size",
    "pdf compressor",
    "compress pdf to 100kb",
    "compress pdf to 200kb",
    "compress pdf for email",
    "compress scanned pdf",
    "reduce pdf size without losing quality",
    "best pdf compressor 2026",
    "compress pdf file",
    "pdf file size reducer",
    "compress pdf online",
    "free pdf compressor",
    "compress large pdf",
    "compress pdf mac",
    "compress pdf windows",
    "compress pdf for upload",
    "high quality pdf compression",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/compress-pdf-without-losing-quality",
  },
  openGraph: {
    title: "Compress PDF Without Losing Quality — Scenith PDF Tools",
    description:
      "Reduce PDF file size by up to 90% without sacrificing quality. Free, fast, and secure. No watermarks added.",
    url: "https://scenith.in/tools/compress-pdf-without-losing-quality",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/compress-pdf.png",
        width: 1200,
        height: 630,
        alt: "Compress PDF Without Losing Quality — Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Without Losing Quality — Free Online Tool",
    description:
      "Reduce PDF file size by up to 90%. No watermarks, no sign-up. Try Scenith's free PDF compressor now.",
    images: ["https://scenith.in/og/compress-pdf.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/compress-pdf-without-losing-quality",
      url: "https://scenith.in/tools/compress-pdf-without-losing-quality",
      name: "Compress PDF Without Losing Quality — Free Online PDF Compressor 2026",
      description:
        "Compress PDF files online without losing quality. Reduce file size by up to 90% in seconds.",
      isPartOf: {
        "@id": "https://scenith.in",
      },
      breadcrumb: {
        "@id":
          "https://scenith.in/tools/compress-pdf-without-losing-quality#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://scenith.in/tools/compress-pdf-without-losing-quality#breadcrumb",
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
          name: "Tools",
          item: "https://scenith.in/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Compress PDF",
          item: "https://scenith.in/tools/compress-pdf-without-losing-quality",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith PDF Compressor",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3847",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I compress a PDF without losing quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith uses smart lossless and near-lossless compression algorithms that remove redundant metadata, optimize embedded images at perceptually optimal quality levels, and strip unnecessary font subsets — all while preserving the visual fidelity of your document.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I reduce a PDF file size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical reductions range from 40% to 90% depending on the content of your PDF. Image-heavy PDFs and scanned documents usually compress the most. Text-only PDFs with few images may see smaller gains.",
          },
        },
        {
          "@type": "Question",
          name: "Is my PDF file safe when I upload it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All uploaded files are processed over HTTPS on secure servers. Files are automatically deleted from our servers within 1 hour of processing. We never read, share, or sell your file data.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum PDF file size I can compress?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can compress PDFs up to 500 MB with a free account on Scenith. For files larger than 500 MB, consider splitting your PDF first using our Split PDF tool.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenith add a watermark to compressed PDFs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Scenith never adds any watermarks to your output files. What you download is a clean, watermark-free compressed PDF.",
          },
        },
      ],
    },
  ],
};

export default function CompressPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompressPdfPageClient />
    </>
  );
}