"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEdit, FaArrowLeft, FaTimes } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../styles/svg-library/SingleElement.css";

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

interface SingleElementClientProps {
  elementSlug: string;
}

const SingleElementClient: React.FC<SingleElementClientProps> = ({ elementSlug }) => {
  const router = useRouter();
  const [element, setElement] = useState<ImageElement | null>(null);
  const [relatedElements, setRelatedElements] = useState<ImageElement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);

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

  const createSlug = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };  

  useEffect(() => {
    const fetchElementData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/image-editor/elements`);
        const allElements = response.data;
        
        // Find element by matching slug
        const currentElement = allElements.find((el: ImageElement) => 
          createSlug(el.name) === elementSlug
        );
  
        if (currentElement) {
          setElement(currentElement);
  
          // Get related elements from the same category
          const related = allElements
            .filter(
              (el: ImageElement) =>
                el.category === currentElement.category && el.id !== currentElement.id
            )
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
      {/* SEO Content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            name: element.name,
            contentUrl: element.cdnUrl,
            encodingFormat: element.fileFormat,
            width: element.width,
            height: element.height,
            description: `Free ${element.name} icon in ${element.category} category. Edit and customize this SVG icon in our free online image editor.`,
            author: {
              "@type": "Organization",
              name: "Scenith",
            },
            license: "https://scenith.com/license",
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
              <div className="preview-container">
                <img src={element.cdnUrl} alt={element.name} />
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
              <h3>Free {element.name} SVG Icon</h3>
              <p>
                Download and customize this professional {element.name} icon from our free SVG library. This 
                high-quality vector graphic is perfect for web design, app development, presentations, and 
                marketing materials. Use our online image editor to change colors, resize, and add effects 
                without any design software.
              </p>
            </div>

            <div className="content-block">
              <h3>Customize This Icon</h3>
              <p>
                Click "Edit in Image Editor" to open this icon in our free online editor. Change the color 
                to match your brand, resize it to any dimension, add text labels, combine it with other icons, 
                or apply filters and effects. All customization is done in your browser - no downloads or 
                software installation required.
              </p>
            </div>

            <div className="content-block">
              <h3>Where to Use {element.name} Icon</h3>
              <p>
                This {element.category} icon is versatile and can be used in websites, mobile applications, 
                desktop software, presentations, infographics, marketing materials, social media posts, 
                email newsletters, printed materials, and product packaging. The SVG format ensures it looks 
                crisp at any size, from small mobile icons to large billboard graphics.
              </p>
            </div>

            <div className="content-block">
              <h3>Vector Format Benefits</h3>
              <p>
                As an SVG (Scalable Vector Graphic), this icon maintains perfect quality at any size. Unlike 
                raster images (PNG, JPG) that become pixelated when enlarged, vector graphics scale infinitely 
                without quality loss. This makes them ideal for responsive web design where icons need to look 
                good on both tiny smartphone screens and large desktop displays.
              </p>
            </div>

            <div className="content-block">
              <h3>Free Commercial Use License</h3>
              <p>
                All icons in our library, including this {element.name} icon, are free for both personal and 
                commercial use. You can use them in client projects, products you sell, websites, applications, 
                and marketing materials without attribution or licensing fees. We believe in making professional 
                design resources accessible to everyone.
              </p>
            </div>

            <div className="content-block">
              <h3>Browse More {element.category} Icons</h3>
              <p>
                Looking for more {element.category} icons? Visit our {element.category} category page to 
                discover hundreds of related icons. All icons are fully customizable in our free online editor. 
                Mix and match icons to create unique designs for your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="modal-overlay" onClick={() => setShowLoginPrompt(false)}>
          <motion.div
            className="login-prompt-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button className="modal-close" onClick={() => setShowLoginPrompt(false)}>
              <FaTimes />
            </button>
            <h2>Sign In Required</h2>
            <p>Please sign in to edit icons in the image editor.</p>
            <button
              className="cta-button"
              onClick={() => {
                setShowLoginPrompt(false);
                router.push("/login");
              }}
            >
              Go to Login
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SingleElementClient;