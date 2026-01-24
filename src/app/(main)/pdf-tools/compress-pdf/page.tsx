import type { Metadata } from "next";
import CompressPdfClient from "./CompressPdfClient";

export const metadata: Metadata = {
  title: 'Compress PDF Online Free - Reduce PDF File Size | SCENITH',
  description: 'Compress PDF files to reduce size while maintaining quality. Choose compression level or set custom percentage. Fast, free, and secure PDF compression - no file size limits!',
  keywords: [
    'compress PDF online',
    'reduce PDF size',
    'PDF compressor free',
    'shrink PDF',
    'make PDF smaller',
    'PDF file size reducer',
    'compress PDF quality',
    'free PDF compression',
    'optimize PDF size',
    'PDF optimizer'
  ],
  openGraph: {
    title: 'Compress PDF Free - Reduce PDF File Size Online',
    description: 'Reduce PDF file size by up to 75% while maintaining quality. Choose from low, medium, high compression or set custom percentage. Fast and secure compression.',
    type: 'website',
  },
  alternates: {
    canonical: '/pdf-tools/compress-pdf',
  },
};

export default function CompressPdfPage() {
  return <CompressPdfClient />;
}