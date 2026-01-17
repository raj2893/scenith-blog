import type { Metadata } from "next";
import PDFToolsPage from "./PDFToolsPage";

export const metadata: Metadata = {
  title: 'Free PDF Tools Online - Merge, Split, Compress & Convert PDFs | SCENITH',
  description: 'Professional PDF tools online for free. Merge, split, compress, rotate, and convert PDFs instantly. Secure, fast, and easy to use - no signup required. Process unlimited PDFs with high quality.',
  keywords: [
    'PDF tools online',
    'free PDF editor',
    'merge PDF online',
    'split PDF free',
    'compress PDF',
    'PDF converter',
    'rotate PDF',
    'PDF to images',
    'images to PDF',
    'lock PDF',
    'unlock PDF',
    'PDF watermark',
    'online PDF tools',
    'PDF manipulation',
    'free PDF software'
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
    canonical: '/pdf-tools',
  },
};

export default function PDFTools() {
  return <PDFToolsPage />;
}