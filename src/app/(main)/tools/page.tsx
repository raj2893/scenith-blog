import type { Metadata } from 'next';
import ToolsIndex from './ToolsClient';

export const metadata: Metadata = {
  title: 'Scenith Tools: Complete AI Content Creation Suite - 10+ Free Tools',
  description: 'Access 10+ professional AI tools: AI Video Generator, Voice Generator, Image Editor, Background Remover, SVG Library, PDF Tools & more. Free forever, no watermark, commercial use allowed. Join 1500+ creators.',
  keywords: [
    'AI video generator',
    'text to video AI',
    'AI voice generator',
    'text to speech',
    'AI image generator',
    'background remover',
    'online image editor',
    'SVG library',
    'PDF tools online',
    'video speed changer',
    'media converter',
    'compress video online',
    'content creation suite',
    'free AI tools for creators',
    'video editing tools online',
    'Scenith tools',
    // ... existing keywords
  ],
  openGraph: {
    title: 'Scenith Tools - Complete AI Content Creation Suite',
    description: '10+ free AI tools for video, voice, images & documents. Generate, edit, convert, and optimize your content in seconds.',
    url: 'https://scenith.in/tools',
    type: 'website',
    images: [
      {
        url: '/images/tools-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Tools Suite Preview',
      },
    ],
    siteName: 'Scenith',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith Tools | AI Content Creation Suite',
    description: '10+ free AI tools for creators. Generate videos, voices, images & more.',
    images: ['/images/tools-twitter-image.jpg'],
    creator: '@scenith_1902',
  },
  alternates: {
    canonical: 'https://scenith.in/tools',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  authors: [{ name: 'Scenith' }],
  publisher: 'Scenith',
  category: 'technology',
  classification: 'AI Tools, Content Creation',
};

export default function ToolsPage() {
  return <ToolsIndex />;
}