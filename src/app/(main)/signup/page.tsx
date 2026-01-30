// app/signup/page.tsx

import type { Metadata } from 'next';
import SignupClient from './SignupClient';

export const metadata: Metadata = {
  title: 'Sign Up for Scenith | Free AI Content Creation Platform - Create Account',
  description:
    'Create your free Scenith account and access 9 professional AI tools: Voice Generator (40+ voices), Image Editor, Auto Subtitles, PDF Tools, 10K+ SVG Icons. No watermarks, no credit card required.',
  keywords: [
    'scenith signup',
    'free AI tools signup',
    'AI voice generator account',
    'content creation platform register',
    'free image editor signup',
    'AI content tools account',
    'text to speech signup',
    'subtitle generator account',
    'PDF tools free account',
    'SVG icons library signup',
  ],
  openGraph: {
    title: 'Sign Up for Scenith - Free AI Content Creation Platform',
    description: 'Join 10,000+ creators using AI Voice Generator, Image Editor, Auto Subtitles & more. Zero watermarks. Free forever plan available.',
    url: 'https://scenith.in/signup',
    type: 'website',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/og-signup.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Sign Up - AI Content Creation Tools',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@scenith',
    creator: '@scenith',
    title: 'Scenith Sign Up | Free AI Voice Generator & Content Tools',
    description: 'Create account to access 40+ AI voices, Image Editor, Subtitles, PDF Tools, 10K+ SVG Icons - all free.',
    images: ['https://scenith.in/images/twitter-signup.jpg'],
  },
  alternates: {
    canonical: 'https://scenith.in/signup',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function SignupPage() {
  return <SignupClient />;
}