const SnapIndicators = ({ snapIndicators, timeScale, layers = [] }) => {
  const layerIndices = Array.isArray(layers) ? layers.map((_, idx) => idx) : [];
  const totalLayers = layerIndices.length;

  return (
    <>
      {snapIndicators.map((indicator, index) => {
        const layerIndex = indicator.layerIdx >= 0
          ? layerIndices.indexOf(indicator.layerIdx)
          : indicator.layerIdx === -1
          ? totalLayers - 1
          : layerIndices.indexOf(indicator.layerIdx);
        const isPlayhead = indicator.type === 'playhead';
        return (
          <div
            key={`snap-${index}`}
            className={`snap-indicator ${indicator.edge === 'end' ? 'snap-end' : 'snap-start'} ${
              indicator.time === 0 ? 'snap-timeline-start' : ''
            } ${isPlayhead ? 'snap-playhead' : ''}`}
            style={{
              left: `${indicator.time * timeScale}px`,
              top: `${(totalLayers - layerIndex - 1) * 40}px`,
              height: '40px',
            }}
          />
        );
      })}
    </>
  );
};

export default SnapIndicators;