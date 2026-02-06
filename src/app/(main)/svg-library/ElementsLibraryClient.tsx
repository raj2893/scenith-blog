"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaSearch, FaEdit, FaTimes, FaDownload, FaCheck } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../styles/svg-library/ElementsLibrary.css";
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

const ElementsLibraryClient: React.FC = () => {
  const router = useRouter();
  const [elements, setElements] = useState<ImageElement[]>([]);
  const [filteredElements, setFilteredElements] = useState<ImageElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedElementForDownload, setSelectedElementForDownload] = useState<ImageElement | null>(null);
  const [downloadStats, setDownloadStats] = useState<Record<number, number>>({});
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);  
  const [navigatingToElement, setNavigatingToElement] = useState<number | null>(null);

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
        const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
        setElements(response.data);
        setFilteredElements(response.data);

        const uniqueCategories = Array.from(
          new Set(response.data.map((el: ImageElement) => el.category))
        ) as string[];
        setCategories(uniqueCategories.sort());
      } catch (error) {
        console.error("Error fetching elements:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchElements();
  }, []);

  useEffect(() => {
    let filtered = elements;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((el) => el.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (el) =>
          el.name.toLowerCase().includes(query) ||
          el.tags?.toLowerCase().includes(query) ||
          el.category.toLowerCase().includes(query)
      );
    }

    setFilteredElements(filtered);
  }, [searchQuery, selectedCategory, elements]);

  // Pagination
  const totalPages = Math.ceil(filteredElements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedElements = filteredElements.slice(startIndex, endIndex);

  // Reset to page 1 when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]); 
  
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);  

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
          projectName: `${element.name} Design`,
          canvasWidth: 1080,
          canvasHeight: 1080,
          canvasBackgroundColor: "#FFFFFF",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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
          scale: scale,
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
              canvas: {
                width: 1080,
                height: 1080,
                backgroundColor: "#FFFFFF",
              },
              layers: [layer],
            },
          ],
        });

        await axios.put(
          `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
          { designJson },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        window.open(`/tools/image-editing/${projectId}/edit`, "_blank");
        setIsCreatingProject(false);
      };

      img.onerror = () => {
        console.error("Failed to load image");
        setIsCreatingProject(false);
        alert("Failed to load the element. Please try again.");
      };

      img.src = element.cdnUrl;
    } catch (error: any) {
      console.error("Error creating project:", error);
      setIsCreatingProject(false);
      alert(error.response?.data?.message || "Failed to create project");
    }
  };

  const handleElementClick = (element: ImageElement) => {
    setNavigatingToElement(element.id);
    const slug = element.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      setUserProfile({
        email: userResponse.data.email || "",
        firstName,
        lastName,
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginPrompt(false);
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
    if (showLoginPrompt) {
      initializeGoogleSignIn();
    }
  }, [showLoginPrompt, handleGoogleLogin]);

  return (
    <div className="elements-library-page">
      {/* Breadcrumb Navigation */}
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
            <span itemProp="name">SVG Icons Library</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": "https://scenith.in/svg-library#webapp",
                name: "Scenith Free SVG Icons Library",
                description: "Download and customize 10,000+ free SVG icons and vector graphics. Edit online with built-in editor. Export as SVG, PNG, JPG, PDF. No attribution required.",
                url: "https://scenith.in/svg-library",
                applicationCategory: "DesignApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock"
                },
                featureList: [
                  "10,000+ free SVG icons",
                  "Built-in online editor",
                  "Export SVG, PNG, JPG, PDF",
                  "No attribution required",
                  "Commercial use allowed",
                  "Instant customization"
                ],
                screenshot: "https://scenith.in/images/svg-library-screenshot.png",
                author: {
                  "@type": "Organization",
                  "@id": "https://scenith.in/#organization",
                  name: "Scenith"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://scenith.in/svg-library#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://scenith.in"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Tools",
                    item: "https://scenith.in/tools"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "SVG Icons Library",
                    item: "https://scenith.in/svg-library"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://scenith.in/svg-library#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What are SVG icons and why use them?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SVG (Scalable Vector Graphics) icons are XML-based vector image files that scale infinitely without losing quality. Unlike PNG or JPG, SVG icons remain crisp at any size, load faster, and can be styled with CSS. They're perfect for responsive web design, mobile apps, and high-resolution displays."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Are these SVG icons really free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! All 10,000+ icons are completely free for personal and commercial use. No attribution required, no hidden costs, no watermarks. You can use them in client projects, commercial websites, mobile apps, products for sale, and any business purpose without crediting Scenith."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "How do I download SVG icons?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Simply browse or search for icons, click on your desired icon, and click the download button. Choose your preferred format (SVG, PNG, JPG, or PDF) and download instantly. No registration required, though creating a free account unlocks additional features."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Can I customize icons before downloading?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes! Click 'Edit in Editor' on any icon to open our online editing tool. You can change colors, resize, rotate, add text, combine icons, apply effects, and export in multiple formats - all without installing design software."
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "@id": "https://scenith.in/svg-library#howto",
                name: "How to Download and Use Free SVG Icons",
                description: "Step-by-step guide to finding, downloading, and using free SVG icons from Scenith",
                totalTime: "PT2M",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Search for Icons",
                    text: "Use the search bar or browse categories to find icons that match your needs. Filter by style, category, or keyword.",
                    position: 1
                  },
                  {
                    "@type": "HowToStep",
                    name: "Preview and Select",
                    text: "Click on any icon to view details. Preview how it looks and check available formats before downloading.",
                    position: 2
                  },
                  {
                    "@type": "HowToStep",
                    name: "Download or Edit",
                    text: "Click download to get the icon instantly, or click 'Edit in Editor' to customize colors, size, and effects before exporting.",
                    position: 3
                  }
                ]
              },
              {
                "@type": "CollectionPage",
                "@id": "https://scenith.in/svg-library#collection",
                name: "Free SVG Icons Collection",
                numberOfItems: elements.length,
                itemListElement: elements.slice(0, 10).map((element, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "ImageObject",
                    name: element.name,
                    contentUrl: element.cdnUrl,
                    encodingFormat: element.fileFormat
                  }
                }))
              }
            ]
          }),
        }}
      />

      <section className="library-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Free SVG Icons & Vector Graphics Library</h1>
            <p className="hero-subtitle">
              Download and edit over 10,000+ free SVG icons, vector graphics, and illustrations. Perfect for web design, apps, presentations, and more. Use our{' '}
              <a href="/tools/image-editing" className="inline-link">free image editor</a>{' '}
              to customize any icon instantly. No attribution required.
            </p>

            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search free SVG icons, vector graphics, illustrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search icons"
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

            <div className="category-filter">
              <button
                className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Icons
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="quick-definition-section" role="region" aria-labelledby="quick-definition">
        <div className="container">
          <div className="featured-snippet-target">
            <h2 id="quick-definition" className="visually-hidden">SVG Icons Definition</h2>
            <div className="definition-box">
              <p className="definition-text">
                <strong>SVG icons</strong> are scalable vector graphic image files that maintain perfect quality at any size. Unlike raster formats (PNG, JPG), SVG icons use mathematical equations to draw shapes, allowing infinite scaling without pixelation. SVG files are smaller, faster-loading, CSS-styleable, and ideal for responsive web design, mobile apps, and high-resolution displays. They're the industry standard for modern icon systems.
              </p>
            </div>
          </div>
        </div>
      </section>      

      <section className="elements-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading free SVG icons...</p>
            </div>
          ) : filteredElements.length === 0 ? (
            <div className="empty-state">
              <h3>No icons found</h3>
              <p>Try adjusting your search or browse all categories</p>
            </div>
          ) : (
            <>
              {/* Results Count & Items Per Page */}
              <div className="results-header">
                <div className="results-count">
                  <p>
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredElements.length)} of {filteredElements.length} free {filteredElements.length === 1 ? "icon" : "icons"}
                  </p>
                </div>
                <div className="items-per-page">
                  <label htmlFor="items-per-page">Show:</label>
                  <select
                    id="items-per-page"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value={12}>12</option>
                    <option value={20}>20</option>
                    <option value={36}>36</option>
                    <option value={48}>48</option>
                    <option value={60}>60</option>
                  </select>
                </div>
              </div>
                  
              {/* Elements Grid */}
              <div className="elements-grid">
                {paginatedElements.map((element, index) => (
                  <motion.div
                    key={element.id}
                    className="element-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    {navigatingToElement === element.id && (
                      <div className="element-loading-overlay">
                        <div className="element-loading-spinner"></div>
                      </div>
                    )}                    
                    <div
                      className="element-preview"
                      onClick={() => handleElementClick(element)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={element.cdnUrl} alt={`${element.name} - Free SVG Icon`} loading="lazy" />
                    </div>
                    <div className="element-info">
                      <h3 className="element-name" title={element.name}>
                        {element.name}
                      </h3>
                      <div className="element-actions">
                        <button
                          className="download-btn-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isLoggedIn) {
                              setShowLoginPrompt(true);
                              return;
                            }
                            setSelectedElementForDownload(element);
                            setDownloadModalOpen(true);
                          }}
                          title="Download SVG"
                          aria-label="Download icon"
                        >
                          <FaDownload />
                        </button>
                        <button
                          className="edit-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditInEditor(element);
                          }}
                          disabled={isCreatingProject}
                          aria-label="Edit icon in online editor"
                        >
                          {isCreatingProject ? (
                            <>
                              <div className="btn-spinner"></div>
                              Creating...
                            </>
                          ) : (
                            <>
                              <FaEdit /> Edit
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination-container">
                  <button
                    className="pagination-btn pagination-prev"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ← Previous
                  </button>
              
                  <div className="pagination-numbers">
                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <button
                          className="pagination-number"
                          onClick={() => setCurrentPage(1)}
                        >
                          1
                        </button>
                        {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
                      </>
                    )}

                    {/* Pages around current */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        return (
                          page === currentPage ||
                          page === currentPage - 1 ||
                          page === currentPage - 2 ||
                          page === currentPage + 1 ||
                          page === currentPage + 2
                        );
                      })
                      .map(page => (
                        <button
                          key={page}
                          className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
                        <button
                          className="pagination-number"
                          onClick={() => setCurrentPage(totalPages)}
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>
                  
                  <button
                    className="pagination-btn pagination-next"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Scenith for Free SVG Icons?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Fully Customizable Icons</h3>
              <p>Edit any SVG icon directly in our online editor. Change colors, resize, add effects, and combine with other elements without any design software.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Download & Edit</h3>
              <p>Click to download SVG, PNG, or JPG formats instantly. Or edit icons online and export in your preferred format. No software installation needed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🆓</div>
              <h3>100% Free Vector Icons</h3>
              <p>All SVG icons are completely free for personal and commercial use. No attribution required, no hidden costs, no watermarks on downloads.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📐</div>
              <h3>High-Quality SVG Files</h3>
              <p>Professional-grade scalable vector graphics that maintain perfect quality at any size. Ideal for web, mobile, print, and 4K displays.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Icon Search</h3>
              <p>Find exactly what you need with our advanced search and category filters. Search by keyword, style, or browse curated collections.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Multiple Export Formats</h3>
              <p>Download icons as SVG for web, PNG with transparency for presentations, JPG for photos, or PDF for print. All formats available instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-to-section" id="how-to-use" role="region" aria-labelledby="how-to-title">
        <div className="container">
          <h2 id="how-to-title">How to Download and Use Free SVG Icons: Complete Guide</h2>
          <p className="section-description">
            Follow this step-by-step tutorial to find, download, customize, and implement SVG icons in your projects. Perfect for beginners and professionals alike.
          </p>
              
          <div className="tutorial-steps">
            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 1</div>
              <div className="tutorial-step-content">
                <h3>Search and Browse SVG Icons</h3>
                <p>
                  Start by exploring our comprehensive library of 10,000+ free icons:
                </p>
                <ul className="tutorial-checklist">
                  <li>Use the search bar to find specific icons (e.g., "shopping cart", "social media", "arrows")</li>
                  <li>Click category filters to browse themed collections (Business, Technology, Social Media, etc.)</li>
                  <li>Filter by multiple criteria to narrow down results quickly</li>
                  <li>Preview icons at full size before downloading</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> Use descriptive keywords like "outlined heart icon" or "filled star icon" for better search results. Our search engine understands natural language and icon styles.
                </div>
              </div>
            </article>
              
            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 2</div>
              <div className="tutorial-step-content">
                <h3>Download Your Chosen Icon</h3>
                <p>
                  Getting your icon is quick and straightforward:
                </p>
                <div className="filter-guide">
                  <div className="filter-option">
                    <strong>Instant Download:</strong> Click the download button (⬇️) on any icon card for immediate access to the SVG file.
                  </div>
                  <div className="filter-option">
                    <strong>Format Selection:</strong> Choose from SVG (scalable), PNG (transparent), JPG (solid background), or PDF (print-ready).
                  </div>
                  <div className="filter-option">
                    <strong>No Registration Required:</strong> Download instantly without creating an account (though accounts unlock favorites and history).
                  </div>
                </div>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> For web projects, always choose SVG format. It's 50-80% smaller than PNG and scales perfectly on all devices. Use PNG only when SVG support is unavailable.
                </div>
              </div>
            </article>
              
            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 3</div>
              <div className="tutorial-step-content">
                <h3>Customize Icons (Optional but Powerful)</h3>
                <p>
                  Click "Edit in Editor" to unlock advanced customization without design software:
                </p>
                <ul className="tutorial-checklist">
                  <li><strong>Change Colors:</strong> Use our color picker to match your brand palette instantly</li>
                  <li><strong>Resize & Scale:</strong> Adjust dimensions while maintaining perfect proportions</li>
                  <li><strong>Rotate & Transform:</strong> Rotate to any angle for creative orientations</li>
                  <li><strong>Add Text:</strong> Combine icons with custom typography for logos or badges</li>
                  <li><strong>Combine Icons:</strong> Layer multiple icons to create unique compositions</li>
                  <li><strong>Apply Effects:</strong> Add shadows, transparency, filters for visual impact</li>
                </ul>
                <p>
                  All edits happen in real-time with instant preview. Export customized icons in any format when finished.
                </p>
              </div>
            </article>
              
            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 4</div>
              <div className="tutorial-step-content">
                <h3>Implement Icons in Your Project</h3>
                <p>
                  Use downloaded icons across platforms and applications:
                </p>
                <div className="download-options">
                  <div className="download-format">
                    <strong>Web Development</strong>
                    Insert SVG code directly in HTML, use as IMG src, or set as CSS background-image
                  </div>
                  <div className="download-format">
                    <strong>Design Software</strong>
                    Import into Figma, Sketch, Adobe XD, Illustrator, Photoshop for further editing
                  </div>
                  <div className="download-format">
                    <strong>No-Code Platforms</strong>
                    Upload PNG/JPG to WordPress, Wix, Squarespace, Webflow, Shopify
                  </div>
                  <div className="download-format">
                    <strong>Presentations</strong>
                    Insert into PowerPoint, Keynote, Google Slides to enhance visual communication
                  </div>
                </div>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> For websites, use inline SVG for icons you'll style with CSS (colors, hover effects). Use IMG tags for static icons that won't change. This optimizes performance and flexibility.
                </div>
              </div>
            </article>
          </div>
              
          <div className="common-questions">
            <h3>Common Questions During Download</h3>
            <div className="quick-qa-grid">
              <div className="quick-qa">
                <strong>Q: Do I need to create an account?</strong>
                <p>A: No, downloads work instantly without registration. Accounts are optional and unlock favorites, download history, and early access to new icons.</p>
              </div>
              <div className="quick-qa">
                <strong>Q: Can I download multiple icons at once?</strong>
                <p>A: Currently, icons download individually for best quality control. Batch download is coming soon for premium users.</p>
              </div>
              <div className="quick-qa">
                <strong>Q: What if the icon doesn't look right on my site?</strong>
                <p>A: SVG icons inherit text color by default. Set explicit fill color in CSS or use our editor to hard-code colors before downloading.</p>
              </div>
              <div className="quick-qa">
                <strong>Q: How do I credit Scenith?</strong>
                <p>A: Attribution is appreciated but not required! Use our icons freely without any credit or backlinks. Focus on creating amazing work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>      

      <section className="icon-categories-section">
        <div className="container">
          <h2>Popular Free SVG Icon Categories</h2>
          <div className="categories-showcase">
            <div className="category-showcase-card">
              <h3>🌐 Social Media Icons</h3>
              <p>Free SVG icons for Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok, Pinterest, WhatsApp, and all major social platforms. Available in multiple styles.</p>
            </div>
            <div className="category-showcase-card">
              <h3>💼 Business & Finance Icons</h3>
              <p>Professional icons for presentations, reports, and business applications. Includes charts, graphs, money, analytics, and corporate symbols.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🛒 E-commerce & Shopping Icons</h3>
              <p>Complete set of shopping cart, payment, delivery, product, and checkout icons for online stores and e-commerce websites.</p>
            </div>
            <div className="category-showcase-card">
              <h3>⚙️ Technology & Device Icons</h3>
              <p>Modern tech icons including computers, smartphones, tablets, smartwatches, cameras, software, and hardware symbols.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🎓 Education & Learning Icons</h3>
              <p>Icons for educational platforms, online courses, schools, books, certificates, graduation, and academic symbols.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🏥 Health & Medical Icons</h3>
              <p>Healthcare icons including hospitals, doctors, medicines, fitness, wellness, mental health, and medical equipment symbols.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🎮 Gaming & Entertainment Icons</h3>
              <p>Icons for games, movies, music, streaming, sports, hobbies, and entertainment applications and websites.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🍔 Food & Restaurant Icons</h3>
              <p>Delicious food icons, restaurant symbols, cooking utensils, beverages, ingredients, and dining-related graphics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <h2>Perfect for Every Design Project</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>🌐 Website Design & Development</h3>
              <p>Enhance websites with scalable SVG icons. Perfect for navigation menus, feature sections, call-to-action buttons, and user interface elements.</p>
            </div>
            <div className="use-case-card">
              <h3>📱 Mobile App UI/UX Design</h3>
              <p>Create consistent, beautiful mobile interfaces for iOS and Android apps. All icons are optimized for retina and high-DPI screens.</p>
            </div>
            <div className="use-case-card">
              <h3>📊 Business Presentations</h3>
              <p>Make PowerPoint, Keynote, and Google Slides presentations more professional with high-quality vector icons and infographic elements.</p>
            </div>
            <div className="use-case-card">
              <h3>📢 Social Media Marketing</h3>
              <p>Design engaging social media posts, stories, ads, and promotional graphics with our customizable icon library.</p>
            </div>
            <div className="use-case-card">
              <h3>🎨 Graphic Design Projects</h3>
              <p>Use in logos, branding materials, posters, flyers, brochures, and any creative design work. Export in any size without quality loss.</p>
            </div>
            <div className="use-case-card">
              <h3>📝 Documentation & Guides</h3>
              <p>Improve technical documentation, user manuals, tutorials, and help guides with clear, professional icons and symbols.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-comparison-section">
        <div className="container">
          <h2>Scenith vs Other Icon Libraries</h2>
          <div className="comparison-grid">
            <div className="comparison-card scenith-card">
              <h3>✅ Scenith</h3>
              <ul>
                <li><FaCheck /> 100% free forever</li>
                <li><FaCheck /> No attribution required</li>
                <li><FaCheck /> Built-in online editor</li>
                <li><FaCheck /> Unlimited downloads</li>
                <li><FaCheck /> Multiple export formats (SVG, PNG, JPG)</li>
                <li><FaCheck /> Commercial use allowed</li>
                <li><FaCheck /> No watermarks</li>
                <li><FaCheck /> Instant customization</li>
              </ul>
            </div>
            <div className="comparison-card other-card">
              <h3>Other Icon Sites</h3>
              <ul>
                <li>❌ Premium subscriptions required</li>
                <li>❌ Attribution often mandatory</li>
                <li>❌ Download and use external tools</li>
                <li>❌ Limited free downloads</li>
                <li>❌ Restricted format options</li>
                <li>❌ Commercial licenses cost extra</li>
                <li>❌ Watermarks on free versions</li>
                <li>❌ Complex editing workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title">Frequently Asked Questions About Free SVG Icons</h2>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>What are SVG icons and why use them?</h3>
              <p>SVG (Scalable Vector Graphics) icons are XML-based vector images that scale infinitely without quality loss. Unlike PNG or JPG, SVG icons remain crisp at any size, load faster (typically 50-80% smaller files), can be styled with CSS, animated with JavaScript, and are perfect for responsive designs and retina displays.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Are these SVG icons completely free?</h3>
              <p>Yes! All 10,000+ icons are 100% free for both personal and commercial use. No attribution required, no hidden fees, no watermarks, and no download limits. Use them in client projects, commercial websites, apps, products, marketing materials - anywhere you need professional icons.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How do I download SVG icons from Scenith?</h3>
              <p>Browse our library using search or category filters, click on any icon to view it, then click the download button. Choose your format (SVG for web, PNG with transparency, JPG, or PDF for print) and download instantly. No registration required for downloads.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I customize icons before downloading?</h3>
              <p>Absolutely! Click "Edit in Editor" on any icon to open our online editing tool. Change colors with our color picker, resize proportionally, rotate, add custom text, combine multiple icons, apply filters, adjust transparency, and export in any format - all without design software.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What's the difference between SVG and PNG icons?</h3>
              <p>SVG is a vector format that scales infinitely without pixelation, perfect for responsive web design. PNG is a raster format good for specific sizes but pixelates when scaled. SVG files are typically 50-80% smaller, can be styled with CSS, and work perfectly on all screen resolutions including retina and 4K displays.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use these icons for commercial projects?</h3>
              <p>Yes! Full commercial use is allowed. Use our free SVG icons in client work, commercial websites, SaaS products, mobile applications, templates for sale, merchandise, marketing materials, and any business purpose. No attribution needed, no royalties, no restrictions.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How is Scenith better than Flaticon or IconFinder?</h3>
              <p>Unlike Flaticon Premium or IconFinder Pro which require paid subscriptions, Scenith offers 10,000+ icons completely free with zero attribution requirements. We include a built-in online editor (no external software needed), multiple export formats, and full commercial rights - all at no cost.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What formats can I export icons in?</h3>
              <p>Export in SVG (scalable vector for web), PNG with transparent background (general use), JPG (photo compositions), or high-quality PDF (professional printing). Choose any resolution: 72 DPI for web, 150 DPI for standard printing, 300 DPI for professional printing, or custom resolutions.</p>
            </article>
          </div>
        </div>
      </section>      

      <section className="people-also-ask" role="region" aria-labelledby="paa-title">
        <div className="container">
          <h2 id="paa-title">People Also Ask About SVG Icons</h2>
          <div className="paa-grid">
            <div className="paa-item">
              <h3>Where can I find free SVG icons without attribution?</h3>
              <p>Scenith offers 10,000+ free SVG icons with zero attribution requirements. Unlike Flaticon's free tier which requires credit, all Scenith icons come with full commercial rights and no mandatory attribution. Other options include Heroicons, Feather Icons, and Bootstrap Icons, but Scenith provides the largest selection with built-in editing capabilities.</p>
            </div>
              
            <div className="paa-item">
              <h3>How do I use SVG icons in HTML/CSS?</h3>
              <p>Inline SVG directly in HTML for maximum control: copy SVG code and paste into your HTML. Or use as IMG tag: &lt;img src="icon.svg" alt="description"&gt;. For CSS background: background-image: url('icon.svg'). Inline SVG allows CSS styling and animations, while IMG/CSS methods are simpler but less flexible.</p>
            </div>
              
            <div className="paa-item">
              <h3>What's the best SVG icon library for React?</h3>
              <p>Scenith icons work perfectly in React - download SVG files and import as React components. Alternatives include React Icons (aggregates multiple icon sets), Heroicons (Tailwind's official icons), and Lucide React. Scenith's advantage: edit icons visually before exporting, ensuring perfect fit for your React project without code changes.</p>
            </div>
              
            <div className="paa-item">
              <h3>Are SVG icons better than icon fonts?</h3>
              <p>Yes, SVG icons are generally superior. They offer better accessibility (screen readers can describe them), sharper rendering at all sizes, support for multi-color designs, easier animation and interactivity, and no FOIT (Flash Of Invisible Text) issues. Icon fonts were popular 5-10 years ago but SVG is now the industry standard.</p>
            </div>
          </div>
        </div>
      </section>      

      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">
            <h2>Complete Guide to Free SVG Icons and Vector Graphics</h2>

            <div className="content-block">
              <h3>What are SVG Icons and Why Use Them?</h3>
              <p>
                SVG (Scalable Vector Graphics) icons are XML-based vector image files that can scale infinitely without losing quality. Unlike raster formats like PNG or JPG, SVG icons remain crisp and sharp at any size, from tiny mobile screens to massive 8K displays. This makes SVG the preferred format for modern web design, mobile app development, and responsive interfaces. SVG files are also significantly smaller than equivalent PNG files, improving website loading speeds and overall performance. Additionally, SVG icons can be styled with CSS, animated with JavaScript, and easily customized without image editing software.
              </p>
            </div>

            <div className="content-block">
              <h3>Free Alternative to Flaticon, IconFinder, and Noun Project</h3>
              <p>
                Scenith provides a comprehensive free alternative to premium icon libraries like Flaticon Premium, IconFinder Pro, and Noun Project subscriptions. While these platforms require paid memberships for full access, commercial use licenses, and attribution-free downloads, Scenith offers everything completely free. Our library includes thousands of high-quality SVG icons across all popular categories without any paywalls, download limits, or licensing restrictions. Unlike Flaticon's freemium model where most icons require attribution or premium access, all Scenith icons come with full commercial use rights and zero attribution requirements. This makes Scenith the ideal choice for freelancers, startups, agencies, and enterprises looking to cut costs without compromising on quality.
              </p>
            </div>

            <div className="content-block">
              <h3>How to Download and Use Free SVG Icons</h3>
              <p>
                Downloading icons from Scenith is simple and straightforward. Browse our library using the search bar or category filters to find icons that match your project needs. Click on any icon to view it in detail and see all available formats. To download, simply click the download button and choose your preferred format: SVG for web and scalable applications, PNG with transparent background for general use, JPG for photo compositions, or PDF for print materials. No registration is required for downloads, though creating a free account unlocks additional features like project history and favorites. Once downloaded, SVG files can be used directly in HTML/CSS, imported into design software like Adobe Illustrator, Figma, Sketch, or Canva, or converted to other formats as needed.
              </p>
            </div>

            <div className="content-block">
              <h3>Instant Icon Customization with Online Editor</h3>
              <p>
                Scenith's unique online icon editor eliminates the need for expensive design software like Adobe Illustrator or CorelDRAW. Click "Edit in Editor" on any icon to open it in our browser-based editing tool. The editor loads icons on a professional 1080x1080 canvas where you can change colors using our color picker, resize and scale proportionally, rotate to any angle, add custom text with various fonts, combine multiple icons to create unique compositions, apply filters and effects, adjust transparency and opacity, and export in multiple formats. This workflow is significantly faster than downloading icons and opening separate design applications. All edits happen in real-time with instant preview, and your customized icons can be exported immediately in SVG, PNG (with transparency), JPG, or high-quality PDF format for printing.
              </p>
            </div>

            <div className="content-block">
              <h3>Comprehensive Icon Categories and Collections</h3>
              <p>
                Our library covers every major icon category designers need. Social Media Icons include all major platforms like Facebook, Instagram, Twitter (X), LinkedIn, YouTube, TikTok, Pinterest, Snapchat, Reddit, Discord, WhatsApp, Telegram, and WeChat in multiple styles including outline, filled, rounded, and square variants. Business and Finance icons feature charts, graphs, analytics, money symbols, banking, investment, cryptocurrency, stock market, accounting, and corporate communication symbols. Technology and Computing icons include devices like laptops, smartphones, tablets, smartwatches, headphones, software symbols, coding icons, database, cloud, AI, cybersecurity, and networking graphics. E-commerce and Shopping icons cover shopping carts, payment methods, credit cards, delivery trucks, packages, product categories, wishlists, checkout process, and customer service symbols. Education icons include books, graduation caps, certificates, online learning, school buildings, teachers, students, homework, and academic achievement symbols.
              </p>
            </div>

            <div className="content-block">
              <h3>SEO Benefits of Using SVG Icons on Websites</h3>
              <p>
                Implementing SVG icons on your website provides significant SEO advantages. SVG files are text-based XML code that search engines can read and index, unlike binary image formats like PNG or JPG. This means you can include descriptive titles, descriptions, and keywords directly in the SVG code, helping search engines understand your content better. SVG icons have much smaller file sizes compared to equivalent raster images, typically 50-80% smaller than PNG files. This dramatically improves page load speeds, which is a crucial Google ranking factor. Faster websites rank higher in search results and provide better user experience, reducing bounce rates. Additionally, SVG icons scale perfectly on all devices without requiring multiple image variants for different screen resolutions (1x, 2x, 3x), simplifying your image optimization workflow and reducing server storage and bandwidth costs.
              </p>
            </div>

            <div className="content-block">
              <h3>Commercial Use and Licensing Explained</h3>
              <p>
                All icons in Scenith's library are licensed for both personal and commercial use without any restrictions or attribution requirements. You can use our free SVG icons in client projects, commercial websites, mobile applications, SaaS products, templates and themes for sale, printed marketing materials, merchandise and products, corporate presentations and documents, and any other commercial or business purpose. You do not need to credit Scenith or provide attribution, though we always appreciate it when designers share their work. The license allows unlimited projects and unlimited team members, making it perfect for agencies and design teams. You cannot, however, redistribute our icons as-is in competing icon libraries, claim them as your own original work, or sell them as standalone icon packs. Using icons as part of larger design projects, templates, or products is completely allowed and encouraged.
              </p>
            </div>

            <div className="content-block">
              <h3>Best Practices for SVG Icon Implementation</h3>
              <p>
                To get the best results when implementing SVG icons on websites, follow these professional best practices. For inline SVG, embed SVG code directly in HTML for maximum control and CSS styling capabilities. This allows you to change colors, animations, and other properties via CSS without editing files. Use proper semantic HTML with descriptive titles and ARIA labels for accessibility, ensuring screen readers can properly announce icons to visually impaired users. Optimize SVG files by removing unnecessary metadata, comments, and redundant code using tools like SVGO. Set appropriate viewBox attributes to ensure icons scale correctly. For icon sprites, combine multiple frequently-used icons into a single SVG sprite sheet to reduce HTTP requests. Implement lazy loading for icons below the fold to improve initial page load performance. Always provide fallback text or alternative representations for users who have images disabled.
              </p>
            </div>

            <div className="content-block">
              <h3>Icon Design Trends and Styles</h3>
              <p>
                Modern icon design follows several popular trends and styles. Outline icons feature thin, minimalist line work that looks clean and professional, perfect for modern interfaces and dashboards. Filled icons use solid colors and are more visible at small sizes, making them ideal for mobile apps and touch interfaces. Gradient icons incorporate color transitions for a more vibrant, contemporary aesthetic popular in app design and branding. Flat design icons embrace simplicity with solid colors and no shadows or gradients, aligning with material design principles. Isometric icons provide a 3D perspective view that adds depth while remaining vector-based, great for infographics and technical illustrations. Duotone icons use two colors to create visual hierarchy and modern appeal, trending in 2024 web design. Animated icons add micro-interactions and engagement, with subtle movements on hover or click states. Choose icon styles that match your brand identity and ensure consistency across your entire icon set for professional results.
              </p>
            </div>

            <div className="content-block">
              <h3>Accessibility and Inclusive Design with Icons</h3>
              <p>
                Creating accessible interfaces with icons requires thoughtful implementation. Never use icons alone without text labels or tooltips, as icon meanings can be ambiguous or culturally specific. Always include descriptive alt text or ARIA labels that clearly explain the icon's purpose to screen reader users. Ensure sufficient color contrast between icons and backgrounds following WCAG 2.1 Level AA standards (minimum 4.5:1 ratio). Avoid relying solely on color to convey information, as this excludes colorblind users. Provide focus indicators for interactive icons so keyboard users can navigate effectively. Size icons appropriately with minimum touch targets of 44x44 pixels for mobile interfaces to accommodate users with motor disabilities. Test your icon implementations with actual screen readers like NVDA, JAWS, or VoiceOver. Consider providing simplified or high-contrast versions of complex icons for users with low vision. Inclusive design benefits everyone and expands your potential audience.
              </p>
            </div>

            <div className="content-block">
              <h3>How to Convert and Export Icons to Different Formats</h3>
              <p>
                Scenith makes format conversion simple with built-in export options. To convert SVG to PNG, use our editor's export feature to generate PNG files at any resolution with transparent backgrounds, perfect for PowerPoint presentations, Word documents, or platforms that don't support SVG. For JPG export, ideal when you need smaller file sizes for photo compositions or when transparency isn't required. PDF export produces high-quality vector files perfect for professional printing, brochures, business cards, and print advertisements while maintaining infinite scalability. The export process preserves all your customizations including color changes, size adjustments, and any additional elements you've added. Choose resolution based on your use case: 72 DPI for web and screen use, 150 DPI for standard printing, 300 DPI for professional printing and photography, or custom resolutions for specific requirements. Our editor automatically optimizes each format for file size while maintaining visual quality.
              </p>
            </div>

            <div className="content-block">
              <h3>Building Consistent Icon Systems for Brands</h3>
              <p>
                Creating a cohesive icon system strengthens brand identity and improves user experience. Start by defining your icon style guide including stroke width consistency (typically 1.5px to 2px for web), corner radius standards (sharp, slightly rounded, or fully rounded), level of detail appropriate for your sizes, color palette matching your brand colors, and spacing and padding rules. Maintain visual weight consistency so all icons feel balanced when displayed together. Use a consistent grid system (typically 24x24px or 32x32px) to align elements and ensure optical balance. Create icons in related sets for better visual harmony - for example, all social media icons should share the same style characteristics. Test icons at various sizes to ensure they remain recognizable and clear at both small (16px) and large (128px+) sizes. Document your icon system for team consistency and future scalability. Regular icon audits help maintain quality as your library grows.
              </p>
            </div>

            <div className="content-block">
              <h3>Mobile App Icon Design Guidelines</h3>
              <p>
                Designing icons for mobile applications requires special considerations for different platforms. iOS icons should follow Apple's Human Interface Guidelines with appropriate sizes including 20pt, 25pt, 30pt for navigation and tab bars, and larger sizes for app icons. Use SF Symbols for system consistency when possible, or create custom icons matching their style. Android icons should align with Material Design principles featuring 24dp standard size, consistent 2dp stroke weight, and appropriate touch targets of minimum 48dp. Ensure icons work well in both light and dark modes with proper contrast ratios. Create adaptive icons for Android that look good in various shapes (circle, square, rounded square) as different manufacturers use different icon masks. Export icons at multiple densities (1x, 2x, 3x, 4x) to support all screen resolutions from older phones to newest flagships. Test icons on actual devices as they can appear different from desktop previews.
              </p>
            </div>

            <div className="content-block">
              <h3>Icon Animation and Micro-interactions</h3>
              <p>
                Animated icons enhance user engagement and provide visual feedback. Common animation techniques include hover effects with subtle color changes, scale transforms, or rotation; loading states with spinning icons or pulsing effects; success confirmations with checkmark animations or color transitions; toggle states for bookmarks, favorites, or menu buttons; and progress indicators showing task completion. Keep animations subtle and purposeful - overly flashy animations can distract users and hurt usability. Limit animation duration to 200-400ms for micro-interactions to feel responsive without slowing down the interface. Use CSS transforms for smooth performance instead of animating position properties. Provide reduced-motion alternatives respecting users' system preferences (prefers-reduced-motion media query). Test animations on low-powered devices to ensure smooth performance across your user base. SVG animations can be achieved through CSS transforms, JavaScript libraries like GreenSock, or native SVG SMIL animations.
              </p>
            </div>

            <div className="content-block">
              <h3>Icon Performance Optimization Techniques</h3>
              <p>
                Optimizing icon performance is crucial for fast-loading websites and apps. Minimize HTTP requests by combining frequently-used icons into SVG sprites or icon fonts. Implement lazy loading for icons that appear below the fold, only loading them when needed as users scroll. Use SVG optimization tools like SVGO or SVGOMG to remove unnecessary code, reducing file sizes by 30-70% without visual quality loss. Enable gzip or Brotli compression on your server for even smaller transfer sizes. Consider using icon fonts for simple, single-color icons that need consistent sizing, though SVG offers more flexibility. Implement proper caching headers so icons are cached by browsers and don't need to be re-downloaded on repeat visits. For large icon sets, consider code-splitting to only load icons needed for specific pages. Measure performance impact using tools like Google PageSpeed Insights, Lighthouse, or WebPageTest. Every kilobyte saved and every HTTP request eliminated improves user experience and SEO rankings.
              </p>
            </div>

            <div className="content-block">
              <h3>Free Icon Resources and Design Integration</h3>
              <p>
                Scenith integrates seamlessly into any design workflow. For web developers, download SVG files and use them directly in HTML, React components, Vue templates, or Angular applications. For designers, import icons into Figma, Sketch, Adobe XD, Illustrator, or Photoshop for further customization as part of larger designs. For no-code builders, use exported PNG or JPG versions in WordPress, Wix, Squarespace, Webflow, or any website builder. For presentations, insert icons into PowerPoint, Keynote, Google Slides to enhance slides and visualizations. For documentation, embed icons in Notion, Confluence, Google Docs, or Markdown files. Our icons work everywhere you need them. Create a personal collection of frequently-used icons for quick access. Use consistent icon sets across all your projects to maintain professional visual coherence. Combine icons with your brand colors immediately using our editor rather than editing files later.
              </p>
            </div>

            <div className="content-block">
              <h3>Start Using Free SVG Icons Today</h3>
              <p>
                Join thousands of designers, developers, marketers, and businesses who rely on Scenith for high-quality free SVG icons. Whether you're building a website, designing a mobile app, creating marketing materials, developing presentations, working on branding projects, or illustrating technical documentation, our comprehensive icon library has everything you need. Start browsing our categories, search for specific icons, or explore trending collections. Download icons instantly in your preferred format or customize them in our online editor. No credit card required, no trial limitations, no hidden fees - just free, professional-quality icons ready for immediate use. Bookmark Scenith and make it your go-to resource for all icon needs. Check back regularly as we add new icons weekly based on design trends and user requests. Create a free account to save favorites, track download history, and get early access to new icon releases. Elevate your designs with Scenith's free SVG icon library today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showLoginPrompt && (
        <div className="modal-overlay" onClick={() => setShowLoginPrompt(false)}>
          <motion.div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button className="modal-close" onClick={() => setShowLoginPrompt(false)}>
              <FaTimes />
            </button>
            <h1>SCENITH</h1>
            <p>Login to Download</p>
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
              New to SCENITH? <a href="/register">Sign up</a>
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

export default ElementsLibraryClient;