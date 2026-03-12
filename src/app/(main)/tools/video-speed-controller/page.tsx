import type { Metadata } from 'next';
import VideoSpeedControllerClient from './VideoSpeedControllerClient';

export const metadata: Metadata = {
  title: 'Video Speed Controller – Slow Down or Speed Up Any Video Free | Scenith',
  description:
    'Free online video speed controller to slow down or speed up any video from 0.1x to 16x. No software install needed. Supports MP4, MOV, AVI, MKV. Instant playback speed control for creators, students & professionals.',
  keywords: [
    'video speed controller',
    'slow down video online',
    'speed up video online',
    'video playback speed changer',
    'change video speed free',
    'slow motion video maker',
    'timelapse video creator',
    'video speed changer no watermark',
    'online video speed editor',
    'adjust video speed',
    'mp4 speed changer',
    'video speed controller chrome extension alternative',
    'slow motion video online free',
    'fast forward video online',
  ].join(', '),
  openGraph: {
    title: 'Video Speed Controller – Adjust Any Video Speed from 0.1x to 16x Free',
    description:
      'Control your video playback speed precisely. Slow motion, timelapse, 2x speed — all free, no install, instant MP4 download.',
    url: 'https://scenith.in/tools/video-speed-controller',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Video Speed Controller – Free Online Tool',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Speed Controller – Free Online | Scenith',
    description: 'Slow down or speed up any video instantly. 0.1x to 16x. Free MP4 download, no watermark.',
    images: ['https://scenith.in/images/VideoSpeedModifierSS.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/video-speed-controller',
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

export default function VideoSpeedControllerPage() {
  return <VideoSpeedControllerClient />;
}