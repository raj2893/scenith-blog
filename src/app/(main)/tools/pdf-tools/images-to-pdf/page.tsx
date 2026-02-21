import type { Metadata } from "next";
import ImagesToPdfClient from "./ImagesToPdfClient";

export const metadata: Metadata = {
  title: 'Images to PDF Converter Online Free - JPG, PNG to PDF | SCENITH',
  description: 'Convert images to PDF online for free. Combine multiple JPG, PNG, or other image formats into one PDF document. Drag to reorder, fast conversion.',
  keywords: [
    'images to PDF',
    'JPG to PDF',
    'PNG to PDF',
    'convert images to PDF',
    'image to PDF converter',
    'photos to PDF',
    'picture to PDF',
    'free image PDF converter',
    'combine images PDF',
    'multiple images to PDF'
  ],
  openGraph: {
    title: 'Convert Images to PDF Free - JPG, PNG to PDF Online',
    description: 'Turn multiple images into a single PDF document. Supports JPG, PNG, and other formats. Drag to reorder images and download your PDF instantly. Free and unlimited.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://scenith.in/tools/pdf-tools/images-to-pdf',
  },
};

export default function ImagesToPdfPage() {
  return <ImagesToPdfClient />;
}