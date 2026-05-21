// app/tools/wan-ai-video-generator/page.tsx
import Link from 'next/link';
import './styles.css';
import PromptForm from './PromptForm';

export const metadata = {
  title: 'Wan AI Video Generator: Create Cinematic Videos from Text | Scenith',
  description: 'Generate professional AI videos with Wan 2.5 model. Transform text prompts into stunning 1080p cinematic clips. Perfect for creators, marketers, and storytellers.',
  keywords: 'Wan AI video generator, text to video AI, Wan 2.5 video, AI video generation, cinematic AI video',
};

export default function WanAIVideoGeneratorPage() {
  const slug = 'wan-ai-video-generator';
  const ctaUrl = `/create-ai-content?tab=video&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="wan-page">
      {/* Hero Section */}
      <section className="wan-hero">
        <div className="wan-container">
          <div className="wan-hero-content">
            <span className="wan-badge">🔥 Best for Cinematic Content</span>
            <h1 className="wan-hero-title">
              Wan AI Video Generator:<br />
              <span className="wan-gradient">Text to Cinematic Video</span>
            </h1>
            <p className="wan-hero-desc">
              Transform your ideas into stunning 1080p videos with Wan 2.5 — the AI model 
              designed for creators who demand quality without complexity.
            </p>
            <div className="wan-hero-ctas">
              <Link href={ctaUrl} className="wan-btn-primary">
                🎬 Generate Free Video →
              </Link>
              <Link href="/create-ai-content" className="wan-btn-secondary">
                Explore All Tools
              </Link>
            </div>
            <div className="wan-stats">
              <div className="wan-stat">
                <span className="wan-stat-value">1080p</span>
                <span className="wan-stat-label">Resolution</span>
              </div>
              <div className="wan-stat">
                <span className="wan-stat-value">10s</span>
                <span className="wan-stat-label">Max Duration</span>
              </div>
              <div className="wan-stat">
                <span className="wan-stat-value">46cr</span>
                <span className="wan-stat-label">Per 5s Clip</span>
              </div>
              <div className="wan-stat">
                <span className="wan-stat-value">480p→1080p</span>
                <span className="wan-stat-label">Flexible Quality</span>
              </div>
            </div>
          </div>
          <div className="wan-hero-demo">
            <div className="wan-demo-card">
              <div className="wan-demo-badge">🎬 Example Prompt → Video</div>
              <div className="wan-demo-prompt">"Cinematic drone shot flying over neon-lit Tokyo streets at midnight, rain reflections, 4K"</div>
              <div className="wan-demo-placeholder">
                <span>🎥 Generated video preview appears here</span>
              </div>
              <div className="wan-demo-meta">
                <span>⚡ Wan 2.5 · 5s · 720p · 46cr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="wan-section">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">Perfect For Every Creator</h2>
            <p className="wan-section-subtitle">See how different creators are using Wan AI to level up their content</p>
          </div>
          <div className="wan-usecases-grid">
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">🎥</div>
              <h3>YouTube Storytellers</h3>
              <p>Create faceless cinematic B-roll for documentaries, top-10 videos, and narrative content. No stock footage needed — just your script and Wan AI.</p>
              <Link href={ctaUrl} className="wan-card-link">Generate B-Roll →</Link>
            </div>
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">📱</div>
              <h3>TikTok & Reels Creators</h3>
              <p>Generate 9:16 vertical videos that stop the scroll. Perfect for storytelling, motivational content, and short-form narratives.</p>
              <Link href={ctaUrl} className="wan-card-link">Make Reels →</Link>
            </div>
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">📢</div>
              <h3>Marketers & Ad Agencies</h3>
              <p>Produce product showcase videos, brand stories, and ad creatives at scale without expensive production costs.</p>
              <Link href={ctaUrl} className="wan-card-link">Create Ads →</Link>
            </div>
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">🎮</div>
              <h3>Game Developers</h3>
              <p>Generate concept trailers, environment cinematics, and cutscene prototypes in hours instead of weeks.</p>
              <Link href={ctaUrl} className="wan-card-link">Explore Game Assets →</Link>
            </div>
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">📚</div>
              <h3>E-Learning Creators</h3>
              <p>Turn educational scripts into engaging explainer videos with custom visuals that match your brand.</p>
              <Link href={ctaUrl} className="wan-card-link">Create Course Videos →</Link>
            </div>
            <div className="wan-usecase-card">
              <div className="wan-usecase-icon">🎨</div>
              <h3>AI Artists</h3>
              <p>Bring your static AI images to life by animating them with motion — a feature unique to advanced video models.</p>
              <Link href={ctaUrl} className="wan-card-link">Animate Your Art →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="wan-section wan-section-alt">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">What You Can Create With Wan AI</h2>
            <p className="wan-section-subtitle">Real prompts, real results — tested on Wan 2.5</p>
          </div>
          <div className="wan-examples-grid">
            <div className="wan-example">
              <div className="wan-example-video-placeholder">
                <div className="wan-example-play">▶️</div>
                <div className="wan-example-badge">Cinematic</div>
              </div>
              <div className="wan-example-content">
                <h4>🌆 Neon Cyberpunk City</h4>
                <p className="wan-example-prompt">"Slow cinematic drone shot flying between neon-lit skyscrapers in a cyberpunk city at night, purple and blue lights reflecting on wet streets, rain particles, 1080p"</p>
                <div className="wan-example-meta">
                  <span>🎬 5s · 1080p · 138cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
            <div className="wan-example">
              <div className="wan-example-video-placeholder">
                <div className="wan-example-play">▶️</div>
                <div className="wan-example-badge">Nature</div>
              </div>
              <div className="wan-example-content">
                <h4>🏔️ Misty Mountain Lake</h4>
                <p className="wan-example-prompt">"Wide shot of a misty mountain lake at golden hour, gentle waves lapping at the shore, pine trees reflected in calm water, atmospheric and serene, 720p"</p>
                <div className="wan-example-meta">
                  <span>🎬 10s · 720p · 92cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
            <div className="wan-example">
              <div className="wan-example-video-placeholder">
                <div className="wan-example-play">▶️</div>
                <div className="wan-example-badge">Sci-Fi</div>
              </div>
              <div className="wan-example-content">
                <h4>🚀 Spaceship Cockpit</h4>
                <p className="wan-example-prompt">"Inside a futuristic spaceship cockpit, stars flying past through the windshield, holographic displays flickering, pilot hands visible on controls, cinematic lighting"</p>
                <div className="wan-example-meta">
                  <span>🎬 5s · 1080p · 138cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wan-center-cta">
            <Link href={ctaUrl} className="wan-btn-primary wan-btn-lg">
              Generate Your First Video Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="wan-section">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">How to Generate Videos With Wan AI</h2>
            <p className="wan-section-subtitle">Three simple steps — no technical skills required</p>
          </div>
          <div className="wan-steps">
            <div className="wan-step">
              <div className="wan-step-num">1</div>
              <div className="wan-step-content">
                <h3>Write Your Prompt</h3>
                <p>Describe the scene you want to generate. Be specific about camera movement, lighting, mood, and details. Good prompts get great results.</p>
                <div className="wan-step-tip">💡 Tip: "Cinematic wide shot of..." vs "A video of..."</div>
              </div>
            </div>
            <div className="wan-step">
              <div className="wan-step-num">2</div>
              <div className="wan-step-content">
                <h3>Choose Your Settings</h3>
                <p>Select duration (5s or 10s), resolution (480p/720p/1080p), and aspect ratio (16:9 landscape, 9:16 vertical, or 1:1 square).</p>
                <div className="wan-step-tip">💡 1080p costs 138cr for 5s — best for final output. 720p (92cr) works great for tests.</div>
              </div>
            </div>
            <div className="wan-step">
              <div className="wan-step-num">3</div>
              <div className="wan-step-content">
                <h3>Generate & Download</h3>
                <p>Click generate and wait 30–90 seconds. Your video will be ready to download as MP4. Use it anywhere — YouTube, TikTok, Instagram, or your website.</p>
                <div className="wan-step-tip">💡 You can add subtitles later with our <Link href="/tools/add-subtitles-to-videos">free subtitle tool</Link>.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="wan-section wan-section-alt">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">Pro Tips For Better Wan Videos</h2>
            <p className="wan-section-subtitle">What works and what doesn't — from hundreds of generations</p>
          </div>
          <div className="wan-best-grid">
            <div className="wan-best-card">
              <h3>✅ Do: Be Specific With Movement</h3>
              <p>Wan excels at camera motion. Use words like "slow push in," "dolly shot," "aerial drone shot," "panning left," or "orbit around subject." These produce cinematic results.</p>
            </div>
            <div className="wan-best-card">
              <h3>✅ Do: Describe Lighting</h3>
              <p>Mention "golden hour," "neon lighting," "soft diffused light," "dramatic shadows," or "studio lighting." Lighting determines the mood of your video.</p>
            </div>
            <div className="wan-best-card">
              <h3>✅ Do: Add Environmental Details</h3>
              <p>Include elements like "rain," "fog," "particles," "dust motes," or "wind." These add texture and realism that makes AI videos feel premium.</p>
            </div>
            <div className="wan-best-card">
              <h3>❌ Avoid: Overly Complex Scenes</h3>
              <p>Too many moving elements (crowds, multiple characters, rapid cuts) can confuse the AI. Start simple, then add complexity once you know it works.</p>
            </div>
            <div className="wan-best-card">
              <h3>❌ Avoid: Vague Descriptions</h3>
              <p>"A car driving" → poor results. "Cinematic low-angle shot of a red vintage Mustang driving down a neon-lit highway at night, rain on windshield" → excellent.</p>
            </div>
            <div className="wan-best-card">
              <h3>❌ Avoid: Text or Logos</h3>
              <p>Wan doesn't reliably generate readable text. Use separate tools for titles, logos, or subtitles. Our <Link href="/tools/add-subtitles-to-videos">subtitle tool</Link> is great for this.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="wan-section">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">7 Common Mistakes (And How to Fix Them)</h2>
            <p className="wan-section-subtitle">Learn from others so you don't waste credits</p>
          </div>
          <div className="wan-mistakes-list">
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Not including camera movement</strong> → Videos feel static. Add "slow zoom," "tracking shot," or "dolly in" to every prompt.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Forgetting to specify aspect ratio</strong> → Video is cropped wrong on your platform. Choose 16:9 for YouTube, 9:16 for TikTok/Reels.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Using 1080p for testing</strong> → Wastes credits. Use 480p or 720p for initial tests, then regenerate in 1080p once prompt is perfect.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Prompts that are too short</strong> → "A forest" → generic. "Misty ancient redwood forest at sunrise, rays of light through canopy, gentle fog drifting" → better.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Ignoring the power of negative prompts</strong> → While Wan doesn't use negative prompts, structure your prompt to exclude unwanted elements naturally.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Expecting perfect physics</strong> → AI video has quirks. Accept minor imperfections or regenerate with adjusted prompts.
              </div>
            </div>
            <div className="wan-mistake">
              <div className="wan-mistake-icon">❌</div>
              <div className="wan-mistake-text">
                <strong>Not using the generated video in workflows</strong> → Your 1080p video is ready — add <Link href="/tools/add-subtitles-to-videos">subtitles</Link>, combine with voiceover from our <Link href="/tools/ai-voice-generation">AI voice tool</Link>, and publish.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="wan-section wan-section-alt">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">Advanced Techniques for Pro Creators</h2>
            <p className="wan-section-subtitle">Take your Wan AI videos to the next level</p>
          </div>
          <div className="wan-advanced-grid">
            <div className="wan-advanced-card">
              <div className="wan-advanced-icon">🎬</div>
              <h3>Prompt Chaining</h3>
              <p>Generate multiple clips from a single narrative and edit them together. Create 10s clips for longer scenes, or generate 5s shots for fast-paced sequences.</p>
            </div>
            <div className="wan-advanced-card">
              <div className="wan-advanced-icon">🎨</div>
              <h3>Image-to-Video Workflow</h3>
              <p>First generate an image with <Link href="/tools/ai-image-generation">Scenith's AI image tool</Link>, then animate it with Wan. This gives you precise control over the starting frame.</p>
            </div>
            <div className="wan-advanced-card">
              <div className="wan-advanced-icon">🔊</div>
              <h3>Combine With AI Voice</h3>
              <p>Add narration to your Wan video using our <Link href="/tools/ai-voice-generation">AI voice generator</Link>. Perfect for documentaries, tutorials, and storytelling.</p>
            </div>
            <div className="wan-advanced-card">
              <div className="wan-advanced-icon">✂️</div>
              <h3>Editing Strategy</h3>
              <p>Export as MP4 and edit in CapCut, DaVinci, or Premiere. Add transitions, music, and color grading to match your brand style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wan-section wan-faq">
        <div className="wan-container">
          <div className="wan-section-header">
            <h2 className="wan-section-title">Frequently Asked Questions</h2>
            <p className="wan-section-subtitle">Everything you need to know about Wan AI Video Generator</p>
          </div>
          <div className="wan-faq-grid">
            <details className="wan-faq-item">
              <summary>What makes Wan 2.5 different from other AI video models?</summary>
              <div className="wan-faq-answer">
                <p>Wan 2.5 excels at cinematic camera movements and environmental detail. It produces smooth motion with fewer artifacts than many competitors. It's particularly good at landscape shots, atmospheric scenes, and controlled camera motions. Unlike models like Kling (which offers better character animation) or Veo 3.1 (which excels at complex scenes), Wan 2.5 finds a sweet spot between quality and speed with resolution-based pricing.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>How many credits does a Wan video cost?</summary>
              <div className="wan-faq-answer">
                <p>Wan uses resolution-based pricing: 480p costs 46cr for 5s (92cr for 10s), 720p costs 92cr for 5s (184cr for 10s), 1080p costs 138cr for 5s (276cr for 10s). Free users get 50 credits on signup — enough to test in 480p. Paid plans start at $9/month for 300 credits, which covers multiple 1080p videos.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>Can I use Wan videos on YouTube/TikTok/Instagram?</summary>
              <div className="wan-faq-answer">
                <p>Absolutely. All videos generated on Scenith come with full commercial rights. You can use them anywhere — YouTube videos, TikTok Reels, Instagram posts, ads, client projects, or even sell them as stock footage. No attribution required.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>How long does video generation take?</summary>
              <div className="wan-faq-answer">
                <p>Typical generation time is 30–90 seconds depending on queue load and resolution. 480p videos generate faster than 1080p. You can leave the page and return — your video will be saved in your history.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>What aspect ratios does Wan support?</summary>
              <div className="wan-faq-answer">
                <p>Wan supports three aspect ratios: 16:9 (landscape, best for YouTube), 9:16 (vertical, best for TikTok/Reels/Shorts), and 1:1 (square, best for Instagram feed and multi-platform posts).</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>Does Wan generate videos with audio?</summary>
              <div className="wan-faq-answer">
                <p>No, Wan generates silent videos. But that's actually a feature — you can add your own music, sound effects, or AI-generated voiceover. Check out our <Link href="/tools/ai-voice-generator">AI voice generator</Link> to add narration, or use the <Link href="/tools/add-subtitles-to-videos">subtitle tool</Link> for captions.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>What's the difference between Wan and other video models on Scenith?</summary>
              <div className="wan-faq-answer">
                <p>Scenith offers multiple video models: <strong>Wan 2.5</strong> is best for cinematic landscapes and controlled camera movement. <strong>Kling 2.6 Pro</strong> excels at character animation and complex scenes. <strong>Veo 3.1</strong> offers the highest quality and includes audio. <strong>Grok Imagine</strong> is most affordable and includes AI audio. Try them all to see which fits your style.</p>
              </div>
            </details>
            <details className="wan-faq-item">
              <summary>Can I generate videos from my own images?</summary>
              <div className="wan-faq-answer">
                <p>Yes! Use the "Image to Video" mode in our <Link href="/create-ai-content">AI Content Creator</Link>. Upload any image, and Wan will animate it based on your text prompt. This is perfect for bringing your existing art or product photos to life.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA + Prompt Box */}
      <section className="wan-cta-section">
        <div className="wan-container">
          <div className="wan-cta-card">
            <h2 className="wan-cta-title">Ready to create your first AI video?</h2>
            <p className="wan-cta-desc">Start with 50 free credits — no credit card required.</p>
            
            {/* Prompt Input Box */}
            <PromptForm slug={slug} />

            <div className="wan-cta-features">
              <span>✓ 50 Free Credits</span>
              <span>✓ 1080p Export</span>
              <span>✓ Commercial Rights</span>
              <span>✓ No Watermark</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="wan-internal-links">
        <div className="wan-container">
          <div className="wan-internal-links-content">
            <h3>Explore More AI Tools</h3>
            <div className="wan-links-grid">
              <Link href="/create-ai-content" className="wan-internal-link">🎬 AI Video Generator</Link>
              <Link href="/tools/kling-ai-video-generator" className="wan-internal-link">🎥 Kling AI Video</Link>
              <Link href="/tools/veo-ai-video-generator" className="wan-internal-link">🎞️ Veo AI Video</Link>
              <Link href="create-ai-content" className="wan-internal-link">🖼️ AI Image Generator</Link>
              <Link href="create-ai-content" className="wan-internal-link">🎙️ AI Voice Generator</Link>
              <Link href="/tools/add-subtitles-to-videos" className="wan-internal-link">📝 Add Subtitles to Videos</Link>
              <Link href="create-ai-content" className="wan-internal-link">⬆️ AI Video Upscaler</Link>
              <Link href="create-ai-content" className="wan-internal-link">🔊 Text to Speech</Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Wan AI Video Generator",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web",
            "description": "Generate cinematic AI videos from text prompts using Wan 2.5 model. Create 1080p videos for YouTube, TikTok, and Instagram.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free credits on signup, paid plans from $9/month"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Wan 2.5 different from other AI video models?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wan 2.5 excels at cinematic camera movements and environmental detail. It produces smooth motion with fewer artifacts than many competitors, particularly good at landscape shots, atmospheric scenes, and controlled camera motions."
                }
              },
              {
                "@type": "Question",
                "name": "How many credits does a Wan video cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wan uses resolution-based pricing: 480p costs 46cr for 5s (92cr for 10s), 720p costs 92cr for 5s (184cr for 10s), 1080p costs 138cr for 5s (276cr for 10s)."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use Wan videos on YouTube and social media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all videos generated on Scenith come with full commercial rights. Use them anywhere — YouTube, TikTok, Instagram, ads, or client projects with no attribution required."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}