import { Metadata } from "next";
import LandingPageClient from "../components/LandingPageClient";

export const metadata: Metadata = {
  title: "Scenith – AI Content Creation Platform for Images, Videos & Voice",
  description: "Create AI images, videos, voiceovers and social content from one platform. Scenith helps creators generate high-quality content fast with free monthly credits.",
  keywords: [
    "AI content creation platform",
    "AI image generator",
    "AI video generator",
    "AI voice generator",
    "AI tools for content creators",
    "text to video AI",
    "AI content generator",
    "Scenith"
  ],
  authors: [{ name: "Scenith" }],
  creator: "Scenith",
  publisher: "Scenith",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scenith.in/",
    siteName: "Scenith",
    title: "Scenith – AI Content Creation Platform for Images, Videos & Voice",
    description: "Generate AI images with FLUX & Imagen 4, cinematic videos with Kling & Veo 3.1, and natural voiceovers — all from one platform. 50 free credits monthly, no card required.",
    images: [
      {
        url: "https://scenith.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith - AI Voice Generator & Content Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scenith",
    creator: "@scenith",
    title: "Scenith – AI Content Creation Platform for Images, Videos & Voice",
    description: "FLUX, Kling, Veo 3.1, Imagen 4 & more. 50 free credits/month. No card, no daily limits.",
    images: ["https://scenith.in/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/",
  }
};

export default function HomePage() {
  return (
    <>
      {/* Preconnect for YouTube thumbnails — eliminates ~200ms cold connection */}
      <link rel="preconnect" href="https://i.ytimg.com" />
      <link rel="dns-prefetch" href="https://i.ytimg.com" />
      {/* Preconnect for geo detection */}
      <link rel="dns-prefetch" href="https://ipapi.co" />
      <LandingPageClient />
    </>
  );
}