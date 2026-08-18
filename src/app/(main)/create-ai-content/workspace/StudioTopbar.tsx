"use client";

import React from "react";
import { FiMenu, FiZap, FiPlus, FiMoon, FiSun } from "react-icons/fi";

/* ============================================================
   StudioTopbar
   Presentational only. The credit figure is passed in from the
   /auth/me response the page already fetches — this component
   performs no requests of its own.
   ============================================================ */

interface StudioTopbarProps {
  title: string;
  subtitle: string;
  isLoggedIn: boolean;
  creditBalance: number | null;
  userName: string;
  userEmail: string;
  userPicture: string | null;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenSidebar: () => void;
  onSignIn: () => void;
}

const StudioTopbar: React.FC<StudioTopbarProps> = ({
  title,
  subtitle,
  isLoggedIn,
  creditBalance,
  userName,
  userEmail,
  userPicture,
  darkMode,
  onToggleTheme,
  onOpenSidebar,
  onSignIn,
}) => {
  const initial = (userName || userEmail || "U").charAt(0).toUpperCase();

  return (
    <div className="cac-studio-topbar">
      <button
        type="button"
        className="cac-studio-topbar__menu"
        onClick={onOpenSidebar}
        aria-label="Open navigation"
      >
        <FiMenu size={18} />
      </button>

      <div className="cac-studio-topbar__heading">
        <h1 className="cac-studio-topbar__title">{title}</h1>
        <p className="cac-studio-topbar__sub">{subtitle}</p>
      </div>

      <div className="cac-studio-topbar__actions">
        {isLoggedIn && (
          <span className="cac-studio-credits" title="Credit balance">
            <FiZap size={13} />
            {creditBalance === null ? "—" : creditBalance.toLocaleString()}
            <span className="cac-studio-credits__word">Credits</span>
          </span>
        )}

        <a href="/pricing" className="cac-studio-upgrade">
          <FiPlus size={14} />
          Upgrade
        </a>

        <button
          type="button"
          className="cac-studio-iconbtn"
          onClick={onToggleTheme}
          aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        >
          {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
        </button>

        {isLoggedIn ? (
          <a href="/user-dashboard" className="cac-studio-topbar__avatar" title={userEmail}>
            {userPicture ? (
              <img src={userPicture} alt="" referrerPolicy="no-referrer" />
            ) : (
              <span>{initial}</span>
            )}
          </a>
        ) : (
          <button type="button" className="cac-studio-signin" onClick={onSignIn}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default StudioTopbar;