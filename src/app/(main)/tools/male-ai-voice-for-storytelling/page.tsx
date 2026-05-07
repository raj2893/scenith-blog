// app/tools/male-ai-voice-for-storytelling/client.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function MaleAiVoiceStorytellingClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [promptText, setPromptText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const sampleStoryPrompt = `In the heart of the Whispering Woods, where the ancient pines touched the clouds and the rivers sang with silver light, there lived a storyteller named Elian. His voice was not loud, but it carried—through storms, through silence, through the bones of the earth itself. Every evening, the villagers would gather around the great hearth, and Elian would speak of forgotten kingdoms, of love that outlasted empires, of shadows that danced with courage. "Listen closely," he would begin, his voice a low, steady current. "For every story holds a key, and every key opens a door inside you." Tonight, he promised, they would hear the one tale no one had ever dared to tell.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(sampleStoryPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scrollToCta = () => {
    ctaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes cac-scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes cac-scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Male AI Voice for Storytelling",
            description:
              "Professional male AI voices optimized for storytelling, audiobook narration, and long-form content",

            image: [
              "https://scenith.in/images/AIVoicesFilteredSS.png"
            ],

            brand: {
              "@type": "Brand",
              name: "Scenith",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />

      <div className="storytelling-page" data-theme="light">
        {/* HERO SECTION */}
        <section className="st-hero">
          <div className="st-container">
            <div className="st-hero-grid">
              <div className="st-hero-content">
                <div className="st-badge">
                  <span>🎙️</span> Top-Rated Male Voice AI
                </div>
                <h1 className="st-hero-title">
                  Male AI Voice for{" "}
                  <span className="st-gradient-text">Storytelling</span>
                </h1>
                <p className="st-hero-description">
                  Transform your written stories into immersive audio narratives
                  with deep, engaging male AI voices. Perfect for audiobooks,
                  YouTube storytelling channels, podcasts, and character-driven
                  content.
                </p>
                <div className="st-hero-stats">
                  <div className="st-stat">
                    <span className="st-stat-number">40+</span>
                    <span className="st-stat-label">Male Voices</span>
                  </div>
                  <div className="st-stat">
                    <span className="st-stat-number">20+</span>
                    <span className="st-stat-label">Languages</span>
                  </div>
                  <div className="st-stat">
                    <span className="st-stat-number">3</span>
                    <span className="st-stat-label">Voice Providers</span>
                  </div>
                </div>
                <div className="st-hero-actions">
                  <Link href="/create-ai-content?tab=voice" className="st-btn st-btn-primary">
                    🎙️ Try Free Now
                  </Link>
                  <button onClick={scrollToCta} className="st-btn st-btn-secondary">
                    Compare Voices ↓
                  </button>
                </div>
              </div>
              <div className="st-hero-visual">
                <div className="st-waveform">
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                  <div className="st-wave-bar"></div>
                </div>
                <div className="st-quote-card">
                  <p>"The narrator's voice was deep as the ocean, steady as the tides — every word painted a picture."</p>
                  <span>— Sarah J., Audiobook Listener</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS IT — LONG FORM */}
        <section className="st-section st-section-dark">
          <div className="st-container">
            <div className="st-section-header">
              <h2>What Is Male AI Voice for Storytelling?</h2>
              <p>Understanding the technology behind natural narrative voices</p>
            </div>
            <div className="st-two-column">
              <div className="st-card">
                <h3>Beyond Standard Text-to-Speech</h3>
                <p>
                  Male AI voice for storytelling isn't your standard robotic TTS. It's a specialized
                  category of voice synthesis designed specifically for long-form narrative content.
                  These voices feature natural pacing, emotional inflection, character differentiation,
                  and the ability to maintain listener engagement over 30+ minute sessions.
                </p>
                <p>
                  Unlike generic TTS voices that sound flat and mechanical, storytelling AI voices
                  use advanced prosody models that understand sentence structure, punctuation,
                  and emotional context. They pause at commas, emphasize keywords, vary pitch
                  between sentences, and even distinguish between dialogue and narration.
                </p>
              </div>
              <div className="st-card">
                <h3>Why It's Different from Standard TTS</h3>
                <p>
                  Traditional text-to-speech was built for short, functional content like alerts
                  or navigation directions. Storytelling AI voices are trained on thousands of hours
                  of audiobook narrations, podcast episodes, and dramatic readings. This training
                  data teaches the AI how to build tension, convey emotion, and keep listeners
                  engaged across multiple chapters.
                </p>
                <p>
                  The result is a voice that breathes life into your characters, builds suspense
                  at cliffhangers, and delivers emotional payoff — all without sounding artificial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY IT WORKS — LONG FORM */}
        <section className="st-section">
          <div className="st-container">
            <div className="st-section-header">
              <h2>Why Male AI Voices Captivate Listeners</h2>
              <p>The psychology and technology behind engaging narration</p>
            </div>
            <div className="st-three-grid">
              <div className="st-feature-card">
                <div className="st-feature-icon">🧠</div>
                <h3>Deep Voice Authority</h3>
                <p>
                  Research consistently shows that listeners perceive deeper male voices as more
                  authoritative, trustworthy, and credible. For storytelling genres like fantasy,
                  mystery, and historical fiction, this natural authority helps suspend disbelief
                  and draw listeners deeper into the narrative world. A well-modulated deep voice
                  signals "pay attention — what follows matters."
                </p>
              </div>
              <div className="st-feature-card">
                <div className="st-feature-icon">📖</div>
                <h3>Natural Pacing & Rhythm</h3>
                <p>
                  Human listeners are exquisitely sensitive to unnatural pauses and robotic cadence.
                  Modern male AI voices use transformer-based models that analyze entire paragraphs
                  before speaking. This allows the AI to understand where sentences connect,
                  where to build tension, and where to let silence do the work — exactly like
                  a human narrator would.
                </p>
              </div>
              <div className="st-feature-card">
                <div className="st-feature-icon">🎭</div>
                <h3>Emotional Range & Character Voicing</h3>
                <p>
                  Premium male AI voices can shift between tones — from warm and intimate during
                  character dialogue to tense and dramatic during action sequences. Some models
                  even support multiple "voice styles" per character, allowing you to create
                  distinct voices for heroes, villains, and supporting characters in the same story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAMPLE PROMPT + TRY IT */}
        <section className="st-section st-section-feature">
          <div className="st-container">
            <div className="st-sample-card">
              <div className="st-sample-content">
                <span className="st-sample-badge">📝 Try This Prompt</span>
                <h3>Hear The Difference</h3>
                <p>
                  Copy this story excerpt and paste it into our AI voice generator.
                  Choose a male voice like "Bill" (deep, authoritative) or "Oliver"
                  (warm, friendly) to hear how professional narration sounds.
                </p>
                <div className="st-sample-text">
                  <p>{sampleStoryPrompt}</p>
                </div>
                <div className="st-sample-actions">
                  <button onClick={handleCopyPrompt} className="st-btn st-btn-outline">
                    {isCopied ? "✓ Copied!" : "📋 Copy Story"}
                  </button>
                  <Link href="/create-ai-content?tab=voice" className="st-btn st-btn-primary">
                    🎙️ Generate Voice →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEST PRACTICES — LONG FORM (400+ words) */}
        <section className="st-section st-section-dark">
          <div className="st-container">
            <div className="st-section-header">
              <h2>Best Practices for Storytelling Voiceovers</h2>
              <p>Pro techniques to maximize engagement and emotional impact</p>
            </div>
            <div className="st-practices-grid">
              <div className="st-practice-item">
                <div className="st-practice-num">01</div>
                <div>
                  <h3>Write for the Ear, Not the Eye</h3>
                  <p>
                    Sentences that look beautiful on paper can sound awkward when spoken aloud.
                    Use shorter sentences, avoid complex clauses, and read your script aloud
                    before generating. Listen for natural breathing points — your AI voice
                    will pause at commas and periods, but it can't interpret your intent.
                    Replace semicolons with periods, break long paragraphs, and use line breaks
                    to indicate scene changes. This simple editing step alone doubles listener
                    retention in our testing.
                  </p>
                </div>
              </div>
              <div className="st-practice-item">
                <div className="st-practice-num">02</div>
                <div>
                  <h3>Use Punctuation as Performance Directions</h3>
                  <p>
                    Punctuation is your AI narrator's sheet music. A period creates a full stop.
                    A comma creates a brief breath. An em dash (—) creates a dramatic pause.
                    Ellipses (...) create uncertainty or hesitation. Question marks lift the
                    pitch at the end of a sentence. Exclamation marks add energy. For maximum
                    dramatic effect, experiment with multiple punctuation marks in sequence —
                    "He couldn't believe it... was it really true?" triggers a different vocal
                    pattern than "He couldn't believe it. Was it really true?"
                  </p>
                </div>
              </div>
              <div className="st-practice-item">
                <div className="st-practice-num">03</div>
                <div>
                  <h3>Match Voice to Character & Genre</h3>
                  <p>
                    A deep, resonant voice (like Google's "Bill" or OpenAI's "Onyx") works
                    perfectly for fantasy epics, mysteries, and historical fiction. A warm,
                    conversational voice (like "Oliver" or "Nova") works better for romance,
                    self-development, and children's stories. For horror or thriller, choose
                    a voice with a wider emotional range — some male AI voices can shift from
                    calm to menacing within a single paragraph. Test different voices with the
                    same 30-second excerpt to feel the difference before committing to your
                    full project.
                  </p>
                </div>
              </div>
              <div className="st-practice-item">
                <div className="st-practice-num">04</div>
                <div>
                  <h3>Create Voice Signatures for Characters</h3>
                  <p>
                    For multi-character narratives, consider generating dialogue lines separately
                    using different voice profiles. Audiobook professionals call this "full cast
                    narration." Generate your narrator's voice as the baseline, then use a slightly
                    faster, higher-pitched male voice for young male characters, and a slower,
                    deeper voice for older or antagonistic characters. Export each character's
                    lines as separate MP3s, then layer them in a free editor like Audacity.
                    This single technique separates amateur AI narration from professional-grade
                    productions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES — LONG FORM */}
        <section className="st-section">
          <div className="st-container">
            <div className="st-section-header">
              <h2>7 Mistakes to Avoid With AI Narration</h2>
              <p>What separates amateur from professional AI storytelling</p>
            </div>
            <div className="st-mistakes-grid">
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Ignoring Dialogue Tags</h3>
                  <p>Words like "whispered," "shouted," or "muttered" don't automatically change the voice. You must write punctuation and syntax that forces the desired delivery.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Using the Same Voice for Everything</h3>
                  <p>Listeners fatigue quickly when every word has the same tone. Vary sentence length, use rhetorical questions, and break paragraphs with dialogue.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Over-Punctuating</h3>
                  <p>Too many commas or ellipses create a choppy, halting delivery. Let the AI's natural prosody work — only add punctuation where a human would pause.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Ignoring Character Voice Consistency</h3>
                  <p>If your hero speaks with warmth in chapter one but sounds aggressive in chapter five without reason, listeners notice immediately.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Generating Without Proofreading</h3>
                  <p>AI reads homophones (their/there/they're) based on spelling. A typo creates an absurd mispronunciation that ruins immersion.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Choosing Speed Over Clarity</h3>
                  <p>Faster isn't better for storytelling. Set speed to 0.9x or 1.0x for narration. 1.2x+ sounds rushed and artificial.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>No Scene Breaks or Pacing</h3>
                  <p>Listeners need micro-pauses to process emotional beats. Add line breaks with silence indicators to give breathing room.</p>
                </div>
              </div>
              <div className="st-mistake-card">
                <span className="st-mistake-emoji">❌</span>
                <div>
                  <h3>Overusing Character Voices</h3>
                  <p>Distinct character voices are great, but constant switching between 3+ voices within 10 seconds creates audio chaos. Reserve full cast for dialogue-heavy scenes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADVANCED TIPS — LONG FORM */}
        <section className="st-section st-section-dark">
          <div className="st-container">
            <div className="st-section-header">
              <h2>Advanced Tips for Professional AI Storytelling</h2>
              <p>Take your audio productions to the next level</p>
            </div>
            <div className="st-advanced-grid">
              <div className="st-advanced-card">
                <h3>🎧 Layer Sound Effects & Ambience</h3>
                <p>Export your AI narration as a clean MP3, then layer royalty-free ambience tracks underneath. Rain sounds for mystery scenes, crackling fire for tavern conversations, wind for mountain journeys. The contrast between the clean voice and ambient background creates cinematic depth that keeps listeners immersed for hours.</p>
              </div>
              <div className="st-advanced-card">
                <h3>⚡ Use SSML for Fine Control</h3>
                <p>Google and Azure voices support Speech Synthesis Markup Language (SSML). Add &lt;prosody rate="slow"&gt; to slow down a dramatic line. Use &lt;emphasis level="strong"&gt; to punch key words. Insert &lt;break time="1s"/&gt; for dramatic pauses. Most users don't know SSML exists — mastering it puts you in the top 1% of AI voice creators.</p>
              </div>
              <div className="st-advanced-card">
                <h3>🔄 Generate Multiple Takes</h3>
                <p>The same text can sound slightly different each time due to AI's non-deterministic generation. For critical scenes or character introductions, generate 3-5 versions, listen to each, and pick the one with the best emotional delivery. Store alternates in case you need to re-record a single line without regenerating an entire chapter.</p>
              </div>
              <div className="st-advanced-card">
                <h3>🎛️ Post-Process With EQ</h3>
                <p>Professional audiobooks apply subtle equalization: a gentle high-shelf boost above 8kHz for clarity, a slight cut around 200-300Hz to reduce muddiness, and a narrow boost around 2-4kHz for presence. Free tools like Audacity or DaVinci Resolve can transform good AI voice into broadcast-quality narration with 2 minutes of EQ adjustment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VOICE COMPARISON TABLE */}
        <section className="st-section" id="voice-comparison" ref={ctaSectionRef}>
          <div className="st-container">
            <div className="st-section-header">
              <h2>Best Male AI Voices for Storytelling</h2>
              <p>Compare top-rated narrative voices side by side</p>
            </div>
            <div className="st-table-wrapper">
              <table className="st-comparison-table">
                <thead>
                  <tr>
                    <th>Voice Name</th>
                    <th>Provider</th>
                    <th>Style</th>
                    <th>Best For</th>
                    <th>Demo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Bill</strong></td><td>Google</td><td>Deep, authoritative</td><td>Fantasy, mystery, historical</td><td><audio controls src="https://cdn.scenith.in/voice-demos/bill-demo.mp3" className="st-audio-demo" /></td></tr>
                  <tr><td><strong>Oliver</strong></td><td>Google</td><td>Warm, friendly</td><td>Romance, children's, self-help</td><td><audio controls src="https://cdn.scenith.in/voice-demos/oliver-demo.mp3" className="st-audio-demo" /></td></tr>
                  <tr><td><strong>Onyx</strong></td><td>OpenAI</td><td>Neutral, clear</td><td>Documentary, educational</td><td><audio controls src="https://cdn.scenith.in/voice-demos/onyx-demo.mp3" className="st-audio-demo" /></td></tr>
                  <tr><td><strong>Guy</strong></td><td>Azure</td><td>Conversational, natural</td><td>First-person narratives</td><td><audio controls src="https://cdn.scenith.in/voice-demos/guy-demo.mp3" className="st-audio-demo" /></td></tr>
                  <tr><td><strong>Davis</strong></td><td>Google</td><td>Deep, resonant</td><td>Horror, thriller, intense drama</td><td><audio controls src="https://cdn.scenith.in/voice-demos/davis-demo.mp3" className="st-audio-demo" /></td></tr>
                </tbody>
              </table>
            </div>
            <div className="st-table-note">
              <p>*All demo MP3s generated with identical text. Listen with headphones for best comparison.</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="st-section st-section-dark">
          <div className="st-container">
            <div className="st-section-header">
              <h2>Popular Storytelling Use Cases</h2>
              <p>Where male AI voices deliver the strongest results</p>
            </div>
            <div className="st-usecases-grid">
              <div className="st-usecase"><span>📚</span><strong>Audiobooks</strong><p>Complete novel narration, chapter by chapter</p></div>
              <div className="st-usecase"><span>🎬</span><strong>YouTube Story Channels</strong><p>Reddit stories, creepypasta, true crime</p></div>
              <div className="st-usecase"><span>🎙️</span><strong>Podcast Intros</strong><p>Professional show openings & ad reads</p></div>
              <div className="st-usecase"><span>🎮</span><strong>Game Narrators</strong><p>Opening cinematics & lore delivery</p></div>
              <div className="st-usecase"><span>🎓</span><strong>E-Learning</strong><p>Case studies & scenario-based training</p></div>
              <div className="st-usecase"><span>💬</span><strong>Chatbot Personas</strong><p>Consistent character voice for interactive stories</p></div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS / RELATED TOOLS */}
        <section className="st-section">
          <div className="st-container">
            <div className="st-section-header">
              <h2>More AI Voice & Narration Tools</h2>
              <p>Explore related tools to enhance your storytelling workflow</p>
            </div>
            <div className="st-links-grid">
              <Link href="/tools/ai-voice-generator-for-youtube" className="st-link-card">
                <span>🎥</span> AI Voice for YouTube
              </Link>
              <Link href="/tools/ai-audiobook-narrator" className="st-link-card">
                <span>📖</span> AI Audiobook Narrator
              </Link>
              <Link href="/tools/female-ai-voice-for-storytelling" className="st-link-card">
                <span>👩</span> Female AI Voice
              </Link>
              <Link href="/tools/add-subtitles-to-videos" className="st-link-card">
                <span>💬</span> Add Subtitles to Videos
              </Link>
              <Link href="/tools/ai-voice-cloning" className="st-link-card">
                <span>🎭</span> AI Voice Cloning
              </Link>
              <Link href="/tools/ai-video-generator" className="st-link-card">
                <span>🎬</span> AI Video Generator
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="st-section st-section-faq">
          <div className="st-container">
            <div className="st-section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about male AI voices for storytelling</p>
            </div>
            <div className="st-faq-list">
              {[
                {
                  q: "Can male AI voices do different character accents?",
                  a: "Yes — many voices support regional variations. Google's 'Bill' can speak with US, UK, or Australian English accents. OpenAI's TTS offers natural American and British variants. For distinct character voices, you'll need to select different base voices and adjust speed/pitch slightly."
                },
                {
                  q: "How long can my AI-generated narration be?",
                  a: "Free users can generate up to 1,000 characters per request (about 150-200 words). Paid plans support up to 5,000 characters. For full audiobooks, generate chapter by chapter and combine MP3s. Most novels generate beautifully with 10-15 minutes per chapter."
                },
                {
                  q: "Are there male AI voices that whisper or shout?",
                  a: "Standard TTS doesn't support volume modulation, but advanced users can simulate effects using SSML tags (Google/Azure) or by generating at different speeds. For shouting, use ALL CAPS + exclamation marks. For whispering, add 'whispered' as a dialogue tag and use parentheses."
                },
                {
                  q: "Which voice is best for long-form narration (2+ hours)?",
                  a: "OpenAI's 'Onyx' and Google's 'Oliver' have the most consistent intonation over long periods. Deeper voices like 'Bill' and 'Davis' can become fatiguing after 60+ minutes. For extended listening sessions, prioritize warmth over depth — 'Oliver' is our top recommendation for full-length audiobooks."
                },
                {
                  q: "Can I sell audiobooks made with AI voices?",
                  a: "Absolutely. All content generated on Scenith comes with full commercial rights. You can publish AI-narrated audiobooks on Audible (ACX), Google Play Books, Apple Books, and YouTube without attribution. Some platforms require disclosure of AI narration — check each platform's policy before publishing."
                },
                {
                  q: "What's the difference between Google, OpenAI, and Azure voices?",
                  a: "Google voices offer the widest selection (30+ male voices across 20 languages) and are optimized for speed. OpenAI voices have unmatched emotional nuance and natural prosody but fewer options (4 male voices). Azure excels at ethical, organic delivery — ideal for sensitive content like children's stories. All three are included in your Scenith subscription."
                },
                {
                  q: "How do I make my AI voice sound less robotic?",
                  a: "Three fixes: 1) Add punctuation strategically — commas and periods create natural breath pauses. 2) Slow the speaking rate to 0.9x. 3) Break long paragraphs into shorter sentences. For advanced users, SSML's <prosody> tag lets you control pitch contours and speaking rates at the word level for completely natural delivery."
                },
                {
                  q: "Can I mix male and female voices in the same story?",
                  a: "Yes — this creates 'full cast narration'. Generate dialogue for male characters using male voices, and female characters using female voices. Export as separate MP3s, then layer them over your narrator track. This technique produces professional-grade audio that rivals human-performed audiobooks."
                }
              ].map((faq, idx) => (
                <div key={idx} className={`st-faq-item ${activeFaq === idx ? "active" : ""}`}>
                  <button 
                    className="st-faq-question"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="st-faq-icon">{activeFaq === idx ? "−" : "+"}</span>
                  </button>
                  <div className="st-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="st-cta-section">
          <div className="st-container">
            <div className="st-cta-card">
              <div className="st-cta-content">
                <span className="st-cta-badge">✨ Limited Time</span>
                <h2>Ready to Bring Your Stories to Life?</h2>
                <p>Join thousands of creators using Scenith's male AI voices for storytelling. Get 50 free credits to start — no credit card required.</p>
                <div className="st-cta-buttons">
                  <Link href="/create-ai-content?tab=voice" className="st-btn st-btn-primary st-btn-large">
                    🎙️ Start Creating Free
                  </Link>
                  <Link href="/pricing" className="st-btn st-btn-outline st-btn-large" target="_blank">
                    View Pricing →
                  </Link>
                </div>
                <p className="st-cta-note">Includes full commercial rights · Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* UTM-tracked conversion CTA */}
        <div className="st-sticky-cta">
          <Link href="/create-ai-content?tab=voice&utm_source=storytelling-tool&utm_medium=sticky-bar&utm_campaign=male-voice-seo">
            🎙️ Try Male AI Voice Free →
          </Link>
        </div>
      </div>
    </>
  );
}