import type { Metadata } from "next";
import UnlockPdfClient from "./UnlockPdfClient";

export const metadata: Metadata = {
  title: 'Unlock PDF Online Free - Remove PDF Password Protection | SCENITH',
  description: 'Remove password from PDF files online for free. Unlock protected PDFs you own by entering the password. Fast, secure removal.',
  keywords: [
    'unlock PDF online',
    'remove PDF password',
    'decrypt PDF free',
    'PDF password remover',
    'unlock protected PDF',
    'remove PDF encryption',
    'free PDF unlock tool',
    'PDF password removal',
    'decrypt PDF online',
    'unlock PDF documents'
  ],
  openGraph: {
    title: 'Unlock PDF Free - Remove Password Protection Online',
    description: 'Remove password protection from PDFs you own. Enter the password to unlock and access your PDF files. Fast, secure, and completely free.',
    type: 'website',
  },
  alternates: {
    canonical: '/pdf-tools/unlock-pdf',
  },
};

export default function UnlockPdfPage() {
  return <UnlockPdfClient />;
}