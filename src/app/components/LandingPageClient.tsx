"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlay, FaMicrophone, FaClosedCaptioning, FaExchangeAlt, FaEraser, FaTachometerAlt, FaPaintBrush, FaCompressArrowsAlt } from 'react-icons/fa';
import '../../../styles/LandingPage.css';
import PremiumUpgradePopup from '../components/PremiumUpgradePopup';
import '../../../styles/components/PremiumUpgradePopup.css';

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
    color: '#0b8a82',
    badge: null
  },
  {
    id: 'image-editing',
    title: 'Image Editor',
    icon: FaPaintBrush,
    description: 'A Friendly Image Editor for all your Social Requirements.',
    link: '/tools/image-editing',
    color: '#5e59ae',
    badge: 'New'
  },
  {
    id: 'video-editing',
    title: 'Video Editor',
    icon: FaPaintBrush,
    description: 'A Friendly Video Editor for all your Social Requirements.',
    link: 'https://scenith.in/dashboard',
    color: '#8801b1',
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
    id: 'speed-modifier',
    title: 'Video Speed Modifier',
    icon: FaTachometerAlt,
    description: 'Speed up or slow down your videos',
    link: '/tools/video-speed-modifier',
    color: '#62caf7',
    badge: null
  }
];

const youtubeTutorials = [
  { id: 'Yw549sO7RgE', title: 'Scenith Tutorial: Getting Started' },
  { id: 'XNFJjzScSHU', title: 'Scenith Tutorial: Adding Transitions' },
  { id: 'qoQSktfHvZ8', title: 'Scenith Tutorial: AI Subtitles' },
];

export default function LandingPageClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const detectLocationAndShowPopup = async () => {
      try {
        setTimeout(() => {
          setShowPremiumPopup(true);
        }, 2000);
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };

    detectLocationAndShowPopup();
  }, []);

  const handleClosePremiumPopup = () => {
    setShowPremiumPopup(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Scenith - Free AI Video Editor & Content Creation Platform | Professional Video Editing Online</title>
        <meta
          name="description"
          content="Create professional videos FREE with Scenith's AI-powered video editor. 7+ tools: AI voice generation, auto subtitles, background removal & more. No watermark. Join 10,000+ creators. Start now!"
        />
        <meta
          name="keywords"
          content="free video editor online, AI video editor, video editing software free, online video editor no watermark, professional video editing, AI voice generator, auto subtitle generator, background remover, video speed modifier, media converter, video compression tool, content creation platform, YouTube video editor, TikTok video maker, Instagram Reels editor, Scenith, browser-based video editor, cloud video editing, social media content creator"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://scenith.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scenith.in/" />
        <meta property="og:title" content="Scenith - Free AI Video Editor | Professional Video Editing Online" />
        <meta property="og:description" content="Create stunning videos FREE with 7+ AI tools. Professional video editor, voice generation, auto subtitles & more. No watermark. Join 10,000+ creators!" />
        <meta property="og:image" content="https://scenith.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scenith" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://scenith.in/" />
        <meta name="twitter:title" content="Scenith - Free AI Video Editor & Content Creation" />
        <meta name="twitter:description" content="Professional video editing FREE. 7+ AI tools, no watermark. Join 10,000+ creators!" />
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
              "description": "Free AI-powered video editing and content creation platform with professional tools for creators. No watermark, browser-based, 7+ AI tools.",
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
              "description": "Free AI-powered video editing platform for professional content creation",
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
              "description": "Professional free online video editor with AI-powered tools for voice generation, subtitle creation, background removal, and more. No watermark, browser-based.",
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
              "description": "Free AI-powered tools for content creators",
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
                  "name": "Is Scenith really free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Scenith offers a completely free tier with access to all essential video editing tools, AI voice generation, subtitle creation, and more. You can create professional videos without any watermarks. Upgrade options are available for advanced features and higher limits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Scenith different from other video editors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith is a browser-based platform requiring no downloads or installations. It combines 7+ professional AI tools in one place, offers free unlimited exports without watermarks, and works on any device with a web browser. Perfect for YouTube, TikTok, Instagram Reels, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI tools does Scenith provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scenith offers AI Voice Generation (text-to-speech with 40+ voices), AI Subtitle Generation (auto-transcription), Background Remover, Video Speed Modifier, Media Compression, Media Format Conversion, and Image Editing. All tools are designed for professional content creation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to download software to use Scenith?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! Scenith is a fully web-based platform that runs directly in your browser. No downloads, installations, or updates required. Access your projects from any device with an internet connection."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I create videos for YouTube and social media?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Scenith has built-in presets for YouTube (1920x1080), TikTok (1080x1920), Instagram Reels, and YouTube Shorts. Export in HD/Full HD with no watermarks, optimized for every platform."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Scenith add watermarks to my videos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! All videos exported from Scenith are completely watermark-free, even on the free BASIC plan. Your content remains professional and ready to publish."
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
              Free Online Video Editor with <span className="highlight">AI-Powered Tools</span>
            </h1>
            <p>
              Create professional videos for YouTube, TikTok, and Instagram FREE with Scenith's all-in-one AI platform. Generate lifelike voiceovers, auto-generate subtitles, edit videos, enhance images, and more — all in your browser. No watermark. No downloads. Just create.
            </p>
            <div className="hero-cta">
              <Link href="/tools/ai-voice-generation" className="cta-button primary">
                AI Voice Generator
              </Link>
              <Link href="/dashboard" className="cta-button secondary">
                Video Editor
              </Link>
              <Link href="/tools/image-editing" className="cta-button secondary">
                Image Editor
              </Link>
            </div>
          </motion.div>
        </section>

        {/* NEW: SEO-Rich Introduction Section */}
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '30px',
                fontWeight: '700',
                color: '#1E293B',
                textAlign: 'center'
              }}>
                Professional Video Editing Made Simple & Free
              </h2>
              <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#64748B',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                <p style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#1E293B' }}>Scenith is the #1 free online video editor</strong> trusted by over 10,000 content creators worldwide. Whether you're a YouTuber, social media influencer, or business owner, our browser-based platform delivers professional-grade video editing without the complexity or cost of traditional desktop software.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Unlike expensive video editing software like Adobe Premiere Pro or Final Cut Pro, Scenith requires <strong style={{ color: '#1E293B' }}>no downloads, installations, or powerful hardware</strong>. Edit videos directly in your web browser on any device—Windows, Mac, Linux, Chromebook, or even tablets. Our AI-powered tools handle everything from voice generation and subtitle creation to background removal and media conversion.
                </p>
                <p>
                  What makes Scenith special? <strong style={{ color: '#1E293B' }}>Zero watermarks on all exports, even on the free plan.</strong> Create unlimited HD and Full HD videos for YouTube (1920x1080), TikTok (1080x1920), Instagram Reels, Facebook, and more. With built-in presets, GPU acceleration, and cloud storage, you can start creating professional content in seconds—not hours.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools Showcase Section */}
        <section className="tools-showcase-section" id="tools-section">
          <div className="section-header">
            <h2>7+ Professional AI Tools in One Platform</h2>
            <p className="section-subtitle">Everything you need for professional video creation—completely free to start</p>
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
              Try AI Voice Generator Free
            </Link>
          </div>
        </section>

        {/* NEW: Why Choose Scenith - SEO Comparison */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '60px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '25px',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                Scenith vs Traditional Video Editors
              </h2>
              <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto',
                color: '#64748B'
              }}>
                See why creators are switching from desktop software to browser-based editing
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {[
                {
                  title: 'No Installation Required',
                  scenith: 'Works instantly in your browser',
                  others: 'Hours of downloading & installing',
                  icon: '⚡'
                },
                {
                  title: 'System Requirements',
                  scenith: 'Any modern browser, any device',
                  others: 'High-end PC/Mac required',
                  icon: '💻'
                },
                {
                  title: 'AI Features',
                  scenith: 'Built-in: Voice, Subtitles, BG removal',
                  others: 'Expensive add-ons or subscriptions',
                  icon: '🤖'
                },
                {
                  title: 'Learning Curve',
                  scenith: 'Intuitive interface, start in minutes',
                  others: 'Weeks of tutorials needed',
                  icon: '📚'
                },
                {
                  title: 'Collaboration',
                  scenith: 'Cloud-based, access anywhere',
                  others: 'Complex file transfers',
                  icon: '☁️'
                }
              ].map((comparison, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '20px',
                    padding: '35px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    transform: 'translateY(-5px)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{comparison.icon}</div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '20px',
                    fontWeight: '600',
                    color: '#1E293B'
                  }}>
                    {comparison.title}
                  </h3>
                  <div style={{
                    padding: '15px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#3B82F6', fontWeight: '600', marginBottom: '5px' }}>
                      ✅ Scenith
                    </div>
                    <div style={{ color: '#1E293B', fontWeight: '500' }}>
                      {comparison.scenith}
                    </div>
                  </div>
                  <div style={{
                    padding: '15px',
                    background: 'rgba(239, 68, 68, 0.05)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#EF4444', fontWeight: '600', marginBottom: '5px' }}>
                      ❌ Traditional Editors
                    </div>
                    <div style={{ color: '#64748B' }}>
                      {comparison.others}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <div className="stat-label">Active Creators</div>
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

        {/* NEW: Feature Deep Dive Section */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '60px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '25px',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                Everything You Need for Professional Content
              </h2>
              <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto',
                color: '#64748B'
              }}>
                From video editing to AI voice generation—all the tools content creators love
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {[
                {
                  title: 'Free Online Video Editor',
                  description: 'Professional timeline-based video editor with frame-accurate precision. Cut, trim, merge clips, add transitions, apply effects, and create stunning videos for YouTube, TikTok, Instagram Reels, and more. Built-in presets for 1920x1080 (YouTube), 1080x1920 (vertical shorts), and custom dimensions. GPU-accelerated rendering ensures smooth editing even for 4K content.',
                  features: ['Multi-track timeline', 'Drag & drop interface', 'Unlimited undo/redo', 'HD & Full HD export', 'No watermarks ever', 'Cloud auto-save']
                },
                {
                  title: 'AI Voice Generator (Text-to-Speech)',
                  description: 'Transform text into natural-sounding voiceovers with 40+ AI voices across 20+ languages. Perfect for YouTube narration, explainer videos, audiobooks, and podcasts. BASIC plan includes 5,000 characters/month. Advanced plans offer up to 150,000 characters with commercial usage rights. Generate lifelike speech with proper intonation, pauses, and emotion.',
                  features: ['40+ natural AI voices', '20+ languages supported', 'Adjustable speed & pitch', 'Commercial use rights', 'MP3 & WAV export', 'No robotic sound']
                },
                {
                  title: 'Auto Subtitle Generator (AI Transcription)',
                  description: 'Automatically generate accurate subtitles from video audio using AI transcription technology. Supports multiple languages with high accuracy. Customize font styles, colors, positions, and animations to match your brand. Perfect for making content accessible and boosting engagement on social media where 85% of videos are watched without sound.',
                  features: ['Auto speech-to-text', 'Multi-language support', 'Custom styling options', 'SRT/VTT export', 'Animated captions', 'Timestamp editing']
                },
                {
                  title: 'Background Remover (AI-Powered)',
                  description: 'Remove image backgrounds in seconds using advanced AI technology. Perfect for product photos, profile pictures, thumbnails, and marketing materials. Handles complex edges, hair, and transparent objects. Download as PNG with transparent background or replace with custom colors and gradients. No manual masking required.',
                  features: ['One-click removal', 'Smart edge detection', 'Transparent PNG export', 'Custom backgrounds', 'Batch processing', 'Hair & fur handling']
                },
                {
                  title: 'Video Speed Modifier',
                  description: 'Speed up or slow down videos with precision control. Create cinematic slow-motion effects (0.25x-0.5x), accelerate time-lapses (2x-4x), or fine-tune pacing for perfect storytelling. Maintains audio pitch or allows pitch shifting. Export with adjusted speed at original quality—no frame drops or artifacts.',
                  features: ['0.25x to 4x speed range', 'Frame interpolation', 'Audio pitch control', 'Smooth playback', 'Quality preservation', 'Precise control']
                },
                {
                  title: 'Media Converter & Compressor',
                  description: 'Convert between any video or audio format (MP4, AVI, MOV, MKV, MP3, WAV, etc.) with one click. Compress large files up to 80% while maintaining visual quality using smart algorithms. Optimize videos for web, social media, or email sharing. Batch processing available for multiple files. Fast cloud-based conversion.',
                  features: ['20+ format support', 'Up to 80% compression', 'Quality presets', 'Batch processing', 'Fast conversion', 'No quality loss']
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '24px',
                    padding: '40px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    borderColor: '#3B82F6',
                    transform: 'translateY(-5px)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '25px',
                    color: '#64748B'
                  }}>
                    {feature.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '10px'
                  }}>
                    {feature.features.map((item, i) => (
                      <li key={i} style={{
                        fontSize: '0.95rem',
                        color: '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span style={{ color: '#3B82F6', fontSize: '1.2rem' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="tutorials-section" id="tutorials-section">
          <div className="section-header">
            <h2>Learn Video Editing with Scenith Tutorials</h2>
            <p className="section-subtitle">Master professional video editing in minutes with our step-by-step guides</p>
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
            Watch More Free Tutorials on YouTube
          </a>
        </section>

        {/* Blog Preview Section */}
        <section className="blog-preview-section" id="blog-section">
          <div className="section-header">
            <h2>Video Editing Tips & Content Creation Guides</h2>
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
                <p>Master the art of subtitle creation with our comprehensive guide. Learn AI auto-generation techniques and manual editing tips that make your content accessible and boost engagement by 80%.</p>
                <Link href="/blogs/how-to-add-subtitles-to-video" className="blog-preview-cta">
                  Read Complete Guide
                </Link>
              </div>
            </div>
            <div className="blog-preview-card">
              <div className="blog-preview-content">
                <h3>How to Reach 4000 Hours Watch Time on YouTube</h3>
                <p>Discover proven strategies to hit YouTube's monetization milestone. Learn content optimization, audience retention tactics, and SEO techniques used by successful creators to reach 4000 hours fast.</p>
                <Link href="/blogs/how-to-reach-4000-hours-watch-time" className="blog-preview-cta">
                  Read Complete Guide
                </Link>
              </div>
            </div>
          </motion.div>
          <Link href="/blogs" className="view-all-blogs-cta">
            View All Video Editing & Marketing Guides
          </Link>
        </section>

        {/* NEW: FAQ Section - Enhanced */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '60px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '25px',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                Frequently Asked Questions
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748B'
              }}>
                Everything you need to know about video editing with Scenith
              </p>
            </motion.div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                {
                  q: 'Is Scenith really 100% free to use?',
                  a: 'Yes! Scenith offers a completely free BASIC plan with 15 projects, up to 60 FPS, HD exports, and ALL core features including AI voice generation (5,000 chars/month), subtitle creation, and background removal. Best part? Zero watermarks on all your videos, forever. Upgrade to CREATOR or STUDIO only if you need unlimited projects, higher FPS, or more AI credits.'
                },
                {
                  q: 'What makes Scenith better than Adobe Premiere or Final Cut Pro?',
                  a: 'Scenith runs entirely in your web browser—no downloads, no installations, no expensive hardware required. While Premiere costs $20-55/month (or $300+ one-time) and needs a high-end PC, Scenith is free and works on any device. Plus, our AI tools (voice generation, auto-subtitles, BG removal) are built-in, not expensive add-ons. Perfect for creators who want professional results without the technical complexity.'
                },
                {
                  q: 'Can I create videos for YouTube, TikTok, and Instagram Reels?',
                  a: 'Absolutely! Scenith has optimized presets for every platform: YouTube (1920x1080 @ 30 FPS), YouTube Shorts (1080x1920 @ 60 FPS), TikTok (1080x1920), Instagram Reels (1080x1920), Facebook (1920x1080), and custom dimensions. Choose your aspect ratio, edit with professional tools, and export in HD/Full HD with no watermarks—ready to upload anywhere.'
                },
                {
                  q: 'Do I need powerful hardware or a gaming PC?',
                  a: 'No! Scenith uses GPU acceleration in your browser, so any modern laptop, desktop, Chromebook, or tablet can edit smoothly. Even older devices with Chrome, Firefox, Safari, or Edge work great. No need for expensive hardware upgrades—if you can browse the web, you can edit professional videos with Scenith.'
                },
                {
                  q: 'What AI features are included in the free plan?',
                  a: 'BASIC users get AI Voice Generation (5,000 characters/month across 40+ voices), AI Subtitle Generation (auto-transcription with customization), Background Remover (unlimited image BG removal), Video Speed Modifier, Media Converter, and Compression tools. All AI features are fully functional in the free tier—upgrade only for higher character limits or advanced features.'
                },
                {
                  q: 'Are my video projects saved automatically?',
                  a: 'Yes! Scenith auto-saves your work every 10 seconds to the cloud. Access your projects from any device, anywhere—your edits sync instantly. Close your browser, switch computers, or continue on mobile. Your videos, timelines, and assets are always safe and accessible. Never lose work again.'
                },
                {
                  q: 'Does Scenith add watermarks to exported videos?',
                  a: 'No watermarks, ever—not even on the free BASIC plan! All videos exported from Scenith are completely clean and professional. Your brand stays front and center. This sets us apart from most free video editors that plaster logos on your content. With Scenith, your videos are truly yours.'
                },
                {
                  q: 'How long does video rendering take?',
                  a: 'Export speed depends on video length, resolution, and effects complexity. Most 1-5 minute videos in Full HD render in 2-10 minutes using our cloud servers. GPU acceleration ensures smooth editing and fast exports. Premium plans get priority rendering for even faster turnaround. No waiting hours like some desktop editors.'
                },
                {
                  q: 'Can I collaborate with my team on video projects?',
                  a: 'Scenith projects are cloud-based, making collaboration easy. Share project access with team members, work simultaneously, and all changes sync in real-time. Perfect for content agencies, social media teams, and remote creators. No complex file transfers or version conflicts—everyone works on the latest version automatically.'
                },
                {
                  q: 'What video formats does Scenith support?',
                  a: 'Import: MP4, AVI, MOV, MKV, WebM, FLV, WMV, and more. Export: MP4 (H.264/H.265), WebM, and platform-optimized formats. Our Media Converter tool handles 20+ formats. Audio support includes MP3, WAV, AAC, OGG, and FLAC. Images: JPEG, PNG, GIF, WebP, SVG. Convert between any format with one click.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '16px',
                    padding: '30px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    borderColor: '#3B82F6'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '15px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748B'
                  }}>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="motivation-section" id="motivation-section">
          <div className="section-header">
            <h2>Join 10,000+ Creators Building Their Audience with Scenith</h2>
          </div>
          <motion.div
            className="motivation-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Scenith is more than just a free video editor—it&apos;s a complete content creation platform designed to empower creators like you. Whether you&apos;re building a YouTube channel, growing on TikTok, creating Instagram Reels, or producing professional marketing videos, Scenith provides broadcast-quality AI tools in an intuitive browser interface.
            </p>
            <p style={{ marginTop: '20px' }}>
              Our mission is to democratize video creation. No expensive software subscriptions, no powerful hardware requirements, no steep learning curves—just professional results in minutes. From AI voice generation to auto subtitles, background removal to video editing, everything you need is here, free to start.
            </p>
            <div className="motivation-features-quick">
              <div className="quick-feature">✓ No Watermarks Ever</div>
              <div className="quick-feature">✓ GPU-Accelerated Editing</div>
              <div className="quick-feature">✓ Free Forever Plan</div>
              <div className="quick-feature">✓ Cloud Auto-Save</div>
            </div>
            <Link href="/signup" className="motivation-cta">
              Start Creating Videos Free—No Credit Card Required
            </Link>
          </motion.div>
        </section>

        {/* NEW: Final CTA with SEO keywords */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          textAlign: 'center',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '30px',
              fontWeight: '800',
              color: '#1E293B',
              lineHeight: '1.2'
            }}>
              Ready to Create Professional Videos for Free?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              lineHeight: '1.8',
              color: '#64748B'
            }}>
              Join thousands of YouTubers, TikTokers, and content creators using Scenith's free online video editor.
              No downloads. No watermarks. No credit card required. Start editing in seconds.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <Link href="/dashboard" style={{
                fontSize: '1.2rem',
                padding: '18px 50px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                Start Video Editing Free 🎬
              </Link>
              <Link href="/tools/ai-voice-generation" style={{
                fontSize: '1.2rem',
                padding: '18px 50px',
                background: 'white',
                border: '2px solid #3B82F6',
                borderRadius: '50px',
                color: '#3B82F6',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Try AI Voice Generator 🎤
              </Link>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap',
              fontSize: '1rem',
              color: '#64748B'
            }}>
              {['✅ No Watermarks', '✅ HD/Full HD Export', '✅ 7+ AI Tools', '✅ Cloud Storage', '✅ All Platforms'].map((benefit, i) => (
                <span key={i} style={{ fontWeight: '500' }}>{benefit}</span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      <PremiumUpgradePopup
        isOpen={showPremiumPopup}
        onClose={handleClosePremiumPopup}
      />
    </>
  );
}