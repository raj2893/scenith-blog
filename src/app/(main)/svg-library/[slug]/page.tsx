import { Metadata } from "next";
import SingleElementClient from "./SingleElementClient";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to create slug
function createSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Generate metadata dynamically for each icon
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
    const element = response.data.find((el: any) => createSlug(el.name) === resolvedParams.slug);

    if (!element) {
      return {
        title: "Icon Not Found | Scenith",
        description: "The icon you're looking for doesn't exist.",
      };
    }

    const iconName = element.name;
    const category = element.category;
    const tags = element.tags || "";

    return {
      title: `${iconName} Icon - Free SVG Download & Edit | Scenith`,
      description: `Free ${iconName} SVG icon in ${category} category. Customize colors, resize, and edit online. High-quality vector graphic for web, mobile, and print. ${tags}`,
      keywords: `${iconName} icon, ${category} icon, free svg, ${tags}, vector graphic, customizable icon, ${iconName} svg download`,
      openGraph: {
        title: `${iconName} Icon - Free SVG`,
        description: `Customize this ${iconName} icon in our free online editor. Change colors, resize, and export instantly.`,
        type: "website",
        images: [
          {
            url: element.cdnUrl,
            width: 800,
            height: 800,
            alt: `${iconName} icon`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${iconName} Icon - Free SVG`,
        description: `Edit and customize this ${iconName} icon online for free.`,
        images: [element.cdnUrl],
      },
      alternates: {
        canonical: `https://scenith.com/svg-library/${resolvedParams.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "SVG Icon | Scenith",
      description: "Free SVG icon from Scenith library.",
    };
  }
}

export default async function SingleElementPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  return (
    <>
      <SingleElementClient elementSlug={resolvedParams.slug} />
    </>
  );
}

export async function generateStaticParams() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
    const elements = response.data;

    return elements.slice(0, 100).map((element: any) => ({
      slug: createSlug(element.name),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}