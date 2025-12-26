import { Metadata } from "next";
import LandingPageClient from "../components/LandingPageClient";


export const metadata: Metadata = {
  title: "SCENITH - AI-Powered Video Editing & Content Creation Platform | Free Online Tools",
  description: "Create stunning videos with Scenith's AI-powered platform. 7+ professional tools including AI voice generation, subtitle creation, background removal, video editing & more. Join 10,000+ creators. Free to start!",
};

export default function HomePage() {
  return <LandingPageClient />;
}