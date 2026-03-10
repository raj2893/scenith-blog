import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import { MetadataRoute } from "next";

function createSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
    return response.data.map((element: any) => ({
      url: `https://scenith.in/svg-library/${createSlug(element.name)}`,
      lastModified: new Date(element.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    return [];
  }
}