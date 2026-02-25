import type { Metadata } from "next";
import AIVideoGenerationClient from "./AIVideoGenerationClient";

export const metadata: Metadata = {
  title: "AI Video Generator — Text to Video & Image to Video | Scenith",
  description:
    "Generate stunning AI videos from text or images in seconds. Cinematic quality, 1080p resolution, native audio. Powered by Kling, Wan & Google Veo 3.",
  openGraph: {
    title: "AI Video Generator — Text to Video | Scenith",
    description:
      "Create cinematic AI videos from text descriptions or reference images. Multiple models, 1080p resolution, audio support.",
    type: "website",
    url: "https://scenith.in/tools/ai-video-generation",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator — Scenith",
    description:
      "Turn text into stunning AI videos. Kling, Wan 2.5, and Google Veo 3 — all in one place.",
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generation",
  },
};

export default function AIVideoGenerationPage() {
  return <AIVideoGenerationClient />;
}