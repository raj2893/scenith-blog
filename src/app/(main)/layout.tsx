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
  description: 'Create professional content with Scenith using AI Voice, Image Editor, Auto Subtitles, Background Remover and free SVG elements.',
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
    title: 'Scenith — AI Voice & Creator Toolkit',
    description:
      'Create professional content with Scenith: AI Voice Generator, Online Image Editor, Auto Subtitles, Background Remover and free SVG elements.',
    url: 'https://scenith.in',
    siteName: 'Scenith',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith — AI Voice & Creator Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenith — AI Voice & Creator Toolkit',
    description:
      '40+ natural AI voices, Image Editor, Auto Subtitles, and thousands of free SVG elements — all in one place.',
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
        {/* Preconnect must come first */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* All fonts in one non-blocking request */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Tangerine:wght@400;700&family=Noto+Sans+Mono:wght@400;700&family=Imperial+Script&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Birthstone&family=Lavishly+Yours&family=Amatic+SC:wght@400;700&family=Rampart+One&family=Freckle+Face&family=Fredericka+the+Great&family=Kings&family=Kirang+Haerang&family=Rubik+Wet+Paint&family=Fascinate+Inline&family=Barrio&family=Yesteryear&family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&family=Doto:wght@900&family=Butcherman&family=Bungee+Hairline&family=Alumni+Sans+Pinstripe&family=Mountains+of+Christmas:wght@400;700&family=Arimo:ital,wght@0,400;0,700;1,400;1,700&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat+Alternates:wght@500;900&family=Lexend+Giga:wght@400;700;900&family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Tangerine:wght@400;700&family=Noto+Sans+Mono:wght@400;700&family=Imperial+Script&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Birthstone&family=Lavishly+Yours&family=Amatic+SC:wght@400;700&family=Rampart+One&family=Freckle+Face&family=Fredericka+the+Great&family=Kings&family=Kirang+Haerang&family=Rubik+Wet+Paint&family=Fascinate+Inline&family=Barrio&family=Yesteryear&family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&family=Doto:wght@900&family=Butcherman&family=Bungee+Hairline&family=Alumni+Sans+Pinstripe&family=Mountains+of+Christmas:wght@400;700&family=Arimo:ital,wght@0,400;0,700;1,400;1,700&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat+Alternates:wght@500;900&family=Lexend+Giga:wght@400;700;900&family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
          />
        </noscript>

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3084309234365491"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-3084309234365491" />

        {/* Google Analytics */}
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