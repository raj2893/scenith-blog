import React from 'react';
import '../CSS/AiSubtitlesPanel.css';

const AiSubtitlesPanel = ({ aiSubtitleStyles, selectedAiStyle, setSelectedAiStyle, handleGenerateSubtitles, isAddingToTimeline }) => {
  return (
    <div className="section-content tool-subpanel ai-subtitles-panel">
      <div className="ai-subtitles-header">
        <h3>AI Subtitles</h3>
        <button
          className="generate-subtitles-button"
          onClick={handleGenerateSubtitles}
          disabled={isAddingToTimeline || !selectedAiStyle}
        >
          Generate Subtitles
        </button>
      </div>
      <div className="ai-styles-container">
        {aiSubtitleStyles.length === 0 ? (
          <div className="empty-state">No subtitle styles available!</div>
        ) : (
          <div className="ai-styles-list">
            {aiSubtitleStyles.map((style) => (
              <div
                key={style.name}
                className={`ai-style-item ${selectedAiStyle?.name === style.name ? 'selected' : ''}`}
                onClick={() => setSelectedAiStyle(style)}
                style={{
                  backgroundColor: style.backgroundColor,
                  color: style.fontColor,
                  fontFamily: style.fontFamily,
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: selectedAiStyle?.name === style.name ? '2px solid #00aaff' : '1px solid #3a3a3a',
                }}
              >
                {style.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiSubtitlesPanel;