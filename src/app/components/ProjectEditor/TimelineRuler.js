import React from 'react';

const TimelineRuler = ({ totalDuration, timeScale, formatTime }) => {
  const determineMarkerInterval = () => {
    if (timeScale >= 40) {
      return 1; // 1 second
    } else if (timeScale >= 20) {
      return 5; // 5 seconds
    } else if (timeScale >= 10) {
      return 15; // 15 seconds
    } else if (timeScale >= 5) {
      return 30; // 30 seconds
    } else if (timeScale >= 1) {
      return 60; // 1 minute
    } else if (timeScale >= 0.5) {
      return 300; // 5 minutes
    } else if (timeScale >= 0.2) {
      return 600; // 10 minutes
    } else {
      return 1800; // 30 minutes
    }
  };

  const generateTimeMarkers = () => {
    const markers = [];
    const markerInterval = determineMarkerInterval();
    const numMarkers = Math.ceil(totalDuration / markerInterval);

    for (let i = 0; i <= numMarkers; i++) {
      const time = i * markerInterval;
      if (time > totalDuration) break;
      markers.push(
        <div
          key={`marker-${i}`}
          className="time-marker"
          style={{ left: `${time * timeScale}px` }}
        >
          <div className="marker-line"></div>
          <div className="marker-label">{formatTime(time)}</div>
        </div>
      );
    }

    return markers;
  };

  return (
    <div
      className="timeline-ruler"
      style={{ width: `${totalDuration * timeScale}px` }} // Set dynamic width
    >
      {generateTimeMarkers()}
    </div>
  );
};

export default TimelineRuler;