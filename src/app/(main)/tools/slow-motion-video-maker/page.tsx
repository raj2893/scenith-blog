import type { Metadata } from 'next';
import SlowMotionPage from './SlowMotionClient';

export const metadata: Metadata = {
  title: 'Free Slow Motion Video Maker Online — No Install, No Watermark (2026)',
  description:
    'Create stunning slow motion videos online for free. Reduce video speed to 0.5x, 0.25x, or any custom rate. Perfect for Instagram Reels, TikTok, YouTube Shorts & cinematic film. No software download needed.',
  keywords: [
    'slow motion video maker',
    'slow motion video maker online free',
    'make slow motion video',
    'slow mo video editor',
    'slow motion video creator',
    'slow motion effect online',
    'slow down video online',
    'free slow motion maker',
    'slow motion video without app',
    'slow motion for instagram reels',
    'slow motion for tiktok',
    'slow motion youtube shorts',
    '0.5x speed video',
    'cinematic slow motion',
    'slow motion video 2026',
    'video speed reducer online',
    'half speed video maker',
    'slow motion mp4',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/slow-motion-video-maker',
  },
  openGraph: {
    title: 'Free Slow Motion Video Maker Online — Scenith',
    description:
      'Create cinematic slow motion effects instantly. No download, no watermark. Used by 30,000+ creators for Instagram, TikTok & YouTube.',
    url: 'https://scenith.in/tools/slow-motion-video-maker',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/slow-motion-og.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Free Slow Motion Video Maker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Slow Motion Video Maker Online — Scenith',
    description:
      'Create cinematic slow motion effects instantly. No software needed. Free MP4 download.',
    images: ['https://scenith.in/images/slow-motion-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SlowMotionVideoMakerPage() {
  return <SlowMotionPage />;
}