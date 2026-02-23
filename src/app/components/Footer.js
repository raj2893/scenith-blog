// components/Footer.tsx
'use client';

import React from 'react';
import '../../../styles/Footer.css'; // Adjust path if necessary

const Footer = () => {
  const handleNavigation = (path, string) => {
    // Internal Next.js routes (blogs) or external to scenith.in
    if (path.startsWith('/blogs')) {
      window.location.href = path;
    } else {
      window.location.href = `https://scenith.in${path.startsWith('/') ? path : '/' + path}`;
    }
  };

  const links = [
    // All Tools (new + existing)
    { label: 'AI Voice Generator', path: '/tools/ai-voice-generation' },
    { label: 'AI Image Generator', path: '/tools/ai-image-generation' },
    { label: 'PDF Tools', path: '/tools/pdf-tools' },
    { label: 'SVG Library', path: '/svg-library' },
  /*  { label: 'AI Subtitle Generator', path: '/tools/add-subtitles-to-videos' },  */
    { label: 'AI Background Remover', path: '/tools/background-removal' },
    { label: 'Media Conversion', path: '/tools/media-conversion-tool' },
    { label: 'Image Editor', path: '/tools/image-editing' },
    { label: 'Media Compressor', path: '/tools/compress-media' },
    { label: 'Project Editor', path: '/dashboard' },

    // Required static pages (kept as requested)
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/terms-and-conditions' },
  ];

  return (
    <footer className="loved-footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} SCENITH AI Voice Generator. All rights reserved.
        </p>

        <div className="footer-links-container">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              className="footer-link"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;