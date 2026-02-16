import type { Metadata } from "next";
import CompressPdfOnlineClient from './CompressPdfOnlineClient';

export const metadata: Metadata = {
  title: "Compress PDF Online Free - Reduce PDF File Size Instantly (2024)",
  description:
    "Compress PDF files online for free. Reduce PDF size by up to 90% while maintaining quality. No signup required. Works on any device. Instant download after compression.",
  keywords: [
    "compress pdf online",
    "compress pdf online free",
    "reduce pdf file size online",
    "compress pdf without losing quality",
    "pdf size reducer online free",
    "make pdf smaller online",
    "pdf compressor online",
    "shrink pdf online free",
    "compress pdf to 200kb online",
    "compress pdf to 1mb online",
    "reduce pdf size without losing quality",
    "online pdf compressor no upload limit",
    "best pdf compressor online",
    "fast pdf compression online",
    "compress large pdf online",
    "compress pdf for email",
    "compress pdf for whatsapp",
    "pdf file size reducer online free no sign up",
  ],
  openGraph: {
    title: "Compress PDF Online Free - Reduce PDF File Size by Up to 90%",
    description:
      "The fastest free PDF compressor online. Reduce PDF size by up to 90% without losing quality. No signup, no limits, instant MP3 download. Trusted by 50,000+ users.",
    type: "website",
    url: "https://scenith.in/pdf-tools/compress-pdf-online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Online Free - Reduce PDF Size Instantly",
    description:
      "Compress PDF files online in seconds. Choose Low, Medium, or High compression. Free, secure, and works on any device.",
  },
  alternates: {
    canonical: "/pdf-tools/compress-pdf-online",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function CompressPdfOnlinePage() {
  return <CompressPdfOnlineClient />;
}