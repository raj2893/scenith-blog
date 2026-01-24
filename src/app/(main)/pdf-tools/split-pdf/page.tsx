import type { Metadata } from "next";
import SplitPdfClient from "./SplitPdfClient";

export const metadata: Metadata = {
  title: 'Split PDF Online Free - Extract Pages from PDF | SCENITH',
  description: 'Split PDF files into multiple documents or extract specific pages for free. Choose page ranges, split all pages, or create custom splits. Fast, secure, and unlimited.',
  keywords: [
    'split PDF online',
    'extract PDF pages',
    'PDF splitter free',
    'divide PDF',
    'separate PDF pages',
    'PDF page extractor',
    'split PDF by pages',
    'free PDF split tool',
    'break PDF into parts',
    'PDF separator'
  ],
  openGraph: {
    title: 'Split PDF Free - Extract Pages & Divide PDF Documents Online',
    description: 'Split any PDF into multiple files or extract specific pages. Define custom page ranges, split all pages separately, or create multiple documents. Free and secure.',
    type: 'website',
  },
  alternates: {
    canonical: '/pdf-tools/split-pdf',
  },
};

export default function SplitPdfPage() {
  return <SplitPdfClient />;
}