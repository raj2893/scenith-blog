'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import '../../../styles/Footer.css';

const Footer = () => {
  const router = useRouter();

  const navigate = (path) => {
    if (path.startsWith('/blogs')) {
      router.push(path);
    } else {
      window.location.href = `https://scenith.in${path}`;
    }
  };

  const handleNavigation = (path, sectionId) => {
    if (path) {
      navigate(path);
      if (!sectionId) {
        window.scrollTo(0, 0);
      }
    }
    if (sectionId && !path) {
      window.location.href = `https://scenith.in/#${sectionId}`;
    }
  };

  const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Features', path: '/features' },
    { label: 'Tutorials', path: '/tutorials' },
  ];

  const resourceLinks = [
    { label: 'How to Add Subtitles', path: '/blogs/how-to-add-subtitles-to-video' },
    { label: 'How to Reach 4000 Hours of Watch Time on YouTube', path: '/blogs/how-to-reach-4000-hours-watch-time' },
    { label: 'Tutorials', path: '/', sectionId: 'tutorials-section' },
  ];

  const supportLinks = [
    { label: 'Contact Us', path: '/', sectionId: 'footer-section' },
    { label: 'Support Email', href: 'mailto:scenith.spprt@gmail.com' },
  ];

  const companyLinks = [
    { label: 'About Us', path: '/' },
  ];

  return (
    <footer className="footer" id="footer-section">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer-grid">
          <div className="footer-column company-info">
            <h3 className="footer-subtitle">Scenith</h3>
            <p className="company-description">
              Scenith is your go-to platform for powerful, intuitive video editing. Create stunning videos with AI-powered tools, dynamic transitions, and more. Join creators worldwide in bringing your stories to life.
            </p>
            <div className="social-links">
              <a href="https://x.com/scenith_1902/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/X_logo.png" alt="X" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/scenith.labs/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/Instagram_logo.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://linkedin.com/company/scenith/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/LinkedIn_logo.png" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.youtube.com/@Scenith-f4n" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/images/Youtube_logo.png" alt="YouTube" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Navigation</h3>
            <ul className="footer-links">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="footer-link"
                    onClick={() => handleNavigation(link.path, link.sectionId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Resources</h3>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="footer-link"
                    onClick={() => handleNavigation(link.path, link.sectionId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  ) : (
                    <button
                      className="footer-link"
                      onClick={() => handleNavigation(link.path, link.sectionId)}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="footer-link"
                    onClick={() => handleNavigation(link.path, link.sectionId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h3 className="footer-subtitle">Stay Updated</h3>
            <p>Subscribe to our newsletter for tips, updates, and exclusive offers.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                <FaPaperPlane /> Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="footer-note">
          © 2025 Scenith. All rights reserved. |{' '}
          <a href="mailto:scenith.spprt@gmail.com" className="footer-link">
            <FaEnvelope className="footer-icon" /> scenith.spprt@gmail.com
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;