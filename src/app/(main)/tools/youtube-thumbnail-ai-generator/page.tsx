import type { Metadata } from 'next';
import YouTubeThumbnailClient from './YouTubeThumbnailClient';

export const metadata: Metadata = {
  title: 'Free AI YouTube Thumbnail Generator – Create Click-Worthy Thumbnails in Seconds (2026)',
  description:
    'Generate stunning YouTube thumbnails with AI in seconds. No design skills needed. Create high-CTR thumbnails for gaming, vlog, education, news & more. Free AI thumbnail maker with 8 visual styles.',
  keywords: [
    'ai youtube thumbnail generator',
    'youtube thumbnail maker free',
    'ai thumbnail generator',
    'youtube thumbnail creator',
    'free thumbnail maker for youtube',
    'ai thumbnail maker 2026',
    'youtube thumbnail generator online',
    'ai generated youtube thumbnails',
    'free youtube thumbnail design',
    'thumbnail generator no watermark',
    'custom youtube thumbnail maker',
    'youtube thumbnail size generator',
    'faceless youtube thumbnail ai',
    'youtube thumbnail background ai',
    'thumbnail click rate optimizer',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/youtube-thumbnail-ai-generator',
  },
  openGraph: {
    title: 'Free AI YouTube Thumbnail Generator – High-CTR Thumbnails in Seconds',
    description:
      'Stop using bland stock thumbnails. Generate professional, click-worthy YouTube thumbnails with AI. Free, no watermark, instant download.',
    url: 'https://scenith.in/tools/youtube-thumbnail-ai-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/youtube-thumbnail-ai-generator-og.png',
        width: 1200,
        height: 630,
        alt: 'AI YouTube Thumbnail Generator by Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI YouTube Thumbnail Generator – Create Click-Worthy Thumbnails Instantly',
    description:
      'AI-powered YouTube thumbnail generator. 8 visual styles. Instant PNG download. No design skills needed. Free forever.',
    images: ['https://scenith.in/images/youtube-thumbnail-ai-generator-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function YouTubeThumbnailAIGeneratorPage() {
  return <YouTubeThumbnailClient />;
}