import type { Metadata } from "next";
import AIImageGeneratorFreeClient from "./AIImageGeneratorFreeClient";

export const metadata: Metadata = {
  title: "Free AI Image Generator — Create Images from Text Instantly | Scenith",
  description:
    "Generate stunning AI images from text descriptions in seconds. Choose from 8 art styles — realistic, anime, digital art, 3D render, fantasy & more. Free, no watermarks, commercial use included.",
  keywords: [
    "free AI image generator",
    "AI image generator from text",
    "text to image AI free",
    "AI art generator free",
    "generate images with AI",
    "free text to image generator",
    "AI image creator online",
    "AI generated art free",
    "best free AI image generator",
    "free AI art generator no sign up",
    "AI image generator no watermark",
    "realistic AI image generator free",
    "anime AI image generator",
    "AI image generator for social media",
    "free AI picture generator",
    "AI illustration generator",
    "DALL-E alternative free",
    "Midjourney free alternative",
    "AI image generator commercial use",
    "text to image generator online free",
  ].join(", "),
  alternates: {
    canonical: "https://scenith.in/tools/ai-image-generator-free",
  },
  openGraph: {
    title: "Free AI Image Generator — Text to Image in Seconds",
    description:
      "Type a description, pick a style, and generate professional AI art for free. Realistic photos, anime, digital art, fantasy & more. No watermarks, commercial use included.",
    url: "https://scenith.in/tools/ai-image-generator-free",
    siteName: "Scenith",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://scenith.in/images/AIImageGenerationSS.png",
        width: 1200,
        height: 630,
        alt: "Scenith Free AI Image Generator — text to image tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Image Generator — Realistic, Anime, Digital Art & More",
    description:
      "Create stunning AI images from text instantly. 8 art styles, no watermarks, commercial rights included. The best free Midjourney & DALL-E alternative.",
    images: ["https://scenith.in/images/AIImageGenerationSS.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function AIImageGeneratorFreePage() {
  return <AIImageGeneratorFreeClient />;
}