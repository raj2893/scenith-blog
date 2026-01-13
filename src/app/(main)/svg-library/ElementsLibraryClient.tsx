"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaSearch, FaEdit, FaTimes, FaDownload } from "react-icons/fa";
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

  // Check authentication
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

  // Fetch all elements
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

  // Filter elements based on search and category
  useEffect(() => {
    let filtered = elements;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((el) => el.category === selectedCategory);
    }

    // Filter by search query
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

  // Handle "Edit in Image Editor"
  const handleEditInEditor = async (element: ImageElement) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }

    setIsCreatingProject(true);

    try {
      const token = localStorage.getItem("token");

      // Create a new project
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

      // Load the element's image to get natural dimensions
      const img = new Image();
      img.onload = async () => {
        const scale = 1.0;
        const displayWidth = img.naturalWidth * scale;
        const displayHeight = img.naturalHeight * scale;

        // Create layer JSON with the element
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

        // Update the project with the element layer
        await axios.put(
          `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
          { designJson },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Open the editor in a new tab
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
    const slug = element.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    router.push(`/svg-library/${slug}`);
  };

  // Handle login
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
    if (showLoginPrompt) {
      initializeGoogleSignIn();
    }
  }, [showLoginPrompt, handleGoogleLogin]);  

  return (
    <div className="elements-library-page">
      {/* SEO Content - Hidden but crawlable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free SVG Icons Library - Scenith",
            description: "Browse thousands of free SVG icons and graphics. Edit and customize any icon in our online image editor. Perfect for web design, app development, and graphic design projects.",
            url: typeof window !== "undefined" ? window.location.href : "/svg-library",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: elements.length,
              itemListElement: elements.slice(0, 10).map((element, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "ImageObject",
                  name: element.name,
                  contentUrl: element.cdnUrl,
                  encodingFormat: element.fileFormat,
                }
              }))
            }
          }),
        }}
      />

      {/* Hero Section */}
      <section className="library-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Free SVG Icons & Graphics Library</h1>
            <p className="hero-subtitle">
              Discover thousands of high-quality, customizable icons. Edit any icon instantly in our free online editor.
            </p>

            {/* Search Bar */}
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search icons, graphics, elements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
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

            {/* Category Filter */}
            <div className="category-filter">
              <button
                className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Categories
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

      {/* Elements Grid */}
      <section className="elements-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading icons...</p>
            </div>
          ) : filteredElements.length === 0 ? (
            <div className="empty-state">
              <h3>No icons found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          ) : (
            <>
              <div className="results-count">
                <p>
                  Showing {filteredElements.length} {filteredElements.length === 1 ? "icon" : "icons"}
                </p>
              </div>
              <div className="elements-grid">
                {filteredElements.map((element, index) => (
                  <motion.div
                    key={element.id}
                    className="element-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <div
                      className="element-preview"
                      onClick={() => handleElementClick(element)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={element.cdnUrl} alt={element.name} loading="lazy" />
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
                        title="Download"
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
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Use Scenith SVG Library?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Fully Customizable</h3>
              <p>Edit any icon in our online editor. Change colors, resize, add effects, and combine with other elements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Editing</h3>
              <p>Click "Edit in Editor" and start customizing immediately. No downloads or software installation required.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🆓</div>
              <h3>100% Free</h3>
              <p>All icons are completely free to use. No subscriptions, no hidden costs, no watermarks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📐</div>
              <h3>High Quality SVG</h3>
              <p>Scalable vector graphics that look perfect at any size. Perfect for web, mobile, and print.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="container">
          <h2>Perfect for Every Project</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>🌐 Web Design</h3>
              <p>Enhance your websites with custom icons. Perfect for navigation, features, and CTAs.</p>
            </div>
            <div className="use-case-card">
              <h3>📱 App Development</h3>
              <p>Create consistent UI elements for iOS, Android, and web applications.</p>
            </div>
            <div className="use-case-card">
              <h3>📊 Presentations</h3>
              <p>Make your slides more engaging with professional icons and graphics.</p>
            </div>
            <div className="use-case-card">
              <h3>📢 Marketing Materials</h3>
              <p>Design eye-catching social media posts, ads, and promotional graphics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">
            <h2>About Scenith Free SVG Icons Library</h2>

            <div className="content-block">
              <h3>What is Scenith SVG Library?</h3>
              <p>
                Scenith SVG Library is a comprehensive collection of free, high-quality vector graphics and icons. Unlike traditional icon libraries where you can only download files, we offer a unique feature: edit any icon instantly in our free online image editor. Whether you need social media icons, business graphics, or creative elements, our library has thousands of options ready to customize.
              </p>
            </div>

            <div className="content-block">
              <h3>Free Alternative to Flaticon and IconFinder</h3>
              <p>
                Looking for free icons without attribution requirements? Scenith provides professional-quality SVG icons completely free. Unlike Flaticon's premium restrictions or IconFinder's licensing complexities, all our icons come with full usage rights. No attribution needed, no premium tiers, no download limits.
              </p>
            </div>

            <div className="content-block">
              <h3>Instant Icon Customization</h3>
              <p>
                Our unique "Edit in Editor" feature sets us apart from other icon libraries. Click any icon and it opens directly in our image editor with a 1080x1080 canvas. From there, you can change colors, resize, rotate, add text, combine multiple icons, apply filters, and export in multiple formats (PNG, JPG, PDF). This workflow is faster than downloading files and opening separate design software.
              </p>
            </div>

            <div className="content-block">
              <h3>Icon Categories We Offer</h3>
              <p>
                Our library includes diverse categories: social media icons (Facebook, Instagram, Twitter, LinkedIn, YouTube), business and finance graphics, technology and computing symbols, shopping and e-commerce elements, education and learning icons, health and medical graphics, travel and transportation symbols, food and restaurant icons, and many more specialized categories for every industry.
              </p>
            </div>

            <div className="content-block">
              <h3>SEO-Optimized SVG Graphics</h3>
              <p>
                All our SVG files are optimized for web performance with clean code, small file sizes, and proper semantic structure. Using SVG icons on your website improves page load times compared to raster images and ensures perfect display on all screen resolutions, including 4K displays and retina screens.
              </p>
            </div>

            <div className="content-block">
              <h3>How to Use Icons from Our Library</h3>
              <p>
                Browse our collection using the search bar or category filters. Click on any icon to view it in detail. To customize an icon, click "Edit in Editor" and sign in if you haven't already. The icon will open in a new project where you can modify colors, size, and add additional elements like text or shapes. Export your customized icon as PNG for web use, JPG for photos and backgrounds, or PDF for print materials.
              </p>
            </div>

            <div className="content-block">
              <h3>Benefits of Vector Graphics (SVG)</h3>
              <p>
                SVG icons offer significant advantages over PNG or JPG: infinite scalability without quality loss, smaller file sizes for faster loading, easy color and style customization via CSS, accessibility improvements with semantic markup, SEO benefits from text-based format, and support for animations and interactivity.
              </p>
            </div>

            <div className="content-block">
              <h3>Commercial Use and Licensing</h3>
              <p>
                All icons in our library are free for both personal and commercial use. You can use them in client projects, websites, applications, printed materials, and products without attribution. We believe in making design accessible to everyone, which is why we don't restrict usage or require credits.
              </p>
            </div>

            <div className="content-block">
              <h3>Integration with Design Workflow</h3>
              <p>
                Scenith seamlessly fits into your existing design process. For quick edits, use our online editor directly. For complex projects, customize icons and export them to use in Adobe Photoshop, Illustrator, Figma, Sketch, or any other design tool. Our PNG exports support transparency, making them perfect for layering in any design software.
              </p>
            </div>

            <div className="content-block">
              <h3>Growing Icon Collection</h3>
              <p>
                We continuously add new icons to our library based on user requests and design trends. Our collection grows weekly with fresh graphics covering emerging technologies, seasonal themes, and popular culture. Bookmark your favorite categories to stay updated with new additions.
              </p>
            </div>

            <div className="content-block">
              <h3>Mobile and Tablet Support</h3>
              <p>
                Browse and edit icons on any device. Our responsive library works perfectly on smartphones and tablets. While we recommend desktop for detailed editing work, you can browse, select, and make quick edits on mobile devices when needed.
              </p>
            </div>

            <div className="content-block">
              <h3>Start Creating with Free Icons Today</h3>
              <p>
                Join thousands of designers, developers, and marketers who trust Scenith for their icon needs. Whether you're building a website, designing an app, creating marketing materials, or working on a presentation, our library has the perfect icons to bring your vision to life. Start browsing and editing icons now, completely free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
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