import React from 'react';
import '../CSS/ProjectEditor.css';

const AudiosPanel = ({ audios, uploadProgress, handleAudioUpload, handleAudioClick, handleMediaDragStart }) => {
  return (
    <div className="section-content">
      <input
        type="file"
        accept="audio/*"
        onChange={handleAudioUpload}
        id="upload-audio"
        className="hidden-input"
        multiple
      />
      <label htmlFor="upload-audio" className="upload-icon-button">
        <svg className="upload-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 14M12 2L8 6M12 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
      {audios.length === 0 ? (
        <div className="empty-state">Pour it in, I am waiting!</div>
      ) : (
        <div className="audio-list">
          {audios.map((audio) => (
            <div
              key={audio.id}
              className="audio-item"
              draggable={true}
              onDragStart={(e) => handleMediaDragStart(e, audio, 'audio')}
              onClick={() => handleAudioClick(audio)}
            >
              {uploadProgress[audio.displayName] !== undefined ? (
                <div className="upload-progress-overlay">
                  <div className="upload-progress-bar">
                    <div
                      className="upload-progress-fill"
                      style={{ width: `${uploadProgress[audio.displayName]}%` }}
                    ></div>
                  </div>
                  <div className="upload-progress-text">
                    Uploading audio: {uploadProgress[audio.displayName]}%
                  </div>
                </div>
              ) : (
                <img
                  src="/images/audio.jpeg"
                  alt={audio.displayName}
                  className="audio-thumbnail"
                  style={{
                    width: '90%',
                    height: '65px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              )}
              <div className="audio-title">{audio.displayName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AudiosPanel;