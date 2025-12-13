// pages/terms-and-conditions.tsx (or app/terms-and-conditions/page.tsx)

"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import '../../../../styles/LandingPage.css';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Scenith</title>
        <meta name="description" content="Read the Terms and Conditions for using Scenith's AI-powered content creation platform." />
        <link rel="canonical" href="https://scenith.in/terms-and-conditions" />
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
            <h1>Terms & <span className="highlight">Conditions</span></h1>
            <p>Last updated: December 13, 2025</p>
          </motion.div>
        </section>

        <section className="tools-showcase-section" style={{ padding: '40px 20px' }}>
          <motion.div
            style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Scenith (the "Service"), operated by Scenith ("we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Scenith is a web-based AI-powered platform providing tools for video editing, image editing, AI voice generation, subtitle generation, background removal, media conversion, compression, and more. The Service is provided on a freemium basis with optional paid upgrades.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 13 years old to use the Service.
            </p>

            <h2>4. User Content</h2>
            <p>
              You retain ownership of any content you upload or create ("User Content"). By uploading User Content, you grant Scenith a worldwide, non-exclusive, royalty-free license to host, store, process, and display it solely to provide the Service. You are solely responsible for your User Content and warrant that it does not infringe third-party rights.
            </p>

            <h2>5. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for illegal purposes</li>
              <li>Upload harmful code or viruses</li>
              <li>Infringe intellectual property rights</li>
              <li>Harass or abuse others</li>
              <li>Attempt to reverse-engineer or circumvent Service limitations</li>
              <li>Use automated tools to scrape or overload the Service</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding User Content) are owned by Scenith and protected by copyright and other laws.
            </p>

            <h2>7. Free and Paid Plans</h2>
            <p>
              Free tier includes basic access without watermarks. Paid plans offer additional features. All payments are non-refundable except where required by law. Subscriptions auto-renew unless canceled.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may suspend or terminate your access at any time for violations of these Terms, without refund for paid plans.
            </p>

            <h2>9. Disclaimer and Limitation of Liability</h2>
            <p>
              The Service is provided "as is" without warranties. Scenith is not liable for any indirect damages. Total liability shall not exceed amounts paid by you in the prior 12 months.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Disputes shall be resolved in the courts of India.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We may update these Terms. Continued use after changes constitutes acceptance.
            </p>

            <h2>12. Contact</h2>
            <p>
              For questions: <a href="mailto:scenith.videoeditor@gmail.com">scenith.videoeditor@gmail.com</a>
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}