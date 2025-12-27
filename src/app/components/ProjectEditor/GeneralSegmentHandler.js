import React, { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash'; // Requires lodash: npm install lodash

const GeneralSegmentHandler = ({
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
  updateSegmentPosition,
  updateTextSegment,
  updateImageSegment,
  updateAudioSegment,
  fetchVideoDuration,
  fetchAudioDuration,
  currentTime,
  roundToThreeDecimals,
  handleVideoSelect,
  isResizing, // Added prop from TimelineComponent
  setIsResizing, // Added prop from TimelineComponent
}) => {
  const durationCache = useRef(new Map()); // Cache for both video and audio durations
  const resizingElementRef = useRef(null); // Store reference to resizing DOM element

const handleDragStart = (e, item, layerIndex) => {
  if (isSplitMode) return;
  const itemWithOriginal = {
    ...item,
    originalStartTime: item.startTime,
    isValidPosition: true,
  };
  setDraggingItem(itemWithOriginal);
  setDragLayer(item.layer);
  let offsetX;

  if (e.type === 'touchstart') {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
  } else {
    const rect = e.currentTarget.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
  }

  setDragOffset(offsetX / timeScale);
  e.currentTarget.classList.add('dragging');
  handleVideoSelect(item.id); // Automatically select the segment
};

  useEffect(() => {
    const handleDragHover = (e) => {
      if (!draggingItem || !timelineRef.current) return;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const mouseY = e.clientY - timelineRect.top;
      if (mouseY < 0) {
        timelineRef.current.classList.add('showing-new-layer-top');
      } else {
        timelineRef.current.classList.remove('showing-new-layer-top');
      }
    };
    document.addEventListener('dragover', handleDragHover);
    return () => document.removeEventListener('dragover', handleDragHover);
  }, [draggingItem]);

const handleDragOver = useCallback((e) => {
  if (isSplitMode) return;
  e.preventDefault(); // Safe for dragover; for touchmove, handled in useEffect
  if (!draggingItem || !timelineRef.current) return;

  const timelineRect = timelineRef.current.getBoundingClientRect();
  let mouseX;

  if (e.type === 'touchmove') {
    const touch = e.touches[0];
    mouseX = touch.clientX - timelineRect.left;
  } else {
    mouseX = e.clientX - timelineRect.left;
  }

  let potentialStartTime = (mouseX / timeScale) - dragOffset;
  potentialStartTime = Math.max(0, potentialStartTime);

  const newSnapIndicators = [];
  const snapPoints = [];
  const isAudioLayer = draggingItem.layer < 0;
  const currentLayerIndex = isAudioLayer
    ? Math.abs(draggingItem.layer) - 1
    : draggingItem.layer;
  const currentLayer = isAudioLayer
    ? audioLayers[currentLayerIndex]
    : videoLayers[currentLayerIndex];

  // Collect snap points from all layers
  [...videoLayers, ...audioLayers].forEach((layer, layerIdx) => {
    const isAudio = layerIdx >= videoLayers.length;
    const adjustedLayerIdx = isAudio ? -(layerIdx - videoLayers.length + 1) : layerIdx;
    layer.forEach(item => {
      if (item.id === draggingItem.id) return;
      snapPoints.push({ time: item.startTime, layerIdx: adjustedLayerIdx, type: 'start' });
      snapPoints.push({ time: item.startTime + item.duration, layerIdx: adjustedLayerIdx, type: 'end' });
    });
  });

  // Add timeline start and playhead as snap points
  snapPoints.push({ time: 0, layerIdx: dragLayer, type: 'timelineStart' });
  if (currentTime !== undefined && !isNaN(currentTime)) {
    snapPoints.push({ time: currentTime, layerIdx: dragLayer, type: 'playhead' });
  }

  // Check for overlaps within the same layer
  let isValidPosition = true;
  if (currentLayer) {
    for (const item of currentLayer) {
      if (item.id === draggingItem.id) continue;
      const itemStart = item.startTime;
      const itemEnd = item.startTime + item.duration;
      const segmentStart = potentialStartTime;
      const segmentEnd = potentialStartTime + draggingItem.duration;

      if (segmentStart < itemEnd && segmentEnd > itemStart) {
        isValidPosition = false;
        break;
      }
    }
  }

  if (!isValidPosition) {
    potentialStartTime = draggingItem.originalStartTime;
  } else {
    let maxLeftBound = -Infinity;
    let minRightBound = Infinity;
    if (currentLayer) {
      currentLayer.forEach(item => {
        if (item.id === draggingItem.id) return;
        const itemStart = item.startTime;
        const itemEnd = item.startTime + item.duration;
        if (itemEnd <= potentialStartTime && itemEnd > maxLeftBound) {
          maxLeftBound = itemEnd;
        }
        if (itemStart >= potentialStartTime + draggingItem.duration && itemStart < minRightBound) {
          minRightBound = itemStart;
        }
      });
    }

    if (potentialStartTime < maxLeftBound) {
      potentialStartTime = maxLeftBound;
    }
    if (potentialStartTime + draggingItem.duration > minRightBound) {
      potentialStartTime = minRightBound - draggingItem.duration;
    }
    potentialStartTime = Math.max(0, potentialStartTime);

    let closestSnapPoint = null;
    let minDistance = SNAP_THRESHOLD;

    snapPoints.forEach(point => {
      const currentThreshold = point.type === 'timelineStart' || point.type === 'playhead' ? SNAP_THRESHOLD * 2 : SNAP_THRESHOLD;

      const distanceToStart = Math.abs(point.time - potentialStartTime);
      if (distanceToStart < currentThreshold && distanceToStart < minDistance) {
        minDistance = distanceToStart;
        closestSnapPoint = { time: point.time, layerIdx: point.layerIdx, type: point.type, edge: 'start' };
      }

      const itemEndTime = potentialStartTime + draggingItem.duration;
      const distanceToEnd = Math.abs(point.time - itemEndTime);
      if (distanceToEnd < currentThreshold && distanceToEnd < minDistance) {
        minDistance = distanceToEnd;
        closestSnapPoint = { time: point.time - draggingItem.duration, layerIdx: point.layerIdx, type: point.type, edge: 'end' };
      }
    });

    if (closestSnapPoint) {
      let snappedStartTime = closestSnapPoint.time;
      if (snappedStartTime < maxLeftBound) {
        snappedStartTime = maxLeftBound;
      }
      if (snappedStartTime + draggingItem.duration > minRightBound) {
        snappedStartTime = minRightBound - draggingItem.duration;
      }
      potentialStartTime = Math.max(0, snappedStartTime);
      newSnapIndicators.push({
        time: closestSnapPoint.edge === 'start' ? potentialStartTime : potentialStartTime + draggingItem.duration,
        layerIdx: dragLayer,
        edge: closestSnapPoint.edge,
        type: closestSnapPoint.type,
      });
    }
  }

  setSnapIndicators(newSnapIndicators);

  const draggedElement = document.querySelector('.timeline-item.dragging');
  if (draggedElement) {
    draggedElement.style.left = `${potentialStartTime * timeScale}px`;
    draggedElement.classList.toggle('snapping', newSnapIndicators.length > 0 && isValidPosition);
    draggedElement.classList.toggle('invalid', !isValidPosition);
  }

  draggingItem.tempStartTime = potentialStartTime;
  draggingItem.isValidPosition = isValidPosition;
}, [draggingItem, dragOffset, dragLayer, timeScale, videoLayers, audioLayers, SNAP_THRESHOLD, currentTime, setSnapIndicators, isSplitMode]);

useEffect(() => {
  const timelineEl = timelineRef.current;
  if (!timelineEl) return;

  // Add dragover for mouse
  timelineEl.addEventListener('dragover', handleDragOver);
  // Add touchmove with passive: false
  timelineEl.addEventListener('touchmove', handleDragOver, { passive: false });

  return () => {
    timelineEl.removeEventListener('dragover', handleDragOver);
    timelineEl.removeEventListener('touchmove', handleDragOver);
  };
}, [handleDragOver]);

useEffect(() => {
  const handleDragEnd = async (e) => {
    if (!draggingItem) return;
    setSnapIndicators([]);
    const dragElements = document.querySelectorAll('.dragging');
    dragElements.forEach(el => el.classList.remove('dragging', 'invalid'));
    if (timelineRef.current) {
      timelineRef.current.classList.remove('showing-new-layer');
    }

    // Finalize segment position if valid
    if (draggingItem.isValidPosition && draggingItem.tempStartTime !== undefined) {
      const isAudioLayer = draggingItem.layer < 0;
      const layerArray = isAudioLayer ? audioLayers : videoLayers;
      const layerIndex = isAudioLayer ? Math.abs(draggingItem.layer) - 1 : draggingItem.layer;
      const layer = layerArray[layerIndex];
      const itemIndex = layer.findIndex((i) => i.id === draggingItem.id);

      if (itemIndex !== -1) {
        const newVideoLayers = [...videoLayers];
        const newAudioLayers = [...audioLayers];
        const item = { ...layer[itemIndex] };

        // Update segment position
        item.startTime = roundToThreeDecimals(draggingItem.tempStartTime);
        item.timelineStartTime = item.startTime;
        item.timelineEndTime = item.startTime + item.duration;
        layer[itemIndex] = item;

        if (isAudioLayer) {
          newAudioLayers[layerIndex] = layer;
          setAudioLayers(newAudioLayers);
        } else {
          newVideoLayers[layerIndex] = layer;
          setVideoLayers(newVideoLayers);
        }

        // Update backend based on segment type
        try {
          if (item.type === 'video') {
            await updateSegmentPosition(
              item.id,
              item.startTime,
              item.layer,
              item.duration,
              item.startTimeWithinVideo,
              item.endTimeWithinVideo
            );
          } else if (item.type === 'text') {
            await updateTextSegment(item.id, item, item.startTime, item.layer);
          } else if (item.type === 'image') {
            const updatedSettings = {
              positionX: item.positionX,
              positionY: item.positionY,
              scale: item.scale,
              opacity: item.opacity,
              width: item.width,
              height: item.height,
              effectiveWidth: item.effectiveWidth,
              effectiveHeight: item.effectiveHeight,
              maintainAspectRatio: item.maintainAspectRatio,
            };
            await updateImageSegment(item.id, item.startTime, item.layer, item.duration, updatedSettings);
          } else if (item.type === 'audio') {
            await updateAudioSegment(
              item.id,
              item.startTime,
              item.layer,
              item.duration,
              item.startTimeWithinAudio,
              item.endTimeWithinAudio
            );
          }
          saveHistory(newVideoLayers, newAudioLayers);
          autoSave(newVideoLayers, newAudioLayers);
        } catch (error) {
          console.error('Error updating segment position:', error);
        }
      }
    }

    setDraggingItem(null);
    setDragLayer(null);
    setDragOffset(0);
  };

  document.addEventListener('dragend', handleDragEnd);
  document.addEventListener('touchend', handleDragEnd);
  return () => {
    document.removeEventListener('dragend', handleDragEnd);
    document.removeEventListener('touchend', handleDragEnd);
  };
}, [draggingItem, videoLayers, audioLayers, setVideoLayers, setAudioLayers, setSnapIndicators, roundToThreeDecimals, updateSegmentPosition, updateTextSegment, updateImageSegment, updateAudioSegment, saveHistory, autoSave]);

const handleResizeStart = (e, item, layerIndex, edge) => {
  if (isSplitMode) return;
  e.stopPropagation();
  e.preventDefault(); // Prevent default touch behavior
  setResizingItem({
    ...item,
    layerIndex,
    originalStartTime: item.startTime,
    originalStartWithinAudio: item.startTimeWithinAudio,
    originalEndWithinAudio: item.endTimeWithinAudio,
  });
  setResizeEdge(edge);
  setIsResizing(true);
};

  const handleResizeMove = useCallback(
    throttle((e) => {
      if (!resizingItem || !timelineRef.current) return;
  
      const timelineRect = timelineRef.current.getBoundingClientRect();
      let mouseX;
  
      if (e.type === 'touchmove') {
        const touch = e.touches[0];
        mouseX = touch.clientX - timelineRect.left;
      } else {
        mouseX = e.clientX - timelineRect.left;
      }
  
      let newTime = Math.max(0, mouseX / timeScale);
      const isAudioLayer = resizingItem.layer < 0;
      const layerIndex = isAudioLayer ? Math.abs(resizingItem.layer) - 1 : resizingItem.layerIndex;
      const layerArray = isAudioLayer ? audioLayers : videoLayers;
      const layer = layerArray[layerIndex];
      const itemIndex = layer.findIndex((i) => i.id === resizingItem.id);
      if (itemIndex === -1) {
        console.error('Item not found during resize:', resizingItem);
        return;
      }
      const item = { ...layer[itemIndex] };

      const originalStartTime = item.startTime ?? resizingItem.startTime ?? 0;
      const originalStartWithin = item.type === 'video'
        ? (item.startTimeWithinVideo ?? 0)
        : (item.startTimeWithinAudio ?? 0);
      const originalEndWithin = item.type === 'video'
        ? (item.endTimeWithinVideo ?? item.duration)
        : (item.endTimeWithinAudio ?? item.duration);
      const speed = item.type === 'video' ? (item.speed ?? 1.0) : 1.0; // Get speed for video segments

      let newStartTime = originalStartTime;
      let newDuration = item.duration;
      let newStartWithin = originalStartWithin;
      let newEndWithin = originalEndWithin;

      const snapPoints = [];
      [...videoLayers, ...audioLayers].forEach((layer, layerIdx) => {
        const isAudio = layerIdx >= videoLayers.length;
        const adjustedLayerIdx = isAudio ? -(layerIdx - videoLayers.length + 1) : layerIdx;
        layer.forEach((otherItem) => {
          if (otherItem.id === resizingItem.id) return;
          snapPoints.push({ time: otherItem.startTime, layerIdx: adjustedLayerIdx, type: 'start' });
          snapPoints.push({ time: otherItem.startTime + otherItem.duration, layerIdx: adjustedLayerIdx, type: 'end' });
        });
      });
      snapPoints.push({ time: 0, layerIdx: resizingItem.layer, type: 'timelineStart' });
      if (currentTime !== undefined && !isNaN(currentTime)) {
        snapPoints.push({ time: currentTime, layerIdx: resizingItem.layer, type: 'playhead' });
      }

      const otherItems = layer.filter((i) => i.id !== resizingItem.id);
      let maxLeftBound = -Infinity;
      let minRightBound = Infinity;

      otherItems.forEach((otherItem) => {
        const otherStart = otherItem.startTime;
        const otherEnd = otherItem.startTime + otherItem.duration;
        if (otherEnd <= originalStartTime && otherEnd > maxLeftBound) {
          maxLeftBound = otherEnd;
        }
        if (otherStart >= originalStartTime + item.duration && otherStart < minRightBound) {
          minRightBound = otherStart;
        }
      });

      let sourceDuration = durationCache.current.get(item.filePath || item.fileName);
      if (sourceDuration === undefined) {
          if (item.type === 'video') {
              fetchVideoDuration(item.filePath).then((duration) => {
                  if (duration !== null) {
                      durationCache.current.set(item.filePath, duration);
                      // // console.log(`Cached video duration for ${item.filePath}: ${duration}`);
                  }
              });
              sourceDuration = (item.endTimeWithinVideo - item.startTimeWithinVideo) / speed;
          } else if (item.type === 'audio') {
              fetchAudioDuration(item.fileName).then((duration) => {
                  if (duration !== null) {
                      const roundedDuration = roundToThreeDecimals(duration);
                      durationCache.current.set(item.fileName, roundedDuration);
                      // // console.log(`Cached audio duration for ${item.fileName}: ${duration} -> ${roundedDuration}`);
                  } else {
                      console.warn(`Failed to fetch duration for ${item.fileName}`);
                  }
              });
              sourceDuration = roundToThreeDecimals(Math.min(
                  item.endTimeWithinAudio - item.startTimeWithinAudio,
                  item.maxDuration || 3600
              ));
              // // console.log(`Using fallback duration for ${item.fileName}: ${sourceDuration}`);
          }
      }

      let closestSnapPoint = null;
      let minDistance = SNAP_THRESHOLD;
      let isSnapping = false;

      if (resizeEdge === 'left') {
        const originalEndTime = originalStartTime + item.duration;
        newStartTime = Math.min(newTime, originalEndTime - 0.1);
        if (maxLeftBound !== -Infinity) {
          newStartTime = Math.max(newStartTime, maxLeftBound);
        }

        snapPoints.forEach((point) => {
          const distance = Math.abs(point.time - newStartTime);
          const currentThreshold = point.type === 'timelineStart' || point.type === 'playhead' ? SNAP_THRESHOLD * 2 : SNAP_THRESHOLD;
          if (distance < currentThreshold && distance < minDistance) {
            minDistance = distance;
            closestSnapPoint = { time: point.time, layerIdx: point.layerIdx, type: point.type, edge: 'start' };
          }
        });

        if (closestSnapPoint) {
          newStartTime = Math.max(maxLeftBound, closestSnapPoint.time);
          isSnapping = true;
          setSnapIndicators([{
            time: newStartTime,
            layerIdx: resizingItem.layer,
            edge: 'start',
            type: closestSnapPoint.type,
          }]);
        } else {
          setSnapIndicators([]);
        }

        newDuration = originalEndTime - newStartTime;
        if (item.type === 'video') {
          const timeShift = (newStartTime - originalStartTime) * speed; // Adjust shift by speed
          newStartWithin = originalStartWithin + timeShift;
          if (newStartWithin < 0) {
            newStartWithin = 0;
            newStartTime = originalStartTime - (originalStartWithin / speed);
            newDuration = originalEndTime - newStartTime;
          }
          newEndWithin = originalEndWithin;
          // Ensure newStartWithin doesn't exceed source duration
          if (newStartWithin > sourceDuration - (0.1 * speed)) {
            newStartWithin = sourceDuration - (0.1 * speed);
            newStartTime = originalStartTime + ((newStartWithin - originalStartWithin) / speed);
            newDuration = originalEndTime - newStartTime;
          }
        } else if (item.type === 'audio') {
          const timeShift = newStartTime - originalStartTime;
          newStartWithin = originalStartWithin + timeShift;
          if (newStartWithin < 0) {
            newStartWithin = 0;
            newStartTime = originalStartTime - originalStartWithin;
            newDuration = originalEndTime - newStartTime;
          }
          newEndWithin = originalEndWithin;
        }
      } else if (resizeEdge === 'right') {
          const newEndTime = Math.max(newTime, originalStartTime + 0.1);
          let clampedEndTime = newEndTime;
          if (minRightBound !== Infinity) {
              clampedEndTime = Math.min(newEndTime, minRightBound);
          }

          snapPoints.forEach((point) => {
              const distance = Math.abs(point.time - clampedEndTime);
              const currentThreshold = point.type === 'timelineStart' || point.type === 'playhead' ? SNAP_THRESHOLD * 2 : SNAP_THRESHOLD;
              if (distance < currentThreshold && distance < minDistance) {
                  minDistance = distance;
                  closestSnapPoint = { time: point.time, layerIdx: point.layerIdx, type: point.type, edge: 'end' };
              }
          });

          if (closestSnapPoint) {
              clampedEndTime = Math.min(minRightBound, closestSnapPoint.time);
              isSnapping = true;
              setSnapIndicators([{
                  time: clampedEndTime,
                  layerIdx: resizingItem.layer,
                  edge: 'end',
                  type: closestSnapPoint.type,
              }]);
          } else {
              setSnapIndicators([]);
          }

          newDuration = clampedEndTime - originalStartTime;
          if (item.type === 'video') {
              newStartWithin = originalStartWithin;
              newEndWithin = originalStartWithin + (newDuration * speed);
              if (sourceDuration && newEndWithin > sourceDuration) {
                  newEndWithin = sourceDuration;
                  newDuration = (newEndWithin - originalStartWithin) / speed;
                  clampedEndTime = originalStartTime + newDuration;
              }
          } else if (item.type === 'audio') {
              newStartWithin = originalStartWithin;
              newEndWithin = originalStartWithin + newDuration;
              // // console.log(`Audio resize: fileName=${item.fileName}, newEndWithin=${newEndWithin}, sourceDuration=${sourceDuration}`);
              // Strictly clamp to source duration, aligning with backend's two-decimal precision
              if (sourceDuration && newEndWithin > sourceDuration) {
                  const backendSafeDuration = Math.floor(sourceDuration * 100) / 100; // Truncate to two decimals
                  newEndWithin = roundToThreeDecimals(backendSafeDuration); // Round to three decimals for frontend
                  newDuration = newEndWithin - originalStartWithin;
                  clampedEndTime = originalStartTime + newDuration;
                  // // console.log(`Clamped audio duration: newEndWithin=${newEndWithin}, newDuration=${newDuration}, sourceDuration=${sourceDuration}, backendSafeDuration=${backendSafeDuration}`);
              }
              // Prevent negative or zero duration
              if (newDuration <= 0.1) {
                  newDuration = 0.1;
                  newEndWithin = originalStartWithin + newDuration;
                  clampedEndTime = originalStartTime + newDuration;
                  // // console.log(`Enforced minimum duration: newDuration=${newDuration}, newEndWithin=${newEndWithin}`);
              }
          }
      }

      // Update DOM directly
      const resizingElement = document.querySelector(`.timeline-item[data-id="${resizingItem.id}"]`);
      if (resizingElement) {
        resizingElementRef.current = resizingElement;
        resizingElement.style.left = `${roundToThreeDecimals(newStartTime) * timeScale}px`;
        resizingElement.style.width = `${roundToThreeDecimals(newDuration) * timeScale}px`;
        resizingElement.classList.toggle('snapping', isSnapping);
        // Hide waveform during resize to prevent redraw
        const waveform = resizingElement.querySelector('.audio-waveform');
        if (waveform) waveform.style.visibility = 'hidden';
      }

      // Store temporary values
      resizingItem.tempStartTime = roundToThreeDecimals(newStartTime);
      resizingItem.tempDuration = roundToThreeDecimals(newDuration);
      resizingItem.tempStartWithin = roundToThreeDecimals(newStartWithin);
      resizingItem.tempEndWithin = roundToThreeDecimals(newEndWithin);
    }, 16),
    [
      resizingItem,
      resizeEdge,
      videoLayers,
      audioLayers,
      timeScale,
      SNAP_THRESHOLD,
      fetchVideoDuration,
      fetchAudioDuration,
      currentTime,
      setSnapIndicators,
    ]
  );

  const handleResizeEnd = async () => {
    if (!resizingItem) return;
    setIsResizing(false);

    const isAudioLayer = resizingItem.layer < 0;
    const layerArray = isAudioLayer ? audioLayers : videoLayers;
    const layerIndex = isAudioLayer ? Math.abs(resizingItem.layer) - 1 : resizingItem.layerIndex;
    const layer = layerArray[layerIndex];
    const itemIndex = layer.findIndex((i) => i.id === resizingItem.id);

    if (itemIndex !== -1) {
      const newVideoLayers = [...videoLayers];
      const newAudioLayers = [...audioLayers];
      const item = { ...layer[itemIndex] };
      const speed = item.type === 'video' ? (item.speed ?? 1.0) : 1.0;

      // Apply temporary values
      item.startTime = resizingItem.tempStartTime;
      item.duration = resizingItem.tempDuration;
      item.timelineStartTime = resizingItem.tempStartTime;
      item.timelineEndTime = resizingItem.tempStartTime + resizingItem.tempDuration;
      if (item.type === 'video') {
        item.startTimeWithinVideo = resizingItem.tempStartWithin;
        item.endTimeWithinVideo = resizingItem.tempEndWithin;
        item.duration = (item.endTimeWithinVideo - item.startTimeWithinVideo) / speed;
      } else if (item.type === 'audio') {
        item.startTimeWithinAudio = resizingItem.tempStartWithin;
        item.endTimeWithinAudio = resizingItem.tempEndWithin;
      }

      layer[itemIndex] = item;

      if (isAudioLayer) {
        newAudioLayers[layerIndex] = layer;
        setAudioLayers(newAudioLayers);
      } else {
        newVideoLayers[layerIndex] = layer;
        setVideoLayers(newVideoLayers);
      }

      saveHistory(newVideoLayers, newAudioLayers);
      autoSave(newVideoLayers, newAudioLayers);

      if (item.type === 'video') {
        await updateSegmentPosition(
          item.id,
          item.startTime,
          item.layer,
          item.duration,
          item.startTimeWithinVideo,
          item.endTimeWithinVideo
        );
      } else if (item.type === 'text') {
        const updatedTextSettings = { ...item, duration: item.duration };
        await updateTextSegment(item.id, updatedTextSettings, item.startTime, item.layer);
      } else if (item.type === 'image') {
        const updatedSettings = {
          positionX: item.positionX,
          positionY: item.positionY,
          scale: item.scale,
          opacity: item.opacity,
          width: item.width,
          height: item.height,
          effectiveWidth: item.effectiveWidth,
          effectiveHeight: item.effectiveHeight,
          maintainAspectRatio: item.maintainAspectRatio,
        };
        await updateImageSegment(item.id, item.startTime, item.layer, item.duration, updatedSettings);
      } else if (item.type === 'audio') {
          const sourceDuration = durationCache.current.get(item.fileName) || roundToThreeDecimals(item.endTimeWithinAudio - item.startTimeWithinAudio);
          let newEndWithin = resizingItem.tempEndWithin;
          let newDuration = resizingItem.tempDuration;
          let newStartWithin = resizingItem.tempStartWithin;

          // // console.log(`handleResizeEnd: fileName=${item.fileName}, sourceDuration=${sourceDuration}, tempEndWithin=${newEndWithin}, tempDuration=${newDuration}`);

          // Clamp to source duration, aligning with backend's two-decimal precision
          if (sourceDuration && newEndWithin > sourceDuration) {
              const backendSafeDuration = Math.floor(sourceDuration * 100) / 100; // Truncate to two decimals
              newEndWithin = roundToThreeDecimals(backendSafeDuration); // Round to three decimals for frontend
              newDuration = newEndWithin - newStartWithin;
              // // console.log(`Clamped in handleResizeEnd: newEndWithin=${newEndWithin}, newDuration=${newDuration}, sourceDuration=${sourceDuration}, backendSafeDuration=${backendSafeDuration}`);
              if (newDuration < 0.1) {
                  newDuration = 0.1;
                  newEndWithin = newStartWithin + newDuration;
                  // // console.log(`Enforced minimum duration in handleResizeEnd: newEndWithin=${newEndWithin}, newDuration=${newDuration}`);
              }
          }

          item.startTime = resizingItem.tempStartTime;
          item.duration = newDuration;
          item.timelineStartTime = resizingItem.tempStartTime;
          item.timelineEndTime = resizingItem.tempStartTime + newDuration;
          item.startTimeWithinAudio = newStartWithin;
          item.endTimeWithinAudio = newEndWithin;

          // Validate before backend update
          if (item.endTimeWithinAudio <= item.startTimeWithinAudio) {
              console.warn('Invalid audio segment times, reverting:', {
                  startTimeWithinAudio: item.startTimeWithinAudio,
                  endTimeWithinAudio: item.endTimeWithinAudio,
              });
              return;
          }

          // // console.log(`Sending to updateAudioSegment: id=${item.id}, endTimeWithinAudio=${item.endTimeWithinAudio}, duration=${item.duration}`);
          await updateAudioSegment(
              item.id,
              item.startTime,
              item.layer,
              item.duration,
              item.startTimeWithinAudio,
              item.endTimeWithinAudio
          );
      }

      // Restore waveform visibility and trigger update
      if (item.type === 'audio' && resizingElementRef.current) {
        const waveform = resizingElementRef.current.querySelector('.audio-waveform');
        if (waveform) waveform.style.visibility = 'visible';
        if (typeof window.updateWaveform === 'function') {
          window.updateWaveform(item);
        }
      }
    }

    setResizingItem(null);
    setResizeEdge(null);
    resizingElementRef.current = null;
  };

useEffect(() => {
  if (resizingItem) {
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
    document.addEventListener('touchmove', handleResizeMove);
    document.addEventListener('touchend', handleResizeEnd);
    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.removeEventListener('touchmove', handleResizeMove);
      document.removeEventListener('touchend', handleResizeEnd);
    };
  }
}, [resizingItem, handleResizeMove, handleResizeEnd]);

  return {
    handleDragStart,
    handleDragOver,
    handleResizeStart,
    handleResizeMove,
    handleResizeEnd,
  };
};

export default GeneralSegmentHandler;