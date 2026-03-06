// app/tools/manual-video-speed-modifier/page.tsx

import type { Metadata } from 'next';
import ManualVideoSpeedClient from './ManualVideoSpeedClient';

export const metadata: Metadata = {
  title: 'Manual Video Speed Modifier – Control Every Frame Free | Scenith',
  description:
    'Manually modify video speed with full frame-by-frame control. Set exact playback rates from 0.5x to 15x, preview in real-time, and export as MP4. No auto-processing — you decide every step.',
  keywords: [
    'manual video speed modifier',
    'manual video speed changer',
    'change video speed manually',
    'frame by frame video speed control',
    'custom video playback speed',
    'video speed modifier online free',
    'manual speed adjustment video',
    'precise video speed control',
    'video speed editor no watermark',
    'control video speed manually online',
    'set exact video speed',
    'video speed modifier MP4',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/manual-video-speed-modifier',
  },
  openGraph: {
    title: 'Manual Video Speed Modifier – Precise Frame Control | Scenith',
    description:
      'Take full manual control of video speed. Set exact rates, preview live, export clean MP4. Free, no watermark.',
    url: 'https://scenith.in/tools/manual-video-speed-modifier',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Manual Video Speed Modifier – precise speed control interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manual Video Speed Modifier – Full Control, Free | Scenith',
    description:
      'Set exact video speed manually, preview frame by frame, download clean MP4. No watermark ever.',
    images: ['https://scenith.in/images/VideoSpeedModifierSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function ManualVideoSpeedModifierPage() {
  return <ManualVideoSpeedClient />;
}