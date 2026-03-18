import type { Metadata } from 'next';
import BlogFeaturedImagePage from './BlogFeaturedImageClient';

export const metadata: Metadata = {
  title: 'AI Blog Featured Image Generator – Create Click-Worthy Thumbnails Free (2026)',
  description:
    'Generate stunning blog featured images with AI in seconds. Turn any blog title or topic into a high-quality, click-worthy header image. Free tool for bloggers, content creators & marketers. No design skills needed.',
  keywords: [
    'blog featured image generator',
    'ai blog thumbnail creator',
    'blog header image generator',
    'featured image generator for blog',
    'ai blog image creator free',
    'blog post image generator',
    'wordpress featured image generator ai',
    'blog cover image maker',
    'content marketing image generator',
    'seo blog image tool',
    'blog thumbnail maker ai',
    'free blog header image generator',
    'blog featured image size generator',
    'medium blog image generator',
    'substack featured image ai',
    'ghost blog image generator',
    'blogger image creator ai',
    'blog post thumbnail generator',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/blog-featured-image-ai-generator',
  },
  openGraph: {
    title: 'AI Blog Featured Image Generator – Create Stunning Blog Thumbnails Free',
    description:
      'Stop using boring stock photos for your blog. Use AI to generate custom, on-brand featured images that dramatically increase click-through rates. Free tool for WordPress, Medium, Substack & more.',
    url: 'https://scenith.in/tools/blog-featured-image-ai-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/blog-featured-image-generator-og.png',
        width: 1200,
        height: 630,
        alt: 'AI Blog Featured Image Generator by Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Blog Featured Image Generator – Free Tool for Bloggers (2026)',
    description:
      'Generate beautiful featured images for your blog posts using AI. Works with WordPress, Medium, Substack, Ghost & any blogging platform. Free to start.',
    images: ['https://scenith.in/images/blog-featured-image-generator-og.png'],
    creator: '@scenith_in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <BlogFeaturedImagePage />;
}