'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import '../../../styles/Navbar.css';

// Define TypeScript interface for props
interface NavbarProps {
  pageType: string;
  scrollToSection?: (sectionId: string) => void; // Make scrollToSection optional
}

interface NavLink {
  label: string;
  path?: string;
  sectionId?: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ pageType, scrollToSection }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  const navigate = (path: string) => {
    if (path.startsWith('/blogs') || path.startsWith('/background-removal')) {
      router.push(path);
    } else {
      window.location.href = `https://scenith.in${path}`;
    }
    setIsNavMenuOpen(false);
    setIsToolsDropdownOpen(false);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
    setIsToolsDropdownOpen(false); // Close dropdown when toggling nav menu
  };

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
  };

  // Default scrollToSection implementation if not provided
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

  // Navigation links with Tools dropdown (Contact Us removed)
  const baseNavLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    {
      label: 'Tools',
      isDropdown: true,
      dropdownItems: [
        { label: 'AI Voices', href: '/tools/ai-voice-generation' },
        { label: 'AI Subtitle Generator', href: '/tools/add-subtitles-to-videos' },
        { label: 'Background Remover', href: '/tools/background-removal' },
        { label: 'Video Speed Modifier', href: '/tools/video-speed-modifier' },
        { label: 'Video Color Grading', href: '/tools/apply-filters-to-videos' },
        { label: 'Media Compression', href: '/tools/compress-media' },
        { label: 'Media Conversion', path: '/tools/media-conversion-tool' },
      ],
    },
    { label: 'Blogs', path: '/blogs' },
  ];

  const navLinks = pathname.startsWith('/blogs/') && pathname !== '/blogs'
    ? baseNavLinks.filter(link => link.label !== 'Categories')
    : baseNavLinks;

  return (
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
                    className={`nav-link dropdown-trigger ${pathname === link.path ? 'active' : ''}`}
                    onMouseEnter={() => setIsToolsDropdownOpen(true)}
                    onMouseLeave={() => setIsToolsDropdownOpen(false)}
                    onClick={toggleToolsDropdown}
                  >
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
                  className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                  onClick={() => {
                    if (link.path) {
                      navigate(link.path);
                    } else if (link.sectionId) {
                      (scrollToSection || defaultScrollToSection)(link.sectionId);
                      setIsNavMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;