import type { Metadata } from 'next';
import CleanBackgroundRemoverClient from './CleanBackgroundRemoverClient';

export const metadata: Metadata = {
  title: 'Background Remover for Clean Backgrounds – Free AI Tool | Scenith',
  description:
    'Get perfectly clean white, transparent, or custom-colour backgrounds from any photo in 5 seconds. Free AI background remover — no watermark, no signup, full commercial rights.',
  keywords: [
    'background remover for clean backgrounds',
    'clean white background photo',
    'remove background get white background',
    'transparent background maker free',
    'clean background photo editor online',
    'white background generator AI',
    'make background white free',
    'clean background for photos',
    'background cleaner online free',
    'pure white background photo tool',
    'remove messy background from photo',
    'AI clean background maker',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/background-remover-for-clean-backgrounds',
  },
  openGraph: {
    title: 'Background Remover for Clean Backgrounds – Free AI Tool | Scenith',
    description:
      'Transform any cluttered, distracting background into a clean white, grey, or transparent canvas. Free AI tool — results in 5 seconds, zero watermarks.',
    url: 'https://scenith.in/tools/background-remover-for-clean-backgrounds',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/REMOVEBGSS.png',
        width: 1200,
        height: 630,
        alt: 'Before and after — cluttered background replaced with clean white using Scenith AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Background Remover for Clean Backgrounds – Free AI Tool | Scenith',
    description:
      'AI background remover that delivers perfectly clean, distraction-free backgrounds. Free, instant, no watermark.',
    images: ['https://scenith.in/images/REMOVEBGSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function CleanBackgroundRemoverPage() {
  return <CleanBackgroundRemoverClient />;
}