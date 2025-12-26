"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { API_BASE_URL } from '@/app/config';
import '../../../../styles/VerifyEmail.css'; // or Auth.css if shared

const VerifyEmailClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verificationToken = searchParams.get('token');
  const [status, setStatus] = useState({ message: 'Verifying your email...', type: 'loading' });
  const isRequestSent = useRef(false);

  // Structured Data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Verify Email - Scenith",
      "description": "Verify your email address to activate your Scenith account and start creating professional videos.",
      "url": "https://scenith.in/verify-email",
    });
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!verificationToken) {
        setStatus({ message: 'Invalid or missing verification token.', type: 'error' });
        setTimeout(() => router.push('/signup'), 3000);
        return;
      }

      if (isRequestSent.current) return;
      isRequestSent.current = true;

      try {
        const response = await axios.get(
          `${API_BASE_URL}/auth/verify-email?token=${verificationToken}`
        );

        const { token, email, name, message, isVerified } = response.data;

        if (response.status === 200 && isVerified) {
          localStorage.setItem('token', token);
          localStorage.setItem('userProfile', JSON.stringify({
            email,
            name,
            picture: null,
            googleAuth: false,
          }));
          setStatus({ message: message || 'Email verified successfully! Redirecting...', type: 'success' });
          setTimeout(() => {
            window.location.href = 'https://scenith.in/tools';
          }, 2000);
        } else {
          throw new Error(message || 'Verification failed.');
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Email verification failed.';
        setStatus({ message: errorMessage, type: 'error' });

        if (errorMessage.includes('Invalid or unknown verification token') || 
            errorMessage.includes('Verification token has expired')) {
          // Stay on page to allow resend
        } else {
          setTimeout(() => router.push('/signup'), 3000);
        }
      } finally {
        isRequestSent.current = false;
      }
    };

    verifyEmailToken();
  }, [verificationToken, router]);

  const handleResendVerification = async () => {
    let email = localStorage.getItem('email');
    if (!email) {
      email = prompt('Please enter your email address:');
      if (!email) {
        setStatus({ message: 'Email is required to resend verification.', type: 'error' });
        return;
      }
    }

    try {
      await axios.post(`${API_BASE_URL}/auth/resend-verification`, null, {
        params: { email },
      });
      setStatus({ message: 'Verification email resent successfully! Check your inbox.', type: 'success' });
      localStorage.setItem('email', email);
    } catch (error: any) {
      setStatus({
        message: error.response?.data || 'Failed to resend verification email. Please try again.',
        type: 'error',
      });
    }
  };

  const particles = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className={`particle ${i % 2 === 0 ? 'square' : ''}`}
      style={{
        left: `${Math.random() * 100}%`,
        width: `${3 + Math.random() * 5}px`,
        height: `${3 + Math.random() * 5}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <div className="auth-page verify-email-page">
      {particles}
      <svg className="waveform-bg" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path
          d="M0,900 C180,750 360,900 540,750 C720,600 900,750 1080,600 C1260,450 1350,600 1440,0 L1440,0 H0 Z"
          fill="rgba(63, 142, 252, 0.15)"
        />
      </svg>
      <div className="rotating-text-container">
        <div className="rotating-text-wrapper">
          <div className="rotating-text">Transform ideas into stunning visuals with Scenith.</div>
          <div className="rotating-text">Professional editing made simple for everyone.</div>
          <div className="rotating-text">Intuitive timeline for frame-perfect edits.</div>
          <div className="rotating-text">Dynamic effects, filters, and stickers await!</div>
          <div className="rotating-text">Join a community of creators at Scenith.</div>
        </div>
      </div>
      <div className="auth-container">
        <div className="auth-header">
          <h1>
            <span className="letter">S</span>
            <span className="letter">c</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">i</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
          </h1>
          <p>The Peak of Visual Storytelling</p>
          <div className="logo-element" />
        </div>
        <h2>Email Verification</h2>
        <div className="verification-message" aria-live="polite">
          {status.type === 'loading' && <div className="spinner"></div>}
          <p className={status.type}>{status.message}</p>
          {status.type === 'error' && (
            <button
              className="verify-button"
              onClick={handleResendVerification}
              aria-label="Resend verification email"
            >
              Resend Verification Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailClient;