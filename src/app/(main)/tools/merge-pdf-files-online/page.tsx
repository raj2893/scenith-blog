import type { Metadata } from "next";
import MergePdfFilesClient from "./MergePdfFilesClient";

export const metadata: Metadata = {
  title: "Merge PDF Files Online Free – Combine PDFs in Seconds | SCENITH",
  description:
    "Merge PDF files online for free — no signup, no watermarks, no limits. Combine multiple PDFs into one document instantly with drag-and-drop reordering. Perfect for students, professionals, and teams worldwide.",

  keywords: [
    "merge pdf files online",
    "combine pdf files free",
    "merge pdf online free",
    "pdf merger online",
    "join pdf files",
    "combine multiple pdfs",
    "free pdf combiner",
    "merge pdf without watermark",
    "online pdf merge tool",
    "pdf joiner",
  ].join(", "),

  openGraph: {
    title: "Merge PDF Files Online Free – Combine Multiple PDFs Instantly",
    description:
      "Combine unlimited PDF files into one with drag-and-drop simplicity. Free, secure, no watermarks. Used by students and professionals across 50+ countries.",
    type: "website",
    url: "https://scenith.in/tools/merge-pdf-files-online",
    siteName: "SCENITH",
    images: [
      {
        url: "https://scenith.in/og/merge-pdf-files-online.png",
        width: 1200,
        height: 630,
        alt: "Merge PDF Files Online Free – SCENITH PDF Merger",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Files Online Free | SCENITH",
    description:
      "Combine multiple PDFs into one file for free. No signup, no watermarks, instant download.",
    creator: "@scenith_1902",
    images: ["https://scenith.in/og/merge-pdf-files-online.png"],
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
    canonical: "https://scenith.in/tools/merge-pdf-files-online",
    languages: {
      "en-US": "https://scenith.in/tools/merge-pdf-files-online",
      "en-GB": "https://scenith.in/tools/merge-pdf-files-online",
    },
  },

  other: {
    "article:modified_time": new Date().toISOString(),
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SCENITH – Merge PDF",
  },
  manifest: "/manifest.json",
};

export default function MergePdfFilesOnlinePage() {
  return <MergePdfFilesClient />;
}