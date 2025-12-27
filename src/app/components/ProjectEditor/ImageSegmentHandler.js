import axios from 'axios';
import { CDN_URL } from '../Config';

const ImageSegmentHandler = ({
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
  setIsAddingToTimeline, // Add this
  setIsLoading
}) => {
  const generateImageThumbnail = async (imagePath, isElement = false) => {
    const filename = imagePath.split('/').pop();
    const fullImagePath = isElement
      ? `${CDN_URL}/elements/${encodeURIComponent(filename)}`
      : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(filename)}`;
    // console.log(`Generating thumbnail for: ${fullImagePath}`);
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = fullImagePath;
      img.onload = () => {
        // console.log(`Image loaded successfully: ${fullImagePath}`);
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
        // console.log(`Thumbnail generated: ${thumbnail.substring(0, 50)}...`);
        resolve(thumbnail);
      };
      img.onerror = () => {
        console.error(`Failed to load image for thumbnail: ${fullImagePath}`);
        resolve(null);
      };
    });
  };

  const addImageToTimeline = async (imageFileName, layer, timelineStartTime, timelineEndTime, isElement = false) => {
    if (!sessionId || !projectId) {
      console.error('Missing sessionId or projectId');
      return;
    }
    try {
      setIsAddingToTimeline(true); // Set loading state
      const token = localStorage.getItem('token');
      const roundedStartTime = roundToThreeDecimals(timelineStartTime);
      const roundedEndTime = roundToThreeDecimals(timelineEndTime);
      // console.log('Adding image to timeline:', { imageFileName, layer, timelineStartTime: roundedStartTime, timelineEndTime: roundedEndTime, isElement });
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-project-image-to-timeline`,
        {
          imageFileName,
          layer,
          timelineStartTime: roundedStartTime,
          timelineEndTime: roundedEndTime,
          positionX: 0,
          positionY: 0,
          scale: 1,
          rotation: 0, // Add rotation
          isElement,
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const segment = response.data;
      // console.log('addImageToTimeline response:', JSON.stringify(segment, null, 2));

      const effectiveIsElement = segment.element !== undefined ? segment.element : isElement;
      const thumbnail = await generateImageThumbnail(imageFileName, effectiveIsElement);
      const newSegment = {
        id: segment.id,
        type: 'image',
        fileName: imageFileName,
        filePath: effectiveIsElement
          ? `${CDN_URL}/elements/${encodeURIComponent(imageFileName)}`
          : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(imageFileName)}`,
        thumbnail,
        startTime: timelineStartTime,
        duration: timelineEndTime - timelineStartTime,
        layer,
        positionX: segment.positionX || 0,
        positionY: segment.positionY || 0,
        scale: segment.scale || 1,
        rotation: segment.rotation || 0,
        opacity: segment.opacity || 1.0,
        width: segment.width,
        height: segment.height,
        effectiveWidth: segment.effectiveWidth,
        effectiveHeight: segment.effectiveHeight,
        maintainAspectRatio: segment.maintainAspectRatio,
        isElement: effectiveIsElement,
        timelineStartTime: roundedStartTime,
        timelineEndTime: roundedEndTime,
        keyframes: segment.keyframes || {},
      };

      setVideoLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= layer) newLayers.push([]);

        // Check if a segment with the same ID already exists in any layer
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
          // Update existing segment
          newLayers[existingLayerIndex] = newLayers[existingLayerIndex].map((s) =>
            s.id === newSegment.id ? { ...s, ...newSegment, layer } : s
          );
        } else {
          // Add new segment
          newLayers[layer].push(newSegment);
        }

        return newLayers;
      });

      saveHistory(videoLayers, audioLayers);
      autoSave(videoLayers, audioLayers);
      return newSegment;
    } catch (error) {
      console.error('Error in addImageToTimeline:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        imageFileName,
        isElement,
        timelineStartTime,
        timelineEndTime,
        layer,
      });
      // Avoid calling loadProjectTimeline unless critical
      if (error.response?.status >= 500) {
        await loadProjectTimeline();
      }
      throw error;
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };

  const updateImageSegment = async (segmentId, newStartTime, newLayer, newDuration, updatedSettings = {}) => {
    if (!sessionId || !projectId) return;
    try {
      const token = localStorage.getItem('token');
      let item;
      for (const layer of videoLayers) {
        item = layer.find((i) => i.id === segmentId);
        if (item) break;
      }
      if (!item) {
        console.error(`Image segment with ID ${segmentId} not found`);
        return;
      }
      const duration = newDuration || item.duration;
      const isElement = updatedSettings.isElement !== undefined
        ? updatedSettings.isElement
        : item.isElement !== undefined
        ? item.isElement
        : item.filePath.includes('elements/');
      const requestBody = {
        segmentId,
        timelineStartTime: roundToThreeDecimals(newStartTime),
        timelineEndTime: roundToThreeDecimals(newStartTime + duration),
        layer: newLayer,
        positionX: updatedSettings.positionX || item.positionX || 0,
        positionY: updatedSettings.positionY || item.positionY || 0,
        scale: updatedSettings.scale || item.scale || 1,
        rotation: updatedSettings.rotation || item.rotation || 0, // Add rotation
        opacity: updatedSettings.opacity || item.opacity || 1.0,
        width: updatedSettings.width || item.width,
        height: updatedSettings.height || item.height,
        effectiveWidth: updatedSettings.effectiveWidth || item.effectiveWidth,
        effectiveHeight: updatedSettings.effectiveHeight || item.effectiveHeight,
        maintainAspectRatio:
          updatedSettings.maintainAspectRatio !== undefined
            ? updatedSettings.maintainAspectRatio
            : item.maintainAspectRatio,
        isElement,
        keyframes: updatedSettings.keyframes || item.keyframes || {}, // Add keyframes
      };
      setIsLoading(true); // Show loading screen
      await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-image`,
        requestBody,
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(`Updated image segment ${segmentId}`);
    } catch (error) {
      console.error('Error updating image segment:', error.response?.data || error.message);
      await loadProjectTimeline();
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageDrop = async (
    e,
    draggingItem,
    dragLayer,
    mouseX,
    mouseY,
    timeScale,
    dragOffset,
    snapIndicators,
    isElement = false
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!sessionId || !timelineRef.current) {
      console.error('Session ID or timeline ref is not available');
      return;
    }

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const layerHeight = 40;
    const relativeMouseY = mouseY - timelineRect.top;
    const totalVideoLayers = videoLayers.length;

    const reversedIndex = Math.floor(relativeMouseY / layerHeight);
    let targetLayer = totalVideoLayers - reversedIndex;
    targetLayer = Math.max(0, reversedIndex < 0 ? totalVideoLayers : targetLayer);

    if (!draggingItem) {
      const dataString = e.dataTransfer.getData('application/json');
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data.type === 'photo' || data.type === 'element') {
          const item = data.photo || data.element;
          const isElementDrop = data.type === 'element';
          let dropTimePosition = (mouseX - timelineRect.left) / timeScale;
          let adjustedStartTime = Math.max(0, dropTimePosition);
          const duration = item.duration || 5;

          let newVideoLayers = [...videoLayers];
          while (newVideoLayers.length <= targetLayer) newVideoLayers.push([]);
          const targetLayerItems = newVideoLayers[targetLayer];

          while (true) {
            let hasOverlap = false;
            let overlappingItem = null;
            for (const existingItem of targetLayerItems) {
              const existingStart = existingItem.startTime;
              const existingEnd = existingStart + existingItem.duration;
              const newEnd = adjustedStartTime + duration;
              if (adjustedStartTime < existingEnd && newEnd > existingStart) {
                hasOverlap = true;
                overlappingItem = existingItem;
                break;
              }
            }
            if (!hasOverlap) break;
            adjustedStartTime = overlappingItem.startTime + overlappingItem.duration;
          }

          const imageFileName = item.fileName;
          // console.log('Dropping new item:', {
          //   imageFileName,
          //   targetLayer,
          //   adjustedStartTime,
          //   isElement: isElementDrop,
          // });
          await addImageToTimeline(
            imageFileName,
            targetLayer,
            roundToThreeDecimals(adjustedStartTime), // Round
            roundToThreeDecimals(adjustedStartTime + duration), // Round
            isElementDrop
          );
          saveHistory(videoLayers, audioLayers);
          autoSave(videoLayers, audioLayers);
        }
      }
      return;
    }

    if (draggingItem.type !== 'image') {
      // console.log('Only image segments can be moved');
      return;
    }

    const newStartTime =
      snapIndicators.length > 0
        ? snapIndicators[0].time - (snapIndicators[0].edge === 'end' ? draggingItem.duration : 0)
        : (mouseX - timelineRect.left) / timeScale - dragOffset;
    const adjustedStartTime = Math.max(0, newStartTime);

    let newVideoLayers = [...videoLayers];
    while (newVideoLayers.length <= targetLayer) newVideoLayers.push([]);

    const hasOverlap = newVideoLayers[targetLayer].some((item) => {
      if (item.id === draggingItem.id) return false;
      const itemStart = item.startTime;
      const itemEnd = itemStart + item.duration;
      const newEnd = adjustedStartTime + draggingItem.duration;
      return adjustedStartTime < itemEnd && newEnd > itemStart;
    });

    if (hasOverlap) {
      // console.log('Cannot move image: Overlap detected in target layer');
      return;
    }

    newVideoLayers[dragLayer] = newVideoLayers[dragLayer].filter((v) => v.id !== draggingItem.id);
    const isElementSegment = draggingItem.isElement !== undefined ? draggingItem.isElement : draggingItem.filePath.includes('elements/');
    const updatedItem = {
      ...draggingItem,
      startTime: adjustedStartTime,
      layer: targetLayer,
      timelineStartTime: roundToThreeDecimals(adjustedStartTime),
      timelineEndTime: roundToThreeDecimals(adjustedStartTime + draggingItem.duration),
      positionX: draggingItem.positionX || 0,
      positionY: draggingItem.positionY || 0,
      scale: draggingItem.scale || 1,
      rotation: draggingItem.rotation || 0,
      filePath: isElementSegment
        ? `${CDN_URL}/elements/${encodeURIComponent(draggingItem.fileName)}`
        : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(draggingItem.fileName)}`,
    };
    newVideoLayers[targetLayer].push(updatedItem);

    setVideoLayers(newVideoLayers);
    saveHistory(videoLayers, audioLayers);
    autoSave(videoLayers, audioLayers);

    // Update the updateImageSegment call
    await updateImageSegment(draggingItem.id, roundToThreeDecimals(adjustedStartTime), targetLayer, draggingItem.duration, {
      positionX: draggingItem.positionX,
      positionY: draggingItem.positionY,
      scale: draggingItem.scale,
      rotation: draggingItem.rotation, // Add rotation
      opacity: draggingItem.opacity,
      width: draggingItem.width,
      height: draggingItem.height,
      effectiveWidth: draggingItem.effectiveWidth,
      effectiveHeight: draggingItem.effectiveHeight,
      maintainAspectRatio: draggingItem.maintainAspectRatio,
      isElement: isElementSegment,
    });
  };

  const handleImageSplit = async (item, clickTime, layerIndex) => {
    // console.log('handleImageSplit item:', JSON.stringify(item, null, 2));
    // console.log('videoLayers state:', JSON.stringify(videoLayers, null, 2));
  
    const splitTime = clickTime - item.startTime;
    if (splitTime <= 0.1 || splitTime >= item.duration - 0.1) {
      console.warn('Split time is too close to segment boundaries:', { splitTime, duration: item.duration });
      return;
    }
  
    const firstPartDuration = splitTime;
    const secondPartDuration = item.duration - splitTime;
  
    const isElement = item.isElement !== undefined
      ? item.isElement
      : item.filePath.includes('elements/');
    // console.log('Splitting item:', {
    //   imageFileName: item.fileName,
    //   isElement,
    //   startTime: item.startTime,
    //   splitTime,
    //   firstPartDuration,
    //   secondPartDuration,
    //   itemId: item.id,
    // });
  
    let newVideoLayers = [...videoLayers];
    const layer = newVideoLayers[layerIndex];
    const itemIndex = layer.findIndex((i) => i.id === item.id);
  
    if (itemIndex === -1) {
      console.error('Item not found in layer:', item.id);
      return;
    }
  
    try {
      setIsAddingToTimeline(true); // Set loading state
  
      const firstPart = {
        ...item,
        duration: firstPartDuration,
        timelineEndTime: roundToThreeDecimals(item.startTime + firstPartDuration),
        positionX: item.positionX || 0,
        positionY: item.positionY || 0,
        scale: item.scale || 1,
        rotation: item.rotation || 0,
        filePath: isElement
          ? `${CDN_URL}/elements/${encodeURIComponent(item.fileName)}`
          : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(item.fileName)}`,
        isElement,
      };
      layer[itemIndex] = firstPart;
  
      const temporarySecondPartId = `${item.id}-split-${Date.now()}`;
      const secondPart = {
        ...item,
        id: temporarySecondPartId,
        startTime: item.startTime + splitTime,
        duration: secondPartDuration,
        timelineStartTime: roundToThreeDecimals(item.startTime + splitTime),
        timelineEndTime: roundToThreeDecimals(item.startTime + item.duration),
        positionX: item.positionX || 0,
        positionY: item.positionY || 0,
        scale: item.scale || 1,
        rotation: item.rotation || 0,
        filePath: isElement
          ? `${CDN_URL}/elements/${encodeURIComponent(item.fileName)}`
          : `${CDN_URL}/image/projects/${projectId}/${encodeURIComponent(item.fileName)}`,
        isElement,
      };
      layer.push(secondPart);
  
      newVideoLayers[layerIndex] = layer;
      setVideoLayers(newVideoLayers);
      saveHistory(newVideoLayers, audioLayers);
  
      await updateImageSegment(item.id, roundToThreeDecimals(item.startTime), layerIndex, firstPartDuration, {
        isElement,
        positionX: item.positionX,
        positionY: item.positionY,
        scale: item.scale,
        rotation: item.rotation,
        opacity: item.opacity,
        width: item.width,
        height: item.height,
        effectiveWidth: item.effectiveWidth,
        effectiveHeight: item.effectiveHeight,
        maintainAspectRatio: item.maintainAspectRatio,
      });
      // console.log(`Successfully updated first part: ${item.id}`);
  
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        newLayers[layerIndex] = newLayers[layerIndex].filter((s) => s.id !== temporarySecondPartId);
        return newLayers;
      });
  
      const newSegment = await addImageToTimeline(
        item.fileName,
        layerIndex,
        roundToThreeDecimals(secondPart.startTime),
        roundToThreeDecimals(secondPart.startTime + secondPartDuration),
        isElement
      );
      // console.log('Successfully added second part to timeline:', newSegment);
  
      saveHistory(videoLayers, []);
    } catch (error) {
      console.error('Error adding second part of split:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        imageFileName: item.fileName,
        isElement,
      });
      if (error.response?.status >= 500) {
        await loadProjectTimeline();
      }
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };

  return { addImageToTimeline, updateImageSegment, handleImageDrop, handleImageSplit };
};

export default ImageSegmentHandler;