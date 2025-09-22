import React, { useRef, useEffect, useState, useMemo } from 'react';
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
  containerHeight = '400px',
  projectId,
}) => {
  const [scale, setScale] = useState(1);
  const [videoDimensions, setVideoDimensions] = useState<{ [key: string]: { width: number; height: number } }>({});
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Memoize videoLayers to prevent unnecessary re-renders
  const memoizedVideoLayers = useMemo(() => videoLayers, [videoLayers]);

  // Scale the canvas to fit the container while maintaining aspect ratio
  useEffect(() => {
    if (previewContainerRef.current) {
      const calculateSize = () => {
        const containerWidth = Math.min(previewContainerRef.current!.clientWidth, 600);
        const containerHeightPx =
          containerHeight && containerHeight !== 'auto'
            ? parseFloat(containerHeight)
            : Math.min(previewContainerRef.current!.clientHeight, 400);

        // Simplified scaling: fit video within container
        const videoWidth = videoDimensions[memoizedVideoLayers[0]?.id]?.width || canvasDimensions.width;
        const videoHeight = videoDimensions[memoizedVideoLayers[0]?.id]?.height || canvasDimensions.height;
        const newScale = Math.min(containerWidth / videoWidth, containerHeightPx / videoHeight, 1.0);

        setScale(newScale);

        const canvasWrapper = previewContainerRef.current!.querySelector('.canvas-wrapper') as HTMLElement | null;
        if (canvasWrapper) {
          canvasWrapper.style.transform = `scale(${newScale})`;
          canvasWrapper.style.width = `${videoWidth}px`;
          canvasWrapper.style.height = `${videoHeight}px`;
        }

        const previewArea = previewContainerRef.current!.querySelector('.preview-area') as HTMLElement | null;
        if (previewArea) {
          previewArea.style.width = `${videoWidth * newScale}px`;
          previewArea.style.height = `${videoHeight * newScale}px`;
        }
      };

      calculateSize();
      window.addEventListener('resize', calculateSize);
      return () => window.removeEventListener('resize', calculateSize);
    }
  }, [canvasDimensions, containerHeight, videoDimensions, memoizedVideoLayers]);

  // Handle video playback and speed
  useEffect(() => {
    const visibleElements = memoizedVideoLayers.filter((element) => {
      const itemStartTime = element.startTime || 0;
      const itemEndTime = itemStartTime + element.duration;
      return currentTime >= itemStartTime && currentTime < itemEndTime;
    });

    visibleElements.forEach((element) => {
      const videoRef = videoRefs.current[element.id];
      if (videoRef) {
        console.log(`Setting video src: ${element.filePath}, speed: ${element.speed}`);
        if (videoRef.src !== element.filePath) {
          videoRef.src = element.filePath;
          videoRef.load();
        }
        videoRef.playbackRate = Math.max(0.1, Math.min(15.0, element.speed));

        const localTime = currentTime - element.startTime;
        const adjustedTime = localTime * element.speed;

        if (Math.abs(videoRef.currentTime - adjustedTime) > 0.1) {
          videoRef.currentTime = adjustedTime;
        }

        if (isPlaying) {
          videoRef.play().catch((error) => {
            console.error('Playback error:', error);
            if (error.name === 'NotAllowedError') {
              setIsPlaying(false);
              alert('Playback blocked. Please interact with the page or click play.');
            }
          });
        } else {
          videoRef.pause();
        }

        videoRef.onended = () => {
          setIsPlaying(false);
          videoRef.currentTime = 0;
          console.log(`Video ${element.id} ended`);
        };

        if (!videoDimensions[element.id]) {
          videoRef.onloadedmetadata = () => {
            console.log(`Video metadata loaded: ${element.id}, width: ${videoRef.videoWidth}, height: ${videoRef.videoHeight}`);
            setVideoDimensions((prev) => ({
              ...prev,
              [element.id]: {
                width: videoRef.videoWidth,
                height: videoRef.videoHeight,
              },
            }));
          };
        }

        videoRef.oncanplay = () => {
          console.log(`Video ${element.id} can play`);
          // Log computed styles for debugging
          const styles = window.getComputedStyle(videoRef);
          console.log(`Video ${element.id} computed styles: display=${styles.display}, width=${styles.width}, height=${styles.height}, left=${styles.left}, top=${styles.top}`);
        };
      }
    });

    const visibleIds = visibleElements.map((el) => el.id);
    Object.entries(videoRefs.current).forEach(([id, videoRef]) => {
      if (!visibleIds.includes(id) && videoRef) {
        videoRef.pause();
      }
    });
  }, [currentTime, isPlaying, memoizedVideoLayers, setIsPlaying]);

  return (
    <div className="video-preview-container" ref={previewContainerRef}>
      <div className="preview-area">
        <div className="canvas-wrapper">
          {memoizedVideoLayers.length === 0 && (
            <div className="no-video-message">No video loaded</div>
          )}
          {memoizedVideoLayers.map((element) => {
            const videoWidth = videoDimensions[element.id]?.width || canvasDimensions.width;
            const videoHeight = videoDimensions[element.id]?.height || canvasDimensions.height;
            const centerX = (canvasDimensions.width - videoWidth) / 2;
            const centerY = (canvasDimensions.height - videoHeight) / 2;

            return (
              <div
                key={element.id}
                className="video-container"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[element.id] = el;
                  }}
                  className="preview-video"
                  muted
                  autoPlay={isPlaying}
                  onError={(e) => console.error(`Error loading video ${element.filePath}:`, e)}
                  onLoadedData={() => {
                    console.log(`Video data loaded: ${element.id}`);
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
                  onCanPlay={() => {
                    console.log(`Video ${element.id} is ready to play`);
                  }}
                />
                {/* Fallback message if video is not visible */}
                <div className="video-fallback">
                  Video element loaded but not visible. Check console for styles.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;