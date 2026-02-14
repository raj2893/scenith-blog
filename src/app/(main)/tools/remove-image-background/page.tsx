// app/tools/remove-image-background/page.tsx
import type { Metadata } from 'next';
import RemoveImageBackgroundClient from './RemoveImageBackgroundClient';

export const metadata: Metadata = {
  title: 'Remove Image Background Free Online – AI-Powered Cutout Tool | Scenith',
  description:
    'Remove image backgrounds instantly with AI. Get clean, transparent PNG cutouts from any photo in seconds. No Photoshop needed – 100% free, no watermarks, commercial use OK.',
  keywords: [
    'remove image background',
    'image background remover',
    'remove background from image',
    'image cutout tool',
    'AI image background remover',
    'transparent image maker',
    'photo cutout online',
    'remove background online free',
    'image eraser background',
    'PNG cutout maker',
    'background delete tool',
    'automatic image cutout',
    'remove white background from image',
    'photo background eraser free',
    'product image background remover',
    'cut out image background',
    'image isolation tool',
    'subject cutout AI',
    'background separator online',
    'transparent PNG from photo',
    'free image background eraser',
    'smart background remover',
    'AI photo cutout tool',
    'remove.bg free alternative',
    'image background cleaner',
    'online photo eraser tool',
    'clipping mask online',
    'silhouette maker online',
    'background wipe tool',
  ],
  openGraph: {
    title: 'Remove Image Background Free – AI Cutout Tool in Seconds | Scenith',
    description:
      'Cut out subjects from any image instantly using AI. Transparent PNG output, no watermarks. Perfect for product photos, design, social media.',
    type: 'website',
    url: 'https://scenith.in/tools/remove-image-background',
    images: [
      {
        url: '/images/og-remove-image-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Remove Image Background Tool – AI-powered transparent PNG output',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Image Background Free – AI Cutout in Seconds',
    description:
      'AI-powered image cutout tool. Remove backgrounds from any photo – free, no watermarks, instant transparent PNG download.',
    images: ['/images/twitter-remove-image-background.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/remove-image-background',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a73e8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith Image Cutout',
  },
  manifest: '/manifest.json',
};

export default function RemoveImageBackgroundPage() {
  return <RemoveImageBackgroundClient />;
}