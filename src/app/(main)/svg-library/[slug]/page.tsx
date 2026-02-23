import { Metadata } from "next";
import SingleElementClient from "./SingleElementClient";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

let cachedElements: any[] | null = null;

async function getAllElements() {
  if (cachedElements) return cachedElements;
  const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
  cachedElements = response.data;
  return cachedElements;
}

// Helper function to create slug
function createSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const elements = await getAllElements();
    const element = elements?.find((el: any) => createSlug(el.name) === resolvedParams.slug);

    if (!element) {
      return {
        title: "Icon Not Found | Scenith",
        description: "The icon you're looking for doesn't exist.",
      };
    }

    const iconName = element.name;
    const category = element.category;
    const tagList = element.tags ? element.tags.split(',').map((t: string) => t.trim()) : [];

    // More specific, search-intent-matched title
    const title = `${iconName} Icon SVG - Free Download, No Attribution | Scenith`;
    
    const description = `Download the free ${iconName} SVG icon instantly. Part of the ${category} icon set. Customize color online, export as SVG, PNG, JPG, or PDF. Commercial use allowed, zero attribution required.${tagList.length > 0 ? ` Tags: ${tagList.slice(0, 4).join(', ')}.` : ''}`;

    return {
      title,
      description,
      keywords: [
        `${iconName} icon`,
        `${iconName} svg`,
        `${iconName} icon free download`,
        `free ${category} icons`,
        `${iconName} vector`,
        ...tagList.slice(0, 5),
        'free svg no attribution',
        'commercial use svg icon',
      ].join(', '),
      openGraph: {
        title: `${iconName} Icon — Free SVG`,
        description: `Free ${iconName} icon. Edit color, download as SVG/PNG/PDF. No attribution needed.`,
        type: "website",
        images: [
          {
            url: element.cdnUrl,
            width: element.width || 800,
            height: element.height || 800,
            alt: `${iconName} SVG icon — free download`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${iconName} Icon — Free SVG Download`,
        description: `Customize and download this free ${iconName} icon. No attribution required.`,
        images: [element.cdnUrl],
      },
      alternates: {
        canonical: `https://scenith.in/svg-library/${resolvedParams.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "SVG Icon | Scenith",
      description: "Free SVG icon from Scenith library.",
    };
  }
}

export default async function SingleElementPage({ params }: PageProps) {
  const resolvedParams = await params;

  let initialElement = null;
  try {
    const elements = await getAllElements();
    initialElement = elements?.find((el: any) => createSlug(el.name) === resolvedParams.slug) || null;    
  } catch {}

  return (
    <SingleElementClient 
      elementSlug={resolvedParams.slug} 
      initialElement={initialElement}
    />
  );
}

export async function generateStaticParams() {
  try {
    const elements = await getAllElements();
    if (!elements) return [];
    return elements.map((element: any) => ({
      slug: createSlug(element.name),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}