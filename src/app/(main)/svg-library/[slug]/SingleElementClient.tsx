"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEdit, FaArrowLeft, FaTimes, FaDownload } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../styles/svg-library/SingleElement.css";
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
  downloadCount: number;
}

interface SingleElementClientProps {
  elementSlug: string;
  initialElement?: ImageElement | null;
}

const SingleElementClient: React.FC<SingleElementClientProps> = ({ elementSlug, initialElement }) => {
  const [element, setElement] = useState<ImageElement | null>(initialElement || null);
  const router = useRouter();
  const [relatedElements, setRelatedElements] = useState<ImageElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("#000000");
  const [previewImageUrl, setPreviewImageUrl] = useState<string>("");


  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => setIsLoggedIn(true))
        .catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, []);

  useEffect(() => {
    if (element && element.fileFormat.toLowerCase() === 'svg') {
      // If color is changed, fetch the colored version
      if (selectedColor !== "#000000") {
        const fetchColoredSvg = async () => {
          try {
            const token = localStorage.getItem("token");
            const response = await axios.get(
              `${API_BASE_URL}/api/image-editor/elements/${element.id}/download?format=SVG&color=${selectedColor.replace('#', '')}`,
              {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
                responseType: 'blob',
              }
            );
            const url = URL.createObjectURL(response.data);
            setPreviewImageUrl(url);
          } catch (error) {
            console.error("Failed to fetch colored SVG:", error);
          }
        };
        fetchColoredSvg();
      } else {
        // Reset to original
        setPreviewImageUrl(element.cdnUrl);
      }
    }
  }, [selectedColor, element]);
  
  // Update preview URL when element changes
  useEffect(() => {
    if (element) {
      setPreviewImageUrl(element.cdnUrl);
      setSelectedColor("#000000"); // Reset color when element changes
    }
  }, [element]);

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

  const createSlug = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };  

  useEffect(() => {
    const fetchElementData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
        const allElements = response.data;
        const currentElement = initialElement || allElements.find((el: ImageElement) => 
          createSlug(el.name) === elementSlug
        );
        if (currentElement) {
          setElement(currentElement);
          const related = allElements
            .filter((el: ImageElement) => el.category === currentElement.category && el.id !== currentElement.id)
            .slice(0, 8);
          setRelatedElements(related);
        }
      } catch (error) {
        console.error("Error fetching element:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchElementData();
  }, [elementSlug]);

  // Handle "Edit in Image Editor"
  const handleEditInEditor = async (targetElement: ImageElement) => {
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
          projectName: `${targetElement.name} Design`,
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
          src: targetElement.cdnUrl,
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

      img.src = targetElement.cdnUrl;
    } catch (error: any) {
      console.error("Error creating project:", error);
      setIsCreatingProject(false);
      alert(error.response?.data?.message || "Failed to create project");
    }
  };

  if (isLoading) {
    return (
      <div className="single-element-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading icon...</p>
        </div>
      </div>
    );
  }

  if (!element) {
    return (
      <div className="single-element-page">
        <div className="error-container">
          <h2>Icon Not Found</h2>
          <p>The icon you're looking for doesn't exist or has been removed.</p>
          <button className="back-btn" onClick={() => router.push("/svg-library")}>
            <FaArrowLeft /> Back to Library
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="single-element-page">
      {/* Breadcrumb */}
      {element && (
        <nav aria-label="Breadcrumb" style={{padding: '1rem 2rem', background: '#f8f9fa', marginTop: '100px'}}>
          <ol itemScope itemType="https://schema.org/BreadcrumbList" 
              style={{display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap'}}>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item" style={{color: '#1a73e8', textDecoration: 'none'}}>
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
              <span style={{margin: '0 0.5rem', color: '#666'}}>›</span>
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/svg-library" itemProp="item" style={{color: '#1a73e8', textDecoration: 'none'}}>
                <span itemProp="name">SVG Icons Library</span>
              </a>
              <meta itemProp="position" content="2" />
              <span style={{margin: '0 0.5rem', color: '#666'}}>›</span>
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{element.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      )}      
      {/* SEO Content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ImageObject",
                "@id": `https://scenith.in/svg-library/${elementSlug}#image`,
                name: `${element.name} SVG Icon`,
                contentUrl: element.cdnUrl,
                encodingFormat: "image/svg+xml",
                width: element.width || 800,
                height: element.height || 800,
                description: `Free ${element.name} SVG icon from the ${element.category} collection. Download for personal and commercial use. No attribution required.`,
                license: "https://scenith.in/license",
                acquireLicensePage: `https://scenith.in/svg-library/${elementSlug}`,
                creditText: "Scenith",
                creator: {
                  "@type": "Organization",
                  name: "Scenith",
                  url: "https://scenith.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
                  { "@type": "ListItem", position: 2, name: "SVG Icons Library", item: "https://scenith.in/svg-library" },
                  { "@type": "ListItem", position: 3, name: element.name, item: `https://scenith.in/svg-library/${elementSlug}` }
                ]
              },
              {
                "@type": "SoftwareApplication",
                name: "Scenith SVG Icon Editor",
                applicationCategory: "DesignApplication",
                operatingSystem: "Web Browser",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                url: "https://scenith.in/svg-library"
              }
            ]
          }),
        }}
      />

      {/* Main Element Display */}
      <section className="element-showcase">
        <button className="back-btn" onClick={() => router.push("/svg-library")}>
          <FaArrowLeft /> Back to Library
        </button>        
        <div className="container">
          <div className="showcase-grid">
            <div className="element-preview-large">
              <div className="preview-container watermarked-preview">
                <img
                  src={previewImageUrl || element.cdnUrl}
                  alt={element.name}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
                <div className="watermark-overlay">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="watermark-text">SCENITH</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="element-details">
              <h1>{element.name}</h1>

              <div className="element-meta">
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{element.category}</span>
                </div>
                {element.width && element.height && (
                  <div className="meta-item">
                    <span className="meta-label">Dimensions:</span>
                    <span className="meta-value">
                      {element.width} × {element.height}px
                    </span>
                  </div>
                )}
                <div className="meta-item">
                  <span className="meta-label">Format:</span>
                  <span className="meta-value">{element.fileFormat}</span>
                </div>
                {element.tags && (
                  <div className="meta-item tags-item">
                    <span className="meta-label">Tags:</span>
                    <div className="tags-list">
                      {element.tags.split(",").map((tag, index) => (
                        <span key={index} className="tag">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {element.fileFormat.toLowerCase() === 'svg' && (
                <div className="color-customization">
                  <h3>Customize Color</h3>
                  <div className="color-picker-container">
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="color-input"
                    />
                    <input
                      type="text"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      placeholder="#000000"
                      className="color-text-input"
                      maxLength={7}
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedColor("#000000")}
                      className="reset-color-btn"
                    >
                      Reset Color
                    </button>
                  </div>
                  <small className="color-hint">
                    Preview updates in real-time. Downloads will use this color.
                  </small>
                </div>
              )}              

              <div className="action-buttons">
                <button
                  className="download-main-btn"
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowLoginPrompt(true);
                      return;
                    }
                    setDownloadModalOpen(true);
                  }}
                >
                  <FaDownload /> Download
                </button>

                <button
                  className="edit-in-editor-btn"
                  onClick={() => handleEditInEditor(element)}
                  disabled={isCreatingProject}
                >
                  {isCreatingProject ? (
                    <>
                      <div className="btn-spinner"></div>
                      Creating Project...
                    </>
                  ) : (
                    <>
                      <FaEdit /> Edit in Image Editor
                    </>
                  )}
                </button>
              </div>
                
              {element.downloadCount > 0 && (
                <div className="download-stats">
                  <span className="stats-icon">📥</span>
                  <span className="stats-text">{element.downloadCount.toLocaleString()} downloads</span>
                </div>
              )}

              <div className="usage-info">
                <h3>Usage Rights</h3>
                <p>
                  This icon is free for both personal and commercial use. No attribution required.
                  Edit and customize it in our free online editor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use-section">
        <div className="container">
          <h2>How to Use This Icon</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Click Edit in Editor</h3>
              <p>Open this icon in our free online image editor with one click.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Customize</h3>
              <p>Change colors, resize, add text, or combine with other elements.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Export</h3>
              <p>Download as PNG, JPG, or PDF for your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Icons */}
      {relatedElements.length > 0 && (
        <section className="related-icons-section">
          <div className="container">
            <h2>Related Icons in {element.category}</h2>
            <div className="related-grid">
              {relatedElements.map((relatedElement) => (
                <motion.div
                  key={relatedElement.id}
                  className="related-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="related-preview"
                    onClick={() => router.push(`/svg-library/${createSlug(relatedElement.name)}`)}
                  >
                    <img src={relatedElement.cdnUrl} alt={relatedElement.name} />
                  </div>
                  <div className="related-info">
                    <h4>{relatedElement.name}</h4>
                    <div className="related-actions">
                    <button
                      className="quick-download-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isLoggedIn) {
                          setShowLoginPrompt(true);
                          return;
                        }
                        setElement(relatedElement);
                        setDownloadModalOpen(true);
                      }}
                      title="Download"
                    >
                      <FaDownload />
                    </button>
                      <button
                        className="quick-edit-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditInEditor(relatedElement);
                        }}
                      >
                        <FaEdit /> Edit
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Content Section */}
      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">
            <h2>About {element.name} Icon</h2>

            <div className="content-block">
              <h3>Free {element.name} SVG Icon — Download Instantly</h3>
              <p>
                The <strong>{element.name}</strong> icon is part of our <strong>{element.category}</strong> collection — 
                one of {relatedElements.length + 1}+ icons in this category alone. This vector graphic is built for 
                modern design workflows: pixel-perfect at any scale, CSS-styleable, and ready to drop into HTML, 
                React, Vue, Figma, or any design tool without conversion. Use the color picker above to preview 
                your brand color before downloading — no editor needed for simple color changes.
              </p>
            </div>

            <div className="content-block">
              <h3>When to Use the {element.name} Icon</h3>
              <p>
                The <strong>{element.name}</strong> icon communicates clearly across contexts — website navigation, 
                mobile app UI, dashboard interfaces, email templates, and print materials. Because it's delivered as 
                SVG, it stays sharp on retina displays, 4K monitors, and tiny mobile screens without any extra work 
                on your end. Use it at 16px for tight UI or scale it to 512px+ for hero sections — the same file 
                handles both.
              </p>
              {element.tags && (
                <p style={{marginTop: '12px'}}>
                  Common use cases for this icon include: <em>{element.tags.split(',').map((t: string) => t.trim()).join(', ')}</em>.
                </p>
              )}
            </div>
            
            <div className="content-block">
              <h3>Implementing This Icon in Your Project</h3>
              <p>
                For web projects, paste the SVG code inline in your HTML for full CSS control (color, hover, animation). 
                Use it as an <code>&lt;img&gt;</code> tag if you need a quick static embed, or as a CSS 
                <code>background-image</code> for decorative use. In React, import the downloaded SVG as a component 
                using SVGR. In Figma or Sketch, drag and drop the SVG file directly — it imports as editable vectors, 
                not a flat image.
              </p>
            </div>
            
            <div className="content-block">
              <h3>Advanced Customization</h3>
              <p>
                Click <strong>"Edit in Image Editor"</strong> to go beyond simple color changes. In the editor you can 
                combine this {element.name} icon with text for a logo lockup, layer it with other {element.category} icons 
                for an infographic, apply drop shadows or gradients, and export at custom resolutions up to 2048px. 
                All processing happens in-browser — your files never leave your device until you choose to download.
              </p>
            </div>
            
            <div className="content-block">
              <h3>License: Free for Personal & Commercial Use</h3>
              <p>
                This {element.name} icon carries a <strong>no-attribution commercial license</strong>. Use it in 
                client work, SaaS products, mobile apps, print campaigns, merchandise, or any commercial project 
                without crediting Scenith. The only restriction: you cannot resell or redistribute this icon as a 
                standalone asset in a competing icon library. Using it as part of a larger design, template, or 
                product is fully permitted.
              </p>
            </div>
            
            <div className="content-block">
              <h3>More {element.category} Icons</h3>
              <p>
                This icon is part of the <strong>{element.category}</strong> collection on Scenith. Browse the full 
                set to find complementary icons for your project — all in the same visual style, all free. 
                Consistent icon sets are critical for professional UI; mixing styles creates visual noise that 
                undermines trust with users. Stick to one category family for cohesive results.
              </p>
              <p style={{marginTop: '12px'}}>
                <a href={`/svg-library?category=${element.category}`} className="inline-link">
                  Browse all {element.category} icons →
                </a>
              </p>
            </div>
            
            {element.width && element.height && (
              <div className="content-block">
                <h3>Technical Specifications</h3>
                <p>
                  Native dimensions: <strong>{element.width} × {element.height}px</strong>. 
                  File format: <strong>{element.fileFormat}</strong>. 
                  As a vector file, these are reference dimensions only — you can export at any resolution 
                  without quality loss. For web use, 24px–48px covers most UI needs. For print at 300 DPI, 
                  export at 1200px or larger.
                </p>
              </div>
            )}
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

      {downloadModalOpen && element && (
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
          elementId={element.id}
          elementName={element.name}
          selectedColor={selectedColor}
          fileFormat={element.fileFormat}          
        />
      )}          
    </div>
  );
};

export default SingleElementClient;