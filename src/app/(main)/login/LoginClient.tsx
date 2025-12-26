"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@/app/config';
import '../../../../styles/Auth.css';

const LoginClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Structured Data (JSON-LD)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Scenith Login",
      "description": "Log in to your Scenith account to access the free online video editor and start creating professional content.",
      "url": "https://scenith.in/login",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scenith.in/" },
          { "@type": "ListItem", "position": 2, "name": "Login" }
        ]
      }
    });
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password))
      newErrors.password = "Password must contain both letters and numbers";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setErrors({});

    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userProfile", JSON.stringify({
          email: response.data.email,
          name: response.data.name,
          picture: null,
          googleAuth: false,
        }));
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "https://scenith.in/tools";
        }, 1000);
      } else {
        setError(response.data.message || "Please verify your email first");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.response?.data || "Login failed");
      setTimeout(() => setError(""), 8000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setError("");
    setSuccess("");
    setErrors({});
    setIsLoading(true);
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
      setSuccess("Google login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "https://scenith.in/tools";
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Google login failed");
      setTimeout(() => setError(""), 8000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({
          client_id: "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
          callback: handleGoogleLogin,
        });
        const button = document.getElementById("googleSignInButton");
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
  }, [handleGoogleLogin]);

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
    <div className="auth-page login-page">
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
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Logging in...</p>
          </div>
        )}
        <div className="auth-header">
          <h1>
            <span className="letter">S</span><span className="letter">c</span><span className="letter">e</span>
            <span className="letter">n</span><span className="letter">i</span><span className="letter">t</span><span className="letter">h</span>
          </h1>
          <p>The Peak of Visual Storytelling</p>
          <div className="logo-element" />
        </div>
        <h2>Login to Your Account</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form onSubmit={handleLogin} className="auth-form">
          <div className="auth-input-label">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`auth-input ${errors.email ? "error" : ""}`}
              aria-label="Email address"
              disabled={isLoading}
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
              aria-label="Password"
              disabled={isLoading}
            />
            <span>Password</span>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="divider">OR</div>
        <div id="googleSignInButton" className="google-button"></div>
        <p className="auth-link">
          New to Scenith? <a href="/signup">Sign up</a>
        </p>
        <p className="auth-link">
          Forgot your password? <a href="/forgot-password">Reset Password</a>
        </p>
      </div>
    </div>
  );
};

export default LoginClient;