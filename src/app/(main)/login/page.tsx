import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Login to Scenith | AI Content Creation Platform - Access Your Projects',
  description:
    'Log in to Scenith and access your AI Voice Generator, Image Editor, Subtitle Generator, PDF Tools, and SVG Library. Continue creating professional content with 40+ AI voices and advanced editing tools.',
  keywords: [
    'scenith login',
    'AI content tools login',
    'voice generator sign in',
    'image editor login',
    'content creation platform login',
    'AI tools account access',
    'subtitle generator login',
    'PDF tools sign in',
    'SVG library access',
  ],
  openGraph: {
    title: 'Login to Scenith - AI Content Creation Platform',
    description: 'Access your projects and continue creating with 40+ AI voices, Image Editor, Auto Subtitles, PDF Tools & 10K+ SVG Icons.',
    url: 'https://scenith.in/login',
    type: 'website',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/og-login.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Login - AI Content Creation Tools',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@scenith',
    creator: '@scenith',
    title: 'Scenith Login | AI Voice Generator & Content Tools',
    description: 'Sign in to access 9 professional AI-powered content creation tools.',
    images: ['https://scenith.in/images/twitter-login.jpg'],
  },
  alternates: {
    canonical: 'https://scenith.in/login',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function LoginPage() {
  return <LoginClient />;
}