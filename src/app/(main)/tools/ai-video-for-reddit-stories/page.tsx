// app/tools/ai-video-for-reddit-stories/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'AI Video for Reddit Stories: Generate Viral Narrated Videos | Scenith',
  description: 'Create engaging AI Reddit story videos with voiceover, subtitles, and dynamic b-roll. Turn any Reddit thread into a YouTube/TikTok video in minutes.',
  keywords: 'ai video reddit stories, reddit story video generator, narrated reddit videos, ai video for reddit, reddit stories youtube tool, faceless video maker',
  openGraph: {
    title: 'AI Video for Reddit Stories: Generate Viral Narrated Videos',
    description: 'Turn Reddit threads into YouTube/TikTok videos with AI voiceover, captions, and engaging visuals.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-video-for-reddit-stories',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video for Reddit Stories | Scenith',
    description: 'Automatically turn Reddit content into high-retention narrated videos.',
  },
};

const pageStyles = `
/* ========== GLOBAL RESET & VARIABLES ========== */
.rrs-page {
  --rrs-primary: #7c3aed;
  --rrs-primary-dark: #6d28d9;
  --rrs-primary-light: #8b5cf6;
  --rrs-secondary: #db2777;
  --rrs-dark: #0f0f1a;
  --rrs-gray-800: #1e1e2f;
  --rrs-gray-700: #2d2d42;
  --rrs-gray-600: #4a4a66;
  --rrs-gray-500: #6c6c89;
  --rrs-gray-400: #9ca3af;
  --rrs-gray-200: #e5e7eb;
  --rrs-white: #ffffff;
  --rrs-gradient: linear-gradient(135deg, var(--rrs-primary), var(--rrs-secondary));
  --rrs-gradient-soft: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(219, 39, 119, 0.05));
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--rrs-gray-200);
  background: var(--rrs-dark);
}

.rrs-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== TYPOGRAPHY ========== */
.rrs-h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  background: var(--rrs-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.rrs-h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  color: var(--rrs-white);
}

.rrs-h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--rrs-primary-light);
}

.rrs-h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.rrs-lead {
  font-size: 1.2rem;
  color: var(--rrs-gray-400);
  max-width: 720px;
  margin: 0 auto 2rem;
}

/* ========== LAYOUT CONTAINERS ========== */
.rrs-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.rrs-section {
  padding: 3rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.rrs-section:last-child {
  border-bottom: none;
}

/* ========== HERO SECTION ========== */
.rrs-hero {
  text-align: center;
  padding: 4rem 0 3rem;
  background: radial-gradient(ellipse at 70% 30%, rgba(124, 58, 237, 0.15), transparent);
}

.rrs-hero-badge {
  display: inline-block;
  background: rgba(124, 58, 237, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.4);
}

.rrs-cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0 1rem;
}

.rrs-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.rrs-btn-primary {
  background: var(--rrs-gradient);
  color: white;
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
}

.rrs-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(124, 58, 237, 0.4);
}

.rrs-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--rrs-gray-600);
  color: var(--rrs-gray-200);
}

.rrs-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.rrs-demo-video {
  margin-top: 3rem;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* ========== FEATURE GRID ========== */
.rrs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.rrs-card {
  background: var(--rrs-gray-800);
  border-radius: 24px;
  padding: 1.8rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s, border-color 0.2s;
}

.rrs-card:hover {
  border-color: var(--rrs-primary);
  transform: translateY(-4px);
}

.rrs-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* ========== STEP BY STEP ========== */
.rrs-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.rrs-step {
  display: flex;
  gap: 1.5rem;
  background: var(--rrs-gray-800);
  border-radius: 20px;
  padding: 1.5rem;
  border-left: 4px solid var(--rrs-primary);
}

.rrs-step-number {
  background: var(--rrs-gradient);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 800;
  font-size: 1.4rem;
  flex-shrink: 0;
}

/* ========== BEST PRACTICES & MISTAKES ========== */
.rrs-two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.rrs-practice-card, .rrs-mistake-card {
  background: var(--rrs-gray-800);
  border-radius: 20px;
  padding: 1.5rem;
}

.rrs-practice-card ul, .rrs-mistake-card ul {
  margin-top: 0.75rem;
  padding-left: 1.2rem;
}

.rrs-practice-card li, .rrs-mistake-card li {
  margin-bottom: 0.5rem;
}

.rrs-tip-card {
  background: var(--rrs-gradient-soft);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.rrs-inline-code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.9rem;
}

/* ========== FAQ ========== */
.rrs-faq-item {
  background: var(--rrs-gray-800);
  border-radius: 16px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.rrs-faq-question {
  font-weight: 700;
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  margin: 0;
  border: none;
  width: 100%;
  text-align: left;
  color: var(--rrs-white);
  font-size: 1rem;
  transition: background 0.2s;
}

.rrs-faq-question:hover {
  background: rgba(124, 58, 237, 0.1);
}

.rrs-faq-answer {
  padding: 0 1.5rem 1.2rem;
  color: var(--rrs-gray-400);
  line-height: 1.6;
}

.rrs-faq-answer p {
  margin-top: 0.5rem;
}

/* ========== PROMPT GENERATOR BOX ========== */
.rrs-prompt-box {
  background: var(--rrs-gray-800);
  border-radius: 28px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  border: 1px solid rgba(124, 58, 237, 0.3);
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.4);
}

.rrs-prompt-input-group {
  display: flex;
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.rrs-prompt-input {
  flex: 1;
  padding: 1rem 1.2rem;
  border-radius: 60px;
  border: 1px solid var(--rrs-gray-600);
  background: var(--rrs-dark);
  color: white;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.rrs-prompt-input:focus {
  border-color: var(--rrs-primary);
}

.rrs-generate-btn {
  background: var(--rrs-gradient);
  border: none;
  padding: 0 2rem;
  border-radius: 60px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 1rem;
}

.rrs-generate-btn:hover {
  opacity: 0.9;
}

.rrs-prompt-examples {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.rrs-prompt-chip {
  background: rgba(124, 58, 237, 0.15);
  padding: 0.4rem 1rem;
  border-radius: 60px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;
   text-decoration: none;      /* add */
  color: var(--rrs-gray-200); /* add */
  display: inline-block;      /* add */
}

.rrs-prompt-chip:hover {
  background: rgba(124, 58, 237, 0.3);
}

/* ========== INTERNAL LINKS ========== */
.rrs-internal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0 1rem;
}

.rrs-link-pill {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  text-decoration: none;
  color: var(--rrs-gray-300);
  font-size: 0.85rem;
  transition: background 0.2s;
}

.rrs-link-pill:hover {
  background: rgba(124, 58, 237, 0.2);
  color: white;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  .rrs-two-columns {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .rrs-step {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .rrs-prompt-input-group {
    flex-direction: column;
  }
  
  .rrs-generate-btn {
    padding: 0.8rem;
  }
}
`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best AI tool for Reddit story videos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scenith's AI video generator is purpose-built for Reddit stories. It combines natural text-to-speech, auto-captioning, and dynamic stock footage to turn any Reddit thread into a YouTube-ready video in under 5 minutes." }
    },
    {
      "@type": "Question", 
      "name": "Can I use Reddit stories for YouTube without copyright issues?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, using public Reddit posts (text only) to create narrated content is generally acceptable as transformative fair use. Scenith provides full commercial rights to the AI-generated voiceover and video output." }
    },
    {
      "@type": "Question",
      "name": "How do I make faceless Reddit story videos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use Scenith's text-to-speech for narration and generate b-roll with AI image/video models. Our prompts include 'cinematic b-roll for storytime' to produce engaging visuals without showing your face." }
    }
  ]
};

export default function AiVideoForRedditStoriesPage() {
  const ctaUrl = "/create-ai-content?tab=video&utm_source=ai-video-for-reddit-stories&utm_medium=cta&utm_campaign=seo";

  return (
    <div className="rrs-page">
      <style>{pageStyles}</style>
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rrs-container">
        {/* HERO SECTION */}
        <section className="rrs-hero">
          <div className="rrs-hero-badge">🔥 #1 Tool for Reddit Narrations</div>
          <h1 className="rrs-h1">
            AI Video for Reddit Stories
          </h1>
          <p className="rrs-lead">
            Turn any Reddit thread into a viral YouTube Short, TikTok, or Instagram Reel — with AI voiceover, subtitles, and cinematic b-roll.
          </p>
          
          <div className="rrs-cta-group">
            <Link href={ctaUrl} className="rrs-btn rrs-btn-primary">
              🎬 Create Your First Reddit Video → 
            </Link>
            <a href="#how-it-works" className="rrs-btn rrs-btn-secondary">
              How It Works ↓
            </a>
          </div>

          <div className="rrs-demo-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="https://via.placeholder.com/800x450?text=Reddit+Story+Video+Example"
              style={{ width: '100%', display: 'block' }}
            >
              <source src="#" type="video/mp4" />
              {/* Demo video — would use actual asset from CDN */}
            </video>
          </div>
        </section>

        {/* USE CASES SECTION */}
       {/* PROMPT GENERATOR BOX */}
        <section className="rrs-section">
        <div className="rrs-prompt-box">
            <h3 className="rrs-h3" style={{marginBottom: '0.5rem'}}>🎤 Try It Now: Turn Any Script into a Video</h3>
            <p style={{color: 'var(--rrs-gray-400)', marginBottom: '1.5rem'}}>
            Paste your Reddit story below — we'll take you straight to the video creator with your script pre-filled.
            </p>
            <form action="/create-ai-content" method="GET" target="_self">
            <input type="hidden" name="tab" value="video" />
            <div className="rrs-prompt-input-group">
                <input 
                type="text" 
                name="text" 
                className="rrs-prompt-input" 
                placeholder="e.g., 'AITA for not inviting my sister to my wedding? She ruined my engagement...'"
                required
                />
                <button type="submit" className="rrs-generate-btn">
                Generate Video →
                </button>
            </div>
            </form>
          <div className="rrs-prompt-examples">
              <Link href={`/create-ai-content?tab=video&text=${encodeURIComponent("I caught my best friend stealing from my mom's funeral")}`} className="rrs-prompt-chip">
                'I caught my best friend stealing from my mom's funeral'
              </Link>
              <Link href={`/create-ai-content?tab=video&text=${encodeURIComponent("TIFU by sending a risky text to my boss")}`} className="rrs-prompt-chip">
                'TIFU by sending a risky text to my boss'
              </Link>
              <Link href={`/create-ai-content?tab=video&text=${encodeURIComponent("Reddit, am I the jerk for taking the last donut?")}`} className="rrs-prompt-chip">
                'Reddit, am I the jerk for taking the last donut?'
              </Link>
            </div>
        </div>
        </section>

        {/* REAL EXAMPLES SECTION */}
        <section className="rrs-section">
          <h2 className="rrs-h2">Real Examples from Top Creators</h2>
          <div className="rrs-two-columns">
            <div className="rrs-card">
              <h4 className="rrs-h4">📌 "The Glitch in the Matrix"</h4>
              <p>Reddit thread about parallel universe experiences turned into a 3-minute video. Used <strong>Veo 3.1 model (cinematic mode)</strong> for mysterious b-roll + <strong>Google TTS (US Male, storyteller style)</strong>. Got 420k views in 5 days.</p>
            </div>
            <div className="rrs-card">
              <h4 className="rrs-h4">🚗 "Karen at the Car Dealership"</h4>
              <p>Petty revenge story from r/ProRevenge. <strong>Kling 2.6 Pro with audio enabled</strong> created tense dialogue scenes. Subtitles boosted retention by 34% according to the creator.</p>
            </div>
            <div className="rrs-card">
              <h4 className="rrs-h4">👻 "I Worked at a Haunted Hotel"</h4>
              <p>Creepypasta-style narration used <strong>Wan 2.5 + slow, whispery TTS (Azure - Jenny, sorrowful)</strong>. The slow panning shots of dimly lit hallways kept viewers hooked until the final twist.</p>
            </div>
            <div className="rrs-card">
              <h4 className="rrs-h4">💔 "My Roommate Stole My Girlfriend"</h4>
              <p>Relationship drama from r/TrueOffMyChest. Creator used <strong>Luma Ray 3.1</strong> for emotional facial expressions (close-ups of sad figures) and added a sad piano soundtrack. 1.2M views on TikTok.</p>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP EXPLANATION */}
        <section id="how-it-works" className="rrs-section">
          <h2 className="rrs-h2">How to Create a Reddit Story Video in 15 Minutes</h2>
          <div className="rrs-steps">
            <div className="rrs-step">
              <div className="rrs-step-number">1</div>
              <div>
                <h3 className="rrs-h4">Copy a Reddit post</h3>
                <p>Find a compelling thread (r/AskReddit, r/ProRevenge, r/TIFU, r/confession). Copy the title and the main text body — aim for 300–800 words for a 1–3 min video.</p>
              </div>
            </div>
            <div className="rrs-step">
              <div className="rrs-step-number">2</div>
              <div>
                <h3 className="rrs-h4">Paste into our AI tool → Generate Voiceover</h3>
                <p>Paste the script in the <Link href="/create-ai-content?tab=voice" className="rrs-link-pill" style={{display: 'inline', padding: '0.2rem 0.5rem'}}>Voice tab</Link>. Pick a narrator voice: choose <strong>energetic (male/female)</strong> for funny stories, <strong>somber or whisper</strong> for creepy, <strong>calm and serious</strong> for dramatic. Speed up to 1.25x for fast-paced shorts.</p>
              </div>
            </div>
            <div className="rrs-step">
              <div className="rrs-step-number">3</div>
              <div>
                <h3 className="rrs-h4">Generate matching b-roll (AI images/video)</h3>
                <p>Switch to the <Link href="/create-ai-content?tab=video" className="rrs-link-pill" style={{display: 'inline', padding: '0.2rem 0.5rem'}}>Video tab</Link>. Use prompts that reflect <strong>scenes described in the story</strong>. For example: "tense office meeting, two people arguing, realistic lighting, cinematic". Select 16:9 for YouTube or 9:16 for TikTok/Shorts.</p>
              </div>
            </div>
            <div className="rrs-step">
              <div className="rrs-step-number">4</div>
              <div>
                <h3 className="rrs-h4">Add subtitles + export</h3>
                <p>After generating, you can <Link href="/tools/add-subtitles-to-videos" className="rrs-link-pill" style={{display: 'inline', padding: '0.2rem 0.5rem'}}>add auto-subtitles</Link> directly from our platform. Download MP4 and upload to YouTube Shorts / TikTok. Pro tip: overlay emojis or highlight keywords to increase engagement.</p>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <Link href={ctaUrl} className="rrs-btn rrs-btn-primary" style={{marginTop: '1rem'}}>
              🚀 Start Your First Video Now
            </Link>
          </div>
        </section>

        {/* BEST PRACTICES */}
        <section className="rrs-section">
          <h2 className="rrs-h2">Best Practices for Viral Reddit Videos</h2>
          <div className="rrs-two-columns">
            <div className="rrs-practice-card">
              <h3 className="rrs-h4">✅ Hook in first 5 seconds</h3>
              <p>Start with the most dramatic line from the story. Edit the AI voice to start at 1.2x speed then normalize. Use a freeze-frame effect (can be added post).</p>
              <h3 className="rrs-h4" style={{marginTop: '1rem'}}>✅ Visual pacing = emotional beats</h3>
              <p>Match the video speed to the story: slow shots for sad confessions, quick cuts for anger or humor. Our Veo 3.1 model excels at this.</p>
              <h3 className="rrs-h4" style={{marginTop: '1rem'}}>✅ Use native subtitles</h3>
              <p>90% of TikTok users watch without sound. Burned-in captions (colored by speaker if dialogue) increase retention. Use <Link href="/tools/add-subtitles-to-videos">Scenith's subtitle tool</Link> for perfect sync.</p>
            </div>
            <div className="rrs-mistake-card">
              <h3 className="rrs-h4">❌ Common Mistakes</h3>
              <ul style={{paddingLeft: '1.2rem'}}>
                <li><strong>Wall of text voiceover</strong> — break into paragraphs, add pauses.</li>
                <li><strong>Generic b-roll</strong> — don't use random stock footage. Generate specific scenes.</li>
                <li><strong>Ignoring subreddit tone</strong> — use different TTS voice for serious vs meme stories.</li>
                <li><strong>No hook</strong> — viewers scroll in 1s. Start with high-stakes sentence.</li>
                <li><strong>Poor audio mixing</strong> — keep background music at -25dB under voice.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADVANCED TIPS */}
        <section className="rrs-section">
          <div className="rrs-tip-card">
            <h3 className="rrs-h3">⚙️ Advanced Tips from 1M+ view creators</h3>
            <p><strong>1. Combine multiple Reddit threads</strong> — Create compilations: "3 Stories That Will Restore Your Faith in Humanity". Use different voices for each story to differentiate.</p>
            <p><strong>2. Generate image sequences for drama</strong> — In our Image tab, generate 5–7 still images depicting key moments. Then use "Ken Burns effect" (pan/zoom) in any free editor — adds dynamism without extra video credits.</p>
            <p><strong>3. Use GPT Image 1 Medium for consistent characters</strong> — When you need the same person appearing across multiple scenes, start with a base prompt: "John, 35, tired office worker, wearing blue polo" and modify the action each time.</p>
            <p><strong>4. Add AI-generated sound effects</strong> — for laughs, door slams, dramatic reveals. We don't have SFX yet, but you can layer free SFX from <code className="rrs-inline-code">freesound.org</code> using CapCut or DaVinci Resolve.</p>
          </div>
        </section>

        {/* PROMPT GENERATOR BOX (TEXT INPUT + REDIRECT) */}
        <section className="rrs-section">
          <div className="rrs-prompt-box">
            <h3 className="rrs-h3" style={{marginBottom: '0.5rem'}}>🎤 Try It Now: Turn Any Script into a Video</h3>
            <p style={{color: 'var(--rrs-gray-400)', marginBottom: '1.5rem'}}>Paste your Reddit story below — we'll take you straight to the video creator with your script pre-filled.</p>
            <form action="/create-ai-content" method="GET" target="_self">
              <input type="hidden" name="tab" value="video" />
              <div className="rrs-prompt-input-group">
                <input 
                  type="text" 
                  name="text" 
                  className="rrs-prompt-input" 
                  placeholder="e.g., 'AITA for not inviting my sister to my wedding? She ruined my engagement...'"
                  required
                />
                <button type="submit" className="rrs-generate-btn">
                  Generate Video →
                </button>
              </div>
            </form>
            <div className="rrs-prompt-examples">
            {[
                "I caught my best friend stealing from my mom's funeral",
                "TIFU by sending a risky text to my boss",
                "Reddit, am I the jerk for taking the last donut?"
              ].map((example, idx) => (
                <Link
                  key={idx}
                  href={`/create-ai-content?tab=video&text=${encodeURIComponent(example)}`}
                  className="rrs-prompt-chip"
                >
                  '{example}'
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING SECTION — CRITICAL */}
        <section className="rrs-section">
          <div style={{textAlign: 'center'}}>
            <h2 className="rrs-h2">More Tools to Supercharge Your Content</h2>
            <div className="rrs-internal-links">
              <Link href="/create-ai-content" className="rrs-link-pill">✨ Main AI Content Hub →</Link>
              <Link href="/create-ai-content?tab=voice" className="rrs-link-pill">🎙️ AI Voice Generator →</Link>
              <Link href="/create-ai-content?tab=image" className="rrs-link-pill">🖼️ AI Image Generator →</Link>
              <Link href="/tools/add-subtitles-to-videos" className="rrs-link-pill">📝 Add Subtitles to Video →</Link>
              <Link href="/tools/ai-video-generator" className="rrs-link-pill">🎬 AI Video Generator →</Link>
              <Link href="/tools/text-to-speech-for-youtube" className="rrs-link-pill">📹 TTS for YouTube →</Link>
              <Link href="/pricing" className="rrs-link-pill">💎 Upgrade for More Credits</Link>
            </div>
            <p style={{fontSize: '0.85rem', color: 'var(--rrs-gray-500)', marginTop: '1rem'}}>
              🔗 Ready to go? <strong><Link href="/create-ai-content">/create-ai-content</Link></strong> is the main hub — bookmark it.
            </p>
          </div>
        </section>

        {/* FAQ SECTION (with schema) */}
        <section className="rrs-section">
          <h2 className="rrs-h2">Frequently Asked Questions</h2>
          <div className="rrs-faq">
            <details className="rrs-faq-item">
              <summary className="rrs-faq-question">What is the cost to make Reddit story videos?</summary>
              <div className="rrs-faq-answer">
                <p>You get 50 free credits on signup — enough for ~2 short videos or 4 voiceovers. Paid plans start at $9/mo (300 credits). Each minute of AI video costs ~50-120 credits depending on model (Kling/Wan/Veo).</p>
              </div>
            </details>
            <details className="rrs-faq-item">
              <summary className="rrs-faq-question">Can I use my own voice instead of AI voice?</summary>
              <div className="rrs-faq-answer">
                <p>Yes — you can record your own narration and then sync it with our generated b-roll. Or use our Voice tab just for audio generation and then replace with your own file later.</p>
              </div>
            </details>
            <details className="rrs-faq-item">
              <summary className="rrs-faq-question">Which aspect ratio is best for Reddit story videos?</summary>
              <div className="rrs-faq-answer">
                <p>For TikTok/Shorts/Reels use 9:16 (vertical). For YouTube main channel or Facebook use 16:9. You can generate both versions with the same script.</p>
              </div>
            </details>
            <details className="rrs-faq-item">
              <summary className="rrs-faq-question">How long does it take to generate a video?</summary>
              <div className="rrs-faq-answer">
                <p>Voice generation: 2-4 seconds. Image generation: 10-30 seconds per frame. Video generation: 30-120 seconds depending on duration and model. You can leave the page and return to download.</p>
              </div>
            </details>
            <details className="rrs-faq-item">
              <summary className="rrs-faq-question">Do I need to credit Reddit or the author?</summary>
              <div className="rrs-faq-answer">
                <p>Best practice is to paraphrase and transform the story. If you quote directly, add "Based on a Reddit post by u/username". We recommend adding disclaimers for dramatic reenactments.</p>
              </div>
            </details>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{padding: '3rem 0', textAlign: 'center'}}>
          <h2 className="rrs-h2" style={{marginBottom: '1rem'}}>Start Growing Your Channel Today</h2>
          <p style={{marginBottom: '2rem', color: 'var(--rrs-gray-400)'}}>
            Join 15,000+ creators using Scenith to turn Reddit stories into viral videos.
          </p>
          <Link href={ctaUrl} className="rrs-btn rrs-btn-primary" style={{padding: '1rem 2.5rem', fontSize: '1.1rem'}}>
            🎬 Create Your First Reddit Story Video
          </Link>
        </section>
      </div>
    </div>
  );
}