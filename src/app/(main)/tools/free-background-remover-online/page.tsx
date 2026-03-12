import type { Metadata } from 'next';
import FreeBackgroundRemoverClient from './FreeBackgroundRemoverClient';

export const metadata: Metadata = {
  title: 'Free Background Remover Online – Remove Image Background Instantly | Scenith',
  description:
    'Remove image backgrounds online for free in 1 click. No Photoshop, no signup needed. Get a transparent PNG in under 5 seconds. Trusted by 50,000+ designers, sellers & creators worldwide.',
  keywords: [
    'free background remover online',
    'remove image background free',
    'background remover no signup',
    'transparent background maker',
    'remove bg free',
    'online photo background eraser',
    'AI background remover 2026',
    'free png background remover',
    'remove background from photo',
    'background remove tool free',
    'no watermark background remover',
    'ecommerce product photo background remove',
    'free background eraser online',
    'transparent PNG creator',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/free-background-remover-online',
  },
  openGraph: {
    title: 'Free Background Remover Online – Instant Transparent PNG | Scenith',
    description:
      'Remove backgrounds from any photo in 5 seconds — free, no watermark, no signup. Perfect for product photos, social media & design.',
    url: 'https://scenith.in/tools/free-background-remover-online',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/REMOVEBGSS.png',
        width: 1200,
        height: 630,
        alt: 'Free Background Remover Online – Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Background Remover Online | Scenith AI',
    description:
      'Instantly remove backgrounds from photos for free. Transparent PNG in 5 seconds. No Photoshop, no signup.',
    images: ['https://scenith.in/images/REMOVEBGSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FreeBackgroundRemoverPage() {
  return <FreeBackgroundRemoverClient />;
}