import React, { useRef, useEffect, useState, useCallback } from 'react';
import '../CSS/Timeline.css';
import axios from 'axios';
import TimelineControls from './TimelineControls';
import TimelineRuler from './TimelineRuler';
import TimelineLayer from './TimelineLayer';
import SnapIndicators from './SnapIndicators';
import DraggingGhost from './DraggingGhost';
import VideoSegmentHandler from './VideoSegmentHandler';
import TextSegmentHandler from './TextSegmentHandler';
import ImageSegmentHandler from './ImageSegmentHandler';
import AudioSegmentHandler from './AudioSegmentHandler';
import GeneralSegmentHandler from './GeneralSegmentHandler';
import { API_BASE_URL, CDN_URL } from "../Config";
import { every } from 'lodash';

import dynamic from 'next/dynamic';

const WaveSurfer = dynamic(() => import('wavesurfer.js'), { ssr: false });

const TimelineComponent = ({
  videos,
  sessionId,
  projectId,
  totalDuration,
  setTotalDuration,
  onVideoSelect,
  onTimeUpdate,
  onSegmentSelect,
  videoLayers,
  audioLayers,
  setVideoLayers,
  setAudioLayers,
  thumbnailsGenerated,
  openTextTool,
  timeScale,
  setPlayheadFromParent,
  transitions,
  setTransitions,
  handleTransitionDrop,
  onTransitionSelect,
  isPlaying,
  setIsPlaying,
  saveHistory,
  handleUndo,
  handleRedo,
  canUndo,
  canRedo,
  currentTime,
  onTimelineClick,
  setIsAddingToTimeline,
  setIsLoading,
  multiSelectedSegments,
  setMultiSelectedSegments,
  setCurrentTime,
  updateTimeoutRef,
  autoSaveProject,
  isTimelineSelected
}) => {
  const [timelineVideos, setTimelineVideos] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [dragLayer, setDragLayer] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [snapIndicators, setSnapIndicators] = useState([]);
  const [resizingItem, setResizingItem] = useState(null);
  const [resizeEdge, setResizeEdge] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isSplitMode, setIsSplitMode] = useState(false);
  const waveSurferInstances = useRef(new Map()); // Cache WaveSurfer instances
  const waveformDataCache = useRef(new Map()); // Cache waveform JSON data
  const [isResizing, setIsResizing] = useState(false); // Track resize state

  const SNAP_THRESHOLD = 0.5;
  const MAGNETIC_THRESHOLD = 0.2; // Time in seconds for magnetic snap to playhead

  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const playIntervalRef = useRef(null);

  // Initialize and update waveforms
  const initializeWaveform = useCallback(async (segment) => {
    if (!segment.waveformJsonPath || segment.type !== 'audio') {
      console.warn(`Skipping waveform initialization for segment ${segment.id}: ${!segment.waveformJsonPath ? 'Missing waveformJsonPath' : 'Not an audio segment'}`);
      return undefined;
    }
    const segmentId = segment.id;
    if (waveSurferInstances.current.has(segmentId)) {
      // console.log(`Waveform for segment ${segmentId} already initialized`);
      return undefined;
    }
  
    try {
      const token = localStorage.getItem('token');
      let waveformData = waveformDataCache.current.get(segment.waveformJsonPath);
      if (!waveformData) {
        const response = await axios.get(segment.waveformJsonPath, {
          headers: { Authorization: `Bearer ${token}` },
        });
        waveformData = response.data;
        waveformDataCache.current.set(segment.waveformJsonPath, waveformData);
      }
  
      const containerId = `waveform-segment-${segmentId}`;
      const container = document.querySelector(`#${containerId}`);
      if (!container) {
        console.warn(`Waveform container #${containerId} not found for segment ${segmentId}`);
        return undefined;
      }
  
      const { sampleRate, peaks } = waveformData;
      const fullDuration = peaks.length / sampleRate;
      const startTime = segment.startTimeWithinAudio || 0;
      const endTime = segment.endTimeWithinAudio || segment.duration;
  
      if (startTime < 0 || endTime > fullDuration || startTime >= endTime) {
        console.warn(`Invalid time range for segment ${segmentId}: startTime=${startTime}, endTime=${endTime}, fullDuration=${fullDuration}`);
        return undefined;
      }
  
      // Calculate pixel width of the segment
      const segmentDuration = endTime - startTime;
      const pixelWidth = segmentDuration * timeScale;
  
      // Skip rendering if waveform is too small (less than 10 pixels)
      if (pixelWidth < 10) {
        // console.log(`Skipping waveform rendering for segment ${segmentId}: pixelWidth=${pixelWidth} is too small`);
        return undefined;
      }
  
      // Dynamically adjust barWidth and barGap based on timeScale and duration
      const baseBarWidth = 2;
      const baseBarGap = 1;
      const scaleFactor = Math.max(0.1, Math.min(1, timeScale / 100));
      const barWidth = Math.max(1, baseBarWidth * scaleFactor);
      const barGap = Math.max(0.5, baseBarGap * scaleFactor);
  
      const startIndex = Math.floor((startTime / fullDuration) * peaks.length);
      let endIndex = Math.ceil((endTime / fullDuration) * peaks.length);
  
      endIndex = Math.min(endIndex, peaks.length);
  
      if (startIndex === endIndex && endIndex < peaks.length) {
        endIndex = startIndex + 1;
      } else if (startIndex >= endIndex) {
        console.warn(`Invalid index range for segment ${segmentId}: startIndex=${startIndex}, endIndex=${endIndex}`);
        return undefined;
      }
  
      const slicedPeaks = peaks.slice(startIndex, endIndex);
  
      if (slicedPeaks.length === 0) {
        console.warn(`No peaks available for segment ${segmentId} after slicing: startIndex=${startIndex}, endIndex=${endIndex}`);
        return undefined;
      }
  
      const wavesurfer = WaveSurfer.create({
        container: `#${containerId}`,
        waveColor: '#00FFFF',
        progressColor: '#FFFFFF',
        height: 30,
        normalize: false,
        cursorWidth: 0,
        barWidth,
        barGap,
      });
  
      // Ensure correct URL based on extracted
      const audioUrl = segment.extracted
        ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(segment.fileName)}`
        : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(segment.fileName)}`;
      wavesurfer.load(audioUrl, slicedPeaks, sampleRate);
      waveSurferInstances.current.set(segmentId, wavesurfer);
  
      // console.log(`Waveform initialized for segment ${segmentId} with barWidth=${barWidth}, barGap=${barGap}, pixelWidth=${pixelWidth}`);
  
      return () => {
        // console.log(`Cleaning up waveform for segment ${segmentId}`);
        wavesurfer.destroy();
        waveSurferInstances.current.delete(segmentId);
      };
    } catch (error) {
      console.error(`Error initializing waveform for segment ${segmentId}:`, error);
      return undefined;
    }
  }, [timeScale, projectId]); // Add projectId as a dependency

  // Update waveform for a specific segment (called after resize)
  const updateWaveform = useCallback((segment) => {
    const segmentId = segment.id;
    const wavesurfer = waveSurferInstances.current.get(segmentId);
    if (!wavesurfer) {
      console.warn(`No WaveSurfer instance found for segment ${segmentId}`);
      return;
    }
  
    const waveformData = waveformDataCache.current.get(segment.waveformJsonPath);
    if (!waveformData) {
      console.warn(`No waveform data found for segment ${segmentId}`);
      return;
    }
  
    const { sampleRate, peaks } = waveformData;
    const fullDuration = peaks.length / sampleRate;
    const startTime = segment.startTimeWithinAudio || 0;
    const endTime = segment.endTimeWithinAudio || segment.duration;
  
    // Calculate pixel width of the segment
    const segmentDuration = endTime - startTime;
    const pixelWidth = segmentDuration * timeScale;
  
    // Destroy waveform if too small
    if (pixelWidth < 10) {
      // console.log(`Destroying waveform for segment ${segmentId}: pixelWidth=${pixelWidth} is too small`);
      wavesurfer.destroy();
      waveSurferInstances.current.delete(segmentId);
      return;
    }
  
    // Dynamically adjust barWidth and barGap
    const baseBarWidth = 2;
    const baseBarGap = 1;
    const scaleFactor = Math.max(0.1, Math.min(1, timeScale / 100));
    const barWidth = Math.max(1, baseBarWidth * scaleFactor);
    const barGap = Math.max(0.5, baseBarGap * scaleFactor);
  
    const startIndex = Math.floor((startTime / fullDuration) * peaks.length);
    let endIndex = Math.ceil((endTime / fullDuration) * peaks.length);
  
    endIndex = Math.min(endIndex, peaks.length);
  
    if (startIndex === endIndex && endIndex < peaks.length) {
      endIndex = startIndex + 1;
    } else if (startIndex >= endIndex) {
      console.warn(`Invalid index range for segment ${segmentId}: startIndex=${startIndex}, endIndex=${endIndex}`);
      wavesurfer.destroy();
      waveSurferInstances.current.delete(segmentId);
      return;
    }
  
    const slicedPeaks = peaks.slice(startIndex, endIndex);
  
    if (slicedPeaks.length === 0) {
      console.warn(`No peaks available for segment ${segmentId} after slicing: startIndex=${startIndex}, endIndex=${endIndex}`);
      wavesurfer.destroy();
      waveSurferInstances.current.delete(segmentId);
      return;
    }
  
    // Update WaveSurfer options
    wavesurfer.setOptions({ barWidth, barGap });
    // Ensure correct URL based on extracted
    const audioUrl = segment.extracted
      ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(segment.fileName)}`
      : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(segment.fileName)}`;
    wavesurfer.load(audioUrl, slicedPeaks, sampleRate);
    // console.log(`Waveform updated for segment ${segmentId} with barWidth=${barWidth}, barGap=${barGap}, pixelWidth=${pixelWidth}`);
  }, [timeScale, projectId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeElement = document.activeElement;
      const isTextInput = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
      if (e.key.toLowerCase() === 's' && !isTextInput && isTimelineSelected) {
        e.preventDefault();
        toggleSplitMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTimelineSelected]);  

const handleCopySegment = async () => {
  if (!selectedSegment) return;

  const { type, startTime, duration, layerIndex } = selectedSegment;
  const endTime = startTime + duration;

  // Determine target layers based on segment type
  const targetLayers = type === 'audio' ? audioLayers : videoLayers;
  let targetLayerIndex = -1;

  // Find an available layer without overlap
  for (let i = 0; i < targetLayers.length; i++) {
    const layer = targetLayers[i];
    const hasOverlap = layer.some(
      (item) =>
        (startTime >= item.startTime && startTime < item.startTime + item.duration) ||
        (endTime > item.startTime && endTime <= item.startTime + item.duration) ||
        (startTime <= item.startTime && endTime >= item.startTime + item.duration)
    );
    if (!hasOverlap) {
      targetLayerIndex = i;
      break;
    }
  }

  // If no available layer, add a new one
  if (targetLayerIndex === -1) {
    targetLayerIndex = targetLayers.length;
    if (type === 'audio') {
      setAudioLayers((prev) => [...prev, []]);
    } else {
      setVideoLayers((prev) => [...prev, []]);
    }
  }

  try {
    setIsLoading(true);
    let newSegment = null;
    const backendLayer = type === 'audio' ? -(targetLayerIndex + 1) : targetLayerIndex;

    // Deep copy the selected segment to avoid reference issues, excluding the ID
    const segmentCopy = JSON.parse(JSON.stringify({ ...selectedSegment, id: undefined }));

    if (type === 'text') {
      newSegment = await textHandler.addTextToTimeline(backendLayer, startTime, {
        text: segmentCopy.text,
        fontFamily: segmentCopy.fontFamily || 'Arial',
        scale: segmentCopy.scale || 1.0,
        rotation: segmentCopy.rotation || 0,
        fontColor: segmentCopy.fontColor || '#FFFFFF',
        backgroundColor: segmentCopy.backgroundColor || 'transparent',
        positionX: segmentCopy.positionX || 0,
        positionY: segmentCopy.positionY || 0,
        alignment: segmentCopy.alignment || 'center',
        backgroundOpacity: segmentCopy.backgroundOpacity || 1.0,
        backgroundBorderWidth: segmentCopy.backgroundBorderWidth || 0,
        backgroundBorderColor: segmentCopy.backgroundBorderColor || '#000000',
        backgroundH: segmentCopy.backgroundH || 0,
        backgroundW: segmentCopy.backgroundW || 0,
        backgroundBorderRadius: segmentCopy.backgroundBorderRadius || 0,
        textBorderColor: segmentCopy.textBorderColor || 'transparent',
        textBorderWidth: segmentCopy.textBorderWidth || 0,
        textBorderOpacity: segmentCopy.textBorderOpacity || 1.0,
        letterSpacing: segmentCopy.letterSpacing || 0,
        lineSpacing: segmentCopy.lineSpacing || 1.2,
        duration,
        keyframes: segmentCopy.keyframes || {},
        opacity: segmentCopy.opacity || 1,
        isSubtitle: segmentCopy.isSubtitle || false,
      });
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= backendLayer) newLayers.push([]);
        newLayers[backendLayer].push({
          ...newSegment,
          layer: backendLayer,
          startTime: roundToThreeDecimals(startTime),
          duration: roundToThreeDecimals(duration),
          type: 'text',
          isSubtitle: newSegment.isSubtitle || false,
        });
        return newLayers;
      });
      newSegment = { ...newSegment, layerIndex: targetLayerIndex, type: 'text' };
    } else if (type === 'image') {
      newSegment = await imageHandler.addImageToTimeline(
        segmentCopy.fileName,
        backendLayer,
        roundToThreeDecimals(startTime),
        roundToThreeDecimals(endTime),
        segmentCopy.isElement || false
      );
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= backendLayer) newLayers.push([]);
        newLayers[backendLayer].push({
          ...newSegment,
          thumbnail: segmentCopy.thumbnail,
          positionX: segmentCopy.positionX || 0,
          positionY: segmentCopy.positionY || 0,
          scale: segmentCopy.scale || 1,
          rotation: segmentCopy.rotation || 0,
          opacity: segmentCopy.opacity || 1,
          cropL: segmentCopy.cropL || 0,
          cropR: segmentCopy.cropR || 0,
          cropT: segmentCopy.cropT || 0,
          cropB: segmentCopy.cropB || 0,
          keyframes: segmentCopy.keyframes || {},
          filters: segmentCopy.filters || [],
          type: 'image',
        });
        return newLayers;
      });
      newSegment = { ...newSegment, layerIndex: targetLayerIndex, type: 'image' };
    } else if (type === 'video') {
      try {
        // Call addVideoToTimeline to create a new video segment
        const response = await videoHandler.addVideoToTimeline(
          segmentCopy.fileName,
          backendLayer,
          roundToThreeDecimals(startTime),
          roundToThreeDecimals(endTime),
          roundToThreeDecimals(segmentCopy.startTimeWithinVideo || 0),
          roundToThreeDecimals(segmentCopy.endTimeWithinVideo || duration),
          false // Do not create an audio segment for the copied video
        );

        // Ensure newSegment.videoSegment exists
        if (!response.videoSegment) {
          throw new Error('Failed to create new video segment');
        }

        // Use the backend-generated segment
        newSegment = {
          ...response.videoSegment,
          layerIndex: targetLayerIndex,
          type: 'video',
          thumbnail: segmentCopy.thumbnail,
          positionX: segmentCopy.positionX || 0,
          positionY: segmentCopy.positionY || 0,
          scale: segmentCopy.scale || 1,
          rotation: segmentCopy.rotation || 0,
          opacity: segmentCopy.opacity || 1,
          cropL: segmentCopy.cropL || 0,
          cropR: segmentCopy.cropR || 0,
          cropT: segmentCopy.cropT || 0,
          cropB: segmentCopy.cropB || 0,
          keyframes: segmentCopy.keyframes || {},
          filters: segmentCopy.filters || [],
          speed: segmentCopy.speed || 1.0,
          startTimeWithinVideo: roundToThreeDecimals(segmentCopy.startTimeWithinVideo || 0),
          endTimeWithinVideo: roundToThreeDecimals(segmentCopy.endTimeWithinVideo || duration),
        };
      } catch (error) {
        console.error('Error copying video segment:', error);
        throw error; // Rethrow to be caught by the outer try-catch
      }
    } else if (type === 'audio') {
      newSegment = await audioHandler.addAudioToTimeline(
        segmentCopy.fileName,
        backendLayer,
        roundToThreeDecimals(startTime),
        roundToThreeDecimals(endTime),
        segmentCopy.extracted || false
      );
      setAudioLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= targetLayerIndex) newLayers.push([]);
        newLayers[targetLayerIndex].push({
          ...newSegment,
          startTime: roundToThreeDecimals(startTime),
          duration: roundToThreeDecimals(duration),
          timelineStartTime: roundToThreeDecimals(startTime),
          timelineEndTime: roundToThreeDecimals(endTime),
          startTimeWithinAudio: roundToThreeDecimals(segmentCopy.startTimeWithinAudio || 0),
          endTimeWithinAudio: roundToThreeDecimals(segmentCopy.endTimeWithinAudio || duration),
          volume: segmentCopy.volume || 1.0,
          keyframes: segmentCopy.keyframes || {},
          type: 'audio',
          url: segmentCopy.extracted
            ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(segmentCopy.fileName)}`
            : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(segmentCopy.fileName)}`,
          waveformJsonPath: segmentCopy.waveformJsonPath,
          extracted: segmentCopy.extracted || false,
        });
        return newLayers;
      });
      newSegment = { ...newSegment, layerIndex: targetLayerIndex, type: 'audio' };
    }

    if (!newSegment) {
      throw new Error(`Failed to create new ${type} segment`);
    }

    // Update total duration
    setTotalDuration((prev) => Math.max(prev, endTime));

    // Clear all selection states to prevent overlap
    setMultiSelectedSegments([]);
    setSelectedSegment(null);
    if (onSegmentSelect) onSegmentSelect(null);

    // Auto-save and save history
    await autoSave(videoLayers, audioLayers);
    saveHistory();

    // Select the new segment after state updates
    setTimeout(() => {
      setSelectedSegment(newSegment);
      if (onSegmentSelect) onSegmentSelect(newSegment);
    }, 0);
  } catch (error) {
    console.error('Error copying segment:', error);
    alert(`Failed to copy ${type} segment: ${error.message}`);
  } finally {
    setIsLoading(false);
  }
};

  // Initialize waveforms only on mount or when new segments are added
  useEffect(() => {
    const cleanup = [];
    audioLayers.forEach((layer) => {
      layer.forEach(async (segment) => {
        if (!waveSurferInstances.current.has(segment.id)) {
          const cleanupFn = await initializeWaveform(segment); // Await async function
          if (typeof cleanupFn === 'function') {
            cleanup.push(cleanupFn); // Only push valid functions
          } else {
            console.warn(`No cleanup function returned for segment ${segment.id}`);
          }
        }
      });
    });

    return () => {
      cleanup.forEach((fn) => {
        if (typeof fn === 'function') {
          fn(); // Ensure fn is a function before calling
        } else {
          console.warn('Invalid cleanup function detected:', fn);
        }
      });
      waveSurferInstances.current.forEach((ws) => {
        ws.destroy();
      });
      waveSurferInstances.current.clear();
    };
  }, [audioLayers, initializeWaveform]);

  // Expose updateWaveform globally
  useEffect(() => {
    window.updateWaveform = updateWaveform;
    return () => {
      delete window.updateWaveform;
    };
  }, [updateWaveform]);

useEffect(() => {
  if (!isSplitMode || !timelineRef.current) return;

  const handleMouseMove = (e) => {
    const rect = timelineRef.current.getBoundingClientRect();
    let mouseX;

    if (e.type === 'touchmove') {
      const touch = e.touches[0];
      mouseX = touch.clientX - rect.left;
    } else {
      mouseX = e.clientX - rect.left;
    }

    const mouseTime = mouseX / timeScale;

    if (Math.abs(mouseTime - currentTime) <= MAGNETIC_THRESHOLD) {
      if (playheadRef.current) {
        playheadRef.current.classList.add('magnetic');
      }
      timelineRef.current.classList.add('magnetic-cursor');
    } else {
      if (playheadRef.current) {
        playheadRef.current.classList.remove('magnetic');
      }
      timelineRef.current.classList.remove('magnetic-cursor');
    }
  };

  const handleMouseLeave = () => {
    if (playheadRef.current) {
      playheadRef.current.classList.remove('magnetic');
    }
    timelineRef.current.classList.remove('magnetic-cursor');
  };

  const timelineEl = timelineRef.current;
  timelineEl.addEventListener('mousemove', handleMouseMove);
  timelineEl.addEventListener('touchmove', handleMouseMove);
  timelineEl.addEventListener('mouseleave', handleMouseLeave);
  timelineEl.addEventListener('touchend', handleMouseLeave);

  return () => {
    timelineEl.removeEventListener('mousemove', handleMouseMove);
    timelineEl.removeEventListener('touchmove', handleMouseMove);
    timelineEl.removeEventListener('mouseleave', handleMouseLeave);
    timelineEl.removeEventListener('touchend', handleMouseLeave);
    if (timelineRef.current) {
      timelineRef.current.classList.remove('magnetic-cursor');
    }
  };
}, [isSplitMode, currentTime, timeScale]);

const handleVideoSelect = (videoId, event) => {
  if (isSplitMode) return;
  setPlayingVideoId(videoId);
  let selected = null;

  if (event && event.shiftKey) {
    let newMultiSelected = [...multiSelectedSegments];
    for (let i = 0; i < videoLayers.length; i++) {
      const item = videoLayers[i].find((v) => v.id === videoId);
      if (item) {
        selected = { ...item, layerIndex: i };
        if (newMultiSelected.some((seg) => seg.id === item.id)) {
          // Deselect if already selected
          newMultiSelected = newMultiSelected.filter((seg) => seg.id !== item.id);
        } else {
          // Add to multi-selection
          newMultiSelected.push(selected);
        }
        break;
      }
    }
    if (!selected) {
      for (let i = 0; i < audioLayers.length; i++) {
        const item = audioLayers[i].find((v) => v.id === videoId);
        if (item) {
          selected = { ...item, layerIndex: i };
          if (newMultiSelected.some((seg) => seg.id === item.id)) {
            newMultiSelected = newMultiSelected.filter((seg) => seg.id !== item.id);
          } else {
            newMultiSelected.push(selected);
          }
          break;
        }
      }
    }
    setMultiSelectedSegments(newMultiSelected);
    setSelectedSegment(null);
    if (onSegmentSelect) {
      onSegmentSelect(null, newMultiSelected); // Pass multiSelected array
    }
  } else {
    // Single selection
    setMultiSelectedSegments([]); // Clear multi-selection
    for (let i = 0; i < videoLayers.length; i++) {
      const item = videoLayers[i].find((v) => v.id === videoId);
      if (item) {
        selected = { ...item, layerIndex: i };
        setSelectedSegment(selected);
        break;
      }
    }
    if (!selected) {
      for (let i = 0; i < audioLayers.length; i++) {
        const item = audioLayers[i].find((v) => v.id === videoId);
        if (item) {
          selected = { ...item, layerIndex: i };
          setSelectedSegment(selected);
          break;
        }
      }
    }
    if (onSegmentSelect) onSegmentSelect(selected, []); // Pass empty multiSelected for single selection
  }
  if (selected && onTimelineClick) onTimelineClick();
};

  
  const autoSave = useCallback(
    (newVideoLayers, newAudioLayers) => {
      const autoSaveTimeout = setTimeout(async () => {
        if (!projectId || !sessionId) return;
        try {
          setIsSaving(true);
          const token = localStorage.getItem('token');
          const segments = flattenLayersToSegments([...newVideoLayers, ...newAudioLayers]);
          await axios.post(
            `${API_BASE_URL}/projects/${projectId}/save`,
            { timelineState: { segments } },
            {
              params: { sessionId },
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          // console.log('Project auto-saved');
        } catch (error) {
          console.error('Error during auto-save:', error);
        } finally {
          setIsSaving(false);
        }
      }, 1000);
      return () => clearTimeout(autoSaveTimeout);
    },
    [projectId, sessionId]
  );

  // Modified to use currentTime prop instead of local playhead
  useEffect(() => {
    if (setPlayheadFromParent) {
      setPlayheadFromParent((newTime, shouldUpdateParent = true) => {
        if (shouldUpdateParent && onTimeUpdate) {
          onTimeUpdate(newTime);
        }
      });
    }
  }, [setPlayheadFromParent, onTimeUpdate]);

  const generateVideoThumbnail = async (videoPath) => {
  // const fileName = videoPath.split('/').pop();
  // const fullVideoPath = `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(fileName)}`;
  // return new Promise((resolve) => {
  //   const video = document.createElement('video');
  //   video.crossOrigin = 'anonymous';
  //   video.src = fullVideoPath;
  //   video.muted = true;

  //   video.onloadeddata = () => {
  //     video.currentTime = 1;
  //   };

  //   video.onseeked = () => {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d');
  //     const maxWidth = 120;
  //     const maxHeight = 80;
  //     let width = video.videoWidth;
  //     let height = video.videoHeight;

  //     if (width > height) {
  //       if (width > maxWidth) {
  //         height = (height * maxWidth) / width;
  //         width = maxWidth;
  //       }
  //     } else {
  //       if (height > maxHeight) {
  //         width = (width * maxHeight) / height;
  //         height = maxHeight;
  //       }
  //     }

  //     canvas.width = width;
  //     canvas.height = height;
  //     ctx.drawImage(video, 0, 0, width, height);
  //     const thumbnail = canvas.toDataURL('image/jpeg');
  //     resolve(thumbnail);
  //   };

  //   video.onerror = () => {
  //     console.error(`Failed to load video for thumbnail: ${fullVideoPath}`);
  //     resolve(null);
  //   };
  // });
};

  const generateImageThumbnail = async (imagePath, isElement = false) => {
    // const filename = imagePath.split('/').pop();
    // const fullImagePath = isElement
    //   ? `${CDN_URL}/elements/${encodeURIComponent(filename)}`
    //   : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename)}`;
    // return new Promise((resolve) => {
    //   const img = new Image();
    //   img.crossOrigin = 'anonymous';
    //   img.src = fullImagePath;
    //   img.onload = () => {
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');
    //     const maxWidth = 120;
    //     const maxHeight = 80;
    //     let width = img.width;
    //     let height = img.height;
  
    //     if (width > height) {
    //       if (width > maxWidth) {
    //         height = (height * maxWidth) / width;
    //         width = maxWidth;
    //       }
    //     } else {
    //       if (height > maxHeight) {
    //         width = (width * maxHeight) / height;
    //         height = maxHeight;
    //       }
    //     }
  
    //     canvas.width = width;
    //     canvas.height = height;
    //     ctx.drawImage(img, 0, 0, width, height);
    //     const thumbnail = canvas.toDataURL('image/jpeg');
    //     resolve(thumbnail);
    //   };
    //   img.onerror = () => {
    //     console.error(`Failed to load image for thumbnail: ${fullImagePath}`);
    //     resolve(null);
    //   };
    // });
  };

  const loadProjectTimeline = async () => {
    if (!projectId || !sessionId) return;
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const project = response.data;
      // console.log('Backend timelineState:', JSON.stringify(project.timelineState, null, 2));
  
      if (project && project.timelineState) {
        const timelineState = typeof project.timelineState === 'string' ? JSON.parse(project.timelineState) : project.timelineState;
        const newVideoLayers = [[], [], []];
        const newAudioLayers = [[], [], []];
  
        // Map filters to segments
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
            if (segment.sourceVideoPath) {
              while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
              let videoFileName = segment.sourceVideoPath.split('/').pop();
              let video = videos.find((v) => v.fileName === videoFileName);
              if (video) {
                const thumbnail = await generateVideoThumbnail(segment.sourceVideoPath);
                const filters = filterMap[segment.id] || [];
                // console.log(`Video segment ID ${segment.id}: filters=`, JSON.stringify(filters, null, 2));
                newVideoLayers[layerIndex].push({
                  ...video,
                  type: 'video',
                  id: segment.id,
                  startTime: segment.timelineStartTime,
                  duration: segment.timelineEndTime - segment.timelineStartTime,
                  layer: layerIndex,
                  filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(videoFileName)}`,
                  positionX: segment.positionX ?? 0,
                  positionY: segment.positionY ?? 0,
                  scale: segment.scale ?? 1,
                  rotation: segment.rotation ?? 0,
                  startTimeWithinVideo: segment.startTime,
                  endTimeWithinVideo: segment.endTime,
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
              } else {
                console.warn(`Video with filename ${videoFileName} not found in videos list`);
              }
            }
          }
        }
  
        if (timelineState.imageSegments && timelineState.imageSegments.length > 0) {
          for (const imageSegment of timelineState.imageSegments) {
            const layerIndex = imageSegment.layer || 0;
            if (layerIndex < 0) continue;
            while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
            const filename = imageSegment.imagePath.split('/').pop();
            const isElement = imageSegment.element || false;
            const filePath = isElement
              ? `${CDN_URL}/elements/${encodeURIComponent(filename)}`
              : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename)}`;
            const thumbnail = await generateImageThumbnail(imageSegment.imagePath, isElement);
            const filters = filterMap[imageSegment.id] || [];
            // console.log(`Image segment ID ${imageSegment.id}: filters=`, JSON.stringify(filters, null, 2));
            newVideoLayers[layerIndex].push({
              id: imageSegment.id,
              type: 'image',
              fileName: filename,
              filePath,
              thumbnail,
              startTime: imageSegment.timelineStartTime,
              duration: imageSegment.timelineEndTime - imageSegment.timelineStartTime,
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
              cropB: imageSegment.cropB || 0,
            });
          }
        }
  
        if (timelineState.textSegments && timelineState.textSegments.length > 0) {
          for (const textSegment of timelineState.textSegments) {
            const layerIndex = textSegment.layer || 0;
            if (layerIndex < 0) continue;
            while (newVideoLayers.length <= layerIndex) newVideoLayers.push([]);
            // console.log(`Text segment ID ${textSegment.id}: no filters applied`);
            newVideoLayers[layerIndex].push({
              id: textSegment.id,
              type: 'text',
              text: textSegment.text,
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
              backgroundH: textSegment.backgroundH || 0,
              backgroundW: textSegment.backgroundW || 0,
              backgroundBorderRadius: textSegment.backgroundBorderRadius || 0,
              textBorderColor: textSegment.textBorderColor || 'transparent',
              textBorderWidth: textSegment.textBorderWidth || 0,
              textBorderOpacity: textSegment.textBorderOpacity || 1.0,
              letterSpacing: textSegment.letterSpacing || 0,
              lineSpacing: textSegment.lineSpacing || 1.2,
              keyframes: textSegment.keyframes || {},
              opacity: textSegment.opacity || 1,
              isSubtitle: textSegment.isSubtitle || false,
            });
          }
        }
  
        if (timelineState.audioSegments && timelineState.audioSegments.length > 0) {
          // console.log('Processing audioSegments:', timelineState.audioSegments);
          for (const audioSegment of timelineState.audioSegments) {
            const backendLayer = audioSegment.layer || -1;
            const layerIndex = Math.abs(backendLayer) - 1;
            while (newAudioLayers.length <= layerIndex) newAudioLayers.push([]);
            const filename = audioSegment.audioFileName || audioSegment.audioPath.split('/').pop();
            const extracted = audioSegment.extracted || false;
            const audioUrl = extracted
              ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(filename)}`
              : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(filename)}`;
            const waveformJsonPath = audioSegment.waveformJsonPath
              ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
              : null;
            // console.log(`Audio segment ID ${audioSegment.id}: no filters applied`);
            const sanitizedId = audioSegment.id.replace(/[^a-zA-Z0-9]/g, '-');
            const newSegment = {
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
            };
            // console.log(`Created audio segment, ${sanitizedId} with URL: ${audioUrl}, waveformJsonPath: ${waveformJsonPath}`, newSegment);
            newAudioLayers[layerIndex].push(newSegment);
          }
        } else {
          console.warn('No audioSegments found in timelineState');
        }
  
        // Fetch transitions
        const transitionsResponse = await axios.get(
          `${API_BASE_URL}/projects/${projectId}/transitions`,
          { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
        );
  
        // console.log('Loaded videoLayers:', JSON.stringify(newVideoLayers, null, 2));
        // console.log('Loaded audioLayers:', JSON.stringify(newAudioLayers, null, 2));
        setVideoLayers(newVideoLayers);
        setAudioLayers(newAudioLayers);
        setTransitions(transitionsResponse.data || []);
        let maxEndTime = 0;
        [...newVideoLayers, ...newAudioLayers].forEach((layer) => {
          layer.forEach((item) => {
            const endTime = item.startTime + item.duration;
            if (endTime > maxEndTime) maxEndTime = endTime;
          });
        });
        setTotalDuration(maxEndTime > 0 ? maxEndTime : 0);
  
        // console.log('Setting videoLayers and triggering state refresh');
        if (onSegmentSelect) {
          // console.log('Calling onSegmentSelect with null to refresh state');
          onSegmentSelect(null);
        }
      }
    } catch (error) {
      console.error('Error loading project timeline:', error);
    }
  };

  useEffect(() => {
    if (projectId && sessionId && thumbnailsGenerated) {
      loadProjectTimeline().then(() => {
        setVideoLayers((prev) => [...prev]);
        setAudioLayers((prev) => [...prev]);
        if (onSegmentSelect) {
          onSegmentSelect(null);
        }
      });
    }
  }, [projectId, sessionId, thumbnailsGenerated]);

  const roundToThreeDecimals = (value) => {
    if (value == null || isNaN(value)) return 0;
    return Math.round(value * 1000) / 1000;
  };

  const videoHandler = VideoSegmentHandler({
    projectId,
    sessionId,
    videoLayers,
    setVideoLayers,
    audioLayers,
    setAudioLayers,
    saveHistory,
    autoSave,
    loadProjectTimeline,
    API_BASE_URL,
    timelineRef,
    roundToThreeDecimals,
    setTotalDuration,
    setIsLoading,
    setCurrentTime,
    updateTimeoutRef,
    videos,
    autoSaveProject
  });

  const textHandler = TextSegmentHandler({
    projectId,
    sessionId,
    videoLayers,
    setVideoLayers,
    saveHistory,
    autoSave,
    loadProjectTimeline,
    API_BASE_URL,
    timelineRef,
    roundToThreeDecimals,
    setIsAddingToTimeline,
    setIsLoading
  });

  const imageHandler = ImageSegmentHandler({
    projectId,
    sessionId,
    videoLayers,
    audioLayers,
    setVideoLayers,
    saveHistory,
    autoSave,
    loadProjectTimeline,
    API_BASE_URL,
    timelineRef,
    roundToThreeDecimals,
    setIsAddingToTimeline,
    setIsLoading, 
  });

  const audioHandler = AudioSegmentHandler({
    projectId,
    sessionId,
    audioLayers,
    setAudioLayers,
    saveHistory,
    autoSave,
    loadProjectTimeline,
    API_BASE_URL,
    timelineRef,
    roundToThreeDecimals,
    setTotalDuration,
    videoLayers,
    setIsAddingToTimeline,
    setIsLoading
  });

  const generalHandler = GeneralSegmentHandler({
    videoLayers,
    audioLayers,
    setVideoLayers,
    setAudioLayers,
    timeScale,
    setSnapIndicators,
    draggingItem,
    setDraggingItem,
    dragLayer,
    setDragLayer,
    dragOffset,
    setDragOffset,
    resizingItem,
    setResizingItem,
    resizeEdge,
    setResizeEdge,
    timelineRef,
    isSplitMode,
    saveHistory,
    autoSave,
    SNAP_THRESHOLD,
    updateSegmentPosition: videoHandler.updateSegmentPosition,
    updateTextSegment: textHandler.updateTextSegment,
    updateImageSegment: imageHandler.updateImageSegment,
    updateAudioSegment: audioHandler.updateAudioSegment,
    fetchVideoDuration: videoHandler.fetchVideoDuration,
    fetchAudioDuration: audioHandler.fetchAudioDuration, // Pass fetchAudioDuration
    currentTime,
    roundToThreeDecimals,
    handleVideoSelect, // Automatically select the segment
    isResizing, // Add isResizing
    setIsResizing, // Add setIsResizing
  });

  useEffect(() => {
    const calculateDuration = () => {
      let maxDuration = 0;
      [...videoLayers, ...audioLayers].forEach((layer) => {
        layer.forEach((item) => {
          const endTime = item.startTime + item.duration;
          if (endTime > maxDuration) maxDuration = endTime;
        });
      });
      setTotalDuration(maxDuration > 0 ? maxDuration : 0);
    };
    calculateDuration();
  }, [videoLayers, audioLayers, setTotalDuration]);

  const findAdjacentSegments = (timelinePosition, layerIndex, videoLayers) => {
    if (layerIndex < 0 || layerIndex >= videoLayers.length) {
      return { segment: null, start: false, end: false };
    }

    const layer = videoLayers[layerIndex];
    let segment = null;
    let start = false;
    let end = false;
    const SNAP_THRESHOLD = 0.1; // Time in seconds to consider a transition near start/end

    for (const seg of layer) {
      const segmentStart = seg.startTime;
      const segmentEnd = seg.startTime + seg.duration;

      // Check if the drop position is near the start of the segment
      if (Math.abs(timelinePosition - segmentStart) <= SNAP_THRESHOLD) {
        segment = seg;
        start = true;
        break;
      }
      // Check if the drop position is near the end of the segment
      else if (Math.abs(timelinePosition - segmentEnd) <= SNAP_THRESHOLD) {
        segment = seg;
        end = true;
        break;
      }
      // Check if the drop position is within the segment
      else if (timelinePosition > segmentStart && timelinePosition < segmentEnd) {
        segment = seg;
        // Decide whether to apply at start or end based on proximity
        const distToStart = timelinePosition - segmentStart;
        const distToEnd = segmentEnd - timelinePosition;
        if (distToStart < distToEnd) {
          start = true;
        } else {
          end = true;
        }
        break;
      }
    }

    return { segment, start, end };
  };

  const handleDrop = async (e) => {
    if (isSplitMode) return;
    e.preventDefault();
    e.stopPropagation();
    const dragElements = document.querySelectorAll('.dragging');
    dragElements.forEach((el) => el.classList.remove('dragging'));
    if (timelineRef.current) timelineRef.current.classList.remove('showing-new-layer');
  
    setDraggingItem(null);
    setDragLayer(null);
    setDragOffset(0);
    setSnapIndicators([]);
  
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const dataString = e.dataTransfer.getData('application/json');
    let dragData = null;
    if (dataString) {
      try {
        dragData = JSON.parse(dataString);
      } catch (error) {
        console.error('Error parsing drag data:', error);
      }
    }
  
    if (dragData?.type === 'transition') {
      const rect = timelineRef.current.getBoundingClientRect();
      const clickX = mouseX - rect.left;
      const timelinePosition = clickX / timeScale;
      const layerHeight = 40;
      const totalVideoLayers = videoLayers.length;
      const totalAudioLayers = audioLayers.length;
      const totalLayers = totalVideoLayers + totalAudioLayers + 2;
      const reversedIndex = Math.floor((mouseY - rect.top) / layerHeight);
      let layerIndex;
      let isAudioLayer = false;
  
      if (reversedIndex <= totalVideoLayers) {
        layerIndex = totalVideoLayers - reversedIndex;
      } else if (reversedIndex >= totalVideoLayers + 1 && reversedIndex < totalLayers - 1) {
        layerIndex = totalLayers - 2 - reversedIndex;
        isAudioLayer = true;
      } else {
        layerIndex = 0;
      }
  
      if (!isAudioLayer && layerIndex >= 0 && layerIndex < videoLayers.length) {
        const { segment, start, end } = findAdjacentSegments(timelinePosition, layerIndex, videoLayers);
        if (segment && (start || end)) {
          await handleTransitionDrop(
            segment.id,
            start,
            end,
            layerIndex,
            timelinePosition,
            dragData.transition.type
          );
          saveHistory();
        } else {
          console.warn('No valid segment found for transition drop');
        }
      } else {
        console.warn('Transition drop ignored: Invalid layer or audio layer');
      }
  
      setDraggingItem(null);
      setDragLayer(null);
      setDragOffset(0);
      setSnapIndicators([]);
      return;
    }
  
    if (dragData?.type === 'audio' || (draggingItem && draggingItem.type === 'audio')) {
      const audioDropResult = await audioHandler.handleAudioDrop(
        e,
        draggingItem,
        dragLayer,
        mouseX,
        mouseY,
        timeScale,
        dragOffset,
        snapIndicators
      );
      if (audioDropResult && audioDropResult.newSegment) {
        // Update waveformJsonPath and extracted based on backend response
        const waveformJsonPath = audioDropResult.response.waveformJsonPath
          ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioDropResult.response.waveformJsonPath.split('/').pop())}`
          : null;
        const extracted = audioDropResult.response.extracted || false;
        setAudioLayers((prevLayers) => {
          const newLayers = [...prevLayers];
          const layerIndex = Math.abs(audioDropResult.newSegment.layer) - 1;
          newLayers[layerIndex] = newLayers[layerIndex].map((segment) =>
            segment.id === audioDropResult.newSegment.id
              ? {
                  ...segment,
                  waveformJsonPath,
                  extracted,
                  url: extracted
                    ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(segment.fileName)}`
                    : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(segment.fileName)}`,
                }
              : segment
          );
          return newLayers;
        });
        setDraggingItem(null);
        setDragLayer(null);
        setDragOffset(0);
        setSnapIndicators([]);
        saveHistory();
        return;
      }
      setDraggingItem(null);
      setDragLayer(null);
      setDragOffset(0);
      setSnapIndicators([]);
      saveHistory();
    }
  
    if (dragData?.type === 'media' || (draggingItem && draggingItem.type === 'video')) {
      await videoHandler.handleVideoDrop(
        e,
        draggingItem,
        dragLayer,
        mouseX,
        mouseY,
        timeScale,
        dragOffset,
        snapIndicators
      );
      setDraggingItem(null);
      setDragLayer(null);
      setDragOffset(0);
      setSnapIndicators([]);
      return;
    }
  
    if (
      dragData?.type === 'photo' ||
      dragData?.type === 'element' ||
      (draggingItem && draggingItem.type === 'image')
    ) {
      const isElement = dragData?.type === 'element';
      const imageDropResult = await imageHandler.handleImageDrop(
        e,
        draggingItem,
        dragLayer,
        mouseX,
        mouseY,
        timeScale,
        dragOffset,
        snapIndicators,
        isElement
      );
      if (imageDropResult && imageDropResult.newSegment) {
        setVideoLayers((prevLayers) => {
          const newLayers = [...prevLayers];
          const layerIndex = imageDropResult.newSegment.layer;
          newLayers[layerIndex] = newLayers[layerIndex].map((segment) =>
            segment.id === imageDropResult.newSegment.id
              ? {
                  ...segment,
                  filePath: isElement
                    ? `${CDN_URL}/elements/${encodeURIComponent(segment.fileName)}`
                    : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(segment.fileName)}`,
                  isElement,
                }
              : segment
          );
          return newLayers;
        });
      }
      if (imageDropResult === undefined) {
        setDraggingItem(null);
        setDragLayer(null);
        setDragOffset(0);
        setSnapIndicators([]);
        return;
      }
      saveHistory();
    }
  
    if (dragData?.type === 'textStyle') {
      const style = dragData.textStyle;
      const rect = timelineRef.current.getBoundingClientRect();
      const clickX = mouseX - rect.left;
      const timelinePosition = clickX / timeScale;
      const layerHeight = 40;
      const totalVideoLayers = videoLayers.length;
      const totalAudioLayers = audioLayers.length;
      const totalLayers = totalVideoLayers + totalAudioLayers + 2;
      const reversedIndex = Math.floor((mouseY - rect.top) / layerHeight);
      let layerIndex;
  
      if (reversedIndex <= totalVideoLayers) {
        layerIndex = totalVideoLayers - reversedIndex;
      } else {
        layerIndex = 0;
      }
  
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        while (newLayers.length <= layerIndex) newLayers.push([]);
        return newLayers;
      });
  
      try {
        const token = localStorage.getItem('token');
        const duration = style.duration || 5;
        const response = await axios.post(
          `${API_BASE_URL}/projects/${projectId}/add-text`,
          {
            text: style.text,
            layer: layerIndex,
            timelineStartTime: roundToThreeDecimals(timelinePosition),
            timelineEndTime: roundToThreeDecimals(timelinePosition + duration),
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
            textBorderColor: style.textBorderColor || 'transparent',
            textBorderWidth: style.textBorderWidth || 0,
            textBorderOpacity: style.textBorderOpacity || 1.0,
            letterSpacing: style.letterSpacing || 0,
            lineSpacing: style.lineSpacing || 1.2,
            isSubtitle: false,
          },
          { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
        );
        const newTextSegment = response.data;
        const newSegment = {
          id: newTextSegment.textSegmentId,
          type: 'text',
          text: style.text,
          startTime: roundToThreeDecimals(timelinePosition),
          duration: duration,
          layer: layerIndex,
          fontFamily: style.fontFamily || 'Arial',
          scale: style.scale || 1.0,
          rotation: style.rotation || 0,
          fontColor: style.fontColor || '#FFFFFF',
          backgroundColor: style.backgroundColor || 'transparent',
          positionX: style.positionX || 0,
          positionY: style.positionY || 0,
          alignment: style.alignment || 'center',
          backgroundOpacity: style.backgroundOpacity ?? 1.0,
          backgroundBorderWidth: style.backgroundBorderWidth ?? 0,
          backgroundBorderColor: style.backgroundBorderColor || '#000000',
          backgroundH: style.backgroundH || 0,
          backgroundW: style.backgroundW || 0,
          backgroundBorderRadius: style.backgroundBorderRadius || 0,
          textBorderColor: style.textBorderColor || 'transparent',
          textBorderWidth: style.textBorderWidth || 0,
          textBorderOpacity: style.textBorderOpacity || 1.0,
          letterSpacing: style.letterSpacing || 0,
          lineSpacing: style.lineSpacing || 1.2,
          keyframes: {},
          isSubtitle: newTextSegment.isSubtitle || false,
        };
  
        setVideoLayers((prevLayers) => {
          const newLayers = [...prevLayers];
          newLayers[layerIndex].push(newSegment);
          return newLayers;
        });
  
        setTotalDuration((prev) => Math.max(prev, timelinePosition + duration));
        if (onSegmentSelect) {
          onSegmentSelect(newSegment);
        }
        saveHistory();
        autoSave(videoLayers, audioLayers);
      } catch (error) {
        console.error('Error adding text style to timeline:', error);
      }
  
      setDraggingItem(null);
      setDragLayer(null);
      setDragOffset(0);
      setSnapIndicators([]);
      return;
    }
  
    const textDropResult = await textHandler.handleTextDrop(
      e,
      draggingItem,
      dragLayer,
      mouseX,
      mouseY,
      timeScale,
      dragOffset,
      snapIndicators
    );
    if (textDropResult) {
      setDraggingItem(null);
      setDragLayer(null);
      setDragOffset(0);
      setSnapIndicators([]);
      saveHistory();
      return;
    }
  
    setDraggingItem(null);
    setDragLayer(null);
    setDragOffset(0);
    setSnapIndicators([]);
  };

  const handleTimelineClick = async (e) => {

    if (e.target.closest('.timeline-controls')) {
      return;
    } 
       
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
  
    const isTouchEvent = e.type === 'touchstart' || e.type === 'touchend';
    if (isTouchEvent) {
      e.preventDefault();
    }
    const clientX = isTouchEvent ? e.changedTouches[0].clientX : e.clientX;
    const clientY = isTouchEvent ? e.changedTouches[0].clientY : e.clientY;
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;
  
    let clickTime = clickX / timeScale;
  
    if (isSplitMode && Math.abs(clickTime - currentTime) <= MAGNETIC_THRESHOLD) {
      clickTime = currentTime;
    }
  
    const layerHeight = 40;
    const totalVideoLayers = videoLayers.length;
    const totalAudioLayers = audioLayers.length;
    const totalLayers = totalVideoLayers + totalAudioLayers + 2;
    const reversedIndex = Math.floor(clickY / layerHeight);
    let clickedLayerIndex;
    let isAudioLayer = false;
  
    if (reversedIndex === totalVideoLayers + 1) {
      if (isSplitMode) {
        return;
      }
      onTimeUpdate(clickTime);
      setPlayingVideoId(null);
      setSelectedSegment(null);
      setMultiSelectedSegments([]); // Clear multi-selection
      if (onSegmentSelect) onSegmentSelect(null);
      return;
    }
  
    if (reversedIndex > totalVideoLayers && reversedIndex < totalLayers - 1) {
      isAudioLayer = true;
      const audioLayerIndex = reversedIndex - (totalVideoLayers + 1);
      clickedLayerIndex = audioLayerIndex >= 0 && audioLayerIndex < audioLayers.length ? audioLayerIndex : -1;
    } else if (reversedIndex <= totalVideoLayers) {
      clickedLayerIndex = totalVideoLayers - reversedIndex;
    } else {
      clickedLayerIndex = -1;
    }
  
    let foundItem = null;
    const targetLayers = isAudioLayer ? audioLayers : videoLayers;
  
    if (isAudioLayer && clickedLayerIndex >= 0 && clickedLayerIndex < audioLayers.length) {
      const layerItems = audioLayers[clickedLayerIndex];
      foundItem = layerItems.find((item) => {
        const itemStart = item.startTime;
        const itemEnd = itemStart + item.duration;
        const tolerance = 0.05;
        return clickTime >= itemStart - tolerance && clickTime <= itemEnd + tolerance;
      });
    } else if (!isAudioLayer && clickedLayerIndex >= 0 && clickedLayerIndex < videoLayers.length) {
      const layerItems = videoLayers[clickedLayerIndex];
      foundItem = layerItems.find((item) => {
        const itemStart = item.startTime;
        const itemEnd = itemStart + item.duration;
        const tolerance = 0.05;
        return clickTime >= itemStart - tolerance && clickTime <= itemEnd + tolerance;
      });
    }
  
    if (isSplitMode && foundItem) {
      if (foundItem.type === 'video') {
        await videoHandler.handleVideoSplit(foundItem, clickTime, clickedLayerIndex);
        saveHistory();
      } else if (foundItem.type === 'audio') {
        await audioHandler.handleAudioSplit(foundItem, clickTime, clickedLayerIndex);
        saveHistory();
      } else if (foundItem.type === 'text') {
        await textHandler.handleTextSplit(foundItem, clickTime, clickedLayerIndex);
        saveHistory();
      } else if (foundItem.type === 'image') {
        await imageHandler.handleImageSplit(foundItem, clickTime, clickedLayerIndex);
        saveHistory();
      }
      setSelectedSegment(null);
      setMultiSelectedSegments([]); // Clear multi-selection
      setPlayingVideoId(null);
      return;
    }
  
    if (!isSplitMode) {
      onTimeUpdate(clickTime);
      setPlayingVideoId(null);
      setSelectedSegment(null);
      setMultiSelectedSegments([]); // Clear multi-selection
      if (onSegmentSelect) onSegmentSelect(null);
    }
  
    if (!foundItem && !isSplitMode) {
      if (isAudioLayer) {
        for (let i = 0; i < audioLayers.length; i++) {
          if (i === clickedLayerIndex) continue;
          const layerItems = audioLayers[i];
          const found = layerItems.find((item) => {
            const itemStart = item.startTime;
            const itemEnd = itemStart + item.duration;
            const tolerance = 0.05;
            return clickTime >= itemStart - tolerance && clickTime <= itemEnd + tolerance;
          });
          if (found) {
            foundItem = found;
            clickedLayerIndex = i;
            break;
          }
        }
      } else {
        for (let i = 0; i < videoLayers.length; i++) {
          if (i === clickedLayerIndex) continue;
          const layerItems = videoLayers[i];
          const found = layerItems.find((item) => {
            const itemStart = item.startTime;
            const itemEnd = itemStart + item.duration;
            const tolerance = 0.05;
            return clickTime >= itemStart - tolerance && clickTime <= itemEnd + tolerance;
          });
          if (found) {
            foundItem = found;
            clickedLayerIndex = i;
            break;
          }
        }
      }
    }
  
    if (foundItem && !isSplitMode) {
      if (foundItem.type === 'text') {
        handleVideoSelect(foundItem.id);
      } else {
        setPlayingVideoId(foundItem.id);
        if (onVideoSelect) onVideoSelect(clickTime, foundItem);
      }
      return;
    }
  
    if (!isSplitMode && onVideoSelect) onVideoSelect(clickTime);
  };

  const handleSplitAtCurrent = async () => {
    if (!selectedSegment) return;
    const { id, type, startTime, duration, layerIndex } = selectedSegment; // Use layerIndex instead of layer
    const endTime = startTime + duration;
  
    // Check if currentTime is within the segment's range
    if (currentTime <= startTime || currentTime >= endTime) {
      console.warn(`Current time ${currentTime} is outside the range of segment ${id} (${startTime} - ${endTime})`);
      return;
    }
  
    // Call the appropriate split handler based on segment type
    if (type === 'video') {
      await videoHandler.handleVideoSplit(selectedSegment, currentTime, layerIndex);
      saveHistory();
    } else if (type === 'audio') {
      await audioHandler.handleAudioSplit(selectedSegment, currentTime, layerIndex);
      saveHistory();
    } else if (type === 'text') {
      await textHandler.handleTextSplit(selectedSegment, currentTime, layerIndex);
      saveHistory();
    } else if (type === 'image') {
      await imageHandler.handleImageSplit(selectedSegment, currentTime, layerIndex);
      saveHistory();
    }
  
    // Deselect the segment after splitting
    setSelectedSegment(null);
    setPlayingVideoId(null);
  };

  const togglePlayback = () => {
    setIsPlaying((prev) => {
      const newIsPlaying = !prev;
      if (!newIsPlaying) {
        // Only update time when pausing to ensure parent state is synced
        onTimeUpdate(currentTime);
      }
      return newIsPlaying;
    });
  };

  useEffect(() => {
    return () => {
      clearInterval(playIntervalRef.current);
      cancelAnimationFrame(playIntervalRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  const flattenLayersToSegments = (layers) => {
      const segments = [];
      layers.forEach((layer, layerIndex) => {
        layer.forEach((item) => {
          if (item.type === 'text') {
            segments.push({
              id: item.id,
              type: 'text',
              text: item.text,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              fontFamily: item.fontFamily,
              scale: item.scale,
              rotation: item.rotation, // Add rotation
              fontColor: item.fontColor,
              backgroundColor: item.backgroundColor,
              positionX: item.positionX,
              positionY: item.positionY,
              alignment: item.alignment,
              backgroundOpacity: item.backgroundOpacity,
              backgroundBorderWidth: item.backgroundBorderWidth,
              backgroundBorderColor: item.backgroundBorderColor,
              backgroundH: item.backgroundH, // Replace backgroundPadding
              backgroundW: item.backgroundW, // Replace backgroundPadding
              backgroundBorderRadius: item.backgroundBorderRadius,
              textBorderColor: item.textBorderColor, // Added
              textBorderWidth: item.textBorderWidth, // Added
              textBorderOpacity: item.textBorderOpacity, // Added
              letterSpacing: item.letterSpacing, // Added
              lineSpacing: item.lineSpacing ?? 1.2, // Added
              keyframes: item.keyframes || {},
              opacity: item.opacity,
              isSubtitle: item.isSubtitle || false,
            });
          } else if (item.type === 'video') {
            segments.push({
              id: item.id,
              type: 'video',
              sourceVideoPath: item.filePath || `videos/projects/${projectId}/${item.fileName}`,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              startTime: item.startTimeWithinVideo || 0,
              endTime: item.endTimeWithinVideo || item.duration,
              positionX: item.positionX,
              positionY: item.positionY,
              scale: item.scale,
              rotation: item.rotation, // Add rotation
              opacity: item.opacity,
              keyframes: item.keyframes || {},
              cropL: item.cropL ?? 0, // Add crop values
              cropR: item.cropR ?? 0,
              cropT: item.cropT ?? 0,
              cropB: item.cropB ?? 0,
              speed: item.speed ?? 1.0, // Add speed
            });
          } else if (item.type === 'image') {
            segments.push({
              id: item.id,
              type: 'image',
              imageFileName: item.fileName,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              positionX: item.positionX,
              positionY: item.positionY,
              scale: item.scale,
              rotation: item.rotation, // Add rotation
              opacity: item.opacity,
              width: item.width,
              height: item.height,
              effectiveWidth: item.effectiveWidth,
              effectiveHeight: item.effectiveHeight,
              maintainAspectRatio: item.maintainAspectRatio,
              isElement: item.isElement,
              keyframes: item.keyframes || {},
              cropL: item.cropL ?? 0, // Add crop values
              cropR: item.cropR ?? 0,
              cropT: item.cropT ?? 0,
              cropB: item.cropB ?? 0,
            });
          } else if (item.type === 'audio') {
            segments.push({
              id: item.id,
              type: 'audio',
              audioFileName: item.fileName,
              layer: item.layer,
              timelineStartTime: item.startTime,
              timelineEndTime: item.startTime + item.duration,
              startTime: item.startTimeWithinAudio || 0,
              endTime: item.endTimeWithinAudio || item.duration,
              keyframes: item.keyframes || {},
            });
          }
        });
      });
      return segments;
    };

  const toggleSplitMode = () => {
    setIsSplitMode((prev) => {
      const newSplitMode = !prev;
      if (newSplitMode && isPlaying) {
        setIsPlaying(false); // Pause playback if entering split mode while playing
      }
      return newSplitMode;
    });
    setDraggingItem(null);
    setResizingItem(null);
  };

  const handleSplit = async (item, clickTime, layerIndex) => {
    if (!isSplitMode) return;
    // console.log('Splitting segment:', item.id, 'type:', item.type, 'at time:', clickTime, 'layerIndex:', layerIndex);
    if (item.type === 'video') {
      await videoHandler.handleVideoSplit(item, clickTime, layerIndex);
      saveHistory();
    } else if (item.type === 'audio') {
      await audioHandler.handleAudioSplit(item, clickTime, layerIndex);
      saveHistory();
    } else if (item.type === 'text') {
      await textHandler.handleTextSplit(item, clickTime, layerIndex);
      saveHistory();
    } else if (item.type === 'image') {
      await imageHandler.handleImageSplit(item, clickTime, layerIndex);
      saveHistory();
    }
    setSelectedSegment(null);
    setPlayingVideoId(null);
  };

  return (
    <div
      className="timeline-container"
      onClick={(e) => {
        if (onTimelineClick) onTimelineClick();
        handleTimelineClick(e);
      }}
      onTouchStart={(e) => {
        if (onTimelineClick) onTimelineClick();
        handleTimelineClick(e);
      }}
    >
      <TimelineControls
        isPlaying={isPlaying}
        togglePlayback={togglePlayback}
        currentTime={currentTime}
        totalDuration={totalDuration}
        formatTime={formatTime}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        canUndo={canUndo}
        canRedo={canRedo}
        isSaving={isSaving}
        onAddTextClick={openTextTool}
        toggleSplitMode={toggleSplitMode}
        isSplitMode={isSplitMode}
        stopPropagationForControls={(e) => e.stopPropagation()}
        selectedSegment={selectedSegment}
        handleSplitAtCurrent={handleSplitAtCurrent}
        handleCopySegment={handleCopySegment}
      />
      <div className="timeline-scroll-container">
        <TimelineRuler totalDuration={totalDuration} timeScale={timeScale} formatTime={formatTime} />
        <div
          className={`timeline ${isSplitMode ? 'split-mode' : ''}`}
          ref={timelineRef}
          onClick={handleTimelineClick}
          style={{ width: `${totalDuration * timeScale}px` }}
          onDragOver={generalHandler.handleDragOver}
          onDrop={handleDrop}
        >
          <div className="playhead" ref={playheadRef} style={{ left: `${currentTime * timeScale}px` }}></div> {/* Use currentTime for playhead position */}
          <div className="timeline-layer new-layer-drop-area" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <div className="layer-label">Drop to create new layer</div>
          </div>
          {[...videoLayers].reverse().map((layer, reversedIndex) => {
            const layerIndex = videoLayers.length - 1 - reversedIndex;
            return (
              <div key={`video-layer-${layerIndex}`} className="timeline-layer" onDragOver={generalHandler.handleDragOver} onDrop={handleDrop}>
                <TimelineLayer
                  layer={layer}
                  layerIndex={layerIndex}
                  timeScale={timeScale}
                  handleDragStart={generalHandler.handleDragStart}
                  handleResizeStart={generalHandler.handleResizeStart}
                  playingVideoId={playingVideoId}
                  handleVideoSelect={handleVideoSelect}
                  handleEditTextSegment={(item) => {
                    setSelectedSegment({ ...item, layerIndex: item.layer });
                    if (onSegmentSelect) onSegmentSelect({ ...item, layerIndex: item.layer });
                  }}
                  selectedSegmentId={selectedSegment ? selectedSegment.id : null}
                  multiSelectedSegmentIds={multiSelectedSegments.map((seg) => seg.id)}
                  showResizeHandles={(item) => item.id === (selectedSegment ? selectedSegment.id : null)}
                  transitions={transitions.filter((t) => t.layer === layerIndex)}
                  onTransitionSelect={onTransitionSelect}
                  isSplitMode={isSplitMode}
                  handleSplit={handleSplit}
                  isSubtitle={item => item.type === 'text' ? item.isSubtitle || false : false}
                />
              </div>
            );
          })}
          <div className="timeline-layer audio-section-label">
            <div className="layer-label">Audio</div>
          </div>
          {[...audioLayers].map((layer, index) => (
            <div key={`audio-layer-${-(index + 1)}`} className="timeline-layer" onDragOver={generalHandler.handleDragOver} onDrop={handleDrop}>
              <TimelineLayer
                layer={layer}
                layerIndex={index}
                timeScale={timeScale}
                handleDragStart={generalHandler.handleDragStart}
                handleResizeStart={generalHandler.handleResizeStart}
                playingVideoId={playingVideoId}
                handleVideoSelect={handleVideoSelect}
                handleEditTextSegment={() => {}}
                selectedSegmentId={selectedSegment ? selectedSegment.id : null}
                multiSelectedSegmentIds={multiSelectedSegments.map((seg) => seg.id)}
                showResizeHandles={(item) => item.id === (selectedSegment ? selectedSegment.id : null)}
                transitions={[]}
                onTransitionSelect={onTransitionSelect}
                isSplitMode={isSplitMode} // Add isSplitMode prop
                handleSplit={handleSplit} // Add handleSplit prop
              />
            </div>
          ))}
          <div className="timeline-layer new-layer-drop-area" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <div className="layer-label">Drop to create new layer</div>
          </div>
          <SnapIndicators snapIndicators={snapIndicators} timeScale={timeScale} layers={[...videoLayers, ...audioLayers]} />
          <DraggingGhost
            draggingItem={draggingItem}
            snapIndicators={snapIndicators}
            timeScale={timeScale}
            dragLayer={dragLayer}
            layers={[...videoLayers, ...audioLayers]}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;