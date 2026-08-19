"use client";

import React from "react";
import {
  FiZap,
  FiFolder,
  FiPieChart,
  FiVideo,
  FiImage,
  FiMic,
  FiType,
  FiEdit3,
  FiCrop,
  FiGrid,
  FiPlus,
  FiX,
} from "react-icons/fi";
import {
  STUDIO_PRIMARY_NAV,
  STUDIO_TOOL_NAV,
  StudioNavItem,
  StudioTab,
} from "./studio.config";

/* ============================================================
   StudioSidebar
   Presentational only. Every action is handed in as a prop so
   this file never touches auth, credits or generation state.
   ============================================================ */

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  FiZap,
  FiFolder,
  FiPieChart,
  FiVideo,
  FiImage,
  FiMic,
  FiType,
  FiEdit3,
  FiCrop,
  FiGrid,
};

interface StudioSidebarProps {
  activeTab: StudioTab;
  /** Pathname of the studio page, used to mark "Create" as current. */
  currentPath?: string;
  isLoggedIn: boolean;
  userName: string;
  userEmail: string;
  userPicture: string | null;
  /** Live credit balance from /auth/me. Null while unknown. */
  creditBalance: number | null;
  planLabel: string;
  /** Fraction 0–1 for the plan meter. Null hides the meter. */
  planMeter: number | null;
  onSwitchTab: (tab: StudioTab) => void;
  onNewCreation: () => void;
  onClose: () => void;
}

const formatCredits = (n: number | null): string => {
  if (n === null || Number.isNaN(n)) return "—";
  return n.toLocaleString();
};

const StudioSidebar: React.FC<StudioSidebarProps> = ({
  activeTab,
  currentPath = "/create-ai-content",
  isLoggedIn,
  userName,
  userEmail,
  userPicture,
  creditBalance,
  planLabel,
  planMeter,
  onSwitchTab,
  onNewCreation,
  onClose,
}) => {
  const renderItem = (item: StudioNavItem) => {
    const Icon = ICONS[item.icon] ?? FiGrid;

    /* Tab items switch the in-page tab — no navigation, no reload. */
    if (item.tab) {
      const active = activeTab === item.tab;
      return (
        <button
          key={item.id}
          type="button"
          className={`cac-studio-nav__item ${active ? "is-active" : ""}`}
          onClick={() => {
            onSwitchTab(item.tab as StudioTab);
            onClose();
          }}
          aria-current={active ? "true" : undefined}
        >
          <span className="cac-studio-nav__icon">
            <Icon size={16} />
          </span>
          <span className="cac-studio-nav__label">{item.label}</span>
        </button>
      );
    }

    const isCurrent = item.href === currentPath;
    return (
      <a
        key={item.id}
        href={item.href}
        className={`cac-studio-nav__item ${isCurrent ? "is-active" : ""}`}
        aria-current={isCurrent ? "page" : undefined}
        onClick={onClose}
      >
        <span className="cac-studio-nav__icon">
          <Icon size={16} />
        </span>
        <span className="cac-studio-nav__label">{item.label}</span>
      </a>
    );
  };

  return (
    <div className="cac-studio-sidebar">
       {/* ── Mobile drawer close ── */}
      <div className="cac-studio-sidebar__brand">
        <button
          type="button"
          className="cac-studio-sidebar__close"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <FiX size={16} />
        </button>
      </div>

      {/* ── Primary action ── */}
      <button
        type="button"
        className="cac-studio-newbtn"
        onClick={() => {
          onNewCreation();
          onClose();
        }}
      >
        <FiPlus size={15} />
        New creation
      </button>

      {/* ── Nav ── */}
      <nav className="cac-studio-nav" aria-label="Main">
        {STUDIO_PRIMARY_NAV.map(renderItem)}

        <p className="cac-studio-nav__heading">Tools</p>
        {STUDIO_TOOL_NAV.map(renderItem)}
      </nav>

      {/* ── Plan card ── */}
      <div className="cac-studio-plan">
        <div className="cac-studio-plan__head">
          <span className="cac-studio-plan__name">{planLabel}</span>
          <a href="/pricing" className="cac-studio-plan__link">
            {isLoggedIn ? "Manage plan" : "See plans"}
          </a>
        </div>
        <p className="cac-studio-plan__label">Credits left</p>
        <p className="cac-studio-plan__value">{formatCredits(creditBalance)}</p>
        {planMeter !== null && (
          <div
            className="cac-studio-plan__meter"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(planMeter * 100)}
          >
            <span style={{ width: `${Math.min(100, Math.max(2, planMeter * 100))}%` }} />
          </div>
        )}
      </div>

      {/* ── User ── */}
      <div className="cac-studio-user">
        {isLoggedIn ? (
          <>
            {userPicture ? (
              <img
                src={userPicture}
                alt=""
                className="cac-studio-user__avatar"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="cac-studio-user__avatar cac-studio-user__avatar--fallback">
                {(userName || userEmail || "U").charAt(0).toUpperCase()}
              </span>
            )}
            <span className="cac-studio-user__meta">
              <span className="cac-studio-user__name">{userName || "Your account"}</span>
              <span className="cac-studio-user__email">{userEmail}</span>
            </span>
          </>
        ) : (
          <a href="/signup" className="cac-studio-user__signup">
            Create a free account
          </a>
        )}
      </div>
    </div>
  );
};

export default StudioSidebar;