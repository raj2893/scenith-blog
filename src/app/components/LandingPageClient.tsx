"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
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
        "AI Image Generator (text-to-image)",
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
            "text": "Scenith is a free AI-powered content creation platform offering 10 professional tools: (1) AI Voice Generator with 40+ natural voices in 20+ languages, (2) Professional Image Editor for social media graphics, (3) AI Image Generator for amazing visuals, (4) Background Remover using AI precision, (5) Video Speed Modifier, (6) Media Compression, (7) Media Format Conversion, (8) PDF Tools Suite (merge, split, compress, convert), and (9) 10,000+ Premium SVG Icons Library. All tools are browser-based with no downloads required and include a free forever plan with zero watermarks."
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
            "text": "Scenith combines 10 professional tools in one platform vs competitors offering single-purpose tools. Unlike Adobe Creative Cloud ($54.99/month), Canva Pro ($12.99/month for limited features), or ElevenLabs ($22/month voice only), Scenith offers comprehensive creation tools starting free. Key advantages: (1) No watermarks on free plan, (2) Browser-based - works on any device, (3) All tools integrated seamlessly, (4) 40+ AI voices vs competitors' 10-20, (5) PDF tools included free vs $239/year for Adobe Acrobat, (6) 10,000+ SVG icons vs $16/month for separate icon subscriptions."
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
          "name": "Optimize and Export",
          "text": "Compress media files to reduce upload times. Convert formats for platform compatibility. Create PDF documentation if needed. All tools maintain professional quality while optimizing file sizes.",
          "position": 4
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

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="sc-close-btn"
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(102,126,234,0.15)',
            borderRadius: '50%', width: '30px', height: '30px',
            color: 'rgba(255,255,255,0.5)', fontSize: '16px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', lineHeight: 1,
          }}
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
            10 AI Tools.
          </span>
        </h2>

        {/* Sub-copy */}
        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: '0 0 6px', lineHeight: 1.6,
        }}>
          All-in-one alternative to expensive tools{' '}
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
          className="sc-cta-link"
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
        >
          🚀 Claim 25% OFF — View Plans
        </a>
        <style>{`
          @keyframes scPopFadeOverlay { from { opacity:0; } to { opacity:1; } }
          @keyframes scPopSlideUp { from { opacity:0; transform:translateY(40px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
          @keyframes scPopPulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(1.35); } }
          .sc-close-btn:hover { background: rgba(255,255,255,0.14) !important; color: white !important; }
          .sc-cta-link { transition: transform 0.2s, box-shadow 0.2s; }
          .sc-cta-link:hover { transform: scale(1.03) !important; box-shadow: 0 8px 32px rgba(102,126,234,0.55) !important; }
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
    id: 'ai-video',
    title: 'AI Video Generator',
    icon: FaPlay,  // or import FaFilm from 'react-icons/fa'
    description: 'Generate cinematic videos from text or images. Powered by Kling, Veo 3.1, and Wan 2.5.',
    link: '/create-ai-content',
    color: '#f06cbe',
    badge: 'New',
    rank: 2   // right after AI Image
  },  
  {
    id: 'ai-voice',
    title: 'AI Voice Generator',
    icon: FaMicrophone,
    description: '40+ natural voices in 20+ languages. Transform text to lifelike speech instantly.',
    link: '/create-ai-content',
    color: '#FF6B6B',
    badge: '#1 Voice Tool',
    rank: 3
  },
  {
    id: 'ai-image',
    title: 'AI Image Generator',
    icon: FaPlay,
    description: 'Generate stunning images from text descriptions using advanced AI instantly.',
    link: '/create-ai-content',
    color: '#9B59B6',
    badge: '🔥 Most Popular',
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
    rank: 4
  },
  {
    id: 'svg-library',
    title: 'SVG Library',
    icon: FaShapes,
    description: 'Download premium SVG icons and graphics.',
    link: '/svg-library',
    color: '#E17055',
    badge: 'New',
    rank: 5
  },  
  {
    id: 'pdf-tools',
    title: 'PDF Tools Suite',
    icon: FaFilePdf,
    description: 'Merge, split, compress, convert PDFs. 9 professional tools in one place.',
    link: '/tools/pdf-tools',
    color: '#E74C3C',
    badge: null,
    rank: 6
  },
  {
    id: 'speed-modifier',
    title: 'Video Speed Modifier',
    icon: FaTachometerAlt,
    description: 'Speed up or slow down videos with precision control.',
    link: '/tools/video-speed-modifier',
    color: '#62caf7',
    badge: null,
    rank: 7
  },
  {
    id: 'bg-remover',
    title: 'Background Remover',
    icon: FaEraser,
    description: 'Remove image backgrounds in seconds with AI precision.',
    link: '/tools/background-removal',
    color: '#FFEAA7',
    badge: null,
    rank: 8
  },
  {
    id: 'media-compression',
    title: 'Media Compression',
    icon: FaCompressArrowsAlt,
    description: 'Reduce file size up to 80% without quality loss.',
    link: '/tools/compress-media',
    color: '#96CEB4',
    badge: null,
    rank: 9
  },
  {
    id: 'media-conversion',
    title: 'Media Conversion',
    icon: FaExchangeAlt,
    description: 'Convert between 20+ media formats instantly.',
    link: '/tools/media-conversion-tool',
    color: '#45B7D1',
    badge: null,
    rank: 10
  }
];

const youtubeTutorials = [
  { id: 'dEeT7Z_b3bY', title: 'AI Voice Generator Tutorial' },
  { id: 'oA6CDPqrjx0', title: 'AI Background Removal' },
  { id: 'DyCA5u0iWeo', title: 'AI Subtitles Made Easy' },
];

function YoutubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  
  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  
  return (
    <div
      onClick={() => setLoaded(true)}
      style={{
        position: 'relative', width: '100%', paddingBottom: '56.25%',
        background: '#000', cursor: 'pointer', borderRadius: 8,
      }}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', borderRadius: 8,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: 'rgba(255,0,0,0.9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: '12px solid transparent',
            borderBottom: '12px solid transparent',
            borderLeft: '20px solid white',
            marginLeft: 4,
          }} />
        </div>
      </div>
    </div>
  );
}

export default function LandingPageClient() {
const [isIndianUser, setIsIndianUser] = useState<boolean | null>(null);

  const pricingPlans = useMemo(() => [
    {
      name: 'Creator Lite',
      price: isIndianUser === true ? '₹799' : '$9',
      credits: '1,000 credits / mo',
      cta: 'Get Lite →',
      ctaLink: '/pricing',
      highlight: false,
      perks: ['~66 AI images', 'Voice generation', 'All PDF tools', 'No watermarks'],
      color: '#667eea'
    },
    {
      name: 'Creator Spark',
      price: isIndianUser === true ? '₹1749' : '$19',
      credits: '2000 credits / mo',
      cta: 'Get Spark →',
      ctaLink: '/pricing',
      highlight: true,
      perks: ['~450 AI images', '~14 Kling 5s videos', '150K voice chars', 'Priority support'],
      color: '#a899f5'
    },
    {
      name: 'Creator Odyssey',
      price: isIndianUser ? '₹3599' : '$39',
      credits: '2,500 credits / mo',
      cta: 'Get Odyssey →',
      ctaLink: '/pricing',
      highlight: false,
      perks: ['~1,250 AI images', '~39 Kling 5s videos', '400K voice chars', '4K export'],
      color: '#f59e0b'
    },
  ], [isIndianUser]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIsIndianUser(data.country_code === 'IN');
      } catch {
        setIsIndianUser(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const setup = () => {
      const els = document.querySelectorAll('.animate-fade-up-scroll');
      if (!els.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('in-view');
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach(el => observer.observe(el));
    };

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(setup, { timeout: 2000 });
      return () => (window as any).cancelIdleCallback(id);
    } else {
      const t = setTimeout(setup, 200);
      return () => clearTimeout(t);
    }
  }, []);    

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />      

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
          <div className="hero-content animate-fade-up">
            <div className="hero-badge">
              <FaStar className="star-icon" />
              <span>Free credits every month — no card needed</span>
            </div>

            <h1>
              Create AI Images, Videos<br />
              & Voice in <span className="gradient-text">Seconds</span>
            </h1>

            <p className="hero-subtitle">
              One platform. One credit balance. Unlimited creative tools.{' '}
              <strong>Start free — no daily limits, no watermarks.</strong>
            </p>

            <div className="hero-features-grid">
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>AI Image Generation</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>AI Video Generation</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>40+ AI Voices</span>
              </div>
              <div className="hero-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Free Credits Monthly</span>
              </div>
            </div>

            <div className="hero-cta-wrapper">
              <Link href="/create-ai-content" className="cta-button cta-primary">
                🎥 Generate Free — No Card Needed
              </Link>
              <Link href="/pricing" className="cta-button cta-secondary">
                💵 See all Plans
              </Link>
            </div>

            <p className="hero-no-credit">
              50 free credits every month · Use on any tool
            </p>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section style={{
          maxWidth: '900px', margin: '0 auto 100px', padding: '0 20px', textAlign: 'center'
        }}>
          <span style={{
            display: 'inline-block', padding: '5px 16px', borderRadius: '100px',
            background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)',
            fontSize: '0.8rem', fontWeight: 700, color: '#ff6b6b',
            letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px'
          }}>
            Sound Familiar?
          </span>
        
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900,
            color: '#1a202c', letterSpacing: '-0.02em', marginBottom: '20px'
          }}>
            You're Talented. But the Algorithm<br />
            Doesn't Know You Exist.
          </h2>
        
          <p style={{ fontSize: '1.15rem', color: '#4a5568', marginBottom: '50px', lineHeight: 1.8 }}>
            You spend hours staring at a blank screen. You post something decent,
            get 200 views, and wonder why faceless accounts with no personality
            have 100k followers. The problem isn't your content — it's your system.
          </p>
        
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { emoji: '😩', pain: 'No Ideas', detail: 'Spending 2 hours thinking of what to post today' },
              { emoji: '📉', pain: 'Inconsistency', detail: 'Posting 3x one week, then ghosting for 2 weeks' },
              { emoji: '🪝', pain: 'Weak Hooks', detail: 'People scroll past in 0.3 seconds — you never grab them' },
              { emoji: '🕐', pain: 'No Time', detail: 'Editing, scripting, captioning — it eats your whole day' },
            ].map((item) => (
              <div key={item.pain} style={{
                background: 'rgba(255,255,255,0.9)',
                border: '2px solid rgba(255,107,107,0.15)',
                borderRadius: '20px', padding: '28px 20px', textAlign: 'left'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.emoji}</div>
                <div style={{ fontWeight: 800, color: '#1a202c', marginBottom: '6px', fontSize: '1rem' }}>{item.pain}</div>
                <div style={{ color: '#718096', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="final-cta-section">
          <div className="final-cta-content animate-fade-up-scroll">
            <span className="cta-label">Your Last Excuse Just Ran Out</span>
            <h2 className="final-cta-title">
              Your First Viral Post is{' '}
              <span className="gradient-text">One Click Away</span>
            </h2>
            <p className="final-cta-description">
              Every day you don't post, someone in your niche does.
              Start generating images and videos right now —
              free, no card, no limits. Your audience is waiting.
            </p>

            <div className="final-cta-buttons">
              <Link href="/create-ai-content" className="final-cta-primary">
                🚀 Generate Viral Content — It's Free
              </Link>
              <Link href="/pricing" className="final-cta-secondary">
                💳 See All Plans
              </Link>
            </div>

            <div className="final-cta-features">
              {['✅ Free to Start', '✅ No Daily Limits', '✅ Works for Any Niche', '✅ No Watermarks', '✅ Cancel Anytime'].map((benefit, i) => (
                <span key={i} className="cta-feature-badge">{benefit}</span>
              ))}
            </div>
            
            <p className="final-cta-note">
              Join 2,500+ creators already growing with Scenith
            </p>
          </div>
        </section>                

        {/* ── CREDIT EXPLAINER — insert after hero-section ── */}
        <section style={{
          maxWidth: '1100px', margin: '0 auto 80px', padding: '0 20px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '28px',
            padding: '56px 48px',
            border: '2px solid rgba(102,126,234,0.2)',
            boxShadow: '0 8px 40px rgba(102,126,234,0.12)',
            position: 'relative', overflow: 'hidden'
          }}>
            {/* ambient glow */}
            <div style={{
              position: 'absolute', top: '-80px', right: '-80px',
              width: '320px', height: '320px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(118,75,162,0.18) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ textAlign: 'center', marginBottom: '44px', position: 'relative' }}>
              <span style={{
                display: 'inline-block', padding: '5px 16px', borderRadius: '100px',
                background: 'rgba(102,126,234,0.15)', border: '1px solid rgba(102,126,234,0.4)',
                fontSize: '0.8rem', fontWeight: 700, color: '#a899f5',
                letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px'
              }}>
                How Credits Work
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#1a202c',
                marginBottom: '14px', letterSpacing: '-0.02em'
              }}>
                One Balance.{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #a899f5, #f06cbe)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                }}>Every Tool.</span>
              </h2>
              <p style={{ color: '#4a5568', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
                No tool-specific limits. Spend your credits however you want.
              </p>
            </div>
              
            {/* Credit cost cards */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px', marginBottom: '36px'
            }}>
              {[
                { icon: '🖼️', action: '1 AI Image',         cost: '2–14 credits', model: 'FLUX, GPT Image, Imagen 4', color: '#a899f5' },
                { icon: '🎬', action: '5s AI Video',          cost: '46–186 credits', model: 'Wan 2.5, Kling, Veo 3.1', color: '#f06cbe' },
                { icon: '🎙️', action: '100 Voice chars',     cost: '1 credit',     model: 'Any of 40+ voices',        color: '#4facfe' },
                { icon: '✂️', action: 'Background Removal',  cost: '10 credits',   model: 'AI precision',             color: '#00f2fe' },
                { icon: '⚡', action: 'Video Speed Change',  cost: '10 credits',   model: 'Any video',                color: '#fdcb6e' },
                { icon: '📄', action: 'Subtitle Generation', cost: '10 credits',   model: 'Auto-detect language',     color: '#55efc4' },
              ].map((item) => (
                <div key={item.action} style={{
                  background: 'rgba(102,126,234,0.05)',
                  border: '1px solid rgba(102,126,234,0.12)',
                  borderRadius: '16px', padding: '20px 16px',
                  transition: 'border-color 0.2s'
                }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{item.icon}</div>
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px',
                    textTransform: 'uppercase', color: item.color, marginBottom: '4px'
                  }}>
                    {item.action}
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1a202c', marginBottom: '4px' }}>
                    {item.cost}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#718096' }}>
                    {item.model}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Free credits callout */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '24px', flexWrap: 'wrap',
              background: 'rgba(102,126,234,0.06)',
              border: '1px solid rgba(102,126,234,0.22)',
              borderRadius: '16px', padding: '20px 28px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#a899f5' }}>50</div>
                <div style={{ fontSize: '0.8rem', color: '#718096', fontWeight: 600 }}>Free credits/mo<br/>on Basic plan</div>
              </div>
              <div style={{ width: '1px', height: '50px', background: 'rgba(102,126,234,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f06cbe' }}>300–2500</div>
                <div style={{ fontSize: '0.8rem', color: '#718096', fontWeight: 600 }}>Credits/mo<br/>on paid plans</div>
              </div>
              <div style={{ width: '1px', height: '50px', background: 'rgba(102,126,234,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4facfe' }}>0</div>
                <div style={{ fontSize: '0.8rem', color: '#718096', fontWeight: 600 }}>Daily limits<br/>ever</div>
              </div>
              <Link href="/create-ai-content" style={{
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white', borderRadius: '12px',
                fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(102,126,234,0.4)',
                whiteSpace: 'nowrap'
              }}>
                Start Free →
              </Link>
            </div>
          </div>
        </section>         

        {/* Top Tools Showcase - Featured */}
        <section className="featured-tools-section">
          <div className="section-header">
            <span className="section-label">The Solution</span>
            <h2>Everything You Need to<br />Post Daily and Grow Fast</h2>
            <p className="section-subtitle">
              Scenith generates your Videos, Thumbnails, and Voices —
              so you spend 20 minutes creating what used to take you all day.
            </p>       
          </div>

          <div className="featured-tools-grid animate-fade-up-scroll">
            {toolsShowcase.sort((a, b) => a.rank - b.rank).map((tool, index) => {
              const IconComponent = tool.icon;
              const isFeatured = index < 3;
              
              return (
                <div
                  key={tool.id}
                  className={`tool-card ...`}
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
                </div>
              );
            })}
          </div>
        </section>

        {/* ── AI MODEL SHOWCASE — insert after featured-tools-section ── */}
        <section style={{
          maxWidth: '1200px', margin: '0 auto 100px', padding: '0 20px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 16px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #e0e7ff 0%, #cffafe 100%)',
              fontSize: '0.8rem', fontWeight: 700, color: '#667eea',
              letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px'
            }}>
              Powered By
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900,
              color: '#1a202c', letterSpacing: '-0.02em', marginBottom: '14px'
            }}>
              Industry-Leading AI Models
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', maxWidth: '580px', margin: '0 auto' }}>
              The same models used by professional studios — now accessible with free credits.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {/* Image Models */}
            <div style={{
              background: 'rgba(255,255,255,0.9)', borderRadius: '20px',
              border: '2px solid rgba(102,126,234,0.2)', padding: '28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🖼️</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a202c', marginBottom: '16px' }}>
                AI Image Models
              </h3>
              {[
                { name: 'FLUX 1.1 Pro',     cost: '7 credits', tier: 'Spark' },
                { name: 'GPT Image 1',      cost: '2–12 cr',   tier: 'Spark+' },
                { name: 'Imagen 4 Fast',    cost: '3 credits', tier: 'Spark' },
                { name: 'Imagen 4 Standard',cost: '7 credits', tier: 'Odyssey' },
                { name: 'Grok Aurora',      cost: '14 credits',tier: 'Odyssey' },
              ].map((m) => (
                <div key={m.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0', borderBottom: '1px solid rgba(102,126,234,0.1)'
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a202c' }}>{m.name}</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.75rem', color: '#667eea', fontWeight: 700,
                      background: 'rgba(102,126,234,0.1)', padding: '2px 8px', borderRadius: '8px'
                    }}>{m.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Models */}
            <div style={{
              background: 'rgba(255,255,255,0.9)', borderRadius: '20px',
              border: '2px solid rgba(240,108,190,0.25)', padding: '28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🎬</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a202c', marginBottom: '16px' }}>
                AI Video Models
              </h3>
              {[
                { name: 'Wan 2.5',          cost: 'from 46 cr', note: '480p–1080p' },
                { name: 'Kling 2.5 Turbo',  cost: 'from 64 cr', note: '1080p cinematic' },
                { name: 'Kling 2.6 Pro',    cost: 'from 64 cr', note: 'Native audio' },
                { name: 'Veo 3.1 Fast',     cost: 'from 92 cr', note: "Google's model" },
                { name: 'Veo 3.1',          cost: 'from 186 cr',note: 'Flagship quality' },
              ].map((m) => (
                <div key={m.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0', borderBottom: '1px solid rgba(240,108,190,0.1)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a202c' }}>{m.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#718096', marginLeft: '6px' }}>{m.note}</span>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', color: '#f06cbe', fontWeight: 700,
                    background: 'rgba(240,108,190,0.1)', padding: '2px 8px', borderRadius: '8px'
                  }}>{m.cost}</span>
                </div>
              ))}
            </div>
            
            {/* Voice + other tools */}
            <div style={{
              background: 'rgba(255,255,255,0.9)', borderRadius: '20px',
              border: '2px solid rgba(79,172,254,0.25)', padding: '28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🎙️</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a202c', marginBottom: '16px' }}>
                Voice & Utility Tools
              </h3>
              {[
                { name: 'AI Voice Generation', cost: '1 cr / 100 chars', note: '40+ voices' },
                { name: 'Background Removal',  cost: '10 credits',        note: 'AI precision' },
                { name: 'Subtitle Generation', cost: '10 credits',        note: 'Auto language' },
                { name: 'Video Speed Control', cost: '10 credits',        note: '0.5×–15×' },
                { name: 'PDF Tools',           cost: 'Free',              note: '9 operations' },
              ].map((m) => (
                <div key={m.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0', borderBottom: '1px solid rgba(79,172,254,0.1)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a202c' }}>{m.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#718096', marginLeft: '6px' }}>{m.note}</span>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', color: '#4facfe', fontWeight: 700,
                    background: 'rgba(79,172,254,0.1)', padding: '2px 8px', borderRadius: '8px'
                  }}>{m.cost}</span>
                </div>
              ))}
            </div>
          </div>
            
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/create-ai-content" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white', borderRadius: '14px',
              fontSize: '1rem', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(102,126,234,0.4)'
            }}>
              🚀 Try All Models Free
            </Link>
            <p style={{ marginTop: '12px', fontSize: '0.85rem', color: '#718096' }}>
              50 free credits on signup · No card required
            </p>
          </div>
        </section>    

        {/* USE CASES */}
        <section style={{
          maxWidth: '1100px', margin: '0 auto 100px', padding: '0 20px'
        }}>
          <div className="section-header">
            <span className="section-label">Who It's For</span>
            <h2>Built for Creators Who Want Results</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Growing Your Instagram',
                emoji: '📱',
                color: '#a78bfa',
                points: [
                  'Post daily Reels without burning out',
                  'Hooks engineered to beat the algorithm',
                  'From 0 to 10k followers in 90 days',
                ]
              },
              {
                title: 'Managing Client Content',
                emoji: '💼',
                color: '#4facfe',
                points: [
                  'Handle 10 clients with 1 person',
                  'Deliver a month of content in a day',
                  'Charge more, work less',
                ]
              },
              {
                title: 'Creating Daily YouTube Shorts',
                emoji: '🎬',
                color: '#f06cbe',
                points: [
                  'Video + Voiceover in minutes',
                  'Never miss an upload day again',
                  'Build a faceless channel that earns',
                ]
              },
            ].map((uc) => (
              <div key={uc.title} style={{
                background: 'rgba(255,255,255,0.9)',
                border: `2px solid ${uc.color}30`,
                borderRadius: '24px', padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{uc.emoji}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a202c', marginBottom: '16px' }}>{uc.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {uc.points.map((p) => (
                    <li key={p} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      marginBottom: '10px', color: '#4a5568', fontSize: '0.92rem', lineHeight: 1.6
                    }}>
                      <span style={{ color: uc.color, fontWeight: 800, marginTop: '2px' }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>            

        {/* NEW: SVG Library Highlight Section */}
        <section className="svg-library-showcase">
          <div className="svg-showcase-content animate-fade-up-scroll">
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
          </div>
        </section>       

        {/* ── PRICING PREVIEW — replace detailed-comparison-section ── */}
        <section style={{
          maxWidth: '1100px', margin: '100px auto', padding: '0 20px', textAlign: 'center'
        }}>
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Start Free. Scale When Ready.</h2>
            <p className="section-subtitle">
              Every plan uses the same credit balance — images, videos, voice, and more.
            </p>
          </div>
        
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px', marginTop: '50px', marginBottom: '40px'
          }}>
            {pricingPlans.map((plan) => (
              <div key={plan.name} style={{
                background: plan.highlight
                  ? 'linear-gradient(135deg, #0f0c29 0%, #1e1a45 100%)'
                  : 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                border: plan.highlight ? '2px solid rgba(168,153,245,0.5)' : '2px solid rgba(102,126,234,0.15)',
                padding: '32px 24px',
                boxShadow: plan.highlight ? '0 0 40px rgba(102,126,234,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
                transform: plan.highlight ? 'scale(1.04)' : 'none',
                position: 'relative'
              }}>
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #667eea, #8b5cf6)',
                    color: 'white', fontSize: '0.7rem', fontWeight: 800,
                    padding: '4px 16px', borderRadius: '100px', letterSpacing: '1px',
                    textTransform: 'uppercase', whiteSpace: 'nowrap'
                  }}>⭐ Most Popular</div>
                )}
                <div style={{
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px',
                  textTransform: 'uppercase', color: plan.color,
                  marginBottom: '8px'
                }}>
                  {plan.name}
                </div>
                <div style={{
                  fontSize: '2.2rem', fontWeight: 900,
                  color: plan.highlight ? 'white' : '#1a202c',
                  marginBottom: '4px'
                }}>
                  {plan.price}
                </div>
                <div style={{
                  fontSize: '0.85rem', color: plan.highlight ? 'rgba(255,255,255,0.5)' : '#718096',
                  marginBottom: '20px', fontWeight: 600
                }}>
                  {plan.credits}
                </div>
                <ul style={{ listStyle: 'none', marginBottom: '24px', textAlign: 'left' }}>
                  {plan.perks.map((perk) => (
                    <li key={perk} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.88rem', marginBottom: '8px',
                      color: plan.highlight ? 'rgba(255,255,255,0.75)' : '#4a5568'
                    }}>
                      <span style={{ color: plan.color }}>✓</span> {perk}
                    </li>
                  ))}
                </ul>
                <Link href={plan.ctaLink} style={{
                  display: 'block', textAlign: 'center',
                  padding: '11px 20px', borderRadius: '12px',
                  background: plan.highlight
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : 'transparent',
                  border: plan.highlight ? 'none' : `2px solid ${plan.color}`,
                  color: plan.highlight ? 'white' : plan.color,
                  fontSize: '0.9rem', fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: plan.highlight ? '0 4px 18px rgba(102,126,234,0.4)' : 'none'
                }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          
          <Link href="/pricing" style={{
            color: '#667eea', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none'
          }}>
            View full pricing & topup packs →
          </Link>
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
              <div
                key={index}
                className="why-choose-card animate-fade-up-scroll"
                style={{ '--accent-color': item.color } as React.CSSProperties}
              >
                <div className="why-icon-wrapper">
                  <item.icon className="why-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
          <div className="tutorials-grid animate-fade-up-scroll">
            {youtubeTutorials.map((tutorial) => (
              <div className="tutorial-card" key={tutorial.id}>
                <div className="video-wrapper">
                  <YoutubeFacade videoId={tutorial.id} title={tutorial.title} />
                </div>
                <h3>{tutorial.title}</h3>
              </div>
            ))}
          </div>
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
          <div className="blog-preview-grid animate-fade-up-scroll">
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
          </div>
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
                q: 'What can I create with the AI Image Generator?',
                a: 'Scenith\'s AI Image Generator transforms text descriptions into stunning visuals instantly. Create social media graphics, product mockups, blog illustrations, marketing banners, concept art, and any creative imagery you need. Simply describe what you want and our AI delivers professional-quality images in seconds—no design skills required. Perfect for content creators, marketers, and small businesses needing custom visuals without stock photo subscriptions.'
              },
              {
                q: 'Can I use multiple tools together in one project?',
                a: 'Absolutely! That\'s the power of Scenith\'s unified platform. Generate an AI voiceover, add it to a video, create auto-subtitles, edit a thumbnail in the Image Editor, download SVG icons for graphics—all in one workflow. Everything integrates seamlessly for maximum productivity.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-item animate-fade-up-scroll"
              >
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}