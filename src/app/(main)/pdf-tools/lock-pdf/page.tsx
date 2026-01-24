import type { Metadata } from "next";
import LockPdfClient from "./LockPdfClient";

export const metadata: Metadata = {
  title: 'Lock PDF with Password Online Free - Secure PDF Documents | SCENITH',
  description: 'Password protect PDF files online for free. Lock PDFs with strong encryption to prevent unauthorized access. Secure, fast, and unlimited.',
  keywords: [
    'lock PDF online',
    'password protect PDF',
    'secure PDF free',
    'PDF encryption',
    'protect PDF password',
    'PDF security',
    'encrypt PDF online',
    'free PDF lock tool',
    'PDF password protection',
    'secure PDF documents'
  ],
  openGraph: {
    title: 'Lock PDF with Password Free - Secure Your Documents Online',
    description: 'Password protect your PDFs with strong encryption. Prevent unauthorized access and sharing. Fast, secure, and completely free. No file size limits.',
    type: 'website',
  },
  alternates: {
    canonical: '/pdf-tools/lock-pdf',
  },
};

export default function LockPdfPage() {
  return <LockPdfClient />;
}