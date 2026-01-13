import { Metadata } from "next";
import ElementsLibraryClient from "./ElementsLibraryClient";

export const metadata: Metadata = {
  title: "Free SVG Icons Library - 1000+ High-Quality Vector Graphics | Scenith",
  description: "Browse and customize thousands of free SVG icons and graphics. Edit any icon instantly in our online image editor. Perfect for web design, apps, and creative projects. No attribution required.",
  keywords: "free svg icons, vector graphics, icon library, flaticon alternative, free icons, svg download, customizable icons, web design icons, app icons, social media icons",
  openGraph: {
    title: "Free SVG Icons Library - Edit & Customize | Scenith",
    description: "Discover 1000+ free, high-quality SVG icons. Edit any icon in our online editor - change colors, resize, and export instantly.",
    type: "website",
    images: [
      {
        url: "/og-image-svg-library.png",
        width: 1200,
        height: 630,
        alt: "Scenith SVG Icons Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SVG Icons Library - 1000+ Vector Graphics",
    description: "Browse and edit free SVG icons instantly. Perfect for designers and developers.",
  },
  alternates: {
    canonical: "https://scenith.com/svg-library",
  },
};

export default function SvgLibraryPage() {
  return (
    <>
      <ElementsLibraryClient />
    </>
  );
}