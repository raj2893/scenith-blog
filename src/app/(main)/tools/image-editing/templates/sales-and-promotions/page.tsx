import type { Metadata } from "next";
import SalesPromotionTemplate from "./SalesAndPromotions";

export const metadata: Metadata = {
  title: 'Free Sales & Promotion Graphics Template – Create Stunning Sale Banners Online | Scenith',
  description: 'Free sales and promotion graphics template for creating eye-catching sale banners, discount announcements, clearance flyers & promotional social media posts. Professional drag-and-drop editor. No watermarks, no downloads required!',
  keywords: [
    'sales promotion template',
    'free sale banner maker',
    'discount graphic creator',
    'promotional poster template',
    'clearance sale banner',
    'sale announcement graphic',
    'retail promotion template',
    'flash sale graphic',
    'mega sale banner free',
    'end of season sale template',
    'shop now banner maker',
    'promotional social media post',
    'sale flyer creator online',
    'marketing banner template',
    'ecommerce sale graphic',
    'discount announcement template',
    'free promotional design tool',
    'sale poster maker',
    'retail marketing graphics',
    'online sale banner template',
    'product promotion graphic',
    'seasonal sale banner',
    'percentage off graphic maker',
    'business promotion template',
    'sale campaign design'
  ],
  openGraph: {
    title: 'Free Sales & Promotion Graphics Template – Design Stunning Sale Banners Online',
    description: 'Create high-converting sale banners, discount announcements & promotional graphics with our free template. Professional editor with bold typography, attention-grabbing colors & marketing elements. Start designing now!',
    type: 'website',
    url: 'https://scenith.in/tools/image-editing/templates/sales-and-promotion',
    images: [
      {
        url: '/images/og-sales-promotion-template.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Sales & Promotion Template – Free Promotional Graphics Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Sales & Promotion Template – Create Stunning Sale Banners & Discount Graphics',
    description: 'Design eye-catching sale banners, promotional posts & clearance graphics in minutes. Free online editor, no watermarks, no design skills needed!',
    images: ['/images/twitter-sales-promotion-template.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/image-editing/templates/sales-and-promotion',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FF6B00',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sales & Promotion Template',
  },
};

export default function SalesPromotionTemplatePage() {
  return <SalesPromotionTemplate />;
}