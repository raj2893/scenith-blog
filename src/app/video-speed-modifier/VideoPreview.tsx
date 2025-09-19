import React, { useRef, useEffect, useState } from 'react';
import '../../../styles/tools/VideoPreview.css';

interface VideoLayer {
  id: string;
  type: 'video';
  filePath: string;
  startTime: number;
  duration: number;
  speed: number;
}

interface VideoPreviewProps {
  videoLayers: VideoLayer[];
  audioLayers?: any[];
  currentTime: number;
  isPlaying: boolean;
  canvasDimensions: { width: number; height: number };
  setIsPlaying: (isPlaying: boolean) => void;
  containerHeight?: string;
  projectId: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  videoLayers,
  currentTime,
  isPlaying,
  canvasDimensions,
  setIsPlaying,
  containerHeight = 'auto',
  projectId,
}) => {
  const [scale, setScale] = useState(1);
  const [videoDimensions, setVideoDimensions] = useState<{ [key: string]: { width: number; height: number } }>({});
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Scale the canvas to fit the container while maintaining aspect ratio
  useEffect(() => {
    if (previewContainerRef.current) {
      const calculateSize = () => {
        const containerWidth = previewContainerRef.current!.clientWidth;
        const containerHeightPx =
          containerHeight && containerHeight !== 'auto'
            ? parseFloat(containerHeight)
            : previewContainerRef.current!.clientHeight;
        const canvasAspectRatio = canvasDimensions.width / canvasDimensions.height;

        let newScale = Math.min(
          containerWidth / canvasDimensions.width,
          containerHeightPx / canvasDimensions.height
        );

        const minPreviewHeight = 100;
        const minScale = minPreviewHeight / canvasDimensions.height;
        const maxScale = 1.0;

        newScale = Math.max(minScale, Math.min(maxScale, newScale));
        setScale(newScale);

        const canvasWrapper = document.querySelector('.canvas-wrapper') as HTMLElement | null;
        if (canvasWrapper) {
          canvasWrapper.style.transform = `scale(${newScale})`;
          canvasWrapper.style.width = `${canvasDimensions.width}px`;
          canvasWrapper.style.height = `${canvasDimensions.height}px`;
        }

        const previewArea = document.querySelector('.preview-area') as HTMLElement | null;
        if (previewArea) {
          previewArea.style.width = `${canvasDimensions.width * newScale}px`;
          previewArea.style.height = `${canvasDimensions.height * newScale}px`;
        }
      };

      calculateSize();
      window.addEventListener('resize', calculateSize);
      return () => window.removeEventListener('resize', calculateSize);
    }
  }, [canvasDimensions, containerHeight]);

  // Handle video playback and speed
  useEffect(() => {
    const visibleElements = videoLayers.filter((element) => {
      const itemStartTime = element.startTime || 0;
      const itemEndTime = itemStartTime + element.duration;
      return currentTime >= itemStartTime && currentTime < itemEndTime;
    });

    visibleElements.forEach((element) => {
      const videoRef = videoRefs.current[element.id];
      if (videoRef) {
        videoRef.src = element.filePath;
        videoRef.crossOrigin = 'anonymous';
        videoRef.playbackRate = element.speed;

        const localTime = currentTime - element.startTime;
        const adjustedTime = localTime * element.speed;

        if (Math.abs(videoRef.currentTime - adjustedTime) > 0.05) {
          videoRef.currentTime = adjustedTime;
        }

        if (isPlaying) {
          videoRef.play().catch((error) => console.error('Playback error:', error));
        } else {
          videoRef.pause();
        }

        if (!videoDimensions[element.id]) {
          videoRef.onloadedmetadata = () => {
            setVideoDimensions((prev) => ({
              ...prev,
              [element.id]: {
                width: videoRef.videoWidth,
                height: videoRef.videoHeight,
              },
            }));
          };
        }
      }
    });

    const visibleIds = visibleElements.map((el) => el.id);
    Object.entries(videoRefs.current).forEach(([id, videoRef]) => {
      if (!visibleIds.includes(id) && videoRef) {
        videoRef.pause();
      }
    });
  }, [currentTime, isPlaying, videoLayers]);

  return (
    <div className="video-preview-container" ref={previewContainerRef}>
      <div className="preview-area">
        <div
          className="canvas-wrapper"
          style={{
            width: `${canvasDimensions.width}px`,
            height: `${canvasDimensions.height}px`,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'black',
            transformOrigin: 'top left',
          }}
        >
          {videoLayers.map((element) => {
            const videoWidth = videoDimensions[element.id]?.width || canvasDimensions.width;
            const videoHeight = videoDimensions[element.id]?.height || canvasDimensions.height;
            const centerX = canvasDimensions.width / 2 - videoWidth / 2;
            const centerY = canvasDimensions.height / 2 - videoHeight / 2;

            return (
              <div
                key={element.id}
                style={{
                  position: 'absolute',
                  left: `${centerX}px`,
                  top: `${centerY}px`,
                  width: `${videoWidth}px`,
                  height: `${videoHeight}px`,
                  zIndex: 0,
                }}
              >
                <video
                  ref={(el) => { videoRefs.current[element.id] = el; }}
                  className="preview-video"
                  crossOrigin="anonymous"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => console.error(`Error loading video ${element.filePath}:`, e)}
                  onLoadedData={() => {
                    if (videoRefs.current[element.id] && !videoDimensions[element.id]) {
                      setVideoDimensions((prev) => ({
                        ...prev,
                        [element.id]: {
                          width: videoRefs.current[element.id]!.videoWidth,
                          height: videoRefs.current[element.id]!.videoHeight,
                        },
                      }));
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;