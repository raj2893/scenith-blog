import type { Metadata } from "next";
import AIImageGeneratorClient from './AIImageGenerationClient';

export const metadata: Metadata = {
  title: 'Free AI Image Generator: Create Stunning Images from Text in Seconds (YouTube Thumbnails & Marketing) | Scenith',
  description: 'Generate professional AI images instantly—realistic photos, anime art, 3D renders & more. 30 free images/month, commercial rights, no watermarks. Perfect for YouTube thumbnails, social media posts & marketing visuals!',
  keywords: [
    'AI image generator',
    'free AI image generator',
    'text to image AI',
    'AI art generator free',
    'generate images from text',
    'AI image creator',
    'text to image generator',
    'AI picture generator',
    'free image AI',
    'realistic AI image generator',
    'anime AI generator',
    'AI image maker',
    'text to art AI',
    'AI visual generator',
    'stable diffusion online'
  ],
  openGraph: {
    title: 'Free AI Image Generator: Text to Image in 8+ Styles (Social Media & Marketing)',
    description: 'Create stunning AI images from text descriptions in seconds. 8+ artistic styles, commercial use rights, instant PNG download. Perfect for YouTube thumbnails, social media, marketing visuals.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-image-generation',
    images: [
      {
        url: '/images/AIImageGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Image Generator showing text-to-image creation with multiple artistic styles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Image Generator: Text to Image in Seconds (8+ Styles)',
    description: 'Transform text into professional AI images effortlessly. Realistic photos, anime, digital art & more. Free commercial rights, instant download. Perfect for creators!',
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
    canonical: 'https://scenith.in/tools/ai-image-generation',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI Image Generator',
  },
  manifest: '/manifest.json',
};

export default function AIImageGeneratorPage() {
  return <AIImageGeneratorClient />;
}