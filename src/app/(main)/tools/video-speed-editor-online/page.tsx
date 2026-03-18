import type { Metadata } from 'next';
import VideoSpeedEditorPage from './VideoSpeedEditorClient';

export const metadata: Metadata = {
  title: 'Video Speed Editor Online – Change Video Speed Free (0.5x to 15x) | 2026',
  description:
    'Edit video speed online instantly — slow motion, fast forward, time-lapse. Adjust playback from 0.5x to 15x with no software. Works with MP4, MOV, AVI, MKV. Free tool for creators, teachers & filmmakers.',
  keywords: [
    'video speed editor online',
    'change video speed online free',
    'video speed changer online',
    'slow motion video editor online',
    'speed up video online',
    'fast forward video online free',
    'video playback speed changer',
    'time lapse video maker online',
    'slow motion video maker free',
    'online video speed controller',
    'adjust video speed without software',
    'video speed changer mp4',
    'change video speed for instagram',
    'speed up video for tiktok',
    'slow motion video for reels',
    'video speed editor no download',
    'browser video speed editor',
    'free video speed changer 2026',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/video-speed-editor-online',
  },
  openGraph: {
    title: 'Video Speed Editor Online – Slow Motion, Fast Forward & Time-Lapse Free',
    description:
      'Change video speed from 0.5x to 15x directly in your browser. Create cinematic slow motion, snappy fast-forward, or epic time-lapse — no downloads, no software, no cost.',
    url: 'https://scenith.in/tools/video-speed-editor-online',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/video-speed-editor-online-og.png',
        width: 1200,
        height: 630,
        alt: 'Video Speed Editor Online by Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Video Speed Editor – 0.5x to 15x Playback Control (2026)',
    description:
      'No downloads needed. Change video speed in your browser for slow motion, reels, TikTok, YouTube & more. Free, fast, professional quality.',
    images: ['https://scenith.in/images/video-speed-editor-online-og.png'],
    creator: '@scenith_in',
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

export default function Page() {
  return <VideoSpeedEditorPage />;
}