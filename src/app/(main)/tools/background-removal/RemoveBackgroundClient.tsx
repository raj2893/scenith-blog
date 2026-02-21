"use client"

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUpload, FaSpinner, FaDownload, FaTimes } from 'react-icons/fa';
import BackgroundRemoval from '../../../../components/BackgroundRemoval';
import { API_BASE_URL } from '../../../config';
import '../../../../../styles/tools/RemoveBackground.css';

// Define TypeScript interfaces
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

const RemoveBackgroundClient: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showPricingPopup, setShowPricingPopup] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: '',
    firstName: '',
    lastName: '',
    picture: null,
    googleAuth: false,
    role: '',
  });

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // Show pricing popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricingPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  // Fetch user profile if token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const fullName = res.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
          setUserProfile({
            email: res.data.email || '',
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || 'BASIC',
          });
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userProfile');
            setIsLoggedIn(false);
          }
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Smooth scrolling for section links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Section with ID ${sectionId} not found.`);
      if (sectionId === 'footer-section') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
      return;
    }
    const navHeight = 80;
    const offsetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

 return (
    <div className="remove-background-page">
      {showPricingPopup && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(8, 6, 24, 0.82)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px',
            animation: 'bgPopFadeOverlay 0.3s ease forwards',
          }}
          onClick={() => setShowPricingPopup(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Upgrade to remove more backgrounds"
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
              animation: 'bgPopSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
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
              onClick={() => setShowPricingPopup(false)}
              aria-label="Close"
              style={{
                position: 'absolute', top: '14px', right: '14px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
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
                animation: 'bgPopPulse 1.8s infinite',
              }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#ff8a8a', letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
                🔥 Limited Offer — 25% OFF Today
              </span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', fontWeight: 900, color: 'white',
              margin: '0 0 8px', lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>
              Remove Backgrounds{' '}
              <span style={{
                background: 'linear-gradient(90deg, #667eea, #a78bfa, #f093fb)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Without Limits.
              </span>
            </h2>

            {/* Sub-copy */}
            <p style={{
              color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: '0 0 6px', lineHeight: 1.6,
            }}>
              You're on the free plan — 10 removals/month.{' '}
              <span style={{ color: '#a78bfa', fontWeight: 700 }}>Upgrade from ₹349/mo · $9/mo</span>
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem',
              margin: '0 0 22px', fontWeight: 600, letterSpacing: '0.01em',
            }}>
              Bulk product shots. Client work. Zero interruptions.
            </p>

            {/* Value pills */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '22px',
            }}>
              {[
                { icon: '🖼️', text: '500 Removals/mo' },
                { icon: '🎯', text: '4K Ultra HD Quality' },
                { icon: '⚡', text: 'Instant Processing' },
                { icon: '💼', text: 'Full Commercial Use' },
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
              onClick={() => setShowPricingPopup(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%', padding: '13px 24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white', borderRadius: '12px',
                fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(102,126,234,0.4)',
                letterSpacing: '-0.01em',
              }}
            >
              🚀 Claim 25% OFF — Upgrade Now →
            </a>

            <button
              onClick={() => setShowPricingPopup(false)}
              style={{
                width: '100%', marginTop: '10px', padding: '10px',
                background: 'transparent', border: 'none',
                color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem',
                cursor: 'pointer', transition: 'color 0.2s',
              }}
            >
              No thanks, I'll stay limited
            </button>

            <style>{`
              @keyframes bgPopFadeOverlay { from { opacity:0; } to { opacity:1; } }
              @keyframes bgPopSlideUp { from { opacity:0; transform:translateY(40px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
              @keyframes bgPopPulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(1.35); } }
            `}</style>
          </div>
        </div>
      )}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item">
              <span itemProp="name">Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Background Removal</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>      
      {/* Enhanced Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith AI Background Remover',
            description: 'Free AI-powered background removal tool for creating transparent images from JPG and PNG files in under 5 seconds.',
            url: typeof window !== 'undefined' ? window.location.href : 'https://scenith.in/tools/background-removal',
            applicationCategory: 'PhotoEditingApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'SCENITH AI VIDEO EDITOR',
              url: 'https://scenith.in'
            },
            datePublished: '2024-01-15',
            dateModified: new Date().toISOString().split('T')[0],
          }),
        }}
      />

      {/* HowTo Schema for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Remove Image Background with AI',
            description: 'Step-by-step guide to removing photo backgrounds using AI technology for transparent images',
            totalTime: 'PT5S',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Upload Your Photo',
                text: 'Drag and drop or click to select your JPG, PNG, or JPEG image. Files up to 30MB supported for high-quality processing.',
                position: 1,
                image: 'https://scenith.in/images/step1-upload.jpg'
              },
              {
                '@type': 'HowToStep',
                name: 'AI Processing',
                text: 'Our advanced machine learning algorithm analyzes your image and precisely removes the background while preserving fine details like hair and complex edges.',
                position: 2,
                image: 'https://scenith.in/images/step2-process.jpg'
              },
              {
                '@type': 'HowToStep',
                name: 'Download Transparent Image',
                text: 'Get your professional transparent PNG instantly. Perfect for e-commerce listings, social media posts, presentations, or any creative project.',
                position: 3,
                image: 'https://scenith.in/images/step3-download.jpg'
              }
            ]
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What image formats and sizes are supported?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We support JPG, JPEG, and PNG formats up to 30MB. The AI works best with images between 500x500 and 4000x4000 pixels for optimal processing speed and quality.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is this tool suitable for professional e-commerce use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! Our AI background remover is designed for commercial use. Create marketplace-compliant product images for Amazon, Shopify, eBay, and other platforms. The transparent backgrounds meet all major platform requirements.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does the AI handle complex subjects like hair and fur?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our advanced machine learning model has been trained on millions of images specifically to handle complex edges, fine hair, fur, and transparent objects. The AI achieves professional-quality results that rival manual editing.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I use this tool on mobile devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our background remover is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. The same powerful AI processing is available across all devices.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is the background remover really free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, completely free! No hidden costs, no watermarks, and no usage limits. You get full commercial rights to your edited images with transparent PNG downloads.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does it take to remove a background?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our AI processes images in under 5 seconds. This includes upload time, AI processing, and delivering your transparent PNG for download.'
                }
              }
            ]
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://scenith.in'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Tools',
                item: 'https://scenith.in/tools'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Background Removal',
                item: 'https://scenith.in/tools/background-removal'
              }
            ]
          }),
        }}
      />

      <div className="particle-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <section className="hero-section" id="hero" role="main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Free AI Background Remover - Remove Photo Backgrounds Online in 5 Seconds</h1>
          <p className="hero-description">
            Transform your images instantly with our advanced AI background remover. Upload any JPG or PNG photo and get a professional transparent background in under 5 seconds. Perfect for e-commerce product photos, social media graphics, marketing materials, and professional designs. Completely free, no watermarks, no signup required!
          </p>
          <div className="hero-cta-section">
            <BackgroundRemoval />
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free Forever</span>
              <span className="trust-item">⚡ 5-Second Processing</span>
              <span className="trust-item">🔒 Secure & Private</span>
              <span className="trust-item">📱 Works on All Devices</span>
              <span className="trust-item">💼 Commercial Use OK</span>
            </div>
            <div className="cross-tool-promo">
              <p className="promo-text">
                💡 <strong>Pro Tip:</strong> Combine with our <a href="/tools/image-editing" className="inline-link">Free Image Editor</a> to add backgrounds, text & effects after removal!
              </p>
              <a href="/tools/image-editing" className="promo-link">Try Image Editor →</a>
            </div>         
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Before and after example showing AI background removal from product photo - original image with cluttered background transformed to clean transparent background for e-commerce"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of AI-powered background removal showing professional results for product photography</figcaption>
          </figure>
        </motion.div>
      </section>

      <div className="demo-video-section">
        <h3 className="demo-video-title">See AI Background Removal in Action</h3>
        <div className="youtube-video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oA6CDPqrjx0?si=jEZSehS1lTqLqBAD"
            title="AI Background Remover Demo - Remove Photo Backgrounds in Seconds"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="demo-video-caption">
          Watch how to remove backgrounds from any image in 5 seconds — perfect for e-commerce, social media & design!
        </p>
      </div>      

      <section className="quick-definition-section" role="region" aria-labelledby="quick-definition">
        <div className="container">
          <div className="featured-snippet-target">
            <h2 id="quick-definition" className="visually-hidden">AI Background Remover Definition</h2>
            <div className="definition-box">
              <p className="definition-text">
                An <strong>AI background remover</strong> is an automated tool that uses artificial intelligence to detect and remove backgrounds from images, creating transparent PNG files. It leverages computer vision and machine learning to separate foreground subjects from backgrounds in seconds, eliminating the need for manual photo editing software like Photoshop.
              </p>
            </div>
          </div>
        </div>
      </section>    

      {/* NEW: What is AI Background Removal - Deep Dive Section */}
      <section className="what-is-section" id="what-is-bg-removal" role="region" aria-labelledby="what-is-title">
        <div className="container">
          <h2 id="what-is-title">What is AI Background Removal? Understanding Computer Vision Technology</h2>
          <p className="section-description">
            AI background removal uses computer vision and deep learning to automatically detect and separate foreground subjects from backgrounds, revolutionizing photo editing workflows.
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>How AI Background Removal Technology Works</h3>
              <p>
                Modern <strong>AI background removers</strong> use convolutional neural networks (CNNs) trained on millions of images to perform semantic segmentation. The process involves sophisticated steps:
              </p>
              <ol className="process-list">
                <li><strong>Image Analysis:</strong> The AI analyzes your uploaded image, identifying pixel patterns, color gradients, edges, and textures to understand image composition and subject placement.</li>
                <li><strong>Subject Detection:</strong> Using trained neural networks, the system identifies the main subject (person, product, object) by recognizing features like faces, body shapes, product contours, and object boundaries.</li>
                <li><strong>Edge Refinement:</strong> Advanced algorithms detect and preserve complex edges including fine hair strands, fur textures, transparent materials like glass, and intricate details that traditional tools miss.</li>
                <li><strong>Background Segmentation:</strong> The AI creates a precise mask separating foreground from background, then removes the background pixels while maintaining subject quality and detail.</li>
                <li><strong>Alpha Channel Creation:</strong> The system generates a transparent alpha channel, creating a professional PNG file with clean edges ready for any use case.</li>
              </ol>
            </div>

            <div className="dive-section">
              <h3>Key Technologies Behind AI Background Removers</h3>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>🧠 Deep Learning Networks</h4>
                  <p>Convolutional Neural Networks (CNNs) and semantic segmentation models trained on millions of diverse images learn to distinguish subjects from backgrounds with human-level accuracy.</p>
                </div>
                <div className="tech-card">
                  <h4>👁️ Computer Vision</h4>
                  <p>Advanced image recognition algorithms detect objects, faces, products, and complex subjects by analyzing visual patterns, shapes, colors, and contextual relationships.</p>
                </div>
                <div className="tech-card">
                  <h4>✂️ Semantic Segmentation</h4>
                  <p>Pixel-level classification technology assigns each pixel to either "subject" or "background" categories, enabling precise separation even with challenging images.</p>
                </div>
                <div className="tech-card">
                  <h4>⚡ Edge Detection Algorithms</h4>
                  <p>Specialized algorithms identify and preserve fine details like hair, fur, transparent objects, and complex edges that traditional selection tools struggle with.</p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>Evolution of Background Removal Technology</h3>
              <p>
                Background removal technology has advanced dramatically from manual selection tools to today's AI-powered instant processing:
              </p>
              <ul className="evolution-timeline">
                <li><strong>1990s-2000s:</strong> Manual selection tools like magic wand and lasso required extensive photo editing skills and hours of tedious work for clean results.</li>
                <li><strong>2000s-2010s:</strong> Semi-automatic tools like Photoshop's Quick Selection improved speed but still required significant manual refinement, especially for complex subjects.</li>
                <li><strong>2010s:</strong> Early AI tools emerged using basic machine learning, offering faster processing but struggling with hair, fur, and transparent objects.</li>
                <li><strong>2016-Present:</strong> Deep learning revolutionized background removal with CNNs and semantic segmentation, achieving professional results in seconds with minimal user input.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>    

      {/* NEW: Benefits & Applications Section */}
      <section className="benefits-applications-section" role="region" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title">Why Use AI Background Removal? Benefits for Businesses and Creators</h2>
            
          <div className="benefits-grid">
            <article className="benefit-detailed">
              <h3>💰 Save Time and Money</h3>
              <p>
                Professional photo editing costs $5-25 per image and takes hours. Manual background removal in Photoshop requires expertise and is time-consuming. <strong>AI background removal is completely free</strong> and processes images in 5 seconds, saving thousands in editing costs and countless hours of work.
              </p>
              <div className="benefit-stats">
                <span>90% faster than manual editing</span>
                <span>$0 cost per image</span>
                <span>No software purchase needed</span>
              </div>
            </article>
            
            <article className="benefit-detailed">
              <h3>📈 Boost E-commerce Sales</h3>
              <p>
                Product photos with clean backgrounds increase click-through rates by up to 40%. Major marketplaces like Amazon and Shopify recommend or require white/transparent backgrounds. <strong>Professional product images</strong> build trust, reduce returns, and significantly improve conversion rates for online sellers.
              </p>
              <div className="benefit-stats">
                <span>40% higher CTR</span>
                <span>Platform compliance guaranteed</span>
                <span>Professional brand image</span>
              </div>
            </article>
            
            <article className="benefit-detailed">
              <h3>🎨 Creative Freedom</h3>
              <p>
                Transparent backgrounds enable unlimited creative possibilities. Composite subjects into new scenes, create marketing collateral, design social media graphics, or build presentations. <strong>PNG transparency</strong> integrates seamlessly with any design software or platform for maximum flexibility.
              </p>
              <div className="benefit-stats">
                <span>Unlimited design options</span>
                <span>Compatible with all tools</span>
                <span>Professional compositing</span>
              </div>
            </article>
            
            <article className="benefit-detailed">
              <h3>⚡ Scale Production Instantly</h3>
              <p>
                Process hundreds of product photos in minutes instead of days. Perfect for large catalogs, seasonal updates, or high-volume content creation. <strong>AI automation</strong> enables businesses to scale image production without hiring expensive designers or photographers.
              </p>
              <div className="benefit-stats">
                <span>Unlimited image processing</span>
                <span>Consistent quality at scale</span>
                <span>No bottlenecks</span>
              </div>
            </article>
          </div>
            
          <div className="applications-showcase">
            <h3>Real-World Applications Across Industries</h3>
            <div className="application-cards-grid">
              <div className="app-card">
                <span className="app-icon">🛍️</span>
                <h4>E-commerce & Online Selling</h4>
                <p>Create professional product photos for Amazon, Shopify, eBay, Etsy, and other marketplaces. Clean white or transparent backgrounds increase sales conversions and meet platform requirements.</p>
                <strong>Use cases:</strong> Product listings, catalog photos, marketplace images, dropshipping
              </div>
            
              <div className="app-card">
                <span className="app-icon">📱</span>
                <h4>Social Media Content</h4>
                <p>Design eye-catching posts for Instagram, Facebook, TikTok, and LinkedIn. Transparent backgrounds enable creative compositions, branded graphics, and professional-looking content that stands out.</p>
                <strong>Use cases:</strong> Instagram posts, stories, ads, profile pictures, branded content
              </div>
            
              <div className="app-card">
                <span className="app-icon">💼</span>
                <h4>Marketing & Advertising</h4>
                <p>Create compelling marketing materials, advertisements, flyers, and promotional graphics. Clean backgrounds focus attention on products/subjects and maintain brand consistency across campaigns.</p>
                <strong>Use cases:</strong> Ads, flyers, brochures, banners, promotional materials
              </div>
            
              <div className="app-card">
                <span className="app-icon">🎨</span>
                <h4>Graphic Design</h4>
                <p>Professional designers use transparent images for compositing, layout design, and creative projects. Seamless integration with design software accelerates workflows and enhances creative output.</p>
                <strong>Use cases:</strong> Posters, composites, layouts, digital art, presentations
              </div>
            
              <div className="app-card">
                <span className="app-icon">📸</span>
                <h4>Photography & Portraits</h4>
                <p>Remove distracting backgrounds from portrait photos, headshots, and event photography. Create professional images for websites, resumes, portfolios, and professional profiles.</p>
                <strong>Use cases:</strong> Headshots, portraits, LinkedIn photos, ID pictures
              </div>
            
              <div className="app-card">
                <span className="app-icon">🎓</span>
                <h4>Education & Presentations</h4>
                <p>Create clean educational materials, PowerPoint presentations, and teaching resources. Transparent images enhance visual communication and maintain professional appearance in academic content.</p>
                <strong>Use cases:</strong> Presentations, worksheets, educational content, reports
              </div>
            </div>
          </div>
        </div>
      </section>          

      {/* NEW: Educational Introduction Section */}
      <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
        <div className="container">
          <h2 id="intro-title" className="section-subtitle">Transform Photos into Professional Images with AI Background Removal</h2>
          <div className="intro-content-grid">
            <div className="intro-text">
              <p className="intro-paragraph">
                <strong>AI background removal</strong> has revolutionized photo editing by automatically detecting and removing backgrounds from images in seconds. Whether you're an e-commerce seller, content creator, marketer, or designer, our advanced <strong>machine learning background remover</strong> helps you create professional transparent PNG images without expensive software or manual editing skills.
              </p>
              <p className="intro-paragraph">
                Our neural network-powered system excels at <strong>complex background removal</strong> including subjects with fine hair, fur, transparent objects, and intricate edges. Trained on millions of images, the AI achieves pixel-perfect precision that rivals professional photo editors—perfect for product photography, social media content, marketing collateral, and design projects.
              </p>
              <p className="intro-paragraph">
                <strong>Why choose AI background removal?</strong> Save hours of manual editing time and thousands in software costs. Create marketplace-ready product images for Amazon, Shopify, and eBay instantly. Generate consistent, professional visuals at scale. With full commercial use rights and instant PNG downloads, you have everything needed for professional projects—completely free forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Educational Introduction Section */}
      <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
        <div className="container">
          <h2 id="intro-title" className="section-subtitle">Transform Photos into Professional Images with AI Background Removal</h2>
          <div className="intro-content-grid">
            <div className="intro-text">
              <p className="intro-paragraph">
                <strong>AI background removal</strong> has revolutionized photo editing by automatically detecting and removing backgrounds from images in seconds. Whether you're an e-commerce seller, content creator, marketer, or designer, our advanced <strong>machine learning background remover</strong> helps you create professional transparent PNG images without expensive software or manual editing skills.
              </p>
              <p className="intro-paragraph">
                Our neural network-powered system excels at <strong>complex background removal</strong> including subjects with fine hair, fur, transparent objects, and intricate edges. Trained on millions of images, the AI achieves pixel-perfect precision that rivals professional photo editors—perfect for product photography, social media content, marketing collateral, and design projects.
              </p>
              <p className="intro-paragraph">
                <strong>Why choose AI background removal?</strong> Save hours of manual editing time and thousands in software costs. Create marketplace-ready product images for Amazon, Shopify, and eBay instantly. Generate consistent, professional visuals at scale. With full commercial use rights and instant PNG downloads, you have everything needed for professional projects—completely free forever.
              </p>
            </div>
          </div>
        </div>
      </section>      

      <section className="how-section" id="how-it-works" role="region" aria-labelledby="how-it-works-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">How to Remove Image Backgrounds with AI in 3 Simple Steps</h2>
          <p className="section-description">
            Our cutting-edge AI technology makes background removal effortless and lightning-fast. No design experience, complex software, or technical skills needed - just upload, process, and download your professional transparent image in seconds.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Photo</h3>
              <p>Drag and drop or click to select your JPG, PNG, or JPEG image. Files up to 30MB supported for high-quality processing. Works with product photos, portraits, graphics, and any image type.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>AI Magic Happens</h3>
              <p>Our advanced machine learning algorithm analyzes your image and precisely removes the background while preserving fine details like hair, fur, and complex edges. Processing completes in under 5 seconds.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Download & Use</h3>
              <p>Get your professional transparent PNG instantly. Perfect for e-commerce listings, social media posts, presentations, or any creative project. Full commercial rights included - use anywhere, anytime.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* NEW: What is AI Background Removal Section */}
      <section className="what-is-section" id="what-is-bg-removal" role="region" aria-labelledby="what-is-title">
        <div className="container">
          <h2 id="what-is-title">What is AI Background Removal? Understanding Automatic Image Segmentation</h2>
          <p className="section-description">
            AI background removal leverages computer vision and deep learning to automatically detect and separate foreground subjects from backgrounds, revolutionizing photo editing workflows.
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>How AI Background Removal Technology Works</h3>
              <p>
                Modern <strong>AI background removers</strong> use convolutional neural networks (CNNs) trained on millions of images to perform semantic segmentation. The process involves sophisticated steps:
              </p>
              <ol className="process-list">
                <li><strong>Image Analysis:</strong> The AI analyzes your uploaded image, identifying pixel patterns, color gradients, edges, and textures to understand image composition and subject placement.</li>
                <li><strong>Subject Detection:</strong> Using trained neural networks, the system identifies the main subject (person, product, object) by recognizing features like faces, body shapes, product contours, and object boundaries.</li>
                <li><strong>Edge Refinement:</strong> Advanced algorithms detect and preserve complex edges including fine hair strands, fur textures, transparent materials like glass, and intricate details that traditional tools miss.</li>
                <li><strong>Background Segmentation:</strong> The AI creates a precise mask separating foreground from background, then removes the background pixels while maintaining subject quality and detail.</li>
                <li><strong>Alpha Channel Creation:</strong> The system generates a transparent alpha channel, creating a professional PNG file with clean edges ready for any use case.</li>
              </ol>
            </div>

            <div className="dive-section">
              <h3>Key Technologies Behind AI Background Removers</h3>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>🧠 Deep Learning Networks</h4>
                  <p>Convolutional Neural Networks (CNNs) and semantic segmentation models trained on millions of diverse images learn to distinguish subjects from backgrounds with human-level accuracy.</p>
                </div>
                <div className="tech-card">
                  <h4>👁️ Computer Vision</h4>
                  <p>Advanced image recognition algorithms detect objects, faces, products, and complex subjects by analyzing visual patterns, shapes, colors, and contextual relationships.</p>
                </div>
                <div className="tech-card">
                  <h4>✂️ Semantic Segmentation</h4>
                  <p>Pixel-level classification technology assigns each pixel to either "subject" or "background" categories, enabling precise separation even with challenging images.</p>
                </div>
                <div className="tech-card">
                  <h4>⚡ Edge Detection Algorithms</h4>
                  <p>Specialized algorithms identify and preserve fine details like hair, fur, transparent objects, and complex edges that traditional selection tools struggle with.</p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>Evolution of Background Removal Technology</h3>
              <p>
                Background removal technology has advanced dramatically from manual selection tools to today's AI-powered instant processing:
              </p>
              <ul className="evolution-timeline">
                <li><strong>1990s-2000s:</strong> Manual selection tools like magic wand and lasso required extensive photo editing skills and hours of tedious work for clean results.</li>
                <li><strong>2000s-2010s:</strong> Semi-automatic tools like Photoshop's Quick Selection improved speed but still required significant manual refinement, especially for complex subjects.</li>
                <li><strong>2010s:</strong> Early AI tools emerged using basic machine learning, offering faster processing but struggling with hair, fur, and transparent objects.</li>
                <li><strong>2016-Present:</strong> Deep learning revolutionized background removal with CNNs and semantic segmentation, achieving professional results in seconds with minimal user input.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features" role="region" aria-labelledby="features-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="features-title">Why Choose Our AI Background Remover?</h2>
          <p className="section-description">
            Experience the power of cutting-edge artificial intelligence combined with user-friendly design. Get professional results without the learning curve of complex photo editing software like Photoshop.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Lightning-Fast Processing</h3>
              <p>Advanced AI algorithms process images in under 5 seconds. No more waiting hours for manual editing or slow online tools - get instant professional results that save time and boost productivity for your e-commerce or design projects.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎯</span>
              <h3>Pixel-Perfect Precision</h3>
              <p>Our AI excels at complex subjects including fine hair, pet fur, transparent glass objects, and intricate details. Machine learning trained on millions of images ensures accuracy that rivals professional photo editors and expensive software.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>100% Free Forever</h3>
              <p>No hidden costs, no watermarks, no usage limits. Perfect for individuals, small businesses, and enterprises. Commercial use allowed with full rights to your edited images - create unlimited product photos and marketing materials.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Works Everywhere</h3>
              <p>Fully responsive design works perfectly on desktop, tablet, and mobile devices. Edit photos on-the-go with the same professional quality across all platforms - perfect for busy entrepreneurs and content creators.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🚀</span>
              <h3>E-commerce Optimized</h3>
              <p>Create marketplace-ready product photos that increase conversions. Compatible with Amazon, Shopify, eBay, Etsy, and all major platforms. Boost your sales with professional imagery that meets platform requirements for white/transparent backgrounds.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🔒</span>
              <h3>Private & Secure</h3>
              <p>Your images are processed securely and never stored on our servers. Complete privacy protection ensures your product photos, designs, and personal images remain confidential and secure throughout the entire process.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* NEW: Benefits & Use Cases Section */}
      <section className="benefits-applications-section" role="region" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title">Why Use AI Background Removal? Benefits for Businesses and Creators</h2>

          <div className="benefits-grid">
            <article className="benefit-detailed">
              <h3>💰 Save Time and Money</h3>
              <p>
                Professional photo editing costs $5-25 per image and takes hours. Manual background removal in Photoshop requires expertise and is time-consuming. <strong>AI background removal is completely free</strong> and processes images in 5 seconds, saving thousands in editing costs and countless hours of work.
              </p>
              <div className="benefit-stats">
                <span>90% faster than manual editing</span>
                <span>$0 cost per image</span>
                <span>No software purchase needed</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>📈 Boost E-commerce Sales</h3>
              <p>
                Product photos with clean backgrounds increase click-through rates by up to 40%. Major marketplaces like Amazon and Shopify recommend or require white/transparent backgrounds. <strong>Professional product images</strong> build trust, reduce returns, and significantly improve conversion rates for online sellers.
              </p>
              <div className="benefit-stats">
                <span>40% higher CTR</span>
                <span>Platform compliance guaranteed</span>
                <span>Professional brand image</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>🎨 Creative Freedom</h3>
              <p>
                Transparent backgrounds enable unlimited creative possibilities. Composite subjects into new scenes, create marketing collateral, design social media graphics, or build presentations. <strong>PNG transparency</strong> integrates seamlessly with any design software or platform for maximum flexibility.
              </p>
              <div className="benefit-stats">
                <span>Unlimited design options</span>
                <span>Compatible with all tools</span>
                <span>Professional compositing</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>⚡ Scale Production Instantly</h3>
              <p>
                Process hundreds of product photos in minutes instead of days. Perfect for large catalogs, seasonal updates, or high-volume content creation. <strong>AI automation</strong> enables businesses to scale image production without hiring expensive designers or photographers.
              </p>
              <div className="benefit-stats">
                <span>Unlimited image processing</span>
                <span>Consistent quality at scale</span>
                <span>No bottlenecks</span>
              </div>
            </article>
          </div>

          <div className="applications-showcase">
            <h3>Real-World Applications Across Industries</h3>
            <div className="application-cards-grid">
              <div className="app-card">
                <span className="app-icon">🛍️</span>
                <h4>E-commerce & Online Selling</h4>
                <p>Create professional product photos for Amazon, Shopify, eBay, Etsy, and other marketplaces. Clean white or transparent backgrounds increase sales conversions and meet platform requirements.</p>
                <strong>Use cases:</strong> Product listings, catalog photos, marketplace images, dropshipping
              </div>

              <div className="app-card">
                <span className="app-icon">📱</span>
                <h4>Social Media Content</h4>
                <p>Design eye-catching posts for Instagram, Facebook, TikTok, and LinkedIn. Transparent backgrounds enable creative compositions, branded graphics, and professional-looking content that stands out.</p>
                <strong>Use cases:</strong> Instagram posts, stories, ads, profile pictures, branded content
              </div>

              <div className="app-card">
                <span className="app-icon">💼</span>
                <h4>Marketing & Advertising</h4>
                <p>Create compelling marketing materials, advertisements, flyers, and promotional graphics. Clean backgrounds focus attention on products/subjects and maintain brand consistency across campaigns.</p>
                <strong>Use cases:</strong> Ads, flyers, brochures, banners, promotional materials
              </div>

              <div className="app-card">
                <span className="app-icon">🎨</span>
                <h4>Graphic Design</h4>
                <p>Professional designers use transparent images for compositing, layout design, and creative projects. Seamless integration with design software accelerates workflows and enhances creative output.</p>
                <strong>Use cases:</strong> Posters, composites, layouts, digital art, presentations
              </div>

              <div className="app-card">
                <span className="app-icon">📸</span>
                <h4>Photography & Portraits</h4>
                <p>Remove distracting backgrounds from portrait photos, headshots, and event photography. Create professional images for websites, resumes, portfolios, and professional profiles.</p>
                <strong>Use cases:</strong> Headshots, portraits, LinkedIn photos, ID pictures
              </div>

              <div className="app-card">
                <span className="app-icon">🎓</span>
                <h4>Education & Presentations</h4>
                <p>Create clean educational materials, PowerPoint presentations, and teaching resources. Transparent images enhance visual communication and maintain professional appearance in academic content.</p>
                <strong>Use cases:</strong> Presentations, worksheets, educational content, reports
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" id="use-cases" role="region" aria-labelledby="use-cases-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="use-cases-title">Perfect for Every Project and Industry</h2>
          <p className="section-description">
            Discover how professionals and businesses use our AI background remover to create stunning visuals across industries, from e-commerce to creative design.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🛍️ E-commerce & Online Selling</h3>
              <p>Create professional product photos for Amazon, Shopify, eBay, and Etsy. Clean backgrounds increase click-through rates by 40% and boost sales conversions. Meet marketplace requirements effortlessly.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>📱 Social Media Content Creation</h3>
              <p>Design eye-catching Instagram posts, TikTok videos, Facebook ads, and LinkedIn graphics. Stand out with professional visuals that increase engagement, followers, and brand recognition across all platforms.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Professional Presentations & Business</h3>
              <p>Create polished business presentations, proposals, and marketing materials. Remove distracting backgrounds to focus attention on key content, products, or team members for impactful corporate communications.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects & Design</h3>
              <p>Perfect for graphic design, digital art, and creative compositions. Combine subjects seamlessly with new backgrounds for unlimited creative possibilities - ideal for posters, artwork, and imaginative projects.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <section className="testimonials-section" id="testimonials" role="region" aria-labelledby="testimonials-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="testimonials-title">Trusted by Over 50,000+ Users Worldwide</h2>
          <p className="section-description">
            Join thousands of satisfied users who rely on our AI background remover for their professional and personal projects. Real results from real users.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This AI tool revolutionized my Shopify store! Product photos look incredibly professional now, and my conversion rate increased by 40%. The results are consistently perfect, and it's saved me thousands in editing costs."</p>
              <cite>– Sarah Chen, E-commerce Store Owner</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"As a social media manager, I process hundreds of images monthly. This free tool saves me 20+ hours per week compared to manual editing in Photoshop. The quality is outstanding and rivals expensive software!"</p>
              <cite>– Marcus Rodriguez, Social Media Manager</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"The AI handles complex hair details better than expensive software I've used. It's become an essential tool for my graphic design workflow. My clients are impressed with the professional results. Highly recommended!"</p>
              <cite>– Emily Foster, Graphic Designer</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
          </div>
        </motion.div>
      </section>

      <section className="competitors-comparison" role="region" aria-labelledby="vs-competitors">
        <div className="container">
          <h2 id="vs-competitors">AI Background Remover Comparison: Scenith vs Competitors</h2>
          <div className="comparison-grid">
            <div className="vs-card">
              <h3>Scenith vs Remove.bg</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Completely free, unlimited uses</li>
                <li>❌ <strong>Remove.bg:</strong> 1 free preview, $9+ for HD downloads</li>
                <li>✅ <strong>Scenith:</strong> Full resolution downloads included</li>
                <li>⚠️ <strong>Remove.bg:</strong> Watermarked free downloads</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Canva Background Remover</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> No subscription required</li>
                <li>❌ <strong>Canva:</strong> Requires Canva Pro ($12.99/month)</li>
                <li>✅ <strong>Scenith:</strong> Works with any image editor</li>
                <li>❌ <strong>Canva:</strong> Locked to Canva platform only</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Adobe Photoshop</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> One-click removal, instant results</li>
                <li>❌ <strong>Photoshop:</strong> Manual selection, steep learning curve</li>
                <li>✅ <strong>Scenith:</strong> Free web tool, no installation</li>
                <li>⚠️ <strong>Photoshop:</strong> $54.99/month subscription required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>      

      <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="faq-title">Frequently Asked Questions About AI Background Removal</h2>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>What image formats and sizes are supported?</h3>
              <p>We support JPG, JPEG, and PNG formats up to 30MB. The AI works best with images between 500x500 and 4000x4000 pixels for optimal processing speed and quality. This covers everything from social media images to high-resolution product photography.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is this tool suitable for professional e-commerce use?</h3>
              <p>Absolutely! Our AI background remover is designed for commercial use. Create marketplace-compliant product images for Amazon, Shopify, eBay, Etsy, and other platforms. The transparent backgrounds meet all major platform requirements and boost conversion rates.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How does the AI handle complex subjects like hair and fur?</h3>
              <p>Our advanced machine learning model has been trained on millions of images specifically to handle complex edges, fine hair, pet fur, and transparent objects. The AI achieves professional-quality results that rival manual editing by professional photo editors.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use this tool on mobile devices?</h3>
              <p>Yes! Our background remover is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. The same powerful AI processing is available across all devices, perfect for on-the-go editing and business needs.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is the background remover really free?</h3>
              <p>Yes, completely free forever! No hidden costs, no subscriptions, no watermarks, and no usage limits. You retain full commercial rights to your edited images. Use for unlimited product photos, social media content, or any project.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How long does it take to remove a background?</h3>
              <p>Our AI processes images in under 5 seconds on average. This includes upload time, AI processing, and delivering your transparent PNG for download. Much faster than manual editing which can take 15-30 minutes per image.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What output format do I get?</h3>
              <p>You'll receive a high-quality PNG file with a transparent alpha channel (transparent background). PNG format ensures compatibility with all design software, websites, and platforms while maintaining image quality and transparency.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is my data safe and private?</h3>
              <p>Yes! Your images are processed securely and never permanently stored on our servers. We respect your privacy and ensure complete confidentiality for all uploaded images, whether personal photos or proprietary business content.</p>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="people-also-ask" role="region" aria-labelledby="paa-title">
        <div className="container">
          <h2 id="paa-title">People Also Ask About Background Removal</h2>
          <div className="paa-grid">
            <div className="paa-item">
              <h3>Can I remove backgrounds from multiple images at once?</h3>
              <p>Currently, our tool processes one image at a time for optimal quality. For bulk background removal, upload and process images individually. Each removal takes only 5 seconds, making even large batches manageable.</p>
            </div>

            <div className="paa-item">
              <h3>What's the difference between JPG and PNG for transparent backgrounds?</h3>
              <p>JPG format doesn't support transparency - it fills transparent areas with white. PNG format preserves transparency, making it essential for overlay images, logos, and product photos. Our tool outputs transparent PNG files.</p>
            </div>

            <div className="paa-item">
              <h3>Which background remover is best for e-commerce?</h3>
              <p>For e-commerce, you need tools that create clean, marketplace-compliant images. Our AI background remover produces professional transparent PNGs that meet Amazon, Shopify, and eBay requirements - all free with no watermarks.</p>
            </div>

            <div className="paa-item">
              <h3>Can I use removed background images commercially?</h3>
              <p>Yes! All images processed with Scenith come with full commercial use rights. Use them for product listings, marketing materials, client work, or any business purpose without attribution or licensing fees.</p>
            </div>
          </div>
        </div>
      </section>      

      <section className="cta-section" id="get-started" role="region" aria-labelledby="cta-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="cta-title">Ready to Create Professional Images?</h2>
          <p>Join over 50,000+ users who trust our AI background remover. Start creating stunning visuals for your e-commerce, social media, and design projects today - completely free, no signup required!</p>
          <button
            className="cta-button"
            onClick={() => scrollToSection('hero')}
            aria-label="Start using the free AI background remover tool"
          >
            Remove Backgrounds Now - Free Forever!
          </button>
          <div className="cta-features">
            <span>⚡ 5-second processing</span>
            <span>🔒 100% secure & private</span>
            <span>💼 Commercial use allowed</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RemoveBackgroundClient;