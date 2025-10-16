import type { Metadata } from "next";
import MediaConversionClient from './MediaConversionClient';

export const metadata: Metadata = {
  title: 'Free AI Media Converter - Convert Videos & Images Online | SCENITH',
  description: 'Easily convert videos and images to various formats with AI. Select your target format and download high-quality files instantly. Free for creators and professionals.',
  keywords: [
    'AI media converter',
    'convert video online',
    'convert image online',
    'free media converter',
    'video format converter',
    'image format converter',
    'convert MP4 to AVI',
    'convert PNG to JPG',
    'free video converter',
    'online media converter',
    'AI video conversion',
    'image conversion tool',
    'convert media for social media',
    'professional media converter',
    'format changer tool',
  ],
  openGraph: {
    title: 'Free AI Media Converter - Convert Videos & Images Instantly',
    description: 'Convert videos and images to various formats with AI. Perfect for creators, with instant downloads and no watermarks.',
    type: 'website',
    images: [
      {
        url: '/images/og-media-conversion-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Media Converter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Media Converter - Convert Videos & Images',
    description: 'Easily convert videos and images to your desired format with AI. Download high-quality files instantly!',
    images: ['/images/twitter-card-media-conversion.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/convert-media',
  },
};

export default function MediaConversionPage() {
  return <MediaConversionClient />;
}