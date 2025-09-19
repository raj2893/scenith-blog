import type { Metadata } from 'next';
import VideoSpeedAdjusterClient from './VideoSpeedAdjusterClient';

export const metadata: Metadata = {
  title: 'Free Video Speed Adjuster - Change Video Speed Online | SCENITH',
  description: 'Adjust the speed of your videos online for free. Upload, modify speed with a slider, preview, and download your video instantly.',
  keywords: [
    'video speed adjuster',
    'change video speed',
    'video speed editor',
    'online video speed changer',
    'free video speed tool',
    'video playback speed',
    'speed up video',
    'slow down video',
  ],
  openGraph: {
    title: 'Free Video Speed Adjuster - Change Video Speed Online',
    description: 'Easily adjust video speed with our free online tool. Upload, set speed, preview, and download in seconds.',
    type: 'website',
    images: [
      {
        url: '/images/og-video-speed-adjuster.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Video Speed Adjuster Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Video Speed Adjuster - Change Speed in Seconds',
    description: 'Modify video speed online with our free tool. Perfect for creating slow-motion or fast-paced videos.',
    images: ['/images/twitter-card-video-speed.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/video-speed-adjuster',
  },
};

export default function VideoSpeedAdjusterPage() {
  return <VideoSpeedAdjusterClient />;
}