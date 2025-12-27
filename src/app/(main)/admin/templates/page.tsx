"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../../../styles/TemplateList.css";

interface Template {
  id: number;
  templateName: string;
  description: string;
  category: string;
  canvasWidth: number;
  canvasHeight: number;
  thumbnailUrl: string;
  isActive: boolean;
  isPremium: boolean;
  usageCount: number;
  createdAt: string;
}

const TemplatesListPage = () => {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/admin/image-templates`, {
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

  const handleToggleActive = async (templateId: number, currentStatus: boolean) => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("isActive", (!currentStatus).toString());

      await axios.put(
        `${API_BASE_URL}/api/admin/image-templates/${templateId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchTemplates();
    } catch (err) {
      console.error("Error toggling template status:", err);
    }
  };

  const handleDelete = async (templateId: number) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/admin/image-templates/${templateId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchTemplates();
    } catch (err) {
      console.error("Error deleting template:", err);
    }
  };

  if (loading) {
    return (
      <div className="templates-loading">
        <div className="spinner"></div>
        <p>Loading templates...</p>
      </div>
    );
  }

  return (
    <div className="templates-list-container">
      <div className="templates-header">
        <h1>Manage Templates</h1>
        <button
          className="create-template-btn"
          onClick={() => router.push("/admin/template-editor")}
        >
          <FaPlus /> Create New Template
        </button>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <div className="templates-grid">
        {templates.length === 0 ? (
          <div className="empty-state">
            <p>No templates yet. Create your first template!</p>
          </div>
        ) : (
          templates.map((template) => (
            <div key={template.id} className="template-card-admin">
              {template.thumbnailUrl ? (
                <img
                  src={template.thumbnailUrl}
                  alt={template.templateName}
                  className="template-thumbnail-admin"
                />
              ) : (
                <div className="template-placeholder-admin">
                  <span>{template.canvasWidth}×{template.canvasHeight}</span>
                </div>
              )}

              <div className="template-card-content">
                <h3>{template.templateName}</h3>
                {template.description && (
                  <p className="template-desc">{template.description}</p>
                )}

                <div className="template-meta-admin">
                  <span className="category-badge">{template.category}</span>
                  <span className="usage-count">Used {template.usageCount} times</span>
                </div>

                <div className="template-actions">
                  <button
                    className="action-btn edit-btn"
                    onClick={() =>
                      router.push(`/admin/template-editor?templateId=${template.id}`)
                    }
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="action-btn toggle-btn"
                    onClick={() => handleToggleActive(template.id, template.isActive)}
                    title={template.isActive ? "Deactivate" : "Activate"}
                  >
                    {template.isActive ? <FaEye /> : <FaEyeSlash />}
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(template.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TemplatesListPage;