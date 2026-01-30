import type { Metadata } from "next";
import ImageEditingClient from "./ImageEditingClient";

export const metadata: Metadata = {
  title: 'Free Image Editor – Create Professional Graphics Online!| Scenith',
  description: 'Free online image editor with layers, text, shapes & filters. Create social media graphics, YouTube thumbnails, marketing materials. No download, no watermarks - start designing now!',
  keywords: [
    'free image editor',
    'online graphic design tool',
    'canva alternative free',
    'photoshop alternative',
    'design graphics online',
    'social media graphic maker',
    'YouTube thumbnail creator',
    'layer-based editor',
    'free design software',
    'image editor no download',
    'create graphics free',
    'online photo editor',
    'text overlay editor',
    'filter photo editor',
    'Instagram post creator',
    'marketing material designer'
  ],
  openGraph: {
    title: 'Free Image Editor for Social Media & Marketing - Professional Graphics Online',
    description: 'Create stunning graphics with our free online image editor. Layer-based editing, custom text, shapes & filters. Perfect for social media, YouTube thumbnails & marketing materials.',
    type: 'website',
    url: 'https://scenith.in/tools/image-editing',
    images: [
      {
        url: '/images/og-image-editor-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Free Image Editor - Create Professional Graphics Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image Editor - Create Graphics Like a Pro (No Download Required)',
    description: 'Layer-based online image editor with text, shapes & filters. Free forever, no watermarks. Perfect for social media & marketing!',
    images: ['/images/twitter-card-image-editor.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/image-editing',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a73e8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith Image Editor',
  },
  manifest: '/manifest.json',
};

export default function ImageEditingPage() {
  return <ImageEditingClient />;
}