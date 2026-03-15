import { Metadata } from "next";
import LandingPageClient from "../components/LandingPageClient";

export const metadata: Metadata = {
  title: "Scenith - Free AI Image & Video Generator | FLUX, Kling, Veo 3.1 & More",
  description: "Generate AI images with FLUX, GPT Image & Imagen 4. Create cinematic AI videos with Kling & Veo 3.1. Plus AI Voice, PDF Tools & more. 50 free credits monthly — no card, no daily limits.",
  keywords: [
    // New primary keywords
    "AI image generator free",
    "AI video generator online",
    "FLUX image generation",
    "Kling video generator",
    "Veo 3.1 video generation",
    "Imagen 4 AI image",
    "free AI image generator",
    "text to video AI free",
    "AI content creation platform",
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
    title: "Scenith - Free AI Image, Video & Voice Generator",
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
    title: "Scenith - Free AI Image, Video & Voice Generator",
    description: "FLUX, Kling, Veo 3.1, Imagen 4 & more. 50 free credits/month. No card, no daily limits.",
    images: ["https://scenith.in/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/",
  }
};

export default function HomePage() {
  return <LandingPageClient />;
}