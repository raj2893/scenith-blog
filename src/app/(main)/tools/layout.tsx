"use client";

import { useState, useEffect, ReactNode } from 'react';
import '../../../../styles/components/PremiumUpgradePopup.css';
import PremiumUpgradePopup from '@/app/components/PremiumUpgradePopup';

interface ToolsLayoutProps {
  children: ReactNode;
}

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  useEffect(() => {
    const detectLocationAndShowPopup = async () => {

      try {
      setTimeout(() => {
        setShowPremiumPopup(true);
      }, 2000);
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };

    detectLocationAndShowPopup();
  }, []);

  const handleClosePremiumPopup = () => {
    setShowPremiumPopup(false);
  };

  return (
    <>
      {children}
      
      <PremiumUpgradePopup
        isOpen={showPremiumPopup} 
        onClose={handleClosePremiumPopup} 
      />
    </>
  );
}