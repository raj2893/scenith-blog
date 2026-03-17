import type { Metadata } from "next";
import StoryVideoGeneratorClient from "./StoryVideoGeneratorClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Story Video AI Generator — Turn Your Story Into a Cinematic Video | Scenith",
  description:
    "Transform any story, idea, or narrative into a stunning AI-generated video. Scenith's Story Video AI Generator brings your characters, scenes, and plots to life — no camera, no crew, just your imagination.",
  keywords: [
    "story video ai generator",
    "ai story video maker",
    "turn story into video ai",
    "narrative video generator ai",
    "ai storytelling video creator",
    "text story to video",
    "ai cinematic story video",
    "story video maker online",
    "ai generated story video",
    "short film ai generator",
    "visual story creator ai",
    "ai video from story 2026",
    "storytelling video ai tool",
    "convert story to video ai",
    "ai video narrative generator",
    "fiction video ai maker",
    "ai animation story video",
    "generate story video online free",
    "best ai story video generator 2026",
    "ai video for creative writers",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/story-video-ai-generator",
  },
  openGraph: {
    title: "Story Video AI Generator — Bring Your Story to Life on Screen",
    description:
      "From fairy tales to brand origin stories, Scenith's AI turns any narrative into a cinematic video in under 2 minutes. Powered by Kling 2.5 Pro and Veo 3.",
    url: "https://scenith.in/tools/story-video-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/story-video-ai-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Story Video AI Generator — Turn stories into cinematic videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Video AI Generator — Scenith",
    description:
      "Type your story. Watch it become a video. AI-generated cinematic visuals from any narrative or text prompt.",
    images: ["https://scenith.in/og/story-video-ai-generator.jpg"],
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

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/story-video-ai-generator",
      url: "https://scenith.in/tools/story-video-ai-generator",
      name: "Story Video AI Generator",
      description:
        "AI-powered tool to turn any story, narrative, or creative text into a cinematic video. No camera or editing required.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Story Video AI Generator",
            item: "https://scenith.in/tools/story-video-ai-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Story Video AI Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/story-video-ai-generator",
      description:
        "Transform written stories, narratives, and creative text into AI-generated cinematic video clips. Supports multiple aspect ratios, 1080p resolution, and native AI audio.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Free to start. Credit-based plans from $15/mo.",
      },
      featureList: [
        "Story to Video AI Generation",
        "Cinematic 1080p Output",
        "Multi-Scene Narrative Support",
        "AI Audio & Ambient Sound",
        "Multiple AI Models (Kling, Veo 3)",
        "Instant MP4 Download",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI generate a video from a story?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. With Scenith's Story Video AI Generator, you describe each scene of your story as a text prompt and the AI renders it as a photorealistic or cinematic video clip. Chain multiple clips together to tell your full story.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI tool for story videos in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith is among the most capable platforms for AI story videos in 2026, running on top-tier models including Kling 2.5 Pro and Google DeepMind's Veo 3. These models produce photorealistic, emotionally resonant video that suits narrative storytelling.",
          },
        },
        {
          "@type": "Question",
          name: "How do I turn a written story into a video using AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Break your story into visual scenes. For each scene, write a descriptive text prompt on Scenith (subject, action, setting, mood, cinematography). Generate each scene as a separate clip, then assemble in any video editor. Scenith exports clean 1080p MP4 files ready for editing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I make a short film with AI video generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many independent creators are producing short films entirely or partially with AI video generators like Scenith. You generate scene-by-scene clips from prompts, use AI or recorded voiceover, add music, and assemble in a standard editor. The result is a fully produced short film at a fraction of traditional production cost.",
          },
        },
        {
          "@type": "Question",
          name: "What types of stories work best for AI video generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visually descriptive stories work best — fantasy, sci-fi, nature narratives, brand stories, historical scenes, fairy tales, and thriller scenes all generate extremely compelling AI video. Stories with clear setting, mood, and action descriptions produce the most cinematic results.",
          },
        },
        {
          "@type": "Question",
          name: "Is AI story video generation free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers a credit-based model with starter credits for new accounts. Paid plans begin at $15/month. Generating a story video scene (5 seconds, 1080p) costs between 10 and 50 credits depending on the AI model selected.",
          },
        },
        {
          "@type": "Question",
          name: "How many scenes can I generate for a story video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no hard limit on the number of scenes you can generate. Each generation produces a 5 or 10-second clip. For a 2-minute story video, you would generate roughly 12–24 individual scene clips and assemble them. Your available credits determine total output volume.",
          },
        },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StoryVideoGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoryVideoGeneratorClient />
    </>
  );
}