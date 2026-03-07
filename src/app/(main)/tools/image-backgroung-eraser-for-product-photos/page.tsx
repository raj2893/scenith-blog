import type { Metadata } from 'next';
import ImageBackgroundEraserClient from './ImageBackgroundEraserClient';

export const metadata: Metadata = {
  title: 'Image Background Eraser for Product Photos – Free AI Tool | Scenith',
  description:
    'Instantly erase backgrounds from product photos using AI. Get clean, transparent PNGs optimized for Amazon, Shopify & Etsy listings. Free, no watermark, no signup.',
  keywords: [
    'image background eraser for product photos',
    'erase background from product image',
    'product photo background eraser',
    'remove background product photography',
    'free background eraser for ecommerce',
    'AI background eraser product',
    'transparent background product photo',
    'background eraser amazon product photos',
    'shopify product background remover',
    'online background eraser no watermark',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/image-backgroung-eraser-for-product-photos',
  },
  openGraph: {
    title: 'Image Background Eraser for Product Photos – Free AI Tool | Scenith',
    description:
      'Erase cluttered backgrounds from any product photo in under 5 seconds. AI-powered, free forever, no watermark. Perfect for Amazon, Shopify, Etsy.',
    url: 'https://scenith.in/tools/image-backgroung-eraser-for-product-photos',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/REMOVEBGSS.png',
        width: 1200,
        height: 630,
        alt: 'Product photo before and after background erasure using Scenith AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Background Eraser for Product Photos – Free AI Tool | Scenith',
    description:
      'AI background eraser built for product photos. Free, instant, zero watermarks. Try it now.',
    images: ['https://scenith.in/images/REMOVEBGSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function ImageBackgroundEraserPage() {
  return <ImageBackgroundEraserClient />;
}