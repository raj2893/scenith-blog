"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaEdit,
  FaTimes,
  FaDownload,
  FaCheck,
  FaLayerGroup,
  FaCode,
  FaMobile,
  FaCog,
  FaBell,
  FaShieldAlt,
  FaPlug,
  FaRocket,
  FaBolt,
  FaCrown,
  FaGlobe,
} from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../../styles/svg-library/SaaSUIIcons.css";
import DownloadModal from "@/app/components/DownloadModal";

interface ImageElement {
  id: number;
  name: string;
  category: string;
  cdnUrl: string;
  fileFormat: string;
  width: number | null;
  height: number | null;
  tags: string | null;
  isActive: boolean;
  displayOrder: number | null;
  createdAt: string;
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

const SaaSUIIconsPage: React.FC = () => {
  const router = useRouter();
  const [elements, setElements] = useState<ImageElement[]>([]);
  const [filteredElements, setFilteredElements] = useState<ImageElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedElementForDownload, setSelectedElementForDownload] =
    useState<ImageElement | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

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
          const lastName =
            nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
          setUserProfile({
            email: res.data.email || "",
            firstName,
            lastName,
            role: res.data.role || "BASIC",
          });
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, []);

  useEffect(() => {
    const fetchElements = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/image-editor/elements`
        );
        const saasUIElements = response.data.filter(
          (el: ImageElement) =>
            el.category.toLowerCase() === "saas interface ui icons" ||
            el.category.toLowerCase() === "saas ui interface icons" ||
            el.category.toLowerCase() === "saas interface" ||
            el.category.toLowerCase() === "saas ui icons"
        );
        setElements(saasUIElements);
        setFilteredElements(saasUIElements);
      } catch (error) {
        console.error("Error fetching SaaS UI elements:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchElements();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = elements.filter(
        (el) =>
          el.name.toLowerCase().includes(query) ||
          el.tags?.toLowerCase().includes(query) ||
          el.category.toLowerCase().includes(query)
      );
      setFilteredElements(filtered);
    } else {
      setFilteredElements(elements);
    }
  }, [searchQuery, elements]);

  const handleEditInEditor = async (element: ImageElement) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    setIsCreatingProject(true);
    try {
      const token = localStorage.getItem("token");
      const projectResponse = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        {
          projectName: `${element.name} UI Design`,
          canvasWidth: 1080,
          canvasHeight: 1080,
          canvasBackgroundColor: "#FFFFFF",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const projectId = projectResponse.data.id;
      const img = new Image();
      img.onload = async () => {
        const scale = 1.0;
        const displayWidth = img.naturalWidth * scale;
        const displayHeight = img.naturalHeight * scale;
        const layer = {
          id: `image-${Date.now()}`,
          type: "image",
          zIndex: 0,
          opacity: 1,
          x: Math.round(540 - displayWidth / 2),
          y: Math.round(540 - displayHeight / 2),
          width: displayWidth,
          height: displayHeight,
          scale,
          rotation: 0,
          visible: true,
          locked: false,
          src: element.cdnUrl,
          cropTop: 0,
          cropRight: 0,
          cropBottom: 0,
          cropLeft: 0,
        };
        const designJson = JSON.stringify({
          version: "1.0",
          pages: [
            {
              id: `page-${Date.now()}`,
              canvas: { width: 1080, height: 1080, backgroundColor: "#FFFFFF" },
              layers: [layer],
            },
          ],
        });
        await axios.put(
          `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
          { designJson },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        window.open(`/tools/image-editing/${projectId}/edit`, "_blank");
        setIsCreatingProject(false);
      };
      img.onerror = () => {
        setIsCreatingProject(false);
        alert("Failed to load the icon. Please try again.");
      };
      img.src = element.cdnUrl;
    } catch (error: any) {
      setIsCreatingProject(false);
      alert(error.response?.data?.message || "Failed to create project");
    }
  };

  const handleElementClick = (element: ImageElement) => {
    const slug = element.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    router.push(`/svg-library/${slug}`);
  };

  const handleLogin = async (formData: { email: string; password: string }) => {
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
      setUserProfile({
        email: userResponse.data.email || "",
        firstName: nameParts[0] || "",
        lastName: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginPrompt(false);
    } catch (error: any) {
      setLoginError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
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
      setUserProfile({
        email: userResponse.data.email || "",
        firstName: nameParts[0] || "",
        lastName: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginPrompt(false);
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
          client_id:
            "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
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
    if (showLoginPrompt) initializeGoogleSignIn();
  }, [showLoginPrompt, handleGoogleLogin]);

  return (
    <div className="saas-ui-icons-page">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://scenith.in/svg-library/bundled/saas-ui-interface-icons#webpage",
                url: "https://scenith.in/svg-library/bundled/saas-ui-interface-icons",
                name: "Free SaaS UI Interface Icons – 50+ SVG Icons for Apps, Dashboards & Web Products | Scenith",
                description:
                  "Download 50+ premium SaaS UI interface SVG icons completely free. Navigation, buttons, forms, modals, onboarding, billing, settings, notifications and 50+ UI component categories. Edit online, commercial use included, no attribution required.",
                isPartOf: { "@id": "https://scenith.in/#website" },
                breadcrumb: {
                  "@id": "https://scenith.in/svg-library/bundled/saas-ui-interface-icons#breadcrumb",
                },
                inLanguage: "en-US",
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://scenith.in/svg-library/bundled/saas-ui-interface-icons?search={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://scenith.in/svg-library/bundled/saas-ui-interface-icons#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
                  { "@type": "ListItem", position: 2, name: "SVG Library", item: "https://scenith.in/svg-library" },
                  { "@type": "ListItem", position: 3, name: "Bundled Icon Collections", item: "https://scenith.in/svg-library/bundled" },
                  { "@type": "ListItem", position: 4, name: "SaaS UI Interface Icons", item: "https://scenith.in/svg-library/bundled/saas-ui-interface-icons" },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://scenith.in/#website",
                url: "https://scenith.in",
                name: "Scenith",
                description: "Professional SVG icon library and online design tools for SaaS, web apps, and digital products",
                publisher: { "@id": "https://scenith.in/#organization" },
                inLanguage: "en-US",
              },
              {
                "@type": "Organization",
                "@id": "https://scenith.in/#organization",
                name: "Scenith",
                url: "https://scenith.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://scenith.in/logo.png",
                  width: 600,
                  height: 60,
                },
              },
              {
                "@type": "ItemList",
                name: "SaaS UI Interface Icons Collection",
                description: "Complete collection of SaaS UI and interface icons for web apps, dashboards, and design systems",
                numberOfItems: elements.length,
                itemListElement: elements.slice(0, 20).map((element, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "ImageObject",
                    "@id": `https://scenith.in/svg-library/${element.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                    name: element.name,
                    description: `${element.name} – Professional SaaS UI interface SVG icon for web applications, dashboards, and design systems`,
                    contentUrl: element.cdnUrl,
                    encodingFormat: element.fileFormat || "image/svg+xml",
                    width: element.width || 512,
                    height: element.height || 512,
                    license: "https://creativecommons.org/publicdomain/zero/1.0/",
                    acquireLicensePage: "https://scenith.in/svg-library/bundled/saas-ui-interface-icons",
                    creditText: "Scenith",
                    creator: { "@type": "Organization", name: "Scenith" },
                    copyrightNotice: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
                    keywords: `${element.name}, saas ui icon, interface icon, web app icon, ${element.tags || ""}`,
                  },
                })),
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Are these SaaS UI interface icons free to use commercially?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every SaaS UI interface icon in this collection is 100% free for both personal and commercial use. There are no attribution requirements, no subscription fees, no watermarks, and no download limits. You can use them in client projects, SaaS products, open-source apps, or enterprise software without restriction.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What types of UI interface icons are included in this SaaS collection?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The collection covers every major SaaS UI component category including navigation icons (menus, sidebars, breadcrumbs), form elements (inputs, checkboxes, toggles, dropdowns), modal and dialog icons, notification and alert icons, billing and subscription icons, user onboarding icons, settings and configuration icons, integration and API icons, authentication icons, dashboard widget icons, data table icons, and over 50 additional interface component categories.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use these icons directly in React, Vue, or Angular component libraries?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. All icons are available in SVG format, making them trivially importable into any JavaScript framework. You can inline them as React components, reference them as image sources, use them with icon libraries like react-icons, or integrate them into Storybook component libraries and Figma design systems.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are these SaaS UI icons compatible with Figma, Sketch, and Adobe XD?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. SVG icons can be imported directly into Figma, Sketch, Adobe XD, Framer, Penpot, and all other major design tools. Once imported you can recolor them using the design tool's native fill controls, resize them without quality loss, and add them to your shared component libraries or design tokens.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I customize the SaaS UI icons to match my brand?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Use Scenith's built-in online icon editor — no external software required. Open any icon directly from this page, change fill and stroke colors to match your brand palette, resize to any dimension, combine icons for custom compositions, and export as SVG, PNG, or JPG. Changes take seconds and the results are immediately download-ready.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are these UI icons optimized for dark mode SaaS interfaces?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every icon in the collection is built as a clean SVG with fully controllable fill and stroke colors. You can set icon colors to white, light gray, or any high-contrast value for dark mode interfaces, and use CSS variables or Tailwind dark: utilities to switch between light and dark variants dynamically.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do these SaaS UI icons follow accessibility best practices?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The icons are designed with clarity and legibility at small sizes in mind, supporting accessible interfaces. To fully comply with WCAG 2.1 AA, add role='img' and aria-label attributes to SVG elements in your implementation, ensure sufficient color contrast with backgrounds, and provide visible text labels alongside icons for critical actions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What makes SaaS UI interface icons different from general icon sets?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SaaS UI interface icons are specifically designed around the interaction patterns, component vocabulary, and functional requirements of web-based software products. Unlike general icon packs, they include niche but essential SaaS-specific symbols such as workspace switchers, plan upgrade indicators, API key management, webhook triggers, role-based access controls, trial countdown timers, churn prevention alerts, and product-led growth flows that generic icon sets simply don't cover.",
                    },
                  },
                ],
              },
              {
                "@type": "SoftwareApplication",
                name: "Scenith SaaS UI Icon Editor",
                applicationCategory: "DesignApplication",
                operatingSystem: "Web Browser",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  ratingCount: "3142",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
            ],
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="saas-hero">
        <div className="saas-hero__grid-bg" aria-hidden="true" />
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-label">
              <FaLayerGroup aria-hidden="true" />
              <span>SaaS · Interface · UI</span>
            </div>

            <h1>
              Free SaaS UI Interface Icons —{" "}
              <span className="h1-accent">50+ SVG Icons</span> for Modern Web
              Apps, Dashboards &amp; Design Systems
            </h1>

            <p className="hero-subtitle">
              The most complete SaaS UI icon library on the internet. Download
              50+ professionally crafted SVG icons covering every interface
              component your SaaS product needs — navigation bars, sidebars,
              modals, forms, notifications, billing flows, onboarding steps,
              settings panels, API integrations, role management, data tables,
              empty states, and dozens more. Built specifically for product
              designers, frontend engineers, and design-system architects who
              ship world-class SaaS products. Every icon is pixel-perfect,
              infinitely scalable, fully editable, dark-mode-ready, and free
              for unlimited commercial use — forever, with zero attribution
              required.
            </p>

            <div className="search-container">
              <FaSearch className="search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search: modal, sidebar, toggle, billing, onboarding, webhook, role, notification…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search SaaS UI interface icons by keyword"
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{elements.length || "1000"}+</span>
                <span className="stat-label">UI Icons</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Component Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">SVG</span>
                <span className="stat-label">Vector Format</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Commercial Use</span>
              </div>
            </div>

            <div className="hero-badges">
              <span className="hero-badge"><FaBolt aria-hidden="true" /> Instant Download</span>
              <span className="hero-badge"><FaCode aria-hidden="true" /> Framework-Ready SVG</span>
              <span className="hero-badge"><FaMobile aria-hidden="true" /> Dark Mode Ready</span>
              <span className="hero-badge"><FaCrown aria-hidden="true" /> Zero Attribution</span>
              <span className="hero-badge"><FaShieldAlt aria-hidden="true" /> Commercial License</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ICONS GRID ───────────────────────────────────────────────── */}
      <section className="elements-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-state" role="status">
              <div className="spinner" aria-label="Loading SaaS UI icons" />
              <p>Loading SaaS UI interface icons…</p>
            </div>
          ) : filteredElements.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon" aria-hidden="true">🔍</div>
              <h3>No SaaS UI icons found for "{searchQuery}"</h3>
              <p>Try: modal, sidebar, toggle, dropdown, webhook, billing, onboarding, avatar</p>
              <button onClick={() => setSearchQuery("")} className="reset-search-btn">
                Browse All SaaS UI Icons
              </button>
            </div>
          ) : (
            <>
              <div className="results-header">
                <p className="results-count">
                  <strong>{filteredElements.length}</strong> SaaS UI interface{" "}
                  {filteredElements.length === 1 ? "icon" : "icons"}
                  {searchQuery && (
                    <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
                  )}
                </p>
              </div>
              <div className="elements-grid" role="list">
                {filteredElements.map((element, index) => (
                  <motion.article
                    key={element.id}
                    className="element-card"
                    role="listitem"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: index * 0.008 }}
                  >
                    <div
                      className="element-preview"
                      onClick={() => handleElementClick(element)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleElementClick(element);
                      }}
                      aria-label={`View details for ${element.name}`}
                    >
                      <img
                        src={element.cdnUrl}
                        alt={`${element.name} – SaaS UI Interface SVG Icon for Web Apps and Design Systems`}
                        loading="lazy"
                        width={element.width || 200}
                        height={element.height || 200}
                      />
                    </div>
                    <div className="element-info">
                      <h3 className="element-name" title={element.name}>
                        {element.name}
                      </h3>
                      {element.tags && (
                        <p className="element-tags">
                          {element.tags.split(",").slice(0, 3).join(", ")}
                        </p>
                      )}
                      <div className="element-actions">
                        <button
                          className="download-btn-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isLoggedIn) { setShowLoginPrompt(true); return; }
                            setSelectedElementForDownload(element);
                            setDownloadModalOpen(true);
                          }}
                          title={`Download ${element.name} SVG, PNG or JPG`}
                          aria-label={`Download ${element.name}`}
                        >
                          <FaDownload aria-hidden="true" />
                        </button>
                        <button
                          className="edit-btn"
                          onClick={(e) => { e.stopPropagation(); handleEditInEditor(element); }}
                          disabled={isCreatingProject}
                          aria-label={`Customize ${element.name} in online editor`}
                        >
                          {isCreatingProject ? (
                            <><div className="btn-spinner" aria-hidden="true" /><span>Creating…</span></>
                          ) : (
                            <><FaEdit aria-hidden="true" /><span>Customize</span></>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── WHY CHOOSE ───────────────────────────────────────────────── */}
      <section className="saas-features-section">
        <div className="container">
          <header className="section-header">
            <h2>Why Product Teams Choose Our SaaS UI Interface Icon Library</h2>
            <p className="section-intro">
              Built by product designers who have shipped SaaS products at
              scale, this icon library solves the specific visual communication
              challenges that arise when designing complex, multi-feature web
              applications — problems that generic icon packs consistently fail
              to address.
            </p>
          </header>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🧭</div>
              <h3>Navigation &amp; Wayfinding Icons</h3>
              <p>
                Complete navigation icon suite covering every wayfinding pattern
                used in SaaS products: top navigation bars, collapsible
                sidebars, mega menus, hamburger menus, breadcrumb trails, tab
                bars, bottom navigation for mobile-first apps, contextual
                dropdown menus, command palettes, and keyboard shortcut
                indicators. Includes state variants for active, hover, disabled,
                and collapsed navigation items. Icons are designed to read
                clearly at 16px sidebar sizes while remaining bold at 24px+
                header sizes, making them versatile across responsive breakpoints.
                Perfect for multi-page SaaS applications, admin panels, developer
                tools, analytics platforms, CRM systems, and any product
                requiring clear information architecture communication.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">📋</div>
              <h3>Form &amp; Input Component Icons</h3>
              <p>
                Extensive form element icon library covering text inputs,
                password fields with reveal toggles, search boxes, multi-line
                textareas, number spinners, date pickers, time selectors, range
                sliders, single-select dropdowns, multi-select tags, checkbox
                groups, radio button clusters, toggle switches, file upload
                zones, rich text editors, code input fields, color pickers,
                phone number inputs with country flags, address autocomplete,
                credit card inputs, and signature fields. Each icon communicates
                not only the component type but also its current state — empty,
                filled, focused, validated, errored, loading, or disabled —
                enabling design systems to express the full interaction lifecycle
                without resorting to separate icon sets for each state.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🪟</div>
              <h3>Modal, Dialog &amp; Overlay Icons</h3>
              <p>
                Professional overlay component icons for every modal pattern
                used in modern SaaS UX: confirmation dialogs, alert modals,
                info dialogs, destructive action warnings, form modals,
                fullscreen overlays, side panels (drawers), slide-over sheets,
                bottom sheets for mobile, lightbox viewers, tooltip anchors,
                popover triggers, hover cards, right-click context menus, and
                command palette launchers. Includes open, close, minimize,
                maximize, and drag-handle icons designed to communicate
                dismissibility and interactivity at a glance. Widely used in
                Shadcn/UI implementations, Radix UI primitives, Headless UI
                components, and custom React modal systems.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🔔</div>
              <h3>Notification &amp; Alert System Icons</h3>
              <p>
                Comprehensive notification iconography covering every alerting
                pattern in the SaaS notification taxonomy: in-app notification
                bells, unread badge counters, toast notification types (success,
                error, warning, info, loading), banner alerts, inline field
                validation errors, system status banners, maintenance mode
                indicators, rate limit warnings, plan limit approach alerts,
                feature announcement popups, changelog notification dots, email
                notification preference icons, push notification permission
                prompts, digest email indicators, and Slack/Teams integration
                notification routing icons. Designed to communicate urgency
                levels clearly without generating alert fatigue in complex,
                multi-feature SaaS dashboards.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">💳</div>
              <h3>Billing, Subscription &amp; Pricing Icons</h3>
              <p>
                Dedicated billing UI icon collection addressing the specific
                visual vocabulary of SaaS monetization: plan tier indicators
                (free, starter, growth, enterprise), upgrade prompts and
                upsell nudges, feature gating lock icons, trial countdown timers,
                credit card management, payment method selection (card, ACH,
                SEPA, PayPal, Apple Pay), invoice download buttons, usage meter
                bars, seat count displays, billing cycle toggle (monthly/annual),
                promo code inputs, tax calculation indicators, subscription
                pause/cancel flows, downgrade warnings, reactivation prompts,
                receipt history tables, dunning flow icons, and webhook event
                indicators for Stripe, Paddle, and Chargebee integrations. These
                icons directly reduce friction in the revenue-critical moments of
                your product experience.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🚀</div>
              <h3>User Onboarding &amp; Activation Icons</h3>
              <p>
                Full product-led growth icon set targeting the onboarding and
                activation lifecycle: welcome screens, progress checklists,
                setup wizards, multi-step progress bars, milestone completion
                celebrations, empty state illustrations, first-run tooltips,
                interactive product tours, feature spotlight indicators, sample
                data placeholders, invite-teammate prompts, workspace setup
                flows, integration connection steps, API key generation guidance,
                data import wizards, template gallery pickers, quick-start
                action cards, role selection screens, use-case personalization
                flows, and activation percentage meters. Built to support
                onboarding orchestration tools like Appcues, Userflow,
                Chameleon, and custom onboarding implementations.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">⚙️</div>
              <h3>Settings, Configuration &amp; Preferences Icons</h3>
              <p>
                In-depth settings panel iconography covering every configuration
                surface in mature SaaS products: general settings, account
                preferences, notification preferences, privacy controls, security
                settings (2FA, SSO, SAML, session management), appearance
                customization (theme, density, font size), language and locale
                selection, time zone configuration, keyboard shortcut editors,
                data export controls, audit log viewers, custom domain setup,
                email template editors, workflow rule builders, automation
                trigger configuration, webhook endpoint management, API rate
                limit displays, environment switchers (production, staging,
                development), feature flag panels, and A/B test configuration
                interfaces. Every icon is designed to look authoritative yet
                approachable in the sensitive settings context.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🔐</div>
              <h3>Authentication &amp; Security Icons</h3>
              <p>
                Security-focused UI icon collection for authentication flows and
                access management surfaces: login forms, signup pages, password
                strength indicators, password reveal toggles, forgot password
                flows, magic link confirmation screens, OAuth provider buttons
                (Google, GitHub, Microsoft, Apple), multi-factor authentication
                (SMS, TOTP, hardware key, passkey), session management tables,
                device trust indicators, IP allowlisting configuration, SSO
                provider setup, SCIM directory sync, role-based access control
                (RBAC) matrix displays, permission scopes, API key creation and
                rotation, secret management, audit trail logs, suspicious
                activity alerts, account lockout states, and GDPR consent
                management. Critical for enterprise SaaS products selling to
                security-conscious buyers.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🔌</div>
              <h3>Integration, API &amp; Webhook Icons</h3>
              <p>
                Developer-experience focused icon set for integration surfaces
                and API management UIs: integration marketplace grids,
                connection status indicators (connected, disconnected,
                re-authorization needed), OAuth flow steps, API key displays,
                webhook endpoint management, event log viewers, payload
                inspector panels, retry queue indicators, sync status meters,
                field mapping interfaces, data transformation flow icons,
                Zapier/Make/n8n trigger icons, native integration badges,
                embedded iPaaS indicators, rate limit gauges, SDK language
                selectors, API documentation link icons, changelog entry markers,
                deprecation warning banners, and version selector controls.
                Essential for PLG and developer-tools SaaS companies who list
                integrations as a primary acquisition channel.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">👥</div>
              <h3>Team, Workspace &amp; Collaboration Icons</h3>
              <p>
                Multi-tenancy and collaboration icon library addressing the full
                organizational management spectrum: workspace switcher dropdowns,
                organization logos, team member avatars, presence indicators
                (online, away, busy, offline), role badges (admin, member,
                viewer, guest), invitation management, pending invite indicators,
                bulk member import, seat usage meters, guest access warnings,
                shared workspace icons, comment and annotation threads, @mention
                pickers, assignment indicators, watcher lists, activity feeds,
                changelog entries, version history timelines, conflict resolution
                indicators, co-editing cursors, shared link generation, and
                permission inheritance diagrams. Designed for B2B SaaS products
                with complex organizational hierarchies.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">📊</div>
              <h3>Data Table &amp; List View Icons</h3>
              <p>
                Comprehensive data display icon set for tables, lists, and grid
                views: sortable column headers (ascending, descending, neutral),
                column visibility toggles, column reorder handles, row selection
                checkboxes, bulk action bars, inline edit pencils, row expand
                indicators, row detail panels, pagination controls, page size
                selectors, infinite scroll indicators, virtualization load
                markers, empty state illustrations, filter panel toggles,
                advanced filter builders, saved filter badges, search highlight
                indicators, column freeze pins, sticky header markers,
                conditional formatting triggers, CSV export buttons, clipboard
                copy indicators, row drag handles, group-by collapse controls,
                sub-row expand icons, and tree-view indent markers. Used in
                every SaaS product category from CRMs to admin panels.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🎨</div>
              <h3>Instantly Customizable via Online Editor</h3>
              <p>
                Every SaaS UI icon is directly editable in Scenith's built-in
                online editor with zero software installation required. Change
                fill and stroke colors to match your exact brand hex codes in
                seconds, scale icons to precise pixel dimensions without any
                quality degradation, combine multiple UI icons into custom
                composite symbols for unique product personas, add text labels
                and version markers, apply shadow and glow effects for
                highlighted states, rotate and mirror icons for RTL interface
                support, adjust stroke weight for different density settings,
                and export in SVG for web use, PNG with alpha transparency for
                presentations, or JPG for documentation — all without leaving
                your browser. The complete workflow from browsing to
                export-ready customized icon takes under 60 seconds.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── ICON CATEGORIES ─────────────────────────────────────────── */}
      <section className="icon-categories-section">
        <div className="container">
          <header className="section-header">
            <h2>Complete SaaS UI Interface Icon Category Directory</h2>
            <p className="section-intro">
              Every icon category is organized around real SaaS product surfaces,
              not abstract groupings — so you can find exactly what you need for
              the specific screen or component you're designing.
            </p>
          </header>
          <div className="categories-grid">

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🧭</span>
              <h3>Navigation Components</h3>
              <p>Top nav bars, sidebars, breadcrumbs, tab bars, command palettes, hamburger menus, mega menus, back buttons, home indicators, step navigators, wizard steps, and keyboard shortcut legends. State variants included for active, collapsed, and disabled navigation items across desktop and mobile breakpoints.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📋</span>
              <h3>Forms &amp; Inputs</h3>
              <p>Text fields, password inputs, search bars, dropdowns, multi-selects, checkboxes, radios, toggles, sliders, file uploaders, date pickers, time inputs, color pickers, phone inputs, rich text editors, code editors, signature pads, and all corresponding validation state icons (success, error, warning, loading, disabled).</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🪟</span>
              <h3>Modals &amp; Overlays</h3>
              <p>Confirmation dialogs, alert modals, form modals, fullscreen overlays, drawers, slide-over panels, bottom sheets, lightboxes, tooltips, popovers, hover cards, context menus, command palettes, and all close/dismiss/drag-handle controls. Overlay backdrop indicators and stacking order icons included.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🔔</span>
              <h3>Notifications &amp; Alerts</h3>
              <p>Notification bells, badge counters, toast variants (success/error/warning/info), banners, inline errors, system status indicators, maintenance alerts, rate limit warnings, plan limit nudges, changelog dots, email preferences, push permission prompts, and severity level icons for incident management.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">💳</span>
              <h3>Billing &amp; Subscriptions</h3>
              <p>Plan tier badges, upgrade CTAs, feature gates, trial timers, payment methods, invoice tables, usage meters, seat counters, billing cycle toggles, promo code inputs, dunning alerts, reactivation prompts, receipt history, and Stripe/Paddle/Chargebee webhook event indicators.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🚀</span>
              <h3>Onboarding &amp; Activation</h3>
              <p>Welcome screens, setup checklists, progress wizards, completion celebrations, empty states, product tours, feature spotlights, sample data banners, invite prompts, workspace setup steps, template galleries, role pickers, use-case selectors, and PLG activation percentage meters.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">⚙️</span>
              <h3>Settings &amp; Preferences</h3>
              <p>Account settings, notification prefs, privacy controls, appearance options, language selectors, timezone pickers, keyboard shortcut editors, data export, audit logs, custom domains, email templates, workflow builders, webhook endpoints, API panels, environment switchers, and feature flag toggles.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🔐</span>
              <h3>Auth &amp; Security</h3>
              <p>Login/signup forms, password strength meters, MFA setup, OAuth providers, SSO/SAML configuration, session management, device trust, IP allowlists, RBAC matrices, permission scopes, API key management, audit trail logs, suspicious activity alerts, passkey enrollment, and GDPR consent icons.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🔌</span>
              <h3>Integrations &amp; API</h3>
              <p>Integration marketplace, connection status, OAuth flows, API keys, webhook management, event logs, payload inspector, field mapping, data transformation, Zapier/Make triggers, native integration badges, rate limit gauges, SDK language selectors, API versioning, and deprecation warnings.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">👥</span>
              <h3>Teams &amp; Workspaces</h3>
              <p>Workspace switcher, org logos, member avatars, presence dots, role badges, invite management, bulk import, seat meters, guest access warnings, comment threads, @mentions, assignment icons, activity feeds, shared links, permission diagrams, and co-editing presence cursors.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📊</span>
              <h3>Tables &amp; Data Views</h3>
              <p>Sort indicators, column controls, row selection, bulk actions, inline edit, row expand, pagination, filter panels, saved filters, empty states, CSV export, column freeze, group-by collapse, sub-row expand, tree-view indent, conditional formatting, and virtualization load markers.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📱</span>
              <h3>Mobile &amp; Responsive UI</h3>
              <p>Bottom navigation bars, floating action buttons, swipe gesture indicators, pull-to-refresh spinners, tab bars, mobile search, app store badges, deep-link indicators, push notification previews, mobile-specific gesture hints, and adaptive layout breakpoint markers for responsive SaaS apps.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🖱️</span>
              <h3>Buttons &amp; Controls</h3>
              <p>Primary, secondary, ghost, and destructive button states. Icon-only buttons, split buttons, button groups, loading spinners, success confirmations, toggle buttons, segmented controls, floating action buttons, pill buttons, and all hover/focus/active/disabled state variants.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🗂️</span>
              <h3>File &amp; Media Management</h3>
              <p>File upload zones, drag-and-drop areas, upload progress bars, file type indicators, thumbnail previews, gallery grids, media library, attachment lists, document viewers, version history, file sharing, download managers, storage quota meters, and file permission icons.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🔍</span>
              <h3>Search &amp; Discovery</h3>
              <p>Global search bars, instant search dropdowns, search result highlights, filter chips, faceted search panels, sort controls, recent searches, saved searches, autocomplete suggestions, no-results states, and advanced query builder icons for powerful SaaS search UX.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📈</span>
              <h3>Dashboard Widgets</h3>
              <p>Widget containers, drag handles, resize controls, fullscreen toggles, refresh buttons, time range selectors, comparison toggles, drill-down indicators, data source badges, last-updated timestamps, stale-data warnings, and custom widget builder icons for dashboard canvas editors.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🤖</span>
              <h3>AI &amp; Automation Features</h3>
              <p>AI assistant icons, magic/sparkle indicators, AI suggestion bubbles, auto-fill triggers, smart default markers, AI confidence scores, model selector dropdowns, prompt history, token usage meters, AI content labels, automation rule builders, trigger/action flow connectors, and no-code workflow canvas icons.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📝</span>
              <h3>Content &amp; Editor UI</h3>
              <p>Rich text toolbar icons, block type selectors, inline formatting controls, heading levels, list types, embed blocks, image alignment, link insertion, mention triggers, emoji pickers, table insertion, code block toggles, full-screen editor modes, word count indicators, auto-save status, and collaborative editing presence icons.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">🌐</span>
              <h3>Localization &amp; Accessibility</h3>
              <p>Language selector flags, RTL layout toggle, text direction indicators, font size adjustment, contrast mode toggle, screen reader label hints, keyboard navigation indicators, reduced motion toggles, captions/subtitles controls, and WCAG compliance status indicators for inclusive SaaS design.</p>
            </article>

            <article className="category-card">
              <span className="cat-emoji" aria-hidden="true">📦</span>
              <h3>Empty States &amp; Placeholders</h3>
              <p>First-use empty state illustrations, search-no-results indicators, loading skeleton screens, error state icons, permission-denied screens, offline indicators, connection-lost banners, data-loading spinners, timeout retry prompts, and 404/500 error page icons that maintain brand voice during failure states.</p>
            </article>

          </div>
        </div>
      </section>

      {/* ─── USE CASES ───────────────────────────────────────────────── */}
      <section className="use-cases-section">
        <div className="container">
          <header className="section-header">
            <h2>Who Uses Our SaaS UI Interface Icon Library — and How</h2>
            <p className="section-intro">
              From bootstrapped indie SaaS founders to enterprise product teams,
              this icon library serves every segment of the SaaS design and
              engineering ecosystem.
            </p>
          </header>
          <div className="use-cases-grid">

            <article className="use-case-card">
              <h3>⚛️ React &amp; Next.js Component Libraries</h3>
              <p>
                Frontend teams building shared component libraries in React,
                Next.js, Remix, or Astro can import these SVG icons directly as
                React components or reference them via the public asset folder.
                Whether your design system uses Radix UI primitives, Shadcn/UI
                components, Material UI, or a fully custom component library,
                these icons slot in without any transformation. Set colors via
                CSS variables or Tailwind's text-* and fill-* utilities, control
                sizes with w- and h- classes, and compose them inside button,
                badge, and navigation components. Because they're plain SVGs,
                they work identically in server-side rendered pages, static
                exports, and client-side transitions — making them suitable for
                the full range of modern React deployment patterns. Teams
                building Storybook documentation can add these icons directly to
                their icon story with zero configuration overhead, and the
                SVG-based approach makes them trivial to type-check and tree-shake
                alongside your component code.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🎨 Figma Design System Libraries</h3>
              <p>
                Design system teams maintaining Figma component libraries can
                import the entire SaaS UI icon collection as a Figma library,
                organize icons into frames by category, and publish them as
                shared components accessible to every designer on the team.
                Because they're SVG, Figma respects all path details at any
                zoom level, and you can detach instances to modify individual
                paths, swap color styles using Figma variables, or create
                multi-state component variants for hover, active, and disabled
                icon states. The consistent stroke weights and grid alignment
                across the collection mean icons from different categories slot
                seamlessly into the same UI designs without jarring visual
                inconsistencies. Design tokens teams can map icon colors to
                semantic tokens (icon-primary, icon-secondary, icon-danger) for
                automatic theming across light, dark, and high-contrast modes.
                Ideal for teams following Brad Frost's Atomic Design methodology
                or using Supernova, Specify, or Tokens Studio for design-to-code
                handoff.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🏗️ B2B SaaS Admin Panels &amp; Dashboards</h3>
              <p>
                Admin panels are the most icon-dense surfaces in any SaaS product
                — every row in every table has action icons, every sidebar item
                has a leading icon, and every status cell needs a visual indicator.
                This collection provides the comprehensive icon vocabulary needed
                to build admin panels that are both visually cohesive and
                functionally clear, from the top-level workspace navigation down
                to inline table action menus, bulk selection toolbars, and
                settings panel submenus. Particularly well-suited for admin
                panels built with React Admin, Refine, AdminJS, or custom Django/
                Rails admin implementations. The data table icon category alone
                covers 40+ distinct icon needs that arise in data-heavy admin
                surfaces, including multi-level sort indicators, column visibility
                toggles, row selection states, and export format selectors that
                generic icon packs don't even acknowledge as distinct visual
                concepts.
              </p>
            </article>

            <article className="use-case-card">
              <h3>📱 Mobile SaaS Apps (React Native &amp; PWA)</h3>
              <p>
                Mobile product teams building React Native apps or Progressive
                Web Apps can leverage these icons as core assets in their mobile
                UI. SVG icons render crisp on any device pixel ratio — from
                standard 1x Android displays to 3x iPhone Pro Retina screens —
                with zero pixelation. The mobile-specific category covers
                bottom navigation patterns, floating action buttons, swipe
                gesture cues, pull-to-refresh indicators, and mobile-first
                settings surfaces that follow iOS and Android platform conventions.
                For PWA implementations, icons can be referenced in the manifest
                and embedded in service worker precache manifests, ensuring they
                load instantly even in offline states. React Native teams can use
                react-native-svg to render these icons as native SVG components
                with full Animated API support for gesture-driven interactions.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🛒 Developer Tools &amp; API Platforms</h3>
              <p>
                Developer tools products — API platforms, database GUIs, CI/CD
                pipelines, infrastructure dashboards, observability tools, and
                developer portals — have a distinct visual language that demands
                icons beyond what standard design icon sets offer. This collection
                specifically addresses developer-facing UI needs: API key
                management surfaces, webhook configuration panels, environment
                variable editors, event log explorers, request/response payload
                viewers, SDK language selectors, rate limit gauges, endpoint
                documentation link icons, version selector controls, deprecation
                banners, and changelog entry markers. Products built on developer
                platforms like Vercel, Netlify, Render, Railway, or custom
                Kubernetes UIs will find these icons align closely with the
                conventions their users expect, reducing the learning curve and
                building trust with technically sophisticated audiences.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🚀 Product-Led Growth &amp; PLG Flows</h3>
              <p>
                PLG SaaS products live and die by their in-product conversion
                experience, and the quality of iconography in onboarding
                checklists, upgrade prompts, feature announcement modals, and
                empty state CTAs directly impacts activation and expansion
                revenue. This collection provides a complete visual language for
                every PLG moment: the welcome screen that sets first impressions,
                the setup checklist that drives initial activation, the feature
                gate that communicates upgrade value, the usage meter that creates
                upgrade urgency, and the success celebration that reinforces
                habit formation. Specifically optimized for PLG orchestration
                tools like Appcues, Userflow, Pendo, Chameleon, and Frigade, with
                icon styles clean enough to work inside overlaid product tour
                tooltips without overwhelming the underlying UI context.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🏢 Enterprise SaaS &amp; Internal Tools</h3>
              <p>
                Enterprise SaaS products serving Fortune 500 procurement teams
                need icons that communicate professionalism, security
                consciousness, and technical depth. The auth and security icon
                category specifically addresses enterprise SSO/SAML setup, SCIM
                directory provisioning, role-based access control matrices, audit
                trail interfaces, and compliance reporting surfaces that
                enterprise security teams scrutinize during vendor evaluations.
                Internal tooling teams at large companies building Retool, Appsmith,
                or custom React dashboards for internal operations also benefit
                from the data table, settings, and integration icon categories
                that cover the dense, function-first UI patterns common in
                internal tools. The neutral, professional aesthetic of the
                collection fits enterprise brand guidelines without requiring
                extensive customization.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🎓 EdTech &amp; Learning Management Platforms</h3>
              <p>
                EdTech SaaS products have unique UI needs that blend productivity
                tool patterns with consumer app engagement patterns. Course
                navigation, lesson completion indicators, quiz submission flows,
                progress tracking, certificate generation, cohort management,
                assignment submission, peer review workflows, discussion threads,
                live session joining, recording playback, and LMS gradebook views
                all benefit from having dedicated, clear icons that communicate
                the educational context. The onboarding icon category is
                particularly useful for student welcome flows and instructor
                course-setup wizards. The team and workspace icons address the
                cohort and classroom management surfaces in B2B EdTech products
                selling to corporate L&amp;D teams, universities, and coding bootcamps.
              </p>
            </article>

            <article className="use-case-card">
              <h3>🏥 HealthTech &amp; HIPAA-Compliant SaaS</h3>
              <p>
                Healthcare SaaS products require icons that project trustworthiness
                and clinical professionalism while remaining compliant with
                accessibility standards required in regulated environments. The
                security icon category provides all HIPAA-relevant UI elements:
                MFA enrollment, session timeout warnings, access audit trails,
                consent management, and data export controls. The settings and
                preferences icons support patient portal customization and
                provider workflow configuration. The notification icons cover
                clinical alert severity levels that must be visually distinct
                even for users with color vision deficiencies. Clean, unambiguous
                icon shapes that hold up at small sizes in clinical information
                dense interfaces are essential in EHR, telehealth, practice
                management, and health data platform products.
              </p>
            </article>

            <article className="use-case-card">
              <h3>💼 CRM &amp; Sales Intelligence Platforms</h3>
              <p>
                CRM products are icons-per-screen champion — contact cards,
                deal pipeline stages, activity timeline entries, email tracking
                indicators, call log icons, task assignment markers, territory
                map controls, forecast category badges, and quota attainment
                meters each need distinct, recognizable icons that sales reps can
                parse at a glance between customer calls. This collection provides
                the full CRM UI vocabulary including the table action icons used
                in contact list views, the notification icons for deal stage
                change alerts, the settings icons for workflow automation
                configuration, and the integration icons for connecting email,
                calendar, and telephony providers. Well-suited for products built
                as Salesforce AppExchange apps, HubSpot marketplace integrations,
                or standalone CRM products competing in the SMB sales tool market.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ─── DEEP SEO CONTENT ──────────────────────────────────────────── */}
      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">

            <h2>
              The Definitive Guide to SaaS UI Interface Icons in 2026 — Design,
              Implementation, and Business Impact
            </h2>

            <div className="content-block">
              <h3>What Makes SaaS UI Icons Different from General-Purpose Icon Sets</h3>
              <p>
                The SaaS icon category is frequently conflated with general
                "interface icons" or "UI icons," but the two are meaningfully
                different in ways that matter enormously for product quality. A
                general-purpose icon set is designed around the lowest common
                denominator of interface needs — actions like save, delete,
                share, and settings that appear across every digital product
                category from e-commerce to gaming to social media. SaaS UI
                interface icons, by contrast, are designed around the specific
                vocabulary of web-based software products delivered on a
                subscription model. The distinctions are subtle but consequential.
                A generic icon set offers one or two "notification" icons. A SaaS
                UI icon set needs to differentiate between an in-app notification
                bell, a toast message, a system status banner, a plan limit
                warning, a trial expiration countdown, a changelog announcement
                dot, and a dunning recovery prompt — each of which appears in a
                different product context and needs to communicate a different
                level of urgency and action requirement. Similarly, billing icons
                in a general icon set might stop at a credit card symbol. SaaS
                billing icons need to cover monthly-versus-annual toggle, seat
                count display, usage meter approaching limit, feature gate lock
                with upgrade CTA, invoice download, payment method selection,
                and proration explanation. The level of specificity demanded by
                modern SaaS product design makes purpose-built SaaS UI icon
                libraries the only practical choice for teams building serious
                products. Generic icon packs force designers to compromise on
                visual communication, use off-metaphor symbols that confuse users,
                or invest significant custom design time in filling obvious gaps —
                all of which degrade product quality and slow shipping velocity.
              </p>
            </div>

            <div className="content-block">
              <h3>The Compounding Business Value of Professional SaaS UI Iconography</h3>
              <p>
                The business case for investing in high-quality SaaS UI icons
                extends well beyond aesthetics. Conversion rates, activation
                rates, feature adoption, and support ticket volume are all
                measurably affected by the quality and clarity of UI iconography
                in SaaS products. Consider the activation funnel: a new user
                lands in your product and encounters an onboarding checklist.
                If the checklist items use clear, purpose-specific icons that
                instantly communicate what each step involves — a person-plus
                icon for "invite your team," a plug icon for "connect your first
                integration," a chart icon for "view your first report" — users
                complete more steps and reach activation faster. If the checklist
                uses generic or ambiguous icons, users spend cognitive effort
                deciphering rather than doing, and activation rates suffer.
                Research from SaaS product analytics platforms consistently shows
                that UI clarity improvements in onboarding flows produce
                activation rate lifts of 10 to 30 percent. Applied to a SaaS
                product with 500 new signups per month at a $50/month average
                contract value, a 20 percent activation improvement represents
                $60,000 in incremental annual recurring revenue from a UI
                investment that can be made in a single sprint. The billing surface
                compounds this further: upgrade prompts with clear, professionally
                designed plan comparison icons and feature gate visuals produce
                significantly higher conversion rates than text-heavy or
                icon-sparse upgrade flows. Every feature gate icon that clearly
                communicates "this is available in the next plan" is a micro-
                conversion opportunity that compounds across thousands of user
                sessions per month. Professional SaaS UI icons are not a
                discretionary aesthetic investment — they are a direct lever on
                revenue metrics that every growth-oriented SaaS team should
                prioritize.
              </p>
            </div>

            <div className="content-block">
              <h3>How to Integrate SaaS UI SVG Icons into React and Next.js Applications</h3>
              <p>
                Integrating SVG-based SaaS UI icons into a React or Next.js
                application is straightforward, but there are multiple approaches
                with different trade-offs worth understanding before committing
                to an implementation strategy. The simplest approach is treating
                icons as static assets in your public folder, importing them as
                src values in img tags, and controlling their appearance purely
                through CSS filter or background-image techniques. This works but
                severely limits your ability to dynamically change icon colors
                based on component state, limiting the utility of the icon system.
                A better approach is using React's SVG import capabilities —
                in Next.js with @svgr/webpack configured, you can import SVG
                files directly as React components with import ReactComponent as
                IconName syntax, which gives you full access to pass className
                props, style props, and SVG attribute overrides at the component
                call site. This enables patterns like using Tailwind's fill-current
                and text-* utilities to inherit icon colors from parent components,
                making icon color respond automatically to theme changes, hover
                states, and dark mode toggles without any additional icon-specific
                code. For large icon collections, consider creating an icon
                registry — a central icons.ts file that maps string keys to
                imported SVG components — enabling you to dynamically render
                any icon by name, which dramatically simplifies rendering
                database-driven navigation menus, user-configurable dashboard
                widgets, and admin interfaces where icon selections may be
                stored as configuration data. The SVG sprite approach, where
                all icons are embedded in a single hidden SVG sprite in the
                document head and referenced with use href elements, remains
                the highest-performance approach for icon-heavy interfaces,
                reducing HTTP requests to zero after initial page load and
                enabling CSS-based theming through currentColor inheritance.
              </p>
            </div>

            <div className="content-block">
              <h3>Building a SaaS Design System with a Consistent Icon Language</h3>
              <p>
                A design system without a coherent icon language is incomplete.
                Icons are arguably the most frequently encountered design tokens
                in a SaaS product — they appear in every button, every navigation
                item, every form field label, every notification, every table
                row action, and every settings panel. Getting icon language right
                in your design system pays dividends across every surface in your
                product for as long as the product exists. The foundational
                decisions are style (outlined versus filled versus duotone),
                stroke weight (typically 1.5px for a refined look, 2px for a
                bold look), corner radius (sharp for professional/technical,
                slightly rounded for friendly, fully rounded for playful), grid
                (24x24 is the most common for SaaS), and padding (2px inset from
                the artboard edge is standard). Once these parameters are fixed,
                every icon in your system should be validated against them before
                being approved — a single icon with different stroke weights or
                inconsistent corner radii breaks the visual harmony of the entire
                interface even if the individual icon looks fine in isolation.
                Semantic naming is equally important: icons should be named for
                what they mean in your product context, not what they look like.
                An icon named "three-horizontal-lines" tells engineers nothing;
                an icon named "menu" or "sidebar-toggle" tells them exactly
                where to use it. Define allowed-use documentation for each icon
                in your design system specifying which components and contexts
                each icon should appear in, preventing the gradual semantic drift
                where the same icon ends up meaning five different things in
                different parts of the product — a confusion pattern that
                accumulates silently until user research surfaces it as a
                significant comprehension problem.
              </p>
            </div>

            <div className="content-block">
              <h3>Accessibility-First Approach to SaaS UI Icons</h3>
              <p>
                Icon accessibility is among the most frequently neglected aspects
                of SaaS UI development, and the consequences for users with
                disabilities are significant. Screen reader users, keyboard-only
                navigators, users with low vision, and users with cognitive
                disabilities all interact with icon-heavy SaaS interfaces, and
                the difference between an accessible and inaccessible icon
                implementation can mean the difference between full independence
                and complete inability to use the product. The implementation
                requirements are specific. Decorative icons that exist purely
                for visual reinforcement alongside text labels should be hidden
                from the accessibility tree with aria-hidden="true" — without
                this, screen readers will announce both the icon and the adjacent
                text label, creating redundant and confusing announcements. Icons
                that function as standalone interactive controls — icon-only
                buttons, icon-only links, icon-only tab items — must have
                accessible labels via aria-label on the button element or
                visually-hidden span text inside the button that screen readers
                can announce. SVG icons used as standalone img equivalents should
                carry role="img" and aria-label attributes with descriptive text
                that communicates the icon's meaning in context, not its visual
                appearance. Color should never be the sole communicator of icon
                state — a red icon indicating an error must also differ in shape
                from a green icon indicating success, ensuring color-blind users
                receive the same information as sighted users. Focus indicators
                on interactive icon controls must meet WCAG 2.1's 3:1 minimum
                contrast ratio for focus ring visibility, and touch targets
                around icon controls must be at least 44x44 pixels even if the
                icon itself is 16x16 pixels. WCAG 2.2's new guideline 2.5.8 now
                requires minimum 24x24 CSS pixel click targets even for small
                component icons, making this a compliance requirement rather than
                a courtesy for many SaaS products serving government or education
                buyers.
              </p>
            </div>

            <div className="content-block">
              <h3>SaaS UI Icons in the Age of AI-Augmented Product Design</h3>
              <p>
                The rise of AI features in SaaS products in 2025 and 2026 has
                created an entirely new category of UI icon needs that didn't
                exist two years ago. Every SaaS product is now racing to add
                AI-powered features — AI writing assistants, smart data analysis,
                automated workflow suggestions, predictive analytics, AI-generated
                content, copilot sidebar experiences, and natural language query
                interfaces. Each of these feature types needs iconographic
                representation that communicates the AI nature of the feature
                without causing confusion about what is human-generated versus
                AI-generated, what is deterministic versus probabilistic, and
                what requires human review versus what can be acted on directly.
                The magic wand or sparkle icon has become the de facto standard
                for "AI-powered action" across the SaaS industry, but the
                vocabulary needs to expand. AI confidence indicators, model
                selection dropdowns, prompt history icons, token usage meters,
                hallucination warning indicators, human-in-the-loop review
                prompts, AI-generated content badges, regeneration buttons,
                thumbs-up/thumbs-down feedback controls for RLHF, and AI feature
                toggle switches all need distinct icon representations that are
                now essential parts of any complete SaaS UI icon system. Our AI
                and automation icon category addresses this emerging need with
                icons designed specifically for 2026 SaaS product patterns,
                covering not just the sparkle-and-wand aesthetic but the full
                range of AI interaction patterns that sophisticated AI-augmented
                SaaS products need to communicate clearly and honestly to their
                users.
              </p>
            </div>

            <div className="content-block">
              <h3>Dark Mode Implementation for SaaS UI Icons — A Technical Deep Dive</h3>
              <p>
                Dark mode has evolved from a niche preference to a standard
                expectation for B2B SaaS products, with over 70% of developer
                tool users and a growing majority of all SaaS users preferring
                dark or system-adaptive themes according to 2025 usage data.
                Implementing dark-mode-compatible icons correctly requires
                understanding how SVG color inheritance works with CSS theming
                systems. The currentColor approach — setting SVG fill and stroke
                attributes to currentColor rather than explicit hex values, and
                controlling icon color purely through the CSS color property on
                a parent element — is the most maintainable implementation for
                themed icon systems. With Tailwind CSS, this means using text-*
                utilities on the parent and fill-current on the SVG, enabling
                dark: prefix variants to switch icon colors automatically.
                For CSS variable based systems, define a semantic icon color
                palette with tokens like --icon-primary, --icon-secondary,
                --icon-muted, --icon-danger, and --icon-success, and override
                these in a [data-theme="dark"] or .dark selector. This separates
                icon color decisions from component-level styling, making global
                theme changes instantaneous without touching icon implementation
                code. For icons with multiple path colors — duotone icons, icons
                with background fills, icons with strokes and fills that need
                to respond differently to theme changes — use CSS classes on
                individual SVG paths to map to different semantic tokens. Avoid
                hardcoding any color values inside SVG files destined for use in
                a themed SaaS product; every hardcoded color is a future dark-mode
                regression waiting to happen as themes evolve.
              </p>
            </div>

            <div className="content-block">
              <h3>Performance Optimization for Icon-Heavy SaaS Dashboards</h3>
              <p>
                SaaS dashboards routinely display hundreds or even thousands of
                icons simultaneously — a data table with 100 rows, each with
                4 action icons, already means 400 SVG elements in the DOM,
                and when combined with navigation icons, status indicators,
                notification badges, and button icons, a complex SaaS admin
                interface can easily contain 50+ SVG elements in a single
                render. At this scale, icon implementation decisions have
                measurable impact on paint performance, memory usage, and scroll
                smoothness. The SVG sprite technique deserves serious consideration
                for icon-dense SaaS applications: all icons are defined once in
                a hidden SVG sprite in the document root, and each icon usage
                is a use element that references the sprite by ID. This approach
                means the browser only parses each icon path once regardless of
                how many times it's used, and the DOM footprint of each icon
                instance is a single lightweight use element rather than a full
                SVG with nested path elements. For React applications, this is
                implementable as a global SVG sprite that Next.js injects into
                the document layout, combined with a reusable Icon component that
                accepts a name prop and renders the appropriate use reference.
                For virtualized data tables rendering thousands of rows, ensure
                icon rendering is memoized — each table row icon should not
                re-render unless the underlying data changes, and icon components
                should be wrapped in React.memo with careful prop comparison.
                If your SaaS dashboard loads significantly faster after switching
                icon implementation, ship it — milliseconds of render time
                compound into seconds of perceived lag in data-heavy admin
                interfaces, and slow admin panels are a persistent source of
                churn among power users.
              </p>
            </div>

            <div className="content-block">
              <h3>Internationalization and RTL Support for SaaS UI Icons</h3>
              <p>
                SaaS products with global ambitions must account for right-to-left
                language support from the first day of design system construction,
                because retrofitting RTL support into a mature icon and layout
                system is dramatically more expensive than building it in from
                the start. Icon considerations for RTL layouts fall into three
                categories. First, directional icons — arrows, chevrons, forward/
                back navigation, progress indicators — must be mirrored in RTL
                contexts. CSS's logical direction properties and the dir="rtl"
                HTML attribute can trigger automatic SVG mirroring for most
                directional icons with a simple transform: scaleX(-1) applied
                to directional icon components in RTL contexts. Second, reading-
                order-dependent icons — icons that depict left-to-right flows
                like data import, data transfer, or pipeline progression — need
                dedicated RTL-specific variants that show the same conceptual
                flow in right-to-left order. Third, culturally neutral icons —
                the majority of interface icons including settings gears, close
                X marks, search magnifiers, notification bells, and user avatars
                — require no mirroring and work identically in both LTR and RTL
                contexts. Building your icon component to automatically apply
                the correct transform based on document direction, with an
                override prop for icons that should not be mirrored despite being
                directional in appearance, is the most maintainable long-term
                approach. Arabic, Hebrew, Persian, and Urdu-speaking markets
                represent significant TAM for B2B SaaS products, and products
                that ship with polished RTL support routinely see faster
                enterprise deal closures in Middle Eastern markets where RTL
                quality is a direct proxy for how seriously a vendor takes
                localization.
              </p>
            </div>

            <div className="content-block">
              <h3>Using SaaS UI Icons to Reduce Support Ticket Volume</h3>
              <p>
                The connection between icon quality and support ticket volume is
                direct, measurable, and chronically underestimated in SaaS
                product planning. Every ambiguous icon — every instance where a
                user cannot determine what clicking a button will do from its
                icon alone, or where a status indicator's meaning is unclear
                without surrounding context — represents a latent support ticket.
                Some of those confused users will submit a ticket. Most will
                simply abandon the action, fail to use the feature, or churn
                without ever articulating why the product felt confusing. Detailed
                user session recordings from FullStory, Hotjar, and PostHog
                consistently reveal the same patterns in SaaS products with weak
                icon vocabulary: cursor hesitation before icon-only buttons,
                multiple hover events on icons before clicking, back-navigation
                after unexpected results from ambiguous icon actions, and feature
                non-discovery in navigation areas where icons failed to
                communicate the feature's existence. The support reduction case
                is particularly strong for the settings, security, and billing
                icon categories, where user mistakes have tangible consequences
                — accidentally deleting data, misconfiguring access permissions,
                or missing a subscription renewal. Clear, unambiguous icons in
                these high-stakes surfaces directly reduce error rates and
                downstream support escalations. SaaS companies that track support
                ticket categories with sufficient granularity to identify
                UI-confusion tickets report 15-25% ticket volume reductions
                following comprehensive icon system overhauls, representing
                meaningful cost savings in customer success headcount and freeing
                support teams to address genuinely complex issues rather than
                basic UI navigation questions.
              </p>
            </div>

            <div className="content-block">
              <h3>SaaS UI Icon Trends Shaping Product Design in 2026</h3>
              <p>
                The visual language of SaaS product design in 2026 reflects
                several converging trends that are reshaping what "good" looks
                like in interface iconography. Variable weight icons — icons
                whose stroke weight can be adjusted via a CSS custom property
                or SVG attribute — have gained significant traction in design
                systems that need to express visual hierarchy through weight
                rather than just size, using heavier weights for primary actions
                and lighter weights for secondary or tertiary interface elements.
                This approach provides significantly more expressive range than
                the traditional "just make it bigger" hierarchy technique.
                Duotone icons, with separate fill and stroke paths that can be
                independently colored, allow products to express semantic meaning
                through the combination of a neutral structural color and a
                semantic accent color — a security icon with a neutral gray
                structure and a blue accent communicates "security, neutral
                state"; the same icon with a red accent communicates "security
                alert" — without needing separate icon files for each state.
                Motion-aware icons that use subtle CSS animations — a rotating
                gear during a processing state, a pulsing ring during a loading
                state, a gentle scale animation on hover for primary CTAs —
                are increasingly expected in premium SaaS products and are
                trivially implementable with pure CSS on SVG elements. The 2026
                design language also shows a clear move toward higher optical
                contrast in icon design, with bolder strokes at small sizes
                that ensure legibility on all display types including the
                increasingly common OLED screens where fine details disappear
                into the black background. Designing for clarity at 16px and
                elegance at 32px simultaneously — the dual constraint of modern
                SaaS icon design — is the defining challenge that separates
                purpose-built SaaS icon libraries from general icon collections
                that optimize for visual appeal at larger sizes without
                considering the small-size legibility requirements of
                production SaaS interfaces.
              </p>
            </div>

            <div className="content-block">
              <h3>
                Get Started with Scenith&apos;s SaaS UI Interface Icon Library Today
              </h3>
              <p>
                Scenith's SaaS UI Interface Icon library represents the most
                comprehensive, purposefully designed collection of SaaS-specific
                interface icons available in 2026 — built by a team that has
                designed SaaS products, understands the specific visual vocabulary
                the category demands, and has invested in creating icons that
                solve real product design problems rather than simply looking
                attractive in icon showcase mockups. With 50+ icons spanning
                50+ component categories, from the most foundational navigation
                controls to the most niche SaaS-specific surfaces like billing
                dunning flows, API webhook management, SCIM directory sync, and
                AI feature configuration panels, this library gives product teams
                the visual vocabulary they need to ship polished, professional
                SaaS products without spending months building custom icon assets.
                Browse the full collection above, search by component name or
                UI concept keyword, download individual icons in SVG, PNG, or JPG
                format, or use the built-in online editor to customize colors,
                sizes, and compositions to match your brand. Free account
                creation unlocks unlimited downloads, favorite-saving, download
                history, and personalized icon recommendations. Zero subscription
                required. Zero attribution needed. Zero usage limits. Just
                professional SaaS UI icons, immediately ready for use in your
                next product sprint.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── COMPARISON ──────────────────────────────────────────────── */}
      <section className="comparison-section">
        <div className="container">
          <h2>Scenith SaaS UI Icons vs. Generic Icon Libraries</h2>
          <div className="comparison-grid">
            <article className="comparison-card scenith-card">
              <h3>✅ Scenith SaaS UI Interface Icons</h3>
              <ul>
                <li><FaCheck aria-hidden="true" /> 50+ SaaS-specific UI icons</li>
                <li><FaCheck aria-hidden="true" /> 50+ interface component categories</li>
                <li><FaCheck aria-hidden="true" /> 100% free, commercial use forever</li>
                <li><FaCheck aria-hidden="true" /> Zero attribution required</li>
                <li><FaCheck aria-hidden="true" /> Built-in online editor included</li>
                <li><FaCheck aria-hidden="true" /> Unlimited downloads, no daily cap</li>
                <li><FaCheck aria-hidden="true" /> SVG, PNG, JPG export formats</li>
                <li><FaCheck aria-hidden="true" /> Dark mode ready (currentColor)</li>
                <li><FaCheck aria-hidden="true" /> React/Next.js/Vue/Svelte friendly</li>
                <li><FaCheck aria-hidden="true" /> Figma, Sketch, Adobe XD compatible</li>
                <li><FaCheck aria-hidden="true" /> Billing, auth, API, onboarding icons</li>
                <li><FaCheck aria-hidden="true" /> AI &amp; automation icon category</li>
                <li><FaCheck aria-hidden="true" /> RTL and internationalization support</li>
                <li><FaCheck aria-hidden="true" /> WCAG 2.2 accessibility considered</li>
                <li><FaCheck aria-hidden="true" /> No watermarks on any download</li>
                <li><FaCheck aria-hidden="true" /> Weekly icon additions</li>
              </ul>
            </article>
            <article className="comparison-card other-card">
              <h3>❌ Generic Icon Libraries</h3>
              <ul>
                <li>❌ No SaaS-specific categories</li>
                <li>❌ Missing billing, onboarding, API icons</li>
                <li>❌ Paywalled premium tiers ($15–99/month)</li>
                <li>❌ Attribution required on free plans</li>
                <li>❌ No built-in customization editor</li>
                <li>❌ 10–25 downloads/day cap on free tiers</li>
                <li>❌ SVG only or PNG only on free tier</li>
                <li>❌ Hardcoded colors, poor theming</li>
                <li>❌ Not optimized for component libraries</li>
                <li>❌ Inconsistent artboard sizes</li>
                <li>❌ No SaaS lifecycle icon coverage</li>
                <li>❌ No AI/automation icon vocabulary</li>
                <li>❌ No RTL directional variants</li>
                <li>❌ Accessibility not a design priority</li>
                <li>❌ Watermarks on free downloads</li>
                <li>❌ Infrequent or no new additions</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ─── LOGIN MODAL ─────────────────────────────────────────────── */}
      {showLoginPrompt && (
        <div
          className="modal-overlay"
          onClick={() => setShowLoginPrompt(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Login to download SaaS UI icons"
        >
          <motion.div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="modal-close"
              onClick={() => setShowLoginPrompt(false)}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>
            <h1>SCENITH</h1>
            <p>Sign in to download SaaS UI Icons</p>
            {loginError && (
              <div className="error-message" role="alert">
                {loginError}
              </div>
            )}
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
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={isLoggingIn}
                aria-label="Email address"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                disabled={isLoggingIn}
                aria-label="Password"
              />
              <button type="submit" className="cta-button" disabled={isLoggingIn}>
                {isLoggingIn ? "Signing in…" : "Sign In"}
              </button>
            </form>
            <div className="divider">OR</div>
            <div id="googleSignInButton" />
            <p className="auth-link">
              New to SCENITH? <a href="/register">Create a free account</a>
            </p>
          </motion.div>
        </div>
      )}

      {downloadModalOpen && selectedElementForDownload && (
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => {
            setDownloadModalOpen(false);
            setSelectedElementForDownload(null);
          }}
          elementId={selectedElementForDownload.id}
          elementName={selectedElementForDownload.name}
        />
      )}
    </div>
  );
};

export default SaaSUIIconsPage;