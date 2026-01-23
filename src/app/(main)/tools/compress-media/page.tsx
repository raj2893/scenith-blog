import type { Metadata } from "next";
import MediaCompressionWorkspace from "./MediaCompressionWorkspace";

export const metadata: Metadata = {
  title: "Free Media Compressor - Images & Videos Online | SCENITH",
  description: "Compress images (JPEG, PNG, HEIC) and videos to your desired size instantly for free. Optimize your media for web, social media, and more with high-quality results. No signup required to explore!",
  keywords: [
    "media compressor",
    "image compressor",
    "video compressor",
    "free media compression",
    "compress JPEG",
    "compress PNG",
    "compress HEIC",
    "video compression online",
    "optimize media",
    "reduce file size",
    "free compression tool",
    "image optimization",
    "video optimization",
    "media compression free",
    "online compressor",
  ],
  openGraph: {
    title: "Free Media Compressor - Optimize Images & Videos Online",
    description: "Easily compress images and videos to reduce file size without losing quality. Supports JPEG, PNG, HEIC, and videos. Free, fast, and perfect for creators and businesses.",
    type: "website",
    images: [
      {
        url: "/images/og-media-compressor-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Media Compressor Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Media Compressor - Images & Videos in Seconds",
    description: "Compress images and videos effortlessly with our free online tool. Optimize for web and social media with instant downloads!",
    images: ["/images/twitter-card-media-compressor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/tools/compress-media",
  },
};

export default function CompressMediaPage() {
  return <MediaCompressionWorkspace />;
}