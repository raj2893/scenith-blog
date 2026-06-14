import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Instagram Post Generator | Create Viral Posts & Carousels',
  description: 'Free AI Instagram post generator for creators & brands. Create scroll-stopping images, catchy captions, and engaging carousels. Optimized for reach and saves.',
  keywords: 'instagram post generator, ai instagram post, instagram carousel maker, ai caption generator',
};

export default function AIInstagramPostGeneratorPage() {
  const currentSlug = 'ai-instagram-post-generator';
  const ctaUrl = `/create-ai-content?tab=image&utm_source=${currentSlug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="igp-page">
      {/* Hero Section */}
      <section className="igp-hero">
        <div className="igp-container">
          <div className="igp-hero-badge">
            <span>📸 Instagram AI Studio</span>
          </div>
          <h1>AI Instagram Post Generator: Create Scroll-Stopping Content</h1>
          <p className="igp-hero-desc">
            Stop struggling with creator burnout. Our AI Instagram post generator creates
            <strong> on-brand images, attention-grabbing captions, and viral carousels</strong> in seconds.
            Join 10,000+ creators and brands saving 15+ hours weekly.
          </p>

          {/* Prompt Input Box */}
          <div className="igp-prompt-box">
            <div className="igp-prompt-header">
              <span>✨ Generate Your Instagram Post Now</span>
            </div>
            <form
              className="igp-prompt-form"
              action={ctaUrl}
              method="get"
              onSubmit={undefined}
            >
              <textarea
                className="igp-prompt-textarea"
                placeholder="E.g., 'Aesthetic flat lay of iced coffee and a notebook for a studygram' or 'Neon cyberpunk cityscape for a motivational quote'"
                rows={3}
                name="prompt"
              ></textarea>
              <button type="submit" className="igp-prompt-btn">
                Generate Post for Free →
              </button>
            </form>
            <div className="igp-prompt-trust">
              <span>✅ No credit card</span>
              <span>⚡ 10+ AI models</span>
              <span>📥 4K Downloads</span>
            </div>
          </div>

          <div className="igp-hero-stats">
            <div className="igp-stat">
              <strong>10,000+</strong>
              <span>Active Creators</span>
            </div>
            <div className="igp-stat">
              <strong>4.9/5</strong>
              <span>User Rating</span>
            </div>
            <div className="igp-stat">
              <strong>15hrs</strong>
              <span>Saved Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="igp-usecases">
        <div className="igp-container">
          <h2>Tailored for Every Creator & Niche</h2>
          <p className="igp-section-intro">
            From food bloggers to ecommerce brands, here's how different creators use our AI.
          </p>
          <div className="igp-usecase-grid">
            <div className="igp-usecase-card">
              <span className="igp-uc-icon">🍔</span>
              <h3>Food Bloggers</h3>
              <p>Generate mouth-watering flat lays and recipe teasers. Use style prompts like "rustic wooden table, golden hour lighting" to get consistent aesthetics.</p>
            </div>
            <div className="igp-usecase-card">
              <span className="igp-uc-icon">💄</span>
              <h3>Beauty & Fashion</h3>
              <p>Create product mockups, before/after visuals, and editorial looks. Our AI understands textures like "velvet matte lipstick" and "silk fabric".</p>
            </div>
            <div className="igp-usecase-card">
              <span className="igp-uc-icon">📈</span>
              <h3>Marketers & Agencies</h3>
              <p>Batch-produce ad creatives and carousels for multiple clients. Maintain brand colors with reference image uploads.</p>
            </div>
            <div className="igp-usecase-card">
              <span className="igp-uc-icon">👩‍🏫</span>
              <h3>Educators & Coaches</h3>
              <p>Turn complex ideas into simple, engaging carousel slides. Generate "explainer graphics" that boost saves and shares.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="igp-examples">
        <div className="igp-container">
          <h2>Real Examples: From Prompt to Viral Post</h2>
          <div className="igp-examples-grid">
            <div className="igp-example-card">
              <div className="igp-example-prompt">"Vintage travel poster of Paris, warm tones, retro typography"</div>
              <div className="igp-example-result">→ Travel blogger gets 12k+ likes, 400+ saves. Audience calls it "aesthetic perfection".</div>
            </div>
            <div className="igp-example-card">
              <div className="igp-example-prompt">"Minimalist 3D render of a meditation app interface, soft lavender background"</div>
              <div className="igp-example-result">→ Wellness coach uses for lead magnet. CTR up 35%.</div>
            </div>
            <div className="igp-example-card">
              <div className="igp-example-prompt">"Dark fantasy warrior holding a glowing sword, stormy sky, cinematic lighting"</div>
              <div className="igp-example-result">→ Gaming page reaches 2M accounts, 50k+ shares.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="igp-howto">
        <div className="igp-container">
          <h2>How to Generate Instagram Posts with AI (5-Minute Guide)</h2>
          <div className="igp-steps">
            <div className="igp-step">
              <div className="igp-step-num">1</div>
              <div><strong>Enter your vision</strong><br />Describe what you want. Be specific about mood, lighting, and composition.</div>
            </div>
            <div className="igp-step">
              <div className="igp-step-num">2</div>
              <div><strong>Select AI model & style</strong><br />Choose from Photorealistic, Anime, 3D Render, or Digital Art.</div>
            </div>
            <div className="igp-step">
              <div className="igp-step-num">3</div>
              <div><strong>Generate & refine</strong><br />Get 4 variants. Mix and match or regenerate with tweaks.</div>
            </div>
            <div className="igp-step">
              <div className="igp-step-num">4</div>
              <div><strong>Post & analyze</strong><br />Download in perfect 1:1, 4:5, or 16:9. Use our caption generator for engagement.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="igp-best-practices">
        <div className="igp-container">
          <h2>Best Practices for High-Performing Instagram Posts</h2>
          <p className="igp-section-intro">Data-backed tips from analyzing 1M+ posts.</p>
          <div className="igp-bp-grid">
            <div className="igp-bp-item">
              <h3>🎨 Color Psychology</h3>
              <p>Posts with blue/purple tones get 24% more saves. Use "teal and magenta" or "pastel gradients" for high retention.</p>
            </div>
            <div className="igp-bp-item">
              <h3>📐 Vertical First</h3>
              <p>Design in 4:5 ratio (1080x1350). It takes up 79% more screen space than square on feed.</p>
            </div>
            <div className="igp-bp-item">
              <h3>🧠 Text Hierarchy</h3>
              <p>Use 3 layers of text in carousels: Hook (Slide 1), Value (Slides 2-8), CTA (Slide 10).</p>
            </div>
            <div className="igp-bp-item">
              <h3>✨ Negative Space</h3>
              <p>Leave 20-30% of the image free for captions and UI elements. Makes text more readable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="igp-mistakes">
        <div className="igp-container">
          <h2>10 Common Instagram Posting Mistakes (And How AI Fixes Them)</h2>
          <ul className="igp-mistakes-list">
            <li><strong>❌ Blurry images:</strong> Our AI generates crisp 4K resolution natively.</li>
            <li><strong>❌ Inconsistent branding:</strong> Lock your color palette and style across all generations.</li>
            <li><strong>❌ Poor font choices:</strong> Use our caption builder for perfect typography every time.</li>
            <li><strong>❌ No clear focal point:</strong> AI composition models follow the rule of thirds automatically.</li>
            <li><strong>❌ Too much clutter:</strong> Our minimalist presets ensure clean, professional looks.</li>
            <li><strong>❌ Ignoring alt text:</strong> We generate SEO-friendly alt text for every image.</li>
            <li><strong>❌ Forgetting a CTA:</strong> Our tool suggests context-aware calls-to-action based on your niche.</li>
            <li><strong>❌ Over-filtering:</strong> AI-generated natural lighting looks authentic and performs better.</li>
            <li><strong>❌ Wrong aspect ratio:</strong> Our presets auto-optimize for feed, stories, and reels.</li>
            <li><strong>❌ Posting inconsistently:</strong> Batch-create a week's worth of posts in one sitting.</li>
          </ul>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="igp-advanced">
        <div className="igp-container">
          <h2>Advanced AI Techniques for Instagram Growth</h2>
          <div className="igp-advanced-grid">
            <div className="igp-advanced-card">
              <h3>1. The "Series" Strategy</h3>
              <p>Generate 10 carousel slides with a consistent character or theme. Use the same seed number to maintain visual continuity.</p>
            </div>
            <div className="igp-advanced-card">
              <h3>2. A/B Test in 5 Minutes</h3>
              <p>Create 4 different cover images for the same carousel. Run them as stories first to see which gets more taps.</p>
            </div>
            <div className="igp-advanced-card">
              <h3>3. Blend AI with UGC</h3>
              <p>Use 'image-to-image' mode to transform your real photos into illustrated or stylized versions for brand cohesion.</p>
            </div>
            <div className="igp-advanced-card">
              <h3>4. Repurpose to Reels</h3>
              <p>Export your carousel slides as a video and add AI voiceover. This dual-format content gets 200% more reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="igp-internal-links">
        <div className="igp-container">
          <h3>More Tools to Supercharge Your Instagram</h3>
          <div className="igp-links-grid">
            <Link href="/tools/ai-image-generation" className="igp-link-card">🎨 AI Image Generation</Link>
            <Link href="/tools/ai-caption-generator" className="igp-link-card">📝 AI Caption Generator</Link>
            <Link href="/tools/ai-video-generation" className="igp-link-card">🎬 AI Reels Maker</Link>
            <Link href="/tools/ai-hashtag-generator" className="igp-link-card">#️⃣ Hashtag Generator</Link>
            <Link href="/tools/ai-background-remover" className="igp-link-card">✂️ Background Remover</Link>
            <Link href="/tools/ai-logo-maker" className="igp-link-card">🏷️ Brand Logo Maker</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="igp-faq">
        <div className="igp-container">
          <h2>Frequently Asked Questions</h2>
          <div className="igp-faq-grid">
            <details className="igp-faq-item">
              <summary>Is the AI Instagram post generator really free?</summary>
              <p>Yes! You get 50 free credits on signup, no credit card required. Each image generation costs 1-5 credits depending on the model. The free plan gives you enough to create 10-50 posts.</p>
            </details>
            <details className="igp-faq-item">
              <summary>Can I use the images for commercial purposes?</summary>
              <p>Absolutely. You own full commercial rights to every image you generate. Use them for client work, product listings, ads, or merchandise — no attribution required.</p>
            </details>
            <details className="igp-faq-item">
              <summary>What resolutions and aspect ratios are supported?</summary>
              <p>We support 1:1 (square, ideal for feed), 4:5 (portrait, best for mobile), and 16:9 (landscape, for stories/reels). All images are generated in at least 1024x1024 resolution.</p>
            </details>
            <details className="igp-faq-item">
              <summary>How do I get the best results for carousel posts?</summary>
              <p>Use our 'Carousel Mode' to generate multiple slides with one prompt. Keep the theme consistent but vary each slide's focus slightly. Aim for 5-10 slides for maximum engagement.</p>
            </details>
            <details className="igp-faq-item">
              <summary>Can I upload my own image as a reference?</summary>
              <p>Yes. Use 'Image-to-Image' mode to upload a brand photo or style reference. The AI will generate new images that match the composition, colors, or mood of your upload.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="igp-final-cta">
        <div className="igp-container">
          <div className="igp-final-card">
            <h2>Ready to 10x Your Instagram Engagement?</h2>
            <p>Stop guessing. Start generating posts that your audience will love, save, and share.</p>
            <Link href={ctaUrl} className="igp-final-btn">
              🚀 Generate Your First Post Free
            </Link>
            <p className="igp-final-note">No credit card. No watermarks. Full commercial rights.</p>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is the AI Instagram post generator really free?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes! You get 50 free credits on signup, no credit card required.' }
              },
              {
                '@type': 'Question',
                name: 'Can I use the images for commercial purposes?',
                acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. You own full commercial rights to every image you generate.' }
              },
              {
                '@type': 'Question',
                name: 'What resolutions and aspect ratios are supported?',
                acceptedAnswer: { '@type': 'Answer', text: 'We support 1:1 (square), 4:5 (portrait), and 16:9 (landscape).' }
              }
            ]
          })
        }}
      />
    </div>
  );
}