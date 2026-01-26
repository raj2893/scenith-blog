"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMicrophone, FaClosedCaptioning, FaExchangeAlt, FaEraser, FaTachometerAlt, FaPaintBrush, FaCompressArrowsAlt, FaShapes, FaPlay, FaCheckCircle, FaStar } from 'react-icons/fa';
import '../../../styles/LandingPage.css';

interface ToolShowcase {
  id: string;
  title: string;
  icon: any;
  description: string;
  link: string;
  color: string;
  badge: string | null;
  rank: number;
}

const toolsShowcase: ToolShowcase[] = [
  {
    id: 'ai-voice',
    title: 'AI Voice Generator',
    icon: FaMicrophone,
    description: '40+ natural voices in 20+ languages. Transform text to lifelike speech instantly.',
    link: '/tools/ai-voice-generation',
    color: '#FF6B6B',
    badge: '#1 Popular',
    rank: 1
  },
  {
    id: 'image-editing',
    title: 'Image Editor',
    icon: FaPaintBrush,
    description: 'Professional image editing made simple. Perfect for social media.',
    link: '/tools/image-editing',
    color: '#5e59ae',
    badge: 'Hot',
    rank: 2
  },
  {
    id: 'ai-subtitle',
    title: 'AI Subtitle Generator',
    icon: FaClosedCaptioning,
    description: 'Auto-generate accurate subtitles with AI transcription technology.',
    link: '/tools/add-subtitles-to-videos',
    color: '#0b8a82',
    badge: 'Trending',
    rank: 3
  },
  {
    id: 'speed-modifier',
    title: 'Video Speed Modifier',
    icon: FaTachometerAlt,
    description: 'Speed up or slow down videos with precision control.',
    link: '/tools/video-speed-modifier',
    color: '#62caf7',
    badge: null,
    rank: 4
  },
  {
    id: 'bg-remover',
    title: 'Background Remover',
    icon: FaEraser,
    description: 'Remove image backgrounds in seconds with AI precision.',
    link: '/tools/background-removal',
    color: '#FFEAA7',
    badge: null,
    rank: 5
  },
  {
    id: 'media-compression',
    title: 'Media Compression',
    icon: FaCompressArrowsAlt,
    description: 'Reduce file size up to 80% without quality loss.',
    link: '/tools/compress-media',
    color: '#96CEB4',
    badge: null,
    rank: 6
  },
  {
    id: 'media-conversion',
    title: 'Media Conversion',
    icon: FaExchangeAlt,
    description: 'Convert between 20+ media formats instantly.',
    link: '/tools/media-conversion-tool',
    color: '#45B7D1',
    badge: null,
    rank: 7
  },
  {
    id: 'svg-library',
    title: 'SVG Library',
    icon: FaShapes,
    description: 'Download premium SVG icons and graphics.',
    link: '/svg-library',
    color: '#E17055',
    badge: 'New',
    rank: 8
  }
];

const youtubeTutorials = [
  { id: 'Yw549sO7RgE', title: 'AI Voice Generator Tutorial' },
  { id: 'XNFJjzScSHU', title: 'Image Editor Quick Start' },
  { id: 'qoQSktfHvZ8', title: 'AI Subtitles Made Easy' },
];

export default function LandingPageClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Scenith - Free AI Voice Generator & Content Creation Tools | Premium SVG Icons</title>
        <meta
          name="description"
          content="Create professional content FREE with Scenith's AI-powered tools. #1 AI Voice Generator with 40+ voices, Image Editor, Auto Subtitles, Background Remover, SVG Library & more. No watermark. Join 10,000+ creators!"
        />
        <meta
          name="keywords"
          content="AI voice generator, text to speech, AI voice, voice generator free, TTS online, AI voiceover, image editor online, photo editor free, background remover, auto subtitle generator, video speed changer, media converter, SVG icons free, vector graphics, Scenith, content creation tools, social media tools"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://scenith.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/" />
        <meta property="og:title" content="Scenith - #1 Free AI Voice Generator & Content Creation Platform" />
        <meta property="og:description" content="Transform text to natural speech with 40+ AI voices. Plus Image Editor, Auto Subtitles, SVG Icons & more. No watermark. Free forever!" />
        <meta property="og:image" content="https://scenith.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scenith" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://scenith.in/" />
        <meta name="twitter:title" content="Scenith - Free AI Voice Generator & Content Tools" />
        <meta name="twitter:description" content="40+ natural AI voices, Image Editor, Auto Subtitles, SVG Icons. Create professional content FREE!" />
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
              "alternateName": "Scenith AI Tools",
              "url": "https://scenith.in",
              "description": "Free AI-powered content creation platform with voice generation, image editing, subtitle creation, and SVG icons.",
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
              "description": "Leading platform for AI voice generation, image editing, and content creation tools",
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
              "name": "Scenith AI Voice Generator",
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
              "description": "Professional AI voice generator with 40+ natural voices, image editor, subtitle creator, and premium SVG icons. Free forever, no watermark.",
              "featureList": [
                "AI Voice Generation (40+ voices)",
                "Image Editor",
                "AI Subtitle Generator",
                "Background Remover",
                "Video Speed Modifier",
                "Media Compression",
                "Media Format Conversion",
                "SVG Icon Library"
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
              "name": "Scenith Professional AI Tools",
              "description": "Free AI-powered tools for content creators",
              "numberOfItems": 8,
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
                  "name": "Is Scenith's AI Voice Generator really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Scenith offers a completely free tier with AI Voice Generation (5,000 characters/month across 40+ voices), Image Editor, Auto Subtitles, Background Remover, and access to our SVG Library. No watermarks, no hidden fees. Upgrade only for higher limits and advanced features."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many AI voices does Scenith offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith provides 40+ natural-sounding AI voices across 20+ languages. Our text-to-speech technology creates lifelike voiceovers perfect for YouTube, podcasts, audiobooks, explainer videos, and more. Voices include male, female, and various accents with adjustable speed and pitch."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the SVG Library?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our SVG Library contains premium vector icons and graphics. Download in SVG, PNG, or JPG formats for your projects. Perfect for web design, presentations, social media, and branding. All icons are high-quality and ready to use."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use Scenith tools for commercial projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our CREATOR and STUDIO plans include commercial usage rights for AI-generated voices, edited images, and downloaded SVG icons. The BASIC plan is for personal use. Check our pricing page for detailed licensing information."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Scenith add watermarks to my content?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No watermarks ever! All content created with Scenith—AI voices, edited images, subtitles, converted files—is completely clean and professional. Your brand stays front and center, even on the free BASIC plan."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className="landing-page">
        {/* Animated Background */}
        <div className="animated-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        {/* Hero Section - Enhanced */}
        <section className="hero-section" id="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <FaStar className="star-icon" />
              <span>Trusted by 10,000+ Creators</span>
            </div>
            
            <h1>
              Transform Text to Voice with <span className="gradient-text">AI Magic</span>
            </h1>
            
            <p className="hero-subtitle">
              Create professional voiceovers, edit stunning images, generate subtitles & access Premium SVGs—all FREE. 
              <strong> No watermarks. No downloads. Just create.</strong>
            </p>

            <div className="hero-features-grid">
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>40+ AI Voices</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>20+ Languages</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>SVG Icons</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>No Watermarks</span>
              </div>
            </div>

            <div className="hero-cta-wrapper">
              <Link href="/tools/ai-voice-generation" className="cta-button cta-primary">
                <FaMicrophone className="cta-icon" />
                Try AI Voice Generator FREE
              </Link>
              <Link href="/tools/image-editing" className="cta-button cta-secondary">
                <FaPaintBrush className="cta-icon" />
                Explore Image Editor
              </Link>
            </div>

            <p className="hero-no-credit">No credit card required • Free forever plan available</p>
          </motion.div>
        </section>

        {/* Top Tools Showcase - Featured */}
        <section className="featured-tools-section">
          <div className="section-header">
            <span className="section-label">Most Popular</span>
            <h2>8 Professional AI Tools in One Platform</h2>
            <p className="section-subtitle">Everything you need to create professional content—completely free to start</p>
          </div>

          <motion.div
            className="featured-tools-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {toolsShowcase.sort((a, b) => a.rank - b.rank).map((tool, index) => {
              const IconComponent = tool.icon;
              const isFeatured = index < 3;
              
              return (
                <motion.div
                  key={tool.id}
                  className={`tool-card ${isFeatured ? 'tool-card-featured' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={{ '--tool-color': tool.color } as React.CSSProperties}
                >
                  <Link href={tool.link} className="tool-card-link">
                    {tool.badge && (
                      <div className={`tool-badge ${tool.badge.includes('#1') ? 'badge-number-one' : ''}`}>
                        {tool.badge}
                      </div>
                    )}
                    
                    {isFeatured && <div className="featured-glow"></div>}
                    
                    <div className="tool-icon-wrapper">
                      <div className="icon-bg"></div>
                      <IconComponent className="tool-icon" />
                    </div>
                    
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    
                    <button className="tool-action-btn">
                      <span>Start Creating</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* NEW: SVG Library Highlight Section */}
        <section className="svg-library-showcase">
          <motion.div
            className="svg-showcase-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="svg-showcase-left">
              <span className="section-label">New Release</span>
              <h2 className="svg-showcase-title">
                Premium <span className="gradient-text">SVG Icons</span>
              </h2>
              <p className="svg-showcase-description">
                Browse our massive collection of professional vector icons and graphics. Download in SVG, PNG, or JPG format. 
                Perfect for websites, presentations, social media, and any design project.
              </p>
              
              <div className="svg-features-list">
                <div className="svg-feature">
                  <FaCheckCircle className="check-icon" />
                  <span>Premium Icons</span>
                </div>
                <div className="svg-feature">
                  <FaCheckCircle className="check-icon" />
                  <span>SVG, PNG, JPG Formats</span>
                </div>
                <div className="svg-feature">
                  <FaCheckCircle className="check-icon" />
                  <span>High-Quality Vectors</span>
                </div>
                <div className="svg-feature">
                  <FaCheckCircle className="check-icon" />
                  <span>Free to Download</span>
                </div>
              </div>

              <Link href="/svg-library" className="svg-cta-button">
                <FaShapes className="cta-icon" />
                Explore SVG Library
              </Link>
            </div>

            <div className="svg-showcase-right">
              <div className="svg-preview-grid">
                <div className="svg-preview-card">
                  <FaShapes style={{ fontSize: '3rem', color: '#E17055' }} />
                </div>
                <div className="svg-preview-card">
                  <FaStar style={{ fontSize: '3rem', color: '#FDCB6E' }} />
                </div>
                <div className="svg-preview-card">
                  <FaMicrophone style={{ fontSize: '3rem', color: '#6C5CE7' }} />
                </div>
                <div className="svg-preview-card">
                  <FaPaintBrush style={{ fontSize: '3rem', color: '#00B894' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Social Proof - Redesigned */}
        <section className="social-proof-modern">
          <motion.div
            className="stats-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="stat-card">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Active Creators</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500K+</div>
              <div className="stat-label">Content Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">40+</div>
              <div className="stat-label">AI Voices</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.9/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-section">
          <div className="section-header">
            <h2>Why Creators Choose Scenith</h2>
            <p className="section-subtitle">The all-in-one platform that replaces expensive subscriptions</p>
          </div>

          <div className="why-choose-grid">
            {[
              {
                title: '#1 AI Voice Generator',
                description: 'Industry-leading text-to-speech with 40+ ultra-realistic voices. Create voiceovers that sound completely human across 20+ languages.',
                icon: FaMicrophone,
                color: '#FF6B6B'
              },
              {
                title: 'Professional Image Editing',
                description: 'Powerful yet simple image editor perfect for social media. Crop, resize, add filters, text, stickers and more in seconds.',
                icon: FaPaintBrush,
                color: '#5e59ae'
              },
              {
                title: 'SVG Icon Library',
                description: 'Access our massive collection of premium vector graphics. Download in any format for unlimited use in your projects.',
                icon: FaShapes,
                color: '#E17055'
              },
              {
                title: 'Zero Watermarks, Ever',
                description: 'Unlike other free tools, we never add watermarks to your content. Your creations stay 100% professional and branded.',
                icon: FaCheckCircle,
                color: '#00B894'
              },
              {
                title: 'Browser-Based, No Downloads',
                description: 'Everything runs in your browser. No installations, updates, or expensive hardware. Works on any device with internet.',
                icon: FaPlay,
                color: '#0984E3'
              },
              {
                title: 'All Tools, One Platform',
                description: 'Voice generation, image editing, subtitles, background removal, speed modifier, compression, conversion, and SVG library—all in one place.',
                icon: FaStar,
                color: '#FDCB6E'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ '--accent-color': item.color } as React.CSSProperties}
              >
                <div className="why-icon-wrapper">
                  <item.icon className="why-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tutorials Section - Updated */}
        <section className="tutorials-section" id="tutorials-section">
          <div className="section-header">
            <h2>Learn How to Use Scenith AI Tools</h2>
            <p className="section-subtitle">Master our tools in minutes with step-by-step video guides</p>
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
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${tutorial.id}`}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
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
            Watch More Tutorials on YouTube
          </a>
        </section>

        {/* Blog Preview Section - Updated */}
        <section className="blog-preview-section" id="blog-section">
          <div className="section-header">
            <h2>Content Creation Guides & Tips</h2>
            <p className="section-subtitle">Learn from expert creators and grow your audience</p>
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
                <h3>How to Add Subtitles to Video (Free & Easy)</h3>
                <p>Master AI subtitle generation with our comprehensive guide. Learn techniques that boost engagement by 80% and make your content accessible worldwide.</p>
                <Link href="/blogs/how-to-add-subtitles-to-video" className="blog-preview-cta">
                  Read Complete Guide
                </Link>
              </div>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-content">
                <h3>How to Reach 4000 Hours Watch Time on YouTube</h3>
                <p>Discover proven strategies to hit YouTube monetization milestones. Content optimization, retention tactics, and SEO techniques from successful creators.</p>
                <Link href="/blogs/how-to-reach-4000-hours-watch-time" className="blog-preview-cta">
                  Read Complete Guide
                </Link>
              </div>
            </div>
          </motion.div>
          <Link href="/blogs" className="view-all-blogs-cta">
            View All Creator Guides & Tips
          </Link>
        </section>

        {/* FAQ Section - Enhanced */}
        <section className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about Scenith AI tools</p>
          </div>

          <div className="faq-container">
            {[
              {
                q: 'Is Scenith really 100% free to use?',
                a: 'Yes! Scenith offers a completely free BASIC plan with AI Voice Generation (5,000 characters/month across 40+ voices), Image Editor, Subtitle Generator, Background Remover, and access to SVG icons. Best part? Zero watermarks on all your content, forever. Upgrade to CREATOR or STUDIO only if you need unlimited projects, higher character limits, or commercial usage rights.'
              },
              {
                q: 'How many AI voices does Scenith provide?',
                a: 'Scenith offers 40+ natural-sounding AI voices across 20+ languages including English, Spanish, French, German, Hindi, Japanese, and more. Our text-to-speech technology creates lifelike voiceovers with proper intonation, pauses, and emotion. Perfect for YouTube narration, podcasts, audiobooks, explainer videos, and more. Adjust speed, pitch, and tone for complete customization.'
              },
              {
                q: 'What is the SVG Library and how does it work?',
                a: 'Our SVG Library contains premium vector icons and graphics covering every category—business, technology, social media, education, health, and more. Simply browse, select your icon, and download in SVG (vector), PNG, or JPG format. All icons are high-quality, professionally designed, and ready to use in websites, presentations, social media, apps, and any design project.'
              },
              {
                q: 'Can I use Scenith for commercial projects?',
                a: 'Yes! Our CREATOR and STUDIO plans include full commercial usage rights for AI-generated voices, edited images, and downloaded SVG icons. Create content for clients, monetized YouTube videos, podcasts, advertisements, and business projects. The BASIC plan is for personal use only. Check our pricing page for detailed licensing terms.'
              },
              {
                q: 'Does Scenith add watermarks to my content?',
                a: 'No watermarks ever! All content created with Scenith—AI voiceovers, edited images, subtitles, converted files, downloaded SVGs—is completely clean and professional. Your brand stays front and center, even on the free BASIC plan. We believe creators should own their work 100%.'
              },
              {
                q: 'What makes Scenith different from other AI voice generators?',
                a: 'Scenith combines the #1 AI voice generator with 7 other professional tools in one platform. Unlike competitors, we offer true browser-based creation (no downloads), zero watermarks on free plans, bonus SVG icons, and all tools work together seamlessly. Plus, our AI voices sound more natural than most expensive alternatives.'
              },
              {
                q: 'Do I need to download software to use Scenith?',
                a: 'No! Scenith is a fully web-based platform that runs directly in your browser. No downloads, installations, or updates required. Works on any device—Windows, Mac, Linux, Chromebooks, tablets, even phones. Just sign in and start creating. Your projects auto-save to the cloud, accessible anywhere with internet.'
              },
              {
                q: 'What formats can I download my AI voice in?',
                a: 'AI-generated voices can be downloaded as MP3 (smaller file size, great for podcasts and web) or WAV (uncompressed, studio quality for professional projects). Choose based on your needs. Both formats maintain the natural sound quality of our AI voices.'
              },
              {
                q: 'How accurate is the AI subtitle generator?',
                a: 'Our AI transcription achieves 90-95% accuracy for clear audio in supported languages. Accuracy improves with good audio quality, minimal background noise, and clear speech. You can easily edit any transcript before adding it to your video. Customize font styles, colors, positions, and animations to match your brand.'
              },
              {
                q: 'Can I use multiple tools together in one project?',
                a: 'Absolutely! That\'s the power of Scenith\'s unified platform. Generate an AI voiceover, add it to a video, create auto-subtitles, edit a thumbnail in the Image Editor, download SVG icons for graphics—all in one workflow. Everything integrates seamlessly for maximum productivity.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="final-cta-section">
          <motion.div
            className="final-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="cta-label">Ready to Create?</span>
            <h2 className="final-cta-title">
              Start Using Professional AI Tools <span className="gradient-text">Completely Free</span>
            </h2>
            <p className="final-cta-description">
              Join 10,000+ content creators using Scenith's AI-powered platform. Generate natural voiceovers, 
              edit stunning images, create subtitles, and access SVG icons—all without watermarks.
            </p>
            
            <div className="final-cta-buttons">
              <Link href="/tools/ai-voice-generation" className="final-cta-primary">
                <FaMicrophone className="cta-icon" />
                Start with AI Voice Generator
              </Link>
              <Link href="/svg-library" className="final-cta-secondary">
                <FaShapes className="cta-icon" />
                Browse SVG Library
              </Link>
            </div>

            <div className="final-cta-features">
              {['✅ No Credit Card Required', '✅ No Watermarks', '✅ 40+ AI Voices', '✅ SVG Icons', '✅ Free Forever'].map((benefit, i) => (
                <span key={i} className="cta-feature-badge">{benefit}</span>
              ))}
            </div>

            <p className="final-cta-note">
              Start free • Upgrade anytime • Cancel anytime
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}