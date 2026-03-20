import type { Metadata } from "next";
import AIBackgroundImageGeneratorClient from "./AIBackgroundImageGeneratorClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Free AI Background Image Generator — Create Custom Backgrounds Online (2026)",
  description:
    "Generate stunning AI backgrounds for websites, YouTube, Zoom, presentations, streaming, and design projects. 8 styles, instant results, no design skills needed. Free — no credit card required.",
  keywords: [
    "ai background image generator",
    "ai background generator free",
    "generate background image ai",
    "ai website background generator",
    "free background generator ai",
    "custom background image generator",
    "ai background creator",
    "ai generated backgrounds",
    "text to background image",
    "ai background for website",
    "youtube background generator ai",
    "zoom background ai generator",
    "streaming background generator",
    "ai wallpaper generator free",
    "abstract background ai generator",
    "gradient background ai",
    "ai background design generator",
    "background image creator free",
    "ai art background generator",
    "scenith ai background",
  ].join(", "),
  openGraph: {
    title: "Free AI Background Image Generator — Stunning Backgrounds in Seconds",
    description:
      "Create custom AI backgrounds for websites, YouTube, presentations, streaming, and Zoom. Type a description, get a beautiful background instantly. Free to use.",
    url: "https://scenith.in/tools/ai-background-image-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-background-image-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Background Image Generator by Scenith — Create Custom Backgrounds Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Background Image Generator — Custom Backgrounds Online",
    description:
      "Generate beautiful AI backgrounds for websites, YouTube, streaming, Zoom, and design projects. Free. Instant. No design skills needed.",
    images: ["https://scenith.in/og/ai-background-image-generator.jpg"],
    creator: "@scenithin",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-background-image-generator",
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
      "@id": "https://scenith.in/tools/ai-background-image-generator#webpage",
      url: "https://scenith.in/tools/ai-background-image-generator",
      name: "Free AI Background Image Generator — Create Custom Backgrounds Online (2026)",
      description:
        "Generate stunning AI backgrounds for websites, YouTube, Zoom, presentations, streaming, and design projects. 8 styles, instant results, no design skills needed.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@id": "https://scenith.in/tools/ai-background-image-generator#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "UseAction",
        target:
          "https://scenith.in/tools/ai-image-generation?utm_source=ai-background-image-generator&utm_medium=cta&utm_campaign=seo-landing&utm_content=hero",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://scenith.in/tools/ai-background-image-generator#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scenith.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://scenith.in/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Background Image Generator",
          item: "https://scenith.in/tools/ai-background-image-generator",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Background Image Generator",
      operatingSystem: "Web",
      applicationCategory: "MultimediaApplication",
      url: "https://scenith.in/tools/ai-image-generation",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier available with sign-up",
      },
      featureList: [
        "Text-to-background AI generation",
        "8 artistic styles: Realistic, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, Vintage, Artistic",
        "High-resolution 1024x1024 output",
        "Website backgrounds",
        "YouTube & streaming backgrounds",
        "Zoom & video call backgrounds",
        "Presentation backgrounds",
        "Wallpaper generation",
        "No watermarks",
        "Commercial use included",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "287",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "HowTo",
      name: "How to Generate a Custom AI Background Image",
      description:
        "Step-by-step guide to creating professional AI-generated backgrounds for any use case",
      totalTime: "PT1M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Describe your background",
          text: "Type a detailed description of the background you need — include mood, colors, style, setting, and any specific elements you want included.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Choose your art style",
          text: "Select from 8 art style presets. Realistic Photo for website backgrounds, Digital Art for gaming, Fantasy for creative projects, 3D Render for professional use.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Generate and download",
          text: "Click Generate. Your background is ready in under 15 seconds. Download as high-resolution PNG with no watermarks, ready for immediate use.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use AI-generated backgrounds commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All backgrounds generated through Scenith are royalty-free and cleared for commercial use including websites, YouTube, client work, and marketing materials. No attribution required.",
          },
        },
        {
          "@type": "Question",
          name: "What resolution are the AI backgrounds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Backgrounds are generated at 1024x1024 pixels by default. This is suitable for most web, social, and presentation uses. For extra-large formats like desktop wallpapers, you can use our editor to upscale.",
          },
        },
        {
          "@type": "Question",
          name: "What kinds of backgrounds can I generate with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can generate abstract backgrounds, nature landscapes, geometric patterns, gradients, textures, cityscapes, fantasy environments, space scenes, minimalist designs, watercolor washes, and virtually anything you can describe in a text prompt.",
          },
        },
        {
          "@type": "Question",
          name: "Is the AI background generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — creating an account on Scenith is free and you receive generation credits immediately, no credit card required. Paid plans start at $9/month for higher volume.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI backgrounds for YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. AI-generated backgrounds work great for YouTube channel art, video backgrounds, thumbnails, and channel banners. They are royalty-free and not subject to copyright claims.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a good AI background prompt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Describe the scene, mood, color palette, and any specific elements. For abstract backgrounds: 'soft lavender gradient with floating geometric shapes, minimal, clean.' For landscapes: 'misty mountain range at dawn, pastel sky, calm water reflection, wide format.' The more specific, the better the result.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI model is best for generating backgrounds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For photorealistic backgrounds (landscapes, cityscapes, nature), choose GPT Image 1 Medium or Imagen 4 Standard. For abstract and artistic backgrounds, FLUX 1.1 Pro and Stability AI Core produce excellent results. For anime/fantasy backgrounds, GPT Image 1 or Stability AI Core work best.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate a seamless tiling background?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To increase chances of a tileable result, add 'seamless pattern, repeating tile' to your prompt and use an abstract or geometric style. For guaranteed tiling, use the Scenith image editor to make small adjustments after generation.",
          },
        },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AIBackgroundImageGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIBackgroundImageGeneratorClient />
    </>
  );
}