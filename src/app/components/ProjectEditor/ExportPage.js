import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/ExportPage.css';
import { API_BASE_URL } from '../Config';

const ExportPage = () => {
  const { projectId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const sessionId = state?.sessionId;
  const [exportStatus, setExportStatus] = useState('ready');
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [fileName, setFileName] = useState(null); // Store the export filename
  const [errorMessage, setErrorMessage] = useState('');
  const [messageId, setMessageId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  const exportLock = useRef(null);
  const pollingRef = useRef(null);
  const requestIdRef = useRef(crypto.randomUUID());

  useEffect(() => {
    console.log('ExportPage mounted', {
      projectId,
      sessionId,
      requestId: requestIdRef.current,
      timestamp: Date.now(),
    });
    return () => {
      console.log('ExportPage unmounted', {
        projectId,
        sessionId,
        requestId: requestIdRef.current,
        timestamp: Date.now(),
      });
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
        console.log('Polling stopped on unmount', { requestId: requestIdRef.current });
      }
    };
  }, []);

  const startExport = async () => {
    if (exportLock.current) {
      console.log('Export already in progress, skipping', {
        requestId: requestIdRef.current,
        timestamp: Date.now(),
      });
      return;
    }

    if (!projectId || !sessionId) {
      console.error('Missing projectId or sessionId', { projectId, sessionId });
      setExportStatus('error');
      setErrorMessage('Missing project ID or session ID');
      return;
    }

    setExportStatus('exporting');
    setProgress(0);
    const requestId = requestIdRef.current;
    console.log('startExport called', { projectId, requestId, timestamp: Date.now() });

    exportLock.current = (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token missing');
        }

        pollExportStatus(projectId, sessionId, token, requestId);

        console.log('Calling export API', { projectId, requestId, timestamp: Date.now() });
        const exportResponse = await axios.get(
          `${API_BASE_URL}/projects/${projectId}/export`,
          {
            params: { sessionId, requestId },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log('Export API response:', exportResponse.data, {
          requestId,
          timestamp: Date.now(),
        });
        const { messageId, fileName, r2Path, status } = exportResponse.data;

        if (!messageId) {
          throw new Error('Message ID not provided in export response');
        }

        console.log('Export task queued:', {
          messageId,
          fileName,
          r2Path,
          status,
          requestId,
          timestamp: Date.now(),
        });
        setMessageId(messageId);
        setFileName(fileName); // Store the filename
        setExportStatus('queued');
      } catch (error) {
        console.error('Export error:', error.response?.data || error.message, {
          requestId,
          timestamp: Date.now(),
        });
        const errorMsg =
          error.response?.data?.message ||
          error.response?.data ||
          error.message ||
          'Failed to queue export task. Please try again.';
        setExportStatus('error');
        setErrorMessage(errorMsg);
        setProgress(0);
      } finally {
        console.log('Export lock released', { requestId, timestamp: Date.now() });
        exportLock.current = null;
      }
    })();
  };

  const pollExportStatus = (projectId, sessionId, token, requestId) => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
    }

    pollingRef.current = setInterval(async () => {
      try {
        console.log('Polling export status and progress', {
          projectId,
          sessionId,
          requestId,
          timestamp: Date.now(),
        });
        const progressResponse = await axios.get(
          `${API_BASE_URL}/projects/${projectId}/export/progress`,
          {
            params: { sessionId, _t: Date.now() },
            headers: { Authorization: `Bearer ${token}` },
            cache: 'no-cache',
          }
        );

        console.log('Export progress response:', progressResponse.data, {
          requestId,
          timestamp: Date.now(),
        });
        const { status, progress } = progressResponse.data;

        const parsedProgress = Math.round(parseFloat(progress) / 10) * 10;
        setProgress(parsedProgress);
        console.log('Progress set to:', parsedProgress, { requestId, timestamp: Date.now() });

        if (status === 'PENDING' || status === 'QUEUED') {
          setExportStatus('queued');
        } else if (status === 'EXPORTED') {
          setExportStatus('success');
          const projectResponse = await axios.get(
            `${API_BASE_URL}/projects/${projectId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const exports = JSON.parse(projectResponse.data.exportsJson || '[]');
          const latestExport = exports[exports.length - 1];
          if (latestExport?.downloadUrl) {
            setDownloadUrl(latestExport.downloadUrl);
            console.log('Download URL set:', latestExport.downloadUrl, {
              requestId,
              timestamp: Date.now(),
            });
          } else {
            throw new Error('Download URL not found in project exports');
          }
          clearInterval(pollingRef.current);
          pollingRef.current = null;
          console.log('Polling stopped: Export completed', {
            projectId,
            requestId,
            timestamp: Date.now(),
          });
        } else if (status === 'FAILED') {
          setExportStatus('error');
          setErrorMessage('Export task failed. Please try again.');
          setProgress(0);
          clearInterval(pollingRef.current);
          pollingRef.current = null;
          console.log('Polling stopped: Export failed', {
            projectId,
            requestId,
            timestamp: Date.now(),
          });
        }
      } catch (error) {
        console.error('Export progress polling error:', error.response?.data || error.message, {
          requestId,
          timestamp: Date.now(),
        });
        setExportStatus('error');
        setErrorMessage('Failed to check export status. Please try again.');
        setProgress(0);
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    }, 7000);
  };

  const handleDownload = async () => {
    if (!downloadUrl) {
      setExportStatus('error');
      setErrorMessage('No download URL available.');
      console.error('No download URL available', { requestId: requestIdRef.current, timestamp: Date.now() });
      return;
    }

    try {
      console.log('Initiating download for URL:', downloadUrl, {
        requestId: requestIdRef.current,
        timestamp: Date.now(),
      });
      const response = await fetch(downloadUrl, {
        method: 'GET',
        headers: {
          // No Authorization header needed for Cloudflare R2 CDN URL
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch video: ${response.status} ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || `exported_video_${projectId}.mp4`; // Use fileName from export response
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up the temporary URL

      console.log('Video downloaded successfully:', fileName, {
        requestId: requestIdRef.current,
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error('Error downloading video:', error, {
        requestId: requestIdRef.current,
        timestamp: Date.now(),
      });
      setExportStatus('error');
      setErrorMessage('Failed to download video. Please try again.');
    }
  };

  const handleBack = () => {
    console.log('Navigating back to editor for project', projectId, {
      requestId: requestIdRef.current,
      timestamp: Date.now(),
    });
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
      console.log('Polling stopped on navigation', { requestId: requestIdRef.current });
    }
    navigate(`/projecteditor/${projectId}`);
  };

  return (
    <div className="export-page">
      <div className="export-container">
        {exportStatus === 'ready' && (
          <>
            <h2>Ready to Export</h2>
            <p>Click below to start exporting your video.</p>
            <button
              className="export-button"
              onClick={startExport}
              disabled={!!exportLock.current}
            >
              Start Export
            </button>
            <button className="back-button" onClick={handleBack}>
              Back to Editor
            </button>
          </>
        )}
        {(exportStatus === 'queued' || exportStatus === 'exporting') && (
          <>
            <h2>Exporting Your Video</h2>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="progress-bar-text">{progress}%</span>
              </div>
            </div>
            <p>Export Progress: {progress}%</p>
            <p>Your video is being processed. This may take a few minutes...</p>
            <button className="back-button" onClick={handleBack}>
              Back to Editor
            </button>
          </>
        )}
        {exportStatus === 'success' && (
          <>
            <h2>Export Complete!</h2>
            <p>Your video is ready to download.</p>
            <button
              className="download-button"
              onClick={handleDownload}
              title="Download Video"
              disabled={!downloadUrl}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="download-icon"
              >
                <path
                  d="M12 2L12 14M12 14L8 10M12 14L16 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Video
            </button>
            <button className="back-button" onClick={handleBack}>
              Back to Editor
            </button>
          </>
        )}
        {exportStatus === 'error' && (
          <>
            <h2>Export Failed</h2>
            <p>{errorMessage}</p>
            <button className="export-button" onClick={startExport}>
              Retry Export
            </button>
            <button className="back-button" onClick={handleBack}>
              Back to Editor
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ExportPage;