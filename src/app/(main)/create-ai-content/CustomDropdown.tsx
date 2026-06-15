"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Option {
  value: string;
  label: string;
  logo?: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  maxHeight?: number;
  selectedLabel?: string;
  selectedLogo?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select…",
  disabled = false,
  className = "",
  style = {},
  maxHeight = 240,
  selectedLabel,
  selectedLogo,
}) => {
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        const menus = document.querySelectorAll(".cac-dropdown-menu");
        let insideMenu = false;
        menus.forEach((m) => {
          if (m.contains(target)) insideMenu = true;
        });
        if (!insideMenu) setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Recalculate position on scroll/resize while open
  useEffect(() => {
    if (!open) return;
      const update = () => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (rect) {
          const menuWidth = Math.max(rect.width, 120);
          const viewportWidth = window.innerWidth;
          const padding = 12;
          let left = rect.left + window.scrollX;
          if (rect.left + menuWidth > viewportWidth - padding) {
            left = window.scrollX + viewportWidth - menuWidth - padding;
          }
          if (left < window.scrollX + padding) {
            left = window.scrollX + padding;
          }
          setMenuPos({
            top: rect.bottom + window.scrollY + 4,
            left,
            width: rect.width,
          });
        }
      };
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  const handleTriggerClick = () => {
    if (disabled) return;
    if (!open) {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (rect) {
        const menuWidth = Math.max(rect.width, 120);
        const viewportWidth = window.innerWidth;
        const padding = 12;
        let left = rect.left + window.scrollX;
        // Clamp so menu doesn't overflow right edge
        if (rect.left + menuWidth > viewportWidth - padding) {
          left = window.scrollX + viewportWidth - menuWidth - padding;
        }
        // Clamp so menu doesn't overflow left edge
        if (left < window.scrollX + padding) {
          left = window.scrollX + padding;
        }
        setMenuPos({
          top: rect.bottom + window.scrollY + 4,
          left,
          width: rect.width,
        });
      }
    }
    setOpen((o) => !o);
  };

  const handleSelect = (optValue: string) => {
    onChange(optValue);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`cac-custom-dropdown ${open ? "open" : ""} ${
        disabled ? "disabled" : ""
      } ${className}`}
      style={style}
    >
      <button
        ref={triggerRef}
        type="button"
        className="cac-dropdown-trigger"
        onClick={handleTriggerClick}
        disabled={disabled}
      >
        <span className="cac-dropdown-value" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {selectedLabel || selectedLogo ? (
            <>
              {selectedLogo && (
                <img
                  src={selectedLogo}
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: 3,
                    flexShrink: 0,
                  }}
                />
              )}
              {selectedLabel && <span>{selectedLabel}</span>}
            </>
          ) : selected ? (
            <>
              {selected.logo && (
                <img
                  src={selected.logo}
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: 3,
                    flexShrink: 0,
                  }}
                />
              )}
              {selected.label}
            </>
          ) : (
            <span className="cac-dropdown-placeholder">{placeholder}</span>
          )}
        </span>
        <svg
          className="cac-dropdown-arrow"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open &&
        menuPos &&
        createPortal(
          <div
            className="cac-dropdown-menu"
            style={{
              position: "absolute",
              top: menuPos.top,
              left: menuPos.left,
              minWidth: Math.max(menuPos.width, 180),
              maxHeight,
              zIndex: 99999,
              overflowY: "auto",
            }}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                className={`cac-dropdown-item ${
                  opt.value === value ? "selected" : ""
                }`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.logo && (
                  <img
                    src={opt.logo}
                    alt=""
                    style={{
                      width: 15,
                      height: 15,
                      objectFit: "contain",
                      objectPosition: "center",
                      borderRadius: 3,
                      flexShrink: 0,
                      marginRight: 7,
                    }}
                  />
                )}
                <span style={{ flex: 1 }}>{opt.label}</span>
                {opt.value === value && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="cac-dropdown-check"
                  >
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};

export default CustomDropdown;