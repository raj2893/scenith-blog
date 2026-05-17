// app/tools/ai-caption-generator-for-faceless-pages/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Caption Generator for Faceless Pages | Best Scripts for YouTube & TikTok',
  description: 'Generate high-retention AI captions for faceless YouTube channels, TikTok reels, and Instagram stories. Get voiceover-ready scripts + turn them into videos.',
  keywords: 'ai caption generator, faceless youtube channel, ai video script, tiktok voiceover, instagram reels script, ai content creation',
  openGraph: {
    title: 'AI Caption Generator for Faceless Pages',
    description: 'Stop wasting hours on scripts. Generate scroll-stopping captions + turn them into AI videos.',
    type: 'website',
  },
};

export default function AICaptionGeneratorForFacelessPages() {
  const currentSlug = 'ai-caption-generator-for-faceless-pages';
  const baseCtaUrl = `/create-ai-content?tab=voice&utm_source=${currentSlug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <>
      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a faceless YouTube channel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A faceless YouTube channel is a channel where the creator never shows their face. Instead, they use stock footage, animations, AI-generated visuals, and voiceovers to tell stories, share facts, or entertain the audience. This format is popular for top 10 lists, history documentaries, AI art videos, motivational content, and creepypasta."
                }
              },
              {
                "@type": "Question",
                "name": "How do I write captions for a faceless video?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Write short, punchy lines that match your visuals. Open with a hook in the first 3 seconds, keep each caption under 10 words, and use emotional triggers like 'never expected this', 'wait for the end', or 'most people skip this'. Break long sentences into multiple captions to maintain pacing."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use an AI caption generator for free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — you can use the AI caption generator on this page to instantly create scripts. Then, head over to Scenith's AI Content Creator to turn those captions into voiceovers and videos. You get 50 free credits on signup to test everything."
                }
              }
            ]
          })
        }}
      />
      
      <div className="faceless-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">
              AI Caption Generator for <span className="gradient">Faceless Pages</span>
            </h1>
            <p className="hero-description">
              Generate high-retention scripts for YouTube, TikTok, and Instagram —<br />
              then turn them into AI voiceovers and videos in one click.
            </p>
            <div className="hero-cta-group">
              <Link href={baseCtaUrl} className="btn btn-primary btn-large">
                ✨ Generate Your Caption Now →
              </Link>
              <Link href="/create-ai-content?tab=video" className="btn btn-secondary btn-large">
                🎬 Or Go Straight to AI Video
              </Link>
            </div>
            <div className="hero-stats">
              <span>⚡ Used by 10,000+ creators</span>
              <span>🎙️ 40+ AI voices</span>
              <span>🎬 6 video models</span>
            </div>
          </div>
        </section>

        {/* Prompt Box with Generate Redirect */}
        <section className="prompt-box-section">
          <div className="container">
            <div className="prompt-card">
              <h2>Try it — generate a caption in seconds</h2>
              <p>Describe your video topic, and our AI will write a scroll-stopping script.</p>
              <form action={baseCtaUrl} method="GET" className="prompt-form">
                <textarea
                  name="text"
                  placeholder="e.g., 3 psychology facts that will change how you think | or: why most people fail at saving money"
                  rows={3}
                  className="prompt-input"
                />
                <button type="submit" className="btn btn-primary btn-full">
                  Generate Caption → (opens AI studio)
                </button>
              </form>
              <p className="prompt-hint">✨ No credit card required — get 50 free credits on signup</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="use-cases">
          <div className="container">
            <h2 className="section-title">Perfect for faceless creators on any platform</h2>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <span className="emoji-big">📹</span>
                <h3>YouTube Faceless Channels</h3>
                <p>Top 10 lists, history docs, Reddit stories, true crime, motivational quotes, and AI art showcases. Keep viewers watching with captions that match fast-paced stock footage.</p>
                <Link href="/create-ai-content?tab=voice" className="text-link">→ Generate voiceover</Link>
              </div>
              <div className="use-case-card">
                <span className="emoji-big">📱</span>
                <h3>TikTok & Reels</h3>
                <p>Hook viewers in the first 3 seconds. Our AI generates short, punchy captions optimized for vertical video and fast retention. Perfect for Reddit stories, POV, and text-on-screen formats.</p>
                <Link href={`${baseCtaUrl}&tab=voice`} className="text-link">→ Write viral scripts</Link>
              </div>
              <div className="use-case-card">
                <span className="emoji-big">🎙️</span>
                <h3>Voiceover Narration</h3>
                <p>Your captions become natural-sounding voiceovers using Google, OpenAI, or Azure AI voices. Choose from 40+ voices across 20 languages — no recording equipment needed.</p>
                <Link href="/create-ai-content?tab=voice" className="text-link">→ Try AI voice</Link>
              </div>
              <div className="use-case-card">
                <span className="emoji-big">📸</span>
                <h3>Instagram Carousels</h3>
                <p>Transform long-form captions into 3–10 slide carousels. Each slide gets one key takeaway, keeping your audience swiping and saving your posts.</p>
                <Link href="/create-ai-content?tab=image" className="text-link">→ Make carousel images</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Examples (Platform-Specific) */}
        <section className="examples">
          <div className="container">
            <h2 className="section-title">Real captions that work on each platform</h2>
            <div className="examples-grid">
              <div className="example-card">
                <span className="platform-badge youtube">YouTube</span>
                <h3>Top 10 Psychology Facts</h3>
                <div className="example-caption">
                  <p>"Number 7 will make you rethink every conversation you've ever had."</p>
                  <p>"Most people smile when they lie — here's the real sign to watch for."</p>
                  <p>"Psychologists call this the 'spotlight effect' and you do it every day."</p>
                </div>
                <p className="example-metrics">📈 Avg retention: 68% · Used by 1.2M view video</p>
                <Link href={`${baseCtaUrl}&text=${encodeURIComponent('Top 10 psychology facts that will change how you see yourself')}`} className="text-link">→ Use this style</Link>
              </div>
              <div className="example-card">
                <span className="platform-badge tiktok">TikTok / Reels</span>
                <h3>Reddit Story Hook</h3>
                <div className="example-caption">
                  <p>"My boss fired me for being 'too efficient' — so I did this."</p>
                  <p>"3 months later, his company lost 40% of its clients."</p>
                  <p>"And he called me begging to come back."</p>
                </div>
                <p className="example-metrics">⏱️ 7-second hook · 90% watched to end</p>
                <Link href={`${baseCtaUrl}&text=${encodeURIComponent('Write a Reddit-style revenge story about being fired for being too efficient')}`} className="text-link">→ Generate similar</Link>
              </div>
              <div className="example-card">
                <span className="platform-badge instagram">Instagram Carousel</span>
                <h3>5 Money Rules</h3>
                <div className="example-caption">
                  <p>Slide 1: "Rule 1: Stop trying to save what's left after spending."</p>
                  <p>Slide 2: "Instead, pay yourself first — even $20 changes the game."</p>
                  <p>Slide 5: "Most millionaires didn't inherit wealth. They followed these 5 rules."</p>
                </div>
                <p className="example-metrics">💾 4.2k saves · 78% swipe-through rate</p>
                <Link href="/create-ai-content?tab=image" className="text-link">→ Turn into carousel</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Explanation */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">From caption to viral video in 4 steps</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Describe your topic</h3>
                <p>Type any topic — true crime, facts, motivation, history, or a story. Our AI instantly generates a script with hooks, pacing, and a strong CTA.</p>
                <Link href={`${baseCtaUrl}&tab=voice`} className="text-link">→ Start with a topic</Link>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Edit or regenerate</h3>
                <p>Tweak the captions to match your brand voice. Or click "regenerate" to get a different angle, tone (funny/serious/inspiring), or length.</p>
                <Link href={`${baseCtaUrl}&tab=voice`} className="text-link">→ Refine your script</Link>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Add AI voiceover</h3>
                <p>Choose from 40+ AI voices across 20 languages. Generate an MP3 in seconds — no recording booth or microphone needed.</p>
                <Link href="/create-ai-content?tab=voice" className="text-link">→ Browse voices</Link>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Turn into video (optional)</h3>
                <p>Use the same script to generate an AI video with motion, stock visuals, or animated captions. Download MP4 ready for upload.</p>
                <Link href="/create-ai-content?tab=video" className="text-link">→ Create video now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="best-practices">
          <div className="container">
            <h2 className="section-title">Pro tips for high-retention faceless captions</h2>
            <div className="tips-grid">
              <div className="tip">
                <h3>🎯 Hook in 3 seconds</h3>
                <p>Your first caption must interrupt the scroll. Use "Wait for the end", "Most people don't know this", or a shocking stat. Test 5 hooks before committing.</p>
              </div>
              <div className="tip">
                <h3>⏱️ One idea per caption</h3>
                <p>Break long sentences into 3–5 word chunks. Each caption should land like a punch — then cut to the next visual. This keeps retention above 60%.</p>
              </div>
              <div className="tip">
                <h3>😮 Emotional peaks every 15s</h3>
                <p>Surprise, anger, curiosity, or relief. Plan a micro-emotion every 15 seconds. Example: "What happens next will shock you" → then deliver.</p>
              </div>
              <div className="tip">
                <h3>🔁 Repeat your core message</h3>
                <p>State your main takeaway at the beginning, middle, and end. Repetition = memorability. But change the wording each time.</p>
              </div>
              <div className="tip">
                <h3>🎬 Match caption speed to visuals</h3>
                <p>Fast cuts need short captions (2–4 words). Slow B-roll can handle 8–10 words. Always read your script aloud to test pacing.</p>
              </div>
              <div className="tip">
                <h3>📢 End with a specific CTA</h3>
                <p>"Subscribe for part 2", "Comment your score", or "Save this for later". Vague CTAs like "like and subscribe" kill engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mistakes">
          <div className="container">
            <h2 className="section-title">Avoid these 5 faceless video mistakes</h2>
            <div className="mistakes-list">
              <div className="mistake">
                <span className="mistake-icon">❌</span>
                <div><strong>Slow opening</strong> — If you don't hook in 3 seconds, they scroll. Start mid-action or with a bold claim.</div>
              </div>
              <div className="mistake">
                <span className="mistake-icon">❌</span>
                <div><strong>Text overload</strong> — More than 2 lines of text on screen at once? They'll click away. Keep it short.</div>
              </div>
              <div className="mistake">
                <span className="mistake-icon">❌</span>
                <div><strong>Monotone voiceover</strong> — Robotic voices kill retention. Use emotional AI voices (our Google and OpenAI models have natural inflections).</div>
              </div>
              <div className="mistake">
                <span className="mistake-icon">❌</span>
                <div><strong>No pattern interrupt</strong> — Same pacing for 60 seconds = boring. Change music, zoom, or silence every 10s.</div>
              </div>
              <div className="mistake">
                <span className="mistake-icon">❌</span>
                <div><strong>Generic stock footage</strong> — Don't use the same 5 clips everyone else uses. Generate custom AI images that match your script exactly.</div>
              </div>
            </div>
            <div className="mistakes-cta">
              <Link href="/create-ai-content" className="text-link">→ Generate custom visuals for your captions</Link>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="advanced-tips">
          <div className="container">
            <h2 className="section-title">Advanced: turn captions into high-CPM content</h2>
            <div className="advanced-grid">
              <div className="advanced-card">
                <h3>💸 Leverage "curiosity gap" psychology</h3>
                <p>Don't answer the question you just raised. Example: "The one thing psychologists won't tell you about anxiety..." Then cut to B-roll before revealing the answer 20 seconds later. This skyrockets watch time.</p>
                <Link href="/blog/curiosity-gap-youtube" className="text-link">Read case study →</Link>
              </div>
              <div className="advanced-card">
                <h3>🎧 Layer sound design</h3>
                <p>Add subtle sound effects under key captions (whoosh, ding, suspense hit). Use our AI video tool to auto-sync sound effects with your captions.</p>
                <Link href="/create-ai-content?tab=video" className="text-link">→ Try AI video with audio</Link>
              </div>
              <div className="advanced-card">
                <h3>📊 A/B test different hooks</h3>
                <p>Generate 3 versions of your hook using our AI. Post the same video with different first captions on TikTok/Reels. The winner gets 2x+ the views.</p>
                <Link href={`${baseCtaUrl}&tab=voice`} className="text-link">→ Generate 3 hooks now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <div className="container">
            <h2 className="section-title">Faceless caption FAQ</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is a faceless YouTube channel?</h3>
                <p>It's a channel where the creator never shows their face. Instead, they use stock footage, AI art, animations, or text on screen with voiceover narration. Popular niches: top 10 lists, history, true crime, motivational quotes, Reddit stories, and AI art.</p>
                <Link href="/blog/faceless-youtube-guide" className="text-link">Full guide →</Link>
              </div>
              <div className="faq-item">
                <h3>How long should my captions be?</h3>
                <p>For short-form (TikTok/Reels): 2–6 words per caption. For YouTube: 5–10 words. Break every sentence into separate captions to control pacing. Our <Link href="/create-ai-content?tab=voice" className="text-link">AI voice generator</Link> automatically times captions to the narration.</p>
              </div>
              <div className="faq-item">
                <h3>Can I monetize faceless videos?</h3>
                <p>Yes — if you add original voiceover and transformative edits. Using our <Link href="/create-ai-content?tab=voice" className="text-link">AI voice generator</Link> creates an original audio track. Avoid copy-pasting others' scripts or using unedited stock footage loops.</p>
              </div>
              <div className="faq-item">
                <h3>What's the best AI voice for faceless videos?</h3>
                <p>For YouTube documentaries: Google's "News" or "Narrator" voices. For TikTok stories: OpenAI's "Shimmer" or "Sage" (very natural). For motivational content: Azure's "Guy" or "Davis". All are available in our <Link href="/create-ai-content?tab=voice" className="text-link">AI voice studio</Link>.</p>
              </div>
              <div className="faq-item">
                <h3>Do I need video editing skills?</h3>
                <p>No. Our <Link href="/create-ai-content?tab=video" className="text-link">AI video generator</Link> creates full videos from text prompts. Or use the captions + voiceover with apps like CapCut or DaVinci Resolve (free templates available).</p>
              </div>
              <div className="faq-item">
                <h3>How many free captions can I generate?</h3>
                <p>You get 50 free credits on signup. One caption generation costs 2–5 credits depending on length. That's roughly 10–25 free scripts to start. <Link href="/pricing" className="text-link">Paid plans</Link> start at $9/mo for 300 credits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="final-card">
              <h2>Ready to grow your faceless channel?</h2>
              <p>Generate captions, voiceovers, and videos — all in one place.</p>
              <div className="final-buttons">
                <Link href={baseCtaUrl} className="btn btn-primary btn-large">
                  Start with Captions →
                </Link>
                <Link href="/create-ai-content" className="btn btn-secondary btn-large">
                  Go to AI Studio
                </Link>
              </div>
              <p className="final-small">✨ 50 free credits · No card required · Cancel anytime</p>
            </div>
          </div>
        </section>

        {/* Footer Internal Links */}
        <footer className="internal-footer">
          <div className="container">
            <div className="footer-links">
              <strong>More tools for faceless creators:</strong>
              <Link href="/tools/ai-video-generator-from-text">AI Video Generator from Text</Link>
              <Link href="/tools/ai-voiceover-for-faceless-channels">AI Voiceover for Faceless Channels</Link>
              <Link href="/tools/ai-image-generator-for-stock-footage">AI Image Generator for Stock Footage</Link>
              <Link href="/tools/ai-caption-to-video">Caption to Video Converter</Link>
              <Link href="/tools/faceless-youtube-script-writer">Faceless YouTube Script Writer</Link>
              <Link href="/create-ai-content">🎬 Main AI Content Studio</Link>
            </div>
            <div className="copyright">
              © 2025 Scenith — AI content tools for creators
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}