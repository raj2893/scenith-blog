// app/remove-background/page.tsx (Server Component)
import type { Metadata } from "next";
import RemoveBackgroundClient from './RemoveBackgroundClient';

export const metadata: Metadata = {
  title: 'FREE AI Background Removal - Remove BG with a Single Click | SCENITH',
  description: 'Remove image backgrounds instantly with AI for free. Perfect for e-commerce product photos, social media posts & professional designs. Upload JPG/PNG, get transparent backgrounds - no signup required!',
  keywords: [
    'AI background remover',
    'free background remover', 
    'remove image background',
    'photo editor online',
    'transparent background',
    'product photos',
    'e-commerce images',
    'social media graphics',
    'PNG maker',
    'cutout tool',
    'photo editing'
  ],
  openGraph: {
    title: 'Free AI Background Remover - Instant Transparent Images',
    description: 'Remove backgrounds from photos in seconds with our AI tool. Perfect for product images, social posts & design. Free, no watermarks!',
    type: 'website',
    images: [
      {
        url: '/images/og-background-remover-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Background Remover Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Background Remover - Remove Photo Backgrounds Instantly',
    description: 'AI-powered background removal for e-commerce, social media & design. Free tool with transparent PNG downloads.',
    images: ['/images/twitter-card-bg-remover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/remove-background',
  },
};

export default function RemoveBackgroundPage() {
  return <RemoveBackgroundClient />;
}