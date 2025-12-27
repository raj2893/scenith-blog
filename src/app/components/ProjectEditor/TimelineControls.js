import React from 'react';

const TimelineControls = ({
  isPlaying,
  togglePlayback,
  currentTime,
  totalDuration,
  formatTime,
  handleUndo,
  handleRedo,
  canUndo,
  canRedo,
  isSaving,
  onAddTextClick,
  toggleSplitMode,
  isSplitMode,
  stopPropagationForControls,
  selectedSegment,
  handleSplitAtCurrent,
  handleCopySegment,
}) => {

  const isSplitAtCurrentEnabled = selectedSegment && 
    currentTime > selectedSegment.startTime && 
    currentTime < (selectedSegment.startTime + selectedSegment.duration);

  return (
    <div className="timeline-controls" onClick={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Explicitly stop propagation
          togglePlayback();
        }}
        onTouchStart={(e) => {
          e.stopPropagation(); // Stop touch events as well
          togglePlayback();
        }}
      >
        <span className="button-icon">{isPlaying ? '⏸️' : '▶️'}</span>
        <span className="button-text">{isPlaying ? 'Pause' : 'Play'}</span>
      </button>
      <span className="time-display" onClick={(e) => e.stopPropagation()}>
        {formatTime(currentTime)} / {formatTime(totalDuration)}
      </span>
      <div className="add-text-control">
        <button onClick={(e) => { e.stopPropagation(); onAddTextClick(); }}>
          <span className="button-text">Add Text</span>
        </button>
      </div>
      <div className="split-control">
        <button
          onClick={(e) => { e.stopPropagation(); toggleSplitMode(); }}
          className={isSplitMode ? 'active' : ''}
          title="Split Segment"
        >
          ✂️
        </button>
      </div>
      <div className="split-control">
        <button
          onClick={(e) => { e.stopPropagation(); handleSplitAtCurrent(); }}
          className={isSplitAtCurrentEnabled ? '' : 'disabled'}
          disabled={!isSplitAtCurrentEnabled}
          title="Split at Current Time"
        >
          ✂️ CURRENT
        </button>
      </div>      
      <div className="copy-control">
        <button
          onClick={(e) => { e.stopPropagation(); handleCopySegment(); }}
          className={selectedSegment ? '' : 'disabled'}
          disabled={!selectedSegment}
          title="Copy Selected Segment"
        >
          <span className="button-icon">📋</span>
          <span className="button-text">Copy</span>
        </button>
      </div>      
      {isSaving && <span className="saving-indicator">Saving...</span>}
    </div>
  );
};

export default TimelineControls;