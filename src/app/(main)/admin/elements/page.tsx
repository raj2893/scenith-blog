"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";
import { FaUpload, FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

export default function ElementsAdmin() {
  const [elements, setElements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [showBulkEdit, setShowBulkEdit] = useState(false);
  const [bulkEditForm, setBulkEditForm] = useState({
    category: "",
    tags: "",
    isActive: null as boolean | null,
  });
  const [editForm, setEditForm] = useState({
    name: "",
    category: "",
    tags: "",
    isActive: true,
    displayOrder: 0,
  });

  useEffect(() => {
    fetchElements();
  }, []);

  const fetchElements = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/admin/image-elements`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setElements(response.data);
    } catch (error) {
      console.error("Failed to fetch elements:", error);
      alert("Failed to load elements");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("category", "general");

    setUploading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/api/admin/image-elements/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(`Successfully uploaded ${response.data.length} elements!`);
      fetchElements();
    } catch (error: any) {
      alert(error.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this element?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/admin/image-elements/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Element deleted successfully!");
      fetchElements();
    } catch (error: any) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  const startEdit = (element: any) => {
    setEditingId(element.id);
    setEditForm({
      name: element.name,
      category: element.category,
      tags: element.tags || "",
      isActive: element.isActive,
      displayOrder: element.displayOrder,
    });
  };

  const handleUpdate = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const params = new URLSearchParams();
      params.append("name", editForm.name);
      params.append("category", editForm.category);
      params.append("tags", editForm.tags);
      params.append("isActive", editForm.isActive.toString());
      params.append("displayOrder", editForm.displayOrder.toString());

      await axios.put(`${API_BASE_URL}/api/admin/image-elements/${id}?${params.toString()}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Element updated successfully!");
      setEditingId(null);
      fetchElements();
    } catch (error: any) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === elements.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(elements.map(e => e.id)));
    }
  };
  
  const toggleSelect = (id: number) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };
  
  const handleBulkUpdate = async () => {
    if (selectedIds.size === 0) {
      alert("Please select at least one element");
      return;
    }
  
    if (!bulkEditForm.category && !bulkEditForm.tags && bulkEditForm.isActive === null) {
      alert("Please specify at least one field to update");
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const payload: any = {
        elementIds: Array.from(selectedIds),
      };
  
      if (bulkEditForm.category) payload.category = bulkEditForm.category;
      if (bulkEditForm.tags) payload.tags = bulkEditForm.tags;
      if (bulkEditForm.isActive !== null) payload.isActive = bulkEditForm.isActive;
  
      await axios.put(`${API_BASE_URL}/api/admin/image-elements/bulk-update`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      alert(`Successfully updated ${selectedIds.size} elements!`);
      setSelectedIds(new Set());
      setShowBulkEdit(false);
      setBulkEditForm({ category: "", tags: "", isActive: null });
      fetchElements();
    } catch (error: any) {
      alert(error.response?.data?.message || "Bulk update failed");
    }
  };  

  return (
    <div style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Elements Management</h1>
          <label style={{
            padding: "12px 24px",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            color: "#ffffff",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
          }}>
            <FaUpload />
            {uploading ? "Uploading..." : "Upload Element"}
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/svg+xml"
              multiple
              onChange={handleUpload}
              disabled={uploading}
              style={{ display: "none" }}
            />
          </label>
        </div>
  
        {/* Bulk Actions Bar */}
        {selectedIds.size > 0 && (
          <div style={{
            padding: "16px",
            background: "#f1f5f9",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}>
            <span style={{ fontWeight: "600" }}>
              {selectedIds.size} element{selectedIds.size > 1 ? "s" : ""} selected
            </span>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setShowBulkEdit(!showBulkEdit)}
                style={{
                  padding: "8px 16px",
                  background: "#3b82f6",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                {showBulkEdit ? "Cancel" : "Bulk Edit"}
              </button>
              <button
                onClick={() => setSelectedIds(new Set())}
                style={{
                  padding: "8px 16px",
                  background: "#94a3b8",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
  
        {/* Bulk Edit Form */}
        {showBulkEdit && selectedIds.size > 0 && (
          <div style={{
            padding: "20px",
            background: "#ffffff",
            border: "2px solid #3b82f6",
            borderRadius: "12px",
            marginBottom: "20px",
          }}>
            <h3 style={{ marginBottom: "16px", fontSize: "1.2rem", fontWeight: "600" }}>
              Bulk Edit {selectedIds.size} Elements
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
              <input
                type="text"
                value={bulkEditForm.category}
                onChange={(e) => setBulkEditForm({ ...bulkEditForm, category: e.target.value })}
                placeholder="Category (leave empty to skip)"
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
              />
              <input
                type="text"
                value={bulkEditForm.tags}
                onChange={(e) => setBulkEditForm({ ...bulkEditForm, tags: e.target.value })}
                placeholder="Tags (leave empty to skip)"
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
              />
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <input
                type="checkbox"
                checked={bulkEditForm.isActive === true}
                onChange={(e) => setBulkEditForm({ 
                  ...bulkEditForm, 
                  isActive: e.target.checked ? true : null 
                })}
              />
              Set as Active
            </label>
            <button
              onClick={handleBulkUpdate}
              style={{
                padding: "12px 24px",
                background: "#10b981",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                width: "100%",
              }}
            >
              Apply to {selectedIds.size} Elements
            </button>
          </div>
        )}
  
        {/* Select All Checkbox */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={selectedIds.size === elements.length && elements.length > 0}
              onChange={toggleSelectAll}
            />
            <span style={{ fontWeight: "600" }}>Select All ({elements.length})</span>
          </label>
        </div>
      </div>
  
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {elements.map((element) => (
            <div
              key={element.id}
              style={{
                background: selectedIds.has(element.id) ? "#eff6ff" : "#ffffff",
                border: selectedIds.has(element.id) ? "2px solid #3b82f6" : "2px solid #e2e8f0",
                borderRadius: "12px",
                padding: "16px",
                transition: "all 0.3s ease",
              }}
            >
              {/* Checkbox */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <input
                  type="checkbox"
                  checked={selectedIds.has(element.id)}
                  onChange={() => toggleSelect(element.id)}
                  style={{ cursor: "pointer", width: "18px", height: "18px" }}
                />
              </div>
  
              <img
                src={element.cdnUrl}
                alt={element.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                  background: "#f8fafc",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
  
              {editingId === element.id ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    placeholder="Name"
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
                  />
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    placeholder="Category"
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
                  />
                  <input
                    type="text"
                    value={editForm.tags}
                    onChange={(e) => setEditForm({ ...editForm, tags: e.target.value })}
                    placeholder="Tags (comma-separated)"
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #e2e8f0" }}
                  />
                  <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      type="checkbox"
                      checked={editForm.isActive}
                      onChange={(e) => setEditForm({ ...editForm, isActive: e.target.checked })}
                    />
                    Active
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => handleUpdate(element.id)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: "#10b981",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <FaSave />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: "#94a3b8",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "4px" }}>{element.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "4px" }}>
                    Category: {element.category}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "12px" }}>
                    {element.width} x {element.height} • {(element.fileSize / 1024).toFixed(1)} KB
                  </p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => startEdit(element)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: "#3b82f6",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(element.id)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        background: "#ef4444",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}