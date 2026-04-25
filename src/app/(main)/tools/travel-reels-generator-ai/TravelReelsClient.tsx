"use client";

import React, { useState, useEffect, useRef } from "react";
import "./travel-reels.css";

// ─── Static data ─────────────────────────────────────────────────────────────

const DESTINATIONS = [
  { emoji: "🏔️", name: "Himalayas at Dawn", prompt: "Slow aerial pull-back from a snow-capped Himalayan peak at golden hour, clouds parting below the summit, prayer flags in the foreground, cinematic 4K" },
  { emoji: "🌊", name: "Bali Wave Break", prompt: "Slow-motion barrel wave in Bali at sunset, glowing orange water, surfer silhouette inside the tube, ultra-cinematic" },
  { emoji: "🏛️", name: "Santorini Cliff Walk", prompt: "Dolly shot along whitewashed Santorini cliffside at blue hour, bougainvillea in foreground, caldera glowing below, cinematic wide angle" },
  { emoji: "🌅", name: "Sahara Sunrise", prompt: "Timelapse of sun rising over endless Sahara sand dunes, shadows dramatically shifting across ridges, warm gold and rust tones, epic wide shot" },
  { emoji: "🌿", name: "Amazon Rainforest", prompt: "Slow drone push through ancient Amazon rainforest canopy at mist-covered dawn, macaws taking flight, shafts of green light, National Geographic style" },
  { emoji: "🗼", name: "Paris at Night", prompt: "Cinematic zoom from Eiffel Tower sparkling at midnight, lights reflecting on the Seine, boulevard traffic streaming below, romantic golden haze" },
  { emoji: "🏜️", name: "Utah Canyon Lands", prompt: "Drone arc over vast Utah canyon formations at sunset, orange and crimson striations in the rock, shadow creeping across the valley floor, 4K cinematic" },
  { emoji: "🌸", name: "Kyoto Temple Path", prompt: "Slow motion walk down a cherry-blossom tunnel in Kyoto, petals drifting in slow motion, stone lanterns lining the path, warm spring light" },
  { emoji: "🐋", name: "Norwegian Fjord", prompt: "Dramatic aerial glide along a Norwegian fjord in autumn, waterfalls cascading hundreds of meters, reflections perfect on the still water, cinematic" },
  { emoji: "🌋", name: "Iceland Volcano", prompt: "Nighttime drone over active Icelandic volcanic lava field, glowing orange rivers flowing across dark basalt, steam venting, Northern Lights above" },
  { emoji: "🐘", name: "African Savanna", prompt: "Cinematic tracking shot of elephant herd crossing the Serengeti at golden hour, dust rising around their feet, acacia trees silhouetted" },
  { emoji: "🏝️", name: "Maldives Aerial", prompt: "Drone flying low over turquoise Maldives lagoon at dawn, overwater bungalows, sandbanks, gradient water from white to deep blue, peaceful" },
];

const REEL_STYLES = [
  { id: "cinematic", label: "🎬 Cinematic", desc: "Film-grade color, wide angles" },
  { id: "aerial", label: "🚁 Aerial Drone", desc: "Bird's eye, sweeping shots" },
  { id: "slowmo", label: "🌊 Slow Motion", desc: "Every detail, time stretched" },
  { id: "timelapse", label: "⏩ Timelapse", desc: "Hours compressed to seconds" },
  { id: "golden", label: "✨ Golden Hour", desc: "Warm, glowing, magical" },
  { id: "night", label: "🌙 Night & Lights", desc: "Neon, stars, city glow" },
];

const PLATFORM_FORMATS = [
  { id: "reels", label: "📱 Instagram Reels", ratio: "9:16", platform: "Instagram" },
  { id: "shorts", label: "▶️ YouTube Shorts", ratio: "9:16", platform: "YouTube" },
  { id: "tiktok", label: "🎵 TikTok", ratio: "9:16", platform: "TikTok" },
  { id: "youtube", label: "🖥️ YouTube/Desktop", ratio: "16:9", platform: "YouTube" },
];

const STATS = [
  { number: "6x", label: "More engagement than static travel photos on Instagram" },
  { number: "2.7B", label: "Travel content views on TikTok every month in 2026" },
  { number: "83%", label: "Of travelers say video content inspired their last trip decision" },
  { number: "30s", label: "Average time to generate a cinematic travel reel with AI" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "✍️",
    title: "Describe Your Scene",
    desc: "Type a destination, time of day, and atmosphere. Be specific — 'Santorini cliffside at blue hour with bougainvillea foreground' will beat 'Greece village'. Use our prompt chips to get started instantly.",
  },
  {
    step: "02",
    icon: "⚙️",
    title: "Choose Your AI Model",
    desc: "Pick from Kling 2.6 Pro, Veo 3.1 by Google, Wan 2.5, or Grok Imagine. Each model has a unique visual style — Kling excels at motion realism, Veo at cinematic colour grading, Grok at atmospheric detail.",
  },
  {
    step: "03",
    icon: "📐",
    title: "Set Format & Duration",
    desc: "Select 9:16 for Instagram Reels, TikTok, or YouTube Shorts. Choose 16:9 for landscape YouTube content. Pick 5-second or 10-second clips. Enable AI audio for ambient soundscapes.",
  },
  {
    step: "04",
    icon: "🎬",
    title: "Generate & Download",
    desc: "Click Generate. The AI renders your travel reel in 30–120 seconds. Download the MP4 directly. Post to your platform of choice — no watermarks, full commercial use included on paid plans.",
  },
];

const CREATOR_TYPES = [
  {
    emoji: "📸",
    title: "Travel Influencers",
    desc: "Post consistent content even when you're between trips. Fill your content calendar with AI-generated destination Reels while planning your next adventure.",
    useCase: "\"I generate 5–6 AI travel reels a week to stay consistent between trips. My engagement never drops now.\"",
  },
  {
    emoji: "✈️",
    title: "Travel Bloggers",
    desc: "Turn your written blog posts into short-form video content automatically. Repurpose destination guides into viral Reels that drive traffic back to your site.",
    useCase: "\"I write a blog post, paste the intro into the AI reel generator, and have a YouTube Short ready in 2 minutes.\"",
  },
  {
    emoji: "🏨",
    title: "Tourism & Hospitality",
    desc: "Hotels, resorts, tour operators, and destination marketing organizations can create promotional travel videos without expensive video production budgets.",
    useCase: "\"We replaced our $4,000/month video agency spend with Scenith. Our Instagram grew 340% in 3 months.\"",
  },
  {
    emoji: "🧳",
    title: "Travel Agencies",
    desc: "Create destination preview videos for clients, social media campaigns, and booking platform listings. Visual content increases booking conversion rates by 80%+.",
    useCase: "\"We send AI travel reels with every quote we send a client. Our conversion rate doubled.\"",
  },
  {
    emoji: "🎒",
    title: "Solo & Budget Travelers",
    desc: "No expensive camera gear, no gimbal, no editing software. Turn your travel memories into cinematic content from your phone — or create aspirational content before you even book the trip.",
    useCase: "\"I generate the reel first, then it inspires me to actually book the trip. AI travel content is my vision board.\"",
  },
  {
    emoji: "🗺️",
    title: "Geography & Education",
    desc: "Teachers, geography educators, and travel writers use AI travel reels to illustrate destinations, landscapes, and cultural settings without licensing expensive stock footage.",
    useCase: "\"My students are 10x more engaged with AI-generated destination videos than textbook images.\"",
  },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    badgeClass: "gold",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    strengths: ["Ultra-realistic camera motion", "AI audio soundscapes", "1080p HD output"],
    bestFor: "Premium travel content, brand videos, destination campaigns",
    credits: "130cr/5s",
  },
  {
    name: "Veo 3.1 by Google",
    badge: "⚡ Cinematic Grade",
    badgeClass: "blue",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    strengths: ["Hollywood-grade color science", "Atmospheric lighting", "AI audio + ambient sound"],
    bestFor: "Landscape reels, golden-hour content, premium cinematic output",
    credits: "186cr/5s",
  },
  {
    name: "Wan 2.5",
    badge: "💰 Best Value",
    badgeClass: "green",
    logo: "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
    strengths: ["Fastest generation (~30s)", "Up to 1080p", "Great for high-volume creators"],
    bestFor: "Daily content creators, social media teams, budget-conscious creators",
    credits: "46cr/5s",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 Audio Included",
    badgeClass: "purple",
    logo: "https://cdn.scenith.in/brand-logos/Grok.png",
    strengths: ["AI audio always included", "Atmospheric soundscapes", "Unique visual style"],
    bestFor: "Immersive destination reels, nature content, audio-first creators",
    credits: "47cr/5s",
  },
];

const TIPS = [
  {
    icon: "🌅",
    title: "Always specify time of day",
    tip: "\"At golden hour\", \"at blue hour\", \"at 2AM\" dramatically changes the mood. Time of day is the single most powerful variable in your travel reel prompt.",
  },
  {
    icon: "📷",
    title: "Name a camera shot type",
    tip: "\"Slow aerial pullback\", \"dolly shot\", \"tracking shot\", \"handheld\", \"gimbal push-in\" — camera movement keywords dramatically improve cinematic quality.",
  },
  {
    icon: "🌫️",
    title: "Add atmospheric elements",
    tip: "\"Mist rolling through\", \"dust rising\", \"fog on the water\", \"steam venting\", \"petals falling\" — atmospheric motion gives AI video models something to animate.",
  },
  {
    icon: "🎨",
    title: "Reference a visual style",
    tip: "\"National Geographic style\", \"BBC Planet Earth cinematography\", \"Terrence Malick film aesthetic\", \"GoPro adventure\" — style references calibrate the AI's visual output.",
  },
  {
    icon: "📐",
    title: "Use 9:16 for maximum reach",
    tip: "Vertical video (9:16) gets 3x more reach than landscape on Instagram and TikTok in 2026. Always generate in portrait format first, then repurpose landscape as a secondary export.",
  },
  {
    icon: "🔁",
    title: "Generate 3 variations, post the best",
    tip: "The best travel content creators generate 3–5 variations of each reel and post only the top performer. AI generation is cheap — your curation is the differentiator.",
  },
];

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=travel-reels-tool&utm_medium=tool-page&utm_campaign=travel-reel-generator";

// ─── Ticker component ─────────────────────────────────────────────────────────

function PromptTicker() {
  const prompts = [
    "Aerial view of Maldives at sunrise with bioluminescent waves...",
    "Cherry blossoms falling in slow motion in Kyoto...",
    "Timelapse of Northern Lights over Iceland glaciers...",
    "Drone pull-back from Machu Picchu at golden hour...",
    "Elephant herd crossing Serengeti at dust sunset...",
    "Santorini blue domes glowing at blue hour...",
    "Venice canals reflecting lamp lights at midnight...",
    "Banff lake reflection of snow-capped peaks at dawn...",
  ];
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % prompts.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tr-ticker">
      <span className="tr-ticker-label">AI is generating:</span>
      <span className={`tr-ticker-text ${visible ? "visible" : ""}`}>
        {prompts[idx]}
      </span>
    </div>
  );
}

// ─── Video Card (demo placeholder) ───────────────────────────────────────────

function VideoCard({ emoji, name, style }: { emoji: string; name: string; style: string }) {
  return (
    <div className="tr-demo-card">
      <div className="tr-demo-visual">
        <span className="tr-demo-emoji">{emoji}</span>
        <div className="tr-demo-shimmer" />
      </div>
      <div className="tr-demo-info">
        <span className="tr-demo-name">{name}</span>
        <span className="tr-demo-style">{style}</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TravelReelsClient() {
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [selectedFormat, setSelectedFormat] = useState("reels");
  const [activeModel, setActiveModel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "Can I generate travel reels with AI completely for free?",
      a: "Yes — Scenith gives every new account 50 free credits with no credit card required. A 5-second travel reel with Wan 2.5 costs 46 credits, and with Grok Imagine costs 47 credits — meaning you can generate at least one free travel reel on signup. Paid plans start at just $1/month and give you 100 credits, enough for 2–3 cinematic travel videos.",
    },
    {
      q: "What is the best AI model for travel reels in 2026?",
      a: "It depends on your priority. For maximum cinematic quality, Kling 2.6 Pro is the best AI video model for travel reels — it produces ultra-realistic camera motion and includes AI audio. For landscape and golden-hour content, Veo 3.1 by Google offers the best color science. For high-volume creators who need fast, affordable generation, Wan 2.5 at 480p–1080p is the best value. Grok Imagine by xAI is unique in that it always includes immersive AI audio soundscapes.",
    },
    {
      q: "Can I animate my travel photos into AI videos?",
      a: "Yes. The Image-to-Video feature on Scenith's AI Content Creator accepts JPG or PNG travel photos and animates them using AI. Upload a shot of a waterfall, a beach sunset, or a mountain vista, add a motion prompt like 'slow parallax push-in with mist rolling through the trees', and the AI generates a 5–10 second video clip. Supported models include Kling 2.6 Pro and Wan 2.5.",
    },
    {
      q: "What resolution are AI travel reels generated in?",
      a: "Wan 2.5 supports 480p, 720p, and 1080p. Kling 2.5 Turbo and Kling 2.6 Pro generate at up to 1080p. Veo 3.1 and Veo 3.1 Fast generate at cinematic 1080p. Grok Imagine generates at 480p and 720p. All videos are delivered as MP4 files with no watermark.",
    },
    {
      q: "Are AI-generated travel videos allowed on Instagram, TikTok, and YouTube?",
      a: "Yes. AI-generated video content is permitted on Instagram Reels, YouTube Shorts, and TikTok as of 2025 and 2026, provided you disclose AI-generated content where platforms require it (Instagram and YouTube have built-in AI content labels). Scenith includes full commercial rights with all paid plans.",
    },
    {
      q: "How do I write a good prompt for a travel reel?",
      a: "The best travel reel prompts include: (1) a specific location, (2) a time of day or lighting condition, (3) a camera movement type like 'aerial pullback' or 'slow dolly push', and (4) an atmospheric element like mist, dust, or falling petals. Example: 'Slow aerial pull-back from Santorini's blue-domed church at blue hour, bougainvillea in the foreground, caldera glowing below, cinematic wide-angle, 4K'. The more specific your prompt, the better the AI output.",
    },
    {
      q: "Do I need a camera or editing software to create travel reels with AI?",
      a: "No — that is the entire point. Scenith's AI travel reel generator creates fully cinematic video content from nothing but a text description. You do not need a camera, a drone, a gimbal, Adobe Premiere, or any editing skills. Everything from shooting to colour grading to rendering is handled by the AI. You only need a browser.",
    },
    {
      q: "Can travel agencies and tourism boards use AI-generated travel videos commercially?",
      a: "Yes. Scenith's Creator Lite and Pro plans include full commercial rights. Travel agencies, destination marketing organizations (DMOs), tourism boards, hospitality brands, and travel agencies can use AI-generated travel videos for social media campaigns, booking platforms, client presentations, and paid advertisements.",
    },
    {
      q: "How do AI travel reels compare to stock travel footage?",
      a: "AI travel reels from Scenith are uniquely generated for your prompt — they are never the same twice and are not licensed to other users like stock footage. Stock footage from Shutterstock or Getty requires expensive subscriptions ($50–$300/month), delivers generic shots that competitors may already be using, and doesn't match your exact creative brief. AI-generated travel reels are prompt-specific, unique, and cost a fraction of stock.",
    },
    {
      q: "Is there a limit on how many travel reels I can generate?",
      a: "On the free plan, you start with 50 credits. On paid plans, credits reset monthly. Creator Lite ($9/month) includes 300 credits — enough for approximately 6–7 cinematic Kling 2.6 Pro reels per month, or 15–20 Wan 2.5 reels. There are no hard limits beyond your credit balance; you can purchase additional credits as needed.",
    },
  ];

  return (
    <div className="tr-page">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="tr-hero" ref={heroRef}>
        <div className="tr-hero-bg">
          <div className="tr-orb tr-orb-1" />
          <div className="tr-orb tr-orb-2" />
          <div className="tr-orb tr-orb-3" />
          <div className="tr-grid-overlay" />
        </div>
        <div className="tr-hero-inner">
          <div className="tr-badge">
            <span className="tr-badge-dot" />
            <span>AI Travel Reel Generator · 2026</span>
          </div>
          <h1 className="tr-h1">
            Turn Any Destination Into a
            <br />
            <span className="tr-h1-accent">Cinematic Travel Reel</span>
            <br />
            in 30 Seconds
          </h1>
          <p className="tr-hero-sub">
            No camera. No drone. No editing software. Type a destination — watch AI generate
            your viral travel reel for Instagram, TikTok, YouTube Shorts and more.
            Powered by Kling 2.6, Veo 3.1, Wan 2.5 & Grok Imagine.
          </p>

          <PromptTicker />

          <a href={CTA_URL} className="tr-cta-primary">
            <span className="tr-cta-icon">🎬</span>
            Generate My Travel Reel Free
            <span className="tr-cta-arrow">→</span>
          </a>
          <p className="tr-cta-subtext">50 free credits on signup · No card required · MP4 download</p>

          {/* Format selector */}
          <div className="tr-format-strip">
            {PLATFORM_FORMATS.map((f) => (
              <button
                key={f.id}
                className={`tr-format-btn ${selectedFormat === f.id ? "active" : ""}`}
                onClick={() => setSelectedFormat(f.id)}
              >
                {f.label}
                <span className="tr-format-ratio">{f.ratio}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="tr-stats">
        <div className="tr-container">
          <div className="tr-stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="tr-stat-card">
                <span className="tr-stat-num">{s.number}</span>
                <span className="tr-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prompt Explorer / Destination Chips ─────────────────── */}
      <section className="tr-prompts-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">
              Explore Any Destination with AI
            </h2>
            <p className="tr-section-sub">
              Click any destination to see the exact prompt — then use it on the generator to create your reel.
            </p>
          </div>
          <div className="tr-dest-grid">
            {DESTINATIONS.map((d, i) => (
              <div key={i} className="tr-dest-card">
                <div className="tr-dest-emoji">{d.emoji}</div>
                <div className="tr-dest-name">{d.name}</div>
                <div className="tr-dest-prompt">{d.prompt}</div>
                <a
                  href={`${CTA_URL}&prompt=${encodeURIComponent(d.prompt)}`}
                  className="tr-dest-btn"
                >
                  Generate This Reel →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────── */}
      <section className="tr-how">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">How to Create a Travel Reel with AI</h2>
            <p className="tr-section-sub">
              From blank page to cinematic MP4 — in four steps and under 2 minutes.
            </p>
          </div>
          <div className="tr-steps">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={i} className="tr-step">
                <div className="tr-step-num">{s.step}</div>
                <div className="tr-step-icon">{s.icon}</div>
                <h3 className="tr-step-title">{s.title}</h3>
                <p className="tr-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="tr-how-cta">
            <a href={CTA_URL} className="tr-cta-primary">
              Start Generating Travel Reels →
            </a>
          </div>
        </div>
      </section>

      {/* ── Reel Styles ─────────────────────────────────────────── */}
      <section className="tr-styles-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">6 Visual Styles for Every Travel Mood</h2>
            <p className="tr-section-sub">
              Not every destination calls for the same visual language. AI can match any aesthetic you're going for.
            </p>
          </div>
          <div className="tr-styles-grid">
            {REEL_STYLES.map((s) => (
              <button
                key={s.id}
                className={`tr-style-card ${selectedStyle === s.id ? "active" : ""}`}
                onClick={() => setSelectedStyle(s.id)}
              >
                <span className="tr-style-label">{s.label}</span>
                <span className="tr-style-desc">{s.desc}</span>
                {selectedStyle === s.id && (
                  <span className="tr-style-check">✓ Selected</span>
                )}
              </button>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href={`${CTA_URL}&style=${selectedStyle}`}
              className="tr-cta-primary"
            >
              Generate a {REEL_STYLES.find((s) => s.id === selectedStyle)?.label} Travel Reel →
            </a>
          </div>
        </div>
      </section>

      {/* ── AI Models ───────────────────────────────────────────── */}
      <section className="tr-models-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">4 Best AI Video Models for Travel Reels</h2>
            <p className="tr-section-sub">
              Each model has a distinct visual character. Choose by quality level, speed, or budget.
            </p>
          </div>
          <div className="tr-models-tabs">
            {MODELS.map((m, i) => (
              <button
                key={i}
                className={`tr-model-tab ${activeModel === i ? "active" : ""}`}
                onClick={() => setActiveModel(i)}
              >
                <img src={m.logo} alt={m.name} className="tr-model-tab-logo" />
                {m.name}
              </button>
            ))}
          </div>
          <div className="tr-model-panel">
            <div className="tr-model-panel-left">
              <span className={`tr-model-badge tr-badge-${MODELS[activeModel].badgeClass}`}>
                {MODELS[activeModel].badge}
              </span>
              <h3 className="tr-model-name">{MODELS[activeModel].name}</h3>
              <div className="tr-model-credits">{MODELS[activeModel].credits}</div>
              <div className="tr-model-strengths">
                {MODELS[activeModel].strengths.map((s, i) => (
                  <div key={i} className="tr-strength">
                    <span className="tr-strength-check">✓</span>
                    {s}
                  </div>
                ))}
              </div>
              <div className="tr-model-bestfor">
                <strong>Best for:</strong> {MODELS[activeModel].bestFor}
              </div>
            </div>
            <div className="tr-model-panel-right">
              <div className="tr-model-visual">
                <div className="tr-model-visual-inner">
                  <img src={MODELS[activeModel].logo} alt={MODELS[activeModel].name} className="tr-model-big-logo" />
                  <div className="tr-model-visual-label">{MODELS[activeModel].name}</div>
                  <div className="tr-model-visual-badge">{MODELS[activeModel].badge}</div>
                </div>
              </div>
              <a href={CTA_URL} className="tr-cta-primary" style={{ marginTop: 20 }}>
                Generate with {MODELS[activeModel].name} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ────────────────────────────────────────── */}
      <section className="tr-creators-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">Who Is AI Travel Reel Generation For?</h2>
            <p className="tr-section-sub">
              From solo backpackers to global tourism brands — anyone who creates travel content benefits from AI video generation.
            </p>
          </div>
          <div className="tr-creators-grid">
            {CREATOR_TYPES.map((c, i) => (
              <div key={i} className="tr-creator-card">
                <div className="tr-creator-emoji">{c.emoji}</div>
                <h3 className="tr-creator-title">{c.title}</h3>
                <p className="tr-creator-desc">{c.desc}</p>
                <blockquote className="tr-creator-quote">{c.useCase}</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prompt Writing Tips ─────────────────────────────────── */}
      <section className="tr-tips-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">
              6 Expert Tips for Writing Travel Reel Prompts That Actually Work
            </h2>
            <p className="tr-section-sub">
              The difference between a mediocre AI video and a cinematic reel is the prompt. Here's what the top travel content creators know.
            </p>
          </div>
          <div className="tr-tips-grid">
            {TIPS.map((t, i) => (
              <div key={i} className="tr-tip-card">
                <div className="tr-tip-icon">{t.icon}</div>
                <h3 className="tr-tip-title">{t.title}</h3>
                <p className="tr-tip-text">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Big CTA Section ─────────────────────────────────────── */}
      <section className="tr-cta-section">
        <div className="tr-container">
          <div className="tr-cta-box">
            <div className="tr-cta-box-bg" />
            <h2 className="tr-cta-box-title">
              Your Next Viral Travel Reel Is One Prompt Away
            </h2>
            <p className="tr-cta-box-sub">
              50 free credits. No card. No camera. No editing.
              <br />
              Just type a destination and watch the AI work.
            </p>
            <div className="tr-cta-box-features">
              <span>✓ Kling 2.6 Pro</span>
              <span>✓ Veo 3.1 by Google</span>
              <span>✓ 9:16 for Reels & Shorts</span>
              <span>✓ AI Audio</span>
              <span>✓ MP4 Download</span>
              <span>✓ Image-to-Video</span>
            </div>
            <a href={CTA_URL} className="tr-cta-mega">
              <span>🎬</span>
              Generate My Travel Reel — It's Free
              <span className="tr-cta-arrow">→</span>
            </a>
            <p className="tr-cta-box-note">
              Takes 30 seconds to generate · Download your MP4 instantly · Commercial use on paid plans
            </p>
          </div>
        </div>
      </section>

      {/* ── Deep-Dive Editorial ─────────────────────────────────── */}
      <section className="tr-editorial">
        <div className="tr-container tr-editorial-inner">
          <article className="tr-article">

            <h2>The Complete Guide to AI Travel Reel Generation in 2026</h2>

            <p>
              In 2026, travel content is the single most consumed entertainment category across every major social platform.
              Instagram Reels featuring travel destinations generate an average of 6 times more engagement than static travel
              photography. TikTok travel content accumulates over 2.7 billion views monthly. YouTube Shorts travel videos
              drive more travel purchase decisions than any other content format, according to Google's own consumer insights.
            </p>
            <p>
              And yet, the barrier to creating professional-grade travel video content has historically been enormous.
              A proper travel videography setup — camera body, gimbal, drone, lens kit, editing software, colour grading
              tools — can cost upwards of $8,000–$15,000. Even renting equipment and hiring an editor for a single
              destination campaign can cost $2,000–$5,000.
            </p>
            <p>
              AI travel reel generators have changed this equation permanently. In 2026, any travel creator, tourism
              marketer, travel blogger, or destination brand can generate cinematic, platform-ready travel reels from a
              single text prompt — in under 60 seconds — for the cost of a coffee.
            </p>

            <h3>What Exactly Is an AI Travel Reel Generator?</h3>
            <p>
              An AI travel reel generator is a text-to-video system trained on millions of hours of cinematic footage,
              nature documentaries, travel films, and landscape photography. When you type a prompt describing a destination,
              time of day, camera movement, and atmosphere, the AI synthesises a unique video clip that has never existed
              before — it's not pulling from a stock footage library. It is generating new, original video pixels frame by frame.
            </p>
            <p>
              The best AI video models for travel reels in 2026 include:
            </p>
            <ul>
              <li><strong>Kling 2.6 Pro by Kuaishou:</strong> The gold standard for realistic camera motion and natural subject movement. Produces 1080p footage with built-in AI audio generation. Best for premium destination campaigns and tourism brand content.</li>
              <li><strong>Veo 3.1 by Google DeepMind:</strong> Unparalleled colour science derived from Google's work on cinematic AI video. Golden-hour content, landscape panoramas, and atmospheric light studies look extraordinary through Veo. Supports AI-generated ambient audio tracks.</li>
              <li><strong>Wan 2.5:</strong> The workhorse model for high-volume creators. Fast (30-second generation times), affordable (46 credits per 5-second clip), and capable of up to 1080p resolution. If you're posting daily travel content, Wan 2.5 is your best friend.</li>
              <li><strong>Grok Imagine by xAI:</strong> A distinctive model known for rich atmospheric detail and — uniquely — AI-generated audio that is baked into every video it produces. The ambient soundscapes Grok Imagine generates for travel content (breaking waves, wind through pines, distant temple bells) are unlike anything the other models produce.</li>
            </ul>

            <h3>Text-to-Video vs Image-to-Video for Travel Reels: Which Should You Use?</h3>
            <p>
              <strong>Text-to-Video</strong> is ideal when you don't have existing footage or photography of the destination.
              You're conjuring something that doesn't exist yet — the AI acts as your cinematographer, location scout, and
              colourist rolled into one. This is the go-to approach for creating aspirational travel content, destination
              previews for places you haven't visited, and concept videos for tourism campaigns.
            </p>
            <p>
              <strong>Image-to-Video</strong> (also called img2vid or photo animation) is ideal when you have a travel photo
              you want to bring to life. Upload your shot of a waterfall, a mountain vista, a busy street market, or a
              beach sunset — then add a motion prompt describing how you want the scene to move. The AI adds cinematic camera
              motion, environmental animation (moving water, swaying trees, drifting clouds), and parallax depth effects to
              your still image. The result is a video that feels like it was captured with a cinema camera, even if the
              original image was taken on a phone.
            </p>
            <p>
              The most sophisticated travel content creators use both: they generate a text-to-video reel for the destinations
              they haven't yet visited, and animate their best travel photography using image-to-video for the trips they've
              already taken. Together, this gives them an infinite content pipeline.
            </p>

            <h3>The Perfect Aspect Ratio for Travel Reels in 2026</h3>
            <p>
              Platform distribution strategy is as important as production quality. In 2026, the algorithm dynamics across
              major platforms make the 9:16 (vertical portrait) format the clear default for travel reel distribution:
            </p>
            <p>
              <strong>Instagram Reels (9:16):</strong> Vertical content receives full-screen real estate on mobile — the
              dominant device for Instagram consumption. The algorithm actively prioritises Reels content over static posts,
              and travel Reels with strong first-second hooks regularly achieve 10x–50x the organic reach of travel photos.
            </p>
            <p>
              <strong>TikTok (9:16):</strong> TikTok's entire interface is built around vertical video. The travel category
              (#travel, #wanderlust, #traveltiktok) commands some of the highest engagement rates on the platform. A
              well-crafted 5-second AI travel reel that hooks viewers in the first second can reach millions of accounts
              through TikTok's For You Page algorithm with zero paid promotion.
            </p>
            <p>
              <strong>YouTube Shorts (9:16):</strong> Google's short-form video surface benefits from YouTube's massive
              SEO authority. A travel Shorts video titled "Santorini at Blue Hour — AI Reel" can rank in both YouTube
              search and Google Video search, driving long-term discovery traffic that Instagram and TikTok don't provide.
            </p>
            <p>
              <strong>YouTube Landscape (16:9):</strong> For longer-form travel content, documentary-style reels, and
              destination guides, the 16:9 format remains the standard on YouTube. AI-generated b-roll clips in 16:9 can
              supplement or replace expensive stock footage in travel vlogs and destination guides.
            </p>

            <h3>How AI Travel Reels Are Changing the Travel Content Industry in 2026</h3>

            <p>
              The travel content industry is undergoing the most significant structural transformation since the invention
              of consumer video cameras. Here is what that transformation looks like across different segments:
            </p>

            <h4>Solo Travel Creators & Influencers</h4>
            <p>
              The traditional solo travel content creator model required being physically present at every destination
              featured on their channel — an expensive, time-consuming, and logistically complex proposition. In 2026,
              the most agile travel creators maintain audience growth and engagement continuity using AI-generated travel
              reels between physical trips. A creator travelling to Southeast Asia once a month can maintain daily posting
              schedules using AI reels of destinations they plan to visit, aspirational content, and prompt-engineered
              recreations of iconic travel moments. The creative curation — writing evocative prompts, selecting the best
              AI outputs, writing compelling captions — is still uniquely human work.
            </p>

            <h4>Destination Marketing Organisations (DMOs)</h4>
            <p>
              National tourism boards and regional destination marketing organisations have historically spent
              $500,000–$5,000,000 annually on video production and distribution. AI travel video generation is
              rapidly compressing these costs while expanding content volume. A DMO can now generate dozens of
              platform-specific travel reels per week — highlighting different regions, seasons, activities, and
              demographics — for a fraction of traditional production cost. The content remains visually competitive
              with professionally shot material, and the production timeline compresses from months to minutes.
            </p>

            <h4>Travel Agencies & Booking Platforms</h4>
            <p>
              Visual content is the primary driver of travel booking decisions. When a customer receives a travel
              proposal with an AI-generated reel of their prospective destination — the resort at golden hour, the
              hiking trail in morning mist, the beach at sunset — conversion rates increase dramatically versus a
              text-based proposal or static images. Travel agencies that have integrated AI travel video generation
              into their sales workflow report significant improvements in proposal acceptance rates. Booking
              platform listings that include video see 80%+ higher engagement than listings without video.
            </p>

            <h4>Travel Journalism & Content Publishing</h4>
            <p>
              Travel publications — from major magazine brands to independent newsletters — use AI travel video to
              accompany written editorial content. A destination review published with an AI-generated travel reel
              increases time-on-page, reduces bounce rate, and creates shareable social media assets that drive traffic
              back to the original article. In the editorial workflow, AI video generation costs a fraction of stock
              footage licensing and produces unique, publication-specific visual content.
            </p>

            <h3>AI Travel Reels vs Stock Travel Footage: The Full Comparison</h3>

            <p>
              Many travel content creators and tourism marketers have historically relied on stock footage libraries —
              Shutterstock, Getty Images, Artgrid, Storyblocks — to supplement their video content. In 2026,
              AI travel video generation has become competitive with or superior to stock footage in most use cases:
            </p>

            <p>
              <strong>Uniqueness:</strong> Stock footage is licensed to thousands of users simultaneously. Your competitors
              may already be using the exact same Santorini drone shot you just licensed. AI-generated travel reels are
              unique to your prompt — no other creator will have the identical clip.
            </p>
            <p>
              <strong>Specificity:</strong> Stock footage libraries contain what was filmed, not necessarily what you need.
              If you need a slow-motion shot of cherry blossoms reflected in a specific style of Japanese stone basin at
              dawn, that exact shot may not exist in any stock library. An AI travel reel generator will create it from
              your description.
            </p>
            <p>
              <strong>Cost:</strong> Premium stock footage subscriptions cost $50–$300/month. Artgrid's unlimited licence
              costs $200+/month. AI travel reel generation on Scenith starts from $1/month and includes access to multiple
              state-of-the-art video models.
            </p>
            <p>
              <strong>Commercial Rights:</strong> Stock footage licensing terms vary significantly — restrictions on
              broadcast use, geographical limits, editorial-only restrictions, and attribution requirements add complexity.
              Scenith's paid plans include straightforward full commercial rights with no attribution requirement.
            </p>

            <h3>The Environmental Case for AI Travel Content</h3>
            <p>
              This is a dimension of AI travel video generation that is rarely discussed but increasingly relevant.
              Traditional travel content production requires physical travel — flights, accommodation, ground transport —
              generating significant carbon footprints. A destination campaign requiring a cinematographer to travel to
              five locations across three continents generates thousands of kilograms of CO₂ equivalent. AI-generated
              travel content produces zero transport-related emissions. For sustainability-conscious brands, travel
              publications, and creators, AI travel video generation is the significantly lower-carbon alternative to
              traditional production.
            </p>

            <h3>What Makes a Great AI Travel Reel Prompt: Advanced Techniques</h3>

            <p>
              Beyond the basic tips covered above, here are the advanced prompt engineering techniques that separate
              top-performing AI travel reels from average ones:
            </p>

            <p>
              <strong>The Layered Atmosphere Technique:</strong> Rather than describing a single atmospheric element,
              layer three. "Mist rolling through the valley, dust rising from the road below, rays of golden light
              cutting between storm clouds above" gives the AI multiple environmental textures to animate simultaneously,
              creating visual complexity that holds viewer attention.
            </p>
            <p>
              <strong>The Documentary Voice Reference:</strong> AI video models respond strongly to references from
              documentary cinematography. "BBC Planet Earth cinematography", "David Attenborough documentary style",
              "National Geographic Photo of the Year aesthetic" calibrate the AI toward the specific visual grammar
              of nature and travel documentary — the most universally admired travel visual style.
            </p>
            <p>
              <strong>The Human Element:</strong> Including a human figure — even as a silhouette or distant presence —
              gives travel reels an emotional anchor that pure landscape content lacks. "A lone figure at the edge of
              the cliff" or "a couple in silhouette against the burning horizon" creates narrative tension and emotional
              resonance that dramatically increases watch time and shares.
            </p>
            <p>
              <strong>The Macro-to-Macro Shot:</strong> Describe a camera movement that begins with a macro detail and
              pulls back to reveal the full landscape — or vice versa. "Close-up of a single cherry blossom petal,
              slowly pulling back to reveal a tunnel of a thousand flowering trees" creates the kind of reveal moment
              that triggers high rewatch rates, which the algorithm rewards.
            </p>
            <p>
              <strong>Seasonal Specificity:</strong> "Autumn" is less effective than "mid-November when the maple leaves
              have turned but haven't yet fallen". "Winter" is less evocative than "the week after a heavy snowfall when
              everything is still white and untouched". Specific seasonal moments create richer visual outputs than
              broad seasonal labels.
            </p>

            <h3>Building a Travel Content Pipeline with AI Video Generation</h3>

            <p>
              The creators and brands seeing the most significant results from AI travel video generation aren't treating
              it as a one-off tool — they're building systematic content pipelines around it. Here's a framework:
            </p>

            <p>
              <strong>Step 1 — Destination List:</strong> Start with a list of 20–30 destinations aligned with your
              content niche. These could be places you've visited, places you plan to visit, or simply destinations that
              resonate with your audience.
            </p>
            <p>
              <strong>Step 2 — Prompt Library:</strong> For each destination, write 5–10 prompt variations covering
              different times of day, seasons, camera movements, and atmospheric conditions. A prompt library of
              100–200 variations gives you months of content supply.
            </p>
            <p>
              <strong>Step 3 — Model Testing:</strong> Generate each prompt on 2–3 different AI models and save the best
              output. Model performance varies by destination type — Kling excels at urban motion and natural subject
              movement, Veo excels at landscape colour and atmospheric light, Wan is the fastest for iterating.
            </p>
            <p>
              <strong>Step 4 — Format Conversion:</strong> Generate each reel in 9:16 for vertical platforms and 16:9
              for landscape platforms. A single prompt generates two platform-ready assets.
            </p>
            <p>
              <strong>Step 5 — Voice + Video:</strong> Use Scenith's AI Voice Generator to add a narration track or
              ambient commentary to your travel reels. A travel reel with a compelling voiceover performs significantly
              better than a silent clip on YouTube Shorts and Instagram Reels with captions.
            </p>
            <p>
              <strong>Step 6 — Batch and Schedule:</strong> With a systematic approach, you can generate a week of travel
              reel content in a single session. Batch generate on Sunday; schedule across your platforms for the week.
            </p>

            <h3>The Future of AI Travel Video: What's Coming in 2026 and Beyond</h3>

            <p>
              The AI video models available today — remarkable as they are — represent an early stage of what's possible.
              Several developments on the near horizon will further transform AI travel reel generation:
            </p>
            <p>
              <strong>Longer AI Video Clips:</strong> Current models generate 5–10 second clips. Models capable of
              generating 30-second to 2-minute fully coherent travel video sequences are in development from every major
              AI lab. When these arrive, AI-generated short travel documentaries will become possible.
            </p>
            <p>
              <strong>Consistent Character and Subject:</strong> One current limitation of AI video is maintaining a
              consistent human subject across multiple clips — important for travel vloggers who need to appear in their
              own content. Consistent character AI video is actively being developed and will arrive within the next
              1–2 model generations.
            </p>
            <p>
              <strong>Real-Time Generation:</strong> As inference speed improves, AI travel reel generation will move
              from 30–120 seconds to near-instantaneous. This will enable live travel content generation — real-time
              visualisation of destinations as you describe them.
            </p>
            <p>
              <strong>AI-Directed Editing:</strong> Full AI travel reel packages — raw clips + transitions + music +
              colour grade + captions — assembled from a single prompt are on the near horizon. The distinction between
              "generating a clip" and "producing a finished reel" will continue to compress.
            </p>
            <p>
              For travel creators, marketers, and tourism brands, the strategic implication is clear: those who develop
              fluency with AI travel video generation now will have a significant and durable competitive advantage as
              these capabilities continue to compound.
            </p>

          </article>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="tr-faq-section">
        <div className="tr-container">
          <div className="tr-section-header">
            <h2 className="tr-section-title">Frequently Asked Questions</h2>
            <p className="tr-section-sub">
              Everything you need to know about AI travel reel generation.
            </p>
          </div>
          <div className="tr-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`tr-faq-item ${openFaq === i ? "open" : ""}`}
              >
                <button
                  className="tr-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="tr-faq-toggle">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="tr-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="tr-final-cta">
        <div className="tr-container">
          <h2 className="tr-final-title">Ready to Create Your First AI Travel Reel?</h2>
          <p className="tr-final-sub">
            Join thousands of travel creators, bloggers, and tourism brands already using Scenith
            to generate cinematic travel content in seconds.
          </p>
          <a href={CTA_URL} className="tr-cta-mega">
            <span>🎬</span>
            Generate My Travel Reel Free — No Card Needed
            <span className="tr-cta-arrow">→</span>
          </a>
          <div className="tr-final-links">
            <a href="https://scenith.in/tools/ai-image-generation?utm_source=travel-reels-tool&utm_medium=tool-page&utm_campaign=travel-reel-generator">Also try: AI Image Generator →</a>
            <a href="https://scenith.in/tools/ai-voice-generator?utm_source=travel-reels-tool&utm_medium=tool-page&utm_campaign=travel-reel-generator">AI Voice Generator for Travel →</a>
            <a href="https://scenith.in/pricing?utm_source=travel-reels-tool&utm_medium=tool-page&utm_campaign=travel-reel-generator">View Pricing Plans →</a>
          </div>
        </div>
      </section>

    </div>
  );
}