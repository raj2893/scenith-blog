import '../CSS/ProjectEditor.css';

const VideosPanel = ({ videos, uploadProgress, tempThumbnails, selectedVideo, handleVideoUpload, handleVideoClick, handleMediaDragStart }) => {
  return (
    <div className="section-content">
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        id="upload-video"
        className="hidden-input"
        multiple
      />
      <label htmlFor="upload-video" className="upload-icon-button">
        <svg className="upload-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 14M12 2L8 6M12 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
      {videos.length === 0 ? (
        <div className="empty-state">Pour it in, I am waiting!</div>
      ) : (
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id || video.filePath || video.filename}
              className={`video-item ${
                selectedVideo && (selectedVideo.id === video.id || selectedVideo.filePath === video.filePath)
                  ? 'selected'
                  : ''
              }`}
              draggable={true}
              onDragStart={(e) => handleMediaDragStart(e, video, 'media')}
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClick(video);
              }}
              onDragEnd={(e) => e.stopPropagation()}
            >
              {typeof uploadProgress[video.displayName] === 'number' ? (
                <div className="video-thumbnail uploading">
                  <div
                    className="video-thumbnail-image"
                    style={{
                      backgroundImage: `url(${tempThumbnails[video.displayName] || video.thumbnail || ''})`,
                      height: '130px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '4px',
                      filter: tempThumbnails[video.displayName] ? 'blur(5px)' : 'none',
                    }}
                  ></div>
                  <div className="upload-progress-overlay">
                    <div className="upload-progress-bar">
                      <div
                        className="upload-progress-fill"
                        style={{ width: `${uploadProgress[video.displayName]}%` }}
                      ></div>
                    </div>
                    <div className="upload-progress-text">
                      Uploading video: {uploadProgress[video.displayName]}%
                    </div>
                  </div>
                </div>
              ) : video.thumbnail ? (
                <div
                  className="video-thumbnail"
                  style={{
                    backgroundImage: `url(${video.thumbnail})`,
                    height: '130px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '4px',
                  }}
                ></div>
              ) : (
                <div className="video-thumbnail-placeholder"></div>
              )}
              <div className="video-title">
                {video.title || (video.displayName ? video.displayName.split('/').pop().replace(/^\d+_/, '') : 'Untitled Video')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosPanel;