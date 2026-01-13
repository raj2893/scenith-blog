"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaCheck } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import "../../../styles/svg-library/DownloadModal.css";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  elementId: number;
  elementName: string;
}

const FORMATS = [
  { value: "SVG", label: "SVG", description: "Vector format, infinite scaling" },
  { value: "PNG", label: "PNG", description: "Transparent background support" },
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

const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  elementId,
  elementName,
}) => {
  const [selectedFormat, setSelectedFormat] = useState("PNG");
  const [selectedResolution, setSelectedResolution] = useState("512x512");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadSuccess(false);

    try {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams({
        format: selectedFormat,
      });

      if (selectedFormat !== "SVG") {
        params.append("resolution", selectedResolution);
      }

      const response = await axios.get(
        `${API_BASE_URL}/api/image-editor/elements/${elementId}/download?${params}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          responseType: "blob",
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      
      // Get filename from Content-Disposition header or create one
      const contentDisposition = response.headers["content-disposition"];
      let filename = `${elementName}.${selectedFormat.toLowerCase()}`;
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
      }
      
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      setTimeout(() => {
        onClose();
        setDownloadSuccess(false);
      }, 1500);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="download-modal-overlay" onClick={onClose}>
        <motion.div
          className="download-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <h2>Download {elementName}</h2>

          {/* Format Selection */}
          <div className="format-section">
            <h3>Select Format</h3>
            <div className="format-grid">
              {FORMATS.map((format) => (
                <button
                  key={format.value}
                  className={`format-card ${
                    selectedFormat === format.value ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFormat(format.value)}
                >
                  <div className="format-label">{format.label}</div>
                  <div className="format-description">{format.description}</div>
                  {selectedFormat === format.value && (
                    <FaCheck className="check-icon" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Resolution Selection (for non-SVG) */}
          {selectedFormat !== "SVG" && (
            <div className="resolution-section">
              <h3>Select Resolution</h3>
              <div className="resolution-grid">
                {RESOLUTIONS.map((resolution) => (
                  <button
                    key={resolution.value}
                    className={`resolution-card ${
                      selectedResolution === resolution.value ? "selected" : ""
                    }`}
                    onClick={() => setSelectedResolution(resolution.value)}
                  >
                    <div className="resolution-label">{resolution.label}</div>
                    <div className="resolution-size">{resolution.size}</div>
                    {selectedResolution === resolution.value && (
                      <FaCheck className="check-icon" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Download Button */}
          <button
            className="download-btn"
            onClick={handleDownload}
            disabled={isDownloading || downloadSuccess}
          >
            {downloadSuccess ? (
              <>
                <FaCheck /> Downloaded!
              </>
            ) : isDownloading ? (
              <>
                <div className="btn-spinner"></div>
                Preparing Download...
              </>
            ) : (
              <>
                <FaDownload /> Download {selectedFormat}
                {selectedFormat !== "SVG" && ` (${selectedResolution})`}
              </>
            )}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadModal;