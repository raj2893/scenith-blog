import { Metadata } from "next";
import DashboardPageClient from "./DashboardPageClient";

export const metadata: Metadata = {
  title: 'Scenith Dashboard | Start Creating Content for FREE - Grow your Social Media',
  description:
    "Manage your video projects, create stunning social media content, and grow your audience with Scenith's free online video editor. Professional tools, no watermarks, unlimited creativity.",
  keywords: [
    'scenith dashboard',
    'free video editor',
    'online video maker',
    'social media video editor',
    'youtube video editor',
    'instagram reels maker',
    'tiktok video creator',
    'video editing dashboard',
  ],
  openGraph: {
    title: 'Scenith Dashboard | Start Creating Content for FREE',
    description:
      'Your personal hub to create, edit, and manage professional videos for YouTube, Instagram, TikTok and more – completely free.',
    url: 'https://scenith.in/dashboard',
    type: 'website',
    images: ['/images/og-dashboard.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith Dashboard | Free Video Editor',
    description: 'Create stunning social media videos for free with Scenith\'s powerful online editor.',
    images: ['/images/twitter-dashboard.jpg'],
  },
  alternates: {
    canonical: '/dashboard',
  },
  robots: 'index, follow',
};

export default function DashboardPage() {
  return <DashboardPageClient />;
}