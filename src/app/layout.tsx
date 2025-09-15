import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: 'Master video editing with AI-powered tools, tutorials, and professional features. Create stunning videos with automated subtitles, layers, and advanced editing capabilities.',
  keywords: [
    'video editing',
    'AI tools',
    'video editor',
    'subtitles',
    'online video editing',
    'content creation',
    'YouTube editing',
    'professional video editing'
  ],
  authors: [{ name: 'Scenith Team' }],
  creator: 'Scenith',
  publisher: 'Scenith',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://scenith.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Scenith - Professional Video Editing Platform',
    description: 'Master video editing with AI-powered tools, tutorials, and professional features.',
    url: 'https://scenith.in',
    siteName: 'Scenith',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Video Editing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith - Professional Video Editing Platform',
    description: 'Master video editing with AI-powered tools, tutorials, and professional features.',
    images: ['/images/twitter-card.jpg'],
    creator: '@scenith',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/scenith.ico',
    shortcut: '/scenith.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar pageType="blogs" />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
          async
          defer
        />        
      </body>
    </html>
  );
}