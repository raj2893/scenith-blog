import type { Metadata } from "next";
import ImageEditingClient from "./ImageEditingClient";

export const metadata: Metadata = {
  title: "Free Image Editor - Create Stunning Designs Online | SCENITH",
  description: "Create professional graphics with our free online image editor. Add text, shapes, filters, and effects. Perfect for social media posts, banners, and marketing materials. No download required!",
  keywords: [
    "free image editor",
    "online graphic design",
    "canva alternative",
    "design tool online",
    "image editor free",
    "graphic design software",
    "create social media graphics",
    "design banners online",
    "photo editor",
    "text to image",
    "shape editor",
    "filter editor",
    "free design tool",
    "web-based editor",
    "scenith editor",
  ],
  openGraph: {
    title: "Free Image Editor - Design Like a Pro Online",
    description: "Create stunning graphics with layers, text, shapes, and filters. Perfect for creators, businesses, and marketers. 100% free with unlimited projects!",
    type: "website",
    images: [
      {
        url: "/images/og-image-editor.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Image Editor Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Editor - Create Graphics in Minutes",
    description: "Professional image editing tool with layers, text, shapes, and effects. No experience needed!",
    images: ["/images/twitter-card-editor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/tools/image-editing",
  },
};

export default function ImageEditingPage() {
  return <ImageEditingClient />;
}