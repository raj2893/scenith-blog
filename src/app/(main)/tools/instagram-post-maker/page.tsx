import type { Metadata } from "next";
import InstagramPostMakerContent from './InstagramPostMakerContent';

export const metadata: Metadata = {
  title: "Free Instagram Post Maker – Create Stunning Posts Online | Scenith",
  description:
    "Design scroll-stopping Instagram posts in seconds with Scenith's free post maker. Custom text, filters, stickers & templates. Perfect 1080×1080px. No watermark. Start free now!",
  keywords: [
    "instagram post maker",
    "free instagram post creator",
    "instagram post maker online",
    "instagram post design",
    "create instagram post free",
    "instagram post template",
    "instagram graphic maker",
    "instagram post size",
    "free instagram template",
    "instagram post maker no watermark",
    "instagram carousel maker",
    "instagram story maker",
    "social media post maker",
    "instagram post generator",
    "canva alternative instagram",
    "instagram post 1080x1080",
    "instagram reel cover maker",
    "instagram feed design",
    "free social media graphics",
    "instagram post editor online",
  ],
  openGraph: {
    title: "Free Instagram Post Maker – Design Posts That Stop the Scroll | Scenith",
    description:
      "Create beautiful Instagram posts in minutes. Custom fonts, filters, stickers, and templates. 1080×1080px, no watermark, completely free. Boost your engagement today!",
    type: "website",
    url: "https://scenith.in/tools/instagram-post-maker",
    images: [
      {
        url: "/images/og-instagram-post-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Free Instagram Post Maker – Design Scroll-Stopping Posts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Instagram Post Maker – Get More Likes & Followers",
    description:
      "Create stunning Instagram posts with Scenith's free tool. Custom fonts, filters, no watermark. Start designing now!",
    images: ["/images/twitter-card-instagram-post-maker.jpg"],
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.in/tools/instagram-post-maker",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#E1306C",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Scenith Instagram Post Maker",
  },
  manifest: "/manifest.json",
};

export default function InstagramPostMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Scenith Instagram Post Maker",
              description:
                "Free online Instagram post maker with custom text, fonts, filters, stickers, and templates. Create perfect 1080×1080px Instagram posts instantly with no watermarks.",
              url: "https://scenith.in/tools/instagram-post-maker",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "1080×1080px Instagram-optimized canvas",
                "Story (1080×1920px) and Reel cover support",
                "Custom bold text and Google Fonts",
                "Image uploads and background photos",
                "Filters, overlays, and effects",
                "Shape and sticker library",
                "No watermark on exports",
                "PNG and JPG export",
                "Cloud project saving",
                "Mobile-friendly editor",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the correct size for an Instagram post?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Instagram recommends 1080×1080px for square posts, 1080×1350px for portrait posts, and 1080×566px for landscape posts. For Stories and Reels, the ideal size is 1080×1920px. Scenith's Instagram Post Maker pre-sets these exact canvas sizes so your content is always pixel-perfect.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Scenith's Instagram Post Maker really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Scenith's Instagram post maker is completely free with no watermarks, no subscriptions, and no hidden fees. Export unlimited posts in PNG or JPG format and post directly to Instagram.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I make Instagram carousel posts with this tool?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can create multiple slides using Scenith's multi-page project support, export each slide as an image, and upload them as a carousel post on Instagram.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need design experience to make Instagram posts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No design skills needed! Scenith's drag-and-drop interface and ready-made templates let anyone create professional-looking Instagram posts in minutes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I make my Instagram posts stand out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use bold, readable fonts, high-contrast colors, and a consistent visual style. Scenith gives you access to 50+ Google Fonts, color pickers, filters, shapes, and image overlays — everything you need to create a cohesive and eye-catching Instagram aesthetic.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://scenith.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tools",
                  item: "https://scenith.in/tools",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Instagram Post Maker",
                  item: "https://scenith.in/tools/instagram-post-maker",
                },
              ],
            },
          ]),
        }}
      />
      <InstagramPostMakerContent />
    </>
  );
}