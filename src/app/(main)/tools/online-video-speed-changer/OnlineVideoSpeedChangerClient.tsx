'use client';

import React, { useState } from 'react';
import '../../../../../styles/tools/OnlineVideoSpeedChanger.css';

const UTM_URL =
  'https://scenith.in/tools/video-speed-modifier?utm_source=online-video-speed-changer&utm_medium=internal_cta&utm_campaign=seo_landing';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'large';
}

export function OnlineVideoSpeedChangerCTA({ variant = 'primary' }: CTAProps) {
  const [hovered, setHovered] = useState(false);

  const isLarge = variant === 'large';
  const isSecondary = variant === 'secondary';

  return (
    
    <a  href={UTM_URL}
      className={`ovsc-cta-btn ovsc-cta-btn--${variant} ${hovered ? 'ovsc-cta-btn--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Open Scenith Video Speed Modifier tool"
      rel="noopener"
    >
      <span className="ovsc-cta-icon" aria-hidden="true">
        {isLarge ? '🚀' : isSecondary ? '⚡' : '🎬'}
      </span>
      <span className="ovsc-cta-text">
        {isLarge
          ? 'Change My Video Speed — Free'
          : isSecondary
          ? 'Try the Speed Editor'
          : 'Open Free Video Speed Changer'}
      </span>
      <span className="ovsc-cta-arrow" aria-hidden="true">→</span>
    </a>
  );
}