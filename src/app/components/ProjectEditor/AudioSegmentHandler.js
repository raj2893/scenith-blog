import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { CDN_URL } from '../Config';

const AudioSegmentHandler = ({
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
}) => {

  const addAudioToTimeline = async (audioFileName, layer, timelineStartTime, timelineEndTime, isExtracted = false) => {
    if (!sessionId || !projectId) {
      console.error('Missing sessionId or projectId');
      return;
    }
    try {
      setIsAddingToTimeline(true); // Set loading state
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token missing');
      }
  
      const roundedStartTime = roundToThreeDecimals(timelineStartTime);
      const roundedEndTime = roundToThreeDecimals(timelineEndTime);
      const duration = roundedEndTime - roundedStartTime;
  
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/add-project-audio-to-timeline`,
        {
          audioFileName,
          layer,
          timelineStartTime: roundedStartTime,
          timelineEndTime: roundedEndTime,
          startTime: 0,
          endTime: duration,
          volume: 1.0,
        },
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      const segment = response.data;
      const finalSegmentId = segment.audioSegmentId || segment.id;
      const waveformJsonPath = segment.waveformJsonPath
        ? `${CDN_URL}/audio/projects/${projectId}/waveforms/${encodeURIComponent(segment.waveformJsonPath.split('/').pop())}`
        : null;
  
      const newSegment = {
        id: finalSegmentId,
        type: 'audio',
        fileName: audioFileName,
        url: segment.extracted
          ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`
          : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audioFileName)}`,
        displayName: audioFileName.split('/').pop(),
        waveformJsonPath,
        startTime: roundedStartTime,
        duration: duration,
        timelineStartTime: roundedStartTime,
        timelineEndTime: roundedEndTime,
        layer,
        startTimeWithinAudio: roundToThreeDecimals(segment.startTime || 0),
        endTimeWithinAudio: roundToThreeDecimals(segment.endTime || duration),
        volume: segment.volume || 1.0,
        keyframes: segment.keyframes || {},
        extracted: segment.extracted || isExtracted,
      };
  
      setAudioLayers((prev) => {
        const newLayers = [...prev];
        while (newLayers.length <= Math.abs(layer) - 1) newLayers.push([]);
  
        const layerIndex = Math.abs(layer) - 1;
        const existingSegment = newLayers[layerIndex].find((s) => s.id === newSegment.id);
        if (existingSegment) {
          console.warn(`Segment with ID ${newSegment.id} already exists in layer ${layerIndex}. Updating instead.`);
          newLayers[layerIndex] = newLayers[layerIndex].map((s) =>
            s.id === newSegment.id ? { ...s, ...newSegment, layer } : s
          );
        } else {
          newLayers[layerIndex].push(newSegment);
        }
  
        return newLayers;
      });
  
      setTotalDuration((prev) => Math.max(prev, roundedEndTime));
      saveHistory([], audioLayers);
      autoSave([], audioLayers);
      return newSegment;
    } catch (error) {
      console.error('Error in addAudioToTimeline:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        audioFileName,
        isExtracted,
        timelineStartTime,
        timelineEndTime,
        layer,
      });
      if (error.response?.status >= 500) {
        await loadProjectTimeline();
      }
      throw error;
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };
  
  const updateAudioSegment = async (
    audioSegmentId,
    newStartTime,
    newLayer,
    newDuration,
    startTimeWithinAudio,
    endTimeWithinAudio,
    draggingItem
  ) => {
    if (!projectId || !sessionId) {
      console.error('Missing projectId or sessionId');
      return;
    }

    if (!audioSegmentId) {
      console.error('Missing audioSegmentId');
      return;
    }

    if (newStartTime < 0) {
      console.warn(`Invalid newStartTime: ${newStartTime}. Clamping to 0.`);
      newStartTime = 0;
    }

    if (typeof newLayer !== 'number' || newLayer >= 0) {
      console.error(`Invalid layer: ${newLayer}. Audio layers must be negative.`);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token missing');
      }

      let item = draggingItem;
      if (!item) {
        const layer = audioLayers[Math.abs(newLayer) - 1];
        item = layer.find((i) => i.id === audioSegmentId);
      }
      if (!item) {
        throw new Error(`Audio segment with ID ${audioSegmentId} not found in layer ${newLayer}`);
      }

      const originalDuration = item.duration;
      const timelineEndTime = newStartTime + (newDuration || originalDuration);

      const maxAudioDuration = item.maxDuration || 3600;

      const clampedStartTimeWithinAudio = Math.max(
        0,
        Math.min(
          startTimeWithinAudio !== undefined ? startTimeWithinAudio : item.startTimeWithinAudio || 0,
          maxAudioDuration - (newDuration || originalDuration)
        )
      );
      const clampedEndTimeWithinAudio = Math.max(
        clampedStartTimeWithinAudio + 0.001,
        Math.min(
          endTimeWithinAudio !== undefined
            ? endTimeWithinAudio
            : item.endTimeWithinAudio || clampedStartTimeWithinAudio + originalDuration,
          maxAudioDuration
        )
      );

      if (clampedEndTimeWithinAudio <= clampedStartTimeWithinAudio) {
        throw new Error(
          `Invalid audio segment times: endTime (${clampedEndTimeWithinAudio}) must be greater than startTime (${clampedStartTimeWithinAudio})`
        );
      }

      const adjustedDuration = clampedEndTimeWithinAudio - clampedStartTimeWithinAudio;
      const adjustedTimelineEndTime = newStartTime + adjustedDuration;

      if (adjustedTimelineEndTime <= newStartTime) {
        throw new Error(
          `Invalid timeline times: timelineEndTime (${adjustedTimelineEndTime}) must be greater than timelineStartTime (${newStartTime})`
        );
      }

      const requestBody = {
        audioSegmentId,
        timelineStartTime: roundToThreeDecimals(newStartTime),
        timelineEndTime: roundToThreeDecimals(adjustedTimelineEndTime),
        layer: newLayer,
        startTime: roundToThreeDecimals(clampedStartTimeWithinAudio),
        endTime: roundToThreeDecimals(clampedEndTimeWithinAudio),
        ...(item.volume !== undefined && { volume: item.volume }),
      };

      if (item.volume !== undefined && (item.volume < 0 || item.volume > 15)) {
        console.warn(`Invalid volume: ${item.volume}. Clamping to 15.0.`);
        requestBody.volume = 1.0;
      }

      // console.log('Sending updateAudioSegment request:', {
      //   url: `${API_BASE_URL}/projects/${projectId}/update-audio`,
      //   requestBody,
      //   sessionId,
      //   token: token.substring(0, 10) + '...',
      // });

      setIsLoading(true); // Show loading screen

      const response = await axios.put(
        `${API_BASE_URL}/projects/${projectId}/update-audio`,
        requestBody,
        {
          params: { sessionId },
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedItem = {
        ...item,
        startTime: roundToThreeDecimals(newStartTime),
        duration: adjustedDuration,
        timelineStartTime: roundToThreeDecimals(newStartTime),
        timelineEndTime: roundToThreeDecimals(adjustedTimelineEndTime),
        startTimeWithinAudio: roundToThreeDecimals(clampedStartTimeWithinAudio),
        endTimeWithinAudio: roundToThreeDecimals(clampedEndTimeWithinAudio),
      };
      const layerIndex = Math.abs(newLayer) - 1;
      setAudioLayers((prevLayers) => {
        const newLayers = [...prevLayers];
        newLayers[layerIndex] = newLayers[layerIndex].map((i) =>
          i.id === audioSegmentId ? updatedItem : i
        );
        return newLayers;
      });

      // console.log(
      //   `Updated audio segment ${audioSegmentId} to start at ${requestBody.timelineStartTime}s, end at ${requestBody.timelineEndTime}s, layer ${newLayer}, startTimeWithinAudio at ${requestBody.startTime}s, endTimeWithinAudio at ${requestBody.endTime}s`
      // );

      return response.data;
    } catch (error) {
      console.error('Error updating audio segment:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
      throw error;
  } finally {
    setIsLoading(false); // Hide loading screen
  }
  };

  const handleAudioDrop = async (
    e,
    draggingItem,
    dragLayer,
    mouseX,
    mouseY,
    timeScale,
    dragOffset,
    snapIndicators
  ) => {
    if (!sessionId || !timelineRef.current) {
      console.error('Session ID or timeline ref missing');
      return undefined;
    }
  
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const layerHeight = 40;
    const relativeMouseY = mouseY - timelineRect.top;
    const totalVideoLayers =
      timelineRef.current.querySelectorAll('.timeline-layer').length - audioLayers.length - 2;
    const reversedIndex = Math.floor(relativeMouseY / layerHeight);
  
    const audioLayerStartIndex = totalVideoLayers + 1;
    const audioLayerEndIndex = totalVideoLayers + 1 + audioLayers.length;
  
    let targetLayerIndex;
    if (reversedIndex < audioLayerStartIndex) {
      console.log('Cannot drop audio in video layers or top drop area');
      return undefined;
    } else if (reversedIndex >= audioLayerStartIndex && reversedIndex < audioLayerEndIndex) {
      targetLayerIndex = reversedIndex - audioLayerStartIndex;
    } else {
      targetLayerIndex = audioLayers.length;
    }
  
    targetLayerIndex = Math.max(0, targetLayerIndex);
    const backendLayer = -(targetLayerIndex + 1);
  
    let newAudioLayers = audioLayers.map((layer) => [...layer]);
    while (newAudioLayers.length <= targetLayerIndex) newAudioLayers.push([]);
  
    const doesIdExist = (id) => {
      return newAudioLayers.some((layer) => layer.some((segment) => segment.id === id));
    };
  
    if (!draggingItem) {
      const dataString = e.dataTransfer.getData('application/json');
      if (dataString) {
        const data = JSON.parse(dataString);
        if (data.type === 'audio') {
          const audio = data.audio;
          let adjustedStartTime = Math.max(0, (mouseX - timelineRect.left) / timeScale);
  
          const targetLayerAudios = newAudioLayers[targetLayerIndex];
          let hasOverlap = true;
          while (hasOverlap) {
            hasOverlap = targetLayerAudios.some((existing) => {
              const start = existing.startTime;
              const end = start + existing.duration;
              const newEnd = adjustedStartTime + audio.duration;
              return adjustedStartTime < end && newEnd > start;
            });
            if (hasOverlap) {
              const overlapping = targetLayerAudios.find((existing) => {
                const start = existing.startTime;
                const end = start + existing.duration;
                const newEnd = adjustedStartTime + audio.duration;
                return adjustedStartTime < end && newEnd > start;
              });
              adjustedStartTime = overlapping.startTime + overlapping.duration;
            }
          }
  
          const newSegment = await addAudioToTimeline(
            audio.fileName,
            backendLayer,
            roundToThreeDecimals(adjustedStartTime),
            roundToThreeDecimals(adjustedStartTime + audio.duration),
            audio.extracted || false
          );
          return { newSegment, response: newSegment };
        }
      }
      return undefined;
    }
  
    if (draggingItem.type !== 'audio') return undefined;
  
    const newStartTime =
      snapIndicators.length > 0
        ? snapIndicators[0].time - (snapIndicators[0].edge === 'end' ? draggingItem.duration : 0)
        : Math.max(0, (mouseX - timelineRect.left) / timeScale - dragOffset);
  
    // Check for overlap in the target layer
    const hasOverlap = newAudioLayers[targetLayerIndex].some((audio) => {
      if (audio.id === draggingItem.id) return false;
      const start = audio.startTime;
      const end = start + audio.duration;
      const newEnd = newStartTime + draggingItem.duration;
      return newStartTime < end && newEnd > start;
    });
  
    if (hasOverlap) {
      console.log('Overlap detected. Cannot move audio here.');
      return undefined;
    }
  
    const sourceLayerIndex = draggingItem.layer ? Math.abs(draggingItem.layer) - 1 : -1;
    const isSameLayer = sourceLayerIndex === targetLayerIndex;
  
    const updatedItem = {
      ...draggingItem,
      startTime: roundToThreeDecimals(newStartTime),
      layer: backendLayer,
      timelineStartTime: roundToThreeDecimals(newStartTime),
      timelineEndTime: roundToThreeDecimals(newStartTime + draggingItem.duration),
      startTimeWithinAudio: roundToThreeDecimals(draggingItem.startTimeWithinAudio),
      endTimeWithinAudio: roundToThreeDecimals(draggingItem.endTimeWithinAudio),
    };
  
    // Update audioLayers
    if (isSameLayer) {
      newAudioLayers[targetLayerIndex] = newAudioLayers[targetLayerIndex].map((a) =>
        a.id === draggingItem.id ? updatedItem : a
      );
    } else {
      if (sourceLayerIndex !== -1 && newAudioLayers[sourceLayerIndex]) {
        newAudioLayers[sourceLayerIndex] = newAudioLayers[sourceLayerIndex].filter(
          (a) => a.id !== draggingItem.id
        );
      }
      newAudioLayers[targetLayerIndex].push(updatedItem);
    }
  
    setAudioLayers(newAudioLayers);
    setTotalDuration((prev) => Math.max(prev, newStartTime + draggingItem.duration));
    saveHistory([], newAudioLayers);
    autoSave([], newAudioLayers);
  
    await updateAudioSegment(
      draggingItem.id,
      roundToThreeDecimals(newStartTime),
      backendLayer,
      draggingItem.duration,
      roundToThreeDecimals(updatedItem.startTimeWithinAudio),
      roundToThreeDecimals(updatedItem.endTimeWithinAudio),
      updatedItem
    );
  
    return { newSegment: updatedItem, response: updatedItem };
  };

  const handleAudioSplit = async (item, clickTime, layerIndex) => {
    // console.log('handleAudioSplit: item=', item, 'clickTime=', clickTime, 'layerIndex=', layerIndex);
    const splitTime = clickTime - item.startTime;
    // console.log(
    //   'Calculated splitTime=',
    //   splitTime,
    //   'item.startTime=',
    //   item.startTime,
    //   'item.duration=',
    //   item.duration
    // );
    if (splitTime <= 0.1 || splitTime >= item.duration - 0.1) {
      // console.log('Split time too close to start or end: splitTime=', splitTime);
      return;
    }
  
    try {
      setIsAddingToTimeline(true); // Set loading state
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token missing');
      }
  
      let audioFileName = item.fileName;
      if (item.extracted) {
        const response = await axios.get(`${API_BASE_URL}/projects/${projectId}`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { sessionId },
        });
        const projectData = response.data;
        const extractedAudios = projectData.extractedAudioJson
          ? typeof projectData.extractedAudioJson === 'string'
            ? JSON.parse(projectData.extractedAudioJson)
            : projectData.extractedAudioJson
          : [];
        // console.log('Extracted audios:', extractedAudios);
  
        const basename = item.fileName.split('/').pop();
        const audioEntry = extractedAudios.find(
          (a) =>
            a.audioFileName === item.fileName ||
            a.audioFileName === basename ||
            a.audioPath === item.fileName ||
            a.audioPath === `audio/projects/${projectId}/extracted/${basename}`
        );
        if (!audioEntry) {
          console.error(
            'No matching extracted audio found for fileName:',
            item.fileName,
            'basename:',
            basename
          );
          throw new Error('Extracted audio not found in project');
        }
        audioFileName = audioEntry.audioFileName;
        // console.log('Using audioFileName for extracted audio:', audioFileName);
      }
  
      const firstPartDuration = splitTime;
      const secondPartDuration = item.duration - splitTime;
      const startWithinAudio = item.startTimeWithinAudio || 0;
      // console.log(
      //   'firstPartDuration=',
      //   firstPartDuration,
      //   'secondPartDuration=',
      //   secondPartDuration,
      //   'startWithinAudio=',
      //   startWithinAudio
      // );
  
      const firstPart = {
        ...item,
        duration: firstPartDuration,
        timelineStartTime: roundToThreeDecimals(item.startTime),
        timelineEndTime: roundToThreeDecimals(item.startTime + firstPartDuration),
        startTime: roundToThreeDecimals(item.startTime),
        endTimeWithinAudio: roundToThreeDecimals(startWithinAudio + firstPartDuration),
        url: item.extracted
          ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`
          : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audioFileName)}`,
        extracted: item.extracted || false,
      };
  
      const doesIdExist = (id) => {
        return audioLayers.some((layer) => layer.some((segment) => segment.id === id));
      };
      let secondPartId = `temp-split-${uuidv4()}`;
      while (doesIdExist(secondPartId)) {
        secondPartId = `temp-split-${uuidv4()}`;
      }
  
      const secondPart = {
        ...item,
        id: secondPartId,
        startTime: roundToThreeDecimals(item.startTime + splitTime),
        timelineStartTime: roundToThreeDecimals(item.startTime + splitTime),
        duration: secondPartDuration,
        timelineEndTime: roundToThreeDecimals(item.startTime + item.duration),
        startTimeWithinAudio: roundToThreeDecimals(startWithinAudio + firstPartDuration),
        endTimeWithinAudio: roundToThreeDecimals(startWithinAudio + item.duration),
        fileName: audioFileName,
        url: item.extracted
          ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`
          : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audioFileName)}`,
        extracted: item.extracted || false,
        volume: item.volume || 1,
      };
      // console.log('firstPart=', firstPart);
      // console.log('secondPart=', secondPart);
  
      let newAudioLayers = [...audioLayers];
      let layer = [...newAudioLayers[layerIndex]];
      const itemIndex = layer.findIndex((i) => i.id === item.id);
      layer[itemIndex] = firstPart;
  
      let existingSegment = layer.find((s) => s.id === secondPart.id);
      if (existingSegment) {
        console.warn(`Segment with ID ${secondPart.id} already exists in layer ${layerIndex}. Updating instead.`);
        layer = layer.map((s) => (s.id === secondPart.id ? { ...s, ...secondPart } : s));
      } else {
        layer.push(secondPart);
      }
  
      newAudioLayers[layerIndex] = layer;
      setAudioLayers(newAudioLayers);
      saveHistory([], newAudioLayers);
  
      setTotalDuration((prev) => Math.max(prev, secondPart.timelineEndTime));
  
      await updateAudioSegment(
        item.id,
        roundToThreeDecimals(item.startTime),
        item.layer,
        firstPartDuration,
        roundToThreeDecimals(firstPart.startTimeWithinAudio),
        roundToThreeDecimals(firstPart.endTimeWithinAudio),
        firstPart
      );
  
      try {
        const response = await axios.post(
          `${API_BASE_URL}/projects/${projectId}/add-project-audio-to-timeline`,
          {
            audioFileName: audioFileName,
            layer: item.layer,
            timelineStartTime: roundToThreeDecimals(secondPart.startTime),
            timelineEndTime: roundToThreeDecimals(secondPart.timelineEndTime),
            startTime: roundToThreeDecimals(secondPart.startTimeWithinAudio),
            endTime: roundToThreeDecimals(secondPart.endTimeWithinAudio),
            volume: item.volume || 1.0,
          },
          {
            params: { sessionId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const newAudioSegment = response.data;
  
        let finalSegmentId = newAudioSegment.audioSegmentId || newAudioSegment.id;
        if (doesIdExist(finalSegmentId)) {
          console.warn(
            `Backend returned duplicate audioSegmentId ${finalSegmentId}. Generating new ID.`
          );
          finalSegmentId = `${finalSegmentId}-${uuidv4()}`;
        }
  
        setAudioLayers((prevLayers) => {
          const updatedLayers = prevLayers.map((layer, idx) => {
            if (idx === layerIndex) {
              return layer.map((segment) =>
                segment.id === secondPartId
                  ? {
                      ...segment,
                      id: finalSegmentId,
                      startTime: roundToThreeDecimals(newAudioSegment.timelineStartTime),
                      duration: roundToThreeDecimals(
                        newAudioSegment.timelineEndTime - newAudioSegment.timelineStartTime
                      ),
                      timelineStartTime: roundToThreeDecimals(newAudioSegment.timelineStartTime),
                      timelineEndTime: roundToThreeDecimals(newAudioSegment.timelineEndTime),
                      startTimeWithinAudio: roundToThreeDecimals(newAudioSegment.startTime),
                      endTimeWithinAudio: roundToThreeDecimals(newAudioSegment.endTime),
                      volume: newAudioSegment.volume || 1.0,
                      keyframes: newAudioSegment.keyframes || {},
                      url: newAudioSegment.extracted
                        ? `${CDN_URL}/audio/projects/${projectId}/extracted/${encodeURIComponent(audioFileName)}`
                        : `${CDN_URL}/audio/projects/${projectId}/${encodeURIComponent(audioFileName)}`,
                      extracted: newAudioSegment.extracted || false,
                    }
                  : segment
              );
            }
            return layer;
          });
          newAudioLayers = updatedLayers;
          return updatedLayers;
        });
  
        setTotalDuration((prev) => Math.max(prev, newAudioSegment.timelineEndTime));
  
        saveHistory([], newAudioLayers);
        autoSave([], newAudioLayers);
        // console.log('Successfully split audio');
      } catch (error) {
        console.error('Failed to add second segment:', error.response?.data || error.message);
        setAudioLayers((prevLayers) => {
          const revertedLayers = prevLayers.map((layer, idx) => {
            if (idx === layerIndex) {
              return layer.filter((segment) => segment.id !== secondPartId);
            }
            return layer;
          });
          return revertedLayers;
        });
        setTotalDuration((prev) => {
          let maxEndTime = 0;
          [...videoLayers, ...audioLayers].forEach((layer) => {
            layer.forEach((item) => {
              const endTime = item.startTime + item.duration;
              if (endTime > maxEndTime) maxEndTime = endTime;
            });
          });
          return maxEndTime;
        });
        throw new Error('Failed to add second audio segment');
      }
    } catch (error) {
      console.error('Error splitting audio:', error.message);
      setAudioLayers([...audioLayers]);
      setTotalDuration((prev) => {
        let maxEndTime = 0;
        [...videoLayers, ...audioLayers].forEach((layer) => {
          layer.forEach((item) => {
            const endTime = item.startTime + item.duration;
            if (endTime > maxEndTime) maxEndTime = endTime;
          });
        });
        return maxEndTime;
      });
      alert('Failed to split audio. Please try again.');
    } finally {
      setIsAddingToTimeline(false); // Clear loading state
    }
  };

  const fetchAudioDuration = async (fileName) => {
    try {
      if (!projectId || !fileName) {
        console.error('Missing projectId or fileName', { projectId, fileName });
        return null;
      }
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token missing');
      }
      const response = await axios.get(
        `${API_BASE_URL}/projects/${projectId}/audio-duration/${encodeURIComponent(fileName)}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data; // Duration in seconds
    } catch (error) {
      console.error('Error fetching audio duration:', error.response?.data || error.message);
      return null;
    }
  };

  return { handleAudioDrop, updateAudioSegment, handleAudioSplit, fetchAudioDuration, addAudioToTimeline };
};

export default AudioSegmentHandler;