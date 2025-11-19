"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../styles/ToolsIndex.module.css';

interface Tool {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  gradient: string;
  tags: string[];
  featured: boolean;
  url: string;
  difficulty: string;
  usageTime: string;
}

const toolsData: Tool[] = [
  {
    id: 1,
    title: "AI Voice Generation",
    description: "Transform text into natural-sounding speech with advanced AI voice synthesis. Perfect for voiceovers, audiobooks, and content creation.",
    category: "AI Tools",
    icon: "🎙️",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["voice", "ai", "audio", "text-to-speech"],
    featured: true,
    url: "/tools/ai-voice-generation",
    difficulty: "Easy",
    usageTime: "2 min"
  },
  {
    id: 2,
    title: "AI Subtitle Generation",
    description: "Automatically generate accurate subtitles for your videos using AI. Support for multiple languages and formats.",
    category: "AI Tools",
    icon: "💬",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["subtitles", "captions", "ai", "video"],
    featured: false,
    url: "/tools/add-subtitles-to-videos",
    difficulty: "Easy",
    usageTime: "3 min"
  },
  {
    id: 3,
    title: "AI Background Removal",
    description: "Remove backgrounds from images instantly with AI precision. Get clean, professional cutouts in seconds.",
    category: "AI Tools",
    icon: "✂️",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["background", "removal", "ai", "image"],
    featured: false,
    url: "/tools/background-removal",
    difficulty: "Easy",
    usageTime: "1 min"
  },
  {
    id: 4,
    title: "Video Speed Modifier",
    description: "Adjust video playback speed seamlessly. Speed up or slow down your videos while maintaining quality.",
    category: "Video Editing",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    tags: ["speed", "video", "editing", "modifier"],
    featured: false,
    url: "/tools/video-speed-modifier",
    difficulty: "Easy",
    usageTime: "2 min"
  },
  {
    id: 5,
    title: "Media Compression",
    description: "Compress images and videos without losing quality. Reduce file sizes for faster uploads and sharing.",
    category: "Optimization",
    icon: "🗜️",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    tags: ["compress", "optimization", "size", "media"],
    featured: false,
    url: "/tools/compress-media",
    difficulty: "Easy",
    usageTime: "2 min"
  },
  {
    id: 6,
    title: "Media Format Conversion",
    description: "Convert between different media formats effortlessly. Support for video, audio, and image formats.",
    category: "Conversion",
    icon: "🔄",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    tags: ["convert", "format", "media", "transformation"],
    featured: false,
    url: "/tools/media-conversion-tool",
    difficulty: "Easy",
    usageTime: "3 min"
  }
];

export default function ToolsIndex() {
  const [tools, setTools] = useState<Tool[]>(toolsData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const toolsPerPage = 50;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(tools.map(tool => tool.category)))];

  const filteredTools = () => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const paginatedTools = () => {
    const filtered = filteredTools();
    const startIndex = (currentPage - 1) * toolsPerPage;
    return filtered.slice(startIndex, startIndex + toolsPerPage);
  };

  const totalPages = Math.ceil(filteredTools().length / toolsPerPage);
  const featuredTool = tools.find(tool => tool.featured);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>Scenith Tools | AI-Powered Video & Media Tools - Free Online Suite</title>
        <meta
          name="title"
          content="Scenith Tools | AI-Powered Video & Media Tools - Free Online Suite"
        />
        <meta
          name="description"
          content="Discover 6+ powerful AI tools for video editing, voice generation, subtitle creation, background removal, and more. Free online tools trusted by 50,000+ creators. No signup required."
        />
        <meta
          name="keywords"
          content="AI tools, video editing tools, voice generation, subtitle generator, background removal, video compression, media converter, free online tools, AI voice generator, video speed changer, format converter, image compressor, Scenith tools, content creation tools, video editing software free, AI powered tools"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://scenith.in/tools" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/tools" />
        <meta property="og:title" content="Scenith Tools | AI-Powered Video & Media Tools - Free Online Suite" />
        <meta property="og:description" content="Discover 6+ powerful AI tools for video editing, voice generation, subtitle creation, and more. Free online tools trusted by 50,000+ creators." />
        <meta property="og:image" content="https://scenith.in/images/tools-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scenith" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://scenith.in/tools" />
        <meta name="twitter:title" content="Scenith Tools | AI-Powered Video & Media Tools" />
        <meta name="twitter:description" content="Discover 6+ powerful AI tools for video editing, voice generation, subtitle creation, and more. Free online tools trusted by 50,000+ creators." />
        <meta name="twitter:image" content="https://scenith.in/images/tools-twitter-image.jpg" />
        <meta name="twitter:creator" content="@scenith" />
        <meta name="twitter:site" content="@scenith" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Mobile App Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Scenith Tools" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Scenith Tools - AI-Powered Video & Media Tools",
              "description": "Discover powerful AI tools for video editing, voice generation, subtitle creation, background removal, and more. Free online tools to enhance your content creation workflow.",
              "url": "https://scenith.in/tools",
              "publisher": {
                "@type": "Organization",
                "name": "Scenith",
                "url": "https://scenith.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://scenith.in/logo.png"
                }
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "Scenith Tools Collection",
                "description": "Free AI-powered tools for content creators",
                "numberOfItems": 6,
                "itemListElement": toolsData.map((tool, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": tool.title,
                    "description": tool.description,
                    "url": `https://scenith.in${tool.url}`,
                    "applicationCategory": "MultimediaApplication",
                    "operatingSystem": "Web Browser",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  }
                }))
              }
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://scenith.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tools",
                  "item": "https://scenith.in/tools"
                }
              ]
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scenith",
              "url": "https://scenith.in",
              "logo": "https://scenith.in/logo.png",
              "sameAs": [
                "https://twitter.com/scenith",
                "https://www.facebook.com/scenith",
                "https://www.instagram.com/scenith",
                "https://www.youtube.com/@scenith"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "support@scenith.in"
              }
            })
          }}
        />
      </Head>

      <div className={styles.toolsContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeText}>🚀 Free Tools</span>
            </div>
            <h1 className={styles.heroTitle}>
              Powerful AI Tools for
              <span className={styles.gradientText}> Content Creators</span>
            </h1>
            <p className={styles.heroDescription}>
              Elevate your content with our suite of AI-powered tools. From voice generation to video editing, everything you need to create amazing content is right here.
            </p>
            
            {/* Search and Filter Controls */}
            <div className={styles.controlsContainer}>
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search tools by name, category, or feature..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              
              <div className={styles.filtersRow}>
                <div className={styles.categoryTabs}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === 'all' ? '✨ All Tools' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {/* Featured Tool */}
          {featuredTool && selectedCategory === 'all' && !searchTerm && (
            <section className={styles.featuredSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>⭐ Featured Tool</h2>
              </div>
              <Link href={featuredTool.url} className={styles.featuredLink}>
                <article className={styles.featuredCard}>
                  <div className={styles.featuredImage} style={{ background: featuredTool.gradient }}>
                    <span className={styles.featuredIcon}>{featuredTool.icon}</span>
                    <div className={styles.featuredBadge}>FEATURED</div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredMeta}>
                      <span className={styles.category}>{featuredTool.category}</span>
                      <span className={styles.difficulty}>{featuredTool.difficulty}</span>
                    </div>
                    <h3 className={styles.featuredTitle}>{featuredTool.title}</h3>
                    <p className={styles.featuredExcerpt}>{featuredTool.description}</p>
                    <div className={styles.featuredStats}>
                      <span className={styles.stat}>
                        <span className={styles.statIcon}>⏱️</span>
                        {featuredTool.usageTime} usage
                      </span>
                      <span className={styles.stat}>
                        <span className={styles.statIcon}>🎯</span>
                        {featuredTool.difficulty}
                      </span>
                    </div>
                    <div className={styles.ctaButton}>
                      Try Now →
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Tools Grid */}
          <section className={styles.toolsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchTerm ? `Search Results (${filteredTools().length})` : 'All Tools'}
              </h2>
              <div className={styles.resultsCount}>
                Showing {paginatedTools().length} of {filteredTools().length} tools
              </div>
            </div>

            {paginatedTools().length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔧</div>
                <h3 className={styles.emptyTitle}>No tools found</h3>
                <p className={styles.emptyText}>
                  {searchTerm 
                    ? `No tools match "${searchTerm}". Try different keywords.`
                    : 'No tools in this category yet. Check back soon!'
                  }
                </p>
              </div>
            ) : (
              <div className={styles.toolsGrid}>
                {paginatedTools()
                  .filter(tool => !tool.featured || searchTerm || selectedCategory !== 'all')
                  .map((tool) => (
                    <Link href={tool.url} key={tool.id} className={styles.toolLink}>
                      <article className={styles.toolCard}>
                        <div className={styles.toolImage} style={{ background: tool.gradient }}>
                          <span className={styles.toolIcon}>{tool.icon}</span>
                        </div>
                        <div className={styles.toolContent}>
                          <div className={styles.toolMeta}>
                            <span className={styles.category}>{tool.category}</span>
                            <span className={styles.difficulty}>{tool.difficulty}</span>
                          </div>
                          <h3 className={styles.toolTitle}>{tool.title}</h3>
                          <p className={styles.toolDescription}>{tool.description}</p>
                          <div className={styles.toolFooter}>
                            <div className={styles.toolStats}>
                              <span className={styles.stat}>
                                <span className={styles.statIcon}>⏱️</span>
                                {tool.usageTime}
                              </span>
                            </div>
                            <span className={styles.launchButton}>Launch →</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaIcon}>💡</span>
              <h2 className={styles.ctaTitle}>Need a Custom Tool?</h2>
              <p className={styles.ctaText}>
                Have a specific workflow in mind? Let us know what tool would make your content creation easier!
              </p>
              <button className={styles.ctaBtn}>Request a Tool</button>
              <p className={styles.ctaDisclaimer}>
                Join 50,000+ creators using our tools • All tools are free • No signup required
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}