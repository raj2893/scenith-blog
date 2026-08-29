"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  FiZap,
  FiFolder,
  FiPieChart,
  FiVideo,
  FiImage,
   FiMic,
  FiFastForward,
  FiFileText,
  FiCrop,
  FiGrid,
  FiPlus,
  FiX,
  FiCalendar,
} from "react-icons/fi";
import {
  STUDIO_PRIMARY_NAV,
  STUDIO_TOOL_NAV,
  StudioNavItem,
  StudioTab,
} from "./studio.config";
import Tip from "../tips/Tip";
import { isBadgeActive, trackNew } from "@/app/whatsNew";
import "../../../../app/components/CSS/whats-new.css";

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
  FiFastForward,
  FiFileText,
  FiCrop,
  FiGrid,
  FiCalendar,
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
  /* The AI engine (Create) route. Its in-page tabs (AI video/image/voice) are
     sub-modes that only exist here, so tab items are only ever active on it. */
  const AI_ENGINE_PATH = "/create-ai-content";

  /* Drive the active state off the real route so it's always correct — on
     navigation and on refresh — instead of a hardcoded/default selection.
     Falls back to the currentPath prop if the hook is unavailable (SSR). */
  const routePath = usePathname() || currentPath;
  const path =
    routePath.length > 1 ? routePath.replace(/\/+$/, "") : routePath;

  /* Resolve exactly ONE active item id so there's never more than one highlight. */
  const activeId: string | null = React.useMemo(() => {
    // On the AI engine route the active in-page tab wins over the "Create" link
    // that shares this route.
    if (path === AI_ENGINE_PATH) {
      const tabItem = STUDIO_TOOL_NAV.find((i) => i.tab === activeTab);
      if (tabItem) return tabItem.id;
    }
    // Otherwise pick the href entry that best (longest-prefix) matches the route,
    // so a nested route resolves to its own entry — e.g.
    // /create-ai-content/content-engine highlights Content Engine, not Create.
    let best: StudioNavItem | null = null;
    for (const item of [...STUDIO_PRIMARY_NAV, ...STUDIO_TOOL_NAV]) {
      if (!item.href) continue;
      const matches = path === item.href || path.startsWith(`${item.href}/`);
      if (matches && (!best || item.href.length > (best.href as string).length)) {
        best = item;
      }
    }
    return best ? best.id : null;
  }, [path, activeTab]);

  const renderItem = (item: StudioNavItem) => {
    const Icon = ICONS[item.icon] ?? FiGrid;
    const active = item.id === activeId;

    /* Tab items switch the in-page tab — no navigation, no reload. */
    if (item.tab) {
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

    return (
      <a
        key={item.id}
        href={item.href}
        className={`cac-studio-nav__item ${active ? "is-active" : ""}`}
        aria-current={active ? "page" : undefined}
        onClick={() => { if (item.badge) trackNew("sidebar_badge_click", { id: item.id }); onClose(); }}
      >
        <span className="cac-studio-nav__icon">
          <Icon size={16} />
        </span>
        <span className="cac-studio-nav__label">{item.label}</span>
        {item.badge && isBadgeActive() && <span className="new-badge">{item.badge}</span>}
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
        <p className="cac-studio-plan__label" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          Credits left
          <Tip id="credits" />
        </p>
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