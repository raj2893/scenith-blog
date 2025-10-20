// app/video-filter/page.tsx
import type { Metadata } from "next";
import VideoFilterClient from './VideoFilterClient';

export const metadata: Metadata = {
  title: 'FREE AI Video Filter - Transform Videos Online | SCENITH',
  description: 'Apply professional-grade filters and LUTs to your videos instantly for free. Enhance videos with cinematic presets or custom adjustments. Perfect for creators, filmmakers, and marketers.',
  keywords: [
    'AI video filter',
    'free video editor',
    'video filter online',
    'AI video enhancement',
    'video filter tool',
    'cinematic video presets',
    'video color grading',
    'free video filter',
    'video editing tool',
    'apply LUT to video',
    'video enhancer AI',
    'free video processing',
    'video filter presets',
    'online video editor',
    'professional video filters',
  ],
  openGraph: {
    title: 'Free AI Video Filter - Transform Videos in Seconds',
    description: 'Enhance your videos with professional filters and LUTs instantly. Free online video filter tool for content creators, filmmakers, and businesses.',
    type: 'website',
    images: [
      {
        url: '/images/og-video-filter-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Video Filter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Video Filter - Enhance Videos in Seconds',
    description: 'Transform videos with professional filters and LUTs effortlessly. Free online tool for cinematic effects and instant MP4 downloads!',
    images: ['/images/twitter-card-video-filter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/apply-filters-to-videos',
  },
};

export default function VideoFilterPage() {
  return <VideoFilterClient />;
}