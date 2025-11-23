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

  // Delete project
  const handleDeleteProject = async (projectId: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/image-editor/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProjects(projects.filter((p) => p.id !== projectId));
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
            description: "Free online image editor for creating graphics with layers, text, shapes, and filters.",
            url: typeof window !== "undefined" ? window.location.href : "/tools/image-editing",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
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
                          onClick={() => handleDeleteProject(project.id)}
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
    </div>
  );
};

export default ImageEditingClient;