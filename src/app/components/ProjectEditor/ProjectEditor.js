"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import axios from 'axios';
import '../CSS/ProjectEditor.css';
import TimelineComponent from './TimelineComponent.js';
import VideoPreview from './VideoPreview';
import KeyframeControls from './KeyframeControls';
import FilterControls from './FilterControls';
import TransitionsPanel from './TransitionsPanel';
import TextPanel from './TextPanel';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';
import { API_BASE_URL, CDN_URL } from '../Config.js';
import VideoSegmentHandler from './VideoSegmentHandler.js';
import AiSubtitlesPanel from './AiSubtitlesPanel';
import TextStyles from './TextStyles';
import AIVoicesPanel from './AIVoicesPanel';
import VideosPanel from '../videocomponents/VideosPanel.js';
import PhotosPanel from '../videocomponents/PhotosPanel.js';
import AudiosPanel from '../videocomponents/AudiosPanel.js';
import ElementsPanel from '../videocomponents/ElementsPanel.js';

const ProjectEditorContent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [totalDuration, setTotalDuration] = useState(0);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 1080, height: 1920 });
  const [currentTime, setCurrentTime] = useState(0);
  const [videoLayers, setVideoLayers] = useState([[], [], []]);
  const [audioLayers, setAudioLayers] = useState([[], [], []]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timelineHeight, setTimelineHeight] = useState(30);
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [tempSegmentValues, setTempSegmentValues] = useState({});
  const [isTransformOpen, setIsTransformOpen] = useState(false);
  const [thumbnailsGenerated, setThumbnailsGenerated] = useState(false);
  const [isMediaPanelOpen, setIsMediaPanelOpen] = useState(true);
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(true);
  const [previewHeight, setPreviewHeight] = useState('auto');
  const [isTextToolOpen, setIsTextToolOpen] = useState(false);
  const [editingTextSegment, setEditingTextSegment] = useState(null);
  const [textSettings, setTextSettings] = useState({
    text: 'New Text',
    fontFamily: 'Arial',
    scale: 1.0,
    fontColor: '#FFFFFF',
    backgroundColor: 'transparent',
    duration: 5,
    alignment: 'center',
    backgroundOpacity: 1.0,
    backgroundBorderWidth: 0,
    backgroundBorderColor: '#000000',
    backgroundH: 0,
    backgroundW: 0,
    backgroundBorderRadius: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textBorderOpacity: 1.0,
    letterSpacing: 0,
    lineSpacing: 1.2,
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [timeScale, setTimeScale] = useState(20);
  const [keyframes, setKeyframes] = useState({});
  const [currentTimeInSegment, setCurrentTimeInSegment] = useState(0);
  const [editingProperty, setEditingProperty] = useState(null);
  const [isTransitionsOpen, setIsTransitionsOpen] = useState(false);
  const [transitions, setTransitions] = useState([]);
  const [availableTransitions] = useState([
    { type: 'Slide', label: 'Slide', icon: '/icons/slide.png' },
    { type: 'Zoom', label: 'Zoom', icon: '/icons/zoom.png' },
  ]);
  const [selectedTransition, setSelectedTransition] = useState(null);
  const [projectFps, setProjectFps] = useState(25);
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [loadedAudioSegments, setLoadedAudioSegments] = useState(new Set()); 
  const [elementSearchQuery, setElementSearchQuery] = useState('');
  const [isTimelineSelected, setIsTimelineSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isTextEmpty, setIsTextEmpty] = useState(false);
  const [userRole, setUserRole] = useState('BASIC');
  const [videoUploadError, setVideoUploadError] = useState('');
  const [defaultTextStyles, setDefaultTextStyles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({}); 
  const [tempThumbnails, setTempThumbnails] = useState({});
  const [isContentPanelOpen, setIsContentPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pendingUploads, setPendingUploads] = useState(new Set());
  const [isAddingToTimeline, setIsAddingToTimeline] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [multiSelectedSegments, setMultiSelectedSegments] = useState([]);
  const [changedTextProperty, setChangedTextProperty] = useState(null);
  const [aiSubtitleStyles, setAiSubtitleStyles] = useState([]);
  const [selectedAiStyle, setSelectedAiStyle] = useState(null);
  const [voices, setVoices] = useState([]);
  const [aiVoiceText, setAiVoiceText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);  
  const textSettingsRef = useRef(textSettings);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const timelineRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const projectId = pathname.split('/')[2];
  const updateTimeoutRef = useRef(null);
  const filterUpdateTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastUpdateTimeRef = useRef(performance.now());
  const transitionSaveTimeoutRef = useRef(null);

  const MIN_TIME_SCALE = 2;
  const MAX_TIME_SCALE = 250;
  let timelineSetPlayhead = null;

  useEffect(() => {
    const checkMobile = () => {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    textSettingsRef.current = textSettings;
  }, [textSettings]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (timelineRef.current && !timelineRef.current.contains(event.target)) {
        setIsTimelineSelected(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchTextStyles = async () => {
      try {
        const response = await fetch('/data/textStyles.json');
        if (!response.ok) {
          throw new Error('Failed to fetch text styles');
        }
        const styles = await response.json();
        setDefaultTextStyles(styles);
      } catch (error) {
        console.error('Error fetching text styles:', error);
        setDefaultTextStyles([]);
      }
    };

    fetchTextStyles();
  }, []);

  useEffect(() => {
    const fetchAiStyles = async () => {
      try {
        const response = await fetch('/data/AiStyles.json');
        if (!response.ok) {
          throw new Error('Failed to fetch AI subtitle styles');
        }
        const styles = await response.json();
        setAiSubtitleStyles(styles);
        setSelectedAiStyle(styles[0] || null);
      } catch (error) {
        console.error('Error fetching AI subtitle styles:', error);
        setAiSubtitleStyles([]);
      }
    };
  
    fetchAiStyles();
  }, []);  

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setUserRole('BASIC');
          return;
        }

        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
          const profile = JSON.parse(storedProfile);
          if (profile.role) {
            setUserRole(profile.role);
            return;
          }
        }

        const response = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const role = response.data.role || 'BASIC';
        setUserRole(role);

        const updatedProfile = {
          ...JSON.parse(storedProfile || '{}'),
          role,
        };
        localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('BASIC');
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('userProfile');
          router.push('/?error=Session expired. Please log in again.');
        }
      }
    };

    fetchUserRole();
  }, [router]);

  useEffect(() => {
    if (isPlaying) {
      const updatePlayback = (now) => {
        const deltaTime = (now - lastUpdateTimeRef.current) / 1000;
        lastUpdateTimeRef.current = now;

        setCurrentTime((prevTime) => {
          const newTime = prevTime + deltaTime;
          if (newTime >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return newTime;
        });

        animationFrameRef.current = requestAnimationFrame(updatePlayback);
      };

      lastUpdateTimeRef.current = performance.now();
      animationFrameRef.current = requestAnimationFrame(updatePlayback);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, totalDuration]);

  const handleLoadedAudioSegmentsUpdate = (newLoadedAudioSegments) => {
    setLoadedAudioSegments(newLoadedAudioSegments);
  };

  const getProjectState = () => ({
    videoLayers,
    audioLayers,
    transitions,
    keyframes,
    filterParams,
    appliedFilters,
    textSettings,
    selectedSegment,
  });

  const saveHistory = () => {
    const newState = getProjectState();
    const newHistory = [...history.slice(0, historyIndex + 1), newState];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const autoSaveProject = async (updatedVideoLayers = videoLayers, updatedAudioLayers = audioLayers) => {
    if (!projectId || !sessionId) {
      console.warn('Cannot auto-save: Missing projectId or sessionId');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const segments = [];
      updatedVideoLayers.forEach((layer, layerIndex) => {
        layer.forEach((item) => {
          if (item.type === 'video') {
            segments.push({
              id: item.id,
              type: 'video',
              sourceVideoPath: item.filePath,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              startTime: item.startTimeWithinVideo || 0,
              endTime: item.endTimeWithinVideo || item.duration,
              positionX: item.positionX,
              positionY: item.positionY,
              scale: item.scale,
              opacity: item.opacity,
              filters: item.filters || [],
              keyframes: item.keyframes || {},
            });
          } else if (item.type === 'image') {
            segments.push({
              id: item.id,
              type: 'image',
              imagePath: item.fileName,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              positionX: item.positionX,
              positionY: item.positionY,
              scale: item.scale,
              opacity: item.opacity,
              filters: item.filters || [],
              keyframes: item.keyframes || {},
            });
          } else if (item.type === 'text') {
            segments.push({
              id: item.id,
              type: 'text',
              text: item.text,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              fontFamily: item.fontFamily,
              scale: item.scale,
              fontColor: item.fontColor,
              backgroundColor: item.backgroundColor,
              positionX: item.positionX,
              positionY: item.positionY,
              opacity: item.opacity,
              alignment: item.alignment,
              backgroundOpacity: item.backgroundOpacity,
              backgroundBorderWidth: item.backgroundBorderWidth,
              backgroundBorderColor: item.backgroundBorderColor,
              backgroundH: item.backgroundH,
              backgroundW: item.backgroundW,
              backgroundBorderRadius: item.backgroundBorderRadius,
              textBorderColor: item.textBorderColor,
              textBorderWidth: item.textBorderWidth,
              textBorderOpacity: item.textBorderOpacity,
              letterSpacing: item.letterSpacing,
              lineSpacing: item.lineSpacing,
              keyframes: item.keyframes || {},
              isSubtitle: item.isSubtitle || false,
            });
          }
        });
      });
      updatedAudioLayers.forEach((layer, layerIndex) => {
        layer.forEach((item) => {
          segments.push({
            id: item.id,
            type: 'audio',
            audioPath: item.fileName,
            layer: item.layer,
            timelineStartTime: item.startTime,
            timelineEndTime: item.startTime + item.duration,
            startTime: item.startTimeWithinAudio || 0,
            endTime: item.endTimeWithinAudio || item.duration,
            volume: item.volume,
            keyframes: item.keyframes || {},
          });
        });
      });

      await axios.post(
        `${API_BASE_URL}/projects/${projectId}/save`,
        {
          timelineState: {
            segments,
            textSegments: segments.filter((s) => s.type === 'text'),
            imageSegments: segments.filter((s) => s.type === 'image'),
            audioSegments: segments.filter((s) => s.type === 'audio'),
          },
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Error during auto-save:', error);
    }
  };

  const roundToThreeDecimals = (num) => {
    return Math.round(num * 1000) / 1000;
  };

  const findAvailableLayer = (startTime, endTime, layers) => {
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex];
      const hasOverlap = layer.some(
        (segment) =>
          startTime < segment.startTime + segment.duration &&
          endTime > segment.startTime
      );
      if (!hasOverlap) {
        return layerIndex;
      }
    }
    return layers.length;
  };

  const handleElementClick = async (element, isDragEvent = false) => {
    if (uploading || isDragEvent) return;
    try {
      let endTime = 0;
      videoLayers.forEach((layer) => {
        layer.forEach((segment) => {
          const segmentEndTime = segment.startTime + segment.duration;
          if (segmentEndTime > endTime) endTime = segmentEndTime;
        });
      });
      const timelineStartTime = endTime;
      const duration = 5;
      const selectedLayer = findAvailableLayer(timelineStartTime, timelineStartTime + duration, videoLayers);

      const newSegment = await addImageToTimeline(
        element.fileName,
        selectedLayer,
        roundToThreeDecimals(timelineStartTime),
        roundToThreeDecimals(timelineStartTime + duration),
        true
      );

      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        while (newLayers.length <= selectedLayer) newLayers.push([]);
        const exists = newLayers[selectedLayer].some((segment) => segment.id === newSegment.id);
        if (!exists) {
          newLayers[selectedLayer].push({ ...newSegment, isElement: true }); // Ensure isElement is set
        } else {
          console.warn(`Segment with id ${newSegment.id} already exists in layer ${selectedLayer}`);
        }
        return newLayers;
      });

      setTotalDuration((prev) => Math.max(prev, timelineStartTime + duration));
      saveHistory();

      // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      // updateTimeoutRef.current = setTimeout(() => {
      //   autoSaveProject(videoLayers, audioLayers);
      // }, 1000);
    } catch (error) {
      console.error('Error adding element to timeline:', error);
      alert('Failed to add element to timeline. Please try again.');
    }
  };

const handleAudioClick = debounce(async (audio, isDragEvent = false) => {
  if (uploading || isDragEvent) return;
  try {
    setIsAddingToTimeline(true);
    const token = localStorage.getItem('token');
    if (!sessionId || !projectId || !token) {
      throw new Error('Missing sessionId, projectId, or token');
    }

    const duration = audio.duration || 5;
    let timelineStartTime = roundToThreeDecimals(currentTime);

    const findAvailableLayer = (start, end, layers) => {
      for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
        const hasOverlap = layers[layerIndex].some((segment) => {
          const segmentStart = segment.startTime;
          const segmentEnd = segmentStart + segment.duration;
          return start < segmentEnd && end > segmentStart;
        });
        if (!hasOverlap) return layerIndex;
      }
      return layers.length;
    };

    const proposedEndTime = timelineStartTime + duration;
    let selectedLayerIndex = findAvailableLayer(timelineStartTime, proposedEndTime, audioLayers);

    if (selectedLayerIndex >= audioLayers.length) {
      let earliestStartTime = timelineStartTime;
      let foundLayer = -1;

      for (let layerIndex = 0; layerIndex < audioLayers.length; layerIndex++) {
        const layer = audioLayers[layerIndex];
        let layerEndTime = 0;
        layer.forEach((segment) => {
          const segmentEnd = segment.startTime + segment.duration;
          if (segmentEnd > layerEndTime) layerEndTime = segmentEnd;
        });
        if (layerEndTime < earliestStartTime) {
          earliestStartTime = layerEndTime;
          foundLayer = layerIndex;
        }
      }

      if (foundLayer >= 0) {
        selectedLayerIndex = foundLayer;
        timelineStartTime = roundToThreeDecimals(earliestStartTime);
      } else {
        selectedLayerIndex = audioLayers.length;
      }
    }

    const backendLayer = -(selectedLayerIndex + 1);

    const doesIdExist = (id) => {
      return audioLayers.some((layer) => layer.some((segment) => segment.id === id));
    };
    let tempId = `temp-${uuidv4()}`;
    while (doesIdExist(tempId)) {
      tempId = `temp-${uuidv4()}`;
    }

    const newSegment = {
      id: tempId,
      type: 'audio',
      fileName: audio.fileName,
      url: audio.extracted
        ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audio.fileName)}`
        : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audio.fileName)}`,
      displayName: audio.displayName || audio.fileName.split('/').pop(),
      waveformJsonPath: audio.waveformJsonPath,
      startTime: timelineStartTime,
      duration: duration,
      layer: backendLayer,
      volume: 1.0,
      startTimeWithinAudio: 0,
      endTimeWithinAudio: duration,
      timelineStartTime: timelineStartTime,
      timelineEndTime: timelineStartTime + duration,
      keyframes: {},
      extracted: audio.extracted || false,
    };

    let updatedAudioLayers = audioLayers;
    setAudioLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      while (newLayers.length <= selectedLayerIndex) newLayers.push([]);

      let existingLayerIndex = -1;
      let existingSegment = null;
      for (let i = 0; i < newLayers.length; i++) {
        const found = newLayers[i].find((s) => s.id === newSegment.id);
        if (found) {
          existingSegment = found;
          existingLayerIndex = i;
          break;
        }
      }

      if (existingSegment) {
        console.warn(`Segment with ID ${newSegment.id} already exists in layer ${existingLayerIndex}. Updating instead.`);
        newLayers[existingLayerIndex] = newLayers[existingLayerIndex].map((s) =>
          s.id === newSegment.id ? { ...s, ...newSegment, layer: backendLayer } : s
        );
      } else {
        newLayers[selectedLayerIndex].push(newSegment);
      }

      updatedAudioLayers = newLayers;
      return newLayers;
    });

    setTotalDuration((prev) => Math.max(prev, timelineStartTime + duration));
    saveHistory();

    const response = await axios.post(
      `${API_BASE_URL}/projects/${projectId}/add-project-audio-to-timeline`,
      {
        audioFileName: audio.fileName,
        layer: backendLayer,
        timelineStartTime: roundToThreeDecimals(timelineStartTime),
        timelineEndTime: roundToThreeDecimals(timelineStartTime + duration),
        startTime: roundToThreeDecimals(0),
        endTime: roundToThreeDecimals(duration),
        volume: 1.0,
      },
      { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
    );

    const newAudioSegment = response.data;

    if (!newAudioSegment.audioSegmentId) {
      throw new Error('Backend did not return audioSegmentId');
    }

    let finalSegmentId = newAudioSegment.audioSegmentId.replace(/[^a-zA-Z0-9]/g, '-');
    if (doesIdExist(finalSegmentId)) {
      console.warn(`Backend returned duplicate audioSegmentId ${finalSegmentId}. Generating new ID.`);
      finalSegmentId = `${finalSegmentId}-${uuidv4()}`;
    }

    const waveformJsonPath = newAudioSegment.waveformJsonPath
      ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(newAudioSegment.waveformJsonPath.split('/').pop())}`
      : audio.waveformJsonPath
      ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audio.waveformJsonPath.split('/').pop())}`
      : null;

    setAudioLayers((prevLayers) => {
      const newLayers = prevLayers.map((layer, index) => {
        if (index === selectedLayerIndex) {
          return layer.map((item) =>
            item.id === tempId
              ? {
                  ...item,
                  id: finalSegmentId,
                  volume: newAudioSegment.volume || 1.0,
                  keyframes: newAudioSegment.keyframes || {},
                  startTimeWithinAudio: roundToThreeDecimals(newAudioSegment.startTime || 0),
                  endTimeWithinAudio: roundToThreeDecimals(newAudioSegment.endTime || duration),
                  duration: roundToThreeDecimals(
                    newAudioSegment.timelineEndTime - newAudioSegment.timelineStartTime
                  ),
                  timelineStartTime: roundToThreeDecimals(newAudioSegment.timelineStartTime),
                  timelineEndTime: roundToThreeDecimals(newAudioSegment.timelineEndTime),
                  layer: newAudioSegment.layer || backendLayer,
                  url: newAudioSegment.extracted
                    ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audio.fileName)}`
                    : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audio.fileName)}`,
                  waveformJsonPath: waveformJsonPath,
                  extracted: newAudioSegment.extracted || false,
                }
              : item
          );
        }
        return layer;
      });
      updatedAudioLayers = newLayers;
      return newLayers;
    });

    setTotalDuration((prev) => Math.max(prev, newAudioSegment.timelineEndTime));

    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject(videoLayers, updatedAudioLayers);
    // }, 1000);

  } catch (error) {
    console.error('Error adding audio to timeline:', error.response?.data || error.message);
    setAudioLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers.forEach((layer, index) => {
        newLayers[index] = layer.filter((item) => !item.id.startsWith('temp-'));
      });
      return newLayers;
    });
    let maxEndTime = 0;
    [...videoLayers, ...audioLayers].forEach((layer) => {
      layer.forEach((item) => {
        const endTime = item.startTime + item.duration;
        if (endTime > maxEndTime) maxEndTime = endTime;
      });
    });
    setTotalDuration(maxEndTime);
    alert('Failed to add audio to timeline. Please try again.');
  } finally {
    setIsAddingToTimeline(false);
  }
}, 300);

  const toggleTransitionsPanel = () => {
    setIsTransitionsOpen((prev) => {
      const newState = !prev;
      setIsContentPanelOpen(newState);
      setExpandedSection(newState ? 'transitions' : null);
      return newState;
    });
    setIsTransformOpen(false);
    setIsFiltersOpen(false);
    setIsTextToolOpen(false);
  };

  const handleTransitionSelect = (transition) => {
    setSelectedTransition(transition);
    setIsTransitionsOpen(true);
    setIsTransformOpen(false);
    setIsFiltersOpen(false);
    setIsTextToolOpen(false);
  };

  const handleTransitionDurationChange = async (newDuration) => {
    if (!selectedTransition || !sessionId || !projectId) return;
    if (newDuration <= 0) {
      alert('Duration must be positive');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-transition`,
        {
          transitionId: selectedTransition.id,
          type: selectedTransition.type,
          duration: newDuration,
          segmentId: selectedTransition.segmentId,
          start: selectedTransition.start,
          end: selectedTransition.end,
          layer: selectedTransition.layer,
          parameters: selectedTransition.parameters || {},
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedTransition = response.data;
      setTransitions((prev) =>
        prev.map((t) =>
          t.id === selectedTransition.id ? { ...t, duration: newDuration } : t
        )
      );
      setSelectedTransition((prev) => ({ ...prev, duration: newDuration }));
    } catch (error) {
      console.error('Error updating transition duration:', error);
      alert('Failed to update transition duration');
    }
  };

  const handleTransitionDirectionChange = async (direction) => {
    if (!selectedTransition || !sessionId || !projectId) return;
    try {
      const token = localStorage.getItem('token');
      const updatedParameters = { ...selectedTransition.parameters, direction };
      const response = await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-transition`,
        {
          transitionId: selectedTransition.id,
          type: selectedTransition.type,
          duration: selectedTransition.duration,
          segmentId: selectedTransition.segmentId,
          start: selectedTransition.start,
          end: selectedTransition.end,
          layer: selectedTransition.layer,
          parameters: updatedParameters,
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedTransition = response.data;
      setTransitions((prev) =>
        prev.map((t) =>
          t.id === selectedTransition.id ? { ...t, parameters: updatedParameters } : t
        )
      );
      setSelectedTransition((prev) => ({ ...prev, parameters: updatedParameters }));
    } catch (error) {
      console.error('Error updating transition direction:', error);
      alert('Failed to update transition direction');
    }
  };

    const handleTransitionDelete = async () => {
      if (!selectedTransition || !sessionId || !projectId) return;
      try {
        const token = localStorage.getItem('token');
        await axios.delete(
          `${API_BASE_URL}/projects/${projectId}/remove-transition`,
          {
            params: { sessionId, transitionId: selectedTransition.id },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        let updatedTransitions = transitions;
        setTransitions((prev) => {
          updatedTransitions = prev.filter((t) => t.id !== selectedTransition.id);
          return updatedTransitions;
        });
        setSelectedTransition(null);
        saveHistory();

        if (transitionSaveTimeoutRef.current) clearTimeout(transitionSaveTimeoutRef.current);
        transitionSaveTimeoutRef.current = setTimeout(() => {
          autoSaveProject(videoLayers, audioLayers);
        }, 1000);
      } catch (error) {
        console.error('Error deleting transition:', error);
        alert('Failed to delete transition');
      }
    };

  const fetchTransitions = async () => {
    if (!sessionId || !projectId || !localStorage.getItem('token')) {
      console.warn('Cannot fetch transitions: Missing sessionId, projectId, or token');
      setTransitions([]);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/projects/${projectId}/transitions`, {
        params: { sessionId },
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransitions(response.data || []);
    } catch (error) {
      console.error('Error fetching transitions:', error);
      if (error.response?.status === 403) {
        try {
          const token = localStorage.getItem('token');
          const sessionResponse = await axios.post(
            `${API_BASE_URL}/projects/${projectId}/session`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setSessionId(sessionResponse.data);
          const retryResponse = await axios.get(`${API_BASE_URL}/projects/${projectId}/transitions`, {
            params: { sessionId: sessionResponse.data },
            headers: { Authorization: `Bearer ${token}` },
          });
          setTransitions(retryResponse.data || []);
        } catch (retryError) {
          console.error('Error retrying transitions fetch:', retryError);
          setTransitions([]);
        }
      } else if (error.response?.status === 401) {
        router.push('/login');
      } else {
        setTransitions([]);
      }
    }
  };

  const areTimesEqual = (time1, time2, epsilon = 0.0001) => Math.abs(time1 - time2) < epsilon;

  const toggleTransformPanel = () => {
    toggleSection('transform');
  };
  
  const toggleFiltersPanel = () => {
    toggleSection('filters');
  };
  
  const toggleTextTool = () => {
    if (selectedSegment && selectedSegment.type === 'text') {
      toggleSection('text');
    } else {
      setIsTextToolOpen(false);
      setIsContentPanelOpen(false);
      setExpandedSection(null);
    }
  };

  const toggleMediaPanel = () => setIsMediaPanelOpen((prev) => !prev);

  const handleTextSegmentSelect = (segment) => {
    if (segment && segment.type === 'text') {
      // Fetch the latest segment from videoLayers
      const currentSegment = videoLayers[segment.layer]?.find((s) => s.id === segment.id) || segment;
      setEditingTextSegment(currentSegment);
      const text = currentSegment.text?.trim() || 'Default Text';
      setTextSettings({
        text: text,
        fontFamily: currentSegment.fontFamily || 'Arial',
        scale: currentSegment.scale || 1.0,
        fontColor: currentSegment.fontColor || '#FFFFFF',
        backgroundColor: currentSegment.backgroundColor || 'transparent',
        duration: currentSegment.duration || 5,
        alignment: currentSegment.alignment || 'center',
        backgroundOpacity: currentSegment.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: currentSegment.backgroundBorderWidth ?? 0,
        backgroundBorderColor: currentSegment.backgroundBorderColor || '#000000',
        backgroundH: currentSegment.backgroundH ?? 0,
        backgroundW: currentSegment.backgroundW ?? 0,
        backgroundBorderRadius: currentSegment.backgroundBorderRadius ?? 0,
        textBorderColor: currentSegment.textBorderColor || 'transparent',
        textBorderWidth: currentSegment.textBorderWidth ?? 0,
        textBorderOpacity: currentSegment.textBorderOpacity ?? 1.0,
        letterSpacing: currentSegment.letterSpacing ?? 0,
        lineSpacing: currentSegment.lineSpacing ?? 1.2,
      });
      setIsTextEmpty(!text.trim());
      setIsTextToolOpen(true);
    } else {
      setEditingTextSegment(null);
      setIsTextToolOpen(false);
      setIsTextEmpty(false);
    }
  };

  const updateTextSettings = (newSettings) => {
    const trimmedText = newSettings.text?.trim();
    const isEmpty = !trimmedText;
    
    setIsTextEmpty(isEmpty);
    setTextSettings(newSettings);
    
    // Identify the changed property by comparing newSettings with textSettings
    const changedKey = Object.keys(newSettings).find(
      (key) => newSettings[key] !== textSettings[key]
    );
    setChangedTextProperty(changedKey || null);
    
    if (multiSelectedSegments.length > 0 && multiSelectedSegments.every((seg) => seg.type === 'text') && !isEmpty) {
      const updatePayload = changedKey && changedKey !== 'text' ? { [changedKey]: newSettings[changedKey] } : {};
      // Handle multiple text segments
      handleMultiTextUpdate(updatePayload);
    } else if (editingTextSegment && !isEmpty) {
      // Existing single segment update logic
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        const currentSegment = newLayers[editingTextSegment.layer].find(
          (item) => item.id === editingTextSegment.id
        );
    
        if (!currentSegment) {
          console.warn(`Segment with ID ${editingTextSegment.id} not found in videoLayers`);
          return prevLayers;
        }
    
        newLayers[editingTextSegment.layer] = newLayers[editingTextSegment.layer].map((item) =>
          item.id === editingTextSegment.id
            ? {
                ...item,
                text: newSettings.text,
                fontFamily: newSettings.fontFamily,
                fontColor: newSettings.fontColor,
                backgroundColor: newSettings.backgroundColor,
                duration: newSettings.duration,
                timelineEndTime: item.startTime + newSettings.duration,
                alignment: newSettings.alignment,
                backgroundOpacity: newSettings.backgroundOpacity,
                backgroundBorderWidth: newSettings.backgroundBorderWidth,
                backgroundBorderColor: newSettings.backgroundBorderColor,
                backgroundH: newSettings.backgroundH,
                backgroundW: newSettings.backgroundW,
                backgroundBorderRadius: newSettings.backgroundBorderRadius,
                textBorderColor: newSettings.textBorderColor,
                textBorderWidth: newSettings.textBorderWidth,
                textBorderOpacity: newSettings.textBorderOpacity,
                letterSpacing: newSettings.letterSpacing,
                lineSpacing: newSettings.lineSpacing,
                positionX: tempSegmentValues.positionX !== undefined ? tempSegmentValues.positionX : item.positionX,
                positionY: tempSegmentValues.positionY !== undefined ? tempSegmentValues.positionY : item.positionY,
                scale: tempSegmentValues.scale !== undefined ? tempSegmentValues.scale : item.scale,
                opacity: tempSegmentValues.opacity !== undefined ? tempSegmentValues.opacity : item.opacity,
                rotation: tempSegmentValues.rotation !== undefined ? tempSegmentValues.rotation : item.rotation,
                keyframes: keyframes,
              }
            : item
        );
        return newLayers;
      });
    
      setTempSegmentValues((prev) => ({
        ...prev,
        scale: newSettings.scale !== undefined ? newSettings.scale : prev.scale,
      }));
    
      setTotalDuration((prev) => {
        const layer = videoLayers[editingTextSegment.layer];
        const updatedSegment = layer.find((item) => item.id === editingTextSegment.id);
        return Math.max(prev, updatedSegment?.startTime + updatedSegment?.duration || prev);
      });
    
      // Debounced auto-save for text changes only if text is not empty
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      updateTimeoutRef.current = setTimeout(() => {
        handleSaveTextSegment(newSettings, changedKey);
      }, 1000);
    }
  };

const handleSelectSubtitles = () => {
  // Collect all text segments with isSubtitle: true from videoLayers
  const subtitleSegments = videoLayers
    .flat()
    .filter((segment) => segment.type === 'text' && segment.isSubtitle === true);

  // Update multiSelectedSegments with the subtitle segments
  setMultiSelectedSegments(subtitleSegments);

  // If there are subtitle segments, open the text tool and set text settings based on the first subtitle
  if (subtitleSegments.length > 0) {
    const firstSubtitle = subtitleSegments[0];
    setTextSettings({
      text: firstSubtitle.text || 'New Text',
      fontFamily: firstSubtitle.fontFamily || 'Arial',
      fontColor: firstSubtitle.fontColor || '#FFFFFF',
      backgroundColor: firstSubtitle.backgroundColor || 'transparent',
      duration: firstSubtitle.duration || 5,
      alignment: firstSubtitle.alignment || 'center',
      backgroundOpacity: firstSubtitle.backgroundOpacity ?? 1.0,
      backgroundBorderWidth: firstSubtitle.backgroundBorderWidth ?? 0,
      backgroundBorderColor: firstSubtitle.backgroundBorderColor || '#000000',
      backgroundH: firstSubtitle.backgroundH ?? 0,
      backgroundW: firstSubtitle.backgroundW ?? 0,
      backgroundBorderRadius: firstSubtitle.backgroundBorderRadius ?? 0,
      textBorderColor: firstSubtitle.textBorderColor || 'transparent',
      textBorderWidth: firstSubtitle.textBorderWidth ?? 0,
      textBorderOpacity: firstSubtitle.textBorderOpacity ?? 1.0,
      letterSpacing: firstSubtitle.letterSpacing ?? 0,
      lineSpacing: firstSubtitle.lineSpacing ?? 1.2,
      scale: firstSubtitle.scale || 1.0,
      positionX: firstSubtitle.positionX || 0,
      positionY: firstSubtitle.positionY || 0,
      opacity: firstSubtitle.opacity || 1,
      rotation: firstSubtitle.rotation || 0,
    });
    setIsTextToolOpen(true);
    setIsContentPanelOpen(true);
    setExpandedSection('text');
    setSelectedSegment(null); // Clear single selection to focus on multi-selection
  } else {
    // If no subtitles, clear selections and close text tool
    setMultiSelectedSegments([]);
    setSelectedSegment(null);
    setIsTextToolOpen(false);
    setIsContentPanelOpen(false);
    setExpandedSection(null);
  }
};  

const handleMultiTextUpdate = async (newSettings) => {
  if (multiSelectedSegments.length === 0 || !multiSelectedSegments.every((seg) => seg.type === 'text')) {
    return;
  }

  // Skip if no valid settings to update
  if (Object.keys(newSettings).length === 0) {
    return;
  }

  try {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const segmentIds = multiSelectedSegments.map((seg) => seg.id);

    const payload = {
      segmentIds,
      ...newSettings,
      keyframes: keyframes,
      isSubtitle: multiSelectedSegments.map((seg) => seg.isSubtitle || false),
    };

    // Update local state optimistically
    let updatedVideoLayers = videoLayers;
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      multiSelectedSegments.forEach((selectedSegment) => {
        newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
          item.id === selectedSegment.id
            ? {
                ...item,
                ...newSettings, // Apply only the changed property
                keyframes: keyframes,
                isSubtitle: item.isSubtitle || false,
              }
            : item
        );
      });
      updatedVideoLayers = newLayers;
      return newLayers;
    });

    // Update total duration
    setTotalDuration((prev) => {
      let maxEndTime = 0;
      updatedVideoLayers.forEach((layer) => {
        layer.forEach((item) => {
          const endTime = item.startTime + item.duration;
          if (endTime > maxEndTime) maxEndTime = endTime;
        });
      });
      return Math.max(prev, maxEndTime);
    });

    // Save to backend
    await axios.put(
      `${API_BASE_URL}/projects/${projectId}/update-multiple-text`,
      payload,
      { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
    );

    saveHistory();
    await Promise.all(segmentIds.map((id) => fetchKeyframes(id, 'text')));
    await autoSaveProject(updatedVideoLayers, audioLayers);
  } catch (error) {
    console.error('Error updating multiple text segments:', error);
    alert('Failed to update multiple text segments. Please try again.');
  } finally {
    setIsLoading(false);
  }
};  

  const handleSaveTextSegment = async (settings = textSettings, changedProperty = changedTextProperty) => {
    if (!editingTextSegment || !sessionId || !projectId) return;
    const trimmedText = settings.text?.trim();
    if (!trimmedText) {
      setIsTextEmpty(true);
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      const currentSegment = videoLayers[editingTextSegment.layer]?.find(
        (item) => item.id === editingTextSegment.id
      );
  
      if (!currentSegment) {
        console.error(`Segment with ID ${editingTextSegment.id} not found in videoLayers`);
        return;
      }
  
      // Construct payload with required fields and text
      const textPayload = {
        segmentId: editingTextSegment.id,
        text: trimmedText, // Always include text as required by the backend
        timelineStartTime: Number(currentSegment.startTime),
        timelineEndTime: Number(currentSegment.startTime + currentSegment.duration),
        layer: Number(currentSegment.layer),
        keyframes: keyframes,
        isSubtitle: currentSegment.isSubtitle || false,
      };
  
      // Include only the changed property in the payload, if specified
      if (changedProperty && changedProperty !== 'text') {
        textPayload[changedProperty] = settings[changedProperty];
        // Special case for duration to update timelineEndTime
        if (changedProperty === 'duration') {
          textPayload.timelineEndTime = Number(currentSegment.startTime + settings.duration);
        }
      } else if (!changedProperty) {
        // If no specific property changed, include all properties (fallback for initial save or unspecified changes)
        textPayload.fontFamily = settings.fontFamily;
        textPayload.fontColor = settings.fontColor;
        textPayload.backgroundColor = settings.backgroundColor;
        textPayload.alignment = settings.alignment;
        textPayload.backgroundOpacity = settings.backgroundOpacity;
        textPayload.backgroundBorderWidth = settings.backgroundBorderWidth;
        textPayload.backgroundBorderColor = settings.backgroundBorderColor;
        textPayload.backgroundH = settings.backgroundH;
        textPayload.backgroundW = settings.backgroundW;
        textPayload.backgroundBorderRadius = settings.backgroundBorderRadius;
        textPayload.textBorderColor = settings.textBorderColor;
        textPayload.textBorderWidth = settings.textBorderWidth;
        textPayload.textBorderOpacity = settings.textBorderOpacity;
        textPayload.letterSpacing = settings.letterSpacing;
        textPayload.lineSpacing = settings.lineSpacing;
        textPayload.positionX = tempSegmentValues.positionX !== undefined ? tempSegmentValues.positionX : currentSegment.positionX;
        textPayload.positionY = tempSegmentValues.positionY !== undefined ? tempSegmentValues.positionY : currentSegment.positionY;
        textPayload.scale = tempSegmentValues.scale !== undefined ? tempSegmentValues.scale : currentSegment.scale;
        textPayload.opacity = tempSegmentValues.opacity !== undefined ? tempSegmentValues.opacity : currentSegment.opacity;
      }
  
      await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-text`,
        textPayload,
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
  
      let updatedVideoLayers = videoLayers;
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[editingTextSegment.layer] = newLayers[editingTextSegment.layer].map((item) =>
          item.id === editingTextSegment.id
            ? {
                ...item,
                ...(changedProperty ? { [changedProperty]: settings[changedProperty] } : {
                    text: settings.text,
                    fontFamily: settings.fontFamily,
                    fontColor: settings.fontColor,
                    backgroundColor: settings.backgroundColor,
                    duration: settings.duration,
                    timelineEndTime: item.startTime + settings.duration,
                    alignment: settings.alignment,
                    backgroundOpacity: settings.backgroundOpacity,
                    backgroundBorderWidth: settings.backgroundBorderWidth,
                    backgroundBorderColor: settings.backgroundBorderColor,
                    backgroundH: settings.backgroundH,
                    backgroundW: settings.backgroundW,
                    backgroundBorderRadius: settings.backgroundBorderRadius,
                    textBorderColor: settings.textBorderColor,
                    textBorderWidth: settings.textBorderWidth,
                    textBorderOpacity: settings.textBorderOpacity,
                    letterSpacing: settings.letterSpacing,
                    lineSpacing: settings.lineSpacing,
                  }),
                positionX: tempSegmentValues.positionX !== undefined ? tempSegmentValues.positionX : item.positionX,
                positionY: tempSegmentValues.positionY !== undefined ? tempSegmentValues.positionY : item.positionY,
                scale: tempSegmentValues.scale !== undefined ? tempSegmentValues.scale : item.scale,
                opacity: tempSegmentValues.opacity !== undefined ? tempSegmentValues.opacity : item.opacity,
                keyframes: keyframes,
                isSubtitle: item.isSubtitle || false,
              }
            : item
        );
        updatedVideoLayers = newLayers;
        return newLayers;
      });
  
      setSelectedSegment({
        ...currentSegment,
        ...(changedProperty ? { [changedProperty]: settings[changedProperty] } : {
          text: settings.text,
          fontFamily: settings.fontFamily,
          fontColor: settings.fontColor,
          backgroundColor: settings.backgroundColor,
          duration: settings.duration,
          timelineEndTime: currentSegment.startTime + settings.duration,
          alignment: settings.alignment,
          backgroundOpacity: settings.backgroundOpacity,
          backgroundBorderWidth: settings.backgroundBorderWidth,
          backgroundBorderColor: settings.backgroundBorderColor,
          backgroundH: settings.backgroundH,
          backgroundW: settings.backgroundW,
          backgroundBorderRadius: settings.backgroundBorderRadius,
          textBorderColor: settings.textBorderColor,
          textBorderWidth: settings.textBorderWidth,
          textBorderOpacity: settings.textBorderOpacity,
          letterSpacing: settings.letterSpacing,
          lineSpacing: settings.lineSpacing,
        }),
        positionX: tempSegmentValues.positionX !== undefined ? tempSegmentValues.positionX : currentSegment.positionX,
        positionY: tempSegmentValues.positionY !== undefined ? tempSegmentValues.positionY : currentSegment.positionY,
        scale: tempSegmentValues.scale !== undefined ? tempSegmentValues.scale : currentSegment.scale,
        opacity: tempSegmentValues.opacity !== undefined ? tempSegmentValues.opacity : currentSegment.opacity,
        keyframes: keyframes,
        isSubtitle: currentSegment.isSubtitle || false,
      });
  
      setEditingTextSegment({
        ...currentSegment,
        ...(changedProperty ? { [changedProperty]: settings[changedProperty] } : {
          text: settings.text,
          fontFamily: settings.fontFamily,
          fontColor: settings.fontColor,
          backgroundColor: settings.backgroundColor,
          duration: settings.duration,
          timelineEndTime: currentSegment.startTime + settings.duration,
          alignment: settings.alignment,
          backgroundOpacity: settings.backgroundOpacity,
          backgroundBorderWidth: settings.backgroundBorderWidth,
          backgroundBorderColor: settings.backgroundBorderColor,
          backgroundH: settings.backgroundH,
          backgroundW: settings.backgroundW,
          backgroundBorderRadius: settings.backgroundBorderRadius,
          textBorderColor: settings.textBorderColor,
          textBorderWidth: settings.textBorderWidth,
          textBorderOpacity: settings.textBorderOpacity,
          letterSpacing: settings.letterSpacing,
          lineSpacing: settings.lineSpacing,
        }),
        positionX: tempSegmentValues.positionX !== undefined ? tempSegmentValues.positionX : currentSegment.positionX,
        positionY: tempSegmentValues.positionY !== undefined ? tempSegmentValues.positionY : currentSegment.positionY,
        scale: tempSegmentValues.scale !== undefined ? tempSegmentValues.scale : currentSegment.scale,
        opacity: tempSegmentValues.opacity !== undefined ? tempSegmentValues.opacity : currentSegment.opacity,
        keyframes: keyframes,
        isSubtitle: currentSegment.isSubtitle || false,
      });
  
      saveHistory();
      await fetchKeyframes(editingTextSegment.id, 'text');
    } catch (error) {
      console.error('Error saving text segment:', error);
      alert('Failed to save text segment. Please try again.');
    }
  };

  const openTextTool = async () => {
    if (!sessionId || !projectId) return;
    try {
      setIsAddingToTimeline(true);
      const token = localStorage.getItem('token');
      let startTime = currentTime;
      if (videoLayers[0].length > 0) {
        const lastSegment = videoLayers[0][videoLayers[0].length - 1];
        startTime = Math.max(startTime, lastSegment.startTime + lastSegment.duration);
      }
      const duration = textSettings.duration;

      // Create temporary segment with UUID
      const tempSegmentId = `temp-${uuidv4()}`;
      const tempSegment = {
        id: tempSegmentId,
        type: 'text',
        text: textSettings.text,
        startTime: roundToThreeDecimals(startTime),
        duration: duration,
        layer: 0,
        fontFamily: textSettings.fontFamily,
        scale: textSettings.scale || 1.0,
        rotation: 0, // Add rotation
        fontColor: textSettings.fontColor,
        backgroundColor: textSettings.backgroundColor,
        positionX: 0,
        positionY: 0,
        alignment: textSettings.alignment,
        backgroundOpacity: textSettings.backgroundOpacity,
        backgroundBorderWidth: textSettings.backgroundBorderWidth,
        backgroundBorderColor: textSettings.backgroundBorderColor,
        backgroundH: textSettings.backgroundH,
        backgroundW: textSettings.backgroundW,
        backgroundBorderRadius: textSettings.backgroundBorderRadius,
        textBorderColor: textSettings.textBorderColor, // Added
        textBorderWidth: textSettings.textBorderWidth, // Added
        textBorderOpacity: textSettings.textBorderOpacity, // Added
        letterSpacing: textSettings.letterSpacing, // Added
        lineSpacing: textSettings.lineSpacing, // Added
        keyframes: {},
        isSubtitle: false,
      };

      // Add temporary segment to videoLayers for instant rendering
      let updatedVideoLayers = videoLayers;
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[0] = [...(newLayers[0] || []), tempSegment];
        updatedVideoLayers = newLayers;
        return newLayers;
      });

      // Make API call
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-text`,
        {
          text: textSettings.text,
          layer: 0,
          timelineStartTime: roundToThreeDecimals(startTime),
          timelineEndTime: roundToThreeDecimals(startTime + duration),
          fontFamily: textSettings.fontFamily,
          scale: textSettings.scale || 1.0,
          fontColor: textSettings.fontColor,
          backgroundColor: textSettings.backgroundColor,
          positionX: 0,
          positionY: 0,
          alignment: textSettings.alignment,
          backgroundOpacity: textSettings.backgroundOpacity,
          backgroundBorderWidth: textSettings.backgroundBorderWidth,
          backgroundBorderColor: textSettings.backgroundBorderColor,
          backgroundH: textSettings.backgroundH,
          backgroundW: textSettings.backgroundW,
          backgroundBorderRadius: textSettings.backgroundBorderRadius,
          textBorderColor: textSettings.textBorderColor, // Added
          textBorderWidth: textSettings.textBorderWidth, // Added
          textBorderOpacity: textSettings.textBorderOpacity, // Added
          letterSpacing: textSettings.letterSpacing, // Added
          lineSpacing: textSettings.lineSpacing, // Added
          isSubtitle: false,
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );

      const newTextSegment = response.data;

      // Validate response
      if (!newTextSegment.textSegmentId) {
        throw new Error('Backend did not return textSegmentId');
      }

      // Update temporary segment with backend data
      const updatedSegment = {
        id: newTextSegment.textSegmentId,
        type: 'text',
        text: newTextSegment.text,
        startTime: roundToThreeDecimals(newTextSegment.timelineStartTime),
        duration: roundToThreeDecimals(newTextSegment.timelineEndTime - newTextSegment.timelineStartTime),
        layer: newTextSegment.layer,
        fontFamily: newTextSegment.fontFamily,
        scale: newTextSegment.scale || 1.0,
        rotation: newTextSegment.rotation || 0, // Add rotation
        fontColor: newTextSegment.fontColor,
        backgroundColor: newTextSegment.backgroundColor,
        positionX: newTextSegment.positionX || 0,
        positionY: newTextSegment.positionY || 0,
        alignment: newTextSegment.alignment,
        backgroundOpacity: newTextSegment.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: newTextSegment.backgroundBorderWidth ?? 0,
        backgroundBorderColor: newTextSegment.backgroundBorderColor || '#000000',
        backgroundH: newTextSegment.backgroundH ?? 0,
        backgroundW: newTextSegment.backgroundW ?? 0,
        backgroundBorderRadius: newTextSegment.backgroundBorderRadius ?? 0,
        textBorderColor: newTextSegment.textBorderColor || 'transparent', // Added
        textBorderWidth: newTextSegment.textBorderWidth ?? 0, // Added
        textBorderOpacity: newTextSegment.textBorderOpacity ?? 1.0, // Added
        letterSpacing: newTextSegment.letterSpacing ?? 0, // Added
        lineSpacing: newTextSegment.lineSpacing ?? 1.2, // Added
        keyframes: newTextSegment.keyframes || {},
        isSubtitle: newTextSegment.isSubtitle || false,
      };

      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[0] = newLayers[0].map((item) =>
          item.id === tempSegmentId ? updatedSegment : item
        );
        updatedVideoLayers = newLayers;
        return newLayers;
      });

      setTotalDuration((prev) => Math.max(prev, startTime + duration));
      setSelectedSegment(updatedSegment);
      setEditingTextSegment(updatedSegment);
      setTextSettings({
        text: updatedSegment.text,
        fontFamily: updatedSegment.fontFamily,
        scale: updatedSegment.scale,
        fontColor: updatedSegment.fontColor,
        backgroundColor: updatedSegment.backgroundColor,
        duration: updatedSegment.duration,
        alignment: updatedSegment.alignment,
        backgroundOpacity: updatedSegment.backgroundOpacity,
        backgroundBorderWidth: updatedSegment.backgroundBorderWidth,
        backgroundBorderColor: updatedSegment.backgroundBorderColor,
        backgroundH: updatedSegment.backgroundH,
        backgroundW: updatedSegment.backgroundW,
        backgroundBorderRadius: updatedSegment.backgroundBorderRadius,
        textBorderColor: updatedSegment.textBorderColor, // Added
        textBorderWidth: updatedSegment.textBorderWidth, // Added
        textBorderOpacity: updatedSegment.textBorderOpacity, // Added
        letterSpacing: updatedSegment.letterSpacing, // Added
        lineSpacing: updatedSegment.lineSpacing, // Added
      });
      setIsTextToolOpen(true);
      saveHistory();

      // Auto-save the project with updated videoLayers
      autoSaveProject(updatedVideoLayers, audioLayers);
    } catch (error) {
      console.error('Error adding text to timeline:', error);
      alert('Failed to add text to timeline. Please try again.');
    } finally {
      setIsAddingToTimeline(false);
    }
  };

const initializeProject = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/', { state: { error: 'Please log in to access the project.' } });
      return;
    }

    const project = await fetchProjectResources();

    const sessionResponse = await axios.post(
      `${API_BASE_URL}/projects/${projectId}/session`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setSessionId(sessionResponse.data);

    await fetchTransitions();

    if (project.width && project.height) {
      setCanvasDimensions({ width: project.width, height: project.height });
    }
    if (project.fps) {
      setProjectFps(project.fps);
    }

    if (project && project.timelineState) {
      let timelineState =
        typeof project.timelineState === 'string' ? JSON.parse(project.timelineState) : project.timelineState;
      const newVideoLayers = [[], [], []];
      const newAudioLayers = [[], [], []];

      const filterMap = {};
      (timelineState.filters || []).forEach((filter) => {
        if (!filterMap[filter.segmentId]) {
          filterMap[filter.segmentId] = [];
        }
        filterMap[filter.segmentId].push(filter);
      });

      if (timelineState.segments && timelineState.segments.length > 0) {
        for (const segment of timelineState.segments) {
          const layerIndex = segment.layer || 0;
          if (layerIndex < 0) continue;
          if (layerIndex >= newVideoLayers.length) {
            while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
          }
          if (segment.sourceVideoPath) {
            let videoFileName = segment.sourceVideoPath.split('/').pop();
            let video = videos.find((v) => v.fileName === videoFileName);
            if (video) {
              const thumbnail = await generateVideoThumbnail(video);
              const filters = filterMap[segment.id] || [];
              newVideoLayers[layerIndex].push({
                ...video,
                type: 'video',
                id: segment.id,
                startTime: segment.timelineStartTime || 0,
                duration: (segment.timelineEndTime - segment.timelineStartTime) || 0,
                layer: layerIndex,
                filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(videoFileName)}`,
                positionX: segment.positionX ?? 0,
                positionY: segment.positionY ?? 0,
                scale: segment.scale ?? 1,
                rotation: segment.rotation ?? 0,
                startTimeWithinVideo: segment.startTime || 0,
                endTimeWithinVideo: segment.endTime || 0,
                thumbnail,
                keyframes: segment.keyframes || {},
                filters,
                cropL: segment.cropL ?? 0,
                cropR: segment.cropR ?? 0,
                cropT: segment.cropT ?? 0,
                cropB: segment.cropB ?? 0,
                opacity: segment.opacity ?? 1,
                speed: segment.speed ?? 1.0,
              });
            }
          }
        }
      }

      if (timelineState.imageSegments && timelineState.imageSegments.length > 0) {
        for (const imageSegment of timelineState.imageSegments) {
          const layerIndex = imageSegment.layer || 0;
          if (layerIndex < 0) continue;
          if (layerIndex >= newVideoLayers.length) {
            while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
          }
          const filename = imageSegment.imagePath.split('/').pop();
          const isElement = imageSegment.element || false;
          const filePath = isElement
            ? `${CDN_URL}/elements/${encodeURIComponent(filename)}`
            : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename)}`;
          const thumbnail = await generateImageThumbnail(imageSegment.imagePath, isElement);
          const filters = filterMap[imageSegment.id] || [];
          newVideoLayers[layerIndex].push({
            id: imageSegment.id,
            type: 'image',
            fileName: filename,
            filePath,
            thumbnail,
            startTime: imageSegment.timelineStartTime || 0,
            duration: (imageSegment.timelineEndTime - imageSegment.timelineStartTime) || 5,
            layer: layerIndex,
            positionX: imageSegment.positionX || 0,
            positionY: imageSegment.positionY || 0,
            scale: imageSegment.scale || 1,
            rotation: imageSegment.rotation || 0,
            opacity: imageSegment.opacity || 1.0,
            width: imageSegment.width,
            height: imageSegment.height,
            effectiveWidth: imageSegment.effectiveWidth,
            effectiveHeight: imageSegment.effectiveHeight,
            maintainAspectRatio: imageSegment.maintainAspectRatio,
            isElement,
            keyframes: imageSegment.keyframes || {},
            filters,
            cropL: imageSegment.cropL ?? 0,
            cropR: imageSegment.cropR ?? 0,
            cropT: imageSegment.cropT ?? 0,
            cropB: imageSegment.cropB ?? 0,
          });
        }
      }

      if (timelineState.textSegments && timelineState.textSegments.length > 0) {
        for (const textSegment of timelineState.textSegments) {
          const layerIndex = textSegment.layer || 0;
          if (layerIndex < 0) continue;
          if (layerIndex >= newVideoLayers.length) {
            while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
          }
          const text = textSegment.text?.trim() || 'Default Text';
          newVideoLayers[layerIndex].push({
            id: textSegment.id,
            type: 'text',
            text: text,
            startTime: textSegment.timelineStartTime || 0,
            duration: (textSegment.timelineEndTime - textSegment.timelineStartTime) || 0,
            layer: layerIndex,
            fontFamily: textSegment.fontFamily || 'Arial',
            scale: textSegment.scale || 1.0,
            rotation: textSegment.rotation || 0,
            fontColor: textSegment.fontColor || '#FFFFFF',
            backgroundColor: textSegment.backgroundColor || 'transparent',
            positionX: textSegment.positionX || 0,
            positionY: textSegment.positionY || 0,
            alignment: textSegment.alignment || 'center',
            backgroundOpacity: textSegment.backgroundOpacity ?? 1.0,
            backgroundBorderWidth: textSegment.backgroundBorderWidth ?? 0,
            backgroundBorderColor: textSegment.backgroundBorderColor || '#000000',
            backgroundH: textSegment.backgroundH ?? 0,
            backgroundW: textSegment.backgroundW ?? 0,
            backgroundBorderRadius: textSegment.backgroundBorderRadius ?? 0,
            textBorderColor: textSegment.textBorderColor || 'transparent',
            textBorderWidth: textSegment.textBorderWidth ?? 0,
            textBorderOpacity: textSegment.textBorderOpacity ?? 1.0,
            letterSpacing: textSegment.letterSpacing ?? 0,
            lineSpacing: textSegment.lineSpacing ?? 1.2,
            keyframes: textSegment.keyframes || {},
            opacity: textSegment.opacity || 1,
            isSubtitle: textSegment.isSubtitle || false,
          });
        }
      }

      if (timelineState.audioSegments && timelineState.audioSegments.length > 0) {
        for (const audioSegment of timelineState.audioSegments) {
          const backendLayer = audioSegment.layer || -1;
          const layerIndex = Math.abs(backendLayer) - 1;
          if (layerIndex >= newAudioLayers.length) {
            while (newAudioLayers.length <= layerIndex) newAudioLayers.push([]);
          }
          const filename = audioSegment.audioFileName || audioSegment.audioPath.split('/').pop();
          const extracted = audioSegment.extracted || false;
          const audioUrl = extracted
            ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(filename)}`
            : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(filename)}`;
          const waveformJsonPath = audioSegment.waveformJsonPath
            ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
            : null;
          const sanitizedId = audioSegment.id.replace(/[^a-zA-Z0-9]/g, '-');
          newAudioLayers[layerIndex].push({
            id: sanitizedId,
            type: 'audio',
            fileName: filename,
            url: audioUrl,
            startTime: audioSegment.timelineStartTime || 0,
            duration: (audioSegment.timelineEndTime - audioSegment.timelineStartTime) || 0,
            timelineStartTime: audioSegment.timelineStartTime || 0,
            timelineEndTime: audioSegment.timelineEndTime || 0,
            layer: backendLayer,
            startTimeWithinAudio: audioSegment.startTime || 0,
            endTimeWithinAudio: audioSegment.endTime || (audioSegment.timelineEndTime - audioSegment.timelineStartTime) || 0,
            displayName: filename,
            waveformJsonPath: waveformJsonPath,
            volume: audioSegment.volume || 1.0,
            keyframes: audioSegment.keyframes || {},
            extracted,
          });
        }
      }

      setVideoLayers(newVideoLayers);
      setAudioLayers(newAudioLayers);
      let maxEndTime = 0;
      [...newVideoLayers, ...newAudioLayers].forEach((layer) => {
        layer.forEach((item) => {
          const endTime = item.startTime + item.duration;
          if (endTime > maxEndTime) maxEndTime = endTime;
        });
      });
      setTotalDuration(maxEndTime > 0 ? maxEndTime : 0);

      if (timelineState.textSegments?.some((s) => !s.text?.trim())) {
        autoSaveProject(newVideoLayers, newAudioLayers);
      }
    }
  } catch (error) {
    console.error('Error initializing project:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      router.push('/?error=Session expired. Please log in again.');
    } else if (error.response?.status === 403 || error.response?.status === 404) {
      window.location.href = 'https://scenith.in/dashboard';
    } else {
      window.location.href = 'https://scenith.in/dashboard';
    }
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (!projectId) {
    window.location.href = 'https://scenith.in/dashboard';
    setLoading(false);
    return;
  }

  initializeProject();
}, [projectId, router]);

  useEffect(() => {
    if (!projectId || !sessionId) {
      console.warn('Auto-save skipped: Missing projectId or sessionId');
      return;
    }
  
    const debouncedAutoSave = debounce(async () => {
      try {
        await autoSaveProject(videoLayers, audioLayers);
        console.log('Auto-save completed successfully');
      } catch (error) {
        console.error('Auto-save failed:', error);
        alert('Failed to auto-save project. Please try saving manually.');
      }
    }, 1000);
  
    debouncedAutoSave();
  
    return () => {
      debouncedAutoSave.cancel();
    };
  }, [videoLayers, audioLayers, transitions, keyframes, filterParams, appliedFilters, textSettings, projectId, sessionId]); 

  useEffect(() => {
    if (location.state?.error) {
      const timer = setTimeout(() => {
        window.location.href = 'https://scenith.in/dashboard';
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleTransitionDragStart = (e, transition) => {
    const dragData = {
      type: 'transition',
      transition: {
        type: transition.type,
        duration: 1,
        label: transition.label,
      },
    };
    e.dataTransfer.setData('application/json', JSON.stringify(dragData));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleTransitionDrop = async (segmentId, start, end, layer, timelinePosition, transitionType) => {
    if (!sessionId || !projectId || !transitionType || !segmentId) {
      console.error('Missing required parameters for transition drop:', {
        sessionId,
        projectId,
        transitionType,
        segmentId,
      });
      return;
    }
    try {
      const token = localStorage.getItem('token');
      let parameters = {};
      if (transitionType === 'Zoom') {
        parameters.direction = 'in';
      }  else if (transitionType === 'Slide') {
        parameters.direction = 'right';
      }
      const payload = {
        type: transitionType,
        duration: 1,
        segmentId,
        start,
        end,
        layer,
        parameters,
      };
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-transition`,
        payload,
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
      const newTransition = response.data;
      setTransitions((prev) => [...prev, newTransition]);
      await fetchTransitions();
      saveHistory();

      if (transitionSaveTimeoutRef.current) clearTimeout(transitionSaveTimeoutRef.current);
      transitionSaveTimeoutRef.current = setTimeout(() => {
        autoSaveProject(videoLayers, audioLayers);
      }, 1000);

    } catch (error) {
      console.error('Error adding transition:', error.response?.data || error.message);
      alert('Failed to add transition. Please try again.');
    }
  };

const handleVideoUpload = async (event) => {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  if (userRole === 'BASIC') {
    if (videos.length >= 15) {
      setVideoUploadError('Basic users are limited to uploading a maximum of 15 videos. Upgrade to a premium plan to upload more.');
      setTimeout(() => setVideoUploadError(''), 5000);
      return;
    }
    if (videos.length + files.length > 15) {
      setVideoUploadError(`Basic users can only upload up to 15 videos. You can upload ${15 - videos.length} more video(s).`);
      setTimeout(() => setVideoUploadError(''), 5000);
      return;
    }
  }

  const formData = new FormData();
  files.forEach((file) => {
    formData.append('video', file);
    formData.append('videoFileNames', file.name);
  });

  try {
    setUploading(true);
    setPendingUploads(new Set(files.map((file) => file.name)));
    setUploadProgress(files.reduce((acc, file) => ({ ...acc, [file.name]: 0 }), {}));

    const token = localStorage.getItem('token');
    await axios.post(
      `${API_BASE_URL}/projects/${projectId}/upload-video`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total || 1;
          const loaded = progressEvent.loaded;
          const percentCompleted = Math.round((loaded * 100) / total);
          setUploadProgress((prev) => {
            const updatedProgress = { ...prev };
            files.forEach((file) => {
              updatedProgress[file.name] = percentCompleted;
            });
            return updatedProgress;
          });
        },
      }
    );

    await fetchProjectResources();

    setThumbnailsGenerated(true);
  } catch (error) {
    console.error('Error uploading video:', error.response?.data || error.message);
    setVideoUploadError('Failed to upload video(s). Please try again.');
    setTimeout(() => setVideoUploadError(''), 5000);
  } finally {
    setUploading(false);
    setUploadProgress({});
    setPendingUploads(new Set());
  }
};

const fetchProjectResources = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found in localStorage');
    }

    const response = await axios.get(`${API_BASE_URL}/projects/${projectId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const project = response.data;

    // Process Videos
    let updatedVideos = [];
    if (project.videosJson) {
      let videoFiles = typeof project.videosJson === 'string' ? JSON.parse(project.videosJson) : project.videosJson;
      if (Array.isArray(videoFiles)) {
        updatedVideos = await Promise.all(
          videoFiles.map(async (video) => {
            const fullFileName = video.videoPath.split('/').pop();
            const originalFileName = fullFileName.replace(`${projectId}_`, '').replace(/^\d+_/, '');
            const sanitizedId = `video-${fullFileName.replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}`;
            let duration = video.duration;
            if (!duration) {
              try {
                const durationResponse = await axios.get(
                  `${API_BASE_URL}/projects/${projectId}/video-duration/${encodeURIComponent(fullFileName)}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                duration = durationResponse.data;
              } catch (error) {
                console.error(`Error fetching duration for video ${fullFileName}:`, error);
                duration = 5; // Fallback duration
              }
            }
            return {
              id: sanitizedId,
              fileName: fullFileName,
              displayName: originalFileName,
              filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(fullFileName)}`,
              duration: duration,
              audioPath: video.audioPath
                ? `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(video.audioPath.split('/').pop())}`
                : null,
              waveformJsonPath: video.waveformJsonPath
                ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(video.waveformJsonPath.split('/').pop())}`
                : null,
            };
          })
        );
        await Promise.all(updatedVideos.map((video) => generateVideoThumbnail(video)));
        setThumbnailsGenerated(true);
      }
    }
    setVideos(updatedVideos);

    // Process Photos
    let updatedPhotos = [];
    if (project.imagesJson) {
      let imageFiles = typeof project.imagesJson === 'string' ? JSON.parse(project.imagesJson) : project.imagesJson;
      if (Array.isArray(imageFiles)) {
        imageFiles = imageFiles.filter(image => !image.isElement);
        updatedPhotos = await Promise.all(
          imageFiles.map(async (image) => {
            const fullFileName = image.imagePath.split('/').pop();
            const originalFileName = fullFileName.replace(`${projectId}_`, '').replace(/^\d+_/, '');
            const thumbnail = await generateImageThumbnail(fullFileName, false);
            return {
              id: image.imagePath || `image-${fullFileName}-${Date.now()}`,
              fileName: fullFileName,
              displayName: originalFileName,
              filePath: `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(fullFileName)}`,
              thumbnail,
            };
          })
        );
      }
    }
    setPhotos(updatedPhotos);

    // Process Audios
    let updatedAudios = [];
    if (project.audioJson) {
      let audioFiles = typeof project.audioJson === 'string' ? JSON.parse(project.audioJson) : project.audioJson;
      if (Array.isArray(audioFiles)) {
        updatedAudios = audioFiles.map((audio) => {
          const fullFileName = audio.audioPath.split('/').pop();
          const originalFileName = fullFileName.replace(`${projectId}_`, '').replace(/^\d+_/, '');
          const sanitizedId = `audio-${fullFileName.replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}`;
          return {
            id: sanitizedId,
            fileName: fullFileName,
            displayName: originalFileName,
            audioPath: `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(fullFileName)}`,
            waveformJsonPath: audio.waveformJsonPath
              ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audio.waveformJsonPath.split('/').pop())}`
              : null,
          };
        });
      }
    }
    setAudios(updatedAudios);

    // Process Elements
    const elementsResponse = await axios.get(`${API_BASE_URL}/api/global-elements`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const updatedElements = elementsResponse.data
      .filter((element) => element.fileName && typeof element.fileName === 'string')
      .map((element) => ({
        id: element.id || `element-${element.fileName || 'unknown'}-${Date.now()}`,
        fileName: element.fileName || 'unknown.png',
        displayName: element.fileName || 'Untitled Element',
        filePath: `${CDN_URL}/elements/${encodeURIComponent(element.fileName || 'unknown.png')}`,
        thumbnail: `${CDN_URL}/elements/${encodeURIComponent(element.fileName || 'unknown.png')}`,
      }));
    setElements(updatedElements);

    return project;
  } catch (error) {
    console.error('Error fetching project resources:', error);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userProfile');
      router.push('/?error=Session expired. Please log in again.');
    } else if (error.response?.status === 403 || error.response?.status === 404) {
      window.location.href = 'https://scenith.in/dashboard';
    } else {
      setVideos([]);
      setPhotos([]);
      setAudios([]);
      setElements([]);
    }
    throw error;
  }
};

const handleAudioUpload = async (event) => {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  const formData = new FormData();
  files.forEach((file) => {
    formData.append('audio', file);
    formData.append('audioFileNames', file.name);
  });

  try {
    setUploading(true);
    setPendingUploads(new Set(files.map((file) => file.name)));
    setUploadProgress(files.reduce((acc, file) => ({ ...acc, [file.name]: 0 }), {}));

    const token = localStorage.getItem('token');
    await axios.post(
      `${API_BASE_URL}/projects/${projectId}/upload-audio`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total || 1;
          const loaded = progressEvent.loaded;
          const percentCompleted = Math.round((loaded * 100) / total);
          files.forEach((file) => {
            setUploadProgress((prev) => ({
              ...prev,
              [file.name]: percentCompleted,
            }));
          });
        },
      }
    );

    // Refresh all resources using fetchProjectResources
    await fetchProjectResources();
  } catch (error) {
    console.error('Error uploading audio files:', error);
    alert('Failed to upload one or more audio files. Please try again.');
  } finally {
    setUploading(false);
    setUploadProgress({});
    setPendingUploads(new Set());
  }
};

const generateVideoThumbnail = async (video) => {
  if (!video || !video.fileName) return;
  if (video.thumbnail) return;
  const path = video.fileName; // fileName is the filename from videosJson
  const videoUrl = `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(path)}`;
  try {
    const videoElement = document.createElement('video');
    videoElement.crossOrigin = 'anonymous';
    videoElement.src = videoUrl;
    await new Promise((resolve, reject) => {
      videoElement.onloadeddata = resolve;
      videoElement.onerror = reject;
      setTimeout(resolve, 5000);
    });
    const seekTime = Math.min(1, (video.duration || 0) * 0.25);
    videoElement.currentTime = seekTime;
    await new Promise((resolve) => {
      videoElement.onseeked = resolve;
      setTimeout(resolve, 2000);
    });
    const canvas = document.createElement('canvas');
    canvas.width = 120;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const thumbnail = canvas.toDataURL('image/jpeg');
    video.thumbnail = thumbnail;
    setVideos((prevVideos) =>
      prevVideos.map((v) =>
        v.fileName === video.fileName ? { ...v, thumbnail } : v
      )
    );
  } catch (error) {
    console.error('Error creating thumbnail for video:', path, error);
  }
};

  const generateImageThumbnail = async (imagePath, isElement = false) => {
    const filename = imagePath.split('/').pop();
    const fullImagePath = isElement ? `${CDN_URL}/elements/${encodeURIComponent(filename)}` 
    : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename)}`;
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = fullImagePath;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const maxWidth = 120;
        const maxHeight = 80;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const thumbnail = canvas.toDataURL('image/jpeg');
        resolve(thumbnail);
      };
      img.onerror = () => {
        console.error(`Failed to load image for thumbnail: ${fullImagePath}`);
        resolve(null);
      };
    });
  };

  const handleSaveProject = async () => {
    if (!projectId || !sessionId) return;
    try {
      setIsSaving(true);
      const token = localStorage.getItem('token');
      await axios.post(
        `${API_BASE_URL}/projects/${projectId}/save`,
        {},
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error('Error saving project:', error);
    } finally{
      setIsSaving(false);
    }
  };

  const handleExportProject = debounce(() => {
  if (!projectId || !sessionId) {
    alert('Cannot export: Missing project ID or session ID');
    return;
  }
  router.push(`/export/${projectId}`, { state: { sessionId } });
}, 300);

  const handleMediaDragStart = (e, media, type) => {
  const mediaId = media.id || `media-${media.fileName || media.displayName}-${Date.now()}`;
  const dragData = {
    type: type,
    isDragOperation: true,
    [type === 'media' ? 'video' : type === 'photo' ? 'photo' : type === 'audio' ? 'audio' : 'element']: {
      id: mediaId,
      filePath: type === 'media' ? `videos/projects/${projectId}/${media.fileName}` : undefined,
      fileName: type === 'audio' || type === 'photo' || type === 'element' ? media.fileName : media.fileName,
      displayPath: media.displayName || media.fileName?.split('/').pop(),
      duration: media.duration || 5,
      thumbnail: media.thumbnail || (type === 'photo' || type === 'element' ? media.filePath : undefined),
    },
  };
  const jsonString = JSON.stringify(dragData);
  e.dataTransfer.setData('application/json', jsonString);
  e.dataTransfer.setData('text/plain', jsonString);
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'copyMove';
};

  const handleTextStyleDragStart = (e, style) => {
    const dragData = {
      type: 'textStyle',
      textStyle: {
        ...style,
        id: `text-style-${Date.now()}`,
      },
    };
    e.dataTransfer.setData('application/json', JSON.stringify(dragData));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleTextStyleClick = async (style) => {
    if (!sessionId || !projectId || uploading) return;
    try {
      setIsAddingToTimeline(true);
      const token = localStorage.getItem('token');
      let startTime = roundToThreeDecimals(currentTime);
      let maxEndTime = 0;
      videoLayers.forEach((layer) => {
        layer.forEach((segment) => {
          const segmentEndTime = segment.startTime + segment.duration;
          if (segmentEndTime > maxEndTime) maxEndTime = segmentEndTime;
        });
      });
      startTime = Math.max(startTime, maxEndTime);

      const duration = style.duration || 5;

      // Create temporary segment with UUID
      const tempSegmentId = `temp-${uuidv4()}`;
      const tempSegment = {
        id: tempSegmentId,
        type: 'text',
        text: style.text,
        startTime: roundToThreeDecimals(startTime),
        duration: duration,
        layer: 0,
        fontFamily: style.fontFamily || 'Arial',
        scale: style.scale || 1.0,
        fontColor: style.fontColor || '#FFFFFF',
        backgroundColor: style.backgroundColor || 'transparent',
        positionX: style.positionX || 0,
        positionY: style.positionY || 0,
        alignment: style.alignment || 'center',
        backgroundOpacity: style.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: style.backgroundBorderWidth ?? 0,
        backgroundBorderColor: style.backgroundBorderColor || '#000000',
        backgroundH: style.backgroundH ?? 0,
        backgroundW: style.backgroundW ?? 0,
        backgroundBorderRadius: style.backgroundBorderRadius ?? 0,
        textBorderColor: style.textBorderColor || 'transparent', // Added
        textBorderWidth: style.textBorderWidth ?? 0, // Added
        textBorderOpacity: style.textBorderOpacity ?? 1.0, // Added
        letterSpacing: style.letterSpacing ?? 0, // Added
        lineSpacing: style.lineSpacing ?? 1.2, // Added
        keyframes: {},
        isSubtitle: false,
      };

      // Add temporary segment to videoLayers
      let updatedVideoLayers = videoLayers;
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[0] = [...(newLayers[0] || []), tempSegment];
        updatedVideoLayers = newLayers;
        return newLayers;
      });

      // Make API call
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-text`,
        {
          text: style.text,
          layer: 0,
          timelineStartTime: roundToThreeDecimals(startTime),
          timelineEndTime: roundToThreeDecimals(startTime + duration),
          fontFamily: style.fontFamily || 'Arial',
          scale: style.scale || 1.0,
          fontColor: style.fontColor || '#FFFFFF',
          backgroundColor: style.backgroundColor || 'transparent',
          positionX: style.positionX || 0,
          positionY: style.positionY || 0,
          alignment: style.alignment || 'center',
          backgroundOpacity: style.backgroundOpacity ?? 1.0,
          backgroundBorderWidth: style.backgroundBorderWidth ?? 0,
          backgroundBorderColor: style.backgroundBorderColor || '#000000',
          backgroundH: style.backgroundH ?? 0,
          backgroundW: style.backgroundW ?? 0,
          backgroundBorderRadius: style.backgroundBorderRadius ?? 0,
          textBorderColor: style.textBorderColor || 'transparent', // Added
          textBorderWidth: style.textBorderWidth ?? 0, // Added
          textBorderOpacity: style.textBorderOpacity ?? 1.0, // Added
          letterSpacing: style.letterSpacing ?? 0, // Added
          lineSpacing: style.lineSpacing ?? 1.2, // Added
          isSubtitle: false,
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );

      const newTextSegment = response.data;

      // Validate response
      if (!newTextSegment.textSegmentId) {
        throw new Error('Backend did not return textSegmentId');
      }

      // Update temporary segment with backend data
      const updatedSegment = {
        id: newTextSegment.textSegmentId,
        type: 'text',
        text: newTextSegment.text,
        startTime: roundToThreeDecimals(newTextSegment.timelineStartTime),
        duration: roundToThreeDecimals(newTextSegment.timelineEndTime - newTextSegment.timelineStartTime),
        layer: newTextSegment.layer,
        fontFamily: newTextSegment.fontFamily,
        scale: newTextSegment.scale || 1.0,
        fontColor: newTextSegment.fontColor,
        backgroundColor: newTextSegment.backgroundColor,
        positionX: newTextSegment.positionX || 0,
        positionY: newTextSegment.positionY || 0,
        alignment: newTextSegment.alignment,
        backgroundOpacity: newTextSegment.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: newTextSegment.backgroundBorderWidth ?? 0,
        backgroundBorderColor: newTextSegment.backgroundBorderColor || '#000000',
        backgroundH: newTextSegment.backgroundH ?? 0,
        backgroundW: newTextSegment.backgroundW ?? 0,
        backgroundBorderRadius: newTextSegment.backgroundBorderRadius ?? 0,
        textBorderColor: newTextSegment.textBorderColor || 'transparent', // Added
        textBorderWidth: newTextSegment.textBorderWidth ?? 0, // Added
        textBorderOpacity: newTextSegment.textBorderOpacity ?? 1.0, // Added
        letterSpacing: newTextSegment.letterSpacing ?? 0, // Added
        lineSpacing: newTextSegment.lineSpacing ?? 1.2, // Added
        keyframes: newTextSegment.keyframes || {},
        isSubtitle: newTextSegment.isSubtitle || false,
      };

      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[0] = newLayers[0].map((item) =>
          item.id === tempSegmentId ? updatedSegment : item
        );
        updatedVideoLayers = newLayers;
        return newLayers;
      });

      setTotalDuration((prev) => Math.max(prev, startTime + duration));
      setSelectedSegment(updatedSegment);
      setEditingTextSegment(updatedSegment);
      setTextSettings({
        text: updatedSegment.text,
        fontFamily: updatedSegment.fontFamily,
        scale: updatedSegment.scale,
        fontColor: updatedSegment.fontColor,
        backgroundColor: updatedSegment.backgroundColor,
        duration: updatedSegment.duration,
        alignment: updatedSegment.alignment,
        backgroundOpacity: updatedSegment.backgroundOpacity,
        backgroundBorderWidth: updatedSegment.backgroundBorderWidth,
        backgroundBorderColor: updatedSegment.backgroundBorderColor,
        backgroundH: updatedSegment.backgroundH,
        backgroundW: updatedSegment.backgroundW,
        backgroundBorderRadius: updatedSegment.backgroundBorderRadius,
        textBorderColor: updatedSegment.textBorderColor, // Added
        textBorderWidth: updatedSegment.textBorderWidth, // Added
        textBorderOpacity: updatedSegment.textBorderOpacity, // Added
        letterSpacing: updatedSegment.letterSpacing, // Added
        lineSpacing: updatedSegment.lineSpacing, // Added
      });
      setIsTextToolOpen(true);
      saveHistory();

      // Trigger auto-save
      setTimeout(() => {
        autoSaveProject(updatedVideoLayers, audioLayers);
      }, 1000);
    } catch (error) {
      console.error('Error adding text style to timeline:', error);
      alert('Failed to add text style to timeline. Please try again.');
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };

  const videoHandler = VideoSegmentHandler({
    projectId,
    sessionId,
    videoLayers,
    setVideoLayers,
    audioLayers,
    setAudioLayers,
    saveHistory,
    API_BASE_URL,
    timelineRef,
    roundToThreeDecimals,
    setTotalDuration,
    setIsLoading,
    setCurrentTime,
    updateTimeoutRef,
    videos,
    autoSave: autoSaveProject,
  });  

const handleVideoClick = debounce(async (video, isDragEvent = false) => {
  if (isDragEvent || uploading || isAddingToTimeline) return;
  setSelectedVideo(video);
  if (!sessionId || !projectId || !video.fileName) {
    console.error('Missing required parameters:', { sessionId, projectId, videoFileName: video.fileName });
    return;
  }

  try {
    setIsAddingToTimeline(true);
    let endTime = 0;
    videoLayers.forEach((layer) => {
      layer.forEach((segment) => {
        const segmentEndTime = segment.startTime + segment.duration;
        if (segmentEndTime > endTime) endTime = segmentEndTime;
      });
    });
    const timelineStartTime = roundToThreeDecimals(endTime);

    const selectedLayerIndex = findAvailableLayer(timelineStartTime, timelineStartTime + (video.duration || 5), videoLayers);
    if (selectedLayerIndex < 0) {
      throw new Error('No available layer found');
    }

    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      while (newLayers.length <= selectedLayerIndex) {
        newLayers.push([]);
      }
      return newLayers;
    });

    const { videoSegment, audioSegment } = await videoHandler.addVideoToTimeline(
      video.fileName,
      selectedLayerIndex,
      timelineStartTime,
      null,
      0,
      null
    );

    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      if (!newLayers[selectedLayerIndex]) {
        newLayers[selectedLayerIndex] = [];
      }
      const exists = newLayers[selectedLayerIndex].some((s) => s.id === videoSegment.id);
      if (!exists) {
        newLayers[selectedLayerIndex].push(videoSegment);
      } else {
        console.warn(`Segment with ID ${videoSegment.id} already exists in layer ${selectedLayerIndex}`);
      }
      return newLayers;
    });

    if (audioSegment) {
      const audioLayerIndex = Math.abs(audioSegment.layer) - 1;
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        while (newLayers.length <= audioLayerIndex) {
          newLayers.push([]);
        }
        const exists = newLayers[audioLayerIndex].some((s) => s.id === audioSegment.id);
        if (!exists) {
          newLayers[audioLayerIndex].push(audioSegment);
        } else {
          console.warn(`Audio segment with ID ${audioSegment.id} already exists in layer ${audioLayerIndex}`);
        }
        return newLayers;
      });
    }

    const segmentDuration = videoSegment.timelineEndTime - videoSegment.timelineStartTime;
    setTotalDuration((prev) => Math.max(prev, timelineStartTime + segmentDuration));

    saveHistory();
    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject();
    // }, 1000);
  } catch (error) {
    console.error('Error adding video to timeline:', error);
    alert('Failed to add video to timeline. Please try again.');
  } finally {
    setIsAddingToTimeline(false);
  }
}, 300);

  const addImageToTimeline = async (imageFileName, layer, timelineStartTime, timelineEndTime, isElement = false) => {
    try {
      setIsAddingToTimeline(true); // Set loading state
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-project-image-to-timeline`,
        {
          imageFileName,
          layer: layer || 0,
          timelineStartTime: timelineStartTime || 0,
          timelineEndTime: timelineEndTime || timelineStartTime + 5,
          isElement,
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
  
      const newImageSegment = response.data;
      if (!newImageSegment) {
        throw new Error(`Failed to add image segment for ${imageFileName}`);
      }
  
      const photo = isElement ? elements.find((e) => e.fileName === imageFileName) : photos.find((p) => p.fileName === imageFileName);
      if (!photo && !isElement) {
        throw new Error(`Photo with fileName ${imageFileName} not found`);
      }
  
      const newSegment = {
        id: newImageSegment.id,
        type: 'image',
        fileName: imageFileName,
        filePath: isElement
          ? `${CDN_URL}/elements/${encodeURIComponent(imageFileName)}`
          : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(imageFileName)}`,
        startTime: newImageSegment.timelineStartTime,
        duration: newImageSegment.timelineEndTime - newImageSegment.timelineStartTime,
        layer: layer || 0,
        positionX: newImageSegment.positionX || 0,
        positionY: newImageSegment.positionY || 0,
        scale: newImageSegment.scale || 1,
        opacity: newImageSegment.opacity || 1,
        filters: newImageSegment.filters || [],
        keyframes: newImageSegment.keyframes || {},
        thumbnail: photo?.thumbnail,
        isElement: isElement || newImageSegment.element || false,
        width: newImageSegment.width,
        height: newImageSegment.height,
        effectiveWidth: newImageSegment.effectiveWidth,
        effectiveHeight: newImageSegment.effectiveHeight,
        maintainAspectRatio: newImageSegment.maintainAspectRatio,
        rotation: newImageSegment.rotation || 0,
      };
  
      let updatedVideoLayers = videoLayers;
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        while (newLayers.length <= layer) newLayers.push([]);
        const exists = newLayers[layer].some((segment) => segment.id === newSegment.id);
        if (!exists) {
          newLayers[layer].push(newSegment);
        } else {
          console.warn(`Segment with id ${newSegment.id} already exists in layer ${layer}`);
        }
        updatedVideoLayers = newLayers;
        return newLayers;
      });
  
      setTotalDuration((prev) => Math.max(prev, newSegment.startTime + newSegment.duration));
  
      // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      // updateTimeoutRef.current = setTimeout(() => {
      //   autoSaveProject(updatedVideoLayers, audioLayers);
      // }, 1000);
  
      saveHistory();
      return newSegment;
    } catch (error) {
      console.error('Error adding image to timeline:', error);
      throw error;
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };

const handleRemoveBackground = async (imageSegment) => {
  if (!imageSegment || !projectId) {
    console.error('Missing imageSegment or projectId');
    return;
  }

  try {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_BASE_URL}/projects/${projectId}/remove-image-background`,
      { imageFileName: imageSegment.fileName },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const processedImage = response.data;
    if (!processedImage.imagePath) {
      throw new Error('No processed image path returned from the server');
    }

    const newFileName = processedImage.imagePath.split('/').pop();
    const newFilePath = `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(newFileName)}`;

    // Generate thumbnail for the new image
    const thumbnail = await generateImageThumbnail(newFileName, imageSegment.isElement);

    // Update photos state by fetching the latest project resources
    await fetchProjectResources();

    // Update videoLayers with the new image details and thumbnail
    let updatedVideoLayers = videoLayers;
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      if (!newLayers[imageSegment.layer]) {
        console.warn(`Layer ${imageSegment.layer} does not exist in videoLayers`);
        newLayers[imageSegment.layer] = [];
      }
      newLayers[imageSegment.layer] = newLayers[imageSegment.layer].map((item) =>
        item.id === imageSegment.id
          ? {
              ...item,
              fileName: newFileName,
              filePath: newFilePath,
              thumbnail,
            }
          : item
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });

    // Update selectedSegment if it matches the processed image
    if (selectedSegment?.id === imageSegment.id) {
      setSelectedSegment((prev) => ({
        ...prev,
        fileName: newFileName,
        filePath: newFilePath,
        thumbnail,
      }));
    }

    saveHistory();
    await autoSaveProject(updatedVideoLayers, audioLayers);
  } catch (error) {
    console.error('Error removing image background:', error.response?.data || error.message);
    alert('Failed to remove background. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

const handleTimeUpdate = (newTime, updatePlayhead = true) => {
  const clampedTime = Math.max(0, Math.min(totalDuration, newTime));
  setCurrentTime(clampedTime);
  if (updatePlayhead && timelineSetPlayhead) {
    timelineSetPlayhead(clampedTime, false);
  }
};

const handleDeleteSegment = async () => {
  if (!selectedSegment || !sessionId || !projectId) return;

  try {
    setIsDeleting(true);
    const token = localStorage.getItem('token');
    let endpoint = '';
    switch (selectedSegment.type) {
      case 'video':
        endpoint = `${API_BASE_URL}/projects/timeline/video/${sessionId}/${selectedSegment.id}`;
        break;
      case 'audio':
        endpoint = `${API_BASE_URL}/projects/timeline/audio/${sessionId}/${selectedSegment.id}`;
        break;
      case 'image':
        endpoint = `${API_BASE_URL}/projects/timeline/image/${sessionId}/${selectedSegment.id}`;
        break;
      case 'text':
        endpoint = `${API_BASE_URL}/projects/timeline/text/${sessionId}/${selectedSegment.id}`;
        break;
      default:
        console.error('Unknown segment type:', selectedSegment.type);
        return;
    }

    await axios.delete(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const transitionsToDelete = transitions.filter(
      (transition) => transition.segmentId === selectedSegment.id
    );

    for (const transition of transitionsToDelete) {
      try {
        await axios.delete(
          `${API_BASE_URL}/projects/${projectId}/remove-transition`,
          {
            params: { sessionId, transitionId: transition.id },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        console.error(`Error deleting transition ${transition.id}:`, error);
      }
    }

    let updatedVideoLayers = videoLayers;
    let updatedAudioLayers = audioLayers;
    if (selectedSegment.type === 'audio') {
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        const layerIndex = Math.abs(selectedSegment.layer) - 1;
        newLayers[layerIndex] = newLayers[layerIndex].filter(
          (item) => item.id !== selectedSegment.id
        );
        updatedAudioLayers = newLayers;
        return newLayers;
      });
    } else {
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].filter(
          (item) => item.id !== selectedSegment.id
        );
        updatedVideoLayers = newLayers;
        return newLayers;
      });
    }

    setTransitions((prevTransitions) =>
      prevTransitions.filter(
        (transition) => transition.segmentId !== selectedSegment.id
      )
    );

    const allLayers = [...updatedVideoLayers, ...updatedAudioLayers];
    let maxEndTime = 0;
    allLayers.forEach((layer) => {
      layer.forEach((item) => {
        const endTime = item.startTime + item.duration;
        if (endTime > maxEndTime) maxEndTime = endTime;
      });
    });
    setTotalDuration(maxEndTime);

    setSelectedSegment(null);
    setIsTextToolOpen(false);
    setIsTransformOpen(false);
    setIsFiltersOpen(false);

    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject(updatedVideoLayers, updatedAudioLayers);
    // }, 1000);
  } catch (error) {
    console.error('Error deleting segment:', error);
    alert('Failed to delete segment. Please try again.');
  } finally {
    setIsDeleting(false); // Add this line to hide loading screen
  }
};

const handleDeleteMultipleSegments = async () => {
  if (multiSelectedSegments.length === 0) return;
  setIsDeleting(true);
  try {
    const token = localStorage.getItem('token');
    const segmentIds = multiSelectedSegments.map((seg) => seg.id);
    await axios.delete(`${API_BASE_URL}/projects/${projectId}/remove-segments`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { sessionId },
      data: { segmentIds },
    });

    // Update videoLayers and audioLayers
    let updatedVideoLayers = videoLayers;
    let updatedAudioLayers = audioLayers;
    setVideoLayers((prevLayers) => {
      const newLayers = prevLayers.map((layer) =>
        layer.filter((seg) => !segmentIds.includes(seg.id))
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });
    setAudioLayers((prevLayers) => {
      const newLayers = prevLayers.map((layer) =>
        layer.filter((seg) => !segmentIds.includes(seg.id))
      );
      updatedAudioLayers = newLayers;
      return newLayers;
    });

    // Update total duration
    let maxEndTime = 0;
    [...updatedVideoLayers, ...updatedAudioLayers].forEach((layer) => {
      layer.forEach((item) => {
        const endTime = item.startTime + item.duration;
        if (endTime > maxEndTime) maxEndTime = endTime;
      });
    });
    setTotalDuration(maxEndTime);

    // Clear selections
    setMultiSelectedSegments([]);
    setSelectedSegment(null);

    // Save history
    saveHistory();

    // Trigger auto-save
    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject(updatedVideoLayers, updatedAudioLayers);
    // }, 1000);
  } catch (error) {
    console.error('Error deleting multiple segments:', error);
    alert('Failed to delete segments. Please try again.');
  } finally {
    setIsDeleting(false);
  }
};

useEffect(() => {
  const frameDuration = 1 / projectFps;
  const handleKeyDown = (e) => {
    if (!isPlaying) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault(); // Prevent scrolling
        handleTimeUpdate(Math.max(0, currentTime - frameDuration), true);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault(); // Prevent scrolling
        handleTimeUpdate(Math.min(totalDuration, currentTime + frameDuration), true);
      } else if (isTimelineSelected && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault(); // Prevent scrolling
        // Collect all segment start and end times
        const times = [];
        [...videoLayers, ...audioLayers].forEach((layer) => {
          layer.forEach((segment) => {
            times.push(segment.startTime); // Start time
            times.push(segment.startTime + segment.duration); // End time
          });
        });
        // Remove duplicates and sort
        const uniqueTimes = [...new Set(times)].sort((a, b) => a - b);
        if (uniqueTimes.length === 0) return;
        let newTime;
        if (e.key === 'ArrowUp') {
          // Move to previous boundary
          // If exactly on a boundary, find the previous one; otherwise, include current boundary
          const isOnBoundary = uniqueTimes.some((t) => Math.abs(t - currentTime) < 0.0001);
          newTime = uniqueTimes
            .slice()
            .reverse()
            .find((t) => (isOnBoundary ? t < currentTime : t <= currentTime)) || uniqueTimes[0];
        } else {
          // Move to next boundary
          newTime = uniqueTimes.find((t) => t > currentTime) || uniqueTimes[uniqueTimes.length - 1];
        }
        if (newTime !== undefined) {
          handleTimeUpdate(newTime, true);
        }
      }
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [isPlaying, totalDuration, currentTime, projectFps, isTimelineSelected, videoLayers, audioLayers, handleTimeUpdate]);

useEffect(() => {
  if (isPlaying && currentTime >= totalDuration) {
    setIsPlaying(false);
    setCurrentTime(totalDuration);
  }
}, [currentTime, isPlaying, totalDuration]);

const handleMouseDown = (e) => {
  e.preventDefault();
  setIsDraggingHandle(true);
};

const handleTouchStart = (e) => {
  e.preventDefault();
  setIsDraggingHandle(true);
};

const handleMouseMove = (e) => {
  if (!isDraggingHandle) return;
  const contentWrapper = document.querySelector('.content-wrapper');
  const wrapperHeight = contentWrapper.clientHeight;
  const controlsPanelHeight = 60;
  const resizeHandleHeight = 6;
  const zoomSliderHeight = 40;
  const previewMarginTotal = 40;

  // Use clientY from mouse or first touch
  const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;

  const availableHeight = wrapperHeight - controlsPanelHeight - resizeHandleHeight - zoomSliderHeight - previewMarginTotal;

  const wrapperTop = contentWrapper.getBoundingClientRect().top;
  const distanceFromTop = clientY - wrapperTop;

  const previewHeightPx = distanceFromTop - resizeHandleHeight - 20;
  const minPreviewHeight = 100;
  const maxPreviewHeight = availableHeight - 100;
  const clampedPreviewHeight = Math.max(minPreviewHeight, Math.min(maxPreviewHeight, previewHeightPx));

  const remainingHeight = availableHeight - clampedPreviewHeight;
  const timelineHeightPercent = (remainingHeight / availableHeight) * 100;
  const minTimelineHeight = 10;
  const maxTimelineHeight = 75;
  const clampedTimelineHeight = Math.max(minTimelineHeight, Math.min(maxTimelineHeight, timelineHeightPercent));

  setPreviewHeight(`${clampedPreviewHeight}px`);
  setTimelineHeight(clampedTimelineHeight);
};

const handleMouseUp = () => {
  setIsDraggingHandle(false);
};

const handleTouchEnd = () => {
  setIsDraggingHandle(false);
};

useEffect(() => {
  if (isMobile) return; // Skip event listeners for mobile

  const handleTouchMove = (e) => {
    handleMouseMove(e);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };
}, [isDraggingHandle, isMobile]);

const toggleSection = (section) => {
  if (expandedSection === section) {
    setExpandedSection(null);
    setIsContentPanelOpen(false);
    // Reset tool panel states when closing
    setIsTransformOpen(false);
    setIsFiltersOpen(false);
    setIsTextToolOpen(false);
    setIsTransitionsOpen(false);
  } else {
    setExpandedSection(section);
    setIsContentPanelOpen(true);
    // Update tool panel states based on section
    setIsTransformOpen(section === 'transform');
    setIsFiltersOpen(section === 'filters');
    setIsTextToolOpen(section === 'text' && selectedSegment?.type === 'text');
    setIsTransitionsOpen(section === 'transitions');
  }
};

const handleSegmentSelect = async (segment, multiSelected = []) => {
  // If multiSelected is provided and not empty, handle multi-selection
  if (multiSelected.length > 0) {
    const allTextSegments = multiSelected.every((seg) => seg.type === 'text');
    setMultiSelectedSegments(multiSelected);
    setSelectedSegment(null); // Clear single selection
    setIsTransformOpen(false); // Disable transform panel
    setIsFiltersOpen(false); // Disable filters panel
    setTempSegmentValues({}); // Clear temp values
    setAppliedFilters([]); // Clear filters
    setFilterParams({
      brightness: 0,
      contrast: 1,
      saturation: 1,
      hue: 0,
      blur: 0,
      sharpen: 0,
      grayscale: '',
      invert: '',
      flip: '',
    });
    setKeyframes({}); // Clear keyframes
    setCurrentTimeInSegment(0); // Reset time in segment
    await fetchTransitions(); // Refresh transitions

    if (allTextSegments) {
      // Set text settings based on the first text segment for consistency
      const firstSegment = multiSelected[0];
      setTextSettings({
        text: firstSegment.text || 'New Text',
        fontFamily: firstSegment.fontFamily || 'Arial',
        fontColor: firstSegment.fontColor || '#FFFFFF',
        backgroundColor: firstSegment.backgroundColor || 'transparent',
        duration: firstSegment.duration || 5,
        alignment: firstSegment.alignment || 'center',
        backgroundOpacity: firstSegment.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: firstSegment.backgroundBorderWidth ?? 0,
        backgroundBorderColor: firstSegment.backgroundBorderColor || '#000000',
        backgroundH: firstSegment.backgroundH ?? 0,
        backgroundW: firstSegment.backgroundW ?? 0,
        backgroundBorderRadius: firstSegment.backgroundBorderRadius ?? 0,
        textBorderColor: firstSegment.textBorderColor || 'transparent',
        textBorderWidth: firstSegment.textBorderWidth ?? 0,
        textBorderOpacity: firstSegment.textBorderOpacity ?? 1.0,
        letterSpacing: firstSegment.letterSpacing ?? 0,
        lineSpacing: firstSegment.lineSpacing ?? 1.2,
        scale: firstSegment.scale || 1.0,
        positionX: firstSegment.positionX || 0,
        positionY: firstSegment.positionY || 0,
        opacity: firstSegment.opacity || 1,
        rotation: firstSegment.rotation || 0,
      });
      setIsTextToolOpen(true);
      setIsContentPanelOpen(true);
      setExpandedSection('text');
    } else {
      setIsTextToolOpen(false);
      setIsContentPanelOpen(false);
      setExpandedSection(null);
    }
    return;
  }

  // Single segment selection logic
  let updatedSegment = segment;
  if (segment) {
    if (segment.type === 'audio') {
      const layerIndex = Math.abs(segment.layer) - 1;
      updatedSegment = audioLayers[layerIndex]?.find((s) => s.id === segment.id) || segment;
    } else {
      updatedSegment = videoLayers[segment.layer]?.find((s) => s.id === segment.id) || segment;
    }
  }

  setSelectedSegment(updatedSegment);
  setMultiSelectedSegments([]); // Clear multi-selection for single select
  if (updatedSegment) {
    let initialValues = {};
    switch (updatedSegment.type) {
      case 'video':
        initialValues = {
          positionX: updatedSegment.positionX || 0,
          positionY: updatedSegment.positionY || 0,
          scale: updatedSegment.scale || 1,
          opacity: updatedSegment.opacity || 1,
          cropL: updatedSegment.cropL !== undefined ? updatedSegment.cropL : 0,
          cropR: updatedSegment.cropR !== undefined ? updatedSegment.cropR : 0,
          cropT: updatedSegment.cropT !== undefined ? updatedSegment.cropT : 0,
          cropB: updatedSegment.cropB !== undefined ? updatedSegment.cropB : 0,
          speed: updatedSegment.speed || 1.0,
          rotation: updatedSegment.rotation || 0,
        };
        break;
      case 'image':
        initialValues = {
          positionX: updatedSegment.positionX || 0,
          positionY: updatedSegment.positionY || 0,
          scale: updatedSegment.scale || 1,
          opacity: updatedSegment.opacity || 1,
          cropL: updatedSegment.cropL !== undefined ? updatedSegment.cropL : 0,
          cropR: updatedSegment.cropR !== undefined ? updatedSegment.cropR : 0,
          cropT: updatedSegment.cropT !== undefined ? updatedSegment.cropT : 0,
          cropB: updatedSegment.cropB !== undefined ? updatedSegment.cropB : 0,
          rotation: updatedSegment.rotation || 0,
        };
        break;
      case 'text':
        initialValues = {
          positionX: updatedSegment.positionX || 0,
          positionY: updatedSegment.positionY || 0,
          scale: updatedSegment.scale || 1,
          opacity: updatedSegment.opacity || 1,
          rotation: updatedSegment.rotation || 0,
        };
        break;
      case 'audio':
        initialValues = {
          volume: updatedSegment.volume || 1.0,
        };
        break;
      default:
        break;
    }

    // Fetch keyframes and ensure they're set correctly
    const segmentData = await fetchKeyframes(updatedSegment.id, updatedSegment.type);
    const keyframesData = segmentData?.keyframes || {};

    // Calculate relative time
    const relativeTime = currentTime - updatedSegment.startTime;
    setCurrentTimeInSegment(Math.max(0, Math.min(updatedSegment.duration, relativeTime)));

    // Update initialValues with keyframe values
    Object.keys(keyframesData).forEach((prop) => {
      const propKeyframes = keyframesData[prop] || [];
      if (propKeyframes.length > 0) {
        const value = getValueAtTime(propKeyframes, currentTimeInSegment);
        if (value !== null) {
          initialValues[prop] = value;
        }
      }
    });

    setTempSegmentValues(initialValues);

    // Update layers with keyframes
    if (updatedSegment.type !== 'audio') {
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[updatedSegment.layer] = newLayers[updatedSegment.layer].map((item) =>
          item.id === updatedSegment.id ? { ...item, keyframes: keyframesData } : item
        );
        return newLayers;
      });
    } else {
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        const layerIndex = Math.abs(updatedSegment.layer) - 1;
        newLayers[layerIndex] = newLayers[layerIndex].map((item) =>
          item.id === updatedSegment.id ? { ...item, keyframes: keyframesData } : item
        );
        return newLayers;
      });
    }

    // Update textSettings for text segments
    if (updatedSegment.type === 'text') {
      setTextSettings({
        text: updatedSegment.text || 'New Text',
        fontFamily: updatedSegment.fontFamily || 'Arial',
        fontColor: updatedSegment.fontColor || '#FFFFFF',
        backgroundColor: updatedSegment.backgroundColor || 'transparent',
        duration: updatedSegment.duration || 5,
        alignment: updatedSegment.alignment || 'center',
        backgroundOpacity: updatedSegment.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: updatedSegment.backgroundBorderWidth ?? 0,
        backgroundBorderColor: updatedSegment.backgroundBorderColor || '#000000',
        backgroundH: updatedSegment.backgroundH ?? 0,
        backgroundW: updatedSegment.backgroundW ?? 0,
        backgroundBorderRadius: updatedSegment.backgroundBorderRadius ?? 0,
        textBorderColor: updatedSegment.textBorderColor || 'transparent',
        textBorderWidth: updatedSegment.textBorderWidth ?? 0,
        textBorderOpacity: updatedSegment.textBorderOpacity ?? 1.0,
        letterSpacing: updatedSegment.letterSpacing ?? 0,
        lineSpacing: updatedSegment.lineSpacing ?? 1.2,
        scale: initialValues.scale,
        positionX: initialValues.positionX,
        positionY: initialValues.positionY,
        opacity: initialValues.opacity,
      });
      setIsTextToolOpen(true);
    } else {
      setIsTextToolOpen(false);
    }

    // Fetch filters for video/image
    if (updatedSegment.type === 'video' || updatedSegment.type === 'image') {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${API_BASE_URL}/projects/${projectId}/segments/${updatedSegment.id}/filters`,
          {
            params: { sessionId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const filters = response.data || [];
        setAppliedFilters(filters);

        const initialFilterParams = {
          brightness: 0,
          contrast: 1,
          saturation: 1,
          hue: 0,
          blur: 0,
          sharpen: 0,
          grayscale: '',
          invert: '',
          flip: '',
        };
        filters.forEach((filter) => {
          if (filter.filterName === 'flip') {
            initialFilterParams.flip = ['horizontal', 'vertical', 'both'].includes(filter.filterValue)
              ? filter.filterValue
              : '';
          } else {
            initialFilterParams[filter.filterName] =
              parseFloat(filter.filterValue) || initialFilterParams[filter.filterName];
          }
        });

        setFilterParams(initialFilterParams);

        setVideoLayers((prevLayers) => {
          const newLayers = [...prevLayers];
          newLayers[updatedSegment.layer] = newLayers[updatedSegment.layer].map((item) =>
            item.id === updatedSegment.id ? { ...item, filters } : item
          );
          return newLayers;
        });
      } catch (error) {
        console.error('Error fetching filters for segment:', error);
        setAppliedFilters([]);
        setFilterParams({
          brightness: 0,
          contrast: 1,
          saturation: 1,
          hue: 0,
          blur: 0,
          sharpen: 0,
          grayscale: '',
          invert: '',
          flip: '',
        });
      }
    } else {
      setAppliedFilters([]);
      setFilterParams({
        brightness: 0,
        contrast: 1,
        saturation: 1,
        hue: 0,
        blur: 0,
        sharpen: 0,
        grayscale: '',
        invert: '',
        flip: '',
      });
    }
    await fetchTransitions();
  } else {
    setTempSegmentValues({});
    setAppliedFilters([]);
    setFilterParams({
      brightness: 0,
      contrast: 1,
      saturation: 1,
      hue: 0,
      blur: 0,
      sharpen: 0,
    });
    setKeyframes({});
    setCurrentTimeInSegment(0);
    setIsTextToolOpen(false);
  }
  handleTextSegmentSelect(updatedSegment);
};

const fetchKeyframes = async (segmentId, segmentType) => {
  try {
    const token = localStorage.getItem('token');
    let response;
    switch (segmentType) {
      case 'video':
      case 'image':
      case 'text':
      case 'audio':
        response = await axios.get(`${API_BASE_URL}/projects/${projectId}`, {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        });
        const timelineState =
          typeof response.data.timelineState === 'string'
            ? JSON.parse(response.data.timelineState)
            : response.data.timelineState;
        let segments;
        if (segmentType === 'video') {
          segments = timelineState.segments || [];
        } else if (segmentType === 'image') {
          segments = timelineState.imageSegments || [];
        } else if (segmentType === 'text') {
          segments = timelineState.textSegments || [];
        } else {
          segments = timelineState.audioSegments || [];
        }
        const segment = segments.find((s) => s.id === segmentId);
        response = { data: segment || {} };
        break;
      default:
        throw new Error('Invalid segment type');
    }
    const segmentData = response.data;
    // console.log(`Fetched keyframes for ${segmentType} segment ${segmentId}:`, segmentData.keyframes);
    const keyframesData = segmentData?.keyframes || {};
    setKeyframes(keyframesData);
    return segmentData;
  } catch (error) {
    console.error(`Error fetching keyframes for ${segmentType}:`, error);
    setKeyframes({});
    return null;
  }
};

const getValueAtTime = (keyframesArray, time) => {
  if (!keyframesArray || keyframesArray.length === 0) return null;
  const sorted = [...keyframesArray].sort((a, b) => a.time - b.time);
  if (time <= sorted[0].time) return sorted[0].value;
  if (time >= sorted[sorted.length - 1].time) return sorted[sorted.length - 1].value;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (time >= sorted[i].time && time <= sorted[i + 1].time) {
      const t = (time - sorted[i].time) / (sorted[i + 1].time - sorted[i].time);
      return sorted[i].value + t * (sorted[i + 1].value - sorted[i].value);
    }
  }
  return sorted[0].value;
};

const addKeyframe = async (property, value) => {
  if (!selectedSegment) return;
  const time = currentTimeInSegment;

  const currentKeyframes = keyframes || {};
  const updatedPropertyKeyframes = (currentKeyframes[property] || []).filter(
    (kf) => !areTimesEqual(kf.time, time)
  );
  updatedPropertyKeyframes.push({ time, value, interpolationType: 'linear' });
  updatedPropertyKeyframes.sort((a, b) => a.time - b.time);

  const updatedKeyframes = {
    ...currentKeyframes,
    [property]: updatedPropertyKeyframes,
  };

  setKeyframes(updatedKeyframes);

  let updatedVideoLayers = videoLayers;
  let updatedAudioLayers = audioLayers;
  if (selectedSegment.type === 'audio') {
    setAudioLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      const layerIndex = Math.abs(selectedSegment.layer) - 1;
      newLayers[layerIndex] = newLayers[layerIndex].map((item) =>
        item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
      );
      updatedAudioLayers = newLayers;
      return newLayers;
    });
  } else {
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
        item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });
  }

  setTempSegmentValues((prev) => ({
    ...prev,
    [property]: value,
  }));

  try {
    const token = localStorage.getItem('token');
    await axios.post(
      `${API_BASE_URL}/projects/${projectId}/add-keyframe`,
      {
        segmentId: selectedSegment.id,
        segmentType: selectedSegment.type,
        property,
        time,
        value,
        interpolationType: 'linear',
      },
      { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
    );

     if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
     updateTimeoutRef.current = setTimeout(() => {
       autoSaveProject(updatedVideoLayers, updatedAudioLayers);
     }, 1000);
  } catch (error) {
    console.error('Error adding keyframe:', error);
  }
};

const removeKeyframe = async (property, time) => {
  if (!selectedSegment) return;

  const previousKeyframes = { ...keyframes };

  const updatedKeyframes = {
    ...keyframes,
    [property]: (keyframes[property] || []).filter((kf) => !areTimesEqual(kf.time, time)),
  };
  setKeyframes(updatedKeyframes);

  let updatedVideoLayers = videoLayers;
  let updatedAudioLayers = audioLayers;
  if (selectedSegment.type === 'audio') {
    setAudioLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      const layerIndex = Math.abs(selectedSegment.layer) - 1;
      newLayers[layerIndex] = newLayers[layerIndex].map((item) =>
        item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
      );
      updatedAudioLayers = newLayers;
      return newLayers;
    });
  } else {
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
        item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });
  }

  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_BASE_URL}/projects/${projectId}/remove-keyframe`, {
      params: {
        sessionId,
        segmentId: selectedSegment.id,
        segmentType: selectedSegment.type,
        property,
        time,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // Schedule auto-save
    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject(updatedVideoLayers, updatedAudioLayers);
    // }, 1000);

    // Optionally fetch keyframes to ensure sync, but only if necessary
    // await fetchKeyframes(selectedSegment.id, selectedSegment.type);
  } catch (error) {
    console.error('Error removing keyframe:', error);
    // Revert to previous keyframes on error
    setKeyframes(previousKeyframes);
    // Revert layers
    if (selectedSegment.type === 'audio') {
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        const layerIndex = Math.abs(selectedSegment.layer) - 1;
        newLayers[layerIndex] = newLayers[layerIndex].map((item) =>
          item.id === selectedSegment.id ? { ...item, keyframes: previousKeyframes } : item
        );
        return newLayers;
      });
    } else {
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
          item.id === selectedSegment.id ? { ...item, keyframes: previousKeyframes } : item
        );
        return newLayers;
      });
    }
    alert('Failed to remove keyframe. Please try again.');
  }
};

const toggleKeyframe = (property) => {
  if (!selectedSegment) return;

  const currentKeyframes = keyframes[property] || [];
  const keyframeAtTime = currentKeyframes.find((kf) => areTimesEqual(kf.time, currentTimeInSegment));

  if (keyframeAtTime) {
    // If a keyframe exists at the current time, remove it
    removeKeyframe(property, currentTimeInSegment);
  } else {
    let value;

    if (currentKeyframes.length === 0) {
      // No keyframes exist for this property, use the static value from tempSegmentValues or segment
      value = tempSegmentValues[property] !== undefined
        ? tempSegmentValues[property]
        : selectedSegment[property] !== undefined
          ? selectedSegment[property]
          : (property === 'scale' || property === 'opacity' ? 1 : property === 'volume' ? 1 : 0);
    } else {
      // Keyframes exist, use the interpolated value at the current time
      value = getValueAtTime(currentKeyframes, currentTimeInSegment);
      if (value === null) {
        // Fallback to static value if interpolation fails
        value = tempSegmentValues[property] !== undefined
          ? tempSegmentValues[property]
          : selectedSegment[property] !== undefined
            ? selectedSegment[property]
            : (property === 'scale' || property === 'opacity' ? 1 : property === 'volume' ? 1 : 0);
      }
    }

    // Add the new keyframe with the determined value
    addKeyframe(property, value);
  }
};

const navigateKeyframes = (property, direction) => {
  if (!selectedSegment || !keyframes[property]) return;
  const sortedKeyframes = keyframes[property].sort((a, b) => a.time - b.time);
  const currentIndex = sortedKeyframes.findIndex((kf) => kf.time >= currentTimeInSegment);
  let newIndex;
  if (direction === 'prev') {
    newIndex = currentIndex === -1 ? sortedKeyframes.length - 1 : Math.max(0, currentIndex - 1);
  } else {
    newIndex = currentIndex === -1 ? 0 : Math.min(sortedKeyframes.length - 1, currentIndex + 1);
  }
  if (sortedKeyframes[newIndex]) {
    const newTime = sortedKeyframes[newIndex].time;
    setCurrentTimeInSegment(newTime);
    handleTimeUpdate(selectedSegment.startTime + newTime);
  }
};

  const updateSegmentProperty = (property, value) => {

    // Validate speed property
    if (property === 'speed') {
      const speedValue = Number(value);
      if (isNaN(speedValue) || speedValue < 0.1 || speedValue > 5.0) {
        console.warn(`Invalid speed value: ${value}. Speed must be between 0.1 and 5.0.`);
        return; // Skip update and rely on KeyframeControls error message
      }
    }

    // Validate crop properties
    if (['cropL', 'cropR', 'cropT', 'cropB'].includes(property)) {
      const currentValues = {
        cropL: Number(tempSegmentValues.cropL) || 0,
        cropR: Number(tempSegmentValues.cropR) || 0,
        cropT: Number(tempSegmentValues.cropT) || 0,
        cropB: Number(tempSegmentValues.cropB) || 0,
      };
      const newValues = { ...currentValues, [property]: Number(value) };

      // Validate crop values
      if (isNaN(newValues[property]) || newValues[property] < 0 || newValues[property] > 100) {
        console.warn(`Invalid crop value for ${property}: ${value}`);
        return; // Skip update and rely on KeyframeControls error message
      }
      if (newValues.cropL + newValues.cropR >= 100) {
        console.warn(`Invalid crop: cropL (${newValues.cropL}) + cropR (${newValues.cropR}) >= 100%`);
        return; // Skip update
      }
      if (newValues.cropT + newValues.cropB >= 100) {
        console.warn(`Invalid crop: cropT (${newValues.cropT}) + cropB (${newValues.cropB}) >= 100%`);
        return; // Skip update
      }
    }

    // Update tempSegmentValues
    setTempSegmentValues((prev) => {
      const newValues = { ...prev, [property]: value };
      // console.log(`Updating ${property} to ${value}, new tempSegmentValues:`, newValues);
      return newValues;
    });

    // Update layers
    const targetLayers = selectedSegment.layer < 0 ? audioLayers : videoLayers;
    const layerIndex = selectedSegment.layer < 0 ? Math.abs(selectedSegment.layer) - 1 : selectedSegment.layer;
    const newLayers = targetLayers.map((layer, idx) =>
      idx === layerIndex
        ? layer.map((item) => (item.id === selectedSegment.id ? { ...item, [property]: value } : item))
        : layer
    );

    if (selectedSegment.layer < 0) {
      setAudioLayers(newLayers);
    } else {
      setVideoLayers(newLayers);
      // Update textSettings for text segments to keep transform properties in sync
      if (selectedSegment.type === 'text') {
        setTextSettings((prev) => ({
          ...prev,
          [property]: value,
        }));
      }
    }

    // Schedule save only for valid updates
    if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    updateTimeoutRef.current = setTimeout(() => {
      // console.log(`Scheduling saveSegmentChanges for ${property}: ${value}`);
      saveSegmentChanges(keyframes, { ...tempSegmentValues, [property]: value });
    }, 500);
  };

  const saveSegmentChanges = async (updatedKeyframes = keyframes, tempValues = tempSegmentValues) => {
    if (!selectedSegment || !sessionId || !projectId) {
      console.error('Cannot save segment changes: Missing required data', {
        selectedSegment,
        sessionId,
        projectId,
      });
      return;
    }
  
    // Fetch the latest segment data from layers
    let currentSegment = selectedSegment;
    if (selectedSegment.type === 'audio') {
      const layerIndex = Math.abs(selectedSegment.layer) - 1;
      currentSegment = audioLayers[layerIndex]?.find((s) => s.id === selectedSegment.id) || selectedSegment;
    } else {
      currentSegment = videoLayers[selectedSegment.layer]?.find((s) => s.id === selectedSegment.id) || selectedSegment;
    }
  
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      let updatedVideoLayers = videoLayers;
      let updatedAudioLayers = audioLayers;
  
      switch (selectedSegment.type) {
        case 'video':
          const normalizedTempValues = {
            positionX: tempValues.positionX !== undefined ? Number(tempValues.positionX) : 0,
            positionY: tempValues.positionY !== undefined ? Number(tempValues.positionY) : 0,
            scale: tempValues.scale !== undefined ? Number(tempValues.scale) : 1,
            opacity: tempValues.opacity !== undefined ? Number(tempValues.opacity) : 1,
            cropL: tempValues.cropL !== undefined ? Number(tempValues.cropL) : 0,
            cropR: tempValues.cropR !== undefined ? Number(tempValues.cropR) : 0,
            cropT: tempValues.cropT !== undefined ? Number(tempValues.cropT) : 0,
            cropB: tempValues.cropB !== undefined ? Number(tempValues.cropB) : 0,
            speed: tempValues.speed !== undefined ? Number(tempValues.speed) : 1.0,
            rotation: tempValues.rotation !== undefined ? Number(tempValues.rotation) : 0,
          };
  
          const videoPayload = {
            segmentId: selectedSegment.id || '',
            positionX: updatedKeyframes.positionX && updatedKeyframes.positionX.length > 0 ? undefined : normalizedTempValues.positionX,
            positionY: updatedKeyframes.positionY && updatedKeyframes.positionY.length > 0 ? undefined : normalizedTempValues.positionY,
            scale: updatedKeyframes.scale && updatedKeyframes.scale.length > 0 ? undefined : normalizedTempValues.scale,
            rotation: updatedKeyframes.rotation && updatedKeyframes.rotation.length > 0 ? undefined : normalizedTempValues.rotation,
            opacity: normalizedTempValues.opacity,
            layer: Number(currentSegment.layer) || 0,
            timelineStartTime: Number(currentSegment.startTime) || 0,
            timelineEndTime: Number(currentSegment.startTime + currentSegment.duration) || 0,
            startTime: Number(currentSegment.startTimeWithinVideo) || 0,
            endTime: Number(currentSegment.endTimeWithinVideo) || 0,
            cropL: normalizedTempValues.cropL,
            cropR: normalizedTempValues.cropR,
            cropT: normalizedTempValues.cropT,
            cropB: normalizedTempValues.cropB,
            speed: updatedKeyframes.speed && updatedKeyframes.speed.length > 0 ? undefined : normalizedTempValues.speed,
            keyframes: updatedKeyframes || {},
          };
  
          const videoResponse = await axios.put(
            `${API_BASE_URL}/projects/${projectId}/update-segment`,
            videoPayload,
            { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
          );
  
          // Fetch updated segment data
          const segmentResponse = await axios.get(
            `${API_BASE_URL}/projects/${projectId}/get-segment`,
            {
              params: { sessionId, segmentId: selectedSegment.id },
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const updatedSegment = segmentResponse.data.videoSegment;
  
          if (!updatedSegment) {
            throw new Error(`Failed to fetch updated video segment ${selectedSegment.id}`);
          }
  
          setVideoLayers((prev) => {
            const newLayers = [...prev];
            const layerIndex = currentSegment.layer;
            const segmentIndex = newLayers[layerIndex].findIndex((s) => s.id === selectedSegment.id);
            if (segmentIndex !== -1) {
              newLayers[layerIndex][segmentIndex] = {
                ...newLayers[layerIndex][segmentIndex],
                cropL: updatedSegment.cropL ?? videoPayload.cropL,
                cropR: updatedSegment.cropR ?? videoPayload.cropR,
                cropT: updatedSegment.cropT ?? videoPayload.cropT,
                cropB: updatedSegment.cropB ?? videoPayload.cropB,
                positionX: updatedSegment.positionX ?? (videoPayload.positionX !== undefined ? videoPayload.positionX : newLayers[layerIndex][segmentIndex].positionX || 0),
                positionY: updatedSegment.positionY ?? (videoPayload.positionY !== undefined ? videoPayload.positionY : newLayers[layerIndex][segmentIndex].positionY || 0),
                scale: updatedSegment.scale ?? (videoPayload.scale !== undefined ? videoPayload.scale : newLayers[layerIndex][segmentIndex].scale || 1),
                rotation: updatedSegment.rotation ?? (videoPayload.rotation !== undefined ? videoPayload.rotation : newLayers[layerIndex][segmentIndex].rotation || 0),
                opacity: updatedSegment.opacity ?? (videoPayload.opacity !== undefined ? videoPayload.opacity : newLayers[layerIndex][segmentIndex].opacity || 1),
                speed: updatedSegment.speed ?? (videoPayload.speed !== undefined ? videoPayload.speed : newLayers[layerIndex][segmentIndex].speed || 1.0),
                startTime: updatedSegment.timelineStartTime ?? videoPayload.timelineStartTime,
                duration: (updatedSegment.timelineEndTime - updatedSegment.timelineStartTime) ?? (videoPayload.timelineEndTime - videoPayload.timelineStartTime),
                startTimeWithinVideo: updatedSegment.startTime ?? videoPayload.startTime,
                endTimeWithinVideo: updatedSegment.endTime ?? videoPayload.endTime,
                layer: updatedSegment.layer ?? videoPayload.layer,
                keyframes: updatedSegment.keyframes ?? videoPayload.keyframes,
              };
            }
            updatedVideoLayers = newLayers;
            setTotalDuration((prev) => {
              let maxEndTime = 0;
              newLayers.forEach((layer) => {
                layer.forEach((item) => {
                  const endTime = item.startTime + item.duration;
                  if (endTime > maxEndTime) maxEndTime = endTime;
                });
              });
              return maxEndTime;
            });
            return newLayers;
          });
  
          // Update selectedSegment with latest data
          setSelectedSegment({
            ...currentSegment,
            ...updatedSegment,
            duration: updatedSegment.timelineEndTime - updatedSegment.timelineStartTime,
          });
          break;
  
        case 'image':
          const normalizedImageValues = {
            positionX: tempValues.positionX !== undefined ? Number(tempValues.positionX) : 0,
            positionY: tempValues.positionY !== undefined ? Number(tempValues.positionY) : 0,
            rotation: tempValues.rotation !== undefined ? Number(tempValues.rotation) : 0,
            scale: tempValues.scale !== undefined ? Number(tempValues.scale) : 1,
            opacity: tempValues.opacity !== undefined ? Number(tempValues.opacity) : 1,
            cropL: tempValues.cropL !== undefined ? Number(tempValues.cropL) : 0,
            cropR: tempValues.cropR !== undefined ? Number(tempValues.cropR) : 0,
            cropT: tempValues.cropT !== undefined ? Number(tempValues.cropT) : 0,
            cropB: tempValues.cropB !== undefined ? Number(tempValues.cropB) : 0,
          };
  
          const payload = {
            segmentId: selectedSegment.id || '',
            positionX: updatedKeyframes.positionX && updatedKeyframes.positionX.length > 0 ? undefined : normalizedImageValues.positionX,
            positionY: updatedKeyframes.positionY && updatedKeyframes.positionY.length > 0 ? undefined : normalizedImageValues.positionY,
            scale: updatedKeyframes.scale && updatedKeyframes.scale.length > 0 ? undefined : normalizedImageValues.scale,
            rotation: updatedKeyframes.rotation && updatedKeyframes.rotation.length > 0 ? undefined : normalizedImageValues.rotation,
            opacity: updatedKeyframes.opacity && updatedKeyframes.opacity.length > 0 ? undefined : normalizedImageValues.opacity,
            layer: Number(currentSegment.layer) || 0,
            timelineStartTime: Number(currentSegment.startTime) || 0,
            timelineEndTime: Number(currentSegment.startTime + currentSegment.duration) || 0,
            cropL: normalizedImageValues.cropL,
            cropR: normalizedImageValues.cropR,
            cropT: normalizedImageValues.cropT,
            cropB: normalizedImageValues.cropB,
            keyframes: updatedKeyframes || {},
            filters: Array.isArray(appliedFilters)
              ? appliedFilters.map((filter) => ({
                  filterName: filter.filterName,
                  filterValue: String(filter.filterValue),
                  filterId: filter.filterId,
                }))
              : [],
            filtersToRemove: [],
          };
  
          const imageResponse = await axios.put(
            `${API_BASE_URL}/projects/${projectId}/update-image`,
            payload,
            { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
          );
  
          setVideoLayers((prev) => {
            const newLayers = [...prev];
            const layerIndex = currentSegment.layer;
            const segmentIndex = newLayers[layerIndex].findIndex((s) => s.id == selectedSegment.id);
            if (segmentIndex !== -1) {
              newLayers[layerIndex][segmentIndex] = {
                ...newLayers[layerIndex][segmentIndex],
                cropL: payload.cropL,
                cropR: payload.cropR,
                cropT: payload.cropT,
                cropB: payload.cropB,
                positionX: payload.positionX !== undefined ? payload.positionX : newLayers[layerIndex][segmentIndex].positionX || 0,
                positionY: payload.positionY !== undefined ? payload.positionY : newLayers[layerIndex][segmentIndex].positionY || 0,
                rotation: payload.rotation !== undefined ? payload.rotation : newLayers[layerIndex][segmentIndex].rotation || 0,
                scale: payload.scale !== undefined ? payload.scale : newLayers[layerIndex][segmentIndex].scale || 1,
                opacity: payload.opacity !== undefined ? payload.opacity : newLayers[layerIndex][segmentIndex].opacity || 1,
                startTime: payload.timelineStartTime,
                duration: payload.timelineEndTime - payload.timelineStartTime,
                layer: payload.layer,
                keyframes: payload.keyframes,
                filters: payload.filters,
              };
            }
            updatedVideoLayers = newLayers;
            setTotalDuration((prev) => {
              let maxEndTime = 0;
              newLayers.forEach((layer) => {
                layer.forEach((item) => {
                  const endTime = item.startTime + item.duration;
                  if (endTime > maxEndTime) maxEndTime = endTime;
                });
              });
              return maxEndTime;
            });
            return newLayers;
          });
  
          // Update selectedSegment
          setSelectedSegment({
            ...currentSegment,
            cropL: payload.cropL,
            cropR: payload.cropR,
            cropT: payload.cropT,
            cropB: payload.cropB,
            positionX: payload.positionX !== undefined ? payload.positionX : currentSegment.positionX || 0,
            positionY: payload.positionY !== undefined ? payload.positionY : currentSegment.positionY || 0,
            rotation: payload.rotation !== undefined ? payload.rotation : currentSegment.rotation || 0,
            scale: payload.scale !== undefined ? payload.scale : currentSegment.scale || 1,
            opacity: payload.opacity !== undefined ? payload.opacity : currentSegment.opacity || 1,
            startTime: payload.timelineStartTime,
            duration: payload.timelineEndTime - payload.timelineStartTime,
            keyframes: payload.keyframes,
            filters: payload.filters,
          });
          break;
  
        case 'text':
          const textPayload = {
            segmentId: selectedSegment.id,
            text: textSettings.text,
            fontFamily: textSettings.fontFamily,
            fontColor: textSettings.fontColor,
            backgroundColor: textSettings.backgroundColor,
            timelineStartTime: Number(currentSegment.startTime),
            timelineEndTime: Number(currentSegment.startTime + currentSegment.duration),
            layer: Number(currentSegment.layer),
            rotation: updatedKeyframes.rotation && updatedKeyframes.rotation.length > 0 ? undefined : tempValues.rotation,
            scale: updatedKeyframes.scale && updatedKeyframes.scale.length > 0 ? undefined : tempValues.scale,
            positionX: updatedKeyframes.positionX && updatedKeyframes.positionX.length > 0 ? undefined : tempValues.positionX,
            positionY: updatedKeyframes.positionY && updatedKeyframes.positionY.length > 0 ? undefined : tempValues.positionY,
            opacity: updatedKeyframes.opacity && updatedKeyframes.opacity.length > 0 ? undefined : tempValues.opacity,
            alignment: textSettings.alignment,
            backgroundOpacity: textSettings.backgroundOpacity,
            backgroundBorderWidth: textSettings.backgroundBorderWidth,
            backgroundBorderColor: textSettings.backgroundBorderColor,
            backgroundPadding: textSettings.backgroundPadding,
            backgroundBorderRadius: textSettings.backgroundBorderRadius,
            textBorderColor: textSettings.textBorderColor,
            textBorderWidth: textSettings.textBorderWidth,
            textBorderOpacity: textSettings.textBorderOpacity,
            letterSpacing: textSettings.letterSpacing,
            lineSpacing: textSettings.lineSpacing,
            keyframes: updatedKeyframes,
          };
  
          await axios.put(
            `${API_BASE_URL}/projects/${projectId}/update-text`,
            textPayload,
            { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
          );
  
          setVideoLayers((prev) => {
            const newLayers = [...prev];
            const layerIndex = currentSegment.layer;
            const segmentIndex = newLayers[layerIndex].findIndex((s) => s.id === selectedSegment.id);
            if (segmentIndex !== -1) {
              newLayers[layerIndex][segmentIndex] = {
                ...newLayers[layerIndex][segmentIndex],
                text: textPayload.text,
                fontFamily: textPayload.fontFamily,
                fontColor: textPayload.fontColor,
                backgroundColor: textPayload.backgroundColor,
                rotation: textPayload.rotation !== undefined ? textPayload.rotation : newLayers[layerIndex][segmentIndex].rotation || 0,
                scale: textPayload.scale !== undefined ? textPayload.scale : newLayers[layerIndex][segmentIndex].scale || 1,
                positionX: textPayload.positionX !== undefined ? textPayload.positionX : newLayers[layerIndex][segmentIndex].positionX || 0,
                positionY: textPayload.positionY !== undefined ? textPayload.positionY : newLayers[layerIndex][segmentIndex].positionY || 0,
                opacity: textPayload.opacity !== undefined ? textPayload.opacity : newLayers[layerIndex][segmentIndex].opacity || 1,
                startTime: textPayload.timelineStartTime,
                duration: textPayload.timelineEndTime - textPayload.timelineStartTime,
                layer: textPayload.layer,
                alignment: textPayload.alignment,
                backgroundOpacity: textPayload.backgroundOpacity,
                backgroundBorderWidth: textPayload.backgroundBorderWidth,
                backgroundBorderColor: textPayload.backgroundBorderColor,
                backgroundPadding: textPayload.backgroundPadding,
                backgroundBorderRadius: textPayload.backgroundBorderRadius,
                textBorderColor: textPayload.textBorderColor,
                textBorderWidth: textPayload.textBorderWidth,
                textBorderOpacity: textPayload.textBorderOpacity,
                letterSpacing: textPayload.letterSpacing,
                lineSpacing: textPayload.lineSpacing,
                keyframes: textPayload.keyframes,
              };
            }
            updatedVideoLayers = newLayers;
            setTotalDuration((prev) => {
              let maxEndTime = 0;
              newLayers.forEach((layer) => {
                layer.forEach((item) => {
                  const endTime = item.startTime + item.duration;
                  if (endTime > maxEndTime) maxEndTime = endTime;
                });
              });
              return maxEndTime;
            });
            return newLayers;
          });
  
          // Update selectedSegment
          setSelectedSegment({
            ...currentSegment,
            text: textPayload.text,
            fontFamily: textPayload.fontFamily,
            fontColor: textPayload.fontColor,
            backgroundColor: textPayload.backgroundColor,
            rotation: textPayload.rotation !== undefined ? textPayload.rotation : currentSegment.rotation || 0,
            scale: textPayload.scale !== undefined ? textPayload.scale : currentSegment.scale || 1,
            positionX: textPayload.positionX !== undefined ? textPayload.positionX : currentSegment.positionX || 0,
            positionY: textPayload.positionY !== undefined ? textPayload.positionY : currentSegment.positionY || 0,
            opacity: textPayload.opacity !== undefined ? textPayload.opacity : currentSegment.opacity || 1,
            startTime: textPayload.timelineStartTime,
            duration: textPayload.timelineEndTime - textPayload.timelineStartTime,
            layer: textPayload.layer,
            alignment: textPayload.alignment,
            backgroundOpacity: textPayload.backgroundOpacity,
            backgroundBorderWidth: textPayload.backgroundBorderWidth,
            backgroundBorderColor: textPayload.backgroundBorderColor,
            backgroundPadding: textPayload.backgroundPadding,
            backgroundBorderRadius: textPayload.backgroundBorderRadius,
            textBorderColor: textPayload.textBorderColor,
            textBorderWidth: textPayload.textBorderWidth,
            textBorderOpacity: textPayload.textBorderOpacity,
            letterSpacing: textPayload.letterSpacing,
            lineSpacing: textPayload.lineSpacing,
            keyframes: textPayload.keyframes,
          });
          break;
  
        case 'audio':
          const audioPayload = {
            audioSegmentId: selectedSegment.id,
            volume: updatedKeyframes.volume && updatedKeyframes.volume.length > 0 ? undefined : tempValues.volume,
            keyframes: updatedKeyframes,
          };
  
          await axios.put(
            `${API_BASE_URL}/projects/${projectId}/update-audio`,
            audioPayload,
            { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
          );
  
          setAudioLayers((prev) => {
            const newLayers = [...prev];
            const layerIndex = Math.abs(selectedSegment.layer) - 1;
            const segmentIndex = newLayers[layerIndex].findIndex((s) => s.id === selectedSegment.id);
            if (segmentIndex !== -1) {
              newLayers[layerIndex][segmentIndex] = {
                ...newLayers[layerIndex][segmentIndex],
                volume: audioPayload.volume !== undefined ? audioPayload.volume : newLayers[layerIndex][segmentIndex].volume || 1,
                keyframes: audioPayload.keyframes,
              };
            }
            updatedAudioLayers = newLayers;
            return newLayers;
          });
  
          setSelectedSegment({
            ...currentSegment,
            volume: audioPayload.volume !== undefined ? audioPayload.volume : currentSegment.volume || 1,
            keyframes: audioPayload.keyframes,
          });
          break;
  
        default:
          console.warn('Unknown segment type:', selectedSegment.type);
          return;
      }
  
      saveHistory();
  
      await fetchKeyframes(selectedSegment.id, selectedSegment.type);
        
      // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      // updateTimeoutRef.current = setTimeout(() => {
      //   autoSaveProject(updatedVideoLayers, updatedAudioLayers);
      // }, 1000);
    } catch (error) {
      console.error('Error saving segment changes:', error);
      if (error.response) {
        console.error('Server error details:', error.response.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

const handlePhotoUpload = async (event) => {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  const formData = new FormData();
  files.forEach((file) => {
    formData.append('image', file);
    formData.append('imageFileNames', file.name);
  });

  try {
    setUploading(true);
    setPendingUploads(new Set(files.map((file) => file.name)));
    setUploadProgress(files.reduce((acc, file) => ({ ...acc, [file.name]: 0 }), {}));

    const token = localStorage.getItem('token');
    await axios.post(
      `${API_BASE_URL}/projects/${projectId}/upload-image`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total || 1;
          const loaded = progressEvent.loaded;
          const percentCompleted = Math.round((loaded * 100) / total);
          files.forEach((file) => {
            setUploadProgress((prev) => ({
              ...prev,
              [file.name]: percentCompleted,
            }));
          });
        },
      }
    );

    await fetchProjectResources();
  } catch (error) {
    console.error('Error uploading images:', error);
    alert('Failed to upload one or more images. Please try again.');
  } finally {
    setUploading(false);
    setUploadProgress({});
    setPendingUploads(new Set());
  }
};

const handlePhotoClick = async (photo, isDragEvent = false) => {
  if (uploading || isDragEvent) return;
  try {
    let endTime = 0;
    videoLayers.forEach((layer) => {
      layer.forEach((segment) => {
        const segmentEndTime = segment.startTime + segment.duration;
        if (segmentEndTime > endTime) endTime = segmentEndTime;
      });
    });
    const timelineStartTime = roundToThreeDecimals(endTime);
    const duration = 5;
    const timelineEndTime = timelineStartTime + duration;
    const selectedLayer = findAvailableLayer(timelineStartTime, timelineEndTime, videoLayers);

    const newSegment = await addImageToTimeline(
      photo.fileName,
      selectedLayer,
      timelineStartTime,
      timelineEndTime,
      false
    );

    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      while (newLayers.length <= selectedLayer) newLayers.push([]);
      const exists = newLayers[selectedLayer].some((segment) => segment.id === newSegment.id);
      if (!exists) {
        newLayers[selectedLayer].push(newSegment);
      } else {
        console.warn(`Segment with id ${newSegment.id} already exists in layer ${selectedLayer}`);
      }
      return newLayers;
    });

    setTotalDuration((prev) => Math.max(prev, timelineStartTime + duration));
    saveHistory();

    // if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    // updateTimeoutRef.current = setTimeout(() => {
    //   autoSaveProject(videoLayers, audioLayers);
    // }, 1000);
  } catch (error) {
    console.error('Error adding photo to timeline:', error);
    alert('Failed to add photo to timeline. Please try again.');
  }
};

const updateFilterSetting = (filterName, filterValue) => {
  if (!selectedSegment || !projectId || !sessionId) {
    console.warn('Cannot update filter: Missing selectedSegment, projectId, or sessionId');
    return;
  }

  setFilterParams((prev) => ({
    ...prev,
    [filterName]: filterValue,
  }));

  if (filterUpdateTimeoutRef.current) {
    clearTimeout(filterUpdateTimeoutRef.current);
  }
  filterUpdateTimeoutRef.current = setTimeout(async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found for API request');
        alert('Authentication token missing. Please log in again.');
        router.push('/login');
        return;
      }

      const segmentId = selectedSegment.id;

      const filterResponse = await axios.get(
        `${API_BASE_URL}/projects/${projectId}/segments/${segmentId}/filters`,
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const latestFilters = filterResponse.data || [];
      setAppliedFilters(latestFilters);

      let updatedVideoLayers = videoLayers;
      let newFilters = [];

      setVideoLayers((prevLayers) => {
        const newLayers = prevLayers.map((layer, layerIndex) =>
          layer.map((segment) => {
            if (
              segment.id === selectedSegment.id &&
              segment.layer === selectedSegment.layer &&
              layerIndex === selectedSegment.layer
            ) {
              const currentFilters = latestFilters;
              newFilters = [...currentFilters];

              if (
                filterValue === '' ||
                filterValue === null ||
                filterValue === undefined ||
                (['grayscale', 'invert'].includes(filterName) && filterValue === '')
              ) {
                newFilters = currentFilters.filter((f) => f.filterName !== filterName);
              } else {
                const existingFilter = currentFilters.find((f) => f.filterName === filterName);
                const filterId = existingFilter ? existingFilter.filterId : crypto.randomUUID();
                newFilters = [
                  ...currentFilters.filter((f) => f.filterName !== filterName),
                  { filterId, filterName, filterValue: filterValue.toString(), segmentId },
                ];
              }

              return {
                ...segment,
                filters: newFilters,
              };
            }
            return segment;
          })
        );
        updatedVideoLayers = newLayers;
        return newLayers;
      });

      setAppliedFilters(newFilters);

      setSelectedSegment((prev) => {
        if (!prev) return prev;
        return { ...prev, filters: newFilters };
      });

      if (
        filterValue === '' ||
        filterValue === null ||
        filterValue === undefined ||
        (['grayscale', 'invert'].includes(filterName) && filterValue === '')
      ) {
        const filterToRemove = latestFilters.find((f) => f.filterName === filterName);
        if (filterToRemove) {
          await axios.delete(`${API_BASE_URL}/projects/${projectId}/remove-filter`, {
            params: {
              sessionId,
              segmentId,
              filterId: filterToRemove.filterId,
            },
            headers: { Authorization: `Bearer ${token}` },
          });
        } else {
        }
      } else {
        const existingFilter = latestFilters.find((f) => f.filterName === filterName);
        const filterId = existingFilter ? existingFilter.filterId : crypto.randomUUID();
        const requestBody = {
          filterId,
          segmentId,
          filterName,
          filterValue: filterValue.toString(),
        };
        const response = await axios.post(
          `${API_BASE_URL}/projects/${projectId}/apply-filter`,
          requestBody,
          {
            params: { sessionId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAppliedFilters((prev) => [
          ...prev.filter((f) => f.filterName !== filterName),
          response.data,
        ]);
      }

      await autoSaveProject(updatedVideoLayers, audioLayers);
      saveHistory();

      setCurrentTime((prev) => prev + 0);
    } catch (error) {
      console.error('Error saving filter to backend:', error.response?.data || error.message);
      if (error.response?.status === 404 && error.response?.data?.includes('Filter not found')) {
        setAppliedFilters((prev) => prev.filter((f) => f.filterName !== filterName));
        setVideoLayers((prevLayers) => {
          const newLayers = prevLayers.map((layer, layerIndex) =>
            layer.map((segment) => {
              if (
                segment.id === selectedSegment.id &&
                segment.layer === selectedSegment.layer &&
                layerIndex === selectedSegment.layer
              ) {
                return {
                  ...segment,
                  filters: segment.filters.filter((f) => f.filterName !== filterName),
                };
              }
              return segment;
            })
          );
          return newLayers;
        });
        setSelectedSegment((prev) => ({
          ...prev,
          filters: prev.filters.filter((f) => f.filterName !== filterName),
        }));
      } else {
        alert(`Failed to save filter changes: ${error.message}`);
      }
    }
  }, 500);
};

useEffect(() => {
  if (selectedSegment) {
    const relativeTime = currentTime - selectedSegment.startTime;
    setCurrentTimeInSegment(Math.max(0, Math.min(selectedSegment.duration, relativeTime)));
  }
}, [currentTime, selectedSegment]);

const resetFilters = async () => {
  if (!selectedSegment || !sessionId || !projectId) return;
  if (selectedSegment.type !== 'video' && selectedSegment.type !== 'image') return;

  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_BASE_URL}/projects/${projectId}/remove-all-filters`, {
      params: {
        sessionId,
        segmentId: selectedSegment.id,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    setAppliedFilters([]);
    setFilterParams({
      brightness: 0,
      contrast: 1,
      saturation: 1,
      hue: 0,
      blur: 0,
      sharpen: 0,
      grayscale: '',
      invert: '',
      flip: '',
    });

    let updatedVideoLayers = videoLayers;
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
        item.id === selectedSegment.id ? { ...item, filters: [] } : item
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });
    setSelectedSegment((prev) => ({ ...prev, filters: [] }));

    saveHistory();

    if (filterUpdateTimeoutRef.current) clearTimeout(filterUpdateTimeoutRef.current);
    await autoSaveProject(updatedVideoLayers, audioLayers);
  } catch (error) {
    console.error('Error resetting filters:', error);
    alert('Failed to reset filters. Please try again.');
  }
};

const filteredElements = elements.filter((element) =>
  element.displayName.toLowerCase().includes(elementSearchQuery.toLowerCase())
);

  const updateKeyframe = (property, newValue) => {
    const time = currentTimeInSegment;
    const currentKeyframes = keyframes || {};
    const updatedPropertyKeyframes = (currentKeyframes[property] || []).map((kf) =>
      areTimesEqual(kf.time, time) ? { ...kf, value: newValue } : kf
    );

    const updatedKeyframes = {
      ...currentKeyframes,
      [property]: updatedPropertyKeyframes,
    };

    setKeyframes(updatedKeyframes);

    if (selectedSegment.type === 'audio') {
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        const layerIndex = Math.abs(selectedSegment.layer) - 1;
        newLayers[layerIndex] = newLayers[layerIndex].map((item) =>
          item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
        );
        return newLayers;
      });
    } else {
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[selectedSegment.layer] = newLayers[selectedSegment.layer].map((item) =>
          item.id === selectedSegment.id ? { ...item, keyframes: updatedKeyframes } : item
        );
        return newLayers;
      });
    }

    setTempSegmentValues((prev) => ({
      ...prev,
      [property]: newValue,
    }));

    const token = localStorage.getItem('token');
    axios
      .post(
        `${API_BASE_URL}/projects/${projectId}/update-keyframe`,
        {
          segmentId: selectedSegment.id,
          segmentType: selectedSegment.type,
          property,
          time,
          value: newValue,
          interpolationType: 'linear',
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
         if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
         updateTimeoutRef.current = setTimeout(() => {
           autoSaveProject(videoLayers, audioLayers);
         }, 1000);
      })
      .catch((error) => {
        console.error('Error updating keyframe:', error);
      });
  };

  const handleSegmentPositionUpdate = (segment, { positionX, positionY }) => {
    if (!segment) return;

    const roundedPositionX = Math.round(Number(positionX));
    const roundedPositionY = Math.round(Number(positionY));

    const segmentKeyframes = segment.keyframes || {};

    const hasPositionXKeyframes = segmentKeyframes.positionX && segmentKeyframes.positionX.length > 0;
    const hasPositionYKeyframes = segmentKeyframes.positionY && segmentKeyframes.positionY.length > 0;

    const relativeTime = currentTime - segment.startTime;
    const timeInSegment = Math.max(0, Math.min(segment.duration, relativeTime));

    setTempSegmentValues((prev) => {
      const newValues = { ...prev };
      if (!hasPositionXKeyframes) newValues.positionX = roundedPositionX;
      if (!hasPositionYKeyframes) newValues.positionY = roundedPositionY;
      return newValues;
    });

    let updatedVideoLayers = videoLayers;
    setVideoLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers[segment.layer] = newLayers[segment.layer].map((item) =>
        item.id === segment.id
          ? {
              ...item,
              positionX: hasPositionXKeyframes ? item.positionX : roundedPositionX,
              positionY: hasPositionYKeyframes ? item.positionY : roundedPositionY,
            }
          : item
      );
      updatedVideoLayers = newLayers;
      return newLayers;
    });

    if (segment.type === 'text' && (!hasPositionXKeyframes || !hasPositionYKeyframes)) {
      setTextSettings((prev) => ({
        ...prev,
        positionX: hasPositionXKeyframes ? prev.positionX : roundedPositionX,
        positionY: hasPositionYKeyframes ? prev.positionY : roundedPositionY,
      }));
    }

    if (hasPositionXKeyframes) {
      const existingKeyframe = segmentKeyframes.positionX.find((kf) =>
        areTimesEqual(kf.time, timeInSegment)
      );
      if (existingKeyframe) {
        updateKeyframe('positionX', roundedPositionX);
      } else {
        addKeyframe('positionX', roundedPositionX);
      }
    }

    if (hasPositionYKeyframes) {
      const existingKeyframe = segmentKeyframes.positionY.find((kf) =>
        areTimesEqual(kf.time, timeInSegment)
      );
      if (existingKeyframe) {
        updateKeyframe('positionY', roundedPositionY);
      } else {
        addKeyframe('positionY', roundedPositionY);
      }
    }

    if (!hasPositionXKeyframes || !hasPositionYKeyframes) {
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
      updateTimeoutRef.current = setTimeout(() => {
        saveSegmentChanges(keyframes, {
          ...tempSegmentValues,
          positionX: hasPositionXKeyframes ? tempSegmentValues.positionX : roundedPositionX,
          positionY: hasPositionYKeyframes ? tempSegmentValues.positionY : roundedPositionY,
        });
      }, 500);
    }
  };

const handleGenerateSubtitles = async () => {
  if (!sessionId || !projectId || !selectedAiStyle) {
    alert('Cannot generate subtitles: Missing sessionId, projectId, or selected style');
    return;
  }

  try {
    setIsAddingToTimeline(true);
    const token = localStorage.getItem('token');

    await axios.post(
      `${API_BASE_URL}/projects/${projectId}/subtitles`,
      {
        fontFamily: selectedAiStyle.fontFamily,
        fontColor: selectedAiStyle.fontColor,
        backgroundColor: selectedAiStyle.backgroundColor,
      },
      {
        params: { sessionId },
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    await initializeProject();
  } catch (error) {
    console.error('Error generating subtitles:', error.response?.data || error.message);
    alert('Failed to generate subtitles. Please try again.');
  } finally {
    setIsAddingToTimeline(false);
  }
};

const handleGenerateAiAudio = async () => {
  if (!sessionId || !projectId || !aiVoiceText.trim() || !selectedVoice) {
    alert('Cannot generate AI audio: Missing session ID, project ID, text, or selected voice');
    return;
  }

  try {
    setIsAddingToTimeline(true);
    const token = localStorage.getItem('token');
    let startTime = roundToThreeDecimals(currentTime);
    let maxEndTime = 0;
    [...videoLayers, ...audioLayers].forEach((layer) => {
      layer.forEach((segment) => {
        const segmentEndTime = segment.startTime + segment.duration;
        if (segmentEndTime > maxEndTime) maxEndTime = segmentEndTime;
      });
    });
    startTime = Math.max(startTime, maxEndTime);

    const layer = findAvailableLayer(startTime, startTime + 5, audioLayers);
    const negativeLayer = -(layer + 1);

    const response = await axios.post(
      `${API_BASE_URL}/projects/${projectId}/generate-ai-audio`,
      {
        text: aiVoiceText,
        voiceName: selectedVoice.voiceName,
        languageCode: selectedVoice.languageCode,
        layer: negativeLayer,
        timelineStartTime: startTime,
      },
      {
        params: { sessionId },
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const audioSegment = response.data;

    if (!audioSegment.audioSegmentId) {
      throw new Error('Backend did not return audioSegmentId');
    }

    const newAudioSegment = {
      id: audioSegment.audioSegmentId,
      type: 'audio',
      fileName: audioSegment.audioPath.split('/').pop(),
      url: `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audioSegment.audioPath.split('/').pop())}`,
      startTime: audioSegment.timelineStartTime,
      duration: audioSegment.timelineEndTime - audioSegment.timelineStartTime,
      timelineStartTime: audioSegment.timelineStartTime,
      timelineEndTime: audioSegment.timelineEndTime,
      layer: audioSegment.layer,
      startTimeWithinAudio: audioSegment.startTime || 0,
      endTimeWithinAudio: audioSegment.endTime || audioSegment.timelineEndTime - audioSegment.timelineStartTime,
      displayName: audioSegment.audioPath.split('/').pop(),
      waveformJsonPath: audioSegment.waveformJsonPath
        ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
        : null,
      volume: audioSegment.volume || 1.0,
      keyframes: audioSegment.keyframes || {},
      extracted: audioSegment.isExtracted || false,
    };

    let updatedAudioLayers = audioLayers;
    setAudioLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      while (newLayers.length <= layer) newLayers.push([]);
      newLayers[layer] = [...newLayers[layer], newAudioSegment];
      updatedAudioLayers = newLayers;
      return newLayers;
    });

    setTotalDuration((prev) => Math.max(prev, startTime + newAudioSegment.duration));
    saveHistory();

    setAiVoiceText('');
    setSelectedVoice(null);

    await autoSaveProject(videoLayers, updatedAudioLayers);
  } catch (error) {
    console.error('Error generating AI audio:', error.response?.data || error.message);
    alert('Failed to generate AI audio. Please try again.');
  } finally {
    setIsAddingToTimeline(false);
  }
};

  if (loading) {
    return (
      <div className="loading-container">
        <div className="branding-container">
          <h1>
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">I</span>
            <span className="letter">T</span>
            <span className="letter">H</span>
          </h1>
          <div className="logo-element"></div>
        </div>
      </div>
    );
  }

return (
  <div className="project-editor">
    {(loading || uploading || pendingUploads.size > 0 || isAddingToTimeline || isDeleting || isSaving || isLoading) && (
      <div className="loading-container">
        <div className="branding-container">
          <h1>
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">I</span>
            <span className="letter">T</span>
            <span className="letter">H</span>
          </h1>
          <div className="logo-element"></div>
        </div>
      </div>
    )}
    {!(loading || uploading || pendingUploads.size > 0) && (
      <>      
    <aside className={`media-panel ${isMediaPanelOpen ? 'open' : 'closed'}`}>
      <div className="panel-header">
        <button className="toggle-button" onClick={toggleMediaPanel}>
          {isMediaPanelOpen ? '◄' : '►'}
        </button>
      </div>
      {isMediaPanelOpen && (
            <div className="panel-content">

              {/* AI SECTION */}
              <div className="divider-section">
                <hr className="divider-line" />
                <span className="divider-text">AI</span>
                <hr className="divider-line" />
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'aiSubtitles' ? 'active' : ''}`}
                  data-section="aiSubtitles"
                  onClick={() => toggleSection('aiSubtitles')}
                >
                  AI Subtitles
                </button>
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'aiVoice' ? 'active' : ''}`}
                  data-section="aiVoice"
                  onClick={() => toggleSection('aiVoice')}
                >
                  AI Voice
                </button>
              </div>              

              {/* MEDIA SECTION */}
              <div className="divider-section">
                <hr className="divider-line" />
                <span className="divider-text">Media</span>
                <hr className="divider-line" />
              </div>
              <div className="media-section">
                <button className="section-button" data-section="videos" onClick={() => toggleSection('videos')}>
                  Videos
                </button>
              </div>
              <div className="media-section">
                <button className="section-button" data-section="photos" onClick={() => toggleSection('photos')}>
                  Photos
                </button>
              </div>
              <div className="media-section">
                <button className="section-button" data-section="audios" onClick={() => toggleSection('audios')}>
                  Audio
                </button>
              </div>
              <div className="media-section">
                <button className="section-button" data-section="elements" onClick={() => toggleSection('elements')}>
                  Elements
                </button>
              </div>
              <div className="media-section">
                <button className="section-button" data-section="textStyles" onClick={() => toggleSection('textStyles')}>
                  Text Styles
                </button>
              </div>

              {/* EDIT SECTION */}
              <div className="divider-section">
                <hr className="divider-line" />
                <span className="divider-text">Edit Section</span>
                <hr className="divider-line" />
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'transform' ? 'active' : ''}`}
                  data-section="transform"
                  onClick={toggleTransformPanel}
                >
                  Transform
                </button>
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'text' ? 'active' : ''}`}
                  data-section="text"
                  onClick={toggleTextTool}
                  disabled={!selectedSegment || selectedSegment.type !== 'text'}
                >
                  Text
                </button>
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'filters' ? 'active' : ''}`}
                  data-section="filters"
                  onClick={toggleFiltersPanel}
                >
                  Filters
                </button>
              </div>
              <div className="media-section">
                <button
                  className={`section-button ${expandedSection === 'transitions' ? 'active' : ''}`}
                  data-section="transitions"
                  onClick={toggleTransitionsPanel}
                >
                  Transitions
                </button>
              </div>
            </div>
      )}
    </aside>

    {isContentPanelOpen && (
      <aside className="content-panel open">
        <div className="panel-header">
          <button className="toggle-button" onClick={() => {
            setIsContentPanelOpen(false);
            setExpandedSection(null);
            setIsTransformOpen(false);
            setIsFiltersOpen(false);
            setIsTextToolOpen(false);
            setIsTransitionsOpen(false);
          }}>
            ◄
          </button>
        </div>
        <div className="panel-content">
          {expandedSection === 'videos' && (
            <VideosPanel
              videos={videos}
              uploadProgress={uploadProgress}
              tempThumbnails={tempThumbnails}
              selectedVideo={selectedVideo}
              handleVideoUpload={handleVideoUpload}
              handleVideoClick={handleVideoClick}
              handleMediaDragStart={handleMediaDragStart}
            />
          )}
          {expandedSection === 'photos' && (
            <PhotosPanel
              photos={photos}
              uploadProgress={uploadProgress}
              handlePhotoUpload={handlePhotoUpload}
              handlePhotoClick={handlePhotoClick}
              handleMediaDragStart={handleMediaDragStart}
              handleRemoveBackground={handleRemoveBackground}
            />
          )}
          {expandedSection === 'audios' && (
            <AudiosPanel
              audios={audios}
              uploadProgress={uploadProgress}
              handleAudioUpload={handleAudioUpload}
              handleAudioClick={handleAudioClick}
              handleMediaDragStart={handleMediaDragStart}
            />
          )}
          {expandedSection === 'elements' && (
            <ElementsPanel
              elements={elements}
              elementSearchQuery={elementSearchQuery}
              setElementSearchQuery={setElementSearchQuery}
              handleElementClick={handleElementClick}
              handleMediaDragStart={handleMediaDragStart}
            />
          )}
          {expandedSection === 'textStyles' && (
            <TextStyles
              defaultTextStyles={defaultTextStyles}
              handleTextStyleDragStart={handleTextStyleDragStart}
              handleTextStyleClick={handleTextStyleClick}
            />
          )}
          {expandedSection === 'transform' && (
            <div className="section-content tool-subpanel transform-panel">
              <h3>Transform</h3>
              <KeyframeControls
                selectedSegment={selectedSegment}
                keyframes={keyframes}
                currentTimeInSegment={currentTimeInSegment}
                tempSegmentValues={tempSegmentValues}
                editingProperty={editingProperty}
                setTempSegmentValues={setTempSegmentValues}
                setEditingProperty={setEditingProperty}
                toggleKeyframe={toggleKeyframe}
                navigateKeyframes={navigateKeyframes}
                updateSegmentProperty={updateSegmentProperty}
                handleTimeUpdate={handleTimeUpdate}
                areTimesEqual={areTimesEqual}
                getValueAtTime={getValueAtTime}
                setCurrentTimeInSegment={setCurrentTimeInSegment}
                addKeyframe={addKeyframe}
                updateKeyframe={updateKeyframe}
                canvasDimensions={canvasDimensions}
              />
            </div>
          )}
          {expandedSection === 'filters' && (
            <div className="section-content tool-subpanel filter-panel">
              <h3>Filters</h3>
              <FilterControls
                selectedSegment={selectedSegment}
                filterParams={filterParams}
                appliedFilters={appliedFilters}
                updateFilterSetting={updateFilterSetting}
                resetFilters={resetFilters}
              />
            </div>
          )}
          {expandedSection === 'text' && (selectedSegment?.type === 'text' || multiSelectedSegments.every((seg) => seg.type === 'text')) && (
            <TextPanel
              textSettings={textSettings}
              updateTextSettings={updateTextSettings}
              isTextEmpty={isTextEmpty}
            />
          )}
          {expandedSection === 'transitions' && (
            <div className="section-content tool-subpanel transitions-panel">
              <h3>Transitions</h3>
              <TransitionsPanel
                availableTransitions={availableTransitions}
                selectedTransition={selectedTransition}
                handleTransitionDragStart={handleTransitionDragStart}
                handleTransitionDurationChange={handleTransitionDurationChange}
                handleTransitionDirectionChange={handleTransitionDirectionChange}
                handleTransitionDelete={handleTransitionDelete}
              />
            </div>
          )}
          {expandedSection === 'aiSubtitles' && (
            <AiSubtitlesPanel
              aiSubtitleStyles={aiSubtitleStyles}
              selectedAiStyle={selectedAiStyle}
              setSelectedAiStyle={setSelectedAiStyle}
              handleGenerateSubtitles={handleGenerateSubtitles}
              isAddingToTimeline={isAddingToTimeline}
            />
          )}
          {expandedSection === 'aiVoice' && (
            <AIVoicesPanel
              voices={voices}
              setVoices={setVoices}
              selectedVoice={selectedVoice}
              setSelectedVoice={setSelectedVoice}
              aiVoiceText={aiVoiceText}
              setAiVoiceText={setAiVoiceText}
              handleGenerateAiAudio={handleGenerateAiAudio}
              isAddingToTimeline={isAddingToTimeline}
            />
          )}                   
        </div>
    </aside>
  )}

    <div className="main-content">
      <div className="content-wrapper">
        <div className="preview-section" style={{ height: previewHeight }}>
          <VideoPreview
            videoLayers={videoLayers}
            audioLayers={audioLayers}
            currentTime={currentTime}
            isPlaying={isPlaying}
            canvasDimensions={canvasDimensions}
            totalDuration={totalDuration}
            onTimeUpdate={handleTimeUpdate}
            setIsPlaying={setIsPlaying}
            containerHeight={previewHeight}
            videos={videos}
            photos={photos}
            transitions={transitions}
            fps={projectFps}
            onLoadedAudioSegmentsUpdate={handleLoadedAudioSegmentsUpdate}
            onSegmentSelect={handleSegmentSelect}
            onSegmentPositionUpdate={handleSegmentPositionUpdate}
            selectedSegment={selectedSegment}
            updateSegmentProperty={updateSegmentProperty}
            projectId={projectId}
          />
        </div>
        {!isMobile && (
          <div
            className={`resize-preview-section ${isDraggingHandle ? 'dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          ></div>
        )}
        <div className="controls-panel">
          <button
            className="control-button dashboard-button"
            onClick={() => window.location.href = 'https://scenith.in/dashboard'}
            title="Back to Dashboard"
          >
            ← DASHBOARD
          </button>          
          <button className="control-button" onClick={handleSaveProject} title="Save Project">
            💾
          </button>
          <button
            className="delete-button"
            onClick={handleDeleteSegment}
            disabled={!selectedSegment}
            title="Delete Segment"
          >
            🗑️
          </button>
          <button
            className="delete-button"
            onClick={handleDeleteMultipleSegments}
            disabled={multiSelectedSegments.length < 2}
            title="Delete Selected Segments"
          >
            🗑️ All
          </button>          
          <button className="control-button" onClick={handleExportProject} title="Export Project">
            ⬆️
          </button>
          <button
            className="control-button"
            onClick={handleSelectSubtitles}
            title="Select All Subtitles"
          >
            ✅ Subtitles
          </button>          
        </div>
        <div
          className={`timeline-section ${isTimelineSelected ? 'selected' : ''}`}
          style={{ height: `${timelineHeight}%` }}
          ref={timelineRef}
        >
          {sessionId ? (
            <TimelineComponent
              videos={videos}
              audios={audios}
              sessionId={sessionId}
              projectId={projectId}
              totalDuration={totalDuration}
              setTotalDuration={setTotalDuration}
              onVideoSelect={(time, video) => setCurrentTime(time)}
              canvasDimensions={canvasDimensions}
              onTimeUpdate={(newTime) => handleTimeUpdate(newTime, false)}
              onSegmentSelect={handleSegmentSelect}
              videoLayers={videoLayers}
              audioLayers={audioLayers}
              setVideoLayers={setVideoLayers}
              setAudioLayers={setAudioLayers}
              thumbnailsGenerated={thumbnailsGenerated}
              openTextTool={openTextTool}
              timeScale={timeScale}
              setTimeScale={setTimeScale}
              setPlayheadFromParent={(setPlayhead) => (timelineSetPlayhead = setPlayhead)}
              onDeleteSegment={handleDeleteSegment}
              transitions={transitions}
              setTransitions={setTransitions}
              handleTransitionDrop={handleTransitionDrop}
              onTransitionSelect={handleTransitionSelect}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              fps={projectFps}
              saveHistory={saveHistory}
              canUndo={canUndo}
              canRedo={canRedo}
              currentTime={currentTime}
              onTimelineClick={() => setIsTimelineSelected(true)}
              MIN_TIME_SCALE={MIN_TIME_SCALE}
              MAX_TIME_SCALE={MAX_TIME_SCALE}
              isAddingToTimeline={isAddingToTimeline}
              setIsAddingToTimeline={setIsAddingToTimeline}
              isSaving={isSaving}
              setIsSaving={setIsSaving}
              setIsLoading={setIsLoading}
              multiSelectedSegments={multiSelectedSegments}   
              setMultiSelectedSegments={setMultiSelectedSegments}  
              setCurrentTime={setCurrentTime}
              isTimelineSelected={isTimelineSelected}
            />
          ) : (
            <div className="loading-container">
              <div className="branding-container">
                <h1>
                  <span className="letter">S</span>
                  <span className="letter">C</span>
                  <span className="letter">E</span>
                  <span className="letter">N</span>
                  <span className="letter">I</span>
                  <span className="letter">T</span>
                  <span className="letter">H</span>
                </h1>
                <div className="logo-element"></div>
              </div>
            </div>
          )}
        </div>
        <div className="zoom-slider-container">
          <input
            type="range"
            min={MIN_TIME_SCALE}
            max={MAX_TIME_SCALE}
            step={0.1}
            value={timeScale}
            onChange={(e) => {
              const newTimeScale = Number(e.target.value);
              const clampedTimeScale = Math.max(MIN_TIME_SCALE, Math.min(MAX_TIME_SCALE, newTimeScale));
              setTimeScale(clampedTimeScale);
            }}
            className="zoom-slider"
          />
          <span>Zoom: {timeScale.toFixed(1)}px/s</span>
        </div>
      </div>
    </div>
    </>
    )}
  </div>
);
};

const ProjectEditor = () => {
  return (
    <Suspense fallback={
      <div className="loading-container">
        <div className="branding-container">
          <h1>
            <span className="letter">S</span>
            <span className="letter">C</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">I</span>
            <span className="letter">T</span>
            <span className="letter">H</span>
          </h1>
          <div className="logo-element"></div>
        </div>
      </div>
    }>
      <ProjectEditorContent />
    </Suspense>
  );
};

export default ProjectEditor;