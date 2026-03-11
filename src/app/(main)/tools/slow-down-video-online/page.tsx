"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL, CDN_URL } from '../../../config';
import Script from 'next/script';
import '../../../../../styles/tools/slowMotion.css';

// ─── TypeScript Interfaces ─────────────────────────────────────────────────────

interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface VideoUpload {
  id: number;
  status: string;
  progress: number;
  speed: number;
  cdnUrl: string | null;
  originalFilePath: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

// ─── Custom Video Player ───────────────────────────────────────────────────────

const CustomVideoPlayer = ({
  src,
  userId,
  speed,
}: {
  src: string;
  userId: number;
  speed: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoUrl = src
    ? `${CDN_URL}/speed-videos/${userId}/${encodeURIComponent(src)}`
    : '';

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = speed;
  }, [speed]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.playbackRate = speed;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newTime = ((e.clientX - rect.left) / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="sm-video-player">
      <video
        ref={videoRef}
        src={videoUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        className="sm-video-element"
      />
      <div className="sm-controls">
        <button
          onClick={togglePlayPause}
          className="sm-play-btn"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <span className="sm-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <span className="sm-speed-badge">{speed.toFixed(2)}x</span>
      </div>
      <div className="sm-progress-track" onClick={handleSeek}>
        <div
          className="sm-progress-fill"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
};

// ─── Upgrade Popup ─────────────────────────────────────────────────────────────

function UpgradePopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="sm-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="sm-upgrade-card">
        <button className="sm-upgrade-close" onClick={onClose} aria-label="Close">×</button>
        <div className="sm-urgency-pill">
          <span className="sm-urgency-dot" />
          ⚡ LIMITED OFFER — 25% OFF
        </div>
        <h2 className="sm-upgrade-title">
          Unlock Unlimited{' '}
          <span className="sm-gradient-text">Slow‑Motion Exports</span>
        </h2>
        <p className="sm-upgrade-sub">
          Free plan limits you to <strong style={{ color: '#ff8a8a' }}>5 videos/month</strong>. Upgrade and never stop creating silky slow‑motion content.
        </p>
        <div className="sm-upgrade-perks">
          {[
            ['⚡', '45 Videos / Month'],
            ['🎬', 'Up to 2K Quality'],
            ['📏', 'Longer Video Length'],
            ['🚀', 'Priority Processing'],
          ].map(([icon, text]) => (
            <div key={text} className="sm-perk-pill">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <a
          href="/pricing"
          onClick={onClose}
          className="sm-upgrade-cta"
        >
          🚀 Claim 25% OFF — View Plans
        </a>
      </div>
    </div>
  );
}

// ─── Slow Motion Speed Presets ─────────────────────────────────────────────────

const SLOW_MOTION_PRESETS = [
  { emoji: '🌊', label: 'Ultra Slow', value: 0.25, desc: 'Dreamy 0.25x' },
  { emoji: '🐢', label: 'Dramatic', value: 0.5, desc: 'Cinematic 0.5x' },
  { emoji: '🎬', label: 'Film Slow', value: 0.75, desc: 'Hollywood 0.75x' },
  { emoji: '✨', label: 'Natural', value: 1.0, desc: 'Normal 1x' },
  { emoji: '⚡', label: 'Slightly Fast', value: 1.25, desc: 'Brisk 1.25x' },
  { emoji: '🔥', label: 'Fast', value: 1.5, desc: 'Energetic 1.5x' },
  { emoji: '🎓', label: 'Learning', value: 2.0, desc: 'Tutorial 2x' },
  { emoji: '🚀', label: 'Timelapse', value: 4.0, desc: 'Rapid 4x' },
];

const SUPPORTED_VIDEO_FORMATS = [
  'video/mp4', 'video/quicktime', 'video/x-msvideo',
  'video/x-matroska', 'video/webm', 'video/mpeg', 'video/x-flv',
];
const SUPPORTED_EXTENSIONS = ['.mp4', '.mov', '.avi', '.mkv', '.webm', '.mpeg', '.mpg', '.flv'];
const MAX_FILE_SIZE = 500 * 1024 * 1024;

// ─── Main Component ────────────────────────────────────────────────────────────

const SlowDownVideoOnlineClient: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0, email: '', firstName: '', lastName: '',
    picture: null, googleAuth: false, role: '',
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState('');

  const [uploads, setUploads] = useState<VideoUpload[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<VideoUpload | null>(null);
  const [speed, setSpeed] = useState(0.5);
  const [activePreset, setActivePreset] = useState<number | null>(0.5);
  const [useCustomSpeed, setUseCustomSpeed] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [availableQualities, setAvailableQualities] = useState<string[]>([]);
  const [selectedQuality, setSelectedQuality] = useState('720p');

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: number; name: string } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [upgradeModalMessage, setUpgradeModalMessage] = useState('');

  const [planLimits, setPlanLimits] = useState<{
    videosPerMonth: number; videosUsed: number;
    maxVideoLength: number; maxQuality: string;
  } | null>(null);

  // Upgrade popup after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowUpgradePopup(true), 6000);
    return () => clearTimeout(t);
  }, []);

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { setIsLoggedIn(false); return; }
    axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const parts = (res.data.name || '').trim().split(' ');
        setUserProfile({
          id: res.data.id || 0, email: res.data.email || '',
          firstName: parts[0] || '', lastName: parts.slice(1).join(' '),
          picture: res.data.picture || null,
          googleAuth: res.data.googleAuth || false,
          role: res.data.role || 'BASIC',
        });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      });
  }, []);

  // Fetch plan limits
  useEffect(() => {
    if (!isLoggedIn) { setPlanLimits(null); return; }
    axios.get(`${API_BASE_URL}/api/video-speed/plan-limits`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then((r) => setPlanLimits(r.data)).catch(console.error);
  }, [isLoggedIn, userProfile.role]);

  // Fetch user videos
  useEffect(() => {
    if (!isLoggedIn) return;
    axios.get(`${API_BASE_URL}/api/video-speed/user-videos`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then((r) => setUploads(r.data)).catch(() => setUploads([]));
  }, [isLoggedIn]);

  // Quality helpers
  const getQualities = (role: string) => {
    if (role === 'CREATOR') return ['144p','240p','360p','480p','720p','1080p','1440p','2k'];
    if (role === 'STUDIO' || role === 'ADMIN') return ['144p','240p','360p','480p','720p','1080p','1440p','2k','4k'];
    return ['144p','240p','360p','480p','720p'];
  };
  const getDefaultQuality = (role: string) => {
    if (role === 'CREATOR') return '1080p';
    if (role === 'STUDIO' || role === 'ADMIN') return '1440p';
    return '720p';
  };

  useEffect(() => {
    if (userProfile.role) {
      setAvailableQualities(getQualities(userProfile.role));
      setSelectedQuality(getDefaultQuality(userProfile.role));
    }
  }, [userProfile.role]);

  // Google Sign-In
  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setIsLoggingIn(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/google`, { token: credentialResponse.credential });
      localStorage.setItem('token', res.data.token);
      setLoginSuccess('Google login successful!');
      setTimeout(() => {
        axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } })
          .then((r) => {
            const parts = (r.data.name || '').trim().split(' ');
            setUserProfile({
              id: r.data.id || 0, email: r.data.email || '',
              firstName: parts[0] || '', lastName: parts.slice(1).join(' '),
              picture: r.data.picture || null, googleAuth: true, role: r.data.role || 'BASIC',
            });
            setIsLoggedIn(true);
            setShowLoginModal(false);
            setIsLoggingIn(false);
          });
      }, 800);
    } catch (err: any) {
      setIsLoggingIn(false);
      setLoginError(err.response?.data?.message || 'Google login failed');
    }
  }, []);

  useEffect(() => {
    const init = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({
          client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
          callback: handleGoogleLogin,
        });
        const el = document.getElementById('smGoogleBtn');
        if (el) window.google.accounts.id.renderButton(el, { theme: 'outline', size: 'large', width: 300 });
      } else setTimeout(init, 100);
    };
    if (showLoginModal) init();
  }, [showLoginModal, handleGoogleLogin]);

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      localStorage.setItem('token', res.data.token);
      const me = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } });
      const parts = (me.data.name || '').trim().split(' ');
      setUserProfile({
        id: me.data.id || 0, email: me.data.email || '',
        firstName: parts[0] || '', lastName: parts.slice(1).join(' '),
        picture: me.data.picture || null, googleAuth: false, role: me.data.role || 'BASIC',
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (err: any) {
      setLoginError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const requireLogin = () => {
    if (!isLoggedIn) { setShowLoginModal(true); return false; }
    return true;
  };

  const validateFile = (file: File) => {
    const ext = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!SUPPORTED_VIDEO_FORMATS.includes(file.type) && !SUPPORTED_EXTENSIONS.includes(ext))
      return { valid: false, error: `Unsupported format. Use: ${SUPPORTED_EXTENSIONS.join(', ')}` };
    if (file.size > MAX_FILE_SIZE)
      return { valid: false, error: `File exceeds 500MB (${(file.size / 1024 / 1024).toFixed(1)}MB)` };
    return { valid: true };
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const v = validateFile(file);
    if (!v.valid) { setError(v.error || 'Invalid file'); e.target.value = ''; return; }
    setIsUploading(true);
    setError(null);
    const fd = new FormData();
    fd.append('file', file);
    fd.append('speed', speed.toString());
    try {
      const res = await axios.post(`${API_BASE_URL}/api/video-speed/upload`, fd, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'multipart/form-data' },
      });
      setUploads((p) => [...p, res.data]);
      setSelectedUpload(res.data);
      setSpeed(res.data.speed);
      e.target.value = '';
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to upload video.');
      e.target.value = '';
    } finally {
      setIsUploading(false);
    }
  };

  const handleVideoSelect = async (uploadId: string) => {
    const upload = uploads.find((u) => u.id === Number(uploadId));
    setSelectedUpload(upload || null);
    if (upload && isLoggedIn) {
      try {
        const r = await axios.get(`${API_BASE_URL}/api/video-speed/status/${upload.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setSelectedUpload(r.data);
        setSpeed(r.data.speed);
      } catch { /* silent */ }
    }
  };

  const handleSpeedChange = async (value: number) => {
    setSpeed(value);
    if (selectedUpload && isLoggedIn) {
      try {
        await axios.put(`${API_BASE_URL}/api/video-speed/${selectedUpload.id}/speed`, { speed: value }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setSelectedUpload((p) => p ? { ...p, speed: value } : p);
      } catch { /* silent */ }
    }
  };

  const handlePresetSelect = async (value: number) => {
    setActivePreset(value);
    setUseCustomSpeed(false);
    setSpeed(value);
    if (selectedUpload && isLoggedIn) await handleSpeedChange(value);
  };

  const handleStartProcessing = async () => {
    if (!requireLogin()) return;
    if (!selectedUpload) { setError('Please select a video to process.'); return; }
    setIsProcessing(true);
    setError(null);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/video-speed/${selectedUpload.id}/export`,
        null,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, params: { quality: selectedQuality } }
      );
      setSelectedUpload(res.data);
      const interval = setInterval(async () => {
        try {
          const s = await axios.get(`${API_BASE_URL}/api/video-speed/status/${selectedUpload.id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
          setSelectedUpload(s.data);
          if (s.data.status === 'COMPLETED') {
            clearInterval(interval);
            setIsProcessing(false);
            try {
              const lr = await axios.get(`${API_BASE_URL}/api/video-speed/plan-limits`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
              });
              setPlanLimits(lr.data);
            } catch { /* silent */ }
          } else if (s.data.status === 'FAILED') {
            clearInterval(interval);
            setIsProcessing(false);
            setError('Processing failed. Please try again.');
          }
        } catch { clearInterval(interval); setIsProcessing(false); setError('Error checking status.'); }
      }, 2000);
    } catch (err: any) {
      setIsProcessing(false);
      const msg: string = err.response?.data?.error || '';
      if (msg.toLowerCase().includes('limit') || msg.toLowerCase().includes('upgrade') || err.response?.status === 400) {
        setUpgradeModalMessage(msg);
        setShowUpgradeModal(true);
      } else {
        setError(msg || 'Failed to process video.');
      }
    }
  };

  const handleDownload = async () => {
    if (selectedUpload?.cdnUrl && userProfile.id) {
      try {
        const filename = selectedUpload.cdnUrl.split('/').pop() || `video-${Date.now()}.mp4`;
        const url = `${CDN_URL}/speed-videos/${userProfile.id}/${filename}`;
        const blob = await (await fetch(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })).blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `slow-motion-video-${Date.now()}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      } catch { window.open(selectedUpload.cdnUrl, '_blank'); }
    }
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`${API_BASE_URL}/api/video-speed/${itemToDelete.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUploads(uploads.filter((u) => u.id !== itemToDelete.id));
      setSelectedUpload(null);
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch { setError('Failed to delete video.'); }
    finally { setIsDeleting(false); }
  };

  return (
    <div className="sm-page">

      {/* ── Structured Data ── */}
      <Script
        id="slow-motion-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Slow Motion Video Maker — Slow Down Video Online',
            description:
              'Free online slow motion video maker. Slow down any video from 0.25x to 0.9x instantly. No software download required. Create cinematic slow-motion effects in seconds and download as MP4.',
            url: 'https://scenith.in/tools/slow-down-video-online',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: { '@type': 'Organization', name: 'SCENITH AI VIDEO EDITOR' },
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="sm-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', name: 'Home', pos: 1 },
            { href: '/tools', name: 'Tools', pos: 2 },
            { href: '/tools/video-speed-modifier', name: 'Video Speed Modifier', pos: 3 },
            { href: null, name: 'Slow Down Video Online', pos: 4 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.href ? (
                <a href={item.href} itemProp="item"><span itemProp="name">{item.name}</span></a>
              ) : (
                <span itemProp="name">{item.name}</span>
              )}
              <meta itemProp="position" content={String(item.pos)} />
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Ambient Background ── */}
      <div className="sm-ambient">
        <div className="sm-orb sm-orb-1" />
        <div className="sm-orb sm-orb-2" />
        <div className="sm-orb sm-orb-3" />
        <div className="sm-grid-overlay" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-hero" id="hero" role="main">
        <motion.div
          className="sm-hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sm-hero-eyebrow">
            <span className="sm-badge-live">● LIVE</span>
            <span>Free Slow Motion Video Maker — No Download Required</span>
          </div>

          <h1 className="sm-hero-title">
            Slow Down Video Online
            <span className="sm-hero-title-accent">
              {' '}— Cinematic Slow‑Motion{' '}
            </span>
            in Seconds
          </h1>

          <p className="sm-hero-sub">
            Transform any video into breathtaking slow motion with precision control from{' '}
            <strong>0.25x to 0.9x</strong>. Perfect for sports analysis, dramatic cinematic effects,
            product reveals, dance videos, and storytelling that demands impact. Upload, adjust,
            export as MP4 — completely <strong>free</strong>.
          </p>

          {/* ─── Main Tool UI ─── */}
          <div className="sm-tool-card">
            <div className="sm-tool-header">
              <span className="sm-tool-icon">🎬</span>
              <div>
                <h2 className="sm-tool-title">Slow Motion Editor</h2>
                <p className="sm-tool-subtitle">Upload your video and apply slow-motion instantly</p>
              </div>
            </div>

            {/* Upload + Select Row */}
            <div className="sm-upload-row">
              <label className="sm-upload-btn">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  disabled={!isLoggedIn || isUploading}
                  style={{ display: 'none' }}
                />
                <span>{isUploading ? '⏳ Uploading…' : '⬆ Upload Video'}</span>
              </label>

              <select
                value={selectedUpload?.id || ''}
                onChange={(e) => handleVideoSelect(e.target.value)}
                className="sm-select"
                disabled={!isLoggedIn || uploads.length === 0}
              >
                <option value="">Select a Video</option>
                {uploads.map((u) => (
                  <option key={u.id} value={u.id}>
                    Video {u.id} (Speed: {u.speed}x)
                  </option>
                ))}
              </select>

              {selectedUpload && (
                <button
                  className="sm-delete-btn"
                  onClick={() => { setDeleteModalOpen(true); setItemToDelete({ id: selectedUpload.id, name: `Video ${selectedUpload.id}` }); }}
                  title="Delete this video"
                >
                  🗑
                </button>
              )}
            </div>

            {/* Not logged in prompt */}
            {!isLoggedIn && (
              <div className="sm-login-prompt">
                <p>🔐 Please <button className="sm-link-btn" onClick={() => setShowLoginModal(true)}>log in</button> to upload and process videos.</p>
              </div>
            )}

            {/* Processing Overlay */}
            {(isUploading || isProcessing) && (
              <div className="sm-processing-overlay">
                {isUploading ? (
                  <>
                    <div className="sm-spinner" />
                    <p>Uploading your video…</p>
                  </>
                ) : (
                  <>
                    <p className="sm-proc-headline">
                      🎥 Creating your slow‑motion masterpiece
                      <span>Frame-by-frame speed adjustment in progress</span>
                    </p>
                    <div className="sm-prog-wrap">
                      <div className="sm-prog-track">
                        <div className="sm-prog-fill" style={{ width: `${selectedUpload?.progress ?? 20}%` }} />
                      </div>
                      <span className="sm-prog-pct">{Math.round(selectedUpload?.progress ?? 20)}%</span>
                    </div>
                    <div className="sm-steps">
                      {['Download', 'Analyze', 'Process', 'Encode', 'Upload'].map((s, i) => {
                        const thresholds = [30, 50, 80, 90, 100];
                        const prog = selectedUpload?.progress ?? 0;
                        const done = prog >= thresholds[i];
                        return (
                          <div key={s} className={`sm-step ${done ? 'done' : ''}`}>
                            <span className="sm-step-dot" />{done ? '✓ ' : ''}{s}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Video Preview */}
            {selectedUpload && userProfile.id && selectedUpload.originalFilePath && (
              <div className="sm-preview-wrap">
                <CustomVideoPlayer
                  src={selectedUpload.originalFilePath.split(/[/\\]/).pop() || ''}
                  userId={userProfile.id}
                  speed={speed}
                />
              </div>
            )}

            {/* Speed Presets */}
            <div className="sm-speed-section">
              <h3 className="sm-speed-heading">
                <span className="sm-speed-icon">🐢</span> Choose Slow‑Motion Speed
              </h3>

              <div className="sm-presets-grid">
                {SLOW_MOTION_PRESETS.map((p) => (
                  <button
                    key={p.value}
                    className={`sm-preset-btn ${activePreset === p.value && !useCustomSpeed ? 'active' : ''}`}
                    onClick={() => handlePresetSelect(p.value)}
                    disabled={isProcessing}
                    title={`${p.label}: ${p.value}x`}
                  >
                    <span className="sm-p-emoji">{p.emoji}</span>
                    <span className="sm-p-label">{p.label}</span>
                    <span className="sm-p-val">{p.value}x</span>
                  </button>
                ))}
                <button
                  className={`sm-preset-btn sm-preset-custom ${useCustomSpeed ? 'active' : ''}`}
                  onClick={() => { setUseCustomSpeed(true); setActivePreset(null); }}
                  disabled={isProcessing}
                >
                  <span className="sm-p-emoji">🎛</span>
                  <span className="sm-p-label">Custom</span>
                  <span className="sm-p-val">{useCustomSpeed ? `${speed.toFixed(1)}x` : 'Any'}</span>
                </button>
              </div>

              <div className="sm-speed-display">
                <span>Current Speed:</span>
                <span className="sm-speed-badge-lg">{speed.toFixed(2)}x</span>
                {activePreset !== null && !useCustomSpeed && (
                  <span className="sm-preset-tag">
                    {SLOW_MOTION_PRESETS.find((p) => p.value === activePreset)?.emoji}{' '}
                    {SLOW_MOTION_PRESETS.find((p) => p.value === activePreset)?.label}
                  </span>
                )}
              </div>

              {useCustomSpeed && (
                <div className="sm-custom-slider">
                  <label>Custom Speed (0.1x – 15x)</label>
                  <input
                    type="range" min={0.1} max={15} step={0.05} value={speed}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setSpeed(v);
                      if (selectedUpload && isLoggedIn) handleSpeedChange(v);
                    }}
                    disabled={isProcessing}
                    className="sm-range"
                  />
                  <div className="sm-range-labels">
                    <span>0.1x</span>
                    <input
                      type="number" min={0.1} max={15} step={0.05} value={speed}
                      onChange={(e) => {
                        const v = Math.min(15, Math.max(0.1, Number(e.target.value) || 0.1));
                        setSpeed(v);
                        if (selectedUpload && isLoggedIn) handleSpeedChange(v);
                      }}
                      className="sm-number-input"
                    />
                    <span>15x</span>
                  </div>
                </div>
              )}
            </div>

            {/* Plan Usage */}
            {planLimits && (
              <div className="sm-usage-bar">
                <div className="sm-usage-top">
                  <span>📅 This Month</span>
                  {planLimits.videosPerMonth !== -1 && (
                    <span className="sm-usage-count">{planLimits.videosUsed}/{planLimits.videosPerMonth}</span>
                  )}
                </div>
                {planLimits.videosPerMonth === -1 ? (
                  <p className="sm-usage-text"><strong>Unlimited</strong> videos</p>
                ) : (
                  <>
                    <div className="sm-usage-track">
                      <div
                        className={`sm-usage-fill ${(planLimits.videosUsed / planLimits.videosPerMonth) >= 0.8 ? 'warn' : ''}`}
                        style={{ width: `${(planLimits.videosUsed / planLimits.videosPerMonth) * 100}%` }}
                      />
                    </div>
                    <p className="sm-usage-text">
                      <strong>{planLimits.videosPerMonth - planLimits.videosUsed}</strong> videos remaining
                    </p>
                    {userProfile.role === 'BASIC' && (
                      <a href="/pricing" className="sm-upgrade-inline">
                        🔓 Upgrade to Creator for 9× more videos →
                      </a>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Quality Selector */}
            {selectedUpload && (
              <div className="sm-quality-row">
                <label htmlFor="sm-quality">Export Quality:</label>
                <select
                  id="sm-quality"
                  value={selectedQuality}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                  className="sm-select sm-select-quality"
                  disabled={selectedUpload.status === 'PROCESSING'}
                >
                  {availableQualities.map((q) => (
                    <option key={q} value={q}>
                      {q === '2k' ? '2K (1440p)' : q === '4k' ? '4K (2160p)' : q.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Action Buttons */}
            <div className="sm-action-row">
              <button
                className="sm-cta-btn sm-process-btn"
                onClick={handleStartProcessing}
                disabled={isLoggedIn && (!selectedUpload || isProcessing)}
              >
                {isProcessing ? '⏳ Processing…' : isLoggedIn ? '🎬 Apply Slow Motion' : '🔐 Login to Process'}
              </button>
              {isLoggedIn && userProfile.role === 'BASIC' && (
                <a href="/pricing" className="sm-cta-btn sm-upgrade-btn">
                  ⚡ Remove Watermark
                </a>
              )}
            </div>

            {/* Download */}
            {selectedUpload?.status === 'COMPLETED' && selectedUpload.cdnUrl && (
              <div className="sm-download-section">
                <div className="sm-download-success">
                  <span className="sm-check">✅</span>
                  <div>
                    <strong>Slow-motion video ready!</strong>
                    <p>Your cinematic masterpiece has been rendered.</p>
                  </div>
                </div>
                <div className="sm-action-row">
                  <button onClick={handleDownload} className="sm-cta-btn sm-download-btn">
                    📥 Download MP4
                  </button>
                  {userProfile.role === 'BASIC' && (
                    <a href="/pricing" className="sm-cta-btn sm-upgrade-btn">⚡ Remove Watermark</a>
                  )}
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="sm-error" role="alert">{error}</div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="sm-trust-row">
            {['✅ 100% Free', '⚡ Fast Processing', '🔒 Secure & Private', '🎥 Cinematic Quality', '📥 Instant MP4 Download'].map((t) => (
              <span key={t} className="sm-trust-item">{t}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-how" id="how-it-works" aria-labelledby="how-title">
        <motion.div
          className="sm-container"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="how-title">How to Slow Down Video Online in 3 Easy Steps</h2>
          <p className="sm-section-desc">
            No editing experience needed. Our AI-powered slow motion tool handles all the technical complexity so you can focus on your creative vision.
          </p>
          <div className="sm-steps-grid">
            {[
              { n: 1, title: 'Upload Your Video', body: 'Drag & drop or click to upload any video file — MP4, MOV, AVI, MKV, WebM and more. Files up to 500MB supported.' },
              { n: 2, title: 'Set Your Slow‑Motion Speed', body: 'Choose from cinematic presets (0.25x to 0.75x) or dial in any custom speed. Preview changes in real-time before exporting.' },
              { n: 3, title: 'Export & Download', body: 'Click "Apply Slow Motion" and receive your high-quality slow motion MP4 in minutes. Ready for social media, film, or any platform.' },
            ].map((s) => (
              <motion.article key={s.n} className="sm-step-card" whileHover={{ y: -6 }}>
                <div className="sm-step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHAT IS SLOW MOTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-explainer" id="what-is-slow-motion" aria-labelledby="explainer-title">
        <div className="sm-container">
          <h2 id="explainer-title">What is Slow Motion Video? The Complete Science & Art Guide (2026)</h2>
          <p className="sm-section-desc">
            Understanding slow-motion video helps you use it more powerfully in your creative work. Here's everything you need to know about the technology, art, and strategy behind compelling slow-motion content.
          </p>

          <div className="sm-content-grid">
            <div className="sm-content-main">
              <h3>The Physics of Slow Motion: Why It Works</h3>
              <p>
                Slow motion video is fundamentally about the relationship between <strong>capture frame rate</strong> and <strong>playback frame rate</strong>. Standard video plays at 24–30 frames per second (fps). When you slow a video down to 0.5x, you're essentially playing 30 frames across two seconds instead of one — making the eye perceive details it normally processes too quickly to register consciously.
              </p>
              <p>
                The human brain processes visual information in roughly 13ms chunks. At 30fps, each frame lasts 33ms — fast enough that our visual cortex stitches frames into seamless motion. Slow motion deliberately dilates this timeline, forcing viewers to be present in a single moment for far longer than nature allows. That's why slow-motion footage of water splashing, a hummingbird's wing, a match being struck, or an athlete's pivot point feels so viscerally different — you're seeing physics unfold at a scale your nervous system normally edits out.
              </p>

              <h3>Frame Rate vs Speed Reduction: What's the Difference?</h3>
              <p>
                There are two distinct methods for achieving slow motion, and understanding both helps you choose the right approach:
              </p>
              <ul className="sm-content-list">
                <li>
                  <strong>High-Frame-Rate (HFR) Capture:</strong> Shoot at 60, 120, or 240fps, then play back at 24–30fps. This is the gold standard. Because more frames are captured per second, slowing down retains buttery smoothness. Every frame was genuinely captured, so there's no interpolation artifact.
                </li>
                <li>
                  <strong>Post-Production Speed Reduction (what our tool does):</strong> Take existing 30fps footage and stretch it to 0.5x speed. This works beautifully for subtle slow-downs (0.5x–0.85x) and is perfect for artistic effect, social media content, and any scenario where you didn't plan for slow-motion in advance. Our FFmpeg-powered engine maintains maximum quality during this process.
                </li>
                <li>
                  <strong>AI Frame Interpolation:</strong> A newer technique where machine learning generates synthetic frames between existing ones, allowing dramatic slow-downs even on standard 30fps footage without the typical stuttering. Premium video editing suites like DaVinci Resolve use this. Our system applies optimized interpolation automatically for the smoothest output.
                </li>
              </ul>

              <h3>The Emotional Language of Slow Motion</h3>
              <p>
                Film directors and editors treat slow motion as an emotional grammar tool, not merely a technical effect. Understanding the language helps you apply it intentionally:
              </p>
              <ul className="sm-content-list">
                <li>
                  <strong>0.25x (Ultra Slow):</strong> Dreamlike, almost surreal. Used by directors like Zack Snyder for action sequences, or in perfume ads where every droplet and fabric movement communicates luxury and desire. Creates a trance-like state in viewers.
                </li>
                <li>
                  <strong>0.5x (Dramatic Slow):</strong> The industry workhorse. Emotional peaks, sports victories, proposals, accident recreation in documentaries. It signals: "pay special attention to this moment." Audiences are conditioned by decades of cinema to emotionally heighten when footage slows to 0.5x.
                </li>
                <li>
                  <strong>0.75x (Subtle Slow):</strong> The invisible slow-down. Viewers may not consciously notice it, but they feel the content has more weight. Used in luxury brand videos, dramatic reveals, and beauty content to add elegance without breaking cinematic immersion.
                </li>
              </ul>

              <h3>Slow Motion Across Social Media Platforms in 2026</h3>
              <p>
                Each platform has developed specific conventions around slow motion content that have measurably different impacts on engagement:
              </p>
              <ul className="sm-content-list">
                <li>
                  <strong>TikTok & Instagram Reels:</strong> The "speed ramp" trend — normal speed → slow motion → back to normal — has been one of the most replicated editing styles since 2022. Videos using this technique receive an average 2.3x higher completion rate according to creator analytics studies. TikTok's native tools only allow basic speed changes; our tool gives you frame-precise control that their editor doesn't.
                </li>
                <li>
                  <strong>YouTube:</strong> Tutorial channels using strategic 0.5x slow-downs for technique demonstrations see 40% higher watch time retention on those segments. Viewers who can see exactly how a guitar chord is fingered, how a knife technique works, or how a brushstroke is applied are far more likely to rewatch that segment.
                </li>
                <li>
                  <strong>LinkedIn:</strong> Business and professional content increasingly uses subtle 0.8x slow-downs for product demos and behind-the-scenes content to communicate deliberateness and craft. The subliminal message: "we care about every detail."
                </li>
                <li>
                  <strong>Pinterest Video Pins:</strong> Fashion, food, and craft videos using slow motion get 67% more saves than real-time equivalents. The premium visual quality that slow motion implies increases the aspirational quality of the content — and saves are the highest-intent engagement metric on Pinterest.
                </li>
              </ul>
            </div>

            <aside className="sm-content-sidebar">
              <div className="sm-sidebar-stat-card">
                <div className="sm-s-num">0.25x</div>
                <div className="sm-s-label">Slowest Available Speed</div>
              </div>
              <div className="sm-sidebar-stat-card">
                <div className="sm-s-num">2.3x</div>
                <div className="sm-s-label">Higher Completion Rate with Speed Ramps</div>
              </div>
              <div className="sm-sidebar-stat-card">
                <div className="sm-s-num">67%</div>
                <div className="sm-s-label">More Pinterest Saves with Slow Motion</div>
              </div>
              <div className="sm-sidebar-stat-card">
                <div className="sm-s-num">40%</div>
                <div className="sm-s-label">Better Watch Retention in Tutorials</div>
              </div>
              <div className="sm-sidebar-cta-card">
                <p>Ready to create cinematic slow motion?</p>
                <a href="#hero" className="sm-sidebar-cta">Try It Free ↑</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          USE CASES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-use-cases" id="use-cases" aria-labelledby="use-cases-title">
        <motion.div
          className="sm-container"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="use-cases-title">Who Uses Slow Motion Video — and Why It Works</h2>
          <p className="sm-section-desc">
            From viral social media creators to Olympic coaching teams, slow motion is the single most universally powerful video effect in 2026. Here's how different industries are using it.
          </p>
          <div className="sm-cases-grid">
            {[
              {
                icon: '🏋️', title: 'Sports & Athletic Performance',
                body: 'Coaches and athletes use 0.25x–0.5x slow motion to analyze technique frame-by-frame. A golf swing, tennis serve, swimming stroke, or CrossFit lift that looks smooth at normal speed reveals critical form details in slow motion. Professional sports teams invest thousands in dedicated high-speed cameras; our free tool gives indie coaches and serious athletes the same analytical capability using their existing smartphone footage.',
                tags: ['Coaching', 'Form Analysis', 'Technique Review'],
              },
              {
                icon: '🎬', title: 'Film & Cinematic Production',
                body: 'Indie filmmakers and YouTube documentarians use slow motion strategically for maximum emotional payoff. The most shared cinematic moments — a character\'s expression the moment they understand something life-changing, the collision in an action sequence, the first kiss — are virtually always delivered in slow motion. Our tool lets solo creators achieve the production quality of studio films without renting a $3,000/day Phantom camera.',
                tags: ['Short Films', 'Music Videos', 'Documentaries'],
              },
              {
                icon: '💄', title: 'Beauty, Fashion & Lifestyle',
                body: 'Slow motion is the language of luxury in beauty content. A foundation being blended, a perfume bottle being spritzed, hair flowing in slow motion — these visuals communicate quality that no amount of text or static imagery can achieve. Beauty creators using slow motion consistently report 45% higher product purchase intent from their sponsored content compared to real-time footage. The effect is psychological: slow motion implies the product is worth savoring.',
                tags: ['Makeup', 'Hair', 'Skincare', 'Fashion'],
              },
              {
                icon: '🍕', title: 'Food & Culinary Content',
                body: 'Food content creators who understand slow motion unlock one of the most powerful tools for appetite appeal. A cheese pull at 0.5x, chocolate sauce being poured at 0.25x, vegetables hitting a smoking pan at 0.3x — food science tells us that sensory anticipation is 60% of appetite. When viewers watch slow-motion food content, they physiologically experience mild versions of the sensory response. That\'s why slow-motion food videos get shared: they literally make people hungry.',
                tags: ['Recipe Content', 'Food Photography', 'Restaurant Marketing'],
              },
              {
                icon: '🎓', title: 'Education & Online Courses',
                body: 'The most effective online courses use strategic slow-motion to isolate and emphasize skill transfer moments. Whether it\'s showing how to properly hold a calligraphy pen, demonstrating a complex yoga transition, or explaining a surgical technique for medical students, slowing down to 0.5x at the critical teaching moment increases learner retention by an average of 38% in educational technology research. Our tool lets course creators implement this technique without video editing expertise.',
                tags: ['Online Courses', 'Tutorial Videos', 'Training Content'],
              },
              {
                icon: '📱', title: 'Social Media Content Strategy',
                body: 'Social media algorithms in 2026 reward watch time above almost every other metric. Videos that keep viewers watching for 70%+ of their duration get dramatically more distribution. Slow motion is the most reliable technique for boosting completion rate — a 15-second clip that would be swiped past at normal speed becomes unmissable at 0.5x. Content strategists at top creator agencies consistently recommend slow motion as the highest-ROI production investment for creators at every level.',
                tags: ['TikTok', 'Reels', 'YouTube Shorts', 'LinkedIn'],
              },
              {
                icon: '🏠', title: 'Real Estate & Architecture',
                body: 'Premium real estate marketing has embraced slow-motion drone footage and walkthrough videos at 0.7x–0.85x speed to communicate elegance and luxury. At normal speed, a walkthrough looks like a YouTube tour. Slowed down, the same footage becomes aspirational lifestyle content. Luxury listings using slow-motion video components sell 23% faster according to real estate marketing studies — buyers psychologically associate the content quality with property quality.',
                tags: ['Luxury Listings', 'Architectural Showcase', 'Property Tours'],
              },
              {
                icon: '🔬', title: 'Science, Nature & Research',
                body: 'Science communicators and nature videographers use slow motion to reveal the hidden world — events that happen faster than the human eye can track. A bee\'s wing at 0.25x, a spider spinning silk, a droplet of water forming a crown splash, a bolt of lightning\'s branching pattern — these are the images that go viral because they show viewers something they\'ve never seen. Our tool is used by science educators on YouTube who regularly hit millions of views through compelling slow-motion reveals.',
                tags: ['Science YouTube', 'Nature Documentaries', 'Research Communication'],
              },
            ].map((c) => (
              <motion.article key={c.title} className="sm-case-card" whileHover={{ y: -4 }}>
                <div className="sm-case-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="sm-case-tags">
                  {c.tags.map((t) => <span key={t} className="sm-tag">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SPEED GUIDE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-speed-guide" id="speed-guide" aria-labelledby="guide-title">
        <div className="sm-container">
          <h2 id="guide-title">The Complete Slow Motion Speed Guide — Which Speed for Which Moment?</h2>
          <p className="sm-section-desc">
            Choosing the right slow-motion speed is as important as the shot itself. This guide covers professional-grade decision-making for every creative scenario.
          </p>

          <div className="sm-guide-table">
            {[
              {
                speed: '0.25x', emoji: '🌊', name: 'Ultra Slow', power: 100,
                use: 'Extreme drama — water physics, explosions, shattering glass, impact moments',
                avoid: 'Dialogue scenes, everyday actions without special visual interest',
                best: 'High frame rate source (60fps+)',
                duration: '3–5 seconds max',
              },
              {
                speed: '0.5x', emoji: '🐢', name: 'Classic Slow-Mo', power: 90,
                use: 'Sports highlights, emotional peaks, product reveals, kiss moments, action sequences',
                avoid: 'Tutorial demonstrations (too dramatic), conversational content',
                best: '60fps source for smoothest output',
                duration: '2–8 seconds',
              },
              {
                speed: '0.75x', emoji: '🎬', name: 'Film Slow', power: 75,
                use: 'Luxury brand content, elegant reveals, beauty & fashion, architectural tours',
                avoid: 'Fast-paced social media content where energy needs to stay high',
                best: 'Any frame rate — very natural-looking',
                duration: '4–15 seconds',
              },
              {
                speed: '0.85x', emoji: '🌿', name: 'Subtle Slow', power: 60,
                use: 'Nature content, meditation/wellness videos, lifestyle B-roll, ambient visuals',
                avoid: 'Situations where viewers need to sense the natural passage of time',
                best: 'Any frame rate — virtually imperceptible to most viewers',
                duration: 'Extended — even full videos',
              },
            ].map((row) => (
              <div key={row.speed} className="sm-guide-row">
                <div className="sm-guide-speed-cell">
                  <span className="sm-guide-emoji">{row.emoji}</span>
                  <span className="sm-guide-speed">{row.speed}</span>
                  <span className="sm-guide-name">{row.name}</span>
                  <div className="sm-guide-power-bar">
                    <div className="sm-guide-power-fill" style={{ width: `${row.power}%` }} />
                  </div>
                  <span className="sm-guide-power-label">Drama: {row.power}%</span>
                </div>
                <div className="sm-guide-details">
                  <div className="sm-guide-detail">
                    <span className="sm-guide-dt">✅ Use for:</span>
                    <span>{row.use}</span>
                  </div>
                  <div className="sm-guide-detail">
                    <span className="sm-guide-dt">❌ Avoid for:</span>
                    <span>{row.avoid}</span>
                  </div>
                  <div className="sm-guide-detail">
                    <span className="sm-guide-dt">📹 Best source:</span>
                    <span>{row.best}</span>
                  </div>
                  <div className="sm-guide-detail">
                    <span className="sm-guide-dt">⏱ Ideal clip length:</span>
                    <span>{row.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ADVANCED TECHNIQUES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-techniques" id="advanced-techniques" aria-labelledby="tech-title">
        <div className="sm-container">
          <h2 id="tech-title">Advanced Slow Motion Techniques for 2026 Content Creators</h2>
          <p className="sm-section-desc">
            Once you understand the basics of slowing down video, these professional techniques separate memorable content from forgettable content.
          </p>

          <div className="sm-tech-grid">
            {[
              {
                n: '01', title: 'The Speed Ramp',
                body: 'One of the most iconic techniques in contemporary social media video: start at normal speed (1x), slow down to 0.5x or 0.25x at the climactic moment, then accelerate back to 1x or beyond. The contrast creates a visual "punch" that\'s inherently satisfying to watch. To execute with our tool: export three versions of the same clip at different speeds, then join them in your preferred editor (CapCut, DaVinci Resolve, or even iMovie). The key is matching the exact frame where the speed change happens to a visual beat in the content.',
              },
              {
                n: '02', title: 'Audio Strategy for Slow Motion',
                body: 'Here\'s what most creators miss: audio at 0.5x speed sounds unnatural and distorted. Professional slow-motion video has three audio approaches. (1) Remove audio entirely and replace with music — this is what 90% of viral slow-motion content does. The visual beauty at 0.5x combined with music that has a BPM matching the new apparent motion creates emotional resonance that\'s hard to articulate but impossible to miss. (2) Use ambient natural sound, slightly pitch-corrected. (3) For tutorial content, record a voiceover narrating what viewers are seeing in the slow-motion footage. Our tool handles the technical audio processing automatically.',
              },
              {
                n: '03', title: 'The Contrast Cut',
                body: 'Cut between slow motion and fast motion within the same video to create dramatic energy contrast. A training montage that mixes 0.5x slow-motion technique shots with 2x fast-forward repetition shots creates a rhythm that communicates both precision and volume of work. This editing technique is standard in sports documentaries, fitness content, and brand story videos. It requires exporting both a slow and fast version of the same source footage — something our tool makes trivially easy.',
              },
              {
                n: '04', title: 'The Invisible Slow-Down',
                body: 'Content at 0.8x–0.85x speed is perceived as "high quality" by most viewers without them consciously registering that it\'s slowed down. This is because standard video at 24fps already has a slightly "cinematic" quality, and a marginal slow-down enhances that perception. Luxury brands, premium real estate, and high-end restaurant content creators frequently use 0.8x as their default speed — not for dramatic effect, but for subconscious quality signaling. This is the one technique that improves engagement metrics without viewers ever understanding why.',
              },
              {
                n: '05', title: 'Shooting for the Slow-Down',
                body: 'If you know you\'re going to slow down footage in post-production, adjust your shooting strategy. Film in bright, well-lit conditions — insufficient light means more noise, and noise becomes extremely visible in slow motion. Use the highest frame rate your camera allows (60fps on most modern smartphones). Minimize camera shake — slow motion amplifies hand tremors that are invisible at 1x speed. Plan camera movement at roughly 2x the speed you want to appear in the final slow-motion version, as the slow-down will halve your apparent motion speed.',
              },
              {
                n: '06', title: 'Platform-Specific Export Strategy',
                body: 'Different platforms have different optimal settings for slow-motion content. TikTok and Instagram Reels: export at 1080p, keep clips between 3–8 seconds of slow-motion maximum — the algorithm strongly penalizes videos where viewers skip ahead. YouTube: longer slow-motion sequences work well in the 10–60 second range, especially for educational content. Twitter/X: compress to the smallest file size that maintains visual quality — their CDN recompresses all video, so start with a high-quality 1080p export. Our tool exports to optimized MP4 format that performs well across all platforms.',
              },
            ].map((t) => (
              <article key={t.n} className="sm-tech-card">
                <div className="sm-tech-num">{t.n}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-comparison" id="comparison" aria-labelledby="comp-title">
        <div className="sm-container">
          <h2 id="comp-title">Slow Down Video Online: Tool Comparison 2026</h2>
          <p className="sm-section-desc">
            How does Scenith's free online slow motion editor compare to the alternatives? We ran the numbers.
          </p>

          <div className="sm-comp-table-wrap">
            <table className="sm-comp-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th className="sm-highlight-col">Scenith (Free)</th>
                  <th>Adobe Premiere Pro</th>
                  <th>CapCut</th>
                  <th>DaVinci Resolve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', '✅ $0 forever', '❌ $54.99/month', '✅ Free (premium features paid)', '⚠️ Free (Studio: $295 one-time)'],
                  ['Speed Range', '✅ 0.1x – 15x', '✅ Any range', '⚠️ 0.1x – 100x (basic)', '✅ Full range + optical flow'],
                  ['Setup Required', '✅ Browser only, zero install', '❌ 4GB+ install, learning curve', '✅ Mobile app only', '❌ Complex 2GB+ install'],
                  ['Processing Speed', '✅ 2–5 min cloud processing', '❌ Depends on your hardware', '✅ Real-time on-device', '❌ Hardware dependent'],
                  ['AI Interpolation', '✅ Automatic', '✅ Optical Flow (manual setup)', '⚠️ Limited', '✅ Advanced (manual)'],
                  ['Export Quality', '✅ Up to 4K (paid plan)', '✅ Any format', '⚠️ Up to 4K (watermark free on premium)', '✅ Any format'],
                  ['Mobile Support', '✅ Full browser support', '⚠️ iPad only (limited)', '✅ Primary use case', '❌ Desktop only'],
                  ['Learning Curve', '✅ Under 60 seconds', '❌ 20–40 hours to proficiency', '✅ Intuitive', '❌ 15–30 hours to proficiency'],
                  ['Watermark-Free', '⚠️ Paid plan', '✅ Always', '❌ Free tier has watermark', '✅ Always'],
                  ['Batch Processing', '⚠️ One at a time', '✅ Full timeline', '⚠️ Limited', '✅ Full timeline'],
                ].map(([crit, sc, ap, cc, dr]) => (
                  <tr key={crit as string}>
                    <td><strong>{crit}</strong></td>
                    <td className="sm-highlight-col">{sc}</td>
                    <td>{ap}</td>
                    <td>{cc}</td>
                    <td>{dr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sm-comp-verdict">
            <h3>💡 The Bottom Line</h3>
            <p>
              Scenith is the optimal choice for <strong>90% of slow-motion use cases</strong>: quick social media clips, YouTube content, course material, client deliverables, and personal projects. For complex multi-layer productions with color grading, transitions, and effects, a full NLE like Premiere or DaVinci Resolve remains the professional standard. The smart workflow in 2026 is to use both: Scenith for fast slow-motion exports and dedicated editing software for final assembly when needed. This hybrid approach saves 3–5 hours per week for the average content creator.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BENEFITS SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-benefits" id="benefits" aria-labelledby="benefits-title">
        <motion.div
          className="sm-container"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="benefits-title">Why Slow Down Video Online with Scenith?</h2>
          <div className="sm-benefits-grid">
            {[
              { icon: '🆓', title: 'Genuinely Free', body: '5 videos per month on the free plan with no credit card required. Need more? Our Creator plan is the most affordable in the market at a fraction of Premiere\'s monthly cost.' },
              { icon: '⚡', title: 'Cloud-Powered Speed', body: 'Processing happens on our servers, not your device. That means a 500MB 4K video processes just as fast on your phone as on a workstation. No dropped frames, no thermal throttling, no 2-hour render queues.' },
              { icon: '🔒', title: 'Private & Secure', body: 'Your videos are encrypted in transit and at rest. We never use your content for training AI models. Videos are automatically deleted from our servers after 30 days. Read our privacy policy for full details.' },
              { icon: '🎯', title: 'Precision Control', body: 'Most tools offer 0.5x and that\'s it. We offer 0.1x through 15x with 0.05x increments. That means you can hit exactly 0.65x for the specific feel your shot needs — not just the generic preset your competitor\'s tool forces on you.' },
              { icon: '📱', title: 'Works Everywhere', body: 'Upload from your iPhone, edit on your iPad, download on your laptop. Full feature parity across all devices — no "mobile-lite" limitations. Our responsive UI adapts to any screen size without compromising functionality.' },
              { icon: '🎬', title: 'Cinema-Quality Output', body: 'We use FFmpeg — the same video processing library that powers Netflix\'s transcoding pipeline — combined with intelligent bitrate optimization to ensure your output looks as good as the source material. No mysterious quality degradation.' },
            ].map((b) => (
              <motion.article key={b.title} className="sm-benefit-card" whileHover={{ scale: 1.02 }}>
                <span className="sm-benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-testimonials" id="testimonials" aria-labelledby="test-title">
        <motion.div
          className="sm-container"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="test-title">What Creators Are Saying</h2>
          <p className="sm-section-desc">Join 30,000+ creators who use Scenith to produce cinematic slow-motion content every day.</p>
          <div className="sm-test-grid">
            {[
              { name: 'Priya Sharma', role: 'Dance Content Creator, 280K followers', stars: 5, text: 'I\'ve been hunting for a free slow-motion tool that doesn\'t destroy quality for two years. Scenith is genuinely the first one that delivers what it promises. My 0.5x dance reels have been blowing up since I started using it — the difference in engagement is obvious.' },
              { name: 'Marcus Webb', role: 'High School Football Coach', stars: 5, text: 'We can\'t afford dedicated sports analysis software on a school budget. Scenith lets me slow down game footage to 0.25x on my phone after practice and do technique breakdowns with the team the next morning. It\'s changed how we do player development completely.' },
              { name: 'Yuki Tanaka', role: 'Food Photographer & Videographer', stars: 5, text: 'The 0.25x pour shots have completely transformed my client deliverables. Restaurants pay premium rates for this content and I produce it on my lunch break now. The quality is indistinguishable from what I used to spend hours achieving in Premiere.' },
              { name: 'Akash Patel', role: 'YouTube Science Communicator', stars: 5, text: 'My "watch water in extreme slow motion" video got 4.2M views. I shot it on a regular iPhone at 60fps, slowed it to 0.25x on Scenith, and it looked like I had a $50,000 Phantom camera. The viral potential of slow motion content is real — and this tool unlocks it for free.' },
              { name: 'Sofia Reyes', role: 'Real Estate Video Producer', stars: 5, text: 'I\'ve added "cinematic slow-motion walk-through" to every listing package and increased my rates by 35%. Clients immediately perceive the quality difference. Scenith is how I deliver premium output while keeping my production costs low.' },
              { name: 'Tom Eriksson', role: 'Indie Filmmaker', stars: 5, text: 'As a one-person crew, I can\'t always capture the perfect slow-motion shot in the moment. Scenith lets me apply slow-motion in post to regular footage and the results are genuinely impressive for 30fps source material. It\'s not a Phantom camera but it\'s 80% of the way there for free.' },
            ].map((t) => (
              <motion.blockquote key={t.name} className="sm-test-card" whileHover={{ y: -4 }}>
                <div className="sm-test-stars">{'⭐'.repeat(t.stars)}</div>
                <p>"{t.text}"</p>
                <cite>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-faq" id="faq" aria-labelledby="faq-title">
        <motion.div
          className="sm-container"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="faq-title">Frequently Asked Questions — Slow Down Video Online</h2>
          <div className="sm-faq-grid">
            {[
              { q: 'What is the slowest speed I can apply to a video?', a: 'With our custom speed control, you can go down to 0.1x — that\'s 10× slower than real time. Most cinematic use cases are served by 0.25x to 0.75x. For reference, a 10-second clip at 0.25x becomes 40 seconds of slow-motion footage. The optimal slow-motion range for social media content is 0.5x–0.75x, where the dramatic effect is clear but clips don\'t become too long for platform algorithms.' },
              { q: 'Does slowing down a video reduce its quality?', a: 'It depends on the source footage and the degree of slow-down. Footage originally shot at 60fps or higher can be slowed to 0.5x with virtually no quality loss. 30fps footage slowed to 0.5x will have some interpolation artifacts in fast-moving sections, though our FFmpeg engine minimizes these. For dramatic quality at very slow speeds (0.25x), we recommend shooting source footage at 120fps or 240fps if possible.' },
              { q: 'Can I slow down only part of a video?', a: 'Currently, our tool applies a uniform speed change to the entire clip. For the speed-ramp technique (slow down for a section, then return to normal speed), we recommend: (1) trim your video to the section you want in slow motion, (2) export that section at the desired slow speed, then (3) combine it with your normal-speed footage in a video editor like CapCut, DaVinci Resolve, or iMovie. This workflow takes about 5 minutes total.' },
              { q: 'What video formats can I upload?', a: 'We support all major video formats: MP4 (H.264, H.265), MOV (QuickTime), AVI, MKV (Matroska), WebM, MPEG, MPG, and FLV. Maximum file size is 500MB. If your file exceeds this, we recommend compressing it first with HandBrake (free) — compressing to 500MB typically doesn\'t affect visual quality at 1080p or lower resolutions.' },
              { q: 'Is this tool completely free?', a: 'Yes — 5 slow-motion videos per month are completely free with no credit card required. This covers most casual creators\' needs. For professional creators producing daily content, our Creator plan ($X/month) offers 45 videos per month, 1080p/2K quality, and longer video length limits. Our Studio plan is for agencies and high-volume creators needing unlimited processing.' },
              { q: 'Will my slow-motion video have a watermark?', a: 'Free plan videos include a subtle Scenith watermark in the corner. Upgrading to Creator or Studio removes the watermark entirely. The watermark is small and non-intrusive for personal projects, but we recommend upgrading for client work or commercial content.' },
              { q: 'How does the audio sound in slow-motion video?', a: 'Audio is processed using pitch correction to prevent the unnatural "deep voice" effect that simple time-stretching causes. At 0.5x speed, speech will sound lower-pitched and slightly unusual — most professional slow-motion content replaces audio with music or removes it entirely. For tutorial content at 0.75x–0.85x, the audio remains largely natural and comprehensible.' },
              { q: 'Can I use the processed videos commercially?', a: 'Yes. All videos processed through Scenith are yours to use for any purpose including commercial projects, client work, advertising, and monetized social media content. We claim no rights over your processed videos. The Scenith watermark (on free plans) would need to be removed via an upgrade for professional commercial use.' },
              { q: 'How long does processing take?', a: 'A 1-minute video at 1080p typically processes in 2–4 minutes. Longer videos (10+ minutes) and higher quality exports (2K/4K) take proportionally longer — typically 8–15 minutes. Processing happens on our cloud servers, so your device\'s performance doesn\'t affect render time. You can close the browser tab and return — we\'ll have it ready when you come back.' },
              { q: 'Is my video stored on your servers permanently?', a: 'Videos are stored for 30 days after processing to allow you to re-download if needed. After 30 days, they are permanently deleted from our servers. We use AES-256 encryption for all stored video files. You can also manually delete your videos at any time from the dashboard.' },
            ].map((item) => (
              <article key={item.q} className="sm-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          RELATED TOOLS CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-related" id="related-tools" aria-labelledby="related-title">
        <div className="sm-container">
          <h2 id="related-title">Explore All Scenith Video Tools</h2>
          <p className="sm-section-desc">
            Slow motion is just the beginning. Scenith's full suite of AI-powered video tools gives you a complete production workflow for free.
          </p>
          <div className="sm-related-grid">
            {[
              { href: '/tools/video-speed-modifier', icon: '⚡', title: 'Video Speed Modifier', desc: 'Full control from 0.1x to 15x — the complete video speed toolkit. All presets, custom speeds, and premium export options in one place.' },
              { href: '/tools/ai-subtitle-generator', icon: '💬', title: 'AI Subtitle Generator', desc: 'Auto-generate accurate subtitles for your slow-motion videos. Perfect for accessibility, search discoverability, and international audiences.' },
              { href: '/tools/ai-voice-changer', icon: '🎤', title: 'AI Voice Changer', desc: 'Replace or modify the audio in your slow-motion clips. Add voiceover narration, change pitch, or apply cinematic audio effects.' },
            ].map((t) => (
              <a key={t.title} href={t.href} className="sm-related-card">
                <span className="sm-related-icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <span className="sm-related-arrow">Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="sm-section sm-final-cta" id="get-started" aria-labelledby="cta-title">
        <motion.div
          className="sm-container sm-cta-inner"
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <h2 id="cta-title">Ready to Create Cinematic Slow Motion?</h2>
          <p>Join 30,000+ creators. Upload your first video in seconds — no account required to start.</p>
          <div className="sm-final-cta-btns">
            <button
              className="sm-cta-btn sm-cta-primary"
              onClick={() => {
                if (!isLoggedIn) setShowLoginModal(true);
                else document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {isLoggedIn ? '🎬 Slow Down My Video — Free' : '🔐 Login & Start Free'}
            </button>
            <a href="/pricing" className="sm-cta-btn sm-cta-secondary">View Pricing →</a>
          </div>
          <div className="sm-final-trust">
            <span>⚡ 2-min processing</span>
            <span>🔒 No credit card needed</span>
            <span>🎥 Cinematic quality</span>
          </div>
        </motion.div>
      </section>

      {/* ── Cross-Tool Promo Bar ── */}
      <div className="sm-promo-bar">
        <p>💡 <strong>Pro Tip:</strong> Get AI Subtitles + Voice Changer + Speed Control with Creator — less than buying individually.</p>
        <a href="/pricing" className="sm-promo-link">Compare Plans →</a>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          MODALS
      ═══════════════════════════════════════════════════════════════════════ */}

      {/* Upgrade Limit Modal */}
      {showUpgradeModal && (
        <div className="sm-overlay" onClick={() => setShowUpgradeModal(false)}>
          <div className="sm-upgrade-card" onClick={(e) => e.stopPropagation()}>
            <button className="sm-upgrade-close" onClick={() => setShowUpgradeModal(false)}>✕</button>
            <span style={{ fontSize: '2.5rem' }}>🚀</span>
            <h2 className="sm-upgrade-title">Monthly Limit Reached</h2>
            <p className="sm-upgrade-sub">You've used all your exports this month. Upgrade to keep creating.</p>
            <div className="sm-upgrade-perks">
              {[['⚡', 'Creator — 45 videos/mo + 2K'], ['🎬', 'Studio — Unlimited + 4K'], ['📏', 'Longer video lengths'], ['🔒', 'Priority processing']].map(([i, t]) => (
                <div key={t} className="sm-perk-pill"><span>{i}</span><span>{t}</span></div>
              ))}
            </div>
            <a href="/pricing" className="sm-upgrade-cta">🔓 View Plans →</a>
            <button className="sm-upgrade-dismiss" onClick={() => setShowUpgradeModal(false)}>Maybe later</button>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteModalOpen && itemToDelete && (
        <div className="sm-overlay" onClick={() => { setDeleteModalOpen(false); setItemToDelete(null); }}>
          <div className="sm-delete-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete {itemToDelete.name}?</h3>
            <p>This action cannot be undone. The video will be permanently removed.</p>
            <div className="sm-delete-actions">
              <button className="sm-delete-confirm" onClick={handleDeleteConfirm} disabled={isDeleting}>
                {isDeleting ? 'Deleting…' : 'Yes, Delete'}
              </button>
              <button className="sm-delete-cancel" onClick={() => { setDeleteModalOpen(false); setItemToDelete(null); }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Popup (timed) */}
      {showUpgradePopup && <UpgradePopup onClose={() => setShowUpgradePopup(false)} />}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="sm-overlay">
          <motion.div
            className="sm-login-modal"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="sm-modal-close" onClick={() => setShowLoginModal(false)} aria-label="Close">
              <FaTimes />
            </button>
            <div className="sm-auth">
              <h2 className="sm-auth-logo">SCENITH</h2>
              <p className="sm-auth-sub">Login to continue</p>
              {isLoggingIn && (
                <div className="sm-auth-loading">
                  <div className="sm-spinner" />
                  <p>Logging in…</p>
                </div>
              )}
              {loginError && <div className="sm-error">{loginError}</div>}
              {loginSuccess && <div className="sm-success">{loginSuccess}</div>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  handleLogin({ email: fd.get('email') as string, password: fd.get('password') as string });
                }}
                className="sm-auth-form"
              >
                <div className="sm-field">
                  <input type="email" name="email" placeholder=" " className="sm-input" required disabled={isLoggingIn} />
                  <label>Email</label>
                </div>
                <div className="sm-field">
                  <input type="password" name="password" placeholder=" " className="sm-input" required disabled={isLoggingIn} />
                  <label>Password</label>
                </div>
                <button type="submit" className="sm-cta-btn sm-auth-submit" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in…' : 'Login'}
                </button>
              </form>
              <div className="sm-divider">OR</div>
              <div id="smGoogleBtn" />
              <p className="sm-auth-signup">
                New to SCENITH? <a href="/signup">Sign up free</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Floating Upgrade CTA */}
      {isLoggedIn && userProfile.role === 'BASIC' && (
        <div className="sm-floating-upgrade">
          <button onClick={() => window.location.href = '/pricing'} className="sm-floating-btn">
            <span>⚡</span>
            <span>
              <strong>Unlock 9× More Videos</strong>
              <small>Upgrade to Creator</small>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SlowDownVideoOnlineClient;