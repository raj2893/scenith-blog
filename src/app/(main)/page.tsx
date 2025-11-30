"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlay, FaMicrophone, FaClosedCaptioning, FaExchangeAlt, FaEraser, FaTachometerAlt, FaPaintBrush, FaCompressArrowsAlt } from 'react-icons/fa';
import '../../../styles/LandingPage.css'; // Import your existing CSS file
import Script from 'next/script';

interface ToolShowcase {
  id: string;
  title: string;
  icon: any;
  description: string;
  link: string;
  color: string;
  badge: string | null;
}

const toolsShowcase: ToolShowcase[] = [
  { 
    id: 'ai-voice', 
    title: 'AI Voice Generation', 
    icon: FaMicrophone,
    description: 'Transform text into natural-sounding speech',
    link: '/tools/ai-voice-generation',
    color: '#FF6B6B',
    badge: 'Popular'
  },
  { 
    id: 'ai-subtitle', 
    title: 'AI Subtitle Generation', 
    icon: FaClosedCaptioning,
    description: 'Auto-generate accurate subtitles instantly',
    link: '/tools/add-subtitles-to-videos',
    color: '#4ECDC4',
    badge: 'New'
  },
  { 
    id: 'media-conversion', 
    title: 'Media Conversion', 
    icon: FaExchangeAlt,
    description: 'Convert between any media format',
    link: '/tools/media-conversion-tool',
    color: '#45B7D1',
    badge: null
  },
  { 
    id: 'media-compression', 
    title: 'Media Compression', 
    icon: FaCompressArrowsAlt,
    description: 'Reduce file size without losing quality',
    link: '/tools/compress-media',
    color: '#96CEB4',
    badge: null
  },
  { 
    id: 'bg-remover', 
    title: 'Background Remover', 
    icon: FaEraser,
    description: 'Remove image backgrounds in seconds',
    link: '/tools/background-removal',
    color: '#FFEAA7',
    badge: 'Popular'
  },
  { 
    id: 'speed-modifier', 
    title: 'Video Speed Modifier', 
    icon: FaTachometerAlt,
    description: 'Speed up or slow down your videos',
    link: '/tools/video-speed-modifier',
    color: '#DFE6E9',
    badge: null
  },
  { 
    id: 'image-editing', 
    title: 'Image Editing', 
    icon: FaPaintBrush,
    description: 'A Friendly Image Editor for all your Social Requirements.',
    link: '/tools/image-editing',
    color: '#A29BFE',
    badge: null
  }
];

const youtubeTutorials = [
  { id: 'Yw549sO7RgE', title: 'Scenith Tutorial: Getting Started' },
  { id: 'XNFJjzScSHU', title: 'Scenith Tutorial: Adding Transitions' },
  { id: 'qoQSktfHvZ8', title: 'Scenith Tutorial: AI Subtitles' },
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const navBar = document.querySelector('.nav-bar');
      const navHeight = navBar ? (navBar as HTMLElement).offsetHeight : 80;

      window.scrollTo({
        top: section.offsetTop - navHeight - 20,
        behavior: 'smooth',
      });
    }, 150);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>Scenith - AI-Powered Video Editing & Content Creation Platform | Free Online Tools</title>
        <meta
          name="title"
          content="Scenith - AI-Powered Video Editing & Content Creation Platform | Free Online Tools"
        />
        <meta
          name="description"
          content="Create stunning videos with Scenith's AI-powered platform. 7+ professional tools including AI voice generation, subtitle creation, background removal, video editing & more. Join 10,000+ creators. Free to start!"
        />
        <meta
          name="keywords"
          content="video editing software, AI video editor, video creation platform, AI voice generator, subtitle generator, background remover, video speed modifier, media converter, video compression, content creation tools, online video editor, free video editing, AI-powered tools, YouTube video editor, social media content creator, Scenith, video editing online free, best video editor, professional video editing"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://scenith.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/" />
        <meta property="og:title" content="Scenith - AI-Powered Video Editing & Content Creation Platform" />
        <meta property="og:description" content="Create stunning videos with 7+ AI-powered professional tools. Join 10,000+ creators using Scenith for video editing, voice generation, subtitles & more. Free to start!" />
        <meta property="og:image" content="https://scenith.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scenith" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://scenith.in/" />
        <meta name="twitter:title" content="Scenith - AI-Powered Video Editing Platform" />
        <meta name="twitter:description" content="Create stunning videos with 7+ AI-powered tools. Join 10,000+ creators. Free to start!" />
        <meta name="twitter:image" content="https://scenith.in/images/twitter-image.jpg" />
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
        <meta name="apple-mobile-web-app-title" content="Scenith" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Schema.org Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Scenith",
              "alternateName": "Scenith Video Editor",
              "url": "https://scenith.in",
              "description": "AI-powered video editing and content creation platform with professional tools for creators",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://scenith.in/tools?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Schema.org Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scenith",
              "url": "https://scenith.in",
              "logo": "https://scenith.in/logo.png",
              "description": "AI-powered video editing and content creation platform",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/scenith",
                "https://www.facebook.com/scenith",
                "https://www.instagram.com/scenith",
                "https://www.youtube.com/@Scenith-f4n"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "support@scenith.in",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
        
        {/* Schema.org Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Scenith Video Editor",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web Browser, Windows, macOS, Linux, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "Professional video editing platform with AI-powered tools for voice generation, subtitle creation, background removal, and more",
              "featureList": [
                "AI Voice Generation",
                "AI Subtitle Generation",
                "Background Removal",
                "Video Speed Modifier",
                "Media Compression",
                "Media Format Conversion",
                "Image Editing"
              ],
              "screenshot": "https://scenith.in/images/screenshot.jpg"
            })
          }}
        />
        
        {/* Schema.org Structured Data - ItemList for Tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Scenith Professional Tools",
              "description": "AI-powered tools for content creators",
              "numberOfItems": 7,
              "itemListElement": toolsShowcase.map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": tool.title,
                  "description": tool.description,
                  "url": `https://scenith.in${tool.link}`,
                  "applicationCategory": "MultimediaApplication",
                  "operatingSystem": "Web Browser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              }))
            })
          }}
        />
        
        {/* Schema.org Structured Data - Breadcrumb */}
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
                }
              ]
            })
          }}
        />
        
        {/* Schema.org Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Scenith?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith is an AI-powered video editing and content creation platform that provides 7+ professional tools including AI voice generation, subtitle creation, background removal, video editing, and more. It's designed to help creators produce stunning content efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Scenith free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Scenith offers a free tier with access to all essential tools. You can start creating without any watermarks and upgrade as your needs grow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools does Scenith offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith offers AI Voice Generation, AI Subtitle Generation, Background Remover, Video Speed Modifier, Media Compression, Media Format Conversion, and Image Editing tools. All tools are designed for professional content creation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to download any software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! Scenith is a web-based platform that works directly in your browser. No downloads or installations required."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className="landing-page">
        <div className="particle-background">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Hero Section */}
        <section className="hero-section" id="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Create Stunning Videos with <span className="highlight">Scenith</span>
            </h1>
            <p>
              Unleash your creativity with our powerful, AI-driven video editing platform. From AI voice generation to subtitle creation, Scenith provides <span className="stats-highlight">7+ professional tools</span> that save you hours of work. Join <span className="stats-highlight">10,000+ creators</span> who trust Scenith.
            </p>
            <div className="hero-cta">
              <Link href="/signup" className="cta-button primary">
                Start Editing Now
              </Link>
              <button
                className="cta-button secondary"
                onClick={() => scrollToSection('tutorials-section')}
              >
                Watch Tutorials <FaPlay className="play-icon" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Tools Showcase Section */}
        <section className="tools-showcase-section" id="tools-section">
          <div className="section-header">
            <h2>Powerful Tools at Your Fingertips</h2>
            <p className="section-subtitle">Everything you need to create professional content, all in one place</p>
          </div>
          <motion.div
            className="tools-showcase-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {toolsShowcase.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  className="tool-showcase-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ '--tool-color': tool.color } as React.CSSProperties}
                >
                  <Link href={tool.link} className="tool-card-link">
                    {tool.badge && (
                      <div className={`tool-badge ${tool.badge === 'Coming Soon' ? 'coming-soon' : ''}`}>
                        {tool.badge}
                      </div>
                    )}
                    <div className="tool-icon-wrapper">
                      <IconComponent className="tool-showcase-icon" />
                    </div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <button className="tool-try-button">
                      Try Now <span className="arrow">→</span>
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="tools-cta-wrapper">
            <p className="tools-cta-text">Can&apos;t decide? Start with our most popular tool</p>
            <Link href="/tools/ai-voice-generation" className="tools-main-cta">
              Try AI Voice Generator
            </Link>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <motion.div
            className="social-proof-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Videos Created</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">AI-Powered Tools</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </motion.div>
        </section>

        {/* Tutorials Section */}
        <section className="tutorials-section" id="tutorials-section">
          <div className="section-header">
            <h2>Learn with Scenith Tutorials</h2>
          </div>
          <motion.div
            className="tutorials-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {youtubeTutorials.map((tutorial) => (
              <div className="tutorial-card" key={tutorial.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.id}`}
                  title={tutorial.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <h3>{tutorial.title}</h3>
              </div>
            ))}
          </motion.div>
          <a
            href="https://www.youtube.com/@Scenith-f4n"
            target="_blank"
            rel="noopener noreferrer"
            className="tutorials-cta"
          >
            View More on YouTube
          </a>
        </section>

        {/* Blog Preview Section */}
        <section className="blog-preview-section" id="blog-section">
          <div className="section-header">
            <h2>Latest from Our Blog</h2>
          </div>
          <motion.div
            className="blog-preview-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-preview-card">
              <div className="blog-preview-content">
                <h3>How to Add Subtitles to Video</h3>
                <p>Master the art of subtitle creation with our comprehensive guide. Learn techniques that make your content accessible and engaging.</p>
                <Link href="/blogs/how-to-add-subtitles-to-video" className="blog-preview-cta">
                  Read More
                </Link>
              </div>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-content">
                <h3>How to reach 4000 hours of Watch Time on YouTube</h3>
                <p>Discover the way to reach the mark of 4000 hours of Watch Time on YouTube and start your monetization journey.</p>
                <Link href="/blogs/how-to-reach-4000-hours-watch-time" className="blog-preview-cta">
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
          <Link href="/blogs" className="view-all-blogs-cta">
            View All Blog Posts
          </Link>
        </section>

        {/* Motivation Section */}
        <section className="motivation-section" id="motivation-section">
          <div className="section-header">
            <h2>Why Choose Scenith?</h2>
          </div>
          <motion.div
            className="motivation-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Scenith is more than just a video editor—it&apos;s a complete content creation platform designed to empower creators like you. Whether you&apos;re crafting content for YouTube, Instagram, TikTok, or personal projects, Scenith provides professional-grade AI tools in an intuitive interface. Our mission is to make content creation accessible, efficient, and fun, so you can focus on telling stories that captivate and inspire.
            </p>
            <div className="motivation-features-quick">
              <div className="quick-feature">✓ No watermarks</div>
              <div className="quick-feature">✓ Fast processing</div>
              <div className="quick-feature">✓ Free tier available</div>
            </div>
            <Link href="/signup" className="motivation-cta">
              Start Creating for Free
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}