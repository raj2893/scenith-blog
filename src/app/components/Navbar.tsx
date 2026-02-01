'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars, FaDollarSign, FaHome, FaTools, FaBlog, FaTimes, FaUser, FaFilePdf , FaImage} from 'react-icons/fa';
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

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(`${API_BASE_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const fullName = response.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          setUserProfile({
            email: response.data.email || '',
            firstName,
            picture: response.data.picture || null,
          });
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('userProfile');
          setIsLoggedIn(false);
          setUserProfile(null);
        }
      } else {
        setIsLoggedIn(false);
        setUserProfile(null);
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
      window.removeEventListener('storage', handleStorageChange);
      stopPolling();
    };
  }, [isLoggedIn]); // Re-run when login state changes

  const dispatchLoginEvent = () => {
    window.dispatchEvent(new Event('userLoggedIn'));
  };

  const navigate = (path: string) => {
    if (path.startsWith('/blogs') || path.startsWith('/background-removal') || path.startsWith('/pricing') || path.startsWith('/pdf-tools')) {
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
      label: 'AI Image Generator',
      path: '/tools/ai-image-generation',
      icon: <FaImage />,
      isNew: true // Add this flag
    },
    {
      label: 'Tools',
      isDropdown: true,
      icon: <FaTools />,
      dropdownItems: [
        { label: 'AI Voice Generator', href: '/tools/ai-voice-generation' },
        { label: 'PDF Tools', href: '/pdf-tools' },
        { label: 'AI Image Generation', href: '/tools/ai-image-generation' },
        { label: 'AI Subtitle Generator', href: '/tools/add-subtitles-to-videos' },
        { label: 'Image Editing', href: '/tools/image-editing' },
        { label: 'Background Remover', href: '/tools/background-removal' },
        { label: 'Video Speed Modifier', href: '/tools/video-speed-modifier' },
        { label: 'Media Compression', href: '/tools/compress-media' },
        { label: 'Media Conversion', href: '/tools/media-conversion-tool' },
      ],
    },
    { label: 'Pricing', path: '/pricing', icon: <FaDollarSign /> },
    { label: 'Blogs', path: '/blogs', icon: <FaBlog /> },
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
                      className={`nav-link nav-link-with-icon dropdown-trigger ${pathname === link.path ? 'active' : ''}`}
                      onMouseEnter={() => setIsToolsDropdownOpen(true)}
                      onMouseLeave={() => setIsToolsDropdownOpen(false)}
                      onClick={toggleToolsDropdown}
                    >
                      {link.icon && <span className="nav-link-icon">{link.icon}</span>}
                      {link.label}
                    </button>
                    {isToolsDropdownOpen && (
                      <div
                        className="tools-dropdown"
                        onMouseEnter={() => setIsToolsDropdownOpen(true)}
                        onMouseLeave={() => setIsToolsDropdownOpen(false)}
                      >
                        {link.dropdownItems?.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            className="tools-dropdown-item"
                            onClick={() => navigate(item.href)}
                          >
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

            {/* Auth Button */}
            <div className="nav-item auth-nav-item">
              {isLoggedIn ? (
                <>
                  <button
                    type="button"
                    className="nav-link nav-link-with-icon dropdown-trigger"
                    onMouseEnter={() => setIsProfileDropdownOpen(true)}
                    onMouseLeave={() => setIsProfileDropdownOpen(false)}
                    onClick={toggleProfileDropdown}
                  >
                    <span className="nav-link-icon"><FaUser /></span>
                    {userProfile?.firstName || 'Profile'}
                  </button>
                  {isProfileDropdownOpen && (
                    <div
                      className="tools-dropdown profile-dropdown"
                      onMouseEnter={() => setIsProfileDropdownOpen(true)}
                      onMouseLeave={() => setIsProfileDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className="tools-dropdown-item logout-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  className="nav-link nav-link-with-icon auth-button"
                  onClick={handleNavbarLoginClick}
                >
                  <span className="nav-link-icon"><FaUser /></span>
                  Login
                </button>
              )}
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