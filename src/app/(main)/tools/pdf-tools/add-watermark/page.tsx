import type { Metadata } from "next";
import AddWatermarkClient from "./AddWatermarkClient";

export const metadata: Metadata = {
  title: 'Add Watermark to PDF Online Free - Protect PDF Documents | SCENITH',
  description: 'Add text watermark to PDF files online for free. Protect and brand your PDFs with custom watermark text. Fast, secure, and unlimited.',
  keywords: [
    'add watermark to PDF',
    'PDF watermark free',
    'watermark PDF online',
    'protect PDF watermark',
    'PDF branding',
    'text watermark PDF',
    'free PDF watermark tool',
    'add text to PDF',
    'PDF security watermark',
    'custom PDF watermark'
  ],
  openGraph: {
    title: 'Add Watermark to PDF Free - Protect & Brand Your Documents',
    description: 'Add custom text watermarks to your PDFs online. Protect documents, add branding, or mark as confidential. Fast, secure, and completely free.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://scenith.in/tools/pdf-tools/add-watermark',
  },
};

export default function AddWatermarkPage() {
  return <AddWatermarkClient />;
}