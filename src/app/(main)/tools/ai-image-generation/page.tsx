import type { Metadata } from "next";
import AIImageGeneratorClient from './AIImageGenerationClient';

export const metadata: Metadata = {
  title: 'Free AI Image Generator – Create Stunning Visuals from Text (Social Media & Marketing) | Scenith',
  description: 'Generate professional images from text descriptions instantly for free. AI-powered image creation in multiple artistic styles. Perfect for social media, marketing, and creative projects - no design skills required!',
  keywords: [
    'AI image generator',
    'free image generator',
    'text to image AI',
    'AI art generator',
    'AI image creator',
    'generate images from text',
    'AI artwork generator',
    'free AI art',
    'image AI tool',
    'AI picture generator',
    'text to image free',
    'AI graphic generator',
    'AI visual creator',
    'stable diffusion online',
    'AI image maker'
  ],
  openGraph: {
    title: 'AI Image Generator for Social Media & Marketing (8+ Styles) - Free Text to Image Tool',
    description: 'Create stunning AI-generated images from text descriptions in seconds. Free image generator supporting realistic photos, anime, digital art, and 8+ artistic styles for content creators and businesses.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-image-generation',
    images: [
      {
        url: '/images/og-ai-image-generator-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Image Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Image Generator for Social Media (8+ Styles) - Create Professional Visuals from Text',
    description: 'Transform text into stunning images effortlessly. Free AI image generator with realistic, anime, digital art styles - perfect for social media, marketing & creative projects!',
    images: ['/images/twitter-card-ai-image.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-image-generation',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a73e8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith AI Image',
  },
  manifest: '/manifest.json',
};

export default function AIImageGeneratorPage() {
  return <AIImageGeneratorClient />;
}