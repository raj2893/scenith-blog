// app/tools/generate-ai-images-online/page.tsx

import type { Metadata } from 'next';
import GenerateAIImagesOnlinePage from './GenerateAIImagesOnlineClient';

export const metadata: Metadata = {
  title: 'Generate AI Images Online Free | Text to Image Generator 2025',
  description:
    'Generate AI images online instantly — turn any text prompt into stunning visuals. Free text-to-image generator with 8 art styles: realistic, anime, 3D, fantasy & more. No design skills needed.',
  keywords: [
    'generate ai images online',
    'text to image generator',
    'ai image generator free',
    'ai art generator online',
    'free ai image creator',
    'text to image ai',
    'ai image from text',
    'online ai image maker',
    'stable diffusion online',
    'ai generated images free',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/generate-ai-images-online',
  },
  openGraph: {
    title: 'Generate AI Images Online Free | Text to Image in Seconds',
    description:
      'Turn text prompts into stunning AI-generated images instantly. Realistic photos, anime, digital art, 3D renders & more — free to use, no watermarks, commercial rights included.',
    url: 'https://scenith.in/tools/generate-ai-images-online',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AIImageGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Generate AI Images Online with Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generate AI Images Online Free — Scenith',
    description:
      'Instantly convert text prompts into AI images. Realistic, anime, digital art, 3D & more. Free text-to-image generator with no watermarks.',
    images: ['https://scenith.in/images/AIImageGenerationSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Page() {
  return <GenerateAIImagesOnlinePage />;
}