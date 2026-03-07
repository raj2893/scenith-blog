import type { Metadata } from "next";
import UsageDashboard from "./UsageDashboard";

/* ─────────────────────────────────────────────────────────────────
   SEO — Usage Dashboard
   This page is authenticated-only. We mark it noindex to prevent
   Google from crawling personal dashboard pages, while still
   providing structured metadata for in-app link unfurling and
   social previews (Slack, Teams, etc.).
───────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Usage Dashboard | Scenith — Track Your AI Tool Usage",
  description:
    "Monitor your Scenith plan usage in real time. Track AI voice characters, image credits, background removals, video speed limits, and more — all in one dashboard.",
  keywords: [
    "scenith usage dashboard",
    "ai tool usage tracker",
    "voice generation usage",
    "image generation credits",
    "background removal usage",
    "scenith account dashboard",
    "scenith plan limits",
  ],
  robots: {
    // Personal dashboards must not be indexed
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    title: "Scenith Usage Dashboard",
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
    title: "Scenith Usage Dashboard",
    description: "Track your AI tool usage limits and plan details in one clean interface.",
    images: ["/images/og-dashboard.jpg"],
  },
  alternates: {
    canonical: "https://scenith.io/dashboard",
  },
};

export default function UsageDashboardPage() {
  return <UsageDashboard />;
}