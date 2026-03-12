// app/svg-library/bundled/saas-ui-interface-icons/page.tsx

import { Metadata } from "next";
import SaaSUIIconsPage from "./SaaSUIIconsPage";

export const metadata: Metadata = {
  title: "Free SaaS UI Interface Icons – 1000+ SVG Icons for Apps, Dashboards & Web Products | Scenith",
  description:
    "Download 1000+ premium SaaS UI interface SVG icons free. Navigation, buttons, forms, modals, notifications, onboarding, settings, billing & more. Edit colors online instantly. No attribution required – built for SaaS products, web apps, dashboards, and design systems.",
  keywords:
    "saas ui icons, interface icons svg, ui component icons, saas icons free, web app icons, dashboard ui icons, navigation icons, button icons, modal icons, notification icons, sidebar icons, settings icons, billing icons, onboarding icons, user interface icons, free ui icons svg, react ui icons, design system icons, saas design icons, product ui icons, app interface icons, free svg icons 2026, ui kit icons, figma ui icons, component library icons, ux icons",
  openGraph: {
    title: "1000+ Free SaaS UI Interface Icons – Professional SVG Icon Library for Web Apps | Scenith",
    description:
      "The definitive SaaS UI icon library. Navigation, modals, forms, billing, onboarding, notifications, settings & 50+ component categories. Fully customizable SVG icons built for modern SaaS products. Edit online, download free, commercial use included.",
    type: "website",
    url: "https://scenith.in/svg-library/bundled/saas-ui-interface-icons",
    siteName: "Scenith",
    images: [
      {
        url: "https://scenith.in/og-image-saas-ui-interface-icons.png",
        width: 1200,
        height: 630,
        alt: "Scenith SaaS UI Interface Icons – 1000+ Free SVG Icons for Navigation, Modals, Forms, Billing, Onboarding and More",
      },
      {
        url: "https://scenith.in/og-image-saas-ui-interface-icons-square.png",
        width: 1200,
        height: 1200,
        alt: "SaaS UI Interface Icons – Free SVG Library for Web Apps and Dashboards",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@scenith",
    creator: "@scenith",
    title: "1000+ Free SaaS UI Interface SVG Icons – Built for Modern Web Apps",
    description:
      "Navigation, modals, billing, onboarding, notifications & 50+ UI categories. Fully editable, 100% free, commercial use allowed. Perfect for SaaS products and design systems.",
    images: ["https://scenith.in/og-image-saas-ui-interface-icons.png"],
  },
  alternates: {
    canonical: "https://scenith.in/svg-library/bundled/saas-ui-interface-icons",
    languages: {
      "en-US": "https://scenith.in/svg-library/bundled/saas-ui-interface-icons",
      "es-ES": "https://scenith.in/es/svg-library/bundled/saas-ui-interface-icons",
      "fr-FR": "https://scenith.in/fr/svg-library/bundled/saas-ui-interface-icons",
      "de-DE": "https://scenith.in/de/svg-library/bundled/saas-ui-interface-icons",
      "ja-JP": "https://scenith.in/ja/svg-library/bundled/saas-ui-interface-icons",
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
  category: "Design Resources",
  classification: "SaaS UI Icons, Interface Design, SVG Icon Library",
  authors: [{ name: "Scenith Design Team", url: "https://scenith.in/about" }],
  creator: "Scenith",
  publisher: "Scenith",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#6366f1",
    "theme-color": "#ffffff",
  },
};

export default function SaaSUIInterfaceIconsLibraryPage() {
  return <SaaSUIIconsPage />;
}