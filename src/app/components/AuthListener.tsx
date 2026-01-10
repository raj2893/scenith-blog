'use client';

import { useEffect } from 'react';

const AuthListener: React.FC = () => {
  useEffect(() => {
    const handleLoginEvent = () => {
      // Simply reload the page when login happens from navbar
      window.location.reload();
    };

    window.addEventListener('userLoggedIn', handleLoginEvent);
    
    return () => {
      window.removeEventListener('userLoggedIn', handleLoginEvent);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AuthListener;