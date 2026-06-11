// app/tools/ai-video-generator-from-text/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Video Generator from Text: Turn Words into Stunning Videos | Scenith',
  description: 'Transform text prompts into professional AI-generated videos. Create YouTube content, social media reels, ads, and storytelling videos in minutes. No editing skills required. Start free.',
  keywords: 'ai video generator from text, text to video ai, generate video from text, ai video maker, text prompt to video',
  openGraph: {
    title: 'AI Video Generator from Text: Turn Words into Stunning Videos',
    description: 'Type a prompt. Get a video. The easiest way to create professional videos using AI. Perfect for creators, marketers, and storytellers.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-video-generator-from-text',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Generator from Text | Scenith',
    description: 'Turn your words into stunning AI videos in minutes.',
  },
};

export default function AIVideoGeneratorFromTextPage() {
  const ctaUrl = '/create-ai-content?tab=video&utm_source=ai-video-generator-from-text&utm_medium=cta&utm_campaign=seo';

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI video generator from text?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI video generator from text is a tool that uses artificial intelligence to create video content directly from written descriptions. You simply type what you want to see — like "a peaceful beach at sunset with waves crashing" — and the AI generates a matching video in minutes. No filming, no editing, no animation skills required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free text-to-video AI generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Scenith offers free credits on signup (no credit card required) for text-to-video generation. Free users can generate multiple videos using models like Wan 2.5 and Kling 2.5 Turbo. For higher volumes and premium models, paid plans start at just $9/month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to generate a video from text?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most AI video generation takes 30–120 seconds depending on the model and video length. Shorter clips (5 seconds) generate faster than longer ones (10 seconds). The process runs asynchronously — you can leave the page and come back to your completed video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use AI-generated videos for YouTube monetization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. All videos generated on Scenith come with full commercial rights, including YouTube monetization. You can use them in YouTube videos, ads, client projects, and any commercial application. No attribution to Scenith is required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of videos can I create from text?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can create almost any type: cinematic storytelling, educational explainers, social media reels (9:16), product demonstrations, fantasy scenes, nature footage, abstract animations, and much more. The quality depends on your prompt detail and the AI model you choose.',
        },
      },
    ],
  };

  // HowTo Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate a Video from Text Using AI',
    description: 'Step-by-step guide to converting text prompts into professional videos',
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Write Your Video Prompt',
        text: 'Describe the scene you want to generate. Be specific about actions, setting, and mood.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Select an AI Model',
        text: 'Choose from Kling, Veo, Wan, or Runway models based on your video style needs.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Set Duration and Aspect Ratio',
        text: 'Choose 5 or 10 seconds. Select 16:9 for YouTube or 9:16 for TikTok/Reels.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Generate and Download',
        text: 'Click generate and receive your MP4 video ready for immediate use.',
        position: 4,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Scenith AI Video Generator from Text',
            description: 'Convert text prompts into stunning AI-generated videos. No editing skills required.',
            url: 'https://scenith.in/tools/ai-video-generator-from-text',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.7',
              ratingCount: '3156',
            },
          }),
        }}
      />

      <div className="t2v-page">
        {/* Hero Section */}
        <section className="t2v-hero">
          <div className="t2v-container">
            <div className="t2v-hero-badge">
              <span className="t2v-badge-icon">✨</span>
              <span className="t2v-badge-text">Text to Video AI</span>
              <span className="t2v-badge-new">No Editing Skills Needed</span>
            </div>
            <h1 className="t2v-hero-title">
              AI Video Generator from Text
              <span className="t2v-hero-highlight">Type. Generate. Publish.</span>
            </h1>
            <p className="t2v-hero-desc">
              Transform any text description into a <strong>professional AI-generated video</strong> in minutes.
              Used by YouTubers, marketers, educators, and creators to produce engaging content without cameras, 
              actors, or complex editing software. Simply type what you want to see — and watch it come to life.
            </p>
            <div className="t2v-hero-cta-group">
              <Link href={ctaUrl} className="t2v-primary-cta">
                <span className="t2v-cta-icon">🎬</span>
                Generate Video from Text Free →
              </Link>
              <Link href="/pricing" className="t2v-secondary-link">
                Explore All Models
              </Link>
            </div>
            <div className="t2v-trust-badges">
              <span>✅ 50 Free Credits</span>
              <span>🎥 6+ AI Video Models</span>
              <span>📥 MP4 Download</span>
              <span>💼 Commercial Rights</span>
              <span>⚡ 30-120 sec generation</span>
            </div>
          </div>
        </section>

        {/* Interactive Prompt Box - Direct CTA */}
        <section className="t2v-prompt-section">
          <div className="t2v-container">
            <div className="t2v-prompt-card">
              <div className="t2v-prompt-header">
                <span className="t2v-prompt-icon">📝</span>
                <h2>Create Your Video — Just Type Here</h2>
              </div>
              <textarea
                className="t2v-prompt-textarea"
                placeholder="Example: A cinematic drone shot flying over misty mountains at golden hour, sun rays breaking through clouds, epic atmosphere, 4K quality..."
                rows={3}
                defaultValue=""
              />
              <div className="t2v-prompt-examples">
                <span className="t2v-example-label">✨ Try these prompts:</span>
                <button className="t2v-example-chip" data-prompt="A peaceful beach at sunset with gentle waves and orange clouds">🏖️ Beach sunset</button>
                <button className="t2v-example-chip" data-prompt="A futuristic city with flying cars and neon lights at night">🌆 Futuristic city</button>
                <button className="t2v-example-chip" data-prompt="A close-up of a chef cooking pasta in an Italian kitchen">🍝 Cooking scene</button>
                <button className="t2v-example-chip" data-prompt="A rocket launching into space with dramatic explosion">🚀 Rocket launch</button>
              </div>
              <Link href={ctaUrl} className="t2v-generate-btn">
                🎬 Generate Video from This Text →
              </Link>
              <p className="t2v-prompt-note">No account required for first generation • Your video will be ready in 1-2 minutes</p>
            </div>
          </div>
        </section>

        {/* What is Text-to-Video AI */}
        <section className="t2v-definition-section">
          <div className="t2v-container">
            <div className="t2v-definition-box">
              <span className="t2v-definition-label">📖 What is AI Video Generation from Text?</span>
              <p className="t2v-definition-text">
                <strong>Text-to-video AI (also called prompt-to-video)</strong> is a generative technology that creates 
                original video content directly from written descriptions. Unlike traditional video creation that requires 
                filming, animation, or stock footage assembly, text-to-video AI uses deep learning models trained on 
                millions of video clips to understand how scenes, movements, lighting, and camera angles translate from 
                language to visuals. You type <em>"a golden retriever running through a field of sunflowers at golden hour"</em> 
                — and the AI generates a matching video in minutes. The best models understand cinematic terminology like 
                "slow motion", "dolly zoom", "drone shot", and "shallow depth of field", giving you professional-level 
                control without any technical expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Best AI Models for Text-to-Video */}
        <section className="t2v-models-section">
          <div className="t2v-container">
            <h2>Best AI Models for Text-to-Video Generation</h2>
            <p className="t2v-section-intro">
              Different AI models excel at different types of video. Here's when to use each:
            </p>
            <div className="t2v-models-grid">
              <div className="t2v-model-card">
                <div className="t2v-model-header">
                  <span className="t2v-model-icon">🎬</span>
                  <h3>Kling 2.6 Pro</h3>
                  <span className="t2v-model-badge">Best Overall</span>
                </div>
                <p className="t2v-model-desc">
                  Exceptional at realistic human movements, facial expressions, and complex action sequences. 
                  Handles dramatic lighting and camera movements with precision. Best for narrative scenes, 
                  character-driven content, and cinematic storytelling from text prompts.
                </p>
                <div className="t2v-model-features">
                  <span>✅ 1080p resolution</span>
                  <span>✅ Audio support</span>
                  <span>✅ 5s/10s duration</span>
                </div>
                <div className="t2v-model-example">
                  <strong>Best prompt style:</strong> "A woman walking through rain at night, neon signs reflecting..."
                </div>
              </div>
              <div className="t2v-model-card">
                <div className="t2v-model-header">
                  <span className="t2v-model-icon">🎥</span>
                  <h3>Veo 3.1 (Google)</h3>
                  <span className="t2v-model-badge">Best Quality</span>
                </div>
                <p className="t2v-model-desc">
                  Google's most advanced video model produces stunning quality with incredible attention to lighting, 
                  texture, and physics. Creates smooth camera movements that feel professionally shot. Best for premium 
                  projects where quality is paramount.
                </p>
                <div className="t2v-model-features">
                  <span>✅ 1080p resolution</span>
                  <span>✅ Audio support</span>
                  <span>✅ 4s/8s/20s/30s</span>
                </div>
                <div className="t2v-model-example">
                  <strong>Best prompt style:</strong> "Cinematic wide shot of mountains, clouds moving slowly..."
                </div>
              </div>
              <div className="t2v-model-card">
                <div className="t2v-model-header">
                  <span className="t2v-model-icon">🎞️</span>
                  <h3>Wan 2.5</h3>
                  <span className="t2v-model-badge">Fast & Good</span>
                </div>
                <p className="t2v-model-desc">
                  Exceptional balance of quality and speed. Excellent for landscapes, nature scenes, and establishing shots. 
                  Captures atmospheric lighting beautifully. Perfect for quick content creation.
                </p>
                <div className="t2v-model-features">
                  <span>✅ 480p/720p/1080p</span>
                  <span>✅ 5s/10s duration</span>
                </div>
                <div className="t2v-model-example">
                  <strong>Best prompt style:</strong> "Drone shot of forest with fog at dawn, peaceful mood..."
                </div>
              </div>
              <div className="t2v-model-card">
                <div className="t2v-model-header">
                  <span className="t2v-model-icon">🎭</span>
                  <h3>Runway Gen-4.5</h3>
                  <span className="t2v-model-badge">Stylized</span>
                </div>
                <p className="t2v-model-desc">
                  Excellent for artistic and stylized looks — fantasy, sci-fi, surreal visuals. Unique aesthetic that 
                  stands out from photorealistic models. Great for music videos and experimental content.
                </p>
                <div className="t2v-model-features">
                  <span>✅ 720p resolution</span>
                  <span>✅ Audio support</span>
                  <span>✅ 5s/10s duration</span>
                </div>
                <div className="t2v-model-example">
                  <strong>Best prompt style:</strong> "Fantasy forest with glowing mushrooms, magical particles..."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Write Effective Video Prompts */}
        <section className="t2v-prompt-guide">
          <div className="t2v-container">
            <h2>How to Write Effective Text-to-Video Prompts</h2>
            <p className="t2v-section-intro">
              The quality of your AI video depends almost entirely on your prompt. Here's exactly how to write prompts that produce stunning results.
            </p>
            <div className="t2v-prompt-structure">
              <div className="t2v-prompt-card-struct">
                <div className="t2v-prompt-step">
                  <span className="t2v-step-num">1</span>
                  <div className="t2v-step-content">
                    <h3>Start with the Subject & Action</h3>
                    <p>Clearly state what or who is in the scene and what's happening.</p>
                    <div className="t2v-step-example">
                      <strong>Examples:</strong> "A horse galloping..." / "A chef chopping vegetables..." / "A spaceship landing..."
                    </div>
                  </div>
                </div>
                <div className="t2v-prompt-step">
                  <span className="t2v-step-num">2</span>
                  <div className="t2v-step-content">
                    <h3>Add Environment & Setting</h3>
                    <p>Describe where the scene takes place to give context and mood.</p>
                    <div className="t2v-step-example">
                      <strong>Examples:</strong> "...on a misty mountain at sunrise" / "...in a busy Tokyo street at night" / "...on a sandy alien planet"
                    </div>
                  </div>
                </div>
                <div className="t2v-prompt-step">
                  <span className="t2v-step-num">3</span>
                  <div className="t2v-step-content">
                    <h3>Describe Lighting & Atmosphere</h3>
                    <p>Lighting transforms a basic video into something cinematic.</p>
                    <div className="t2v-step-example">
                      <strong>Examples:</strong> "...golden hour backlight" / "...dramatic shadows" / "...soft diffused window light" / "...neon purple glow"
                    </div>
                  </div>
                </div>
                <div className="t2v-prompt-step">
                  <span className="t2v-step-num">4</span>
                  <div className="t2v-step-content">
                    <h3>Specify Camera Movement</h3>
                    <p>Telling the AI how the camera moves creates professional-looking footage.</p>
                    <div className="t2v-step-example">
                      <strong>Examples:</strong> "...slow dolly in" / "...drone flyover" / "...tracking shot following" / "...crane shot descending"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t2v-perfect-prompt-box">
              <h3>✨ The Complete Text-to-Video Prompt Formula</h3>
              <div className="t2v-formula">
                <code>[Subject + Action] + [Environment] + [Lighting] + [Camera Movement] + [Mood/Quality]</code>
              </div>
              <div className="t2v-formula-example">
                <strong>Example:</strong> "A lone samurai drawing his sword, standing in a neon-lit cyberpunk alley at midnight, rain reflecting purple signs, dramatic shadows, slow motion close-up, cinematic 8K"
              </div>
              <Link href={ctaUrl} className="t2v-generate-small">Try This Prompt →</Link>
            </div>
          </div>
        </section>

        {/* Use Cases - Who Uses This */}
        <section className="t2v-usecases-section">
          <div className="t2v-container">
            <h2>Who Uses AI Text-to-Video Generators?</h2>
            <p className="t2v-section-intro">
              From solo creators to large agencies, thousands of professionals use text-to-video AI to scale their content production.
            </p>
            <div className="t2v-usecases-grid">
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">📺</span>
                <h3>YouTube Creators</h3>
                <p>Faceless YouTube channels are exploding — movie recap channels, history documentaries, sci-fi lore videos, and educational content. AI video generation lets you produce 10x more content without filming anything.</p>
                <div className="t2v-uc-stats">
                  <span>🎬 5-10 videos/day</span>
                  <span>📈 40% higher retention</span>
                </div>
              </div>
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">📱</span>
                <h3>TikTok & Reels Creators</h3>
                <p>Generate engaging 9:16 vertical videos for short-form platforms. Perfect for storytelling, motivational content, quotes, and trending topics. AI handles the visuals while you focus on the script.</p>
                <div className="t2v-uc-stats">
                  <span>⚡ 5-min per video</span>
                  <span>📱 Native 9:16 ratio</span>
                </div>
              </div>
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">📢</span>
                <h3>Marketers & Ad Agencies</h3>
                <p>Produce concept videos, social media ads, and product visualizations without expensive shoots. Test multiple creative directions simultaneously at near-zero cost.</p>
                <div className="t2v-uc-stats">
                  <span>💰 95% cost reduction</span>
                  <span>⚡ Same-day turnaround</span>
                </div>
              </div>
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">📚</span>
                <h3>Educators & Course Creators</h3>
                <p>Create engaging explainer videos, visual examples, and educational content for online courses. Generate custom footage that perfectly illustrates your teaching points.</p>
                <div className="t2v-uc-stats">
                  <span>🎓 2x student engagement</span>
                  <span>📹 No stock footage limits</span>
                </div>
              </div>
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">🎮</span>
                <h3>Game Developers</h3>
                <p>Generate cinematic trailers, cutscenes, and environment showcase videos for games. Perfect for Steam pages, Kickstarter campaigns, and social media promotion.</p>
                <div className="t2v-uc-stats">
                  <span>🎮 60s trailer in hours</span>
                  <span>🔄 Iterate instantly</span>
                </div>
              </div>
              <div className="t2v-usecase-card">
                <span className="t2v-uc-icon">🏢</span>
                <h3>Businesses & Startups</h3>
                <p>Produce brand films, product launch videos, and internal communications with professional polish. Consistent quality across all content without video production overhead.</p>
                <div className="t2v-uc-stats">
                  <span>🏢 Enterprise-ready</span>
                  <span>⚡ Scale to 100+ videos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-Specific Examples */}
        <section className="t2v-platform-section">
          <div className="t2v-container">
            <h2>Platform-Specific Text-to-Video Examples</h2>
            <p className="t2v-section-intro">
              Different platforms need different aspect ratios and video styles. Here are prompts tailored for each:
            </p>
            <div className="t2v-platform-grid">
              <div className="t2v-platform-card">
                <div className="t2v-platform-header">
                  <span className="t2v-platform-icon">▶️</span>
                  <h3>YouTube (16:9)</h3>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Documentary style:</span>
                  <p>"Cinematic wide shot of ancient Roman ruins at golden hour, camera slowly panning right, warm nostalgic lighting, historical documentary mood, 4K"</p>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Tech review B-roll:</span>
                  <p>"Close-up rotating shot of a futuristic smartphone on a dark reflective surface, blue LED glow, smooth product showcase lighting, 1080p"</p>
                </div>
              </div>
              <div className="t2v-platform-card">
                <div className="t2v-platform-header">
                  <span className="t2v-platform-icon">📱</span>
                  <h3>TikTok / Reels (9:16)</h3>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Storytime visual:</span>
                  <p>"Vertical shot of a cozy coffee shop interior, rain on window, warm amber lighting, someone writing in a journal, aesthetic slow motion, 9:16"</p>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Motivational content:</span>
                  <p>"Vertical drone shot of a person standing on a mountain peak at sunrise, golden light, epic clouds below, triumphant mood, 9:16"</p>
                </div>
              </div>
              <div className="t2v-platform-card">
                <div className="t2v-platform-header">
                  <span className="t2v-platform-icon">📸</span>
                  <h3>Instagram Feed (1:1)</h3>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Lifestyle content:</span>
                  <p>"Square frame of a minimalist modern living room, afternoon sunlight streaming through curtains, plants in background, calm aesthetic, 1:1"</p>
                </div>
                <div className="t2v-platform-prompt">
                  <span className="t2v-prompt-label">Food content:</span>
                  <p>"Top-down square shot of a chef plating pasta, steam rising, warm restaurant lighting, cinematic shallow depth of field, 1:1"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Tutorial */}
        <section className="t2v-steps-section">
          <div className="t2v-container">
            <h2>Create a Video from Text in 4 Simple Steps</h2>
            <div className="t2v-steps-grid">
              <div className="t2v-step-card">
                <div className="t2v-step-number">1</div>
                <h3>Write Your Prompt</h3>
                <p>Type what you want to see. Be specific about action, setting, lighting, and camera movement.</p>
              </div>
              <div className="t2v-step-card">
                <div className="t2v-step-number">2</div>
                <h3>Choose Your Model</h3>
                <p>Select Kling for realistic humans, Veo for premium quality, or Wan for landscapes and speed.</p>
              </div>
              <div className="t2v-step-card">
                <div className="t2v-step-number">3</div>
                <h3>Set Duration & Ratio</h3>
                <p>5 seconds for short clips, 10 seconds for scenes. 16:9 for YouTube, 9:16 for TikTok.</p>
              </div>
              <div className="t2v-step-card">
                <div className="t2v-step-number">4</div>
                <h3>Generate & Download</h3>
                <p>Click generate. Your video will be ready in 1-2 minutes. Download MP4 with full rights.</p>
              </div>
            </div>
            <div className="t2v-steps-cta">
              <Link href={ctaUrl} className="t2v-primary-cta t2v-steps-cta-btn">
                Start Your First Text-to-Video →
              </Link>
            </div>
          </div>
        </section>

        {/* Best Practices & Common Mistakes */}
        <section className="t2v-best-practices">
          <div className="t2v-container">
            <div className="t2v-two-col">
              <div className="t2v-col">
                <div className="t2v-practices-card">
                  <h3>✅ Best Practices for Text-to-Video</h3>
                  <ul>
                    <li><strong>Be specific about camera movement</strong> — "slow dolly in" vs. static shot changes everything</li>
                    <li><strong>Always include lighting direction</strong> — "golden hour", "dramatic shadows", "soft diffused light"</li>
                    <li><strong>Use cinematic terminology</strong> — "shallow depth of field", "wide angle", "tracking shot"</li>
                    <li><strong>Keep prompts focused</strong> — 30-60 words is ideal. Too many elements confuse the AI</li>
                    <li><strong>Match model to content</strong> — Kling for people, Wan for nature, Runway for fantasy</li>
                    <li><strong>Test multiple prompts</strong> — Small wording changes can dramatically improve results</li>
                    <li><strong>Generate at 1080p when possible</strong> — Better quality for YouTube and professional use</li>
                  </ul>
                </div>
              </div>
              <div className="t2v-col">
                <div className="t2v-practices-card t2v-mistakes">
                  <h3>❌ Common Text-to-Video Mistakes</h3>
                  <ul>
                    <li><strong>Vague prompts</strong> — "a car" vs. "red sports car driving on coastal highway at sunset"</li>
                    <li><strong>No lighting description</strong> — Flat lighting makes videos look amateurish</li>
                    <li><strong>Ignoring camera movement</strong> — Static shots lack cinematic feel</li>
                    <li><strong>Overloading prompts</strong> — Too many elements confuse the AI model</li>
                    <li><strong>Wrong aspect ratio</strong> — Using 16:9 for TikTok results in poor viewing experience</li>
                    <li><strong>Expecting perfect first try</strong> — Great videos often need 2-3 prompt iterations</li>
                    <li><strong>Not using mood keywords</strong> — "tense", "dreamy", "epic" guide the AI's emotional tone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tips Section */}
        <section className="t2v-advanced-section">
          <div className="t2v-container">
            <h2>🎓 Advanced Text-to-Video Techniques</h2>
            <div className="t2v-advanced-grid">
              <div className="t2v-advanced-card">
                <h3>Chain Multiple Prompts for Longer Videos</h3>
                <p>Generate 5-10 second clips separately, then edit them together. This gives you control over each scene transition. Example: Clip 1: "Wide shot of castle exterior" → Clip 2: "Dolly in through castle gate" → Clip 3: "Close-up of throne room". Edit together for a 30-second cinematic sequence.</p>
              </div>
              <div className="t2v-advanced-card">
                <h3>Use Negative Prompts to Remove Unwanted Elements</h3>
                <p>Tell the AI what NOT to include. Add to your prompt: "no blurry backgrounds, no distorted faces, no text or watermarks, no cartoon style". This significantly improves output quality for photorealistic videos.</p>
              </div>
              <div className="t2v-advanced-card">
                <h3>Reference Specific Film Styles</h3>
                <p>AI models understand director and cinematographer references. Try: "Blade Runner 2049 lighting style", "Wes Anderson color palette", "Christopher Nolan dramatic camera work", "David Attenborough nature documentary style".</p>
              </div>
              <div className="t2v-advanced-card">
                <h3>Combine with AI Voiceover for Complete Videos</h3>
                <p>Generate narration with <Link href="/tools/ai-voice-generation" className="t2v-inline-link">Scenith's AI Voice Generator</Link>, then sync with your AI video. This creates complete, professional videos — perfect for YouTube explainers, ads, and storytelling content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Examples Gallery */}
        <section className="t2v-examples-section">
          <div className="t2v-container">
            <h2>Real Text-to-Video Prompts & What They Create</h2>
            <p className="t2v-section-intro">
              See exactly what prompts produce. Use these templates for your own projects.
            </p>
            <div className="t2v-examples-grid">
              <div className="t2v-example-item">
                <div className="t2v-example-prompt">
                  <span className="t2v-example-quote">"</span>
                  A majestic eagle soaring over snow-capped mountains, golden hour lighting casting long shadows, slow motion tracking shot, National Geographic documentary style
                  <span className="t2v-example-quote">"</span>
                </div>
                <div className="t2v-example-meta">
                  <span>🎬 Best for: Nature docs, travel content</span>
                  <span>🏆 Recommended: Wan 2.5 or Veo 3.1</span>
                </div>
              </div>
              <div className="t2v-example-item">
                <div className="t2v-example-prompt">
                  <span className="t2v-example-quote">"</span>
                  A futuristic cyberpunk alley at night, neon purple and blue signs, rain on wet ground reflecting lights, a figure in a hooded cloak walking away from camera, cinematic wide shot
                  <span className="t2v-example-quote">"</span>
                </div>
                <div className="t2v-example-meta">
                  <span>🎬 Best for: Sci-fi, gaming, storytelling</span>
                  <span>🏆 Recommended: Kling 2.6 Pro</span>
                </div>
              </div>
              <div className="t2v-example-item">
                <div className="t2v-example-prompt">
                  <span className="t2v-example-quote">"</span>
                  Close-up of hands kneading bread dough on a floured wooden table, warm kitchen light from window, soft steam rising, cozy and comforting atmosphere, shallow depth of field
                  <span className="t2v-example-quote">"</span>
                </div>
                <div className="t2v-example-meta">
                  <span>🎬 Best for: Cooking, ASMR, lifestyle</span>
                  <span>🏆 Recommended: Kling 2.6 Pro</span>
                </div>
              </div>
              <div className="t2v-example-item">
                <div className="t2v-example-prompt">
                  <span className="t2v-example-quote">"</span>
                  Drone flyover of a futuristic floating city, clouds below, golden sunset illuminating glass towers, peaceful orchestral mood, sci-fi utopian aesthetic, 4K cinematic
                  <span className="t2v-example-quote">"</span>
                </div>
                <div className="t2v-example-meta">
                  <span>🎬 Best for: World-building, intros, trailers</span>
                  <span>🏆 Recommended: Veo 3.1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="t2v-compare-section">
          <div className="t2v-container">
            <h2>Text-to-Video AI vs Traditional Video Production</h2>
            <div className="t2v-compare-table-wrapper">
              <table className="t2v-compare-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th className="t2v-col-ai">AI Text-to-Video ✅</th>
                    <th>Traditional Production</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Cost per video</strong></td><td className="t2v-col-ai">$0–$5</td><td>$500–$50,000+</td></tr>
                  <tr><td><strong>Time to create</strong></td><td className="t2v-col-ai">1-5 minutes</td><td>Days to weeks</td></tr>
                  <tr><td><strong>Equipment needed</strong></td><td className="t2v-col-ai">None (browser only)</td><td>Camera, lighting, audio, crew</td></tr>
                  <tr><td><strong>Actors/models</strong></td><td className="t2v-col-ai">AI-generated</td><td>Need casting, booking, payment</td></tr>
                  <tr><td><strong>Location flexibility</strong></td><td className="t2v-col-ai">Any imaginable location</td><td>Real locations + permits + travel</td></tr>
                  <tr><td><strong>Revisions</strong></td><td className="t2v-col-ai">Instant, unlimited, free</td><td>Expensive and time-consuming</td></tr>
                  <tr><td><strong>Commercial rights</strong></td><td className="t2v-col-ai">Full rights included</td><td>Varies, often additional fees</td></tr>
                  <tr><td><strong>Scale 100 videos</strong></td><td className="t2v-col-ai">1 day</td><td>Months, $100k+</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="t2v-faq-section">
          <div className="t2v-container">
            <h2>Frequently Asked Questions</h2>
            <div className="t2v-faq-grid">
              <div className="t2v-faq-item">
                <h3>Is there a completely free text-to-video AI generator?</h3>
                <p>Yes! Scenith offers <strong>50 free credits on signup</strong> — no credit card required. Free credits work with Wan 2.5, Kling 2.5 Turbo, and other models. You can generate multiple videos to test the platform before committing to a paid plan. Paid plans start at just $9/month for 300 credits (5-10 videos).</p>
              </div>
              <div className="t2v-faq-item">
                <h3>Which AI model is best for realistic human videos?</h3>
                <p>For realistic humans, <strong>Kling 2.6 Pro</strong> is the best choice. It handles facial expressions, body movements, and human anatomy better than any other model. For dialogue scenes, <strong>Grok Imagine</strong> includes AI-generated audio synced with mouth movements. Veo 3.1 is also excellent but takes slightly longer to generate.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>Can I generate 4K videos from text?</h3>
                <p>Currently, most AI video models output up to 1080p. However, 1080p footage with excellent lighting and composition often looks better than poorly shot 4K. For YouTube and most social media use, 1080p is more than sufficient. We're actively tracking 4K models as they become available.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>How long does text-to-video generation take?</h3>
                <p>Generation time varies: <strong>5-second clips: 30-90 seconds</strong> | <strong>10-second clips: 60-180 seconds</strong>. Kling and Wan models are fastest (30-60 seconds). Veo models take slightly longer (60-120 seconds) but produce superior quality. The process runs in the background — you can close the page and return later.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>What's the difference between text-to-video and image-to-video?</h3>
                <p><strong>Text-to-video</strong> generates a video entirely from your written description — the AI creates everything from scratch. <strong>Image-to-video</strong> takes an existing image and animates it (adds motion, camera movement). Use text-to-video when you don't have source images. Use image-to-video when you want to animate existing visuals. Scenith supports both modes.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>Can I use AI-generated videos for YouTube monetization?</h3>
                <p><strong>Absolutely.</strong> All videos generated on Scenith come with full commercial rights. YouTube permits AI-generated content for monetization as long as the overall video provides original value (commentary, education, storytelling, etc.). Many successful YouTube channels with millions of subscribers use AI-generated footage exclusively.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>What aspect ratio should I use for different platforms?</h3>
                <p><strong>16:9</strong> — YouTube, Vimeo, Facebook feed, websites | <strong>9:16</strong> — TikTok, Instagram Reels, YouTube Shorts | <strong>1:1</strong> — Instagram feed, LinkedIn. Choose before generating — you can't change aspect ratio after generation.</p>
              </div>
              <div className="t2v-faq-item">
                <h3>Do I need to credit Scenith when using AI videos?</h3>
                <p><strong>No attribution required.</strong> Generated videos are yours entirely — no watermark, no "created by Scenith" credit, no disclosure requirement. You can use them in client projects, ads, YouTube channels, and commercial applications without mentioning the source. This makes it ideal for professional content creators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="t2v-final-section">
          <div className="t2v-container">
            <div className="t2v-final-card">
              <span className="t2v-final-icon">🎬</span>
              <h2>Ready to Create Videos from Text?</h2>
              <p>Join thousands of creators using Scenith to turn words into stunning AI videos. Start free — no credit card required.</p>
              <div className="t2v-final-buttons">
                <Link href={ctaUrl} className="t2v-final-cta">
                  🎬 Generate Your First Video Free →
                </Link>
                <Link href="/pricing" className="t2v-final-secondary">
                  View All Models & Pricing
                </Link>
              </div>
              <div className="t2v-final-links">
                <p><strong>Explore more AI tools:</strong></p>
                <div className="t2v-internal-links">
                  <Link href="/create-ai-content">✨ Create AI Content Hub</Link>
                  <Link href="/tools/ai-video-generation">🎥 AI Video Generator</Link>
                  <Link href="/tools/ai-voice-generation">🎙️ AI Voice Generator</Link>
                  <Link href="/tools/ai-image-generation">🖼️ AI Image Generator</Link>
                  <Link href="/tools/text-to-voice-ai">📝 Text to Voice AI</Link>
                  <Link href="/tools/cinematic-ai-video-generator">🎬 Cinematic AI Video</Link>
                  <Link href="/tools/add-subtitles-to-videos">💬 Add Subtitles to Videos</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Small script for interactive prompt chips - only for UI enhancement, no core logic */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var chips = document.querySelectorAll('.t2v-example-chip');
              var textarea = document.querySelector('.t2v-prompt-textarea');
              if (chips && textarea) {
                chips.forEach(function(chip) {
                  chip.addEventListener('click', function(e) {
                    var prompt = this.getAttribute('data-prompt');
                    if (prompt) textarea.value = prompt;
                  });
                });
              }
            })();
          `,
        }}
      />
    </>
  );
}