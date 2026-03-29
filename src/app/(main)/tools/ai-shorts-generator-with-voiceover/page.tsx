import type { Metadata } from "next";
import "./ai-shorts-generator.css";

export const metadata: Metadata = {
  title: "Free AI Shorts Generator with Voiceover (2026) — No Editing Required | Scenith",
  description: "Generate AI-powered short videos with automatic voiceover in seconds. Turn any text prompt into a ready-to-upload YouTube Short, Instagram Reel, or TikTok video. Free to start — no editing software needed.",
  keywords: ["ai shorts generator","ai shorts generator with voiceover","ai video generator with voice","text to short video","youtube shorts ai generator","ai tiktok video maker","instagram reels ai generator","ai voiceover video maker","faceless youtube channel ai","ai short video creator free","automated shorts generator","short form video ai tool","scenith ai video"],
  openGraph: {
    title: "Free AI Shorts Generator with Voiceover | Scenith",
    description: "Create YouTube Shorts, Reels, and TikToks from a single text prompt — with AI voiceover included. No editing skills needed.",
    url: "https://scenith.in/tools/ai-shorts-generator-with-voiceover",
    type: "website",
    siteName: "Scenith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Shorts Generator with Voiceover | Scenith",
    description: "Turn a text prompt into a short video with AI voiceover in seconds. Perfect for YouTube Shorts, Reels, and TikTok.",
  },
  alternates: { canonical: "https://scenith.in/tools/ai-shorts-generator-with-voiceover" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-shorts-generator-with-voiceover",
      url: "https://scenith.in/tools/ai-shorts-generator-with-voiceover",
      name: "Free AI Shorts Generator with Voiceover — Scenith",
      description: "Generate AI-powered short videos with automatic voiceover from a text prompt. Supports YouTube Shorts, Instagram Reels, TikTok. Multiple AI models, instant MP4 download.",
      datePublished: "2025-11-01",
      dateModified: "2026-03-01",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI Shorts Generator with Voiceover", item: "https://scenith.in/tools/ai-shorts-generator-with-voiceover" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Shorts Generator with Voiceover",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier with 50 credits on signup. Paid plans from $9/month." },
      featureList: ["Text-to-video generation","AI voiceover synthesis","YouTube Shorts 9:16","Instagram Reels","TikTok format","Kling 2.6, Veo 3.1, Wan 2.5, Grok Imagine","40+ AI voices 20+ languages","MP4 download commercial rights"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How do I generate an AI short video with voiceover for free?", acceptedAnswer: { "@type": "Answer", text: "Sign up on Scenith for free (50 credits, no card). Use the Video tab for your clip and the Voice tab for the narration. Download both and combine in CapCut." } },
        { "@type": "Question", name: "What aspect ratio should I use for YouTube Shorts?", acceptedAnswer: { "@type": "Answer", text: "YouTube Shorts requires 9:16 vertical aspect ratio. Select 9:16 in Scenith before generating. This works natively on Reels and TikTok too." } },
        { "@type": "Question", name: "Can I use AI-generated videos on YouTube monetised channels?", acceptedAnswer: { "@type": "Answer", text: "Yes. Scenith grants full commercial rights on all generated content. AI-generated video is permitted on YouTube monetised channels." } },
      ],
    },
  ],
};

const CTA_URL = "https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=shorts_generator&utm_campaign=ai_shorts_voiceover";

export default function AIShortsGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="asg-page">

        {/* ── Sticky Topbar ── */}
        <nav className="asg-topbar">
          <a href="https://scenith.in" className="asg-topbar-brand">SCENE<span>ITH</span></a>
          <a href={CTA_URL} className="asg-topbar-cta">🎬 Try Free →</a>
        </nav>

        {/* ── Hero ── */}
        <header className="asg-hero">
          <div className="asg-hero-bg" />
          <div className="asg-hero-eyebrow asg-anim asg-anim-1">
            <span className="asg-hero-eyebrow-dot" />
            Free in 2026 · No Editing Skills Needed
          </div>
          <h1 className="asg-hero-title asg-anim asg-anim-2">
            AI Shorts Generator<br />
            <span className="asg-line-accent">with Voiceover</span>
          </h1>
          <p className="asg-hero-sub asg-anim asg-anim-3">
            Turn any text prompt into a publish-ready YouTube Short, Instagram Reel, or TikTok — complete with AI-generated voiceover. No camera. No editor. No budget.
          </p>
          <div className="asg-hero-cta-wrap asg-anim asg-anim-4">
            <a href={CTA_URL} className="asg-hero-cta">
              🎬 Generate Your First AI Short Free
              <span className="asg-cta-arrow">→</span>
            </a>
            <p className="asg-hero-cta-note">
              <span>✓ 50 free credits</span>
              <span>✓ No credit card</span>
              <span>✓ Commercial rights included</span>
            </p>
          </div>
          <div className="asg-stats-row asg-anim asg-anim-5">
            <div className="asg-stat"><span className="asg-stat-num"><span className="asg-stat-accent">6</span> Models</span><span className="asg-stat-label">AI Video Engines</span></div>
            <div className="asg-stat"><span className="asg-stat-num"><span className="asg-stat-accent">40+</span></span><span className="asg-stat-label">AI Voices</span></div>
            <div className="asg-stat"><span className="asg-stat-num"><span className="asg-stat-accent">9:16</span></span><span className="asg-stat-label">Shorts Native</span></div>
            <div className="asg-stat"><span className="asg-stat-num"><span className="asg-stat-accent">~2 min</span></span><span className="asg-stat-label">Avg Gen Time</span></div>
          </div>
        </header>

        {/* ── Main ── */}
        <main className="asg-main">

          {/* What Is It */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">What Is It?</span>
              <h2 className="asg-section-title">The Fastest Way to Create Short-Form AI Videos in 2026</h2>
              <p className="asg-section-sub">Short-form video is the dominant content format right now. This tool combines AI video generation and AI voiceover into one frictionless workflow — idea to published short in under 5 minutes.</p>
            </div>
            <div className="asg-prose">
              <p>The <strong>AI Shorts Generator with Voiceover</strong> on Scenith is built for one specific job: producing short-form video content at scale without recording equipment, a production team, or months of learning video editing.</p>
              <p>Here is how the workflow looks: type a text prompt describing the scene you want. The AI generates a cinematic short video clip — 5 or 10 seconds long — in 9:16, 16:9, or 1:1 aspect ratio. In the same session, generate an AI voiceover from your script using one of 40+ natural-sounding voices. The result is two ready-to-use files: an MP4 video and an MP3 voiceover. Overlay them in CapCut or any basic editor. Your short is done.</p>
              <p>In 2026, the volume of short-form content required to grow a channel has exploded. Posting once or twice a week no longer moves the needle. Creators who are winning are posting 5–7 Shorts per week — and most of them are using AI. This tool is purpose-built for that workflow.</p>
              <div className="asg-highlight-box">
                <strong>Why voice + video together matters:</strong> Most AI video tools give you a silent clip. Most AI voice tools give you just audio. Finding a single platform that does both — same credit balance, same login, same UX — is what makes Scenith different for short-form creators.
              </div>
              <p>Scenith supports six AI video models: <strong>Wan 2.5</strong>, <strong>Kling 2.5 Turbo</strong>, <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1 Fast</strong>, <strong>Veo 3.1</strong>, and <strong>Grok Imagine</strong>. For voiceovers: Google TTS (20+ languages), OpenAI TTS (ultra-natural English), and Azure Neural TTS (enterprise multilingual). No other free platform on the market offers this combination in a single session.</p>
            </div>
          </section>

          <hr className="asg-divider" />

          {/* How It Works */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">The Workflow</span>
              <h2 className="asg-section-title">Create an AI Short Video with Voiceover in 4 Steps</h2>
            </div>
            <ol className="asg-steps">
              <li className="asg-step">
                <div className="asg-step-num">1</div>
                <div className="asg-step-content">
                  <h3 className="asg-step-title">Write Your Video Prompt</h3>
                  <p className="asg-step-text">Describe the scene with specificity: camera angle, lighting, subject, mood, and motion. For example: <em>"Cinematic slow-motion drone shot of a neon-lit Tokyo street at midnight, rain-soaked roads reflecting purple and pink signs, fog rolling between skyscrapers."</em> The more vivid your prompt, the better the output. Scenith includes 13 ready-to-use video prompt chips for instant inspiration.</p>
                  <span className="asg-step-badge">⚡ Takes 30 seconds</span>
                </div>
              </li>
              <li className="asg-step">
                <div className="asg-step-num">2</div>
                <div className="asg-step-content">
                  <h3 className="asg-step-title">Choose Your AI Video Model & Aspect Ratio</h3>
                  <p className="asg-step-text">Select 9:16 for Shorts, Reels, and TikTok. Choose your model: <strong>Kling 2.6 Pro</strong> or <strong>Veo 3.1</strong> for cinematic quality, <strong>Wan 2.5</strong> for fast low-cost batching, or <strong>Grok Imagine</strong> if you want AI-generated audio baked into the video. Set 5s or 10s clip duration.</p>
                  <span className="asg-step-badge">⚡ Takes 15 seconds</span>
                </div>
              </li>
              <li className="asg-step">
                <div className="asg-step-num">3</div>
                <div className="asg-step-content">
                  <h3 className="asg-step-title">Generate AI Voiceover for Your Script</h3>
                  <p className="asg-step-text">Switch to the Voice tab. Type your narration script. Choose from 40+ voices across Google, OpenAI, and Azure. Pick language, gender, and style. Adjust speed (0.5x to 4x). Hit generate — your MP3 is ready in under 4 seconds. Preview in the browser before downloading.</p>
                  <span className="asg-step-badge">⚡ Ready in 4 seconds</span>
                </div>
              </li>
              <li className="asg-step">
                <div className="asg-step-num">4</div>
                <div className="asg-step-content">
                  <h3 className="asg-step-title">Download MP4 + MP3 and Combine</h3>
                  <p className="asg-step-text">Drag both files into CapCut (free, mobile or desktop). Mute the video track. Overlay the MP3 voiceover. Add auto-subtitles. Export. Total post-production time: under 5 minutes. Your short is ready to upload natively to YouTube Shorts, Instagram Reels, or TikTok.</p>
                  <span className="asg-step-badge">✅ Short is done</span>
                </div>
              </li>
            </ol>
          </section>

          {/* Mid CTA 1 */}
          <div className="asg-mid-cta">
            <h2 className="asg-mid-cta-title">Ready to Generate Your First Short?</h2>
            <p className="asg-mid-cta-sub">50 free credits. No card. 6 AI video models + 40+ voices on the same platform.</p>
            <a href={CTA_URL} className="asg-mid-cta-btn">🎬 Start Generating for Free →</a>
          </div>

          <hr className="asg-divider" />

          {/* Features */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Everything Included</span>
              <h2 className="asg-section-title">Everything You Need to Run a Faceless Short-Form Channel</h2>
            </div>
            <div className="asg-features-grid">
              {[
                { icon: "📱", title: "9:16 Native Vertical Video", text: "Every AI model supports 9:16 vertical output natively — no cropping, no black bars, no re-encoding. Formatted exactly the way YouTube Shorts, TikTok, and Instagram Reels expect it." },
                { icon: "🎙️", title: "40+ AI Voices in 20+ Languages", text: "Google TTS, OpenAI TTS, and Azure Neural TTS voices. Male, female, neutral. Speed control from 0.5x to 4x. Perfect for multilingual channels targeting international audiences." },
                { icon: "🤖", title: "6 State-of-the-Art Video Models", text: "Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine, Kling 2.5 Turbo, Veo 3.1 Fast. Pick based on quality, speed, or budget. All output MP4 ready for direct upload." },
                { icon: "🎵", title: "Grok Imagine: AI Audio Built-In", text: "The only model that bakes AI-generated ambient audio directly into the video. Pair it with a voiceover for a fully produced short with layered, professional audio." },
                { icon: "🖼️", title: "Image to Video — Animate Your Images", text: "Generate a still image with Scenith's AI Image Generator, then hit 'Make Video from this Image' to animate it. Perfect for product reveals and character intros." },
                { icon: "⚡", title: "One Credit Balance for All Tools", text: "No separate subscriptions for voice, image, and video. One plan, one login, one UX. Credits work across everything." },
                { icon: "📥", title: "Instant MP4 + MP3 Downloads", text: "Industry-standard MP4 and MP3 output. No watermarks. No platform lock-in. Full commercial rights on every single generation." },
                { icon: "💡", title: "13 Pre-Written Video Prompt Chips", text: "Built-in cinematic prompts: neon Tokyo, space launch, bioluminescent bay, supercell storm, street story, deep ocean, and 7 more. Click any chip to instantly fill the prompt field." },
                { icon: "🌍", title: "Multilingual Voiceover Support", text: "Create shorts for Hindi, Spanish, French, German, Mandarin, Arabic, and 14+ more languages. Run the same video concept across multiple markets in one session." },
              ].map((f) => (
                <div className="asg-feature-card" key={f.title}>
                  <span className="asg-feature-icon">{f.icon}</span>
                  <h3 className="asg-feature-title">{f.title}</h3>
                  <p className="asg-feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="asg-divider" />

          {/* Use Cases */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Who Uses This</span>
              <h2 className="asg-section-title">Who Is the AI Shorts Generator with Voiceover Built For?</h2>
            </div>
            <div className="asg-usecases-grid">
              {[
                { icon: "😶", title: "Faceless YouTube Channel Owners", text: "The most common use case. Faceless channels in space facts, financial literacy, true crime, history, and motivational niches rely entirely on AI video + AI voiceover. With Scenith, batch-produce 7 shorts in one sitting — enough for an entire week across YouTube Shorts, Reels, and TikTok simultaneously." },
                { icon: "📣", title: "Digital Marketers & Ad Agencies", text: "Performance marketers need a constant supply of video creatives for A/B testing. AI-generated Shorts make it cost-effective to test 10 different video concepts at the budget of one traditional production. Native 9:16 output with commercial rights means direct use as Meta, TikTok, and YouTube Shorts ads." },
                { icon: "🛍️", title: "Ecommerce & D2C Brand Teams", text: "Product brands use AI Shorts for ambient showcase videos: a perfume bottle in cinematic light, a shoe in dramatic shadow. Add a brand script voiceover and you have a product Short ready to post in minutes — no photoshoot, no production team." },
                { icon: "📚", title: "Educators & Course Creators", text: "Short educational content — 60-second explainers, 'did you know' facts, concept overviews — is one of the highest-performing formats for building an audience before launching a paid course. Use AI video for the hook and AI voiceover for the narration." },
                { icon: "🎮", title: "Gaming & Entertainment Channels", text: "Cinematic AI video is perfect for gaming teaser content, concept art reveals, lore videos, and hype clips. Combine Kling 2.6 Pro's high-fidelity output with a dramatic narration for the kind of short that racks up millions of views in gaming niches." },
                { icon: "🧑‍💼", title: "Solopreneurs & Personal Brand Builders", text: "Short-form video is the fastest organic growth channel available right now for B2B personal brands. Use AI voiceover to repurpose newsletter posts or LinkedIn content into 60-second Shorts with visual backing, and cross-post across every platform from one session." },
              ].map((u) => (
                <div className="asg-usecase-card" key={u.title}>
                  <span className="asg-usecase-icon">{u.icon}</span>
                  <h3 className="asg-usecase-title">{u.title}</h3>
                  <p className="asg-usecase-text">{u.text}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="asg-divider" />

          {/* Platform Guide */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Platform Guide</span>
              <h2 className="asg-section-title">Optimising Your AI Short for Every Platform in 2026</h2>
            </div>
            <div className="asg-prose">
              <p>A single AI-generated short can be published on four different platforms in the same session. But each platform has specific nuances that determine whether your video gets pushed by the algorithm or buried.</p>
              <div className="asg-platform-tags">
                {["▶ YouTube Shorts", "📸 Instagram Reels", "🎵 TikTok", "📌 Pinterest Idea Pins", "💼 LinkedIn Video"].map(p => (
                  <span className="asg-platform-tag" key={p}>{p}</span>
                ))}
              </div>
              <h3>YouTube Shorts</h3>
              <p>YouTube Shorts has the highest organic discovery potential of any short-form platform for English-language content. The algorithm favors channels posting 3–5 Shorts per week minimum. The sweet spot for AI content is <strong>niche educational or cinematic visual content</strong> with a strong voiceover hook in the first 2 seconds. Use 9:16, keep under 60 seconds, and add auto-generated subtitles via YouTube Studio to increase watch time significantly.</p>
              <p>Best models: <strong>Veo 3.1</strong> (best quality) or <strong>Kling 2.6 Pro</strong> (excellent motion, 1080p). Loop a 10-second clip in your editor to fill a 45–60 second narration.</p>
              <h3>Instagram Reels</h3>
              <p>Reels performance is heavily influenced by <strong>audio</strong> in 2026 — layering a trending background track at low volume under your AI voiceover dramatically increases reach. The 9:16 clips from Scenith are natively formatted. Add on-screen text via CapCut for better retention signals.</p>
              <p>Best approach: Cinematic AI video (Kling 2.6 Pro or Grok Imagine) + AI voiceover + trending lo-fi track at 10–15% volume. Post at 6AM–9AM local time for best organic reach.</p>
              <h3>TikTok</h3>
              <p>TikTok's algorithm values completion rate above all else. Make your voiceover tight, fast-paced, and high-energy. Push to 1.25x speed for a sharper delivery. Grok Imagine's built-in audio feels authentic rather than AI-generated — a real advantage on TikTok where naturalness matters.</p>
              <p>Recommended format: 5-second looping AI video repeated 3–4x in CapCut, with a 20–25 second punchy AI voiceover. Total 25–30 seconds. This format outperforms longer content in most TikTok niches.</p>
              <h3>Pinterest and LinkedIn</h3>
              <p>Pinterest Idea Pins drive massive passive traffic for home design, food, travel, and fashion niches — heavily underutilised by AI creators. LinkedIn Video is experiencing a B2B growth moment in 2026 — professional AI voiceovers via OpenAI TTS paired with Scenith's image-to-video feature perform extremely well for thought leadership content.</p>
            </div>
          </section>

          <hr className="asg-divider" />

          {/* Voiceover Strategy */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Voiceover Strategy</span>
              <h2 className="asg-section-title">The Complete Guide to AI Voiceovers for Short-Form Video</h2>
            </div>
            <div className="asg-prose">
              <p>The voiceover is often more important than the video itself for short-form content performance. Viewers will keep watching a mediocre visual with a compelling narration far longer than a beautiful video with boring audio.</p>
              <h3>The Hook Formula (First 2 Seconds)</h3>
              <p>The algorithm measures how many viewers continue past the 2-second mark. Most effective AI voiceover hooks follow three patterns:</p>
              <ul>
                <li><strong>The revelation hook:</strong> "Most people don't know this, but…" / "Scientists just discovered something that changes everything about…"</li>
                <li><strong>The counter-intuitive hook:</strong> "The more you sleep, the more productive you become — and here's exactly why."</li>
                <li><strong>The curiosity gap:</strong> "There's a place on Earth where time runs 38 microseconds faster every single day. And we put a machine there to exploit it."</li>
              </ul>
              <h3>Choosing the Right AI Voice for Your Niche</h3>
              <ul>
                <li><strong>Documentary / science / space:</strong> Deep male Google TTS at 1.0x — authoritative, calm.</li>
                <li><strong>Motivational / hustle:</strong> Mid-range male OpenAI TTS at 1.1–1.25x — energy and directness.</li>
                <li><strong>Wellness / sleep:</strong> Female Google TTS at 0.85x — slow, soft, breathy.</li>
                <li><strong>Finance / business / tech:</strong> Male or female OpenAI TTS at 1.0x — clean, confident.</li>
                <li><strong>Kids / education:</strong> Upbeat female Google TTS at 0.95x — warm, enthusiastic.</li>
              </ul>
              <h3>Script Length and Pacing</h3>
              <p>For a 45-second Short, you need approximately 100–130 words. For 60 seconds, 140–180 words. Use short sentences. Break after every idea. Avoid filler words — AI TTS reads everything literally, so tight copy sounds professional while padded copy sounds slow. Scenith supports up to 2,000 characters per generation — enough for the full length of any Short voiceover.</p>
              <h3>The Multilingual Shorts Strategy</h3>
              <p>One of the most underrated growth tactics in 2026: create the exact same Short in 3–5 languages. YouTube treats each language as a separate audience segment. Generate the voiceover in Hindi, Spanish, and English from the same script — overlay on the same video — post three separate times. Three times the impressions from one video production session. Scenith's 20+ language support makes this viable in minutes.</p>
            </div>
          </section>

          {/* Pro Tips */}
          <section className="asg-section">
            <h2 className="asg-section-title" style={{ marginBottom: 24, fontFamily: 'var(--font-display)', letterSpacing: '-0.025em' }}>Pro Tips for Higher-Performing AI Shorts</h2>
            <div className="asg-tips-grid">
              {[
                { icon: "🔁", title: "Loop Short Clips", text: "A 5-second AI video looped 6x creates a 30-second visual for a 30-second narration. Reduces credit cost dramatically while maintaining high visual quality." },
                { icon: "🎨", title: "Match Visual to Voice Tone", text: "Calm voiceover = slow cinematic shot. High-energy voiceover = volcano eruption or city timelapse. Tonal alignment between audio and visual boosts watch time." },
                { icon: "📝", title: "Add Captions Always", text: "85% of social videos are watched without sound initially. On-screen captions via CapCut auto-subtitle retain these viewers long enough to turn on audio." },
                { icon: "🧪", title: "A/B Test Two Voice Styles", text: "Generate the same script with a male and female voice. Post both variations. Track which performs better in 24 hours and double down on that voice profile." },
                { icon: "🌅", title: "Use Image-to-Video for Continuity", text: "Generate your thumbnail in Scenith's Image Generator, then animate it as your Short's opening frame for visual continuity between thumbnail and content." },
                { icon: "📊", title: "Front-Load Your Best Line", text: "Put your most surprising sentence in the first 3 words. TTS has no performance nuance — the hook lives or dies entirely in your writing." },
                { icon: "🔊", title: "Grok Imagine for Sound Design", text: "When you want ambient audio — rain, wind, city noise, space hum — generate with Grok Imagine. Mix AI audio low under your voiceover for a fully produced feel." },
                { icon: "📅", title: "Batch-Generate Weekly Content", text: "Spend 45 minutes generating 7 AI videos and 7 voiceovers. Schedule uploads one per day. This is how faceless channel operators produce content without daily effort." },
              ].map((t) => (
                <div className="asg-tip-card" key={t.title}>
                  <span className="asg-tip-icon">{t.icon}</span>
                  <div>
                    <div className="asg-tip-title">{t.title}</div>
                    <div className="asg-tip-text">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="asg-divider" />

          {/* Model Breakdown */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Model Breakdown</span>
              <h2 className="asg-section-title">Which AI Video Model Should You Use for Shorts?</h2>
              <p className="asg-section-sub">Every model has different strengths. Pick the right engine for the kind of short you are making.</p>
            </div>
            <div className="asg-features-grid">
              {[
                { icon: "⚡", title: "Wan 2.5 — Budget Batching", text: "46 credits. Most cost-effective model. Excellent for general-purpose cinematic clips — landscapes, abstract motion, ambient visuals. Ideal for producing 5+ Shorts per week at managed credit spend." },
                { icon: "🎬", title: "Kling 2.5 Turbo — Speed + Quality Balance", text: "64 credits. Fast generation without full quality overhead. Smoother motion than Wan 2.5 with better prompt adherence. Great for high-volume creators who need solid output quickly." },
                { icon: "🏆", title: "Kling 2.6 Pro — Cinematic Standard", text: "64 credits. Noticeably more refined motion, better lighting, higher subject detail. The workhorse for creators who want AI Shorts that look professionally produced." },
                { icon: "🚀", title: "Veo 3.1 Fast — Google Speed Mode", text: "92 credits. Google's Veo 3.1 entry point. Significant quality step up from Kling — more cinematic feel, better complex prompt understanding, smoother camera movement simulation." },
                { icon: "💎", title: "Veo 3.1 — Maximum Quality", text: "186 credits. The highest quality model on the platform. For product launches, viral campaign openers, or hero content with advertising budget behind it. Output rivals light VFX production." },
                { icon: "🎵", title: "Grok Imagine — AI Audio Native", text: "47 credits. The only model that generates video with AI-created audio — context-appropriate sound design: waves, rain, traffic, wind. Perfect for ASMR and nature/documentary niches." },
              ].map((m) => (
                <div className="asg-feature-card" key={m.title}>
                  <span className="asg-feature-icon">{m.icon}</span>
                  <h3 className="asg-feature-title">{m.title}</h3>
                  <p className="asg-feature-text">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="asg-model-tags" style={{ marginTop: 28 }}>
              {["Wan 2.5","Kling 2.5 Turbo","Kling 2.6 Pro","Veo 3.1 Fast","Veo 3.1","Grok Imagine","Google TTS","OpenAI TTS","Azure Neural TTS"].map(m => (
                <span className="asg-model-tag" key={m}>{m}</span>
              ))}
            </div>
          </section>

          {/* Mid CTA 2 */}
          <div className="asg-mid-cta">
            <h2 className="asg-mid-cta-title">Start Creating AI Shorts Today</h2>
            <p className="asg-mid-cta-sub">All 6 video models. 40+ voices. One platform. 50 free credits — no card required.</p>
            <a href={CTA_URL} className="asg-mid-cta-btn">🎙️ Voice + Video — Try Free →</a>
          </div>

          <hr className="asg-divider" />

          {/* Comparison */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Why Scenith</span>
              <h2 className="asg-section-title">Scenith vs Using Separate Tools for Video + Voiceover</h2>
            </div>
            <div className="asg-compare-wrap">
              <div className="asg-compare-col asg-col-them">
                <h3>❌ Using Separate Tools</h3>
                <ul>
                  <li>Separate subscription for AI video ($20–50/mo)</li>
                  <li>Separate subscription for AI TTS ($15–30/mo)</li>
                  <li>Different login, dashboard, and UX for each</li>
                  <li>Credits and limits tracked separately per tool</li>
                  <li>No native workflow between video and voice</li>
                  <li>Watermarks on free tiers of most tools</li>
                  <li>$50–80/month total across a common tool stack</li>
                </ul>
              </div>
              <div className="asg-compare-col asg-col-us">
                <h3>✅ Scenith All-in-One</h3>
                <ul>
                  <li>AI video + voice + image under one login</li>
                  <li>Single credit balance for all 3 tools</li>
                  <li>Tab-switch workflow in one interface</li>
                  <li>Generate voice and video in the same session</li>
                  <li>"Make Video from Image" native one-click workflow</li>
                  <li>Zero watermarks even on the free tier</li>
                  <li>Plans from $9/month — 300 credits included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">Creator Stories</span>
              <h2 className="asg-section-title">What Creators Say About AI Shorts with Voiceover</h2>
            </div>
            <div className="asg-proof-grid">
              {[
                { emoji: "🎬", stars: "★★★★★", text: "I run a faceless space science channel and was spending $60/month on three different AI tools. Switched to Scenith and now I do everything from one tab. My Shorts volume went from 2/week to 7/week.", name: "Rahul M.", role: "Faceless YouTube Creator · 84K subscribers" },
                { emoji: "📣", stars: "★★★★★", text: "The Grok Imagine model with built-in audio is insane for Instagram Reels. I create product ambient videos and add an AI voiceover on top — full production in 4 minutes. My engagement tripled in 6 weeks.", name: "Priya T.", role: "D2C Brand Marketer" },
                { emoji: "🧑‍💼", stars: "★★★★★", text: "We use Scenith to repurpose client blog posts into LinkedIn video Shorts with professional AI voiceovers. What used to take a videographer a day now takes 20 minutes. The OpenAI TTS voice is incredibly natural.", name: "Arjun K.", role: "Content Agency Founder" },
                { emoji: "🎓", stars: "★★★★★", text: "I teach chemistry online and post 2 educational Shorts a day. The Hindi voice option on Scenith is genuinely better than most human voiceover artists I've hired. My students say the clarity is perfect.", name: "Deepa S.", role: "Online Educator · EdTech Creator" },
                { emoji: "🌍", stars: "★★★★★", text: "The multilingual approach is a real advantage. I generate the same video in English, Spanish, and Hindi in one session. Three uploads, three audience segments, 3x total reach per idea.", name: "Carlos V.", role: "Content Creator · 120K multi-platform" },
                { emoji: "🛍️", stars: "★★★★★", text: "For our Shopify store, we needed product Shorts daily but had no video budget. Scenith's image-to-video feature turns our product stills into cinematic clips with a voiceover from our brand script. Our Reels ROAS improved by 40%.", name: "Sneha A.", role: "Ecommerce Brand Owner" },
              ].map((p) => (
                <div className="asg-proof-card" key={p.name}>
                  <div className="asg-proof-stars">{p.stars}</div>
                  <p className="asg-proof-text">"{p.text}"</p>
                  <div className="asg-proof-author">
                    <div className="asg-proof-avatar">{p.emoji}</div>
                    <div>
                      <div className="asg-proof-name">{p.name}</div>
                      <div className="asg-proof-role">{p.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="asg-divider" />

          {/* FAQ */}
          <section className="asg-section">
            <div className="asg-section-header">
              <span className="asg-section-eyebrow">FAQ</span>
              <h2 className="asg-section-title">Frequently Asked Questions</h2>
            </div>
            <div className="asg-faq">
              {[
                { q: "What is an AI Shorts Generator with Voiceover?", a: "An AI Shorts Generator with Voiceover combines two AI capabilities: text-to-video generation (turning a written prompt into a short video clip) and text-to-speech synthesis (turning a script into a narrated voiceover). Together, these let you create a complete, narrated short-form video without a camera, microphone, actor, or editor. Scenith provides both capabilities in a single platform with one credit balance." },
                { q: "Is AI-generated video content allowed on YouTube, TikTok, and Instagram?", a: "Yes. As of 2026, all three platforms permit AI-generated video content provided it does not violate community guidelines (no deepfakes of real people, no misleading political content). YouTube requires disclosure labels for realistic AI-generated content in certain categories. AI-generated cinematic visuals, nature scenes, abstract motion, and product showcases are fully compliant on all three platforms." },
                { q: "Do I need any editing software to combine the AI video and voiceover?", a: "For basic combination, use CapCut — free on mobile and desktop. Drag the MP4 and MP3 onto a timeline, mute the video track, overlay the voiceover, and export. Total time under 3 minutes. For more control over timing and captions, DaVinci Resolve (free) is excellent." },
                { q: "Can I use AI-generated videos with voiceover on YouTube monetised channels?", a: "Yes. Scenith grants full commercial rights on all generated content. YouTube monetisation eligibility is based on view count, watch time, and community guidelines compliance — not whether the content is AI-generated. Many faceless AI-content channels are successfully monetised." },
                { q: "What is the best AI voice for YouTube Shorts narration?", a: "For English YouTube Shorts: Google TTS 'Journey' (documentary, cinematic feel), OpenAI TTS 'Onyx' or 'Nova' (extremely natural, conversational), and Azure Neural TTS 'Davis' (clear, broadcast-style). For non-English content, Azure Neural TTS has the widest range of high-quality multilingual voices." },
                { q: "How many AI Shorts can I generate for free?", a: "You receive 50 credits on signup at no cost, no credit card required. An AI video with Wan 2.5 costs 46 credits. A voiceover costs a fraction of that based on character count. Your first video + voiceover is effectively free. Paid plans start at $9/month for 300 credits — approximately 6–7 video generations with voiceovers per month." },
                { q: "Can I animate my own photos into a Short?", a: "Yes — Scenith's Image-to-Video feature lets you upload any image as the reference frame for your video. The AI animates the scene based on your text prompt while using your uploaded image as the visual starting point. Ideal for product showcases, character reveals, and portrait animations." },
                { q: "What aspect ratio should I use for Shorts, Reels, and TikTok?", a: "All three platforms use the 9:16 vertical aspect ratio. Select 9:16 in Scenith's video options before generating. Your output will be natively formatted for all three platforms without any cropping or reformatting required." },
                { q: "Can I create AI short videos in languages other than English?", a: "Yes. Scenith's AI voiceover supports 20+ languages via Google TTS — Hindi, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, Italian, Korean, and more. Azure Neural TTS adds additional multilingual options. The AI video visuals are language-agnostic and work with any narration language." },
                { q: "How long does it take to generate an AI short with voiceover?", a: "Voice generation: ~2–4 seconds. Video generation: 30–120 seconds depending on model, duration, and resolution. A full short video with narration can be ready in under 3 minutes on Scenith. You can generate both in the same session without leaving the platform." },
              ].map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <div>{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="asg-bottom-cta">
            <h2 className="asg-bottom-cta-title">
              Your First AI Short Is<br />
              <span style={{ background: 'linear-gradient(90deg, #ef4444, #f97316, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                3 Minutes Away
              </span>
            </h2>
            <p className="asg-bottom-cta-sub">
              50 free credits. 6 AI video models. 40+ voices. No card. No install. Just a prompt and a download button.
            </p>
            <a href={CTA_URL} className="asg-hero-cta">
              🎬 Generate Your AI Short Now
              <span className="asg-cta-arrow">→</span>
            </a>
            <p style={{ marginTop: 16, fontSize: 12, color: 'var(--asg-text-3)' }}>
              Trusted by creators in 40+ countries · Full commercial rights on all generated content
            </p>
          </div>

        </main>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--asg-border)', padding: '28px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--asg-text-3)' }}>
            © 2026{' '}<a href="https://scenith.in" style={{ color: 'var(--asg-text-2)', textDecoration: 'none' }}>Scenith</a>{' '}
            · AI Shorts Generator with Voiceover ·{' '}
            <a href="https://scenith.in/tools" style={{ color: 'var(--asg-text-3)', textDecoration: 'none' }}>All Tools</a>
          </p>
        </footer>

      </div>
    </>
  );
}