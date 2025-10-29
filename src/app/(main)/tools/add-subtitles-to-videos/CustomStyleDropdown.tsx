"use client";

import React, { useState, useRef, useEffect } from 'react';
import './CustomStyleDropdown.css';

interface AiStyle {
  name: string;
  fontFamily: string;
  fontColor: string;
  backgroundColor: string;
}

interface CustomStyleDropdownProps {
  styles: AiStyle[];
  selectedStyle: AiStyle | null;
  onSelectStyle: (style: AiStyle) => void;
  disabled?: boolean;
  parseFont: (fontFamily: string) => { family: string; weight: string; style: string };
}

const CustomStyleDropdown: React.FC<CustomStyleDropdownProps> = ({
  styles,
  selectedStyle,
  onSelectStyle,
  disabled = false,
  parseFont,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then((WebFont) => {
        // Extract unique font families from styles
        const fontFamilies = styles.map(style => {
          const { family } = parseFont(style.fontFamily);
          // Handle font variants (e.g., "Arial:700", "Tangerine:700italic")
          if (style.fontFamily.includes(':')) {
            return style.fontFamily;
          }
          return family;
        });
        
        // Remove duplicates
        const uniqueFonts = Array.from(new Set(fontFamilies));
        
        WebFont.load({
          google: {
            families: uniqueFonts,
          },
        });
      });
    }
  }, [styles, parseFont]);  

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (style: AiStyle) => {
    onSelectStyle(style);
    setIsOpen(false);
  };

  return (
    <div className={`custom-style-dropdown ${disabled ? 'disabled' : ''}`} ref={dropdownRef}>
      <div className="dropdown-header" onClick={handleToggle}>
        <span className="dropdown-selected">
          {selectedStyle ? selectedStyle.name : 'Select Style'}
        </span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {styles.map((style) => {
            const { family, weight, style: fontStyle } = parseFont(style.fontFamily);
            return (
              <div
                key={style.name}
                className={`dropdown-option ${selectedStyle?.name === style.name ? 'selected' : ''}`}
                onClick={() => handleSelect(style)}
                style={{
                  fontFamily: `"${family}", sans-serif`,
                  fontWeight: weight,
                  fontStyle: fontStyle,
                  color: style.fontColor,
                  backgroundColor: style.backgroundColor,
                }}
              >
                {style.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomStyleDropdown;