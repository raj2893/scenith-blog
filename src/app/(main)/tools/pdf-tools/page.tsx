import type { Metadata } from "next";
import PDFToolsPage from "./PDFToolsPage";

export const metadata: Metadata = {
  title: 'Free PDF Tools Online: Merge, Split, Compress PDF (No Limits, No Watermarks)',
  description: 'Free online PDF tools to merge, split, compress, rotate, convert, watermark and password-protect PDFs. No file size limits, no watermarks, no signup required. Processes in seconds.',
  keywords: [
    'free PDF tools online',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'PDF to images',
    'images to PDF',
    'rotate PDF',
    'password protect PDF',
    'unlock PDF',
    'add watermark PDF',
    'online PDF editor',
    'PDF converter',
    'reduce PDF size',
    'combine PDF files',
    'PDF compressor',
    'free PDF merger',
    'PDF splitter online',
    'PDF tools no watermark',
    'PDF tools no signup',
    'smallpdf alternative free',
    'ilovepdf alternative',
  ],
  openGraph: {
    title: 'Free PDF Tools Online – Merge, Split, Compress PDFs (No Limits)',
    description: 'All-in-one PDF toolkit: merge, split, compress, rotate, convert, watermark & password-protect PDFs. No file size limits, no watermarks, no signup needed.',
    type: 'website',
    url: 'https://scenith.in/tools/pdf-tools',
    images: [
      {
        url: 'https://scenith.in/images/pdf-tools-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'SCENITH Free PDF Tools – Merge, Split, Compress PDFs Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Tools – Merge, Split, Compress PDFs Online (No Watermarks)',
    description: 'Professional PDF tools 100% free. No file limits, no watermarks, no signup. Process PDFs in seconds from any device.',
    images: ['https://scenith.in/images/pdf-tools-screenshot.png'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/pdf-tools',
    languages: {
      'en-US': 'https://scenith.in/tools/pdf-tools',
    },
  },
  other: {
    'article:published_time': '2025-01-01T00:00:00Z',
    'article:modified_time': '2025-02-08T00:00:00Z',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SCENITH PDF Tools',
  },
  manifest: '/manifest.json',
};

export default function PDFTools() {
  return <PDFToolsPage />;
}