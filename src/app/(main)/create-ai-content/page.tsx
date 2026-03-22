import type { Metadata } from "next";
import CreateAIContentClient from "./CreateAIContentClient";

export const metadata: Metadata = {
  title: "AI Content Creator – Generate Voice, Image & Video Instantly | Scenith",
  description:
    "Create AI-generated voices, images, and videos from a single page. Type a prompt, pick a mode, and generate professional content in seconds. Free to start — no card required.",
  keywords: [
    "AI content creator",
    "AI voice generator",
    "AI image generator",
    "AI video generator",
    "text to speech online",
    "text to image AI",
    "text to video AI",
    "free AI tools",
    "content creation AI",
    "AI media generator",
  ],
  openGraph: {
    title: "AI Content Creator – Voice, Image & Video in One Place | Scenith",
    description:
      "Switch between AI voice, image, and video generation on one page. Generate professional content from text in seconds — completely free to start.",
    type: "website",
    url: "https://scenith.in/create-ai-content",
    images: [
      {
        url: "/images/og-create-ai-content.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Content Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Creator – Voice, Image & Video | Scenith",
    description:
      "One page. Three AI generators. Create voices, images, and videos instantly.",
    images: ["/images/og-create-ai-content.jpg"],
    creator: "@scenith_1902",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://scenith.in/create-ai-content" },
};

export default function CreateAIContentPage() {
  return <CreateAIContentClient />;
}