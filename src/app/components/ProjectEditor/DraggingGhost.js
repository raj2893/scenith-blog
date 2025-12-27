import React from 'react';

const DraggingGhost = ({ draggingItem, snapIndicators, timeScale, dragLayer, layers }) => {
  if (!draggingItem || snapIndicators.length === 0) return null;

  const layerIndices = Object.keys(layers).map(idx => parseInt(idx)).sort((a, b) => a - b);
  const totalLayers = layerIndices.length;
  const layerIndex = layerIndices.indexOf(parseInt(dragLayer));

  return (
    <div
      className="snapping-ghost"
      style={{
        position: 'absolute',
        left: `${(snapIndicators[0].time - (snapIndicators[0].edge === 'end' ? draggingItem.duration : 0)) * timeScale}px`,
        top: `${(totalLayers - 1 - layerIndex) * 40 + 5}px`,
        width: `${draggingItem.duration * timeScale}px`,
        height: '30px',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        border: '2px dashed #ff9800',
        borderRadius: '4px',
        pointerEvents: 'none',
        zIndex: 9,
      }}
    />
  );
};

export default DraggingGhost;