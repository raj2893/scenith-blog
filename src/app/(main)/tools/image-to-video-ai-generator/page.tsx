// app/tools/image-to-video-ai-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'Free AI Image to Video Generator | Turn Images into Cinematic Videos',
  description: 'Convert static images into dynamic AI videos. Generate cinematic 5-10 second clips from any photo for social media, marketing, and storytelling.',
  keywords: 'image to video ai, ai video generator, turn image into video, ai animation, photo to video ai, ai video creation',
  openGraph: {
    title: 'Free AI Image to Video Generator',
    description: 'Turn static images into dynamic AI videos with state-of-the-art models. Perfect for social media, marketing, and creative storytelling.',
    type: 'website',
    url: 'https://scenith.in/tools/image-to-video-ai-generator',
  },
};

export default function ImageToVideoAIGeneratorPage() {
  const ctaUrl =
    '/create-ai-content?tab=video&utm_source=image-to-video-ai-generator&utm_medium=cta&utm_campaign=seo';

  return (
    <div className="itv-page">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="itv-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item">
              <span itemProp="name">Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools/ai-video-generation" itemProp="item">
              <span itemProp="name">AI Video</span>
            </a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Image to Video AI Generator</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/image-to-video-ai-generator#webapp',
                name: 'Scenith Image to Video AI Generator',
                description:
                  'Turn static images into dynamic AI-powered videos. Upload any photo and watch it transform into a cinematic clip for social media, marketing, and storytelling.',
                url: 'https://scenith.in/tools/image-to-video-ai-generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                featureList: [
                  'Image to video generation from any photo',
                  'Multiple AI video models (Kling, Veo, Wan)',
                  '5-10 second cinematic clips',
                  '16:9, 9:16, and 1:1 aspect ratios',
                  'MP4 download ready for social media',
                  'Commercial use included',
                  'No watermarks',
                ],
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/image-to-video-ai-generator#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is an image to video AI generator?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'An image to video AI generator is a tool that uses artificial intelligence to transform static images into dynamic video clips. It analyzes the visual content of your photo and generates motion, camera movement, and scene transitions to create a cinematic video that extends the original image.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Which AI models can I use for image to video generation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Scenith supports multiple state-of-the-art image to video models including Kling 2.6 Pro, Kling 3.0 Pro, Veo 3.1, Veo 3.1 Fast, Wan 2.5, Luma Ray 3.1, and Grok Imagine. Each model offers unique strengths in quality, speed, and motion style.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does it take to generate a video from an image?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Image to video generation typically takes 30-120 seconds depending on the selected model, video duration, and resolution. Veo 3.1 Fast and Kling models generally complete faster, while high-quality models may take longer for better results.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use image to video AI for social media content?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. Image to video generation is particularly valuable for social media content creators who need engaging visual content for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn posts. The 9:16 aspect ratio is perfect for vertical social media formats.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is the generated video free to use commercially?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, all videos generated on Scenith come with full commercial rights. You can use them in advertising, product marketing, social media campaigns, and client projects without any attribution requirements.',
                    },
                  },
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Turn an Image into a Video Using AI',
                description: 'Step-by-step guide to generating AI videos from your images',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Upload your image',
                    text: 'Upload any JPEG, PNG, or WEBP image as the starting frame for your video.',
                    position: 1,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Write a motion prompt',
                    text: 'Describe how you want the image to move — e.g., "Slow camera pan across the landscape, birds flying in the distance."',
                    position: 2,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Select your AI model',
                    text: 'Choose from Kling, Veo, Wan, Luma, or Grok Imagine based on quality and style.',
                    position: 3,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Generate and download',
                    text: 'Click generate and receive your MP4 video file ready for immediate use.',
                    position: 4,
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="itv-hero">
        <div className="itv-container">
          <div className="itv-hero-badge">
            <span className="itv-badge-icon">🎬</span>
            <span className="itv-badge-text">Image to Video AI</span>
          </div>

          <h1 className="itv-hero-title">
            Turn Your Images into Cinematic AI Videos
            <span className="itv-hero-subtitle">Bring static photos to life with AI motion</span>
          </h1>

          <p className="itv-hero-desc">
            Transform any static image into a dynamic, cinematic video with our AI-powered
            <strong> image to video generator</strong>. Upload a photo, write a motion prompt,
            and watch as artificial intelligence creates a 5-10 second clip with realistic
            movement, camera effects, and scene transitions. Perfect for{' '}
            <strong>social media content, product showcases, storytelling,</strong> and
            <strong> creative projects</strong> — no video editing skills required.
          </p>

          <div className="itv-prompt-box">
            <div className="itv-prompt-header">
              <span className="itv-prompt-icon">✍️</span>
              <span className="itv-prompt-label">Motion Prompt</span>
              <span className="itv-prompt-badge">Describe how your image should move</span>
            </div>
            <textarea
              className="itv-prompt-textarea"
              placeholder="Example: Slow camera zoom into the center of the image, leaves gently swaying, soft light rays filtering through the trees..."
              rows={3}
              defaultValue=""
            />
            <div className="itv-prompt-footer">
              <span className="itv-prompt-hint">💡 Describe motion, camera movement, and scene dynamics</span>
              <a href={ctaUrl} className="itv-prompt-generate-btn">
                🎬 Generate Video →
              </a>
            </div>
          </div>

          <div className="itv-trust-row">
            <span className="itv-trust-pill">✅ Multiple AI Models</span>
            <span className="itv-trust-pill">🎥 5-10 Second Clips</span>
            <span className="itv-trust-pill">📱 16:9 & 9:16 Support</span>
            <span className="itv-trust-pill">💼 Commercial Use</span>
            <span className="itv-trust-pill">🚫 No Watermarks</span>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="itv-value-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Why Use an Image to Video AI Generator?</h2>
          <p className="itv-section-intro">
            AI-powered video generation from images is transforming how creators, marketers, and
            businesses produce visual content at scale.
          </p>

          <div className="itv-value-grid">
            <div className="itv-value-card">
              <span className="itv-value-icon">⚡</span>
              <h3>Create Video Content Without Filming</h3>
              <p>
                No cameras, actors, or studio equipment needed. Simply upload a photo and let AI
                generate a professional-looking video clip. This is a game-changer for
                <strong> product marketers, e-commerce brands, and content creators</strong> who
                need high-quality video at scale without the time and expense of traditional video production.
              </p>
            </div>

            <div className="itv-value-card">
              <span className="itv-value-icon">📱</span>
              <h3>Optimized for Social Media & Short-Form Content</h3>
              <p>
                AI-generated image videos are perfect for the <strong>short-form video formats</strong>
                dominating social media: Instagram Reels, TikTok, YouTube Shorts, and Facebook Stories.
                Generate multiple clips from your product photos in minutes — ideal for
                <strong> daily content calendars, ad testing, and campaign variations</strong>.
              </p>
            </div>

            <div className="itv-value-card">
              <span className="itv-value-icon">🎨</span>
              <h3>Creative Storytelling & Emotional Impact</h3>
              <p>
                Static images tell a simple story. A video with motion creates <strong>emotional resonance</strong>.
                Add a gentle zoom to convey intimacy, a pan to create scale, or dynamic movement
                to bring energy. Image to video AI lets you experiment with <strong>different visual
                narratives</strong> from a single image, giving you creative control without complex software.
              </p>
            </div>

            <div className="itv-value-card">
              <span className="itv-value-icon">💰</span>
              <h3>Scale Content Production Cost-Effectively</h3>
              <p>
                Traditional video production costs thousands per minute. AI image to video generation
                reduces that to <strong>pennies per clip</strong>. Generate unlimited variations,
                test multiple motion styles, and produce <strong>campaign content in minutes</strong>
                — all without hiring videographers, editors, or renting studio space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="itv-usecases-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Who Uses Image to Video AI?</h2>

          <div className="itv-usecase-grid">
            <div className="itv-usecase-card">
              <span className="itv-uc-icon">📸</span>
              <h3>Social Media Marketers</h3>
              <p>
                Create a week's worth of <strong>Instagram Reels and TikTok content</strong> from a
                single brand photoshoot. Turn product images into engaging video ads, behind-the-scenes
                clips, and lifestyle content that drives engagement and conversions.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A fashion brand turns a static photo of a dress into a 5-second
                video with gentle fabric movement and a slow zoom, increasing ad click-through rate by 47%.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">🛍️</span>
              <h3>E-Commerce & D2C Brands</h3>
              <p>
                <strong>Product demonstration videos</strong> are critical for e-commerce conversion.
                Turn product photos into dynamic videos showing the product from different angles,
                with smooth camera movements that create a 3D feel. Perfect for
                <strong> product pages, email marketing, and social ads</strong>.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A home decor brand turns flat product images into immersive
                room-scan videos, increasing add-to-cart rates by 38%.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">📖</span>
              <h3>Storytellers & Content Creators</h3>
              <p>
                Bring your <strong>visual storytelling to life</strong>. Turn nostalgic photos into
                animated memories, create cinematic openings for YouTube videos, or generate
                atmospheric clips for documentary projects. The possibilities are endless when
                your images can move.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A travel blogger transforms a static photo of a sunset over
                the Himalayas into a peaceful video with drifting clouds and a slow camera pan.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">🎮</span>
              <h3>Indie Game Developers</h3>
              <p>
                Generate <strong>cinematic game trailers and promotional content</strong> from concept
                art screenshots. Showcase game environments, character designs, and action scenes
                with AI-generated motion — no advanced animation software needed.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> An indie studio turns concept art into a teaser video with
                camera sweeps across landscapes, generating 50K+ views on social media.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">📚</span>
              <h3>Educators & Course Creators</h3>
              <p>
                Make your <strong>educational content more visually engaging</strong>. Turn diagrams,
                charts, and lecture slides into dynamic videos with motion and transitions. Students
                retain information better when it's presented with movement and visual variety.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A biology instructor turns a static diagram of the human heart
                into a video with flowing blood paths and labeled animations.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">🏢</span>
              <h3>Real Estate & Architecture</h3>
              <p>
                Turn <strong>property photos into virtual walkthroughs</strong> with AI motion.
                Create dynamic tours of interiors, exterior shots with moving clouds, and
                architectural visualizations that <strong>attract buyers and renters</strong>.
                Much more engaging than a static photo gallery.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A real estate agent turns static property photos into a
                cinematic video tour, increasing inquiry rates by 62%.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">🎵</span>
              <h3>Musicians & Artists</h3>
              <p>
                Create <strong>music visualizers, lyric videos, and promotional clips</strong> from
                album art and promotional photos. Generate visuals that move with the energy of
                your music — perfect for <strong>Spotify Canvas, YouTube, and social media</strong>
                promotion.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> An independent musician turns album artwork into a dynamic
                Spotify Canvas video that loops with the song, increasing streams by 18%.
              </div>
            </div>

            <div className="itv-usecase-card">
              <span className="itv-uc-icon">📰</span>
              <h3>Media & News Organizations</h3>
              <p>
                Transform <strong>news photographs into video segments</strong> for social media and
                digital platforms. AI image-to-video helps newsrooms rapidly produce engaging video
                content from photo archives without needing a full video editing team.
              </p>
              <div className="itv-uc-example">
                <strong>Example:</strong> A news outlet turns historical archive photos into engaging
                social video content for anniversaries and special features.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="itv-examples-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Real Image to Video Examples</h2>
          <p className="itv-section-intro">
            See what creators are doing with AI-powered image to video generation.
          </p>

          <div className="itv-example-grid">
            <div className="itv-example-card">
              <div className="itv-example-thumbnail">
                <span className="itv-example-icon">🖼️→🎬</span>
                <span className="itv-example-duration">5s</span>
              </div>
              <div className="itv-example-content">
                <h3>Product Cinematic Reveal</h3>
                <p>
                  A luxury watch brand turned their product photo into a cinematic video with
                  a slow 360-degree rotation, dramatic lighting changes, and a gentle zoom.
                  Used for Instagram Reels and Facebook ads, resulting in a <strong>32% increase</strong>{' '}
                  in engagement.
                </p>
                <div className="itv-example-meta">
                  <span className="itv-example-tag">Model: Kling 2.6 Pro</span>
                  <span className="itv-example-tag">Format: 9:16</span>
                </div>
              </div>
            </div>

            <div className="itv-example-card">
              <div className="itv-example-thumbnail">
                <span className="itv-example-icon">🌅→🎬</span>
                <span className="itv-example-duration">8s</span>
              </div>
              <div className="itv-example-content">
                <h3>Landscape Drone Effect</h3>
                <p>
                  A travel photographer transformed a static mountain sunset photo into a video
                  simulating a drone flyover, with drifting clouds and a slow camera sweep.
                  The clip gained <strong>1.2M views</strong> on TikTok and generated hundreds of
                  inquiries about the location.
                </p>
                <div className="itv-example-meta">
                  <span className="itv-example-tag">Model: Veo 3.1</span>
                  <span className="itv-example-tag">Format: 16:9</span>
                </div>
              </div>
            </div>

            <div className="itv-example-card">
              <div className="itv-example-thumbnail">
                <span className="itv-example-icon">👗→🎬</span>
                <span className="itv-example-duration">5s</span>
              </div>
              <div className="itv-example-content">
                <h3>Fashion Product Animation</h3>
                <p>
                  A D2C fashion brand turned a static image of a dress into a video with subtle
                  fabric movement and a walking simulation. Used across 15+ social media campaigns,
                  driving a <strong>45% increase</strong> in add-to-cart conversions compared to static images.
                </p>
                <div className="itv-example-meta">
                  <span className="itv-example-tag">Model: Wan 2.5</span>
                  <span className="itv-example-tag">Format: 9:16</span>
                </div>
              </div>
            </div>

            <div className="itv-example-card">
              <div className="itv-example-thumbnail">
                <span className="itv-example-icon">🐶→🎬</span>
                <span className="itv-example-duration">6s</span>
              </div>
              <div className="itv-example-content">
                <h3>Pet Portrait Animation</h3>
                <p>
                  A pet influencer animated their dog's portrait with subtle movement — ears
                  twitching, tail wagging, and blinking eyes. The video went viral with
                  <strong> 3.4M views</strong> on Instagram Reels and significantly boosted
                  the account's follower growth rate.
                </p>
                <div className="itv-example-meta">
                  <span className="itv-example-tag">Model: Grok Imagine</span>
                  <span className="itv-example-tag">Format: 1:1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="itv-bestpractices-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Best Practices for Image to Video Generation</h2>

          <div className="itv-bp-grid">
            <div className="itv-bp-card">
              <span className="itv-bp-number">01</span>
              <h3>Start with High-Quality Images</h3>
              <p>
                The quality of your output video depends heavily on your input image. Use
                <strong> high-resolution, well-lit photos</strong> with clear subjects and good
                composition. Avoid blurry, pixelated, or low-contrast images. AI works best with
                images that have <strong>depth, texture, and clear visual hierarchy</strong> —
                the AI needs visual information to generate meaningful motion.
              </p>
            </div>

            <div className="itv-bp-card">
              <span className="itv-bp-number">02</span>
              <h3>Write Specific Motion Prompts</h3>
              <p>
                Your prompt is the instruction manual for the AI. Be <strong>specific about what moves</strong> —
                "camera slowly zooms into the center of the image, the clouds drift from left to right"
                produces better results than "make it move." Include <strong>direction, speed, and
                focal points</strong> to guide the AI's motion generation.
              </p>
            </div>

            <div className="itv-bp-card">
              <span className="itv-bp-number">03</span>
              <h3>Match Model to Your Style</h3>
              <p>
                Each AI model has unique motion styles. <strong>Kling models</strong> produce smooth,
                cinematic motion. <strong>Veo 3.1</strong> offers dramatic camera effects.
                <strong> Wan 2.5</strong> is great for natural environments and landscapes.
                <strong> Grok Imagine</strong> includes AI-generated audio. Test multiple models
                on the same image to find your preferred style.
              </p>
            </div>

            <div className="itv-bp-card">
              <span className="itv-bp-number">04</span>
              <h3>Optimize Aspect Ratio for Platform</h3>
              <p>
                Match the aspect ratio of your output video to the <strong>platform you're publishing on</strong>:
                <strong> 9:16 (vertical)</strong> for TikTok, Reels, and Shorts; <strong>16:9</strong> for
                YouTube, website, and presentations; <strong>1:1</strong> for Instagram feed and some ad placements.
                Don't generate the wrong ratio — you can't crop easily without losing quality.
              </p>
            </div>

            <div className="itv-bp-card">
              <span className="itv-bp-number">05</span>
              <h3>Keep Duration Short</h3>
              <p>
                For social media, <strong>5-6 seconds is optimal</strong>. It's long enough to create
                impact but short enough to <strong>maintain viewer attention</strong> in fast-scrolling
                feeds. Longer videos (8-10 seconds) work well for YouTube content, product demos, and
                storytelling where you need more time to establish a scene.
              </p>
            </div>

            <div className="itv-bp-card">
              <span className="itv-bp-number">06</span>
              <h3>Iterate and Refine</h3>
              <p>
                Don't settle for the first result. Generate <strong>multiple variations</strong> with
                different prompts and models. Test different motion styles, camera movements, and
                prompt formulations. The best results often come from <strong>iteration and
                refinement</strong> — use what you learn from each generation to improve the next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="itv-mistakes-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Common Image to Video Mistakes to Avoid</h2>

          <div className="itv-mistake-grid">
            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>Overly Complex Motion Descriptions</h3>
              <p>
                Describing too many simultaneous motions — "the person walks, the background
                spins, the camera zooms, and the clouds drift" — confuses the AI. The result
                is often chaotic or unrealistic. <strong>Focus on one primary motion</strong>{' '}
                (e.g., camera movement) with one or two secondary effects for best results.
              </p>
            </div>

            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>Ignoring Image Composition</h3>
              <p>
                Images with subjects <strong>too close to the edge</strong> or <strong>unbalanced
                composition</strong> don't animate well. The AI may crop, distort, or generate
                unnatural artifacts. Start with images that have <strong>clear space around the
                subject</strong> and follow basic rules of photography composition (rule of thirds,
                leading lines, etc.).
              </p>
            </div>

            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>Not Testing Different Models</h3>
              <p>
                Each AI model has <strong>different strengths and limitations</strong>. What works
                beautifully in Kling might look weird in Veo. Don't assume one model works for all
                images. Test your image across <strong>multiple models</strong> — you'll often find
                surprising variations in quality, motion style, and visual coherence.
              </p>
            </div>

            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>Poor Image Resolution</h3>
              <p>
                Low-resolution images (under 1024×1024) generate <strong>blurry, pixelated videos</strong>.
                Use the highest resolution image you have available. If your image is low-res,
                consider <strong>AI upscaling</strong> before running image-to-video generation
                — even basic upscaling can dramatically improve results.
              </p>
            </div>

            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>Forgetting About Audio</h3>
              <p>
                A video without sound is only half the story. Many creators <strong>forget to add
                audio</strong> to their generated clips. Use Grok Imagine for AI-generated audio,
                or add <strong>background music, sound effects, or voiceovers</strong> in post-production
                to fully engage your audience. Sound is essential for social media success.
              </p>
            </div>

            <div className="itv-mistake-card">
              <span className="itv-mistake-icon">⚠️</span>
              <h3>No Clear Call to Action</h3>
              <p>
                Your generated video is powerful, but it needs a <strong>purpose</strong>. Don't
                just create video for the sake of it. Every clip should have a clear
                <strong> audience goal</strong> — engagement, clicks, awareness, or conversion.
                Add text overlays, captions, and a clear call-to-action to maximize impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="itv-advanced-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Advanced Tips for Professional Image to Video</h2>

          <div className="itv-advanced-grid">
            <div className="itv-advanced-card">
              <span className="itv-adv-icon">🎯</span>
              <h3>Storyboard Your Motion Path</h3>
              <p>
                Professional animators plan shots before creating. Before you write your prompt,
                <strong> visualize the camera path</strong>. Imagine you're holding a camera —
                where does it start? Where does it end? What does it focus on during the move?
                This mental storyboarding <strong>guides better prompts</strong> and more intentional
                results than generic "make it move" instructions.
              </p>
            </div>

            <div className="itv-advanced-card">
              <span className="itv-adv-icon">🔄</span>
              <h3>Use Sequential Generation for Complex Scenes</h3>
              <p>
                For complex scenes, break the generation into <strong>multiple passes</strong>.
                Generate a base video, then run it through another AI model for additional refinement
                or style transfer. You can also generate <strong>different versions of the same
                image</strong> from different angles to create a multi-shot video sequence.
              </p>
            </div>

            <div className="itv-advanced-card">
              <span className="itv-adv-icon">🎨</span>
              <h3>Layer with Text and Graphics</h3>
              <p>
                Don't stop at the AI-generated video. <strong>Layer text overlays, graphics, and
                branding</strong> to create a complete, polished piece of content. Tools like
                CapCut, Canva, and Adobe Premiere Rush make it easy to add professional titles,
                logos, and call-to-action overlays to your AI-generated clips.
              </p>
            </div>

            <div className="itv-advanced-card">
              <span className="itv-adv-icon">📊</span>
              <h3>AB Test Different Motion Styles</h3>
              <p>
                What generates more engagement: a gentle slow zoom or a dramatic swooping pan?
                <strong> Run AB tests</strong> with different motion styles on the same image.
                Track engagement metrics — views, click-through, conversion rates — to learn
                what your specific audience responds to best. Data-driven content creation
                <strong> outperforms guesswork</strong> every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="itv-how-section">
        <div className="itv-container">
          <h2 className="itv-section-title">How Image to Video AI Works</h2>

          <div className="itv-steps">
            <div className="itv-step">
              <div className="itv-step-num">1</div>
              <div className="itv-step-body">
                <h3>Upload Your Image</h3>
                <p>
                  Start with any photo — product shots, travel photos, concept art, portraits,
                  or landscape photography. Supported formats include JPEG, PNG, and WEBP.
                  Your image serves as the <strong>starting frame</strong> for the AI-generated video.
                </p>
              </div>
            </div>

            <div className="itv-step">
              <div className="itv-step-num">2</div>
              <div className="itv-step-body">
                <h3>Write a Motion Prompt</h3>
                <p>
                  Describe exactly how you want the image to move. Include <strong>camera direction</strong>{" "}
                  (zoom, pan, tilt, swoop), <strong>subject movement</strong> (walking, flying, drifting),
                  and <strong>environmental effects</strong> (clouds moving, water flowing, light shifting).
                  Specific prompts produce <strong>dramatically better results</strong> than vague ones.
                </p>
              </div>
            </div>

            <div className="itv-step">
              <div className="itv-step-num">3</div>
              <div className="itv-step-body">
                <h3>Select Model & Settings</h3>
                <p>
                  Choose from <strong>state-of-the-art AI models</strong> including Kling 2.6 Pro,
                  Veo 3.1, Wan 2.5, and Luma Ray 3.1. Adjust the <strong>duration</strong> (5-10 seconds),
                  <strong> aspect ratio</strong> (16:9, 9:16, 1:1), and <strong>resolution</strong>{" "}
                  (480p to 1080p) to match your platform and quality requirements.
                </p>
              </div>
            </div>

            <div className="itv-step">
              <div className="itv-step-num">4</div>
              <div className="itv-step-body">
                <h3>Generate & Download MP4</h3>
                <p>
                  Click generate and receive your <strong>professional AI video</strong> in 30-120 seconds.
                  Download directly as MP4 — optimized for social media, websites, and presentations.
                  <strong> Full commercial rights included</strong> — use your videos anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="itv-faq-section">
        <div className="itv-container">
          <h2 className="itv-section-title">Frequently Asked Questions</h2>

          <div className="itv-faq-grid">
            <div className="itv-faq-item">
              <h3>How does an image to video AI generator work?</h3>
              <p>
                An image to video AI generator uses <strong>diffusion and motion prediction models</strong>
                to analyze the content of your input image and generate plausible continuations of the scene
                over time. The AI understands depth, texture, and visual relationships to create
                <strong> realistic motion</strong> that extends the original image into a video sequence.
                Different models use different architectures and training data, resulting in
                <strong> varied motion styles</strong> and quality levels.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>What's the best AI model for image to video generation?</h3>
              <p>
                The "best" model depends on your specific needs. <strong>Kling 2.6 Pro</strong> is
                widely regarded as the most balanced model with excellent motion quality and coherence.
                <strong> Veo 3.1</strong> produces the most cinematic results with dramatic camera effects.
                <strong> Wan 2.5</strong> is preferred for natural scenes and landscapes.
                <strong> Grok Imagine</strong> is the only model that includes AI-generated audio.
                We recommend <strong>testing multiple models</strong> on your specific image to see
                which generates the best result for your use case.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>What types of images work best for AI video generation?</h3>
              <p>
                AI image-to-video works best with images that have: <strong>clear subjects and focal points</strong>,
                <strong> depth and layers</strong> (foreground, mid-ground, background), good
                <strong> lighting and contrast</strong>, and <strong>enough detail</strong> for the AI to
                work with. Images with <strong>people, animals, landscapes, and products</strong> all work well.
                Very abstract or minimalist images may produce less interesting results because the AI
                has less visual information to use for motion generation.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>Can I generate videos from AI-generated images?</h3>
              <p>
                Yes! This is a powerful workflow: <strong>generate an AI image</strong> using a text-to-image
                tool, then <strong>animate it</strong> with image-to-video AI. This lets you create
                completely original content from text alone — describe a scene, generate it as an image,
                then bring it to life as a video. It's an end-to-end <strong>AI content creation pipeline</strong>
                that requires zero photography or manual animation.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>How long should my AI-generated video be?</h3>
              <p>
                For social media, <strong>5-6 seconds</strong> is optimal for maintaining viewer
                attention and maximizing completion rates. For <strong>YouTube and presentations</strong>,
                8-10 seconds allows for more complex motion storytelling. For <strong>looping content</strong>
                (like Instagram Reels), shorter clips (5 seconds) work better because they loop more
                seamlessly. Choose the shortest duration that achieves your creative goal.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>What aspect ratio should I use for image to video?</h3>
              <p>
                Choose your aspect ratio based on where you're publishing:
                <strong> 9:16 (vertical)</strong> for TikTok, Instagram Reels, and YouTube Shorts.
                <strong> 16:9</strong> for YouTube, websites, presentations, and most ad platforms.
                <strong> 1:1</strong> for Instagram feed posts and some social media ads.
                Don't generate in the wrong ratio — you can't crop without losing quality.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>Can I use AI-generated videos for commercial projects?</h3>
              <p>
                Yes, all videos generated on Scenith come with <strong>full commercial rights</strong>.
                You can use them in paid advertising, product campaigns, client projects, YouTube
                monetized content, and any other commercial application <strong>without attribution</strong>.
                No royalties, no restrictions, and no hidden fees. The video is yours to use as you wish.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>How does AI handle faces and people in image to video?</h3>
              <p>
                AI models handle faces and people through <strong>specialized training</strong> on human
                movement and facial expression. The quality varies by model — Kling and Veo generally
                produce the best results for people, while some models may generate less natural
                human movement. For best results with people, use <strong>high-resolution source images</strong>{' '}
                and consider using models that <strong>specialize in human motion</strong> for optimal quality.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>What's the difference between text-to-video and image-to-video?</h3>
              <p>
                <strong>Text-to-video</strong> generates a video entirely from your written description —
                it creates both the visuals and the motion from scratch. <strong>Image-to-video</strong>{' '}
                starts with an existing image and <strong>animates it</strong> — extending the scene
                with motion, camera effects, and transitions. Image-to-video gives you <strong>more
                control</strong> over the visual content (you choose the exact starting image),
                while text-to-video offers <strong>more flexibility</strong> to generate anything
                you can describe.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>How much does image to video generation cost?</h3>
              <p>
                Scenith offers image-to-video generation with <strong>credits-based pricing</strong>.
                You get <strong>50 free credits</strong> on sign-up — enough to generate several videos.
                The credit cost varies by model and duration: for example, Wan 2.5 costs 46 credits
                for a 5-second video, while Veo 3.1 costs 92 credits for a 5-second video.
                <strong> Plans start from $1/month</strong> for additional credits, making it accessible
                for creators at any budget level.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>Can I add audio to my generated video?</h3>
              <p>
                Yes! <strong>Grok Imagine</strong> is the only AI model that automatically generates
                AI audio to accompany your video, creating a complete soundtrack in one click.
                For other models, you can add audio in post-production — <strong>background music,
                sound effects, or voiceovers</strong>. Tools like CapCut and Canva make it easy
                to add professional audio to your AI-generated videos with drag-and-drop simplicity.
              </p>
            </div>

            <div className="itv-faq-item">
              <h3>Is image to video AI safe for content creation?</h3>
              <p>
                Yes, when used responsibly. AI image-to-video tools like Scenith are designed for
                <strong> creative and commercial content creation</strong> — not for generating
                deceptive or harmful content. All generated videos include <strong>transparent
                AI content labeling</strong> and must comply with our content policy. We support
                responsible AI use for <strong>ethical content creation</strong> and explicitly
                prohibit misuse, including deepfakes and deceptive content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="itv-cta-section">
        <div className="itv-container">
          <div className="itv-cta-inner">
            <span className="itv-cta-icon">🎬</span>
            <h2 className="itv-cta-title">Turn Your Images into Videos — Free</h2>
            <p className="itv-cta-desc">
              Join thousands of creators using AI to transform static images into dynamic, engaging
              videos. Start with <strong>50 free credits</strong> — no credit card required.
            </p>
            <a href={ctaUrl} className="itv-cta-btn">
              <span className="itv-cta-text">
                <strong>🚀 Generate Image to Video – Free</strong>
                <small>Upload photo • Write prompt • Get MP4</small>
              </span>
              <span className="itv-cta-arrow">→</span>
            </a>

            <div className="itv-cta-trust">
              <span>✅ 50 Free Credits</span>
              <span>🎥 5+ AI Models</span>
              <span>📱 All Aspect Ratios</span>
              <span>💼 Commercial Use</span>
            </div>

            <p className="itv-cta-links">
              <strong>Explore related tools:</strong>{' '}
              <Link href="/tools/ai-video-generation" className="itv-inline-link">
                AI Video Generator
              </Link>{' '}
              •{' '}
              <Link href="/" className="itv-inline-link">
                Text to Video AI
              </Link>{' '}
              •{' '}
              <Link href="/tools/add-subtitles-to-videos" className="itv-inline-link">
                Add Subtitles to Videos
              </Link>{' '}
              •{' '}
              <Link href="/" className="itv-inline-link">
                AI Image to Video
              </Link>{' '}
              •{' '}
              <Link href="/tools/ai-voice-generation" className="itv-inline-link">
                AI Voice Generator
              </Link>{' '}
              •{' '}
              <Link href="/create-ai-content" className="itv-inline-link">
                Create AI Content
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}