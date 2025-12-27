import React from 'react';
import axios from 'axios';

const TextSegmentHandler = ({
  projectId,
  sessionId,
  videoLayers,
  setVideoLayers,
  saveHistory,
  autoSave,
  loadProjectTimeline,
  API_BASE_URL,
  timelineRef,
  roundToThreeDecimals, // Destructure roundToThreeDecimals
  setIsLoading,
}) => {
  const addTextToTimeline = async (targetLayer = 0, startTime = 0, updatedTextSettings) => {
    if (!sessionId || !projectId) {
      console.error('Missing sessionId or projectId');
      return null;
    }
    try {
      const token = localStorage.getItem('token');
      const duration = updatedTextSettings.duration || 5;
      const timelineStartTime = roundToThreeDecimals(startTime);
      const timelineEndTime = roundToThreeDecimals(startTime + duration);
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-text`,
        {
          text: updatedTextSettings.text,
          layer: targetLayer,
          timelineStartTime,
          timelineEndTime,
          fontFamily: updatedTextSettings.fontFamily,
          scale: updatedTextSettings.scale || 1.0,
          rotation: updatedTextSettings.rotation || 0, // Add rotation
          fontColor: updatedTextSettings.fontColor,
          backgroundColor: updatedTextSettings.backgroundColor,
          positionX: updatedTextSettings.positionX,
          positionY: updatedTextSettings.positionY,
          alignment: updatedTextSettings.alignment || 'center',
          backgroundOpacity: updatedTextSettings.backgroundOpacity ?? 1.0,
          backgroundBorderWidth: updatedTextSettings.backgroundBorderWidth ?? 0,
          backgroundBorderColor: updatedTextSettings.backgroundBorderColor || '#000000',
          backgroundH: updatedTextSettings.backgroundH ?? 0,
          backgroundW: updatedTextSettings.backgroundW ?? 0,
          backgroundBorderRadius: updatedTextSettings.backgroundBorderRadius ?? 0,
          textBorderColor: updatedTextSettings.textBorderColor || 'transparent', // Added
          textBorderWidth: updatedTextSettings.textBorderWidth ?? 0, // Added
          textBorderOpacity: updatedTextSettings.textBorderOpacity ?? 1.0, // Added
          letterSpacing: updatedTextSettings.letterSpacing ?? 0, // Added
          lineSpacing: updatedTextSettings.lineSpacing ?? 1.2,
          isSubtitle: updatedTextSettings.isSubtitle ?? false,
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const segment = response.data;
      const newSegment = {
        id: segment.textSegmentId || `text-${Date.now()}`, // Use backend ID or fallback
        type: 'text',
        text: updatedTextSettings.text,
        startTime: timelineStartTime,
        duration,
        layer: targetLayer,
        fontFamily: updatedTextSettings.fontFamily,
        scale: updatedTextSettings.scale || 1.0,
        rotation: updatedTextSettings.rotation || 0, // Add rotation
        fontColor: updatedTextSettings.fontColor,
        backgroundColor: updatedTextSettings.backgroundColor,
        positionX: updatedTextSettings.positionX || 0,
        positionY: updatedTextSettings.positionY || 0,
        alignment: updatedTextSettings.alignment || 'center',
        backgroundOpacity: updatedTextSettings.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: updatedTextSettings.backgroundBorderWidth ?? 0,
        backgroundBorderColor: updatedTextSettings.backgroundBorderColor || '#000000',
        backgroundH: updatedTextSettings.backgroundH ?? 0,
        backgroundW: updatedTextSettings.backgroundW ?? 0,
        backgroundBorderRadius: updatedTextSettings.backgroundBorderRadius ?? 0,
        textBorderColor: updatedTextSettings.textBorderColor || 'transparent', // Added
        textBorderWidth: updatedTextSettings.textBorderWidth ?? 0, // Added
        textBorderOpacity: updatedTextSettings.textBorderOpacity ?? 1.0, // Added
        letterSpacing: updatedTextSettings.letterSpacing ?? 0, // Added
        lineSpacing: updatedTextSettings.lineSpacing ?? 1.2, // Added
        timelineStartTime,
        timelineEndTime,
        keyframes: segment.keyframes || {},
        isSubtitle: segment.isSubtitle || false,
      };

      setVideoLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= targetLayer) newLayers.push([]);

        // Check for duplicate IDs
        let existingLayerIndex = -1;
        for (let i = 0; i < newLayers.length; i++) {
          if (newLayers[i].some((s) => s.id === newSegment.id)) {
            existingLayerIndex = i;
            break;
          }
        }

        if (existingLayerIndex !== -1) {
          console.warn(`Segment with ID ${newSegment.id} already exists in layer ${existingLayerIndex}. Updating instead.`);
          newLayers[existingLayerIndex] = newLayers[existingLayerIndex].map((s) =>
            s.id === newSegment.id ? { ...s, ...newSegment, layer: targetLayer } : s
          );
        } else {
          newLayers[targetLayer].push(newSegment);
        }

        return newLayers;
      });

      saveHistory(videoLayers, []);
      autoSave(videoLayers, []);
      return newSegment;
    } catch (error) {
      console.error('Error adding text to timeline:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      if (error.response?.status >= 500) {
        await loadProjectTimeline();
      }
      return null;
    }
  };

  const updateTextSegment = async (segmentId, updatedTextSettings, newStartTime = null, newLayer = null) => {
    if (!sessionId || !projectId) return;
    try {
      const token = localStorage.getItem('token');
      const requestBody = {
        segmentId,
        text: updatedTextSettings.text,
        fontFamily: updatedTextSettings.fontFamily,
        scale: updatedTextSettings.scale || 1.0,
        rotation: updatedTextSettings.rotation || 0, // Add rotation
        fontColor: updatedTextSettings.fontColor,
        backgroundColor: updatedTextSettings.backgroundColor,
        positionX: updatedTextSettings.positionX,
        positionY: updatedTextSettings.positionY,
        alignment: updatedTextSettings.alignment || 'center',
        backgroundOpacity: updatedTextSettings.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: updatedTextSettings.backgroundBorderWidth ?? 0,
        backgroundBorderColor: updatedTextSettings.backgroundBorderColor || '#000000',
        backgroundH: updatedTextSettings.backgroundH ?? 0, // Replace backgroundPadding
        backgroundW: updatedTextSettings.backgroundW ?? 0, // Replace backgroundPadding
        backgroundBorderRadius: updatedTextSettings.backgroundBorderRadius ?? 0, // New
        textBorderColor: updatedTextSettings.textBorderColor || 'transparent', // Added
        textBorderWidth: updatedTextSettings.textBorderWidth ?? 0, // Added
        textBorderOpacity: updatedTextSettings.textBorderOpacity ?? 1.0, // Added
        letterSpacing: updatedTextSettings.letterSpacing ?? 0, // Added
        lineSpacing: updatedTextSettings.lineSpacing ?? 1.2, // Added
        isSubtitle: updatedTextSettings.isSubtitle || false,
      };
      // Only include keyframes if explicitly provided (e.g., from Transform panel)
      if (updatedTextSettings.keyframes) {
        requestBody.keyframes = updatedTextSettings.keyframes;
      }
      if (newStartTime !== null) {
        const duration = updatedTextSettings.duration || 5;
        requestBody.timelineStartTime = roundToThreeDecimals(newStartTime);
        requestBody.timelineEndTime = roundToThreeDecimals(newStartTime + duration);
      }
      if (newLayer !== null) requestBody.layer = newLayer;
      setIsLoading(true);
      await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-text`,
        requestBody,
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(`Updated text segment ${segmentId}`);
    } catch (error) {
      console.error('Error updating text segment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextDrop = async (e, draggingItem, dragLayer, mouseX, mouseY, timeScale, dragOffset, snapIndicators) => {
    if (!sessionId || !timelineRef.current) return null;
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const layerHeight = 40;
    const reversedIndex = Math.floor((mouseY - timelineRect.top) / layerHeight);
    let targetLayer = videoLayers.length - reversedIndex;
    if (reversedIndex < 0) targetLayer = videoLayers.length;
    targetLayer = Math.max(0, Math.min(targetLayer, videoLayers.length));

    if (!draggingItem) {
      const dataString = e.dataTransfer.getData('application/json');
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data.type === 'text') {
          const dropTimePosition = (mouseX - timelineRect.left) / timeScale;
          return {
            layer: targetLayer,
            startTime: dropTimePosition,
            isNew: true,
            scale: 1.0,
            alignment: 'center',
            backgroundOpacity: 1.0,
            backgroundBorderWidth: 0,
            backgroundBorderColor: '#000000',
            backgroundH: 0, // Replace backgroundPadding
            backgroundW: 0, // Replace backgroundPadding
            backgroundBorderRadius: 0, // New
            textBorderColor: 'transparent', // Added
            textBorderWidth: 0, // Added
            textBorderOpacity: 1.0, // Added
            letterSpacing: 0, // Added
            lineSpacing: 1.2, // Added
            isSubtitle: false,
          };
        }
      }
      return null;
    }

    if (draggingItem.type !== 'text') return null;

    let actualLayerIndex = targetLayer;
    const newStartTime = snapIndicators.length > 0
      ? snapIndicators[0].time - (snapIndicators[0].edge === 'end' ? draggingItem.duration : 0)
      : (mouseX - timelineRect.left) / timeScale - dragOffset;
    const adjustedStartTime = Math.max(0, newStartTime);
    let newVideoLayers = [...videoLayers];
    while (newVideoLayers.length <= actualLayerIndex) newVideoLayers.push([]);

    const hasOverlap = newVideoLayers[actualLayerIndex].some((video) => {
      if (draggingItem && video.id === draggingItem.id) return false;
      const videoStart = video.startTime;
      const videoEnd = videoStart + video.duration;
      const newVideoEnd = adjustedStartTime + draggingItem.duration;
      return adjustedStartTime < videoEnd && newVideoEnd > videoStart;
    });

    if (hasOverlap) {
      // console.log('Overlap detected. Cannot place item here.');
      return null;
    }

    if (actualLayerIndex === dragLayer) {
      newVideoLayers[actualLayerIndex] = newVideoLayers[actualLayerIndex].filter((v) => v.id !== draggingItem.id);
    } else {
      newVideoLayers[dragLayer] = newVideoLayers[dragLayer].filter((v) => v.id !== draggingItem.id);
    }
    const updatedItem = {
      ...draggingItem,
      startTime: adjustedStartTime,
      layer: actualLayerIndex,
      timelineStartTime: roundToThreeDecimals(adjustedStartTime),
      timelineEndTime: roundToThreeDecimals(adjustedStartTime + draggingItem.duration),
      alignment: draggingItem.alignment || 'center',
      backgroundOpacity: draggingItem.backgroundOpacity ?? 1.0,
      backgroundBorderWidth: draggingItem.backgroundBorderWidth ?? 0,
      backgroundBorderColor: draggingItem.backgroundBorderColor || '#000000',
      backgroundH: draggingItem.backgroundH ?? 0,
      backgroundW: draggingItem.backgroundW ?? 0,
      backgroundBorderRadius: draggingItem.backgroundBorderRadius ?? 0,
      textBorderColor: draggingItem.textBorderColor || 'transparent',
      textBorderWidth: draggingItem.textBorderWidth ?? 0,
      textBorderOpacity: draggingItem.textBorderOpacity ?? 1.0,
      letterSpacing: draggingItem.letterSpacing ?? 0,
      lineSpacing: draggingItem.lineSpacing ?? 1.2,
      positionX: draggingItem.positionX || 0, // Add positionX
      positionY: draggingItem.positionY || 0, // Add positionY
      scale: draggingItem.scale || 1, // Add scale
      rotation: draggingItem.rotation || 0, // Add rotation
      isSubtitle: draggingItem.isSubtitle || false,
    };
    newVideoLayers[actualLayerIndex].push(updatedItem);
    setVideoLayers(newVideoLayers);
    saveHistory(newVideoLayers, []);
    autoSave(newVideoLayers, []);
    await updateTextSegment(draggingItem.id, updatedItem, roundToThreeDecimals(adjustedStartTime), actualLayerIndex);
    return null;
  };

  const handleSaveTextSegment = async (updatedTextSettings, editingTextSegment) => {
    if (!editingTextSegment) {
      console.error('editingTextSegment is undefined');
      return;
    }
    if (editingTextSegment.isNew) {
      await addTextToTimeline(editingTextSegment.layer, editingTextSegment.startTime, updatedTextSettings);
      const tempId = `text-temp-${Date.now()}`;
      const startTime = editingTextSegment.startTime;
      const duration = updatedTextSettings.duration || 5;
      // For new text segment
      const newTextSegment = {
        id: tempId,
        type: 'text',
        text: updatedTextSettings.text,
        startTime,
        duration,
        layer: editingTextSegment.layer,
        fontFamily: updatedTextSettings.fontFamily,
        scale: updatedTextSettings.scale || 1.0,
        rotation: updatedTextSettings.rotation || 0, // Add rotation
        fontColor: updatedTextSettings.fontColor,
        backgroundColor: updatedTextSettings.backgroundColor,
        positionX: updatedTextSettings.positionX,
        positionY: updatedTextSettings.positionY,
        alignment: updatedTextSettings.alignment || 'center',
        backgroundOpacity: updatedTextSettings.backgroundOpacity ?? 1.0,
        backgroundBorderWidth: updatedTextSettings.backgroundBorderWidth ?? 0,
        backgroundBorderColor: updatedTextSettings.backgroundBorderColor || '#000000',
        backgroundH: updatedTextSettings.backgroundH ?? 0,
        backgroundW: updatedTextSettings.backgroundW ?? 0,
        backgroundBorderRadius: updatedTextSettings.backgroundBorderRadius ?? 0,
        textBorderColor: updatedTextSettings.textBorderColor || 'transparent',
        textBorderWidth: updatedTextSettings.textBorderWidth ?? 0,
        textBorderOpacity: updatedTextSettings.textBorderOpacity ?? 1.0,
        letterSpacing: updatedTextSettings.letterSpacing ?? 0,
        lineSpacing: updatedTextSettings.lineSpacing ?? 1.2,
        timelineStartTime: roundToThreeDecimals(startTime),
        timelineEndTime: roundToThreeDecimals(startTime + duration),
        isSubtitle: updatedTextSettings.isSubtitle || false,
      };
      const newVideoLayers = [...videoLayers];
      while (newVideoLayers.length <= editingTextSegment.layer) newVideoLayers.push([]);
      newVideoLayers[editingTextSegment.layer].push(newTextSegment);
      setVideoLayers(newVideoLayers);
      saveHistory(newVideoLayers, []);
      autoSave(newVideoLayers, []);
      await loadProjectTimeline();
    } else {
      if (!editingTextSegment.id) {
        console.error('Editing text segment has no ID');
        return;
      }
      await updateTextSegment(editingTextSegment.id, updatedTextSettings);
      const duration = updatedTextSettings.duration || editingTextSegment.duration;
      // For existing text segment
      const newVideoLayers = videoLayers.map((layer) =>
        layer.map((item) =>
          item.id === editingTextSegment.id && item.type === 'text'
            ? {
                ...item,
                text: updatedTextSettings.text,
                fontFamily: updatedTextSettings.fontFamily,
                scale: updatedTextSettings.scale || item.scale || 1.0,
                rotation: updatedTextSettings.rotation || item.rotation || 0, // Add rotation
                fontColor: updatedTextSettings.fontColor,
                backgroundColor: updatedTextSettings.backgroundColor,
                positionX: updatedTextSettings.positionX,
                positionY: updatedTextSettings.positionY,
                alignment: updatedTextSettings.alignment || 'center',
                backgroundOpacity: updatedTextSettings.backgroundOpacity ?? 1.0,
                backgroundBorderWidth: updatedTextSettings.backgroundBorderWidth ?? 0,
                backgroundBorderColor: updatedTextSettings.backgroundBorderColor || '#000000',
                backgroundH: updatedTextSettings.backgroundH ?? 0,
                backgroundW: updatedTextSettings.backgroundW ?? 0,
                backgroundBorderRadius: updatedTextSettings.backgroundBorderRadius ?? 0,
                textBorderColor: updatedTextSettings.textBorderColor || 'transparent',
                textBorderWidth: updatedTextSettings.textBorderWidth ?? 0,
                textBorderOpacity: updatedTextSettings.textBorderOpacity ?? 1.0,
                letterSpacing: updatedTextSettings.letterSpacing ?? 0,
                lineSpacing: updatedTextSettings.lineSpacing ?? 1.2,
                duration,
                timelineEndTime: roundToThreeDecimals(item.startTime + duration),
                isSubtitle: updatedTextSettings.isSubtitle || item.isSubtitle || false,
              }
            : item
        )
      );
      setVideoLayers(newVideoLayers);
      saveHistory(newVideoLayers, []);
      autoSave(newVideoLayers, []);
      await loadProjectTimeline();
    }
  };

  const handleTextSplit = async (item, clickTime, layerIndex) => {
    const splitTime = clickTime - item.startTime;
    if (splitTime <= 0.1 || splitTime >= item.duration - 0.1) {
      console.warn('Split time is too close to segment boundaries:', { splitTime, duration: item.duration });
      return;
    }

    const firstPartDuration = splitTime;
    const secondPartDuration = item.duration - splitTime;

    // console.log('Splitting text segment:', {
    //   text: item.text,
    //   startTime: item.startTime,
    //   splitTime,
    //   firstPartDuration,
    //   secondPartDuration,
    //   itemId: item.id,
    // });

    // Create first part (update original segment)
    const firstPart = {
      ...item,
      duration: firstPartDuration,
      timelineEndTime: roundToThreeDecimals(item.startTime + firstPartDuration),
      alignment: item.alignment || 'center',
      backgroundOpacity: item.backgroundOpacity ?? 1.0,
      backgroundBorderWidth: item.backgroundBorderWidth ?? 0,
      backgroundBorderColor: item.backgroundBorderColor || '#000000',
      backgroundH: item.backgroundH ?? 0,
      backgroundW: item.backgroundW ?? 0,
      backgroundBorderRadius: item.backgroundBorderRadius ?? 0,
      textBorderColor: item.textBorderColor || 'transparent',
      textBorderWidth: item.textBorderWidth ?? 0,
      textBorderOpacity: item.textBorderOpacity ?? 1.0,
      letterSpacing: item.letterSpacing ?? 0,
      lineSpacing: item.lineSpacing ?? 1.2,
      positionX: item.positionX || 0, // Add positionX
      positionY: item.positionY || 0, // Add positionY
      scale: item.scale || 1, // Add scale
      rotation: item.rotation || 0, // Add rotation
      isSubtitle: item.isSubtitle || false,
    };

    // Create second part (temporary)
    const temporarySecondPartId = `${item.id}-split-${Date.now()}`;
    const secondPart = {
      ...item,
      id: temporarySecondPartId,
      startTime: item.startTime + splitTime,
      duration: secondPartDuration,
      timelineStartTime: roundToThreeDecimals(item.startTime + splitTime),
      timelineEndTime: roundToThreeDecimals(item.startTime + item.duration),
      scale: item.scale || 1.0,
      alignment: item.alignment || 'center',
      backgroundOpacity: item.backgroundOpacity ?? 1.0,
      backgroundBorderWidth: item.backgroundBorderWidth ?? 0,
      backgroundBorderColor: item.backgroundBorderColor || '#000000',
      backgroundH: item.backgroundH ?? 0,
      backgroundW: item.backgroundW ?? 0,
      backgroundBorderRadius: item.backgroundBorderRadius ?? 0,
      textBorderColor: item.textBorderColor || 'transparent',
      textBorderWidth: item.textBorderWidth ?? 0,
      textBorderOpacity: item.textBorderOpacity ?? 1.0,
      letterSpacing: item.letterSpacing ?? 0,
      lineSpacing: item.lineSpacing ?? 1.2,
      positionX: item.positionX || 0, // Add positionX
      positionY: item.positionY || 0, // Add positionY
      rotation: item.rotation || 0, // Add rotation
      isSubtitle: item.isSubtitle || false,
    };

    // Update videoLayers with both parts
    let newVideoLayers = [...videoLayers];
    const layer = [...newVideoLayers[layerIndex]];
    const itemIndex = layer.findIndex((i) => i.id === item.id);

    if (itemIndex === -1) {
      console.error('Text segment not found in layer:', item.id);
      return;
    }

    layer[itemIndex] = firstPart;
    layer.push(secondPart);
    newVideoLayers[layerIndex] = layer;
    setVideoLayers(newVideoLayers);
    saveHistory(newVideoLayers, []);

    try {
      // Update the first part in the backend
      await updateTextSegment(item.id, firstPart, item.startTime, layerIndex);
      // console.log(`Successfully updated first part: ${item.id}`);

      // Remove temporary second part from state
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        newLayers[layerIndex] = newLayers[layerIndex].filter((s) => s.id !== temporarySecondPartId);
        return newLayers;
      });

      // Update addTextToTimeline call for second part
      const newSegment = await addTextToTimeline(layerIndex, secondPart.startTime, {
        text: secondPart.text,
        duration: secondPartDuration,
        fontFamily: secondPart.fontFamily,
        scale: secondPart.scale,
        rotation: secondPart.rotation, // Add rotation
        fontColor: secondPart.fontColor,
        backgroundColor: secondPart.backgroundColor,
        positionX: secondPart.positionX,
        positionY: secondPart.positionY,
        alignment: secondPart.alignment,
        backgroundOpacity: secondPart.backgroundOpacity,
        backgroundBorderWidth: secondPart.backgroundBorderWidth,
        backgroundBorderColor: secondPart.backgroundBorderColor,
        backgroundH: secondPart.backgroundH,
        backgroundW: secondPart.backgroundW,
        backgroundBorderRadius: secondPart.backgroundBorderRadius,
        textBorderColor: secondPart.textBorderColor,
        textBorderWidth: secondPart.textBorderWidth,
        textBorderOpacity: secondPart.textBorderOpacity,
        letterSpacing: secondPart.letterSpacing,
        lineSpacing: secondPart.lineSpacing,
        isSubtitle: secondPart.isSubtitle || false,
      });

      if (!newSegment) {
        throw new Error('Failed to add second part to timeline');
      }

      // console.log('Successfully added second part to timeline:', newSegment);
      saveHistory(videoLayers, []);
      autoSave(videoLayers, []);
    } catch (error) {
      console.error('Error during text split:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      // Revert state on error
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        newLayers[layerIndex] = newLayers[layerIndex].map((i) =>
          i.id === item.id ? item : i
        ).filter((i) => i.id !== temporarySecondPartId);
        return newLayers;
      });
      if (error.response?.status >= 500) {
        await loadProjectTimeline();
      }
      return;
    }
  };

  return { addTextToTimeline, updateTextSegment, handleTextDrop, handleSaveTextSegment, handleTextSplit };
};

export default TextSegmentHandler;