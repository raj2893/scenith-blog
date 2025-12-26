// app/signup/page.tsx

import type { Metadata } from 'next';
import SignupClient from './SignupClient';

export const metadata: Metadata = {
  title: 'Sign Up for Scenith | Free Online Video Editor - Create Account',
  description:
    'Join Scenith for free and start creating professional videos instantly. No credit card required. Powerful editing tools for YouTube, Instagram, and TikTok.',
  keywords: [
    'scenith signup',
    'free video editor signup',
    'create video editing account',
    'online video maker register',
    'scenith account',
  ],
  openGraph: {
    title: 'Sign Up for Scenith - Free Video Editor',
    description: 'Create your free account and start making stunning videos today with Scenith\'s professional online editor.',
    url: 'https://scenith.in/signup',
    type: 'website',
    images: ['/images/og-signup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith Sign Up | Free Video Editor',
    description: 'Join thousands of creators making professional videos for free.',
    images: ['/images/twitter-signup.jpg'],
  },
  alternates: {
    canonical: '/signup',
  },
  robots: 'index, follow',
};

export default function SignupPage() {
  return <SignupClient />;
}