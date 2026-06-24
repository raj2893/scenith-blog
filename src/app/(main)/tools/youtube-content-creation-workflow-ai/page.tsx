// app/tools/youtube-content-creation-workflow-ai/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'YouTube Content Creation Workflow AI | Plan, Script & Optimize Videos',
  description: 'Streamline your YouTube content creation workflow with AI. Plan scripts, generate voiceovers, create thumbnails & optimize videos for growth. Free tools for creators.',
  keywords: 'youtube content creation, ai content workflow, youtube automation, video creation tools, ai script generator',
  openGraph: {
    title: 'YouTube Content Creation Workflow AI | Scenith',
    description: 'End-to-end AI workflow for YouTube creators — script, voice, image & video in one place.',
    type: 'website',
    url: 'https://scenith.in/tools/youtube-content-creation-workflow-ai',
  },
};

export default function YouTubeWorkflowPage() {
  const slug = 'youtube-content-creation-workflow-ai';
  const ctaBase = `/create-ai-content?tab=voice&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="youtube-workflow-page">
      {/* JSON-LD: FAQ + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in/' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  { '@type': 'ListItem', position: 3, name: 'YouTube Workflow AI', item: 'https://scenith.in/tools/youtube-content-creation-workflow-ai' },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is the best AI workflow for YouTube content creation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The best AI workflow combines script generation, AI voiceover creation, thumbnail design, and video generation — all in one platform. Scenith offers a unified workflow where creators can plan, script, voice, and visualize content without switching tools.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can AI help me create YouTube videos faster?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. AI reduces video creation time by 60-80% by automating voiceovers, generating image thumbnails, and even creating video clips from text prompts. It handles repetitive production tasks so you can focus on strategy and storytelling.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is AI-generated content allowed on YouTube?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, YouTube permits AI-generated content as long as it follows community guidelines. AI voiceovers, images, and text-to-video clips are all allowed. Many top creators use AI for narration, B-roll generation, and thumbnail creation to scale their channels.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="yw-hero">
        <div className="yw-container">
          <div className="yw-hero-badge">
            <span className="yw-badge-icon">🚀</span>
            <span>YouTube Creator Workflow</span>
          </div>
          <h1 className="yw-hero-title">
            AI-Powered YouTube Content Creation <br />
            <span className="yw-gradient-text">Workflow</span>
          </h1>
          <p className="yw-hero-desc">
            From script to published video — all in one place. Generate voiceovers, create thumbnails,
            produce video clips, and optimize your content with AI. <strong>Built for creators who want
            to scale without burning out.</strong>
          </p>
          <div className="yw-hero-cta-group">
            <Link href={ctaBase} className="yw-btn-primary">
              🎬 Start Creating Free →
              <span className="yw-btn-sub">No credit card required</span>
            </Link>
            <Link href="#workflow" className="yw-btn-secondary">
              See the Workflow ↓
            </Link>
          </div>
          <div className="yw-trust-row">
            <span>✅ 50 Free Credits</span>
            <span>🎙️ 40+ AI Voices</span>
            <span>🖼️ 7 Image Models</span>
            <span>🎬 6 Video Models</span>
          </div>
        </div>
      </section>

      {/* ========== WORKFLOW OVERVIEW ========== */}
      <section id="workflow" className="yw-workflow-section">
        <div className="yw-container">
          <h2>Your End-to-End YouTube Content Workflow</h2>
          <p className="yw-section-intro">
            Four steps. One platform. Everything you need to create high-quality YouTube content
            faster than ever before.
          </p>

          <div className="yw-workflow-grid">
            <div className="yw-workflow-card">
              <span className="yw-wf-icon">✍️</span>
              <span className="yw-wf-step">Step 1</span>
              <h3>Script & Storyboard</h3>
              <p>
                Plan your video with a clear hook, value proposition, and structured narrative.
                Use AI to generate script outlines, hooks, and talking points that keep viewers
                watching. A strong script is the foundation of every successful YouTube video.
              </p>
              <ul>
                <li>✅ Hook generation (first 10 seconds)</li>
                <li>✅ Outline structure (intro → body → CTA)</li>
                <li>✅ Keyword-rich talking points</li>
                <li>✅ Thumbnail text ideas</li>
              </ul>
              <div className="yw-wf-example">
                <strong>Pro tip:</strong> Start with a bold claim or question that your target
                audience is searching for. Frame your entire video around answering that question.
              </div>
            </div>

            <div className="yw-workflow-card">
              <span className="yw-wf-icon">🎙️</span>
              <span className="yw-wf-step">Step 2</span>
              <h3>AI Voiceover</h3>
              <p>
                Turn your script into natural-sounding narration with AI voiceovers. Choose
                from 40+ voices across 20+ languages, including Hindi, English, Spanish, and
                more. No expensive studio time needed.
              </p>
              <ul>
                <li>✅ 40+ natural AI voices</li>
                <li>✅ 20+ languages supported</li>
                <li>✅ Multiple accents per language</li>
                <li>✅ Emotion and speed control</li>
                <li>✅ Instant MP3 download</li>
              </ul>
              <div className="yw-wf-example">
                <strong>For best results:</strong> Use a "calm" voice for educational content,
                "enthusiastic" for entertainment, and "professional" for business channels.
              </div>
            </div>

            <div className="yw-workflow-card">
              <span className="yw-wf-icon">🖼️</span>
              <span className="yw-wf-step">Step 3</span>
              <h3>Thumbnails & Visuals</h3>
              <p>
                Create eye-catching thumbnails and B-roll assets with AI image generation.
                High-converting thumbnails get 3x more clicks — and our AI helps you design
                them in seconds, not hours.
              </p>
              <ul>
                <li>✅ 7 state-of-the-art image models</li>
                <li>✅ Custom aspect ratios (16:9, 9:16)</li>
                <li>✅ Text-to-image & image-to-image</li>
                <li>✅ High-res PNG download</li>
                <li>✅ Commercial rights included</li>
              </ul>
              <div className="yw-wf-example">
                <strong>Thumbnail strategy:</strong> Combine a high-contrast foreground subject,
                short bold text (max 5 words), and an emotional expression to maximize CTR.
              </div>
            </div>

            <div className="yw-workflow-card">
              <span className="yw-wf-icon">🎬</span>
              <span className="yw-wf-step">Step 4</span>
              <h3>Video Generation</h3>
              <p>
                Generate video clips from text prompts — perfect for B-roll, transitions,
                and short-form content. Use AI video to fill gaps, create visual interest,
                and even produce entire faceless videos.
              </p>
              <ul>
                <li>✅ 6 AI video models (Kling, Veo, Wan)</li>
                <li>✅ 5s–30s duration options</li>
                <li>✅ 16:9, 9:16, 1:1 aspect ratios</li>
                <li>✅ 1080p MP4 downloads</li>
                <li>✅ Audio-enabled models available</li>
              </ul>
              <div className="yw-wf-example">
                <strong>Quick win:</strong> Generate 3–5 short video clips per script to use as
                visual transitions, dramatically improving watch time and retention.
              </div>
            </div>
          </div>

          <div className="yw-workflow-cta">
            <Link href={ctaBase} className="yw-btn-primary">
              🚀 Execute Your Full Workflow Now
            </Link>
          </div>
        </div>
      </section>

      {/* ========== USE CASES ========== */}
      <section className="yw-usecases">
        <div className="yw-container">
          <h2>Who Benefits From This AI Workflow?</h2>
          <p className="yw-section-intro">
            Whether you're a solo creator or a growing channel, this workflow fits your production style.
          </p>

          <div className="yw-usecase-grid">
            <div className="yw-usecase-card">
              <span className="yw-uc-icon">📹</span>
              <h3>Faceless YouTube Channels</h3>
              <p>
                Completely eliminate on-camera presence. Use AI voiceover + generated visuals
                to create professional content across niches — education, finance, storytelling,
                news, and more. Many 100K+ subscriber channels are 100% AI-assisted.
              </p>
              <div className="yw-uc-examples">
                <strong>Popular niches:</strong> True crime, health tips, motivational stories,
                tech reviews, history documentaries.
              </div>
            </div>

            <div className="yw-usecase-card">
              <span className="yw-uc-icon">👩‍🏫</span>
              <h3>EdTech & Course Creators</h3>
              <p>
                Produce full-length educational content at scale. AI narration makes it easy
                to create multilingual courses, exam preparation videos, and skill-building
                content. Warm female and authoritative male voices keep learners engaged longer.
              </p>
              <div className="yw-uc-examples">
                <strong>Best for:</strong> UPSC preparation, coding tutorials, language learning,
                science explainers, math lessons.
              </div>
            </div>

            <div className="yw-usecase-card">
              <span className="yw-uc-icon">📊</span>
              <h3>Marketing & Brand Channels</h3>
              <p>
                Create consistent brand content without creative burnout. From product demos
                to client case studies, AI workflow helps you maintain a regular publishing
                schedule even with limited team resources.
              </p>
              <div className="yw-uc-examples">
                <strong>Content types:</strong> Product explainers, testimonial videos, industry
                insights, behind-the-scenes, culture content.
              </div>
            </div>

            <div className="yw-usecase-card">
              <span className="yw-uc-icon">🎮</span>
              <h3>Gaming & Entertainment</h3>
              <p>
                Scale gaming content with AI-powered narration and generated visuals. Create
                recaps, montages, and commentary videos faster — without spending hours recording
                or editing voice tracks.
              </p>
              <div className="yw-uc-examples">
                <strong>Applications:</strong> Game reviews, playthrough summaries, esports analysis,
                indie game showcases, meme compilations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== REAL EXAMPLE ========== */}
      <section className="yw-example-section">
        <div className="yw-container">
          <h2>Real YouTube Workflow Example</h2>
          <p className="yw-section-intro">
            Watch how one creator used Scenith's AI tools to produce a complete YouTube video in under
            2 hours — vs the typical 8–12 hour manual workflow.
          </p>

          <div className="yw-example-card">
            <div className="yw-example-grid">
              <div className="yw-example-left">
                <div className="yw-example-badge">📊 Case Study</div>
                <h3>Creating a 10-Minute Educational Video</h3>
                <div className="yw-example-timeline">
                  <div className="yw-example-step">
                    <span className="yw-es-num">1</span>
                    <div>
                      <strong>Script generation:</strong> 15 mins (AI outline + manual polish)
                    </div>
                  </div>
                  <div className="yw-example-step">
                    <span className="yw-es-num">2</span>
                    <div>
                      <strong>Voiceover:</strong> 5 mins (text-to-speech + MP3 download)
                    </div>
                  </div>
                  <div className="yw-example-step">
                    <span className="yw-es-num">3</span>
                    <div>
                      <strong>Thumbnail:</strong> 10 mins (AI image + Canva overlay)
                    </div>
                  </div>
                  <div className="yw-example-step">
                    <span className="yw-es-num">4</span>
                    <div>
                      <strong>B-roll clips:</strong> 20 mins (AI video generation)
                    </div>
                  </div>
                  <div className="yw-example-step">
                    <span className="yw-es-num">5</span>
                    <div>
                      <strong>Editing & export:</strong> 45 mins (assembly + title, description, tags)
                    </div>
                  </div>
                  <div className="yw-example-total">
                    <strong>Total:</strong> ~1.5 hours → <span className="yw-example-highlight">80% faster</span>
                  </div>
                </div>
              </div>
              <div className="yw-example-right">
                <div className="yw-example-stats">
                  <div className="yw-example-stat">
                    <span className="yw-ex-stat-num">4.2K</span>
                    <span>Average views (first 7 days)</span>
                  </div>
                  <div className="yw-example-stat">
                    <span className="yw-ex-stat-num">12.3%</span>
                    <span>CTR on AI-generated thumbnail</span>
                  </div>
                  <div className="yw-example-stat">
                    <span className="yw-ex-stat-num">62%</span>
                    <span>Average view duration</span>
                  </div>
                  <div className="yw-example-stat highlight">
                    <span className="yw-ex-stat-num">3x</span>
                    <span>Channel growth rate vs previous manual workflow</span>
                  </div>
                </div>
                <div className="yw-example-tools-used">
                  <span>✅ AI Script Generator</span>
                  <span>✅ Professional Voiceover</span>
                  <span>✅ AI Image for Thumbnail</span>
                  <span>✅ AI Video Clips</span>
                  <span>✅ YouTube SEO Tips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BEST PRACTICES ========== */}
      <section className="yw-best-practices">
        <div className="yw-container">
          <h2>YouTube Content Best Practices (With AI)</h2>
          <p className="yw-section-intro">
            These guidelines help you create content that YouTube's algorithm actually rewards.
          </p>

          <div className="yw-bp-grid">
            <div className="yw-bp-card">
              <span className="yw-bp-icon">🎯</span>
              <h3>Hook in the First 10 Seconds</h3>
              <p>
                YouTube's algorithm measures <strong>watch time and retention</strong> above all else.
                Your intro is make-or-break. Use a pattern interrupt: a surprising statement, a question,
                or a bold claim that directly addresses your viewer's problem or curiosity.
              </p>
                            <div className="yw-bp-example">
                <strong>AI prompt:</strong> &quot;Write a YouTube title and description for a video
                about &#123;topic&#125; optimized for &#123;primary keyword&#125;. Include 10 related hashtags.&quot;
              </div>
            </div>

            <div className="yw-bp-card">
              <span className="yw-bp-icon">🔑</span>
              <h3>Keyword-Rich Titles & Descriptions</h3>
              <p>
                YouTube is the second-largest search engine. Optimize your title, description,
                and tags with the <strong>exact phrases</strong> your target audience is searching for.
                Include your main keyword in the first 100 characters of the description.
              </p>
                            <div className="yw-bp-example">
                <strong>AI prompt:</strong> &quot;Write a YouTube title and description for a video
                about &#123;topic&#125; optimized for &#123;primary keyword&#125;. Include 10 related hashtags.&quot;
              </div>
            </div>

            <div className="yw-bp-card">
              <span className="yw-bp-icon">🖼️</span>
              <h3>Thumbnail That Converts</h3>
              <p>
                Your thumbnail is the <strong>#1 driver of click-through rate</strong>. Use high-contrast
                colors, a clear subject (ideally a face with emotion), and short text (max 5 words).
                Test 2-3 designs before publishing if you have the time.
              </p>
                            <div className="yw-bp-example">
                <strong>AI prompt:</strong> &quot;Write a YouTube title and description for a video
                about &#123;topic&#125; optimized for &#123;primary keyword&#125;. Include 10 related hashtags.&quot;
              </div>
            </div>

            <div className="yw-bp-card">
              <span className="yw-bp-icon">⏱️</span>
              <h3>Structure for Retention</h3>
              <p>
                Videos with <strong>60%+ retention</strong> get promoted by the algorithm. Use:
                <br />1. Hook (first 10s) → 2. Context (what the video covers) → 3. Value body →
                4. Summary + CTA. Break long sections with visual changes every 30–60 seconds.
              </p>
              <div className="yw-bp-example">
                <strong>AI prompt:</strong> "Create a 5-part video outline for  that
                maximizes retention. Include timestamps and visual change points."
              </div>
            </div>

            <div className="yw-bp-card">
              <span className="yw-bp-icon">📊</span>
              <h3>End Screen & CTA Strategy</h3>
              <p>
                Every video should drive action: <strong>subscribe, watch another video, or visit
                your website</strong>. Add an end screen with at least one recommended video
                and a subscription button. Mention your CTA verbally in the voiceover.
              </p>
              <div className="yw-bp-example">
                <strong>AI prompt:</strong> "Write a 30-second end-screen script that encourages
                subscribers and recommends a related video about."
              </div>
            </div>

            <div className="yw-bp-card">
              <span className="yw-bp-icon">📈</span>
              <h3>Post-Publish Optimization</h3>
              <p>
                YouTube takes <strong>24–72 hours</strong> to analyze a new video. During this period,
                update your thumbnail if CTR is below 5%, and adjust your title if impressions
                are low. Use YouTube Analytics to identify drop-off points for future videos.
              </p>
                            <div className="yw-bp-example">
                <strong>AI prompt:</strong> &quot;Write a YouTube title and description for a video
                about &#123;topic&#125; optimized for &#123;primary keyword&#125;. Include 10 related hashtags.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMMON MISTAKES ========== */}
      <section className="yw-mistakes">
        <div className="yw-container">
          <h2>Common Mistakes to Avoid</h2>
          <p className="yw-section-intro">
            Even experienced creators make these mistakes. AI can help you avoid them.
          </p>

          <div className="yw-mistakes-grid">
            <div className="yw-mistake-card">
              <span className="yw-mistake-icon">❌</span>
              <div>
                <h3>Weak Hooks</h3>
                <p>
                  A weak hook loses <strong>up to 60% of viewers in the first 30 seconds</strong>.
                  Avoid starting with "Welcome back to my channel" or "Today we're going to talk about..."
                  Instead, open with the most exciting point or a direct answer to what the viewer searched for.
                </p>
                <div className="yw-mistake-fix">
                  <strong>Fix:</strong> Use AI to generate 10 hook options and pick the strongest.
                </div>
              </div>
            </div>

            <div className="yw-mistake-card">
              <span className="yw-mistake-icon">❌</span>
              <div>
                <h3>Generic Thumbnails</h3>
                <p>
                  Generic thumbnails get <strong>3x lower CTR</strong> than custom-optimized ones.
                  Avoid screenshots from the video, low contrast, or text that's too small to read.
                  Your thumbnail should be 1920×1080 with a clear focal point.
                </p>
                <div className="yw-mistake-fix">
                  <strong>Fix:</strong> Generate thumbnail concepts with AI. Test 2-3 before publishing.
                </div>
              </div>
            </div>

            <div className="yw-mistake-card">
              <span className="yw-mistake-icon">❌</span>
              <div>
                <h3>Ignoring SEO</h3>
                <p>
                  YouTube's search algorithm is powerful — but you need to help it understand your content.
                  Missing keywords in titles, descriptions, and tags means <strong>missed organic discovery</strong>.
                </p>
                <div className="yw-mistake-fix">
                  <strong>Fix:</strong> Use AI to generate SEO-optimized titles and descriptions
                  before you even start writing the script.
                </div>
              </div>
            </div>

            <div className="yw-mistake-card">
              <span className="yw-mistake-icon">❌</span>
              <div>
                <h3>No Visual Variety</h3>
                <p>
                  A static video with a single speaker or scene loses viewers fast. Without
                  visual changes every 30-60 seconds, <strong>retention drops dramatically</strong>.
                  AI-generated B-roll and transitions are a fast, free solution.
                </p>
                <div className="yw-mistake-fix">
                  <strong>Fix:</strong> Add 3-5 AI-generated video clips as visual breaks within
                  your main content. This refreshes viewer attention.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ADVANCED TIPS ========== */}
      <section className="yw-advanced">
        <div className="yw-container">
          <h2>Advanced Tips for Growing Creators</h2>
          <p className="yw-section-intro">
            Level up your channel with these pro-level AI-powered strategies.
          </p>

          <div className="yw-adv-grid">
            <div className="yw-adv-card">
              <span className="yw-adv-icon">🧪</span>
              <h3>A/B Test Thumbnails & Titles</h3>
              <p>
                The most successful creators test multiple titles and thumbnails.
                Using AI-generated variations, you can test 3-5 options within the first
                24 hours of publishing. YouTube's algorithm favors videos with high CTR
                and retention — testing helps you optimize both.
              </p>
            <div className="yw-bp-example">
                <strong>AI prompt:</strong> &quot;Write a YouTube title and description for a video
                about &#123;topic&#125; optimized for &#123;primary keyword&#125;. Include 10 related hashtags.&quot;
              </div>
            </div>

            <div className="yw-adv-card">
              <span className="yw-adv-icon">📋</span>
              <h3>Reuse Content Across Platforms</h3>
              <p>
                One long-form video can become <strong>10+ pieces of content</strong>:
                shorts, clips, audio podcast, blog post, and social media trailers. AI helps
                you repurpose efficiently — generating scripts, voiceovers, and visuals for
                each platform from your core content.
              </p>
              <div className="yw-adv-example">
                <strong>AI prompt:</strong> "Extract 3 short clips from this script for YouTube
                Shorts. Each clip should be 15-30 seconds with a compelling hook."
              </div>
            </div>

            <div className="yw-adv-card">
              <span className="yw-adv-icon">📈</span>
              <h3>Predict Your Video's Performance</h3>
              <p>
                Before publishing, <strong>score your video</strong> based on:
                hook strength, retention structure, thumbnail quality, and SEO optimization.
                AI can audit your script and suggest improvements that increase your
                estimated performance score by 20-40%.
              </p>
              <div className="yw-adv-example">
                <strong>AI prompt:</strong> "Audit this YouTube script and thumbnail concept.
                Score hook strength (1-10), retention structure (1-10), and SEO (1-10).
                Provide 3 specific improvements."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="yw-faq">
        <div className="yw-container">
          <h2>Frequently Asked Questions</h2>

          <div className="yw-faq-grid">
            <details className="yw-faq-item">
              <summary>What's included in the AI YouTube workflow?</summary>
              <p>
                The workflow includes: <strong>AI script generation, AI voiceover (40+ voices),
                AI image generation for thumbnails, AI video generation for B-roll, and YouTube
                SEO optimization</strong> — all in one platform. You can create a complete
                video from script to export without switching tools.
              </p>
            </details>

            <details className="yw-faq-item">
              <summary>Can I use the generated content on monetized YouTube channels?</summary>
              <p>
                Yes. All content generated through Scenith comes with <strong>full commercial rights</strong>.
                YouTube allows AI-generated voiceovers, thumbnails, and video clips on monetized
                channels as long as overall content is original and provides value. Many top creators
                use these tools to scale their production.
              </p>
            </details>

            <details className="yw-faq-item">
              <summary>How much time does this AI workflow save?</summary>
              <p>
                Depending on your production style, the workflow saves <strong>60-80% of production time</strong>.
                Tasks that normally take hours (voiceover recording, thumbnail design, B-roll production)
                are reduced to minutes. Many creators produce 2-3x more content per week with the same time investment.
              </p>
            </details>

            <details className="yw-faq-item">
              <summary>Is this suitable for beginner YouTube creators?</summary>
              <p>
                Absolutely. The AI workflow is designed to eliminate the technical barriers to
                video creation. If you can type a script, you can produce a professional video.
                It's especially valuable for creators who are not comfortable with their own voice
                or on-camera presence, as well as those who want to start a faceless channel.
              </p>
            </details>

            <details className="yw-faq-item">
              <summary>Which AI voice is best for YouTube narration?</summary>
              <p>
                For educational content, choose calm and warm voices. For entertainment, use
                enthusiastic and expressive voices. For business channels, professional and
                authoritative voices work best. Scenith offers <strong>40+ voices across 20+ languages</strong>,
                including multiple Indian accents (Hindi, Tamil, Telugu) and global accents (US, UK, Australian).
              </p>
            </details>

            <details className="yw-faq-item">
              <summary>How do I start using the workflow?</summary>
              <p>
                Click the <strong>"Start Creating Free"</strong> button on this page. You'll get
                50 free credits to generate voiceovers, images, and videos. No credit card required.
                Once you're in, follow the workflow: script → voice → thumbnail → video.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ========== CONTEXTUAL INTERNAL LINKS ========== */}
      <section className="yw-internal-links">
        <div className="yw-container">
          <h2>More Tools for Your YouTube Workflow</h2>
          <p className="yw-section-intro">
            Explore these complementary tools to enhance every part of your content creation process.
          </p>

          <div className="yw-link-grid">
            <Link href="/tools/ai-voice-generation" className="yw-link-card">
              <span className="yw-link-icon">🎙️</span>
              <div>
                <h3>AI Voice Generator</h3>
                <p>40+ voices for YouTube narration, ads, and educational content.</p>
              </div>
            </Link>

            <Link href="/tools/ai-image-generation" className="yw-link-card">
              <span className="yw-link-icon">🖼️</span>
              <div>
                <h3>AI Image Generator</h3>
                <p>Create stunning thumbnails and video thumbnails in seconds.</p>
              </div>
            </Link>

            <Link href="/tools/ai-video-generation" className="yw-link-card">
              <span className="yw-link-icon">🎬</span>
              <div>
                <h3>AI Video Generator</h3>
                <p>Generate B-roll and video clips from text prompts.</p>
              </div>
            </Link>

            <Link href="/tools/add-subtitles-to-videos" className="yw-link-card">
              <span className="yw-link-icon">💬</span>
              <div>
                <h3>Add Subtitles to Videos</h3>
                <p>Automatically generate captions for better accessibility and SEO.</p>
              </div>
            </Link>

            <Link href="/ai-content-creation" className="yw-link-card">
              <span className="yw-link-icon">📝</span>
              <div>
                <h3>AI Content Creation</h3>
                <p>Generate scripts, blog posts, and social media captions.</p>
              </div>
            </Link>

            <Link href="/" className="yw-link-card">
              <span className="yw-link-icon">📱</span>
              <div>
                <h3>Shorts Maker</h3>
                <p>Create engaging YouTube Shorts from your long-form content.</p>
              </div>
            </Link>

            <Link href="/" className="yw-link-card">
              <span className="yw-link-icon">✍️</span>
              <div>
                <h3>AI Script Generator</h3>
                <p>Write scripts with hooks, structure, and storytelling elements.</p>
              </div>
            </Link>

            {/* Strong link to /create-ai-content */}
            <Link href="/create-ai-content" className="yw-link-card yw-link-primary">
              <span className="yw-link-icon">🚀</span>
              <div>
                <h3>Create AI Content (All Tools)</h3>
                <p>Voice + Image + Video — one unified creator workspace.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="yw-final-cta">
        <div className="yw-container">
          <div className="yw-final-cta-card">
            <span className="yw-final-icon">🚀</span>
            <h2>Ready to Transform Your YouTube Workflow?</h2>
            <p>
              Join thousands of creators who have streamlined their content production with AI.
              Start with 50 free credits — no credit card required.
            </p>
            <div className="yw-final-cta-group">
              <Link href={ctaBase} className="yw-btn-primary yw-btn-large">
                🎬 Start Creating Free →
              </Link>
              <Link href="/create-ai-content" className="yw-btn-secondary yw-btn-large">
                Explore All Tools
              </Link>
            </div>
            <div className="yw-final-trust">
              <span>✅ 50 Free Credits</span>
              <span>🎙️ 40+ AI Voices</span>
              <span>🖼️ 7 Image Models</span>
              <span>🎬 6 Video Models</span>
              <span>📥 Instant Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROMPT + REDIRECT BOX ========== */}
      <section className="yw-prompt-section">
        <div className="yw-container">
          <div className="yw-prompt-card">
            <div className="yw-prompt-header">
              <span className="yw-prompt-icon">✍️</span>
              <div>
                <h3>Enter Your Video Idea</h3>
                <p>Get started instantly with your script, voice, and visuals.</p>
              </div>
            </div>
            <form
              className="yw-prompt-form"
              action={ctaBase}
              method="GET"
            >
              <input type="hidden" name="tab" value="voice" />
              <input type="hidden" name="utm_source" value={slug} />
              <input type="hidden" name="utm_medium" value="prompt" />
              <input type="hidden" name="utm_campaign" value="seo" />

              <textarea
                name="text"
                className="yw-prompt-textarea"
                placeholder="Describe your video topic or paste a script idea…&#10;Example: 'YouTube workflow for creators — hook, storytelling, editing techniques'"
                rows={4}
                required
              />
              <button type="submit" className="yw-btn-primary yw-btn-full">
                🎬 Generate My Video Content →
                <span className="yw-btn-sub">Redirects to the full AI suite</span>
              </button>
            </form>
            <div className="yw-prompt-tips">
              <span>💡 Try: "AI tools for YouTube", "How to edit videos faster", "Faceless channel ideas"</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}