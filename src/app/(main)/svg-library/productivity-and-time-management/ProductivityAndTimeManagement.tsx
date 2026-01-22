"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaSearch, FaEdit, FaTimes, FaDownload, FaCheck, FaClock, FaCalendar, FaTasks } from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../styles/svg-library/ProductivityIcons.css";
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

const ProductivityIconsPage: React.FC = () => {
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
  const [selectedElementForDownload, setSelectedElementForDownload] = useState<ImageElement | null>(null);
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
        const productivityElements = response.data.filter(
          (el: ImageElement) => el.category.toLowerCase() === "productivity & time management"
        );
        setElements(productivityElements);
        setFilteredElements(productivityElements);
      } catch (error) {
        console.error("Error fetching elements:", error);
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
          el.tags?.toLowerCase().includes(query)
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
    <div className="productivity-icons-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free Productivity & Time Management Icons - SVG Download | Scenith",
            description: "Download 10+ free productivity and time management SVG icons. Clock icons, calendar icons, task management, deadline, planner, schedule icons and more. Perfect for productivity apps, project management tools, and business applications.",
            url: typeof window !== "undefined" ? window.location.href : "/svg-library/productivity-time-management",
            keywords: "productivity icons, time management icons, calendar icons, clock icons, task icons, deadline icons, schedule icons, planner icons, timer icons, free svg icons",
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

      <section className="productivity-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-icon-badge">
              <FaClock className="badge-icon" />
              <FaCalendar className="badge-icon" />
              <FaTasks className="badge-icon" />
            </div>
            <h1>Free Productivity & Time Management Icons</h1>
            <p className="hero-subtitle">
              Download 500+ professional productivity and time management SVG icons for free. Perfect for productivity apps, project management software, scheduling tools, task managers, calendar applications, and business dashboards. All icons are fully customizable, scalable, and ready for commercial use with no attribution required.
            </p>

            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search productivity icons: calendar, clock, task, deadline, schedule..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search productivity icons"
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
                <span className="stat-number">{elements.length}+</span>
                <span className="stat-label">Productivity Icons</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free Forever</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">SVG</span>
                <span className="stat-label">Vector Format</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="elements-grid-section">
        <div className="container">
          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading productivity icons...</p>
            </div>
          ) : filteredElements.length === 0 ? (
            <div className="empty-state">
              <h3>No productivity icons found</h3>
              <p>Try adjusting your search or browse all our productivity icons</p>
            </div>
          ) : (
            <>
              <div className="results-count">
                <p>
                  Showing {filteredElements.length} productivity {filteredElements.length === 1 ? "icon" : "icons"}
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
                      <img src={element.cdnUrl} alt={`${element.name} - Productivity Icon`} loading="lazy" />
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
                          title="Download Icon"
                          aria-label="Download productivity icon"
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
            </>
          )}
        </div>
      </section>

      <section className="productivity-features-section">
        <div className="container">
          <h2>Why Choose Our Productivity & Time Management Icons?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Complete Time Management Set</h3>
              <p>Comprehensive collection of clock icons, timer icons, stopwatch icons, countdown icons, alarm icons, and schedule icons. Perfect for time tracking apps, productivity dashboards, and scheduling software.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Calendar & Planning Icons</h3>
              <p>Extensive calendar icons including date picker, event planning, appointment scheduling, booking, reminder, and planner icons. Ideal for calendar applications and event management tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Task & Project Management</h3>
              <p>Complete task management icon set with checklist icons, to-do list icons, project milestone icons, progress tracking, deadline icons, and completion status indicators for project management platforms.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Goal & Achievement Icons</h3>
              <p>Goal setting icons, target achievement icons, milestone markers, KPI indicators, performance metrics, and success tracking icons for productivity and performance management applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics & Reporting</h3>
              <p>Productivity analytics icons, time tracking charts, efficiency metrics, performance dashboards, statistics icons, and data visualization symbols for reporting and analysis features.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Notifications & Reminders</h3>
              <p>Alert icons, notification bell icons, reminder symbols, push notification icons, deadline alerts, and priority markers for keeping users informed and on schedule.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Workflow & Automation</h3>
              <p>Process automation icons, workflow icons, integration symbols, sync icons, recurring task icons, and batch operation indicators for automated productivity tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Fully Customizable Vectors</h3>
              <p>Edit any productivity icon online with our built-in editor. Change colors to match your brand, resize without quality loss, combine multiple icons, and export in SVG, PNG, or JPG formats instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="icon-categories-section">
        <div className="container">
          <h2>Productivity Icon Categories</h2>
          <div className="categories-showcase">
            <div className="category-showcase-card">
              <h3>⏰ Time Tracking & Clocks</h3>
              <p>Clock faces, digital clocks, stopwatch icons, timer icons, time zone icons, hourglasses, countdown timers, time logs, punch clock icons, and time tracking symbols. Essential for time management applications, employee tracking systems, and productivity monitoring tools.</p>
            </div>
            <div className="category-showcase-card">
              <h3>📅 Calendar & Scheduling</h3>
              <p>Monthly calendars, weekly planners, daily schedules, date pickers, event icons, appointment booking, calendar sync, recurring events, availability calendars, and scheduling icons. Perfect for booking systems, appointment schedulers, and calendar applications.</p>
            </div>
            <div className="category-showcase-card">
              <h3>✅ Tasks & To-Do Lists</h3>
              <p>Checkboxes, check marks, task lists, to-do icons, subtasks, task priority icons, task status, completion icons, pending tasks, overdue indicators, and task assignment symbols. Ideal for task management apps and to-do list applications.</p>
            </div>
            <div className="category-showcase-card">
              <h3>📋 Project Management</h3>
              <p>Project icons, milestone markers, gantt charts, kanban boards, sprint icons, project timeline, dependencies, deliverables, project status, and phase indicators. Essential for project management software and collaboration platforms.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🎯 Goals & Objectives</h3>
              <p>Target icons, goal setting, objective markers, KPI icons, achievement badges, success indicators, progress bars, completion percentages, milestone celebrations, and performance tracking symbols for goal-oriented applications.</p>
            </div>
            <div className="category-showcase-card">
              <h3>📊 Productivity Analytics</h3>
              <p>Charts, graphs, statistics, metrics dashboards, performance indicators, efficiency scores, trend analysis, comparative analytics, productivity reports, and data visualization icons for analytics features.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🔔 Alerts & Reminders</h3>
              <p>Notification bells, alert icons, reminder symbols, deadline warnings, priority alerts, urgent markers, snooze icons, notification badges, push alerts, and attention indicators for reminder systems.</p>
            </div>
            <div className="category-showcase-card">
              <h3>⚙️ Settings & Preferences</h3>
              <p>Settings icons, preferences, configuration, customization options, user settings, notification preferences, display options, time zone settings, language preferences, and account management icons.</p>
            </div>
            <div className="category-showcase-card">
              <h3>📱 Mobile Productivity</h3>
              <p>Mobile app icons, smartphone productivity, tablet interfaces, cross-device sync, mobile notifications, on-the-go productivity, mobile time tracking, and responsive design icons for mobile-first applications.</p>
            </div>
            <div className="category-showcase-card">
              <h3>👥 Team Collaboration</h3>
              <p>Team icons, collaboration symbols, shared tasks, team calendars, group assignments, resource allocation, team meetings, collaboration tools, and workspace management icons for team productivity platforms.</p>
            </div>
            <div className="category-showcase-card">
              <h3>🔄 Automation & Workflows</h3>
              <p>Automation icons, workflow arrows, process flows, recurring tasks, batch operations, auto-sync, scheduled automation, trigger icons, integration symbols, and smart automation indicators.</p>
            </div>
            <div className="category-showcase-card">
              <h3>📈 Performance & Efficiency</h3>
              <p>Efficiency metrics, performance scores, productivity levels, optimization icons, improvement indicators, speed icons, acceleration symbols, and performance enhancement markers for tracking productivity improvements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section">
        <div className="container">
          <h2>Perfect Applications for Productivity Icons</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3>📱 Productivity & Task Management Apps</h3>
              <p>Enhance task management applications like Todoist, Asana, Trello alternatives with professional icons for tasks, subtasks, priorities, deadlines, assignments, status updates, and completion tracking.</p>
            </div>
            <div className="use-case-card">
              <h3>📅 Calendar & Scheduling Software</h3>
              <p>Improve calendar applications and scheduling tools with comprehensive icons for events, appointments, reminders, recurring schedules, time zones, availability, booking, and calendar views.</p>
            </div>
            <div className="use-case-card">
              <h3>⏱️ Time Tracking Applications</h3>
              <p>Build professional time tracking software with icons for clocks, timers, stopwatches, time logs, billable hours, timesheet entries, project time allocation, and time reporting features.</p>
            </div>
            <div className="use-case-card">
              <h3>🎯 Project Management Platforms</h3>
              <p>Create comprehensive project management tools with icons for projects, milestones, gantt charts, kanban boards, sprints, dependencies, resources, deliverables, and project status tracking.</p>
            </div>
            <div className="use-case-card">
              <h3>💼 Business Productivity Suites</h3>
              <p>Develop enterprise productivity software with icons for workflows, processes, approvals, automation, integrations, analytics, reporting, and business intelligence dashboards.</p>
            </div>
            <div className="use-case-card">
              <h3>📊 Analytics & Reporting Tools</h3>
              <p>Build productivity analytics platforms with icons for metrics, KPIs, performance indicators, charts, graphs, trends, insights, comparisons, and data visualization components.</p>
            </div>
            <div className="use-case-card">
              <h3>🔔 Notification & Reminder Systems</h3>
              <p>Implement effective reminder systems with icons for alerts, notifications, push messages, deadline warnings, priority markers, snooze options, and notification management.</p>
            </div>
            <div className="use-case-card">
              <h3>👥 Team Collaboration Tools</h3>
              <p>Enhance team productivity platforms with icons for shared tasks, team calendars, resource allocation, meeting scheduling, collaboration features, and workspace management.</p>
            </div>
            <div className="use-case-card">
              <h3>🎓 Educational & Learning Platforms</h3>
              <p>Improve educational apps with icons for study schedules, assignment deadlines, exam timers, course planning, learning goals, progress tracking, and academic calendars.</p>
            </div>
            <div className="use-case-card">
              <h3>💪 Habit & Goal Tracking Apps</h3>
              <p>Create habit tracking applications with icons for daily routines, habit streaks, goal milestones, achievement badges, progress indicators, and motivational rewards.</p>
            </div>
            <div className="use-case-card">
              <h3>🏢 HR & Employee Management</h3>
              <p>Build HR systems with icons for attendance tracking, leave management, shift scheduling, performance reviews, employee goals, timesheet approvals, and workforce planning.</p>
            </div>
            <div className="use-case-card">
              <h3>📱 Mobile Productivity Apps</h3>
              <p>Design mobile-first productivity apps with optimized icons for on-the-go task management, mobile time tracking, quick reminders, mobile calendars, and offline productivity features.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-comparison-section">
        <div className="container">
          <h2>Scenith vs Other Productivity Icon Libraries</h2>
          <div className="comparison-grid">
            <div className="comparison-card scenith-card">
              <h3>✅ Scenith Productivity Icons</h3>
              <ul>
                <li><FaCheck /> 500+ productivity-specific icons</li>
                <li><FaCheck /> 100% free with no limitations</li>
                <li><FaCheck /> No attribution required ever</li>
                <li><FaCheck /> Built-in online icon editor</li>
                <li><FaCheck /> Unlimited downloads forever</li>
                <li><FaCheck /> Full commercial use rights</li>
                <li><FaCheck /> Multiple export formats (SVG, PNG, JPG)</li>
                <li><FaCheck /> Instant customization & editing</li>
                <li><FaCheck /> Regular updates with new icons</li>
                <li><FaCheck /> No watermarks on any icons</li>
                <li><FaCheck /> Perfect for productivity apps</li>
                <li><FaCheck /> Scalable vector quality</li>
              </ul>
            </div>
            <div className="comparison-card other-card">
              <h3>Other Productivity Icon Sites</h3>
              <ul>
                <li>❌ Limited free productivity icons</li>
                <li>❌ Premium subscriptions required ($15-50/month)</li>
                <li>❌ Attribution mandatory for free tier</li>
                <li>❌ External editing software needed</li>
                <li>❌ Download limits (10-20 per day)</li>
                <li>❌ Separate commercial licenses ($$$)</li>
                <li>❌ Restricted export options</li>
                <li>❌ Complex customization process</li>
                <li>❌ Infrequent icon additions</li>
                <li>❌ Watermarks on free downloads</li>
                <li>❌ Generic icon collections</li>
                <li>❌ Variable quality standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-content-section">
        <div className="container">
          <div className="seo-content">
            <h2>Complete Guide to Productivity & Time Management Icons</h2>

            <div className="content-block">
              <h3>Why Productivity Icons Are Essential for Modern Applications</h3>
              <p>
                Productivity and time management icons have become indispensable elements in modern software applications, serving as visual shortcuts that enable users to navigate complex productivity tools with ease and efficiency. In today's fast-paced digital workspace, where users interact with multiple productivity applications daily including task managers, calendar apps, time trackers, project management platforms, and collaboration tools, clear and intuitive iconography makes the difference between a frustrating user experience and a delightful one. Productivity icons communicate functionality instantly, transcending language barriers and reducing the cognitive load required to understand and use productivity features. A well-designed clock icon immediately signals time-related functionality, a checkbox indicates tasks or to-do items, and a calendar icon represents scheduling and date-related features. These visual cues allow users to make split-second decisions about which tools to use, where to find specific features, and how to accomplish their productivity goals efficiently. Research in user interface design consistently demonstrates that applications with clear, recognizable iconography see higher user engagement, faster task completion times, and better overall user satisfaction scores compared to text-only interfaces.
              </p>
            </div>

            <div className="content-block">
              <h3>The Psychology Behind Effective Productivity Icon Design</h3>
              <p>
                Understanding the psychological principles that make productivity icons effective is crucial for creating applications that users find intuitive and engaging. The human brain processes visual information 60,000 times faster than text, making icons an incredibly efficient method of communication in productivity applications. Successful productivity icons leverage familiar metaphors and real-world objects that users already understand: clocks represent time, calendars represent dates, checkmarks represent completion, and targets represent goals. This use of skeuomorphic or semi-skeuomorphic design elements creates immediate recognition and reduces the learning curve for new users. Color psychology also plays a significant role in productivity icon design. Green typically signals completion, success, or go-ahead actions. Red indicates urgency, deadlines, or warnings. Blue conveys trust, stability, and calm focus. Yellow represents attention or caution. Orange suggests energy and action. Understanding these color associations helps designers create productivity icons that not only look appealing but also communicate the right emotional context for their functions. Consistency in icon style across a productivity application creates a cohesive visual language that users can quickly learn and rely upon, reducing mental friction and allowing them to focus on their actual work rather than figuring out how to use the tools.
              </p>
            </div>

            <div className="content-block">
              <h3>Comprehensive Productivity Icon Categories and Their Uses</h3>
              <p>
                Productivity icons span numerous categories, each serving specific functional purposes in productivity applications. Time tracking icons include analog clocks, digital clocks, stopwatches, timers, hourglasses, and time logs, essential for time management applications, employee tracking systems, freelancer time tracking, and productivity analytics dashboards. Calendar and scheduling icons encompass monthly views, weekly planners, daily schedules, date pickers, event markers, appointment slots, recurring event symbols, and availability indicators, crucial for scheduling software, booking systems, appointment management, and calendar synchronization features. Task management icons feature checkboxes in various states (empty, checked, partial), to-do list symbols, task priorities (high, medium, low), deadline indicators, task assignment icons, subtask markers, task dependencies, and completion status indicators, fundamental for task management apps, to-do list applications, project tracking, and workflow management systems. Project management icons include project folders, milestone markers, gantt chart elements, kanban board cards, sprint indicators, project timelines, dependency arrows, resource allocation symbols, deliverable icons, and project phase markers, essential for comprehensive project management platforms, agile development tools, and team collaboration software. Goal and achievement icons encompass target symbols, goal markers, KPI indicators, achievement badges, success celebrations, progress bars, percentage completion, milestone celebrations, and performance metrics, critical for goal-tracking applications, OKR (Objectives and Key Results) platforms, and performance management systems. Each category serves specific user needs and enhances different aspects of productivity and time management workflows.
              </p>
            </div>

            <div className="content-block">
              <h3>Best Practices for Implementing Productivity Icons in Applications</h3>
              <p>
                Implementing productivity icons effectively requires following established best practices that ensure clarity, usability, and accessibility. Always pair icons with text labels, especially for critical actions or less common functions, as not all icons are universally understood and text removes ambiguity. Maintain consistent sizing across icon sets, typically using a standard grid system like 16x16, 24x24, or 32x32 pixels to ensure optical balance and visual harmony. Ensure adequate color contrast between icons and backgrounds, following WCAG accessibility guidelines with minimum contrast ratios of 4.5 to 1 for normal icons and 3 to 1 for large icons. Provide appropriate touch targets for mobile applications, with minimum sizes of 44x44 pixels to accommodate users with various levels of dexterity. Use semantic colors consistently throughout your application, where green always means success or completion, red indicates errors or urgent items, and blue represents informational or neutral actions. Implement hover states and active states for interactive icons to provide visual feedback that confirms user interactions. Consider icon animation for state changes, such as a checkbox animating when checked or a clock icon ticking to indicate active time tracking, but keep animations subtle and purposeful to avoid distraction. Test your productivity icons with actual users to verify that they communicate the intended meaning, especially for culture-specific symbols that might not translate across different regions. Document your icon usage patterns in a design system to maintain consistency as your application grows and new team members join. Optimize SVG icons by removing unnecessary metadata and code to ensure fast loading times, especially important for productivity applications where every millisecond of performance matters.
              </p>
            </div>

            <div className="content-block">
              <h3>Creating Accessible Productivity Icons for All Users</h3>
              <p>
                Accessibility in productivity icon design ensures that all users, regardless of ability, can effectively use productivity applications and achieve their goals. Implement proper ARIA labels and semantic HTML to help screen readers convey icon meanings to visually impaired users, using descriptive labels like "Mark task as complete" rather than generic "checkbox icon." Ensure sufficient color contrast for users with visual impairments or color blindness, testing icons with color blindness simulators to verify they remain distinguishable when colors are perceived differently. Provide alternative text for all icon images that clearly describes their function, remembering that screen readers will read this text aloud to users who cannot see the visual icons. Avoid relying solely on color to convey information; instead, combine color with shapes, patterns, or text to ensure color-blind users can distinguish between different states or types of productivity actions. Design icons that work well in both light and dark modes, as many productivity users work in varied lighting conditions and prefer different interface themes throughout the day. Include keyboard navigation support for all icon-based controls, ensuring that users who cannot use a mouse can still access every productivity feature through keyboard shortcuts and tab navigation. Test productivity applications with actual accessibility tools like screen readers including NVDA, JAWS, and VoiceOver to identify and fix any accessibility issues before releasing to users. Consider users with cognitive disabilities by maintaining consistency in icon usage across your application, using familiar symbols rather than abstract representations, and providing clear visual hierarchies that guide users through productivity workflows. Offer customization options that let users adjust icon sizes, spacing, and contrast levels to match their individual needs and preferences.
              </p>
            </div>

            <div className="content-block">
              <h3>Productivity Icon Design Trends and Modern Aesthetics</h3>
              <p>
                Productivity icon design has evolved significantly over the past decade, reflecting broader trends in user interface design and changing user expectations. Minimalist line icons have become the dominant style in modern productivity applications, featuring thin strokes, simplified shapes, and elimination of unnecessary details that create clean, professional interfaces suitable for business and professional productivity tools. Outlined icons in particular have gained popularity for their versatility, working well at various sizes, appearing less visually heavy than filled icons, and providing a modern, sophisticated aesthetic that appeals to professional users. Dual-tone icons using two colors create visual interest while maintaining simplicity, often employing a primary color for the main shape and a secondary accent color for highlighting specific elements or states. Animated productivity icons add life and feedback to interactions, with subtle movements like a clock ticking, a checkbox being checked, or a calendar page flipping providing satisfying micro-interactions that enhance user experience without being distracting. Gradient icons have made a resurgence in productivity applications, adding depth and visual richness while still maintaining the clean, modern aesthetic users expect from professional tools. 3D and isometric productivity icons create engaging visualizations for dashboard elements, analytics displays, and feature showcases, though they require more careful implementation to ensure they don't overwhelm the interface. The current trend leans toward icons that balance aesthetic appeal with functional clarity, prioritizing user understanding and task completion over purely decorative visual elements. Neumorphic design elements have been experimented with in productivity interfaces, creating soft, extruded buttons and icons that appear to rise from or sink into the interface, though this trend has proven less popular for productivity applications where clear visual hierarchies are essential.
              </p>
            </div>

            <div className="content-block">
              <h3>Optimizing Productivity Icons for Performance</h3>
              <p>
                Performance optimization of productivity icons significantly impacts application speed and user experience, especially in complex productivity dashboards that may display hundreds of icons simultaneously. Use SVG format for productivity icons whenever possible, as SVG files are vector-based, scale infinitely without quality loss, typically have smaller file sizes than equivalent PNG files, and can be styled and animated with CSS. Implement icon sprites or icon fonts to reduce HTTP requests, combining frequently-used productivity icons into a single file that loads once and caches for subsequent page views. Optimize SVG code by removing unnecessary metadata, comments, redundant paths, and invisible elements using tools like SVGO or SVGOMG, which can reduce file sizes by 30 to 70 percent without any visual quality loss. Implement lazy loading for icons that appear below the fold or in collapsed sections, ensuring that only visible productivity icons load initially while others load on-demand as users scroll or expand sections. Use appropriate caching strategies with proper cache headers to ensure productivity icons are cached by browsers and don't need to be re-downloaded on subsequent visits. Consider implementing a progressive enhancement strategy where essential productivity icons load immediately while decorative or supplementary icons load afterward. For productivity dashboards with numerous icons, implement virtualization techniques that only render icons currently visible in the viewport, dramatically improving performance for applications with extensive icon usage. Compress icon files with gzip or Brotli compression on your server to reduce transfer sizes, particularly beneficial for mobile users on slower connections. Monitor icon performance using tools like Lighthouse, WebPageTest, and Chrome DevTools to identify bottlenecks and optimization opportunities in your productivity application's icon implementation.
              </p>
            </div>

            <div className="content-block">
              <h3>Building Consistent Productivity Icon Systems</h3>
              <p>
                Creating a consistent productivity icon system requires careful planning, documentation, and maintenance to ensure visual and functional coherence across all application features. Establish clear design principles that define your icon style, including stroke width consistency (typically 1.5px to 2px for web applications), corner radius standards (sharp, slightly rounded, or fully rounded), level of detail appropriate for your icon sizes, color palette adhering to your brand guidelines, and spacing rules for multi-element icons. Develop an icon grid system, typically based on 24x24 or 32x32 pixel artboards, to ensure all productivity icons align properly and maintain consistent optical sizing even when actual dimensions vary. Create comprehensive icon design guidelines documenting when to use outline versus filled icons, how to represent different states (default, hover, active, disabled, selected), and naming conventions for icon files and components. Build an icon component library in your design tools and code repository that serves as a single source of truth for all productivity icons, preventing inconsistencies and duplicate work. Implement version control for your icon system, tracking changes, updates, and additions to ensure team members always use the most current icon versions. Establish governance processes for adding new productivity icons, requiring review and approval to maintain system consistency and prevent icon proliferation. Conduct regular icon audits to identify unused, duplicate, or inconsistent icons that should be retired or consolidated. Document semantic meanings for each icon, specifying exactly when and where specific productivity icons should be used to ensure consistent communication across different application features. Create accessibility documentation alongside visual documentation, specifying appropriate ARIA labels, alternative text, and keyboard interactions for each productivity icon.
              </p>
            </div>

            <div className="content-block">
              <h3>Productivity Icons for Different Application Types</h3>
              <p>
                Different types of productivity applications require different icon approaches and priorities to best serve their specific user needs and workflows. Task management applications like Todoist, Asana, or Microsoft To Do prioritize checkbox icons, priority markers, deadline indicators, task assignment symbols, and completion status icons that help users quickly scan, organize, and complete their daily tasks. Calendar and scheduling applications such as Google Calendar, Outlook, or Calendly emphasize date picker icons, event markers, recurring event symbols, time zone indicators, availability icons, and appointment booking symbols that facilitate efficient schedule management. Time tracking software including Toggl, Harvest, or Clockify focuses on clock icons, timer symbols, stopwatch indicators, time log markers, billable hour icons, and timesheet symbols that enable accurate time capture and reporting. Project management platforms like Jira, Monday.com, or Basecamp require comprehensive icon sets covering projects, milestones, gantt elements, kanban cards, sprint markers, dependencies, resources, and deliverables to support complex project workflows. Note-taking applications such as Evernote, Notion, or OneNote utilize document icons, folder symbols, tag markers, formatting indicators, and organization icons to help users capture and retrieve information efficiently. Focus and concentration apps like Forest, Freedom, or Focus@Will emphasize do-not-disturb icons, focus mode symbols, break indicators, and concentration timers that support deep work sessions. Habit tracking applications such as Habitica or Streaks feature daily routine icons, streak markers, habit symbols, and achievement badges that motivate consistent behavior. Email and communication productivity tools require message icons, inbox symbols, priority markers, folder icons, and filtering indicators to manage communication effectively.
              </p>
            </div>

            <div className="content-block">
              <h3>Customizing Productivity Icons for Your Brand</h3>
              <p>
                Customizing productivity icons to align with your brand identity creates a cohesive, professional appearance that strengthens brand recognition and user trust. Start by adapting icon colors to match your brand palette, using primary brand colors for interactive elements, secondary colors for less prominent features, and neutral tones for backgrounds and containers while maintaining sufficient contrast for accessibility. Adjust icon style to reflect your brand personality, choosing outlined icons for minimal, modern brands, filled icons for bold, confident brands, rounded corners for friendly, approachable brands, or sharp corners for professional, technical brands. Customize icon stroke width to match your overall design language, using thinner strokes for elegant, refined aesthetics or thicker strokes for strong, impactful visual presence. Add subtle brand elements to productivity icons where appropriate, such as incorporating your logo shape into calendar icons, using brand-specific patterns in background elements, or adding distinctive flourishes to standard icon shapes without compromising recognizability. Consider creating signature productivity icons that become associated with your brand, such as a uniquely styled clock icon for your time tracking feature or a distinctive checkbox design for task completion. Ensure customization enhances rather than hinders usability by maintaining icon clarity, keeping modifications subtle enough to preserve universal recognition, and testing customized icons with users to verify they're still intuitive and understandable. Document your customization approach in brand guidelines so that future icon additions maintain consistency with established patterns. Balance brand expression with user familiarity, as overly customized icons may confuse users who expect standard productivity symbols to look and behave in conventional ways.
              </p>
            </div>

            <div className="content-block">
              <h3>Mobile-Specific Productivity Icon Considerations</h3>
              <p>
                Designing productivity icons for mobile applications requires specific considerations that account for smaller screens, touch interactions, and on-the-go usage contexts. Ensure adequate touch target sizes with minimum dimensions of 44x44 pixels for iOS and 48x48 pixels for Android to accommodate users with varying levels of dexterity and to prevent mis-taps that disrupt productivity workflows. Simplify icon designs for mobile to ensure they remain clear and recognizable at smaller sizes, removing fine details that may become illegible on mobile screens and emphasizing bold, simple shapes that communicate effectively in compact spaces. Use appropriate icon density for different mobile screen resolutions, providing 1x, 2x, 3x, and 4x versions to support devices from older smartphones to latest flagship phones with ultra-high-resolution displays. Consider one-handed operation patterns when positioning productivity icons in mobile interfaces, placing frequently-used actions like task completion, time tracking start/stop, and quick add buttons within easy thumb reach for both right and left-handed users. Implement contextual productivity icons that adapt to mobile usage scenarios, such as showing location-aware reminders, time-based task suggestions, or battery-conscious features when appropriate. Design for offline-first productivity experiences with icons that clearly indicate offline availability, sync status, and local-versus-cloud storage states. Optimize icon loading for mobile networks with compressed SVG files, efficient caching strategies, and progressive loading that prioritizes critical productivity features. Test productivity icons on actual mobile devices across different manufacturers and operating systems to verify they appear correctly and remain tap-able across various screen sizes and aspect ratios.
              </p>
            </div>

            <div className="content-block">
              <h3>Internationalization and Localization of Productivity Icons</h3>
              <p>
                Internationalizing productivity icons ensures they communicate effectively across different cultures, languages, and regions, expanding your application's global reach. Use culturally neutral symbols whenever possible, favoring universal icons like checkmarks for completion, clocks for time, and calendars for dates that translate across cultures rather than culture-specific symbols. Be aware of cultural icon interpretation differences, such as colors meaning different things in different cultures (white representing death in some Asian cultures versus purity in Western cultures), hand gestures varying in meaning across regions, and certain animals or symbols carrying different connotations. Adapt calendar icons for different calendar systems used globally, including Gregorian, Islamic, Hebrew, Chinese, and other calendars that represent dates and years differently. Consider right-to-left language support when designing directional productivity icons, ensuring arrows, progress indicators, and sequential symbols work correctly in RTL interfaces used by Arabic, Hebrew, and other right-to-left languages. Use number formats appropriate for different locales in any icons featuring numbers, dates, or times, respecting regional preferences for date formatting, time display, and number separators. Test productivity icons with users from target markets to identify any cultural misunderstandings or offensive symbolism before launching in new regions. Provide localized alternatives for icons with text or letters, replacing English-language abbreviations with appropriate translations or removing text entirely in favor of pure symbols. Document cultural considerations in your icon system guidelines to ensure future icon additions respect global user needs and avoid unintentional cultural insensitivity.
              </p>
            </div>

            <div className="content-block">
              <h3>Advanced Productivity Icon Features and Interactions</h3>
              <p>
                Modern productivity applications implement advanced icon features that enhance usability and create engaging user experiences beyond static displays. Implement state-aware icons that visually change based on context, such as a timer icon showing elapsed time, a calendar icon displaying today's date, or a task completion icon reflecting current progress percentages. Create interactive icon animations triggered by user actions, including checkboxes that animate when checked, clocks that tick during active time tracking, progress bars that fill smoothly, or achievement badges that celebrate milestone completions with subtle flourishes. Design multi-state productivity icons that communicate different status levels through visual variations, using color changes for priority levels, opacity adjustments for active versus inactive states, or badge overlays for notification counts and attention markers. Implement icon tooltips and help text that appear on hover or long-press, providing additional context about productivity features without cluttering the interface with permanent text labels. Create smart productivity icons that adapt to user behavior, such as highlighting frequently-used features, suggesting next actions based on usage patterns, or adjusting visibility based on current tasks and contexts. Develop icon-based data visualization for productivity metrics, transforming standard icons into mini-dashboards that display key information like today's completed tasks, hours tracked this week, or upcoming deadlines. Support icon customization options that let users personalize their productivity environment, including icon color preferences, icon density settings, or icon visibility toggles for streamlined, distraction-free interfaces. Implement accessibility enhancements including screen reader announcements for icon state changes, keyboard shortcuts for common icon-based actions, and high-contrast alternative icons for users with visual impairments.
              </p>
            </div>

            <div className="content-block">
              <h3>SEO and Marketing Benefits of Quality Productivity Icons</h3>
              <p>
                High-quality productivity icons provide significant SEO and marketing advantages that extend beyond pure functionality to improve discoverability and conversion. Search engines increasingly index and understand visual content including SVG icons, making well-structured, semantically-labeled productivity icons contribute to overall page relevance for productivity-related search queries. Implement proper image SEO by including descriptive alt text for all productivity icons, using semantic HTML5 tags, providing structured data markup for icon collections, and ensuring icon file names reflect their purpose and function. Fast-loading productivity icons improve page speed scores, a crucial Google ranking factor, with optimized SVG icons contributing to better Core Web Vitals metrics and higher search rankings. Create dedicated landing pages for productivity icon categories that target specific long-tail keywords like "free calendar icons" or "task management icons for apps" to capture search traffic from designers and developers seeking productivity icon resources. Feature productivity icons prominently in marketing materials, product screenshots, and feature demonstrations to communicate application functionality quickly and effectively in advertisements, social media posts, and sales presentations. Use consistent productivity icons across all marketing channels to build brand recognition, making your application instantly identifiable through distinctive iconography even without reading accompanying text. Leverage productivity icons in educational content including tutorial videos, help documentation, and onboarding flows where visual learning aids improve comprehension and retention compared to text-only explanations. Create shareable productivity icon resources, style guides, and design systems that attract backlinks from designers, developers, and industry publications, improving your site's authority and search engine rankings while demonstrating thought leadership in productivity application design.
              </p>
            </div>

            <div className="content-block">
              <h3>Future Trends in Productivity Icon Design</h3>
              <p>
                The future of productivity icon design continues evolving with emerging technologies, changing user expectations, and innovative interaction paradigms. Artificial intelligence integration will enable adaptive productivity icons that learn user preferences, automatically adjust their appearance based on context, suggest relevant actions through smart highlighting, and personalize icon arrangements based on individual workflow patterns. Voice-activated productivity features will require new icon paradigms that visualize voice commands, display voice recognition status, indicate when voice input is active, and show transcription processes for voice-to-text productivity features. Augmented reality productivity applications will need spatial productivity icons designed for 3D environments, three-dimensional icon representations that work from multiple viewing angles, depth-aware icon interactions, and environmental context-aware icon displays. Wearable productivity devices like smartwatches and AR glasses demand ultra-simplified icons optimized for tiny screens, glanceable information displays, minimal interaction requirements, and ambient awareness indicators. Dark mode and adaptive color schemes require productivity icons that automatically adjust to system preferences, maintain clarity across light and dark backgrounds, preserve brand identity regardless of theme, and provide smooth theme transitions without jarring visual changes. Gestural interfaces for productivity applications need icons that communicate swipe directions, indicate multi-touch interactions, show gesture availability, and provide tactile feedback through visual cues. Accessibility advances will drive development of more inclusive productivity icons with better support for assistive technologies, customizable appearance options for different visual needs, and multi-sensory icon representations combining visual, auditory, and haptic feedback.
              </p>
            </div>

            <div className="content-block">
              <h3>Start Using Free Productivity Icons Today</h3>
              <p>
                Transform your productivity applications with Scenith's comprehensive collection of free productivity and time management icons. Whether you're building a task management app, developing a calendar application, creating a time tracking tool, designing a project management platform, implementing a goal tracking system, or building any productivity-focused software, our extensive icon library provides everything you need to create professional, intuitive user interfaces. Browse our complete collection of productivity icons organized by category for easy discovery. Search for specific icons using keywords like calendar, clock, task, deadline, reminder, schedule, timer, or goal. Download icons instantly in SVG format for scalable web and mobile applications, PNG with transparent backgrounds for presentations and documents, or JPG for photo compositions and printed materials. Customize any productivity icon using our built-in online editor to change colors matching your brand palette, resize and scale without quality loss, combine multiple icons for unique compositions, add custom text and labels, apply filters and effects, and export in your preferred format. No credit card required, no subscriptions necessary, no hidden fees or limitations. Just free, professional productivity icons ready for immediate use in your commercial and personal projects. Create a free account to save your favorite productivity icons, track your download history, access exclusive features and early releases, and get personalized icon recommendations based on your usage patterns. Join thousands of designers, developers, product managers, and entrepreneurs who trust Scenith for their productivity icon needs. Start downloading free productivity icons now and elevate your application's user experience today.
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
            <p>Login to Download Productivity Icons</p>
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

export default ProductivityIconsPage;