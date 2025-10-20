// app/adjust-aspect-ratio/page.tsx
import type { Metadata } from "next";
import AspectRatioClient from './AspectRatioClient';

export const metadata: Metadata = {
  title: 'Free AI Aspect Ratio Editor - Adjust Video Aspect Ratio Online | SCENITH',
  description: 'Easily adjust video aspect ratio, position, and scale with AI. Customize settings and download high-quality MP4s instantly. Free for creators and filmmakers.',
  keywords: [
    'AI aspect ratio editor',
    'adjust video aspect ratio',
    'free aspect ratio tool',
    'video aspect ratio editor',
    'customize video position',
    'scale video online',
    'free video editor',
    'video formatting tool',
    'AI video adjustment',
    'video scale editor',
    'video positioning tool',
    'online video editor',
    'professional video formatting',
    'adjust video for social media',
    'video aspect ratio changer',
  ],
  openGraph: {
    title: 'Free AI Aspect Ratio Editor - Adjust Videos in Seconds',
    description: 'Customize video aspect ratio, position, and scale with AI. Perfect for creators, with instant MP4 downloads and no watermarks.',
    type: 'website',
    images: [
      {
        url: '/images/og-aspect-ratio-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Aspect Ratio Editor Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Aspect Ratio Editor - Adjust Videos',
    description: 'Easily adjust and customize video aspect ratio, position, and scale with AI. Download high-quality MP4s instantly!',
    images: ['/images/twitter-card-aspect-ratio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/adjust-aspect-ratio',
  },
};

export default function AspectRatioPage() {
  return <AspectRatioClient />;
}