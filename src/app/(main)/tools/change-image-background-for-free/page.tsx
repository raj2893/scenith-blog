import type { Metadata } from 'next';
import ChangeImageBackgroundClient from './ChangeImageBackgroundClient';

export const metadata: Metadata = {
  title: 'Change Image Background for Free | AI Background Changer Online — Scenith',
  description:
    'Change image background for free in seconds using AI. Replace, swap, or remove photo backgrounds online without Photoshop. Perfect for e-commerce, social media & design. No signup required.',
  keywords: [
    'change image background for free',
    'change background of image',
    'change photo background online free',
    'replace image background',
    'swap background in photo',
    'background changer online',
    'change background color of image',
    'ai background changer',
    'free background changer',
    'change background without photoshop',
    'online background replacer',
    'product photo background change',
    'transparent background changer',
    'change image background to white',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/change-image-background-for-free',
  },
  openGraph: {
    title: 'Change Image Background for Free — AI Background Changer | Scenith',
    description:
      'Instantly change, replace or swap your image background online for free. AI-powered tool — no Photoshop, no watermark, no signup. Results in 5 seconds.',
    url: 'https://scenith.in/tools/change-image-background-for-free',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/change-bg-og.png',
        width: 1200,
        height: 630,
        alt: 'Change image background for free using Scenith AI — before and after example',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Image Background for Free — AI Powered | Scenith',
    description:
      'Swap, replace or remove image backgrounds in 5 seconds. Free AI background changer — no Photoshop needed.',
    images: ['https://scenith.in/images/change-bg-og.png'],
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

export default function ChangeImageBackgroundPage() {
  return <ChangeImageBackgroundClient />;
}