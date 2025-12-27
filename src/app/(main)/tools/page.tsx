import type { Metadata } from 'next';
import ToolsIndex from './ToolsClient';

export const metadata: Metadata = {
  title: 'Scenith Tools | AI-Powered Video & Media Tools - Free Online Suite',
  description:
    'Discover 6+ powerful AI tools for video editing, voice generation, subtitle creation, background removal, and more. Free online tools trusted by 50,000+ creators. No signup required.',
  keywords: [
    'scenith login',
    'video editor login',
    'free video editing account',
    'online video maker sign in',
    'scenith account login',
  ],
  openGraph: {
    title: 'Login to Scenith - Free Video Editor',
    description: 'Access your projects and start creating professional videos instantly with Scenith.',
    url: 'https://scenith.in/login',
    type: 'website',
    images: ['/images/og-login.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith Login | Free Video Editor',
    description: 'Sign in to create stunning social media videos for free.',
    images: ['/images/twitter-login.jpg'],
  },
  alternates: {
    canonical: '/login',
  },
  robots: 'index, follow',
};

export default function ToolsPage() {
  return <ToolsIndex />;
}