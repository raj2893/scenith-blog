import type { Metadata } from "next";
import ExtractPagesClient from "./ExtractPagesClient";

export const metadata: Metadata = {
  title: "Extract Pages from PDF File Free Online | No Registration Required",
  description:
    "Extract specific pages from any PDF file instantly. Select page numbers, custom ranges, or individual pages and download as separate PDF files. Free, fast, and secure — no software needed.",
  keywords: [
    "extract pages from pdf",
    "extract pages from pdf file",
    "pull pages from pdf",
    "remove pages from pdf",
    "pdf page extractor",
    "extract specific pages pdf",
    "save certain pages from pdf",
    "export pages from pdf",
    "pdf page extraction tool",
    "how to extract pages from pdf",
    "extract single page from pdf",
    "get pages out of pdf",
    "separate pages from pdf",
    "pdf page remover",
    "online pdf page extractor free",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/pdf-tools/extract-pages-from-pdf-file",
  },
  openGraph: {
    title: "Extract Pages from PDF File Free Online | SCENITH",
    description:
      "Need just a few pages from a massive PDF? Use SCENITH's free PDF page extractor to pull out any page or range of pages instantly — no signup, no software.",
    url: "https://scenith.in/tools/pdf-tools/extract-pages-from-pdf-file",
    siteName: "SCENITH",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/extract-pages-from-pdf.png",
        width: 1200,
        height: 630,
        alt: "Extract Pages from PDF - SCENITH Free Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extract Pages from PDF File Free Online | SCENITH",
    description:
      "Pull out any page or page range from a PDF file in seconds. Free online tool — no download or signup needed.",
    images: ["https://scenith.in/og/extract-pages-from-pdf.png"],
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

export default function ExtractPagesFromPdfPage() {
  return <ExtractPagesClient />;
}