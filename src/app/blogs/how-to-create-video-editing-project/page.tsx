"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../styles/HowToCreateVideoEditingProject.module.css';

export default function HowToCreateVideoEditingProject() {
  const [showQuickTips, setShowQuickTips] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('.nav-bar')?.getBoundingClientRect().height || 60;
      window.scrollTo({
        top: section.offsetTop - navHeight - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>How to Create a Video Editing Project in Scenith (2025)</title>
        <meta
          name="description"
          content="Learn how to create a video editing project in Scenith with this beginner-friendly guide. Discover easy steps to start your video project and choose the perfect settings."
        />
        <meta
          name="keywords"
          content="create video editing project, Scenith, video editing for beginners, start video project, video editing settings, YouTube video editing"
        />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="How to Create a Video Editing Project in Scenith (2025)"
        />
        <meta
          property="og:description"
          content="Discover how to start a video editing project in Scenith with simple steps. Learn to choose project settings for YouTube, Instagram, and more."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://scenith.in/blogs/how-to-create-video-editing-project"
        />
        <meta property="og:image" content="/images/create-project-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Create a Video Editing Project in Scenith (2025)"
        />
        <meta
          name="twitter:description"
          content="Discover how to start a video editing project in Scenith with simple steps. Learn to choose project settings for YouTube, Instagram, and more."
        />
        <meta name="twitter:image" content="/images/create-project-og.jpg" />
        <link
          rel="canonical"
          href="https://scenith.in/blogs/how-to-create-video-editing-project"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How to Create a Video Editing Project in Scenith (2025)',
              description:
                'Learn how to create a video editing project in Scenith with this beginner-friendly guide. Discover easy steps to start your video project and choose the perfect settings.',
              author: {
                '@type': 'Organization',
                name: 'Scenith',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Scenith',
                logo: {
                  '@type': 'ImageObject',
                  url: '/images/logo.png',
                },
              },
              datePublished: '2025-08-26',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/blogs/how-to-create-video-editing-project',
              },
              image: [
                '/images/screenshot-create-button.jpg',
                '/images/screenshot-project-settings.jpg',
                '/images/screenshot-project-editor.jpg',
              ],
            }),
          }}
        />
      </Head>
      <article className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>
            How to Create a Video Editing Project in Scenith (2025)
          </h1>
          <div className={styles.blogMeta}>
            <span className={styles.date}>Published: August 26, 2025</span>
            <span className={styles.readTime}>• 3 min read</span>
          </div>
        </header>

        <section className={styles.blogSection}>
          <div className={styles.attentionGrabber}>
            <p className={styles.introText}>
              <strong>Ready to make videos?</strong> Starting a video editing project in Scenith is so easy, even beginners can create professional-looking videos in minutes!
            </p>
          </div>

          <div className={styles.quickDecision}>
            <div className={`${styles.decisionBox} ${styles.recommended}`}>
              <div className={styles.decisionHeader}>
                <span className={styles.badge}>⚡ QUICK START</span>
                <h3>Want to create a project now?</h3>
              </div>
              <p>Jump to the <strong>Step-by-Step Guide</strong> to start your video editing project.</p>
              <button
                className={styles.quickCta}
                onClick={() => scrollToSection('create-project-guide')}
              >
                Show Me How to Create a Project →
              </button>
            </div>
            <div className={styles.decisionBox}>
              <h3>Need quick project tips?</h3>
              <p>Discover 5 tips to set up your video project like a pro.</p>
              <button
                className={styles.secondaryCta}
                onClick={() => setShowQuickTips(!showQuickTips)}
              >
                Show Quick Tips
              </button>
            </div>
          </div>

          {showQuickTips && (
            <div className={styles.methodOverview}>
              <h3>5 Quick Tips for Creating a Project:</h3>
              <div className={styles.methodGrid}>
                <div className={styles.methodPreview}>
                  <div className={styles.methodIcon}>📝</div>
                  <div>Name Your Project<br /><span>Keep it memorable</span></div>
                </div>
                <div className={styles.methodPreview}>
                  <div className={styles.methodIcon}>📏</div>
                  <div>Choose Dimensions<br /><span>Match your platform</span></div>
                </div>
                <div className={styles.methodPreview}>
                  <div className={styles.methodIcon}>🎞️</div>
                  <div>Select FPS<br /><span>24-60 for smooth videos</span></div>
                </div>
                <div className={styles.methodPreview}>
                  <div className={styles.methodIcon}>📺</div>
                  <div>Use Presets<br /><span>Perfect for social media</span></div>
                </div>
                <div className={styles.methodPreview}>
                  <div className={styles.methodIcon}>✅</div>
                  <div>Login First<br /><span>Save your work</span></div>
                </div>
              </div>
            </div>
          )}

          <p>
            <strong>Why this matters:</strong> Creating a video editing project is the first step to turning your ideas into stunning videos. Scenith’s user-friendly dashboard makes it simple to set up projects for YouTube, Instagram, TikTok, or any platform, even if you’ve never edited a video before.
          </p>
        </section>

        <section className={styles.blogSection} id="create-project-guide">
          <h2>🚀 The Game-Changer: Starting a Video Project with Scenith</h2>
          <div className={`${styles.methodCard} ${styles.featured}`}>
            <div className={styles.methodHeader}>
              <span className={`${styles.difficulty} ${styles.easy}`}>
                Difficulty: Beginner-Friendly
              </span>
              <span className={styles.time}>Time: 2 minutes</span>
              <span className={styles.accuracy}>Impact: Start Right</span>
            </div>

            <p>
              Whether you’re making a YouTube vlog, an Instagram Reel, or a TikTok video, Scenith’s dashboard helps you start your video editing project with ease. This guide walks you through creating a project, choosing the right settings, and understanding your options.
            </p>

            <h3>Understanding Scenith’s Project Creation</h3>
            <p>
              Scenith’s dashboard features a “Create” button that opens a dropdown menu with everything you need to start a project. You can set a project name, choose dimensions (width and height), and select frames per second (FPS). Plus, Scenith offers presets for popular platforms to save time.
            </p>
            <img
              src="/images/DashboardSS.png"
              alt="Scenith Dashboard with Create Button"
              className={styles.screenshot}
            />

            <div className={styles.stepByStep}>
              <h4>How to Create a Video Editing Project:</h4>
              <p>Follow these simple steps to start your project in Scenith:</p>
              <div className={styles.stepsVisual}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div>Click “Create”</div>
                </div>
                <div className={styles.stepArrow}>→</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div>Enter Project Name</div>
                </div>
                <div className={styles.stepArrow}>→</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div>Choose Settings</div>
                </div>
                <div className={styles.stepArrow}>→</div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div>Create & Edit</div>
                </div>
              </div>
            </div>

            <p>
              Here’s a detailed breakdown of each step:
            </p>
            <ul>
              <li>
                <strong>Step 1: Click “Create”</strong> – On the Scenith dashboard, find the “Create” button with a plus icon in the top-right corner of the “My Projects” section. Click it to open the project creation menu.
                <img
                  src="/images/CreateSS.png"
                  alt="Scenith Create Button"
                  className={styles.screenshot}
                />
              </li>
              <li>
                <strong>Step 2: Enter Project Name</strong> – Type a memorable name for your project, like “My YouTube Vlog” or “TikTok Dance Video.” This helps you find it later.
              </li>
              <li>
                <strong>Step 3: Choose Settings</strong> – Set the width, height, and FPS. Use presets like “YouTube (1920x1080, 30 FPS)” or “Instagram Reels (1080x1920, 60 FPS)” for quick setup, or enter custom values. For example, choose 1920x1080 for widescreen videos or 1080x1920 for vertical content. FPS (frames per second) controls smoothness—24 or 30 FPS is great for most videos, while 60 FPS suits fast-paced content.
                <img
                  src="/images/ProjectSettingSS.png"
                  alt="Scenith Project Creation Dropdown with Settings"
                  className={styles.screenshot}
                />
              </li>
              <li>
                <strong>Step 4: Create & Edit</strong> – Click the “Create” button in the dropdown. If you’re logged in, Scenith saves your project and takes you to the editor to start adding videos, images, or text.
                <img
                  src="/images/ProjectEditorSS.png"
                  alt="Scenith Project Editor Interface"
                  className={styles.screenshot}
                />
              </li>
            </ul>

            <p>
              <strong>Note:</strong> You need to be logged in to save your project. If you’re not logged in, Scenith will prompt you to sign in before creating the project. Free accounts (Basic) can create up to 15 projects with a max of 60 FPS, while Creator or Studio plans offer unlimited projects and higher FPS options.
            </p>

            <div className={styles.socialProof}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50,000+</div>
                <div className={styles.statLabel}>Creators using Scenith</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>2 min</div>
                <div className={styles.statLabel}>To start a project</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>4.9/5</div>
                <div className={styles.statLabel}>User rating</div>
              </div>
            </div>

            <div className={styles.prosCons}>
              <div className={styles.pros}>
                <h4>✅ Why Create Projects in Scenith:</h4>
                <ul>
                  <li>Beginner-friendly interface</li>
                  <li>Presets for YouTube, Instagram, TikTok, and more</li>
                  <li>Customizable dimensions and FPS</li>
                  <li>Fast setup in under 2 minutes</li>
                  <li>Free to start, no subscription needed</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ The Only Catch:</h4>
                <ul>
                  <li>Free accounts limited to 15 projects and 60 FPS max</li>
                </ul>
              </div>
            </div>

            <div className={styles.ctaPrimary}>
              <Link href="https://scenith.in/dashboard">
                <button className={styles.ctaButton}>Start Your Project with Scenith! →</button>
              </Link>
              <p className={styles.ctaSubtext}>Join 50,000+ creators making videos with Scenith</p>
            </div>
          </div>
        </section>

        <section className={styles.blogSection}>
          <h2>Why Project Settings Matter for Social Media</h2>
          <p>
            Choosing the right project settings ensures your video looks great on your target platform. For example, YouTube videos often use 1920x1080 (widescreen), while Instagram Reels and TikTok prefer 1080x1920 (vertical). Scenith’s presets make it easy to match these requirements, and the FPS setting (24, 30, or 60) ensures smooth playback for your audience. Starting with the right setup saves time and boosts viewer engagement.
          </p>
        </section>

        <section className={styles.blogSection}>
          <h2>Your Project Creation Challenge</h2>
          <p>
            Ready to try it out? Create a new project in Scenith for a platform like YouTube or Instagram Reels. Use a preset to set the dimensions and FPS, name your project, and jump into the editor. Not sure where to start? Check out our <Link href="/blogs/how-to-trim-and-split-video">next tutorial</Link> on trimming and splitting videos to keep building your skills.
          </p>
          <div className={styles.ctaPrimary}>
            <Link href="https://scenith.in/dashboard">
              <button className={styles.ctaButton}>Start the Challenge with Scenith! →</button>
            </Link>
            <p className={styles.ctaSubtext}>No subscription needed—try it now!</p>
          </div>
        </section>

        <section className={styles.blogSection}>
          <h2>Common Questions About Creating Projects</h2>
          <div className={styles.concernsGrid}>
            <div className={styles.concernCard}>
              <h4>🤔 “What dimensions should I use?”</h4>
              <p>
                <strong>Answer:</strong> Use presets like 1920x1080 for YouTube or 1080x1920 for Instagram Reels and TikTok. Scenith’s dropdown has options for all major platforms.
              </p>
            </div>
            <div className={styles.concernCard}>
              <h4>🎥 “What’s FPS, and why does it matter?”</h4>
              <p>
                <strong>Answer:</strong> FPS (frames per second) controls video smoothness. Use 24 or 30 for standard videos, or 60 for fast-paced content like Reels.
              </p>
            </div>
            <div className={styles.concernCard}>
              <h4>🌍 “Do I need to be logged in?”</h4>
              <p>
                <strong>Answer:</strong> Yes, logging in saves your project. Sign up for free to start creating.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.finalCtaSection}>
          <h2>Ready to Start Your Video Journey?</h2>
          <p>
            Forget complicated software. Scenith makes starting a video editing project simple, fast, and fun for everyone.
          </p>

          <div className={styles.ctaBenefits}>
            <div className={styles.benefit}>✨ Start in 2 minutes</div>
            <div className={styles.benefit}>🎨 Presets for all platforms</div>
            <div className={styles.benefit}>📈 Create pro videos easily</div>
          </div>

          <Link href="https://scenith.in/dashboard">
            <button className={styles.ctaButton}>Try Scenith for FREE! →</button>
          </Link>
          <p className={styles.ctaSubtext}>No Subscription needed—start creating now!</p>
          <p className={styles.ctaSubtext}>
            Made a video with Scenith? Tag us on socials for a chance to be featured!
          </p>
        </section>

        <section className={styles.blogSection}>
          <div className={styles.faq}>
            <h3>Quick Answers:</h3>
            <div className={styles.faqRow}>
              <strong>What’s the best preset for YouTube?</strong>
              <span>Use 1920x1080 at 30 FPS for standard YouTube videos.</span>
            </div>
            <div className={styles.faqRow}>
              <strong>Can I create projects for free?</strong>
              <span>Yes, Scenith’s free plan lets you create up to 15 projects.</span>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}