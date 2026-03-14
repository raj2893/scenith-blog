"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaCheck, FaLock, FaCrown } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import "../../../styles/svg-library/DownloadModal.css";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  elementId: number;
  elementName: string;
  selectedColor?: string;
  fileFormat?: string;
  isLoggedIn?: boolean;
  onLimitReached?: (message?: string) => void;
}

interface DownloadLimits {
  canDownloadSvg: boolean;
  maxResolution: number;
  plan: string;
}

interface CreditStats {
  balance: number;
  costPerDownload: number;
  isPaid: boolean;
}

const FORMATS = [
  { value: "SVG", label: "SVG", description: "Vector · infinite scaling" },
  { value: "PNG", label: "PNG", description: "Transparent background" },
  { value: "JPG", label: "JPG", description: "Smaller file size" },
];

const RESOLUTIONS = [
  { value: "128x128", label: "128×128", size: "Small" },
  { value: "256x256", label: "256×256", size: "Medium" },
  { value: "512x512", label: "512×512", size: "Large" },
  { value: "1024x1024", label: "1024×1024", size: "Extra Large" },
  { value: "2048x2048", label: "2048×2048", size: "HD" },
  { value: "4096x4096", label: "4096×4096", size: "Ultra HD" },
];

const UNLIMITED = 2147483647; // Integer.MAX_VALUE from Java

const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  elementId,
  elementName,
  selectedColor = "#000000",
  fileFormat = "SVG",
  isLoggedIn = false,
  onLimitReached,
}) => {
  const [selectedFormat, setSelectedFormat] = useState("PNG");
  const [selectedResolution, setSelectedResolution] = useState("512x512");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

 const [downloadLimits, setDownloadLimits] = useState<DownloadLimits | null>(null);
  const [creditStats, setCreditStats] = useState<CreditStats | null>(null);
  const [limitsLoading, setLimitsLoading] = useState(false);
  const [usageLoading, setUsageLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const token = localStorage.getItem("token");
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    // Fetch limits (works for guests too)
   const fetchLimits = async () => {
      setLimitsLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/image-editor/elements/download-limits`,
          { headers: authHeader }
        );
        setDownloadLimits(res.data);
      } catch (e) {
        console.error("Failed to fetch download limits", e);
      } finally {
        setLimitsLoading(false);
      }
    };

    // Fetch credit stats (only for logged-in users)
    const fetchCreditStats = async () => {
      if (!isLoggedIn) return;
      setUsageLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/standalone-images/usage-stats`,
          { headers: authHeader }
        );
        setCreditStats(res.data);
      } catch (e) {
        console.error("Failed to fetch credit stats", e);
      } finally {
        setUsageLoading(false);
      }
    };

    fetchLimits();
    fetchCreditStats();
  }, [isOpen, elementId, isLoggedIn]);

 // Derived limit values
  const canSvg = downloadLimits?.canDownloadSvg ?? false;
  const maxRes = downloadLimits?.maxResolution ?? 256;
  const plan = downloadLimits?.plan ?? "GUEST";

  // Derived credit values
  const balance = creditStats?.balance ?? 0;
  const costPerDownload = creditStats?.costPerDownload ?? 1;
  const isPaid = creditStats?.isPaid ?? false;
  const isLimitReached = isLoggedIn && balance < costPerDownload;

  const isSvgLocked = selectedFormat === "SVG" && !canSvg;

  const getResolutionLocked = (resValue: string) => {
    if (maxRes === UNLIMITED) return false;
    const w = parseInt(resValue.split("x")[0]);
    return w > maxRes;
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadSuccess(false);

    try {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams({ format: selectedFormat });

      if (selectedFormat !== "SVG") {
        params.append("resolution", selectedResolution);
      }

      if (fileFormat.toLowerCase() === "svg" && selectedColor && selectedColor !== "#000000") {
        params.append("color", selectedColor.replace("#", ""));
      }

      const response = await axios.get(
        `${API_BASE_URL}/api/image-editor/elements/${elementId}/download?${params}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      const contentDisposition = response.headers["content-disposition"];
      let filename = `${elementName}.${selectedFormat.toLowerCase()}`;
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?(.+)"?/);
        if (match) filename = match[1];
      }

      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setDownloadSuccess(true);

      // Refresh usage after successful download
      if (isLoggedIn) {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${API_BASE_URL}/api/standalone-images/usage-stats`,
          { headers: token ? { Authorization: `Bearer ${token}` } : {} }
        );
        setCreditStats(res.data);
      }

      setTimeout(() => {
        onClose();
        setDownloadSuccess(false);
      }, 1800);
    } catch (error: any) {
      console.error("Download failed:", error);
      console.error("Response status:", error?.response?.status);
      console.error("Response headers:", error?.response?.headers);
      console.error("Request:", error?.request);
      // Is error.request set but error.response undefined? = CORS/network block
      if (error?.request && !error?.response) {
        console.error("REQUEST WAS MADE BUT NO RESPONSE RECEIVED - likely CORS");
      }      
      if (error?.response?.status === 429) {
        onLimitReached?.(error?.response?.data?.message || "You've reached your download limit.");
        return;
      }
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  const isLoading = limitsLoading || usageLoading;

  return (
    <AnimatePresence>
      <div className="download-modal-overlay" onClick={onClose}>
        <motion.div
          className="download-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-header">
            <div className="modal-title-group">
              <FaDownload className="modal-title-icon" />
              <h2>{elementName}</h2>
            </div>
            {plan !== "GUEST" && (
              <span className={`plan-badge plan-${plan.toLowerCase()}`}>
                {plan === "BASIC" ? "Free" : plan}
              </span>
            )}
          </div>

          {isLoading && (
            <div className="modal-loading">
              <div className="modal-spinner" />
              <span>Loading your plan details...</span>
            </div>
          )}

          {/* Usage section — only for logged-in users with limits */}
          {/* Credit balance section — only for logged-in users */}
          {isLoggedIn && !isLoading && creditStats && (
            <div className="usage-section">
              <div className="usage-section__header">
                <span className="usage-section__title">Your Credits</span>
                {isLimitReached && (
                  <span className="usage-section__exceeded-tag">Insufficient credits</span>
                )}
              </div>

              <div className="usage-row">
                <span className="usage-row__label">Balance</span>
                <span className={`usage-row__count ${isLimitReached ? "exceeded" : ""}`}>
                  {balance} credits
                </span>
              </div>
              <div className="usage-row">
                <span className="usage-row__label">Cost per download</span>
                <span className="usage-row__count">{costPerDownload} credits</span>
              </div>

              {isLimitReached && (
                <div className="limit-reached-banner">
                  <div className="limit-reached-banner__left">
                    <FaLock className="limit-reached-banner__icon" />
                    <div>
                      <strong>Insufficient credits</strong>
                      <p>You need {costPerDownload} credits to download</p>
                    </div>
                  </div>
                  <a href="/pricing" className="limit-reached-banner__cta">
                    <FaCrown /> Top Up
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Format Selection */}
          <div className="format-section">
            <h3>Format</h3>
            <div className="format-grid">
              {FORMATS.map((format) => {
                const locked = format.value === "SVG" && !canSvg;
                const isSelected = selectedFormat === format.value;
                return (
                  <button
                    key={format.value}
                    className={`format-card ${isSelected ? "selected" : ""} ${locked ? "locked" : ""}`}
                    onClick={() => !locked && setSelectedFormat(format.value)}
                    disabled={locked}
                    title={locked ? "SVG requires CREATOR plan or higher" : ""}
                  >
                    {locked && (
                      <div className="card-lock-badge">
                        <FaCrown className="card-lock-badge__icon" />
                        <span>PRO</span>
                      </div>
                    )}
                    <div className="format-label">{format.label}</div>
                    <div className="format-description">{format.description}</div>
                    {isSelected && !locked && <FaCheck className="check-icon" />}
                    {locked && <FaLock className="locked-indicator" />}
                  </button>
                );
              })}
            </div>
            {!canSvg && !isLoading && (
              <p className="plan-limit-hint">
                🔒 SVG format requires <a href="/pricing">CREATOR plan</a> or higher
              </p>
            )}
          </div>

          {/* Resolution Selection */}
          {selectedFormat !== "SVG" && (
            <div className="resolution-section">
              <h3>Resolution</h3>
              <div className="resolution-grid">
                {RESOLUTIONS.map((resolution) => {
                  const locked = getResolutionLocked(resolution.value);
                  const isSelected = selectedResolution === resolution.value;
                  return (
                    <button
                      key={resolution.value}
                      className={`resolution-card ${isSelected ? "selected" : ""} ${locked ? "locked" : ""}`}
                      onClick={() => !locked && setSelectedResolution(resolution.value)}
                      disabled={locked}
                      title={locked ? `Requires CREATOR plan (your plan: max ${maxRes}×${maxRes})` : ""}
                    >
                      {locked && <FaCrown className="res-lock-icon" />}
                      <div className="resolution-label">{resolution.label}</div>
                      <div className="resolution-size">{resolution.size}</div>
                      {isSelected && !locked && <FaCheck className="check-icon" />}
                    </button>
                  );
                })}
              </div>
              {maxRes < UNLIMITED && !isLoading && (
                <p className="plan-limit-hint">
                  🔒 Resolutions above {maxRes}×{maxRes} require <a href="/pricing">CREATOR plan</a>
                </p>
              )}
            </div>
          )}

          {/* Download Button */}
          {isLimitReached || isSvgLocked ? (
            <a href="/pricing" className="download-btn download-btn--upgrade">
              <FaCrown /> Upgrade to Download
            </a>
          ) : (
            <button
              className="download-btn"
              onClick={handleDownload}
              disabled={isDownloading || downloadSuccess || isLoading}
            >
              {downloadSuccess ? (
                <><FaCheck /> Downloaded!</>
              ) : isDownloading ? (
                <><div className="btn-spinner" />Preparing...</>
              ) : (
                <>
                  <FaDownload />
                  Download {selectedFormat}
                  {selectedFormat !== "SVG" && (
                    <span className="download-btn__res">{selectedResolution}</span>
                  )}
                </>
              )}
            </button>
          )}

           {/* Remaining hint */}
          {isLoggedIn && !isLimitReached && !isLoading && creditStats && (
            <p className="remaining-hint">
              {Math.floor(balance / costPerDownload)} download(s) remaining ·{" "}
              <a href="/pricing">Top up credits</a>
            </p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadModal;