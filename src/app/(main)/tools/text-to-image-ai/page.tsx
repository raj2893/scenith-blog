// page.tsx
import TextToImageAIClient from './TextToImageAIClient';
import { API_BASE_URL, CDN_URL } from '@/app/config'; // adjust path

async function getGalleryImages(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/gallery/images`, {
      next: { revalidate: 3600 }, // cache for 1 hour — don't hammer your API
    });
    const paths: string[] = await res.json();
    return paths.slice(0, 10).map(p => `${CDN_URL}/${p}`);
  } catch {
    return [];
  }
}

export default async function TextToImageAIPage() {
  const galleryImages = await getGalleryImages();
  return <TextToImageAIClient galleryImages={galleryImages} />;
}