import type { Metadata } from "next";
import RotatePdfClient from "./RotatePdfClient";

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free - 90°, 180° PDF Rotation | SCENITH',
  description: 'Rotate PDF pages online for free. Turn pages 90°, 180°, or 270° clockwise or counterclockwise. Fix orientation instantly and download.',
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
};

export default function RotatePdfPage() {
  return <RotatePdfClient />;
}