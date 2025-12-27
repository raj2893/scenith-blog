import React from 'react';
import '../CSS/TransitionsPanel.css'; // Import the new CSS file

const TransitionsPanel = ({
  availableTransitions,
  selectedTransition,
  handleTransitionDragStart,
  handleTransitionDurationChange,
  handleTransitionDirectionChange,
  handleTransitionDelete,
}) => {
  const getDirectionOptions = (transitionType) => {
    switch (transitionType) {
      case 'Zoom':
        return [
          { value: 'in', label: 'Zoom In' },
          { value: 'out', label: 'Zoom Out' },
        ];
      case 'Slide':
        return [
          { value: 'right', label: 'Right' },
          { value: 'left', label: 'Left' },
          { value: 'top', label: 'Top' },
          { value: 'bottom', label: 'Bottom' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="transitions-panel">
      <div className="transitions-list">
        {availableTransitions.map((transition) => (
          <div
            key={transition.type}
            className="transition-item"
            draggable
            onDragStart={(e) => handleTransitionDragStart(e, transition)}
          >
            <img
              src={`/images/${transition.type}.png`}
              alt={transition.label}
              className="transition-icon"
              style={{ borderRadius: '10%' }}
            />
            <span>{transition.label}</span>
          </div>
        ))}
        <div className="coming-soon-text">More transitions coming soon...</div>
      </div>
      {selectedTransition && (
        <div className="selected-transition-details">
          <h4>Selected Transition</h4>
          <div className="control-group">
            <label>Type</label>
            <span>{selectedTransition.type}</span>
          </div>
          <div className="control-group">
            <label>Duration (s)</label>
            <input
              type="number"
              value={selectedTransition.duration}
              onChange={(e) => handleTransitionDurationChange(parseFloat(e.target.value))}
              min="0.1"
              step="0.1"
            />
          </div>
          {getDirectionOptions(selectedTransition.type).length > 0 && (
            <div className="control-group">
              <label>Direction</label>
              <select
                value={selectedTransition.parameters?.direction || getDirectionOptions(selectedTransition.type)[0].value}
                onChange={(e) => handleTransitionDirectionChange(e.target.value)}
              >
                {getDirectionOptions(selectedTransition.type).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button className="delete-button" onClick={handleTransitionDelete}>
            🗑️ Delete Transition
          </button>
        </div>
      )}
    </div>
  );
};

export default TransitionsPanel;