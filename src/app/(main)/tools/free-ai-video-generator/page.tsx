import type { Metadata } from "next";
import FreeAIVideoGeneratorClient from "./FreeAIVideoGeneratorClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Free AI Video Generator — Create Videos from Text & Images Online (2026)",
  description:
    "Generate stunning AI videos for free using just a text prompt or image. No download, no credit card, no editing skills needed. Try Wan 2.5, Kling 2.6 Pro, Veo 3.1 & more — all in your browser.",
  keywords: [
    "free ai video generator",
    "ai video generator free",
    "text to video ai free",
    "ai video maker online free",
    "free text to video generator",
    "generate video from text free",
    "ai video generator no watermark",
    "image to video ai free",
    "free ai video maker 2026",
    "best free ai video generator",
    "create ai video online free",
    "free video generator ai no sign up",
    "scenith ai video",
    "kling ai free",
    "veo 3 free",
    "wan 2.5 free online",
    "ai generated videos free",
    "text prompt video generator",
    "free video from prompt",
    "cinematic ai video free",
  ].join(", "),
  openGraph: {
    title: "Free AI Video Generator — Make Videos from Text in Seconds",
    description:
      "Turn any text prompt or image into a high-quality AI-generated video. Powered by Wan 2.5, Kling 2.6 Pro, and Veo 3.1. Try it free — no card required.",
    url: "https://scenith.in/tools/free-ai-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/free-ai-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free AI Video Generator by Scenith — Text to Video, Image to Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Video Generator — Create Videos from Text Online",
    description:
      "Generate cinematic AI videos from a text prompt or image. Free to try. Powered by Wan 2.5, Kling 2.6, Veo 3.1 and more.",
    images: ["https://scenith.in/og/free-ai-video-generator.jpg"],
    creator: "@scenithin",
  },
  alternates: {
    canonical: "https://scenith.in/tools/free-ai-video-generator",
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

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/free-ai-video-generator#webpage",
      url: "https://scenith.in/tools/free-ai-video-generator",
      name: "Free AI Video Generator — Create Videos from Text & Images Online (2026)",
      description:
        "Generate stunning AI videos for free using just a text prompt or image. No download, no credit card, no editing skills needed.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: { "@id": "https://scenith.in/tools/free-ai-video-generator#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "UseAction",
        target: "https://scenith.in/tools/ai-video-generation?utm_source=free-ai-video-generator&utm_medium=cta&utm_campaign=seo-landing",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scenith.in/tools/free-ai-video-generator#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        { "@type": "ListItem", position: 3, name: "Free AI Video Generator", item: "https://scenith.in/tools/free-ai-video-generator" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Free AI Video Generator",
      operatingSystem: "Web",
      applicationCategory: "MultimediaApplication",
      url: "https://scenith.in/tools/ai-video-generation",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier includes 50 generation credits",
      },
      featureList: [
        "Text to Video generation",
        "Image to Video generation",
        "Multiple AI models: Wan 2.5, Kling 2.6 Pro, Veo 3.1",
        "1080p HD output",
        "5s and 10s video durations",
        "16:9, 9:16, 1:1 aspect ratios",
        "Native AI audio generation",
        "No watermark on output",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "312",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the AI video generator really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's AI video generator is free to start — you get 50 credits the moment you create an account, with no credit card required. Each credit covers a portion of a video generation depending on the model and duration chosen.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an AI video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI videos are ready within 30 to 120 seconds depending on the model selected, the video duration, and current queue load. Fast models like Wan 2.5 typically complete in under 45 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What AI video models does Scenith support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports multiple state-of-the-art AI video models including Wan 2.5, Kling 2.5 Turbo, Kling 2.6 Pro, Veo 3.1 Fast, and Veo 3.1. Each model has different strengths — Wan 2.5 is great for speed, Kling 2.6 Pro for cinematic quality, and Veo 3.1 for photorealistic results.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate a video from an image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith supports both Text-to-Video and Image-to-Video generation. Simply upload any image and describe the motion you want — the AI will animate it into a seamless video clip.",
          },
        },
        {
          "@type": "Question",
          name: "Does the free AI video generator add watermarks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Videos generated through Scenith are watermark-free on all plans, including the free tier.",
          },
        },
        {
          "@type": "Question",
          name: "What aspect ratios and resolutions are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 16:9 (landscape/YouTube), 9:16 (portrait/Reels/TikTok), and 1:1 (square/Instagram) aspect ratios. Output resolution goes up to 1080p Full HD depending on the model chosen.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI-generated videos include audio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, select models like Veo 3.1 support native AI audio generation — including ambient sound, voice, and sound effects — synchronized with the video content.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between Text-to-Video and Image-to-Video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Text-to-Video generates a video entirely from a written description — the AI creates every frame from scratch. Image-to-Video takes an existing image you upload and animates it using your motion prompt — bringing a still photo to life.",
          },
        },
      ],
    },
  ],
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function FreeAIVideoGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreeAIVideoGeneratorClient />
    </>
  );
}