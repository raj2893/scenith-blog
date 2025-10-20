// components/VideoPreview.tsx
import React, { useRef, useEffect, useState, Dispatch, SetStateAction } from 'react';

interface VideoPreviewProps {
  src: string;
  userId: number;
  positionX: number | null;
  positionY: number | null;
  scale: number | null;
  aspectRatio: string | null;
  outputWidth: number | null;
  outputHeight: number | null;
  currentTime: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
}

const VideoPreview = ({
  src,
  userId,
  positionX,
  positionY,
  scale,
  aspectRatio,
  outputWidth,
  outputHeight,
  currentTime,
  setCurrentTime,
}: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [videoDimensions, setVideoDimensions] = useState({ width: 1920, height: 1080 });
  const [videoError, setVideoError] = useState<string | null>(null);

  // Synchronize video time
  useEffect(() => {
    if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.1) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  // Handle video metadata and errors
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVideoDimensions({ width: video.videoWidth, height: video.videoHeight });
      setVideoError(null);
    };

    const handleError = () => {
      setVideoError('Failed to load video.');
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle playback
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.error('Video playback error:', err);
          setVideoError('Failed to play video.');
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Compute video styles
  const getVideoStyles = (): React.CSSProperties => {
    const video = videoRef.current;
    if (!video || !containerRef.current) {
      return {
        position: 'absolute',
        objectFit: 'contain',
      };
    }

    const sourceWidth = videoDimensions.width || 1920;
    const sourceHeight = videoDimensions.height || 1080;
    const canvasWidth = outputWidth || 1920;
    const canvasHeight = outputHeight || 1080;
    const videoScale = scale || 1.0;

    // Calculate scaled video dimensions
    const scaledWidth = sourceWidth * videoScale;
    const scaledHeight = sourceHeight * videoScale;

    // Center the video and apply position offsets
    const centerX = canvasWidth / 2 - scaledWidth / 2;
    const centerY = canvasHeight / 2 - scaledHeight / 2;
    const posX = centerX + (positionX || 0);
    const posY = centerY + (positionY || 0);

    return {
      width: `${scaledWidth}px`,
      height: `${scaledHeight}px`,
      left: `${posX}px`,
      top: `${posY}px`,
      position: 'absolute',
      objectFit: 'contain',
    };
  };

  // Compute container styles
  const getContainerStyles = (): React.CSSProperties => {
    if (outputWidth && outputHeight) {
      return {
        width: `${outputWidth}px`,
        height: `${outputHeight}px`,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000',
      };
    }
    if (aspectRatio) {
      const [width, height] = aspectRatio.split(':').map(Number);
      if (width && height) {
        return {
          aspectRatio: `${width}/${height}`,
          width: '100%',
          height: 'auto',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
        };
      }
    }
    return {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#000',
    };
  };

  return (
    <div className="video-preview-container">
      <div className="preview-area" ref={containerRef} style={getContainerStyles()}>
        {videoError ? (
          <div className="preview-empty-state" role="alert">
            {videoError}
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              className="preview-video"
              src={src}
              onTimeUpdate={handleTimeUpdate}
              muted
              crossOrigin="anonymous"
              style={getVideoStyles()}
            />
            <div className="preview-time">{formatTime(currentTime)}</div>
          </>
        )}
      </div>
      <div className="video-controls">
        <button
          onClick={togglePlayPause}
          className="play-pause-button"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          disabled={!!videoError}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <div className="time-info">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="progress-bar" onClick={handleSeek}>
        <div
          className="progress-fill"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
};

export default VideoPreview;