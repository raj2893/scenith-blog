// app/signup/SignupClient.tsx

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/app/config';
import '../../../../styles/Auth.css';

const SignupClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Scenith Sign Up - Free AI Content Creation Platform",
      "description": "Create a free Scenith account to access professional AI-powered content creation tools including Voice Generator, Image Editor, Subtitle Generator, PDF Tools, and 10,000+ SVG Icons.",
      "url": "https://scenith.in/signup",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scenith.in/" },
          { "@type": "ListItem", "position": 2, "name": "Sign Up", "item": "https://scenith.in/signup" }
        ]
      },
      "potentialAction": {
        "@type": "RegisterAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://scenith.in/signup",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "CreativeWork",
          "name": "Scenith User Account"
        }
      },
      "about": {
        "@type": "SoftwareApplication",
        "name": "Scenith",
        "applicationCategory": "MultimediaApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    });
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name) newErrors.name = "Name is required";
    else if (name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password))
      newErrors.password = "Password must contain both letters and numbers";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, { email, password, name });
      if (response.status === 200 && response.data.message) {
        setShowVerificationMessage(true);
        localStorage.setItem('email', email);
      }
    } catch (error: any) {
      const msg = error.response?.data?.message || "Signup failed. Please try again.";
      setServerError(msg);
      setTimeout(() => setServerError(""), 8000);
    }
  };

  const resendVerification = async () => {
    try {
      await axios.post(`${API_BASE_URL}/auth/resend-verification`, null, { params: { email } });
      setServerError("Verification email resent successfully!");
      setTimeout(() => setServerError(""), 5000);
    } catch (error: any) {
      setServerError(error.response?.data || "Failed to resend email.");
      setTimeout(() => setServerError(""), 8000);
    }
  };

  const handleGoogleSignup = useCallback(async (credentialResponse: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userProfile", JSON.stringify({
        email: response.data.email,
        name: response.data.name,
        picture: response.data.picture || null,
        googleAuth: true,
      }));
      window.location.href = "https://scenith.in/tools";
    } catch (error: any) {
      setServerError(error.response?.data?.message || "Google signup failed.");
      setTimeout(() => setServerError(""), 8000);
    }
  }, []);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({
          client_id: "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
          callback: handleGoogleSignup,
        });
        const button = document.getElementById("googleSignUpButton");
        if (button) {
          window.google.accounts.id.renderButton(button, {
            theme: "outline",
            size: "large",
            width: 400,
          });
        }
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    initializeGoogleSignIn();
  }, [handleGoogleSignup]);

  const particles = Array.from({ length: 40 }).map((_, i) => (
    <div
      key={i}
      className={`particle ${i % 2 === 0 ? "square" : ""}`}
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
    <div className="auth-page">
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
            <span className="letter">S</span><span className="letter">c</span><span className="letter">e</span>
            <span className="letter">n</span><span className="letter">i</span><span className="letter">t</span><span className="letter">h</span>
          </h1>
          <p>The Peak of Visual Storytelling</p>
          <div className="logo-element" />
        </div>
        <h2>Create Your Story</h2>
        {showVerificationMessage ? (
          <div className="verification-message">
            <p>We've sent a verification email to <strong>{email}</strong></p>
            <p>Please check your inbox and verify your email before logging in.</p>
            {serverError && (
              <div className={serverError.includes("successfully") ? "success-message" : "error-message"}>
                {serverError}
              </div>
            )}
            <button onClick={resendVerification} className="auth-button">
              Resend Verification Email
            </button>
            <p className="auth-link">
              Already verified? <a href="/login">Login</a>
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSignup} className="auth-form">
              {serverError && <div className="error-message">{serverError}</div>}
              <div className="auth-input-label">
                <input
                  type="text"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`auth-input ${errors.name ? "error" : ""}`}
                />
                <span>Full Name</span>
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              <div className="auth-input-label">
                <input
                  type="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`auth-input ${errors.email ? "error" : ""}`}
                />
                <span>Email</span>
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="auth-input-label">
                <input
                  type="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`auth-input ${errors.password ? "error" : ""}`}
                />
                <span>Password</span>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              <button type="submit" className="auth-button">Sign Up</button>
            </form>
            <div className="divider">OR</div>
            <div id="googleSignUpButton" className="google-button"></div>
            <p className="auth-link">
              Already have an account? <a href="/login">Login</a>
            </p>
          </>
        )}
      </div>
      {/* SEO-Optimized Benefits Section */}
      <div className="signup-benefits-section" style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        maxWidth: '450px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        borderRadius: '16px',
        border: '1px solid rgba(102, 126, 234, 0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        zIndex: 5
      }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 700, 
          color: '#333333', 
          marginBottom: '12px',
          background: 'linear-gradient(90deg, #3F8EFC, #B76CFD)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          What You Get With Scenith
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          fontSize: '0.9rem',
          color: '#4a5568',
          lineHeight: '1.8'
        }}>
          <li style={{ marginBottom: '8px' }}>✅ <strong>40+ AI Voices</strong> in 20+ languages</li>
          <li style={{ marginBottom: '8px' }}>✅ <strong>Professional Image Editor</strong> for social media</li>
          <li style={{ marginBottom: '8px' }}>✅ <strong>AI Subtitle Generator</strong> (92-96% accuracy)</li>
          <li style={{ marginBottom: '8px' }}>✅ <strong>Premium SVG Icons</strong></li>
          <li style={{ marginBottom: '8px' }}>✅ <strong>PDF Tools Suite</strong> (merge, split, compress)</li>
          <li style={{ marginBottom: '0' }}>✅ <strong>Zero watermarks</strong> on free plan forever</li>
        </ul>
      </div>      
    </div>
  );
};

export default SignupClient;