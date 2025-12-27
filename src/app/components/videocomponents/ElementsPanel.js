import React from 'react';
import '../CSS/ProjectEditor.css';

const ElementsPanel = ({ elements, elementSearchQuery, setElementSearchQuery, handleElementClick, handleMediaDragStart }) => {
  const filteredElements = elements.filter((element) =>
    element.displayName.toLowerCase().includes(elementSearchQuery.toLowerCase())
  );

  return (
    <div className="section-content">
      <input
        type="text"
        placeholder="Search elements..."
        value={elementSearchQuery}
        onChange={(e) => setElementSearchQuery(e.target.value)}
        className="search-input"
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          fontSize: '14px',
        }}
      />
      {filteredElements.length === 0 ? (
        <div className="empty-state">
          {elementSearchQuery ? 'No elements match your search.' : 'No elements available!'}
        </div>
      ) : (
        <div className="element-list">
          {filteredElements.map((element) => (
            <div
              key={element.id}
              className="element-item"
              draggable={true}
              onDragStart={(e) => handleMediaDragStart(e, element, 'element')}
              onClick={() => handleElementClick(element)}
            >
              <img
                src={element.thumbnail || element.filePath}
                alt={element.displayName}
                className="element-thumbnail"
              />
              <div className="element-title">{element.displayName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElementsPanel;