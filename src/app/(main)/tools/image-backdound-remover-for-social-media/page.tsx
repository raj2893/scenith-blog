import type { Metadata } from 'next';
import SocialMediaBGRemoverClient from './SocialMediaBGRemoverClient';

export const metadata: Metadata = {
  title: 'Image Background Remover for Social Media – Free AI Tool | Scenith',
  description:
    'Remove image backgrounds instantly for Instagram, TikTok, Facebook & LinkedIn posts. Free AI tool — transparent PNGs in 5 seconds, no watermark, no signup required.',
  keywords: [
    'image background remover for social media',
    'remove background instagram photo',
    'background remover tiktok',
    'transparent background social media post',
    'free background remover instagram',
    'AI background remover social media',
    'remove background facebook cover photo',
    'LinkedIn profile picture background remover',
    'social media content background removal',
    'background eraser for reels',
    'remove background youtube thumbnail',
    'background remover for stories',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/image-backdound-remover-for-social-media',
  },
  openGraph: {
    title: 'Image Background Remover for Social Media – Free AI Tool | Scenith',
    description:
      'Create scroll-stopping social media content with transparent backgrounds. Free AI tool for Instagram, TikTok, Facebook, LinkedIn & YouTube. No watermark.',
    url: 'https://scenith.in/tools/image-backdound-remover-for-social-media',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/REMOVEBGSS.png',
        width: 1200,
        height: 630,
        alt: 'Social media background removal example — before and after using Scenith AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Background Remover for Social Media – Free AI Tool | Scenith',
    description:
      'AI background remover built for social media creators. Free, instant, zero watermarks. Perfect for Instagram, TikTok & LinkedIn.',
    images: ['https://scenith.in/images/REMOVEBGSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function SocialMediaBGRemoverPage() {
  return <SocialMediaBGRemoverClient />;
}