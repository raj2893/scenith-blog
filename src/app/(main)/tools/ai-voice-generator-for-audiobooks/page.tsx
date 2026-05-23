// app/tools/ai-voice-generator-for-audiobooks/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Voice Generator for Audiobooks: Convert Text to Professional Narration',
  description: 'Turn your manuscript into a studio-quality audiobook with natural AI voices. Support for 40+ languages, multiple narrators, and full commercial rights. No recording studio needed.',
  keywords: 'ai voice generator for audiobooks, text to speech audiobook, ai audiobook narration, convert book to audiobook, ai narrator',
  openGraph: {
    title: 'AI Voice Generator for Audiobooks: Professional Narration in Minutes',
    description: 'Turn your manuscript into a studio-quality audiobook with natural AI voices. Support for 40+ languages, multiple narrators, and full commercial rights.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-voice-generator-for-audiobooks',
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-voice-generator-for-audiobooks',
  },
};

export default function AIVoiceGeneratorForAudiobooksPage() {
  const slug = 'ai-voice-generator-for-audiobooks';
  const ctaUrl = `/create-ai-content?tab=voice&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I publish AI-narrated audiobooks on Audible, Amazon, and Apple Books?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All voiceovers generated on Scenith come with full commercial rights. You can publish AI-narrated audiobooks on Audible (ACX), Amazon, Apple Books, Google Play Books, and any other platform that accepts digital audiobooks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How natural do AI audiobook narrators sound?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Modern AI voices from Google WaveNet, OpenAI TTS, and Azure Neural are nearly indistinguishable from professional human narrators. They include natural pauses, proper intonation, emotional expression, and consistent pacing over hours of narration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use different voices for different characters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can generate each character\'s dialogue separately using different voices, then stitch them together in editing software. For best results, label each line with the intended character and generate in batches.',
        },
      },
      {
        '@type': 'Question',
        name: 'What languages are supported for audiobooks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support 40+ languages including English (US, UK, Australian, Indian), Spanish, French, German, Mandarin, Hindi, Arabic, Japanese, Korean, Portuguese, Italian, Russian, and Dutch. Each language has multiple voice options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free plan for authors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You get 50 free credits on sign-up (about 6,000 characters / 1,000 words). Paid plans start at $9/month for 300 credits (36,000 characters). For full-length novels, we recommend the Creator Pro plan at $29/month for 1,200 credits.',
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
      <div className="ab-page">
        {/* Hero Section */}
        <section className="ab-hero">
          <div className="ab-container">
            <h1 className="ab-hero-title">
              AI Voice Generator for Audiobooks: <span className="ab-gradient-text">Turn Any Text into Professional Audio</span>
            </h1>
            <p className="ab-hero-description">
              Convert your manuscript, novel, or non-fiction book into a studio-quality audiobook using natural AI voices.
              No recording equipment, no voice actors, no editing headaches — just professional narration in minutes.
            </p>
            <div className="ab-hero-cta">
              <Link href={ctaUrl} className="ab-btn ab-btn-primary ab-btn-large">
                🎧 Start Creating Your Audiobook →
              </Link>
            </div>
            <p className="ab-hero-note">✓ 50 free credits on sign-up · Full commercial rights · Publish on Audible, Amazon, Apple Books</p>
          </div>
        </section>

        {/* Prompt Section */}
        <section className="ab-prompt-section">
          <div className="ab-container">
            <div className="ab-prompt-card">
              <h2 className="ab-prompt-title">Try It — Paste a Sample from Your Book</h2>
              <textarea
                className="ab-prompt-textarea"
                placeholder="Example from Chapter 1: The door creaked open, revealing a room that hadn't seen sunlight in decades. Dust particles danced in the narrow beam from her flashlight. She took a breath, stepped forward, and the floorboard beneath her groaned in protest — as if warning her to turn back while she still could."
                rows={4}
              />
              <div className="ab-prompt-actions">
                <button className="ab-btn ab-btn-secondary ab-btn-sm">📖 Try Chapter Sample</button>
                <Link href={ctaUrl} className="ab-btn ab-btn-primary ab-btn-md">
                  🎧 Generate Narration →
                </Link>
              </div>
              <p className="ab-prompt-note">✨ After generating, choose from 40+ voices, adjust pacing, and download high-quality MP3</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="ab-section">
          <div className="ab-container">
            <h2 className="ab-section-title">Who Uses AI Voice for Audiobooks?</h2>
            <div className="ab-grid-3">
              <div className="ab-card">
                <div className="ab-card-icon">📚</div>
                <h3 className="ab-card-title">Self-Published Authors</h3>
                <p className="ab-card-text">
                  Turn your Kindle or KDP manuscript into an audiobook without hiring expensive voice actors.
                  Reach listeners on Audible, Apple Books, and Google Play Books — often for less than $50 per book.
                  Perfect for fiction, romance, thriller, and sci-fi authors.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Start narrating →</Link>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon">🏢</div>
                <h3 className="ab-card-title">Publishers & Imprints</h3>
                <p className="ab-card-text">
                  Produce audiobook editions for your back catalog at scale. Convert 50+ books per month
                  with consistent voice branding across series. Maintain quality while reducing production
                  time from weeks to hours.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Explore enterprise →</Link>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon">🎓</div>
                <h3 className="ab-card-title">Educational Publishers</h3>
                <p className="ab-card-text">
                  Transform textbooks, course materials, and study guides into accessible audio formats.
                  Support diverse learning needs and reach students who prefer auditory learning.
                  Generate multiple language versions from a single source text.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Get started →</Link>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon">📖</div>
                <h3 className="ab-card-title">Public Domain Classics</h3>
                <p className="ab-card-text">
                  Create modern audiobook versions of public domain works (Pride and Prejudice,
                  Moby Dick, Sherlock Holmes, etc.) and publish them commercially. No royalties owed,
                  100% profit from every sale.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Start converting →</Link>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon">🌍</div>
                <h3 className="ab-card-title">Multilingual Translations</h3>
                <p className="ab-card-text">
                  Publish your audiobook in 20+ languages simultaneously. Generate Spanish, Mandarin,
                  French, German, Hindi, and Arabic versions of the same book — reaching global
                  markets without hiring 20 different narrators.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Expand globally →</Link>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon">🎙️</div>
                <h3 className="ab-card-title">Series Continuity</h3>
                <p className="ab-card-text">
                  Maintain the exact same narrator voice across a 10-book series.
                  AI voices don't age, change accents, or become unavailable.
                  Perfect for long-running fantasy, mystery, or romance series.
                </p>
                <Link href={ctaUrl} className="ab-card-link">Keep consistency →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Examples Section */}
        <section className="ab-section ab-section-alt">
          <div className="ab-container">
            <h2 className="ab-section-title">Real Audiobook Samples Generated with AI</h2>
            <div className="ab-examples-grid">
              <div className="ab-example-card">
                <div className="ab-example-audio">
                  <audio controls src="https://cdn.scenith.in/demo/audiobook-fiction-demo.mp3" className="ab-audio-player">
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <h3 className="ab-example-title">Fiction / Novel Narration</h3>
                <p className="ab-example-text">
                  "Eleanor didn't notice the woman until she was already sitting across from her.
                  Two days ago, this café had been empty. Now, every table was taken, and the stranger's
                  eyes hadn't left her since she walked in. 'You're wondering why I chose you,' the woman said.
                  Eleanor's coffee cup stopped halfway to her lips."
                </p>
                <div className="ab-example-meta">
                  <span>🎭 Voice: Warm / Engaging</span>
                  <span>📖 Fiction</span>
                  <span>🌐 English (US)</span>
                </div>
              </div>
              <div className="ab-example-card">
                <div className="ab-example-audio">
                  <audio controls src="https://cdn.scenith.in/demo/audiobook-nonfiction-demo.mp3" className="ab-audio-player">
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <h3 className="ab-example-title">Non-Fiction / Business</h3>
                <p className="ab-example-text">
                  "Chapter Four: The Compound Effect of Small Wins. Most entrepreneurs overestimate what
                  they can accomplish in a month and underestimate what they can achieve in a decade.
                  The companies that dominate their industries didn't get there through one brilliant move.
                  They got there through 10,000 boring, consistent, unglamorous decisions."
                </p>
                <div className="ab-example-meta">
                  <span>🎭 Voice: Authoritative / Clear</span>
                  <span>📘 Non-Fiction</span>
                  <span>🌐 English (UK)</span>
                </div>
              </div>
              <div className="ab-example-card">
                <div className="ab-example-audio">
                  <audio controls src="https://cdn.scenith.in/demo/audiobook-children-demo.mp3" className="ab-audio-player">
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <h3 className="ab-example-title">Children's Book Narration</h3>
                <p className="ab-example-text">
                  "Oliver the owl couldn't sleep. Again. While the forest whispered its nighttime secrets
                  and the moon painted silver stripes across his treehouse window, Oliver's eyes stayed
                  wide open. 'Maybe,' he thought, 'if I count the fireflies...' He got to three before
                  he heard the strange sound coming from the hollow oak."
                </p>
                <div className="ab-example-meta">
                  <span>🎭 Voice: Gentle / Soothing</span>
                  <span>📗 Children's</span>
                  <span>🌐 English (Australian)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="ab-section">
          <div className="ab-container">
            <h2 className="ab-section-title">How to Create an AI Audiobook in 5 Steps</h2>
            <div className="ab-steps">
              <div className="ab-step">
                <div className="ab-step-number">1</div>
                <div className="ab-step-content">
                  <h3 className="ab-step-title">Prepare your manuscript</h3>
                  <p className="ab-step-text">
                    Format your book as clean text with proper punctuation. Break long paragraphs into
                    smaller chunks (300–500 words each) for better pacing. Add intentional line breaks
                    for scene changes and emotional beats. Remove page numbers, headers, and footers.
                  </p>
                </div>
              </div>
              <div className="ab-step">
                <div className="ab-step-number">2</div>
                <div className="ab-step-content">
                  <h3 className="ab-step-title">Choose your narrator voice</h3>
                  <p className="ab-step-text">
                    Browse 40+ voices across Google, OpenAI, and Azure. Listen to demo samples of each
                    voice with your genre's typical text. For fiction, consider warm, expressive voices.
                    For non-fiction, choose clear, authoritative tones. Children's books need gentle,
                    engaging narrators.
                  </p>
                </div>
              </div>
              <div className="ab-step">
                <div className="ab-step-number">3</div>
                <div className="ab-step-content">
                  <h3 className="ab-step-title">Generate chapter by chapter</h3>
                  <p className="ab-step-text">
                    Generate your audiobook in segments (individual chapters or 5–10 minute chunks).
                    This makes editing easier and allows you to catch errors early. Each generation
                    takes 2–4 seconds per 600 characters — a full 50,000-word novel takes about
                    15–20 minutes total generation time.
                  </p>
                </div>
              </div>
              <div className="ab-step">
                <div className="ab-step-number">4</div>
                <div className="ab-step-content">
                  <h3 className="ab-step-title">Edit and assemble</h3>
                  <p className="ab-step-text">
                    Download each chapter as MP3 and import into audio editing software (Audacity is free).
                    Adjust spacing between chapters (2–3 seconds of silence), normalize volume levels,
                    and add intro/outro music. Export as a single MP3 or split chapter files.
                  </p>
                </div>
              </div>
              <div className="ab-step">
                <div className="ab-step-number">5</div>
                <div className="ab-step-content">
                  <h3 className="ab-step-title">Publish to audiobook platforms</h3>
                  <p className="ab-step-text">
                    Upload your finished audiobook to ACX (Audible), Apple Books for Authors, Google Play Books,
                    or Findaway Voices. Follow each platform's technical requirements (bitrate, file naming,
                    chapter markers). Your AI-narrated audiobook is 100% eligible for commercial sale.
                  </p>
                </div>
              </div>
            </div>
            <div className="ab-steps-cta">
              <Link href={ctaUrl} className="ab-btn ab-btn-primary">
                🎧 Start Your Audiobook Journey →
              </Link>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="ab-section ab-section-alt">
          <div className="ab-container">
            <h2 className="ab-section-title">Best Practices for AI Audiobook Narration</h2>
            <div className="ab-practices-grid">
              <div className="ab-practice">
                <h3 className="ab-practice-title">1. Punctuation = Performance</h3>
                <p className="ab-practice-text">
                  Commas create short breaths. Periods create full stops. Ellipses indicate thoughtful pauses.
                  Em dashes signal interruptions. Use semicolons for connected ideas. Question marks raise
                  intonation. Exclamation marks add emphasis. Your punctuation directly controls the AI's
                  emotional delivery and pacing.
                </p>
              </div>
              <div className="ab-practice">
                <h3 className="ab-practice-title">2. Write dialogue naturally</h3>
                <p className="ab-practice-text">
                  Tag dialogue with "he said" / "she asked" to help the AI distinguish narration from speech.
                  For character voices, you'll need to generate dialogue separately using different voices.
                  Keep character speech patterns consistent throughout your book.
                </p>
              </div>
              <div className="ab-practice">
                <h3 className="ab-practice-title">3. Test with a sample chapter first</h3>
                <p className="ab-practice-text">
                  Before generating your entire book, run a 1,000-word sample through different voices
                  and speed settings. Listen critically for pronunciation, pacing, and emotional fit.
                  Getting the voice right before scaling saves hours of rework.
                </p>
              </div>
              <div className="ab-practice">
                <h3 className="ab-practice-title">4. Use consistent naming conventions</h3>
                <p className="ab-practice-text">
                  Save your voice settings (provider, voice name, speed) once you find the perfect match.
                  Use the exact same settings across all chapters to maintain auditory consistency.
                  Listeners form strong attachments to narrators — don't change voices mid-series.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="ab-section">
          <div className="ab-container">
            <h2 className="ab-section-title">Common Mistakes to Avoid</h2>
            <div className="ab-mistakes-list">
              <div className="ab-mistake">
                <div className="ab-mistake-icon">❌</div>
                <div className="ab-mistake-content">
                  <h3 className="ab-mistake-title">No punctuation = robotic run-on sentences</h3>
                  <p className="ab-mistake-text">
                    AI voices rely entirely on punctuation to know when to pause. A wall of text with no periods
                    or commas will sound like a never-ending sentence. Always proofread and add proper punctuation
                    before generating. Read your text aloud — if you need to breathe, add punctuation.
                  </p>
                </div>
              </div>
              <div className="ab-mistake">
                <div className="ab-mistake-icon">❌</div>
                <div className="ab-mistake-content">
                  <h3 className="ab-mistake-title">Wrong voice for your genre</h3>
                  <p className="ab-mistake-text">
                    A thrilling mystery needs a different voice than a romantic comedy or business book.
                    Romance listeners expect warmth and intimacy. Thriller listeners want tension and pacing.
                    Non-fiction listeners prefer clarity and authority. Match your voice to reader expectations.
                  </p>
                </div>
              </div>
              <div className="ab-mistake">
                <div className="ab-mistake-icon">❌</div>
                <div className="ab-mistake-content">
                  <h3 className="ab-mistake-title">Ignoring pronunciation for special terms</h3>
                  <p className="ab-mistake-text">
                    AI might mispronounce character names, fantasy terms, or technical jargon. Always spot-check
                    problem words. For tricky pronunciations, try phonetic spelling (e.g., "Draco" as "Dray-co"),
                    break into syllables, or add hyphens between syllables.
                  </p>
                </div>
              </div>
              <div className="ab-mistake">
                <div className="ab-mistake-icon">❌</div>
                <div className="ab-mistake-content">
                  <h3 className="ab-mistake-title">Rushing through post-production</h3>
                  <p className="ab-mistake-text">
                    Audiobooks need proper spacing between chapters (2-3 seconds of silence), consistent
                    volume across segments, and clean intros/outros. Skipping these steps results in a
                    amateur-sounding product that listeners will refund. Invest 10-15 minutes per chapter
                    in basic editing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="ab-section ab-section-alt">
          <div className="ab-container">
            <h2 className="ab-section-title">Advanced Tips for Professional Audiobooks</h2>
            <div className="ab-advanced-grid">
              <div className="ab-advanced-card">
                <span className="ab-advanced-icon">🎭</span>
                <h3 className="ab-advanced-title">Multi-Voice Cast for Dialogue</h3>
                <p className="ab-advanced-text">
                  Generate each character's dialogue with a different voice. Label every line with the
                  character name, then generate in batches. Stitch the lines into your narration in
                  editing software. This creates a radio-drama feel that listeners love.
                </p>
              </div>
              <div className="ab-advanced-card">
                <span className="ab-advanced-icon">⚡</span>
                <h3 className="ab-advanced-title">Speed Variations for Emotion</h3>
                <p className="ab-advanced-text">
                  Generate chase scenes at 1.15x speed for tension. Generate romantic moments at 0.95x
                  for intimacy. Import multiple speed versions of the same chapter and crossfade between
                  them during emotional shifts to mimic human performance.
                </p>
              </div>
              <div className="ab-advanced-card">
                <span className="ab-advanced-icon">🎵</span>
                <h3 className="ab-advanced-title">Music & Ambience Layers</h3>
                <p className="ab-advanced-text">
                  Add royalty-free background music and ambient sounds beneath your narration.
                  Use quiet cello for dramatic moments, gentle piano for reflection, and environmental
                  sounds (rain, cafe chatter, forest birds) to immerse listeners in your world.
                </p>
              </div>
              <div className="ab-advanced-card">
                <span className="ab-advanced-icon">📝</span>
                <h3 className="ab-advanced-title">ACX Optimization</h3>
                <p className="ab-advanced-text">
                  Follow ACX technical requirements: -3dB to -6dB RMS, -60dB noise floor, 192kbps or
                  256kbps MP3, no clipping. Use Audacity's ACX Check plugin to validate your files
                  before uploading to Audible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ab-section">
          <div className="ab-container">
            <h2 className="ab-section-title">Frequently Asked Questions</h2>
            <div className="ab-faq">
              <div className="ab-faq-item">
                <details>
                  <summary>Can I publish AI-narrated audiobooks on Audible, Amazon, and Apple Books?</summary>
                  <p>Yes. All voiceovers generated on Scenith come with full commercial rights. You can publish AI-narrated audiobooks on ACX (Audible), Amazon, Apple Books for Authors, Google Play Books, and Findaway Voices. There are no restrictions or special labeling requirements — your audiobook is treated like any other professionally narrated title.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>How natural do AI audiobook narrators sound?</summary>
                  <p>Modern AI voices from Google's WaveNet, OpenAI's TTS, and Azure Neural are nearly indistinguishable from professional human narrators. They include natural pauses, proper intonation, emotional expression, breath sounds, and consistent pacing over hours of narration. Most listeners cannot tell they're listening to AI unless told.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>How long does it take to generate a full audiobook?</summary>
                  <p>Generation speed is approximately 2–4 seconds per 600 characters. A 50,000-word novel takes about 15–20 minutes total generation time. A 90,000-word book takes 25–30 minutes. Generation happens in parallel — you can upload multiple chapters at once and they'll process simultaneously.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>Can I use different voices for different characters?</summary>
                  <p>Yes. You can generate each character's dialogue separately using different voices from our library. Label each line with the character name, generate in batches, then stitch them together in audio editing software. For best results, create a spreadsheet mapping characters to specific voices before you start.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>What languages are supported?</summary>
                  <p>We support 40+ languages including English (US, UK, Australian, Indian), Spanish (Spain & Latin America), French, German, Mandarin Chinese, Hindi, Arabic, Japanese, Korean, Portuguese, Italian, Russian, Dutch, and more. Each language has multiple voice options (male/female, different accents).</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>What's the maximum length per generation?</summary>
                  <p>Free users: 600 characters per generation (~90–120 words). Paid users: 5,000 characters per generation (~750–800 words). For longer chapters, generate in segments (e.g., every 5,000 characters) and stitch them together in editing software. Crossfading between segments sounds seamless.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>How much does it cost to produce an audiobook?</summary>
                  <p>Free plan: 50 credits (about 6,000 characters / 1,000 words). Creator Lite ($9/mo): 300 credits (36,000 characters / 6,000 words). Creator Pro ($29/mo): 1,200 credits (144,000 characters / 24,000 words). A full 60,000-word novel costs about 500 credits — around $15 if you upgrade just for that month.</p>
                </details>
              </div>
              <div className="ab-faq-item">
                <details>
                  <summary>What audio quality should I expect?</summary>
                  <p>All voiceovers are delivered as high-quality MP3 files (192 kbps, 44.1kHz). This matches or exceeds ACX's technical requirements for Audible. You can upload our MP3s directly to audiobook platforms without re-encoding.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="ab-section ab-internal-links">
          <div className="ab-container">
            <h2 className="ab-section-title">More Tools for Authors & Publishers</h2>
            <div className="ab-links-grid">
              <Link href="/tools/ai-voice-generator-for-podcasts" className="ab-internal-link">
                🎙️ AI Voice Generator for Podcasts
              </Link>
              <Link href="/tools/ai-voice-generator-for-youtube" className="ab-internal-link">
                🎬 AI Voice Generator for YouTube
              </Link>
              <Link href="/tools/text-to-speech-for-educational-content" className="ab-internal-link">
                📚 Text to Speech for Educational Content
              </Link>
              <Link href="/tools/ai-image-generator-for-book-covers" className="ab-internal-link">
                🖼️ AI Image Generator for Book Covers
              </Link>
              <Link href="/tools/ai-video-generator-for-book-trailers" className="ab-internal-link">
                🎥 AI Video Generator for Book Trailers
              </Link>
              <Link href="/tools/add-subtitles-to-audiobook-samples" className="ab-internal-link">
                📝 Add Subtitles to Audiobook Samples
              </Link>
              <Link href="/create-ai-content" className="ab-internal-link ab-internal-link-highlight">
                🚀 Try All AI Content Tools → Voice, Image & Video in One Place
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="ab-cta-banner">
          <div className="ab-container">
            <div className="ab-cta-banner-inner">
              <h2 className="ab-cta-banner-title">Ready to Turn Your Book into an Audiobook?</h2>
              <p className="ab-cta-banner-text">
                Join thousands of authors who use Scenith AI Voice Generator to produce professional
                audiobooks faster and cheaper than traditional recording. No studio, no voice actors,
                no monthly retainers — just your manuscript and our AI.
              </p>
              <Link href={ctaUrl} className="ab-btn ab-btn-white ab-btn-large">
                🎧 Start Your Audiobook Free →
              </Link>
              <p className="ab-cta-banner-note">50 free credits · Full commercial rights · Publish anywhere</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}