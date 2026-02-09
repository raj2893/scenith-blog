"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUpload, FaSpinner, FaDownload, FaTimes, FaEdit } from 'react-icons/fa';
import '../../styles/tools/BackgroundRemoval.css';
import '../../styles/tools/Auth.css';
import { API_BASE_URL, CDN_URL } from '../app/config';

// Define TypeScript interfaces
interface StandaloneImage {
  id: string;
  originalFileName: string;
  processedFileName: string | null;
  processedCdnUrl: string | null;
  processedPresignedUrl: string | null;
  status: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILED';
  errorMessage?: string;
}

const BackgroundRemoval: React.FC = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<StandaloneImage | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [imageId, setImageId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [loginError, setLoginError] = useState<string>('');
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [usageStats, setUsageStats] = useState<{
    usedThisMonth: number;
    monthlyLimit: number;
    remaining: number;
    maxQuality: string;
    userRole: string;
  } | null>(null);
  const [loadingStats, setLoadingStats] = useState<boolean>(false);  

  useEffect(() => {
    const checkAuth = async () => {
      setCheckingAuth(true);
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get<{ id: string; email: string; name: string; picture?: string; googleAuth: boolean; role: string }>(
            `${API_BASE_URL}/auth/me`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const fullName = res.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
          setUserId(res.data.id);
          setIsLoggedIn(true);
          setCheckingAuth(false);
          
          // Fetch usage stats after authentication
          await fetchUsageStats();
        } catch (error: any) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('userProfile');
          setIsLoggedIn(false);
          setCheckingAuth(false);
        }
      } else {
        setIsLoggedIn(false);
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  // Handle Google Sign-In initialization
  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError('');
    setLoginSuccess('');
    setLoginErrors({});
    setLoginLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userProfile', JSON.stringify({
        email: response.data.email,
        name: response.data.name,
        picture: response.data.picture || null,
        googleAuth: true,
      }));
      setLoginSuccess('Google login successful!');
      setTimeout(() => {
        setIsLoggedIn(true);
        setShowLoginModal(false);
        setLoginLoading(false);
        setLoginEmail('');
        setLoginPassword('');
        setLoginErrors({});
      }, 1000);
    } catch (error: any) {
      setLoginLoading(false);
      setLoginError(error.response?.data?.message || 'Google login failed');
      setTimeout(() => setLoginError(''), 8000);
    }
  }, []);

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
          callback: handleGoogleLogin,
        });
        const buttonElement = document.getElementById('googleSignInButton');
        if (buttonElement) {
          window.google.accounts.id.renderButton(buttonElement, {
            theme: 'outline',
            size: 'large',
            width: 300,
          });
        }
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    if (showLoginModal) {
      initializeGoogleSignIn();
    }
  }, [showLoginModal, handleGoogleLogin]);

  // Validate login form
  const validateLogin = () => {
    const newErrors: { [key: string]: string } = {};

    if (!loginEmail) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!loginPassword) {
      newErrors.password = 'Password is required';
    } else if (loginPassword.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/[a-zA-Z]/.test(loginPassword) || !/[0-9]/.test(loginPassword)) {
      newErrors.password = 'Password must contain both letters and numbers';
    }

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login form submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');
    setLoginErrors({});

    if (!validateLogin()) return;

    setLoginLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userProfile', JSON.stringify({
          email: response.data.email,
          name: response.data.name,
          picture: null,
          googleAuth: false,
        }));
        setLoginSuccess('Login successful!');
        setTimeout(() => {
          setIsLoggedIn(true);
          setShowLoginModal(false);
          setLoginLoading(false);
          setLoginEmail('');
          setLoginPassword('');
          setLoginErrors({});
        }, 1000);
      } else {
        setLoginLoading(false);
        setLoginError(response.data.message || 'Please verify your email first');
        setTimeout(() => setLoginError(''), 8000);
      }
    } catch (error: any) {
      setLoginLoading(false);
      setLoginError(error.response?.data?.message || error.response?.data || 'Login failed');
      setTimeout(() => setLoginError(''), 8000);
    }
  };

  // Check authentication before file upload
  const checkAuthentication = async (): Promise<boolean> => {
    setCheckingAuth(true);
    setErrorMessage('');
    const token = localStorage.getItem('token');
    if (!token) {
      setCheckingAuth(false);
      setShowLoginModal(true); // Show login modal instead of redirecting
      return false;
    }
    try {
      const res = await axios.get<{ id: string }>(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserId(res.data.id);
      setIsLoggedIn(true);
      setCheckingAuth(false);
      return true;
    } catch (error: any) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      setCheckingAuth(false);
      setShowLoginModal(true); // Show login modal on auth failure
      return false;
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log('File selected:', file);
    if (file && ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      const isAuthenticated = await checkAuthentication();
      if (!isAuthenticated) {
        event.target.value = '';
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setProcessedImage(null);
      setStatus('idle');
      setErrorMessage('');
    } else {
      setErrorMessage('Please select a valid image file (PNG, JPEG, or JPG).');
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) {
      setErrorMessage('Please select an image first.');
      return;
    }
  
    setStatus('uploading');
    const formData = new FormData();
    formData.append('image', selectedFile);
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post<{ id: string }>(
        `${API_BASE_URL}/api/standalone-images/remove-background`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Upload response:', response.data);
      setImageId(response.data.id);
      setStatus('processing');
  
      const pollStatus = async () => {
        try {
          const token = localStorage.getItem('token');
          const pollResponse = await axios.get<StandaloneImage[]>(
            `${API_BASE_URL}/api/standalone-images/user-images`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const image = pollResponse.data.find((img) => img.id === response.data.id);
          console.log('Poll response:', image);
          if (image) {
            if (image.status === 'SUCCESS') {
              setPreviewUrl(
                `${CDN_URL}/image/standalone/${userId}/original/${image.originalFileName}`
              );
              setProcessedImage(image);
              setStatus('success');
              
              // Refresh usage stats after successful processing
              await fetchUsageStats();
            } else if (image.status === 'FAILED') {
              setStatus('error');
              setErrorMessage(image.errorMessage || 'Background removal failed.');
            } else {
              setTimeout(pollStatus, 2000);
            }
          } else {
            setStatus('error');
            setErrorMessage('Image not found in polling response.');
          }
        } catch (error: any) {
          console.error('Polling error:', error);
          setStatus('error');
          setErrorMessage(
            'Error checking processing status: ' +
              (error.response?.data?.message || error.message)
          );
        }
      };
      setTimeout(pollStatus, 2000);
    } catch (error: any) {
      console.error('Upload error:', error);
      setStatus('error');
      
      // Check if it's a limit error
      if (error.response?.data?.message?.includes('limit reached')) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          'Failed to upload image: ' + (error.response?.data?.message || error.message)
        );
      }
    }
  };

  const handleDownload = async () => {
    const fileUrl = processedImage?.processedCdnUrl || processedImage?.processedPresignedUrl;
    if (!fileUrl) {
      setErrorMessage('No processed image available for download.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(fileUrl, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = processedImage?.processedFileName || 'background-removed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      console.log('Image downloaded successfully:', processedImage?.processedFileName);
    } catch (error: any) {
      console.error('Error downloading image:', error);
      setErrorMessage('Failed to download image. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setProcessedImage(null);
    setStatus('idle');
    setErrorMessage('');
    setImageId(null);
  };

  const handleEditInEditor = async (imageUrl: string, imageName: string, isOriginal: boolean = false) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
  
    setIsCreatingProject(true);
  
    try {
      const token = localStorage.getItem("token");
      
      // ✅ If it's the original image and not yet uploaded, upload it first
      let finalImageUrl = imageUrl;
      if (isOriginal && selectedFile) {
        try {
          finalImageUrl = await uploadOriginalImage(selectedFile);
        } catch (uploadError: any) {
          setIsCreatingProject(false);
          alert(uploadError.message || "Failed to upload image");
          return;
        }
      }
  
      // Create a new project
      const projectResponse = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        {
          projectName: `${imageName} Design`,
          canvasWidth: 1080,
          canvasHeight: 1080,
          canvasBackgroundColor: "#FFFFFF",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      const projectId = projectResponse.data.id;
  
      // Load the image to get natural dimensions
      const img = new Image();
      img.onload = async () => {
        const scale = 1.0;
        const displayWidth = img.naturalWidth * scale;
        const displayHeight = img.naturalHeight * scale;
  
        // Create layer JSON with the image
        const layer = {
          id: `image-${Date.now()}`,
          type: "image",
          zIndex: 0,
          opacity: 1,
          x: Math.round(540 - displayWidth / 2),
          y: Math.round(540 - displayHeight / 2),
          width: displayWidth,
          height: displayHeight,
          scale: scale,
          rotation: 0,
          visible: true,
          locked: false,
          src: finalImageUrl,
          cropTop: 0,
          cropRight: 0,
          cropBottom: 0,
          cropLeft: 0,
        };
  
        const designJson = JSON.stringify({
          version: "1.0",
          pages: [
            {
              id: `page-${Date.now()}`,
              canvas: {
                width: 1080,
                height: 1080,
                backgroundColor: "#FFFFFF",
              },
              layers: [layer],
            },
          ],
        });
  
        // Update the project with the image layer
        await axios.put(
          `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
          { designJson },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        // Open the editor in a new tab
        window.open(`/tools/image-editing/${projectId}/edit`, "_blank");
        setIsCreatingProject(false);
      };
  
      img.onerror = () => {
        console.error("Failed to load image");
        setIsCreatingProject(false);
        alert("Failed to load the image. Please try again.");
      };
  
      img.src = finalImageUrl;
    } catch (error: any) {
      console.error("Error creating project:", error);
      setIsCreatingProject(false);
      alert(error.response?.data?.message || "Failed to create project");
    }
  };
  
  const fetchUsageStats = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    setLoadingStats(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/standalone-images/usage-stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsageStats(response.data);
    } catch (error: any) {
      console.error('Failed to fetch usage stats:', error);
    } finally {
      setLoadingStats(false);
    }
  };  

  const uploadOriginalImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('assetType', 'IMAGE');
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/assets/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.cdnUrl; // Returns clean CDN URL
    } catch (error: any) {
      console.error('Upload error:', error);
      throw new Error('Failed to upload image: ' + (error.response?.data?.message || error.message));
    }
  };  

  return (
    <div className="background-removal-page">
      <div className="particle-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <motion.section
        className="background-removal-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Remove Background from Your Image</h1>
        <p>Upload an image and remove its background with a single click. Perfect for creating clean, professional visuals.</p>
        {isLoggedIn && usageStats && (
          <div className="usage-stats-banner">
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">Plan:</span>
                <span className="stat-value">{usageStats.userRole}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Used This Month:</span>
                <span className="stat-value">
                  {usageStats.usedThisMonth} / {usageStats.monthlyLimit === -1 ? '∞' : usageStats.monthlyLimit}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Remaining:</span>
                <span className="stat-value highlight">
                  {usageStats.remaining === -1 ? 'Unlimited' : usageStats.remaining}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Max Quality:</span>
                <span className="stat-value">{usageStats.maxQuality}</span>
              </div>
            </div>
            {usageStats.monthlyLimit !== -1 && usageStats.remaining <= 5 && usageStats.remaining > 0 && (
              <div className="usage-warning">
                ⚠️ Only {usageStats.remaining} background removals remaining this month!
              </div>
            )}
            {usageStats.monthlyLimit !== -1 && usageStats.remaining === 0 && (
              <div className="usage-error">
                🚫 Monthly limit reached. Please upgrade your plan to continue.
              </div>
            )}
          </div>
        )}        
        <div className="upload-container">
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileChange}
            className="file-input"
            id="image-upload"
            disabled={status === 'uploading' || status === 'processing' || checkingAuth}
          />
          <label htmlFor="image-upload" className="upload-button">
            <FaUpload className="upload-icon" />
            {selectedFile ? 'Change Image' : 'Select Image'}
          </label>
          <button
            className="process-button"
            onClick={handleRemoveBackground}
            disabled={status === 'uploading' || status === 'processing' || !selectedFile || checkingAuth}
          >
            Remove Background
          </button>
          {checkingAuth && (
            <div className="status-message">
              <FaSpinner className="spinner" />
              Checking authentication...
            </div>
          )}
          {status === 'uploading' && (
            <div className="status-message">
              <FaSpinner className="spinner" />
              Uploading image...
            </div>
          )}
          {status === 'processing' && (
            <div className="status-message">
              <FaSpinner className="spinner" />
              Processing image...
            </div>
          )}
          {status === 'error' && <div className="error-message">{errorMessage}</div>}
        </div>
        {(previewUrl || processedImage) && (
          <div className="image-preview-container">
            {previewUrl && (
              <div className="image-card">
                <h3>Original Image</h3>
                <img src={previewUrl} alt="Original" className="preview-image" />
                <button
                  className="edit-in-editor-btn"
                  onClick={() => handleEditInEditor(
                    previewUrl, 
                    selectedFile?.name || 'original-image',
                    true
                  )}
                  disabled={isCreatingProject}
                >
                  {isCreatingProject ? (
                    <>
                      <div className="btn-spinner"></div>
                      Creating Project...
                    </>
                  ) : (
                    <>
                      <FaEdit /> Edit in Image Editor
                    </>
                  )}
                </button>
              </div>
            )}
            {processedImage && (
              <div className="image-card">
                <h3>Background Removed</h3>
                <img
                  src={processedImage.processedPresignedUrl ?? processedImage.processedCdnUrl ?? undefined}
                  alt="Processed"
                  className="preview-image"
                />
                <div className="button-group">
                  <button className="download-button" onClick={handleDownload}>
                    <FaDownload className="download-icon" />
                    Download
                  </button>
                  <button
                    className="edit-in-editor-btn"
                    onClick={() => handleEditInEditor(
                      processedImage.processedCdnUrl ?? processedImage.processedPresignedUrl ?? '',
                      processedImage.processedFileName || 'processed-image',
                      false
                    )}
                    disabled={isCreatingProject}
                  >
                    {isCreatingProject ? (
                      <>
                        <div className="btn-spinner"></div>
                        Creating Project...
                      </>
                    ) : (
                      <>
                        <FaEdit /> Edit in Editor
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
            {(previewUrl || processedImage) && (
              <button className="reset-button" onClick={handleReset}>
                <FaTimes className="reset-icon" />
                Reset
              </button>
            )}
          </div>
        )}
      </motion.section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div
            className="login-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close-button"
              onClick={() => setShowLoginModal(false)}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>
            <div className="auth-container">
              <div className="auth-header">
                <h1>SCENITH</h1>
                <p>Login to Continue</p>
              </div>
              {loginLoading && (
                <div className="loading-overlay">
                  <FaSpinner className="spinner" />
                  <p>Logging in...</p>
                </div>
              )}
              {loginError && <div className="error-message">{loginError}</div>}
              {loginSuccess && <div className="success-message">{loginSuccess}</div>}
              <form onSubmit={handleLoginSubmit} className="auth-form">
                <div className="auth-input-label">
                  <input
                    type="email"
                    placeholder=" "
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className={`auth-input ${loginErrors.email ? 'error' : ''}`}
                    aria-label="Email address"
                    disabled={loginLoading}
                  />
                  <span>Email</span>
                  {loginErrors.email && <div className="error-message">{loginErrors.email}</div>}
                </div>
                <div className="auth-input-label">
                  <input
                    type="password"
                    placeholder=" "
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className={`auth-input ${loginErrors.password ? 'error' : ''}`}
                    aria-label="Password"
                    disabled={loginLoading}
                  />
                  <span>Password</span>
                  {loginErrors.password && <div className="error-message">{loginErrors.password}</div>}
                </div>
                <button type="submit" className="auth-button" disabled={loginLoading}>
                  {loginLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="divider">OR</div>
              <div id="googleSignInButton" className="google-button"></div>
              <p className="auth-link">
                New to SCENITH?{' '}
                <a href="/signup" onClick={() => router.push('/signup')}>
                  Sign up
                </a>
              </p>
              <p className="auth-link">
                Forgot your password?{' '}
                <a href="/forgot-password" onClick={() => router.push('/forgot-password')}>
                  Reset Password
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemoval;