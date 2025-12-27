import React, { memo } from 'react';
import '../CSS/Timeline.css';

const TimelineLayer = ({
  layer,
  layerIndex,
  timeScale,
  handleDragStart,
  handleResizeStart,
  playingVideoId,
  handleVideoSelect,
  handleEditTextSegment,
  selectedSegmentId,
  transitions,
  onTransitionSelect,
  isSplitMode,
  handleSplit,
  multiSelectedSegmentIds,
}) => {
  const isAudioLayer = layer.some((item) => item.type === 'audio');

  const getTransitionPosition = (transition, segmentStartTime, segmentDuration) => {
    let relativeLeft;
    if (transition.start && !transition.end) {
      relativeLeft = 0;
    } else if (transition.end && !transition.start) {
      relativeLeft = (segmentDuration - transition.duration) * timeScale;
    } else {
      relativeLeft = 0;
    }
    return {
      left: relativeLeft,
      width: transition.duration * timeScale,
      transition,
    };
  };

  return (
    <div className="layer">
      <div className="layer-label">{isAudioLayer ? `Layer ${layerIndex}` : `Layer ${layerIndex}`}</div>
      <div className="layer-items">
        {layer.map((item) => {
          const style = {
            left: `${item.startTime * timeScale}px`,
            width: `${item.duration * timeScale}px`,
            backgroundColor: item.type === 'audio' ? 'none' : item.type === 'video' ? '#3b82f6' : item.type === 'image' ? '#10b981' : 'none',
            top: '5px',
          };
          const isSelected = item.id === selectedSegmentId;
          const isMultiSelected = multiSelectedSegmentIds.includes(item.id);
        
          const itemTransitions = transitions.filter(
            (t) => t.segmentId === item.id && t.layer === layerIndex
          );
        
          return (
            <div
              key={item.id}
              data-id={item.id}
              className={`timeline-item ${
                item.type === 'text'
                  ? 'text-segment'
                  : item.type === 'image'
                  ? 'image-segment'
                  : item.type === 'audio'
                  ? 'audio-segment'
                  : 'video-segment'
              } ${item.id === playingVideoId ? 'playing' : ''} ${isSelected ? 'selected' : ''} ${
                isMultiSelected ? 'multi-selected' : ''
              }`}
              draggable={!isSplitMode}
              onDragStart={(e) => handleDragStart(e, item, layerIndex)}
              onTouchStart={(e) => {
                e.stopPropagation();
                if (isSplitMode) {
                  const touch = e.touches[0];
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = touch.clientX - rect.left;
                  const clickTime = item.startTime + clickX / timeScale;
                  handleSplit(item, clickTime, layerIndex);
                } else {
                  handleDragStart(e, item, layerIndex);
                  if (item.type === 'text') {
                    handleEditTextSegment(item, e);
                  } else {
                    handleVideoSelect(item.id, e); // Pass the event
                  }
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isSplitMode) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const clickTime = item.startTime + clickX / timeScale;
                  handleSplit(item, clickTime, layerIndex);
                } else if (e.shiftKey) {
                  handleVideoSelect(item.id, e); // Handle multi-selection for Shift+Click
                } else if (item.type === 'text') {
                  handleEditTextSegment(item, e); // Single-click edits text
                } else {
                  handleVideoSelect(item.id, e); // Single-click selects non-text segments
                }
              }}
              style={item.type === 'audio' ? { ...style, backgroundImage: 'none' } : style}
            >
              {isSelected && (
                <div
                  className="resize-handle resize-left"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    handleResizeStart(e, item, layerIndex, 'left');
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    handleResizeStart(e, item, layerIndex, 'left');
                  }}
                />
              )}
              {item.type === 'text' && (
                <div
                  className="text-segment-preview"
                  style={{
                    backgroundColor: item.backgroundColor || 'rgba(0, 0, 0, 0.7)',
                    color: item.fontColor || '#FFFFFF',
                    fontFamily: item.fontFamily || 'Arial',
                    fontSize: `${Math.min(item.fontSize / 2, 14)}px` || '12px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="text-segment-icon">T</div>
                  <div className="text-segment-content">
                    {item.text.substring(0, 15)}
                    {item.text.length > 15 ? '...' : ''}
                  </div>
                </div>
              )}
              {item.type === 'audio' && (
                <div
                  id={`waveform-segment-${item.id}`}
                  className="audio-waveform"
                  style={{ width: `${item.duration * timeScale}px`, height: '30px' }}
                />
              )}
              {(item.type === 'video' || item.type === 'image') && (
                <div className="video-title">
                  {item.type === 'video'
                    ? item.displayName || item.fileName || 'Unnamed Video'
                    : item.displayName || item.fileName || 'Unnamed Image'}
                </div>
              )}
              {isSelected && (
                <div
                  className="resize-handle resize-right"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    handleResizeStart(e, item, layerIndex, 'right');
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    handleResizeStart(e, item, layerIndex, 'right');
                  }}
                />
              )}
              {itemTransitions.map((transition) => {
                const pos = getTransitionPosition(transition, item.startTime, item.duration);
                if (!pos) return null;
                const isCrossDissolve = transition.type === 'CrossDissolve';
                return (
                  <div
                    key={transition.id}
                    className="transition-overlay"
                    style={{
                      left: `${pos.left}px`,
                      width: `${pos.width}px`,
                      height: '20px',
                      background: isCrossDissolve
                        ? 'linear-gradient(to right, rgba(0, 255, 255, 0.5), rgba(0, 255, 255, 0))'
                        : 'rgba(0, 255, 255, 0.5)',
                      position: 'absolute',
                      top: '0',
                      zIndex: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTransitionSelect(transition);
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onTransitionSelect(transition);
                    }}
                    onDragStart={(e) => e.preventDefault()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <span className="transition-label">{transition.type}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(TimelineLayer, (prevProps, nextProps) => {
  return (
    prevProps.layer === nextProps.layer &&
    prevProps.layerIndex === nextProps.layerIndex &&
    prevProps.timeScale === nextProps.timeScale &&
    prevProps.playingVideoId === nextProps.playingVideoId &&
    prevProps.selectedSegmentId === nextProps.selectedSegmentId &&
    prevProps.transitions === nextProps.transitions &&
    prevProps.isSplitMode === nextProps.isSplitMode
  );
});