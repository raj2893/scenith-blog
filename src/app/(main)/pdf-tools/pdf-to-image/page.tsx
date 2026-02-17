import type { Metadata } from "next";
import PdfToImagePage from "./PdfToImagePage";

export const metadata: Metadata = {
  title: "PDF to Image Converter Online – Convert PDF Pages to JPG, PNG & WebP Free | SCENITH",
  description:
    "Convert PDF to image online free. Transform every PDF page into high-quality JPG, PNG, or WebP images in seconds.No watermark, no limits. Professional 300 DPI output for print, web & presentations.",
  keywords: [
    "pdf to image",
    "pdf to image converter",
    "convert pdf to image online",
    "pdf to image free",
    "pdf to jpg converter",
    "pdf to png converter",
    "pdf to webp",
    "pdf page to image",
    "extract images from pdf",
    "pdf image extractor online",
    "convert pdf to jpg free",
    "pdf to picture converter",
    "pdf to image without watermark",
    "best pdf to image converter",
    "pdf to image high quality",
    "pdf to image 300 dpi",
    "online pdf to image converter ",
    "pdf to image bulk converter",
    "pdf to image download zip",
    "pdf page extractor online",
  ],
  openGraph: {
    title: "PDF to Image Converter – Free, Fast, High Quality | SCENITH",
    description:
      "Turn every page of your PDF into a crisp JPG, PNG, or WebP image. Choose 72, 150, or 300 DPI quality. Free bulk download as ZIP .",
    type: "website",
    url: "https://scenith.in/pdf-tools/pdf-to-image",
    images: [
      {
        url: "https://scenith.in/images/pdf-to-image-og.png",
        width: 1200,
        height: 630,
        alt: "SCENITH PDF to Image Converter – Convert PDF pages to JPG, PNG, WebP online free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF to Image Converter Online – JPG, PNG & WebP | SCENITH",
    description:
      "Convert PDF pages to high-quality images instantly. JPG, PNG, WebP. 72–300 DPI. Download all as ZIP. No watermarks.",
    images: ["https://scenith.in/images/pdf-to-image-og.png"],
  },
  alternates: {
    canonical: "https://scenith.in/pdf-tools/pdf-to-image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return <PdfToImagePage />;
}