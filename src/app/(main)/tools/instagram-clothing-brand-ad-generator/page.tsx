import type { Metadata } from "next";
import InstagramClothingAdPage from "./InstagramClothingAdClient";

export const metadata: Metadata = {
  title: "Free Instagram Clothing Brand Ad Generator | AI-Powered Fashion Ads | Scenith",
  description:
    "Generate stunning Instagram ads for your clothing brand in seconds. AI-powered voice narration, cinematic video ads, and editorial-quality product images — free to start. Trusted by fashion founders and boutique brands in 2026.",
  keywords: [
    "instagram clothing brand ad generator",
    "AI fashion ad creator",
    "clothing brand instagram ad maker",
    "free fashion ad generator",
    "AI generated clothing ads",
    "instagram reel ad for clothing brand",
    "boutique brand ad creator",
    "AI video ad for clothing brand",
    "fashion brand social media ad",
    "instagram ad maker for clothes",
    "AI image generator for fashion brands",
    "clothing brand voiceover generator",
    "fashion ad script generator",
    "instagram story ad clothing",
    "ecommerce fashion ad AI",
    "AI ad creator for boutique",
    "clothing brand content creator AI",
    "fashion brand reel generator",
    "product image AI clothing",
    "AI fashion marketing tool 2026",
  ],
  alternates: {
    canonical:
      "https://scenith.in/tools/instagram-clothing-brand-ad-generator",
  },
  openGraph: {
    title:
      "Free Instagram Clothing Brand Ad Generator — AI Voice, Image & Video",
    description:
      "Create scroll-stopping Instagram ads for your clothing brand in under 60 seconds. AI voiceovers, product visuals, and cinematic reels — no agency needed.",
    url: "https://scenith.in/tools/instagram-clothing-brand-ad-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/instagram-clothing-brand-ad-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Clothing Brand Ad Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Free Instagram Clothing Brand Ad Generator — AI Voice, Image & Video",
    description:
      "Generate scroll-stopping Instagram fashion ads with AI. Voice, image, and video — all free to start.",
    images: [
      "https://scenith.in/og/instagram-clothing-brand-ad-generator.jpg",
    ],
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
      "@id":
        "https://scenith.in/tools/instagram-clothing-brand-ad-generator#webpage",
      url: "https://scenith.in/tools/instagram-clothing-brand-ad-generator",
      name: "Free Instagram Clothing Brand Ad Generator | Scenith",
      description:
        "AI-powered tool for generating Instagram ads, voiceovers, product images, and video reels for clothing brands and fashion boutiques.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
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
            name: "Instagram Clothing Brand Ad Generator",
            item: "https://scenith.in/tools/instagram-clothing-brand-ad-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Instagram Clothing Brand Ad Generator",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier with 50 credits included",
      },
      featureList: [
        "AI voiceover for clothing brand ads",
        "AI product image generation for fashion",
        "AI video ad creation for Instagram Reels",
        "Image-to-video animation",
        "40+ voice styles and 20+ languages",
        "Cinematic video models including Kling 2.6 and Veo 3.1",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I generate an Instagram ad for my clothing brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply describe your clothing brand, product, and the mood of the ad in the prompt field. Choose from Voice, Image, or Video mode, then click Generate. Your ad content is ready in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the AI ad generator free for clothing brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith gives you 50 free credits on sign-up — no credit card required. These credits work across voice, image, and video generation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated clothing ads commercially on Instagram?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. All content generated on Scenith comes with full commercial rights. You can publish it on Instagram, run it as a paid ad, or use it in any commercial campaign.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models are used for fashion ad images?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 7+ AI models for image generation including GPT Image 1 (OpenAI), Imagen 4 (Google), FLUX 1.1 Pro, Grok Aurora, and Stability AI Core. For fashion, GPT Image 1 Medium and Grok Aurora are recommended for editorial-quality results.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create Instagram Reel ads for my clothing brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Use the Video tab to generate cinematic AI video clips in 9:16 (vertical), 1:1 (square), or 16:9 formats. Choose models like Kling 2.6 Pro or Veo 3.1 for high-quality Reel content.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InstagramClothingAdPage />
    </>
  );
}