"use client";

import React, { useEffect } from "react";

/* ============================================================
   StudioShell
   Pure layout wrapper. Owns no state beyond locking body scroll
   while the mobile drawer is open. Receives every region as a
   slot so the parent keeps full control of what renders.
   ============================================================ */

interface StudioShellProps {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
  rail?: React.ReactNode;
  children: React.ReactNode;
  /** Mobile drawer open state — owned by the parent. */
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  /** Hide the right rail column entirely (flag-driven). */
  showRail?: boolean;
}

const StudioShell: React.FC<StudioShellProps> = ({
  sidebar,
  topbar,
  rail,
  children,
  sidebarOpen,
  onCloseSidebar,
  showRail = true,
}) => {
  /* Lock page scroll only while the mobile drawer is open. */
  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  /* Escape closes the drawer. */
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseSidebar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sidebarOpen, onCloseSidebar]);

  return (
    <div className={`cac-studio ${showRail ? "" : "cac-studio--norail"}`}>
      {/* Mobile scrim */}
      {sidebarOpen && (
        <div
          className="cac-studio__scrim"
          onClick={onCloseSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`cac-studio__sidebar ${sidebarOpen ? "is-open" : ""}`}
        aria-label="Studio navigation"
      >
        {sidebar}
      </aside>

      <div className="cac-studio__body">
        <header className="cac-studio__topbar">{topbar}</header>

        <div className="cac-studio__cols">
          <div className="cac-studio__main">{children}</div>

          {showRail && rail && (
            <aside className="cac-studio__rail" aria-label="Recent generations">
              {rail}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudioShell;