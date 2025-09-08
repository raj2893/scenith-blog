"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../styles/HowToAddSubtitlesToVideo.module.css';

export default function HowToAddSubtitlesToVideo() {
  const [showAllMethods, setShowAllMethods] = useState<boolean>(false);

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
        <title>How to Add Subtitles to Video: 5 Methods Compared (2025 Guide)</title>
        <meta
          name="description"
          content="Learn how to add subtitles to videos using 5 different methods. Compare AI tools, manual methods, and software options. Complete guide with step-by-step instructions."
        />
        <meta name="keywords" content="add subtitles to video, video subtitles, AI subtitles, subtitle generator, video accessibility, closed captions" />
        <meta name="author" content="Scenith" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Add Subtitles to Video: 5 Methods Compared (2025 Guide)" />
        <meta property="og:description" content="Complete guide to adding subtitles to videos. Compare AI tools, manual methods, and software options with step-by-step instructions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://scenith.in/blogs/how-to-add-subtitles-to-video" />
        <meta property="og:image" content="/images/subtitle-guide-og.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Add Subtitles to Video: 5 Methods Compared (2025 Guide)" />
        <meta name="twitter:description" content="Complete guide to adding subtitles to videos. Compare AI tools, manual methods, and software options." />
        <meta name="twitter:image" content="/images/subtitle-guide-og.jpg" />
        
        <link rel="canonical" href="https://scenith.in/blogs/how-to-add-subtitles-to-video" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap" 
          rel="stylesheet"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How to Add Subtitles to Video: 5 Methods Compared (2025 Guide)',
              description: 'Learn how to add subtitles to videos using 5 different methods. Compare AI tools, manual methods, and software options. Complete guide with step-by-step instructions.',
              author: {
                '@type': 'Organization',
                name: 'Scenith',
                url: 'https://scenith.in'
              },
              publisher: {
                '@type': 'Organization',
                name: 'Scenith',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://scenith.in/images/logo.png',
                },
              },
              datePublished: '2025-08-19T10:00:00Z',
              dateModified: '2025-08-19T10:00:00Z',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/blogs/how-to-add-subtitles-to-video',
              },
              image: 'https://scenith.in/images/subtitle-guide-og.jpg',
              wordCount: 2500,
              articleSection: 'Video Editing',
              inLanguage: 'en-US'
            }),
          }}
        />
      </Head>

      <article className={styles.blogContainer}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
            How to Add Subtitles to Video: 5 Methods Compared (2025 Guide)
          </h1>
          <div className={styles.meta}>
            <time dateTime="2025-08-19">August 19, 2025</time>
            <span className={styles.separator}>•</span>
            <span>6 min read</span>
            <span className={styles.separator}>•</span>
            <span>Video Editing</span>
          </div>
        </header>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.highlight}>
            <p>
              <strong>Quick Answer:</strong> The fastest way to add subtitles to videos in 2025 is using AI-powered tools like Scenith, 
              which can generate accurate subtitles in under 30 seconds. However, this guide covers all 5 methods so you can choose 
              what works best for your needs and budget.
            </p>
          </div>

          <p>
            Adding subtitles to videos is no longer optional. With <strong>85% of social media videos watched without sound</strong> 
            and accessibility requirements becoming stricter, subtitles are essential for reaching your full audience.
          </p>

          <p>
            Videos with subtitles receive <strong>40% more views</strong> and have <strong>12% longer watch times</strong> compared 
            to videos without captions. This guide will show you exactly how to add subtitles using 5 different methods, 
            from cutting-edge AI tools to traditional manual approaches.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#method-comparison">Method Comparison Overview</a></li>
            <li><a href="#ai-method">Method 1: AI Subtitle Generation (Recommended)</a></li>
            <li><a href="#youtube-method">Method 2: YouTube Auto-Captions</a></li>
            <li><a href="#manual-method">Method 3: Manual Subtitle Creation</a></li>
            <li><a href="#software-method">Method 4: Professional Video Software</a></li>
            <li><a href="#freelancer-method">Method 5: Hiring Freelancers</a></li>
            <li><a href="#best-practices">Best Practices for Video Subtitles</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
          </ol>
        </nav>

        {/* Method Comparison */}
        <section className={styles.section} id="method-comparison">
          <h2>Method Comparison Overview</h2>
          <div className={styles.comparisonTable}>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Time Required</th>
                  <th>Cost</th>
                  <th>Accuracy</th>
                  <th>Ease of Use</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.recommendedRow}>
                  <td><strong>AI Tools (Scenith)</strong></td>
                  <td>30 seconds</td>
                  <td>Free</td>
                  <td>98%</td>
                  <td>Very Easy</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>YouTube Auto-Captions</td>
                  <td>30-60 minutes</td>
                  <td>Free</td>
                  <td>70%</td>
                  <td>Easy</td>
                  <td>YouTube videos only</td>
                </tr>
                <tr>
                  <td>Manual Creation</td>
                  <td>3-5 hours</td>
                  <td>Free</td>
                  <td>100%</td>
                  <td>Hard</td>
                  <td>Perfect accuracy needed</td>
                </tr>
                <tr>
                  <td>Video Software</td>
                  <td>1-2 hours</td>
                  <td>$20-50/mo</td>
                  <td>85%</td>
                  <td>Medium</td>
                  <td>Video editors</td>
                </tr>
                <tr>
                  <td>Freelancers</td>
                  <td>2-3 days</td>
                  <td>$50-200</td>
                  <td>95%</td>
                  <td>Easy</td>
                  <td>One-time projects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Method 1: AI Subtitle Generation */}
        <section className={styles.section} id="ai-method">
          <h2>Method 1: AI Subtitle Generation (Recommended)</h2>
          
          <div className={styles.methodCard}>
            <div className={styles.methodStats}>
              <span className={styles.stat}>⏱️ Time: 30 seconds</span>
              <span className={styles.stat}>💰 Cost: Free</span>
              <span className={styles.stat}>🎯 Accuracy: 98%</span>
            </div>

            <p>
              AI-powered subtitle generation has revolutionized how we add captions to videos. Modern AI tools can 
              transcribe speech with near-perfect accuracy and automatically sync the text with your video timeline.
            </p>

            <h3>How to Use AI Subtitle Generation:</h3>
            <ol className={styles.stepList}>
              <li>
                <strong>Upload Your Video:</strong> Choose your video file (supports MP4, MOV, AVI, and most common formats)
              </li>
              <li>
                <strong>Select Language:</strong> Choose from 50+ supported languages for transcription
              </li>
              <li>
                <strong>Generate Subtitles:</strong> Click the generate button and wait 10-30 seconds
              </li>
              <li>
                <strong>Customize Appearance:</strong> Select from pre-designed subtitle styles or create your own
              </li>
              <li>
                <strong>Download:</strong> Export your video with embedded subtitles or download separate subtitle files
              </li>
            </ol>

            <div className={styles.prosConsGrid}>
              <div className={styles.pros}>
                <h4>✅ Advantages:</h4>
                <ul>
                  <li>Extremely fast generation (30 seconds vs hours)</li>
                  <li>High accuracy with clear audio (98%)</li>
                  <li>Multiple export formats (SRT, VTT, embedded)</li>
                  <li>Professional styling options</li>
                  <li>Batch processing for multiple videos</li>
                  <li>No technical skills required</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ Disadvantages:</h4>
                <ul>
                  <li>Requires internet connection</li>
                  <li>May struggle with heavy accents or poor audio</li>
                  <li>Premium features require subscription</li>
                </ul>
              </div>
            </div>

            <div className={styles.cta}>
              <p><strong>Try Scenith for free:</strong> Generate your first set of AI subtitles with no signup required.</p>
              <Link href="https://scenith.in/dashboard" className={styles.ctaButton}>
                Generate AI Subtitles Free →
              </Link>
            </div>
          </div>
        </section>

        {/* Method 2: YouTube Auto-Captions */}
        <section className={styles.section} id="youtube-method">
          <h2>Method 2: YouTube Auto-Captions</h2>
          
          <div className={styles.methodCard}>
            <div className={styles.methodStats}>
              <span className={styles.stat}>⏱️ Time: 30-60 minutes</span>
              <span className={styles.stat}>💰 Cost: Free</span>
              <span className={styles.stat}>🎯 Accuracy: 70%</span>
            </div>

            <p>
              YouTube automatically generates captions for uploaded videos, which you can then download and use elsewhere. 
              While free, the accuracy is lower than dedicated AI tools.
            </p>

            <h3>Step-by-Step Process:</h3>
            <ol className={styles.stepList}>
              <li>Upload your video to YouTube (can be set as unlisted)</li>
              <li>Wait 15-30 minutes for YouTube to process auto-captions</li>
              <li>Go to YouTube Studio -- Content -- Select your video</li>
              <li>Click "Subtitles" in the left menu</li>
              <li>Download the auto-generated subtitle file</li>
              <li>Edit and correct errors in a text editor</li>
              <li>Import the corrected subtitles into your video editor</li>
            </ol>

            <div className={styles.prosConsGrid}>
              <div className={styles.pros}>
                <h4>✅ Advantages:</h4>
                <ul>
                  <li>Completely free</li>
                  <li>No additional software needed</li>
                  <li>Works directly with YouTube videos</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ Disadvantages:</h4>
                <ul>
                  <li>Lower accuracy (70% vs 98% for AI tools)</li>
                  <li>Requires uploading to YouTube first</li>
                  <li>Time-consuming editing process</li>
                  <li>Limited customization options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Method 3: Manual Creation */}
        <section className={styles.section} id="manual-method">
          <h2>Method 3: Manual Subtitle Creation</h2>
          
          <div className={styles.methodCard}>
            <div className={styles.methodStats}>
              <span className={styles.stat}>⏱️ Time: 3-5 hours</span>
              <span className={styles.stat}>💰 Cost: Free</span>
              <span className={styles.stat}>🎯 Accuracy: 100%</span>
            </div>

            <p>
              Manual subtitle creation involves typing out every word while watching your video. While time-consuming, 
              it offers perfect accuracy and complete control over timing and formatting.
            </p>

            <h3>Tools You'll Need:</h3>
            <ul>
              <li><strong>Subtitle Editor:</strong> Aegisub (free), Subtitle Edit (free), or online tools</li>
              <li><strong>Video Player:</strong> VLC Media Player or similar</li>
              <li><strong>Text Editor:</strong> For final formatting (optional)</li>
            </ul>

            <h3>Manual Creation Process:</h3>
            <ol className={styles.stepList}>
              <li>Open your video in a subtitle editor</li>
              <li>Play the video and pause at each spoken segment</li>
              <li>Type the dialogue and set start/end times</li>
              <li>Repeat for the entire video</li>
              <li>Review and adjust timing</li>
              <li>Export as SRT or VTT file</li>
              <li>Test with your video player</li>
            </ol>

            <div className={styles.prosConsGrid}>
              <div className={styles.pros}>
                <h4>✅ Advantages:</h4>
                <ul>
                  <li>100% accuracy guaranteed</li>
                  <li>Complete control over timing</li>
                  <li>Free to do</li>
                  <li>Works offline</li>
                  <li>Perfect for specialized terminology</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ Disadvantages:</h4>
                <ul>
                  <li>Extremely time-consuming (3-5 hours per video)</li>
                  <li>Requires patience and focus</li>
                  <li>Prone to human error</li>
                  <li>Not scalable for multiple videos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Method 4: Professional Software */}
        <section className={styles.section} id="software-method">
          <h2>Method 4: Professional Video Software</h2>
          
          <div className={styles.methodCard}>
            <div className={styles.methodStats}>
              <span className={styles.stat}>⏱️ Time: 1-2 hours</span>
              <span className={styles.stat}>💰 Cost: $20-50/month</span>
              <span className={styles.stat}>🎯 Accuracy: 85%</span>
            </div>

            <p>
              Professional video editing software like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve now include 
              auto-transcription features. This method works well if you're already using these tools for video editing.
            </p>

            <h3>Popular Software Options:</h3>
            <ul>
              <li><strong>Adobe Premiere Pro:</strong> Auto-transcription with Speech to Text</li>
              <li><strong>Final Cut Pro:</strong> Built-in captions with auto-generation</li>
              <li><strong>DaVinci Resolve:</strong> Free version includes subtitle tools</li>
              <li><strong>Camtasia:</strong> Easy-to-use with auto-captions</li>
            </ul>

            <h3>General Workflow:</h3>
            <ol className={styles.stepList}>
              <li>Import your video into the software</li>
              <li>Use the auto-transcription feature</li>
              <li>Review and edit the generated subtitles</li>
              <li>Customize appearance (font, color, position)</li>
              <li>Render the video with embedded subtitles</li>
            </ol>

            <div className={styles.prosConsGrid}>
              <div className={styles.pros}>
                <h4>✅ Advantages:</h4>
                <ul>
                  <li>Integrated with video editing workflow</li>
                  <li>Professional-grade customization</li>
                  <li>Works offline</li>
                  <li>Multiple export options</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ Disadvantages:</h4>
                <ul>
                  <li>Expensive monthly subscriptions</li>
                  <li>Learning curve for beginners</li>
                  <li>Resource-intensive software</li>
                  <li>Accuracy varies by software</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Method 5: Freelancers */}
        <section className={styles.section} id="freelancer-method">
          <h2>Method 5: Hiring Freelancers</h2>
          
          <div className={styles.methodCard}>
            <div className={styles.methodStats}>
              <span className={styles.stat}>⏱️ Time: 2-3 days</span>
              <span className={styles.stat}>💰 Cost: $50-200 per video</span>
              <span className={styles.stat}>🎯 Accuracy: 95%</span>
            </div>

            <p>
              Hiring freelancers can be effective for one-time projects or when you need human expertise for complex content. 
              However, it's typically the most expensive option per video.
            </p>

            <h3>Where to Find Freelancers:</h3>
            <ul>
              <li><strong>Fiverr:</strong> Wide range of pricing ($5-100+)</li>
              <li><strong>Upwork:</strong> Professional freelancers ($15-50/hour)</li>
              <li><strong>Rev:</strong> Specialized in transcription and captions</li>
              <li><strong>3Play Media:</strong> Professional captioning services</li>
            </ul>

            <h3>What to Look For:</h3>
            <ul>
              <li>Portfolio of previous subtitle work</li>
              <li>Native speakers for accuracy</li>
              <li>Quick turnaround time</li>
              <li>Reasonable revision policy</li>
              <li>Multiple format delivery (SRT, VTT, etc.)</li>
            </ul>

            <div className={styles.prosConsGrid}>
              <div className={styles.pros}>
                <h4>✅ Advantages:</h4>
                <ul>
                  <li>Human accuracy and nuance</li>
                  <li>Perfect for specialized content</li>
                  <li>No software learning required</li>
                  <li>Professional quality assured</li>
                </ul>
              </div>
              <div className={styles.cons}>
                <h4>❌ Disadvantages:</h4>
                <ul>
                  <li>Most expensive option</li>
                  <li>Longest turnaround time</li>
                  <li>Communication challenges</li>
                  <li>Not scalable for regular content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className={styles.section} id="best-practices">
          <h2>Best Practices for Video Subtitles</h2>
          
          <div className={styles.bestPractices}>
            <div className={styles.practiceCard}>
              <h3>📱 Mobile Optimization</h3>
              <p>Ensure subtitles are readable on mobile devices with appropriate font sizes and positioning.</p>
            </div>
            
            <div className={styles.practiceCard}>
              <h3>⏰ Timing Guidelines</h3>
              <p>Keep subtitle duration between 1-6 seconds. Viewers need time to read while watching.</p>
            </div>
            
            <div className={styles.practiceCard}>
              <h3>📝 Text Length</h3>
              <p>Limit subtitles to 2 lines with maximum 42 characters per line for optimal readability.</p>
            </div>
            
            <div className={styles.practiceCard}>
              <h3>🎨 Visual Design</h3>
              <p>Use high contrast colors, clear fonts, and consider adding background or outlines for readability.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} id="faq">
          <h2>Frequently Asked Questions</h2>
          
          <div className={styles.faqSection}>
            <div className={styles.faqItem}>
              <h3>What video formats support subtitles?</h3>
              <p>Most common video formats (MP4, MOV, AVI, MKV) support embedded subtitles. For web use, MP4 with WebVTT subtitles is recommended.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>What's the difference between subtitles and captions?</h3>
              <p>Subtitles typically show dialogue only, while captions include dialogue, sound effects, and speaker identification for accessibility.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>How much do AI subtitle tools cost?</h3>
              <p>Most AI tools offer free tiers with limitations. Premium plans typically range from $10-30/month for unlimited usage and advanced features.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Can I edit AI-generated subtitles?</h3>
              <p>Yes, all AI tools allow you to edit the generated text, adjust timing, and customize appearance before exporting.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.section}>
          <h2>Conclusion</h2>
          <p>
            Adding subtitles to videos is essential in 2025, and AI-powered tools have made the process incredibly simple and fast. 
            While manual methods offer perfect accuracy, they're not practical for regular content creation.
          </p>
          
          <p>
            For most creators and businesses, <strong>AI subtitle generation</strong> offers the best balance of speed, accuracy, 
            and cost-effectiveness. Tools like Scenith can generate professional subtitles in seconds, letting you focus on 
            creating great content instead of spending hours on transcription.
          </p>
          
          <div className={styles.finalCta}>
            <h3>Ready to Add Subtitles in 30 Seconds?</h3>
            <p>Try Scenith's AI subtitle generation free – no signup required for your first video.</p>
            <Link href="https://scenith.in/dashboard" className={styles.ctaButton}>
              Start Creating Subtitles Free →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}