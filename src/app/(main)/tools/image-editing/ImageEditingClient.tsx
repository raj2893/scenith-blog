"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTimes, FaPlus, FaEdit, FaTrash, FaDownload, FaImage } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../styles/tools/ImageEditing.css";

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface ImageProject {
  id: number;
  projectName: string;
  canvasWidth: number;
  canvasHeight: number;
  canvasBackgroundColor: string;
  status: string;
  lastExportedUrl: string | null;
  lastExportFormat: string | null;
  createdAt: string;
  updatedAt: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const ImageEditingClient: React.FC = () => {
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

  // Project states
  const [projects, setProjects] = useState<ImageProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newProject, setNewProject] = useState({
    projectName: "",
    canvasWidth: 1080,
    canvasHeight: 1080,
    canvasBackgroundColor: "#FFFFFF",
  });
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [projectToDelete, setProjectToDelete] = useState<ImageProject | null>(null);  

  // Check auth and fetch projects
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
          fetchProjects(token);
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

  // Fetch user projects
  const fetchProjects = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/image-editor/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data);
    } catch (error: any) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects.");
    } finally {
      setIsLoading(false);
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
      fetchProjects(token);
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
      fetchProjects(response.data.token);
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

  // Create new project
  const handleCreateProject = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (!newProject.projectName.trim()) {
      setError("Project name is required");
      return;
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        newProject,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setProjects([response.data, ...projects]);
      setShowCreateModal(false);
      setNewProject({
        projectName: "",
        canvasWidth: 1080,
        canvasHeight: 1080,
        canvasBackgroundColor: "#FFFFFF",
      });
      window.open(`/tools/image-editing/${response.data.id}/edit`, '_blank');
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to create project");
    }
  };

  const handleDeleteProject = async () => {
    if (!projectToDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/image-editor/projects/${projectToDelete.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProjects(projects.filter((p) => p.id !== projectToDelete.id));
      setShowDeleteModal(false);
      setProjectToDelete(null);
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to delete project");
    }
  };

  const openEditor = (projectId: number) => {
    window.open(`/tools/image-editing/${projectId}/edit`, '_blank');
  };

  return (
    <div className="image-editing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Scenith Image Editor",
            description: "Free online image editor for creating professional graphics with layers, text, shapes, and filters. Perfect for social media, marketing materials, YouTube thumbnails, and presentations.",
            url: typeof window !== "undefined" ? window.location.href : "/tools/image-editing",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "1250"
            },
            featureList: [
              "Layer-based editing",
              "Custom text with multiple fonts",
              "Shape library",
              "Image filters and effects",
              "Multiple export formats (PNG, JPG, PDF)",
              "Cloud-based project saving",
              "Responsive mobile support"
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
          <h1>Free Image Editor - Design Like a Pro</h1>
          <p className="hero-description">
            Create stunning graphics with our intuitive online editor. Add layers, text, shapes, and apply professional filters. Perfect for social media, marketing, and creative projects!
          </p>

          <button
            className="cta-button create-project-btn"
            onClick={() => (isLoggedIn ? setShowCreateModal(true) : setShowLoginModal(true))}
          >
            <FaPlus /> {isLoggedIn ? "Create New Project" : "Sign In to Start Designing"}
          </button>
        </motion.div>
      </section>

      {isLoggedIn && (
        <section className="projects-section">
          <div className="container">
            <div className="section-header">
              <h2>Your Projects</h2>
              <button className="cta-button" onClick={() => setShowCreateModal(true)}>
                <FaPlus /> New Project
              </button>
            </div>

            {isLoading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading projects...</p>
              </div>
            ) : projects.length === 0 ? (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FaImage className="empty-icon" />
                <h3>No Projects Yet</h3>
                <p>Create your first design project and start editing!</p>
                <button className="cta-button" onClick={() => setShowCreateModal(true)}>
                  <FaPlus /> Create Project
                </button>
              </motion.div>
            ) : (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="project-preview" onClick={() => openEditor(project.id)}>
                      {project.lastExportedUrl ? (
                        <img src={project.lastExportedUrl} alt={project.projectName} />
                      ) : (
                        <div
                          className="project-placeholder"
                          style={{ backgroundColor: project.canvasBackgroundColor }}
                        >
                          <FaImage />
                        </div>
                      )}
                    </div>
                    <div className="project-info">
                      <h3>{project.projectName}</h3>
                      <p className="project-meta">
                        {project.canvasWidth} x {project.canvasHeight}px
                      </p>
                      <p className="project-status">{project.status}</p>
                      <div className="project-actions">
                        <button
                          className="action-btn edit-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditor(project.id);
                          }}
                        >
                          <FaEdit /> Edit
                        </button>
                        {project.lastExportedUrl && (
                          <a
                            href={project.lastExportedUrl}
                            download
                            className="action-btn download-btn"
                          >
                            <FaDownload /> Download
                          </a>
                        )}
                        <button
                          className="action-btn delete-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setProjectToDelete(project);
                            setShowDeleteModal(true);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SEO Content Sections */}
      <section className="features-section">
        <div className="container">
          <h2>Powerful Image Editing Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Layer-Based Editing</h3>
              <p>Work with multiple layers like a pro. Organize, reorder, and blend elements seamlessly.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✍️</span>
              <h3>Advanced Text Tools</h3>
              <p>Add custom text with fonts, colors, shadows, and alignment options.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔷</span>
              <h3>Shape Library</h3>
              <p>Insert rectangles, circles, triangles, and custom shapes with fills and strokes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎭</span>
              <h3>Filters & Effects</h3>
              <p>Apply blur, brightness, contrast, grayscale, sepia, and more creative filters.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <h2>Perfect for Every Creative Project</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>Social Media Graphics</h3>
              <p>Create eye-catching Instagram posts, Facebook covers, Twitter headers, and LinkedIn banners. Our templates are optimized for all major social platforms with the correct dimensions.</p>
            </div>
            <div className="use-case-card">
              <h3>Marketing Materials</h3>
              <p>Design professional flyers, brochures, posters, and advertisements. Perfect for small businesses, freelancers, and marketing teams looking to create stunning promotional content.</p>
            </div>
            <div className="use-case-card">
              <h3>YouTube Thumbnails</h3>
              <p>Stand out on YouTube with custom thumbnails that get clicks. Use our pre-sized canvas and add text, shapes, and effects to create attention-grabbing video covers.</p>
            </div>
            <div className="use-case-card">
              <h3>Presentations & Infographics</h3>
              <p>Enhance your presentations and create data visualizations with custom graphics. Add charts, diagrams, and visual elements to make your content more engaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2>How Our Image Editor Works</h2>
          <p className="section-subtitle">Create professional graphics in 4 simple steps</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose Canvas Size</h3>
              <p>Start with a blank canvas or select from preset dimensions for Instagram, Facebook, YouTube, and more. Customize width and height to fit your needs.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Add Elements</h3>
              <p>Upload your images, add text with custom fonts, insert shapes, and build your design layer by layer. Drag and drop to position elements exactly where you want them.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Customize & Style</h3>
              <p>Apply filters, adjust colors, add shadows, and fine-tune every detail. Control opacity, rotation, and alignment to achieve the perfect look.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Export & Share</h3>
              <p>Download your creation as PNG, JPG, or PDF. Your projects are automatically saved so you can return and edit them anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is Scenith Image Editor really free?</h3>
              <p>Yes! Our image editor is completely free to use. Create unlimited projects, add layers, text, shapes, and export your designs without any watermarks or restrictions.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to download or install software?</h3>
              <p>No downloads required! Scenith Image Editor runs entirely in your web browser. Simply sign in and start creating from any device with internet access.</p>
            </div>
            <div className="faq-item">
              <h3>What image formats can I export?</h3>
              <p>You can export your designs as PNG (with transparency support), JPG (for photos and web), or PDF (for print-ready documents). Choose the format that best suits your needs.</p>
            </div>
            <div className="faq-item">
              <h3>Can I edit images on mobile devices?</h3>
              <p>Yes! Our editor is responsive and works on tablets and smartphones. Touch gestures are supported for moving, resizing, and rotating elements on mobile devices.</p>
            </div>
            <div className="faq-item">
              <h3>Are my projects saved automatically?</h3>
              <p>Yes, all your projects are automatically saved to your account. You can access them anytime, make edits, and export updated versions whenever needed.</p>
            </div>
            <div className="faq-item">
              <h3>What fonts are available in the editor?</h3>
              <p>We offer a wide selection of Google Fonts and system fonts including Arial, Montserrat, Comic Sans MS, and many more. Browse the font dropdown to explore all available options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Amazing Graphics?</h2>
            <p>Join thousands of creators using Scenith Image Editor for free. No credit card required, no hidden fees.</p>
            <button
              className="cta-button large-cta"
              onClick={() => (isLoggedIn ? setShowCreateModal(true) : setShowLoginModal(true))}
            >
              <FaPlus /> Start Designing Now
            </button>
          </div>
        </div>
      </section>     

      <section className="comparison-section">
        <div className="container">
          <h2>Why Choose Scenith Image Editor?</h2>
          <p className="section-subtitle">See how we compare to other design tools</p>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scenith</th>
                  <th>Canva Free</th>
                  <th>Photoshop</th>
                  <th>Figma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Free to Use</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="cross">✗</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>No Watermarks</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>Layer-Based Editing</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="cross">✗</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>Unlimited Projects</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="limited">Limited</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>Advanced Filters</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="limited">Basic</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="cross">✗</span></td>
                </tr>
                <tr>
                  <td>No Installation Required</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="cross">✗</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>Export as PDF</td>
                  <td><span className="check">✓</span></td>
                  <td><span className="limited">Pro Only</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Templates & Presets Section */}
      <section className="templates-section">
        <div className="container">
          <h2>Pre-sized Canvas Templates for Every Platform</h2>
          <p className="section-subtitle">Start with the perfect dimensions for your project</p>
          <div className="templates-grid">
            <div className="template-card">
              <div className="template-icon instagram-icon">📱</div>
              <h3>Instagram</h3>
              <ul className="template-sizes">
                <li>Post: 1080 x 1080px</li>
                <li>Story: 1080 x 1920px</li>
                <li>Reel: 1080 x 1920px</li>
                <li>Carousel: 1080 x 1080px</li>
              </ul>
            </div>
            <div className="template-card">
              <div className="template-icon facebook-icon">👥</div>
              <h3>Facebook</h3>
              <ul className="template-sizes">
                <li>Post: 1200 x 630px</li>
                <li>Cover: 820 x 312px</li>
                <li>Story: 1080 x 1920px</li>
                <li>Ad: 1200 x 628px</li>
              </ul>
            </div>
            <div className="template-card">
              <div className="template-icon youtube-icon">▶️</div>
              <h3>YouTube</h3>
              <ul className="template-sizes">
                <li>Thumbnail: 1920 x 1080px</li>
                <li>Banner: 2560 x 1440px</li>
                <li>Video Cover: 1280 x 720px</li>
                <li>Profile: 800 x 800px</li>
              </ul>
            </div>
            <div className="template-card">
              <div className="template-icon twitter-icon">𝕏</div>
              <h3>Twitter/X</h3>
              <ul className="template-sizes">
                <li>Post: 1200 x 675px</li>
                <li>Header: 1500 x 500px</li>
                <li>Card: 1200 x 628px</li>
                <li>Profile: 400 x 400px</li>
              </ul>
            </div>
            <div className="template-card">
              <div className="template-icon linkedin-icon">💼</div>
              <h3>LinkedIn</h3>
              <ul className="template-sizes">
                <li>Post: 1200 x 627px</li>
                <li>Banner: 1584 x 396px</li>
                <li>Company Logo: 300 x 300px</li>
                <li>Article: 1200 x 627px</li>
              </ul>
            </div>
            <div className="template-card">
              <div className="template-icon print-icon">🖨️</div>
              <h3>Print Materials</h3>
              <ul className="template-sizes">
                <li>Flyer: 8.5 x 11 inches</li>
                <li>Business Card: 3.5 x 2 inches</li>
                <li>Poster: 18 x 24 inches</li>
                <li>Banner: Custom sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="tutorials-section">
        <div className="container">
          <h2>Learn Image Editing - Quick Tutorials</h2>
          <p className="section-subtitle">Master graphic design with our easy-to-follow guides</p>
          <div className="tutorials-grid">
            <div className="tutorial-card">
              <div className="tutorial-number">01</div>
              <h3>Creating Your First Design</h3>
              <p>Learn the basics: canvas setup, adding elements, and exporting your first graphic. Perfect for beginners starting with image editing.</p>
              <ul className="tutorial-topics">
                <li>Setting up canvas dimensions</li>
                <li>Adding and positioning layers</li>
                <li>Basic text formatting</li>
                <li>Exporting in multiple formats</li>
              </ul>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-number">02</div>
              <h3>Working with Text & Fonts</h3>
              <p>Master typography: font selection, text effects, custom styling, and creating eye-catching headlines for your designs.</p>
              <ul className="tutorial-topics">
                <li>Choosing the right fonts</li>
                <li>Text alignment and spacing</li>
                <li>Adding text outlines and shadows</li>
                <li>Creating gradient text effects</li>
              </ul>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-number">03</div>
              <h3>Advanced Layer Techniques</h3>
              <p>Become a pro with layers: opacity control, blend modes, layer organization, and creating complex compositions.</p>
              <ul className="tutorial-topics">
                <li>Layer ordering and grouping</li>
                <li>Adjusting opacity for depth</li>
                <li>Locking and hiding layers</li>
                <li>Layer-based workflow tips</li>
              </ul>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-number">04</div>
              <h3>Image Filters & Color Correction</h3>
              <p>Enhance your photos: brightness, contrast, saturation adjustments, and applying professional filters to images.</p>
              <ul className="tutorial-topics">
                <li>Basic color adjustments</li>
                <li>Applying artistic filters</li>
                <li>Temperature and tint control</li>
                <li>Creating vintage effects</li>
              </ul>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-number">05</div>
              <h3>Social Media Graphics Best Practices</h3>
              <p>Design for engagement: optimal dimensions, color psychology, composition rules, and platform-specific guidelines.</p>
              <ul className="tutorial-topics">
                <li>Platform-specific sizes</li>
                <li>Brand consistency tips</li>
                <li>Color scheme selection</li>
                <li>Readability optimization</li>
              </ul>
            </div>
            <div className="tutorial-card">
              <div className="tutorial-number">06</div>
              <h3>Creating Marketing Materials</h3>
              <p>Professional business graphics: flyers, posters, business cards, and promotional materials that convert.</p>
              <ul className="tutorial-topics">
                <li>Layout principles</li>
                <li>Call-to-action design</li>
                <li>Print-ready file setup</li>
                <li>CMYK vs RGB color modes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Thousands Choose Scenith for Graphic Design</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>No Learning Curve</h3>
              <p>Intuitive interface designed for beginners and professionals. Start creating beautiful graphics immediately without tutorials or training.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Completely Free Forever</h3>
              <p>No subscriptions, no hidden costs, no premium tiers. Access all features, unlimited projects, and professional tools at zero cost.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">☁️</div>
              <h3>Cloud-Based Storage</h3>
              <p>Your projects are automatically saved to the cloud. Access your designs from any device, anywhere, anytime. Never lose your work.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Lightning Fast Performance</h3>
              <p>Optimized for speed with instant previews, quick exports, and smooth editing. No lag, no waiting - just pure creativity.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎨</div>
              <h3>Professional Results</h3>
              <p>Create designs that rival those from expensive software. High-quality exports with transparent backgrounds and print-ready PDFs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Works Everywhere</h3>
              <p>Edit on desktop, tablet, or mobile. Responsive design ensures smooth editing experience across all devices and screen sizes.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>Your designs are private and secure. We never use your content for training or share it with third parties. Full ownership guaranteed.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Precision Tools</h3>
              <p>Pixel-perfect alignment, rotation controls, smart guides, and exact positioning. Professional-grade tools for precise design work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Deep Dive */}
      <section className="deep-dive-section">
        <div className="container">
          <h2>Design Solutions for Every Industry</h2>
          <div className="industry-cards">
            <div className="industry-card">
              <h3>🛍️ E-commerce & Online Stores</h3>
              <p>Create product images, promotional banners, sale announcements, and social media ads. Design Amazon listings, Etsy shop graphics, and Shopify store banners.</p>
              <div className="industry-features">
                <span>Product mockups</span>
                <span>Sale banners</span>
                <span>Social ads</span>
                <span>Listing images</span>
              </div>
            </div>
            <div className="industry-card">
              <h3>📊 Marketing & Advertising</h3>
              <p>Professional marketing materials including Google Display ads, Facebook ads, Instagram stories, email headers, landing page graphics, and infographics.</p>
              <div className="industry-features">
                <span>Display ads</span>
                <span>Social campaigns</span>
                <span>Email graphics</span>
                <span>Infographics</span>
              </div>
            </div>
            <div className="industry-card">
              <h3>🎓 Education & Training</h3>
              <p>Create course thumbnails, presentation slides, educational posters, worksheet headers, certificate designs, and student project templates.</p>
              <div className="industry-features">
                <span>Course materials</span>
                <span>Presentations</span>
                <span>Certificates</span>
                <span>Worksheets</span>
              </div>
            </div>
            <div className="industry-card">
              <h3>🎬 Content Creators & Influencers</h3>
              <p>YouTube thumbnails, Instagram posts, TikTok covers, podcast artwork, stream overlays, and merchandise designs for building your brand.</p>
              <div className="industry-features">
                <span>Video thumbnails</span>
                <span>Social posts</span>
                <span>Podcast art</span>
                <span>Merch designs</span>
              </div>
            </div>
            <div className="industry-card">
              <h3>🏢 Small Businesses</h3>
              <p>Business cards, flyers, menu designs, event posters, storefront signs, price lists, loyalty cards, and professional branding materials.</p>
              <div className="industry-features">
                <span>Business cards</span>
                <span>Menus</span>
                <span>Flyers</span>
                <span>Signage</span>
              </div>
            </div>
            <div className="industry-card">
              <h3>💼 Freelancers & Agencies</h3>
              <p>Client presentations, portfolio pieces, proposal covers, brand mockups, social media management graphics, and professional deliverables.</p>
              <div className="industry-features">
                <span>Client work</span>
                <span>Portfolios</span>
                <span>Proposals</span>
                <span>Mockups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">
            <h2>About Scenith Free Online Image Editor</h2>

            <div className="content-block">
              <h3>What is Scenith Image Editor?</h3>
              <p>Scenith is a powerful, free online image editor and graphic design tool that rivals professional software like Canva, Photoshop, and Figma. Our browser-based platform allows you to create stunning graphics, edit photos, design social media posts, and produce marketing materials without downloading any software. Whether you're a beginner or a professional designer, Scenith provides all the tools you need to bring your creative vision to life.</p>
            </div>

            <div className="content-block">
              <h3>Free Alternative to Canva and Photoshop</h3>
              <p>Looking for a free alternative to expensive design software? Scenith offers layer-based editing, custom fonts, advanced filters, and unlimited projects—all completely free. Unlike Canva's free tier with limitations, or Photoshop's expensive subscription, Scenith gives you professional-grade tools without any cost. No watermarks, no project limits, no premium features locked behind a paywall.</p>
            </div>

            <div className="content-block">
              <h3>Who Should Use This Image Editor?</h3>
              <p>Our image editor is perfect for social media managers creating Instagram posts and Facebook ads, content creators designing YouTube thumbnails and podcast covers, small business owners making flyers and business cards, marketers producing promotional materials, students working on projects and presentations, e-commerce sellers creating product images, and bloggers designing featured images and Pinterest pins.</p>
            </div>

            <div className="content-block">
              <h3>Key Features That Make Scenith Stand Out</h3>
              <p>Layer-based editing system allows precise control over every element in your design. Our extensive font library includes Google Fonts and system fonts for unlimited typography options. Advanced image filters let you adjust brightness, contrast, saturation, temperature, and apply artistic effects. The intuitive drag-and-drop interface makes designing quick and easy. Smart alignment guides ensure pixel-perfect positioning. Multi-page project support helps you create complete presentations and documents. Cloud storage automatically saves your work and syncs across devices.</p>
            </div>

            <div className="content-block">
              <h3>Export Options for Every Need</h3>
              <p>Export your designs in multiple formats: PNG with transparent backgrounds for logos and web graphics, JPG for photos and social media posts, and PDF for print-ready materials like flyers and brochures. All exports are high-quality with no watermarks or branding, giving you professional results every time.</p>
            </div>

            <div className="content-block">
              <h3>Browser-Based Design Tool - No Downloads Required</h3>
              <p>Scenith runs entirely in your web browser, meaning no software installation, no system requirements, no updates to manage. Simply visit our website, sign in, and start creating. This makes it accessible from any computer, whether you're using Windows, Mac, Linux, or even a Chromebook. Work from home, office, library, or anywhere with internet access.</p>
            </div>

            <div className="content-block">
              <h3>Mobile-Friendly Graphic Design</h3>
              <p>Our responsive design works seamlessly on tablets and smartphones. Touch gestures allow you to move, resize, and rotate elements on mobile devices. While we recommend desktop for complex projects, you can edit and export designs on the go when needed.</p>
            </div>

            <div className="content-block">
              <h3>Perfect Canvas Dimensions for Social Media</h3>
              <p>We provide preset canvas sizes for all major social media platforms including Instagram posts (1080x1080), Instagram stories (1080x1920), Facebook covers (820x312), YouTube thumbnails (1920x1080), Twitter headers (1500x500), LinkedIn banners (1584x396), and more. Start with the right dimensions every time and ensure your designs look perfect on every platform.</p>
            </div>

            <div className="content-block">
              <h3>Advanced Text Editing Capabilities</h3>
              <p>Our text tools rival professional design software with features like multiple font support, custom text colors including gradients, text outlines and strokes, drop shadows and effects, letter spacing and line height control, text rotation and transformation, curved text for creative designs, and text backgrounds with opacity control.</p>
            </div>

            <div className="content-block">
              <h3>Professional Image Editing Features</h3>
              <p>Edit your photos like a pro with color correction tools, brightness and contrast adjustment, saturation and vibrance control, temperature and tint for mood setting, exposure and highlight recovery, shadow detail enhancement, blur and sharpen filters, and artistic effects like sepia, grayscale, and vintage looks.</p>
            </div>

            <div className="content-block">
              <h3>How Scenith Helps Your Business Grow</h3>
              <p>Professional-looking graphics build credibility and trust with your audience. Consistent branding across all platforms strengthens brand recognition. Eye-catching social media posts increase engagement and followers. High-quality marketing materials drive conversions and sales. The ability to create designs in-house saves money on designers and agencies. Quick turnaround means faster campaign launches and A/B testing.</p>
            </div>

            <div className="content-block">
              <h3>Compare: Scenith vs Other Design Tools</h3>
              <p>Scenith offers advantages over competitors: completely free with no limitations or watermarks, unlike Canva's restricted free tier. Layer-based editing provides more control than simple template editors. Browser-based means no installation like Photoshop requires. Unlimited projects and cloud storage at no cost. Professional export options including transparent PNGs and print-ready PDFs. Regular feature updates and improvements based on user feedback.</p>
            </div>

            <div className="content-block">
              <h3>Getting Started is Easy</h3>
              <p>Simply sign up for a free account using email or Google sign-in. Choose your canvas size or select from preset dimensions. Add elements like text, images, and shapes using our intuitive toolbar. Customize colors, fonts, and effects to match your brand. Arrange layers to create depth and visual interest. Export your finished design in your preferred format. Access your saved projects anytime to make edits or create variations.</p>
            </div>

            <div className="content-block">
              <h3>Join the Scenith Community</h3>
              <p>Thousands of creators, marketers, and businesses trust Scenith for their graphic design needs. Join our growing community and discover why designers are switching from expensive software to our free, powerful platform. Start creating professional graphics today without spending a dime on subscriptions or licenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">250K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5M+</div>
              <div className="stat-label">Designs Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Forever</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available Access</div>
            </div>
          </div>
        </div>
      </section>       

      {error && <div className="error-toast">{error}</div>}

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <motion.div
            className="create-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button className="modal-close" onClick={() => setShowCreateModal(false)}>
              <FaTimes />
            </button>
            <h2>Create New Project</h2>
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                value={newProject.projectName}
                onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
                placeholder="My Awesome Design"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Width (px)</label>
                <input
                  type="number"
                  value={newProject.canvasWidth}
                  onChange={(e) => setNewProject({ ...newProject, canvasWidth: parseInt(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Height (px)</label>
                <input
                  type="number"
                  value={newProject.canvasHeight}
                  onChange={(e) => setNewProject({ ...newProject, canvasHeight: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Background Color</label>
              <input
                type="color"
                value={newProject.canvasBackgroundColor}
                onChange={(e) => setNewProject({ ...newProject, canvasBackgroundColor: e.target.value })}
              />
            </div>
            <div className="preset-sizes">
              <button onClick={() => setNewProject({ ...newProject, canvasWidth: 1080, canvasHeight: 1080 })}>Instagram Post (1080x1080)</button>
              <button onClick={() => setNewProject({ ...newProject, canvasWidth: 1920, canvasHeight: 1080 })}>YouTube Thumbnail (1920x1080)</button>
              <button onClick={() => setNewProject({ ...newProject, canvasWidth: 1200, canvasHeight: 628 })}>Facebook Cover (1200x628)</button>
            </div>
            <button className="cta-button" onClick={handleCreateProject}>
              Create Project
            </button>
          </motion.div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div className="login-modal" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>
              <FaTimes />
            </button>
            <h1>SCENITH</h1>
            <p>Login to Continue</p>
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

      {showDeleteModal && projectToDelete && (
        <div className="modal-overlay">
          <motion.div
            className="delete-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="delete-modal-icon">
              <div className="trash-can">
                <FaTrash />
              </div>
            </div>
            
            <h2>Delete Project?</h2>
            <p className="delete-warning">
              You're about to delete <strong>"{projectToDelete.projectName}"</strong>
            </p>
            <p className="delete-description">
              This action cannot be undone. Your project and all its contents will be permanently removed.
            </p>
      
            <div className="delete-modal-actions">
              <button
                className="cancel-delete-btn"
                onClick={() => {
                  setShowDeleteModal(false);
                  setProjectToDelete(null);
                }}
              >
                Cancel
              </button>
              <button
                className="confirm-delete-btn"
                onClick={handleDeleteProject}
              >
                <FaTrash /> Delete Forever
              </button>
            </div>
          </motion.div>
        </div>
      )}      
    </div>
  );
};

export default ImageEditingClient;