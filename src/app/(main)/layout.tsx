import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../../styles/globals.css';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import Script from "next/script";
import AuthListener from "../components/AuthListener";

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
      <head>
        {/* ✅ Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GV9N09RZ1B"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GV9N09RZ1B', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3084309234365491"
             crossOrigin="anonymous"></script>  
        <meta name="google-adsense-account" content="ca-pub-3084309234365491" />           
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Comic+Neue&family=Tangerine&family=Noto+Sans+Mono&family=Imperial+Script&family=Verdana&family=Courier+Prime&family=Times+New+Roman&family=Tahoma&family=Birthstone&family=Lavishly+Yours&family=Amatic+SC&family=Rampart+One&family=Freckle+Face&family=Fredericka+the+Great&family=Kings&family=Kirang+Haerang&family=Rubik+Wet+Paint&family=Fascinate+Inline&family=Barrio&family=Yesteryear&family=Gelasio&family=Doto&family=Butcherman&family=Bungee+Hairline&family=Alumni+Sans+Pinstripe&family=Comic+Sans+MS&family=Mountains+of+Christmas&family=Courier+New&family=Impact&family=Arimo&family=Tinos&family=Carlito&family=Montserrat+Alternates&family=Lexend+Giga&family=Georgia&family=Calibri&display=swap" />
      </head>      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthListener/>
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