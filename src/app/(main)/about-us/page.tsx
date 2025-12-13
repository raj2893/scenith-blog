// pages/about-us.tsx (or app/about-us/page.tsx if using App Router)

"use client";

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../../../../styles/LandingPage.css';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Scenith | AI-Powered Video Editing & Content Creation Platform</title>
        <meta name="description" content="Learn more about Scenith, an AI-powered platform designed to empower creators with professional video editing, voice generation, subtitles, and more tools." />
        <link rel="canonical" href="https://scenith.in/about-us" />
      </Head>

      <div className="landing-page">
        <div className="particle-background">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <section className="hero-section" style={{ paddingBottom: '100px' }}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About <span className="highlight">Scenith</span></h1>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
              Empowering creators worldwide with intuitive, AI-powered tools for professional content creation.
            </p>
          </motion.div>
        </section>

        <section className="tools-showcase-section" style={{ padding: '80px 20px' }}>
          <div className="section-header">
            <h2>Our Story</h2>
            <p className="section-subtitle">
              Scenith was founded in 2024 with a simple mission: make professional-grade video editing and content creation accessible to everyone.
            </p>
          </div>

          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              We believe that great ideas shouldn't be limited by complex software or expensive tools. Whether you're a YouTuber, social media influencer, marketer, educator, or just someone with a story to tell, Scenith provides everything you need in one intuitive platform.
            </p>
            <p>
              Starting with core AI features like lifelike voice generation and automatic subtitles, we've grown to offer 7+ powerful tools — all designed to save you time while delivering stunning results.
            </p>
            <p>
              Today, over 10,000 creators trust Scenith to bring their visions to life. We're proud to be a completely web-based platform with no downloads required, no watermarks on exports, and a generous free tier to get you started.
            </p>
          </motion.div>

          <div className="section-header" style={{ marginTop: '80px' }}>
            <h2>Our Mission</h2>
          </div>

          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              To democratize content creation by providing fast, affordable, and easy-to-use AI-powered tools that help creators focus on their message — not the technical details.
            </p>
          </motion.div>

          <div className="section-header" style={{ marginTop: '80px' }}>
            <h2>Contact Us</h2>
          </div>

          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Have questions or feedback? We'd love to hear from you.<br />
              Email: <a href="mailto:scenith.videoeditor@gmail.com" style={{ color: '#FF6B6B' }}>scenith.videoeditor@gmail.com</a>
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}