"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaTrash, FaSignOutAlt, FaBars } from 'react-icons/fa';
import '../../../../styles/Dashboard.css'; // You will copy your existing Dashboard.css here
import { API_BASE_URL, CDN_URL } from '@/app/config';

// Reuse the same ConfirmationModal component (pure client-side)
const ConfirmationModal = ({ isOpen, onClose, onConfirm, projectName }: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  projectName: string;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="confirmation-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="modal-title">Confirm Deletion</h3>
        <p className="modal-message">
          Are you sure you want to delete the project <strong>{projectName}</strong>? This action cannot be undone.
        </p>
        <div className="modal-buttons">
          <button className="modal-button cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button delete-button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DashboardPageClient: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [fps, setFps] = useState(25);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    email: '',
    firstName: '',
    lastName: '',
    picture: null as string | null,
    googleAuth: false,
    role: '',
  });
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // SEO Metadata (Next.js handles this in metadata export, but we add structured data)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Scenith Dashboard | Start Creating Content for FREE",
      "description": "Access your Scenith projects, create new videos, and grow your social media with our free online video editor. Professional tools, no watermark, unlimited creativity.",
      "url": "https://scenith.in/dashboard",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://scenith.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dashboard"
          }
        ]
      }
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoading(true);
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
          const profile = JSON.parse(storedProfile);
          setUserProfile({
            email: profile.email || '',
            firstName: profile.name ? profile.name.split(' ')[0] : '',
            lastName: profile.name ? profile.name.split(' ').slice(1).join(' ') : '',
            picture: profile.picture || null,
            googleAuth: profile.googleAuth || false,
            role: profile.role || 'BASIC',
          });
        }
        await fetchUserProfile();
        await fetchProjects();
        setIsDataLoaded(true);
        setIsLoading(false);
      } else {
        setUserProfile({
          email: '',
          firstName: '',
          lastName: '',
          picture: null,
          googleAuth: false,
          role: '',
        });
        setProjects([]);
        setIsDataLoaded(true);
        setIsLoading(false);
      }
    };
    loadData();

    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I create a new video project in Scenith?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click the '+ Create' button, enter a project name, select dimensions (1920x1080 for YouTube, 1080x1920 for TikTok/Reels), choose your FPS (24-120), and click Create. Use presets for quick setup."
          }
        },
        {
          "@type": "Question",
          "name": "What video formats does Scenith support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith supports all standard video formats with custom resolutions. Includes presets for YouTube (1920x1080), YouTube Shorts, Instagram Reels, and TikTok (1080x1920), with FPS options from 24 to 120."
          }
        },
        {
          "@type": "Question",
          "name": "How many projects can I create for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BASIC users can create up to 15 projects with 60 FPS max. CREATOR and STUDIO plans offer unlimited projects with higher FPS (up to 120) and advanced features."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Add WebApplication Schema
    const appScript = document.createElement('script');
    appScript.type = 'application/ld+json';
    appScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Scenith Video Editor",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any (Web-based)",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "10247"
      }
    });
    document.head.appendChild(appScript);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(appScript);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fullName = response.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const profile = {
        email: response.data.email || '',
        firstName,
        lastName,
        picture: response.data.picture || null,
        googleAuth: response.data.googleAuth || false,
        role: response.data.role || 'BASIC',
      };
      setUserProfile(profile);
      localStorage.setItem('userProfile', JSON.stringify({
        email: profile.email,
        name: fullName,
        picture: profile.picture,
        googleAuth: profile.googleAuth,
        role: profile.role,
      }));
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userProfile');
        router.push('/login?error=Session%20expired');
      }
    }
  };

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const projectList = response.data || [];

      const projectsWithThumbnails = await Promise.all(
        projectList.map(async (project: any) => {
          const projectDetails = await axios.get(`${API_BASE_URL}/projects/${project.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const timelineState = projectDetails.data.timelineState
            ? typeof projectDetails.data.timelineState === 'string'
              ? JSON.parse(projectDetails.data.timelineState)
              : projectDetails.data.timelineState
            : { segments: [], imageSegments: [] };

          const allSegments = [
            ...(timelineState.segments || []),
            ...(timelineState.imageSegments || []),
          ].sort((a: any, b: any) => a.timelineStartTime - b.timelineStartTime);

          let thumbnail = null;
          if (allSegments.length > 0) {
            const firstSegment = allSegments[0];
            if (firstSegment.sourceVideoPath) {
              thumbnail = await generateVideoThumbnail(project.id, firstSegment.sourceVideoPath);
            } else if (firstSegment.imagePath) {
              thumbnail = await generateImageThumbnail(project.id, firstSegment.imagePath);
            }
          }

          return { ...project, thumbnail };
        })
      );

      setProjects(projectsWithThumbnails);
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userProfile');
        router.push('/login?error=Session%20expired');
      }
    }
  };

  const generateVideoThumbnail = async (projectId: string, videoPath: string) => {
    const fullVideoPath = `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(videoPath.split('/').pop()!)}`;
    return new Promise<string | null>((resolve) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = fullVideoPath;
      video.muted = true;
      video.preload = 'metadata';

      video.onloadeddata = () => { video.currentTime = 1; };
      video.onseeked = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        const maxWidth = 600;
        const maxHeight = 400;
        const pixelRatio = window.devicePixelRatio || 1;
        let width = video.videoWidth;
        let height = video.videoHeight;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.drawImage(video, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.95));
      };
      video.onerror = () => resolve(null);
    });
  };

  const generateImageThumbnail = async (projectId: string, imagePath: string) => {
    const filename = imagePath.split('/').pop();
    const fullImagePath = `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename!)}`;
    return new Promise<string | null>((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = fullImagePath;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        const maxWidth = 600;
        const maxHeight = 400;
        const pixelRatio = window.devicePixelRatio || 1;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.95));
      };
      img.onerror = () => resolve(null);
    });
  };

  const createNewProject = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    if (!newProjectName) {
      setErrorMessage('Please enter a project name.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (fps <= 0 || fps > 120) {
      setErrorMessage('FPS must be between 1 and 120.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (userProfile.role === 'BASIC') {
      if (fps > 60) {
        setErrorMessage('Basic users cannot create projects with more than 60 FPS. Upgrade to Creator or Studio for higher FPS.');
        setTimeout(() => setErrorMessage(''), 5000);
        return;
      }
      if (projects.length >= 15) {
        setErrorMessage('Basic users can only create up to 15 projects. Upgrade to Creator or Studio for unlimited projects.');
        setTimeout(() => setErrorMessage(''), 5000);
        return;
      }
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/projects`,
        { name: newProjectName, width, height, fps },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newProject = response.data;
      setProjects([...projects, { ...newProject, thumbnail: null }]);
      setNewProjectName('');
      setWidth(1920);
      setHeight(1080);
      setFps(25);
      setIsDropdownOpen(false);

      // Full URL + token in query param
      const editorUrl = `https://scenith.in/projecteditor/${newProject.id}?token=${token}`;
      window.location.href = editorUrl;
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userProfile');
        router.push('/login?error=Session%20expired');
      } else {
        setErrorMessage('Failed to create project');
        setTimeout(() => setErrorMessage(''), 5000);
      }
    }
  };

  const loadProject = (projectId: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Full external navigation with token
    const editorUrl = `https://scenith.in/projecteditor/${projectId}?token=${token}`;
    window.location.href = editorUrl;
  };

  const deleteProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    setProjectToDelete(project);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/projects/${projectToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter(p => p.id !== projectToDelete.id));
      setSuccessMessage('Project deleted successfully');
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userProfile');
        router.push('/login?error=Session%20expired');
      }
    } finally {
      setShowModal(false);
      setProjectToDelete(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    setUserProfile({
      email: '',
      firstName: '',
      lastName: '',
      picture: null,
      googleAuth: false,
      role: '',
    });
    setProjects([]);
    router.push('/dashboard');
  };

  const handlePresetSelect = (w: number, h: number, f: number = 25) => {
    setWidth(w);
    setHeight(h);
    setFps(f);
  };

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 80;
        window.scrollTo({
          top: section.offsetTop - navHeight - 20,
          behavior: 'smooth'
        });
      }
      setIsNavMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <div className="dashboard">
        <div className="circuit-overlay"></div>
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Loading your dashboard...</p>
          </div>
        )}

        <div className="ripple-effect">
          <div className="ripple-ring"></div>
        </div>
        <div className="particle circle" style={{ width: '10px', height: '10px', top: '20%', left: '30%' }}></div>
        <div className="particle square" style={{ width: '8px', height: '8px', top: '40%', left: '70%' }}></div>
        <div className="particle circle" style={{ width: '12px', height: '12px', top: '60%', left: '15%' }}></div>

        <AnimatePresence>
          <ConfirmationModal
            isOpen={showModal}
            onClose={() => { setShowModal(false); setProjectToDelete(null); }}
            onConfirm={confirmDelete}
            projectName={projectToDelete?.name || ''}
          />
        </AnimatePresence>

        <section className="projects-section" id="dashboard-section">
          <div className="projects-section-header">
            <h2>My Projects</h2>
            <div className="header-container">
              <div className="create-dropdown">
                <button className="create-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <span className="plus-icon">+</span> Create
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-title">Create New Project</div>
                    <div className="dropdown-form">
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        className="dropdown-input"
                      />
                      <div className="dimension-inputs">
                        <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(parseInt(e.target.value, 10) || 1920)} className="dropdown-input dimension-input" />
                        <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10) || 1080)} className="dropdown-input dimension-input" />
                        <input type="number" placeholder="FPS" value={fps} onChange={(e) => setFps(parseInt(e.target.value, 10) || 25)} className="dropdown-input dimension-input" />
                      </div>
                    </div>
                    <div className="dropdown-presets">
                      <div className="dropdown-subtitle">Presets</div>
                      <div className="dropdown-item" onClick={() => handlePresetSelect(1920, 1080, 30)}>YouTube (1920x1080, 30 FPS)</div>
                      <div className="dropdown-item" onClick={() => handlePresetSelect(1080, 1920, 60)}>YouTube Shorts (1080x1920, 60 FPS)</div>
                      <div className="dropdown-item" onClick={() => handlePresetSelect(1080, 1920, 60)}>Instagram Reels (1080x1920, 60 FPS)</div>
                      <div className="dropdown-item" onClick={() => handlePresetSelect(1080, 1920, 60)}>TikTok (1080x1920, 60 FPS)</div>
                      <div className="dropdown-subtitle">FPS Options</div>
                      <div className="dropdown-item" onClick={() => setFps(24)}>24 FPS (Cinematic)</div>
                      <div className="dropdown-item" onClick={() => setFps(25)}>25 FPS (Standard)</div>
                      <div className="dropdown-item" onClick={() => setFps(30)}>30 FPS (Common)</div>
                      <div className="dropdown-item" onClick={() => setFps(60)}>60 FPS (Smooth)</div>
                    </div>
                    <button className="dropdown-create-button" onClick={createNewProject}>Create</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {successMessage && (
              <motion.p className="success-message" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {successMessage}
              </motion.p>
            )}
            {errorMessage && (
              <motion.p className="error-message" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>

          {userProfile.email ? (
            <div className="project-grid">
              {projects.length === 0 ? (
                <p className="no-projects">No projects yet. Create one to get started!</p>
              ) : (
                projects.map((project) => (
                  <Tilt key={project.id} tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.2}>
                    <motion.div
                      className="project-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="thumbnail-container" onClick={() => loadProject(project.id)}>
                        {project.thumbnail ? (
                          <motion.img src={project.thumbnail} alt={`${project.name} thumbnail`} className="project-thumbnail" />
                        ) : (
                          <div className="thumbnail-placeholder">No Preview Available</div>
                        )}
                        <motion.div
                          className="delete-icon"
                          onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <FaTrash />
                        </motion.div>
                      </div>
                      <h3 className="project-title">{project.name}</h3>
                    </motion.div>
                  </Tilt>
                ))
              )}
            </div>
          ) : (
            <p className="not-logged-in">You are not logged-in!</p>
          )}
        </section>

        {/* Hero Introduction - Professional & SEO Rich */}
        {/* Hero Introduction - Professional & SEO Rich */}
        <section className="hero-intro-section" style={{
          padding: '100px 20px 80px',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <motion.div
            className="container"
            style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <motion.h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  marginBottom: '30px',
                  color: '#1E293B',
                  fontWeight: '800',
                  letterSpacing: '-1px',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Your Creative Command Center
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  maxWidth: '900px',
                  margin: '0 auto',
                  lineHeight: '1.8',
                  color: '#64748B'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Welcome to Scenith Dashboard – where professional video creation meets effortless simplicity.
                Manage unlimited projects, create stunning content for <strong style={{ color: '#1E293B' }}>YouTube, TikTok, Instagram Reels</strong>,
                and export in broadcast quality. All from your browser, no downloads required.
              </motion.p>
            </div>

            {/* Stats Grid - Eye-catching */}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '30px',
                marginBottom: '80px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { number: '10K+', label: 'Active Creators', icon: '👥' },
                { number: '15+', label: 'Free Projects', icon: '🎬' },
                { number: '120', label: 'FPS Support', icon: '⚡' },
                { number: '100%', label: 'Browser-Based', icon: '🌐' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px 20px',
                    borderRadius: '20px',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    borderColor: '#3B82F6'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '10px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#64748B' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Platform Features - Modern Cards */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          position: 'relative',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '80px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '25px',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                Everything You Need to Create Amazing Videos
              </h2>
              <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto',
                color: '#64748B',
                lineHeight: '1.8'
              }}>
                From concept to export, Scenith provides professional tools that make video editing feel like magic
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px'
            }}>
              {[
                {
                  icon: '🎯',
                  title: 'Smart Project Presets',
                  description: 'Launch projects instantly with one-click presets for YouTube (1920x1080), TikTok (1080x1920), Instagram Reels, and custom dimensions. Choose from 24 to 120 FPS based on your content needs.',
                  features: ['YouTube 1920x1080 @ 30 FPS', 'TikTok/Reels 1080x1920 @ 60 FPS', 'Custom resolutions supported', 'FPS: 24, 25, 30, 60, 120']
                },
                {
                  icon: '✂️',
                  title: 'Professional Timeline Editor',
                  description: 'Frame-accurate editing with multi-track support. Cut, trim, and arrange clips with precision. Add transitions, effects, and keyframe animations for dynamic content that stands out.',
                  features: ['Frame-perfect precision', 'Multi-layer timeline', 'Drag & drop interface', 'Unlimited undo/redo']
                },
                {
                  icon: '🎤',
                  title: 'AI Voice Generation',
                  description: 'Generate lifelike voiceovers in 20+ languages with 40+ natural voices. Perfect for narration, tutorials, and multilingual content. BASIC plan includes 5,000 characters/month.',
                  features: ['40+ AI voices', '20+ languages', 'Natural intonation', 'Commercial use rights']
                },
                {
                  icon: '💬',
                  title: 'Auto Subtitle Creation',
                  description: 'Add professional subtitles automatically with AI-powered transcription. Customize fonts, colors, and animations. Perfect for accessibility and social media engagement.',
                  features: ['Auto-transcription', 'Custom styling', 'Multiple languages', 'Export as SRT']
                },
                {
                  icon: '🎨',
                  title: 'Text & Graphics',
                  description: 'Create stunning titles, lower thirds, and animated text overlays. Choose from preset styles or customize fonts, colors, and animations to match your brand identity.',
                  features: ['Custom fonts', 'Keyframe animation', 'Preset templates', 'Brand consistency']
                },
                {
                  icon: '🎵',
                  title: 'Advanced Audio Tools',
                  description: 'Mix multiple audio tracks, adjust volume curves, add fade effects, and apply professional audio filters. Achieve broadcast-quality sound for your videos.',
                  features: ['Multi-track mixing', 'Volume automation', 'Fade in/out effects', 'Audio filters']
                },
                {
                  icon: '💾',
                  title: 'Cloud Project Management',
                  description: 'Access projects from any device with automatic cloud sync. Never lose work with continuous auto-save. Organize with thumbnails and quick search.',
                  features: ['Auto-save every 10s', 'Cross-device access', 'Visual thumbnails', 'Quick search']
                },
                {
                  icon: '📤',
                  title: 'High-Quality Exports',
                  description: 'Export videos in HD, Full HD, or custom resolutions. No watermarks, even on free plan. Choose quality settings optimized for YouTube, social media, or web.',
                  features: ['No watermarks', 'HD/Full HD export', 'Platform-optimized', 'Fast rendering']
                },
                {
                  icon: '⚡',
                  title: 'Lightning-Fast Performance',
                  description: 'Browser-based editor powered by WebGL and GPU acceleration. Edit 4K videos smoothly without expensive hardware. No installation, no updates – just create.',
                  features: ['GPU acceleration', 'No installation needed', 'Works on any device', 'Real-time preview']
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-us-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '24px',
                    padding: '40px',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    borderColor: '#3B82F6'
                  }}
                >
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '25px',
                    filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.2))'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '25px',
                    color: '#64748B'
                  }}>
                    {feature.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#64748B'
                  }}>
                    {feature.features.map((item, i) => (
                      <li key={i} style={{
                        padding: '8px 0',
                        borderBottom: i < feature.features.length - 1 ? '1px solid rgba(226, 232, 240, 0.8)' : 'none'
                      }}>
                        <span style={{ color: '#3B82F6', marginRight: '10px' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* Comparison Table - Professional */}
       <section style={{
         padding: '100px 20px',
         background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)',
         borderTop: '1px solid rgba(226, 232, 240, 0.8)',
         borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
       }}>
         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
           <motion.div
             style={{ textAlign: 'center', marginBottom: '80px' }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 style={{
               fontSize: 'clamp(2rem, 4vw, 3.5rem)',
               marginBottom: '25px',
               fontWeight: '700',
               color: '#1E293B'
             }}>
               Scenith vs Traditional Desktop Editors
             </h2>
             <p style={{
               fontSize: '1.2rem',
               maxWidth: '800px',
               margin: '0 auto',
               color: '#64748B'
             }}>
               See why thousands of creators are switching to browser-based video editing
             </p>
           </motion.div>

           <motion.div
             style={{
               background: 'rgba(255, 255, 255, 0.95)',
               backdropFilter: 'blur(20px)',
               border: '1px solid rgba(226, 232, 240, 0.8)',
               borderRadius: '24px',
               padding: '50px',
               overflowX: 'auto',
               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
             }}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <table style={{
               width: '100%',
               borderCollapse: 'separate',
               borderSpacing: 0
             }}>
               <thead>
                 <tr style={{
                   borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
                   background: 'rgba(59, 130, 246, 0.05)'
                 }}>
                   <th style={{
                     padding: '20px',
                     textAlign: 'left',
                     fontSize: '1.1rem',
                     fontWeight: '600',
                     color: '#1E293B'
                   }}>Feature</th>
                   <th style={{
                     padding: '20px',
                     textAlign: 'center',
                     fontSize: '1.1rem',
                     fontWeight: '600',
                     background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent'
                   }}>Scenith</th>
                   <th style={{
                     padding: '20px',
                     textAlign: 'center',
                     fontSize: '1.1rem',
                     fontWeight: '600',
                     color: '#64748B'
                   }}>Desktop Editors</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { feature: 'Installation', scenith: '✅ None required (Web-based)', desktop: '❌ Hours of downloading' },
                   { feature: 'Storage Space', scenith: '✅ Cloud (0 GB local)', desktop: '❌ 5-20 GB required' },
                   { feature: 'System Requirements', scenith: '✅ Any modern browser', desktop: '❌ High-end PC needed' },
                   { feature: 'Updates', scenith: '✅ Automatic & instant', desktop: '⚠️ Manual downloads' },
                   { feature: 'Cross-Platform', scenith: '✅ Windows, Mac, Linux', desktop: '❌ OS-specific' },
                   { feature: 'Collaboration', scenith: '✅ Built-in cloud sharing', desktop: '❌ Complex file transfers' },
                   { feature: 'Price (Basic)', scenith: '✅ Free forever', desktop: '❌ $300-800 one-time' },
                   { feature: 'AI Features', scenith: '✅ Voice, Subtitles included', desktop: '⚠️ Expensive add-ons' },
                   { feature: 'Learning Curve', scenith: '✅ Intuitive in minutes', desktop: '❌ Weeks of tutorials' },
                   { feature: 'Mobility', scenith: '✅ Edit from anywhere', desktop: '❌ Tied to one device' }
                 ].map((row, index) => (
                   <motion.tr
                     key={index}
                     style={{
                       borderBottom: index < 9 ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
                       transition: 'all 0.3s ease'
                     }}
                     whileHover={{
                       background: 'rgba(59, 130, 246, 0.05)'
                     }}
                   >
                     <td style={{
                       padding: '20px',
                       fontWeight: '500',
                       color: '#1E293B'
                     }}>
                       {row.feature}
                     </td>
                     <td style={{
                       padding: '20px',
                       textAlign: 'center',
                       color: '#1E293B',
                       fontWeight: '600'
                     }}>
                       {row.scenith}
                     </td>
                     <td style={{
                       padding: '20px',
                       textAlign: 'center',
                       color: '#64748B'
                     }}>
                       {row.desktop}
                     </td>
                   </motion.tr>
                 ))}
               </tbody>
             </table>
           </motion.div>

           <motion.div
             style={{
               textAlign: 'center',
               marginTop: '60px',
               padding: '40px',
               background: 'rgba(59, 130, 246, 0.05)',
               borderRadius: '20px',
               border: '1px solid rgba(59, 130, 246, 0.2)',
               boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)'
             }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h3 style={{
               fontSize: '1.8rem',
               marginBottom: '20px',
               background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               fontWeight: '700'
             }}>
               💡 The Clear Winner for Modern Creators
             </h3>
             <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto', color: '#64748B' }}>
               Scenith eliminates the complexity, cost, and hardware requirements of traditional editing software.
               Start creating professional videos in seconds, not hours. No credit card required for the free plan.
             </p>
           </motion.div>
         </div>
       </section>

        {/* FAQ Section - Modern Accordion Style */}
        <section style={{
          padding: '100px 20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '80px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '25px',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                Frequently Asked Questions
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#64748B'
              }}>
                Everything you need to know about creating videos in Scenith
              </p>
            </motion.div>

            <div style={{ display: 'grid', gap: '25px' }}>
              {[
                {
                  q: 'How do I create my first video project?',
                  a: 'Click the "+ Create" button in your dashboard, name your project, and choose a preset (YouTube 1920x1080, TikTok 1080x1920, etc.) or set custom dimensions. Select your FPS (24-120 based on plan) and click Create. Your editor opens instantly – no installation needed!'
                },
                {
                  q: 'What\'s included in the free BASIC plan?',
                  a: 'BASIC users get 15 projects, up to 60 FPS, all core editing features, AI voice generation (5,000 chars/month), subtitle creation, HD exports, and zero watermarks. It\'s perfect for YouTubers, social media creators, and anyone starting their content journey.'
                },
                {
                  q: 'Can I create videos for TikTok, Instagram Reels, and YouTube Shorts?',
                  a: 'Absolutely! Use our 1080x1920 preset at 60 FPS – optimized for vertical short-form content. Our editor handles all aspect ratios: 16:9 for YouTube, 9:16 for Reels/TikTok/Shorts, 1:1 for Instagram posts, or any custom ratio you need.'
                },
                {
                  q: 'Do I need powerful hardware to edit videos?',
                  a: 'No! Scenith runs entirely in your browser using GPU acceleration. Any modern laptop, desktop, or even tablet with Chrome, Firefox, or Safari can edit smoothly. No expensive hardware upgrades required.'
                },
                {
                  q: 'How do Creator and Studio plans differ from BASIC?',
                  a: 'CREATOR unlocks unlimited projects, 50,000 AI voice characters/month, and priority support. STUDIO adds 120 FPS support, 150,000 AI characters, advanced features, and dedicated assistance. Both remove all limits on exports and storage.'
                },
                {
                  q: 'Are my projects saved automatically?',
                  a: 'Yes! Scenith auto-saves every 10 seconds to the cloud. Your work syncs across all devices instantly. Close your browser, switch computers – your projects are always safe and accessible from anywhere.'
                },
                {
                  q: 'Can I export videos without watermarks?',
                  a: 'Yes, all Scenith exports are watermark-free, even on the free BASIC plan! Export in HD, Full HD, or custom resolutions optimized for any platform. Your brand stays clean and professional.'
                },
                {
                  q: 'What video editing features are included?',
                  a: 'Full timeline editor with multi-track support, frame-accurate cutting, transitions, keyframe animations, text overlays, audio mixing, color grading, effects, and more. Everything you\'d expect from professional software, accessible from your browser.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="about-us-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '16px',
                    padding: '35px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    borderColor: '#3B82F6',
                    transform: 'translateX(5px)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '20px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#64748B'
                  }}>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Compelling */}
        <section style={{
          padding: '120px 20px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <motion.div
            className="container"
            style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '30px',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#1E293B'
            }}>
              Ready to Create Your First Masterpiece?
            </h2>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '50px',
              lineHeight: '1.8',
              color: '#64748B'
            }}>
              Join <strong style={{ color: '#1E293B' }}>10,000+ creators</strong> using Scenith to produce professional videos for YouTube,
              TikTok, Instagram, and beyond. Start with <strong style={{ color: '#1E293B' }}>15 free projects</strong> – no credit card required.
            </p>

            {!userProfile.email && (
              <motion.button
                onClick={() => router.push('/dashboard')}
                style={{
                  fontSize: '1.3rem',
                  padding: '20px 60px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Creating Free – No Credit Card 🚀
              </motion.button>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginTop: '50px',
              flexWrap: 'wrap'
            }}>
              {['✅ No Watermarks', '✅ HD Exports', '✅ AI Voice & Subtitles', '✅ Cloud Storage'].map((benefit, i) => (
                <span key={i} style={{
                  fontSize: '1.1rem',
                  color: '#64748B',
                  fontWeight: '500'
                }}>
                  {benefit}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default DashboardPageClient;