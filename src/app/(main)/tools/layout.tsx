"use client";

import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import '../../../../styles/components/PremiumUpgradePopup.css';
import PremiumUpgradePopup from '@/app/components/PremiumUpgradePopup';
import UsageAlertPopup from '@/app/components/UsageAlertPopup';
import { API_BASE_URL } from '@/app/config';

interface ToolsLayoutProps {
  children: ReactNode;
}

export default function ToolsLayout({ children }: ToolsLayoutProps) {
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string>('');
  const [ttsUsage, setTtsUsage] = useState<{
    monthly: { used: number; limit: number; remaining: number };
    daily: { used: number; limit: number; remaining: number };
    role: string;
  } | null>(null);
  const [usageAlertState, setUsageAlertState] = useState({
    showAlert: false,
    alertType: null as 'daily70' | 'daily100' | 'monthly70' | 'monthly100' | null,
  });

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsLoggedIn(true);
          setUserRole(res.data.role || 'BASIC');
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  // Fetch TTS usage if logged in
  useEffect(() => {
    const fetchTtsUsage = async () => {
      if (!isLoggedIn) {
        setTtsUsage(null);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/sole-tts/usage`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTtsUsage(data);
        }
      } catch (error) {
        console.error('Error fetching TTS usage:', error);
      }
    };

    fetchTtsUsage();
  }, [isLoggedIn]);

  // Determine which popup to show
  useEffect(() => {
    const determinePopup = () => {
      // Don't show any popup if not logged in or if STUDIO user
      if (!isLoggedIn || !ttsUsage || userRole === 'STUDIO') {
        return;
      }

      const { daily, monthly } = ttsUsage;
      const dailyPercent = daily.limit > 0 ? (daily.used / daily.limit) * 100 : 0;
      const monthlyPercent = monthly.limit > 0 ? (monthly.used / monthly.limit) * 100 : 0;

      console.log('🔍 Layout Popup Logic:', {
        dailyPercent,
        monthlyPercent,
        role: userRole,
      });

      // Priority 1: Check for 100% limits (critical alerts)
      if (dailyPercent >= 100) {
        console.log('⚠️ Showing daily100 alert');
        setTimeout(() => {
          setUsageAlertState({
            showAlert: true,
            alertType: 'daily100',
          });
        }, 2000);
        return;
      }

      if (monthlyPercent >= 100) {
        console.log('⚠️ Showing monthly100 alert');
        setTimeout(() => {
          setUsageAlertState({
            showAlert: true,
            alertType: 'monthly100',
          });
        }, 2000);
        return;
      }

      // Priority 2: Check for 70% warnings
      if (dailyPercent >= 70 && dailyPercent < 100) {
        console.log('⚠️ Showing daily70 alert');
        setTimeout(() => {
          setUsageAlertState({
            showAlert: true,
            alertType: 'daily70',
          });
        }, 2000);
        return;
      }

      if (monthlyPercent >= 70 && monthlyPercent < 100) {
        console.log('⚠️ Showing monthly70 alert');
        setTimeout(() => {
          setUsageAlertState({
            showAlert: true,
            alertType: 'monthly70',
          });
        }, 2000);
        return;
      }

      // Priority 3: Show premium popup if no alerts (only for BASIC/CREATOR)
      if (userRole === 'BASIC' || userRole === 'CREATOR') {
        console.log('✅ Showing premium popup (no alerts)');
        setTimeout(() => {
          setShowPremiumPopup(true);
        }, 2000);
      }
    };

    determinePopup();
  }, [isLoggedIn, ttsUsage, userRole]);

  const handleClosePremiumPopup = () => {
    setShowPremiumPopup(false);
  };

  const handleCloseUsageAlert = () => {
    setUsageAlertState({
      showAlert: false,
      alertType: null,
    });
  };

  const handleUpgradeFromAlert = () => {
    handleCloseUsageAlert();
    window.open(
      'https://scenith.in/pricing?utm_source=ai_voice_generator&utm_medium=usage_alert&utm_campaign=upgrade_prompt&utm_content=' +
        usageAlertState.alertType,
      '_blank'
    );
  };

  return (
    <>
      {children}

      <PremiumUpgradePopup isOpen={showPremiumPopup} onClose={handleClosePremiumPopup} />

      {usageAlertState.showAlert && usageAlertState.alertType && ttsUsage && (
        <UsageAlertPopup
          isOpen={usageAlertState.showAlert}
          onClose={handleCloseUsageAlert}
          alertType={usageAlertState.alertType}
          usage={ttsUsage}
          onUpgrade={handleUpgradeFromAlert}
        />
      )}
    </>
  );
}