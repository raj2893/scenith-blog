// app/add-subtitles-to-videos/page.tsx
import type { Metadata } from "next";
import SubtitleClient from './SubtitleClient';

export const metadata: Metadata = {
  title: 'Free AI Subtitle Generator - Add Subtitles to Videos Online | SCENITH',
  description: 'Automatically generate and customize subtitles for your videos with AI. Edit single or multiple subtitles, apply professional styles, and download MP4s instantly. Free for creators and filmmakers.',
  keywords: [
    'AI subtitle generator',
    'add subtitles to video',
    'free subtitle editor',
    'video subtitle tool',
    'automatic subtitles AI',
    'subtitle video online',
    'customize video subtitles',
    'free subtitle generator',
    'video caption editor',
    'AI video subtitles',
    'subtitle styles',
    'video editing subtitles',
    'online subtitle maker',
    'professional video subtitles',
    'auto caption video',
  ],
  openGraph: {
    title: 'Free AI Subtitle Generator - Add Subtitles in Seconds',
    description: 'Generate, edit, and style subtitles for videos using AI. Customize fonts, colors, and positions, and download high-quality MP4s for free.',
    type: 'website',
    images: [
      {
        url: '/images/og-subtitles-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Subtitle Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Subtitle Generator - Add Subtitles to Videos',
    description: 'Easily add and customize subtitles with AI. Perfect for creators, with instant MP4 downloads and no watermarks!',
    images: ['/images/twitter-card-subtitles.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/add-subtitles-to-videos',
  },
};

export default function SubtitlePage() {
  return <SubtitleClient />;
}