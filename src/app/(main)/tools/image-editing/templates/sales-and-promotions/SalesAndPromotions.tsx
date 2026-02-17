"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaTimes, FaTag, FaDownload, FaEdit, FaBolt,
  FaPercent, FaShoppingCart, FaStar, FaArrowRight, FaFire
} from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../../../styles/tools/SalesPromotionTemplate.css";

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

const SalesPromotionTemplate: React.FC = () => {
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
      const response = await fetch(`${API_BASE_URL}/api/image-editor/templates/3`);
      const data = await response.json();
      setTemplate(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching template:', error);
      setLoading(false);
    }
  };

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
      handleUseTemplate();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };

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
      handleUseTemplate();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Google login failed");
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

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

  const handleUseTemplate = async () => {
    if (!isLoggedIn) {
      router.push('/login?redirect=/tools/image-editing/templates/sales-and-promotion');
      return;
    }

    setIsCreatingProject(true);
    try {
      const templateDesign = JSON.parse(template.designJson);
      const firstPage = templateDesign.pages?.[0];

      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        {
          projectName: "Sales & Promotion Design",
          canvasWidth: firstPage?.canvas?.width || 1080,
          canvasHeight: firstPage?.canvas?.height || 1080,
          canvasBackgroundColor: firstPage?.canvas?.backgroundColor || "#1A1A2E",
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${response.data.id}`,
        { designJson: template.designJson },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

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
      <div className="sp-loading-screen">
        <div className="sp-spinner"></div>
        <p>Loading your Sales & Promotion template...</p>
      </div>
    );
  }

  return (
    <div className="sp-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Sales & Promotion Graphics Template",
            description: "Free sales and promotion graphics template for creating high-converting sale banners, discount announcements, clearance flyers, and promotional social media posts. Professional online editor with bold typography and attention-grabbing visual elements.",
            url: "https://scenith.in/tools/image-editing/templates/sales-and-promotion",
            image: "/images/sales-promotion-template-preview.jpg",
            creator: {
              "@type": "Organization",
              name: "Scenith",
              url: "https://scenith.in"
            },
            datePublished: "2025-02-01",
            keywords: "sales promotion template, sale banner maker, discount graphic, promotional poster, clearance sale, flash sale, mega sale banner",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock"
            }
          }),
        }}
      />

      {/* Animated ticker background elements */}
      <div className="sp-bg-ticker" aria-hidden="true">
        <div className="sp-ticker-track">
          {["MEGA SALE", "50% OFF", "FLASH DEAL", "SHOP NOW", "LIMITED TIME", "CLEARANCE", "MEGA SALE", "50% OFF", "FLASH DEAL", "SHOP NOW", "LIMITED TIME", "CLEARANCE"].map((text, i) => (
            <span key={i} className="sp-ticker-item">{text}</span>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="sp-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools/image-editing" itemProp="item"><span itemProp="name">Image Editor</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Sales & Promotion Template</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="sp-hero" id="hero" role="main">
        <motion.div
          className="sp-hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sp-hero-eyebrow">
            <FaBolt className="sp-eyebrow-icon" />
            <span>Professional Promotion Design — 100% Free</span>
          </div>

          <h1 className="sp-hero-title">
            Free Sales &amp; Promotion<br />
            <span className="sp-title-highlight">Graphics Template</span>
          </h1>

          <p className="sp-hero-desc">
            Stop losing customers to blind promotions. Our professionally engineered sales template puts bold discounts, urgency-driven typography, and conversion-focused layouts in your hands — instantly, for free. Whether you're announcing a mega clearance, a 24-hour flash sale, or a seasonal end-of-stock event, this template is built to make shoppers stop scrolling and start buying.
          </p>

          <div className="sp-hero-actions">
            <button
              className="sp-cta-primary"
              onClick={handleUseTemplate}
              disabled={isCreatingProject}
            >
              {isCreatingProject ? (
                <><div className="sp-btn-spin" />&nbsp;Creating Project...</>
              ) : (
                <><FaTag /> Use This Template Free</>
              )}
            </button>
            <a href="/tools/image-editing" className="sp-cta-secondary">
              <FaEdit /> Browse All Templates
            </a>
          </div>

          <div className="sp-hero-pills">
            <span><FaBolt /> Instant Access</span>
            <span><FaDownload /> No Watermarks</span>
            <span><FaEdit /> Fully Editable</span>
            <span><FaPercent /> Commercial Use OK</span>
          </div>
        </motion.div>

        {/* Stats bar */}
        <div className="sp-stats-bar">
          <div className="sp-stat">
            <strong>1080×1400px</strong>
            <span>Native Resolution</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <strong>PNG / JPG / PDF</strong>
            <span>Export Formats</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <strong>0 Cost</strong>
            <span>Forever Free</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat">
            <strong>No Skills Needed</strong>
            <span>Click & Customize</span>
          </div>
        </div>
      </section>

      {/* ── TEMPLATE PREVIEW ── */}
      <section className="sp-preview-section">
        <div className="sp-container">
          <div className="sp-section-label">Template Preview</div>
          <h2>What You're Getting</h2>
          <p className="sp-section-sub">
            A conversion-engineered promotional graphic ready to deploy across every platform
          </p>

          <div className="sp-preview-layout">
            <div className="sp-preview-image-wrap">
              <img
                src="/images/sales-promotion-template-preview.png"
                alt="Sales and promotion graphics template preview with mega sale banner, discount badge, and shop now button"
                className="sp-preview-img"
              />
              <div className="sp-preview-hover">
                <button
                  className="sp-cta-primary"
                  onClick={handleUseTemplate}
                  disabled={isCreatingProject}
                >
                  <FaTag /> Use Template Free
                </button>
              </div>
              <div className="sp-preview-badge">Free</div>
            </div>

            <div className="sp-preview-details">
              <h3>Template Includes</h3>
              <ul className="sp-includes-list">
                <li><FaStar className="sp-li-icon" /><span>High-impact discount badge (fully editable percentage)</span></li>
                <li><FaStar className="sp-li-icon" /><span>Bold "Mega Sale" headline with premium typography</span></li>
                <li><FaStar className="sp-li-icon" /><span>Urgency subheadings – end of season, limited time, etc.</span></li>
                <li><FaStar className="sp-li-icon" /><span>Attention-grabbing "Shop Now" CTA button element</span></li>
                <li><FaStar className="sp-li-icon" /><span>Terms & validity placeholder line</span></li>
                <li><FaStar className="sp-li-icon" /><span>Dark premium background with decorative shapes</span></li>
                <li><FaStar className="sp-li-icon" /><span>Logo placeholder slot (top-right)</span></li>
                <li><FaStar className="sp-li-icon" /><span>1080×1400px – perfect for Instagram, Facebook, WhatsApp</span></li>
              </ul>

              <div className="sp-preview-cta-wrap">
                <button
                  className="sp-cta-primary sp-full-width"
                  onClick={handleUseTemplate}
                  disabled={isCreatingProject}
                >
                  <FaShoppingCart /> Start Customizing Now
                </button>
                <p className="sp-no-cc">No credit card. No watermark. No catch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINITION SNIPPET ── */}
      <section className="sp-definition-section" role="region" aria-labelledby="sp-definition-heading">
        <div className="sp-container">
          <div className="sp-definition-card">
            <h2 id="sp-definition-heading" className="visually-hidden">Sales and Promotion Graphics Template Definition</h2>
            <div className="sp-definition-label">What is a Sales & Promotion Template?</div>
            <p className="sp-definition-text">
              A <strong>sales and promotion graphics template</strong> is a pre-built visual framework designed specifically to communicate discount offers, clearance events, flash sales, and limited-time deals with maximum visual impact. These templates use proven psychological design principles — urgency colors, high-contrast typography, action-oriented language, and clear price callouts — to drive customer attention and purchase decisions across retail, e-commerce, and social media channels.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="sp-usecases-section">
        <div className="sp-container">
          <div className="sp-section-label">Built For Every Business</div>
          <h2>Where This Template Delivers Results</h2>
          <p className="sp-section-sub">
            From solo sellers to retail chains — this design adapts to every promotional campaign
          </p>

          <div className="sp-usecases-grid">
            {[
              {
                num: "01",
                icon: <FaShoppingCart />,
                title: "E-Commerce & Online Stores",
                desc: "Drive traffic and purchases with scroll-stopping sale graphics for your product listings, landing pages, and checkout promotions. Online shoppers make split-second decisions based on visual cues — bold discount announcements with clear percentage savings and strong CTAs consistently outperform plain text promotions. Use this template for product launch discounts, abandoned cart incentives, first-purchase offers, bundle deals, and clearance-bin push notifications.",
                tags: ["Shopify Banners", "WooCommerce Graphics", "Etsy Promotions", "Amazon Deals"],
                points: [
                  "Product launch discount announcements",
                  "Flash sale countdown promotions",
                  "Bundle & buy-more-save-more deals",
                  "Cart abandonment offer graphics",
                  "Holiday mega-sale campaigns",
                  "First-time buyer welcome discounts"
                ]
              },
              {
                num: "02",
                icon: <FaFire />,
                title: "Retail Stores & Physical Outlets",
                desc: "Brick-and-mortar businesses compete hard for foot traffic. Eye-catching window graphics, in-store promotional posters, and social media announcements that tie into real-world sales events are essential tools. This template produces print-ready graphics for A3/A4 signage as well as digital assets for your store's social channels — keeping your promotional messaging consistent from the window to the feed.",
                tags: ["Window Signage", "In-Store Posters", "WhatsApp Status", "Google My Business"],
                points: [
                  "End of season clearance posters",
                  "Weekend mega-sale signage",
                  "New arrival promotional displays",
                  "Loyalty program offer graphics",
                  "Store anniversary sale materials",
                  "Walk-in discount announcement posts"
                ]
              },
              {
                num: "03",
                icon: <FaPercent />,
                title: "Social Media Marketing Campaigns",
                desc: "Social platforms reward high-engagement content, and promotional graphics that feel urgent and visually bold consistently perform above average. Whether you're running paid ads or organic posts, the design principles in this template — dark contrast, bold numerals, clear CTAs — are tested to stop thumbs mid-scroll. Create cohesive multi-post campaign sets from one template in minutes.",
                tags: ["Instagram Feed", "Facebook Ads", "Stories Format", "Twitter/X Posts"],
                points: [
                  "Seasonal sale announcement posts",
                  "Limited-time offer stories",
                  "Flash deal countdown graphics",
                  "Paid ad creative for Meta & Google",
                  "Reels & TikTok thumbnail graphics",
                  "Pinterest shopping pin promotions"
                ]
              },
              {
                num: "04",
                icon: <FaBolt />,
                title: "Service Businesses & Local Professionals",
                desc: "Salons, gyms, tutors, freelancers, consultants — promotions aren't just for product sellers. Service providers regularly offer introductory rates, referral discounts, seasonal packages, and limited-time bundles that benefit enormously from professional-looking promotional graphics. This template adapts its discount-first visual hierarchy to service offers just as effectively as product deals.",
                tags: ["Salon Offers", "Gym Membership Deals", "Freelancer Packages", "Coaching Discounts"],
                points: [
                  "New client introductory offers",
                  "Seasonal service package promotions",
                  "Referral discount announcement graphics",
                  "Limited-slot enrollment deals",
                  "Holiday special rate promotions",
                  "Bundle service offer announcements"
                ]
              }
            ].map((uc, i) => (
              <motion.div
                key={i}
                className="sp-usecase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="sp-uc-header">
                  <div className="sp-uc-num">{uc.num}</div>
                  <div className="sp-uc-icon">{uc.icon}</div>
                </div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="sp-uc-points">
                  <strong>Best For:</strong>
                  <ul>
                    {uc.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
                <div className="sp-uc-tags">
                  {uc.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="sp-usecase-cta-block">
            <h3>Ready to Build Your Next Promotion?</h3>
            <p>Open the editor in seconds — no account? Sign up free in 30 seconds.</p>
            <button className="sp-cta-primary sp-large" onClick={handleUseTemplate} disabled={isCreatingProject}>
              <FaTag /> Use Template Free <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW TO CUSTOMIZE ── */}
      <section className="sp-howto-section">
        <div className="sp-container">
          <div className="sp-section-label">Step-by-Step Guide</div>
          <h2>How to Create a High-Converting Sale Graphic</h2>
          <p className="sp-section-sub">
            From opening the editor to downloading your finished promotion — here's exactly what to do
          </p>

          <div className="sp-steps-list">
            {[
              {
                step: "STEP 01",
                title: "Open the Template in Scenith Editor",
                content: "Click the \"Use This Template Free\" button anywhere on this page. If you already have a Scenith account, the template opens instantly in the editor. New users can sign up with a Google account or email in under 30 seconds — no credit card, no plan selection, just immediate access to the full editing environment. The template loads pre-configured with all layers, typography, and color values intact.",
                checklist: [
                  "Click the orange \"Use Template\" button",
                  "Log in or create a free account",
                  "Template opens in Scenith's online editor",
                  "All design layers are unlocked and editable",
                  "Original dimensions (1080×1400px) preserved"
                ],
                tip: { label: "Quick Tip", text: "Use Google sign-in for the fastest access — one click, no form filling, you're in the editor in seconds." }
              },
              {
                step: "STEP 02",
                title: "Edit the Discount Value & Headline",
                content: "The most important element of any sale graphic is the discount number — it needs to be impossible to miss. Click the discount badge (the star element top-left in the template) to edit the percentage. Change \"50% OFF\" to whatever your actual offer is — 30%, 70%, BOGO, flat-rate amounts. Then click the \"MEGA SALE\" headline to update it with your specific campaign name: \"Year-End Sale,\" \"Flash Friday,\" \"Summer Clearance,\" or whatever fits your event.",
                checklist: [
                  "Click the discount badge to edit the percentage",
                  "Update the main headline text",
                  "Adjust subtitle (End of Season, Flash Sale, etc.)",
                  "Modify the urgency/validity line at the bottom",
                  "Change the CTA button text (Shop Now, Claim Deal, etc.)"
                ],
                tip: { label: "Conversion Tip", text: "Specific numbers outperform round ones in A/B tests. \"47% OFF\" often performs better than \"50% OFF\" because it feels more credible and calculated." }
              },
              {
                step: "STEP 03",
                title: "Customize Colors to Match Your Brand",
                content: "The template ships with a high-contrast dark background and bold gold/orange accent palette — tested color combinations that perform well for promotional content. But your brand identity matters. Swap the background to your brand's primary dark tone, update the accent colors to your secondary palette, and ensure the overall feel stays bold and urgent. Avoid going too pastel or muted — promotional graphics need energy and contrast to drive action.",
                checklist: [
                  "Update background color to your brand dark tone",
                  "Change accent/badge colors to match brand guidelines",
                  "Ensure sufficient contrast for text readability",
                  "Keep the discount badge visually dominant",
                  "Test color combinations at thumbnail size (mobile view)"
                ],
                tip: { label: "Design Insight", text: "Red-orange palettes consistently outperform pastels for promotional urgency. If your brand is soft-colored, consider keeping the badge and CTA button in a bolder accent color regardless." }
              },
              {
                step: "STEP 04",
                title: "Add Your Logo & Brand Elements",
                content: "The template includes a top-right logo placeholder. Upload your brand logo (PNG with transparent background preferred) and position it in the designated zone. Keep it appropriately sized — your brand should be present but never compete with the discount offer for visual attention. You can also add your store URL, Instagram handle, or QR code in the footer area to direct customers to where they can actually redeem the offer.",
                checklist: [
                  "Upload your logo (PNG transparent preferred)",
                  "Position in top-right placeholder",
                  "Scale logo to 15–20% of canvas width",
                  "Optionally add website URL or social handle",
                  "Add QR code linking to your sale landing page"
                ],
                tip: { label: "Branding Tip", text: "Including your Instagram handle or website URL on promotional graphics builds brand recall even when users screenshot and reshare — turning every share into free advertising." }
              },
              {
                step: "STEP 05",
                title: "Export for Every Channel You Need",
                content: "Once your promotional graphic is set, download it in the right format for each channel. PNG for social media posts ensures crisp quality. JPG produces smaller files for email campaigns and website banners. PDF gives you print-ready quality at any scale for physical posters and signage. One design, multiple outputs — you can also resize the canvas for Stories (1080×1920px), Twitter posts (1200×675px), or Facebook covers (820×312px).",
                downloadFormats: [
                  { format: "PNG", use: "Social media posts, digital banners, transparent overlays" },
                  { format: "JPG", use: "Email headers, website banners, lighter file delivery" },
                  { format: "PDF", use: "Print-ready posters, A4/A3 signage, professional printing" }
                ],
                tip: { label: "Platform Tip", text: "Export your design once, then use the resize tool to create platform-specific versions for Stories, Twitter, LinkedIn, and Pinterest from the same base design." }
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                className="sp-step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="sp-step-badge">{s.step}</div>
                <div className="sp-step-body">
                  <h3>{s.title}</h3>
                  <p>{s.content}</p>
                  {s.checklist && (
                    <ul className="sp-checklist">
                      {s.checklist.map((c, j) => <li key={j}>{c}</li>)}
                    </ul>
                  )}
                  {s.downloadFormats && (
                    <div className="sp-download-formats">
                      {s.downloadFormats.map((df, j) => (
                        <div key={j} className="sp-format-card">
                          <strong>{df.format}</strong>
                          <p>{df.use}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="sp-tip">
                    <strong>{s.tip.label}:</strong> {s.tip.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP CONTENT / EDUCATIONAL ── */}
      <section className="sp-edu-section">
        <div className="sp-container">
          <div className="sp-section-label">The Complete Guide</div>
          <h2>Sales & Promotion Design: Everything You Need to Know</h2>
          <p className="sp-section-sub">
            The psychology, strategy, and technical know-how behind promotional graphics that actually convert
          </p>

          <div className="sp-edu-grid">
            <div className="sp-edu-article">
              <h3>The Psychology Behind High-Converting Sale Graphics</h3>
              <p>
                Promotional graphics that convert don't happen by accident. They're engineered around decades of consumer psychology research that explains exactly why people buy — and what visual triggers accelerate that decision. Understanding these principles is the difference between a graphic that gets scrolled past and one that drives clicks.
              </p>
              <p>
                Loss aversion is one of the most powerful forces in consumer behavior. People are more motivated by the fear of missing out on a deal than by the promise of gaining something. This is why "Limited Time Only," "Only 3 Left," and "Ends Midnight" language in promotional graphics outperforms generic "Great Deal!" messaging every single time. Your sale graphic needs to communicate scarcity, urgency, and finality — not just the discount itself.
              </p>
              <p>
                Color psychology plays an equally significant role. Red and orange hues are neurologically associated with urgency, excitement, and action — they literally increase cortisol levels and quicken pulse rates in viewers. Yellow signals value and caution (hence its use in warning signs and clearance tags). Black backgrounds convey premium quality and exclusivity, which is why luxury flash sales use dark interfaces while maintaining the urgency of their offers. The color choices in this template are not aesthetic decisions — they're conversion decisions.
              </p>
              <p>
                Numerical specificity in discount communication dramatically affects perceived credibility. Studies in marketing psychology consistently show that "Save ₹847 Today" outperforms "Save Almost ₹1,000" despite the larger absolute number in the latter. Specific, odd numbers feel earned and calculated rather than arbitrarily inflated. When building your promotional graphic, resist the urge to round up — specific numbers sell.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Visual Hierarchy in Sales Graphics: What Goes Where</h3>
              <p>
                Visual hierarchy is the intentional arrangement of design elements to guide the viewer's eye in a specific sequence — ideally one that moves from attention capture to desire to action. In promotional graphics, this sequence maps directly to the sales funnel: awareness → interest → desire → action.
              </p>
              <p>
                The discount badge or percentage callout should always occupy the highest visual weight position in your design. It's the hook — the reason the viewer stops scrolling. In our template, the star-burst badge in the top-left corner achieves this through a combination of shape contrast (the irregular star against a rectangular canvas), color contrast (deep red against the dark background), and scale (significantly larger than surrounding elements). Everything else in the design exists to support the story the badge begins.
              </p>
              <p>
                The headline follows — "MEGA SALE" or equivalent — functioning as the context that frames the discount. Viewers who've been stopped by the badge now need to understand the scope of what's being offered. Bold, all-caps typography here maximizes impact and readability at small screen sizes. Supporting subheadings ("End of Season Clearance," "Limited Items Only," etc.) add specificity and reinforce urgency without competing for visual dominance.
              </p>
              <p>
                The CTA button — "Shop Now," "Claim Deal," "Get Offer" — functions as the exit ramp. After the design has established the offer's value and urgency, the button must be immediately obvious and action-oriented. Rounded pill buttons typically outperform hard-edged rectangles in consumer promotions because they feel more approachable and clickable. The gold/amber color in this template creates warm contrast against the dark background while communicating value.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Types of Sales Promotions and Which Design Approach Works Best</h3>
              <p>
                Not all promotional campaigns are identical, and your graphic design should reflect the nature of the specific offer you're running. Understanding the visual language of different promotion types helps you customize this template to maximum effect for each campaign.
              </p>
              <p>
                <strong>Flash Sales</strong> — typically 12–48 hours — demand the highest urgency signals. Large countdown numbers, bold "FLASH SALE" headlines, and saturated red-orange palettes are optimal. The viewer needs to feel immediate pressure. Avoid any design elements that feel leisurely or decorative. Every pixel should communicate speed and time sensitivity.
              </p>
              <p>
                <strong>Seasonal Clearances</strong> (end of season, annual, post-holiday) benefit from a slightly different approach. The urgency is present but the frame is about stock availability rather than time alone. "End of Season Clearance" language combined with "While Stocks Last" creates scarcity-based urgency rather than pure time-based urgency. This template's subheading placeholder is perfect for this language.
              </p>
              <p>
                <strong>Loyalty & Exclusive Member Offers</strong> work best when the design communicates privilege rather than desperation. The premium dark background in this template lends itself perfectly to member-exclusive promotions — it reads as exclusive and curated rather than bargain-basement. Adding "Members Only" or "Exclusive Access" language to the headline dramatically increases perceived value.
              </p>
              <p>
                <strong>Product Launch Introductory Pricing</strong> requires clarity over urgency. The discount is presented as a permanent feature (introductory rate) rather than a disappearing deal. A slightly more sophisticated typographic treatment with clean, well-spaced layout signals quality while still communicating value. Use this template's structure but soften the urgency language to "Introductory Pricing" or "Launch Week Special."
              </p>
              <p>
                <strong>Bundle & Multi-Buy Promotions</strong> work best with clear mathematical communication. "Buy 2, Get 1 Free" or "3 for the Price of 2" needs strong typographic hierarchy that makes the math instantly obvious. Ensure the discount badge communicates the effective savings percentage, and use the subheading for the actual bundle structure.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Platform-Specific Optimization for Promotional Graphics</h3>
              <p>
                A single promotional graphic rarely performs equally across all platforms. Each social media environment has unique technical requirements, audience behavior patterns, and algorithm preferences that influence how your content performs. Understanding platform nuances helps you get more reach and engagement from the same design effort.
              </p>
              <p>
                <strong>Instagram</strong> is the premier platform for promotional visual content. Feed posts at 1080×1400px perform consistently across device types. The platform's demographic skews toward users who actively discover and engage with brand content — making it ideal for promotional announcements. Stories and Reels at 1080×1920px get higher average reach than feed posts due to algorithmic preference. When adapting this template to Stories format, increase text size to account for interface overlays at top and bottom.
              </p>
              <p>
                <strong>Facebook</strong> audiences respond to promotional content with explicit offers — clear percentages, specific product categories, and direct CTAs consistently outperform vague "Sale Happening Now" messaging. Facebook's older demographic (25–55) responds well to trust indicators like brand logos and validity dates. Always include your brand identifier prominently when posting on Facebook. Landscape format (1200×630px) works better for link-share posts, while square (1080×1400px) is better for organic posts.
              </p>
              <p>
                <strong>WhatsApp and messaging channels</strong> have emerged as powerful promotional distribution channels in markets like India. Graphics shared via WhatsApp Status or broadcast lists typically receive high viewership from existing customers — making them ideal for exclusive customer loyalty deals. WhatsApp Status uses 9:16 vertical format, so resize this template to 1080×1920px for optimal display. Keep text large and centered to account for varied device sizes.
              </p>
              <p>
                <strong>Google Display Network and Meta Ads</strong> require strict adherence to technical specifications. Meta recommends less than 20% text coverage on ad creative thumbnails for maximum delivery. For Google Display, ensure your promotional graphic works at multiple sizes — 300×250px (Medium Rectangle), 728×90px (Leaderboard), and 160×600px (Wide Skyscraper) are the three highest-performing units. Create simplified versions of this template for these smaller formats.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Typography Choices That Drive Sales</h3>
              <p>
                Font selection is arguably the most powerful visual decision in promotional design. The right typography communicates urgency, credibility, and value simultaneously — the wrong choice can undermine even a genuinely excellent offer. Here's how to think about fonts in promotional graphics.
              </p>
              <p>
                <strong>Display and decorative fonts</strong> work brilliantly for main headlines in promotional graphics because their visual personality amplifies the emotional message. The template uses a bold, condensed display font for the "MEGA SALE" headline — condensed letterforms pack more visual energy into the available space while maintaining legibility at large sizes. Avoid overly ornamental or script fonts for primary promotional text as they reduce legibility under time pressure (which is exactly the emotional state you want your viewer in).
              </p>
              <p>
                <strong>Condensed sans-serifs</strong> are the workhorses of promotional design. Their narrow width allows for large font sizes in small spaces, and their uniform stroke weight maintains legibility at all sizes. For subheadings and secondary text in your promotion, condensed sans-serifs like Oswald, Barlow Condensed, or Bebas Neue deliver maximum punch without sacrificing readability.
              </p>
              <p>
                <strong>Numeric treatment</strong> deserves special attention in discount graphics. The discount percentage is the most important number in your design — it should be in a numerically optimized typeface, ideally one where all digits have identical widths (tabular figures) for clean alignment. Consider using a different weight or color for the "%" symbol versus the number itself to create visual rhythm.
              </p>
              <p>
                <strong>Font pairing</strong> in promotional templates should follow a simple rule: maximum two font families, with clear differentiation in weight and function. Use your most impactful display font for primary messages (sale name, discount) and a clean, highly legible sans-serif for supporting information (valid dates, terms, website URL).
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Promotional Graphics for Specific Industries</h3>
              <p>
                While the fundamental principles of promotional design are universal, each industry has specific conventions, customer expectations, and competitive landscapes that influence how your promotions should look and feel.
              </p>
              <p>
                <strong>Fashion & Apparel</strong> promotional graphics benefit from product photography integration alongside the discount announcement. Customers in this category are heavily influenced by how the discounted item looks — a great price on something beautiful is more compelling than a great price on nothing. Use this template as the price/offer layer and overlay or combine with product images. Season-specific promotions (Summer Sale, Winter Clearance) resonate strongly with fashion audiences who think in seasonal wardrobe terms.
              </p>
              <p>
                <strong>Electronics & Tech</strong> promotions prioritize specificity over personality. Audiences for tech products are comparison shoppers who respond to precise savings amounts (₹5,000 off rather than 20% off), clear model names, and limited-time framing that creates genuine urgency. The dark, premium aesthetic of this template aligns particularly well with tech product promotions — it feels appropriate for the category in the way that pastels or warm tones do not.
              </p>
              <p>
                <strong>Food & Beverage</strong> businesses running promotional graphics need warmth and appetite appeal alongside the discount communication. The template can be adapted with warm background overlays (deep amber, burgundy) that maintain urgency color psychology while suggesting the warmth and flavor of food products. Pairing with food photography and clear offer terms ("Free dessert with orders above ₹500") helps these promotions convert.
              </p>
              <p>
                <strong>Health, Wellness & Beauty</strong> promotions walk a fine line between communicating value (discount) and maintaining brand premium (quality). Heavy-discount visual language can undermine brand perception in this category. Adapt this template with cleaner backgrounds, more sophisticated typography, and softer urgency language ("Exclusive Member Pricing" versus "MEGA CLEARANCE") while keeping the core offer clarity intact.
              </p>
              <p>
                <strong>Education & Online Courses</strong> have seen explosive growth in promotional marketing, particularly around course enrollment windows. End-of-enrollment pricing, early bird discounts, and scholarship offers all benefit from clearly designed promotional graphics. The "validity date" placeholder in this template is particularly important for course promotions — enrollment deadlines drive conversions better than open-ended pricing.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Building a Promotional Campaign System</h3>
              <p>
                A single promotional graphic is a tactic. A cohesive promotional campaign system is a strategy. The highest-performing brands don't create individual one-off sale posts — they create visual systems where each piece of content reinforces the others, building campaign recognition and cumulative impact across touchpoints.
              </p>
              <p>
                Start by establishing your campaign's visual identity: a consistent color scheme, font pairing, and offer frame that will appear across all assets. If your template uses dark navy as the primary background and gold as the accent, every piece of campaign content — the announcement post, the reminder story, the last-chance email header, the website banner — should share these foundations. Consistency makes campaigns memorable; recognition drives clicks.
              </p>
              <p>
                Build a temporal structure into your campaign. Promotional campaigns work best when they unfold over time with increasing urgency: teaser phase (coming soon, 3 days), launch phase (sale is live, specific offer highlighted), peak phase (best engagement window, emphasis on popular products), and urgency phase (last day, final hours countdown). Each phase requires slightly different messaging while maintaining the same visual identity. This template can serve all four phases with minor text adjustments.
              </p>
              <p>
                Cross-channel consistency is critical for maximum impact. Your Instagram post, your WhatsApp broadcast, your website homepage banner, and your email header should all be visually recognizable as part of the same campaign. Customers who see your promotional message multiple times across multiple channels are significantly more likely to convert than those who see it once. Use one design system — this template as your base — and resize/adapt for each channel rather than creating entirely different designs.
              </p>
            </div>

            <div className="sp-edu-article">
              <h3>Common Mistakes in Promotional Design (And How to Avoid Them)</h3>
              <p>
                Even professional marketers fall into predictable traps when designing promotional graphics. Knowing these failure patterns in advance lets you sidestep them and produce consistently stronger promotional content.
              </p>
              <p>
                <strong>The clarity trap:</strong> Overloading a promotional graphic with too much information is the single most common mistake. Listing every item in the sale, every terms condition, and every product category in one graphic produces visual noise that prevents any single element from standing out. Promotional graphics should communicate one primary message and one supporting message — nothing more. Use your landing page or product listing for the details.
              </p>
              <p>
                <strong>The softness trap:</strong> Trying to make a promotional graphic "look sophisticated" by reducing contrast, softening colors, and using delicate typography destroys conversion performance. Promotions need energy and urgency — these qualities require bold colors, high contrast, and assertive typography. If your brand is genuinely luxury-positioned, communicate exclusivity through scarcity language and premium dark backgrounds rather than through visual softness.
              </p>
              <p>
                <strong>The credibility gap:</strong> Promotional graphics that make claims that feel inflated ("Everything 90% Off!!!") erode trust rather than building urgency. Customers are sophisticated deal-evaluators — they recognize genuine versus manufactured urgency. Use realistic discount values, specific validity dates, and clear terms to build the trust that turns promotional interest into actual purchases.
              </p>
              <p>
                <strong>The resolution mistake:</strong> Publishing low-resolution promotional graphics communicates carelessness that transfers to perceptions of your product or service quality. Always export at the highest available resolution (300 DPI for print, 2× or 3× for digital retina displays). Our template is built at 1080×1400px, which displays sharply on all current device sizes — never scale this down to smaller before exporting.
              </p>
              <p>
                <strong>The missing CTA:</strong> Promotional graphics without clear call-to-action language convert poorly even when the offer itself is excellent. Viewers who aren't told what to do next default to doing nothing. Every promotional graphic must answer "what should I do right now?" — Shop Now, Claim Offer, Visit Store, Use Code SALE20. Make the action step unmistakably obvious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="sp-benefits-section">
        <div className="sp-container">
          <div className="sp-section-label">Why Scenith</div>
          <h2>Why Use This Template Over Starting from Scratch?</h2>

          <div className="sp-benefits-grid">
            {[
              { icon: "⚡", title: "Launch in Under 5 Minutes", desc: "The hardest part of any promotional campaign is starting. Our template eliminates the blank canvas problem — open, customize text and colors, export. Every element is already positioned, sized, and weighted for maximum impact." },
              { icon: "🎯", title: "Conversion-Tested Design", desc: "These aren't arbitrary design choices. The layout, typography scale, color contrasts, and visual hierarchy are based on what actually works in promotional marketing. You get the output of tested design thinking without doing the testing yourself." },
              { icon: "🔓", title: "Zero Lock-In, Full Ownership", desc: "Download your finished graphic as a standalone file. No subscriptions, no ongoing fees, no watermarks. The design is yours completely — use it for your store, your client's campaign, or anywhere else without restriction." },
              { icon: "📐", title: "True Design Control", desc: "Unlike locked template systems that only let you change text, Scenith gives you full layer-by-layer control. Move elements, change colors, resize anything, add your own assets. The template is a starting point, not a cage." },
              { icon: "☁️", title: "Cloud-Saved Projects", desc: "Every version of your promotional design saves automatically to your Scenith account. Come back tomorrow, next week, or next quarter to tweak the discount and reuse the same visual system for a new campaign." },
              { icon: "📱", title: "Multi-Format Export", desc: "One design session yields assets for every channel. Export at the native 1080×1400px for Instagram, resize to 1080×1920px for Stories, scale to landscape for Facebook link posts — all from the same project." }
            ].map((b, i) => (
              <motion.div
                key={i}
                className="sp-benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="sp-benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-faq-section">
        <div className="sp-container">
          <div className="sp-section-label">Got Questions?</div>
          <h2>Frequently Asked Questions</h2>

          <div className="sp-faq-grid">
            {[
              { q: "Is this sales promotion template completely free?", a: "Yes — no trial periods, no freemium limits, no premium feature walls. The template and the Scenith editor are fully accessible at zero cost. Download your finished graphic in any format without watermarks or restrictions, as many times as you need." },
              { q: "Can I use this template for my client's promotional campaign?", a: "Absolutely. Freelancers and agencies can use this template for client work without restriction or attribution requirements. The final designs you create belong entirely to you and your clients. There is no clause preventing commercial or client-facing use." },
              { q: "What file formats can I export the final graphic in?", a: "Scenith exports in PNG (with optional transparent background), JPG (compressed for web/email use), and PDF (print-ready at 300 DPI for physical signage). All formats are available to all users at no cost." },
              { q: "Can I change the discount percentage to something other than 50%?", a: "Of course — that's the primary customization point. Click the discount badge element and change the text to match your actual offer. You can set any percentage, flat amount, or offer structure (BOGO, 3-for-2, etc.) — the design elements around it will maintain their visual relationships." },
              { q: "Can I resize this template for Instagram Stories or Facebook ads?", a: "Yes. After opening the template, use Scenith's canvas resize tool to change the dimensions to whatever you need — 1080×1920px for Stories, 1200×675px for Twitter, 1200×630px for Facebook link posts. Elements reflow and you can reposition them for the new format." },
              { q: "I don't have design experience — will I be able to use this?", a: "This is explicitly built for non-designers. Every element is a single click to select and edit. Text updates instantly. Colors change with a color picker. You don't need to know what kerning or bleed margins are — just click the thing you want to change and change it." },
              { q: "How do I add my own product images to the template?", a: "Use the image upload button in the Scenith editor toolbar. Drag your uploaded image onto the canvas, position it behind or alongside the text layers, and resize it to fit your composition. You can apply opacity adjustments to blend product images with the promotional overlay." },
              { q: "Can I save my design and come back to edit it later?", a: "Yes — creating a free Scenith account saves all your projects to the cloud automatically. Every version is preserved. You can return to update the discount percentage for a new campaign, change the date, or swap the offer language — all without starting from scratch." },
              { q: "Is the template suitable for print as well as digital use?", a: "For digital use, the 1080×1400px PNG or JPG export is ideal. For print (posters, flyers, window signage), export as PDF from Scenith, which renders at print-quality resolution. For very large format printing (A1, A0 banners), we recommend working with a print vendor who can upscale the PDF with appropriate RIP software." },
              { q: "What dimensions does this template use by default?", a: "The default canvas is 1080×1400px — the square format that's universally compatible with Instagram, Facebook, and most messaging platforms. This is the optimal base size because it can be easily resized for any other format without quality loss when using Scenith's vector elements." },
              { q: "Can I create multiple versions of the same promotion?", a: "Yes. Duplicate your project in Scenith to create A/B test variants — try different discount values, headline copy, or color schemes. This is a best practice for paid advertising campaigns where testing multiple creative versions helps optimize performance." },
              { q: "Does the template work for industries other than retail?", a: "Yes — services, education, hospitality, gyms, salons, and virtually any business that runs promotional offers can use this template. The visual system works for any offer type. Customize the language to fit your category (e.g., \"Enrollment Discount\" for education, \"Package Deal\" for services) while keeping the bold discount-forward visual hierarchy." }
            ].map((faq, i) => (
              <div key={i} className="sp-faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="sp-comparison-section" role="region" aria-labelledby="sp-vs-heading">
        <div className="sp-container">
          <div className="sp-section-label">How We Stack Up</div>
          <h2 id="sp-vs-heading">Scenith vs Other Promotional Design Options</h2>

          <div className="sp-vs-grid">
            {[
              {
                title: "Scenith vs Canva",
                rows: [
                  ["✅ Scenith", "100% free template, no plan required"],
                  ["❌ Canva", "Best promotional templates locked behind Pro ($12.99/mo)"],
                  ["✅ Scenith", "Full layer control with no element restrictions"],
                  ["⚠️ Canva", "Many elements are locked or require Premium license"],
                  ["✅ Scenith", "Download any format including PDF at no cost"],
                  ["❌ Canva", "PDF export and certain formats require paid plan"],
                ]
              },
              {
                title: "Scenith vs Template Marketplaces",
                rows: [
                  ["✅ Scenith", "Free template, built-in editor, no additional software"],
                  ["❌ Marketplaces", "Templates cost ₹400–₹4,000+ each"],
                  ["✅ Scenith", "Edit directly in browser, nothing to install"],
                  ["⚠️ Marketplaces", "Requires Photoshop/Illustrator (₹4,500+/mo)"],
                  ["✅ Scenith", "Beginner-friendly interface"],
                  ["❌ Marketplaces", "Steep learning curve for professional editing software"],
                ]
              },
              {
                title: "Scenith vs Designing from Scratch",
                rows: [
                  ["✅ Scenith", "Professional layout ready in minutes"],
                  ["❌ Scratch", "Hours of layout, sizing, and balancing work"],
                  ["✅ Scenith", "Conversion-tested visual hierarchy built in"],
                  ["⚠️ Scratch", "Requires marketing design knowledge to get hierarchy right"],
                  ["✅ Scenith", "Pre-configured color psychology for promotions"],
                  ["❌ Scratch", "Color selection requires design expertise"],
                ]
              }
            ].map((vs, i) => (
              <div key={i} className="sp-vs-card">
                <h3>{vs.title}</h3>
                <ul>
                  {vs.rows.map((row, j) => (
                    <li key={j}><strong>{row[0]}</strong> {row[1]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAA ── */}
      <section className="sp-paa-section" role="region" aria-labelledby="sp-paa-heading">
        <div className="sp-container">
          <div className="sp-section-label">People Also Ask</div>
          <h2 id="sp-paa-heading">More Questions About Sale & Promotion Design</h2>

          <div className="sp-paa-list">
            {[
              { q: "What makes a promotional graphic effective?", a: "Effective promotional graphics combine a clear, prominent discount offer, urgency-creating language (limited time, while stocks last), strong contrast between offer and background, a single clear CTA, and brand identification. The design should communicate the core value proposition in under 3 seconds — the average time a social media user spends deciding whether to engage with promotional content." },
              { q: "What colors are best for sale banners and promotional graphics?", a: "Red and orange are the strongest performers for promotional urgency — they're neurologically associated with action and excitement. Yellow signals value and caution (effective for price callouts). Dark backgrounds (navy, charcoal, black) communicate premium quality while making bright accent elements pop with maximum contrast. Avoid pastels and cool greens for primary promotional colors — they lack the urgency signal that drives purchase decisions." },
              { q: "How do I create a sale graphic that doesn't look cheap?", a: "Premium-feeling promotional graphics use limited color palettes (2–3 colors maximum), high-quality typography with consistent sizing hierarchy, generous white space around key elements, and restrained use of decorative elements. The 'cheap' look in promotional graphics usually comes from overuse of clip art, too many font styles, overloaded information density, and pixelated or low-resolution exports. Start with a professionally designed template and customize minimally." },
              { q: "How often should businesses post promotional graphics?", a: "Promotional graphic frequency depends heavily on your business model and audience tolerance. For e-commerce, 1–2 promotional posts per week is sustainable without triggering audience fatigue. For physical retail, coordinate promotional content with actual in-store events. Always balance promotional content with value-adding content — a 1:3 ratio (one promotional post for every three non-promotional posts) is a sustainable baseline for most brands." },
              { q: "What text should a sale banner include?", a: "Essential elements for a sale banner include the discount amount or offer structure (50% OFF, BOGO, etc.), a campaign name or type (Mega Sale, Flash Sale, Clearance), a brief supporting line (End of Season, Limited Items), a call to action (Shop Now, Get Offer), a validity or urgency marker (Ends Sunday, While Stocks Last), and brand identification (logo or store name). Optional additions include a promo code, specific product categories, and website URL." },
              { q: "Can promotional graphics be used for Google and Meta ads?", a: "Yes, with platform-specific adaptations. Meta (Facebook/Instagram) recommends minimal text coverage on ad creative — ideally under 20% of the image area — for maximum delivery. Google Display Network requires specific size variants (300×250px, 728×90px, 160×600px are the core sizes). Always check current platform ad creative specifications before exporting, as requirements update periodically. Use this template as your master design and create resized/simplified variants for ad placements." },
            ].map((paa, i) => (
              <div key={i} className="sp-paa-item">
                <h3>{paa.q}</h3>
                <p>{paa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="sp-final-cta">
        <div className="sp-container">
          <div className="sp-final-cta-inner">
            <div className="sp-final-cta-tag"><FaFire /> Limited: Free Forever</div>
            <h2>Your Next Promotion is 5 Minutes Away</h2>
            <p>
              Every day without a professional promotional graphic is a day your competitors are capturing customers who could be yours. Open the template now, customize your offer, and deploy across every channel before your next sale event.
            </p>
            <button
              className="sp-cta-primary sp-large"
              onClick={handleUseTemplate}
              disabled={isCreatingProject}
            >
              <FaTag /> Start Designing Free <FaArrowRight />
            </button>
            <div className="sp-final-checks">
              <span>✓ No credit card</span>
              <span>✓ No watermarks</span>
              <span>✓ Commercial use included</span>
              <span>✓ Cloud save automatically</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGIN MODAL ── */}
      {showLoginModal && (
        <div className="sp-modal-overlay">
          <motion.div className="sp-login-modal" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}>
            <button className="sp-modal-close" onClick={() => setShowLoginModal(false)}>
              <FaTimes />
            </button>
            <h1>SCENITH</h1>
            <p>Sign in to use this template</p>
            {loginError && <div className="sp-login-error">{loginError}</div>}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                handleLogin({ email: fd.get("email") as string, password: fd.get("password") as string });
              }}
            >
              <input type="email" name="email" placeholder="Email" required disabled={isLoggingIn} />
              <input type="password" name="password" placeholder="Password" required disabled={isLoggingIn} />
              <button type="submit" className="sp-cta-primary" disabled={isLoggingIn}>
                {isLoggingIn ? "Signing in..." : "Sign In"}
              </button>
            </form>
            <div className="sp-modal-divider">OR</div>
            <div id="googleSignInButton" />
            <p className="sp-modal-signup">
              New to SCENITH? <a href="/signup">Create free account</a>
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SalesPromotionTemplate;