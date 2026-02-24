import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import { NextResponse } from "next/server";

function createSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
    const elements = response.data;

    const urls = elements.map((element: any) => `
  <url>
    <loc>https://scenith.in/svg-library/${createSlug(element.name)}</loc>
    <lastmod>${new Date(element.createdAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new NextResponse(xml, {
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch (error) {
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}