import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { CDN_URL } from '../Config';

const VideoSegmentHandler = ({
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
  videos,
  setCurrentTime,
  updateTimeoutRef
}) => {

  const addVideoToTimeline = async (videoPath, layer, timelineStartTime, timelineEndTime, startTimeWithinVideo, endTimeWithinVideo, createAudioSegment = true) => {
    try {
      setIsLoading(true); // Set loading state (replacing setIsAddingToTimeline)
      if (!videoPath) {
        throw new Error('videoPath is undefined or null');
      }
      const token = localStorage.getItem('token');
      const fileName = videoPath.includes('/') ? videoPath.split('/').pop() : videoPath;
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-to-timeline`,
        {
          videoPath: fileName,
          layer: layer || 0,
          timelineStartTime: timelineStartTime || 0,
          timelineEndTime: timelineEndTime || null,
          startTime: startTimeWithinVideo || 0,
          endTime: endTimeWithinVideo || null,
          speed: 1.0,
          createAudioSegment,
        },
        { params: { sessionId }, headers: { Authorization: `Bearer ${token}` } }
      );
      const { videoSegmentId, audioSegmentId, audioPath, waveformJsonPath } = response.data;
  
      const segmentResponse = await axios.get(
        `${API_BASE_URL}/projects/${projectId}/get-segment`,
        {
          params: { sessionId, segmentId: videoSegmentId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const videoSegment = segmentResponse.data.videoSegment;
      const audioSegment = createAudioSegment && audioSegmentId ? segmentResponse.data.audioSegment : null;
      if (!videoSegment) {
        throw new Error(`Newly created video segment ${videoSegmentId} not found`);
      }
  
      const video = videos.find((v) => v.fileName === fileName);
      if (!video) {
        throw new Error(`Video with fileName ${fileName} not found in videos list`);
      }
  
      const newSegment = {
        id: videoSegment.id,
        type: 'video',
        startTime: videoSegment.timelineStartTime,
        duration: videoSegment.timelineEndTime - videoSegment.timelineStartTime,
        filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(fileName)}`,
        layer: layer || 0,
        positionX: videoSegment.positionX || 0,
        positionY: videoSegment.positionY || 0,
        scale: videoSegment.scale || 1,
        startTimeWithinVideo: videoSegment.startTime || 0,
        endTimeWithinVideo: videoSegment.endTime || (videoSegment.timelineEndTime - videoSegment.timelineStartTime),
        thumbnail: video.thumbnail,
        filters: videoSegment.filters || [],
        audioSegmentId: audioSegmentId || null,
        speed: videoSegment.speed || 1.0,
        rotation: videoSegment.rotation || 0,
        displayName: video.displayName || fileName,
      };
  
      let updatedVideoLayers = videoLayers;
      setVideoLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        while (newLayers.length <= layer) newLayers.push([]);
        newLayers[layer] = [...newLayers[layer], newSegment];
        updatedVideoLayers = newLayers;
        return newLayers;
      });
  
      let updatedAudioLayers = audioLayers;
      if (createAudioSegment && audioSegment && audioSegmentId) {
        const audioLayerIndex = Math.abs(audioSegment.layer) - 1;
        const sanitizedAudioId = audioSegment.id.replace(/[^a-zA-Z0-9]/g, '-');
        let tempSegmentId = `temp-${uuidv4()}`;
        while (updatedAudioLayers.some((layer) => layer.some((segment) => segment.id === tempSegmentId))) {
          tempSegmentId = `temp-${uuidv4()}`;
        }
  
        const audioFileName = audioSegment.audioFileName || audioSegment.audioPath?.split('/').pop() || fileName;
        const tempAudioSegment = {
          id: tempSegmentId,
          type: 'audio',
          fileName: audioFileName,
          url: `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`,
          waveformJsonPath: audioSegment.waveformJsonPath
            ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
            : waveformJsonPath
            ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(waveformJsonPath.split('/').pop())}`
            : null,
          startTime: roundToThreeDecimals(audioSegment.timelineStartTime),
          duration: roundToThreeDecimals(audioSegment.timelineEndTime - audioSegment.timelineStartTime),
          timelineStartTime: roundToThreeDecimals(audioSegment.timelineStartTime),
          timelineEndTime: roundToThreeDecimals(audioSegment.timelineEndTime),
          startTimeWithinAudio: roundToThreeDecimals(audioSegment.startTime || 0),
          endTimeWithinAudio: roundToThreeDecimals(audioSegment.endTime || (audioSegment.timelineEndTime - audioSegment.timelineStartTime)),
          layer: audioSegment.layer,
          displayName: audioSegment.audioPath
            ? audioSegment.audioPath.split('/').pop()
            : audioFileName,
          volume: audioSegment.volume || 1.0,
          keyframes: audioSegment.keyframes || {},
          extracted: true,
        };
  
        setAudioLayers((prevLayers) => {
          const newLayers = [...prevLayers];
          while (newLayers.length <= audioLayerIndex) newLayers.push([]);
          const existingSegment = newLayers[audioLayerIndex].find((s) => s.id === tempAudioSegment.id);
          if (existingSegment) {
            console.warn(`Segment with ID ${tempAudioSegment.id} already exists in layer ${audioLayerIndex}. Updating instead.`);
            newLayers[audioLayerIndex] = newLayers[audioLayerIndex].map((s) =>
              s.id === tempAudioSegment.id ? { ...s, ...tempAudioSegment, layer: audioSegment.layer } : s
            );
          } else {
            newLayers[audioLayerIndex].push(tempAudioSegment);
          }
          updatedAudioLayers = newLayers;
  
          if (window.initializeWaveform) {
            // console.log('Calling initializeWaveform for temporary audio segment:', tempAudioSegment.id);
            window.initializeWaveform(tempAudioSegment).then((cleanupFn) => {
              if (typeof cleanupFn === 'function') {
                // console.log(`Waveform initialized for temp ID ${tempAudioSegment.id}`);
              }
            });
          }
  
          return newLayers;
        });
  
        setAudioLayers((prevLayers) => {
          const updatedLayers = prevLayers.map((layer, index) => {
            if (index === audioLayerIndex) {
              return layer.map((item) =>
                item.id === tempSegmentId
                  ? {
                      ...item,
                      id: sanitizedAudioId,
                      startTime: roundToThreeDecimals(audioSegment.timelineStartTime),
                      duration: roundToThreeDecimals(audioSegment.timelineEndTime - audioSegment.timelineStartTime),
                      timelineStartTime: roundToThreeDecimals(audioSegment.timelineStartTime),
                      timelineEndTime: roundToThreeDecimals(audioSegment.timelineEndTime),
                      startTimeWithinAudio: roundToThreeDecimals(audioSegment.startTime || 0),
                      endTimeWithinAudio: roundToThreeDecimals(audioSegment.endTime || (audioSegment.timelineEndTime - audioSegment.timelineStartTime)),
                      volume: audioSegment.volume || 1.0,
                      keyframes: audioSegment.keyframes || {},
                      waveformJsonPath: audioSegment.waveformJsonPath
                        ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
                        : waveformJsonPath
                        ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(waveformJsonPath.split('/').pop())}`
                        : null,
                      url: `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`,
                      extracted: true,
                    }
                  : item
              );
            }
            return layer;
          });
          updatedAudioLayers = updatedLayers;
  
          if (window.waveSurferInstances && window.waveSurferInstances.current.has(tempSegmentId)) {
            // console.log(`Transferring WaveSurfer instance from ${tempSegmentId} to ${sanitizedAudioId}`);
            const wavesurfer = window.waveSurferInstances.current.get(tempSegmentId);
            window.waveSurferInstances.current.set(sanitizedAudioId, wavesurfer);
            window.waveSurferInstances.current.delete(tempSegmentId);
            if (window.updateWaveform) {
              // console.log('Calling updateWaveform for audio segment with final ID:', sanitizedAudioId);
              window.updateWaveform({
                ...tempAudioSegment,
                id: sanitizedAudioId,
                waveformJsonPath: audioSegment.waveformJsonPath
                  ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(audioSegment.waveformJsonPath.split('/').pop())}`
                  : waveformJsonPath
                  ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(waveformJsonPath.split('/').pop())}`
                  : null,
                url: `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`,
                extracted: true,
              });
            }
          }
  
          return updatedLayers;
        });
      }
  
      setTotalDuration((prev) => Math.max(prev, newSegment.startTime + newSegment.duration));
  
      // Force VideoPreview to re-render by micro-updating currentTime
      setCurrentTime((prev) => prev + 0.0001); // Use a small increment to ensure update
  
      setVideoLayers((prev) => [...prev]); // Create a new array reference
  
      autoSave(updatedVideoLayers, updatedAudioLayers);
  
      saveHistory();
      return { videoSegment: newSegment, audioSegment };
    } catch (error) {
      console.error('Error adding video to timeline:', error.response?.data || error.message);
      throw error;
    } finally {
      setIsLoading(false); // Clear loading state (replacing setIsAddingToTimeline)
    }
  };

  const updateSegmentPosition = async (
    segmentId,
    newStartTime,
    newLayer,
    newDuration,
    startTimeWithinVideo,
    endTimeWithinVideo,
    layers = videoLayers
  ) => {
    if (!projectId || !sessionId) return;
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const layer = layers[newLayer];
      if (!layer) {
        console.error(`Layer ${newLayer} does not exist in provided layers`, layers);
        return;
      }
      const item = layer.find((i) => i.id === segmentId);
      if (!item) {
        console.error(`Segment ${segmentId} not found in layer ${newLayer}`);
        return;
      }
      const timelineEndTime = newStartTime + newDuration;
      const requestBody = {
        segmentId,
        timelineStartTime: roundToThreeDecimals(newStartTime),
        timelineEndTime: roundToThreeDecimals(timelineEndTime),
        layer: newLayer,
        startTime: startTimeWithinVideo !== undefined
          ? roundToThreeDecimals(startTimeWithinVideo)
          : roundToThreeDecimals(item.startTimeWithinVideo || 0),
        endTime: endTimeWithinVideo !== undefined
          ? roundToThreeDecimals(endTimeWithinVideo)
          : roundToThreeDecimals(item.endTimeWithinVideo || newDuration),
        positionX: item.positionX ?? 0,
        positionY: item.positionY ?? 0,
        scale: item.scale ?? 1,
        rotation: item.rotation ?? 0,
        speed: item.speed ?? 1.0,
        displayName: item.displayName || item.filePath.split('/').pop(),
      };
      await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-segment`,
        requestBody,
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(
      //   `Updated segment ${segmentId} to start at ${requestBody.timelineStartTime}s, end at ${requestBody.timelineEndTime}s, layer ${newLayer}, startTimeWithinVideo: ${requestBody.startTime}, endTimeWithinVideo: ${requestBody.endTime}, speed: ${requestBody.speed}`
      // );
    } catch (error) {
      console.error('Error updating segment position:', error);
    } finally {
      setIsLoading(false); // Hide loading screen
    }
  };

  const handleVideoDrop = async (e, draggingItem, dragLayer, mouseX, mouseY, timeScale, dragOffset, snapIndicators) => {
    if (!sessionId || draggingItem?.type === 'text' || draggingItem?.type === 'audio') return;

    if (!timelineRef.current) {
      console.error('Timeline ref is not available');
      return;
    }

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const layerHeight = 40;
    const relativeMouseY = mouseY - timelineRect.top;

    const timelineLayers = timelineRef.current.querySelectorAll('.timeline-layer');
    if (!timelineLayers) {
      console.error('Timeline layers not found');
      return;
    }

    const totalVideoLayers = videoLayers.length;
    const reversedIndex = Math.floor(relativeMouseY / layerHeight);
    let targetLayer;

    if (reversedIndex <= totalVideoLayers) {
      targetLayer = totalVideoLayers - reversedIndex;
    } else {
      // console.log('Cannot drop video in audio layers');
      return;
    }

    targetLayer = Math.max(0, reversedIndex < 0 ? totalVideoLayers : targetLayer);

    if (!draggingItem) {
      const dataString = e.dataTransfer.getData('application/json');
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data.type === 'media') {
          const video = data.video;
          let dropTimePosition = (mouseX - timelineRect.left) / timeScale;
          let newVideoLayers = [...videoLayers];
          while (newVideoLayers.length <= targetLayer) newVideoLayers.push([]);
          const targetLayerVideos = newVideoLayers[targetLayer];
          let adjustedStartTime = Math.max(0, dropTimePosition);
          let hasOverlap = true;
          while (hasOverlap) {
            hasOverlap = targetLayerVideos.some((existingVideo) => {
              const existingStart = existingVideo.startTime;
              const existingEnd = existingStart + existingVideo.duration;
              const newVideoEnd = adjustedStartTime + (video.duration / (existingVideo.speed ?? 1.0));
              return adjustedStartTime < existingEnd && newVideoEnd > existingStart;
            });
            if (hasOverlap) {
              const overlappingVideo = targetLayerVideos.find((existingVideo) => {
                const existingStart = existingVideo.startTime;
                const existingEnd = existingVideo.duration;
                const newVideoEnd = adjustedStartTime + (video.duration / (existingVideo.speed ?? 1.0));
                return adjustedStartTime < existingEnd && newVideoEnd > existingStart;
              });
              if (overlappingVideo) {
                adjustedStartTime = overlappingVideo.startTime + overlappingVideo.duration;
              } else break;
            }
          }

          // Call addVideoToTimeline with rounded startTime
          // For new video drop
          const newSegment = await addVideoToTimeline(
            video.fileName,
            targetLayer,
            roundToThreeDecimals(adjustedStartTime),
            null
          );

          newVideoLayers[targetLayer].push({
            ...newSegment,
            startTime: roundToThreeDecimals(newSegment.startTime),
            timelineStartTime: roundToThreeDecimals(newSegment.timelineStartTime),
            timelineEndTime: roundToThreeDecimals(newSegment.timelineEndTime),
            startTimeWithinVideo: roundToThreeDecimals(newSegment.startTimeWithinVideo || 0),
            endTimeWithinVideo: roundToThreeDecimals(newSegment.endTimeWithinVideo || newSegment.duration),
            duration: roundToThreeDecimals((newSegment.endTimeWithinVideo - newSegment.startTimeWithinVideo) / (newSegment.speed ?? 1.0)),
            filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(video.fileName)}`,
            positionX: newSegment.positionX ?? 0,
            positionY: newSegment.positionY ?? 0,
            scale: newSegment.scale ?? 1,
            rotation: newSegment.rotation ?? 0,
            speed: newSegment.speed ?? 1.0,
          });

          // Update total duration
          let maxDuration = 0;
          newVideoLayers.forEach((layer) => {
            layer.forEach((segment) => {
              const effectiveDuration = segment.duration;
              const endTime = segment.startTime + effectiveDuration;
              if (endTime > maxDuration) maxDuration = endTime;
            });
          });
          setTotalDuration(maxDuration > 0 ? maxDuration : 0);
        }
      }
      return;
    }

    if (draggingItem.type !== 'video') return;

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
      return;
    }

    if (actualLayerIndex === dragLayer) {
      newVideoLayers[actualLayerIndex] = newVideoLayers[actualLayerIndex].filter((v) => v.id !== draggingItem.id);
    } else {
      newVideoLayers[dragLayer] = newVideoLayers[dragLayer].filter((v) => v.id !== draggingItem.id);
    }
    // For existing video drag
    const updatedItem = {
      ...draggingItem,
      startTime: roundToThreeDecimals(adjustedStartTime),
      layer: actualLayerIndex,
      timelineStartTime: roundToThreeDecimals(adjustedStartTime),
      timelineEndTime: roundToThreeDecimals(adjustedStartTime + draggingItem.duration),
      startTimeWithinVideo: roundToThreeDecimals(draggingItem.startTimeWithinVideo),
      endTimeWithinVideo: roundToThreeDecimals(draggingItem.endTimeWithinVideo),
      duration: roundToThreeDecimals((draggingItem.endTimeWithinVideo - draggingItem.startTimeWithinVideo) / (draggingItem.speed ?? 1.0)),
      positionX: draggingItem.positionX ?? 0, // Add positionX
      positionY: draggingItem.positionY ?? 0, // Add positionY
      scale: draggingItem.scale ?? 1, // Add scale
      rotation: draggingItem.rotation ?? 0, // Add rotation
      speed: draggingItem.speed ?? 1.0,
    };
    newVideoLayers[actualLayerIndex].push(updatedItem);

    setVideoLayers(newVideoLayers);
    saveHistory(newVideoLayers, []);
    autoSave(newVideoLayers, []);

    await updateSegmentPosition(
      draggingItem.id,
      roundToThreeDecimals(adjustedStartTime),
      actualLayerIndex,
      draggingItem.duration,
      roundToThreeDecimals(updatedItem.startTimeWithinVideo),
      roundToThreeDecimals(updatedItem.endTimeWithinVideo),
      newVideoLayers
    );
  };

  const handleVideoSplit = async (item, clickTime, layerIndex) => {
    // console.log('handleVideoSplit: item=', JSON.stringify(item, null, 2));
    // console.log('videoLayers state:', JSON.stringify(videoLayers, null, 2));

    // Calculate split time relative to the segment's start
    const splitTime = clickTime - item.startTime;
    if (splitTime <= 0.1 || splitTime >= item.duration - 0.1) {
      console.warn('Split time is too close to segment boundaries:', { splitTime, duration: item.duration });
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token missing');
      }

      // Calculate durations for both parts
      const speed = item.speed ?? 1.0;
      const firstPartDuration = splitTime;
      const secondPartDuration = item.duration - splitTime;
      const firstPartVideoDuration = firstPartDuration * speed; // Duration in video time
      const originalVideoStartTime = roundToThreeDecimals(item.startTimeWithinVideo || 0);
      const firstPartKeyframes = item.keyframes || {};

      // Create first and second parts
      const firstPart = {
        ...item,
        duration: roundToThreeDecimals(firstPartDuration),
        timelineEndTime: roundToThreeDecimals(item.startTime + firstPartDuration),
        endTimeWithinVideo: roundToThreeDecimals(originalVideoStartTime + firstPartVideoDuration),
        positionX: item.positionX ?? 0, // Add positionX
        positionY: item.positionY ?? 0, // Add positionY
        scale: item.scale ?? 1, // Add scale
        rotation: item.rotation ?? 0, // Add rotation
        speed: speed,
        keyframes: firstPartKeyframes
      };

      // Generate a unique temporary ID for the second part
      const doesIdExist = (id) => {
        return videoLayers.some((layer) => layer.some((segment) => segment.id === id));
      };
      let secondPartId = `temp-split-${uuidv4()}`;
      while (doesIdExist(secondPartId)) {
        secondPartId = `temp-split-${uuidv4()}`;
      }

      const secondPart = {
        ...item,
        id: secondPartId,
        startTime: roundToThreeDecimals(item.startTime + splitTime),
        duration: roundToThreeDecimals(secondPartDuration),
        timelineStartTime: roundToThreeDecimals(item.startTime + splitTime),
        timelineEndTime: roundToThreeDecimals(item.startTime + item.duration),
        startTimeWithinVideo: roundToThreeDecimals(originalVideoStartTime + firstPartVideoDuration),
        endTimeWithinVideo: roundToThreeDecimals(item.endTimeWithinVideo || item.duration * speed),
        positionX: item.positionX ?? 0, // Add positionX
        positionY: item.positionY ?? 0, // Add positionY
        scale: item.scale ?? 1, // Add scale
        rotation: item.rotation ?? 0, // Add rotation
        speed: speed,
      };

      // Update videoLayers state
      let newVideoLayers = [...videoLayers];
      let layer = [...newVideoLayers[layerIndex]];
      const itemIndex = layer.findIndex((i) => i.id === item.id);
      if (itemIndex === -1) {
        console.error('Item not found in layer:', item.id);
        return;
      }

      layer[itemIndex] = firstPart;
      layer.push(secondPart);
      newVideoLayers[layerIndex] = layer;

      setVideoLayers(newVideoLayers);
      saveHistory(newVideoLayers, audioLayers || []);

      // Update total duration
      let maxDuration = 0;
      newVideoLayers.forEach((layer) => {
        layer.forEach((segment) => {
          const effectiveDuration = segment.duration;
          const endTime = segment.startTime + effectiveDuration;
          if (endTime > maxDuration) maxDuration = endTime;
        });
      });
      setTotalDuration(maxDuration > 0 ? maxDuration : 0);

      // Update first part in backend
      await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-segment`,
        {
          segmentId: item.id,
          timelineStartTime: roundToThreeDecimals(item.startTime),
          timelineEndTime: roundToThreeDecimals(item.startTime + firstPartDuration),
          layer: layerIndex,
          startTime: roundToThreeDecimals(originalVideoStartTime),
          endTime: roundToThreeDecimals(originalVideoStartTime + firstPartVideoDuration),
          speed: speed,
          positionX: item.positionX ?? 0,
          positionY: item.positionY ?? 0,
          scale: item.scale ?? 1,
          rotation: item.rotation ?? 0,
          displayName: item.displayName || item.filePath.split('/').pop(),
          keyframes: firstPartKeyframes,
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(`Successfully updated first part: ${item.id}`);

      const filename = decodeURIComponent(item.filePath.split('/').pop());
      const addResponse = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-to-timeline`,
        {
          videoPath: filename,
          layer: layerIndex,
          timelineStartTime: roundToThreeDecimals(secondPart.startTime),
          timelineEndTime: roundToThreeDecimals(secondPart.timelineEndTime),
          startTime: roundToThreeDecimals(secondPart.startTimeWithinVideo),
          endTime: roundToThreeDecimals(secondPart.endTimeWithinVideo),
          createAudioSegment: false,
          speed: speed,
          positionX: secondPart.positionX ?? 0,
          positionY: secondPart.positionY ?? 0,
          scale: secondPart.scale ?? 1,
          rotation: secondPart.rotation ?? 0,
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { videoSegmentId } = addResponse.data;

      // Update second part in videoLayers with backend data
      setVideoLayers((prev) => {
        const newLayers = [...prev];
        const updatedLayer = [...newLayers[layerIndex]];
        const secondPartIndex = updatedLayer.findIndex((s) => s.id === secondPartId);
        if (secondPartIndex === -1) {
          console.error(`Temporary second part ${secondPartId} not found`);
          return prev;
        }
        updatedLayer[secondPartIndex] = {
          ...secondPart,
          id: videoSegmentId,
          startTime: roundToThreeDecimals(secondPart.startTime),
          duration: roundToThreeDecimals(secondPartDuration),
          timelineStartTime: roundToThreeDecimals(secondPart.timelineStartTime),
          timelineEndTime: roundToThreeDecimals(secondPart.timelineEndTime),
          startTimeWithinVideo: roundToThreeDecimals(secondPart.startTimeWithinVideo),
          endTimeWithinVideo: roundToThreeDecimals(secondPart.endTimeWithinVideo),
          filePath: `${CDN_URL}/videos/projects/${projectId}/${encodeURIComponent(filename)}`,
          positionX: secondPart.positionX ?? 0,
          positionY: secondPart.positionY ?? 0,
          scale: secondPart.scale ?? 1,
          rotation: secondPart.rotation ?? 0,
          speed: speed,
          displayName: item.displayName || filename,
        };
        newLayers[layerIndex] = updatedLayer;
        return newLayers;
      });

      // Save history and auto-save
      saveHistory(newVideoLayers, audioLayers || []);
      autoSave(newVideoLayers, audioLayers || []);

    } catch (error) {
      console.error('Error splitting video:', error.response?.data || error.message);
      // Revert state on error
      setVideoLayers([...videoLayers]);
      // Revert total duration
      let maxDuration = 0;
      videoLayers.forEach((layer) => {
        layer.forEach((segment) => {
          const effectiveDuration = segment.duration;
          const endTime = segment.startTime + effectiveDuration;
          if (endTime > maxDuration) maxDuration = endTime;
        });
      });
      setTotalDuration(maxDuration > 0 ? maxDuration : 0);
      alert('Failed to split video. Please try again.');
    }
  };

  const fetchVideoDuration = async (filePath) => {
    try {
      const token = localStorage.getItem('token');
      const filename = filePath.split('/').pop();
      const decodedFilename = decodeURIComponent(filename);
      const response = await axios.get(
        `${API_BASE_URL}/projects/${projectId}/video-duration/${encodeURIComponent(decodedFilename)}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data; // Duration is not rounded as it is not one of the specified properties
    } catch (error) {
      console.error('Error fetching video duration:', error);
      return null;
    }
  };

  return { handleVideoDrop, updateSegmentPosition, handleVideoSplit, fetchVideoDuration, addVideoToTimeline };
};

export default VideoSegmentHandler;