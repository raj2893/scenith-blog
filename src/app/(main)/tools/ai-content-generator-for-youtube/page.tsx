import type { Metadata } from "next";
import Link from "next/link";
import "./youtube-ai-tool.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Content Generator for YouTube — Free Voice, Image & Video Tool (2026)",
  description:
    "Generate YouTube voiceovers, thumbnails, and AI video clips in seconds. Free AI content generator built for YouTube creators — no editing skills needed. Powered by GPT, Veo, Kling & more.",
  keywords: [
    "ai content generator for youtube",
    "youtube ai voice generator",
    "youtube thumbnail ai generator",
    "ai video generator for youtube",
    "ai voiceover for youtube",
    "faceless youtube channel ai",
    "ai youtube script to video",
    "free ai content creator youtube",
    "best ai tools for youtubers 2026",
    "youtube automation ai",
    "ai generated youtube content",
    "text to speech youtube free",
    "ai thumbnail maker youtube",
    "youtube shorts ai generator",
  ],
  openGraph: {
    title: "AI Content Generator for YouTube — Free in 2026 | Scenith",
    description:
      "The #1 free AI content generator built for YouTubers. Create voiceovers, thumbnails, and short video clips from a single platform.",
    url: "https://scenith.in/tools/ai-content-generator-for-youtube",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generator for YouTube — Free in 2026 | Scenith",
    description:
      "Create YouTube voiceovers, AI thumbnails & video clips in seconds. Free, no card required.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-content-generator-for-youtube",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Content Generator for YouTube",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier with 50 credits, no credit card required",
  },
  url: "https://scenith.in/tools/ai-content-generator-for-youtube",
  description:
    "AI-powered voice, image, and video generator designed for YouTube creators.",
  featureList: [
    "AI Voiceover Generator",
    "AI Thumbnail Image Generator",
    "AI Video Clip Generator",
    "40+ voices in 20+ languages",
    "Text-to-video with Kling, Veo, Wan 2.5",
  ],
};

const TOOL_CTA_URL =
  "https://scenith.in/create-ai-content?utm_source=tools&utm_medium=landing&utm_campaign=youtube-ai-tool";

const VOICE_EXAMPLES = [
  { icon: "🎬", label: "YouTube Intro", script: "What's up everyone, welcome back! Today we're diving into something that'll completely change the way you create content forever…", useCase: "Channel Intro" },
  { icon: "📰", label: "News-Style Narration", script: "In a groundbreaking announcement today, researchers have revealed a discovery that could reshape the way we understand modern technology…", useCase: "Faceless News Channel" },
  { icon: "💪", label: "Motivational Shorts", script: "Nobody remembers the days you stayed comfortable. They remember the days you showed up when it was hard. Today is that day.", useCase: "Motivation / Mindset" },
  { icon: "🎓", label: "Educational Explainer", script: "In the next five minutes, you're going to understand exactly how compound interest works — and why starting today is the most important financial decision of your life.", useCase: "Finance / Education" },
  { icon: "🌍", label: "Documentary", script: "Deep within the Amazon basin, a tribe untouched by modern civilization has lived the same way for over eight thousand years. Until last Tuesday.", useCase: "Documentary Channel" },
  { icon: "🛍️", label: "Product Review", script: "After 30 days with this product, I have one thing to say: this is the best purchase I've made all year. Here's everything you need to know before you buy.", useCase: "Review / Unboxing" },
];

const THUMBNAIL_PRESETS = [
  { icon: "🔥", label: "Viral Click-bait", prompt: "Dramatic split-screen: left side shows a broke young man, right side shows a luxury penthouse. Bold red arrow pointing right. Cinematic lighting.", style: "Realistic" },
  { icon: "🧠", label: "Educational", prompt: "Glowing human brain made of neural network circuits, blue and white tones, dark background, 8K hyper-detailed, professional infographic style", style: "Digital Art" },
  { icon: "💰", label: "Finance / Money", prompt: "Gold coins raining down over a city skyline at night, neon green dollar signs glowing, cinematic wide shot, wealth visualization", style: "Realistic" },
  { icon: "🎮", label: "Gaming", prompt: "Epic gaming setup with 4 glowing monitors, purple RGB lights, high-end PC, dark room, professional gaming aesthetic, ultra-detailed", style: "3D Render" },
  { icon: "🌍", label: "Travel / Lifestyle", prompt: "Aerial view of a stunning infinity pool overlooking Santorini at golden hour, crystal blue water, white architecture, cinematic travel photography", style: "Realistic" },
  { icon: "🤖", label: "AI / Tech", prompt: "Humanoid robot with glowing eyes sitting at a laptop writing code, futuristic office, neon teal and purple lighting, ultra-detailed 4K", style: "Sci-Fi" },
];

const VIDEO_CLIP_USES = [
  { icon: "📱", title: "YouTube Shorts Intro", description: "Generate a punchy 5-second cinematic clip to hook viewers in the first frame before your main content begins." },
  { icon: "🎬", title: "B-Roll Footage", description: "Create AI-generated B-roll to complement your talking-head or voiceover content without filming or buying stock footage." },
  { icon: "🌄", title: "Cinematic Transitions", description: "Generate beautiful scene transitions — sunsets, city aerials, abstract motion — to add production value between sections." },
  { icon: "📣", title: "Channel Trailers", description: "Build a visually stunning channel trailer using AI video clips stitched together, without any camera or crew." },
  { icon: "🎵", title: "Music Visualization", description: "Create atmospheric video backdrops for music content — abstract flowing visuals, neon waves, and particle effects." },
  { icon: "🗺️", title: "Faceless Story Videos", description: "Produce full-length faceless story or explainer videos by pairing your AI voiceover with AI-generated video clips." },
];

const CHANNEL_TYPES = [
  { icon: "💰", name: "Finance & Investing" },
  { icon: "🏋️", name: "Health & Fitness" },
  { icon: "🧠", name: "Self Improvement" },
  { icon: "🌍", name: "True Crime & Mystery" },
  { icon: "📰", name: "News & Commentary" },
  { icon: "🚀", name: "Technology & AI" },
  { icon: "🎮", name: "Gaming Commentary" },
  { icon: "📚", name: "History & Documentary" },
  { icon: "🛍️", name: "Product Reviews" },
  { icon: "🍕", name: "Food & Cooking" },
  { icon: "✈️", name: "Travel & Adventure" },
  { icon: "💻", name: "Coding & Tutorials" },
];

const STEPS = [
  { num: "01", icon: "✍️", title: "Write Your Script or Prompt", description: "Type your video script, thumbnail description, or video concept in plain language. Use pre-built prompts for instant inspiration, or write your own. The more specific your description, the better the AI output.", tip: "Pro tip: Describe your thumbnail emotion first — 'shocked face, red background' outperforms vague prompts every time." },
  { num: "02", icon: "🤖", title: "Choose Your AI Model", description: "Select from 40+ voice profiles across Google, OpenAI, and Azure. Pick from 7 image models including GPT Image 1, Imagen 4, FLUX, and Grok Aurora. Choose video models like Kling 2.6 Pro or Veo 3.1 for cinematic clips.", tip: "Pro tip: For YouTube thumbnails, GPT Image 1 Medium at Premium quality gives the sharpest, most click-worthy results." },
  { num: "03", icon: "⚡", title: "Generate in Seconds", description: "Hit Generate. Your voiceover is ready in ~3 seconds. Thumbnails take 10–30 seconds. Video clips take 30–120 seconds. Everything runs server-side — no GPU needed on your device.", tip: "Pro tip: Generate 3–4 thumbnail variations with slightly different prompts and A/B test them using YouTube Studio's built-in testing." },
  { num: "04", icon: "📥", title: "Download & Publish", description: "Download your MP3 voiceover, PNG thumbnail, or MP4 video clip directly to your device. All files include full commercial rights — no attribution, no watermark, no restrictions.", tip: "Pro tip: Use the 'Make Video from this Image' button to instantly animate your thumbnail into a Short or a teaser clip." },
];

const FAQS = [
  { q: "Is this AI content generator free for YouTube creators?", a: "Yes. You get 50 free credits on signup — no credit card required. Free credits work across voice, image, and video generation. Paid plans start at $9/month and include 300 credits per month. One plan covers all three content types." },
  { q: "Can I use AI-generated YouTube content without copyright issues?", a: "Absolutely. All content generated on Scenith comes with full commercial rights. You own what you create. There are no watermarks, no attribution requirements, and no restrictions on monetization. You can use AI voiceovers, thumbnails, and video clips on monetized YouTube channels without any licensing concerns." },
  { q: "Which AI voice is best for YouTube narration?", a: "For faceless YouTube channels, we recommend Google WaveNet voices (English US Male - Neural2) for news and documentary styles, or OpenAI Shimmer/Onyx for a deeper authoritative tone. Azure Neural voices offer very human-like intonation for storytelling channels. You can preview every voice before generating." },
  { q: "Can I make YouTube thumbnails with AI on Scenith?", a: "Yes — the Image tab is perfect for thumbnail creation. GPT Image 1 Medium at Premium quality and Grok Aurora produce the most visually striking, click-worthy thumbnails. Use Realistic or Digital Art style presets, describe your emotion/concept, and generate multiple variations to test." },
  { q: "Does this work for YouTube Shorts too?", a: "Absolutely. For Shorts, use the 9:16 portrait aspect ratio in both the Image and Video generators. The AI video generator supports 9:16 natively with all models. AI voiceovers can be trimmed to any length in your video editor." },
  { q: "What's the best AI video model for YouTube?", a: "Kling 2.6 Pro and Veo 3.1 produce the highest cinematic quality for YouTube. Kling 2.5 Turbo is faster and great for Shorts. Wan 2.5 is the most cost-efficient for bulk content. Grok Imagine is unique because it generates AI audio alongside the video." },
  { q: "Can I automate a faceless YouTube channel with this tool?", a: "Yes. Scenith covers the three hardest parts of faceless YouTube automation: voiceover, thumbnails, and B-roll. Script → AI Voiceover (3s) → AI Thumbnail (20s) → B-roll clips (60s each). The entire non-editing process takes under 10 minutes per video." },
  { q: "How many YouTube videos can I create per month?", a: "The free plan includes 50 credits. Creator Lite ($9/mo) gives 300 credits/month — enough for multiple full content pipelines. Creator Pro gives 1,000 credits/month for high-volume channels." },
  { q: "Does the AI thumbnail generator support YouTube's 1280x720 resolution?", a: "Yes. Scenith generates images at 2K resolution by default. Select Landscape (16:9) aspect ratio which maps directly to YouTube's recommended thumbnail dimensions. PNG files download at high resolution, ready to upload directly to YouTube Studio." },
  { q: "Can I animate my AI thumbnail into a YouTube Short?", a: "Yes — this is one of Scenith's most powerful workflows. Generate your thumbnail as an AI image, then click 'Make Video from this Image' to animate it into a 5–10 second clip perfect for Shorts, channel trailers, or social media teasers." },
];

export default function YouTubeAIToolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="yt-page">

        {/* ══ HERO ══ */}
        <section className="yt-hero">
          <div className="yt-hero-badge">
            <span className="yt-badge-dot" />
            Free AI Tool for YouTube Creators · 2026
          </div>
          <h1 className="yt-hero-title">
            AI Content Generator<br />
            <span className="yt-gradient-text">Built for YouTube</span>
          </h1>
          <p className="yt-hero-sub">
            Create scroll-stopping thumbnails, natural-sounding voiceovers, and cinematic video clips — all from a single prompt. No editing software. No studio. No experience needed.
          </p>
          <div className="yt-stats-bar">
            {[["40+","AI Voices"],["7","Image Models"],["6","Video Models"],["Free","No Card Needed"]].map(([val, label], i, arr) => (
              <><div key={label} className="yt-stat"><strong>{val}</strong><span>{label}</span></div>{i < arr.length - 1 && <div className="yt-stat-divider"/>}</>
            ))}
          </div>
          <Link href={TOOL_CTA_URL} className="yt-cta-primary">
            <span className="yt-cta-icon">⚡</span>
            Start Generating Free — No Credit Card
            <span className="yt-cta-arrow">→</span>
          </Link>
          <p className="yt-cta-hint">50 free credits on signup · Voice + Image + Video</p>
          <div className="yt-preview-grid">
            {[["🎙️","AI Voiceover","Ready in ~3 seconds"],["🖼️","AI Thumbnail","2K resolution PNG"],["🎬","AI Video Clip","Up to 1080p MP4"]].map(([ico, title, sub]) => (
              <div key={title} className="yt-preview-card"><div className="yt-preview-icon">{ico}</div><div><strong>{title}</strong><span>{sub}</span></div></div>
            ))}
          </div>
        </section>

        {/* ══ WHAT IS THIS ══ */}
        <section className="yt-section">
          <div className="yt-section-inner">
            <div className="yt-section-label">What is this tool?</div>
            <h2 className="yt-section-title">The Only AI Content Tool You Need as a YouTuber in 2026</h2>
            <div className="yt-intro-grid">
              <div className="yt-intro-text">
                <p>Running a successful YouTube channel in 2026 requires more content, more consistency, and higher production quality than ever before. Most creators are stuck doing everything manually — recording voiceovers, paying designers for thumbnails, or spending hours in editing software creating B-roll clips.</p>
                <p>Scenith's <strong>AI Content Generator for YouTube</strong> solves all three. It's a single browser-based platform where you type a prompt and receive a professional-grade voiceover, thumbnail, or video clip in seconds. No software to install. No design skills needed. No recording equipment required.</p>
                <p>Whether you run a <strong>faceless YouTube automation channel</strong>, a personal brand, an educational channel, a gaming commentary page, or a Shorts-focused account — this tool handles the heaviest production work so you can focus on what actually matters: your ideas and your audience.</p>
              </div>
              <div className="yt-intro-highlights">
                {[
                  ["No more expensive voiceover artists", "Generate natural-sounding narration in 20+ languages instantly"],
                  ["No more thumbnail designers", "Create click-worthy thumbnails from text descriptions in 10–30 seconds"],
                  ["No more stock footage subscriptions", "Generate cinematic B-roll video clips from a single prompt"],
                  ["One platform. One login. One credit balance.", "No juggling 5 different AI tools and subscriptions"],
                ].map(([title, sub]) => (
                  <div key={title} className="yt-highlight-item">
                    <span className="yt-highlight-check">✓</span>
                    <div><strong>{title}</strong><p>{sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="yt-section yt-section--alt">
          <div className="yt-section-inner">
            <div className="yt-section-label">How it works</div>
            <h2 className="yt-section-title">From Idea to Upload-Ready Content in 4 Steps</h2>
            <p className="yt-section-sub">The fastest content pipeline for YouTube creators. No learning curve. No technical knowledge required.</p>
            <div className="yt-steps-grid">
              {STEPS.map((step) => (
                <div key={step.num} className="yt-step-card">
                  <div className="yt-step-top"><span className="yt-step-num">{step.num}</span><span className="yt-step-icon">{step.icon}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="yt-step-tip">{step.tip}</div>
                </div>
              ))}
            </div>
            <div className="yt-section-cta">
              <Link href={TOOL_CTA_URL} className="yt-cta-primary">⚡ Try It Free Now</Link>
            </div>
          </div>
        </section>

        {/* ══ VOICE ══ */}
        <section className="yt-section">
          <div className="yt-section-inner">
            <div className="yt-section-label">🎙️ Feature Deep Dive</div>
            <h2 className="yt-section-title">AI Voiceover Generator for YouTube</h2>
            <p className="yt-section-sub">Stop recording yourself. Stop paying $50/video to voiceover artists. Generate studio-quality narration in any voice, any language, any tone — in under 5 seconds.</p>
            <div className="yt-feature-layout">
              <div className="yt-feature-info">
                <h3>Why YouTube creators love AI voiceovers</h3>
                <p>The biggest barrier to growing a faceless YouTube channel isn't ideas — it's production. Recording your voice, editing mistakes, noise-cancelling audio, matching tone to the script — it's exhausting and expensive if outsourced.</p>
                <p>Scenith uses Google WaveNet, OpenAI TTS, and Azure Neural voices — the same technology powering the world's most advanced voice assistants. The result is narration that sounds like a real person read your script in a professional studio.</p>
                <div className="yt-voice-meta-grid">
                  {[["40+","Voice Profiles"],["20+","Languages"],["~3s","Generation Time"],["MP3","Direct Download"]].map(([v,l]) => (
                    <div key={l} className="yt-voice-meta-item"><strong>{v}</strong><span>{l}</span></div>
                  ))}
                </div>
                <h3 style={{marginTop:28}}>Best voices for each YouTube niche</h3>
                <ul className="yt-voice-niche-list">
                  <li><strong>News / Documentary</strong> — Deep male neural voice, 1.0x speed</li>
                  <li><strong>Motivation / Mindset</strong> — Energetic male voice, 1.1x speed</li>
                  <li><strong>ASMR / Relaxation</strong> — Soft female neural voice, 0.9x speed</li>
                  <li><strong>Education / Explainer</strong> — Clear neutral voice, 1.0x speed</li>
                  <li><strong>Storytelling / True Crime</strong> — Dramatic female voice, 0.95x speed</li>
                  <li><strong>Finance / Business</strong> — Authoritative male voice, 1.05x speed</li>
                </ul>
              </div>
              <div className="yt-voice-examples">
                <h3>Real script examples — copy & use</h3>
                <div className="yt-script-cards">
                  {VOICE_EXAMPLES.map((ex) => (
                    <div key={ex.label} className="yt-script-card">
                      <div className="yt-script-header"><span>{ex.icon} {ex.label}</span><span className="yt-script-use-tag">{ex.useCase}</span></div>
                      <p className="yt-script-text">"{ex.script}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="yt-section-cta">
              <Link href={`${TOOL_CTA_URL}&tab=voice`} className="yt-cta-secondary">🎙️ Generate Your YouTube Voiceover →</Link>
            </div>
          </div>
        </section>

        {/* ══ THUMBNAIL ══ */}
        <section className="yt-section yt-section--alt">
          <div className="yt-section-inner">
            <div className="yt-section-label">🖼️ Feature Deep Dive</div>
            <h2 className="yt-section-title">AI Thumbnail Generator for YouTube</h2>
            <p className="yt-section-sub">Your thumbnail is the single most important factor in your click-through rate. A 1% CTR improvement on 10,000 impressions is 100 extra views — from the same traffic.</p>
            <div className="yt-thumb-content">
              <div className="yt-thumb-why">
                <h3>Why thumbnails make or break your channel</h3>
                <p>YouTube's algorithm serves your video to a small test audience first. If your thumbnail + title combination gets a high enough CTR, YouTube pushes your video wider. If CTR is low, the video effectively dies — regardless of how good the content is.</p>
                <p>Most creators spend 30–60 minutes in Canva. With Scenith, describe what you want in plain English and get a high-resolution, professionally composed image in under 30 seconds. Generate 5 variations, pick the best — all in the time it used to take to open Photoshop.</p>
                <div className="yt-thumb-tips">
                  <h4>What makes a high-CTR YouTube thumbnail in 2026?</h4>
                  <div className="yt-tip-list">
                    {[
                      ["1","Extreme Emotion","Shock, curiosity, or excitement in the main visual drives more clicks than neutral imagery. Describe expressions explicitly in your prompt."],
                      ["2","Bold Contrast","Dark backgrounds with bright foreground subjects. High contrast thumbnails stand out in YouTube's dark-mode interface."],
                      ["3","Rule of Thirds Composition","Place the main subject off-center. AI models naturally apply this when you describe 'cinematic' or 'professional photography style'."],
                      ["4","Visual Curiosity Gap","The thumbnail should show something that implies a story — a tension, a result, a before-and-after. The viewer clicks to resolve the visual question."],
                    ].map(([n,title,desc]) => (
                      <div key={n} className="yt-tip-item">
                        <span className="yt-tip-num">{n}</span>
                        <div><strong>{title}</strong><p>{desc}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="yt-thumb-presets">
                <h3>Thumbnail prompt templates — by niche</h3>
                <div className="yt-thumb-preset-grid">
                  {THUMBNAIL_PRESETS.map((preset) => (
                    <div key={preset.label} className="yt-thumb-preset-card">
                      <div className="yt-thumb-preset-header"><span>{preset.icon} {preset.label}</span><span className="yt-style-tag">{preset.style}</span></div>
                      <p className="yt-thumb-prompt">"{preset.prompt}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="yt-model-comparison">
              <h3>Which AI Image Model Should You Use for Thumbnails?</h3>
              <div className="yt-model-table">
                <div className="yt-model-row yt-model-row--header"><span>Model</span><span>Best For</span><span>Speed</span><span>Credits</span></div>
                {[
                  { model: "GPT Image 1 Medium", best: "Realistic faces, dramatic scenes", speed: "15–25s", credits: "15–32cr", highlight: true },
                  { model: "Grok Aurora ⚡", best: "2K photorealism, stunning detail", speed: "20–30s", credits: "14cr", highlight: false },
                  { model: "Imagen 4 Standard", best: "High-detail, precise prompts", speed: "20–30s", credits: "15cr", highlight: false },
                  { model: "FLUX 1.1 Pro", best: "Cinematic photorealism", speed: "15–20s", credits: "15cr", highlight: false },
                  { model: "Stability AI Core", best: "Artistic / stylized looks", speed: "10–15s", credits: "15cr", highlight: false },
                  { model: "Imagen 4 Fast", best: "Quick iterations, budget", speed: "5–10s", credits: "10cr", highlight: false },
                ].map((row) => (
                  <div key={row.model} className={`yt-model-row${row.highlight ? " yt-model-row--highlight" : ""}`}>
                    <span>{row.model}{row.highlight && <span className="yt-recommended-tag">⭐ Best</span>}</span>
                    <span>{row.best}</span><span>{row.speed}</span><span>{row.credits}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="yt-section-cta">
              <Link href={`${TOOL_CTA_URL}&tab=image`} className="yt-cta-secondary">🖼️ Generate Your YouTube Thumbnail →</Link>
            </div>
          </div>
        </section>

        {/* ══ VIDEO ══ */}
        <section className="yt-section">
          <div className="yt-section-inner">
            <div className="yt-section-label">🎬 Feature Deep Dive</div>
            <h2 className="yt-section-title">AI Video Generator for YouTube Clips</h2>
            <p className="yt-section-sub">Generate cinematic video clips for B-roll, YouTube Shorts, channel trailers, and faceless story content — without a camera, drone, stock footage subscription, or video editor.</p>
            <div className="yt-video-feature-layout">
              <div className="yt-video-explainer">
                <h3>How YouTubers use AI video clips</h3>
                <p>In 2026, AI video generation has crossed the quality threshold that matters for YouTube. Models like Kling 2.6 Pro, Veo 3.1, and Wan 2.5 produce 5–10 second clips visually indistinguishable from professional stock footage — at a fraction of the cost and in a fraction of the time.</p>
                <p>The use cases for YouTube are broader than most creators realize. It's not just faceless automation — it's adding cinematic value to any video, building atmosphere in intros, and creating Shorts that don't require filming anything at all.</p>
              </div>
              <div className="yt-video-use-grid">
                {VIDEO_CLIP_USES.map((use) => (
                  <div key={use.title} className="yt-video-use-card">
                    <span className="yt-video-use-icon">{use.icon}</span>
                    <h4>{use.title}</h4>
                    <p>{use.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="yt-video-models-section">
              <h3>AI Video Models Available on Scenith</h3>
              <div className="yt-video-model-cards">
                {[
                  { name: "Kling 2.6 Pro", icon: "🎬", quality: "Highest quality", detail: "Best-in-class motion, cinematic rendering, 1080p output. Ideal for hero shots and premium content.", credits: "64cr / 5s" },
                  { name: "Veo 3.1 (Google)", icon: "🌐", quality: "Ultra cinematic", detail: "Google's flagship video model. Exceptional scene understanding and photorealism. Best for documentary and narrative styles.", credits: "186cr / 5s" },
                  { name: "Veo 3.1 Fast", icon: "⚡", quality: "Fast + cinematic", detail: "Same Veo quality at 2x the speed. Perfect for high-volume creators who can't sacrifice cinematic look.", credits: "92cr / 5s" },
                  { name: "Wan 2.5", icon: "🌊", quality: "Best value", detail: "Excellent motion quality at the most affordable credit cost. Great for Shorts, B-roll, and high-volume creators.", credits: "46cr / 5s" },
                  { name: "Kling 2.5 Turbo", icon: "⚡", quality: "Fast quality", detail: "High quality with faster generation. Great balance of speed and visual fidelity for regular publishing schedules.", credits: "64cr / 5s" },
                  { name: "Grok Imagine 🎵", icon: "🎵", quality: "Audio included", detail: "The only model that generates AI audio alongside the video. Perfect for atmospheric content and ambient videos.", credits: "47cr / 5s" },
                ].map((model) => (
                  <div key={model.name} className="yt-video-model-card">
                    <div className="yt-video-model-header">
                      <span className="yt-video-model-icon">{model.icon}</span>
                      <div><strong>{model.name}</strong><span className="yt-video-model-quality">{model.quality}</span></div>
                      <span className="yt-video-model-credits">{model.credits}</span>
                    </div>
                    <p>{model.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="yt-img2vid-callout">
              <div className="yt-img2vid-inner">
                <div className="yt-img2vid-icon">✨</div>
                <div>
                  <h3>Pro Workflow: Generate Thumbnail → Animate into a Short</h3>
                  <p>Generate a stunning AI thumbnail using the Image tab. Then click <strong>"Make Video from this Image"</strong> to animate it into a 5–10 second clip for YouTube Shorts. The video maintains the same visual identity as your thumbnail — making your content look cohesive and professionally produced. This replaces what used to require two separate tools and 30+ minutes of work.</p>
                </div>
              </div>
            </div>
            <div className="yt-section-cta">
              <Link href={`${TOOL_CTA_URL}&tab=video`} className="yt-cta-secondary">🎬 Generate Your YouTube Video Clip →</Link>
            </div>
          </div>
        </section>

        {/* ══ CHANNEL TYPES ══ */}
        <section className="yt-section yt-section--alt">
          <div className="yt-section-inner">
            <div className="yt-section-label">Who is this for?</div>
            <h2 className="yt-section-title">Works for Every Type of YouTube Channel</h2>
            <p className="yt-section-sub">Whether you have 100 subscribers or 1 million, whether you're just starting or scaling a faceless automation channel — Scenith adapts to your content workflow.</p>
            <div className="yt-channel-grid">
              {CHANNEL_TYPES.map((ch) => (
                <div key={ch.name} className="yt-channel-chip"><span>{ch.icon}</span><span>{ch.name}</span></div>
              ))}
            </div>
            <div className="yt-channel-detail-grid">
              <div className="yt-channel-detail-card">
                <h3>🤖 Faceless YouTube Automation Channels</h3>
                <p>Faceless channels are the fastest-growing YouTube category in 2026. They require zero camera time, zero personal branding exposure, and can cover any topic. But they do require consistent voiceovers, consistent thumbnails, and consistent B-roll. Scenith automates all three in one platform.</p>
                <p>Typical workflow: Script → Generate AI Voiceover (3s) → Generate AI Thumbnail (20s) → Generate 2–3 B-roll clips (60s each) → Assemble in CapCut or Premiere → Upload. The entire non-editing process takes under 10 minutes.</p>
              </div>
              <div className="yt-channel-detail-card">
                <h3>🎙️ Personal Brand & Commentary Channels</h3>
                <p>Even if you film yourself, you still need thumbnails, B-roll inserts, and sometimes a translated voiceover to reach global audiences. Scenith's multilingual voice generation lets you create the same video in Spanish, French, Hindi, or Mandarin without hiring a translator or re-recording.</p>
                <p>Generate AI thumbnails for A/B testing without 45 minutes in Canva. Use AI video clips as filler or scene-setters. Production quality goes up; production time goes down.</p>
              </div>
              <div className="yt-channel-detail-card">
                <h3>📱 YouTube Shorts Creators</h3>
                <p>Shorts live and die by the first frame. With Scenith, generate a visually striking 9:16 AI video clip as your opening shot, add a voiceover to any section, and create a thumbnail that works as a preview frame. The entire Short can be AI-assisted from concept to final cut.</p>
                <p>Use the 9:16 portrait mode in both Image and Video generators. Pair with Kling 2.5 Turbo for fast generation that meets the high publishing frequency the Shorts algorithm rewards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ COMPARISON ══ */}
        <section className="yt-section">
          <div className="yt-section-inner">
            <div className="yt-section-label">Scenith vs Alternatives</div>
            <h2 className="yt-section-title">Why Not Use Separate AI Tools?</h2>
            <p className="yt-section-sub">The real cost of using ElevenLabs + Midjourney + Runway isn't just money — it's the time tax of context switching, learning 3 different UIs, and managing 3 separate credit systems.</p>
            <div className="yt-compare-layout">
              <div className="yt-compare-col yt-compare-col--bad">
                <h3>❌ Using Separate Tools</h3>
                <ul>
                  <li>ElevenLabs for voice (~$22/mo)</li>
                  <li>Midjourney for images (~$10/mo)</li>
                  <li>Runway or Kling for video (~$15/mo)</li>
                  <li>3 different login sessions</li>
                  <li>3 separate credit/subscription systems</li>
                  <li>Files scattered across platforms</li>
                  <li>No unified workflow or history</li>
                  <li><strong>Total: $47+/month</strong></li>
                </ul>
              </div>
              <div className="yt-compare-col yt-compare-col--good">
                <h3>✅ Scenith — All-in-One</h3>
                <ul>
                  <li>AI Voice: Google, OpenAI, Azure ✓</li>
                  <li>AI Image: 7 models incl. GPT Image 1 ✓</li>
                  <li>AI Video: Kling, Veo, Wan 2.5, Grok ✓</li>
                  <li>One login, one dashboard</li>
                  <li>One credit balance across all 3 modes</li>
                  <li>History tab with all past generations</li>
                  <li>One clean interface — learn once</li>
                  <li><strong>From $9/month · Free tier available</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MAIN CTA SECTION ══ */}
        <section className="yt-cta-section">
          <div className="yt-cta-inner">
            <div className="yt-cta-badge">Free · No Credit Card · Instant Access</div>
            <h2 className="yt-cta-title">
              Ready to Create Your First<br />
              <span className="yt-gradient-text">AI YouTube Content?</span>
            </h2>
            <p className="yt-cta-description">
              Join thousands of YouTube creators using Scenith to generate voiceovers, thumbnails, and video clips in seconds. 50 free credits waiting — no credit card, no commitment.
            </p>
            <Link href={TOOL_CTA_URL} className="yt-cta-primary yt-cta-primary--large">
              <span className="yt-cta-icon">🚀</span>
              Open AI Content Generator — Free
              <span className="yt-cta-arrow">→</span>
            </Link>
            <div className="yt-cta-features-row">
              <span>🎙️ Voice in 3s</span>
              <span>🖼️ Thumbnail in 20s</span>
              <span>🎬 Video in 60s</span>
              <span>📥 Download MP3, PNG, MP4</span>
              <span>✅ Commercial rights included</span>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="yt-section yt-section--alt">
          <div className="yt-section-inner">
            <div className="yt-section-label">FAQ</div>
            <h2 className="yt-section-title">Frequently Asked Questions</h2>
            <div className="yt-faq-grid">
              {FAQS.map((faq) => (
                <details key={faq.q} className="yt-faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        <section className="yt-section">
          <div className="yt-section-inner yt-final-section">
            <h2 className="yt-section-title">Stop Letting Production Hold Your Channel Back</h2>
            <p style={{color:"var(--yt-text-2)",fontSize:"1.05rem",maxWidth:560,margin:"0 auto 32px",lineHeight:1.7,textAlign:"center"}}>
              Every day you spend in Canva or recording a 10th voiceover take is a day you're not publishing. Your competitors are already using AI. The question is whether you'll start today.
            </p>
            <Link href={TOOL_CTA_URL} className="yt-cta-primary yt-cta-primary--large">
              ⚡ Start for Free — 50 Credits Included
            </Link>
            <p className="yt-cta-hint" style={{marginTop:14}}>No credit card · Works on any device · Instant access</p>
          </div>
        </section>

      </div>
    </>
  );
}