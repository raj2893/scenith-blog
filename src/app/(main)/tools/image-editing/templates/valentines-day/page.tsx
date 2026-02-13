import type { Metadata } from "next";
import ValentinesDayTemplate from "./ValentinesDayTemplate";

export const metadata: Metadata = {
  title: 'Free Valentine\'s Day Template – Create Romantic Graphics Online | Scenith',
  description: 'Free Valentine\'s Day image template for romantic cards, social media posts & love-themed designs. Professional graphics editor with hearts, roses & romantic elements. No download, no watermarks!',
  keywords: [
    'valentine\'s day template',
    'free valentine graphics',
    'romantic card maker',
    'valentine social media template',
    'love card creator',
    'valentine\'s day design',
    'romantic graphics editor',
    'valentine instagram post',
    'free valentine template',
    'valentine card online',
    'romantic design tool',
    'valentine\'s day graphics',
    'heart template editor',
    'love themed graphics',
    'valentine marketing materials',
    'romantic social media post'
  ],
  openGraph: {
    title: 'Free Valentine\'s Day Template - Create Beautiful Romantic Graphics Online',
    description: 'Design stunning Valentine\'s Day cards, social media posts & romantic graphics with our free template. Professional editor with hearts, roses & love elements. Start creating now!',
    type: 'website',
    url: 'https://scenith.in/tools/image-editing/templates/valentines-day',
    images: [
      {
        url: '/images/og-valentines-template.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Valentine\'s Day Template - Free Romantic Graphics Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Valentine\'s Day Template - Create Romantic Graphics & Cards',
    description: 'Beautiful Valentine\'s Day template for cards, social posts & romantic designs. Free online editor with hearts & love elements. No watermarks!',
    images: ['/images/twitter-valentines-template.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/image-editing/templates/valentines-day',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FF1744',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Valentine\'s Day Template',
  },
};

export default function ValentinesDayTemplatePage() {
  return <ValentinesDayTemplate />;
}