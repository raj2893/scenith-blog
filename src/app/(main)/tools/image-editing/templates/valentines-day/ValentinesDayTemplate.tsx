"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTimes, FaHeart, FaDownload, FaEdit, FaGift, FaEnvelope } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../../../styles/tools/ValentinesDayTemplate.css";

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const ValentinesDayTemplate: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: "",
    firstName: "",
    lastName: "",
    picture: null,
    googleAuth: false,
    role: "",
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const fullName = res.data.name || "";
          const nameParts = fullName.trim().split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
          setUserProfile({
            email: res.data.email || "",
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || "BASIC",
          });
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          if (error.response?.status === 401) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          }
        });
    }
  }, []);

  useEffect(() => {
    fetchTemplate();
  }, []);
  
  const fetchTemplate = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/image-editor/templates/2`);
      const data = await response.json();
      setTemplate(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching template:', error);
      setLoading(false);
    }
  };  

  // Handle login
  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fullName = userResponse.data.name || "";
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      setUserProfile({
        email: userResponse.data.email || "",
        firstName,
        lastName,
        picture: userResponse.data.picture || null,
        googleAuth: userResponse.data.googleAuth || false,
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      // After login, create the project
      handleUseTemplate();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError("");
    setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem("token", response.data.token);
      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      const fullName = userResponse.data.name || "";
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      setUserProfile({
        email: userResponse.data.email || "",
        firstName,
        lastName,
        picture: userResponse.data.picture || null,
        googleAuth: true,
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      // After login, create the project
      handleUseTemplate();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Google login failed");
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  // Initialize Google Sign-In
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
          callback: handleGoogleLogin,
        });
        const buttonElement = document.getElementById("googleSignInButton");
        if (buttonElement) {
          window.google.accounts.id.renderButton(buttonElement, {
            theme: "outline",
            size: "large",
            width: 300,
          });
        }
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    if (showLoginModal) {
      initializeGoogleSignIn();
    }
  }, [showLoginModal, handleGoogleLogin]);

  // Handle template usage
  const handleUseTemplate = async () => {
    if (!isLoggedIn) {
      router.push('/login?redirect=/tools/image-editing/templates/valentines-day');
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const templateDesign = JSON.parse(template.designJson);
      const firstPage = templateDesign.pages?.[0];
      
      // Create a new project with the template's design
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        {
          projectName: "Valentine's Day Design",
          canvasWidth: firstPage?.canvas?.width || 1080,
          canvasHeight: firstPage?.canvas?.height || 1080,
          canvasBackgroundColor: firstPage?.canvas?.backgroundColor || "#FFE8EC",
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      
      // Update the project with the template's designJson
      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${response.data.id}`,
        { designJson: template.designJson },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      
      // Open the editor in a new tab
      window.open(`/tools/image-editing/${response.data.id}/edit`, '_blank');
    } catch (error: any) {
      console.error("Failed to create project from template:", error);
      alert(error.response?.data?.message || "Failed to create project from template");
    } finally {
      setIsCreatingProject(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading your Valentine's Day template...</p>
      </div>
    );
  }

  return (
    <div className="valentines-template-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Valentine's Day Graphics Template",
            description: "Free Valentine's Day template for creating romantic cards, social media posts, and love-themed designs. Professional graphics editor with hearts, roses, and romantic elements.",
            url: typeof window !== "undefined" ? window.location.href : "/tools/image-editing/templates/valentines-day",
            image: "/images/valentines-template-preview.jpg",
            creator: {
              "@type": "Organization",
              name: "Scenith",
              url: "https://scenith.in"
            },
            datePublished: "2025-02-01",
            keywords: "valentine's day, romantic graphics, love cards, valentine template, romantic design, hearts, roses",
          }),
        }}
      />

      <div className="particle-background">
        <div className="heart-particle"></div>
        <div className="heart-particle"></div>
        <div className="heart-particle"></div>
        <div className="heart-particle"></div>
        <div className="heart-particle"></div>
        <div className="heart-particle"></div>
      </div>

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
            <a href="/tools/image-editing" itemProp="item">
              <span itemProp="name">Image Editor</span>
            </a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Valentine's Day Template</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero" role="main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <FaHeart className="badge-heart" />
            <span>Valentine's Day Special 2025</span>
          </div>
          <h1>Free Valentine's Day Graphics Template</h1>
          <p className="hero-description">
            Create stunning romantic cards, social media posts, and love-themed designs with our professionally crafted Valentine's Day template. Perfect for expressing your love, promoting Valentine's offers, or creating memorable romantic content. Fully customizable with hearts, roses, and beautiful romantic elements!
          </p>

          <div className="hero-cta-buttons">
            <button
              className="cta-button use-template-btn"
              onClick={handleUseTemplate}
              disabled={isCreatingProject}
            >
              {isCreatingProject ? (
                <>
                  <div className="btn-spinner"></div>
                  Creating Project...
                </>
              ) : (
                <>
                  <FaHeart /> Use This Template Free
                </>
              )}
            </button>
            <a href="/tools/image-editing" className="secondary-btn">
              <FaEdit /> Browse All Templates
            </a>
          </div>

          <div className="trust-indicators">
            <span className="trust-item">
              <FaHeart /> 100% Free Forever
            </span>
            <span className="trust-item">
              <FaDownload /> No Watermarks
            </span>
            <span className="trust-item">
              <FaEdit /> Fully Customizable
            </span>
            <span className="trust-item">
              <FaGift /> Ready to Use
            </span>
          </div>
        </motion.div>
      </section>

      {/* Template Preview Section */}
      <section className="template-preview-section">
        <div className="container">
          <h2>Valentine's Day Template Preview</h2>
          <p className="section-subtitle">
            Professional romantic design ready to customize for your needs
          </p>
          
          <div className="template-showcase">
            <div className="template-preview-card">
              <div className="preview-image-wrapper">
                <img 
                  src="/images/valentines-template-preview.png" 
                  alt="Valentine's Day romantic graphics template preview showing hearts, roses, and love elements"
                  className="template-preview-image"
                />
                <div className="preview-overlay">
                  <button 
                    className="preview-use-btn"
                    onClick={handleUseTemplate}
                    disabled={isCreatingProject}
                  >
                    <FaHeart /> Use Template Now
                  </button>
                </div>
              </div>
              <div className="template-info-card">
                <h3>What's Included</h3>
                <ul className="template-features-list">
                  <li><FaHeart /> Beautiful romantic color scheme</li>
                  <li><FaHeart /> Professional typography with love fonts</li>
                  <li><FaHeart /> Heart and rose design elements</li>
                  <li><FaHeart /> Perfect dimensions (1080x1080px)</li>
                  <li><FaHeart /> Instagram, Facebook & Twitter ready</li>
                  <li><FaHeart /> Fully editable layers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Definition */}
      <section className="quick-definition-section" role="region" aria-labelledby="quick-definition">
        <div className="container">
          <div className="featured-snippet-target">
            <h2 id="quick-definition" className="visually-hidden">Valentine's Day Graphics Template Definition</h2>
            <div className="definition-box">
              <p className="definition-text">
                A <strong>Valentine's Day graphics template</strong> is a pre-designed digital layout featuring romantic elements like hearts, roses, and love-themed colors that can be customized to create cards, social media posts, marketing materials, and other romantic content for Valentine's Day celebrations. These templates provide a professional starting point for expressing love, promoting Valentine's offers, or creating memorable romantic designs without needing advanced design skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-showcase">
        <div className="container">
          <h2>Perfect for Every Valentine's Day Need</h2>
          <p className="section-description">
            Our Valentine's Day template adapts to any romantic project you have in mind
          </p>

          <div className="use-case-detailed-grid">
            <motion.div
              className="use-case-detailed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="use-case-number">1</div>
              <h3>Romantic Social Media Posts</h3>
              <p>
                Create eye-catching Valentine's Day posts for Instagram, Facebook, Twitter, and Pinterest. Share your love story, celebrate your relationship, or promote Valentine's Day specials. Our template is optimized for social media engagement with romantic visuals that capture attention and inspire shares.
              </p>
              <div className="use-case-prompts">
                <strong>Perfect For:</strong>
                <ul>
                  <li>Couple anniversary announcements</li>
                  <li>Valentine's Day greeting posts</li>
                  <li>Love quotes and romantic messages</li>
                  <li>Engagement and wedding announcements</li>
                  <li>Valentine's Day sale promotions</li>
                  <li>Restaurant special offers</li>
                </ul>
              </div>
              <div className="use-case-stats">
                <span>Instagram Ready</span>
                <span>Facebook Optimized</span>
                <span>Pinterest Perfect</span>
              </div>
            </motion.div>

            <motion.div
              className="use-case-detailed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="use-case-number">2</div>
              <h3>Digital Valentine's Day Cards</h3>
              <p>
                Send personalized digital Valentine's cards to your loved ones, friends, or customers. Customize the message, add your own photos, and create memorable greetings that stand out. Perfect for both personal expressions of love and business Valentine's Day campaigns reaching your audience with heartfelt messages.
              </p>
              <div className="use-case-prompts">
                <strong>Ideal Uses:</strong>
                <ul>
                  <li>Romantic cards for significant others</li>
                  <li>Friendship Valentine's greetings</li>
                  <li>Family love appreciation cards</li>
                  <li>Business customer appreciation</li>
                  <li>Email newsletter headers</li>
                  <li>Digital invitations for Valentine's events</li>
                </ul>
              </div>
              <div className="use-case-stats">
                <span>Print Ready</span>
                <span>Email Compatible</span>
                <span>Personal Touch</span>
              </div>
            </motion.div>

            <motion.div
              className="use-case-detailed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="use-case-number">3</div>
              <h3>Valentine's Marketing Materials</h3>
              <p>
                Design professional marketing collateral for Valentine's Day campaigns, sales events, and promotional activities. From restaurant menus to retail advertising, create cohesive branded materials that capture the romantic spirit while driving business results. Perfect for small businesses, restaurants, boutiques, and online stores.
              </p>
              <div className="use-case-prompts">
                <strong>Business Applications:</strong>
                <ul>
                  <li>Valentine's Day sale flyers and posters</li>
                  <li>Restaurant special menu designs</li>
                  <li>Retail store promotional graphics</li>
                  <li>Email campaign headers and banners</li>
                  <li>Website Valentine's Day landing pages</li>
                  <li>Gift shop product promotions</li>
                </ul>
              </div>
              <div className="use-case-stats">
                <span>Professional Quality</span>
                <span>Brand Customizable</span>
                <span>Marketing Ready</span>
              </div>
            </motion.div>

            <motion.div
              className="use-case-detailed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="use-case-number">4</div>
              <h3>Event Invitations & Announcements</h3>
              <p>
                Create stunning invitations for Valentine's Day parties, romantic dinners, wedding proposals, or anniversary celebrations. Design elegant announcements that set the romantic tone for your special event. Customize colors, text, and elements to match your event theme and create anticipation among your guests.
              </p>
              <div className="use-case-prompts">
                <strong>Event Types:</strong>
                <ul>
                  <li>Valentine's Day party invitations</li>
                  <li>Romantic dinner event announcements</li>
                  <li>Galentine's Day celebrations</li>
                  <li>Wedding proposal reveal cards</li>
                  <li>Anniversary celebration invites</li>
                  <li>Love-themed virtual event graphics</li>
                </ul>
              </div>
              <div className="use-case-stats">
                <span>Event Ready</span>
                <span>Elegant Design</span>
                <span>Easy Customization</span>
              </div>
            </motion.div>
          </div>

          <div className="use-case-cta">
            <h3>Ready to Create Your Valentine's Masterpiece?</h3>
            <p>Start designing with our free template now - no design experience needed!</p>
            <button 
              className="cta-button large-cta"
              onClick={handleUseTemplate}
              disabled={isCreatingProject}
            >
              <FaHeart /> Use Template Free
            </button>
          </div>
        </div>
      </section>

      {/* How to Customize Section */}
      <section className="how-to-customize-section">
        <div className="container">
          <h2>How to Customize Your Valentine's Day Template</h2>
          <p className="section-description">
            Follow these simple steps to create your perfect romantic design in minutes
          </p>

          <div className="tutorial-steps">
            <motion.div
              className="tutorial-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="tutorial-step-number">
                <span>STEP 1</span>
              </div>
              <div className="tutorial-step-content">
                <h3>Click "Use Template" to Get Started</h3>
                <p>
                  Simply click the "Use This Template Free" button at the top of this page. If you're not already logged in, you'll be prompted to create a free account or sign in with Google. This takes just seconds and gives you access to all our free design tools and templates.
                </p>
                <ul className="tutorial-checklist">
                  <li>Click the red "Use Template" button</li>
                  <li>Sign in or create your free account</li>
                  <li>Template opens automatically in the editor</li>
                  <li>All elements are ready to customize</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>Pro Tip:</strong> Creating an account saves your designs automatically, so you can come back and edit them anytime. Plus, you get access to all our free templates and design tools!
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tutorial-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="tutorial-step-number">
                <span>STEP 2</span>
              </div>
              <div className="tutorial-step-content">
                <h3>Customize Text and Messages</h3>
                <p>
                  Personalize the romantic messages and text in your design. Click any text element to edit it with your own love messages, names, dates, or promotional copy. Choose from our romantic font collection or use your favorite fonts to match your style and message perfectly.
                </p>
                <ul className="tutorial-checklist">
                  <li>Click on any text to edit the message</li>
                  <li>Change fonts to romantic or elegant styles</li>
                  <li>Adjust text size, color, and positioning</li>
                  <li>Add your names, dates, or special messages</li>
                  <li>Use text effects like outlines and shadows</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>Love Message Ideas:</strong> Try "Happy Valentine's Day," "Forever & Always," "You Are My Everything," "Love You More," or customize with your own heartfelt message!
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tutorial-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="tutorial-step-number">
                <span>STEP 3</span>
              </div>
              <div className="tutorial-step-content">
                <h3>Personalize Colors and Elements</h3>
                <p>
                  Make the design uniquely yours by adjusting colors, hearts, and romantic elements. Our template comes with a beautiful romantic color palette, but you can easily customize it to match your brand, preferences, or event theme. Add, remove, or rearrange design elements to create your perfect composition.
                </p>
                <ul className="tutorial-checklist">
                  <li>Change background colors to your preference</li>
                  <li>Adjust heart colors - red, pink, gold, or custom</li>
                  <li>Modify rose and floral element colors</li>
                  <li>Add your own romantic design elements</li>
                  <li>Layer elements for depth and visual interest</li>
                  <li>Use opacity controls for elegant effects</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>Color Psychology:</strong> Red symbolizes passion and deep love, pink represents romance and tenderness, gold adds luxury and elegance, while white conveys purity and sincerity. Choose colors that match your message!
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tutorial-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="tutorial-step-number">
                <span>STEP 4</span>
              </div>
              <div className="tutorial-step-content">
                <h3>Add Your Photos (Optional)</h3>
                <p>
                  Make your Valentine's design extra special by adding personal photos. Upload pictures of you and your loved one, product photos for business promotions, or any images that enhance your romantic message. Our editor makes it easy to position, resize, and apply effects to your photos.
                </p>
                <ul className="tutorial-checklist">
                  <li>Click the upload button to add your photos</li>
                  <li>Drag photos into position on your design</li>
                  <li>Resize and crop to fit perfectly</li>
                  <li>Apply romantic filters and effects</li>
                  <li>Layer photos with hearts and text</li>
                  <li>Create photo collages for multiple images</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>Photo Tips:</strong> Use high-quality images (at least 1080px wide), choose photos with good lighting, and position your main subjects prominently. Romantic filters like warm tones or soft focus can enhance the loving atmosphere!
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tutorial-step advanced"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="tutorial-step-number">
                <span>STEP 5</span>
              </div>
              <div className="tutorial-step-content">
                <h3>Download and Share Your Creation</h3>
                <p>
                  Once you're happy with your Valentine's Day design, it's time to download and share it with the world! Export your creation in the perfect format for your needs - whether you're posting on social media, sending digital cards, printing physical materials, or using it in marketing campaigns.
                </p>
                
                <div className="download-options">
                  <div className="download-format">
                    <strong>PNG Format</strong>
                    <p>Best for social media, digital cards, and transparent backgrounds. High quality with no compression artifacts.</p>
                  </div>
                  <div className="download-format">
                    <strong>JPG Format</strong>
                    <p>Smaller file size, perfect for email attachments and web use. Great for backgrounds and photos.</p>
                  </div>
                  <div className="download-format">
                    <strong>PDF Format</strong>
                    <p>Print-ready quality for physical cards, posters, and professional printing. Maintains crisp text and graphics.</p>
                  </div>
                </div>

                <div className="tutorial-tip">
                  <strong>Sharing Ideas:</strong> Post to Instagram with #ValentinesDay hashtags, send as digital cards via email or messaging apps, print as physical cards at home or a print shop, use as website banners or email headers, or share on Pinterest for romantic inspiration!
                </div>
              </div>
            </motion.div>
          </div>

          <div className="common-questions">
            <h3>Quick Questions About Customizing</h3>
            <div className="quick-qa-grid">
              <div className="quick-qa">
                <strong>Can I change the template size?</strong>
                <p>Yes! While the template is optimized for 1080x1080px (perfect for Instagram), you can resize it to any dimensions you need for different platforms or printing requirements.</p>
              </div>
              <div className="quick-qa">
                <strong>Is it really free to use?</strong>
                <p>Absolutely! Our Valentine's Day template is 100% free with no hidden costs, no watermarks, and no premium features locked away. Download and use it as many times as you want!</p>
              </div>
              <div className="quick-qa">
                <strong>Can I use this for commercial purposes?</strong>
                <p>Yes! Feel free to use this template for business promotions, client work, marketing campaigns, or any commercial application. No attribution required, though we always appreciate it!</p>
              </div>
              <div className="quick-qa">
                <strong>Do I need design experience?</strong>
                <p>Not at all! Our intuitive editor is designed for beginners and professionals alike. Simply click, type, and customize. If you can use basic computer software, you can create beautiful Valentine's designs!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content - What Is Valentine's Day Graphics */}
      <section className="what-is-section">
        <div className="container">
          <h2>Understanding Valentine's Day Graphics & Design</h2>
          <p className="section-description">
            A comprehensive guide to creating romantic visual content that captures hearts
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>What Are Valentine's Day Graphics?</h3>
              <p>
                Valentine's Day graphics are specialized visual designs created specifically for February 14th celebrations and the romantic season surrounding it. These graphics incorporate iconic symbols of love and romance including hearts, roses, cupids, love letters, chocolates, and romantic color schemes predominantly featuring reds, pinks, and whites. They serve multiple purposes across personal and commercial applications, from expressing individual affection to promoting Valentine's-themed products and services.
              </p>
              <p>
                In the digital age, Valentine's Day graphics have evolved from simple paper cards to sophisticated multi-platform visual content. Modern Valentine's graphics are designed to work seamlessly across social media platforms, digital messaging apps, email campaigns, websites, and print materials. They combine traditional romantic elements with contemporary design trends, creating a perfect blend of timeless sentiment and modern aesthetics that resonate with today's audiences.
              </p>
              <p>
                The power of Valentine's Day graphics lies in their emotional impact and universal appeal. Love and romance transcend cultural boundaries, making these graphics effective communication tools worldwide. Whether you're a individual expressing personal feelings, a small business promoting Valentine's specials, or a major brand running seasonal campaigns, well-designed Valentine's graphics help you connect emotionally with your audience and stand out in the crowded Valentine's marketplace.
              </p>
            </div>

            <div className="dive-section">
              <h3>The Psychology of Romantic Design</h3>
              <p>
                Understanding color psychology is crucial for creating effective Valentine's Day graphics. Red, the dominant color in Valentine's design, evokes passion, desire, and deep emotional connection. It increases heart rate and creates feelings of excitement and energy. Pink, on the other hand, represents gentler forms of love - tenderness, romance, and sweet affection. It's associated with nurturing, compassion, and warmth. The combination of red and pink creates a balanced romantic atmosphere that appeals to different types of love expressions.
              </p>
              <p>
                Shape psychology plays an equally important role in Valentine's graphics. Hearts, the universal symbol of love, create instant emotional recognition and positive associations. Circular shapes suggest completeness, unity, and eternal love - perfect for wedding anniversaries and marriage proposals. Soft, curved lines convey femininity, gentleness, and approachability, while elegant typography choices add sophistication and personal touch to romantic messages.
              </p>
              <p>
                Visual hierarchy in Valentine's graphics guides the viewer's emotional journey through your design. Strategic placement of elements directs attention from romantic imagery to personalized messages to calls-to-action. Effective use of whitespace (or negative space) prevents overwhelming the viewer and creates breathing room that enhances the romantic atmosphere. Balance between decorative elements and functional content ensures your message is both beautiful and clear.
              </p>
            </div>

            <div className="dive-section">
              <h3>Elements of Successful Valentine's Graphics</h3>
              <p>
                Typography selection makes or breaks Valentine's Day designs. Script fonts evoke handwritten love letters and personal intimacy, perfect for heartfelt messages and romantic quotes. Serif fonts add elegance and timelessness, ideal for formal invitations or upscale Valentine's promotions. Sans-serif fonts provide modern clarity for promotional content and business communications. The key is matching font personality to message intent while maintaining readability across all viewing sizes and platforms.
              </p>
              <p>
                Imagery and iconography in Valentine's graphics must balance familiarity with freshness. While hearts and roses are expected elements, creative interpretations prevent clichéd designs. Consider geometric heart patterns, watercolor rose illustrations, or abstract love symbols that feel contemporary. High-quality photography of real couples, romantic settings, or Valentine's products adds authenticity and relatability. Custom illustrations create unique brand identity and memorable visual experiences.
              </p>
              <p>
                Color harmony extends beyond just red and pink. Complementary colors like gold and champagne add luxury and celebration. Soft pastels create gentle, whimsical romance perfect for friendship Valentine's cards or light-hearted content. Deep burgundy and wine colors suggest mature, sophisticated love. White space and neutral backgrounds allow romantic elements to shine without visual clutter. The strategic use of gradients and color overlays adds depth and modern appeal to traditional Valentine's motifs.
              </p>
            </div>

            <div className="dive-section">
              <h3>Valentine's Graphics Across Different Platforms</h3>
              <p>
                Social media platforms each require specific design considerations for Valentine's content. Instagram thrives on square (1080x1080px) or vertical (1080x1350px) formats with bold, eye-catching visuals that stop the scroll. Stories and Reels (1080x1920px) demand vertical designs optimized for mobile viewing with text and important elements positioned to avoid interface overlap. Facebook posts perform well with landscape formats (1200x630px) and clear, readable text even at smaller sizes.
              </p>
              <p>
                Pinterest, the visual discovery platform, rewards vertical pins (1000x1500px) with detailed, informative graphics that inspire and inform. Valentine's Day content on Pinterest should include clear text overlays, step-by-step visuals for DIY projects, or compelling product showcases. Twitter (now X) graphics (1200x675px) need concise messaging and strong visual impact to grab attention in fast-moving feeds. LinkedIn Valentine's content for B2B marketing requires professional aesthetics while maintaining romantic themes.
              </p>
              <p>
                Email marketing graphics must balance visual appeal with email client compatibility. Headers should be eye-catching but load quickly, typically under 1000px wide. Mobile optimization is critical as over 60% of emails are opened on phones. Print materials like greeting cards, posters, or flyers require high-resolution designs (300 DPI) with proper bleed margins and CMYK color modes for accurate color reproduction. Understanding each platform's technical requirements ensures your Valentine's graphics look perfect everywhere they appear.
              </p>
            </div>

            <div className="dive-section">
              <h3>Business Applications of Valentine's Day Graphics</h3>
              <p>
                Retail businesses leverage Valentine's graphics to drive seasonal sales and create shopping urgency. Promotional graphics highlighting Valentine's gift ideas, limited-time offers, and romantic product bundles increase conversion rates significantly. In-store signage featuring Valentine's themes creates immersive shopping experiences that encourage impulse purchases and extend visit duration. Window displays with professionally designed Valentine's graphics attract foot traffic and communicate special offerings before customers even enter.
              </p>
              <p>
                Restaurants and hospitality businesses use Valentine's graphics to promote special menus, romantic dining experiences, and couple's packages. Menu designs with elegant Valentine's themes enhance the dining atmosphere and justify premium pricing for special Valentine's dishes. Digital menus and table cards featuring romantic graphics create Instagram-worthy moments that generate organic social media marketing. Hotel and spa promotions with luxurious Valentine's graphics attract couples seeking romantic getaways and memorable experiences.
              </p>
              <p>
                E-commerce platforms benefit enormously from cohesive Valentine's Day graphics across all touchpoints. Website banners announcing Valentine's collections create immediate seasonal context. Product photography styled with Valentine's elements increases perceived value and gift-worthiness. Email campaigns with Valentine's graphics achieve higher open rates and click-through rates compared to generic promotional emails. Social media ads with romantic visuals and clear calls-to-action drive traffic to Valentine's landing pages optimized for conversion.
              </p>
              <p>
                Service businesses including florists, photographers, event planners, and personal services use Valentine's graphics to showcase their expertise and attract seasonal bookings. Portfolio graphics highlighting past Valentine's events, weddings, or romantic photography sessions demonstrate capabilities and inspire potential clients. Pricing packages presented with Valentine's-themed graphics feel more valuable and special compared to standard pricing sheets. Testimonials and reviews formatted with romantic graphics build trust and emotional connection with prospective customers.
              </p>
            </div>

            <div className="dive-section">
              <h3>Personal Uses for Valentine's Day Graphics</h3>
              <p>
                Individual expression of love through custom Valentine's graphics has become increasingly popular with accessible design tools. Personalized digital cards allow people to craft unique messages that reflect their relationship's personality rather than relying on generic store-bought cards. Adding personal photos, inside jokes, memorable dates, or custom illustrations makes Valentine's greetings truly one-of-a-kind and deeply meaningful to recipients.
              </p>
              <p>
                Social media relationship celebrations use Valentine's graphics to publicly honor partnerships and share love stories. Anniversary posts featuring custom graphics with timeline elements, photo collages, and heartfelt captions generate high engagement and positive responses from friends and family. Proposal announcements designed with elegant Valentine's graphics create shareable moments that friends can repost and celebrate. Couples use matching Valentine's graphics as profile pictures or story templates to coordinate their social media presence.
              </p>
              <p>
                Family and friendship Valentine's expressions extend beyond romantic love to celebrate all forms of affection. Parents create Valentine's graphics for children's classroom card exchanges, combining fun designs with educational elements. Friend groups design "Galentine's Day" graphics celebrating female friendship with playful pink aesthetics and empowering messages. Family members share Valentine's appreciation posts recognizing parental love, sibling bonds, and extended family connections using warm, inclusive Valentine's designs.
              </p>
              <p>
                Long-distance relationships particularly benefit from thoughtfully designed Valentine's graphics sent through messaging apps, emails, or surprise deliveries. Custom graphics can include countdown timers to next meetings, virtual date night invitations, or collaborative wish lists. Video call backgrounds featuring Valentine's graphics create romantic virtual environments for digital dates. Screen saver or wallpaper designs with romantic elements and loving messages provide daily reminders of affection despite physical distance.
              </p>
            </div>

            <div className="dive-section">
              <h3>Trends in Modern Valentine's Day Design</h3>
              <p>
                Minimalist Valentine's aesthetics have gained significant popularity, moving away from cluttered designs toward clean, sophisticated simplicity. Single-line heart illustrations, generous whitespace, and refined typography create elegant romantic statements without visual overwhelm. Monochromatic color schemes in deep reds or soft pinks with strategic metallic accents appeal to modern sensibilities while maintaining romantic essence. This trend particularly resonates with millennial and Gen Z audiences who value authenticity and understated elegance.
              </p>
              <p>
                Inclusive love representations in Valentine's graphics reflect society's evolving understanding of relationships. Designs celebrating same-sex couples, polyamorous relationships, non-binary partnerships, and chosen family structures acknowledge love's diverse expressions. Multicultural Valentine's graphics honor different romantic traditions from around the world, expanding beyond Western heart-and-roses conventions. Body-positive imagery and realistic couple representations create more relatable and welcoming Valentine's content for all audiences.
              </p>
              <p>
                Animated Valentine's graphics and motion design add dynamic energy to digital Valentine's content. GIF animations of floating hearts, blooming roses, or pulsing love messages capture attention in social media feeds and messaging apps. Subtle parallax effects on website Valentine's banners create depth and interactivity. Video graphics for stories and reels with kinetic typography and animated elements generate higher engagement than static images. These movement-based designs feel more alive and emotionally compelling than traditional static graphics.
              </p>
              <p>
                Sustainable and eco-conscious Valentine's design messaging appeals to environmentally aware consumers. Graphics promoting digital cards over paper, sustainable gift options, or experience-based Valentine's celebrations resonate with values-driven audiences. Natural, organic design elements like watercolor textures, botanical illustrations, and earthy color palettes communicate both romance and environmental responsibility. This trend aligns Valentine's celebration with broader consumer preferences for sustainable, mindful consumption.
              </p>
            </div>

            <div className="dive-section">
              <h3>Technical Best Practices for Valentine's Graphics</h3>
              <p>
                Resolution and file format optimization ensure Valentine's graphics look perfect across all applications. Social media graphics should be created at exact platform specifications in RGB color mode for accurate screen display. Print materials require 300 DPI resolution in CMYK color mode with appropriate bleed margins (typically 0.125 inches) to prevent white edges after trimming. PDF formats preserve vector elements and fonts for professional printing while PNG files with transparent backgrounds provide flexibility for digital layering and composition.
              </p>
              <p>
                Typography hierarchy and readability remain crucial even in decorative Valentine's designs. Primary messages should use font sizes large enough to read instantly on mobile devices (minimum 24pt for body text, 48pt+ for headlines). Script fonts, while beautiful, should be reserved for short text elements as they reduce readability in longer passages. Sufficient contrast between text and backgrounds ensures messages are legible across different screens and lighting conditions. Always test typography at actual viewing sizes across multiple devices.
              </p>
              <p>
                Brand consistency within Valentine's graphics maintains professional identity while celebrating seasonal themes. Incorporate brand colors alongside traditional Valentine's red and pink to maintain visual identity. Use brand fonts for business information while allowing decorative Valentine's fonts for emotional messaging. Include subtle logo placement that doesn't overpower romantic elements but ensures brand attribution. Create Valentine's versions of standard brand templates to maintain cohesive visual language across seasonal and evergreen content.
              </p>
              <p>
                Accessibility considerations in Valentine's graphics ensure inclusive experiences for all audiences. Provide sufficient color contrast for visually impaired users (WCAG 2.1 AA standard requires 4.5:1 ratio for text). Include alt text descriptions for screen readers when posting graphics online. Avoid relying solely on color to convey information - use shapes, patterns, or text labels as well. Design with color blindness in mind by testing graphics through color blindness simulators to ensure messages remain clear for red-green color blind individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Use Our Valentine's Day Template?</h2>
          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="benefit-icon">💖</div>
              <h3>Save Time & Money</h3>
              <p>
                Skip expensive designers and hours of design work. Our professionally crafted template gives you a beautiful starting point that you can customize in minutes. No design degree required, no learning curve, just results.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="benefit-icon">🎨</div>
              <h3>Professional Design Quality</h3>
              <p>
                Created by experienced designers who understand romantic aesthetics and visual communication. Every element is carefully positioned, every color thoughtfully chosen to create maximum emotional impact.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="benefit-icon">✨</div>
              <h3>Fully Customizable</h3>
              <p>
                Change everything - text, colors, fonts, images, and layouts. Make it uniquely yours while maintaining professional design standards. Add your personal touch or brand identity effortlessly.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="benefit-icon">📱</div>
              <h3>Multi-Platform Ready</h3>
              <p>
                Perfect dimensions for Instagram, Facebook, Twitter, and more. Use for social media, digital cards, email marketing, or print materials. One template, unlimited applications across all channels.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="benefit-icon">💯</div>
              <h3>100% Free Forever</h3>
              <p>
                No hidden costs, no premium upsells, no watermarks. Download high-quality graphics as many times as you need. Commercial use allowed without attribution requirements.
              </p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="benefit-icon">🚀</div>
              <h3>Instant Access</h3>
              <p>
                No downloads, no installations, no waiting. Click, customize, and export in minutes. Cloud-based editor means you can work from anywhere on any device with internet access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is this Valentine's Day template really free?</h3>
              <p>
                Yes, absolutely! Our Valentine's Day template is completely free to use with no hidden costs, no premium features locked away, and no watermarks on your downloads. You can create unlimited designs and download them as many times as you need. We believe everyone should be able to express love beautifully without breaking the bank.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I use this template for commercial purposes?</h3>
              <p>
                Definitely! You're free to use this template for any commercial purpose including business promotions, client work, marketing campaigns, product packaging, or resale of finished designs. The only restriction is you can't redistribute the template itself as a template - but the final designs you create are 100% yours to use however you want.
              </p>
            </div>

            <div className="faq-item">
              <h3>What formats can I download my design in?</h3>
              <p>
                You can export your customized Valentine's Day design in PNG (with transparent background support), JPG (for smaller file sizes), or PDF (print-ready quality). PNG is best for social media and digital use, JPG works great for web and email, and PDF is perfect for professional printing of cards or posters.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do I need design skills to use this template?</h3>
              <p>
                Not at all! Our template is specifically designed for people without design experience. The intuitive drag-and-drop editor makes customization simple - just click to edit text, change colors, add images, and adjust layouts. If you can use basic computer software, you can create beautiful Valentine's graphics with this template.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I add my own photos to the template?</h3>
              <p>
                Yes! Upload your own photos directly into the template. Add romantic couple photos, product images for business promotions, or any imagery that enhances your message. The editor makes it easy to position, resize, crop, and apply effects to your photos to blend perfectly with the template design.
              </p>
            </div>

            <div className="faq-item">
              <h3>What size is the Valentine's Day template?</h3>
              <p>
                The template is designed at 1080x1080 pixels, which is the perfect square format for Instagram posts and works well on Facebook, Twitter, and other social media platforms. However, you can resize it to any dimensions you need - whether that's vertical for Instagram Stories (1080x1920px), horizontal for Facebook covers, or custom sizes for print materials.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I access the template editor?</h3>
              <p>
                Simply click the "Use This Template Free" button on this page. If you're not logged in, you'll be prompted to create a free account or sign in with Google (takes about 30 seconds). Once logged in, the template automatically opens in our online editor where you can start customizing immediately - no downloads or installations required!
              </p>
            </div>

            <div className="faq-item">
              <h3>Will my customized design be saved?</h3>
              <p>
                Yes! When you create an account, all your projects are automatically saved to the cloud. You can return anytime to edit your Valentine's Day designs, create variations, or export updated versions. Your designs are stored securely and privately - only you can access them.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I create multiple versions of the same design?</h3>
              <p>
                Absolutely! Save your template project and create as many variations as you want - try different color schemes, messages, or photos. This is perfect for A/B testing social media posts, creating personalized versions for different recipients, or developing multiple design options for clients.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is the template mobile-friendly?</h3>
              <p>
                The template editor works on desktop, tablet, and mobile devices. While we recommend desktop for the most comfortable editing experience with full features, you can absolutely customize and export your Valentine's designs from your phone or tablet when you're on the go.
              </p>
            </div>

            <div className="faq-item">
              <h3>What fonts are available in the editor?</h3>
              <p>
                The editor includes a wide selection of romantic and elegant fonts perfect for Valentine's Day designs - from flowing script fonts that mimic handwritten love letters to modern sans-serifs for contemporary looks. You'll find plenty of font options to match any style from classic romance to trendy minimalism.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I print my Valentine's design?</h3>
              <p>
                Yes! Export your design as a high-resolution PDF for professional printing. The 300 DPI quality ensures crisp, clear prints whether you're making greeting cards at home, ordering professional prints, or creating posters and signage. Just select PDF format when downloading and choose your preferred print size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitors Comparison */}
      <section className="competitors-comparison" role="region" aria-labelledby="vs-competitors">
        <div className="container">
          <h2 id="vs-competitors">Valentine's Template Comparison: Scenith vs Others</h2>
          <div className="comparison-grid">
            <div className="vs-card">
              <h3>Scenith vs Canva Valentine's Templates</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> 100% free with no watermarks or limits</li>
                <li>❌ <strong>Canva:</strong> Best Valentine's templates require Canva Pro ($12.99/month)</li>
                <li>✅ <strong>Scenith:</strong> True layer-based editing with full control</li>
                <li>⚠️ <strong>Canva:</strong> Template-locked with limited customization</li>
                <li>✅ <strong>Scenith:</strong> Export in any format without restrictions</li>
                <li>❌ <strong>Canva:</strong> Some formats require paid subscription</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Template Marketplaces</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Completely free Valentine's template</li>
                <li>❌ <strong>Marketplaces:</strong> Templates cost $5-$50 each</li>
                <li>✅ <strong>Scenith:</strong> Built-in editor, no additional software needed</li>
                <li>⚠️ <strong>Marketplaces:</strong> Requires Photoshop or Illustrator ($54.99/month)</li>
                <li>✅ <strong>Scenith:</strong> Instant editing, cloud-based</li>
                <li>❌ <strong>Marketplaces:</strong> Download, install, learn complex software</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Generic Design Tools</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Valentine's-specific template ready to use</li>
                <li>⚠️ <strong>Generic Tools:</strong> Start from scratch, no romantic elements</li>
                <li>✅ <strong>Scenith:</strong> Professional design by experts</li>
                <li>❌ <strong>Generic Tools:</strong> DIY design requiring skills and time</li>
                <li>✅ <strong>Scenith:</strong> Optimized for love and romance themes</li>
                <li>⚠️ <strong>Generic Tools:</strong> Generic tools not specialized for Valentine's</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* People Also Ask */}
      <section className="people-also-ask" role="region" aria-labelledby="paa-title">
        <div className="container">
          <h2 id="paa-title">People Also Ask About Valentine's Day Graphics</h2>
          <div className="paa-grid">
            <div className="paa-item">
              <h3>What makes a good Valentine's Day graphic design?</h3>
              <p>
                A good Valentine's Day graphic combines romantic visual elements (hearts, roses, love symbols) with clear messaging, harmonious colors (reds, pinks, whites), elegant typography, and emotional appeal. It should be visually balanced, easy to read, and appropriate for its intended use whether personal cards, social media posts, or business promotions. Professional designs also consider technical requirements like resolution for print or digital use and platform-specific dimensions.
              </p>
            </div>

            <div className="paa-item">
              <h3>How can I make my Valentine's graphics stand out?</h3>
              <p>
                Make Valentine's graphics unique by adding personal photos, using unexpected color combinations while maintaining romantic feel, incorporating custom illustrations or hand-lettering, telling a specific love story, or combining traditional elements with modern design trends. Avoid overused stock imagery and clichéd phrases. Focus on authentic emotional expression and high-quality visual execution. Consider your audience's preferences and platform-specific best practices for maximum impact.
              </p>
            </div>

            <div className="paa-item">
              <h3>What are the best colors for Valentine's Day designs?</h3>
              <p>
                Classic Valentine's colors include various shades of red (symbolizing passion and deep love), pink (representing romance and tenderness), white (conveying purity and sincerity), and gold or champagne (adding luxury and celebration). Modern Valentine's designs also use burgundy and wine tones for sophistication, coral and peach for warmth, rose gold for contemporary elegance, and even non-traditional colors like purple or blue when appropriate for brand identity or unique romantic expressions.
              </p>
            </div>

            <div className="paa-item">
              <h3>Can I use Valentine's templates for business marketing?</h3>
              <p>
                Absolutely! Valentine's Day templates are excellent for business marketing including retail promotions, restaurant special menus, spa and hotel packages, flower shop advertisements, jewelry sales campaigns, and service business seasonal offers. Customize templates with your branding, product images, promotional messages, and calls-to-action. Valentine's-themed marketing typically sees higher engagement rates and drives significant seasonal revenue for businesses that effectively leverage romantic design elements.
              </p>
            </div>

            <div className="paa-item">
              <h3>What size should Valentine's Day social media graphics be?</h3>
              <p>
                Instagram posts: 1080x1080px (square) or 1080x1350px (portrait); Instagram Stories: 1080x1920px; Facebook posts: 1200x630px; Facebook covers: 820x312px; Twitter posts: 1200x675px; Pinterest pins: 1000x1500px; LinkedIn posts: 1200x627px. Always create graphics at platform-specific dimensions to ensure they display correctly without cropping or distortion. Consider aspect ratios when designing to maintain composition across different platform requirements.
              </p>
            </div>

            <div className="paa-item">
              <h3>How do I add text to Valentine's Day graphics effectively?</h3>
              <p>
                Use romantic or elegant fonts that match your message tone, ensure sufficient contrast between text and background for readability, keep messages concise and emotionally resonant, position text strategically avoiding important visual elements, use hierarchy with larger fonts for main messages and smaller for supporting text, and consider mobile viewing where text should remain readable at small sizes. Test typography at actual viewing sizes across different devices before finalizing designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Create Your Perfect Valentine's Design Today</h2>
            <p>
              Join thousands creating beautiful romantic graphics with our free template. Express your love, promote your business, or celebrate romance - all without spending a penny. No design skills needed, no watermarks, just pure creative freedom.
            </p>
            <button
              className="cta-button large-cta"
              onClick={handleUseTemplate}
              disabled={isCreatingProject}
            >
              <FaHeart /> Start Designing Now - It's Free!
            </button>
            <div className="cta-features">
              <span>✓ No Credit Card Required</span>
              <span>✓ Instant Access</span>
              <span>✓ Commercial Use OK</span>
              <span>✓ Unlimited Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div className="login-modal" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>
              <FaTimes />
            </button>
            <h1>SCENITH</h1>
            <p>Login to use this Valentine's template</p>
            {loginError && <div className="error-message">{loginError}</div>}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleLogin({
                  email: formData.get("email") as string,
                  password: formData.get("password") as string,
                });
              }}
            >
              <input type="email" name="email" placeholder="Email" required disabled={isLoggingIn} />
              <input type="password" name="password" placeholder="Password" required disabled={isLoggingIn} />
              <button type="submit" className="cta-button" disabled={isLoggingIn}>
                {isLoggingIn ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="divider">OR</div>
            <div id="googleSignInButton"></div>
            <p className="auth-link">
              New to SCENITH? <a href="/signup">Sign up</a>
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ValentinesDayTemplate;