"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  FaSave,
  FaDownload,
  FaUndo,
  FaRedo,
  FaPlus,
  FaFont,
  FaImage,
  FaShapes,
  FaTrash,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUnlock,
} from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "../../../../../../../styles/tools/EditorCanvas.css";

interface Layer {
  id: string;
  type: "text" | "image" | "shape" | "background";
  zIndex: number;
  opacity: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  visible: boolean;
  locked: boolean;

  // Text properties
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  color?: string;
  textAlign?: string;

  // Image properties
  src?: string;

  // Shape properties
  shape?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  borderRadius?: number;

  // Effects
  filters?: Array<{ type: string; value: number }>;
  shadow?: {
    offsetX: number;
    offsetY: number;
    blur: number;
    color: string;
  };
}

interface Project {
  id: number;
  projectName: string;
  canvasWidth: number;
  canvasHeight: number;
  canvasBackgroundColor: string;
  designJson: string;
  status: string;
}

const EditorCanvas: React.FC<{ projectId: string }> = ({ projectId }) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [canvasWidth, setCanvasWidth] = useState(1080);
  const [canvasHeight, setCanvasHeight] = useState(1080);
  const [canvasBgColor, setCanvasBgColor] = useState("#FFFFFF");
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Fetch project
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/tools/image-editing");
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/image-editor/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProject(res.data);
        const design = JSON.parse(res.data.designJson);
        setCanvasWidth(design.canvas.width);
        setCanvasHeight(design.canvas.height);
        setCanvasBgColor(design.canvas.backgroundColor);
        setLayers(design.layers || []);
        saveToHistory(design.layers);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setError("Failed to load project. Redirecting...");
        setTimeout(() => router.push("/tools/image-editing"), 2000);
      });
  }, [projectId, router]);

  // Save to history for undo/redo
  const saveToHistory = (newLayers: Layer[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.stringify(newLayers));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setLayers(JSON.parse(history[historyIndex - 1]));
    }
  };

  // Redo
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setLayers(JSON.parse(history[historyIndex + 1]));
    }
  };

  // Add text layer
  const addTextLayer = () => {
    const newLayer: Layer = {
      id: `text-${Date.now()}`,
      type: "text",
      zIndex: layers.length,
      opacity: 1,
      x: canvasWidth / 2 - 100,
      y: canvasHeight / 2 - 25,
      width: 200,
      height: 50,
      rotation: 0,
      visible: true,
      locked: false,
      text: "New Text",
      fontFamily: "Arial",
      fontSize: 32,
      fontWeight: "normal",
      fontStyle: "normal",
      color: "#000000",
      textAlign: "center",
    };
    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    setSelectedLayerId(newLayer.id);
    saveToHistory(updatedLayers);
  };

  // Add shape layer
  const addShapeLayer = (shape: string) => {
    const newLayer: Layer = {
      id: `shape-${Date.now()}`,
      type: "shape",
      zIndex: layers.length,
      opacity: 1,
      x: canvasWidth / 2 - 100,
      y: canvasHeight / 2 - 100,
      width: 200,
      height: 200,
      rotation: 0,
      visible: true,
      locked: false,
      shape,
      fill: "#3B82F6",
      stroke: "#000000",
      strokeWidth: 2,
      borderRadius: shape === "rectangle" ? 10 : 0,
    };
    const updatedLayers = [...layers, newLayer];
    setLayers(updatedLayers);
    setSelectedLayerId(newLayer.id);
    saveToHistory(updatedLayers);
  };

  // Upload image layer
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("assetType", "IMAGE");

    try {
      const response = await axios.post(`${API_BASE_URL}/api/image-editor/assets/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const newLayer: Layer = {
        id: `image-${Date.now()}`,
        type: "image",
        zIndex: layers.length,
        opacity: 1,
        x: 0,
        y: 0,
        width: canvasWidth,
        height: canvasHeight,
        rotation: 0,
        visible: true,
        locked: false,
        src: response.data.cdnUrl,
      };
      const updatedLayers = [...layers, newLayer];
      setLayers(updatedLayers);
      setSelectedLayerId(newLayer.id);
      saveToHistory(updatedLayers);
    } catch (err) {
      setError("Failed to upload image");
    }
  };

  // Update layer property
  const updateLayer = (layerId: string, updates: Partial<Layer>) => {
    const updatedLayers = layers.map((layer) =>
      layer.id === layerId ? { ...layer, ...updates } : layer
    );
    setLayers(updatedLayers);
    saveToHistory(updatedLayers);
  };

  // Delete layer
  const deleteLayer = (layerId: string) => {
    const updatedLayers = layers.filter((layer) => layer.id !== layerId);
    setLayers(updatedLayers);
    setSelectedLayerId(null);
    saveToHistory(updatedLayers);
  };

  // Reorder layers
  const moveLayer = (layerId: string, direction: "up" | "down") => {
    const index = layers.findIndex((l) => l.id === layerId);
    if (index === -1) return;

    const updatedLayers = [...layers];
    if (direction === "up" && index < layers.length - 1) {
      [updatedLayers[index], updatedLayers[index + 1]] = [updatedLayers[index + 1], updatedLayers[index]];
    } else if (direction === "down" && index > 0) {
      [updatedLayers[index], updatedLayers[index - 1]] = [updatedLayers[index - 1], updatedLayers[index]];
    }

    updatedLayers.forEach((layer, idx) => {
      layer.zIndex = idx;
    });

    setLayers(updatedLayers);
    saveToHistory(updatedLayers);
  };

  // Save project
  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      const designJson = JSON.stringify({
        version: "1.0",
        canvas: {
          width: canvasWidth,
          height: canvasHeight,
          backgroundColor: canvasBgColor,
        },
        layers,
      });

      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
        { designJson },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setSuccess("Project saved successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save project");
    } finally {
      setIsSaving(false);
    }
  };

  // Export project
  const handleExport = async (format: string) => {
    setIsExporting(true);
    setError(null);
    try {
      // Save first
      const designJson = JSON.stringify({
        version: "1.0",
        canvas: {
          width: canvasWidth,
          height: canvasHeight,
          backgroundColor: canvasBgColor,
        },
        layers,
      });

      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
        { designJson },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Export
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}/export`,
        { format, quality: 90 },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Download
      window.open(response.data.exportUrl, "_blank");
      setSuccess(`Exported as ${format} successfully!`);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to export");
    } finally {
      setIsExporting(false);
    }
  };

  // Mouse handlers for dragging layers
  const handleMouseDown = (e: React.MouseEvent, layerId: string) => {
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.locked) return;

    setSelectedLayerId(layerId);
    setIsDragging(true);
    setDragStart({ x: e.clientX - layer.x * scale, y: e.clientY - layer.y * scale });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedLayerId) return;

    const layer = layers.find((l) => l.id === selectedLayerId);
    if (!layer) return;

    const newX = (e.clientX - dragStart.x) / scale;
    const newY = (e.clientY - dragStart.y) / scale;

    updateLayer(selectedLayerId, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const selectedLayer = layers.find((l) => l.id === selectedLayerId);

  return (
    <div className="editor-container">
      {/* Top Toolbar */}
      <div className="editor-toolbar">
        <button className="toolbar-btn back-btn" onClick={() => router.push("/tools/image-editing")}>
          <FaArrowLeft /> Back
        </button>
        <h2>{project?.projectName || "Editor"}</h2>
        <div className="toolbar-actions">
          <button className="toolbar-btn" onClick={handleUndo} disabled={historyIndex <= 0}>
            <FaUndo />
          </button>
          <button className="toolbar-btn" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
            <FaRedo />
          </button>
          <button className="toolbar-btn" onClick={handleSave} disabled={isSaving}>
            <FaSave /> {isSaving ? "Saving..." : "Save"}
          </button>
          <div className="dropdown">
            <button className="toolbar-btn export-btn" disabled={isExporting}>
              <FaDownload /> {isExporting ? "Exporting..." : "Export"}
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleExport("PNG")}>Export as PNG</button>
              <button onClick={() => handleExport("JPG")}>Export as JPG</button>
              <button onClick={() => handleExport("PDF")}>Export as PDF</button>
            </div>
          </div>
        </div>
      </div>

      <div className="editor-workspace">
        {/* Left Sidebar - Tools */}
        <div className="sidebar left-sidebar">
          <h3>Tools</h3>
          <div className="tool-buttons">
            <button className="tool-btn" onClick={addTextLayer}>
              <FaFont /> Text
            </button>
            <label className="tool-btn" htmlFor="image-upload">
              <FaImage /> Image
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>
            <div className="dropdown">
              <button className="tool-btn">
                <FaShapes /> Shapes
              </button>
              <div className="dropdown-content">
                <button onClick={() => addShapeLayer("rectangle")}>Rectangle</button>
                <button onClick={() => addShapeLayer("circle")}>Circle</button>
                <button onClick={() => addShapeLayer("ellipse")}>Ellipse</button>
                <button onClick={() => addShapeLayer("triangle")}>Triangle</button>
              </div>
            </div>
          </div>

          <h3>Layers</h3>
          <div className="layers-panel">
            {layers.length === 0 ? (
              <p className="empty-layers">No layers yet</p>
            ) : (
              layers
                .slice()
                .reverse()
                .map((layer) => (
                  <div
                    key={layer.id}
                    className={`layer-item ${selectedLayerId === layer.id ? "selected" : ""}`}
                    onClick={() => setSelectedLayerId(layer.id)}
                  >
                    <div className="layer-info">
                      <span>{layer.type}</span>
                      {layer.text && <small>{layer.text.substring(0, 20)}</small>}
                    </div>
                    <div className="layer-controls">
                      <button onClick={() => updateLayer(layer.id, { visible: !layer.visible })}>
                        {layer.visible ? <FaEye /> : <FaEyeSlash />}
                      </button>
                      <button onClick={() => updateLayer(layer.id, { locked: !layer.locked })}>
                        {layer.locked ? <FaLock /> : <FaUnlock />}
                      </button>
                      <button onClick={() => moveLayer(layer.id, "up")}>▲</button>
                      <button onClick={() => moveLayer(layer.id, "down")}>▼</button>
                      <button onClick={() => deleteLayer(layer.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* Canvas */}
        <div className="canvas-wrapper">
          <div className="canvas-controls">
            <button onClick={() => setScale(Math.max(0.25, scale - 0.25))}>-</button>
            <span>{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(Math.min(2, scale + 0.25))}>+</button>
          </div>
          <div
            className="canvas-container"
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="canvas"
              style={{
                width: canvasWidth,
                height: canvasHeight,
                backgroundColor: canvasBgColor,
                transform: `scale(${scale})`,
              }}
            >
              {layers
                .filter((l) => l.visible)
                .sort((a, b) => a.zIndex - b.zIndex)
                .map((layer) => (
                  <div
                    key={layer.id}
                    className={`canvas-layer ${selectedLayerId === layer.id ? "selected-layer" : ""}`}
                    style={{
                      position: "absolute",
                      left: layer.x,
                      top: layer.y,
                      width: layer.width,
                      height: layer.height,
                      opacity: layer.opacity,
                      transform: `rotate(${layer.rotation}deg)`,
                      cursor: layer.locked ? "not-allowed" : "move",
                      pointerEvents: layer.locked ? "none" : "auto",
                    }}
                    onMouseDown={(e) => handleMouseDown(e, layer.id)}
                  >
                    {layer.type === "text" && (
                      <div
                        style={{
                          fontFamily: layer.fontFamily,
                          fontSize: layer.fontSize,
                          fontWeight: layer.fontWeight,
                          fontStyle: layer.fontStyle,
                          color: layer.color,
                          textAlign: layer.textAlign as any,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: layer.textAlign === "center" ? "center" : layer.textAlign === "right" ? "flex-end" : "flex-start",
                        }}
                      >
                        {layer.text}
                      </div>
                    )}
                    {layer.type === "image" && layer.src && (
                      <img
                        src={layer.src}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    {layer.type === "shape" && (
                      <svg width="100%" height="100%" style={{ overflow: "visible" }}>
                        {layer.shape === "rectangle" && (
                          <rect
                            width="100%"
                            height="100%"
                            fill={layer.fill}
                            stroke={layer.stroke}
                            strokeWidth={layer.strokeWidth}
                            rx={layer.borderRadius}
                          />
                        )}
                        {layer.shape === "circle" && (
                          <circle
                            cx="50%"
                            cy="50%"
                            r={Math.min(layer.width, layer.height) / 2}
                            fill={layer.fill}
                            stroke={layer.stroke}
                            strokeWidth={layer.strokeWidth}
                          />
                        )}
                        {layer.shape === "ellipse" && (
                          <ellipse
                            cx="50%"
                            cy="50%"
                            rx={layer.width / 2}
                            ry={layer.height / 2}
                            fill={layer.fill}
                            stroke={layer.stroke}
                            strokeWidth={layer.strokeWidth}
                          />
                        )}
                        {layer.shape === "triangle" && (
                          <polygon
                            points={`${layer.width / 2},0 ${layer.width},${layer.height} 0,${layer.height}`}
                            fill={layer.fill}
                            stroke={layer.stroke}
                            strokeWidth={layer.strokeWidth}
                          />
                        )}
                      </svg>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="sidebar right-sidebar">
          <h3>Properties</h3>
          {!selectedLayer ? (
            <p className="no-selection">Select a layer to edit properties</p>
          ) : (
            <div className="properties-panel">
              {/* Common Properties */}
              <div className="property-group">
                <label>Position</label>
                <div className="property-row">
                  <input
                    type="number"
                    value={Math.round(selectedLayer.x)}
                    onChange={(e) => updateLayer(selectedLayer.id, { x: parseFloat(e.target.value) })}
                    placeholder="X"
                  />
                  <input
                    type="number"
                    value={Math.round(selectedLayer.y)}
                    onChange={(e) => updateLayer(selectedLayer.id, { y: parseFloat(e.target.value) })}
                    placeholder="Y"
                  />
                </div>
              </div>

              <div className="property-group">
                <label>Size</label>
                <div className="property-row">
                  <input
                    type="number"
                    value={Math.round(selectedLayer.width)}
                    onChange={(e) => updateLayer(selectedLayer.id, { width: parseFloat(e.target.value) })}
                    placeholder="Width"
                  />
                  <input
                    type="number"
                    value={Math.round(selectedLayer.height)}
                    onChange={(e) => updateLayer(selectedLayer.id, { height: parseFloat(e.target.value) })}
                    placeholder="Height"
                  />
                </div>
              </div>

              <div className="property-group">
                <label>Rotation: {selectedLayer.rotation}°</label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={selectedLayer.rotation}
                  onChange={(e) => updateLayer(selectedLayer.id, { rotation: parseFloat(e.target.value) })}
                />
              </div>

              <div className="property-group">
                <label>Opacity: {Math.round(selectedLayer.opacity * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={selectedLayer.opacity}
                  onChange={(e) => updateLayer(selectedLayer.id, { opacity: parseFloat(e.target.value) })}
                />
              </div>

              {/* Text Properties */}
              {selectedLayer.type === "text" && (
                <>
                  <div className="property-group">
                    <label>Text</label>
                    <textarea
                      value={selectedLayer.text}
                      onChange={(e) => updateLayer(selectedLayer.id, { text: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="property-group">
                    <label>Font Family</label>
                    <select
                      value={selectedLayer.fontFamily}
                      onChange={(e) => updateLayer(selectedLayer.id, { fontFamily: e.target.value })}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Courier New">Courier New</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Verdana">Verdana</option>
                    </select>
                  </div>

                  <div className="property-group">
                    <label>Font Size: {selectedLayer.fontSize}px</label>
                    <input
                      type="range"
                      min="12"
                      max="200"
                      value={selectedLayer.fontSize}
                      onChange={(e) => updateLayer(selectedLayer.id, { fontSize: parseFloat(e.target.value) })}
                    />
                  </div>

                  <div className="property-group">
                    <label>Font Weight</label>
                    <select
                      value={selectedLayer.fontWeight}
                      onChange={(e) => updateLayer(selectedLayer.id, { fontWeight: e.target.value })}
                    >
                      <option value="normal">Normal</option>
                      <option value="bold">Bold</option>
                    </select>
                  </div>

                  <div className="property-group">
                    <label>Text Align</label>
                    <select
                      value={selectedLayer.textAlign}
                      onChange={(e) => updateLayer(selectedLayer.id, { textAlign: e.target.value })}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>

                  <div className="property-group">
                    <label>Color</label>
                    <input
                      type="color"
                      value={selectedLayer.color}
                      onChange={(e) => updateLayer(selectedLayer.id, { color: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* Shape Properties */}
              {selectedLayer.type === "shape" && (
                <>
                  <div className="property-group">
                    <label>Fill Color</label>
                    <input
                      type="color"
                      value={selectedLayer.fill}
                      onChange={(e) => updateLayer(selectedLayer.id, { fill: e.target.value })}
                    />
                  </div>

                  <div className="property-group">
                    <label>Stroke Color</label>
                    <input
                      type="color"
                      value={selectedLayer.stroke}
                      onChange={(e) => updateLayer(selectedLayer.id, { stroke: e.target.value })}
                    />
                  </div>

                  <div className="property-group">
                    <label>Stroke Width: {selectedLayer.strokeWidth}px</label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={selectedLayer.strokeWidth}
                      onChange={(e) => updateLayer(selectedLayer.id, { strokeWidth: parseFloat(e.target.value) })}
                    />
                  </div>

                  {selectedLayer.shape === "rectangle" && (
                    <div className="property-group">
                      <label>Border Radius: {selectedLayer.borderRadius}px</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={selectedLayer.borderRadius}
                        onChange={(e) => updateLayer(selectedLayer.id, { borderRadius: parseFloat(e.target.value) })}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Toast Messages */}
      {error && <div className="toast error-toast">{error}</div>}
      {success && <div className="toast success-toast">{success}</div>}
    </div>
  );
};

export default EditorCanvas;