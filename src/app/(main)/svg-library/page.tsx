import { Metadata } from "next";
import ElementsLibraryClient from "./ElementsLibraryClient";

export const metadata: Metadata = {
  title: 'Free SVG Icons & Vector Graphics Download - 10,000+ Icons (No Attribution) | Scenith',
  description: 'Download 10,000+ free SVG icons instantly. Customizable vector graphics for web design, apps, YouTube, marketing. Edit online, export PNG/JPG/PDF. Zero attribution required. Better than Flaticon Premium.',
  keywords: [
    'free svg icons',
    'svg download free',
    'vector icons free download',
    'flaticon alternative free',
    'free icons no attribution',
    'svg icons for commercial use',
    'customizable svg icons',
    'free vector graphics',
    'icon library free',
    'web design icons free',
    'social media icons svg',
    'business icons free',
    'edit svg icons online',
    'png icons transparent',
    'free iconography',
    'scalable vector graphics free'
  ],
  openGraph: {
    title: 'Free SVG Icons Download - 10,000+ Vector Graphics for Web & Apps | Scenith',
    description: 'Download & customize free SVG icons instantly. Edit online, export in multiple formats. Perfect for designers, developers & marketers. No attribution needed.',
    type: 'website',
    url: 'https://scenith.in/svg-library',
    images: [
      {
        url: '/images/og-svg-library.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Free SVG Icons Library - 10,000+ Vector Graphics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SVG Icons Download - 10,000+ Customizable Vector Graphics',
    description: 'Browse, edit & download free SVG icons instantly. Better than Flaticon - zero attribution, unlimited downloads, instant online editing.',
    images: ['/images/twitter-card-svg-library.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/svg-library',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith SVG Icons',
  },
  manifest: '/manifest.json',
};

export default function SvgLibraryPage() {
  return (
    <>
      <ElementsLibraryClient />
    </>
  );
}