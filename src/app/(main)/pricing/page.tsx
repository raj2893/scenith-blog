import { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Scenith Pricing — Plans for AI Creation & Content Planning",
  description:
    "Scenith plans from ₹799/mo. Generate AI images, videos and voiceovers, and plan your content calendar with Content Engine. Free plan includes 50 credits every month, no card required.",
  keywords: [
    'scenith pricing',
    'pricing plans',
    'ai content creation pricing',
    'ai video generator pricing',
    'ai image generator pricing',
    'ai voice generator pricing',
    'content planning tool pricing',
    'creator plan',
  ],
  openGraph: {
    title: 'Scenith Pricing — Create with AI, Plan with Content Engine',
    description:
      'Creator Lite ₹799, Creator Spark ₹1,749, Creator Odyssey ₹3,599. All AI models unlocked, no watermark, and Content Engine to plan what you post next. Start free with 50 credits a month.',
    images: ['/images/og-pricing.jpg'],
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}