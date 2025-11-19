"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../../../../../../../styles/tools/EditorCanvas.css";
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

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

const roundTo2 = (num: number): number => {
  return Math.round(num * 100) / 100;
};

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
  scale?: number;

  // Shape properties
  shape?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  borderRadius?: number;

  cropTop?: number;
  cropRight?: number;
  cropBottom?: number;
  cropLeft?: number; 
  
  textDecoration?: "underline" | "line-through" | "none";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  outlineWidth?: number;        // text stroke width
  outlineColor?: string;        // hex
  backgroundOpacity?: number;   // 0-1
  backgroundColor?: string;     // hex, behind the text
  verticalAlign?: "top" | "middle" | "bottom";
  wordWrap?: boolean;
  curveRadius?: number;

  // Effects
  filters?: Array<{ type: string; value: number }>;
  shadow?: {
    offsetX: number;
    offsetY: number;
    blur: number;
    color: string;
  };

  backgroundBorder?: string;
  backgroundBorderRadius?: number;
  textSegments?: Array<{
    text: string;
    color: string;
    startIndex: number;
    endIndex: number;
  }>; 
  backgroundBorderWidth?: number; 
  backgroundWidth?: number;
  backgroundHeight?: number;
  linethroughColor?: string;
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

const googleFonts = [
  // System fonts (already in OS)
  'Arial', 'Times New Roman', 'Courier New', 'Calibri', 'Verdana',
  'Georgia', 'Comic Sans MS', 'Impact', 'Tahoma',

  // Your uploaded fonts (from /public/fonts)
  'Alumni Sans Pinstripe',
  'Lexend Giga', 'Lexend Giga Black', 'Lexend Giga Bold',
  'Montserrat Alternates', 'Montserrat Alternates Black', 'Montserrat Alternates Medium Italic',
  'Noto Sans Mono', 'Noto Sans Mono Bold',
  'Poiret One',
  'Arimo', 'Arimo Bold', 'Arimo Bold Italic', 'Arimo Italic',
  'Carlito', 'Carlito Bold', 'Carlito Bold Italic', 'Carlito Italic',
  'Comic Neue', 'Comic Neue Bold', 'Comic Neue Bold Italic', 'Comic Neue Italic',
  'Courier Prime', 'Courier Prime Bold', 'Courier Prime Bold Italic', 'Courier Prime Italic',
  'Gelasio', 'Gelasio Bold', 'Gelasio Bold Italic', 'Gelasio Italic',
  'Tinos', 'Tinos Bold', 'Tinos Bold Italic', 'Tinos Italic',
  'Amatic SC', 'Amatic SC Bold',
  'Barriecito', 'Barrio', 'Birthstone', 'Bungee Hairline', 'Butcherman',
  'Doto Black', 'Doto ExtraBold', 'Doto Rounded Bold',
  'Fascinate Inline', 'Freckle Face', 'Fredericka the Great',
  'Imperial Script', 'Kings', 'Kirang Haerang', 'Lavishly Yours',
  'Mountains of Christmas', 'Mountains of Christmas Bold',
  'Rampart One', 'Rubik Wet Paint',
  'Tangerine', 'Tangerine Bold', 'Yesteryear',
];

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
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [showLayersPopup, setShowLayersPopup] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);  
  const [activeTab, setActiveTab] = useState<'text' | 'images' | 'shapes' | 'properties' | 'canvas' | 'elements' |null>(null);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);
  const [resizeStartState, setResizeStartState] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const [isRotatingLayer, setIsRotatingLayer] = useState(false);
  const [rotationStartState, setRotationStartState] = useState<{
    angle: number;
    centerX: number;
    centerY: number;
    startAngle: number;
  } | null>(null);
  const [cropHandle, setCropHandle] = useState<string | null>(null);
  const [cropStartState, setCropStartState] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    mouseX: number;
    mouseY: number;
  } | null>(null);  
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportProgress, setExportProgress] = useState<'idle' | 'processing' | 'ready' | 'error'>('idle');
  const [exportedUrl, setExportedUrl] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<string>('PNG');
  const [elements, setElements] = useState<any[]>([]);
  const [textSelection, setTextSelection] = useState<{
    layerId: string;
    start: number;
    end: number;
  } | null>(null);
  const [segmentColor, setSegmentColor] = useState("#FF0000");  
  const [isEditingText, setIsEditingText] = useState(false);
  const [editingLayerId, setEditingLayerId] = useState<string | null>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);  
  const [isSelectingText, setIsSelectingText] = useState(false);
  const [isResizingBackground, setIsResizingBackground] = useState(false);
  const [backgroundResizeHandle, setBackgroundResizeHandle] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
  
    axios
      .get(`${API_BASE_URL}/api/image-editor/elements`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setElements(res.data);
      })
      .catch((err) => {
        console.error("Error fetching elements:", err);
      });
  }, []); 

  const saveToHistory = (newLayers: Layer[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.stringify(newLayers));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };  
  
  const addElementToCanvas = (element: any) => {
    const img = new Image();
    img.onload = () => {
      const newLayer = createImageLayer(element.cdnUrl, img.naturalWidth, img.naturalHeight);
      const updatedLayers = [...layers, newLayer];
      setLayers(updatedLayers);
      setSelectedLayerId(newLayer.id);
      saveToHistory(updatedLayers);
    };
    img.src = element.cdnUrl;
  };  

  const rotatePoint = (x: number, y: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return {
      x: x * cos - y * sin,
      y: x * sin + y * cos
    };
  };  

  useEffect(() => {
    // Only load WebFont in the browser
    if (typeof window !== 'undefined') {
      import('webfontloader').then((WebFont) => {
        WebFont.load({
          google: {
            families: googleFonts,
          },
        });
      });
    }
  }, []);  

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
  }, [projectId, router, saveToHistory]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
  
    axios
      .get(`${API_BASE_URL}/api/image-editor/assets?type=IMAGE`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const imageUrls = res.data.map((asset: any) => asset.cdnUrl);
        setUploadedImages(imageUrls);
      })
      .catch((err) => {
        console.error("Error fetching assets:", err);
      });
  }, []); 
  
  const calculateAspectRatio = (width: number, height: number): string => {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };  

const handleWheel = (e: React.WheelEvent) => {
  // DO NOT call e.preventDefault() here — React doesn't allow it in passive handlers
  e.stopPropagation();

  if (e.ctrlKey || e.metaKey) {
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.1, scale + delta), 3);

    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const pointX = (mouseX - panOffset.x) / scale;
      const pointY = (mouseY - panOffset.y) / scale;

      const newPanX = mouseX - pointX * newScale;
      const newPanY = mouseY - pointY * newScale;

      setPanOffset({ x: newPanX, y: newPanY });
    }

    setScale(newScale);
  } else {
    setPanOffset({
      x: panOffset.x - e.deltaX,
      y: panOffset.y - e.deltaY
    });
  }
};

  const handleResizeMouseDown = (e: React.MouseEvent, layerId: string, handle: string) => {
    e.stopPropagation();
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.locked) return;
  
    setResizeHandle(handle);
    setResizeStartState({
      x: layer.x,
      y: layer.y,
      width: layer.width,
      height: layer.height,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };  

  const handleRotationMouseDown = (e: React.MouseEvent, layerId: string) => {
    e.stopPropagation();
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.locked) return;
  
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
  
    // Calculate the actual center position on screen (accounting for scale and pan)
    const centerX = rect.left + panOffset.x + (layer.x + layer.width / 2) * scale;
    const centerY = rect.top + panOffset.y + (layer.y + layer.height / 2) * scale;
    
    const startAngle = Math.atan2(
      e.clientY - centerY,
      e.clientX - centerX
    ) * (180 / Math.PI);
  
    setIsRotatingLayer(true);
    setRotationStartState({
      angle: layer.rotation,
      centerX: layer.x + layer.width / 2,
      centerY: layer.y + layer.height / 2,
      startAngle,
    });
  }; 

  const handleCropMouseDown = (e: React.MouseEvent, layerId: string, handle: string) => {
    e.stopPropagation();
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.locked) return;
  
    setCropHandle(handle);
    setCropStartState({
      x: layer.x,
      y: layer.y,
      width: layer.width,
      height: layer.height,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      
      if (e.code === 'Space' && !isSpacePressed) {
        e.preventDefault();
        setIsSpacePressed(true);
      }
    };
  
    const handleKeyUp = (e: KeyboardEvent) => {
      // Don't intercept space if user is typing in an input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      
      if (e.code === 'Space') {
        e.preventDefault();
        setIsSpacePressed(false);
        setIsPanning(false);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpacePressed]);

  useEffect(() => {
    const preventZoom = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };
  
    const preventHorizontalNav = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };
  
    const preventPinch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
  
    // Add all with passive: false where preventDefault is called
    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('wheel', preventHorizontalNav, { passive: false });
    document.addEventListener('touchmove', preventPinch, { passive: false });
  
    // Optional: prevent overscroll
    document.body.style.overscrollBehaviorX = 'none';
  
    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('wheel', preventHorizontalNav);
      document.removeEventListener('touchmove', preventPinch);
      document.body.style.overscrollBehaviorX = '';
    };
  }, []);

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

  const addTextLayer = () => {
    const newLayer: Layer = {
      id: `text-${Date.now()}`,
      type: "text",
      zIndex: layers.length,
      opacity: 1,
      x: canvasWidth / 2 - 100,
      y: canvasHeight / 2 - 25,
      width: 0, // Will be auto-calculated
      height: 0, // Will be auto-calculated
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
      textDecoration: "none",
      textTransform: "none",
      outlineWidth: 0,
      outlineColor: "#000000",
      backgroundOpacity: 0,
      backgroundColor: "#FFFFFF",
      verticalAlign: "middle",
      wordWrap: true,
      curveRadius: 0,      
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

  const createImageLayer = (src: string, naturalWidth: number, naturalHeight: number): Layer => {
    const defaultScale = 1.0;
    const displayWidth = roundTo2(naturalWidth * defaultScale);
    const displayHeight = roundTo2(naturalHeight * defaultScale);
  
    return {
      id: `image-${Date.now()}`,
      type: "image",
      zIndex: layers.length,
      opacity: 1,
      x: roundTo2(canvasWidth / 2 - displayWidth / 2),
      y: roundTo2(canvasHeight / 2 - displayHeight / 2),
      width: displayWidth,
      height: displayHeight,
      scale: defaultScale,
      rotation: 0,
      visible: true,
      locked: false,
      src,
      cropTop: 0,
      cropRight: 0,
      cropBottom: 0,
      cropLeft: 0,
    };
  };

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
  
      const img = new Image();
      img.onload = () => {
        const newLayer = createImageLayer(response.data.cdnUrl, img.naturalWidth, img.naturalHeight);
        const updatedLayers = [...layers, newLayer];
        setLayers(updatedLayers);
        setSelectedLayerId(newLayer.id);
        saveToHistory(updatedLayers);
        setUploadedImages([...uploadedImages, response.data.cdnUrl]);
      };
      img.src = response.data.cdnUrl;
  
    } catch (err) {
      setError("Failed to upload image");
    }
  };

  const addImageFromGallery = (src: string) => {
    const img = new Image();
    img.onload = () => {
      const newLayer = createImageLayer(src, img.naturalWidth, img.naturalHeight);
      const updatedLayers = [...layers, newLayer];
      setLayers(updatedLayers);
      setSelectedLayerId(newLayer.id);
      saveToHistory(updatedLayers);
    };
    img.src = src;
  }; 

  const updateLayer = (layerId: string, updates: Partial<Layer>) => {
    const updatedLayers = layers.map((layer) =>
      layer.id === layerId
        ? {
            ...layer,
            ...updates,
            // Round all numeric fields to 2 decimals
            x: updates.x !== undefined ? roundTo2(updates.x) : layer.x,
            y: updates.y !== undefined ? roundTo2(updates.y) : layer.y,
            width: updates.width !== undefined ? roundTo2(updates.width) : layer.width,
            height: updates.height !== undefined ? roundTo2(updates.height) : layer.height,
            rotation: updates.rotation !== undefined ? roundTo2(updates.rotation) : layer.rotation,
            opacity: updates.opacity !== undefined ? roundTo2(updates.opacity) : layer.opacity,
            cropTop: updates.cropTop !== undefined ? roundTo2(updates.cropTop) : layer.cropTop ?? 0,
            cropRight: updates.cropRight !== undefined ? roundTo2(updates.cropRight) : layer.cropRight ?? 0,
            cropBottom: updates.cropBottom !== undefined ? roundTo2(updates.cropBottom) : layer.cropBottom ?? 0,
            cropLeft: updates.cropLeft !== undefined ? roundTo2(updates.cropLeft) : layer.cropLeft ?? 0,
            // Integers stay as-is
            fontSize: updates.fontSize ?? layer.fontSize,
            strokeWidth: updates.strokeWidth ?? layer.strokeWidth,
            borderRadius: updates.borderRadius ?? layer.borderRadius,
            scale: updates.scale !== undefined ? roundTo2(updates.scale) : layer.scale,
            outlineWidth: updates.outlineWidth !== undefined ? roundTo2(updates.outlineWidth) : layer.outlineWidth,
            outlineColor: updates.outlineColor ?? layer.outlineColor,
            backgroundOpacity: updates.backgroundOpacity !== undefined ? roundTo2(updates.backgroundOpacity) : layer.backgroundOpacity,
            backgroundColor: updates.backgroundColor ?? layer.backgroundColor,
            textDecoration: (updates.textDecoration ?? layer.textDecoration) as "underline" | "line-through" | "none" | undefined,
            textTransform: (updates.textTransform ?? layer.textTransform) as "uppercase" | "lowercase" | "capitalize" | "none" | undefined,
            verticalAlign: (updates.verticalAlign ?? layer.verticalAlign) as "top" | "middle" | "bottom" | undefined,
            wordWrap: updates.wordWrap ?? layer.wordWrap,
            curveRadius: updates.curveRadius !== undefined ? roundTo2(updates.curveRadius) : layer.curveRadius,  
            textAlign: (updates.textAlign ?? layer.textAlign) as "left" | "center" | "right" | undefined,          
          }
        : layer
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

  const autoSave = async (force = false) => {
    if (!force && isSaving) return; // Prevent overlap
  
    setIsSaving(true);
    setError(null);
    try {
      const designJson = JSON.stringify({
        version: "1.0",
        canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: canvasBgColor },
        layers: layers.map(l => ({
          ...l,
          // ensure all new fields are sent
          textDecoration: l.textDecoration,
          textTransform: l.textTransform,
          outlineWidth: l.outlineWidth,
          outlineColor: l.outlineColor,
          backgroundOpacity: l.backgroundOpacity,
          backgroundColor: l.backgroundColor,
          verticalAlign: l.verticalAlign,
          wordWrap: l.wordWrap,
          curveRadius: l.curveRadius,
        })),
      });

      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
        { designJson },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      if (force) {
        setSuccess("Saved!");
        setTimeout(() => setSuccess(null), 2000);
      } else {
        setSuccess("Saved"); // Brief flash
        setTimeout(() => setSuccess(null), 800);
      }
    } catch (err: any) {
      if (force) setError("Save failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSave = () => autoSave(true);

  const downloadFromUrl = async (url: string, filename: string) => {
    try {
      // 1. Fetch the exported file as a Blob
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error('Network response was not ok');
  
      const blob = await response.blob();
  
      // 2. Create a temporary object URL
      const blobUrl = window.URL.createObjectURL(blob);
  
      // 3. Create an <a> element, set download attribute and click it
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;               // <-- forces download
      document.body.appendChild(link);
      link.click();
  
      // 4. Clean-up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download failed:', err);
      // Fallback – open in a new tab if the programmatic download fails
      window.open(url, '_blank');
    }
  };

  const handleExport = async (format: string) => {
    setExportFormat(format);
    setShowExportModal(true);
    setExportProgress('processing');
    setExportedUrl(null);
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
        layers: layers.map(l => ({
          ...l,
          textDecoration: l.textDecoration,
          textTransform: l.textTransform,
          outlineWidth: l.outlineWidth,
          outlineColor: l.outlineColor,
          backgroundOpacity: l.backgroundOpacity,
          backgroundColor: l.backgroundColor,
          verticalAlign: l.verticalAlign,
          wordWrap: l.wordWrap,
          curveRadius: l.curveRadius,
        })),
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
  
      setExportedUrl(response.data.exportUrl);
      setExportProgress('ready');
    } catch (err: any) {
      setExportProgress('error');
      setError(err.response?.data?.message || "Failed to export");
    }
  };
  
  const handleDownloadExport = async () => {
    if (!exportedUrl) return;
  
    try {
      const filename = `${project?.projectName || 'canvas'}.${exportFormat.toLowerCase()}`;
      await downloadFromUrl(exportedUrl, filename);   // <-- use the new helper
  
      setShowExportModal(false);
      setSuccess(`Downloaded ${exportFormat} successfully!`);
      setTimeout(() => setSuccess(null), 2000);
    } catch (err) {
      setError('Failed to download file');
    }
  };
  
  const closeExportModal = () => {
    setShowExportModal(false);
    setExportProgress('idle');
    setExportedUrl(null);
  };

  const handleMouseDown = (e: React.MouseEvent, layerId?: string) => {
    if (isSpacePressed && !layerId) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
      return;
    }
  
    if (editingLayerId && layerId === editingLayerId) {
      return;
    }
  
    if (layerId) {
      const layer = layers.find((l) => l.id === layerId);
      if (!layer || layer.locked) return;
  
      setSelectedLayerId(layerId);
      setIsDragging(true);
      setDragStart({ x: e.clientX - layer.x * scale, y: e.clientY - layer.y * scale });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Handle canvas panning
    if (isPanning && isSpacePressed) {
      const newX = e.clientX - panStart.x;
      const newY = e.clientY - panStart.y;
      setPanOffset({ x: newX, y: newY });
      return;
    }
  
    if (isRotatingLayer && selectedLayerId && rotationStartState) {
      const layer = layers.find((l) => l.id === selectedLayerId);
      if (!layer) return;
    
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
    
      // Calculate the actual center position on screen (accounting for scale and pan)
      const centerX = rect.left + panOffset.x + (rotationStartState.centerX * scale);
      const centerY = rect.top + panOffset.y + (rotationStartState.centerY * scale);
    
      const currentAngle = Math.atan2(
        e.clientY - centerY,
        e.clientX - centerX
      ) * (180 / Math.PI);
    
      const deltaAngle = currentAngle - rotationStartState.startAngle;
      const newRotation = rotationStartState.angle + deltaAngle;
    
      updateLayer(selectedLayerId, { rotation: newRotation });
      return;
    }
  
    if (cropHandle && selectedLayerId && cropStartState) {
      const layer = layers.find((l) => l.id === selectedLayerId);
      if (!layer) return;
    
      const deltaX = (e.clientX - cropStartState.mouseX) / scale;
      const deltaY = (e.clientY - cropStartState.mouseY) / scale;
    
      // Get natural dimensions (uncropped original size)
      let naturalWidth = layer.width;
      let naturalHeight = layer.height;

      if (layer.type === 'image' && layer.scale) {
        // For images, calculate based on scale and existing crop
        const currentCropHoriz = (layer.cropLeft ?? 0) + (layer.cropRight ?? 0);
        const currentCropVert = (layer.cropTop ?? 0) + (layer.cropBottom ?? 0);
        naturalWidth = layer.width / ((100 - currentCropHoriz) / 100);
        naturalHeight = layer.height / ((100 - currentCropVert) / 100);
      }
    
      // Convert delta to percentage
      const deltaPercentX = (deltaX / naturalWidth) * 100;
      const deltaPercentY = (deltaY / naturalHeight) * 100;
    
      let newCropTop = layer.cropTop ?? 0;
      let newCropRight = layer.cropRight ?? 0;
      let newCropBottom = layer.cropBottom ?? 0;
      let newCropLeft = layer.cropLeft ?? 0;
      let newX = layer.x;
      let newY = layer.y;
    
      switch (cropHandle) {
        case 'n':
          newCropTop = Math.max(0, Math.min(95, (layer.cropTop ?? 0) + deltaPercentY));
          newY = layer.y + deltaY;
          break;
        case 's':
          newCropBottom = Math.max(0, Math.min(95, (layer.cropBottom ?? 0) - deltaPercentY));
          break;
        case 'e':
          newCropRight = Math.max(0, Math.min(95, (layer.cropRight ?? 0) - deltaPercentX));
          break;
        case 'w':
          newCropLeft = Math.max(0, Math.min(95, (layer.cropLeft ?? 0) + deltaPercentX));
          newX = layer.x + deltaX;
          break;
      }
    
      const totalVertical = newCropTop + newCropBottom;
      const totalHorizontal = newCropLeft + newCropRight;

      if (totalVertical < 95 && totalHorizontal < 95) {
        // Calculate new dimensions
        const newVisibleWidth = naturalWidth * (100 - newCropLeft - newCropRight) / 100;
        const newVisibleHeight = naturalHeight * (100 - newCropTop - newCropBottom) / 100;
      
        updateLayer(selectedLayerId, {
          cropTop: newCropTop,
          cropRight: newCropRight,
          cropBottom: newCropBottom,
          cropLeft: newCropLeft,
          width: newVisibleWidth,
          height: newVisibleHeight,
          x: newX,
          y: newY,
        });

        setCropStartState({
          x: newX,
          y: newY,
          width: newVisibleWidth,
          height: newVisibleHeight,
          mouseX: e.clientX,
          mouseY: e.clientY,
        });
      }
      return;
    }
  
    if (resizeHandle && selectedLayerId && resizeStartState) {
      const layer = layers.find((l) => l.id === selectedLayerId);
      if (!layer) return;
    
      const deltaX = (e.clientX - resizeStartState.mouseX) / scale;
      const deltaY = (e.clientY - resizeStartState.mouseY) / scale;
    
      const rotated = rotatePoint(deltaX, deltaY, -layer.rotation);
      const rotatedDeltaX = rotated.x;
      const rotatedDeltaY = rotated.y;
    
      let newX = resizeStartState.x;
      let newY = resizeStartState.y;
      let newWidth = resizeStartState.width;
      let newHeight = resizeStartState.height;
    
      const aspectRatio = resizeStartState.width / resizeStartState.height;
    
      switch (resizeHandle) {
        case 'nw':
          const nwDelta = Math.max(rotatedDeltaX, rotatedDeltaY / aspectRatio);
          newX = resizeStartState.x + nwDelta;
          newY = resizeStartState.y + nwDelta / aspectRatio;
          newWidth = resizeStartState.width - nwDelta;
          newHeight = resizeStartState.height - nwDelta / aspectRatio;
          break;
        case 'ne':
          const neDelta = Math.max(rotatedDeltaX, -rotatedDeltaY / aspectRatio);
          newY = resizeStartState.y - neDelta / aspectRatio;
          newWidth = resizeStartState.width + neDelta;
          newHeight = resizeStartState.height + neDelta / aspectRatio;
          break;
        case 'sw':
          const swDelta = Math.max(-rotatedDeltaX, rotatedDeltaY / aspectRatio);
          newX = resizeStartState.x - swDelta;
          newWidth = resizeStartState.width + swDelta;
          newHeight = resizeStartState.height + swDelta / aspectRatio;
          break;
        case 'se':
          const seDelta = Math.max(rotatedDeltaX, rotatedDeltaY / aspectRatio);
          newWidth = resizeStartState.width + seDelta;
          newHeight = resizeStartState.height + seDelta / aspectRatio;
          break;
      }
    
      if (newWidth > 20 && newHeight > 20) {
        if (layer.type === 'image' && layer.scale !== undefined) {
          // Get the ORIGINAL natural dimensions (from when layer was created)
          const startScale = layer.scale;
          let naturalWidth = layer.width / startScale;
          let naturalHeight = layer.height / startScale;

          // Calculate new scale based on new width
          const newScale = newWidth / naturalWidth;

          updateLayer(selectedLayerId, {
            x: newX,
            y: newY,
            scale: newScale,
            width: roundTo2(naturalWidth * newScale),
            height: roundTo2(naturalHeight * newScale),
          });
        } else {
          // For shapes and text
          updateLayer(selectedLayerId, {
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
          });
        }
      }
      return;
    }

    if (isResizingBackground && selectedLayerId && resizeStartState && backgroundResizeHandle) {
      const layer = layers.find((l) => l.id === selectedLayerId);
      if (!layer) return;
    
      const deltaX = (e.clientX - resizeStartState.mouseX) / scale;
      const deltaY = (e.clientY - resizeStartState.mouseY) / scale;
    
      // Calculate minimum dimensions based on text
      const fontSize = layer.fontSize || 32;
      const text = layer.text || "";
      const minWidth = Math.max(text.length * fontSize * 0.6, 50);
      const minHeight = Math.max(fontSize * 1.5, 30);
    
      let newBackgroundWidth = resizeStartState.width;
      let newBackgroundHeight = resizeStartState.height;
    
      switch (backgroundResizeHandle) {
        case 'bg-n':
          newBackgroundHeight = Math.max(minHeight, resizeStartState.height - deltaY);
          break;
        case 'bg-s':
          newBackgroundHeight = Math.max(minHeight, resizeStartState.height + deltaY);
          break;
        case 'bg-e':
          newBackgroundWidth = Math.max(minWidth, resizeStartState.width + deltaX);
          break;
        case 'bg-w':
          newBackgroundWidth = Math.max(minWidth, resizeStartState.width - deltaX);
          break;
      }
    
      updateLayer(selectedLayerId, {
        backgroundWidth: newBackgroundWidth,
        backgroundHeight: newBackgroundHeight,
      });
      return;
    } 
  
    if (!isDragging || !selectedLayerId) return;
  
    const layer = layers.find((l) => l.id === selectedLayerId);
    if (!layer) return;
  
    const newX = (e.clientX - dragStart.x) / scale;
    const newY = (e.clientY - dragStart.y) / scale;
  
    updateLayer(selectedLayerId, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPanning(false);
    setResizeHandle(null);
    setResizeStartState(null);
    setIsRotatingLayer(false);
    setRotationStartState(null);
    setCropHandle(null);
    setCropStartState(null);
    setBackgroundResizeHandle(null);
  };

  const selectedLayer = layers.find((l) => l.id === selectedLayerId);

  const debouncedLayers = useDebounce(layers, 1000);
  
  useEffect(() => {
    if (project && layers.length > 0) {
      autoSave();
    }
  }, [debouncedLayers, canvasWidth, canvasHeight, canvasBgColor, project, autoSave, layers.length]); // Add these

  const applySegmentColor = (layerId: string) => {
    if (!textSelection || textSelection.layerId !== layerId) return;

    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.text) return;

    const { start, end } = textSelection;
    const selectedText = layer.text.substring(start, end);

    const newSegment = {
      text: selectedText,
      color: segmentColor,
      startIndex: start,
      endIndex: end
    };

    const existingSegments = layer.textSegments || [];

    // Remove overlapping segments
    const filteredSegments = existingSegments.filter(seg => 
      seg.endIndex <= start || seg.startIndex >= end
    );

    updateLayer(layerId, { 
      textSegments: [...filteredSegments, newSegment].sort((a, b) => a.startIndex - b.startIndex)
    });

    setTextSelection(null);
  };

  const removeSegmentColor = (layerId: string, segmentIndex: number) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.textSegments) return;

    const updatedSegments = layer.textSegments.filter((_, idx) => idx !== segmentIndex);
    updateLayer(layerId, { textSegments: updatedSegments });
  };  

  const handleBackgroundResizeMouseDown = (e: React.MouseEvent, layerId: string, handle: string) => {
    e.stopPropagation();
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.locked) return;

    setIsResizingBackground(true);
    setBackgroundResizeHandle(handle);

    // Calculate minimum dimensions based on text
    const fontSize = layer.fontSize || 32;
    const text = layer.text || "";
    const minWidth = Math.max(text.length * fontSize * 0.6, 50);
    const minHeight = Math.max(fontSize * 1.5, 30);

    setResizeStartState({
      x: layer.x,
      y: layer.y,
      width: layer.backgroundWidth || minWidth,
      height: layer.backgroundHeight || minHeight,
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };  

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
              {isExporting ? "Exporting..." : "Export"}
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
    {/* Left Sidebar - Icon Panel + Content Panel */}
    <div className="left-sidebar-container">
      {/* Thin Icon Panel */}
      <div className="icon-panel">
        <button 
          className={`icon-panel-btn ${activeTab === 'text' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'text' ? null : 'text')}
          title="Text"
        >
          <FaFont size={20} />
        </button>
        <button 
          className={`icon-panel-btn ${activeTab === 'images' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'images' ? null : 'images')}
          title="Images"
        >
          <FaImage size={20} />
        </button>
        <button 
          className={`icon-panel-btn ${activeTab === 'elements' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'elements' ? null : 'elements')}
          title="Elements"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>        
        <button 
          className={`icon-panel-btn ${activeTab === 'shapes' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'shapes' ? null : 'shapes')}
          title="Shapes"
        >
          <FaShapes size={20} />
        </button>
        <button 
          className={`icon-panel-btn ${activeTab === 'properties' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'properties' ? null : 'properties')}
          title="Properties"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
          </svg>
        </button>
        <button 
          className={`icon-panel-btn ${activeTab === 'canvas' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'canvas' ? null : 'canvas')}
          title="Canvas Settings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          </svg>
        </button>        
      </div>
    
      {activeTab && (
        <div className="content-panel">
          <div className="content-panel-inner">
            {activeTab === 'text' && (
              <div className="panel-section">
                <h3>Text</h3>
                <button className="element-btn" onClick={addTextLayer}>
                  <FaFont size={20} />
                  <span>Add Text</span>
                </button>
              </div>
            )}
    
            {activeTab === 'images' && (
              <div className="panel-section">
                <h3>Images</h3>
                <div className="images-grid">
                  <label className="upload-box" htmlFor="image-upload">
                    <FaPlus size={18} />
                    <span>Upload</span>
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
                  {uploadedImages.map((src, index) => (
                    <div
                      key={index}
                      className="image-thumbnail"
                      onClick={() => addImageFromGallery(src)}
                    >
                      <img src={src} alt={`Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
    
            {activeTab === 'shapes' && (
              <div className="panel-section">
                <h3>Shapes</h3>
                <div className="shapes-grid">
                  <button className="shape-btn" onClick={() => addShapeLayer("rectangle")} title="Rectangle">
                    <svg viewBox="0 0 100 100" width="40" height="40">
                      <rect x="10" y="20" width="80" height="60" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" rx="5" />
                    </svg>
                  </button>
                  <button className="shape-btn" onClick={() => addShapeLayer("circle")} title="Circle">
                    <svg viewBox="0 0 100 100" width="40" height="40">
                      <circle cx="50" cy="50" r="40" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
                    </svg>
                  </button>
                  <button className="shape-btn" onClick={() => addShapeLayer("ellipse")} title="Ellipse">
                    <svg viewBox="0 0 100 100" width="40" height="40">
                      <ellipse cx="50" cy="50" rx="45" ry="30" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
                    </svg>
                  </button>
                  <button className="shape-btn" onClick={() => addShapeLayer("triangle")} title="Triangle">
                    <svg viewBox="0 0 100 100" width="40" height="40">
                      <polygon points="50,10 90,90 10,90" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
    
            {activeTab === 'properties' && (
              <div className="panel-section">
                <h3>Properties</h3>
                {!selectedLayer ? (
                  <p className="no-selection">Select a layer to edit</p>
                ) : (
                  <div className="properties-panel">
                    {/* Common Properties */}
                    <div className="property-group">
                      <label>Opacity</label>
                      <div className="opacity-control">
                        <div className="opacity-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" opacity="0.6"/>
                          </svg>
                        </div>
                        <div className="opacity-slider-container">
                          <div className="opacity-value">{(selectedLayer.opacity * 100).toFixed(0)}%</div>
                          <input
                            type="range"
                            className="opacity-slider"
                            min="0"
                            max="1"
                            step="0.01"
                            value={selectedLayer.opacity}
                            onChange={(e) => updateLayer(selectedLayer.id, { opacity: parseFloat(e.target.value) })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Crop Controls */}
                    {selectedLayer.type === "image" && (
                      <div className="property-group">
                        <label>Crop (%)</label>
                        <div className="property-row">
                          <input
                            type="number"
                            min="0"
                            max={100 - (selectedLayer.cropBottom ?? 0)}
                            step="0.1"
                            value={(selectedLayer.cropTop ?? 0).toFixed(1)}
                            onChange={(e) => {
                              const val = Math.min(100 - (selectedLayer.cropBottom ?? 0), Math.max(0, parseFloat(e.target.value) || 0));
                              
                              // Calculate natural dimensions
                              const currentCropHoriz = (selectedLayer.cropLeft ?? 0) + (selectedLayer.cropRight ?? 0);
                              const currentCropVert = (selectedLayer.cropTop ?? 0) + (selectedLayer.cropBottom ?? 0);
                              let naturalWidth = selectedLayer.width / ((100 - currentCropHoriz) / 100);
                              let naturalHeight = selectedLayer.height / ((100 - currentCropVert) / 100);
                              
                              // Calculate new height
                              const newVisibleHeight = naturalHeight * (100 - val - (selectedLayer.cropBottom ?? 0)) / 100;
                              
                              updateLayer(selectedLayer.id, { 
                                cropTop: val,
                                height: newVisibleHeight
                              });
                            }}
                            placeholder="Top"
                          />
                          <input
                            type="number"
                            min="0"
                            max={100 - (selectedLayer.cropLeft ?? 0)}
                            step="0.1"
                            value={(selectedLayer.cropRight ?? 0).toFixed(1)}
                            onChange={(e) => {
                              const val = Math.min(100 - (selectedLayer.cropLeft ?? 0), Math.max(0, parseFloat(e.target.value) || 0));
                              
                              const currentCropHoriz = (selectedLayer.cropLeft ?? 0) + (selectedLayer.cropRight ?? 0);
                              const currentCropVert = (selectedLayer.cropTop ?? 0) + (selectedLayer.cropBottom ?? 0);
                              let naturalWidth = selectedLayer.width / ((100 - currentCropHoriz) / 100);
                              
                              const newVisibleWidth = naturalWidth * (100 - val - (selectedLayer.cropLeft ?? 0)) / 100;
                              
                              updateLayer(selectedLayer.id, { 
                                cropRight: val,
                                width: newVisibleWidth
                              });
                            }}
                            placeholder="Right"
                          />
                          <input
                            type="number"
                            min="0"
                            max={100 - (selectedLayer.cropTop ?? 0)}
                            step="0.1"
                            value={(selectedLayer.cropBottom ?? 0).toFixed(1)}
                            onChange={(e) => {
                              const val = Math.min(100 - (selectedLayer.cropTop ?? 0), Math.max(0, parseFloat(e.target.value) || 0));
                              
                              const currentCropHoriz = (selectedLayer.cropLeft ?? 0) + (selectedLayer.cropRight ?? 0);
                              const currentCropVert = (selectedLayer.cropTop ?? 0) + (selectedLayer.cropBottom ?? 0);
                              let naturalHeight = selectedLayer.height / ((100 - currentCropVert) / 100);
                              
                              const newVisibleHeight = naturalHeight * (100 - val - (selectedLayer.cropTop ?? 0)) / 100;
                              
                              updateLayer(selectedLayer.id, { 
                                cropBottom: val,
                                height: newVisibleHeight
                              });
                            }}
                            placeholder="Bottom"
                          />
                          <input
                            type="number"
                            min="0"
                            max={100 - (selectedLayer.cropRight ?? 0)}
                            step="0.1"
                            value={(selectedLayer.cropLeft ?? 0).toFixed(1)}
                            onChange={(e) => {
                              const val = Math.min(100 - (selectedLayer.cropRight ?? 0), Math.max(0, parseFloat(e.target.value) || 0));
                              
                              const currentCropHoriz = (selectedLayer.cropLeft ?? 0) + (selectedLayer.cropRight ?? 0);
                              const currentCropVert = (selectedLayer.cropTop ?? 0) + (selectedLayer.cropBottom ?? 0);
                              let naturalWidth = selectedLayer.width / ((100 - currentCropHoriz) / 100);
                              
                              const newVisibleWidth = naturalWidth * (100 - val - (selectedLayer.cropRight ?? 0)) / 100;
                              
                              updateLayer(selectedLayer.id, { 
                                cropLeft: val,
                                width: newVisibleWidth
                              });
                            }}
                            placeholder="Left"
                          />
                        </div>
                      </div>
                    )}                    

                    {/* Rotation */}
                    <div className="property-group">
                      <label>Rotation: {selectedLayer.rotation.toFixed(2)} degrees</label>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="0.01"
                        value={selectedLayer.rotation}
                        onChange={(e) => updateLayer(selectedLayer.id, { rotation: parseFloat(e.target.value) })}
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
                            step="1"
                            value={selectedLayer.fontSize}
                            onChange={(e) => updateLayer(selectedLayer.id, { fontSize: parseInt(e.target.value, 10) })}
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
                            onChange={(e) => {
                              if (textSelection && textSelection.layerId === selectedLayer.id) {
                                // Apply color to selected text segment
                                const { start, end } = textSelection;
                                const selectedText = (selectedLayer.text || "").substring(start, end);
                                const newSegment = {
                                  text: selectedText,
                                  color: e.target.value,
                                  startIndex: start,
                                  endIndex: end
                                };
                                const existingSegments = selectedLayer.textSegments || [];
                                const filteredSegments = existingSegments.filter(seg => 
                                  seg.endIndex <= start || seg.startIndex >= end
                                );
                                updateLayer(selectedLayer.id, { 
                                  textSegments: [...filteredSegments, newSegment].sort((a, b) => a.startIndex - b.startIndex)
                                });
                                setTextSelection(null);
                              } else {
                                // No selection - change entire text color and remove segmentation
                                updateLayer(selectedLayer.id, { 
                                  color: e.target.value,
                                  textSegments: [] // Clear all segments
                                });
                              }
                            }}
                          />
                        </div>
                        <div className="property-group">
                          <label>Text Decoration</label>
                          <select
                            value={selectedLayer.textDecoration || "none"}
                            onChange={(e) => updateLayer(selectedLayer.id, { textDecoration: e.target.value as "underline" | "line-through" | "none" })}
                          >
                            <option value="none">None</option>
                            <option value="underline">Underline</option>
                            <option value="line-through">Line-through</option>
                          </select>
                        </div>

                        {/* Text Transform */}
                        <div className="property-group">
                          <label>Text Transform</label>
                          <select
                            value={selectedLayer.textTransform || "none"}
                            onChange={(e) => updateLayer(selectedLayer.id, { textTransform: e.target.value as "uppercase" | "lowercase" | "capitalize" | "none" })}
                          >
                            <option value="none">None</option>
                            <option value="uppercase">UPPERCASE</option>
                            <option value="lowercase">lowercase</option>
                            <option value="capitalize">Capitalize</option>
                          </select>
                        </div>

                        {/* Text Outline */}
                        <div className="property-group">
                          <label>Outline Width: {selectedLayer.outlineWidth ?? 0}px</label>
                          <input
                            type="range"
                            min="0"
                            max="20"
                            step="1"
                            value={selectedLayer.outlineWidth || 0}
                            onChange={(e) => updateLayer(selectedLayer.id, { outlineWidth: parseInt(e.target.value) })}
                          />
                          {(selectedLayer.outlineWidth ?? 0) > 0 && (
                            <input
                              type="color"
                              value={selectedLayer.outlineColor || "#000000"}
                              onChange={(e) => updateLayer(selectedLayer.id, { outlineColor: e.target.value })}
                            />
                          )}
                        </div>
                        
                        {/* Text Background */}
                        <div className="property-group">
                          <label>Background Opacity: {(selectedLayer.backgroundOpacity ?? 0).toFixed(2)}</label>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={selectedLayer.backgroundOpacity || 0}
                            onChange={(e) => {
                              const newOpacity = parseFloat(e.target.value);
                              const updates: Partial<Layer> = { backgroundOpacity: newOpacity };

                              // If enabling background for first time, set minimum dimensions
                              if (newOpacity > 0 && (!selectedLayer.backgroundWidth || !selectedLayer.backgroundHeight)) {
                                const fontSize = selectedLayer.fontSize || 32;
                                const text = selectedLayer.text || "";
                                const minWidth = Math.max(text.length * fontSize * 0.6 + 20, 100);
                                const minHeight = Math.max(fontSize * 1.5 + 10, 50);
                                updates.backgroundWidth = minWidth;
                                updates.backgroundHeight = minHeight;
                              }

                              updateLayer(selectedLayer.id, updates);
                            }}
                          />
                          {(selectedLayer.backgroundOpacity ?? 0) > 0 && (
                            <>
                              <div className="property-group">
                                <label>Background Border Color</label>
                                <input
                                  type="color"
                                  value={selectedLayer.backgroundBorder || "#000000"}
                                  onChange={(e) => updateLayer(selectedLayer.id, { backgroundBorder: e.target.value })}
                                />
                              </div>

                              <div className="property-group">
                                <label>Background Border Width: {selectedLayer.backgroundBorderWidth ?? 2}px</label>
                                <input
                                  type="range"
                                  min="0"
                                  max="20"
                                  step="1"
                                  value={selectedLayer.backgroundBorderWidth ?? 2}
                                  onChange={(e) => updateLayer(selectedLayer.id, { backgroundBorderWidth: parseInt(e.target.value) })}
                                />
                              </div>                              
                              
                              <div className="property-group">
                                <label>Background Border Radius: {selectedLayer.backgroundBorderRadius ?? 8}px</label>
                                <input
                                  type="range"
                                  min="0"
                                  max="50"
                                  step="1"
                                  value={selectedLayer.backgroundBorderRadius ?? 8}
                                  onChange={(e) => updateLayer(selectedLayer.id, { backgroundBorderRadius: parseInt(e.target.value) })}
                                />
                              </div>
                            </>
                          )}
                        </div>                      
                        
                        {/* Vertical Align */}
                        <div className="property-group">
                          <label>Vertical Align</label>
                          <select
                            value={selectedLayer.verticalAlign || "middle"}
                            onChange={(e) => updateLayer(selectedLayer.id, { verticalAlign: e.target.value as "top" | "middle" | "bottom" })}
                          >
                            <option value="top">Top</option>
                            <option value="middle">Middle</option>
                            <option value="bottom">Bottom</option>
                          </select>
                        </div>
                        
                        {/* Word Wrap */}
                        <div className="property-group">
                          <label>Word Wrap</label>
                          <select
                            value={selectedLayer.wordWrap === false ? "false" : "true"}
                            onChange={(e) => updateLayer(selectedLayer.id, { wordWrap: e.target.value === "true" })}
                          >
                            <option value="true">On</option>
                            <option value="false">Off</option>
                          </select>
                        </div>
                        
                        {/* Curve Text */}
                        <div className="property-group">
                          <label>Curve Radius: {selectedLayer.curveRadius ?? 0}</label>
                          <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            value={selectedLayer.curveRadius ?? 0}
                            onChange={(e) => updateLayer(selectedLayer.id, { curveRadius: parseInt(e.target.value) })}
                          />
                        </div>  

                        {selectedLayer.textDecoration === "line-through" && (
                          <div className="property-group">
                            <label>Line-through Color</label>
                            <input
                              type="color"
                              value={selectedLayer.linethroughColor || selectedLayer.color}
                              onChange={(e) => updateLayer(selectedLayer.id, { linethroughColor: e.target.value })}
                            />
                          </div>
                        )}                                              
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
                            step="1"
                            value={selectedLayer.strokeWidth}
                            onChange={(e) => updateLayer(selectedLayer.id, { strokeWidth: parseInt(e.target.value, 10) })}
                          />
                        </div>
        
                        {selectedLayer.shape === "rectangle" && (
                          <div className="property-group">
                            <label>Border Radius: {selectedLayer.borderRadius}px</label>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="1"
                              value={selectedLayer.borderRadius}
                              onChange={(e) => updateLayer(selectedLayer.id, { borderRadius: parseInt(e.target.value, 10) })}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'canvas' && (
              <div className="panel-section">
                <h3>Canvas Settings</h3>
                <div className="property-group">
                  <label>Canvas Size</label>
                  <div className="canvas-size-inputs">
                    <input
                      type="number"
                      value={canvasWidth}
                      onChange={(e) => setCanvasWidth(Math.max(100, parseInt(e.target.value) || 1080))}
                      placeholder="Width"
                      min="100"
                      max="10000"
                    />
                    <span className="size-separator">×</span>
                    <input
                      type="number"
                      value={canvasHeight}
                      onChange={(e) => setCanvasHeight(Math.max(100, parseInt(e.target.value) || 1080))}
                      placeholder="Height"
                      min="100"
                      max="10000"
                    />
                  </div>
                  <div className="aspect-ratio-display">
                    Ratio: {calculateAspectRatio(canvasWidth, canvasHeight)}
                  </div>
                </div>
                <div className="property-group">
                  <label>Background Color</label>
                  <input
                    type="color"
                    value={canvasBgColor}
                    onChange={(e) => setCanvasBgColor(e.target.value)}
                  />
                </div>
              </div>
            )}    

            {activeTab === 'elements' && (
              <div className="panel-section">
                <h3>Elements</h3>
                <div className="images-grid">
                  {elements.map((element) => (
                    <div
                      key={element.id}
                      className="image-thumbnail"
                      onClick={() => addElementToCanvas(element)}
                      title={element.name}
                    >
                      <img src={element.cdnUrl} alt={element.name} />
                    </div>
                  ))}
                  {elements.length === 0 && (
                    <p style={{gridColumn: '1 / -1', textAlign: 'center', color: '#94a3b8', padding: '20px'}}>
                      No elements available
                    </p>
                  )}
                </div>
              </div>
            )}                    
            </div>
            </div>
          )}
        </div>  
  
        {/* Canvas */}
        <div className="canvas-wrapper">
          <div className="zoom-indicator">
            {Math.round(scale * 100)}%
          </div>          
          <div
            className="canvas-container"
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                handleMouseDown(e);
              }
            }}            
            onWheel={handleWheel}
            style={{
              cursor: isSpacePressed ? (isPanning ? 'grabbing' : 'grab') : 'default'
            }}            
          >
            <div
              className="canvas"
              style={{
                width: canvasWidth,
                height: canvasHeight,
                backgroundColor: canvasBgColor,
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${scale})`,
                overflow: 'hidden',
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
                // Use backgroundWidth/Height for text with background, otherwise auto
                width: layer.type === "text" 
                  ? (layer.backgroundWidth ? `${layer.backgroundWidth}px` : "auto")
                  : `${layer.width}px`,
                height: layer.type === "text" 
                  ? (layer.backgroundHeight ? `${layer.backgroundHeight}px` : "auto")
                  : `${layer.height}px`,
                opacity: layer.opacity,
                transform: `rotate(${layer.rotation}deg)`,
                cursor: layer.locked ? "not-allowed" : "move",
                pointerEvents: layer.locked ? "none" : "auto",
              }}
              onMouseDown={(e) => handleMouseDown(e, layer.id)}
            >
                  {/* Layer content */}
                  {layer.type === "text" && (
                    <>
                      {editingLayerId === layer.id ? (
                        // Editable text area
                        <textarea
                          ref={textInputRef}
                          value={layer.text}
                          onChange={(e) => updateLayer(layer.id, { text: e.target.value })}
                          onBlur={() => setEditingLayerId(null)}
                          onSelect={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            const start = target.selectionStart;
                            const end = target.selectionEnd;
                            if (start !== end) {
                              setTextSelection({ layerId: layer.id, start, end });
                            }
                          }}
                          autoFocus
                          style={{
                            width: layer.backgroundWidth || "auto",
                            height: layer.backgroundHeight || "auto",
                            minWidth: "100px",
                            minHeight: "40px",
                            fontFamily: layer.fontFamily,
                            fontSize: layer.fontSize,
                            fontWeight: layer.fontWeight,
                            fontStyle: layer.fontStyle,
                            textAlign: layer.textAlign as any,
                            textDecoration: layer.textDecoration,
                            textTransform: layer.textTransform,
                            color: layer.color,
                            background: "transparent",
                            border: "2px solid #3b82f6",
                            borderRadius: "4px",
                            padding: "8px",
                            outline: "none",
                            resize: "none",
                            whiteSpace: layer.wordWrap ? "pre-wrap" : "nowrap",
                            overflow: "hidden"
                          }}
                        />
                      ) : (
                        // Display mode
                        <div
                          onClick={(e) => {
                            if (selectedLayerId === layer.id) {
                              e.stopPropagation();
                              setEditingLayerId(layer.id);
                            }
                          }}
                          onMouseDown={(e) => {
                            if (editingLayerId === layer.id) {
                              e.stopPropagation();
                            }
                          }}
                          style={{
                            fontFamily: layer.fontFamily,
                            fontSize: layer.fontSize,
                            fontWeight: layer.fontWeight,
                            fontStyle: layer.fontStyle,
                            textAlign: layer.textAlign as any,
                            textDecoration: layer.textDecoration,
                            textTransform: layer.textTransform,
                            WebkitTextStroke: (layer.outlineWidth ?? 0) > 0 ? `${layer.outlineWidth}px ${layer.outlineColor}` : undefined,
                            display: (layer.backgroundOpacity ?? 0) > 0 ? "flex" : "inline-flex",
                            alignItems: layer.verticalAlign === "top" ? "flex-start" : 
                                       layer.verticalAlign === "bottom" ? "flex-end" : "center",
                            justifyContent: layer.textAlign === "center" ? "center" : 
                                           layer.textAlign === "right" ? "flex-end" : "flex-start",
                            whiteSpace: layer.wordWrap ? "pre-wrap" : "nowrap",
                            width: layer.backgroundWidth ? `${layer.backgroundWidth}px` : "auto",
                            height: layer.backgroundHeight ? `${layer.backgroundHeight}px` : "auto",
                            minWidth: "fit-content",
                            minHeight: "fit-content",
                            pointerEvents: "auto",
                            cursor: selectedLayerId === layer.id ? "text" : "inherit",
                            position: "relative",
                            userSelect: editingLayerId === layer.id ? "text" : "none",
                          }}
                        >
                          {/* Background layer */}
                          {(layer.backgroundOpacity ?? 0) > 0 && (
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: layer.backgroundColor,
                                opacity: layer.backgroundOpacity,
                                border: layer.backgroundBorder ? 
                                  `${layer.backgroundBorderWidth ?? 2}px solid ${layer.backgroundBorder}` : undefined,
                                borderRadius: `${layer.backgroundBorderRadius ?? 8}px`,
                                pointerEvents: "none",
                                zIndex: -1,
                              }}
                            />
                          )}
                  
                          {/* Text content */}
                          {layer.textSegments && layer.textSegments.length > 0 ? (
                            (() => {
                              const text = layer.text || "";
                              const segments = layer.textSegments.sort((a, b) => a.startIndex - b.startIndex);
                              const parts: JSX.Element[] = [];
                              let lastIndex = 0;
                            
                              segments.forEach((seg, idx) => {
                                if (seg.startIndex > lastIndex) {
                                  parts.push(
                                    <span key={`default-${idx}`} style={{ color: layer.color }}>
                                      {text.substring(lastIndex, seg.startIndex)}
                                    </span>
                                  );
                                }
                              
                                parts.push(
                                  <span key={`segment-${idx}`} style={{ color: seg.color }}>
                                    {seg.text}
                                  </span>
                                );
                              
                                lastIndex = seg.endIndex;
                              });
                            
                              if (lastIndex < text.length) {
                                parts.push(
                                  <span key="default-end" style={{ color: layer.color }}>
                                    {text.substring(lastIndex)}
                                  </span>
                                );
                              }
                            
                              return (
                                <span style={{ 
                                  padding: layer.backgroundBorder ? 
                                    `${(layer.backgroundBorderWidth ?? 2) + 4}px` : "8px",
                                  display: 'inline-block',
                                }}>
                                  {parts}
                                </span>
                              );
                            })()
                          ) : (
                            <span style={{ 
                              color: layer.color,
                              padding: layer.backgroundBorder ? 
                                `${(layer.backgroundBorderWidth ?? 2) + 4}px` : "8px",
                              display: 'inline-block',
                            }}>
                              {layer.text}
                            </span>
                          )}
                        </div>
                      )}
                    </>
                  )}
                  {layer.type === "image" && layer.src && (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none",
                        position: "relative",
                      }}
                    >
                      <img
                        src={layer.src}
                        alt=""
                        style={{
                          position: "absolute",
                          // The image should fill to show the uncropped scaled version
                          width: `${100 / ((100 - (layer.cropLeft ?? 0) - (layer.cropRight ?? 0)) / 100)}%`,
                          height: `${100 / ((100 - (layer.cropTop ?? 0) - (layer.cropBottom ?? 0)) / 100)}%`,
                          objectFit: "fill",
                          // Position to show the correct cropped area
                          top: `${-(layer.cropTop ?? 0) / (100 - (layer.cropTop ?? 0) - (layer.cropBottom ?? 0)) * 100}%`,
                          left: `${-(layer.cropLeft ?? 0) / (100 - (layer.cropLeft ?? 0) - (layer.cropRight ?? 0)) * 100}%`,
                        }}
                      />
                    </div>
                  )}
                  {layer.type === "shape" && (
                    <svg width="100%" height="100%" style={{ overflow: "visible", pointerEvents: "none" }}>
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
            
                  {/* Crop Handles - show at edges of the layer frame */}
                  {selectedLayerId === layer.id && !layer.locked && (layer.type === 'image') && (
                    <>
                      {/* Top edge */}
                      <div 
                        className="crop-handle n" 
                        onMouseDown={(e) => handleCropMouseDown(e, layer.id, 'n')}
                        style={{
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '8px',
                          transform: 'translateY(-50%)',
                        }}
                      />
                      {/* Bottom edge */}
                      <div 
                        className="crop-handle s" 
                        onMouseDown={(e) => handleCropMouseDown(e, layer.id, 's')}
                        style={{
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '8px',
                          transform: 'translateY(50%)',
                        }}
                      />
                      {/* Right edge */}
                      <div 
                        className="crop-handle e" 
                        onMouseDown={(e) => handleCropMouseDown(e, layer.id, 'e')}
                        style={{
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: '8px',
                          transform: 'translateX(50%)',
                        }}
                      />
                      {/* Left edge */}
                      <div 
                        className="crop-handle w" 
                        onMouseDown={(e) => handleCropMouseDown(e, layer.id, 'w')}
                        style={{
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '8px',
                          transform: 'translateX(-50%)',
                        }}
                      />
                    </>
                  )}

                  {selectedLayerId === layer.id && !layer.locked && layer.type === 'text' && 
                   layer.backgroundWidth && layer.backgroundHeight && (layer.backgroundOpacity ?? 0) > 0 && (
                    <>
                      <div 
                        className="bg-resize-handle bg-n" 
                        onMouseDown={(e) => handleBackgroundResizeMouseDown(e, layer.id, 'bg-n')}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '8px',
                          cursor: 'ns-resize',
                          background: 'rgba(59, 130, 246, 0.3)',
                          transform: 'translateY(-50%)',
                        }}
                      />
                      <div 
                        className="bg-resize-handle bg-s" 
                        onMouseDown={(e) => handleBackgroundResizeMouseDown(e, layer.id, 'bg-s')}
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '8px',
                          cursor: 'ns-resize',
                          background: 'rgba(59, 130, 246, 0.3)',
                          transform: 'translateY(50%)',
                        }}
                      />
                      <div 
                        className="bg-resize-handle bg-e" 
                        onMouseDown={(e) => handleBackgroundResizeMouseDown(e, layer.id, 'bg-e')}
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: '8px',
                          cursor: 'ew-resize',
                          background: 'rgba(59, 130, 246, 0.3)',
                          transform: 'translateX(50%)',
                        }}
                      />
                      <div 
                        className="bg-resize-handle bg-w" 
                        onMouseDown={(e) => handleBackgroundResizeMouseDown(e, layer.id, 'bg-w')}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '8px',
                          cursor: 'ew-resize',
                          background: 'rgba(59, 130, 246, 0.3)',
                          transform: 'translateX(-50%)',
                        }}
                      />
                    </>
                  )}                 
                  
                  {/* Resize & Rotate Handles */}
                  {selectedLayerId === layer.id && !layer.locked && (
                    <>
                      <div className="rotation-line" />
                      <div
                        className="rotation-handle"
                        onMouseDown={(e) => handleRotationMouseDown(e, layer.id)}
                        title="Rotate"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                        </svg>
                      </div>
                      <div className="resize-handle nw" onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'nw')} />
                      <div className="resize-handle ne" onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'ne')} />
                      <div className="resize-handle sw" onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'sw')} />
                      <div className="resize-handle se" onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'se')} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Picker Popup for Selected Text */}
        {textSelection && editingLayerId && (
          <div
            style={{
              position: "fixed",
              bottom: "100px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ffffff",
              padding: "12px 16px",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              animation: "slideUp 0.3s ease",
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <label style={{ fontSize: "0.9rem", fontWeight: "600", color: "#1e293b" }}>
              Text Color:
            </label>
            <input
              type="color"
              value={segmentColor}
              onChange={(e) => {
                e.stopPropagation();
                setSegmentColor(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                width: "50px",
                height: "40px",
                border: "2px solid #e2e8f0",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                applySegmentColor(editingLayerId);
              }}
              style={{
                padding: "10px 20px",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              Apply
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTextSelection(null);
                setEditingLayerId(null);
              }}
              style={{
                padding: "10px 16px",
                background: "#f1f5f9",
                color: "#64748b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Cancel
            </button>
          </div>
        )}     
  
        {/* Right Sidebar - Layers */}
        <div className={`sidebar right-sidebar-new ${showRightPanel ? 'visible' : 'collapsed'}`}>
          <button className="panel-toggle right-toggle" onClick={() => setShowRightPanel(!showRightPanel)}>
            {showRightPanel ? 'Right Arrow' : 'Left Arrow'}
          </button>
          
          {showRightPanel && (
            <div className="layers-slim-panel">
              <button className="layers-icon-btn" onClick={() => setShowLayersPopup(true)} title="Manage Layers">
                <div className="layer-stack-icon">
                  <div className="layer-rect"></div>
                  <div className="layer-rect"></div>
                  <div className="layer-rect"></div>
                </div>
                <span>{layers.length}</span>
              </button>
            </div>
          )}
        </div>
      </div>
  
      {/* Layers Popup */}
      {showLayersPopup && (
        <div className="layers-popup-overlay" onClick={() => setShowLayersPopup(false)}>
          <div className="layers-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Layers</h3>
              <button className="close-popup" onClick={() => setShowLayersPopup(false)}>X</button>
            </div>
            <div className="layers-popup-content">
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
                        <button onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }); }}>
                          {layer.visible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { locked: !layer.locked }); }}>
                          {layer.locked ? <FaLock /> : <FaUnlock />}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); moveLayer(layer.id, "up"); }}>▲</button>
                        <button onClick={(e) => { e.stopPropagation(); moveLayer(layer.id, "down"); }}>▼</button>
                        <button onClick={(e) => { e.stopPropagation(); deleteLayer(layer.id); }}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div className="layers-popup-overlay" onClick={closeExportModal}>
          <div className="export-modal" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Export {exportFormat}</h3>
              <button className="close-popup" onClick={closeExportModal}>×</button>
            </div>
            <div className="export-modal-content">
              {exportProgress === 'processing' && (
                <div className="export-processing">
                  <div className="spinner"></div>
                  <p>Processing your design...</p>
                  <small>This may take a few moments</small>
                </div>
              )}

              {exportProgress === 'ready' && (
                <div className="export-ready">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4>Your design is ready!</h4>
                  <p>Click the button below to download your file</p>
                  <button className="download-export-btn" onClick={handleDownloadExport}>
                    <FaDownload size={18} />
                    <span>Download {exportFormat}</span>
                  </button>
                </div>
              )}

              {exportProgress === 'error' && (
                <div className="export-error">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <h4>Export Failed</h4>
                  <p>{error || "Something went wrong. Please try again."}</p>
                  <button className="retry-export-btn" onClick={closeExportModal}>
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}      
  
      {/* Toast Messages */}
      {error && <div className="toast error-toast">{error}</div>}
      {success && <div className="toast success-toast">{success}</div>}
    </div>
  );  
};

export default EditorCanvas;