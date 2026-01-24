import type { Metadata } from "next";
import MergePdfClient from "./MergePdfClient";

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free - Combine Multiple PDFs into One | SCENITH',
  description: 'Merge multiple PDF files into one document for free. Combine PDFs in any order, rearrange pages, and download instantly. Fast, secure, and unlimited merges.',
  keywords: [
    'merge PDF online',
    'combine PDF files',
    'join PDFs',
    'PDF merger free',
    'merge PDF documents',
    'combine multiple PDFs',
    'PDF joiner',
    'merge PDF pages',
    'free PDF merge tool',
    'online PDF combiner'
  ],
  openGraph: {
    title: 'Merge PDF Online Free - Combine Multiple PDF Files Instantly',
    description: 'Easily merge multiple PDFs into one. Drag and drop to rearrange pages, combine unlimited files, and download your merged PDF instantly. 100% free and secure.',
    type: 'website',
  },
  alternates: {
    canonical: '/pdf-tools/merge-pdf',
  },
};

export default function MergePdfPage() {
  return <MergePdfClient />;
}