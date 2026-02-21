// app/components/UsageAlertPopup.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChartLine, FaExclamationTriangle, FaClock, FaBolt, FaAward } from 'react-icons/fa';

interface UsageAlertPopupProps {
  isOpen: boolean;
  onClose: () => void;
  alertType: 'daily70' | 'daily100' | 'monthly70' | 'monthly100';
  usage: {
    daily: { used: number; limit: number; remaining: number };
    monthly: { used: number; limit: number; remaining: number };
    role: string;
  };
  onUpgrade: () => void;
}

const UsageAlertPopup: React.FC<UsageAlertPopupProps> = ({
  isOpen,
  onClose,
  alertType,
  usage,
  onUpgrade,
}) => {
  // Configuration for each alert type
  const getAlertConfig = () => {
    const configs = {
      daily70: {
        icon: <FaChartLine className="w-10 h-10" />,
        iconBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        bgColor: 'linear-gradient(135deg, #fef3c7, #fde68a)',
        title: "You're Creating Amazing Content! 🔥",
        subtitle: `${usage.daily.used.toLocaleString()} of ${usage.daily.limit.toLocaleString()} characters used today`,
        message: "Great momentum! You've used 70% of today's characters. Keep going or upgrade for unlimited daily creation.",
        cta: "Unlock 5× More Daily",
        ctaBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        benefit: "Never pause your creative flow",
        progressColor: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
        progressPercent: (usage.daily.used / usage.daily.limit) * 100,
      },
      daily100: {
        icon: <FaExclamationTriangle className="w-10 h-10" />,
        iconBg: 'linear-gradient(135deg, #f87171, #fb923c)',
        bgColor: 'linear-gradient(135deg, #fee2e2, #fecaca)',
        title: "Daily Limit Reached ⏰",
        subtitle: `${usage.daily.used.toLocaleString()} characters used today`,
        message: "You've hit today's character limit. Upgrade now to keep creating without waiting for tomorrow!",
        cta: "Resume Creating Now",
        ctaBg: 'linear-gradient(135deg, #ef4444, #dc2626)',
        benefit: "Instant access, no daily limits",
        progressColor: 'linear-gradient(90deg, #f87171, #ef4444)',
        progressPercent: 100,
      },
      monthly70: {
        icon: <FaClock className="w-10 h-10" />,
        iconBg: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        bgColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        title: "Scaling Your Content? 📈",
        subtitle: `${usage.monthly.used.toLocaleString()} of ${usage.monthly.limit.toLocaleString()} characters this month`,
        message: "You're 70% through your monthly quota! Time to scale up before you run out.",
        cta: "10× Your Monthly Limit",
        ctaBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        benefit: "Scale content creation confidently",
        progressColor: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
        progressPercent: (usage.monthly.used / usage.monthly.limit) * 100,
      },
      monthly100: {
        icon: <FaBolt className="w-10 h-10" />,
        iconBg: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
        bgColor: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
        title: "Monthly Limit Reached! 🎯",
        subtitle: `${usage.monthly.used.toLocaleString()} characters used this month`,
        message: "You've maximized this month's quota! Upgrade now with our special 75% discount to continue creating.",
        cta: "Upgrade - 75% OFF 🎉",
        ctaBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        benefit: "Resume immediately + huge savings",
        progressColor: 'linear-gradient(90deg, #a78bfa, #8b5cf6)',
        progressPercent: 100,
      },
    };
    return configs[alertType];
  };

  const config = getAlertConfig();

  // Get upgrade benefits based on current role
  const getUpgradeBenefits = () => {
    if (usage.role === 'BASIC') {
      return [
        { label: '50K', desc: 'chars/month', highlight: true },
        { label: '5K', desc: 'chars/day', highlight: true },
        { label: 'All', desc: 'voices', highlight: false },
      ];
    } else if (usage.role === 'CREATOR') {
      return [
        { label: '150K', desc: 'chars/month', highlight: true },
        { label: '∞', desc: 'daily', highlight: true },
        { label: 'Priority', desc: 'support', highlight: false },
      ];
    }
    return [];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              background: config.bgColor,
              borderRadius: '20px',
              maxWidth: '440px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <FaTimes style={{ color: '#64748B', fontSize: '16px' }} />
            </button>

            <div style={{ padding: '32px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div
                  style={{
                    background: config.iconBg,
                    borderRadius: '50%',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  {config.icon}
                </div>
              </div>

              <h2 style={{fontSize: '24px', fontWeight: '700', color: '#1E293B', textAlign: 'center', marginBottom: '10px', lineHeight: '1.3'}}>
                {config.title}
              </h2>

              <p style={{fontSize: '14px', color: '#64748B', textAlign: 'center', marginBottom: '20px'}}>
                {config.subtitle}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{background: 'rgba(0,0,0,0.08)', borderRadius: '999px', height: '12px', overflow: 'hidden'}}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${config.progressPercent}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ height: '100%', borderRadius: '999px', background: config.progressColor }}
                  />
                </div>
                <p style={{fontSize: '12px', color: '#64748B', textAlign: 'center', marginTop: '8px'}}>
                  {config.progressPercent.toFixed(0)}% used
                </p>
              </div>

              <p style={{fontSize: '15px', color: '#475569', textAlign: 'center', lineHeight: '1.6', marginBottom: '24px'}}>
                {config.message}
              </p>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px'}}>
                {getUpgradeBenefits().map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '14px 10px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      background: benefit.highlight ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.7)',
                      border: benefit.highlight ? '2px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{fontSize: '20px', fontWeight: '700', color: benefit.highlight ? '#7C3AED' : '#1E293B'}}>
                      {benefit.label}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                      {benefit.desc}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onUpgrade}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '14px',
                  border: 'none',
                  background: config.ctaBg,
                  color: 'white',
                  fontSize: '17px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                {config.cta}
              </button>

              <p style={{fontSize: '13px', color: '#64748B', textAlign: 'center', marginTop: '12px'}}>
                ✨ {config.benefit}
              </p>

              {(alertType === 'daily100' || alertType === 'monthly100') && (
                <div style={{marginTop: '18px', padding: '12px', background: 'rgba(255,255,255,0.7)', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)'}}>
                  <p style={{fontSize: '12px', color: '#64748B', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
                    <FaAward style={{ color: '#FBBF24', fontSize: '16px' }} />
                    Join 1500+ creators who upgraded
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UsageAlertPopup;