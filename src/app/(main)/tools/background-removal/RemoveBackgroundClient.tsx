"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
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

  // Fetch user profile if token exists (for navbar), no redirect
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
    const navBar = document.querySelector('.nav-bar');
    const navHeight = 80;
    const offsetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // Current date for SEO freshness
  const currentYear = new Date().getFullYear();

  return (
    <div className="remove-background-page">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Background Remover',
            description: 'Free AI-powered background removal tool for creating transparent images from JPG and PNG files.',
            url: typeof window !== 'undefined' ? window.location.href : '/tools/background-removal',
            applicationCategory: 'PhotoEditingApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '12847',
            },
            author: {
              '@type': 'Organization',
              name: 'SCENITH AI VIDEO EDITOR',
            },
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
          <h1>Free AI Background Remover - Remove Photo Backgrounds Online in Seconds</h1>
          <p className="hero-description">
            Transform your images instantly with our advanced AI background remover. Upload any JPG or PNG photo and get a professional transparent background in under 5 seconds. Perfect for e-commerce product photos, social media graphics, and professional designs. Completely free, no watermarks!
          </p>
          <div className="hero-cta-section">
            <BackgroundRemoval />
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">⚡ 5-Second Processing</span>
              <span className="trust-item">🔒 Secure & Private</span>
              <span className="trust-item">📱 Works on All Devices</span>
            </div>
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Before and after example showing AI background removal from product photo - original image with cluttered background transformed to clean transparent background"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of AI-powered background removal showing professional results</figcaption>
          </figure>
        </motion.div>
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
            Our cutting-edge AI technology makes background removal effortless and lightning-fast. No design experience needed - just upload, process, and download your professional transparent image.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Photo</h3>
              <p>Drag and drop or click to select your JPG, PNG, or JPEG image. Files up to 30MB supported for high-quality processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>AI Magic Happens</h3>
              <p>Our advanced machine learning algorithm analyzes your image and precisely removes the background while preserving fine details like hair and complex edges.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Download & Use</h3>
              <p>Get your professional transparent PNG instantly. Perfect for e-commerce listings, social media posts, presentations, or any creative project.</p>
            </motion.article>
          </div>
        </motion.div>
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
            Experience the power of cutting-edge artificial intelligence combined with user-friendly design. Get professional results without the learning curve of complex photo editing software.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Lightning-Fast Processing</h3>
              <p>Advanced AI algorithms process images in under 5 seconds. No more waiting hours for manual editing - get instant professional results that save time and boost productivity.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎯</span>
              <h3>Pixel-Perfect Precision</h3>
              <p>Our AI excels at complex subjects including hair, fur, transparency, and intricate details. Machine learning trained on millions of images ensures accuracy that rivals professional photo editors.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>100% Free Forever</h3>
              <p>No hidden costs, no watermarks, no usage limits. Perfect for individuals, small businesses, and enterprises. Commercial use allowed with full rights to your edited images.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Works Everywhere</h3>
              <p>Fully responsive design works perfectly on desktop, tablet, and mobile devices. Edit photos on-the-go with the same professional quality across all platforms.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🚀</span>
              <h3>E-commerce Optimized</h3>
              <p>Create marketplace-ready product photos that increase conversions. Compatible with Amazon, Shopify, eBay, and all major platforms. Boost your sales with professional imagery.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <section className="use-cases-section" id="use-cases" role="region" aria-labelledby="use-cases-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="use-cases-title">Perfect for Every Project</h2>
          <p className="section-description">
            Discover how professionals and businesses use our AI background remover to create stunning visuals across industries.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🛍️ E-commerce & Online Selling</h3>
              <p>Create professional product photos for Amazon, Shopify, eBay, and Etsy. Clean backgrounds increase click-through rates and boost sales conversions.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>📱 Social Media Content</h3>
              <p>Design eye-catching Instagram posts, TikTok videos, and LinkedIn graphics. Stand out with professional visuals that increase engagement and followers.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Professional Presentations</h3>
              <p>Create polished business presentations, proposals, and marketing materials. Remove distracting backgrounds to focus attention on key content.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Perfect for graphic design, digital art, and creative compositions. Combine subjects seamlessly with new backgrounds for unlimited creative possibilities.</p>
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
            Join thousands of satisfied users who rely on our AI background remover for their professional and personal projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This AI tool revolutionized my Shopify store! Product photos look incredibly professional now, and my conversion rate increased by 40%. The results are consistently perfect."</p>
              <cite>– Sarah Chen, E-commerce Store Owner</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"As a social media manager, I process hundreds of images monthly. This free tool saves me 20+ hours per week compared to manual editing. The quality is outstanding!"</p>
              <cite>– Marcus Rodriguez, Social Media Manager</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"The AI handles complex hair details better than expensive software I've used. It's become an essential tool for my graphic design workflow. Highly recommended!"</p>
              <cite>– Emily Foster, Graphic Designer</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
          </div>
        </motion.div>
      </section>

      <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>What image formats and sizes are supported?</h3>
              <p>We support JPG, JPEG, and PNG formats up to 30MB. The AI works best with images between 500x500 and 4000x4000 pixels for optimal processing speed and quality.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is this tool suitable for professional e-commerce use?</h3>
              <p>Absolutely! Our AI background remover is designed for commercial use. Create marketplace-compliant product images for Amazon, Shopify, eBay, and other platforms. The transparent backgrounds meet all major platform requirements.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How does the AI handle complex subjects like hair and fur?</h3>
              <p>Our advanced machine learning model has been trained on millions of images specifically to handle complex edges, fine hair, fur, and transparent objects. The AI achieves professional-quality results that rival manual editing.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use this tool on mobile devices?</h3>
              <p>Yes! Our background remover is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. The same powerful AI processing is available across all devices.</p>
            </article>
          </div>
        </motion.div>
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
          <p>Join over 50,000+ users who trust our AI background remover. Start creating stunning visuals for your e-commerce, social media, and design projects today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => scrollToSection('hero')}
            aria-label="Start using the free AI background remover tool"
          >
            Remove Backgrounds Now - Free!
          </button>
          <div className="cta-features">
            <span>⚡ 5-second processing</span>
            <span>🔒 100% secure & private</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RemoveBackgroundClient;