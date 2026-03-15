import type { Metadata } from "next";
import YoutubeShortGeneratorClient from "./YoutubeShortGeneratorClient";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "YouTube Shorts AI Video Generator — Create Viral Shorts in Seconds | Scenith",
  description:
    "Generate stunning YouTube Shorts with AI in seconds. No editing skills needed. Turn text prompts into 9:16 vertical videos optimized for YouTube Shorts, Reels & TikTok. Try Scenith's AI video generator free.",
  keywords: [
    "youtube shorts ai video generator",
    "ai video generator for youtube shorts",
    "make youtube shorts with ai",
    "text to youtube shorts",
    "ai shorts video maker",
    "vertical video ai generator",
    "youtube shorts creator tool",
    "ai generated youtube shorts",
    "free youtube shorts maker ai",
    "shorts video generator online",
    "ai video for shorts 9:16",
    "create youtube shorts automatically",
    "youtube shorts ai tool 2026",
    "best ai video generator shorts",
    "no edit youtube shorts ai",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/youtube-shorts-ai-video-generator",
  },
  openGraph: {
    title: "YouTube Shorts AI Video Generator — Create Viral Shorts in Seconds",
    description:
      "Stop spending hours editing. Scenith's AI turns your ideas into 9:16 YouTube Shorts in under 2 minutes. Powered by Kling, Wan 2.5, and Veo 3.",
    url: "https://scenith.in/tools/youtube-shorts-ai-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/youtube-shorts-ai-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith YouTube Shorts AI Video Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts AI Video Generator — Scenith",
    description:
      "Turn any idea into a viral YouTube Short using AI. 9:16 vertical video, 1080p, ready in under 2 minutes.",
    images: ["https://scenith.in/og/youtube-shorts-ai-generator.jpg"],
    site: "@scenith_in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/youtube-shorts-ai-video-generator",
      url: "https://scenith.in/tools/youtube-shorts-ai-video-generator",
      name: "YouTube Shorts AI Video Generator",
      description:
        "Generate viral YouTube Shorts using AI. Text to 9:16 vertical video in seconds with Scenith.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "YouTube Shorts AI Video Generator",
            item: "https://scenith.in/tools/youtube-shorts-ai-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith YouTube Shorts AI Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/youtube-shorts-ai-video-generator",
      description:
        "AI-powered tool to generate YouTube Shorts (9:16 vertical video) from text prompts. Supports Wan 2.5, Kling 2.5, and Veo 3 models.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Free to start. Credit-based plans from ₹99/mo.",
      },
      featureList: [
        "Text to YouTube Shorts",
        "9:16 Vertical Video Output",
        "1080p HD Resolution",
        "AI Audio Generation",
        "Multiple AI Models",
        "Instant Download",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I make YouTube Shorts with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply type a text prompt describing your video idea, select 9:16 aspect ratio, choose an AI model like Wan 2.5 or Kling 2.5, and hit Generate. Your YouTube Short will be ready in 30–120 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI video generator for YouTube Shorts in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith's AI video generator uses top models like Kling 2.5 Pro and Veo 3 to produce high-quality 9:16 vertical videos perfect for YouTube Shorts. It's one of the most capable tools available in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI generate YouTube Shorts automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's AI can generate YouTube Shorts from just a text description. No camera, no editing software, no stock footage required.",
          },
        },
        {
          "@type": "Question",
          name: "Are AI-generated YouTube Shorts allowed by YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. YouTube allows AI-generated content as long as it doesn't violate community guidelines. You may need to disclose AI-generated content per YouTube's policy. Scenith generates original content from your prompt.",
          },
        },
        {
          "@type": "Question",
          name: "How long can an AI YouTube Short be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith currently supports up to 10 seconds per generation. YouTube Shorts can be up to 60 seconds, so you can generate multiple clips and chain them.",
          },
        },
        {
          "@type": "Question",
          name: "What resolution are AI-generated YouTube Shorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates videos at 720p (Wan 2.5) and 1080p (Kling 2.5 Standard, Kling 2.5 Pro, Veo 3) depending on the model selected.",
          },
        },
      ],
    },
  ],
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function YoutubeShortGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YoutubeShortGeneratorClient />
    </>
  );
}