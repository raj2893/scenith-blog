import { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Scenith Pricing - Choose Your Plan | Free, Creator & Studio",
  description:
    "Upgrade your Scenith experience with premium plans. Get more AI voice characters, access to all premium voices, and advanced features. Starting at ₹499/month for Indian users.",
  keywords: [
    'scenith pricing',
    'pricing plans',
    'upgrade scenith',
    'ai voice generator pricing',
    'text to speech pricing',
    'premium ai voices',
    'creator plan',
    'studio plan'
  ],
  openGraph: {
    title: 'Scenith Pricing - Simple & Transparent Plans',
    description: 'Choose the perfect plan: Free, Creator (₹499/$15), or Studio (₹1299/$25). Unlock more characters and premium AI voices.',
    images: ['/images/og-pricing.jpg'],
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}