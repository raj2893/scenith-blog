// app/tools/ai-voice-benefits/page.tsx
import type { Metadata } from "next";
import AIVoiceBenefits from "./AIVoiceBenefits";

export const metadata: Metadata = {
  title: "AI Voice Generator Benefits 2025: Why Text to Speech Is a Game-Changer | SCENITH",
  description:
    "Discover the powerful benefits of AI voice generators and text-to-speech technology in 2025. Learn massive cost savings, lightning-fast production, perfect consistency, multilingual support, best practices, real-world applications, future trends, and how to start creating professional audio for free.",
  keywords: [
    "AI voice generator benefits",
    "text to speech advantages 2025",
    "free AI voice generator",
    "AI text to speech benefits",
    "benefits of AI voice generation",
    "why use AI voice generator",
    "AI voice over cost savings",
    "best AI voice generator 2025",
    "text to voice online benefits",
    "AI TTS for content creators",
    "AI voice generator vs human",
    "multilingual AI voice benefits",
    "AI voice generation scalability",
    "future of AI text to speech",
    "professional AI voiceover guide",
  ],
  openGraph: {
    title: "AI Voice Generator Benefits 2025: Why Text to Speech Is Revolutionizing Content",
    description:
      "Explore the real advantages of AI voice generation in 2025: 90%+ cost savings, instant generation, global reach, perfect consistency, and more. Start creating professional voiceovers for free today.",
    type: "article",
    images: [
      {
        url: "/images/og-ai-voice-benefits-2025.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "2025 AI Voice Generator Benefits - Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Generator Benefits 2025 | SCENITH",
    description:
      "Massive cost savings, instant audio creation, multilingual support & more – discover why AI voice generation is essential in 2025.",
    images: ["/images/twitter-ai-voice-benefits-2025.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/tools/ai-voice-benefits",
  },
};

export default function AIVoiceBenefitsPage() {
  return <AIVoiceBenefits />;
}