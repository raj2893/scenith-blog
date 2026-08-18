"use client";

import React from "react";
import { FiFolder, FiPlay, FiDownload, FiLock } from "react-icons/fi";
import {
  StudioHistoryItem,
  StudioTab,
  studioRelativeTime,
} from "./studio.config";

/* ============================================================
   StudioHistoryRail
   Renders items the parent already holds in state. It never
   fetches. `onLoad` calls the parent's EXISTING history handler.
   ============================================================ */

interface StudioHistoryRailProps {
  activeTab: StudioTab;
  items: StudioHistoryItem[];
  loading: boolean;
  loaded: boolean;
  isLoggedIn: boolean;
  /** True when the backend refused history for this plan. */
  accessDenied?: boolean;
  limit: number;
  onLoad: () => void;
  onSignIn: () => void;
  /** Re-use a past prompt in the composer. */
  onReuse: (item: StudioHistoryItem) => void;
  /** Play / open an item. */
  onOpen: (item: StudioHistoryItem) => void;
}

const KIND_LABEL: Record<StudioTab, string> = {
  voice: "Voice",
  image: "Image",
  video: "Video",
};

const StudioHistoryRail: React.FC<StudioHistoryRailProps> = ({
  activeTab,
  items,
  loading,
  loaded,
  isLoggedIn,
  accessDenied = false,
  limit,
  onLoad,
  onSignIn,
  onReuse,
  onOpen,
}) => {
  const visible = items.slice(0, limit);

  return (
    <div className="cac-studio-rail">
      <div className="cac-studio-rail__head">
        <h2 className="cac-studio-rail__title">History</h2>
        {isLoggedIn && items.length > limit && (
          <a href="/user-dashboard" className="cac-studio-rail__viewall">
            View all
          </a>
        )}
      </div>

      <div className="cac-studio-rail__body">
        {!isLoggedIn ? (
          <div className="cac-studio-rail__empty">
            <p>Sign in to see everything you've generated here.</p>
            <button type="button" className="cac-studio-rail__btn" onClick={onSignIn}>
              Sign in
            </button>
          </div>
        ) : accessDenied ? (
          <div className="cac-studio-rail__empty">
            <span className="cac-studio-rail__emptyicon">
              <FiLock size={18} />
            </span>
            <p>History for {KIND_LABEL[activeTab].toLowerCase()} is on paid plans.</p>
            <a href="/pricing" className="cac-studio-rail__btn">
              See plans
            </a>
          </div>
        ) : loading ? (
          <div className="cac-studio-rail__loading">
            <span className="cac-spinner" />
            <p>Loading your {KIND_LABEL[activeTab].toLowerCase()} history…</p>
          </div>
        ) : !loaded ? (
          <div className="cac-studio-rail__empty">
            <p>Your recent {KIND_LABEL[activeTab].toLowerCase()} generations appear here.</p>
            <button type="button" className="cac-studio-rail__btn" onClick={onLoad}>
              Load history
            </button>
          </div>
        ) : visible.length === 0 ? (
          <div className="cac-studio-rail__empty">
            <p>
              Nothing here yet. Generate your first{" "}
              {KIND_LABEL[activeTab].toLowerCase()} and it will show up.
            </p>
          </div>
        ) : (
          <ul className="cac-studio-rail__list">
            {visible.map((item) => (
              <li key={item.key} className="cac-studio-rail__item">
                <button
                  type="button"
                  className="cac-studio-rail__thumb"
                  onClick={() => onOpen(item)}
                  aria-label={`Open ${item.title}`}
                >
                  {item.thumbUrl ? (
                    <img src={item.thumbUrl} alt="" loading="lazy" decoding="async" />
                  ) : item.videoUrl ? (
                    <video src={item.videoUrl} muted playsInline preload="none" />
                  ) : (
                    <span className="cac-studio-rail__wave" aria-hidden="true">
                      <FiPlay size={14} />
                    </span>
                  )}
                </button>

                <div className="cac-studio-rail__meta">
                  <p className="cac-studio-rail__name" title={item.prompt}>
                    {item.title}
                  </p>
                  <span className={`cac-studio-rail__tag is-${item.kind}`}>
                    {KIND_LABEL[item.kind]}
                  </span>
                  <p className="cac-studio-rail__time">
                    {studioRelativeTime(item.createdAt)}
                  </p>
                </div>

                <div className="cac-studio-rail__rowactions">
                  <button
                    type="button"
                    onClick={() => onReuse(item)}
                    title="Reuse this prompt"
                    aria-label="Reuse this prompt"
                  >
                    <FiDownload size={13} style={{ transform: "rotate(180deg)" }} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <a href="/dashboard" className="cac-studio-rail__foot">
        <FiFolder size={14} />
        Go to my projects
      </a>
    </div>
  );
};

export default StudioHistoryRail;