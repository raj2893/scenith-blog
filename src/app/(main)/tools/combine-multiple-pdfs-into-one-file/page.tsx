import type { Metadata } from "next";
import CombineMultiplePdfsClient from "./CombineMultiplePdfsClient";

export const metadata: Metadata = {
  title: "Combine Multiple PDFs Into One File Free – No Limits | SCENITH",
  description:
    "Combine multiple PDF files into one single document online for free. No watermarks, no file limits, no software to install. Merge unlimited PDFs instantly with page-level control. Trusted by 3.8M+ users worldwide.",

  keywords: [
    "combine multiple pdfs into one",
    "combine multiple pdf files into one",
    "combine pdfs into one file",
    "merge multiple pdf into one",
    "how to combine pdf files into one",
    "combine pdf files into one document",
    "join multiple pdfs into one",
    "combine pdf pages into one file",
    "pdf combiner online free",
    "combine pdf without adobe",
  ].join(", "),

  openGraph: {
    title: "Combine Multiple PDFs Into One File – Free & Instant | SCENITH",
    description:
      "Stop juggling separate PDF files. Combine them all into one polished document with drag-and-drop reordering, page-level control, and zero watermarks. 100% free.",
    type: "website",
    url: "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
    siteName: "SCENITH",
    images: [
      {
        url: "https://scenith.in/og/combine-multiple-pdfs-into-one-file.png",
        width: 1200,
        height: 630,
        alt: "Combine Multiple PDFs Into One File – SCENITH",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Combine Multiple PDFs Into One File Free | SCENITH",
    description:
      "Free online PDF combiner. Merge unlimited PDFs into one file with no watermarks, no limits, instant download.",
    creator: "@scenith_1902",
    images: ["https://scenith.in/og/combine-multiple-pdfs-into-one-file.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
    languages: {
      "en-US": "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
      "en-GB": "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
      "en-AU": "https://scenith.in/tools/combine-multiple-pdfs-into-one-file",
    },
  },

  other: {
    "article:modified_time": new Date().toISOString(),
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SCENITH – Combine PDFs",
  },
  manifest: "/manifest.json",
};

export default function CombineMultiplePdfsPage() {
  return <CombineMultiplePdfsClient />;
}