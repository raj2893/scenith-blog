"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMicrophone, FaClosedCaptioning, FaExchangeAlt, FaEraser, FaTachometerAlt, FaPaintBrush, FaCompressArrowsAlt, FaShapes, FaPlay, FaCheckCircle, FaStar, FaFilePdf } from 'react-icons/fa';
import '../../../styles/LandingPage.css';

// Enhanced Structured Data
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://scenith.in/#website",
      "name": "Scenith",
      "alternateName": ["Scenith AI Tools", "Scenith Content Platform"],
      "url": "https://scenith.in",
      "description": "Free AI-powered content creation platform with voice generation, image editing, subtitle creation, PDF tools, and 10,000+ SVG icons.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://scenith.in/tools?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://scenith.in/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://scenith.in/#organization",
      "name": "Scenith",
      "legalName": "Scenith Technologies",
      "url": "https://scenith.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://scenith.in/logo.png",
        "width": 512,
        "height": 512
      },
      "foundingDate": "2024",
      "founder": {
        "@type": "Organization",
        "name": "Scenith Team"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "support@scenith.in",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://twitter.com/scenith",
        "https://www.facebook.com/scenith",
        "https://www.instagram.com/scenith",
        "https://www.youtube.com/@Scenith-f4n"
      ]
    },
    {
      "@type": "WebApplication",
      "@id": "https://scenith.in/#webapp",
      "name": "Scenith AI Content Creation Platform",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser, Windows, macOS, Linux, iOS, Android",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "0",
        "highPrice": "49",
        "priceCurrency": "USD",
        "offerCount": "3"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10247",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "AI Voice Generation (40+ voices, 20+ languages)",
        "Professional Image Editor",
        "AI Subtitle Generator",
        "Background Remover",
        "Video Speed Modifier",
        "Media Compression & Conversion",
        "PDF Tools Suite (Merge, Split, Compress)",
        "10,000+ Premium SVG Icons",
        "No watermarks on free plan",
        "Browser-based, no downloads"
      ],
      "screenshot": "https://scenith.in/images/platform-screenshot.jpg",
      "author": {
        "@type": "Organization",
        "@id": "https://scenith.in/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://scenith.in/#toolslist",
      "name": "Scenith Professional AI Tools",
      "description": "Complete suite of AI-powered content creation tools",
      "numberOfItems": 9,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "AI Voice Generator",
            "url": "https://scenith.in/tools/ai-voice-generation",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Image Editor",
            "url": "https://scenith.in/tools/image-editing",
            "applicationCategory": "DesignApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "PDF Tools Suite",
            "url": "https://scenith.in/tools/pdf-tools",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://scenith.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Scenith and what tools does it offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith is a free AI-powered content creation platform offering 9 professional tools: (1) AI Voice Generator with 40+ natural voices in 20+ languages, (2) Professional Image Editor for social media graphics, (3) AI Subtitle Generator for video captions, (4) Background Remover using AI precision, (5) Video Speed Modifier, (6) Media Compression, (7) Media Format Conversion, (8) PDF Tools Suite (merge, split, compress, convert), and (9) 10,000+ Premium SVG Icons Library. All tools are browser-based with no downloads required and include a free forever plan with zero watermarks."
          }
        },
        {
          "@type": "Question",
          "name": "Is Scenith really 100% free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Scenith offers a completely free BASIC plan with AI Voice Generation (3,500 characters/month), unlimited Image Editor access, Subtitle Generator, Background Remover, PDF Tools, and access to our SVG Icon Library. Best part? Zero watermarks on all your content, forever. You only upgrade to CREATOR ($19/month) or STUDIO ($49/month) if you need unlimited projects, higher character limits (60,000-150,000/month), commercial usage rights, or priority support."
          }
        },
        {
          "@type": "Question",
          "name": "How does Scenith compare to other AI content creation platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith combines 9 professional tools in one platform vs competitors offering single-purpose tools. Unlike Adobe Creative Cloud ($54.99/month), Canva Pro ($12.99/month for limited features), or ElevenLabs ($22/month voice only), Scenith offers comprehensive creation tools starting free. Key advantages: (1) No watermarks on free plan, (2) Browser-based - works on any device, (3) All tools integrated seamlessly, (4) 40+ AI voices vs competitors' 10-20, (5) PDF tools included free vs $239/year for Adobe Acrobat, (6) 10,000+ SVG icons vs $16/month for separate icon subscriptions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Scenith for commercial projects and client work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but it depends on your plan. CREATOR and STUDIO plans include full commercial usage rights for all generated content - AI voices, edited images, subtitles, PDFs, and SVG icons. Create content for clients, monetized YouTube videos, podcasts, advertisements, client projects, and business materials. The BASIC free plan is for personal, non-commercial use only. Commercial users save $200+ monthly vs buying separate subscriptions for voice, design, PDF, and icon tools."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to download software to use Scenith?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No downloads required! Scenith is a 100% web-based platform that runs directly in your browser. Works on any device - Windows, Mac, Linux, Chromebooks, tablets, smartphones. Just sign in at scenith.in and start creating immediately. Your projects auto-save to the cloud, accessible anywhere with internet. This saves 2-3GB disk space compared to desktop alternatives like Adobe Creative Suite, Audacity, GIMP, or PDF editors."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats can I export from Scenith?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith supports all professional formats: AI Voices export as MP3 (web/podcast quality) or WAV (studio quality). Images export as JPG, PNG, WebP, or SVG. Subtitles export as SRT, VTT, or hardcoded video. PDFs export as PDF (obviously), images from PDFs as JPG/PNG. Media conversion supports 20+ formats including MP4, AVI, MOV, MP3, WAV, FLAC. SVG icons download as SVG (vector), PNG (raster), or JPG. All exports maintain professional quality suitable for YouTube, Instagram, TikTok, websites, presentations, and print."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is Scenith's AI subtitle generator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith's AI transcription achieves 92-96% accuracy for clear audio in supported languages (English, Spanish, French, German, Hindi, Mandarin, Portuguese, Japanese, Italian, Russian, Korean, Dutch). Accuracy improves with: (1) Good audio quality (no background noise), (2) Clear speech at normal pace, (3) Standard accents, (4) Proper microphone use. You can easily edit any transcript before adding to video. Customize font styles, colors, positions, animations, and timing. Generates subtitles 10x faster than manual typing (5 minutes vs 50 minutes for a 10-minute video)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use multiple Scenith tools together in one project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! That's Scenith's biggest advantage - unified workflow. Example workflow: (1) Generate AI voiceover for video narration, (2) Create thumbnail in Image Editor with SVG icons, (3) Add auto-subtitles to video using Subtitle Generator, (4) Compress final video with Media Compression, (5) Create PDF presentation combining images. Everything integrates seamlessly. Save 3-4 hours per project vs switching between separate tools (Adobe Audition for voice, Photoshop for images, Premiere for subtitles, Acrobat for PDFs). One login, one interface, unlimited creativity."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Scenith's AI voices better than competitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith offers 40+ ultra-realistic neural voices vs competitors' 10-20 voices. Key advantages: (1) Natural intonation, pauses, and emotion - sounds completely human, (2) 20+ languages with native accents (not just English), (3) Adjustable speed (0.5x-2x) and pitch without robotic artifacts, (4) Emotion presets (happy, calm, professional, enthusiastic), (5) No watermarks on free plan (competitors add branding), (6) Commercial use on paid plans (others restrict), (7) 3,500 free characters monthly (competitors: 1,000 or less), (8) MP3 and WAV export (studio quality). Voices powered by same technology as Amazon Polly and Google Cloud TTS but free."
          }
        },
        {
          "@type": "Question",
          "name": "How does the PDF Tools Suite work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith's PDF Tools include 9 professional operations: (1) Merge PDFs - combine multiple files, reorder pages, (2) Split PDF - extract page ranges or individual pages, (3) Compress PDF - reduce file size by 30-80% with smart compression, (4) Rotate PDF - fix orientation (90°, 180°, 270°), (5) Images to PDF - convert JPG, PNG to multi-page PDF, (6) PDF to Images - extract pages as high-quality JPG/PNG, (7) Add Watermark - text or image watermarks with positioning, (8) Lock PDF - password protect with encryption, (9) Unlock PDF - remove passwords if you own the file. All processing happens instantly (2-5 seconds), maintains quality, and includes unlimited free use with no file size limits."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://scenith.in/#howto-content-creation",
      "name": "How to Create Professional Content with Scenith AI Tools",
      "description": "Complete workflow for content creators using Scenith's integrated platform",
      "totalTime": "PT15M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Plan Your Content",
          "text": "Determine what you need: video narration, social media graphics, subtitles, or documents. Scenith's all-in-one platform handles all content types from a single dashboard.",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Generate AI Voiceover",
          "text": "Use AI Voice Generator to create narration. Choose from 40+ natural voices, enter your script, select language and emotion preset. Download as MP3 or WAV in seconds.",
          "position": 2,
          "url": "https://scenith.in/tools/ai-voice-generation"
        },
        {
          "@type": "HowToStep",
          "name": "Design Visual Assets",
          "text": "Create thumbnails, social media posts, or graphics in Image Editor. Add text, filters, stickers, and SVG icons. Export as JPG, PNG, or WebP for any platform.",
          "position": 3,
          "url": "https://scenith.in/tools/image-editing"
        },
        {
          "@type": "HowToStep",
          "name": "Add Subtitles to Video",
          "text": "Upload your video to AI Subtitle Generator. Auto-transcribe audio to text in 90+ languages. Customize style, position, and animations. Export with hardcoded captions or SRT file.",
          "position": 4,
          "url": "https://scenith.in/tools/add-subtitles-to-videos"
        },
        {
          "@type": "HowToStep",
          "name": "Optimize and Export",
          "text": "Compress media files to reduce upload times. Convert formats for platform compatibility. Create PDF documentation if needed. All tools maintain professional quality while optimizing file sizes.",
          "position": 5
        }
      ]
    }
  ]
};

// Pricing Popup Component
function PricingPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(8, 6, 24, 0.80)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'scPopFadeOverlay 0.3s ease forwards',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Scenith Special Offer"
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #0f0c29 0%, #1e1a45 60%, #0d0b22 100%)',
          borderRadius: '24px',
          padding: '36px 32px 28px',
          maxWidth: '460px',
          width: '100%',
          position: 'relative',
          border: '1px solid rgba(102, 126, 234, 0.28)',
          boxShadow: '0 0 0 1px rgba(118,75,162,0.12), 0 32px 80px rgba(0,0,0,0.65), 0 0 60px rgba(102,126,234,0.10)',
          animation: 'scPopSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '160px', height: '160px',
          background: 'radial-gradient(circle, rgba(118,75,162,0.2) 0%, transparent 70%)',
          pointerEvents: 'none', borderRadius: '50%',
        }} />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: '30px', height: '30px',
            color: 'rgba(255,255,255,0.5)', fontSize: '16px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', lineHeight: 1,
          }}
          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)'; }}
        >×</button>

        {/* Urgency pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)',
          borderRadius: '100px', padding: '4px 12px', marginBottom: '16px',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%', background: '#ff6b6b',
            display: 'inline-block', boxShadow: '0 0 5px #ff6b6b',
            animation: 'scPopPulse 1.8s infinite',
          }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#ff8a8a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            🚀 Claim  — 25% OFF
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', fontWeight: 900, color: 'white',
          margin: '0 0 8px', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          One Platform.{' '}
          <span style={{
            background: 'linear-gradient(90deg, #667eea, #a78bfa, #f093fb)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            9 AI Tools.
          </span>
        </h2>

        {/* Sub-copy */}
        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: '0 0 6px', lineHeight: 1.6,
        }}>
          All-in-one alternative to expensive tools{' '}
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>₹349/mo</span>
          {' '}·{' '}
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>$9/mo</span>
        </p>

        {/* Emotional Line */}
        <p style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: '0.82rem',
          margin: '0 0 22px',
          fontWeight: 600,
          letterSpacing: '0.01em'
        }}>
          Build faster. Create smarter. Ship more content.
        </p>


        {/* Value pills */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '22px',
        }}>
          {[
            { icon: '🎙️', text: '60K Characters/mo' },
            { icon: '🖼️', text: '400 AI Images/mo' },
            { icon: '⚡', text: '45 Speed Videos/mo' },
            { icon: '✨', text: '40+ Premium Voices' },
          ].map((item) => (
            <div key={item.text} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              background: 'rgba(102,126,234,0.08)', border: '1px solid rgba(102,126,234,0.15)',
              borderRadius: '10px', padding: '8px 10px',
            }}>
              <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontWeight: 600 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        
         <a href="/pricing"
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            width: '100%', padding: '13px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white', borderRadius: '12px',
            fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(102,126,234,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            letterSpacing: '-0.01em',
          }}
          onMouseOver={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1.03)'; el.style.boxShadow = '0 8px 32px rgba(102,126,234,0.55)'; }}
          onMouseOut={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1)'; el.style.boxShadow = '0 4px 24px rgba(102,126,234,0.4)'; }}
        >
          🚀 Claim 25% OFF — View Plans
        </a>
        <style>{`
          @keyframes scPopFadeOverlay { from { opacity:0; } to { opacity:1; } }
          @keyframes scPopSlideUp { from { opacity:0; transform:translateY(40px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
          @keyframes scPopPulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(1.35); } }
        `}</style>
      </div>
    </div>
  );
}


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
    id: 'pdf-tools',
    title: 'PDF Tools Suite',
    icon: FaFilePdf,
    description: 'Merge, split, compress, convert PDFs. 9 professional tools in one place.',
    link: '/tools/pdf-tools',
    color: '#E74C3C',
    badge: null,
    rank: 3 
  },  
  {
    id: 'ai-subtitle',
    title: 'AI Subtitle Generator',
    icon: FaClosedCaptioning,
    description: 'Auto-generate accurate subtitles with AI transcription technology.',
    link: '/tools/add-subtitles-to-videos',
    color: '#0b8a82',
    badge: 'Trending',
    rank: 5
  },
  {
    id: 'speed-modifier',
    title: 'Video Speed Modifier',
    icon: FaTachometerAlt,
    description: 'Speed up or slow down videos with precision control.',
    link: '/tools/video-speed-modifier',
    color: '#62caf7',
    badge: null,
    rank: 6
  },
  {
    id: 'bg-remover',
    title: 'Background Remover',
    icon: FaEraser,
    description: 'Remove image backgrounds in seconds with AI precision.',
    link: '/tools/background-removal',
    color: '#FFEAA7',
    badge: null,
    rank: 7
  },
  {
    id: 'media-compression',
    title: 'Media Compression',
    icon: FaCompressArrowsAlt,
    description: 'Reduce file size up to 80% without quality loss.',
    link: '/tools/compress-media',
    color: '#96CEB4',
    badge: null,
    rank: 8
  },
  {
    id: 'media-conversion',
    title: 'Media Conversion',
    icon: FaExchangeAlt,
    description: 'Convert between 20+ media formats instantly.',
    link: '/tools/media-conversion-tool',
    color: '#45B7D1',
    badge: null,
    rank: 9
  },
  {
    id: 'svg-library',
    title: 'SVG Library',
    icon: FaShapes,
    description: 'Download premium SVG icons and graphics.',
    link: '/svg-library',
    color: '#E17055',
    badge: 'New',
    rank: 4
  }
];

const youtubeTutorials = [
  { id: 'Yw549sO7RgE', title: 'AI Voice Generator Tutorial' },
  { id: 'XNFJjzScSHU', title: 'Image Editor Quick Start' },
  { id: 'qoQSktfHvZ8', title: 'AI Subtitles Made Easy' },
];

export default function LandingPageClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPricingPopup, setShowPricingPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricingPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />      

      {showPricingPopup && <PricingPopup onClose={() => setShowPricingPopup(false)} />}
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

        {/* Featured Snippet Optimization */}
        <section className="quick-definition-section" style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
          <div className="featured-snippet-box" style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '24px', border: '2px solid rgba(102, 126, 234, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a202c', marginBottom: '20px', fontWeight: 700 }}>
              What is Scenith? The Complete AI Content Creation Platform
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
              <strong>Scenith is a free, all-in-one AI-powered content creation platform</strong> that combines 9 professional tools in one browser-based interface. Unlike competitors requiring multiple subscriptions, Scenith provides everything content creators need: AI Voice Generation (40+ realistic voices in 20+ languages), Professional Image Editor, AI Subtitle Generator, Background Remover, Video Speed Modifier, Media Compression & Conversion, PDF Tools Suite (merge, split, compress), and 10,000+ Premium SVG Icons—all accessible without downloads.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '30px' }}>
              <div style={{ padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px', borderLeft: '4px solid #667eea' }}>
                <strong style={{ color: '#667eea', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>COST</strong>
                <span style={{ fontSize: '1.05rem', color: '#1a202c' }}>Free forever plan + paid tiers</span>
              </div>
              <div style={{ padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px', borderLeft: '4px solid #764ba2' }}>
                <strong style={{ color: '#764ba2', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>TOOLS</strong>
                <span style={{ fontSize: '1.05rem', color: '#1a202c' }}>9 AI-powered applications</span>
              </div>
              <div style={{ padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px', borderLeft: '4px solid #f093fb' }}>
                <strong style={{ color: '#f093fb', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>PLATFORM</strong>
                <span style={{ fontSize: '1.05rem', color: '#1a202c' }}>100% browser-based (no downloads)</span>
              </div>
              <div style={{ padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px', borderLeft: '4px solid #48bb78' }}>
                <strong style={{ color: '#48bb78', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>WATERMARKS</strong>
                <span style={{ fontSize: '1.05rem', color: '#1a202c' }}>Zero, even on free plan</span>
              </div>
            </div>
          </div>
        </section>

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
            <h2>9 Professional AI Tools in One Platform</h2>
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

        {/* How Content Creators Use Scenith - Workflow Guide */}
        <section className="workflow-guide-section" style={{ maxWidth: '1200px', margin: '100px auto', padding: '0 20px' }}>
          <div className="section-header">
            <span className="section-label">Complete Workflow</span>
            <h2>How Content Creators Use Scenith: Step-by-Step</h2>
            <p className="section-subtitle">
              From script to published content in 15 minutes using Scenith's integrated platform
            </p>
          </div>

          <div style={{ display: 'grid', gap: '30px', marginTop: '60px' }}>
            {[
              {
                step: 1,
                title: "Write Your Script & Generate AI Voice",
                description: "Start with your content idea. Write your script in our AI Voice Generator, choose from 40+ natural voices, select your language and emotion preset. Generate studio-quality voiceover in 3 seconds. Export as MP3 for immediate use in videos, podcasts, or presentations.",
                tools: ["AI Voice Generator"],
                time: "3 minutes",
                link: "/tools/ai-voice-generation"
              },
              {
                step: 2,
                title: "Design Thumbnails & Graphics",
                description: "Create eye-catching visuals in our Image Editor. Design YouTube thumbnails, social media posts, or presentation slides. Add text overlays, apply filters, insert stickers, and browse our 10,000+ SVG icon library. Export optimized for Instagram, Facebook, YouTube, or print.",
                tools: ["Image Editor", "SVG Library", "Background Remover"],
                time: "5 minutes",
                link: "/tools/image-editing"
              },
              {
                step: 3,
                title: "Add Subtitles to Your Video",
                description: "Upload your video to AI Subtitle Generator. Our AI automatically transcribes audio with 92-96% accuracy across 20+ languages. Customize subtitle style—font, color, position, animations. Export with hardcoded captions or download SRT file for YouTube, TikTok, Instagram.",
                tools: ["AI Subtitle Generator"],
                time: "4 minutes",
                link: "/tools/add-subtitles-to-videos"
              },
              {
                step: 4,
                title: "Optimize & Publish",
                description: "Compress media files to meet platform requirements (25MB for email, fast YouTube uploads). Convert formats for compatibility. Create PDF documentation or marketing materials using our PDF suite. Adjust video speed if needed. Download everything ready for publishing.",
                tools: ["Media Compression", "Video Speed Modifier", "PDF Tools"],
                time: "3 minutes",
                link: "/tools/compress-media"
              }
            ].map((workflow, index) => (
              <div 
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '30px',
                  padding: '40px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '2px solid rgba(102, 126, 234, 0.2)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: 'white',
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                  flexShrink: 0
                }}>
                  {workflow.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1a202c', marginBottom: '12px', lineHeight: '1.3' }}>
                    {workflow.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                    {workflow.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                    {workflow.tools.map((tool, toolIdx) => (
                      <span key={toolIdx} style={{
                        padding: '6px 14px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#667eea',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        {tool}
                      </span>
                    ))}
                    <span style={{
                      padding: '6px 14px',
                      background: 'rgba(72, 187, 120, 0.1)',
                      color: '#48bb78',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      ⏱️ {workflow.time}
                    </span>
                  </div>
                  <a 
                    href={workflow.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: 'transparent',
                      color: '#667eea',
                      border: '2px solid #667eea',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    Try This Tool →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            borderRadius: '20px',
            border: '2px solid rgba(102, 126, 234, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a202c', marginBottom: '16px' }}>
              Total Time: 15 Minutes | Total Cost: $0 (Free Plan)
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 30px' }}>
              Compare to traditional workflow: Adobe Audition ($20.99/mo) + Photoshop ($20.99/mo) + Premiere Pro ($20.99/mo) + Acrobat Pro ($19.99/mo) = <strong style={{ color: '#dc2626' }}>$82.96/month</strong>. Scenith does it all for <strong style={{ color: '#48bb78' }}>FREE</strong> (or $19-49/mo for commercial use).
            </p>
            <Link href="/pricing" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '16px',
              fontSize: '1.05rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s'
            }}>
              See All Plans & Pricing
            </Link>
          </div>
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
              <div className="stat-value">10k+</div>
              <div className="stat-label">Active Creators</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">2000+</div>
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

        {/* Scenith vs Competitors - Comprehensive Comparison */}
        <section className="detailed-comparison-section" style={{ maxWidth: '1400px', margin: '100px auto', padding: '80px 20px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '2px solid rgba(102, 126, 234, 0.2)', boxShadow: '0 12px 48px rgba(0,0,0,0.1)' }}>
          <div className="section-header">
            <span className="section-label">Direct Comparison</span>
            <h2>Scenith vs Leading Content Creation Platforms</h2>
            <p className="section-subtitle">
              See why 10,000+ creators switched to Scenith's all-in-one platform
            </p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: '50px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <th style={{ padding: '20px', textAlign: 'left', color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>Feature</th>
                  <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '1.05rem', background: 'rgba(255,255,255,0.1)' }}>Scenith</th>
                  <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>Adobe Creative Cloud</th>
                  <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>Canva Pro + ElevenLabs</th>
                  <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '1.05rem' }}>Individual Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Monthly Cost",
                    scenith: "$0-49",
                    adobe: "$54.99",
                    canva: "$35.98",
                    individual: "$80+"
                  },
                  {
                    feature: "AI Voice Generator",
                    scenith: "✅ 40+ voices, 20+ languages",
                    adobe: "❌ Not included",
                    canva: "✅ 10 voices (ElevenLabs)",
                    individual: "❌ Separate subscription"
                  },
                  {
                    feature: "Image Editor",
                    scenith: "✅ Full-featured",
                    adobe: "✅ Photoshop",
                    canva: "✅ Limited on Pro",
                    individual: "❌ Photoshop needed ($20.99)"
                  },
                  {
                    feature: "Subtitle Generator",
                    scenith: "✅ AI-powered, 90+ languages",
                    adobe: "⚠️ Premiere Pro (manual)",
                    canva: "❌ Not included",
                    individual: "❌ Separate tool needed"
                  },
                  {
                    feature: "PDF Tools Suite",
                    scenith: "✅ 9 operations included",
                    adobe: "✅ Acrobat Pro ($19.99 extra)",
                    canva: "❌ Not included",
                    individual: "❌ Acrobat or Smallpdf ($12)"
                  },
                  {
                    feature: "SVG Icon Library",
                    scenith: "✅ 10,000+ premium icons",
                    adobe: "⚠️ Stock library (limited)",
                    canva: "⚠️ Elements library",
                    individual: "❌ Separate subscription ($16)"
                  },
                  {
                    feature: "Background Remover",
                    scenith: "✅ AI-powered",
                    adobe: "✅ Photoshop (manual)",
                    canva: "✅ Included",
                    individual: "❌ Remove.bg ($9)"
                  },
                  {
                    feature: "Media Compression",
                    scenith: "✅ Video, audio, image",
                    adobe: "⚠️ Media Encoder",
                    canva: "❌ Not included",
                    individual: "❌ HandBrake or paid ($10)"
                  },
                  {
                    feature: "Browser-Based (No Download)",
                    scenith: "✅ 100% online",
                    adobe: "❌ 3GB+ installation",
                    canva: "✅ Browser-based",
                    individual: "⚠️ Mixed"
                  },
                  {
                    feature: "Watermarks on Free Plan",
                    scenith: "✅ Zero watermarks",
                    adobe: "N/A (No free plan)",
                    canva: "❌ Canva watermark",
                    individual: "❌ Most add watermarks"
                  },
                  {
                    feature: "Commercial Usage Rights",
                    scenith: "✅ CREATOR plan ($19)",
                    adobe: "✅ Included",
                    canva: "✅ Pro required ($12.99)",
                    individual: "⚠️ Varies by tool"
                  },
                  {
                    feature: "Learning Curve",
                    scenith: "⭐ Easy (5 min)",
                    adobe: "⭐⭐⭐⭐⭐ Steep (weeks)",
                    canva: "⭐⭐ Moderate (hours)",
                    individual: "⭐⭐⭐⭐ High (varies)"
                  }
                ].map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '18px', fontWeight: 600, color: '#1a202c', fontSize: '0.95rem' }}>{row.feature}</td>
                    <td style={{ padding: '18px', textAlign: 'center', background: 'rgba(102, 126, 234, 0.05)', color: '#1a202c', fontSize: '0.9rem', fontWeight: 500 }}>{row.scenith}</td>
                    <td style={{ padding: '18px', textAlign: 'center', color: '#4a5568', fontSize: '0.9rem' }}>{row.adobe}</td>
                    <td style={{ padding: '18px', textAlign: 'center', color: '#4a5568', fontSize: '0.9rem' }}>{row.canva}</td>
                    <td style={{ padding: '18px', textAlign: 'center', color: '#4a5568', fontSize: '0.9rem' }}>{row.individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
              
          <div style={{ marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, rgba(72, 187, 120, 0.1), rgba(56, 178, 172, 0.1))', borderRadius: '16px', border: '2px solid rgba(72, 187, 120, 0.3)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a202c', marginBottom: '12px' }}>
              💡 Verdict: Scenith Saves $600-900 Annually
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              Adobe Creative Cloud ($660/year) + ElevenLabs ($264/year) + Acrobat Pro ($240/year) + Icon subscription ($192/year) = <strong style={{ color: '#dc2626' }}>$1,356/year</strong><br />
              <strong style={{ color: '#48bb78' }}>Scenith STUDIO: $588/year</strong> (56% savings) with more features!
            </p>
          </div>
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

        {/* Use Cases by Industry - Target Different Personas */}
        <section className="industry-use-cases-section" style={{ maxWidth: '1400px', margin: '100px auto', padding: '0 20px' }}>
          <div className="section-header">
            <span className="section-label">Real-World Applications</span>
            <h2>How Different Industries Use Scenith</h2>
            <p className="section-subtitle">
              From YouTubers to enterprises—Scenith powers content creation worldwide
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {[
              {
                industry: "YouTubers & Content Creators",
                icon: "🎬",
                challenge: "Need professional voiceovers, thumbnails, subtitles—but can't afford Adobe suite",
                solution: "Use AI Voice for narration, Image Editor for thumbnails, Subtitle Generator for captions. Create 10 videos weekly vs 2-3 with traditional tools.",
                results: "80% faster production • $700/mo saved • 3x more uploads",
                cta: "Start Creating Videos",
                link: "/tools/ai-voice-generation"
              },
              {
                industry: "Podcast Producers",
                icon: "🎙️",
                challenge: "Recording intros/outros with guests is scheduling nightmare. Need consistent quality.",
                solution: "Generate AI voice intros/outros once, reuse forever. Add guest intro segments instantly. Compress audio for faster uploads to Spotify/Apple.",
                results: "Save 5 hours/episode • Professional consistency • Zero re-recording costs",
                cta: "Try AI Voice for Podcasts",
                link: "/tools/ai-voice-generation"
              },
              {
                industry: "Marketing Agencies",
                icon: "📊",
                challenge: "Clients need videos, graphics, PDFs, all with tight deadlines. Juggling 5+ subscriptions.",
                solution: "One platform for client deliverables: voiceovers, social graphics, branded PDFs, compressed videos. Share Scenith link with clients for self-service edits.",
                results: "$1,200/mo subscription savings • 40% faster turnaround • Happier clients",
                cta: "See Agency Pricing",
                link: "/pricing"
              },
              {
                industry: "E-Learning Platforms",
                icon: "👨‍🏫",
                challenge: "Need multilingual course narration but hiring voice actors for 20 languages = $50K+",
                solution: "Generate course narration in 20+ languages using same script. Update courses instantly when content changes. Add subtitles for accessibility compliance.",
                results: "97% cost reduction on voice talent • 10x faster localization • WCAG compliant",
                cta: "Explore Education Use",
                link: "/tools/add-subtitles-to-videos"
              },
              {
                industry: "Small Businesses",
                icon: "🏪",
                challenge: "Need professional marketing materials but hiring designers/studios costs $2,000-5,000 per project",
                solution: "Create social media posts, product videos with voiceovers, PDF catalogs, email graphics—all in-house with zero design experience.",
                results: "$10K+ saved annually • Brand consistency • Marketing independence",
                cta: "Start Your Business Growth",
                link: "/tools/image-editing"
              },
              {
                industry: "Freelance Creators",
                icon: "💼",
                challenge: "Can't justify expensive subscriptions with inconsistent income. Need professional tools for client work.",
                solution: "Pay-as-you-grow model. Free plan for side projects, upgrade to CREATOR ($19) when landing bigger clients.",
                results: "ROI from first paid client • Professional output • Flexible budget",
                cta: "Start Freelancing Tools",
                link: "/pricing"
              }
            ].map((useCase, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '2px solid rgba(102, 126, 234, 0.2)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{useCase.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a202c', marginBottom: '20px' }}>
                  {useCase.industry}
                </h3>
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ color: '#dc2626', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>❌ CHALLENGE:</strong>
                  <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.6', marginBottom: '16px' }}>
                    {useCase.challenge}
                  </p>
                  <strong style={{ color: '#667eea', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>✅ SCENITH SOLUTION:</strong>
                  <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.6', marginBottom: '16px' }}>
                    {useCase.solution}
                  </p>
                  <strong style={{ color: '#48bb78', fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>📈 RESULTS:</strong>
                  <p style={{ fontSize: '0.95rem', color: '#1a202c', lineHeight: '1.6', fontWeight: 600 }}>
                    {useCase.results}
                  </p>
                </div>

                <a href={useCase.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: 'transparent',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  {useCase.cta} →
                </a>
              </div>
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

        {/* People Also Ask - Targeting Question Queries */}
        <section className="people-also-ask-section" style={{ maxWidth: '1000px', margin: '100px auto', padding: '0 20px' }}>
          <div className="section-header">
            <h2>People Also Ask About Scenith</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our AI content creation platform
            </p>
          </div>
                  
          <div style={{ display: 'grid', gap: '20px', marginTop: '50px' }}>
            {[
              {
                q: "What's the difference between Scenith and Adobe Creative Cloud?",
                a: "Adobe Creative Cloud is desktop software requiring installation (3GB+) and costs $54.99/month. Scenith is 100% browser-based, works on any device, includes AI voice generation Adobe lacks, and starts free ($0-49/month vs Adobe's $660/year). Adobe is powerful but overkill for most creators. Scenith focuses on speed and simplicity without sacrificing professional quality."
              },
              {
                q: "Can Scenith replace Canva?",
                a: "Yes, for most use cases. Scenith's Image Editor handles social media graphics, thumbnails, presentations, and marketing materials like Canva. Key advantages: (1) No Canva watermark on free plan, (2) Integrated AI voice and subtitles Canva lacks, (3) 10,000+ SVG icons included vs Canva's limited free library, (4) PDF tools built-in. Canva has more templates (5M+) but Scenith offers better all-in-one workflow for video creators."
              },
              {
                q: "How does Scenith's AI voice compare to ElevenLabs?",
                a: "Scenith offers 40+ voices across 20+ languages vs ElevenLabs' 50+ voices. Quality is comparable—both use neural text-to-speech. Key differences: (1) Scenith includes image editing, subtitles, PDF tools (ElevenLabs is voice-only), (2) Scenith free plan: 3,500 chars/month vs ElevenLabs: 10,000 but requires account, (3) Scenith CREATOR: $19 vs ElevenLabs Starter: $22, (4) Scenith has no watermarks, ElevenLabs requires attribution on free. Choose ElevenLabs for voice cloning; choose Scenith for complete content workflow."
              },
              {
                q: "Is Scenith good for professional use or just beginners?",
                a: "Both! Beginners love the simple interface and free plan (zero learning curve). Professionals appreciate the time savings and cost efficiency. Over 3,000 marketing agencies, YouTube channels with 100K+ subs, and e-learning platforms use Scenith for client deliverables. The STUDIO plan includes priority support and advanced features professionals need. Key metric: 78% of paid users are professionals/businesses, not hobbyists."
              },
              {
                q: "Can I cancel Scenith anytime or am I locked in?",
                a: "Cancel anytime—zero contracts or commitments. Your subscription ends at the current billing period (no refunds for unused time, but you keep access until period ends). Downgrade to free BASIC plan anytime if you just need occasional use. Unlike Adobe's difficult cancellation, Scenith makes it one-click in your account settings. We want happy users, not trapped subscribers."
              },
              {
                q: "Does Scenith work on mobile phones and tablets?",
                a: "Yes! Scenith is fully responsive and works on iOS/Android phones, iPads, Android tablets, and Chromebooks. All tools are touch-optimized. Some features work better on larger screens (Image Editor, Subtitle timing), but voice generation and basic editing work great on mobile. Many users generate voice on phone, then edit on desktop. Cloud sync means your work is accessible everywhere."
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  padding: '30px',
                  borderRadius: '20px',
                  border: '2px solid rgba(102, 126, 234, 0.2)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#667eea', marginBottom: '16px', lineHeight: '1.4' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.8', margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
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