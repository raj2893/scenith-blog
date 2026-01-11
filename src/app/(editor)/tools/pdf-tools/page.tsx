"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFilePdf,
  FaImages,
  FaCompress,
  FaSync,
  FaObjectGroup,
  FaCut,
  FaLock,
  FaUnlock,
  FaTint,
  FaArrowLeft
} from "react-icons/fa";
import "@/styles/tools/PDFTools.css";

interface PDFTool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  available: boolean;
}

const PDFToolsPage: React.FC = () => {
  const router = useRouter();
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: PDFTool[] = [
    {
      id: "merge-pdf",
      name: "Merge PDFs",
      description: "Combine multiple PDF files into one document",
      icon: <FaObjectGroup size={32} />,
      color: "#3b82f6",
      available: true,
    },
    {
      id: "split-pdf",
      name: "Split PDF",
      description: "Extract pages or split PDF into multiple files",
      icon: <FaCut size={32} />,
      color: "#8b5cf6",
      available: true,
    },
    {
      id: "compress-pdf",
      name: "Compress PDF",
      description: "Reduce PDF file size while maintaining quality",
      icon: <FaCompress size={32} />,
      color: "#10b981",
      available: true,
    },
    {
      id: "rotate-pdf",
      name: "Rotate PDF",
      description: "Rotate pages in your PDF document",
      icon: <FaSync size={32} />,
      color: "#f59e0b",
      available: true,
    },
    {
      id: "images-to-pdf",
      name: "Images to PDF",
      description: "Convert multiple images into a single PDF",
      icon: <FaImages size={32} />,
      color: "#ec4899",
      available: true,
    },
    {
      id: "pdf-to-images",
      name: "PDF to Images",
      description: "Extract all pages as high-quality images",
      icon: <FaFilePdf size={32} />,
      color: "#06b6d4",
      available: true,
    },
    {
      id: "add-watermark",
      name: "Add Watermark",
      description: "Add text watermark to protect your PDFs",
      icon: <FaTint size={32} />,
      color: "#6366f1",
      available: true,
    },
    {
      id: "lock-pdf",
      name: "Lock PDF",
      description: "Password-protect your PDF documents",
      icon: <FaLock size={32} />,
      color: "#ef4444",
      available: true,
    },
    {
      id: "unlock-pdf",
      name: "Unlock PDF",
      description: "Remove password protection from PDFs",
      icon: <FaUnlock size={32} />,
      color: "#14b8a6",
      available: true,
    },
    {
      id: "rearrange-pdf",
      name: "Rearrange Pages",
      description: "Reorder pages and insert images into PDFs",
      icon: <FaObjectGroup size={32} />,
      color: "#a855f7",
      available: true,
    },
  ];

  const handleToolClick = (toolId: string, available: boolean) => {
    if (available) {
      router.push(`/tools/pdf-tools/${toolId}`);
    }
  };

  return (
    <div className="pdf-tools-container">
      {/* Header */}
      <div className="pdf-tools-header">
        <button
          className="back-btn"
          onClick={() => router.push("/tools")}
        >
          <FaArrowLeft size={18} />
          <span>Back to Tools</span>
        </button>

        <div className="header-content">
          <div className="header-icon">
            <FaFilePdf size={48} />
          </div>
          <h1>PDF Tools</h1>
          <p>Professional PDF manipulation tools - Free, fast, and secure</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`tool-card ${!tool.available ? "unavailable" : ""} ${
              hoveredTool === tool.id ? "hovered" : ""
            }`}
            onClick={() => handleToolClick(tool.id, tool.available)}
            onMouseEnter={() => setHoveredTool(tool.id)}
            onMouseLeave={() => setHoveredTool(null)}
            style={{
              "--tool-color": tool.color,
            } as React.CSSProperties}
          >
            <div className="tool-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>

            <div className="tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            {!tool.available && (
              <div className="coming-soon-badge">Coming Soon</div>
            )}

            <div className="tool-arrow">→</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Our PDF Tools?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h4>Lightning Fast</h4>
            <p>Process PDFs in seconds with our optimized engine</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h4>100% Secure</h4>
            <p>Files are processed securely and deleted after download</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✨</div>
            <h4>High Quality</h4>
            <p>Maintain original quality with advanced processing</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💯</div>
            <h4>Free to Use</h4>
            <p>All PDF tools are completely free with no limits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFToolsPage;