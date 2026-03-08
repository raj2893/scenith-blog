import type { Metadata } from 'next';
import FreeOnlineImageBackgroundRemoverClient from './FreeOnlineImageBackgroundRemoverClient';

export const metadata: Metadata = {
  title: 'Free Online Image Background Remover | Remove BG Instantly — Scenith',
  description:
    'Remove image background free online in seconds. No watermark, no Photoshop. AI-powered background remover works on product photos, portraits, logos & more. 100% free forever.',
  keywords: [
    'free online image background remover',
    'remove background from image free',
    'remove bg online free',
    'background remover no watermark',
    'remove background from photo online',
    'free background remover tool',
    'image background eraser online free',
    'transparent background maker free',
    'remove white background from image',
    'cut out background from photo free',
    'online background remover no signup',
    'remove background free without photoshop',
    'best free background remover online',
    'ai background remover free',
    'remove background from product photo free',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/free-online-image-background-remover',
  },
  openGraph: {
    title: 'Free Online Image Background Remover — No Signup, No Watermark | Scenith',
    description:
      'Remove image backgrounds free online in under 5 seconds. AI-powered, no Photoshop needed, no watermark, no signup. Perfect for e-commerce, social media & design.',
    url: 'https://scenith.in/tools/free-online-image-background-remover',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/free-bg-remover-og.png',
        width: 1200,
        height: 630,
        alt: 'Free online image background remover — before and after result by Scenith AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Image Background Remover — Instant AI Results | Scenith',
    description:
      'Remove photo backgrounds free online in 5 seconds. No watermark, no Photoshop',
    images: ['https://scenith.in/images/free-bg-remover-og.png'],
    site: '@scenith_in',
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

export default function FreeOnlineImageBackgroundRemoverPage() {
  return <FreeOnlineImageBackgroundRemoverClient />;
}