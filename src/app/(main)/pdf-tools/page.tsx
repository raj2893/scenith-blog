import type { Metadata } from "next";
import PDFToolsPage from "./PDFToolsPage";

export const metadata: Metadata = {
  title: 'Free PDF Tools Online - Merge, Split, Compress & Convert PDFs Instantly | SCENITH',
  description: 'Professional PDF tools 100% free. Merge PDFs, split pages, compress files up to 80%, rotate, convert, add watermarks, lock/unlock PDFs. No signup, no watermarks, unlimited use.',
  keywords: [
    'PDF tools online free',
    'merge PDF online',
    'split PDF free',
    'compress PDF without losing quality',
    'PDF converter online',
    'free PDF editor',
    'PDF to images converter',
    'images to PDF',
    'rotate PDF online',
    'lock PDF with password',
    'unlock PDF',
    'add watermark to PDF',
    'online PDF manipulation',
    'best free PDF tools',
    'PDF software alternative'
  ],
  openGraph: {
    title: 'Free PDF Tools Online - Professional PDF Editor & Converter',
    description: 'All-in-one PDF toolkit. Merge, split, compress, rotate, and convert PDFs for free. Secure, fast processing with no file size limits. Perfect for students, professionals, and businesses.',
    type: 'website',
    images: [
      {
        url: '/images/og-pdf-tools-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'SCENITH PDF Tools - Free Online PDF Editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Tools - Merge, Split, Compress PDFs Online',
    description: 'Professional PDF tools for free. Process unlimited PDFs securely with our fast online editor. No signup needed!',
    images: ['/images/twitter-card-pdf-tools.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/pdf-tools',
  },
};

export default function PDFTools() {
  return <PDFToolsPage />;
}