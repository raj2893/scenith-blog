'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars, FaDollarSign, FaHome, FaTools, FaBlog, FaTimes, FaUser, FaFilePdf, FaImage, FaVideo, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config';
import '../../../styles/Navbar.css';

// Define TypeScript interfaces
interface NavbarProps {
  pageType: string;
  scrollToSection?: (sectionId: string) => void;
}

interface NavLink {
  label: string;
  path?: string;
  sectionId?: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
  icon?: React.ReactNode;
  isNew?: boolean; // Add this line
}

interface UserProfile {
  email: string;
  firstName: string;
  picture: string | null;
}

interface LoginFormData {
  email: string;
  password: string;
}

const Navbar: React.FC<NavbarProps> = ({ pageType, scrollToSection }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Auth states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [navbarLoginTriggered, setNavbarLoginTriggered] = useState(false);
  const [isUtilitiesDropdownOpen, setIsUtilitiesDropdownOpen] = useState(false);
  const [credits, setCredits] = useState<number>(25);
  const [isCreditsDropdownOpen, setIsCreditsDropdownOpen] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(`${API_BASE_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('User data from API:', response.data);
          console.log('Picture value:', response.data.picture);
          const fullName = response.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          setUserProfile({
            email: response.data.email || '',
            firstName,
            picture: response.data.picture || null,
          });
          setIsLoggedIn(true);
          setCredits(response.data.creditBalance ?? 25);
          setIsAdminUser(response.data.role === 'ADMIN');
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('userProfile');
          setIsLoggedIn(false);
          setUserProfile(null);
          setCredits(25);
        }
      } else {
        setIsLoggedIn(false);
        setUserProfile(null);
        setCredits(25);
      }
    };

    checkAuth();

    const handleLoginEvent = () => {
      checkAuth();
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'token' || e.key === null) {
        checkAuth();
      }
    };

    window.addEventListener('userLoggedIn', handleLoginEvent);
window.addEventListener('creditsUpdated', handleLoginEvent);  // ← add this
window.addEventListener('storage', handleStorageChange);

    let pollInterval: NodeJS.Timeout | null = null;

    const startPolling = () => {
      if (!isLoggedIn) {
        pollInterval = setInterval(() => {
          const token = localStorage.getItem('token');
          if (token && !isLoggedIn) {
            checkAuth();
          }
        }, 2000);
      }
    };

    const stopPolling = () => {
      if (pollInterval) {
        clearInterval(pollInterval);
        pollInterval = null;
      }
    };

    // Start polling if logged out
    if (!isLoggedIn) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
  window.removeEventListener('userLoggedIn', handleLoginEvent);
  window.removeEventListener('creditsUpdated', handleLoginEvent);  // ← add this
  window.removeEventListener('storage', handleStorageChange);
  stopPolling();
};
  }, [isLoggedIn]);

  useEffect(() => {
    const onScroll = () => {
      document.querySelector('.nav-bar')?.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);  

  const dispatchLoginEvent = () => {
    window.dispatchEvent(new Event('userLoggedIn'));
  };

  const navigate = (path: string) => {
    if (
      path.startsWith('/blogs') ||
      path.startsWith('/background-removal') ||
      path.startsWith('/pricing') ||
      path.startsWith('/user-dashboard') ||
      path.startsWith('/admin-portal')
    ) {
      router.push(path);
    } else {
      window.location.href = `https://scenith.in${path}`;
    }
    setIsNavMenuOpen(false);
    setIsToolsDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
    setIsToolsDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const defaultScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('.nav-bar')?.getBoundingClientRect().height || 80;
      window.scrollTo({
        top: section.offsetTop - navHeight - 20,
        behavior: 'smooth',
      });
    }
  };

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);

      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fullName = userResponse.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';

      setUserProfile({
        email: userResponse.data.email || '',
        firstName,
        picture: userResponse.data.picture || null,
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setNavbarLoginTriggered(false);
      setLoginSuccess('Login successful!');
      setTimeout(() => setLoginSuccess(''), 3000);
      dispatchLoginEvent();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError('');
    setLoginSuccess('');
    setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem('token', response.data.token);

      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });

      const fullName = userResponse.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';

      setUserProfile({
        email: userResponse.data.email || '',
        firstName,
        picture: userResponse.data.picture || null,
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setNavbarLoginTriggered(false);
      setLoginSuccess('Google login successful!');
      setTimeout(() => setLoginSuccess(''), 3000);

      dispatchLoginEvent();
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Google login failed');
      setTimeout(() => setLoginError(''), 8000);
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsProfileDropdownOpen(false);
    window.location.reload();
  };

  const handleNavbarLoginClick = () => {
    setNavbarLoginTriggered(true);
    setShowLoginModal(true);
  };

  useEffect(() => {
    if (!showLoginModal || !navbarLoginTriggered) return;

    const timer = setTimeout(() => {
      const initializeGoogleSignIn = () => {
        if (window.google && window.google.accounts) {
          try {
            // Check if Google Sign-In is already initialized globally
            const existingButton = document.getElementById('navbarGoogleSignInButton');
            if (!existingButton) return;

            // Only render if the button container is empty
            if (existingButton.children.length === 0) {
              window.google.accounts.id.initialize({
                client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
                callback: handleGoogleLogin,
              });
              window.google.accounts.id.renderButton(existingButton, {
                theme: 'outline',
                size: 'large',
                width: 300,
              });
            }
          } catch (error) {
            // Silently handle if already initialized
            console.warn('Google Sign-In already initialized elsewhere');
          }
        } else {
          setTimeout(initializeGoogleSignIn, 100);
        }
      };

      initializeGoogleSignIn();
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [showLoginModal, navbarLoginTriggered, handleGoogleLogin]);

  useEffect(() => {
    return () => {
      if (!showLoginModal && navbarLoginTriggered) {
        setNavbarLoginTriggered(false);
      }
    };
  }, [showLoginModal, navbarLoginTriggered]);

  const baseNavLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: <FaHome /> },
    {
      label: 'AI Tools',
      isDropdown: true,
      icon: <FaTools />,
      dropdownItems: [
        { label: 'AI Image Generator', href: '/create-ai-content' },
        { label: 'AI Video Generator', href: '/create-ai-content' },
        { label: 'AI Voice Generator', href: '/create-ai-content' },
        { label: 'AI Background Removal', href: '/tools/background-removal' },
        { label: 'AI Subtitle Generator', href: '/tools/add-subtitles-to-videos' },
      ],
    },
    {
      label: 'Utilities',
      isDropdown: true,
      icon: <FaTools />,
      dropdownItems: [
        { label: 'Video Speed Modifier', href: '/tools/video-speed-modifier' },
        { label: 'Image Editor', href: '/tools/image-editing' },
        { label: 'PDF Tools', href: '/tools/pdf-tools' },
        { label: 'SVG Library', href: '/svg-library' },
        { label: 'Media Compression', href: '/tools/compress-media' },
        { label: 'Media Conversion', href: '/tools/media-conversion-tool' },
      ],
    },
    { label: 'Pricing', path: '/pricing', icon: <FaDollarSign /> },
    { label: 'User Dashboard', path: '/user-dashboard', icon: <FaTachometerAlt /> },
    ...(isAdminUser ? [{ label: 'Admin Portal', path: '/admin-portal', icon: <FaShieldAlt />, isNew: true }] : []),
  ];

  const navLinks = pathname.startsWith('/blogs/') && pathname !== '/blogs'
    ? baseNavLinks.filter(link => link.label !== 'Categories')
    : baseNavLinks;

  return (
    <>
      <nav className={`nav-bar ${isNavMenuOpen ? 'open' : ''}`}>
        <div className="nav-content">
          <div className="branding-container" onClick={() => navigate('/')}>
            <h1>
              <span className="letter">S</span>
              <span className="letter">C</span>
              <span className="letter">E</span>
              <span className="letter">N</span>
              <span className="letter">I</span>
              <span className="letter">T</span>
              <span className="letter">H</span>
            </h1>
            <div className="logo-element"></div>
          </div>
          <button className="hamburger-menu" onClick={toggleNavMenu}>
            <FaBars />
          </button>
          <div className={`nav-links ${isNavMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <div key={link.label} className="nav-item">
              {link.isDropdown ? (
                <>
                  <button
                    type="button"
                    className={`nav-link nav-link-with-icon dropdown-trigger`}
                    onMouseEnter={() => link.label === 'Utilities' ? setIsUtilitiesDropdownOpen(true) : setIsToolsDropdownOpen(true)}
                    onMouseLeave={() => link.label === 'Utilities' ? setIsUtilitiesDropdownOpen(false) : setIsToolsDropdownOpen(false)}
                    onClick={() => link.label === 'Utilities' ? setIsUtilitiesDropdownOpen(v => !v) : setIsToolsDropdownOpen(v => !v)}
                  >
                    {link.icon && <span className="nav-link-icon">{link.icon}</span>}
                    {link.label}
                    <span className="dropdown-chevron">▾</span>
                  </button>
                  {(link.label === 'Utilities' ? isUtilitiesDropdownOpen : isToolsDropdownOpen) && (
                    <div
                      className="tools-dropdown"
                      onMouseEnter={() => link.label === 'Utilities' ? setIsUtilitiesDropdownOpen(true) : setIsToolsDropdownOpen(true)}
                      onMouseLeave={() => link.label === 'Utilities' ? setIsUtilitiesDropdownOpen(false) : setIsToolsDropdownOpen(false)}
                    >
                      {link.dropdownItems?.map((item) => (
                        <button key={item.label} type="button" className="tools-dropdown-item" onClick={() => navigate(item.href)}>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                  <button
                    type="button"
                    className={`nav-link ${link.icon ? 'nav-link-with-icon' : ''} ${pathname === link.path ? 'active' : ''}`}
                    onClick={() => {
                      if (link.path) {
                        navigate(link.path);
                      } else if (link.sectionId) {
                        (scrollToSection || defaultScrollToSection)(link.sectionId);
                        setIsNavMenuOpen(false);
                      }
                    }}
                  >
                    {link.icon && <span className="nav-link-icon">{link.icon}</span>}
                    <span className="nav-link-text">{link.label}</span>
                    {link.isNew && <span className="new-badge">NEW</span>}
                  </button>
                )}
              </div>
            ))}

            {/* RIGHT SECTION: Credits + Upgrade + User */}
            <div className="nav-right-section">
              {/* Credits Indicator */}
              <div
                className="nav-item credits-nav-item"
                onMouseEnter={() => setIsCreditsDropdownOpen(true)}
                onMouseLeave={() => setIsCreditsDropdownOpen(false)}
              >
                <button type="button" className="credits-pill">
                  <span className="credits-bolt">⚡</span>
                  <span className="credits-count">{credits}</span>
                  <span className="credits-label">Credits</span>
                </button>
                {isCreditsDropdownOpen && (
                  <div className="credits-dropdown">
                    <div className="credits-dropdown-header">Credit Balance</div>
                    <div className="credits-dropdown-amount">⚡ {credits} remaining</div>
                    <div className="credits-dropdown-plan">
                      Plan: <strong>{isLoggedIn ? (userProfile ? 'Pro' : 'Free') : 'Free'}</strong>
                    </div>
                    <button
                      type="button"
                      className="credits-upgrade-cta"
                      onClick={() => navigate('/pricing')}
                    >
                      Upgrade Plan
                    </button>
                  </div>
                )}
              </div>
              
              {/* Upgrade Button */}
              <button
                type="button"
                className="nav-upgrade-button"
                onClick={() => navigate('/pricing')}
              >
                Upgrade ✦
              </button>
              
              {/* User Avatar / Login */}
              <div className="nav-item auth-nav-item">
                {isLoggedIn ? (
                  <>
                    <button
                      type="button"
                      className="nav-avatar-button"
                      onMouseEnter={() => setIsProfileDropdownOpen(true)}
                      onMouseLeave={() => setIsProfileDropdownOpen(false)}
                      onClick={toggleProfileDropdown}
                    >
                      {userProfile?.picture && userProfile.picture.trim() !== ''
                        ? <img src={userProfile.picture} alt="avatar" className="nav-avatar-img" referrerPolicy="no-referrer" />
                        : <span className="nav-avatar-initials">{userProfile?.firstName?.[0]?.toUpperCase() || 'U'}</span>
                      }
                    </button>
                    {isProfileDropdownOpen && (
                      <div
                        className="tools-dropdown profile-dropdown"
                        onMouseEnter={() => setIsProfileDropdownOpen(true)}
                        onMouseLeave={() => setIsProfileDropdownOpen(false)}
                      >
                        <button type="button" className="tools-dropdown-item" onClick={() => navigate('/user-dashboard')}>Dashboard</button>
                        <button type="button" className="tools-dropdown-item" onClick={() => navigate('/pricing')}>Billing</button>
                        <button type="button" className="tools-dropdown-item logout-item" onClick={handleLogout}>Logout</button>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    className="nav-link nav-link-with-icon navbar-auth-button"
                    onClick={handleNavbarLoginClick}
                  >
                    <span className="nav-link-icon"><FaUser /></span>
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal - Only render when triggered from navbar */}
      {showLoginModal && navbarLoginTriggered && (
        <div className="modal-overlay navbar-modal" onClick={() => {
          setShowLoginModal(false);
          setNavbarLoginTriggered(false);
        }}>
          <motion.div
            className="login-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-button"
              onClick={() => {
                setShowLoginModal(false);
                setNavbarLoginTriggered(false);
              }}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>
            <div className="auth-container">
              <div className="auth-header">
                <h1>SCENITH</h1>
                <p>Login to Continue</p>
              </div>
              {isLoggingIn && (
                <div className="loading-overlay">
                  <div className="spinner" />
                  <p>Logging in...</p>
                </div>
              )}
              {loginError && <div className="error-message">{loginError}</div>}
              {loginSuccess && <div className="success-message">{loginSuccess}</div>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleLogin({
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                  });
                }}
                className="auth-form"
              >
                <div className="auth-input-label">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="auth-input"
                    aria-label="Email address"
                    disabled={isLoggingIn}
                    required
                  />
                  <span>Email</span>
                </div>
                <div className="auth-input-label">
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    className="auth-input"
                    aria-label="Password"
                    disabled={isLoggingIn}
                    required
                  />
                  <span>Password</span>
                </div>
                <button type="submit" className="cta-button auth-button" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="divider">OR</div>
              <div id="navbarGoogleSignInButton" className="google-button"></div>
              <p className="auth-link">
                New to SCENITH?{' '}
                <a href="/signup">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;