import type { Metadata } from "next";
import ArticleToCarouselClient from "./ArticleToCarouselClient";

export const metadata: Metadata = {
  title: "Article to Carousel AI Generator — Turn Blog Posts into LinkedIn & Instagram Slides (Free)",
  description:
    "Convert any article, blog post, or long-form content into stunning AI-generated carousel slides in seconds. Free AI carousel image generator for LinkedIn, Instagram, and Twitter/X. No design skills needed.",
  keywords: [
    "article to carousel ai",
    "blog post to carousel generator",
    "ai carousel generator",
    "article to instagram carousel",
    "linkedin carousel generator ai",
    "convert article to slides ai",
    "text to carousel ai",
    "blog to carousel ai free",
    "ai image carousel generator",
    "article to social media carousel",
    "free ai carousel maker",
    "turn article into carousel",
    "content repurposing ai tool",
    "ai slide generator from text",
    "linkedin carousel ai free",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/article-to-carousel-ai-generator",
  },
  openGraph: {
    title: "Article to Carousel AI Generator — Free LinkedIn & Instagram Carousel Maker",
    description:
      "Paste your article. Get AI-generated carousel slides in 30 seconds. Works for LinkedIn, Instagram, Twitter/X carousels. Free to try — no design skills needed.",
    url: "https://scenith.in/tools/article-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/article-to-carousel-og.jpg",
        width: 1200,
        height: 630,
        alt: "Article to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article to Carousel AI Generator — Free LinkedIn & Instagram Slides",
    description:
      "Turn any blog post or article into AI-generated carousel slides in seconds. Free tool by Scenith.",
    images: ["https://cdn.scenith.in/og/article-to-carousel-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/article-to-carousel-ai-generator",
      url: "https://scenith.in/tools/article-to-carousel-ai-generator",
      name: "Article to Carousel AI Generator",
      description:
        "Free AI tool to convert articles, blog posts, and long-form content into visual carousel slides for LinkedIn, Instagram, and Twitter/X.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "Article to Carousel AI Generator", item: "https://scenith.in/tools/article-to-carousel-ai-generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Article to Carousel AI Generator",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "AI-powered tool that converts articles and blog posts into carousel slides for LinkedIn, Instagram, and Twitter/X using advanced image generation models.",
      url: "https://scenith.in/tools/article-to-carousel-ai-generator",
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
          name: "How do I convert an article into a carousel with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Copy your article text, break it into 3–10 key ideas or sections, write a brief prompt for each slide describing what the image should look like, then use Scenith's AI Carousel Generator to produce all slides simultaneously. Each slide can have its own AI-generated image, caption, and visual style.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI carousel generator for LinkedIn in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith's AI Carousel Generator supports LinkedIn-optimized 1:1 and 4:5 aspect ratios and uses models like GPT Image 1, Imagen 4, and Stability AI Core to produce professional-quality slides. It's free to start with 50 credits on signup.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn a blog post into Instagram carousel slides for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's free tier includes 50 credits which is enough to generate a 3-slide carousel. Each image costs 10–26 credits depending on the model. Sign up free at scenith.in/create-ai-content.",
          },
        },
        {
          "@type": "Question",
          name: "What image formats and aspect ratios does the carousel generator support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports Square (1:1) for both LinkedIn and Instagram, Portrait (9:16) for Instagram Stories and Reels covers, and Landscape (16:9) for Twitter/X carousels and blog header images. Output is high-resolution PNG.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need design skills to use this carousel generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You only need to write a text description (prompt) of what you want each slide to look like. The AI handles all the visual design, color, composition, and styling automatically.",
          },
        },
      ],
    },
  ],
};

export default function ArticleToCarouselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleToCarouselClient />
    </>
  );
}