"use client";

import React, { useState, useEffect, useRef, JSX, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../../../../../../../styles/tools/EditorCanvas.css";
import TemplateGallery from "../../../../../components/TemplateGallery";
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
  FaChevronDown,
  FaChevronUp,
  FaTrashAlt,
  FaChevronRight,
  FaChevronLeft,
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

  filters?: Array<{
    type: 'brightness' | 'contrast' | 'saturation' | 'hue-rotate' | 'blur' | 
          'sharpen' | 'temperature' | 'tint' | 'exposure' | 'highlights' | 
          'shadows' | 'vibrance' | 'grayscale' | 'sepia' | 'invert';
    value: number;
  }>;
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

interface EditorCanvasProps {
  projectId?: string; 
  initialDesignJson?: string;
  onDesignChange?: (designJson: string) => void;
  canvasWidth?: number;
  canvasHeight?: number;
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({
  projectId,
  initialDesignJson,
  onDesignChange,
  canvasWidth: propCanvasWidth,
  canvasHeight: propCanvasHeight,
}) => {
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
  const [showRightPanel, setShowRightPanel] = useState<boolean>(true);
  const [showLayersPopup, setShowLayersPopup] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);  
  const [activeTab, setActiveTab] = useState<'text' | 'images' | 'shapes' | 'properties' | 'canvas' | 'elements' | 'filters' | 'templates' |null>(null);
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
  const [guides, setGuides] = useState<{
    vertical: number[];
    horizontal: number[];
  }>({ vertical: [], horizontal: [] });
  const [isShiftPressed, setIsShiftPressed] = useState(false); 
  const [pages, setPages] = useState<Array<{
    id: string;
    canvas: { width: number; height: number; backgroundColor: string };
    layers: Layer[];
  }>>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);   
  const [clipboard, setClipboard] = useState<Layer[] | null>(null);
  const [clipboardAction, setClipboardAction] = useState<'copy' | 'cut' | null>(null);
  const [selectedLayerIds, setSelectedLayerIds] = useState<string[]>([]);
  const [showPagesPanel, setShowPagesPanel] = useState(true);
  const [draggedLayerId, setDraggedLayerId] = useState<string | null>(null);
  const [dragOverLayerId, setDragOverLayerId] = useState<string | null>(null);
  const [isRemovingBg, setIsRemovingBg] = useState(false);
  const [bgRemovalProgress, setBgRemovalProgress] = useState<string>(''); 
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; distance: number } | null>(null);
  const [initialScale, setInitialScale] = useState(1);  
  const [touchAction, setTouchAction] = useState<'none' | 'drag' | 'resize' | 'rotate' | 'crop'>('none');
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);  
  const [showTemplateGallery, setShowTemplateGallery] = useState(false); 
  const [templates, setTemplates] = useState<any[]>([]);
  const [templatesLoading, setTemplatesLoading] = useState(true);   
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);  

  useEffect(() => {
    const handleTouchMoveGlobal = (e: TouchEvent) => {
      if (resizeHandle || isRotatingLayer || cropHandle || isResizingBackground) {
        e.preventDefault();
        handleTouchMoveForHandles(e);
      }
    };
  
    const handleTouchEndGlobal = () => {
      if (resizeHandle || isRotatingLayer || cropHandle || isResizingBackground) {
        handleMouseUp();
      }
    };
  
    document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
    document.addEventListener('touchend', handleTouchEndGlobal);
  
    return () => {
      document.removeEventListener('touchmove', handleTouchMoveGlobal);
      document.removeEventListener('touchend', handleTouchEndGlobal);
    };
  }, [resizeHandle, isRotatingLayer, cropHandle, isResizingBackground]);  

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

  useEffect(() => {
    if (editingLayerId && textInputRef.current) {
      textInputRef.current.focus();
      textInputRef.current.select();
    }
  }, [editingLayerId]);  

  // Fetch templates for the left panel
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setTemplatesLoading(true);
    axios
      .get(`${API_BASE_URL}/api/image-editor/templates`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTemplates(res.data);
        setTemplatesLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching templates:", err);
        setTemplatesLoading(false);
      });
  }, []);  

  const saveToHistory = useCallback((newLayers: Layer[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.stringify(newLayers));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);
  
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

  const detectAlignmentGuides = useCallback((movingLayer: Layer, allLayers: Layer[]) => {
    const SNAP_THRESHOLD = 5; // pixels
    const verticalGuides: number[] = [];
    const horizontalGuides: number[] = [];
    
    // Canvas center guides
    const canvasCenterX = canvasWidth / 2;
    const canvasCenterY = canvasHeight / 2;
    
    // Helper function to get bounding box of rotated element
    const getRotatedBounds = (layer: Layer) => {
      const centerX = layer.x + layer.width / 2;
      const centerY = layer.y + layer.height / 2;
      const rotation = (layer.rotation || 0) * Math.PI / 180;
      
      // Four corners of the unrotated rectangle
      const corners = [
        { x: layer.x, y: layer.y },
        { x: layer.x + layer.width, y: layer.y },
        { x: layer.x + layer.width, y: layer.y + layer.height },
        { x: layer.x, y: layer.y + layer.height }
      ];
      
      // Rotate each corner around center
      const rotatedCorners = corners.map(corner => {
        const dx = corner.x - centerX;
        const dy = corner.y - centerY;
        return {
          x: centerX + (dx * Math.cos(rotation) - dy * Math.sin(rotation)),
          y: centerY + (dx * Math.sin(rotation) + dy * Math.cos(rotation))
        };
      });
      
      return {
        centerX,
        centerY,
        corners: rotatedCorners,
        minX: Math.min(...rotatedCorners.map(c => c.x)),
        maxX: Math.max(...rotatedCorners.map(c => c.x)),
        minY: Math.min(...rotatedCorners.map(c => c.y)),
        maxY: Math.max(...rotatedCorners.map(c => c.y))
      };
    };
    
    const movingBounds = getRotatedBounds(movingLayer);
    
    // Check canvas center alignment
    if (Math.abs(movingBounds.centerX - canvasCenterX) < SNAP_THRESHOLD) {
      verticalGuides.push(canvasCenterX);
    }
    if (Math.abs(movingBounds.centerY - canvasCenterY) < SNAP_THRESHOLD) {
      horizontalGuides.push(canvasCenterY);
    }
    
    // Check alignment with other layers
    allLayers.forEach(layer => {
      if (layer.id === movingLayer.id || !layer.visible) return;
      
      const layerBounds = getRotatedBounds(layer);
      
      // Center alignments
      if (Math.abs(movingBounds.centerX - layerBounds.centerX) < SNAP_THRESHOLD) {
        verticalGuides.push(layerBounds.centerX);
      }
      if (Math.abs(movingBounds.centerY - layerBounds.centerY) < SNAP_THRESHOLD) {
        horizontalGuides.push(layerBounds.centerY);
      }
      
      // Edge alignments (bounding box)
      if (Math.abs(movingBounds.minX - layerBounds.minX) < SNAP_THRESHOLD) {
        verticalGuides.push(layerBounds.minX);
      }
      if (Math.abs(movingBounds.maxX - layerBounds.maxX) < SNAP_THRESHOLD) {
        verticalGuides.push(layerBounds.maxX);
      }
      if (Math.abs(movingBounds.minY - layerBounds.minY) < SNAP_THRESHOLD) {
        horizontalGuides.push(layerBounds.minY);
      }
      if (Math.abs(movingBounds.maxY - layerBounds.maxY) < SNAP_THRESHOLD) {
        horizontalGuides.push(layerBounds.maxY);
      }
      
      // Edge-to-edge alignments (spacing)
      if (Math.abs(movingBounds.minX - layerBounds.maxX) < SNAP_THRESHOLD) {
        verticalGuides.push(layerBounds.maxX);
      }
      if (Math.abs(movingBounds.maxX - layerBounds.minX) < SNAP_THRESHOLD) {
        verticalGuides.push(layerBounds.minX);
      }
      if (Math.abs(movingBounds.minY - layerBounds.maxY) < SNAP_THRESHOLD) {
        horizontalGuides.push(layerBounds.maxY);
      }
      if (Math.abs(movingBounds.maxY - layerBounds.minY) < SNAP_THRESHOLD) {
        horizontalGuides.push(layerBounds.minY);
      }
    });
    
    return {
      vertical: [...new Set(verticalGuides)],
      horizontal: [...new Set(horizontalGuides)]
    };
  }, [canvasWidth, canvasHeight]);

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

  // Initialize design - either from project API or from props (template mode)
  useEffect(() => {
    if (projectId) {
      // Normal mode: fetch from backend (existing behavior kept for user projects)
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

          if (design.pages && Array.isArray(design.pages)) {
            setPages(design.pages);
            const firstPage = design.pages[0];
            setCanvasWidth(firstPage.canvas.width);
            setCanvasHeight(firstPage.canvas.height);
            setCanvasBgColor(firstPage.canvas.backgroundColor);
            setLayers(firstPage.layers || []);
            saveToHistory(firstPage.layers || []);
          } else {
            // Migrate old format
            const migratedPages = [{
              id: `page-${Date.now()}`,
              canvas: design.canvas || { width: 1080, height: 1080, backgroundColor: "#FFFFFF" },
              layers: design.layers || []
            }];
            setPages(migratedPages);
            setCanvasWidth(migratedPages[0].canvas.width);
            setCanvasHeight(migratedPages[0].canvas.height);
            setCanvasBgColor(migratedPages[0].canvas.backgroundColor);
            setLayers(migratedPages[0].layers);
            saveToHistory(migratedPages[0].layers);
          }
        })
        .catch((err) => {
          console.error("Error fetching project:", err);
          setError("Failed to load project");
        });
    } else if (initialDesignJson) {
      // Template mode: use provided design
      try {
        const design = JSON.parse(initialDesignJson);

        let width = propCanvasWidth || 1080;
        let height = propCanvasHeight || 1080;
        let bgColor = "#FFFFFF";
        let pageLayers: Layer[] = [];

        if (design.pages && Array.isArray(design.pages) && design.pages.length > 0) {
          setPages(design.pages);
          const firstPage = design.pages[0];
          width = firstPage.canvas.width || width;
          height = firstPage.canvas.height || height;
          bgColor = firstPage.canvas.backgroundColor || bgColor;
          pageLayers = firstPage.layers || [];
        } else {
          // Fallback blank page
          const blankPage = {
            id: `page-${Date.now()}`,
            canvas: { width, height, backgroundColor: bgColor },
            layers: []
          };
          setPages([blankPage]);
          pageLayers = [];
        }

        setCanvasWidth(width);
        setCanvasHeight(height);
        setCanvasBgColor(bgColor);
        setLayers(pageLayers);
        saveToHistory(pageLayers);
      } catch (err) {
        console.error("Invalid initialDesignJson", err);
        // Fallback to blank
        const blankPage = {
          id: `page-${Date.now()}`,
          canvas: { width: propCanvasWidth || 1080, height: propCanvasHeight || 1080, backgroundColor: "#FFFFFF" },
          layers: []
        };
        setPages([blankPage]);
        setCanvasWidth(blankPage.canvas.width);
        setCanvasHeight(blankPage.canvas.height);
        setCanvasBgColor(blankPage.canvas.backgroundColor);
        setLayers([]);
        saveToHistory([]);
      }
    } else {
      // No projectId and no initialDesign → start blank (should not happen in template mode)
      const blankPage = {
        id: `page-${Date.now()}`,
        canvas: { width: propCanvasWidth || 1080, height: propCanvasHeight || 1080, backgroundColor: "#FFFFFF" },
        layers: []
      };
      setPages([blankPage]);
      setCanvasWidth(blankPage.canvas.width);
      setCanvasHeight(blankPage.canvas.height);
      setCanvasBgColor(blankPage.canvas.backgroundColor);
      setLayers([]);
      saveToHistory([]);
    }
  }, [projectId, initialDesignJson, propCanvasWidth, propCanvasHeight, router]);

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
    if (!isMobile || e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }    
    e.stopPropagation();
  
    if (e.ctrlKey || e.metaKey) {
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(0.1, scale + delta), 3);
  
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        
        // Get the current position of canvas center on screen
        const currentCanvasCenterX = panOffset.x + (canvasWidth * scale) / 2;
        const currentCanvasCenterY = panOffset.y + (canvasHeight * scale) / 2;
        
        // Calculate where the canvas center should be after scaling
        // to keep it in the same screen position
        const newPanX = currentCanvasCenterX - (canvasWidth * newScale) / 2;
        const newPanY = currentCanvasCenterY - (canvasHeight * newScale) / 2;
  
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
  
    // For text layers, store fontSize for resizing
    if (layer.type === 'text') {
      setResizeHandle(handle);
      setResizeStartState({
        x: layer.x,
        y: layer.y,
        width: layer.fontSize || 32, // Store fontSize as width for text
        height: layer.fontSize || 32, // Store fontSize as height for text
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    } else {
      setResizeHandle(handle);
      setResizeStartState({
        x: layer.x,
        y: layer.y,
        width: layer.width,
        height: layer.height,
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    }
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
  
      if (e.shiftKey && !isShiftPressed) {
        setIsShiftPressed(true);
      }
  
      // Copy: Ctrl+C or Cmd+C
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedLayerIds.length > 0) {
        e.preventDefault();
        const layersToCopy = layers.filter(l => selectedLayerIds.includes(l.id) && !l.locked);
        if (layersToCopy.length > 0) {
          setClipboard(layersToCopy.map(l => JSON.parse(JSON.stringify(l))));
          setClipboardAction('copy');
          setSuccess(`${layersToCopy.length} layer(s) copied!`);
          setTimeout(() => setSuccess(null), 1000);
        }
      }
      
      // Cut: Ctrl+X or Cmd+X
      if ((e.ctrlKey || e.metaKey) && e.key === 'x' && selectedLayerIds.length > 0) {
        e.preventDefault();
        const layersToCut = layers.filter(l => selectedLayerIds.includes(l.id) && !l.locked);
        if (layersToCut.length > 0) {
          setClipboard(layersToCut.map(l => JSON.parse(JSON.stringify(l))));
          setClipboardAction('cut');
          // Delete the cut layers
          const updatedLayers = layers.filter(l => !selectedLayerIds.includes(l.id));
          setLayers(updatedLayers);
          setSelectedLayerIds([]);
          saveToHistory(updatedLayers);
          setSuccess(`${layersToCut.length} layer(s) cut!`);
          setTimeout(() => setSuccess(null), 1000);
        }
      }
      
      // Paste: Ctrl+V or Cmd+V
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard && clipboard.length > 0) {
        e.preventDefault();
        pasteMultipleLayers();
        setSuccess(`${clipboard.length} layer(s) pasted!`);
        setTimeout(() => setSuccess(null), 1000);
      }
  
      // Delete: Delete or Backspace
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedLayerIds.length > 0) {
        e.preventDefault();
        deleteMultipleLayers();
      }
    };
  
    const handleKeyUp = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
  
      if (e.code === 'Space') {
        e.preventDefault();
        setIsSpacePressed(false);
        setIsPanning(false);
      }
  
      if (!e.shiftKey && isShiftPressed) {
        setIsShiftPressed(false);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpacePressed, isShiftPressed, selectedLayerIds, layers, clipboard]);

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

  // Notify parent (TemplateEditorPage) whenever design changes in template mode
  useEffect(() => {
    if (!projectId && onDesignChange) {
      const updatedPages = [...pages];
      updatedPages[currentPageIndex] = {
        ...updatedPages[currentPageIndex],
        canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: canvasBgColor },
        layers: layers
      };

      const fullDesign = {
        version: "1.0",
        pages: updatedPages
      };

      onDesignChange(JSON.stringify(fullDesign));
    }
  }, [layers, canvasWidth, canvasHeight, canvasBgColor, pages, currentPageIndex, projectId, onDesignChange]);

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
    // Calculate default background dimensions upfront
    const fontSize = 32;
    const text = "New Text";
    const estimatedTextWidth = text.length * fontSize * 0.6;
    const estimatedTextHeight = fontSize * 1.5;
    const defaultBackgroundWidth = estimatedTextWidth + 20;
    const defaultBackgroundHeight = estimatedTextHeight + 10;
  
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
      backgroundWidth: defaultBackgroundWidth,  // ADD THIS
      backgroundHeight: defaultBackgroundHeight, // ADD THIS
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
            ...(layer.type === 'image' && {
              cropTop: updates.cropTop !== undefined ? roundTo2(updates.cropTop) : layer.cropTop ?? 0,
              cropRight: updates.cropRight !== undefined ? roundTo2(updates.cropRight) : layer.cropRight ?? 0,
              cropBottom: updates.cropBottom !== undefined ? roundTo2(updates.cropBottom) : layer.cropBottom ?? 0,
              cropLeft: updates.cropLeft !== undefined ? roundTo2(updates.cropLeft) : layer.cropLeft ?? 0,
            }),
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

  const deleteLayer = (layerId: string) => {
    deleteMultipleLayers();
  };

  const deleteMultipleLayers = () => {
    const layersToDelete = selectedLayerIds.filter(id => {
      const layer = layers.find(l => l.id === id);
      return layer && !layer.locked;
    });
  
    if (layersToDelete.length === 0) return;
  
    const updatedLayers = layers.filter(l => !layersToDelete.includes(l.id));
    setLayers(updatedLayers);
    setSelectedLayerIds([]);
    saveToHistory(updatedLayers);
    setSuccess(`${layersToDelete.length} layer(s) deleted!`);
    setTimeout(() => setSuccess(null), 1000);
  };
  
  const pasteMultipleLayers = () => {
    if (!clipboard || clipboard.length === 0) return;
  
    const newLayers = clipboard.map((layerData, index) => ({
      ...layerData,
      id: `${layerData.type}-${Date.now()}-${index}`,
      x: layerData.x + 20,
      y: layerData.y + 20,
      zIndex: layers.length + index,
    }));
  
    const updatedLayers = [...layers, ...newLayers];
    setLayers(updatedLayers);
    setSelectedLayerIds(newLayers.map(l => l.id));
    saveToHistory(updatedLayers);
  
    // Clear clipboard if it was a cut operation
    if (clipboardAction === 'cut') {
      setClipboard(null);
      setClipboardAction(null);
    }
  };

  const pasteLayer = () => {
    pasteMultipleLayers();
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

  const autoSave = useCallback(async (force = false) => {
    if (!projectId) return;

    if (!force && isSaving) return;
  
    setIsSaving(true);
    setError(null);
    try {
      // Update current page data
      const updatedPages = [...pages];
      updatedPages[currentPageIndex] = {
        ...updatedPages[currentPageIndex],
        canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: canvasBgColor },
        layers: layers
      };
  
      const designJson = JSON.stringify({
        version: "1.0",
        pages: updatedPages
      });
  
      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
        { designJson },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
  
      if (force) {
        setSuccess("Saved!");
        setTimeout(() => setSuccess(null), 2000);
      }
    } catch (err: any) {
      if (force) setError("Save failed");
    } finally {
      setIsSaving(false);
    }
  }, [projectId, isSaving, canvasWidth, canvasHeight, canvasBgColor, layers, pages, currentPageIndex]);

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
      // Save current page before export
      const updatedPages = [...pages];
      updatedPages[currentPageIndex] = {
        ...updatedPages[currentPageIndex],
        canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: canvasBgColor },
        layers: layers
      };
  
      const designJson = JSON.stringify({
        version: "1.0",
        pages: updatedPages
      });
  
      await axios.put(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
        { designJson },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
  
      // Export with page index parameter
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}/export?pageIndex=${currentPageIndex}`,
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
  
      // Handle multi-select with Shift key
      if (isShiftPressed) {
        // Toggle selection
        setSelectedLayerIds(prev => {
          if (prev.includes(layerId)) {
            return prev.filter(id => id !== layerId);
          } else {
            return [...prev, layerId];
          }
        });
      } else {
        // Single select (clear others if not already selected)
        if (!selectedLayerIds.includes(layerId)) {
          setSelectedLayerIds([layerId]);
        }
      }
  
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    } else {
      // Clicked on canvas background - clear selection
      if (!isShiftPressed) {
        setSelectedLayerIds([]);
      }
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
  
    if (isRotatingLayer && selectedLayerIds.length === 1 && rotationStartState) {
      const layer = layers.find((l) => l.id === selectedLayerIds[0]);
      if (!layer) return;
    
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
    
      const centerX = rect.left + panOffset.x + (rotationStartState.centerX * scale);
      const centerY = rect.top + panOffset.y + (rotationStartState.centerY * scale);
    
      const currentAngle = Math.atan2(
        e.clientY - centerY,
        e.clientX - centerX
      ) * (180 / Math.PI);
    
      const deltaAngle = currentAngle - rotationStartState.startAngle;
      let newRotation = rotationStartState.angle + deltaAngle;
    
      if (isShiftPressed) {
        const snapAngle = 45;
        newRotation = Math.round(newRotation / snapAngle) * snapAngle;
      }
    
      updateLayer(selectedLayerIds[0], { rotation: newRotation });
      return;
    }
  
    if (cropHandle && selectedLayerIds.length === 1 && cropStartState) {
      const layer = layers.find((l) => l.id === selectedLayerIds[0]);
      if (!layer) return;
    
      const deltaX = (e.clientX - cropStartState.mouseX) / scale;
      const deltaY = (e.clientY - cropStartState.mouseY) / scale;
    
      // Calculate natural dimensions (original image size before any crop)
      const currentCropHoriz = (layer.cropLeft ?? 0) + (layer.cropRight ?? 0);
      const currentCropVert = (layer.cropTop ?? 0) + (layer.cropBottom ?? 0);
      const naturalWidth = layer.width / ((100 - currentCropHoriz) / 100);
      const naturalHeight = layer.height / ((100 - currentCropVert) / 100);
    
      // Convert pixel delta to percentage of natural dimensions
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
          newY = cropStartState.y + deltaY;
          break;
        case 's':
          newCropBottom = Math.max(0, Math.min(95, (layer.cropBottom ?? 0) - deltaPercentY));
          break;
        case 'e':
          newCropRight = Math.max(0, Math.min(95, (layer.cropRight ?? 0) - deltaPercentX));
          break;
        case 'w':
          newCropLeft = Math.max(0, Math.min(95, (layer.cropLeft ?? 0) + deltaPercentX));
          newX = cropStartState.x + deltaX;
          break;
      }
    
      const totalVertical = newCropTop + newCropBottom;
      const totalHorizontal = newCropLeft + newCropRight;
    
      if (totalVertical < 95 && totalHorizontal < 95) {
        const newVisibleWidth = naturalWidth * (100 - newCropLeft - newCropRight) / 100;
        const newVisibleHeight = naturalHeight * (100 - newCropTop - newCropBottom) / 100;
      
        updateLayer(selectedLayerIds[0], {
          cropTop: newCropTop,
          cropRight: newCropRight,
          cropBottom: newCropBottom,
          cropLeft: newCropLeft,
          width: newVisibleWidth,
          height: newVisibleHeight,
          x: newX,
          y: newY,
        });
    
        // IMPORTANT: Update cropStartState for continuous dragging
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
  
    if (resizeHandle && selectedLayerIds.length === 1 && resizeStartState) {
      const layer = layers.find((l) => l.id === selectedLayerIds[0]);
      if (!layer) return;
    
      const deltaX = (e.clientX - resizeStartState.mouseX) / scale;
      const deltaY = (e.clientY - resizeStartState.mouseY) / scale;
    
      // Special handling for TEXT layers - resize font size
      if (layer.type === 'text') {
        const rotated = rotatePoint(deltaX, deltaY, -layer.rotation);
        const rotatedDeltaX = rotated.x;
        const rotatedDeltaY = rotated.y;
      
        const startFontSize = resizeStartState.width;
        let fontSizeDelta = 0;
        let newX = layer.x;
        let newY = layer.y;
      
        switch (resizeHandle) {
          case 'nw':
            fontSizeDelta = -Math.max(rotatedDeltaX, rotatedDeltaY);
            // Move position opposite to resize direction
            const nwScaleFactor = fontSizeDelta / startFontSize;
            newX = resizeStartState.x - (rotatedDeltaX * 0.5);
            newY = resizeStartState.y - (rotatedDeltaY * 0.5);
            break;
          case 'ne':
            fontSizeDelta = Math.max(rotatedDeltaX, -rotatedDeltaY);
            newY = resizeStartState.y + (rotatedDeltaY * 0.5);
            break;
          case 'sw':
            fontSizeDelta = Math.max(-rotatedDeltaX, rotatedDeltaY);
            newX = resizeStartState.x + (rotatedDeltaX * 0.5);
            break;
          case 'se':
            fontSizeDelta = Math.max(rotatedDeltaX, rotatedDeltaY);
            break;
        }
      
        const newFontSize = Math.max(12, Math.round(startFontSize + fontSizeDelta * 0.5));

        updateLayer(selectedLayerIds[0], {
          fontSize: newFontSize,
          x: newX,
          y: newY
        });
        return;
      }
    
      // Original handling for IMAGE and SHAPE layers
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
          const img = document.querySelector(`img[src="${layer.src}"]`) as HTMLImageElement;
          if (!img) return;
        
          const naturalWidth = img.naturalWidth;
          const naturalHeight = img.naturalHeight;

          // Calculate current crop percentages
          const cropHoriz = (layer.cropLeft ?? 0) + (layer.cropRight ?? 0);
          const cropVert = (layer.cropTop ?? 0) + (layer.cropBottom ?? 0);

          // Calculate the scale needed to achieve the new dimensions
          // while maintaining the current crop percentages
          const newScaleX = newWidth / (naturalWidth * (100 - cropHoriz) / 100);
          const newScaleY = newHeight / (naturalHeight * (100 - cropVert) / 100);

          // Use the average scale to maintain aspect ratio
          const newScale = (newScaleX + newScaleY) / 2;
        
          updateLayer(selectedLayerIds[0], {
            x: newX,
            y: newY,
            scale: newScale,
            width: newWidth,
            height: newHeight,
          });
        } else {
          // For shapes, only update dimensions
          updateLayer(selectedLayerIds[0], {
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
          });
        }
      }
      return;
    }
  
    if (isResizingBackground && selectedLayerIds.length === 1 && resizeStartState && backgroundResizeHandle) {
      const layer = layers.find((l) => l.id === selectedLayerIds[0]);
      if (!layer) return;
    
      const deltaX = (e.clientX - resizeStartState.mouseX) / scale;
      const deltaY = (e.clientY - resizeStartState.mouseY) / scale;
    
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
    
      updateLayer(selectedLayerIds[0], {
        backgroundWidth: newBackgroundWidth,
        backgroundHeight: newBackgroundHeight,
      });
      return;
    }
  
    // Multi-layer drag
    if (!isDragging || selectedLayerIds.length === 0) return;
    
    const deltaX = (e.clientX - dragStart.x) / scale;
    const deltaY = (e.clientY - dragStart.y) / scale;
  
    // Update all selected layers
    const updatedLayers = layers.map(layer => {
      if (selectedLayerIds.includes(layer.id) && !layer.locked) {
        return {
          ...layer,
          x: layer.x + deltaX,
          y: layer.y + deltaY
        };
      }
      return layer;
    });
  
    setLayers(updatedLayers);
    setDragStart({ x: e.clientX, y: e.clientY });
    
    // Show guides only for single selection
    if (selectedLayerIds.length === 1) {
      const movedLayer = updatedLayers.find(l => l.id === selectedLayerIds[0]);
      if (movedLayer) {
        const detectedGuides = detectAlignmentGuides(movedLayer, layers);
        setGuides(detectedGuides);
      }
    } else {
      setGuides({ vertical: [], horizontal: [] });
    }
  };

  const handleMouseUp = () => {
    if (isDragging && selectedLayerIds.length > 0) {
      saveToHistory(layers);
    }
    
    setGuides({ vertical: [], horizontal: [] });
    setIsDragging(false);
    setIsPanning(false);
    setResizeHandle(null);
    setResizeStartState(null);
    setIsRotatingLayer(false);
    setRotationStartState(null);
    setCropHandle(null);
    setCropStartState(null);
    setBackgroundResizeHandle(null);
    setIsResizingBackground(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't prevent default on the canvas container itself - let layer touches bubble up
    if (e.touches.length === 2) {
      // Pinch zoom
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      setTouchStart({
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
        distance
      });
      setInitialScale(scale);
      setTouchAction('none');
    } else if (e.touches.length === 1 && isSpacePressed) {
      // Pan mode
      e.preventDefault();
      setIsPanning(true);
      setPanStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
      setTouchAction('none');
    } else if (e.touches.length === 1 && !isSpacePressed) {
      // Only set touch action for dragging, don't set other states here
      // The layer's onTouchStart will handle the actual selection
      setTouchAction('drag');
      setTouchStartPos({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStart) {
      // Pinch zoom
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      const scaleChange = distance / touchStart.distance;
      const newScale = Math.min(Math.max(0.1, initialScale * scaleChange), 3);
      setScale(newScale);
    } else if (e.touches.length === 1 && isPanning) {
      // Pan canvas
      e.preventDefault();
      setPanOffset({
        x: e.touches[0].clientX - panStart.x,
        y: e.touches[0].clientY - panStart.y
      });
    } else if (e.touches.length === 1 && (touchAction === 'drag' || isDragging) && selectedLayerIds.length > 0 && !isSpacePressed) {
      // Drag layers
      e.preventDefault();
      const deltaX = (e.touches[0].clientX - dragStart.x) / scale;
      const deltaY = (e.touches[0].clientY - dragStart.y) / scale;
    
      const updatedLayers = layers.map(layer => {
        if (selectedLayerIds.includes(layer.id) && !layer.locked) {
          return {
            ...layer,
            x: layer.x + deltaX,
            y: layer.y + deltaY
          };
        }
        return layer;
      });
    
      setLayers(updatedLayers);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    
      if (selectedLayerIds.length === 1) {
        const movedLayer = updatedLayers.find(l => l.id === selectedLayerIds[0]);
        if (movedLayer) {
          const detectedGuides = detectAlignmentGuides(movedLayer, layers);
          setGuides(detectedGuides);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    if (touchAction === 'drag' && selectedLayerIds.length > 0) {
      saveToHistory(layers);
    }

    setTouchStart(null);
    setIsPanning(false);
    setTouchAction('none');
    setTouchStartPos(null);
    setIsDragging(false);
    setGuides({ vertical: [], horizontal: [] });
  }; 

  const handleTouchMoveForHandles = (e: TouchEvent) => {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    const mouseEvent = {
      clientX: touch.clientX,
      clientY: touch.clientY,
    } as React.MouseEvent;

    handleMouseMove(mouseEvent);
  };

  const selectedLayer = selectedLayerIds.length === 1 ? layers.find((l) => l.id === selectedLayerIds[0]) : null;

  const debouncedLayers = useDebounce(layers, 1000);
  
  useEffect(() => {
    if (project && layers.length > 0) {
      autoSave();
    }
  }, [debouncedLayers, canvasWidth, canvasHeight, canvasBgColor, project]);

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

  const addNewPage = () => {
    const newPage = {
      id: `page-${Date.now()}`,
      canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: "#FFFFFF" },
      layers: []
    };
    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    setCurrentPageIndex(updatedPages.length - 1);
    setCanvasWidth(newPage.canvas.width);
    setCanvasHeight(newPage.canvas.height);
    setCanvasBgColor(newPage.canvas.backgroundColor);
    setLayers([]);
    setSelectedLayerId(null);
    saveToHistory([]);
    autoSave(true);
  };
  
  const duplicatePage = (pageIndex: number) => {
    const pageToCopy = pages[pageIndex];
    const duplicatedPage = {
      id: `page-${Date.now()}`,
      canvas: { ...pageToCopy.canvas },
      layers: JSON.parse(JSON.stringify(pageToCopy.layers)).map((layer: Layer) => ({
        ...layer,
        id: `${layer.type}-${Date.now()}-${Math.random()}`
      }))
    };
    const updatedPages = [...pages];
    updatedPages.splice(pageIndex + 1, 0, duplicatedPage);
    setPages(updatedPages);
    setCurrentPageIndex(pageIndex + 1);
    setCanvasWidth(duplicatedPage.canvas.width);
    setCanvasHeight(duplicatedPage.canvas.height);
    setCanvasBgColor(duplicatedPage.canvas.backgroundColor);
    setLayers(duplicatedPage.layers);
    setSelectedLayerId(null);
    saveToHistory(duplicatedPage.layers);
    autoSave(true);
  };
  
  const switchToPage = (pageIndex: number) => {
    if (pageIndex === currentPageIndex) return;
    
    // Save current page first
    const updatedPages = [...pages];
    updatedPages[currentPageIndex] = {
      ...updatedPages[currentPageIndex],
      canvas: { width: canvasWidth, height: canvasHeight, backgroundColor: canvasBgColor },
      layers: layers
    };
    setPages(updatedPages);
    
    // Switch to new page
    const targetPage = updatedPages[pageIndex];
    setCurrentPageIndex(pageIndex);
    setCanvasWidth(targetPage.canvas.width);
    setCanvasHeight(targetPage.canvas.height);
    setCanvasBgColor(targetPage.canvas.backgroundColor);
    setLayers(targetPage.layers);
    setSelectedLayerId(null);
    saveToHistory(targetPage.layers);
  };
  
  const deletePage = (pageIndex: number) => {
    if (pages.length === 1) {
      setError("Cannot delete the last page");
      setTimeout(() => setError(null), 2000);
      return;
    }
    
    const updatedPages = pages.filter((_, idx) => idx !== pageIndex);
    setPages(updatedPages);
    
    const newIndex = pageIndex === 0 ? 0 : pageIndex - 1;
    setCurrentPageIndex(newIndex);
    
    const targetPage = updatedPages[newIndex];
    setCanvasWidth(targetPage.canvas.width);
    setCanvasHeight(targetPage.canvas.height);
    setCanvasBgColor(targetPage.canvas.backgroundColor);
    setLayers(targetPage.layers);
    setSelectedLayerId(null);
    saveToHistory(targetPage.layers);
    autoSave(true);
  };  

  // Helper function to apply filters to layer preview
  const getFilterStyle = (filters?: Layer['filters']) => {
    if (!filters || filters.length === 0) return {};
    
    const filterStrings: string[] = [];
    
    filters.forEach(filter => {
      switch (filter.type) {
        case 'brightness':
          // Range: -100 to 100 -> 0% to 200%
          filterStrings.push(`brightness(${100 + filter.value}%)`);
          break;
        case 'contrast':
          // Range: -100 to 100 -> 0% to 200%
          filterStrings.push(`contrast(${100 + filter.value}%)`);
          break;
        case 'saturation':
          // Range: -100 to 100 -> 0% to 200%
          filterStrings.push(`saturate(${100 + filter.value}%)`);
          break;
        case 'hue-rotate':
          filterStrings.push(`hue-rotate(${filter.value}deg)`);
          break;
        case 'blur':
          if (filter.value > 0) {
            // CSS blur matches our adjusted backend blur
            filterStrings.push(`blur(${filter.value}px)`);
          }
          break;
        case 'sharpen':
          // Approximate sharpening with contrast boost
          if (filter.value > 0) {
            filterStrings.push(`contrast(${100 + filter.value * 3}%)`);
          }
          break;
        case 'temperature':
          // Match backend's sepia + hue-rotate approach
          if (filter.value > 0) {
            // Warm
            filterStrings.push(`sepia(${filter.value * 0.15}%)`);
            filterStrings.push(`hue-rotate(${-filter.value * 0.08}deg)`);
          } else {
            // Cool
            const coolFactor = -filter.value;
            filterStrings.push(`hue-rotate(${coolFactor * 0.4}deg)`);
            filterStrings.push(`saturate(${100 - (coolFactor * 0.05)}%)`);
          }
          break;
        case 'tint':
          // Match backend's hue-rotate approach
          if (filter.value !== 0) {
            filterStrings.push(`hue-rotate(${filter.value * 1.2}deg)`);
          }
          break;
        case 'exposure':
          // Match backend's gamma approach with brightness
          const expFactor = Math.pow(2, filter.value);
          filterStrings.push(`brightness(${expFactor * 100}%)`);
          break;
        case 'highlights':
          // Subtle brightness adjustment matching backend
          const highlightAdj = (filter.value / 100.0) * 30;
          filterStrings.push(`brightness(${100 + highlightAdj}%)`);
          break;
        case 'shadows':
          // Subtle brightness adjustment matching backend
          const shadowAdj = (filter.value / 100.0) * 30;
          filterStrings.push(`brightness(${100 + shadowAdj}%)`);
          break;
        case 'vibrance':
          // Direct saturation mapping
          filterStrings.push(`saturate(${filter.value}%)`);
          break;
        case 'grayscale':
          filterStrings.push(`grayscale(100%)`);
          break;
        case 'sepia':
          filterStrings.push(`sepia(${filter.value}%)`);
          break;
        case 'invert':
          filterStrings.push(`invert(100%)`);
          break;
      }
    });
    
    return {
      filter: filterStrings.join(' '),
      WebkitFilter: filterStrings.join(' ')
    };
  };
  
  // Helper to update a specific filter
  const updateFilter = (layerId: string, filterType: string, value: number) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer) return;
    
    const existingFilters = layer.filters || [];
    const filterIndex = existingFilters.findIndex(f => f.type === filterType);
    
    let newFilters;
    if (filterIndex >= 0) {
      // Update existing filter
      newFilters = [...existingFilters];
      newFilters[filterIndex] = { type: filterType as any, value };
    } else {
      // Add new filter
      newFilters = [...existingFilters, { type: filterType as any, value }];
    }
    
    updateLayer(layerId, { filters: newFilters });
  };
  
  // Helper to remove a filter
  const removeFilter = (layerId: string, filterType: string) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || !layer.filters) return;
    
    const newFilters = layer.filters.filter(f => f.type !== filterType);
    updateLayer(layerId, { filters: newFilters.length > 0 ? newFilters : undefined });
  };
  
  // Helper to reset all filters
  const resetAllFilters = (layerId: string) => {
    updateLayer(layerId, { filters: undefined });
  };  

  const handleDragStart = (e: React.DragEvent, layerId: string) => {
    setDraggedLayerId(layerId);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDragOver = (e: React.DragEvent, layerId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverLayerId(layerId);
  };
  
  const handleDragLeave = () => {
    setDragOverLayerId(null);
  };
  
  const handleDrop = (e: React.DragEvent, targetLayerId: string) => {
    e.preventDefault();
    if (!draggedLayerId || draggedLayerId === targetLayerId) {
      setDraggedLayerId(null);
      setDragOverLayerId(null);
      return;
    }
  
    const draggedIndex = layers.findIndex(l => l.id === draggedLayerId);
    const targetIndex = layers.findIndex(l => l.id === targetLayerId);
  
    if (draggedIndex === -1 || targetIndex === -1) return;
  
    const updatedLayers = [...layers];
    const [draggedLayer] = updatedLayers.splice(draggedIndex, 1);
    updatedLayers.splice(targetIndex, 0, draggedLayer);
  
    // Update zIndex for all layers
    updatedLayers.forEach((layer, idx) => {
      layer.zIndex = idx;
    });
  
    setLayers(updatedLayers);
    saveToHistory(updatedLayers);
    setDraggedLayerId(null);
    setDragOverLayerId(null);
  };
  
  const renderLayerPreview = (layer: Layer) => {
    if (layer.type === 'text') {
      return (
        <div 
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontFamily: layer.fontFamily,
            color: layer.color,
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            overflow: 'hidden',
            textAlign: 'center',
            padding: '2px',
            lineHeight: '1.2',
          }}
        >
          {layer.text?.substring(0, 15) || 'T'}
        </div>
      );
    }
    
    if (layer.type === 'image' && layer.src) {
      return (
        <div 
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#f8f9fa',
            ...getFilterStyle(layer.filters),
          }}
        >
          <img 
            src={layer.src} 
            alt="preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      );
    }
    
    if (layer.type === 'shape') {
      return (
        <div 
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 100 100">
            {layer.shape === "rectangle" && (
              <rect
                x="10"
                y="20"
                width="80"
                height="60"
                fill={layer.fill}
                stroke={layer.stroke}
                strokeWidth={layer.strokeWidth}
                rx={layer.borderRadius}
              />
            )}
            {layer.shape === "circle" && (
              <circle
                cx="50"
                cy="50"
                r="35"
                fill={layer.fill}
                stroke={layer.stroke}
                strokeWidth={layer.strokeWidth}
              />
            )}
            {layer.shape === "ellipse" && (
              <ellipse
                cx="50"
                cy="50"
                rx="40"
                ry="25"
                fill={layer.fill}
                stroke={layer.stroke}
                strokeWidth={layer.strokeWidth}
              />
            )}
            {layer.shape === "triangle" && (
              <polygon
                points="50,15 85,85 15,85"
                fill={layer.fill}
                stroke={layer.stroke}
                strokeWidth={layer.strokeWidth}
              />
            )}
          </svg>
        </div>
      );
    }
    
    return null;
  }; 
  
  const handleRemoveBackground = async (layerId: string) => {
    const layer = layers.find(l => l.id === layerId);
    if (!layer || layer.type !== 'image' || !layer.src) {
      setError("Please select an image layer");
      return;
    }
  
    // Extract asset ID from the image URL
    const assetMatch = layer.src.match(/\/assets\/([^\/]+)$/);
    if (!assetMatch) {
      setError("Cannot identify image asset");
      return;
    }
  
    // Find the asset ID from uploadedImages
    try {
      setIsRemovingBg(true);
      setBgRemovalProgress('Processing...');
      
      // Get all assets to find the ID
      const token = localStorage.getItem("token");
      const assetsResponse = await axios.get(`${API_BASE_URL}/api/image-editor/assets?type=IMAGE`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const matchingAsset = assetsResponse.data.find((asset: any) => asset.cdnUrl === layer.src);
      if (!matchingAsset) {
        throw new Error("Asset not found");
      }
  
      setBgRemovalProgress('Removing background...');
      
      // Call remove background API
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/assets/${matchingAsset.id}/remove-background`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      const newAsset = response.data;
      
      // Load the new image to get dimensions
      const img = new Image();
      img.onload = () => {
        // Remove old layer
        const updatedLayers = layers.filter(l => l.id !== layerId);
        
        // Add new layer with removed background - maintaining the OLD layer's dimensions
        const newLayer = createImageLayer(newAsset.cdnUrl, img.naturalWidth, img.naturalHeight);
        newLayer.x = layer.x;
        newLayer.y = layer.y;
        // Copy the display dimensions from the old layer
        newLayer.width = layer.width;
        newLayer.height = layer.height;
        newLayer.scale = layer.scale;
        // Also copy crop values if any
        newLayer.cropTop = layer.cropTop;
        newLayer.cropRight = layer.cropRight;
        newLayer.cropBottom = layer.cropBottom;
        newLayer.cropLeft = layer.cropLeft;
        // Copy rotation and opacity
        newLayer.rotation = layer.rotation;
        newLayer.opacity = layer.opacity;
        
        const finalLayers = [...updatedLayers, newLayer];
        setLayers(finalLayers);
        setSelectedLayerId(newLayer.id);
        saveToHistory(finalLayers);
        
        // Add to uploaded images
        setUploadedImages(prev => [...prev, newAsset.cdnUrl]);
        
        setSuccess("Background removed successfully!");
        setTimeout(() => setSuccess(null), 2000);
      };
      img.onerror = () => {
        setError("Failed to load processed image");
      };
      img.src = newAsset.cdnUrl;
      
    } catch (err: any) {
      console.error("Background removal error:", err);
      setError(err.response?.data?.message || "Failed to remove background");
    } finally {
      setIsRemovingBg(false);
      setBgRemovalProgress('');
    }
  };  

  const handleApplyTemplate = async (templateId: number) => {
    try {
      setError(null);
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects/${projectId}/apply-template/${templateId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update project state with template data
      setProject(response.data);
      const design = JSON.parse(response.data.designJson);

      if (design.pages && Array.isArray(design.pages)) {
        setPages(design.pages);
        const firstPage = design.pages[0];
        setCanvasWidth(firstPage.canvas.width);
        setCanvasHeight(firstPage.canvas.height);
        setCanvasBgColor(firstPage.canvas.backgroundColor);
        setLayers(firstPage.layers || []);
        setCurrentPageIndex(0);
        setSelectedLayerIds([]);
        saveToHistory(firstPage.layers);
      }

      setSuccess("Template applied successfully!");
      setTimeout(() => setSuccess(null), 2000);
    } catch (err: any) {
      console.error("Error applying template:", err);
      setError(err.response?.data?.message || "Failed to apply template");
      setTimeout(() => setError(null), 3000);
    }
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
          <button 
            className="toolbar-btn" 
            onClick={() => setShowTemplateGallery(true)}
            title="Browse Templates"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            Templates
          </button>          
          <button className="toolbar-btn" onClick={handleUndo} disabled={historyIndex <= 0}>
            <FaUndo />
          </button>
          <button className="toolbar-btn" onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
            <FaRedo />
          </button>
          <button 
            className="toolbar-btn" 
            onClick={handleSave} 
            disabled={isSaving || !projectId}
            title={!projectId ? "Save is handled in template editor" : ""}
          >
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
          className={`icon-panel-btn ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'templates' ? null : 'templates')}
          title="Templates"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        </button>        
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
        <button 
          className={`icon-panel-btn ${activeTab === 'filters' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'filters' ? null : 'filters')}
          title="Filters"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5h18v2H3V5zm2 4h14v2H5V9zm4 4h6v2H9v-2zm2 4h2v2h-2v-2z"/>
          </svg>
        </button>              
      </div>
    
      {activeTab && (
        <div className="content-panel">
          <div className="content-panel-inner">
            {activeTab === 'templates' && (
              <div className="panel-section">
                <h3>Templates</h3>
                {templatesLoading ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div className="spinner" style={{ width: '32px', height: '32px', margin: '0 auto' }}></div>
                  </div>
                ) : templates.length === 0 ? (
                  <p style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 20px' }}>
                    No templates available
                  </p>
                ) : (
                  <div className="templates-grid">
                    {templates.map((template) => {
                      let firstPage;
                      try {
                        const design = JSON.parse(template.designJson);
                        firstPage = design.pages?.[0];
                      } catch (e) {
                        return null;
                      }
                      if (!firstPage) return null;
                    
                      const { width, height, backgroundColor } = firstPage.canvas;
                      const aspectRatio = width / height;
                      const previewWidth = 160; // Slightly larger for better text visibility
                      const previewHeight = previewWidth / aspectRatio;
                    
                      const scaleX = previewWidth / width;
                      const scaleY = previewHeight / height;
                      const minScale = Math.min(scaleX, scaleY); // For text size scaling
                    
                      return (
                        <div
                          key={template.id}
                          className="template-thumbnail"
                          onClick={() => handleApplyTemplate(template.id)}
                          title={template.templateName}
                        >
                          <div
                            className="template-preview-container"
                            style={{
                              width: previewWidth,
                              height: previewHeight,
                              backgroundColor: backgroundColor || '#FFFFFF',
                            }}
                          >
                            {firstPage.layers
                              .filter((l: Layer) => l.visible)
                              .sort((a: Layer, b: Layer) => a.zIndex - b.zIndex)
                              .map((layer: Layer) => (
                                <div
                                  key={layer.id}
                                  style={{
                                    position: 'absolute',
                                    left: layer.x * scaleX,
                                    top: layer.y * scaleY,
                                    width: layer.type === 'text' 
                                      ? (layer.backgroundWidth ? layer.backgroundWidth * scaleX : 'auto')
                                      : layer.width * scaleX,
                                    height: layer.type === 'text'
                                      ? (layer.backgroundHeight ? layer.backgroundHeight * scaleY : 'auto')
                                      : layer.height * scaleY,
                                    opacity: layer.opacity,
                                    transform: `rotate(${layer.rotation}deg)`,
                                    pointerEvents: 'none',
                                    overflow: 'visible',
                                  }}
                                >
                                {/* Text Layer - Perfect match */}
                                {layer.type === 'text' && (
                                  <div
                                    style={{
                                      fontFamily: layer.fontFamily ?? 'Arial',
                                      fontSize: (layer.fontSize ?? 32) * minScale,
                                      fontWeight: layer.fontWeight ?? 'normal',
                                      fontStyle: layer.fontStyle ?? 'normal',
                                      color: layer.color ?? '#000000',
                                      textAlign: (layer.textAlign ?? 'left') as 'left' | 'center' | 'right',
                                      textDecoration: layer.textDecoration ?? 'none',
                                      textTransform: (layer.textTransform ?? 'none') as 'uppercase' | 'lowercase' | 'capitalize' | 'none',
                                      // Perfect text stroke (outline)
                                      WebkitTextStroke: layer.outlineWidth != null && (layer.outlineWidth ?? 0) > 0
                                        ? `${(layer.outlineWidth ?? 0) * minScale}px ${layer.outlineColor ?? '#000000'}`
                                        : undefined,
                                      paintOrder: 'stroke fill', // Ensures stroke is behind fill
                                      whiteSpace: layer.wordWrap ? 'pre-wrap' : 'nowrap',
                                      wordBreak: layer.wordWrap ? 'break-word' : 'normal',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      lineHeight: 1.2,
                                      letterSpacing: 'normal',
                                      // Background behind text - exact match
                                      backgroundColor: (layer.backgroundOpacity ?? 0) > 0 ? (layer.backgroundColor ?? 'transparent') : undefined,
                                      opacity: (layer.backgroundOpacity ?? 0) > 0 ? (layer.backgroundOpacity ?? 1) : 1,
                                      padding: (layer.backgroundOpacity ?? 0) > 0 ? `${8 * minScale}px` : '0',
                                      borderRadius: layer.backgroundBorderRadius != null 
                                        ? `${(layer.backgroundBorderRadius ?? 0) * minScale}px` 
                                        : undefined,
                                      border: layer.backgroundBorderWidth != null && (layer.backgroundBorderWidth ?? 0) > 0
                                        ? `${(layer.backgroundBorderWidth ?? 0) * minScale}px solid ${layer.backgroundBorder ?? '#000000'}`
                                        : undefined,
                                      boxShadow: layer.shadow ? 
                                        `${(layer.shadow.offsetX ?? 0) * minScale}px ${(layer.shadow.offsetY ?? 0) * minScale}px ${(layer.shadow.blur ?? 0) * minScale}px ${layer.shadow.color ?? 'rgba(0,0,0,0.25)'}` 
                                        : undefined,
                                      // Curve hint
                                      transform: layer.curveRadius != null && Math.abs(layer.curveRadius ?? 0) > 50
                                        ? `rotate(${layer.curveRadius > 0 ? 8 : -8}deg)`
                                        : undefined,
                                      display: 'flex',
                                      alignItems: layer.verticalAlign === 'top' ? 'flex-start' 
                                        : layer.verticalAlign === 'bottom' ? 'flex-end' 
                                        : 'center',
                                      justifyContent: layer.textAlign === 'center' ? 'center' 
                                        : layer.textAlign === 'right' ? 'flex-end' 
                                        : 'flex-start',
                                      width: '100%',
                                      height: '100%',
                                      boxSizing: 'border-box',
                                    }}
                                  >
                                    {layer.text || 'Text'}
                                  </div>
                                )}
            
                                  {/* Image Layer */}
                                  {layer.type === 'image' && layer.src && (
                                    <img
                                      src={layer.src}
                                      alt=""
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        ...getFilterStyle(layer.filters),
                                      }}
                                    />
                                  )}
            
                                  {/* Shape Layer */}
                                  {layer.type === 'shape' && (
                                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                                      {layer.shape === 'rectangle' && (
                                        <rect
                                          x="0"
                                          y="0"
                                          width="100"
                                          height="100"
                                          fill={layer.fill || '#3b82f6'}
                                          stroke={layer.stroke || '#000'}
                                          strokeWidth={layer.strokeWidth || 2}
                                          rx={layer.borderRadius || 0}
                                        />
                                      )}
                                      {layer.shape === 'circle' && (
                                        <circle cx="50" cy="50" r="45" fill={layer.fill || '#3b82f6'} stroke={layer.stroke} strokeWidth={layer.strokeWidth || 2} />
                                      )}
                                      {layer.shape === 'ellipse' && (
                                        <ellipse cx="50" cy="50" rx="45" ry="30" fill={layer.fill || '#3b82f6'} stroke={layer.stroke} strokeWidth={layer.strokeWidth || 2} />
                                      )}
                                      {layer.shape === 'triangle' && (
                                        <polygon points="50,5 95,90 5,90" fill={layer.fill || '#3b82f6'} stroke={layer.stroke} strokeWidth={layer.strokeWidth || 2} />
                                      )}
                                    </svg>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

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
              // <div className="panel-section">
              //   <h3>Shapes</h3>
              //   <div className="shapes-grid">
              //     <button className="shape-btn" onClick={() => addShapeLayer("rectangle")} title="Rectangle">
              //       <svg viewBox="0 0 100 100" width="40" height="40">
              //         <rect x="10" y="20" width="80" height="60" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" rx="5" />
              //       </svg>
              //     </button>
              //     <button className="shape-btn" onClick={() => addShapeLayer("circle")} title="Circle">
              //       <svg viewBox="0 0 100 100" width="40" height="40">
              //         <circle cx="50" cy="50" r="40" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
              //       </svg>
              //     </button>
              //     <button className="shape-btn" onClick={() => addShapeLayer("ellipse")} title="Ellipse">
              //       <svg viewBox="0 0 100 100" width="40" height="40">
              //         <ellipse cx="50" cy="50" rx="45" ry="30" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
              //       </svg>
              //     </button>
              //     <button className="shape-btn" onClick={() => addShapeLayer("triangle")} title="Triangle">
              //       <svg viewBox="0 0 100 100" width="40" height="40">
              //         <polygon points="50,10 90,90 10,90" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
              //       </svg>
              //     </button>
              //   </div>
              // </div>
                <div className="panel-section coming-soon">
                  <div className="coming-soon-text">
                    <span>Coming soon…</span>
                  </div>
                </div>              
            )}
    
            {activeTab === 'properties' && (
              <div className="panel-section">
                <h3>Properties</h3>
                {selectedLayerIds.length === 0 ? (
                  <p className="no-selection">Select a layer to edit</p>
                ) : selectedLayerIds.length > 1 ? (
                  <p className="no-selection">Multiple layers selected. Only positioning is available.</p>
                ) : !selectedLayer ? (
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
                      <>
                        <div className="property-group">
                          <button
                            className="tool-btn"
                            onClick={() => handleRemoveBackground(selectedLayer.id)}
                            disabled={isRemovingBg}
                            style={{
                              background: isRemovingBg 
                                ? 'linear-gradient(90deg, #94a3b8, #64748b)' 
                                : 'linear-gradient(90deg, #10b981, #059669)',
                              cursor: isRemovingBg ? 'not-allowed' : 'pointer',
                            }}
                          >
                            {isRemovingBg ? (
                              <>
                                <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div>
                                <span>{bgRemovalProgress}</span>
                              </>
                            ) : (
                              <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <span>Remove Background</span>
                              </>
                            )}
                          </button>
                        </div>                        
                      </>  
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
                            onChange={(e) => {
                              const newText = e.target.value;
                              const fontSize = selectedLayer.fontSize || 32;
                              const estimatedTextWidth = newText.length * fontSize * 0.6;
                              const estimatedTextHeight = fontSize * 1.5;

                              updateLayer(selectedLayer.id, { 
                                text: newText,
                                ...(selectedLayer.backgroundWidth ? {
                                  backgroundWidth: Math.max(estimatedTextWidth + 20, 50),
                                  backgroundHeight: Math.max(estimatedTextHeight + 10, 30)
                                } : {})
                              });
                            }}
                            rows={3}
                          />
                        </div>
        
                        <div className="property-group">
                          <label>Font Family</label>
                          <select
                            value={selectedLayer.fontFamily}
                            onChange={(e) => updateLayer(selectedLayer.id, { fontFamily: e.target.value })}
                          >
                            {googleFonts.map((font) => (
                              <option key={font} value={font} style={{ fontFamily: font }}>
                                {font}
                              </option>
                            ))}
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
                            onChange={(e) => {
                              const newFontSize = parseInt(e.target.value, 10);
                              const text = selectedLayer.text || "";
                              const estimatedTextWidth = text.length * newFontSize * 0.6;
                              const estimatedTextHeight = newFontSize * 1.5;

                              updateLayer(selectedLayer.id, { 
                                fontSize: newFontSize,
                                // Update background dimensions if they exist
                                ...(selectedLayer.backgroundWidth ? {
                                  backgroundWidth: Math.max(estimatedTextWidth + 20, 50),
                                  backgroundHeight: Math.max(estimatedTextHeight + 10, 30)
                                } : {})
                              });
                            }}
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
                              updateLayer(selectedLayer.id, { backgroundOpacity: parseFloat(e.target.value) });
                            }}
                          />
                          {(selectedLayer.backgroundOpacity ?? 0) > 0 && (
                            <>
                              <div className="property-group">
                                <label>Background Color</label>
                                <input
                                  type="color"
                                  value={selectedLayer.backgroundColor || "#FFFFFF"}
                                  onChange={(e) => updateLayer(selectedLayer.id, { backgroundColor: e.target.value })}
                                />
                              </div>
                                                          
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
              // <div className="panel-section coming-soon">
              //   <div className="coming-soon-text">
              //     <span>Coming soon…</span>
              //   </div>
              // </div>              
            )}
            {activeTab === 'filters' && (
              // <div className="panel-section">
              //   <h3>Filters & Color Correction</h3>
              //   {!selectedLayer ? (
              //     <p className="no-selection">Select an image layer to apply filters</p>
              //   ) : selectedLayer.type !== 'image' ? (
              //     <p className="no-selection">Filters are only available for image layers</p>
              //   ) : (
              //     <div className="filters-panel">
              //       {/* Brightness */}
              //       <div className="filter-control">
              //         <label>
              //           Brightness
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'brightness')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'brightness')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'brightness', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Contrast */}
              //       <div className="filter-control">
              //         <label>
              //           Contrast
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'contrast')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'contrast')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'contrast', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Saturation */}
              //       <div className="filter-control">
              //         <label>
              //           Saturation
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'saturation')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'saturation')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'saturation', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Hue Rotate */}
              //       <div className="filter-control">
              //         <label>
              //           Hue
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'hue-rotate')?.value || 0}°
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="0"
              //           max="360"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'hue-rotate')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'hue-rotate', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Temperature */}
              //       <div className="filter-control">
              //         <label>
              //           Temperature
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'temperature')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'temperature')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'temperature', parseFloat(e.target.value))}
              //         />
              //         <div className="temperature-indicator">
              //           <span style={{color: '#3b82f6'}}>Cool</span>
              //           <span style={{color: '#f59e0b'}}>Warm</span>
              //         </div>
              //       </div>
            
              //       {/* Tint */}
              //       <div className="filter-control">
              //         <label>
              //           Tint
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'tint')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'tint')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'tint', parseFloat(e.target.value))}
              //         />
              //         <div className="temperature-indicator">
              //           <span style={{color: '#10b981'}}>Green</span>
              //           <span style={{color: '#ec4899'}}>Magenta</span>
              //         </div>
              //       </div>
            
              //       {/* Exposure */}
              //       <div className="filter-control">
              //         <label>
              //           Exposure
              //           <span className="filter-value">
              //             {(selectedLayer.filters?.find(f => f.type === 'exposure')?.value || 0).toFixed(2)} EV
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-2"
              //           max="2"
              //           step="0.1"
              //           value={selectedLayer.filters?.find(f => f.type === 'exposure')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'exposure', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Highlights */}
              //       <div className="filter-control">
              //         <label>
              //           Highlights
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'highlights')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'highlights')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'highlights', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Shadows */}
              //       <div className="filter-control">
              //         <label>
              //           Shadows
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'shadows')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="-100"
              //           max="100"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'shadows')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'shadows', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Vibrance */}
              //       <div className="filter-control">
              //         <label>
              //           Vibrance
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'vibrance')?.value || 100}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="0"
              //           max="200"
              //           step="1"
              //           value={selectedLayer.filters?.find(f => f.type === 'vibrance')?.value || 100}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'vibrance', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Blur */}
              //       <div className="filter-control">
              //         <label>
              //           Blur
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'blur')?.value || 0}px
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="0"
              //           max="20"
              //           step="0.5"
              //           value={selectedLayer.filters?.find(f => f.type === 'blur')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'blur', parseFloat(e.target.value))}
              //         />
              //       </div>
            
              //       {/* Sharpen */}
              //       <div className="filter-control">
              //         <label>
              //           Sharpen
              //           <span className="filter-value">
              //             {selectedLayer.filters?.find(f => f.type === 'sharpen')?.value || 0}
              //           </span>
              //         </label>
              //         <input
              //           type="range"
              //           min="0"
              //           max="10"
              //           step="0.5"
              //           value={selectedLayer.filters?.find(f => f.type === 'sharpen')?.value || 0}
              //           onChange={(e) => updateFilter(selectedLayer.id, 'sharpen', parseFloat(e.target.value))}
              //         />
              //       </div>                 
            
              //       {/* Quick Presets */}
              //       <div className="filter-presets">
              //         <h4>Quick Presets</h4>
              //         <div className="preset-buttons">
              //           <button
              //             className="preset-btn"
              //             onClick={() => {
              //               updateLayer(selectedLayer.id, {
              //                 filters: [
              //                   { type: 'contrast', value: 20 },
              //                   { type: 'saturation', value: 30 },
              //                   { type: 'sharpen', value: 2 }
              //                 ]
              //               });
              //             }}
              //           >
              //             Vivid
              //           </button>
              //           <button
              //             className="preset-btn"
              //             onClick={() => {
              //               updateLayer(selectedLayer.id, {
              //                 filters: [
              //                   { type: 'temperature', value: 30 },
              //                   { type: 'saturation', value: -20 },
              //                   { type: 'exposure', value: 0.3 }
              //                 ]
              //               });
              //             }}
              //           >
              //             Warm
              //           </button>
              //           <button
              //             className="preset-btn"
              //             onClick={() => {
              //               updateLayer(selectedLayer.id, {
              //                 filters: [
              //                   { type: 'temperature', value: -30 },
              //                   { type: 'contrast', value: 15 }
              //                 ]
              //               });
              //             }}
              //           >
              //             Cool
              //           </button>
              //           <button
              //             className="preset-btn"
              //             onClick={() => {
              //               updateLayer(selectedLayer.id, {
              //                 filters: [
              //                   { type: 'saturation', value: -100 },
              //                   { type: 'contrast', value: 25 }
              //                 ]
              //               });
              //             }}
              //           >
              //             B&W
              //           </button>
              //           <button
              //             className="preset-btn reset-btn"
              //             onClick={() => resetAllFilters(selectedLayer.id)}
              //           >
              //             Reset All
              //           </button>
              //         </div>
              //       </div>
              //     </div>
              //   )}
              // </div>
              <div className="panel-section coming-soon">
                <div className="coming-soon-text">
                  <span>Coming soon…</span>
                </div>
              </div>              
            )}                          
            </div>
            </div>
          )}
        </div>  

        {/* Collapsible Pages Panel */}
        <div className={`pages-panel ${showPagesPanel ? '' : 'hidden'}`}>
          {/* Toggle button (always visible) */}
          <button
            className="pages-toggle"
            onClick={() => setShowPagesPanel(!showPagesPanel)}
            title={showPagesPanel ? 'Hide pages' : 'Show pages'}
          >
            {showPagesPanel ? <FaChevronDown size={19} /> : <FaChevronUp size={19} />}
          </button>

          <div className="pages-list">
            {pages.map((page, index) => (
              <div
                key={page.id}
                className={`page-thumbnail ${currentPageIndex === index ? 'active' : ''}`}
                onClick={() => switchToPage(index)}
              >
                <div 
                  className="page-preview"
                  style={{ backgroundColor: page.canvas.backgroundColor }}
                >
                  <div style={{ fontSize: '8px', textAlign: 'center', padding: '2px' }}>
                    Page {index + 1}
                  </div>
                </div>
                <div style={{ fontSize: '10px', textAlign: 'center', marginTop: '2px' }}>
                  {page.layers.length} layers
                </div>
                {pages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePage(index);
                    }}
                    className="delete-page-btn"
                    title="Delete page"
                  >
                    <FaTrashAlt size={11} />
                  </button>
                )}   
              </div>
            ))}
          </div>
          <button className="add-page-btn" onClick={addNewPage}>
            <FaPlus /> New Page
          </button>
          <button 
            className="duplicate-page-btn" 
            onClick={() => duplicatePage(currentPageIndex)}
          >
            <FaPlus /> Duplicate
          </button>
        </div>        
  
        {/* Canvas */}
        <div className="canvas-wrapper">
          <div className="zoom-indicator">
            {Math.round(scale * 100)}%
          </div>  
          {isMobile && (
            <button
              className="mobile-pan-toggle"
              style={{
                position: 'absolute',
                bottom: '130px',
                left: '10px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: isSpacePressed 
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                  : '#ffffff',
                border: '2px solid #3b82f6',
                color: isSpacePressed ? '#ffffff' : '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 50,
              }}
              onClick={() => setIsSpacePressed(!isSpacePressed)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3l7 7-7 7M11 21l-7-7 7-7" />
              </svg>
            </button>
          )}                  
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}            
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
              className={`canvas-layer ${selectedLayerIds.includes(layer.id) ? "selected-layer" : ""}`}
              style={{
                position: "absolute",
                left: layer.x,
                top: layer.y,
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
                overflow: "visible",
              }}
              onMouseDown={(e) => handleMouseDown(e, layer.id)}
              onTouchStart={(e) => {
                if (!layer.locked) {
                  e.stopPropagation();
                  const touch = e.touches[0];
                  const mouseEvent = {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                    target: e.target,
                    currentTarget: e.currentTarget
                  } as any;
                  handleMouseDown(mouseEvent, layer.id);
                  setTouchAction('drag');
                  setIsDragging(true);
                  setDragStart({ x: touch.clientX, y: touch.clientY });
                }
              }}          
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
                            if (selectedLayerIds.includes(layer.id) && selectedLayerIds.length === 1) {
                              e.stopPropagation();
                              setEditingLayerId(layer.id);
                              setTimeout(() => {
                                if (textInputRef.current) {
                                  textInputRef.current.focus();
                                  textInputRef.current.select();
                                }
                              }, 0);
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
                            whiteSpace: "nowrap",
                            width: layer.backgroundWidth ? `${layer.backgroundWidth}px` : "auto",
                            height: layer.backgroundHeight ? `${layer.backgroundHeight}px` : "auto",
                            minWidth: "max-content",
                            minHeight: "max-content",
                            pointerEvents: "auto",
                            cursor: selectedLayerId === layer.id ? "text" : "inherit",
                            position: "relative",
                            userSelect: editingLayerId === layer.id ? "text" : "none",
                            overflow: "visible",
                            flexShrink: 0,
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
                        ...getFilterStyle(layer.filters),
                      }}
                    >
                      <img
                        src={layer.src}
                        alt=""
                        style={{
                          position: "absolute",
                          width: `${100 / ((100 - (layer.cropLeft ?? 0) - (layer.cropRight ?? 0)) / 100)}%`,
                          height: `${100 / ((100 - (layer.cropTop ?? 0) - (layer.cropBottom ?? 0)) / 100)}%`,
                          objectFit: "fill",
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
                  {selectedLayerIds.length === 1 && selectedLayerIds[0] === layer.id && !layer.locked && layer.type === 'image' && (
                    <>
                      {/* Top edge */}
                      <div 
                        className="crop-handle n" 
                        onMouseDown={(e) => handleCropMouseDown(e, layer.id, 'n')}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleCropMouseDown(mouseEvent, layer.id, 'n');
                        }}                        
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
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleCropMouseDown(mouseEvent, layer.id, 's');
                        }}                        
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
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleCropMouseDown(mouseEvent, layer.id, 'e');
                        }}                        
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
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleCropMouseDown(mouseEvent, layer.id, 'w');
                        }}                        
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
                  
                  {selectedLayerIds.length === 1 && selectedLayerIds[0] === layer.id && !layer.locked && (
                    <>
                      {/* Rotation and resize handles */}
                      <div className="rotation-line" />
                      <div
                        className="rotation-handle"
                        onMouseDown={(e) => handleRotationMouseDown(e, layer.id)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleRotationMouseDown(mouseEvent, layer.id);
                        }}                        
                        title="Rotate"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                        </svg>
                      </div>
                      <div className="resize-handle nw" 
                        onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'nw')}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleResizeMouseDown(mouseEvent, layer.id, 'nw');
                        }}                        
                       />
                      <div className="resize-handle ne" 
                        onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'ne')}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleResizeMouseDown(mouseEvent, layer.id, 'ne');
                        }}                        
                      />
                      <div className="resize-handle sw"
                        onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'sw')}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleResizeMouseDown(mouseEvent, layer.id, 'sw');
                        }}                        
                      />
                      <div className="resize-handle se"
                        onMouseDown={(e) => handleResizeMouseDown(e, layer.id, 'se')}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const touch = e.touches[0];
                          const mouseEvent = {
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                            stopPropagation: () => e.stopPropagation()
                          } as React.MouseEvent;
                          handleResizeMouseDown(mouseEvent, layer.id, 'se');
                        }}                        
                      />
                    </>
                  )}
                </div>
              ))}
              {/* Alignment Guides */}
              {guides.vertical.map((x, idx) => (
                <div
                  key={`v-guide-${idx}`}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    backgroundColor: '#FF00FF',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: '0 0 2px rgba(255, 0, 255, 0.5)',
                  }}
                />
              ))}
              {guides.horizontal.map((y, idx) => (
                <div
                  key={`h-guide-${idx}`}
                  style={{
                    position: 'absolute',
                    top: y,
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: '#FF00FF',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    boxShadow: '0 0 2px rgba(255, 0, 255, 0.5)',
                  }}
                />
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
  
        {/* Right Sidebar - Layers (now collapsible) */}
        <div className={`right-sidebar-new ${showRightPanel ? 'visible' : 'collapsed'}`}>
          {/* Toggle arrow - always visible */}
          <button 
            className="panel-toggle right-toggle" 
            onClick={() => setShowRightPanel(!showRightPanel)}
            title={showRightPanel ? 'Hide layers' : 'Show layers'}
          >
            {showRightPanel ? <FaChevronRight size={18} /> : <FaChevronLeft size={18} />}
          </button>

          {showRightPanel && (
            <div className="layers-slim-panel">
              <button 
                className="layers-icon-btn" 
                onClick={() => setShowLayersPopup(true)} 
                title="Manage Layers"
              >
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
                      className={`layer-item ${selectedLayerIds.includes(layer.id) ? "selected" : ""} ${
                        dragOverLayerId === layer.id ? "drag-over" : ""
                      } ${draggedLayerId === layer.id ? "dragging" : ""}`}
                      draggable={!layer.locked}
                      onDragStart={(e) => handleDragStart(e, layer.id)}
                      onDragOver={(e) => handleDragOver(e, layer.id)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, layer.id)}
                      onClick={(e) => {
                        if (e.shiftKey) {
                          setSelectedLayerIds(prev => {
                            if (prev.includes(layer.id)) {
                              return prev.filter(id => id !== layer.id);
                            } else {
                              return [...prev, layer.id];
                            }
                          });
                        } else {
                          setSelectedLayerIds([layer.id]);
                        }
                      }}
                      style={{
                        cursor: layer.locked ? 'not-allowed' : 'grab',
                      }}
                    >
                      <div className="layer-info">
                        <span>{layer.type}</span>
                        {layer.text && <small>{layer.text.substring(0, 20)}</small>}
                      </div>
                      
                      {/* Layer Preview */}
                      <div className="layer-preview-container">
                        {renderLayerPreview(layer)}
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
      {showTemplateGallery && (
        <TemplateGallery
          onClose={() => setShowTemplateGallery(false)}
          onSelectTemplate={handleApplyTemplate}
        />
      )}      
    </div>
  );  
};

export default EditorCanvas;