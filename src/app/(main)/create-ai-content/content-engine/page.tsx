import type { Metadata } from "next";
import ContentEngineClient from "./ContentEngineClient";

export const metadata: Metadata = {
  title: "Content Engine – Plan & organize your content | Scenith",
  description:
    "Plan, organize and AI-generate a full content calendar across Instagram, TikTok, YouTube and X — then create each piece with Scenith's AI studio.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://scenith.in/create-ai-content/content-engine" },
};

export default function ContentEnginePage() {
  return (
    <>
      <link rel="preconnect" href="https://api.scenith.in" />
      <link rel="preconnect" href="https://cdn.scenith.in" />
      <ContentEngineClient />
    </>
  );
}
