import type { Metadata } from "next";
import VideoSpeedClient from './VideoSpeedClient';

export const metadata: Metadata = {
  title: 'FREE AI Video Speed Editor - Adjust Video Speed Online | SCENITH',
  description: 'Adjust the playback speed of your videos instantly from 0.5x to 15x for free. Create slow-motion or time-lapse effects with ease. Perfect for creators, filmmakers, and marketers.',
  keywords: [
    'AI video speed editor',
    'free video editor',
    'video speed changer',
    'slow motion video',
    'time-lapse video',
    'video speed adjustment',
    'online video editor',
    'video speed control',
    'free video speed tool',
    'adjust video speed',
    'video editing tool',
    'free video processing',
    'video speed editor',
    'professional video speed',
  ],
  openGraph: {
    title: 'Free AI Video Speed Editor - Adjust Speed in Seconds',
    description: 'Change video playback speed effortlessly with our free online tool. Perfect for slow-motion, time-lapse, or custom-paced videos.',
    type: 'website',
    images: [
      {
        url: '/images/og-video-speed-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Video Speed Editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Video Speed Editor - Adjust Speed in Seconds',
    description: 'Transform videos with precise speed control from 0.5x to 15x. Free online tool for dynamic video effects and instant MP4 downloads!',
    images: ['/images/twitter-card-video-speed.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/video-speed',
  },
};

export default function VideoSpeedPage() {
  return <VideoSpeedClient />;
}