"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import EditorCanvas from "@/app/(editor)/tools/image-editing/[projectId]/edit/EditorCanvas";
import "../../../../../styles/TemplateEditor.css";

const TemplateEditorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId");
  
  const [isCreating, setIsCreating] = useState(!templateId);
  const [templateData, setTemplateData] = useState({
    templateName: "",
    description: "",
    category: "social-media",
    tags: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [designJson, setDesignJson] = useState<string | undefined>(undefined);
  const [canvasSize, setCanvasSize] = useState({ width: 1080, height: 1080 });
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
  
    if (templateId) {
      // Editing existing template
      loadTemplateForEditing();
    } else {
      // Creating new → start with blank design
      initializeBlankDesign();
    }
  }, [templateId]);

  const initializeBlankDesign = () => {
    const blankDesign = {
      version: "1.0",
      pages: [
        {
          id: "page-" + Date.now(),
          canvas: {
            width: 1080,
            height: 1080,
            backgroundColor: "#FFFFFF"
          },
          layers: []
        }
      ]
    };
    setDesignJson(JSON.stringify(blankDesign));
    setCanvasSize({ width: 1080, height: 1080 });
    setIsLoading(false);
  };

  const loadTemplateForEditing = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/image-templates/${templateId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const template = response.data;

      setTemplateData({
        templateName: template.templateName,
        description: template.description || "",
        category: template.category,
        tags: template.tags || "",
      });

      // Use the template's design directly
      setDesignJson(template.designJson);

      // Extract canvas size
      try {
        const design = JSON.parse(template.designJson);
        if (design.pages && design.pages.length > 0) {
          const canvas = design.pages[0].canvas;
          setCanvasSize({
            width: canvas.width || 1080,
            height: canvas.height || 1080
          });
        }
      } catch (e) {
        console.warn("Could not parse canvas size, using default");
      }

      setIsLoading(false);
    } catch (err) {
      setError("Failed to load template");
      setIsLoading(false);
    }
  };

  const handleSaveTemplate = async () => {
    if (!templateData.templateName.trim()) {
      setError("Template name is required");
      return;
    }

    if (!designJson) {
      setError("No design to save");
      return;
    }

    try {
      setSaving(true);
      setError(null);
      const token = localStorage.getItem("token");

      // Parse design to get canvas size
      let canvasWidth = 1080;
      let canvasHeight = 1080;
      try {
        const parsed = JSON.parse(designJson);
        if (parsed.pages && parsed.pages.length > 0) {
          canvasWidth = parsed.pages[0].canvas.width || 1080;
          canvasHeight = parsed.pages[0].canvas.height || 1080;
        }
      } catch (e) { /* keep defaults */ }

      const formData = new FormData();
      formData.append("templateName", templateData.templateName);
      formData.append("description", templateData.description);
      formData.append("category", templateData.category);
      formData.append("canvasWidth", canvasWidth.toString());
      formData.append("canvasHeight", canvasHeight.toString());
      formData.append("designJson", designJson);
      formData.append("tags", templateData.tags);

      if (isCreating) {
        await axios.post(`${API_BASE_URL}/api/admin/image-templates`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Template created successfully!");
      } else {
        await axios.put(`${API_BASE_URL}/api/admin/image-templates/${templateId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Template updated successfully!");
      }

      setTimeout(() => router.push("/admin/templates"), 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save template");
    } finally {
      setSaving(false);
    }
  };

  {if (isLoading) {
    return (
      <div className="template-editor-loading">
        <div className="spinner"></div>
        <p>Loading editor...</p>
      </div>
    );
  }}

  return (
    <div className="template-editor-container">
      {/* Template Info Sidebar */}
      <div className="template-info-sidebar">
        <h2>{isCreating ? "Create Template" : "Edit Template"}</h2>

        <div className="form-group">
          <label>Template Name *</label>
          <input
            type="text"
            value={templateData.templateName}
            onChange={(e) =>
              setTemplateData({ ...templateData, templateName: e.target.value })
            }
            placeholder="e.g., Instagram Story Template"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={templateData.description}
            onChange={(e) =>
              setTemplateData({ ...templateData, description: e.target.value })
            }
            placeholder="Describe this template..."
            rows={3}
          />
        </div>

        <div className="form-group">
          <label>Category *</label>
          <select
            value={templateData.category}
            onChange={(e) =>
              setTemplateData({ ...templateData, category: e.target.value })
            }
          >
            <option value="social-media">Social Media</option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="presentation">Presentation</option>
            <option value="card">Cards & Invitations</option>
            <option value="poster">Posters & Flyers</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            value={templateData.tags}
            onChange={(e) =>
              setTemplateData({ ...templateData, tags: e.target.value })
            }
            placeholder="instagram, story, modern"
          />
        </div>

        <div className="action-buttons">
          <button
            className="save-template-btn"
            onClick={handleSaveTemplate}
            disabled={saving}
          >
            {saving ? "Saving..." : isCreating ? "Create Template" : "Update Template"}
          </button>
          <button
            className="cancel-btn"
            onClick={() => router.push("/admin/templates")}
          >
            Cancel
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>

    <div className="template-editor-canvas">
      <EditorCanvas
        initialDesignJson={designJson}
        onDesignChange={setDesignJson}
        canvasWidth={canvasSize.width}
        canvasHeight={canvasSize.height}
      />
    </div>
    </div>
  );
};

export default TemplateEditorPage;