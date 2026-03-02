import type { Metadata } from "next";
import AddTextToImageClient from "./AddTextToImageClient";

export const metadata: Metadata = {
  title: "Add Text to Image Online Free – No Watermark | Scenith",
  description:
    "Add text to any image online for free. Customize fonts, colors, size, and position. Perfect for memes, quotes, watermarks, thumbnails & social media. No signup required to preview.",
  keywords: [
    "add text to image",
    "add text to image online free",
    "add text to photo",
    "text on image",
    "write on image online",
    "add caption to photo",
    "add text to image no watermark",
    "free text overlay image",
    "image text editor online",
    "put text on picture",
    "add words to photo",
    "text on photo editor",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/add-text-to-image",
  },
  openGraph: {
    title: "Add Text to Image Online Free – No Watermark | Scenith",
    description:
      "Add custom text, captions, and watermarks to any image in seconds. Free online tool with 50+ fonts, full color control, and no watermarks on export.",
    url: "https://scenith.in/tools/add-text-to-image",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/add-text-to-image.jpg",
        width: 1200,
        height: 630,
        alt: "Add Text to Image Online Free - Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Text to Image Online Free – No Watermark | Scenith",
    description:
      "Add custom text, captions & watermarks to images instantly. 50+ fonts, full customization, zero watermarks. Free forever.",
    images: ["https://scenith.in/og/add-text-to-image.jpg"],
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

export default function AddTextToImagePage() {
  return <AddTextToImageClient />;
}