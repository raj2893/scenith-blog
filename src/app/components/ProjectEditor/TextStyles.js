import React from 'react';

const TextStyles = ({ defaultTextStyles, handleTextStyleDragStart, handleTextStyleClick, selectedTextStyle }) => {
  return (
    <div className="section-content tool-subpanel text-styles-panel">
      <h3>Text Styles</h3>
      <br/>
      {defaultTextStyles.length === 0 ? (
        <div className="empty-state">No text styles available!</div>
      ) : (
        <div className="text-style-list">
          {defaultTextStyles.map((style, index) => (
            <div
              key={`text-style-${index}`}
              className={`text-style-item ${selectedTextStyle?.text === style.text ? 'selected' : ''}`}
              draggable={true}
              onDragStart={(e) => handleTextStyleDragStart(e, style)}
              onClick={() => handleTextStyleClick(style)}
              style={{
                backgroundColor: style.backgroundColor,
                color: style.fontColor,
                fontFamily: style.fontFamily,
                padding: '10px',
                margin: '5px 0',
                borderRadius: '4px',
                cursor: 'pointer',
                border: selectedTextStyle?.text === style.text ? '2px solid #007bff' : '1px solid #ccc',
              }}
            >
              {style.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextStyles;