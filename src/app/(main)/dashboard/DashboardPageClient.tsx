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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        <section className="about-us-section" id="about-us-section">
          <div className="section-header">
            <h2>
              <span className="letter">A</span><span className="letter">b</span><span className="letter">o</span><span className="letter">u</span><span className="letter">t</span>
              <span className="letter space"> </span>
              <span className="letter">S</span><span className="letter">c</span><span className="letter">e</span><span className="letter">n</span><span className="letter">i</span><span className="letter">t</span><span className="letter">h</span>
            </h2>
            <div className="logo-element"></div>
          </div>
          <motion.div className="about-us-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="about-us-card">
              <h3 className="about-us-subtitle">Our Mission</h3>
              <p>At Scenith, we empower creators to reach the zenith of visual storytelling. Our platform, born from the vision of two college friends in India, combines intuitive design with professional-grade tools to make your creative process seamless and impactful.</p>
            </div>
            <div className="about-us-card">
              <h3 className="about-us-subtitle">Our Journey</h3>
              <p>Since February 2025, we've poured our passion into crafting Scenith—a video editor designed by creators, for creators. Every feature, from precise audio manipulation to dynamic keyframing, is built to elevate your storytelling to new heights.</p>
            </div>
            <div className="about-us-card">
              <h3 className="about-us-subtitle">Why Scenith?</h3>
              <p>We understand the demands of digital content creation. Scenith offers a comprehensive toolkit—frame-perfect editing, versatile transitions, and customizable elements—to ensure your stories captivate and inspire without compromise.</p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default DashboardPageClient;