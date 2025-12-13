// pages/contact-us.tsx (or app/contact-us/page.tsx)

"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import '../../../../styles/LandingPage.css';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Scenith | Get in Touch</title>
        <meta name="description" content="Contact the Scenith team for support, feedback, or inquiries." />
        <link rel="canonical" href="https://scenith.in/contact-us" />
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

        <section className="hero-section" style={{ paddingBottom: '150px' }}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact <span className="highlight">Scenith</span></h1>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              We're here to help! Reach out for support, feature requests, partnerships, or just to say hello.
            </p>
          </motion.div>
        </section>

        <section className="tools-showcase-section" style={{ padding: '80px 20px' }}>
          <motion.div
            style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ marginBottom: '30px' }}>Get in Touch</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
              Email us directly at:
            </p>
            <a href="mailto:scenith.videoeditor@gmail.com" className="cta-button primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
              scenith.videoeditor@gmail.com
            </a>
            <p style={{ marginTop: '40px', opacity: '0.8' }}>
              We typically respond within 24-48 hours.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}