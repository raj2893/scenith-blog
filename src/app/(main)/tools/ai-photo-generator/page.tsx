import type { Metadata } from "next";
import AIPhotoGeneratorClient from './AIPhotoGeneratorClient';

export const metadata: Metadata = {
  title: 'Free AI Photo Generator: Create Realistic AI Photos from Text Instantly | Scenith',
  description: 'Generate hyper-realistic AI photos from any text description in seconds. No camera, no studio, no cost. Perfect for product photos, portraits, landscapes, social media & e-commerce. 30 free photos/month, full commercial rights, zero watermarks.',
  keywords: [
    'AI photo generator',
    'free AI photo generator',
    'text to photo AI',
    'realistic AI photo maker',
    'generate photos from text',
    'AI photo creator',
    'AI generated photos',
    'fake photo generator AI',
    'AI portrait generator',
    'AI product photo generator',
    'AI landscape photo generator',
    'photo AI generator free',
    'AI photography generator',
    'create photos with AI',
    'AI photo maker online',
    'realistic photo generator AI',
    'AI stock photo generator',
    'AI headshot generator',
    'text to realistic image',
    'AI photo studio free'
  ],
  openGraph: {
    title: ' AI Photo Generator: Hyper-Realistic Photos from Text in Seconds',
    description: 'Turn any text description into a stunning, realistic AI photo. Product shots, portraits, landscapes, interiors—no camera needed. Commercial-use, instant download.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-photo-generator',
    images: [
      {
        url: '/images/AIImageGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Photo Generator — create realistic photos from text descriptions instantly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Photo Generator: Realistic Photos from Text in Seconds',
    description: 'Skip the photoshoot. Type a description, get a professional AI photo instantly. Free commercial rights, no watermarks. Try now!',
    images: ['/images/AIImageGenerationSS.png'],
    creator: '@scenith_1902',
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
  alternates: {
    canonical: 'https://scenith.in/tools/ai-photo-generator',
  },
  themeColor: '#3B82F6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI Photo Generator',
  },
};

export default function AIPhotoGeneratorPage() {
  return <AIPhotoGeneratorClient />;
}