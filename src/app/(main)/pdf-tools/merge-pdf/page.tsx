import type { Metadata } from "next";
import MergePdfClient from "./MergePdfClient";

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free - Combine Multiple PDFs | SCENITH',
  description: 'Merge multiple PDF files into one document instantly. Free online PDF merger with drag-and-drop reordering. No file limits, no watermarks, 100% secure processing.',
  
  openGraph: {
    title: 'Merge PDF Online Free - Combine Multiple PDF Files Instantly',
    description: 'Easily merge multiple PDFs into one. Drag and drop to rearrange pages, combine unlimited files, and download your merged PDF instantly. 100% free and secure.',
    type: 'website',
    url: 'https://scenith.in/pdf-tools/merge-pdf',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Online Free - Combine PDFs Instantly',
    description: 'Free PDF merger with unlimited file combining. No signup, no watermarks, instant download.',
    creator: '@scenith_1902',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://scenith.in/pdf-tools/merge-pdf',
    languages: {
      'en-US': 'https://scenith.in/pdf-tools/merge-pdf',
    },
  },
  
  other: {
    'article:modified_time': '2025-02-08T00:00:00Z',
  },
  
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SCENITH Merge PDF',
  },
  manifest: '/manifest.json',
};

export default function MergePdfPage() {
  return <MergePdfClient />;
}