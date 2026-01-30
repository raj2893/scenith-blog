// app/remove-background/page.tsx (Server Component)
import type { Metadata } from "next";
import RemoveBackgroundClient from './RemoveBackgroundClient';

export const metadata: Metadata = {
  title: 'Free AI Background Remover – Remove Photo Backgrounds Online (5 Seconds) | Scenith',
  description: 'Remove backgrounds from images instantly with AI for free. Convert JPG/PNG to transparent backgrounds in 5 seconds. Perfect for e-commerce, social media & design - no signup required!',
  keywords: [
    'AI background remover',
    'free background removal',
    'remove image background',
    'transparent background maker',
    'background eraser online',
    'product photo editor',
    'cutout tool free',
    'remove bg from image',
    'photo background removal',
    'e-commerce image editor',
    'PNG transparent maker',
    'background removal tool',
    'online background remover',
    'photo cutout maker',
    'white background remover'
  ],
  openGraph: {
    title: 'AI Background Remover for E-commerce & Design - Remove BG in 5 Seconds',
    description: 'Remove backgrounds from photos instantly with AI. Free tool for creating transparent images from JPG/PNG. Perfect for product photos, social media & professional design.',
    type: 'website',
    url: 'https://scenith.in/tools/background-removal',
    images: [
      {
        url: '/images/og-background-remover-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Background Remover Tool - Before and After Examples',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Background Remover - Transparent Images in 5 Seconds',
    description: 'AI-powered background removal for e-commerce & design. Remove photo backgrounds instantly - download transparent PNG free!',
    images: ['/images/twitter-card-bg-remover.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/background-removal',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a73e8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith BG Remover',
  },
  manifest: '/manifest.json',
};

export default function RemoveBackgroundPage() {
  return <RemoveBackgroundClient />;
}