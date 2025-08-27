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

const Navbar: React.FC<NavbarProps> = ({ pageType, scrollToSection }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const navigate = (path: string) => {
    if (path.startsWith('/blogs')) {
      router.push(path);
    } else {
      window.location.href = `https://scenith.in${path}`;
    }
    setIsNavMenuOpen(false);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
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

  // Blog-specific navigation links
  const baseNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Categories', sectionId: 'filter-section' },
    { label: 'Contact Us', sectionId: 'footer-section' },
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
            <button
              key={link.label}
              type="button"
              className={`nav-link ${pathname === link.path ? 'active' : ''}`}
              onClick={() => {
                if (link.path) {
                  navigate(link.path);
                } else if (link.sectionId) {
                  // Use provided scrollToSection or default implementation
                  (scrollToSection || defaultScrollToSection)(link.sectionId);
                }
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;