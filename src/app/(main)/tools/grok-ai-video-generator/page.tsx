// app/tools/grok-ai-video-generator/page.tsx
import Link from 'next/link';
import './styles.css';
import PromptForm from './PromptForm';
import './styles.css';

export const metadata = {
  title: 'Grok AI Video Generator: Create Videos with Audio | xAI Video Model',
  description: 'Generate AI videos with built-in audio using Grok Imagine. The only video model that creates synchronized sound. Perfect for social media creators and marketers.',
  keywords: 'Grok AI video generator, Grok Imagine, xAI video model, AI video with audio, text to video with sound',
};

export default function GrokAIVideoGeneratorPage() {
  const slug = 'grok-ai-video-generator';
  const ctaUrl = `/create-ai-content?tab=video&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="grok-page">
      {/* Hero Section */}
      <section className="grok-hero">
        <div className="grok-container">
          <div className="grok-hero-content">
            <span className="grok-badge">🎵 The Only AI Video with Audio</span>
            <h1 className="grok-hero-title">
              Grok AI Video Generator:<br />
              <span className="grok-gradient">Video + Sound, Together</span>
          </h1>
            <p className="grok-hero-desc">
              Meet Grok Imagine — the only AI video model that generates synchronized audio 
              alongside stunning visuals. Perfect for TikTok, Reels, and short-form content 
              that demands sound.
            </p>
            <div className="grok-hero-ctas">
              <Link href={ctaUrl} className="grok-btn-primary">
                🎵 Generate Video with Audio →
              </Link>
              <Link href="/create-ai-content" className="grok-btn-secondary">
                Explore All Tools
              </Link>
            </div>
            <div className="grok-stats">
              <div className="grok-stat">
                <span className="grok-stat-value">720p</span>
                <span className="grok-stat-label">Resolution</span>
              </div>
              <div className="grok-stat">
                <span className="grok-stat-value">10s</span>
                <span className="grok-stat-label">Max Duration</span>
              </div>
              <div className="grok-stat">
                <span className="grok-stat-value">🎵</span>
                <span className="grok-stat-label">Audio Included</span>
              </div>
              <div className="grok-stat">
                <span className="grok-stat-value">47cr</span>
                <span className="grok-stat-label">Per 5s Clip</span>
              </div>
            </div>
          </div>
          <div className="grok-hero-demo">
            <div className="grok-demo-card">
              <div className="grok-demo-badge">🎵 Grok Imagine — Audio + Video</div>
              <div className="grok-demo-prompt">"A cat playing piano in a jazz club, soft blues music playing, smoky atmosphere, cinematic lighting"</div>
              <div className="grok-demo-placeholder">
                <span>🎥 🎵 Generated video with audio preview</span>
              </div>
              <div className="grok-demo-meta">
                <span>🎵 Audio · 5s · 720p · 47cr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Grok Different Section */}
      <section className="grok-section">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">What Makes Grok Imagine Different?</h2>
            <p className="grok-section-subtitle">The only video model that truly understands sound</p>
          </div>
          <div className="grok-diff-grid">
            <div className="grok-diff-card">
              <div className="grok-diff-icon">🎵</div>
              <h3>Built-in Audio Generation</h3>
              <p>Unlike Wan, Kling, or Veo, Grok Imagine creates synchronized audio that matches your scene. Describe the sound — music, ambiance, dialogue — and Grok delivers.</p>
            </div>
            <div className="grok-diff-card">
              <div className="grok-diff-icon">⚡</div>
              <h3>Fast & Affordable</h3>
              <p>At just 47cr for 5 seconds (720p), Grok is one of the most affordable AI video models. Generate multiple clips without burning through credits.</p>
            </div>
            <div className="grok-diff-card">
              <div className="grok-diff-icon">🎨</div>
              <h3>xAI Technology</h3>
              <p>Built by xAI (Elon Musk's AI company), Grok Imagine brings unique creative intelligence to video generation with distinctive visual aesthetics.</p>
            </div>
            <div className="grok-diff-card">
              <div className="grok-diff-icon">📱</div>
              <h3>Ready for Social Media</h3>
              <p>9:16 vertical format + audio = perfect for TikTok, Instagram Reels, and YouTube Shorts. No need to add music separately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="grok-section grok-section-alt">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">Perfect For Audio-First Content</h2>
            <p className="grok-section-subtitle">Because sound changes everything</p>
          </div>
          <div className="grok-usecases-grid">
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">🎵</div>
              <h3>TikTok & Reels Creators</h3>
              <p>Generate viral-ready clips with matching audio. No more searching for the perfect soundtrack — Grok creates it from your prompt. Perfect for storytelling, comedy, and emotional content.</p>
              <Link href={ctaUrl} className="grok-card-link">Create Viral Reels →</Link>
            </div>
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">🎬</div>
              <h3>Short Film Directors</h3>
              <p>Create atmospheric scenes with ambient sound built-in. Dialogue scenes, tense moments, emotional beats — Grok understands narrative audio.</p>
              <Link href={ctaUrl} className="grok-card-link">Make Short Films →</Link>
            </div>
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">📢</div>
              <h3>Ad Creators</h3>
              <p>Produce voiceover-driven ads without separate recording. Describe your product and message — Grok generates visuals AND narration.</p>
              <Link href={ctaUrl} className="grok-card-link">Create Ads →</Link>
            </div>
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">🎮</div>
              <h3>Game Trailers</h3>
              <p>Generate epic cinematic trailers with synchronized music and sound effects. Perfect for indie game marketing.</p>
              <Link href={ctaUrl} className="grok-card-link">Make Game Trailers →</Link>
            </div>
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">🎤</div>
              <h3>Music Visualizers</h3>
              <p>Create abstract visuals that react to generated music. Perfect for lofi channels, ambient music, and audio-focused content.</p>
              <Link href={ctaUrl} className="grok-card-link">Generate Visualizers →</Link>
            </div>
            <div className="grok-usecase-card">
              <div className="grok-usecase-icon">📚</div>
              <h3>Storytime Creators</h3>
              <p>Generate narrated story videos with matching visuals. Reddit stories, AITA posts, creepypasta — everything in one generation.</p>
              <Link href={ctaUrl} className="grok-card-link">Tell Stories →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="grok-section">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">What You Can Create With Grok Imagine</h2>
            <p className="grok-section-subtitle">Real prompts with audio — tested and proven</p>
          </div>
          <div className="grok-examples-grid">
            <div className="grok-example">
              <div className="grok-example-video-placeholder">
                <div className="grok-example-play">🎵 ▶️</div>
                <div className="grok-example-badge">With Audio</div>
              </div>
              <div className="grok-example-content">
                <h4>🎹 Jazz Cat</h4>
                <p className="grok-example-prompt">"A sophisticated orange cat playing piano in a dimly lit jazz club, soft blues piano music playing, smoke rising from a nearby table, cinematic, 720p"</p>
                <div className="grok-example-meta">
                  <span>🎵 Audio included · 5s · 720p · 47cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
            <div className="grok-example">
              <div className="grok-example-video-placeholder">
                <div className="grok-example-play">🎵 ▶️</div>
                <div className="grok-example-badge">With Audio</div>
              </div>
              <div className="grok-example-content">
                <h4>🌊 Ocean Sunset</h4>
                <p className="grok-example-prompt">"Waves crashing on a tropical beach at golden hour, gentle ocean sounds, seagulls in distance, warm orange and pink sky, relaxing atmosphere, 9:16 for Reels"</p>
                <div className="grok-example-meta">
                  <span>🎵 Ambient audio · 10s · 480p · 94cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
            <div className="grok-example">
              <div className="grok-example-video-placeholder">
                <div className="grok-example-play">🎵 ▶️</div>
                <div className="grok-example-badge">With Audio</div>
              </div>
              <div className="grok-example-content">
                <h4>🗣️ Motivational Speech</h4>
                <p className="grok-example-prompt">"Inspiring speaker on stage in front of cheering crowd, epic orchestral music building, camera slowly pushing in, dramatic lighting, 16:9"</p>
                <div className="grok-example-meta">
                  <span>🎵 Music + crowd audio · 5s · 720p · 47cr</span>
                  <Link href={ctaUrl}>Try this prompt →</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grok-center-cta">
            <Link href={ctaUrl} className="grok-btn-primary grok-btn-lg">
              🎵 Generate Your First Video with Audio →
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="grok-section grok-section-alt">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">How to Generate Grok Videos</h2>
            <p className="grok-section-subtitle">Three steps to video with sound</p>
          </div>
          <div className="grok-steps">
            <div className="grok-step">
              <div className="grok-step-num">1</div>
              <div className="grok-step-content">
                <h3>Write Your Prompt (Include Sound!)</h3>
                <p>Describe what you want to see AND hear. Unlike other models, Grok generates audio from your description. Mention music genre, ambient sounds, or even dialogue.</p>
                <div className="grok-step-tip">💡 Tip: "Epic orchestral music" or "Gentle rain sounds" or "Upbeat lofi beat"</div>
              </div>
            </div>
            <div className="grok-step">
              <div className="grok-step-num">2</div>
              <div className="grok-step-content">
                <h3>Choose Your Settings</h3>
                <p>Select duration (5s or 10s), resolution (480p or 720p), and aspect ratio (16:9 landscape, 9:16 vertical, or 1:1 square). Audio is automatically included.</p>
                <div className="grok-step-tip">💡 720p costs 47cr for 5s — best for most content. 480p works great for testing at 24cr.</div>
              </div>
            </div>
            <div className="grok-step">
              <div className="grok-step-num">3</div>
              <div className="grok-step-content">
                <h3>Generate & Post Directly</h3>
                <p>Click generate and wait 30–90 seconds. Your video will include synchronized audio. Download as MP4 and post directly — no extra editing or music hunting needed.</p>
                <div className="grok-step-tip">💡 Perfect for TikTok — audio is already synced to visuals. Use our <Link href="/tools/add-subtitles-to-videos">subtitle tool</Link> for captions.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="grok-section">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">Pro Tips For Grok Imagine</h2>
            <p className="grok-section-subtitle">Master the art of audio+video prompts</p>
          </div>
          <div className="grok-best-grid">
            <div className="grok-best-card">
              <h3>✅ Always Describe Audio</h3>
              <p>Grok's superpower is audio. Always mention sound in your prompt: "upbeat electronic music," "tense ambient drone," "birds chirping in a forest." The more specific, the better.</p>
            </div>
            <div className="grok-best-card">
              <h3>✅ Use Audio Cues for Pacing</h3>
              <p>Describe how sound changes over time: "music starts soft and builds to dramatic crescendo" or "distant thunder getting closer." This creates dynamic videos.</p>
            </div>
            <div className="grok-best-card">
              <h3>✅ Think Vertically for Social</h3>
              <p>Use 9:16 aspect ratio for TikTok and Reels. Grok's vertical videos are optimized for mobile viewing and perform better on short-form platforms.</p>
            </div>
            <div className="grok-best-card">
              <h3>✅ Layer Audio Descriptions</h3>
              <p>Combine multiple audio elements: "gentle piano music with rain in background and occasional thunder" creates rich, immersive soundscapes.</p>
            </div>
            <div className="grok-best-card">
              <h3>✅ Test with 480p First</h3>
              <p>At 24cr for 5s, 480p is perfect for testing prompts. Once you nail the concept, regenerate in 720p for final output.</p>
            </div>
            <div className="grok-best-card">
              <h3>✅ Create Audio-First Content</h3>
              <p>Scripts designed for TikTok audio trends work great. Describe trending sounds or emotions: "sad viral audio vibes" or "energetic dance music."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="grok-section grok-section-alt">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">7 Common Mistakes (And How to Fix Them)</h2>
            <p className="grok-section-subtitle">Don't waste credits — learn from others</p>
          </div>
          <div className="grok-mistakes-list">
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Forgetting to describe audio</strong> → You get silent video. Always mention sound: "with ambient music," "with nature sounds," "with dialogue."
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Using 720p for every test</strong> → Wastes credits. Use 480p (24cr) for testing, 720p (47cr) only for final output.
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Ignoring aspect ratio</strong> → 16:9 landscape on TikTok gets cropped. Use 9:16 for vertical platforms, 16:9 for YouTube.
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Vague audio descriptions</strong> → "Music" → generic. "Upbeat lo-fi hip hop beat with vinyl crackle" → specific and better.
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Expecting perfect dialogue</strong> → Grok generates music and ambiance well, but complex spoken words may not be perfect. Use our <Link href="/tools/ai-voice-generator">AI voice tool</Link> for narration.
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Not using the advantage</strong> → Other models don't have audio. Use Grok for content that needs sound — you'll stand out.
              </div>
            </div>
            <div className="grok-mistake">
              <div className="grok-mistake-icon">❌</div>
              <div className="grok-mistake-text">
                <strong>Skipping the workflow</strong> → Your Grok video is ready to post. Add subtitles with our <Link href="/tools/add-subtitles-to-videos">free tool</Link> and publish immediately.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="grok-section">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">Advanced Techniques for Pro Creators</h2>
            <p className="grok-section-subtitle">Take your audio+video content to the next level</p>
          </div>
          <div className="grok-advanced-grid">
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">🎵</div>
              <h3>Audio Layering Strategy</h3>
              <p>Describe multiple audio layers: "gentle piano melody + soft rain + distant traffic." Grok combines them into rich, immersive soundscapes that feel cinematic.</p>
            </div>
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">📱</div>
              <h3>TikTok Audio Trends</h3>
              <p>Describe popular audio styles: "sad violin trending on TikTok," "epic orchestral for transitions," "relaxing lofi beats for study videos." Match current trends.</p>
            </div>
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">🎬</div>
              <h3>Chain Multiple Clips</h3>
              <p>Generate 5-10 short clips from a single narrative, then edit together. Each clip has matching audio that flows across cuts — no awkward audio jumps.</p>
            </div>
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">🖼️</div>
              <h3>Image-to-Video with Audio</h3>
              <p>First generate an image with <Link href="/tools/grok-ai-image-generator">Grok Aurora</Link>, then animate it with Grok Imagine. Your static art comes to life with synchronized sound.</p>
            </div>
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">⚡</div>
              <h3>Bulk Generation Strategy</h3>
              <p>Create 10+ variations of a prompt with slight changes to audio description. Test which audio style performs best on your platform.</p>
            </div>
            <div className="grok-advanced-card">
              <div className="grok-advanced-icon">🎙️</div>
              <h3>Combine with Voiceover</h3>
              <p>Use <Link href="/tools/ai-voice-generation">Scenith's AI voice tool</Link> to add narration, then import into your Grok video. Best of both worlds — custom voiceover + AI visuals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="grok-section grok-section-alt">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">Grok Imagine vs Other AI Video Models</h2>
            <p className="grok-section-subtitle">Why audio changes everything</p>
          </div>
          <div className="grok-compare-table">
            <div className="grok-compare-row grok-compare-header">
              <div>Feature</div>
              <div>Grok Imagine</div>
              <div>Wan 2.5</div>
              <div>Kling 2.6</div>
              <div>Veo 3.1</div>
            </div>
            <div className="grok-compare-row">
              <div>🎵 Audio Generation</div>
              <div className="grok-feature-yes">✓ Yes (unique)</div>
              <div className="grok-feature-no">✗ No</div>
              <div className="grok-feature-no">✗ No</div>
              <div className="grok-feature-no">✗ No</div>
            </div>
            <div className="grok-compare-row">
              <div>💰 5s Cost (720p)</div>
              <div><strong>47cr</strong> (best value)</div>
              <div>92cr</div>
              <div>~130cr</div>
              <div>~186cr</div>
            </div>
            <div className="grok-compare-row">
              <div>📱 Vertical Mode</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
            </div>
            <div className="grok-compare-row">
              <div>⚡ Generation Speed</div>
              <div>Fast (30-60s)</div>
              <div>Medium (45-90s)</div>
              <div>Medium (45-90s)</div>
              <div>Slow (60-120s)</div>
            </div>
            <div className="grok-compare-row">
              <div>🎨 Unique Style</div>
              <div>xAI distinctive</div>
              <div>Cinematic</div>
              <div>Character-focused</div>
              <div>Ultra-realistic</div>
            </div>
            <div className="grok-compare-row">
              <div>📦 Image-to-Video</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
              <div className="grok-feature-yes">✓ Yes</div>
            </div>
          </div>
          <p className="grok-compare-note">Grok Imagine is the ONLY model in this list that generates synchronized audio — making it the best choice for TikTok, Reels, and any content where sound matters.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="grok-section grok-faq">
        <div className="grok-container">
          <div className="grok-section-header">
            <h2 className="grok-section-title">Frequently Asked Questions</h2>
            <p className="grok-section-subtitle">Everything about Grok AI Video Generator</p>
          </div>
          <div className="grok-faq-grid">
            <details className="grok-faq-item">
              <summary>What makes Grok Imagine different from other AI video models?</summary>
              <div className="grok-faq-answer">
                <p>Grok Imagine is the only major AI video model that generates synchronized audio alongside visuals. While Wan, Kling, and Veo produce silent videos, Grok creates music, ambient sound, and even basic dialogue that matches your scene. This makes it perfect for TikTok, Reels, and short-form content where audio is essential for engagement.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>How many credits does a Grok video cost?</summary>
              <div className="grok-faq-answer">
                <p>Grok uses resolution-based pricing: 480p costs 24cr for 5s (48cr for 10s), 720p costs 47cr for 5s (94cr for 10s). Free users get 50 credits on signup — enough to test in 480p. Paid plans start at $9/month for 300 credits, which covers multiple 720p videos with audio.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>Does Grok generate voiceover or dialogue?</summary>
              <div className="grok-faq-answer">
                <p>Grok can generate basic dialogue and voice-like sounds, but for professional narration, we recommend using our <Link href="/tools/ai-voice-generator">AI voice generator</Link> separately. Grok excels at music, ambiance, and sound effects — the emotional layer of video content.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>Can I use Grok videos on TikTok and Instagram?</summary>
              <div className="grok-faq-answer">
                <p>Absolutely. Grok's 9:16 vertical videos with built-in audio are optimized for TikTok, Instagram Reels, and YouTube Shorts. All content comes with full commercial rights — post directly, no attribution needed.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>How long does generation take?</summary>
              <div className="grok-faq-answer">
                <p>Typical generation time is 30–90 seconds. 480p videos generate faster than 720p. You can leave and return — your video will be saved in your history.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>What aspect ratios does Grok support?</summary>
              <div className="grok-faq-answer">
                <p>Grok supports three aspect ratios: 16:9 (landscape for YouTube), 9:16 (vertical for TikTok/Reels), and 1:1 (square for Instagram). For social media, 9:16 is recommended.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>Is Grok better than Wan or Kling?</summary>
              <div className="grok-faq-answer">
                <p>It depends on your needs. <strong>Grok</strong> is best for content that needs audio — social media clips, atmospheric scenes, emotional moments. <strong>Wan 2.5</strong> excels at cinematic landscapes. <strong>Kling 2.6</strong> is better for character animation. Try all three in our <Link href="/create-ai-content">AI Content Creator</Link> to see which fits your style.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>Can I generate videos from my own images?</summary>
              <div className="grok-faq-answer">
                <p>Yes! Use the "Image to Video" mode in our <Link href="/create-ai-content">AI Content Creator</Link>. Upload any image, and Grok will animate it with matching audio. Perfect for bringing static art or product photos to life with sound.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>What's the difference between Grok Imagine and Grok Aurora?</summary>
              <div className="grok-faq-answer">
                <p><strong>Grok Imagine</strong> is xAI's video generation model (creates moving video with audio). <strong>Grok Aurora</strong> is xAI's image generation model (creates static images). Use Aurora for images, then animate them with Imagine. Both are available on Scenith.</p>
              </div>
            </details>
            <details className="grok-faq-item">
              <summary>Do I need to add my own music?</summary>
              <div className="grok-faq-answer">
                <p>No — Grok generates original music and sound effects. You can describe the genre, mood, or specific instruments. However, you can also mute the generated audio and add your own if preferred.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA + Prompt Box */}
      <section className="grok-cta-section">
        <div className="grok-container">
          <div className="grok-cta-card">
            <h2 className="grok-cta-title">Ready to create videos with sound?</h2>
            <p className="grok-cta-desc">Start with 50 free credits — no credit card required.</p>
            
            {/* Prompt Input Box */}
            <PromptForm slug={slug} />

            <div className="grok-cta-features">
              <span>✓ 50 Free Credits</span>
              <span>✓ Audio Included</span>
              <span>✓ Commercial Rights</span>
              <span>✓ No Watermark</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="grok-internal-links">
        <div className="grok-container">
          <div className="grok-internal-links-content">
            <h3>Explore More AI Tools</h3>
            <div className="grok-links-grid">
              <Link href="/tools/ai-video-generator" className="grok-internal-link">🎬 AI Video Generator</Link>
              <Link href="/tools/wan-ai-video-generator" className="grok-internal-link">🎥 Wan AI Video</Link>
              <Link href="/tools/kling-ai-video-generator" className="grok-internal-link">🎞️ Kling AI Video</Link>
              <Link href="/tools/veo-3-ai-video-generator" className="grok-internal-link">🎬 Veo AI Video</Link>
              <Link href="/tools/ai-voice-generation" className="grok-internal-link">🎙️ AI Voice Generator</Link>
              <Link href="/tools/add-subtitles-to-videos" className="grok-internal-link">📝 Add Subtitles</Link>
              <Link href="/create-ai-content" className="grok-internal-link">🔊 Text to Speech</Link>
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
            "name": "Grok AI Video Generator",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web",
            "description": "Generate AI videos with synchronized audio using Grok Imagine. Create TikTok-ready vertical videos with music and sound effects built-in.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free credits on signup, paid plans from $9/month"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "850"
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
                "name": "What makes Grok Imagine different from other AI video models?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grok Imagine is the only major AI video model that generates synchronized audio alongside visuals, creating music, ambient sound, and sound effects that match your scene."
                }
              },
              {
                "@type": "Question",
                "name": "How many credits does a Grok video cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grok uses resolution-based pricing: 480p costs 24cr for 5s (48cr for 10s), 720p costs 47cr for 5s (94cr for 10s)."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use Grok videos on TikTok and Instagram?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Grok's 9:16 vertical videos with built-in audio are optimized for TikTok, Instagram Reels, and YouTube Shorts with full commercial rights."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}