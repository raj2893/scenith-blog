import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Login to Scenith | Free Online Video Editor - Start Creating Now',
  description:
    'Log in to Scenith and access your free professional video editing dashboard. Create stunning videos for YouTube, Instagram, TikTok with no watermarks.',
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

export default function LoginPage() {
  return <LoginClient />;
}