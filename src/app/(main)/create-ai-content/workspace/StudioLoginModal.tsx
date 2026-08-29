"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";

/* ============================================================
   StudioLoginModal
   The same login experience used across the studio: Google
   Sign-In popup + email/password, hitting the existing
   /auth/google and /auth/login endpoints. On success it stores
   the token and calls onLoggedIn() so the parent can refresh in
   place — the user never leaves the page they were on.
   ============================================================ */

const GOOGLE_CLIENT_ID =
  "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com";

interface StudioLoginModalProps {
  onClose: () => void;
  /** Fired after the token is stored and login succeeds. */
  onLoggedIn: () => void;
  /** Optional sub-heading copy. */
  subtitle?: string;
}

const StudioLoginModal: React.FC<StudioLoginModalProps> = ({
  onClose,
  onLoggedIn,
  subtitle = "Log in to plan and generate content for free",
}) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const googleBtnRef = useRef<HTMLDivElement>(null);

  const handleLogin = async (email: string, password: string) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      onLoggedIn();
    } catch (err: any) {
      setIsLoggingIn(false);
      setLoginError(err.response?.data?.message || "Login failed. Check credentials.");
    }
  };

  const handleGoogleLogin = useCallback(
    async (credentialResponse: any) => {
      setIsLoggingIn(true);
      setLoginError(null);
      try {
        const res = await axios.post(`${API_BASE_URL}/auth/google`, {
          token: credentialResponse.credential,
        });
        localStorage.setItem("token", res.data.token);
        // Small defer mirrors the rest of the studio: give the backend a beat
        // after account creation before the parent re-fetches /auth/me.
        setTimeout(() => onLoggedIn(), 1000);
      } catch (err: any) {
        setIsLoggingIn(false);
        setLoginError(err.response?.data?.message || "Google login failed.");
      }
    },
    [onLoggedIn]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const init = () => {
        if (window.google?.accounts) {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleLogin,
          });
          if (googleBtnRef.current) {
            window.google.accounts.id.renderButton(googleBtnRef.current, {
              theme: "outline",
              size: "large",
              width: 300,
            });
          }
        } else {
          setTimeout(init, 100);
        }
      };
      init();
    }, 50);
    return () => clearTimeout(timer);
  }, [handleGoogleLogin]);

  return (
    <motion.div
      className="cac-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        className="cac-modal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button className="cac-modal-close" onClick={onClose} aria-label="Close">
          <FaTimes size={12} />
        </button>
        <h2 className="cac-modal-title">SCENITH</h2>
        <p className="cac-modal-sub">{subtitle}</p>
        {loginError && (
          <div className="cac-error" style={{ marginBottom: 12 }}>
            ⚠️ {loginError}
          </div>
        )}
        {isLoggingIn && (
          <div style={{ textAlign: "center", margin: "16px 0" }}>
            <div className="cac-spinner" />
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            handleLogin(fd.get("email") as string, fd.get("password") as string);
          }}
        >
          <input
            name="email"
            type="email"
            className="cac-input"
            placeholder="Email address"
            required
            disabled={isLoggingIn}
          />
          <input
            name="password"
            type="password"
            className="cac-input"
            placeholder="Password"
            required
            disabled={isLoggingIn}
          />
          <button
            type="submit"
            className="cac-generate-btn"
            disabled={isLoggingIn}
            style={{ width: "100%", marginTop: 4 }}
          >
            {isLoggingIn ? "Logging in…" : "Login"}
          </button>
        </form>
        <div className="cac-modal-divider">OR</div>
        <div ref={googleBtnRef} style={{ display: "flex", justifyContent: "center" }} />
        <p className="cac-modal-link">
          New to Scenith?{" "}
          <a href="/signup" className="cac-link">
            Create account →
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StudioLoginModal;
