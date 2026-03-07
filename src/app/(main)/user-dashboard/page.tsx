import type { Metadata } from "next";
import UsageDashboard from "./UsageDashboard";

export const metadata: Metadata = {
  title: "AI Tool Usage Dashboard – Track Voice, Image & Video Credits | Scenith",
  description:
    "Monitor your Scenith AI tool usage in real time. Track AI voice characters, image generation credits, background removals, video speed limits, and plan details — all in one dashboard.",
  keywords: [
    "scenith usage dashboard",
    "ai tool usage tracker",
    "voice generation usage",
    "image generation credits",
    "background removal usage",
    "scenith account dashboard",
    "scenith plan limits",
    "ai credits tracker",
    "tts usage monitor",
    "scenith tools",
  ],
  openGraph: {
    title: "AI Tool Usage Dashboard | Scenith",
    description:
      "See exactly how much of your Scenith plan you've used this month — voice chars, image credits, speed videos and more.",
    url: "https://scenith.io/dashboard",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "/images/og-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Usage Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Usage Dashboard | Scenith",
    description:
      "Track your AI tool usage limits and plan details in one clean interface.",
    images: ["/images/og-dashboard.jpg"],
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.io/dashboard",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6355dc",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Scenith Dashboard",
  },
  manifest: "/manifest.json",
};

export default function UsageDashboardPage() {
  return <UsageDashboard />;
}