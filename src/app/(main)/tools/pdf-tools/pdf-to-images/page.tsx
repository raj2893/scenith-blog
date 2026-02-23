import type { Metadata } from "next";
import PdfToImagesClient from "./PdfToImagesClient";

export const metadata: Metadata = {
  title: 'PDF to Images Converter Online Free - Extract PDF Pages as JPG/PNG | SCENITH',
  description: 'Convert PDF to images online for free. Extract all pages as high-quality JPG or PNG images. Fast conversion, maintain quality - no file size limits or signup!',
  keywords: [
    'PDF to images',
    'PDF to JPG',
    'PDF to PNG',
    'convert PDF to images',
    'extract PDF pages',
    'PDF page to image',
    'PDF image extractor',
    'free PDF to image converter',
    'PDF to picture',
    'save PDF as images'
  ],
  openGraph: {
    title: 'Convert PDF to Images Free - Extract Pages as JPG/PNG',
    description: 'Extract all pages from PDF as high-quality images. Convert PDF to JPG or PNG format. Fast, free, and maintains original quality. Download all images instantly.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://scenith.in/tools/pdf-tools/pdf-to-images',
  },
};

export default function PdfToImagesPage() {
  return <PdfToImagesClient />;
}