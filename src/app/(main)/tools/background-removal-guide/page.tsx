import type { Metadata } from "next";
import BackgroundRemovalGuide from './BackgroundRemovalGuide';

export const metadata: Metadata = {
  title: 'AI Background Remover 2025: Complete Guide to Photo Background Removal | SCENITH',
  description: 'The ultimate 2025 guide to AI background removal technology. Learn how background removal works, master photo editing techniques, discover professional best practices, real-world applications for e-commerce, and start creating transparent images instantly for free.',
  keywords: [
    'AI background remover guide',
    'background removal technology 2025',
    'how background removal works',
    'best background remover',
    'photo editing tutorial',
    'remove background tutorial',
    'product photo editing',
    'transparent background guide',
    'e-commerce photo editing',
    'AI vs manual background removal',
    'free background remover',
    'photo cutout techniques',
    'background removal for business',
    'semantic segmentation explained',
    'image editing best practices',
    'professional photo editing',
    'remove photo background online',
    'background eraser guide',
    'PNG transparent maker',
    'product photography tips'
  ],
  openGraph: {
    title: 'AI Background Remover 2025: Complete Guide to Photo Background Removal',
    description: 'Master AI background removal in 2025. Comprehensive guide covering how it works, photo editing techniques, best practices, e-commerce applications, and free tool access.',
    type: 'article',
    url: 'https://scenith.in/blog/background-remover-guide-2025',
    siteName: 'SCENITH AI Tools',
    images: [
      {
        url: 'https://scenith.in/images/og-background-removal-guide-2025.jpg',
        width: 1200,
        height: 630,
        alt: '2025 Ultimate Guide to AI Background Remover & Photo Editing Technology',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ScenitHAI',
    creator: '@ScenitHAI',
    title: 'AI Background Remover 2025 Complete Guide | SCENITH',
    description: 'Everything you need to know about AI background removal in 2025 – technology, photo editing techniques, best practices, applications, and free tool.',
    images: [
      {
        url: 'https://scenith.in/images/twitter-background-removal-guide-2025.jpg',
        alt: 'Complete Guide to AI Background Removal Technology 2025',
      },
    ],
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
    canonical: 'https://scenith.in/blog/background-remover-guide-2025',
  },

  other: {
    'format-detection': 'telephone=no',
  },
};

export default function BackgroundRemovalGuidePage() {
  return <BackgroundRemovalGuide />;
}