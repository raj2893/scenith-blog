// app/tools/ai-video-for-quote-pages/page.tsx
import Link from "next/link";
import "./styles.css";

export const metadata = {
  title: "AI Video for Quote Pages: Turn Text Into Viral Quote Videos | Scenith",
  description:
    "Transform quotes, affirmations, and wisdom into stunning AI-powered videos for Instagram Reels, TikTok, YouTube Shorts, and Facebook. Perfect for faceless quote channels.",
  keywords:
    "AI video for quotes, quote video maker, motivational quote videos, faceless YouTube channel, AI quote video generator, text to video quotes, viral quote reels",
  openGraph: {
    title: "AI Video for Quote Pages: Turn Text Into Viral Quote Videos",
    description:
      "Generate cinematic quote videos using AI. Perfect for Instagram Reels, TikTok, YouTube Shorts, and faceless channels.",
    type: "website",
    url: "https://scenith.in/tools/ai-video-for-quote-pages",
    images: [
      {
        url: "https://cdn.scenith.in/og/ai-video-quote-og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Video for Quote Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video for Quote Pages: Turn Text Into Viral Quote Videos",
    description:
      "Generate cinematic quote videos using AI. Perfect for Instagram Reels, TikTok, YouTube Shorts, and faceless channels.",
    images: ["https://cdn.scenith.in/og/ai-video-quote-og.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-for-quote-pages",
  },
};

export default function AIVideoForQuotePages() {
  const utmParams = "utm_source=ai-video-for-quote-pages&utm_medium=cta&utm_campaign=seo";

  return (
    <div className="quote-video-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">✨ AI-Powered Video Creation</div>
          <h1 className="hero-title">
            Turn Any Quote Into a{" "}
            <span className="gradient-text">Viral Video</span>
          </h1>
          <p className="hero-subtitle">
            Create stunning faceless quote videos for TikTok, Instagram Reels,
            YouTube Shorts, and Facebook in under 60 seconds. No editing
            experience needed.
          </p>
          <div className="hero-cta-group">
            <Link
              href={`/create-ai-content?tab=video&${utmParams}`}
              className="btn-primary btn-large"
            >
              🎬 Create Your First Quote Video Free
            </Link>
            <Link href="#how-it-works" className="btn-secondary btn-large">
              Watch How It Works →
            </Link>
          </div>
        </div>
      </section>

      {/* Prompt Input Box - Direct Redirect to Tool Page */}
            {/* Prompt Input Box - Direct Redirect to Tool Page */}
      <section className="prompt-box-section">
        <div className="container">
          <div className="prompt-box-card">
            <div className="prompt-box-header">
              <span className="prompt-box-icon">💬</span>
              <h2 className="prompt-box-title">Start With Any Quote</h2>
            </div>
            <p className="prompt-box-description">
              Paste a quote, affirmation, or proverb — we'll pre-fill it on our
              AI video maker.
            </p>
            <form
              action="/create-ai-content"
              method="GET"
              className="prompt-form"
            >
              <input type="hidden" name="tab" value="video" />
              <input type="hidden" name="utm_source" value="ai-video-for-quote-pages" />
              <input type="hidden" name="utm_medium" value="cta" />
              <input type="hidden" name="utm_campaign" value="seo" />
              <textarea
                name="text"
                id="quote-textarea"
                className="prompt-textarea"
                placeholder='e.g., "The only way to do great work is to love what you do. — Steve Jobs"'
                rows={3}
                required
              ></textarea>
              <button type="submit" className="btn-generate">
                ✨ Generate Quote Video →
              </button>
            </form>
            <div className="prompt-examples">
                <span>✨ Try these quotes:</span>
                
                    href={`/create-ai-content?tab=video&utm_source=ai-video-for-quote-pages&utm_medium=cta&utm_campaign=seo&text=${encodeURIComponent('"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill')}`}
                    className="example-chip"
                >
                    "Success is not final..."
                </a>
                
                    href={`/create-ai-content?tab=video&utm_source=ai-video-for-quote-pages&utm_medium=cta&utm_campaign=seo&text=${encodeURIComponent('"Believe you can and you\'re halfway there." — Theodore Roosevelt')}`}
                    className="example-chip"
                >
                    "Believe you can..."
                </a>
                
                    href={`/create-ai-content?tab=video&utm_source=ai-video-for-quote-pages&utm_medium=cta&utm_campaign=seo&text=${encodeURIComponent('"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt')}`}
                    className="example-chip"
                >
                    "The future belongs..."
                </a>
                </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section" id="use-cases">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who Uses AI Quote Videos?</h2>
            <p className="section-subtitle">
              From faceless channels to personal branding — quote videos work
              everywhere.
            </p>
          </div>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">📱</div>
              <h3 className="use-case-title">TikTok & Reels Creators</h3>
              <p className="use-case-description">
                Post daily motivational, relationship, or philosophy quotes and
                grow your faceless channel without showing your face.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🎬</div>
              <h3 className="use-case-title">YouTube Shorts Channels</h3>
              <p className="use-case-description">
                Build a profitable faceless YouTube channel with quote compilations,
                affirmations, and wisdom videos — monetize with ads.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">💼</div>
              <h3 className="use-case-title">Brands & Marketers</h3>
              <p className="use-case-description">
                Create branded quote videos for Instagram, LinkedIn, and Facebook
                to boost engagement and share brand values.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🧘</div>
              <h3 className="use-case-title">Wellness & Mindfulness</h3>
              <p className="use-case-description">
                Share daily affirmations, meditation quotes, and positive
                psychology messages with calming AI-generated visuals.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">📚</div>
              <h3 className="use-case-title">Educators & Coaches</h3>
              <p className="use-case-description">
                Reinforce key lessons with inspirational quote videos for your
                students, clients, or online course community.
              </p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🏢</div>
              <h3 className="use-case-title">Business & Leadership</h3>
              <p className="use-case-description">
                Share leadership quotes, company values, and team motivation
                videos on internal channels or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="examples-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real Quote Videos You Can Create</h2>
            <p className="section-subtitle">
              See what's possible with AI video generation — no camera, no
              voiceover, just your quote.
            </p>
          </div>
          <div className="examples-grid">
            <div className="example-card">
              <div className="example-video-placeholder">
                <div className="quote-overlay">
                  <p className="example-quote">
                    "Your time is limited, don't waste it living someone else's
                    life."
                  </p>
                  <p className="example-author">— Steve Jobs</p>
                </div>
                <div className="play-icon">▶️</div>
              </div>
              <h3 className="example-title">Motivational Quote</h3>
              <p className="example-description">
                Cinematic city b-roll + Steve Jobs quote — perfect for Monday
                motivation.
              </p>
            </div>
            <div className="example-card">
              <div className="example-video-placeholder">
                <div className="quote-overlay">
                  <p className="example-quote">
                    "The only person you are destined to become is the person
                    you decide to be."
                  </p>
                  <p className="example-author">— Ralph Waldo Emerson</p>
                </div>
                <div className="play-icon">▶️</div>
              </div>
              <h3 className="example-title">Self-Improvement</h3>
              <p className="example-description">
                Nature time-lapse + Emerson's wisdom — ideal for personal growth
                accounts.
              </p>
            </div>
            <div className="example-card">
              <div className="example-video-placeholder">
                <div className="quote-overlay">
                  <p className="example-quote">
                    "In the middle of difficulty lies opportunity."
                  </p>
                  <p className="example-author">— Albert Einstein</p>
                </div>
                <div className="play-icon">▶️</div>
              </div>
              <h3 className="example-title">Resilience Quote</h3>
              <p className="example-description">
                Dramatic storm + sunshine footage paired with Einstein — great
                for overcoming challenges.
              </p>
            </div>
          </div>
          <div className="examples-cta">
            <Link
              href={`/create-ai-content?tab=video&${utmParams}`}
              className="btn-outline"
            >
              See More Examples →
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Explanation */}
      <section className="steps-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              How to Create AI Quote Videos in 3 Steps
            </h2>
            <p className="section-subtitle">
              No video editing skills? No problem. Here's how simple it is.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Paste Your Quote</h3>
              <p className="step-description">
                Copy any quote, affirmation, or proverb — from famous speeches,
                books, or your own original words. We support text up to 2000
                characters.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Choose Your Style</h3>
              <p className="step-description">
                Pick from 6+ AI video models (Kling, Veo, Wan 2.5, Grok), aspect
                ratios (16:9 for YouTube, 9:16 for TikTok/Reels), and duration
                (5-10 seconds).
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Generate & Share</h3>
              <p className="step-description">
                Hit generate. In 30-120 seconds, your cinematic quote video is
                ready to download as MP4 and share across all social platforms.
              </p>
            </div>
          </div>
          <div className="steps-note">
            <p>
              💡 <strong>Pro tip:</strong> Use the <strong>audio toggle</strong>{" "}
              to add AI-generated narration to your quote video — perfect for
              accessibility and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="best-practices-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best Practices for Viral Quote Videos</h2>
            <p className="section-subtitle">
              What separates a 100-view video from a 1-million-view video.
            </p>
          </div>
          <div className="practices-grid">
            <div className="practice-card">
              <h3 className="practice-title">🎯 Keep It Short</h3>
              <p className="practice-description">
                TikTok and Reels algorithms favor 5-8 second videos for quotes.
                Our 5-second duration is perfect for maximum retention.
              </p>
              <Link
                href={`/create-ai-content?tab=video&duration=5&${utmParams}`}
                className="practice-link"
              >
                Create 5s quote video →
              </Link>
            </div>
            <div className="practice-card">
              <h3 className="practice-title">🔊 Add Audio Narration</h3>
              <p className="practice-description">
                Videos with voiceover have 2-3x higher completion rates. Turn on
                the audio toggle for AI voice narration of your quote.
              </p>
              <Link
                href={`/create-ai-content?tab=video&audio=true&${utmParams}`}
                className="practice-link"
              >
                Add voiceover to quote →
              </Link>
            </div>
            <div className="practice-card">
              <h3 className="practice-title">📱 Vertical Format Wins</h3>
              <p className="practice-description">
                9:16 aspect ratio takes up the full phone screen — highest
                engagement for TikTok, Reels, and Shorts.
              </p>
              <Link
                href={`/create-ai-content?tab=video&aspect=9%3A16&${utmParams}`}
                className="practice-link"
              >
                Make vertical quote video →
              </Link>
            </div>
            <div className="practice-card">
              <h3 className="practice-title">🏷️ Use Trending Sounds</h3>
              <p className="practice-description">
                After generating, overlay a trending TikTok sound in your
                editing app to ride the algorithmic wave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="mistakes-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Mistakes to Avoid</h2>
            <p className="section-subtitle">
              Don't let these kill your quote video engagement.
            </p>
          </div>
          <div className="mistakes-list">
            <div className="mistake-item">
              <div className="mistake-icon">❌</div>
              <div className="mistake-content">
                <h3 className="mistake-title">Text Too Small</h3>
                <p className="mistake-description">
                  Quote text must be large and bold enough to read on a small
                  phone screen. Avoid more than 2 lines of text per frame.
                </p>
              </div>
            </div>
            <div className="mistake-item">
              <div className="mistake-icon">❌</div>
              <div className="mistake-content">
                <h3 className="mistake-title">Generic Visuals</h3>
                <p className="mistake-description">
                  A quote about "ocean" with city b-roll feels disconnected.
                  Match your visual prompt to the quote's theme.
                </p>
              </div>
            </div>
            <div className="mistake-item">
              <div className="mistake-icon">❌</div>
              <div className="mistake-content">
                <h3 className="mistake-title">No Attribution</h3>
                <p className="mistake-description">
                  Always credit the author unless it's your original quote.
                  "— Unknown" is fine when author isn't known.
                </p>
              </div>
            </div>
            <div className="mistake-item">
              <div className="mistake-icon">❌</div>
              <div className="mistake-content">
                <h3 className="mistake-title">Overused Quotes</h3>
                <p className="mistake-description">
                  "Live, laugh, love" has been done to death. Find unique,
                  under-shared quotes for better organic reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="advanced-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced Tips for Quote Creators</h2>
            <p className="section-subtitle">
              Level up your quote video strategy with these pro tactics.
            </p>
          </div>
          <div className="advanced-grid">
            <div className="advanced-card">
              <h3 className="advanced-title">🎨 Batch Create 10+ Videos</h3>
              <p className="advanced-description">
                Generate 10-20 quote videos in one sitting using our{" "}
                <Link href="/tools/ai-video-generator" className="inline-link">
                  AI video generator
                </Link>
                . Schedule them out for 2-4 weeks of daily content.
              </p>
            </div>
            <div className="advanced-card">
              <h3 className="advanced-title">📊 A/B Test Visual Styles</h3>
              <p className="advanced-description">
                Create two versions of the same quote — one with nature b-roll,
                one with city b-roll. Post both and see which resonates more.
              </p>
            </div>
            <div className="advanced-card">
              <h3 className="advanced-title">🔄 Repurpose to Carousels</h3>
              <p className="advanced-description">
                Turn your quote video script into an{" "}
                <Link href={`/create-ai-content?tab=image&${utmParams}`} className="inline-link">
                  AI image carousel
                </Link>{" "}
                for LinkedIn and Instagram feed posts — double your content.
              </p>
            </div>
            <div className="advanced-card">
              <h3 className="advanced-title">🔗 Add Your Branding</h3>
              <p className="advanced-description">
                Use{" "}
                <Link href="/tools/add-logo-to-video" className="inline-link">
                  our logo tool
                </Link>{" "}
                or any video editor to add your watermark. Brand recognition =
                repeat viewers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about AI quote videos.
            </p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">
                Can I use copyrighted quotes in my videos?
              </h3>
              <p className="faq-answer">
                Short quotes for commentary, inspiration, or education are
                generally protected as fair use. For commercial use of longer
                excerpts (especially from modern books/songs), consult an
                attorney. Our platform does not claim ownership of the quotes
                you input.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Which AI video model is best for quote videos?
              </h3>
              <p className="faq-answer">
                For <strong>cinematic quality</strong> with slow motion, choose{" "}
                <Link href="/tools/kling-ai-video-generator" className="inline-link">
                  Kling 2.6 Pro
                </Link>{" "}
                or Veo 3.1. For <strong>speed and lower cost</strong>, Wan 2.5
                or Kling 2.5 Turbo work great. Grok Imagine includes AI audio
                narration automatically.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                How do I add text overlays to my quote video?
              </h3>
              <p className="faq-answer">
                Currently, you'll need a video editor like CapCut, InShot, or
                Canva to add text overlays. Generate your AI video first, then
                overlay the quote text. We recommend{" "}
                <Link href="/tools/add-subtitles-to-videos" className="inline-link">
                  our subtitle tool
                </Link>{" "}
                for quick text addition.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Can I make money with quote videos on YouTube?
              </h3>
              <p className="faq-answer">
                Yes — faceless quote channels regularly monetize on YouTube
                Shorts once they hit 10 million Shorts views in 90 days or 1000
                subscribers + 4000 watch hours for long-form. Use original or
                properly attributed quotes and add value through visuals/editing.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                What languanges does the AI video generator support?
              </h3>
              <p className="faq-answer">
                Our video models generate visuals from English prompts. For
                quotes in other languages, write your prompt in English (e.g.,
                "French quote about love with Paris b-roll") — then use{" "}
                <Link href={`/create-ai-content?tab=voice&${utmParams}`} className="inline-link">
                  our AI voice generator
                </Link>{" "}
                to narrate in 20+ languages.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Is there a free plan for quote video creation?
              </h3>
              <p className="faq-answer">
                Yes — new users get <strong>50 free credits</strong> on signup
                (no credit card required). Each quote video costs between 46-186
                credits depending on model and duration. Upgrade plans start at
                just ₹50 / $1 for additional credits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <h2 className="final-cta-title">Ready to Create Your First Quote Video?</h2>
            <p className="final-cta-description">
              Join thousands of creators who use Scenith to generate viral quote
              videos daily. No editing skills required.
            </p>
            <div className="final-cta-buttons">
              <Link
                href={`/create-ai-content?tab=video&${utmParams}`}
                className="btn-primary btn-large"
              >
                🎬 Start Creating Free
              </Link>
              <Link href="/pricing" className="btn-secondary btn-large">
                View Plans →
              </Link>
            </div>
            <p className="final-cta-note">
              ✨ 50 free credits on signup · No credit card required · Full
              commercial rights
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create AI Quote Videos",
            description:
              "Step-by-step guide to turning any quote into a viral video using AI.",
            step: [
              {
                "@type": "HowToStep",
                name: "Paste Your Quote",
                text: "Copy any quote, affirmation, or proverb into the prompt box.",
              },
              {
                "@type": "HowToStep",
                name: "Choose Your Style",
                text: "Select video model, aspect ratio, and duration.",
              },
              {
                "@type": "HowToStep",
                name: "Generate & Share",
                text: "Generate your video and download as MP4 for social media.",
              },
            ],
            totalTime: "PT2M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "0",
            },
            tool: {
              "@type": "SoftwareApplication",
              name: "Scenith AI Video Generator",
              url: "https://scenith.in/create-ai-content",
            },
          }),
        }}
      />
    </div>
  );
}