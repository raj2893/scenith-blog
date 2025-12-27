import React from 'react';
import '../CSS/ProjectEditor.css';

const PhotosPanel = ({ photos, uploadProgress, handlePhotoUpload, handlePhotoClick, handleMediaDragStart, handleRemoveBackground }) => {
  return (
    <div className="section-content">
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handlePhotoUpload}
        id="upload-photo"
        className="hidden-input"
        multiple
      />
      <label htmlFor="upload-photo" className="upload-icon-button">
        <svg className="upload-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 14M12 2L8 6M12 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
      {photos.length === 0 ? (
        <div className="empty-state">Pour it in, I am waiting!</div>
      ) : (
        <div className="photo-list">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="photo-item"
              draggable={true}
              onDragStart={(e) => handleMediaDragStart(e, photo, 'photo')}
              onClick={() => handlePhotoClick(photo)}
            >
              {uploadProgress[photo.displayName] !== undefined && (
                <div className="upload-progress-overlay">
                  <div className="upload-progress-bar">
                    <div
                      className="upload-progress-fill"
                      style={{ width: `${uploadProgress[photo.displayName]}%` }}
                    ></div>
                  </div>
                  <div className="upload-progress-text">
                    Uploading photo: {uploadProgress[photo.displayName]}%
                  </div>
                </div>
              )}
              <img src={photo.filePath} alt={photo.displayName} className="photo-thumbnail" />
              <div className="photo-title">{photo.displayName}</div>
              <button
                className="remove-background-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveBackground(photo);
                }}
                title="Remove Background"
              >
                🖼️ Remove Bg
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotosPanel;