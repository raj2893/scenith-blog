// app/verify-email/page.tsx

import type { Metadata } from 'next';
import { Suspense } from 'react';
import VerifyEmailClient from './VerifyEmailClient';

export const metadata: Metadata = {
  title: 'Verify Email | Scenith - Activate Your Free Video Editor Account',
  description:
    'Verify your email to activate your Scenith account and start creating professional videos for YouTube, Instagram, and TikTok instantly.',
  keywords: [
    'scenith verify email',
    'email verification',
    'activate scenith account',
    'video editor email confirmation',
  ],
  openGraph: {
    title: 'Verify Your Email - Scenith',
    description: 'Complete your Scenith registration by verifying your email address.',
    url: 'https://scenith.in/verify-email',
    type: 'website',
    images: ['/images/og-verify-email.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Email | Scenith',
    description: 'Activate your free Scenith account to start editing videos.',
    images: ['/images/twitter-verify-email.jpg'],
  },
  alternates: {
    canonical: '/verify-email',
  },
  robots: 'noindex, nofollow',
};

// Optional: Fallback UI while loading
function LoadingFallback() {
  return (
    <div className="auth-page verify-email-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="spinner"></div>
      <p>Verifying your email...</p>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <VerifyEmailClient />
    </Suspense>
  );
}