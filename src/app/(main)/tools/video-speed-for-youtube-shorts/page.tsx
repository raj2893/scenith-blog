// app/tools/video-speed-for-youtube-shorts/page.tsx

import type { Metadata } from 'next';
import VideoSpeedYouTubeShortsClient from './VideoSpeedYouTubeShortsClient';

export const metadata: Metadata = {
  title: 'Video Speed Editor for YouTube Shorts – Speed Up & Slow Down Videos Free | Scenith',
  description:
    'Adjust video speed for YouTube Shorts instantly. Speed up to 15x for time-lapses or slow down to 0.5x for cinematic effect. Free AI-powered tool — no watermark, instant MP4 download.',
  keywords: [
    'video speed editor for YouTube Shorts',
    'speed up YouTube Shorts video',
    'slow motion YouTube Shorts',
    'change video speed for Shorts',
    'free video speed changer',
    'YouTube Shorts video editor',
    'time lapse YouTube Shorts',
    'fast forward video Shorts',
    'online video speed tool',
    'speed up video free no watermark',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/video-speed-for-youtube-shorts',
  },
  openGraph: {
    title: 'Video Speed Editor for YouTube Shorts – Free & Instant | Scenith',
    description:
      'Create viral YouTube Shorts with perfect speed control. Slow-motion to time-lapse — free, no watermark, MP4 export.',
    url: 'https://scenith.in/tools/video-speed-for-youtube-shorts',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Video Speed Editor for YouTube Shorts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Video Speed Editor for YouTube Shorts | Scenith',
    description:
      'Speed up or slow down your videos for YouTube Shorts. Free tool, no watermark, instant MP4.',
    images: ['https://scenith.in/images/VideoSpeedModifierSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function VideoSpeedYouTubeShortsPage() {
  return <VideoSpeedYouTubeShortsClient />;
}