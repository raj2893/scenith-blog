import type { Metadata } from "next";
import TravelReelsClient from "./TravelReelsClient";

export const metadata: Metadata = {
  title: "AI Travel Reels Generator — Make Viral Travel Videos Free | Scenith",
  description:
    "Generate stunning AI travel reels, cinematic short videos, and travel content for Instagram, YouTube Shorts & TikTok in seconds. Free AI travel video generator — no camera, no editing skills needed. Powered by Kling, Veo 3.1, Wan 2.5 and more.",
  keywords: [
    "AI travel reels generator",
    "travel video AI generator",
    "AI travel video maker",
    "make travel reels with AI",
    "AI reel maker for travel",
    "travel content creator AI",
    "travel short video generator",
    "AI travel video free",
    "travel reel generator online",
    "AI video generator travel",
    "travel reels from text",
    "cinematic travel video AI",
    "travel video maker no camera",
    "AI travel content creation",
    "YouTube Shorts travel AI",
    "Instagram reels travel AI",
    "TikTok travel video AI",
    "free AI travel reel maker",
    "travel video generator 2025",
    "travel video generator 2026",
    "AI video for travel bloggers",
    "travel vlog AI generator",
    "travel reel ideas AI",
    "landscape video AI generator",
    "adventure reel generator",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/travel-reels-generator-ai",
  },
  openGraph: {
    title: "AI Travel Reels Generator — Make Viral Travel Videos in Seconds",
    description:
      "No camera. No editing. No skills. Just type a destination and watch AI generate your cinematic travel reel. Free to try — powered by Kling, Veo 3.1, Wan 2.5.",
    url: "https://scenith.in/tools/travel-reels-generator-ai",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/travel-reels-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Travel Reels Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Travel Reels Generator — Make Viral Travel Videos in Seconds",
    description:
      "No camera. No editing. Just type a destination and watch AI generate your cinematic travel reel. Free to try.",
    images: ["https://cdn.scenith.in/og/travel-reels-generator-og.jpg"],
    site: "@scenithin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/travel-reels-generator-ai",
      url: "https://scenith.in/tools/travel-reels-generator-ai",
      name: "AI Travel Reels Generator — Make Viral Travel Videos Free | Scenith",
      description:
        "Generate stunning AI travel reels and cinematic short videos for Instagram, YouTube Shorts & TikTok. Free AI travel video generator powered by Kling, Veo 3.1, Wan 2.5.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: { "@id": "https://scenith.in/tools/travel-reels-generator-ai#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "ReadAction",
        target: ["https://scenith.in/tools/travel-reels-generator-ai"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scenith.in/tools/travel-reels-generator-ai#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Travel Reels Generator",
          item: "https://scenith.in/tools/travel-reels-generator-ai",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Travel Reels Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/travel-reels-generator-ai",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description:
        "AI-powered travel reel and video generator. Create cinematic travel videos, Instagram Reels, YouTube Shorts, and TikToks from a text prompt. No camera or editing required.",
      featureList: [
        "Text-to-video travel reel generation",
        "Image-to-video animation from travel photos",
        "Multiple AI video models: Kling 2.6, Veo 3.1, Wan 2.5, Grok Imagine",
        "Cinematic 1080p HD output",
        "9:16 vertical for Reels and Shorts",
        "AI-generated audio and ambient soundscapes",
        "Instant MP4 download",
        "Free credits on signup",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1240",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I generate travel reels with AI for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith gives you 50 free credits on signup — no credit card required. Each 5-second travel video costs 46–92 credits depending on model. Paid plans unlock unlimited generations from $1/month.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models are used to generate travel videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Veo 3.1 by Google, Wan 2.5, Kling 2.5 Turbo, and Grok Imagine by xAI — the best AI video models available in 2025 and 2026.",
          },
        },
        {
          "@type": "Question",
          name: "What formats and resolutions are supported for travel reels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel reels can be generated in 9:16 (portrait for Instagram Reels, YouTube Shorts, TikTok), 16:9 (landscape for YouTube), and 1:1 (square). Resolutions range from 480p to 1080p in MP4 format.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn my travel photos into AI videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's Image-to-Video feature lets you upload a travel photo and animate it into a cinematic video clip using AI. The AI adds natural camera motion, parallax effects, and atmospheric motion to bring your still images to life.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate a travel reel with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most travel reel generations complete in 30–120 seconds depending on the AI model and video duration selected. Wan 2.5 and Kling 2.5 Turbo are the fastest options. Veo 3.1 and Kling 2.6 Pro take slightly longer but produce premium quality.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a camera or editing skills to create travel reels with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Scenith's AI travel reel generator works entirely from text prompts. Type a destination and scene description, pick your model and aspect ratio, and the AI generates a fully cinematic video clip. No camera, no editing software, no skills required.",
          },
        },
      ],
    },
  ],
};

export default function TravelReelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TravelReelsClient />
    </>
  );
}