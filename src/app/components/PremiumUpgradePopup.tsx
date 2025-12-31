// components/PremiumUpgradePopup.tsx
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

interface PremiumUpgradePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumUpgradePopup: React.FC<PremiumUpgradePopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleUpgrade = () => {
    router.push('/pricing');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="premium-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="premium-popup-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="premium-popup-close"
              onClick={onClose}
              aria-label="Close popup"
            >
              <FaTimes />
            </button>

            <div className="premium-popup-body">
              <div className="premium-popup-illustration">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Background gradient */}
                  <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>

                  {/* Background circle */}
                  <circle cx="200" cy="150" r="140" fill="url(#bgGradient)" />

                  {/* Lady character */}
                  <g className="lady-character">
                    {/* Head */}
                    <ellipse cx="200" cy="120" rx="25" ry="30" fill="#FDBCB4" />
                    
                    {/* Hair */}
                    <path d="M 175 105 Q 175 85 200 85 Q 225 85 225 105 L 225 130 Q 220 135 200 135 Q 180 135 175 130 Z" fill="#4A4A4A" />
                    
                    {/* Eyes */}
                    <circle cx="192" cy="118" r="2.5" fill="#2C3E50" />
                    <circle cx="208" cy="118" r="2.5" fill="#2C3E50" />
                    
                    {/* Smile */}
                    <path d="M 192 128 Q 200 132 208 128" stroke="#2C3E50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    
                    {/* Body */}
                    <path d="M 200 145 L 180 180 L 180 220 L 190 220 L 195 180 L 205 180 L 210 220 L 220 220 L 220 180 Z" fill="#667eea" />
                    
                    {/* Arms */}
                    <path d="M 180 155 L 160 170 L 155 185 L 165 188 L 175 170" fill="#FDBCB4" />
                    <path d="M 220 155 L 240 170 L 250 180 L 245 188 L 225 170" fill="#FDBCB4" />
                    
                    {/* Laptop/Design tool */}
                    <rect x="160" y="175" width="50" height="35" rx="3" fill="#34495E" />
                    <rect x="165" y="180" width="40" height="25" fill="#3498DB" />
                    <line x1="170" y1="185" x2="200" y2="185" stroke="#ECF0F1" strokeWidth="1" />
                    <line x1="170" y1="190" x2="195" y2="190" stroke="#ECF0F1" strokeWidth="1" />
                    <line x1="170" y1="195" x2="200" y2="195" stroke="#ECF0F1" strokeWidth="1" />
                  </g>

                  {/* Premium crown/badge */}
                  <g className="premium-badge" transform="translate(280, 80)">
                    <circle cx="0" cy="0" r="35" fill="url(#premiumGradient)" opacity="0.2" />
                    <circle cx="0" cy="0" r="28" fill="url(#premiumGradient)" />
                    
                    {/* Crown shape */}
                    <path d="M -15 -5 L -10 5 L -5 -5 L 0 5 L 5 -5 L 10 5 L 15 -5 L 15 10 L -15 10 Z" fill="#FFF" />
                    
                    {/* Sparkles */}
                    <g className="sparkle sparkle-1">
                      <line x1="-30" y1="-20" x2="-25" y2="-20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                      <line x1="-27.5" y1="-22.5" x2="-27.5" y2="-17.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <g className="sparkle sparkle-2">
                      <line x1="25" y1="-25" x2="30" y2="-25" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                      <line x1="27.5" y1="-27.5" x2="27.5" y2="-22.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <g className="sparkle sparkle-3">
                      <line x1="-25" y1="20" x2="-20" y2="20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                      <line x1="-22.5" y1="17.5" x2="-22.5" y2="22.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* Floating money symbols */}
                  <g className="money-symbol money-1" opacity="0.7">
                    <text x="80" y="100" fontSize="24" fill="url(#premiumGradient)" fontWeight="bold">₹</text>
                  </g>
                  <g className="money-symbol money-2" opacity="0.7">
                    <text x="300" y="180" fontSize="20" fill="url(#premiumGradient)" fontWeight="bold">₹</text>
                  </g>
                  <g className="money-symbol money-3" opacity="0.7">
                    <text x="90" y="220" fontSize="18" fill="url(#premiumGradient)" fontWeight="bold">₹</text>
                  </g>
                </svg>
              </div>

              <div className="premium-popup-text">
                <div className="new-year-popup-badge">🎉 New Year Special! 🎉</div>
                <h2>Want Higher AI VOICE Generation Limit?</h2>
                <p>Upgrade to Pro with the <strong>Cheapest Premium Plan!</strong></p>

                <div className="discount-highlight">
                  <span className="discount-percentage">75% OFF</span>
                  <span className="limited-slots">First 26 Users Only!</span>
                </div>

                <div className="premium-features">
                  <div className="premium-feature-item">
                    <span className="feature-icon">⚡</span>
                    <span>50,000+ characters/month</span>
                  </div>
                  <div className="premium-feature-item">
                    <span className="feature-icon">🎤</span>
                    <span>All premium AI voices</span>
                  </div>
                </div>

                <button className="premium-upgrade-button" onClick={handleUpgrade}>
                  <span>Claim 75% OFF Now</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumUpgradePopup;