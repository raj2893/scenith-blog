"use client";

import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import PremiumUpgradePopup from '@/app/components/PremiumUpgradePopup';
import '../../../../styles/components/PremiumUpgradePopup.css';

interface BlogsLayoutProps {
  children: ReactNode;
}

export default function BlogsLayout({ children }: BlogsLayoutProps) {
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  useEffect(() => {
    const detectLocationAndShowPopup = async () => {

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        const isIndia = countryCode === 'IN';

        // Show popup only if user is from India and has BASIC role
        if (isIndia) {
          // Delay popup by 2 seconds for better UX
          setTimeout(() => {
            setShowPremiumPopup(true);
          }, 2000);
        }
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };

    detectLocationAndShowPopup();
  });

  const handleClosePremiumPopup = () => {
    setShowPremiumPopup(false);
  };

  return (
    <>
      {children}
      
      {/* Premium Popup - Only shows in blogs section */}
      <PremiumUpgradePopup
        isOpen={showPremiumPopup} 
        onClose={handleClosePremiumPopup} 
      />
    </>
  );
}