import { Metadata } from "next";
import LandingPageClient from "../components/LandingPageClient";

export const metadata: Metadata = {
  title: "Scenith - Free AI Voice Generator & Content Creation Platform | 9 Professional Tools",
  description: "Create professional content with Scenith's all-in-one platform. AI Voice Generator (40+ voices), Image Editor, Subtitles, PDF Tools, 10K+ SVG Icons. Free forever, no watermarks. Join 10,000+ creators saving $600+ yearly vs Adobe/Canva.",
  keywords: [
    // Primary keywords
    "AI content creation platform",
    "free AI tools for content creators",
    "AI voice generator free",
    "best content creation software",
    "online content creation tools",
    
    // Comparison keywords
    "Scenith vs Adobe Creative Cloud",
    "Scenith vs Canva",
    "alternative to Adobe Creative Cloud",
    "cheap content creation software",
    "content creation platform for YouTubers",
    
    // Long-tail keywords
    "how to create professional content free",
    "AI tools for video creators",
    "text to speech for YouTube",
    "free image editor online",
    "auto subtitle generator",
    "free PDF tools",
    "vector icons library",
    "content creation workflow",
    "AI voice generator",
    "text to speech",
    "AI voice",
    "voice generator free",
    "TTS online",
    "AI voiceover",
    "image editor online",
    "photo editor free",
    "background remover",
    "auto subtitle generator",
    "video speed changer",
    "media converter",
    "SVG icons free",
    "vector graphics",
    "Scenith",
    "content creation tools",
    "social media tools"
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
    title: "Scenith - #1 Free AI Voice Generator & Content Creation Platform",
    description: "Transform text to natural speech with 40+ AI voices. Plus Image Editor, Auto Subtitles, 10,000+ SVG Icons & more. No watermark. Free forever!",
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
    title: "Scenith - Free AI Voice Generator & Content Tools",
    description: "40+ natural AI voices, Image Editor, Auto Subtitles, 10K+ SVG Icons. Create professional content FREE!",
    images: ["https://scenith.in/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/",
  }
};

export default function HomePage() {
  return <LandingPageClient />;
}