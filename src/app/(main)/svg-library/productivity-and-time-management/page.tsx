// app/svg-library/productivity-time-management/page.tsx

import { Metadata } from "next";
import ProductivityIconsPage from "./ProductivityAndTimeManagement";

export const metadata: Metadata = {
  title: "Free Productivity & Time Management SVG Icons - 500+ | Scenith",
  description:
    "Download 500+ free productivity, time management, task, calendar, clock and goal SVG icons. Edit colors & size online instantly. No attribution required – perfect for apps, dashboards & tools.",
  keywords:
    "productivity icons, time management icons, task icons, calendar icons, clock icons, free svg icons, goal icons, schedule icons, deadline icons, project management icons, free icons svg",
  openGraph: {
    title: "Free Productivity & Time Management Icons – Edit Online | Scenith",
    description:
      "500+ high-quality SVG icons for productivity apps, calendars, task managers, time trackers and goal setting tools. Customize & download instantly.",
    type: "website",
    images: [
      {
        url: "/og-image-productivity-icons.png",
        width: 1200,
        height: 630,
        alt: "Scenith Productivity & Time Management Icons Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Productivity & Time Management SVG Icons – 500+",
    description:
      "Professional clock, calendar, task, deadline & goal icons – fully editable online, 100% free.",
  },
  alternates: {
    canonical: "https://scenith.com/svg-library/productivity-time-management",
  },
};

export default function ProductivityIconsLibraryPage() {
  return (
    <>
      <ProductivityIconsPage />
    </>
  );
}