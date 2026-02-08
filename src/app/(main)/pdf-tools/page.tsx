import type { Metadata } from "next";
import PDFToolsPage from "./PDFToolsPage";

export const metadata: Metadata = {
  title: 'Free PDF Tools Online: Merge, Split & Compress (No Limits)',
  description: 'Merge, split, compress PDFs up to 80% instantly. Free online tools with NO file limits, NO watermarks. Secure, fast processing for students & professionals.',

  openGraph: {
  title: 'Free PDF Tools Online - Professional PDF Editor & Converter',
  description: 'All-in-one PDF toolkit. Merge, split, compress, rotate, and convert PDFs for free. Secure, fast processing with no file size limits. Perfect for students, professionals, and businesses.',
  type: 'website',
  url: 'https://scenith.in/pdf-tools',
  // images: [] // Removed until images are created
  },
    twitter: {
      card: 'summary_large_image',
      title: 'Free PDF Tools - Merge, Split, Compress PDFs Online',
      description: 'Professional PDF tools for free. Process unlimited PDFs securely with our fast online editor. No signup needed!',
      creator: '@scenith_1902',
    },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
  canonical: 'https://scenith.in/pdf-tools',
  languages: {
    'en-US': 'https://scenith.in/pdf-tools',
  },
},
other: {
  'article:modified_time': '2025-02-08T00:00:00Z',
},
viewport: 'width=device-width, initial-scale=1',
themeColor: '#3b82f6', // PDF blue theme
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