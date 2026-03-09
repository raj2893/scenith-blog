import type { Metadata } from 'next';
import TextToImageClient from './TextToImageClient';

export const metadata: Metadata = {
  title: 'Text to Image Generator Free – AI Art from Text in Seconds | Scenith',
  description:
    'Convert text to image instantly with Scenith\'s free AI text-to-image generator. Type any description and get stunning AI-generated art, photos, or illustrations. No signup needed to explore — generate now.',
  keywords: [
    'text to image generator',
    'text to image AI',
    'convert text to image',
    'AI art generator from text',
    'text to image free',
    'text to image online',
    'AI image from text',
    'text to art generator',
    'generate image from text',
    'text to photo AI',
    'free text to image',
    'text to image generator free online',
    'AI text to image no signup',
    'best text to image AI',
    'text to image prompt',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/text-to-image-generator',
  },
  openGraph: {
    title: 'Text to Image Generator – Free AI Art from Any Description',
    description:
      'Turn any text prompt into a stunning image in seconds. Scenith\'s AI text-to-image engine supports 8 styles — realistic, anime, digital art, fantasy & more. Free to use.',
    url: 'https://scenith.in/tools/text-to-image-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AIImageGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Text to Image Generator – AI Art from Text',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Text to Image Generator – AI Art in Seconds | Scenith',
    description:
      'Type a description, pick a style, and watch AI create your image instantly. Free text-to-image tool with 8 artistic styles.',
    images: ['https://scenith.in/images/AIImageGenerationSS.png'],
    site: '@scenith_in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function TextToImagePage() {
  return <TextToImageClient />;
}