// app/svg-library/business-analytics/page.tsx

import { Metadata } from "next";
import BusinessAnalyticsPage from "./BusinessAnalyticsPage";

export const metadata: Metadata = {
  title: "Free Business & Analytics SVG Icons - 800+ Charts, Graphs, KPI Icons | Scenith",
  description:
    "Download 800+ premium business analytics, data visualization, chart, graph, dashboard, KPI and reporting SVG icons. Edit colors & resize online instantly. 100% free, no attribution required – perfect for BI tools, dashboards, analytics platforms & enterprise apps.",
  keywords:
    "business analytics icons, data visualization icons, chart icons, graph icons, dashboard icons, KPI icons, analytics icons, reporting icons, statistics icons, metrics icons, business intelligence icons, data analytics icons, free svg icons, pie chart icons, bar chart icons, line graph icons, financial icons, revenue icons, growth icons, performance icons, tableau icons, power bi icons, analytics dashboard icons, data science icons, infographic icons, free business icons svg",
  openGraph: {
    title: "800+ Free Business & Analytics Icons – Professional Data Visualization SVG Library | Scenith",
    description:
      "Premium collection of business analytics, charts, graphs, KPIs, dashboards and reporting icons. Fully customizable, scalable SVG format. Perfect for BI platforms, analytics tools, SaaS dashboards and enterprise applications. Download instantly, no signup required.",
    type: "website",
    url: "https://scenith.com/svg-library/business-analytics",
    siteName: "Scenith",
    images: [
      {
        url: "https://scenith.com/og-image-business-analytics-icons.png",
        width: 1200,
        height: 630,
        alt: "Scenith Business & Analytics Icons Library - 800+ Professional SVG Icons for Data Visualization, Dashboards, Charts and KPIs",
      },
      {
        url: "https://scenith.com/og-image-business-analytics-icons-square.png",
        width: 1200,
        height: 1200,
        alt: "Business Analytics Icons - Charts, Graphs, Dashboards, KPIs",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@scenith",
    creator: "@scenith",
    title: "800+ Free Business & Analytics SVG Icons – Charts, Graphs, Dashboards, KPIs",
    description:
      "Professional business intelligence icons for data visualization, analytics platforms, dashboards and reporting tools. Fully editable online, 100% free, commercial use allowed.",
    images: ["https://scenith.com/og-image-business-analytics-icons.png"],
  },
  alternates: {
    canonical: "https://scenith.com/svg-library/business-analytics",
    languages: {
      "en-US": "https://scenith.com/svg-library/business-analytics",
      "es-ES": "https://scenith.com/es/svg-library/business-analytics",
      "fr-FR": "https://scenith.com/fr/svg-library/business-analytics",
      "de-DE": "https://scenith.com/de/svg-library/business-analytics",
    },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Design Resources",
  classification: "Business Analytics Icons, Data Visualization, SVG Icons",
  authors: [{ name: "Scenith Design Team", url: "https://scenith.com/about" }],
  creator: "Scenith",
  publisher: "Scenith",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#10b981",
    "theme-color": "#ffffff",
  },
};

export default function BusinessAnalyticsIconsLibraryPage() {
  return <BusinessAnalyticsPage />;
}