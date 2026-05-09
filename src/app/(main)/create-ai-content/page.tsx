// app/create-ai-content/page.tsx
import type { Metadata } from "next";
import CreateAIContentClient from "./CreateAIContentClient";

export const metadata: Metadata = {
  title: "AI Content Creator – Generate Voice, Image & Video Instantly | Scenith",
  description:
    "Create AI-generated voices, images, and videos from a single page. Type a prompt, pick a mode, and generate professional content in seconds. Free to start — no card required.",
  keywords: [
    "AI content creator", "AI voice generator", "AI image generator",
    "AI video generator", "text to speech online", "text to image AI",
    "text to video AI", "free AI tools", "content creation AI", "AI media generator",
  ],
  openGraph: {
    title: "AI Content Creator – Voice, Image & Video in One Place | Scenith",
    description: "Switch between AI voice, image, and video generation on one page. Generate professional content from text in seconds — completely free to start.",
    type: "website",
    url: "https://scenith.in/create-ai-content",
    images: [{ url: "/images/og-create-ai-content.jpg", width: 1200, height: 630, alt: "Scenith AI Content Creator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Creator – Voice, Image & Video | Scenith",
    description: "One page. Three AI generators. Create voices, images, and videos instantly.",
    images: ["/images/og-create-ai-content.jpg"],
    creator: "@scenith_1902",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://scenith.in/create-ai-content" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://scenith.in/create-ai-content#webapp",
      name: "Scenith AI Content Creator",
      description: "Free AI-powered platform to generate voices, images, and videos from text. Supports GPT Image 2, Imagen 4, Kling, Veo 3.1, Wan 2.5, Google TTS, OpenAI TTS, and Azure Neural TTS.",
      url: "https://scenith.in/create-ai-content",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      inLanguage: ["en-IN", "hi-IN"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
      featureList: [
        "AI voice generation", "AI image generation", "AI video generation",
        "40+ natural voices", "8 art styles", "6 image models", "11 video models",
        "Commercial use rights", "No watermarks", "Instant download",
      ],
      author: { "@type": "Organization", "@id": "https://scenith.in/#organization", name: "Scenith" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "3241", bestRating: "5", worstRating: "1" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Scenith AI Content Creator free?", acceptedAnswer: { "@type": "Answer", text: "Yes — you get 50 free credits on sign-up with no credit card required. Credits work across voice, image, and video generation." } },
        { "@type": "Question", name: "What AI models are available?", acceptedAnswer: { "@type": "Answer", text: "For images: GPT Image 2, Imagen 4, FLUX 1.1 Pro, Grok Aurora, Nano Banana Pro, Stability AI Core. For video: Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine, Runway Gen-4.5, Hailuo, Luma Ray, Cosmos. For voice: Google TTS, OpenAI TTS, Azure Neural TTS." } },
        { "@type": "Question", name: "Can I use the content commercially?", acceptedAnswer: { "@type": "Answer", text: "All content generated on Scenith comes with full commercial rights. No attribution required." } },
        { "@type": "Question", name: "How fast is content generation?", acceptedAnswer: { "@type": "Answer", text: "Voice: ~3 seconds. Images: 10–30 seconds. Videos: 30–120 seconds depending on model and duration." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "AI Content Creator", item: "https://scenith.in/create-ai-content" },
      ],
    },
  ],
};

export default function CreateAIContentPage() {
  return (
    <>
      {/* Preconnect to CDN and API — eliminates connection setup time on first fetch */}
      <link rel="preconnect" href="https://cdn.scenith.in" />
      <link rel="dns-prefetch" href="https://cdn.scenith.in" />
      <link rel="preconnect" href="https://api.scenith.in" />
      <link rel="dns-prefetch" href="https://api.scenith.in" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CreateAIContentClient />
    </>
  );
}