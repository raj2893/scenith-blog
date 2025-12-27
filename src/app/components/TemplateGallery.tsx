"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import { FaTimes, FaSearch } from "react-icons/fa";
import "../../../styles/TemplateGallery.css";

interface Template {
  id: number;
  templateName: string;
  description: string;
  category: string;
  canvasWidth: number;
  canvasHeight: number;
  thumbnailUrl: string;
  isPremium: boolean;
  usageCount: number;
}

interface TemplateGalleryProps {
  onClose: () => void;
  onSelectTemplate: (templateId: number) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  onClose,
  onSelectTemplate,
}) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { value: "all", label: "All Templates" },
    { value: "social-media", label: "Social Media" },
    { value: "business", label: "Business" },
    { value: "marketing", label: "Marketing" },
    { value: "presentation", label: "Presentation" },
    { value: "card", label: "Cards & Invitations" },
    { value: "poster", label: "Posters & Flyers" },
  ];

  useEffect(() => {
    fetchTemplates();
  }, []);

  useEffect(() => {
    filterTemplates();
  }, [templates, selectedCategory, searchQuery]);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/image-editor/templates`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTemplates(response.data);
      setError(null);
    } catch (err: any) {
      setError("Failed to load templates");
      console.error("Error fetching templates:", err);
    } finally {
      setLoading(false);
    }
  };

  const filterTemplates = () => {
    let filtered = templates;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (t) =>
          t.templateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTemplates(filtered);
  };

  const handleSelectTemplate = async (templateId: number) => {
    try {
      onSelectTemplate(templateId);
      onClose();
    } catch (err) {
      console.error("Error selecting template:", err);
    }
  };

  return (
    <div className="template-gallery-overlay" onClick={onClose}>
      <div className="template-gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="template-gallery-header">
          <h2>Choose a Template</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="template-gallery-controls">
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`category-btn ${
                  selectedCategory === cat.value ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="template-gallery-content">
          {loading ? (
            <div className="loading-spinner">Loading templates...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : filteredTemplates.length === 0 ? (
            <div className="no-templates">
              <p>No templates found</p>
            </div>
          ) : (
            <div className="templates-grid">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className="template-card"
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  {template.thumbnailUrl ? (
                    <img
                      src={template.thumbnailUrl}
                      alt={template.templateName}
                      className="template-thumbnail"
                    />
                  ) : (
                    <div className="template-placeholder">
                      <span>{template.canvasWidth}×{template.canvasHeight}</span>
                    </div>
                  )}
                  <div className="template-info">
                    <h3>{template.templateName}</h3>
                    {template.description && (
                      <p className="template-description">{template.description}</p>
                    )}
                    <div className="template-meta">
                      <span className="template-dimensions">
                        {template.canvasWidth}×{template.canvasHeight}
                      </span>
                      {template.isPremium && (
                        <span className="premium-badge">Premium</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;