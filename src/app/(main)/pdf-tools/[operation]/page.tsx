import type { Metadata } from "next";
import PDFToolsWorkspace from "./PDFToolsWorkspace";

// Define metadata for each tool
const toolMetadata: Record<string, Metadata> = {
  "merge-pdf": {
    title: 'Merge PDF Files Online Free - Combine Multiple PDFs into One | SCENITH',
    description: 'Merge multiple PDF files into one document for free. Combine PDFs in any order, rearrange pages, and download instantly. Fast, secure, and unlimited merges .',
    keywords: [
      'merge PDF online',
      'combine PDF files',
      'join PDFs',
      'PDF merger free',
      'merge PDF documents',
      'combine multiple PDFs',
      'PDF joiner',
      'merge PDF pages',
      'free PDF merge tool',
      'online PDF combiner'
    ],
    openGraph: {
      title: 'Merge PDF Online Free - Combine Multiple PDF Files Instantly',
      description: 'Easily merge multiple PDFs into one. Drag and drop to rearrange pages, combine unlimited files, and download your merged PDF instantly. 100% free and secure.',
      type: 'website',
    },
    alternates: {
      canonical: '/pdf-tools/merge-pdf',
    },
  },
  "split-pdf": {
    title: 'Split PDF Online Free - Extract Pages from PDF | SCENITH',
    description: 'Split PDF files into multiple documents or extract specific pages for free. Choose page ranges, split all pages, or create custom splits. Fast, secure, and unlimited.',
    keywords: [
      'split PDF online',
      'extract PDF pages',
      'PDF splitter free',
      'divide PDF',
      'separate PDF pages',
      'PDF page extractor',
      'split PDF by pages',
      'free PDF split tool',
      'break PDF into parts',
      'PDF separator'
    ],
    openGraph: {
      title: 'Split PDF Free - Extract Pages & Divide PDF Documents Online',
      description: 'Split any PDF into multiple files or extract specific pages. Define custom page ranges, split all pages separately, or create multiple documents. Free and secure.',
      type: 'website',
    },
    alternates: {
      canonical: '/pdf-tools/split-pdf',
    },
  },
  "compress-pdf": {
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
  },
  "rotate-pdf": {
    title: 'Rotate PDF Pages Online Free - 90°, 180° PDF Rotation | SCENITH',
    description: 'Rotate PDF pages online for free. Turn pages 90°, 180°, or 270° clockwise or counterclockwise. Fix orientation instantly and download .',
    keywords: [
      'rotate PDF online',
      'turn PDF pages',
      'PDF rotation free',
      'rotate PDF 90 degrees',
      'rotate PDF 180 degrees',
      'flip PDF pages',
      'PDF page rotation',
      'free PDF rotate tool',
      'change PDF orientation',
      'rotate PDF document'
    ],
    openGraph: {
      title: 'Rotate PDF Online Free - Fix PDF Page Orientation Instantly',
      description: 'Rotate PDF pages 90°, 180°, or 270° in any direction. Fix landscape/portrait orientation and download your rotated PDF instantly. Free and secure.',
      type: 'website',
    },
    alternates: {
      canonical: '/pdf-tools/rotate-pdf',
    },
  },
  "images-to-pdf": {
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
      canonical: '/pdf-tools/images-to-pdf',
    },
  },
  "pdf-to-images": {
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
      canonical: '/pdf-tools/pdf-to-images',
    },
  },
  "add-watermark": {
    title: 'Add Watermark to PDF Online Free - Protect PDF Documents | SCENITH',
    description: 'Add text watermark to PDF files online for free. Protect and brand your PDFs with custom watermark text. Fast, secure, and unlimited .',
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
      canonical: '/pdf-tools/add-watermark',
    },
  },
  "lock-pdf": {
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
  },
  "unlock-pdf": {
    title: 'Unlock PDF Online Free - Remove PDF Password Protection | SCENITH',
    description: 'Remove password from PDF files online for free. Unlock protected PDFs you own by entering the password. Fast, secure removal .',
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
  },
};

// This is a Server Component
export async function generateMetadata({
  params,
}: {
  params: Promise<{ operation: string }>;
}): Promise<Metadata> {
  const { operation } = await params;

  // Return specific metadata for the operation, or default metadata
  return toolMetadata[operation] || {
    title: 'PDF Tools | SCENITH',
    description: 'Professional PDF tools for all your document needs.',
    alternates: {
      canonical: `/pdf-tools/${operation}`,
    },
  };
}

export default async function PDFOperationPage({
  params,
}: {
  params: Promise<{ operation: string }>;
}) {
  const { operation } = await params;

  return <PDFToolsWorkspace operation={operation} />;
}