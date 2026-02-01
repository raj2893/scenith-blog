"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
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
  seoKeywords: string[];
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
    usageTime: "2 min",
    seoKeywords: ["AI voice generator", "text to speech", "voice synthesis", "TTS"]
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
    usageTime: "3 min",
    seoKeywords: ["auto subtitle generator", "video captions", "AI subtitles", "transcription"]
  },
  {
  id: 3,
  title: "AI Image Generation",
  description: "Create stunning images from text descriptions using advanced AI. Generate professional visuals for social media, marketing, and creative projects instantly.",
  category: "AI Tools",
  icon: "🎨",
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tags: ["ai", "image", "generation", "text-to-image", "art", "creative"],
  featured: false,
  url: "/tools/ai-image-generation",
  difficulty: "Easy",
  usageTime: "1 min",
  seoKeywords: ["AI image generator", "text to image", "AI art", "image creation", "AI artwork"]
},
  {
    id: 4,
    title: "Image Editor",
    description: "Free online image editor with layers, text, shapes, filters, and more. Perfect for social media graphics, thumbnails, and banners.",
    category: "Design Tools",
    icon: "🖼️",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
    tags: ["image", "editor", "design", "layers", "graphics", "photo"],
    featured: false,
    url: "/tools/image-editing",
    difficulty: "Easy",
    usageTime: "5 min",
    seoKeywords: ["online image editor", "photo editor", "graphic design", "free editor"]
  },
  {
    id: 5,
    title: "AI Background Removal",
    description: "Remove backgrounds from images instantly with AI precision. Get clean, professional cutouts in seconds.",
    category: "AI Tools",
    icon: "✂️",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["background", "removal", "ai", "image"],
    featured: false,
    url: "/tools/background-removal",
    difficulty: "Easy",
    usageTime: "1 min",
    seoKeywords: ["remove background", "background remover", "transparent PNG", "cutout"]
  },
  {
    id: 6,
    title: "Video Speed Modifier",
    description: "Adjust video playback speed seamlessly. Speed up or slow down your videos while maintaining quality.",
    category: "Video Editing",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    tags: ["speed", "video", "editing", "modifier"],
    featured: false,
    url: "/tools/video-speed-modifier",
    difficulty: "Easy",
    usageTime: "2 min",
    seoKeywords: ["change video speed", "slow motion", "fast forward", "video editor"]
  },
  {
    id: 7,
    title: "Media Compression",
    description: "Compress images and videos without losing quality. Reduce file sizes for faster uploads and sharing.",
    category: "Optimization",
    icon: "🗜️",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    tags: ["compress", "optimization", "size", "media"],
    featured: false,
    url: "/tools/compress-media",
    difficulty: "Easy",
    usageTime: "2 min",
    seoKeywords: ["compress video", "reduce file size", "image compression", "optimize"]
  },
  {
    id: 8,
    title: "Media Format Conversion",
    description: "Convert between different media formats effortlessly. Support for video, audio, and image formats.",
    category: "Conversion",
    icon: "🔄",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    tags: ["convert", "format", "media", "transformation"],
    featured: false,
    url: "/tools/media-conversion-tool",
    difficulty: "Easy",
    usageTime: "3 min",
    seoKeywords: ["format converter", "video converter", "file conversion", "media converter"]
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

  // Generate UTM tracking URL
  const getToolUrl = (toolUrl: string) => {
    const utmParams = new URLSearchParams({
      utm_source: 'scenith_tools_page',
      utm_medium: 'website',
      utm_campaign: 'tools_discovery',
      utm_content: 'tool_card_click'
    });
    return `${toolUrl}?${utmParams.toString()}`;
  };

  const openToolInNewTab = (toolUrl: string) => {
    window.open(getToolUrl(toolUrl), '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>Free AI Tools for Creators | Voice Generation, Video Editing & Image Design - Scenith</title>
        <meta
          name="title"
          content="Free AI Tools for Creators | Voice Generation, Video Editing & Image Design - Scenith"
        />
        <meta
          name="description"
          content="Discover 7+ free AI-powered tools for content creation: AI voice generator, automatic subtitle creation, image editor, background remover, video tools, and more. No signup required. Trusted by 50,000+ creators worldwide."
        />
        <meta
          name="keywords"
          content="free AI tools, AI voice generator, auto subtitle generator, online image editor, background remover, video editing tools, free design tools, content creation tools, AI-powered tools, text to speech, video subtitles, photo editor, transparent background, video speed changer, media converter, compression tool, creator tools, YouTube tools, social media tools, marketing tools, Scenith tools"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://scenith.in/tools" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/tools" />
        <meta property="og:title" content="Free AI Tools for Creators | Voice Generation, Video Editing & Image Design" />
        <meta property="og:description" content="Discover 7+ powerful AI tools for video editing, voice generation, subtitle creation, and more. Free online tools trusted by 50,000+ creators. No signup required." />
        <meta property="og:image" content="https://scenith.in/images/tools-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scenith" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://scenith.in/tools" />
        <meta name="twitter:title" content="Free AI Tools for Creators | Scenith" />
        <meta name="twitter:description" content="Discover 7+ powerful AI tools for video editing, voice generation, subtitle creation, and more. Free online tools trusted by 50,000+ creators." />
        <meta name="twitter:image" content="https://scenith.in/images/tools-twitter-image.jpg" />
        <meta name="twitter:creator" content="@scenith" />
        <meta name="twitter:site" content="@scenith" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
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
              "name": "Scenith Tools - Free AI-Powered Creation Tools",
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
                "numberOfItems": toolsData.length,
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Are Scenith tools completely free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! All Scenith tools are 100% free with no hidden costs, watermarks, or usage limits. You get full access to AI voice generation, subtitle creation, image editing, background removal, and all other tools without any payment required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to sign up to use these tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most tools work without signup for basic use. Creating a free account unlocks cloud storage for your projects, higher usage limits, and the ability to access your work from any device."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use these tools for commercial projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! All content created with Scenith tools comes with full commercial use rights. Use generated voices, edited images, subtitled videos, and more in your business, YouTube channel, client work, or any commercial project without attribution requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Scenith tools different from other free tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith tools use advanced AI technology to deliver professional-grade results instantly. Unlike other platforms, we don't add watermarks, limit features behind paywalls, or restrict usage. You get unlimited access to all tools with no compromises on quality or functionality."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className={styles.toolsContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroTop}>
              <h1 className={styles.heroTitle}>
                Free AI Tools for <span className={styles.gradientText}>Content Creators</span>
              </h1>
              <p className={styles.heroDescription}>
                Professional-grade AI tools for voice generation, video editing, image design, and more. Completely free, no signup required. Trusted by 50,000+ creators worldwide to streamline their content creation workflow.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className={styles.controlsContainer}>
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search for tools"
                />
              </div>
              
              <div className={styles.categoryTabs}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                    aria-label={`Filter by ${category}`}
                  >
                    {category === 'all' ? 'All Tools' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {/* Featured Tool */}
          {featuredTool && selectedCategory === 'all' && !searchTerm && (
            <div className={styles.featuredSection}>
              <div 
                className={styles.featuredLink}
                onClick={() => openToolInNewTab(featuredTool.url)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openToolInNewTab(featuredTool.url)}
              >
                <article className={styles.featuredCard}>
                  <div className={styles.featuredImage} style={{ background: featuredTool.gradient }}>
                    <span className={styles.featuredIcon}>{featuredTool.icon}</span>
                    <div className={styles.featuredBadge}>⭐ FEATURED</div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredMeta}>
                      <span className={styles.category}>{featuredTool.category}</span>
                      <span className={styles.difficulty}>{featuredTool.difficulty}</span>
                      <span className={styles.stat}>
                        <span className={styles.statIcon}>⏱️</span>
                        {featuredTool.usageTime}
                      </span>
                    </div>
                    <h2 className={styles.featuredTitle}>{featuredTool.title}</h2>
                    <p className={styles.featuredExcerpt}>{featuredTool.description}</p>
                    <div className={styles.ctaButton}>
                      Launch Tool →
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}

          {/* Tools Grid */}
          <section className={styles.toolsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchTerm ? `Search Results (${filteredTools().length})` : selectedCategory === 'all' ? 'All Free Tools' : `${selectedCategory} Tools`}
              </h2>
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
                    <div 
                      key={tool.id} 
                      className={styles.toolLink}
                      onClick={() => openToolInNewTab(tool.url)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && openToolInNewTab(tool.url)}
                      style={{ cursor: 'pointer' }}
                    >
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
                    </div>
                  ))}
              </div>
            )}
          </section>

          {/* NEW: What Are AI-Powered Creator Tools Section */}
          <section className={styles.educationalSection} role="complementary" aria-labelledby="what-are-tools">
            <div className={styles.educationalContent}>
              <h2 id="what-are-tools" className={styles.educationalTitle}>
                What Are AI-Powered Creator Tools and Why Do You Need Them?
              </h2>
              <div className={styles.educationalGrid}>
                <div className={styles.educationalText}>
                  <p className={styles.educationalParagraph}>
                    <strong>AI-powered creator tools</strong> are intelligent software applications that use artificial intelligence and machine learning to automate and enhance content creation workflows. From generating natural-sounding voiceovers to removing image backgrounds with pixel-perfect precision, these tools eliminate hours of manual work that once required expensive software or professional services.
                  </p>
                  <p className={styles.educationalParagraph}>
                    Whether you're a <strong>YouTuber creating video content</strong>, a <strong>social media manager</strong> designing graphics for Instagram and TikTok, an <strong>e-commerce seller</strong> editing product photos, or a <strong>podcaster</strong> producing audio content, AI tools have become essential for staying competitive in today's fast-paced digital landscape.
                  </p>
                  <p className={styles.educationalParagraph}>
                    <strong>Why Scenith's free AI tools stand out:</strong> Unlike expensive software subscriptions ($50-100/month) or paying per-use services, our tools are completely free with no watermarks, no usage limits, and full commercial rights. What used to cost thousands in software licenses and hours of learning complex programs is now accessible to anyone with an internet connection.
                  </p>
                </div>
                <div className={styles.educationalStats}>
                  <div className={styles.statBox}>
                    <div className={styles.statNumber}>50K+</div>
                    <div className={styles.statLabel}>Active Users</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statNumber}>7+</div>
                    <div className={styles.statLabel}>Free AI Tools</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>Free Forever</div>
                  </div>
                  <div className={styles.statBox}>
                    <div className={styles.statNumber}>24/7</div>
                    <div className={styles.statLabel}>Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NEW: Featured Tools Deep Dive */}
          <section className={styles.toolsDeepDive} role="region" aria-labelledby="tools-overview">
            <h2 id="tools-overview" className={styles.sectionTitle}>Complete Overview of Scenith's Free AI Tools</h2>
            <p className={styles.sectionDescription}>
              Explore each tool's capabilities, use cases, and how it can transform your content creation workflow
            </p>
            
            <div className={styles.toolsShowcase}>
              {/* AI Voice Generator */}
              <article className={styles.showcaseCard}>
                <div className={styles.showcaseHeader}>
                  <span className={styles.showcaseIcon}>🎙️</span>
                  <h3>AI Voice Generator - Text to Speech Technology</h3>
                </div>
                <div className={styles.showcaseContent}>
                  <p className={styles.showcaseDescription}>
                    Transform any written text into professional, natural-sounding speech with our advanced neural text-to-speech engine. Choose from 40+ realistic AI voices across 20+ languages including American English, UK English, Spanish, French, German, Hindi, Mandarin, and more.
                  </p>
                  <div className={styles.showcaseFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      <li><strong>40+ Natural AI Voices:</strong> Male, female, and neutral voices with various accents and speaking styles</li>
                      <li><strong>20+ Languages Supported:</strong> Create multilingual content for global audiences instantly</li>
                      <li><strong>Commercial Use Rights:</strong> Use generated audio in YouTube videos, podcasts, ads, and any commercial project</li>
                      <li><strong>Instant Generation:</strong> Get high-quality MP3 audio files in under 5 seconds</li>
                      <li><strong>No Character Limits:</strong> Free tier includes 5,000 characters per month</li>
                    </ul>
                  </div>
                  <div className={styles.showcaseUseCases}>
                    <h4>Perfect For:</h4>
                    <p>YouTube voiceovers, podcast narration, e-learning courses, audiobook creation, IVR systems, video game dialogue, marketing videos, explainer videos, meditation guides, and accessibility features.</p>
                  </div>
                  <button 
                    className={styles.showcaseButton}
                    onClick={() => openToolInNewTab('/tools/ai-voice-generation')}
                  >
                    Try AI Voice Generator →
                  </button>
                </div>
              </article>

              {/* AI Subtitle Generator */}
              <article className={styles.showcaseCard}>
                <div className={styles.showcaseHeader}>
                  <span className={styles.showcaseIcon}>💬</span>
                  <h3>AI Subtitle Generator - Automatic Video Captioning</h3>
                </div>
                <div className={styles.showcaseContent}>
                  <p className={styles.showcaseDescription}>
                    Automatically generate accurate subtitles for any video using Whisper AI technology. Our speech recognition system achieves 95-98% accuracy, dramatically reducing the time spent on manual transcription from hours to minutes.
                  </p>
                  <div className={styles.showcaseFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      <li><strong>Whisper AI Powered:</strong> Industry-leading speech recognition technology</li>
                      <li><strong>50+ Languages:</strong> Automatic language detection and transcription</li>
                      <li><strong>25+ Subtitle Styles:</strong> Pre-designed templates for instant professional results</li>
                      <li><strong>Full Customization:</strong> Edit text, timing, fonts, colors, positions, and animations</li>
                      <li><strong>Instant Processing:</strong> Generate subtitles in 1-2 minutes for 10-minute videos</li>
                    </ul>
                  </div>
                  <div className={styles.showcaseUseCases}>
                    <h4>Perfect For:</h4>
                    <p>YouTube videos, Instagram reels, TikTok content, Facebook videos, LinkedIn posts, educational courses, webinars, documentary films, marketing videos, and accessibility compliance.</p>
                  </div>
                  <button 
                    className={styles.showcaseButton}
                    onClick={() => openToolInNewTab('/tools/add-subtitles-to-videos')}
                  >
                    Try Subtitle Generator →
                  </button>
                </div>
              </article>

              {/* Image Editor */}
              <article className={styles.showcaseCard}>
                <div className={styles.showcaseHeader}>
                  <span className={styles.showcaseIcon}>🖼️</span>
                  <h3>Free Image Editor - Professional Graphic Design Tool</h3>
                </div>
                <div className={styles.showcaseContent}>
                  <p className={styles.showcaseDescription}>
                    Create stunning graphics with our browser-based image editor featuring layers, text tools, shapes, filters, and effects. A free alternative to Canva and Photoshop with professional-grade capabilities.
                  </p>
                  <div className={styles.showcaseFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      <li><strong>Layer-Based Editing:</strong> Professional workflow with unlimited layers</li>
                      <li><strong>Google Fonts Integration:</strong> Access to hundreds of professional fonts</li>
                      <li><strong>Advanced Filters:</strong> Brightness, contrast, saturation, temperature, artistic effects</li>
                      <li><strong>Pre-sized Templates:</strong> Instagram, YouTube, Facebook, Twitter dimensions</li>
                      <li><strong>Export Options:</strong> PNG (with transparency), JPG, PDF formats</li>
                    </ul>
                  </div>
                  <div className={styles.showcaseUseCases}>
                    <h4>Perfect For:</h4>
                    <p>Social media graphics, YouTube thumbnails, marketing flyers, business cards, presentation slides, e-commerce product images, blog featured images, and digital artwork.</p>
                  </div>
                  <button 
                    className={styles.showcaseButton}
                    onClick={() => openToolInNewTab('/tools/image-editing')}
                  >
                    Try Image Editor →
                  </button>
                </div>
              </article>

              {/* Background Remover */}
              <article className={styles.showcaseCard}>
                <div className={styles.showcaseHeader}>
                  <span className={styles.showcaseIcon}>✂️</span>
                  <h3>AI Background Remover - Instant Transparent PNG</h3>
                </div>
                <div className={styles.showcaseContent}>
                  <p className={styles.showcaseDescription}>
                    Remove backgrounds from any image in seconds using advanced AI segmentation. Our machine learning model handles complex subjects including hair, fur, and transparent objects with professional precision.
                  </p>
                  <div className={styles.showcaseFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      <li><strong>5-Second Processing:</strong> Instant background removal with AI precision</li>
                      <li><strong>Complex Edge Detection:</strong> Handles hair, fur, glass, and intricate details</li>
                      <li><strong>High-Quality Output:</strong> Professional transparent PNG files up to 4K resolution</li>
                      <li><strong>Batch Processing:</strong> Remove backgrounds from multiple images</li>
                      <li><strong>E-commerce Ready:</strong> Meet Amazon, Shopify, eBay requirements</li>
                    </ul>
                  </div>
                  <div className={styles.showcaseUseCases}>
                    <h4>Perfect For:</h4>
                    <p>E-commerce product photos, profile pictures, marketing materials, graphic design projects, social media content, presentations, website images, and creative compositions.</p>
                  </div>
                  <button 
                    className={styles.showcaseButton}
                    onClick={() => openToolInNewTab('/tools/background-removal')}
                  >
                    Try Background Remover →
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* Benefits Section */}
          <section className={styles.benefitsSection} role="region" aria-labelledby="benefits-title">
            <h2 id="benefits-title" className={styles.sectionTitle}>Why Choose Scenith's Free AI Tools?</h2>
            <div className={styles.benefitsGrid}>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>💰</span>
                <h3>Save Thousands on Software</h3>
                <p>Replace expensive subscriptions to Adobe Creative Cloud ($60/month), Photoshop ($20/month), voice actor fees ($100-500/hour), and professional services. Our free tools deliver the same professional results at zero cost.</p>
              </article>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>⚡</span>
                <h3>10x Faster Workflow</h3>
                <p>What once took hours now takes minutes. AI voice generation in 5 seconds, background removal in 3 seconds, subtitle creation in 2 minutes. Focus on creativity, not tedious manual work.</p>
              </article>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🎯</span>
                <h3>Professional Quality Results</h3>
                <p>Enterprise-grade AI technology trained on millions of examples. Get results that rival expensive professional services and software, accessible to anyone with an internet connection.</p>
              </article>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🌍</span>
                <h3>No Installation Required</h3>
                <p>100% browser-based tools work on any device. No downloads, no system requirements, no updates. Access from Windows, Mac, Linux, iPad, or even your phone. Work from anywhere.</p>
              </article>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>💼</span>
                <h3>Full Commercial Rights</h3>
                <p>Use everything you create commercially without restrictions. No attribution required, no royalties, no limitations. Perfect for YouTube monetization, client work, and business projects.</p>
              </article>
              <article className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🔒</span>
                <h3>Privacy & Security</h3>
                <p>Your content is processed securely and never used for training or shared with third parties. Full GDPR compliance ensures your creative work remains private and protected.</p>
              </article>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className={styles.useCasesSection} role="region" aria-labelledby="use-cases-title">
            <h2 id="use-cases-title" className={styles.sectionTitle}>Who Uses Scenith Tools?</h2>
            <p className={styles.sectionDescription}>Discover how creators and businesses across industries use our free AI tools</p>
            <div className={styles.useCasesGrid}>
              <article className={styles.useCaseCard}>
                <h3>🎬 YouTubers & Video Creators</h3>
                <p>Create professional voiceovers with AI voices, add accurate subtitles for better engagement, design eye-catching thumbnails, and edit videos faster. Tools used: AI Voice Generator, Subtitle Generator, Image Editor.</p>
              </article>
              <article className={styles.useCaseCard}>
                <h3>📱 Social Media Managers</h3>
                <p>Design graphics for Instagram, Facebook, TikTok, and LinkedIn. Remove backgrounds from product photos, create quote graphics, and produce video content with captions. Tools used: Image Editor, Background Remover, Subtitle Generator.</p>
              </article>
              <article className={styles.useCaseCard}>
                <h3>🛍️ E-commerce Sellers</h3>
                <p>Create marketplace-ready product photos by removing backgrounds, compress images for faster loading, and design promotional graphics. Meet Amazon, Shopify, and eBay requirements. Tools used: Background Remover, Image Editor, Media Compression.</p>
              </article>
              <article className={styles.useCaseCard}>
                <h3>📚 Educators & Course Creators</h3>
                <p>Generate voiceovers for e-learning content, add subtitles to lecture videos for accessibility, create presentation graphics, and produce educational materials. Tools used: AI Voice Generator, Subtitle Generator, Image Editor.</p>
              </article>
              <article className={styles.useCaseCard}>
                <h3>📻 Podcasters & Audio Creators</h3>
                <p>Create intro/outro narration with AI voices, design podcast cover art, edit audio content, and produce promotional graphics for social media. Tools used: AI Voice Generator, Image Editor.</p>
              </article>
              <article className={styles.useCaseCard}>
                <h3>💼 Small Business Owners</h3>
                <p>Design marketing materials, create product photos, produce video ads, and generate voiceovers without hiring expensive agencies. All tools are free and commercial-use friendly. Tools used: All Scenith tools.</p>
              </article>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className={styles.seoContent} role="region" aria-labelledby="about-scenith-tools">
            <h2 id="about-scenith-tools" className={styles.sectionTitle}>About Scenith's Free AI-Powered Creation Platform</h2>
            
            <div className={styles.contentBlock}>
              <h3>What Makes Scenith Different from Other Free Tool Platforms?</h3>
              <p>Unlike platforms like Canva, Adobe Express, or Kapwing that lock essential features behind premium subscriptions, Scenith provides genuinely unlimited access to all tools. There are no watermarks on your exports, no artificial usage limits, and no bait-and-switch tactics. When we say free, we mean completely free—forever.</p>
              <p>Our AI technology matches or exceeds paid alternatives: Our voice generator uses the same neural TTS engines as services charging $50/month. Our background remover achieves professional results comparable to Remove.bg's paid tier. Our image editor rivals Photoshop Express and Canva Pro in capabilities.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>How AI Technology Powers Each Tool</h3>
              <p><strong>AI Voice Generation:</strong> Uses neural text-to-speech (TTS) models trained on thousands of hours of human speech. Deep learning networks analyze linguistic patterns, apply natural prosody, and synthesize audio that captures emotion and intonation.</p>
              <p><strong>Subtitle Generation:</strong> Powered by OpenAI's Whisper model, achieving 95-98% transcription accuracy. The AI performs acoustic analysis, language modeling, and forced alignment to create perfectly timed captions.</p>
              <p><strong>Background Removal:</strong> Employs semantic segmentation CNNs (Convolutional Neural Networks) trained on millions of images. The AI detects subjects, preserves fine details like hair and fur, and generates clean alpha channels.</p>
              <p><strong>Image Editing:</strong> Combines computer vision algorithms with user-friendly interfaces. Features like filters use real-time image processing, while smart tools leverage AI for tasks like object detection and enhancement.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Scenith vs Paid Alternatives: Feature Comparison</h3>
              <p><strong>Voice Generation:</strong> Scenith (Free) vs. ElevenLabs ($5-22/month), Play.ht ($19-99/month), Murf AI ($19-75/month). Our free tier includes 40+ voices and 5,000 characters/month. Competitors charge for similar capabilities or limit voice selection.</p>
              <p><strong>Subtitle Generation:</strong> Scenith (Free) vs. Rev.ai ($1.25/min), Descript ($12-24/month), Happy Scribe ($12-29/month). We provide unlimited subtitle generation with AI accuracy matching paid services.</p>
              <p><strong>Image Editing:</strong> Scenith (Free) vs. Adobe Photoshop ($20/month), Canva Pro ($13/month), Figma ($12-45/month). Full layer-based editing, unlimited projects, and no watermarks.</p>
              <p><strong>Background Removal:</strong> Scenith (Free) vs. Remove.bg ($0.20-9 per image or $9-29/month), Photoshop ($20/month). Unlimited removals with professional AI precision at zero cost.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Commercial Use Rights and Licensing</h3>
              <p>Every piece of content created with Scenith tools comes with full commercial use rights. This means you can:</p>
              <ul>
                <li>Monetize YouTube videos with AI-generated voices and subtitles</li>
                <li>Sell products using images edited or created with our tools</li>
                <li>Use graphics and voiceovers in client work and charge for services</li>
                <li>Include AI-generated audio in podcasts, apps, and commercial projects</li>
                <li>Create marketing materials for businesses without attribution</li>
              </ul>
              <p>No royalties, no attribution requirements, no hidden restrictions. You retain 100% ownership of your creative output.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Technical Specifications and Capabilities</h3>
              <p><strong>File Format Support:</strong> Images (JPG, PNG, WebP), Videos (MP4, MOV, AVI, MKV), Audio (MP3, WAV, OGG). Export options include PNG with transparency, high-quality JPG, and print-ready PDF.</p>
              <p><strong>Processing Power:</strong> Cloud-based infrastructure handles intensive AI computations. Background removal processes 4K images in seconds. Voice generation supports up to 5,000 characters per request. Video subtitle generation handles files up to 2 hours.</p>
              <p><strong>Quality Standards:</strong> Voice audio at 128kbps+ MP3 quality. Image exports up to 4K resolution. Video processing maintains original quality. Subtitle accuracy 95-98% for clear audio.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Privacy, Security, and Data Handling</h3>
              <p>We take your privacy seriously. All file uploads are encrypted in transit using SSL/TLS. Processed files are temporarily stored for processing, then permanently deleted within 24-48 hours. We never use your content for AI training, marketing, or any purpose beyond providing the requested service.</p>
              <p>GDPR compliant with EU data protection standards. Your creative work, whether images, videos, or text, remains your private intellectual property. We don't track what you create or sell usage data to third parties.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Getting Started: No Signup Required for Most Tools</h3>
              <p>Most Scenith tools work immediately without creating an account. Simply visit the tool page, upload your file or enter your text, and get results instantly. Creating a free account unlocks additional benefits: cloud storage for projects, higher usage limits, and the ability to access your work from any device.</p>
              <p>Account creation takes 30 seconds with email or instant Google sign-in. No credit card required, no free trial that converts to paid—genuinely free access forever.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Browser Compatibility and System Requirements</h3>
              <p>Scenith tools work in all modern browsers: Chrome, Firefox, Safari, Edge, Opera, and Brave. Minimum requirements: Any device with internet connection and modern browser (last 2 years). Works on Windows, macOS, Linux, iOS, iPad, and Android.</p>
              <p>No plugins or extensions required. No software downloads. No system resources used—all processing happens in the cloud. Even low-end devices can access professional-grade AI tools.</p>
            </div>

            <div className={styles.contentBlock}>
              <h3>Roadmap: Upcoming Tools and Features</h3>
              <p>We're constantly expanding our free tool suite based on user feedback. Upcoming releases include: AI Image Generator (text-to-image), Video Background Blur, Audio Noise Removal, Batch Image Processing, Advanced Video Editor, and more AI-powered automation.</p>
              <p>All new tools will maintain our commitment: 100% free, no watermarks, commercial use allowed, and no feature restrictions.</p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection} role="region" aria-labelledby="faq-title">
            <h2 id="faq-title" className={styles.sectionTitle}>Frequently Asked Questions About Scenith Tools</h2>
            <div className={styles.faqGrid}>
              <article className={styles.faqItem}>
                <h3>Are Scenith tools completely free to use?</h3>
                <p>Yes! All Scenith tools are 100% free with no hidden costs, watermarks, or usage limits. You get full access to AI voice generation, subtitle creation, image editing, background removal, and all other tools without any payment required. Free accounts include generous usage limits, with premium tiers available for power users who need unlimited access.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>Do I need to sign up to use these tools?</h3>
                <p>Most tools work without signup for basic use. You can try background removal, voice generation, and other tools immediately. Creating a free account unlocks cloud storage for your projects, higher usage limits, and the ability to access your work from any device. Signup takes 30 seconds with email or instant Google sign-in.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>Can I use these tools for commercial projects?</h3>
                <p>Absolutely! All content created with Scenith tools comes with full commercial use rights. Use generated voices, edited images, subtitled videos, and more in your business, YouTube channel, client work, or any commercial project. No attribution required, no royalties, and no restrictions on monetization.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>What makes Scenith tools different from other free tools?</h3>
                <p>Scenith tools use advanced AI technology to deliver professional-grade results instantly. Unlike other platforms, we don't add watermarks, limit features behind paywalls, or restrict usage. You get unlimited access to all tools with no compromises on quality or functionality. Our AI voice generator rivals $50/month services, background remover matches professional software, and image editor provides Photoshop-level capabilities—all completely free.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>How accurate is the AI subtitle generator?</h3>
                <p>Our subtitle generator uses OpenAI's Whisper AI model, achieving 95-98% accuracy for clear audio with standard accents. Accuracy may be lower for heavy accents, technical jargon, or poor audio quality. You can manually edit any generated subtitles for perfect accuracy using our built-in editor.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>What file formats are supported?</h3>
                <p>We support all major formats: Images (JPG, PNG, WebP), Videos (MP4, MOV, AVI, MKV, WMV), Audio (MP3, WAV, OGG). Export options include PNG with transparency, high-quality JPG, MP3 audio, and print-ready PDF. File size limits: Images up to 30MB, videos up to 500MB (free tier).</p>
              </article>
              <article className={styles.faqItem}>
                <h3>Is my data safe and private?</h3>
                <p>Yes! All uploads are encrypted using SSL/TLS. Processed files are temporarily stored for processing, then permanently deleted within 24-48 hours. We never use your content for AI training or share it with third parties. Fully GDPR compliant with EU data protection standards.</p>
              </article>
              <article className={styles.faqItem}>
                <h3>Do these tools work on mobile devices?</h3>
                <p>Yes! All Scenith tools are fully responsive and work on smartphones and tablets. The same powerful AI processing is available on iOS, Android, iPad, and any device with a modern browser. Some complex editing tasks are easier on desktop, but mobile access is fully supported.</p>
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection} id="get-started" role="region" aria-labelledby="cta-title">
            <div className={styles.ctaContent}>
              <span className={styles.ctaIcon}>💡</span>
              <h2 id="cta-title" className={styles.ctaTitle}>Ready to Transform Your Content Creation?</h2>
              <p className={styles.ctaText}>
                Join 50,000+ creators using Scenith's free AI tools • No signup required for most tools • 100% free forever • Full commercial rights
              </p>
              <button 
                className={styles.ctaBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore All Free Tools
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}