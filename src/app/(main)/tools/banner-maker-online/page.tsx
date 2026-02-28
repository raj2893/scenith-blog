import type { Metadata } from "next";
import BannerMakerOnlineClient from "./BannerMakerOnlineClient";

export const metadata: Metadata = {
  title: "Free Online Banner Maker - Create Stunning Banners in Minutes | Scenith",
  description:
    "Create professional banners for websites, social media, and ads in seconds — no design skills needed. Free online banner maker with templates, custom text, shapes, and one-click export. No watermarks.",
  keywords: [
    "free online banner maker",
    "banner maker online",
    "create banner online free",
    "banner design tool",
    "website banner creator",
    "social media banner maker",
    "ad banner creator",
    "online banner generator",
    "free banner creator no watermark",
    "banner maker for YouTube",
    "Facebook cover banner maker",
    "LinkedIn banner maker",
    "promotional banner creator",
    "custom banner online",
  ].join(", "),
  alternates: {
    canonical: "https://scenith.in/tools/banner-maker-online",
  },
  openGraph: {
    title: "Free Online Banner Maker – No Watermarks, No Limits | Scenith",
    description:
      "Design eye-catching banners for websites, ads, and social media — free, fast, and no downloads required. Export as PNG, JPG, or PDF instantly.",
    url: "https://scenith.in/tools/banner-maker-online",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og-banner-maker.png",
        width: 1200,
        height: 630,
        alt: "Scenith Free Online Banner Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Banner Maker | Scenith",
    description:
      "Create professional banners in minutes — free forever, no watermarks, no software. Try Scenith's banner maker now.",
    images: ["https://scenith.in/og-banner-maker.png"],
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

export default function BannerMakerOnlinePage() {
  return <BannerMakerOnlineClient />;
}