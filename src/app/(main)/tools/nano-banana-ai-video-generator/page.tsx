// app/tools/nano-banana-ai-video-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'Nano Banana AI Video Generator: Create Cinematic 4K Videos from Text | Scenith',
  description: 'Generate stunning 4K cinematic videos from text prompts with Nano Banana AI. High-quality character consistency, motion control & NFT-ready animations. Free credits included.',
  keywords: 'nano banana ai video generator, banana ai video, nano banana text to video, ai video generator 4k, cinematic ai video, character consistent ai video, nano banana animation',
  openGraph: {
    title: 'Nano Banana AI Video Generator: 4K Cinematic Text-to-Video',
    description: 'Create stunning 4K videos with consistent characters, precise motion control, and cinematic quality. Free credits on signup.',
    type: 'website',
    url: 'https://scenith.in/tools/nano-banana-ai-video-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana AI Video Generator',
    description: 'Generate 4K cinematic videos from text prompts with character consistency.',
  },
};

export default function NanoBananaAIVideoGeneratorPage() {
  const currentSlug = 'nano-banana-ai-video-generator';
  const utmParams = `?tab=video&utm_source=${currentSlug}&utm_medium=cta&utm_campaign=seo`;
  const ctaHref = `/create-ai-content${utmParams}`;

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Nano Banana AI video generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nano Banana AI is a next-generation text-to-video model that produces 4K cinematic videos with unparalleled character consistency, precise motion control, and photorealistic quality — designed for creators who need professional results without complex workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Nano Banana AI free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scenith offers 50 free credits on signup, which can be used for Nano Banana AI video generation. Paid plans start at $9/month for 300 credits, unlocking 4K resolution and priority generation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Nano Banana different from other AI video generators?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nano Banana excels at character consistency across multiple scenes, precise camera motion control (zoom, pan, orbit), and rendering 4K resolution. It understands complex prompts with multiple subjects, actions, and environmental changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Nano Banana videos commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — all videos generated on Scenith come with full commercial rights. You can use them in YouTube videos, ads, products, NFTs, and any commercial project without attribution.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="nano-banana-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-badge">
              <span className="badge-new">🎬 Next-Gen AI Video</span>
            </div>
            <h1 className="hero-title">
              Nano Banana <span className="gradient-text">AI Video Generator</span>
            </h1>
            <p className="hero-subtitle">
              Create stunning 4K cinematic videos from text prompts with unprecedented character consistency, 
              precise motion control, and photorealistic quality — powered by Google's most advanced video model.
            </p>
            <div className="hero-cta-group">
              <Link href={ctaHref} className="btn-primary">
                🎬 Generate Nano Banana Videos → <span className="btn-arrow">→</span>
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">4K</span>
                <span className="stat-label">Ultra HD Resolution</span>
              </div>
              <div className="stat">
                <span className="stat-number">10s</span>
                <span className="stat-label">Max Duration</span>
              </div>
              <div className="stat">
                <span className="stat-number">16:9/9:16</span>
                <span className="stat-label">Aspect Ratios</span>
              </div>
              <div className="stat">
                <span className="stat-number">50</span>
                <span className="stat-label">Free Credits</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Nano Banana Special */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>What Makes <span className="gradient-text">Nano Banana</span> Different?</h2>
              <p>Unlike other AI video models, Nano Banana was built from the ground up for professional creators who demand consistency, control, and cinematic quality.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎭</div>
                <h3>Unmatched Character Consistency</h3>
                <p>Nano Banana preserves character identity across multiple scenes, angles, and actions. Your protagonist looks the same in wide shots, close-ups, and profile views — no more morphing faces or clothing changes between frames.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎮</div>
                <h3>Precise Motion Control</h3>
                <p>Describe exactly how the camera moves: "slow zoom into her eyes," "orbit around the statue," "pan from left to right across the cityscape." Nano Banana executes cinematic camera directions with professional precision.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📺</div>
                <h3>True 4K Cinematic Quality</h3>
                <p>Generate videos at native 4K resolution with filmic grain, depth of field, and natural lighting. Nano Banana renders textures, reflections, and atmospheric effects that rival traditional animation and live-action footage.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>Complex Scene Understanding</h3>
                <p>Describe multiple subjects, layered actions, and environmental changes — "a knight on horseback rides through a burning village as villagers flee." Nano Banana understands and renders complex narrative prompts accurately.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Any Style, Any Genre</h3>
                <p>From photorealistic live-action to anime, fantasy, sci-fi, and vintage film — Nano Banana adapts to any visual style. Just include your desired aesthetic in the prompt.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>5-Second Generation</h3>
                <p>Nano Banana's turbo mode generates 5-second clips in as little as 60 seconds — fast enough for iterative creative workflows and social media content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="usecases-section">
          <div className="container">
            <div className="section-header">
              <h2>Who Uses <span className="gradient-text">Nano Banana</span>?</h2>
              <p>From indie creators to marketing agencies — Nano Banana is transforming how professional video content is made.</p>
            </div>
            <div className="usecases-grid">
              <div className="usecase-card">
                <span className="usecase-icon">🎬</span>
                <h3>YouTubers & Storytellers</h3>
                <p>Create faceless YouTube videos with consistent characters that evolve across episodes. Generate B-roll, animated sequences, and cinematic intros without expensive production gear.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "Fantasy warrior with silver hair and green eyes draws her sword in a misty forest, slow-motion close-up of her determined expression, cinematic lighting, 4K."
                </div>
              </div>
              <div className="usecase-card">
                <span className="usecase-icon">📢</span>
                <h3>Marketers & Ad Agencies</h3>
                <p>Produce product demo videos, brand storytelling spots, and social media ads at a fraction of traditional production costs. Iterate on concepts instantly without reshoots.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "A modern smartwatch on a desk, sunlight streaming through window, hand reaches in to tap the screen which lights up with UI animations, product photography aesthetic."
                </div>
              </div>
              <div className="usecase-card">
                <span className="usecase-icon">🎮</span>
                <h3>Game Developers</h3>
                <p>Generate concept trailers, cutscene animations, and environment flythroughs for indie games. Create promotional videos that show actual gameplay style.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "Cyberpunk alleyway at night, neon signs reflect on wet pavement, a cloaked figure walks toward camera, rain falling, drone shot descending slowly."
                </div>
              </div>
              <div className="usecase-card">
                <span className="usecase-icon">🎓</span>
                <h3>Educators & Course Creators</h3>
                <p>Bring abstract concepts to life with animated explainer videos. Generate historical reenactments, scientific visualizations, and engaging lesson introductions.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "Animated diagram of the solar system, planets orbiting the sun, educational style with clear labels, smooth camera pan from Mercury to Neptune."
                </div>
              </div>
              <div className="usecase-card">
                <span className="usecase-icon">🛍️</span>
                <h3>E-commerce Brands</h3>
                <p>Create lifestyle videos showing your products in use across different scenarios. Generate seasonal campaigns and product showcases without expensive photoshoots.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "Cozy living room with a leather armchair by a fireplace, a person holds a steaming mug, soft warm lighting, slow camera push-in, home aesthetic."
                </div>
              </div>
              <div className="usecase-card">
                <span className="usecase-icon">🎨</span>
                <h3>NFT & Digital Artists</h3>
                <p>Animate your static artwork into living, breathing scenes. Generate 4K video NFTs with consistent character designs and fluid motion.</p>
                <div className="usecase-example">
                  <strong>Example prompt:</strong> "Anime-style samurai standing on a mountaintop at sunset, cherry blossom petals blowing in wind, cape flowing dramatically, epic wide shot."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="guide-section">
          <div className="container">
            <div className="section-header">
              <h2>How to Generate Videos with <span className="gradient-text">Nano Banana AI</span></h2>
              <p>Three simple steps from prompt to 4K cinematic video — no technical skills required.</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">✍️</div>
                <h3>Write Your Video Prompt</h3>
                <p>Describe the scene, characters, actions, camera movement, and visual style. Be specific — Nano Banana understands detailed directions.</p>
                <div className="step-tip">
                  💡 <strong>Pro tip:</strong> Include camera directions like "slow zoom," "drone shot," or "close-up" for cinematic results.
                </div>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">⚙️</div>
                <h3>Choose Settings</h3>
                <p>Select duration (5s or 10s), aspect ratio (16:9 for YouTube, 9:16 for TikTok/Reels), and resolution (2K or 4K). Audio-enabled versions available.</p>
                <div className="step-tip">
                  💡 <strong>Pro tip:</strong> Use 5-second clips for social media, 10-second for narrative scenes and establishing shots.
                </div>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">🎬</div>
                <h3>Generate & Download</h3>
                <p>Click generate — videos typically ready in 60–120 seconds. Download MP4 directly or continue refining with the same character.</p>
                <div className="step-tip">
                  💡 <strong>Pro tip:</strong> Use the "image to video" mode to animate your existing artwork or product photos.
                </div>
              </div>
            </div>
            <div className="guide-cta">
              <Link href={ctaHref} className="btn-primary-large">
                🎬 Start Your First Nano Banana Video →
              </Link>
            </div>
          </div>
        </section>

        {/* Real-World Examples Section */}
        <section className="examples-section">
          <div className="container">
            <div className="section-header">
              <h2>Real <span className="gradient-text">Examples</span> You Can Create</h2>
              <p>See what creators are making with Nano Banana AI video generator across different platforms and genres.</p>
            </div>
            <div className="examples-grid">
              <div className="example-card">
                <div className="example-platform youtube">📺 YouTube</div>
                <h3>Documentary-Style Nature Scenes</h3>
                <p className="example-prompt">"Aerial drone shot flying over a misty Amazon rainforest canopy at golden hour, sunlight breaking through clouds, river winding through trees below, cinematic 4K."</p>
                <p className="example-use">Perfect for nature documentaries, travel vlogs, and ambient background videos.</p>
              </div>
              <div className="example-card">
                <div className="example-platform tiktok">📱 TikTok/Reels</div>
                <h3>Character-Driven Storytelling</h3>
                <p className="example-prompt">"Young detective with messy brown hair examines a glowing clue on a rainy city street at midnight, neon signs reflect on puddles, slow-motion close-up of her surprised expression."</p>
                <p className="example-use">Ideal for serialized storytelling, webtoon adaptations, and interactive fiction trailers.</p>
              </div>
              <div className="example-card">
                <div className="example-platform brand">🏢 Brand</div>
                <h3>Product Launch Trailer</h3>
                <p className="example-prompt">"360-degree rotating shot of a futuristic electric vehicle in a white studio, dramatic spotlights, chrome surfaces reflecting light, cinematic camera sweep, ultra-detailed 4K."</p>
                <p className="example-use">Great for crowdfunding campaigns, product pages, and investor pitch decks.</p>
              </div>
              <div className="example-card">
                <div className="example-platform music">🎵 Music</div>
                <h3>Lyric Video Backgrounds</h3>
                <p className="example-prompt">"Abstract fluid simulation of neon colors swirling and morphing in slow motion, dark background, hypnotic patterns responding to imaginary beat, trippy and mesmerizing."</p>
                <p className="example-use">Perfect for music visualizers, ambient live streams, and club visuals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bestpractices-section">
          <div className="container">
            <div className="section-header">
              <h2>Nano Banana <span className="gradient-text">Best Practices</span></h2>
              <p>Get the highest quality results by following these proven techniques.</p>
            </div>
            <div className="practices-grid">
              <div className="practice-card">
                <h3>🎯 Be Specific About Characters</h3>
                <p>Instead of "a person," describe key details: "young woman with short blonde hair wearing a leather jacket" or "elderly man with a grey beard and glasses." This ensures consistency across generations.</p>
              </div>
              <div className="practice-card">
                <h3>🎥 Describe Camera Movement First</h3>
                <p>Start your prompt with camera direction for the best results: "Slow zoom in on..." or "Drone shot circling..." tells Nano Banana what you want before describing the scene.</p>
              </div>
              <div className="practice-card">
                <h3>🌅 Set Lighting & Mood</h3>
                <p>Specify atmosphere: "golden hour lighting," "neon noir," "soft morning light," or "dramatic Rembrandt lighting" — this dramatically improves visual quality and mood.</p>
              </div>
              <div className="practice-card">
                <h3>📏 Start with 5 Seconds</h3>
                <p>For complex scenes or new character designs, generate 5-second clips first to verify quality, then extend to 10 seconds once you're confident in the output.</p>
              </div>
              <div className="practice-card">
                <h3>🔄 Reuse Successful Prompts</h3>
                <p>Save prompts that work well. Change only one variable at a time — character position, camera angle, or lighting — to build a consistent visual library.</p>
              </div>
              <div className="practice-card">
                <h3>🎬 Use Image-to-Video for Control</h3>
                <p>Upload a reference image or previously generated frame for precise character control. Nano Banana will animate your specific image while maintaining identity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="mistakes-section">
          <div className="container">
            <div className="section-header">
              <h2>Common Mistakes to <span className="gradient-text">Avoid</span></h2>
              <p>Even experienced creators make these errors — here's how to fix them.</p>
            </div>
            <div className="mistakes-list">
              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Vague character descriptions</h3>
                  <p>"A person walks down a street" → Generic, inconsistent results.</p>
                  <div className="mistake-fix">✅ "A tall man in a navy trench coat and fedora walks down a rainy Brooklyn street at night"</div>
                </div>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Overloading the prompt</h3>
                  <p>Trying to describe 5 different actions, 3 characters, and 2 camera moves in 5 seconds → confusing outputs.</p>
                  <div className="mistake-fix">✅ Focus on 1-2 actions per clip. Use multiple 5-second clips for complex scenes.</div>
                </div>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>Forgetting aspect ratio</h3>
                  <p>Generating 16:9 for TikTok results in letterboxed, small videos.</p>
                  <div className="mistake-fix">✅ Always match aspect ratio to your platform: 9:16 for vertical (TikTok/Reels/Shorts), 16:9 for YouTube.</div>
                </div>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">❌</div>
                <div className="mistake-content">
                  <h3>No lighting direction</h3>
                  <p>Flat, default lighting makes videos look artificial and cheap.</p>
                  <div className="mistake-fix">✅ Always specify "golden hour," "cinematic lighting," "soft diffused light," or "dramatic shadows."</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tips Section */}
        <section className="advanced-section">
          <div className="container">
            <div className="section-header">
              <h2>Advanced <span className="gradient-text">Techniques</span> for Pro Results</h2>
              <p>Level up your Nano Banana videos with these expert strategies.</p>
            </div>
            <div className="advanced-grid">
              <div className="advanced-card">
                <h3>🎭 Build a Character Bible</h3>
                <p>Generate 5-10 reference frames of your character from different angles and expressions. Use these as image-to-video inputs for consistent animation across your entire project.</p>
              </div>
              <div className="advanced-card">
                <h3>🎨 Combine with AI Voiceover</h3>
                <p>Generate a voiceover with Scenith's <Link href="/create-ai-content?tab=voice" className="inline-link">AI Voice Generator</Link>, then sync with your Nano Banana video for complete animated storytelling.</p>
              </div>
              <div className="advanced-card">
                <h3>🔄 Generate B-Roll Sequences</h3>
                <p>Create establishing shots, close-ups, and reaction shots separately. Edit them together in any video editor for a fully produced narrative sequence.</p>
              </div>
              <div className="advanced-card">
                <h3>🎬 Use Depth of Field Cues</h3>
                <p>Add "shallow depth of field," "background bokeh," or "sharp focus on subject" to separate characters from backgrounds — Nano Banana executes these cinematography terms precisely.</p>
              </div>
              <div className="advanced-card">
                <h3>🌍 Generate Multi-Language Content</h3>
                <p>Create videos with culturally appropriate scenes for different markets. Nano Banana understands location-specific details like architecture, clothing, and landscapes.</p>
              </div>
              <div className="advanced-card">
                <h3>⚡ Batch Generate for Efficiency</h3>
                <p>Use the same seed characters across multiple prompts to build a library of clips for your project. Change only the action or camera angle each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p>Everything you need to know about Nano Banana AI video generation.</p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is Nano Banana AI video generator?</h3>
                <p>Nano Banana is Google's advanced text-to-video model that creates 4K cinematic videos from written descriptions. It excels at character consistency, precise camera motion control, and photorealistic rendering — making it ideal for storytellers, marketers, and content creators.</p>
              </div>
              <div className="faq-item">
                <h3>Is Nano Banana AI free to use?</h3>
                <p>Scenith offers 50 free credits on signup, which can be used for Nano Banana video generation. Free credits cover 5-second 2K videos. For 4K resolution, longer durations, and higher volume, paid plans start at $9/month for 300 credits.</p>
              </div>
              <div className="faq-item">
                <h3>How long does generation take?</h3>
                <p>5-second clips typically generate in 60–90 seconds. 10-second clips take 90–120 seconds. Generation time varies slightly based on server load and resolution (4K takes longer than 2K).</p>
              </div>
              <div className="faq-item">
                <h3>Can I use Nano Banana videos on YouTube/TikTok?</h3>
                <p>Absolutely. All videos generated on Scenith come with full commercial rights. You can monetize them on YouTube, use them in ads, or include them in products you sell — no attribution required.</p>
              </div>
              <div className="faq-item">
                <h3>Does Nano Banana support image-to-video?</h3>
                <p>Yes — you can upload a reference image or use a previously generated frame as the starting point. Nano Banana will animate your specific image while preserving character identity and details.</p>
              </div>
              <div className="faq-item">
                <h3>What's the difference between 2K and 4K?</h3>
                <p>2K resolution (2048×1152 for 16:9) is excellent for social media and web use. 4K (3840×2160) provides significantly more detail, sharper textures, and professional broadcast quality — ideal for film projects, high-end commercials, and large screens.</p>
              </div>
              <div className="faq-item">
                <h3>Can I generate videos with audio?</h3>
                <p>Yes — Nano Banana offers an audio-enabled mode that generates synchronized ambient sound or character voice. For full voiceover control, we recommend pairing with Scenith's <Link href="/create-ai-content?tab=voice" className="inline-link">AI Voice Generator</Link> for perfect lip-sync and narration.</p>
              </div>
              <div className="faq-item">
                <h3>What file format do I get?</h3>
                <p>All generated videos download as MP4 files with H.264 encoding — compatible with every video editor, social platform, and media player.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="internal-links-section">
  <div className="container">

    <div className="section-header">
      <h2>
        Explore More <span className="gradient-text">AI Tools</span>
      </h2>
      <p>
        Complete your creative workflow with Scenith's suite of AI content tools.
      </p>
    </div>

    <div className="internal-links-grid">

      <Link
        href="/tools/narration-ai-voice-generator"
        className="internal-link-card"
      >
        <span className="link-icon">🎙️</span>
        <div>
          <h3>AI Voice Generator</h3>
          <p>
            40+ natural voices, 20+ languages — perfect for voiceovers and narration.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

      <Link
        href="/tools/ai-image-generation"
        className="internal-link-card"
      >
        <span className="link-icon">🖼️</span>
        <div>
          <h3>AI Image Generator</h3>
          <p>
            Generate stunning AI images, social media graphics, wallpapers, and creative visuals.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

      <Link
        href="/tools/ai-video-generator-online"
        className="internal-link-card"
      >
        <span className="link-icon">🎬</span>
        <div>
          <h3>AI Video Generator</h3>
          <p>
            Create cinematic AI videos for YouTube, TikTok, Instagram, and marketing campaigns.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

      <Link
        href="/tools/ai-video-generator-for-youtube"
        className="internal-link-card"
      >
        <span className="link-icon">🎥</span>
        <div>
          <h3>YouTube AI Video Generator</h3>
          <p>
            Generate faceless YouTube content, Shorts, explainers, and viral video scripts.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

      <Link
        href="/tools/viral-reels-generator-ai"
        className="internal-link-card"
      >
        <span className="link-icon">🌊</span>
        <div>
          <h3>AI Reels Generator</h3>
          <p>
            Create viral Instagram Reels with AI visuals, captions, and trending hooks.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

      <Link
        href="/tools/tiktok-ai-video-generator"
        className="internal-link-card"
      >
        <span className="link-icon">🚀</span>
        <div>
          <h3>TikTok AI Video Generator</h3>
          <p>
            Generate fast-paced TikTok videos with AI voiceovers, visuals, and storytelling.
          </p>
        </div>
        <span className="link-arrow">→</span>
      </Link>

    </div>

    <div className="main-cta">
      <Link
        href="/create-ai-content?utm_source=internal_links&utm_medium=seo&utm_campaign=ai_tools"
        className="btn-primary-large"
      >
        🎨 Go to AI Content Creator →
      </Link>
    </div>

  </div>
</section>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="container">
            <div className="final-cta-card">
              <h2>Ready to Create Your First <span className="gradient-text">Nano Banana Video</span>?</h2>
              <p>Join thousands of creators using Scenith to produce professional 4K cinematic videos in minutes — not days.</p>
              <div className="prompt-box">
                <p className="prompt-label">✍️ Try this prompt right now:</p>
                <p className="prompt-example">"Cinematic shot of a samurai standing on a misty mountain at sunrise, cherry blossoms blowing in wind, slow-motion sword draw, epic wide angle, 4K"</p>
              </div>
              <Link href={ctaHref} className="btn-primary-large">
                🎬 Generate Your Video Now →
              </Link>
              <p className="free-note">✨ 50 free credits on signup — no credit card required</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}