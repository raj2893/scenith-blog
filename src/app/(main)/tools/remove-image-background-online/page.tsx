"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import BackgroundRemoval from '../../../../components/BackgroundRemoval';
import { API_BASE_URL } from '../../../config';
import '../../../../../styles/tools/RemoveBackgroundOnline.css';

// ─── Interfaces ────────────────────────────────────────────────────────────────
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

// ─── Before / After Slider Component ──────────────────────────────────────────
const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSlider(e.clientX);
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div
      ref={containerRef}
      className="rbo-slider-wrap"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
    >
      {/* "Before" layer — blurred/colored placeholder */}
      <div className="rbo-slider-before">
        <div className="rbo-slider-before-inner">
          <div className="rbo-demo-subject" />
          <div className="rbo-demo-bg" />
          <span className="rbo-slider-label rbo-label-before">BEFORE</span>
        </div>
      </div>

      {/* "After" layer clipped by slider position */}
      <div
        className="rbo-slider-after"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="rbo-slider-after-inner">
          <div className="rbo-demo-subject rbo-subject-after" />
          <div className="rbo-demo-checkerboard" />
          <span className="rbo-slider-label rbo-label-after">AFTER</span>
        </div>
      </div>

      {/* Drag handle */}
      <div className="rbo-slider-handle" style={{ left: `${sliderPos}%` }}>
        <div className="rbo-handle-line" />
        <div className="rbo-handle-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
          </svg>
        </div>
        <div className="rbo-handle-line" />
      </div>
    </div>
  );
};

// ─── Upgrade Popup ─────────────────────────────────────────────────────────────
function UpgradePopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="rbo-popup-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Upgrade plan"
    >
      <motion.div
        className="rbo-popup-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="rbo-popup-close" onClick={onClose} aria-label="Close">×</button>

        <div className="rbo-popup-fire-pill">
          <span className="rbo-fire-dot" />
          🔥 LIMITED OFFER — 25% OFF TODAY
        </div>

        <h2 className="rbo-popup-title">
          Remove Backgrounds{' '}
          <span className="rbo-popup-accent">Without Limits.</span>
        </h2>

        <p className="rbo-popup-sub">
          Free plan: <strong style={{ color: '#e53e3e' }}>10 removals/month</strong>.
          Upgrade from <strong>₹349/mo · $9/mo</strong>
        </p>

        <div className="rbo-popup-perks">
          {[
            ['🖼', '500 Removals/month'],
            ['🎯', '4K Ultra HD Quality'],
            ['⚡', 'Priority Processing'],
            ['💼', 'Full Commercial Rights'],
          ].map(([icon, text]) => (
            <div key={text as string} className="rbo-perk-row">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <a href="/pricing" onClick={onClose} className="rbo-popup-cta">
          🚀 Claim 25% OFF — Upgrade Now →
        </a>
        <button className="rbo-popup-dismiss" onClick={onClose}>
          No thanks, I'll stay limited
        </button>
      </motion.div>
    </div>
  );
}

// ─── Stat Counter ──────────────────────────────────────────────────────────────
function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="rbo-stat-item">
      <span className="rbo-stat-num">{count.toLocaleString()}{suffix}</span>
      <span className="rbo-stat-label">{label}</span>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const RemoveImageBackgroundOnlineClient: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: '', firstName: '', lastName: '',
    picture: null, googleAuth: false, role: '',
  });
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowUpgradePopup(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { setIsLoggedIn(false); return; }
    axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const parts = (res.data.name || '').trim().split(' ');
        setUserProfile({
          email: res.data.email || '',
          firstName: parts[0] || '',
          lastName: parts.slice(1).join(' '),
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

  return (
    <div className="rbo-page">

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Remove Image Background Online — Free AI Tool',
            description:
              'Remove image background online instantly with AI. Free tool creates transparent PNG from any photo in under 5 seconds. No sign-up required. Perfect for e-commerce, social media, and design.',
            url: 'https://scenith.in/tools/remove-image-background-online',
            applicationCategory: 'PhotoEditingApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: { '@type': 'Organization', name: 'SCENITH AI VIDEO EDITOR', url: 'https://scenith.in' },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How do I remove image background online for free?', acceptedAnswer: { '@type': 'Answer', text: 'Upload your image to Scenith\'s free AI background remover. The AI processes your photo in under 5 seconds and delivers a transparent PNG — no sign-up, no watermark, completely free.' } },
              { '@type': 'Question', name: 'What is the best free tool to remove background from image online?', acceptedAnswer: { '@type': 'Answer', text: 'Scenith\'s AI background remover is among the best free tools available in 2026. It offers full-resolution downloads with no watermarks, handles complex edges like hair and fur, and processes images in under 5 seconds — all for free.' } },
              { '@type': 'Question', name: 'Can I remove background from image online without Photoshop?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Scenith\'s AI removes image backgrounds without Photoshop or any software download. The entire process happens in your browser in seconds.' } },
              { '@type': 'Question', name: 'How do I make image background transparent online?', acceptedAnswer: { '@type': 'Answer', text: 'Upload any JPG or PNG to Scenith. The AI detects your subject, removes the background, and outputs a transparent PNG file you can download immediately. No design skills needed.' } },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
              { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
              { '@type': 'ListItem', position: 3, name: 'Background Removal', item: 'https://scenith.in/tools/background-removal' },
              { '@type': 'ListItem', position: 4, name: 'Remove Image Background Online', item: 'https://scenith.in/tools/remove-image-background-online' },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="rbo-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', name: 'Home', pos: 1 },
            { href: '/tools', name: 'Tools', pos: 2 },
            { href: '/tools/background-removal', name: 'Background Removal', pos: 3 },
            { href: null, name: 'Remove Image Background Online', pos: 4 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.href
                ? <a href={item.href} itemProp="item"><span itemProp="name">{item.name}</span></a>
                : <span itemProp="name">{item.name}</span>}
              <meta itemProp="position" content={String(item.pos)} />
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Decorative dots / lines background ── */}
      <div className="rbo-bg-decor" aria-hidden="true">
        <div className="rbo-decor-circle rbo-dc-1" />
        <div className="rbo-decor-circle rbo-dc-2" />
        <div className="rbo-decor-line rbo-dl-1" />
        <div className="rbo-decor-line rbo-dl-2" />
        <div className="rbo-dot-matrix" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-hero" id="hero" role="main">
        <div className="rbo-hero-inner">
          <motion.div
            className="rbo-hero-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rbo-hero-eyebrow">
              <span className="rbo-eyebrow-dot" />
              AI-Powered · Free · Instant Results
            </div>

            <h1 className="rbo-hero-title">
              Remove Image
              <br />
              <span className="rbo-hero-title-stroke">Background</span>
              <br />
              Online Free
            </h1>

            <p className="rbo-hero-sub">
              The sharpest AI background remover in 2026. Upload any photo — product shot, portrait, logo — and get a flawless transparent PNG in{' '}
              <strong>under 5 seconds</strong>. No Photoshop. No subscription. No watermark. Ever.
            </p>

            <div className="rbo-hero-pills">
              {[ '✓ Full resolution', '✓ Commercial use free', '✓ Hair & fur precision'].map((p) => (
                <span key={p} className="rbo-pill">{p}</span>
              ))}
            </div>

            <a href="/tools/background-removal" className="rbo-hero-cta">
              Open Background Remover
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>

          {/* Before/After Demo */}
          <motion.div
            className="rbo-hero-demo"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="rbo-demo-label">Drag to compare →</div>
            <BeforeAfterSlider />
            <p className="rbo-demo-caption">Real AI output — drag the handle to reveal the difference</p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="rbo-stats-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatedStat target={50000} suffix="+" label="Images Processed" />
          <div className="rbo-stat-divider" />
          <AnimatedStat target={5} suffix="s" label="Avg. Processing Time" />
          <div className="rbo-stat-divider" />
          <AnimatedStat target={99} suffix="%" label="Edge Accuracy" />
          <div className="rbo-stat-divider" />
          <AnimatedStat target={0} suffix="$" label="Cost Per Image" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          LIVE TOOL EMBED
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-tool-section" id="tool" aria-labelledby="tool-title">
        <div className="rbo-container">
          <div className="rbo-tool-header">
            <div className="rbo-section-tag">TRY IT NOW</div>
            <h2 id="tool-title" className="rbo-section-title">
              Remove Image Background Online — Free
            </h2>
            <p className="rbo-section-sub">
              Upload your photo below. Our AI detects the subject instantly, peels away the background, and hands you a studio-quality transparent PNG — no settings to configure, no expertise required.
            </p>
          </div>

          <div className="rbo-tool-embed">
            <BackgroundRemoval />
          </div>

          <div className="rbo-tool-trust">
            {['✅ 100% Free Forever', '⚡ Results in 5 seconds', '🔒 Private & Secure', '📥 Full-res PNG Download', '💼 Commercial Use OK'].map((t) => (
              <span key={t} className="rbo-trust-chip">{t}</span>
            ))}
          </div>

          <div className="rbo-tool-promo">
            <p>
              💡 <strong>Pro Tip:</strong> After removing the background, drop into our{' '}
              <a href="/tools/image-editing" className="rbo-inline-link">Free Image Editor</a>{' '}
              to add new backgrounds, text, stickers, or brand colours.
            </p>
            <a href="/tools/image-editing" className="rbo-promo-link">Try Image Editor →</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-how" id="how-it-works" aria-labelledby="how-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">PROCESS</div>
          <h2 id="how-title" className="rbo-section-title">
            Remove Background from Image in 3 Steps
          </h2>
          <p className="rbo-section-sub">
            We stripped every unnecessary step. No sign-up forms, no format restrictions, no watermarks. Just results.
          </p>

          <div className="rbo-steps">
            {[
              {
                n: '01', icon: '📤', title: 'Upload Any Image',
                body: 'Drag-and-drop or click to select your file. JPG, PNG, JPEG — up to 30MB supported. Works from desktop, phone, or tablet. Your image is encrypted the moment it leaves your device.',
              },
              {
                n: '02', icon: '🧠', title: 'AI Processes in Seconds',
                body: 'Our deep learning model — trained on 50M+ diverse images — performs pixel-level semantic segmentation. It identifies your subject, traces every edge including individual hair strands, and generates a precision alpha channel mask.',
              },
              {
                n: '03', icon: '📥', title: 'Download Your Transparent PNG',
                body: 'Collect your full-resolution PNG with a clean transparent background. Drop it into Canva, Figma, Photoshop, PowerPoint, or upload directly to Shopify, Amazon, or any platform. Full commercial rights included, no attribution required.',
              },
            ].map((s) => (
              <motion.div key={s.n} className="rbo-step" whileHover={{ y: -4 }}>
                <div className="rbo-step-num">{s.n}</div>
                <div className="rbo-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          DEEP DIVE — WHAT IS AI BACKGROUND REMOVAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-deep-dive" id="what-is-bg-removal" aria-labelledby="deepdive-title">
        <div className="rbo-container rbo-container-wide">
          <div className="rbo-section-tag">TECHNOLOGY</div>
          <h2 id="deepdive-title" className="rbo-section-title">
            What Is AI Background Removal? The Full Technical Picture (2026)
          </h2>
          <p className="rbo-section-sub">
            Understanding the science behind AI background removal helps you use it more strategically — and explains why modern tools produce results that were impossible to achieve manually just a few years ago.
          </p>

          <div className="rbo-deep-grid">
            <div className="rbo-deep-main">

              <h3>The Computer Vision Stack That Makes It Work</h3>
              <p>
                When you upload an image to an AI background remover, you're triggering a multi-stage computer vision pipeline that runs in under two seconds on modern cloud hardware. At its core is a <strong>convolutional neural network (CNN)</strong> — specifically, an encoder-decoder architecture like U-Net or a transformer-based model — that has been trained on tens of millions of annotated images.
              </p>
              <p>
                The process begins with the encoder compressing your image into a compact mathematical representation called a <strong>feature map</strong>. This map captures not just pixel colour values but deep contextual information: object shapes, semantic relationships, and spatial hierarchies. The decoder then takes this representation and reconstructs a full-resolution <strong>segmentation mask</strong> — a binary image where every pixel is classified as either "foreground subject" or "background."
              </p>
              <p>
                The final step applies this mask to generate an <strong>alpha channel</strong>: a fourth image channel (beyond red, green, blue) that stores transparency information pixel-by-pixel. The result is a PNG file where background pixels have zero opacity and subject pixels have full opacity — with anti-aliased edge pixels containing fractional opacity values that create natural, feathered transitions.
              </p>

              <h3>Why 2026 AI Models Beat Everything Before Them</h3>
              <p>
                The leap in quality between 2022 AI background removers and 2026 models is staggering. Several architectural advances drove this:
              </p>
              <ul className="rbo-content-list">
                <li><strong>Vision Transformers (ViTs):</strong> Unlike CNNs that process local regions, transformers attend to the entire image simultaneously. This means they understand context — recognising that a strand of hair belongs to a person standing in front of a brick wall, even when the hair colour is similar to the wall texture.</li>
                <li><strong>Matting Networks:</strong> Dedicated neural networks for "image matting" — the technical term for estimating fine-grained transparency values at semi-transparent edges like hair, smoke, fur, and glass. These networks operate on edge crops at high resolution, producing sub-pixel accuracy impossible with traditional segmentation.</li>
                <li><strong>Synthetic Data Augmentation:</strong> AI models are now trained on synthetic composites — computer-generated images with perfect ground-truth alpha masks — blended with real photography. This dramatically expands training diversity, helping models handle edge cases like white subjects on white backgrounds or reflective surfaces.</li>
                <li><strong>Real-Time Inference Optimisation:</strong> ONNX export, INT8 quantization, and GPU shader compilation mean that models delivering 2021-era research-quality results now run in ~400ms on commodity cloud GPUs, making 5-second total processing times commercially viable.</li>
              </ul>

              <h3>The Challenge of "Hard" Images — and How AI Solves Them</h3>
              <p>
                Certain image types have historically challenged background removal tools:
              </p>
              <ul className="rbo-content-list">
                <li>
                  <strong>Fine hair and flyaways:</strong> A single photograph of a person with curly hair against a bright background contains thousands of semi-transparent pixels at hair tips. Manual selection required hours of work using Photoshop's refine edge tools. AI matting networks now handle this automatically by modelling hair geometry as a statistical distribution rather than tracing individual strands.
                </li>
                <li>
                  <strong>Transparent and reflective subjects:</strong> Glass bottles, crystal vases, and reflective jewellery partially transmit the background through them, making binary foreground/background classification meaningless. Modern models use a <strong>ternary matting</strong> approach — classifying pixels as definite foreground, definite background, or "unknown" — then applying dedicated matting to the uncertain region.
                </li>
                <li>
                  <strong>Low-contrast backgrounds:</strong> A white product on a light grey background, or a blonde subject against a cream wall, offers minimal colour contrast for the segmentation model. Transformer architectures handle this through semantic understanding — recognising the object's 3D shape and context rather than relying on colour difference.
                </li>
                <li>
                  <strong>Complex backgrounds with clutter:</strong> A product photographed on a desk cluttered with similar-coloured objects requires the model to understand object categories, not just visual similarity. Deep learning models trained on category-aware segmentation tasks handle this far better than threshold-based tools.
                </li>
              </ul>

              <h3>How AI Background Removal Compares to Manual Editing in 2026</h3>
              <p>
                A professional retoucher working in Adobe Photoshop can produce a clean background removal in 15–45 minutes for a complex image. A junior designer using the Pen Tool might take 2–3 hours on a product with fine details. At $25–75/hour for professional retouching services, that's $6–56 per image — or $600–5,600 for a 100-image product catalogue.
              </p>
              <p>
                Our AI processes the same catalogue in 8 minutes (5 seconds × 100 images, minus queue time) at zero cost. The quality difference, for most e-commerce and social media applications, is imperceptible to the end customer. Professional retouching remains superior for ultra-high-stakes images — cosmetics hero shots, fashion magazine covers — but for 90%+ of real-world use cases, AI background removal is both faster and practically free.
              </p>

              <h3>Privacy, Security, and Data Ethics</h3>
              <p>
                When you remove an image background online, you're entrusting a service with potentially sensitive visual content — product designs that haven't launched, proprietary inventory, personal photographs. Scenith processes images using ephemeral compute instances: your image is decrypted, processed, and the result returned within seconds. Original images are never written to persistent storage. We do not use customer images to train or fine-tune AI models, and we never share image data with third parties. All data transfer uses TLS 1.3 encryption.
              </p>

              <h3>The Open Source vs Proprietary AI Debate</h3>
              <p>
                Several open-source models are capable of background removal — <strong>rembg</strong> (based on U²-Net), <strong>BackgroundMattingV2</strong>, and newer SegFormer-based models. You can run these locally if you have Python installed and a compatible GPU. So why use an online tool?
              </p>
              <p>
                For most users: setup complexity (CUDA, ONNX runtime, model weights download), processing speed on consumer hardware (10–60 seconds vs 5 seconds on cloud hardware), and lack of a user interface. Online tools abstract all of that — upload, click, download. For developers and teams processing thousands of images, our API provides programmatic access to the same AI pipeline.
              </p>
            </div>

            <aside className="rbo-deep-aside">
              <div className="rbo-aside-card rbo-aside-stat">
                <span className="rbo-aside-icon">⏱</span>
                <div className="rbo-aside-val">5s</div>
                <div className="rbo-aside-desc">vs 15–45 min manual editing</div>
              </div>
              <div className="rbo-aside-card rbo-aside-stat">
                <span className="rbo-aside-icon">💰</span>
                <div className="rbo-aside-val">$0</div>
                <div className="rbo-aside-desc">vs $6–56/image professionally</div>
              </div>
              <div className="rbo-aside-card rbo-aside-stat">
                <span className="rbo-aside-icon">🎯</span>
                <div className="rbo-aside-val">99%</div>
                <div className="rbo-aside-desc">Edge accuracy on clean photos</div>
              </div>
              <div className="rbo-aside-card rbo-aside-cta">
                <p>Ready to remove backgrounds?</p>
                <a href="#tool" className="rbo-aside-btn">Try Free Now ↑</a>
              </div>
              <div className="rbo-aside-card rbo-aside-formats">
                <h4>Supported Formats</h4>
                {['JPG / JPEG', 'PNG', 'WebP', 'BMP', 'GIF (first frame)'].map((f) => (
                  <div key={f} className="rbo-format-row">
                    <span className="rbo-format-check">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
                <div className="rbo-format-limit">Max file size: <strong>30MB</strong></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          USE CASES — INDUSTRY DEEP DIVES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-use-cases" id="use-cases" aria-labelledby="uc-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">WHO USES THIS</div>
          <h2 id="uc-title" className="rbo-section-title">
            Who Removes Image Backgrounds Online — and Why It Transforms Their Work
          </h2>
          <p className="rbo-section-sub">
            Background removal is the single most universally useful image editing operation across every creative and commercial discipline. Here's how different industries leverage it in 2026.
          </p>

          <div className="rbo-uc-grid">
            {[
              {
                icon: '🛍', title: 'E-commerce & Product Photography',
                colour: '#fff5f5',
                accent: '#e53e3e',
                body: 'Amazon\'s product image guidelines require pure white backgrounds for main listing images. Shopify merchants consistently report 15–40% higher conversion rates when switching from lifestyle photos to clean white-background product images. eBay sellers with professional product photos receive 23% more bids on average. Our AI processes an entire 200-product catalogue in under 17 minutes — the work that would cost $1,000–3,000 in professional retouching, done for free before your morning coffee.',
                stats: ['40% higher conversion', '200 images in 17 min', '$0 vs $1,000–3,000'],
              },
              {
                icon: '📸', title: 'Portrait & Headshot Photography',
                colour: '#fffff5',
                accent: '#d69e2e',
                body: 'Professional headshots for LinkedIn, company websites, and press kits command $150–500 per session. A key deliverable is always a clean, white or neutral background version for formal use cases. Photographers who offer "background removal included" as a standard service differentiate themselves competitively while adding only seconds of workflow time per image. Portrait clients increasingly request multiple background versions — white, grey, branded colour — for different platforms.',
                stats: ['5s per headshot', 'Multiple bg variants free', 'Zero Photoshop needed'],
              },
              {
                icon: '🎨', title: 'Graphic Design & Brand Work',
                colour: '#f0f7ff',
                accent: '#3182ce',
                body: 'Graphic designers spend a disproportionate amount of billable time on what clients see as "simple" image extraction. Removing product images from client-supplied photos, cutting out logos from screenshots, or extracting UI elements from mockups — all tasks that AI handles in seconds. The hours saved translate directly to either margin improvement or competitive pricing. Designers using AI background removal report completing client briefs 1.5–2x faster for projects involving significant image manipulation.',
                stats: ['2x faster client delivery', 'Any complexity handled', 'PNG with alpha channel'],
              },
              {
                icon: '📱', title: 'Social Media & Content Creation',
                colour: '#f0fff4',
                accent: '#38a169',
                body: 'The Instagram algorithm in 2026 rewards visually cohesive feeds — and background-removed product images on brand-coloured backgrounds have become a defining aesthetic for high-performing creator and brand accounts. TikTok creators use PNG cut-outs for green-screen effects, overlay text compositions, and branded templates. LinkedIn content with clean, professional image components consistently outperforms cluttered photography in B2B engagement metrics. Our tool is optimised for the upload-edit-post workflow that social media demands: results in seconds, not hours.',
                stats: ['Viral-ready compositions', 'Green screen exports', 'Feed-coherent aesthetics'],
              },
              {
                icon: '🏠', title: 'Real Estate & Interior Design',
                colour: '#fff5f0',
                accent: '#dd6b20',
                body: 'Virtual staging companies use background removal to cut out furniture, décor, and architectural elements for composite staging. A sofa photographed in a warehouse can be placed into a dozen different living room renders for the same fraction of the time it would take to rent and physically stage each space. Individual agents use it to extract property features — a fireplace, a kitchen island, an outdoor terrace — for use in social media highlights and property flyers without hiring a photo editor.',
                stats: ['Virtual staging workflows', 'Property highlight cuts', 'Agent self-service'],
              },
              {
                icon: '💄', title: 'Beauty, Fashion & Lifestyle',
                colour: '#fdf2f8',
                accent: '#b83280',
                body: 'Beauty brands process thousands of product images seasonally. A single lipstick SKU might need white background, lifestyle, and colour-matched background variants for different platforms and campaigns. AI background removal that handles the subtle edges of makeup packaging — including glossy reflections and subtle packaging gradients — saves art departments significant production budget. Fashion brands use it for catalogue production, lookbooks, and trend reports where consistent white or transparent backgrounds ensure the clothing reads cleanly.',
                stats: ['Seasonal catalogue scale', 'Gloss & reflection handling', 'Multi-platform variants'],
              },
              {
                icon: '🎓', title: 'Education & Academic Content',
                colour: '#f7fafc',
                accent: '#4a5568',
                body: 'Teachers and course creators routinely need clean PNG assets for presentations, worksheets, and digital learning materials. Extracting a diagram from a textbook scan, removing the background from a hand-drawn sketch to use in digital notes, or creating clean illustrated assets for LMS platforms — all tasks that AI automates instantly. EdTech companies building learning apps save significant design production budget by allowing educators to self-serve image backgrounds rather than routing every asset through a design queue.',
                stats: ['Presentation-ready assets', 'LMS-compatible PNGs', 'Self-serve for educators'],
              },
              {
                icon: '🔬', title: 'Scientific & Technical Visualisation',
                colour: '#ebf8ff',
                accent: '#2b6cb0',
                body: 'Research publications, patent applications, and technical manuals frequently require clean cut-outs of physical objects — circuit boards, mechanical components, laboratory equipment, specimens. Researchers without graphic design skills can now self-produce publication-quality transparent images from photos taken on their phones. This democratises scientific communication, reducing the dependency on institutional design support for routine image preparation.',
                stats: ['Publication-quality output', 'Lab photo to PNG', 'No design skills required'],
              },
            ].map((uc) => (
              <motion.article key={uc.title} className="rbo-uc-card" whileHover={{ y: -4 }} style={{ '--uc-accent': uc.accent } as React.CSSProperties}>
                <div className="rbo-uc-icon">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <p>{uc.body}</p>
                <div className="rbo-uc-stats">
                  {uc.stats.map((s) => <span key={s} className="rbo-uc-stat">{s}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-features" id="features" aria-labelledby="feat-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">CAPABILITIES</div>
          <h2 id="feat-title" className="rbo-section-title">
            Why Scenith's Background Remover Outperforms Alternatives
          </h2>
          <p className="rbo-section-sub">
            Not all background removers are equal. Here's what separates Scenith from the crowded field of free and paid tools in 2026.
          </p>

          <div className="rbo-feat-grid">
            {[
              { icon: '🧵', title: 'Strand-Level Hair Precision', body: 'Matting networks trace individual hair strands, flyaways, and curls at sub-pixel resolution. No more halo effects, no more blocked-out locks. The difference between a tool that "works" and one that produces professional results often comes down entirely to hair handling.' },
              { icon: '🪟', title: 'Transparent Object Support', body: 'Glass, crystal, acrylic, translucent plastics — our model handles partial transparency by computing mixed alpha values rather than binary cut-outs. Your champagne flute stays see-through; your jewellery retains its lustre.' },
              { icon: '⚡', title: '5-Second Cloud Processing', body: 'GPU-accelerated inference on dedicated cloud hardware means your image is processed and ready before you\'ve looked away. No upload queues, no "processing" spinners that run for minutes. Average end-to-end time: 4.8 seconds.' },
              { icon: '🖼', title: 'Full Resolution Output', body: 'Your PNG downloads at the exact same dimensions as your uploaded source. No artificial downscaling, no resolution caps on the free tier, no watermarks at any resolution. Upload a 4000×5000px product shot; download a 4000×5000px transparent PNG.' },
              { icon: '🎨', title: 'Edge Anti-Aliasing', body: 'Binary segmentation produces jagged, pixelated edges. Our alpha matting generates smooth, natural transitions — identical to the anti-aliasing Photoshop\'s Select & Mask produces after significant manual refinement. Edges look photographic, not cut-out.' },
              { icon: '🌍', title: 'Any Device, Any Browser', body: 'Full functionality across Chrome, Safari, Firefox, and Edge on desktop, tablet, and mobile. The upload interface is touch-optimised for iPhone and Android. Processing happens server-side, so even a 3-year-old budget phone delivers identical results.' },
              { icon: '🔒', title: 'Zero Data Retention', body: 'We process your image and delete it. There is no database of user images, no model training on your content, no "30-day deletion" policy with a 30-day window where your images exist on a server. Processing is ephemeral by design.' },
              { icon: '🏬', title: 'Marketplace Compliance', body: 'Output specifications match Amazon\'s main image requirements (pure white or transparent background, subject filling 85%+ of frame) and comply with Shopify, eBay, Etsy, and Walmart marketplace image standards out of the box.' },
              { icon: '🔄', title: 'Workflow Integrations', body: 'Download your PNG and drop it directly into Canva, Figma, Adobe Illustrator, PowerPoint, Google Slides, or any design tool that accepts PNG with transparency. No format conversion needed — PNG with alpha channel is the universal design asset format.' },
            ].map((f) => (
              <motion.article key={f.title} className="rbo-feat-card" whileHover={{ scale: 1.02 }}>
                <span className="rbo-feat-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-comparison" id="comparison" aria-labelledby="comp-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">VS ALTERNATIVES</div>
          <h2 id="comp-title" className="rbo-section-title">
            Remove Image Background Online: Complete Tool Comparison 2026
          </h2>
          <p className="rbo-section-sub">
            We benchmarked the major tools across price, output quality, edge accuracy, and workflow compatibility. Here's what we found.
          </p>

          <div className="rbo-comp-wrap">
            <table className="rbo-comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="rbo-col-hl">Scenith (Free)</th>
                  <th>Remove.bg</th>
                  <th>Canva Pro</th>
                  <th>Adobe Express</th>
                  <th>Photoshop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', '✅ $0 forever', '❌ $9/image HD', '❌ $12.99/month', '❌ $9.99/month', '❌ $54.99/month'],
                  ['Full Resolution Free', '✅ Always', '❌ Requires payment', '❌ Subscription only', '❌ Subscription only', '✅ With subscription'],
                  ['Watermark', '✅ None ever', '❌ Free tier watermarked', '❌ Pro required', '❌ Free tier watermarked', '✅ None'],
                  ['Processing Speed', '✅ ~5 seconds', '✅ ~5 seconds', '⚠️ 8–15 seconds', '⚠️ 10–20 seconds', '❌ Minutes (manual)'],
                  ['Hair & Fur Quality', '✅ Excellent', '✅ Excellent', '⚠️ Good', '⚠️ Good', '✅ Excellent (manual)'],
                  ['Transparent Objects', '✅ Yes', '⚠️ Partial', '⚠️ Basic', '⚠️ Basic', '✅ Yes (manual)'],
                  ['Mobile Support', '✅ Full', '✅ App available', '✅ App available', '✅ App available', '⚠️ iPad only'],
                  ['No Sign-Up Required', '✅ Yes', '❌ Account needed', '❌ Account needed', '❌ Account needed', '❌ Account needed'],
                  ['Commercial Use (Free)', '✅ Yes', '❌ Requires payment', '❌ Requires subscription', '❌ Requires subscription', '✅ With subscription'],
                  ['Bulk Processing', '⚠️ Sequential', '✅ API available', '⚠️ Limited', '⚠️ Limited', '✅ Batch actions'],
                ].map(([feat, ...vals]) => (
                  <tr key={feat as string}>
                    <td><strong>{feat}</strong></td>
                    {vals.map((v, i) => (
                      <td key={i} className={i === 0 ? 'rbo-col-hl' : ''}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rbo-comp-note">
            <strong>Bottom line:</strong> Scenith is the only tool that offers full-resolution, watermark-free, commercially usable background removal with no payment and no account required. For volume work requiring an API or complex editorial retouching, paid tools have specific advantages — but for the vast majority of use cases, Scenith delivers equal or superior results for free.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ADVANCED TIPS & TECHNIQUES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-tips" id="pro-tips" aria-labelledby="tips-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">PRO TECHNIQUES</div>
          <h2 id="tips-title" className="rbo-section-title">
            Advanced Techniques for Getting Perfect Background Removal Every Time
          </h2>
          <p className="rbo-section-sub">
            AI handles 95% of images flawlessly without any preparation. For the remaining 5% — complex situations, challenging lighting, similar foreground/background colours — these professional techniques guarantee clean results.
          </p>

          <div className="rbo-tips-grid">
            {[
              {
                n: '01', title: 'Shoot for the Algorithm',
                body: 'The single most effective way to get perfect AI background removal is to control it at the shoot stage, not in post. Use a background with high contrast to your subject — a photographer in a white shirt should shoot against a dark backdrop, not a light grey wall. The AI\'s confidence scores are dramatically higher when foreground and background have distinct colour or luminosity profiles. A $15 backdrop paper roll from Amazon pays for itself in time saved on post-processing within the first shoot.',
              },
              {
                n: '02', title: 'Lighting Quality Over Quantity',
                body: 'Harsh shadows cast by the subject onto the background create ambiguous regions where the boundary between subject shadow and background is difficult to segment cleanly. Diffused, even lighting — two softboxes at 45-degree angles — eliminates most edge-case boundary problems. For product photography without a studio, shooting near a large window on an overcast day produces the flat, even illumination that AI models prefer. If shadows are unavoidable, ensure they fall away from subject edges rather than along them.',
              },
              {
                n: '03', title: 'Optimal Resolution for Best Results',
                body: 'AI segmentation models operate more accurately on higher-resolution source images because edge pixels at native resolution contain more spatial information. A 300×300px thumbnail of a product gives the model 4 pixels to work with at each edge. A 2000×2000px version of the same product gives it 26 pixels — 6.5× more information to characterise the transition. Upload the highest resolution version you have; the processing time difference is negligible (2–3 seconds), and edge quality improvement is significant.',
              },
              {
                n: '04', title: 'Handling White Products on White Backgrounds',
                body: 'The notorious "white product on white background" problem — common with jewellery, skincare packaging, and electronics — is the hardest case for any background removal tool. The solution: photograph against light grey or light blue backgrounds rather than pure white, even if your final output requires a white background. The subtle contrast gives the model enough signal to identify edges correctly. In post-processing, the grey/blue background is trivially removed and you can replace it with pure white if needed.',
              },
              {
                n: '05', title: 'Post-Processing the PNG for Polish',
                body: 'Even excellent AI background removal can leave minor fringing — a faint colour tint from the original background bleeding slightly into edge pixels. In Photoshop or Affinity Photo, the "Decontaminate Colours" option in Select & Mask (or "Remove Colour Fringe" in Affinity) eliminates this in one click. In Canva, adding a white or coloured background behind your transparent PNG and then exporting as JPG for platforms that don\'t support transparency eliminates any visible fringing through compositing.',
              },
              {
                n: '06', title: 'Batch Workflow Strategies',
                body: 'For processing catalogues of 50–500 images, develop a naming and organisation system before starting. Download each result immediately after processing and rename with a consistent convention (product-SKU-nobg.png). Consider processing in batches of 20–30 images, which allows you to quality-check periodically and identify any image categories (specific material types, lighting conditions) that need reshooting rather than discovering it at the end of a 500-image batch.',
              },
            ].map((tip) => (
              <article key={tip.n} className="rbo-tip-card">
                <div className="rbo-tip-num">{tip.n}</div>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PLATFORM GUIDE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-platforms" id="platform-guide" aria-labelledby="plat-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">PLATFORM GUIDE</div>
          <h2 id="plat-title" className="rbo-section-title">
            Platform-Specific Background Requirements for E-commerce & Social Media
          </h2>
          <p className="rbo-section-sub">
            Every major platform has specific image requirements. Here's exactly what you need to know to be compliant in 2026.
          </p>

          <div className="rbo-plat-grid">
            {[
              {
                platform: 'Amazon', icon: '📦',
                requirements: [
                  'Main image: pure white background (RGB 255, 255, 255)',
                  'Subject must fill 85%+ of the image frame',
                  'No text, logos, or watermarks in main image',
                  'Minimum 1000×1000px for zoom functionality',
                  'JPEG preferred; PNG accepted for secondary images',
                ],
                tip: 'Use our tool to remove background, then composite onto a white canvas in Canva or Photoshop before uploading.',
              },
              {
                platform: 'Shopify', icon: '🛒',
                requirements: [
                  'No mandatory background colour (white recommended)',
                  'Consistent background across all products for brand cohesion',
                  'Minimum 800×800px recommended',
                  'Square aspect ratio preferred (1:1)',
                  'PNG with transparency supported in product galleries',
                ],
                tip: 'Transparent PNG uploads directly — Shopify renders your theme background colour behind it automatically.',
              },
              {
                platform: 'Instagram', icon: '📷',
                requirements: [
                  'Feed posts: 1080×1080px (square) or 1080×1350px (portrait)',
                  'No background requirement, but consistent aesthetic wins',
                  'Stories: 1080×1920px, PNG with transparency for sticker-style posts',
                  'Reels cover: 1080×1920px',
                  'Product tags require catalogue with consistent imagery',
                ],
                tip: 'Export transparent PNG and composite onto branded colour backgrounds in Canva for cohesive feed aesthetics.',
              },
              {
                platform: 'eBay', icon: '🏷',
                requirements: [
                  'Main image: white or light grey background strongly recommended',
                  'No borders, text overlays, or watermarks',
                  'Minimum 500px on longest side',
                  'Multiple angles encouraged for higher bids',
                  'Thumbnail visibility critical — white backgrounds improve contrast',
                ],
                tip: 'eBay thumbnails are small — clean white backgrounds ensure your product reads clearly at 80×80px scale.',
              },
              {
                platform: 'Etsy', icon: '🎁',
                requirements: [
                  'No mandatory background requirements',
                  'Lifestyle and styled photos perform better than pure white',
                  'Cover image: 2000×2000px preferred',
                  'Consistent brand aesthetic across shop listings',
                  'Transparent PNGs can be composited onto various scene backgrounds',
                ],
                tip: 'Remove background, then use scene generators or styled stock backgrounds to create lifestyle variants without reshooting.',
              },
              {
                platform: 'LinkedIn', icon: '💼',
                requirements: [
                  'Profile photo: 400×400px minimum, transparent not applicable (JPG)',
                  'Company logo: 300×300px PNG with transparency supported',
                  'Post images: 1200×627px for link previews',
                  'Document/carousel: consistent visual treatment recommended',
                  'Background-removed headshots project more professionalism',
                ],
                tip: 'LinkedIn company pages support transparent logo PNGs — upload directly and the platform renders on its background.',
              },
            ].map((p) => (
              <div key={p.platform} className="rbo-plat-card">
                <div className="rbo-plat-header">
                  <span className="rbo-plat-icon">{p.icon}</span>
                  <h3>{p.platform}</h3>
                </div>
                <ul className="rbo-plat-list">
                  {p.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="rbo-plat-tip">
                  <span className="rbo-plat-tip-label">💡 Scenith tip:</span>
                  {p.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-testimonials" id="testimonials" aria-labelledby="test-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">REVIEWS</div>
          <h2 id="test-title" className="rbo-section-title">
            What 50,000+ Users Say About Removing Image Backgrounds Online
          </h2>
          <p className="rbo-section-sub">
            Real feedback from e-commerce sellers, designers, photographers, and creators who use Scenith daily.
          </p>

          <div className="rbo-test-grid">
            {[
              { name: 'Anjali Mehta', role: 'Shopify Store Owner, Mumbai', stars: 5, text: 'I was paying a freelancer ₹15,000/month to edit my product photos. Scenith does the same work in seconds for free. My conversion rate on Shopify went up 28% after I updated all my product images with clean transparent backgrounds. The hair and edge detail on my jewellery photos is genuinely stunning.' },
              { name: 'Thomas Brennan', role: 'Amazon FBA Seller, Dublin', stars: 5, text: 'I run a 600-SKU Amazon store. Processing that many images manually would be a full-time job. Scenith lets me prep the entire catalogue for a new product launch in a single afternoon. The white background output meets Amazon\'s requirements perfectly without any additional editing.' },
              { name: 'Priya Nambiar', role: 'Freelance Brand Designer, Bangalore', stars: 5, text: 'The tool that changed my workflow more than any other in 2025. Client provides a product shot taken on their kitchen table — I remove the background in 5 seconds, drop it onto a branded colour, and suddenly it looks like a professional studio shot. Clients think I\'ve done hours of Photoshop work.' },
              { name: 'Lena Fischer', role: 'Social Media Manager, Berlin', stars: 5, text: 'We manage Instagram for 12 brand clients. Consistent, clean product images are non-negotiable for feed aesthetics. Scenith processes our weekly content batch in minutes. The quality is genuinely indistinguishable from what our previous retouching service was charging €200/week to deliver.' },
              { name: 'Rahul Gupta', role: 'Etsy Seller, Jaipur', stars: 5, text: 'My handmade textile products have complex backgrounds when I photograph them at home. Scenith removes even the most cluttered backgrounds cleanly. My shop\'s click-through rate increased by 35% after I updated my listing photos, and Etsy featured two of my products in their curated collections.' },
              { name: 'Sophie Laurent', role: 'Photographer, Paris', stars: 5, text: 'I shoot executive headshots. Every client wants a version with a clean background for their LinkedIn and company website bio. I used to spend 20 minutes per image in Photoshop. Now I process entire sessions in Scenith while the client selects their favourite shots. It\'s given me back hours every week.' },
            ].map((t) => (
              <motion.blockquote key={t.name} className="rbo-test-card" whileHover={{ y: -4 }}>
                <div className="rbo-test-stars">{'★'.repeat(t.stars)}</div>
                <p>"{t.text}"</p>
                <cite>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-faq" id="faq" aria-labelledby="faq-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">FAQ</div>
          <h2 id="faq-title" className="rbo-section-title">
            Frequently Asked Questions — Remove Image Background Online
          </h2>

          <div className="rbo-faq-grid">
            {[
              { q: 'How do I remove the background from an image for free?', a: 'Upload your image to Scenith\'s free AI background remover using the tool on this page. The AI automatically detects your subject, removes the background, and delivers a transparent PNG file you can download immediately — no payment, no subscription, no watermark. The entire process takes under 5 seconds.' },
              { q: 'What is the best website to remove image background online?', a: 'Scenith consistently ranks among the top free background removal tools in independent comparisons. Unlike Remove.bg (which charges for full-resolution downloads) or Canva (which requires a Pro subscription), Scenith provides full-resolution, watermark-free transparent PNGs completely free. The AI quality is comparable to paid tools for the vast majority of images.' },
              { q: 'Can I remove the background from an image without Photoshop?', a: 'Yes — that\'s exactly what Scenith is built for. Upload your image to our browser-based tool. The AI removes the background in seconds and you download a professional transparent PNG. No software installation, no Photoshop subscription, no design skills required.' },
              { q: 'How do I make an image background transparent online?', a: 'Upload your JPG or PNG to Scenith. The AI identifies your subject and replaces the background with transparency, saving as a PNG file. The PNG alpha channel stores the transparency information — download it and use in any design tool or platform that supports transparent images.' },
              { q: 'Does removing image background reduce quality?', a: 'No — Scenith outputs at the exact same resolution as your source image. We don\'t downscale or compress the output. The only change is that background pixels are replaced with transparency. Edge pixels receive anti-aliased alpha values for natural-looking transitions rather than harsh cut-outs.' },
              { q: 'What image formats can I remove backgrounds from?', a: 'We support JPG, JPEG, PNG, WebP, BMP, and GIF (first frame). Maximum file size is 30MB. For best results, upload the highest resolution version of your image. Output is always a PNG file with a transparent alpha channel.' },
              { q: 'Is removing image backgrounds online safe?', a: 'Scenith processes your image ephemerally — it\'s decrypted, processed, and the result returned in seconds. Your original image is never stored in a database. We don\'t use customer images to train AI models, and we don\'t share data with third parties. All transfers use TLS 1.3 encryption.' },
              { q: 'Can I use background-removed images for commercial purposes?', a: 'Yes. All images processed through Scenith come with full commercial use rights at no charge. Use them for product listings, marketing campaigns, client deliverables, advertising, or any commercial purpose. No attribution required.' },
              { q: 'How does AI background removal handle hair?', a: 'Our AI uses a dedicated matting network that processes edge regions at high resolution, generating fractional alpha values for individual hair strands rather than making binary foreground/background decisions. The result is natural-looking hair with soft, feathered edges rather than a harsh cut-out effect.' },
              { q: 'What\'s the difference between background removal and background blur?', a: 'Background removal makes pixels transparent, creating a PNG file you can use on any background. Background blur (bokeh effect) keeps the original background but softens it. Background removal is what you need for product photography, marketing assets, and compositing. Background blur is better suited for portrait photography where you want to create depth-of-field effects.' },
              { q: 'Can I remove background from multiple images at once?', a: 'Currently, Scenith processes one image at a time through the browser interface. Since each image takes about 5 seconds, a batch of 20 images takes under 2 minutes to process sequentially. For high-volume automated processing, our API allows programmatic background removal — contact us for API access.' },
              { q: 'Why is my background removal result leaving a colour fringe?', a: 'Colour fringing (a thin halo of the original background colour around the subject) occurs when background colours are similar to subject edge colours, or in high-contrast lighting. To fix: in Canva, composite onto a white background and re-export. In Photoshop, use Layer > Matting > Decontaminate Colours. To prevent it: ensure strong contrast between subject and background when photographing.' },
            ].map((item) => (
              <article key={item.q} className="rbo-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          RELATED TOOLS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-related" id="related" aria-labelledby="rel-title">
        <div className="rbo-container">
          <div className="rbo-section-tag">EXPLORE MORE</div>
          <h2 id="rel-title" className="rbo-section-title">Complete Your Workflow with Scenith Tools</h2>
          <p className="rbo-section-sub">Background removal is step one. Here's what professional creators do next.</p>
          <div className="rbo-related-grid">
            {[
              { href: '/tools/background-removal', icon: '✂️', title: 'Background Remover (Main)', desc: 'The full background removal studio — batch processing, edge refinement controls, and advanced export options all in one place.' },
              { href: '/tools/image-editing', icon: '🎨', title: 'AI Image Editor', desc: 'Add new backgrounds, text overlays, brand colours, and creative effects to your transparent PNG. The natural next step after background removal.' },
              { href: '/tools/video-speed-modifier', icon: '⚡', title: 'Video Speed Modifier', desc: 'Apply slow-motion, time-lapse, or any custom speed to product demo videos and content for social media.' },
            ].map((r) => (
              <a key={r.title} href={r.href} className="rbo-related-card">
                <span className="rbo-related-icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <span className="rbo-related-arrow">Use tool →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="rbo-section rbo-final-cta" id="get-started" aria-labelledby="cta-title">
        <div className="rbo-container">
          <motion.div
            className="rbo-cta-box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rbo-cta-tag">START FREE</div>
            <h2 id="cta-title">Remove Your First Image Background Free</h2>
            <p>No sign-up. No credit card. No watermark. Just upload and download. Join 50,000+ users who trust Scenith for professional image backgrounds.</p>
            <div className="rbo-cta-btns">
              <a href="#tool" className="rbo-cta-primary">
                ✂️ Remove Background Now — Free
              </a>
              <a href="/pricing" className="rbo-cta-secondary">View Paid Plans →</a>
            </div>
            <div className="rbo-cta-proof">
              <span>⚡ 5-second results</span>
              <span>🔒 No account needed</span>
              <span>💼 Commercial use included</span>
              <span>🎯 No watermark</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cross-tool promo bar ── */}
      <div className="rbo-promo-bar">
        <p>💡 <strong>Creator Plan:</strong> Get 500 removals/month + 4K quality + AI Video tools from ₹349/mo. Less than one professional photo edit.</p>
        <a href="/pricing" className="rbo-promo-link">Compare Plans →</a>
      </div>

      {/* ── Upgrade popup ── */}
      {showUpgradePopup && <UpgradePopup onClose={() => setShowUpgradePopup(false)} />}
    </div>
  );
};

export default RemoveImageBackgroundOnlineClient;