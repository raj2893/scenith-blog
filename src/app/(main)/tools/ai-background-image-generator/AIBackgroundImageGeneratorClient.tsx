"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AIBackgroundImageGenerator.module.css";

// ─── UTM Links ────────────────────────────────────────────────────────────────
const BASE_URL = "https://scenith.in/tools/ai-image-generation";
const UTM_HERO =   `${BASE_URL}?utm_source=ai-background-image-generator&utm_medium=hero-cta&utm_campaign=seo-landing`;
const UTM_INLINE = `${BASE_URL}?utm_source=ai-background-image-generator&utm_medium=inline-cta&utm_campaign=seo-landing`;
const UTM_FAQ =    `${BASE_URL}?utm_source=ai-background-image-generator&utm_medium=faq-cta&utm_campaign=seo-landing`;
const UTM_BOTTOM = `${BASE_URL}?utm_source=ai-background-image-generator&utm_medium=bottom-cta&utm_campaign=seo-landing`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STYLE_SHOWCASE = [
  {
    style: "Abstract & Geometric",
    icon: "◈",
    color: "#7C3AED",
    bg: "#F5F0FF",
    desc: "Fluid shapes, bold geometry, gradient sweeps. Perfect for SaaS landing pages, presentation decks, and digital portfolios.",
    prompts: [
      "Floating translucent spheres on deep violet gradient, minimal, luxury",
      "Interlocking geometric hexagons, electric blue to cyan gradient, clean",
      "Soft aurora borealis gradient in pastel pinks and purples, ethereal",
    ],
    uses: ["SaaS websites", "Presentation slides", "App store screenshots"],
  },
  {
    style: "Nature & Landscape",
    icon: "⛰",
    color: "#059669",
    bg: "#F0FDF4",
    desc: "Mountains, oceans, forests, and skies rendered in breathtaking detail. The most requested background category for YouTube and Zoom.",
    prompts: [
      "Misty mountain peaks at sunrise, soft pink sky, calm lake reflection",
      "Dense rainforest canopy from below, dappled light, deep green tones",
      "Coastal cliffside at golden hour, ocean waves, dramatic clouds",
    ],
    uses: ["YouTube channels", "Zoom backgrounds", "Desktop wallpapers"],
  },
  {
    style: "Minimalist & Texture",
    icon: "▦",
    color: "#B45309",
    bg: "#FFFBEB",
    desc: "Subtle textures, clean gradients, and understated patterns that stay out of the way of your content while elevating the overall aesthetic.",
    prompts: [
      "Smooth paper texture, warm off-white tones, subtle grain, minimal",
      "Light concrete surface, neutral gray, fine texture, clean modern feel",
      "Washi tape texture, soft beige and cream, Japanese minimal aesthetic",
    ],
    uses: ["Blog headers", "Product photography", "Branding materials"],
  },
  {
    style: "Sci-Fi & Futuristic",
    icon: "⬡",
    color: "#0284C7",
    bg: "#F0F9FF",
    desc: "Neon-lit cityscapes, holographic grids, and circuit-board patterns for tech brands, gaming content, and futuristic design projects.",
    prompts: [
      "Neon-blue circuit board pattern on dark background, cyberpunk aesthetic",
      "Glowing holographic grid receding into deep space, electric blue",
      "Futuristic city skyline at night, neon signs, rain reflections",
    ],
    uses: ["Gaming channels", "Tech startups", "Streaming overlays"],
  },
  {
    style: "Fantasy & Magical",
    icon: "✦",
    color: "#9D174D",
    bg: "#FFF1F2",
    desc: "Enchanted forests, glowing portals, starry skies, and otherworldly environments for creative projects, book covers, and fantasy content.",
    prompts: [
      "Enchanted forest at twilight, bioluminescent flowers, mystical fog",
      "Ancient stone archway covered in glowing runes, forest background",
      "Starfield with distant nebula in magenta and gold, cosmic depth",
    ],
    uses: ["Fantasy authors", "Game assets", "Creative portfolios"],
  },
  {
    style: "Vintage & Retro",
    icon: "◉",
    color: "#92400E",
    bg: "#FEF3C7",
    desc: "Film grain textures, faded photography aesthetics, retro color palettes. Ideal for lifestyle brands, podcasts, and nostalgic content.",
    prompts: [
      "Sun-faded paper with subtle coffee stain texture, warm sepia tones",
      "70s groovy pattern with earthy oranges and avocado green, textured",
      "Vintage travel poster aesthetic, muted colors, grain overlay",
    ],
    uses: ["Podcast covers", "Lifestyle brands", "Etsy shop graphics"],
  },
];

const USE_CASE_DEEP = [
  {
    icon: "🌐",
    title: "Website & App Backgrounds",
    subtitle: "Hero sections, page backgrounds, section dividers",
    body: `A website's background isn't just decoration — it's the first thing a visitor perceives, and it sets the emotional tone before a single word is read. Generic stock photos feel borrowed. Solid colors feel flat. AI-generated backgrounds let you create something completely unique to your brand, matching your exact color palette, mood, and aesthetic. For SaaS products, subtle abstract patterns signal modernity and technical sophistication. For wellness brands, soft gradients and natural textures communicate calm and trust. E-commerce brands use clean, light backgrounds that don't compete with their products. Generate 5–10 variations in the time it would take to brief a designer, test them in your staging environment, and ship the best performer.`,
    promptExample: "Soft gradient wash, warm cream to pale lavender, very subtle, wide horizontal format, minimal and clean",
    stat: "68% of users form a first impression based on visual design alone",
  },
  {
    icon: "📺",
    title: "YouTube Backgrounds & Channel Art",
    subtitle: "Channel banners, video backgrounds, end screens",
    body: `YouTube channel art is one of the most underinvested parts of channel branding — and one of the highest-impact. A well-designed background communicates professionalism and niche expertise at a glance. Tech channels benefit from circuit-board patterns and neon grids. Cooking channels thrive with warm kitchen textures and herb-scattered marble. Fitness channels need energetic, high-contrast backgrounds. Travel channels want sweeping cinematic landscapes. With AI background generation, you can create a complete set of channel assets — main banner, social links background, video placeholder — in minutes, all perfectly themed to your niche and color brand. No Canva templates that half your competitors also use.`,
    promptExample: "Dark space background with distant galaxies, subtle star clusters, deep blue and purple, cinematic wide format",
    stat: "Channels with custom branding see 23% higher subscription rates than unbranded channels",
  },
  {
    icon: "📹",
    title: "Zoom & Video Call Backgrounds",
    subtitle: "Virtual backgrounds, professional office scenes, blurred environments",
    body: `Remote work normalized virtual backgrounds, but most people are still using the same five default Zoom options or blurry beach photos. A custom AI-generated background immediately signals intentionality — you thought about how you appear on camera. For executives and consultants, a sophisticated abstract background in brand colors communicates professionalism. For educators, a clean bookshelf scene or chalkboard texture creates an appropriate learning environment. For creative freelancers, an artistic background that reflects your aesthetic signals your taste before you say a word. Generate a library of 10 custom backgrounds for different types of calls: client presentations, internal standups, conference talks, and casual check-ins.`,
    promptExample: "Modern home library bookshelf background, warm lighting, neatly arranged books, professional and inviting",
    stat: "85% of remote workers say their video background affects their professional image perception",
  },
  {
    icon: "🎮",
    title: "Streaming & OBS Backgrounds",
    subtitle: "Stream overlays, starting/ending screens, just-chatting backgrounds",
    body: `Streamers live and die by their visual identity. Consistent, well-designed backgrounds signal commitment and keep viewers watching longer. A great starting-soon screen with your brand's background can retain viewers in the pre-stream queue. Between-stream screen backgrounds with your brand colors, subtle animation potential, and clean composition tell the audience "this person takes their stream seriously." Gaming streamers gravitate toward dark, neon-accented cyberpunk scenes. Variety streamers prefer bold, saturated color backgrounds that work as both visual identity and thumbnail recognition. Just-chatting streamers often use cozy, bokeh-style interior backgrounds that feel personal and warm.`,
    promptExample: "Dark gaming setup aesthetic, RGB lighting ambiance, purple and teal neon glow, bokeh blur effect",
    stat: "Streamers with professional visual branding earn 41% more follows per viewer than those with default setups",
  },
  {
    icon: "🖥️",
    title: "Desktop & Phone Wallpapers",
    subtitle: "1080p, 4K, and mobile wallpapers",
    body: `Your desktop wallpaper is the most-seen image in your life — you glimpse it hundreds of times a day. Most people either use manufacturer defaults or random Pinterest saves. AI wallpaper generation changes this: describe exactly the aesthetic you want and generate something completely unique to you. Minimalists might generate a clean gradient with subtle texture. Productivity obsessives might want a dark, distraction-free abstract pattern. Artists might generate a different landscape each week. Brands can generate matching wallpapers for their team to use during screencasts and presentations, creating cohesive visual identity across every touchpoint. Generate for every device size: ultra-wide monitor, laptop, tablet, phone.`,
    promptExample: "Calm deep ocean gradient from teal to midnight blue, gentle wave texture, minimal and serene, 16:9 widescreen",
    stat: "Custom wallpapers are shared 3x more on design communities than stock photo alternatives",
  },
  {
    icon: "📊",
    title: "Presentation & Slide Backgrounds",
    subtitle: "Google Slides, PowerPoint, Keynote, Pitch decks",
    body: `The standard PowerPoint templates have been seen a million times — the audience mentally checks out before your first slide transition. Custom AI backgrounds signal that this presentation was made with care. For venture pitches, a sleek dark abstract background with subtle geometry communicates technical sophistication. For educational presentations, clean textured backgrounds in brand colors keep the focus on content. For conference talks, cinematic backgrounds that match your topic — a healthcare talk could use clean clinical white textures, a climate talk could use dramatic landscape imagery. Generate one master background per presentation and create consistent slides quickly using it across all slides.`,
    promptExample: "Clean dark gradient with very subtle geometric mesh pattern, dark navy blue, professional and minimal",
    stat: "Presentations with custom visual design are rated 34% more credible by audiences than template-based ones",
  },
  {
    icon: "🛍️",
    title: "E-commerce & Product Photography",
    subtitle: "Product mockups, shop banners, category headers",
    body: `Product photography backgrounds are expensive to get right. A professional studio setup with seamless paper, lighting rigs, and a photographer costs hundreds per session. AI background generation changes the math completely: generate infinite clean, neutral, or styled backgrounds, composite your product shots onto them, and test different aesthetics with your audience in hours. Jewelry sellers use textured dark marble or velvet backgrounds that show off the product's luster. Skincare brands use clean botanical textures and soft natural light aesthetics. Tech products look sharp on white-to-grey gradients. Food products pop on warm wooden textures or slate. The entire photographic backdrop library that used to cost thousands is now a prompt away.`,
    promptExample: "Luxury white marble surface with subtle gold veining, soft studio lighting from above, product photography background",
    stat: "Products with custom background imagery convert 28% better than those with plain white backgrounds",
  },
  {
    icon: "📱",
    title: "Social Media & Content Creation",
    subtitle: "Instagram posts, Stories, Pinterest pins, thumbnails",
    body: `Social media is a visual competition. Every post is fighting for attention against thousands of other pieces of content in a user's feed. A unique, on-brand background that's consistent across your posts creates the instant visual recognition of a professional media brand. Instagram creators use AI backgrounds to maintain a grid aesthetic — generating 9–12 related backgrounds at once that form a cohesive visual theme when viewed on their profile. Pinterest creators use landscape and mood-board backgrounds to increase pin saves and repins. Twitter/X content creators use minimal abstract backgrounds for quote graphics that stand out in chronological feeds. TikTok creators use vibrant, high-contrast backgrounds for on-screen text overlays.`,
    promptExample: "Boho aesthetic dried flowers and pampas grass on neutral linen background, warm natural lighting, lifestyle photography",
    stat: "Posts with custom branded backgrounds receive 52% more saves than posts using stock photography",
  },
];

const PROMPT_LIBRARY = [
  {
    category: "🌅 Atmospheric & Moody",
    items: [
      "Storm clouds gathering over a flat horizon, dramatic grey sky, golden light breaking through, epic wide format",
      "Morning fog rolling over a silent pine forest, cool blue tones, ethereal and mysterious atmosphere",
      "Sunset gradient from deep coral to pale yellow, scattered wispy clouds, warm and peaceful, landscape format",
      "Blue hour city reflections in wet cobblestone streets, soft bokeh, European aesthetic, moody",
      "Rain on a dark window at night with city lights blurred beyond, introspective, cinematic",
    ],
  },
  {
    category: "🔮 Abstract & Artistic",
    items: [
      "Watercolor paint bloom in teal and gold on wet paper, organic spreading edges, soft and artistic",
      "Marble swirl pattern in black and white with gold veining, luxury, wide horizontal",
      "Neon paint splatter on deep black background, vivid pink and cyan, urban energy",
      "Pastel geometric shapes floating in soft gradient space, dreamy, kawaii aesthetic",
      "Ink drops dissolving in crystal clear water, macro, monochrome with blue accent, minimal",
    ],
  },
  {
    category: "🏙️ Urban & Architectural",
    items: [
      "Minimalist concrete building facades, brutalist architecture, black and white, geometric shadows",
      "Tokyo street at night, neon signs reflecting in rain puddles, deep neon colors, cinematic",
      "Rooftop cityscape at golden hour, warm amber haze, wide panoramic format",
      "Modern glass office building exterior, clean lines, clear sky reflection, professional",
      "Aerial view of a city grid at night, lights in symmetrical patterns, black and gold",
    ],
  },
  {
    category: "🌿 Nature & Botanical",
    items: [
      "Dense tropical leaves close-up, deep green tones, dappled sunlight, flat lay composition",
      "Cherry blossom branches against a soft blue sky, Spring in Japan, minimal and serene",
      "Rocky coastal cliffside with crashing waves, dramatic natural texture, horizontal",
      "Desert sand dunes with strong geometric shadows, warm ochre and rust tones",
      "Snow-covered evergreen forest floor, soft winter light, serene and cold, pure white",
    ],
  },
  {
    category: "⚡ Tech & Digital",
    items: [
      "Blue circuit board macro photography, glowing traces, dark background, tech aesthetic",
      "Binary code waterfall on dark screen, Matrix aesthetic, green on black, digital rain",
      "Holographic iridescent surface, liquid metal, shifting rainbow light, futuristic",
      "Abstract data visualization, glowing nodes and connecting lines, dark background, electric blue",
      "Microchip surface pattern, gold and silver traces on green substrate, extreme macro",
    ],
  },
  {
    category: "✨ Minimal & Clean",
    items: [
      "Pure white textured wall with very subtle grain, clean and minimal, photography backdrop",
      "Light beige linen fabric texture, close-up weave pattern, warm neutral, lifestyle",
      "Smooth flat lay of cream paper with very gentle shadow, editorial, clean design background",
      "Soft ivory background with barely-visible watercolor wash, elegant, luxury brand aesthetic",
      "Geometric minimalist pattern, thin lines on white background, architectural grid, scale",
    ],
  },
];

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return { count, ref };
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const { count, ref } = useCounter(end);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AIBackgroundImageGeneratorClient() {
  const [activeStyle, setActiveStyle] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyPrompt = (p: string) => {
    navigator.clipboard.writeText(p).catch(() => {});
    setCopiedPrompt(p);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <main className={styles.page}>
      {/* ── Decorative background ── */}
      <div className={styles.pageBg} aria-hidden="true" />

      <div className={styles.wrap}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <a href="/">Home</a>
          <span>›</span>
          <a href="/tools">Tools</a>
          <span>›</span>
          <span>AI Background Image Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className={styles.hero} aria-labelledby="hero-h1">
          <div className={styles.heroLeft}>
            <div className={styles.heroLabel}>
              <span className={styles.labelDot} aria-hidden="true" />
              <span>AI Background Generator · Free · No Card Needed</span>
            </div>

            <h1 id="hero-h1" className={styles.heroTitle}>
              AI Background Image{" "}
              <span className={styles.heroAccent}>Generator</span>
              <br />
              <span className={styles.heroSub2}>
                Custom Backgrounds for Any Platform
              </span>
            </h1>

            <p className={styles.heroBody}>
              Stop using the same stock photos and default templates as everyone
              else. Generate <strong>unique, on-brand backgrounds</strong> for
              your website, YouTube channel, Zoom calls, presentations, streaming
              overlays, and social media — using nothing but a text description.
              Free to start. Results in under 15 seconds.
            </p>

            <ul className={styles.heroChecks} aria-label="Key features">
              {[
                "Works for websites, YouTube, Zoom, presentations, social media",
                "8 art styles — Realistic, Anime, Fantasy, Digital Art & more",
                "Royalty-free commercial use included on all generations",
                "No design software or skills required",
                "50 free credits on signup — no credit card",
              ].map((c) => (
                <li key={c}><span aria-hidden="true">✓</span> {c}</li>
              ))}
            </ul>

            <div className={styles.heroCtas}>
              <a href={UTM_HERO} className={styles.btnPrimary} rel="noopener">
                <span className={styles.btnShine} aria-hidden="true" />
                🎨 Generate Free Background Now
              </a>
              <a href={UTM_HERO} className={styles.btnOutline} rel="noopener">
                See examples →
              </a>
            </div>

            <p className={styles.heroDisclaimer}>
              Free account · 50 credits instantly · No credit card · Watermark-free downloads
            </p>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.bgPreviewGrid}>
              {[
                { label: "Abstract", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
                { label: "Nature", color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
                { label: "Minimal", color: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
                { label: "Sci-Fi", color: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" },
                { label: "Fantasy", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
                { label: "Vintage", color: "linear-gradient(135deg, #d4a574 0%, #9b7451 100%)" },
              ].map((bg) => (
                <div
                  key={bg.label}
                  className={styles.bgPreviewTile}
                  style={{ background: bg.color }}
                >
                  <span className={styles.bgPreviewLabel}>{bg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className={styles.stats} aria-label="Key statistics">
          {[
            { n: 52000, s: "+", label: "Backgrounds Generated" },
            { n: 8,     s: "",  label: "Art Style Presets" },
            { n: 7,     s: "",  label: "AI Models Available" },
            { n: 15,    s: "s", label: "Average Generation Time" },
          ].map((st) => (
            <div key={st.label} className={styles.stat}>
              <strong><Counter end={st.n} suffix={st.s} /></strong>
              <span>{st.label}</span>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════════════
            WHAT IS AI BACKGROUND GENERATION
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="what-h2">
          <div className={styles.twoCol}>
            <div className={styles.twoColText}>
              <div className={styles.sectionTag}>The Technology</div>
              <h2 id="what-h2" className={styles.h2}>
                What Is an AI Background Image Generator?
              </h2>
              <div className={styles.prose}>
                <p>
                  An <strong>AI background image generator</strong> uses deep
                  learning diffusion models to create completely original background
                  images from text descriptions — no stock library, no templates,
                  no designer needed. You describe what you want. The AI renders it.
                  You download it.
                </p>
                <p>
                  Unlike stock photography, AI backgrounds are{" "}
                  <strong>infinitely unique</strong> — no one else will have the
                  same image, because your prompt is your creative direction.
                  Unlike hiring a designer, AI backgrounds are instant — what used
                  to take days of back-and-forth now takes seconds.
                </p>
                <p>
                  In 2026, AI background generation has matured to the point where
                  the outputs are routinely indistinguishable from professional
                  photography and graphic design. The models understand color
                  theory, compositional principles, lighting physics, and artistic
                  styles deeply — you get quality that would previously have
                  required significant time and budget.
                </p>
                <p>
                  Scenith gives you access to multiple AI image models — including
                  GPT Image 1, Imagen 4, FLUX 1.1 Pro, and Stability AI Core — all
                  in one place, so you can choose the right model for your specific
                  background type and get the best possible result.
                </p>
              </div>
              <a href={UTM_INLINE} className={styles.textLink} rel="noopener">
                Try the AI background generator for free →
              </a>
            </div>
            <div className={styles.twoColVisual}>
              <div className={styles.demoPromptCard}>
                <div className={styles.demoPromptTop}>
                  <span className={styles.demoPromptIcon}>✍️</span>
                  <span className={styles.demoPromptLabel}>Your Prompt</span>
                </div>
                <p className={styles.demoPromptText}>
                  "Misty mountain valley at dawn, soft pink and lavender sky,
                  calm lake reflection, minimal and serene, landscape format"
                </p>
                <div className={styles.demoArrow}>↓ AI generates in ~10 seconds</div>
                <div className={styles.demoResult}>
                  <div
                    className={styles.demoResultBg}
                    style={{
                      background:
                        "linear-gradient(180deg, #f9c5d0 0%, #c5d4f9 40%, #8ab4e8 70%, #4a7fb0 100%)",
                    }}
                  />
                  <span className={styles.demoResultLabel}>AI Background</span>
                </div>
                <a href={UTM_INLINE} className={styles.demoBtn} rel="noopener">
                  Generate yours free →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="how-h2">
          <div className={styles.sectionTag}>Simple Process</div>
          <h2 id="how-h2" className={styles.h2}>
            How to Create an AI Background Image in 3 Steps
          </h2>
          <p className={styles.sectionDesc}>
            No learning curve. No design skills. No software to install. Here's
            the entire workflow:
          </p>

          <div className={styles.steps}>
            {[
              {
                n: "01",
                icon: "✍️",
                title: "Describe Your Background",
                body: `Write what you want in plain language. Include the scene, mood, color palette, lighting, and any specific elements. The more specific you are, the closer the result will match your vision. Try describing it the way you'd brief a photographer or art director: "sunlit marble counter, warm afternoon light from the left, shallow depth of field, muted warm tones."`,
              },
              {
                n: "02",
                icon: "🎨",
                title: "Choose Your Style",
                body: `Select from 8 art style presets that dramatically change the output character. Use Realistic Photo for website hero backgrounds and product photography. Choose Digital Art or Sci-Fi for tech brands and gaming content. Pick Fantasy or Artistic for creative and editorial projects. Select Vintage for lifestyle and brand aesthetics. Each style applies a different set of model conditioning for dramatically different results.`,
              },
              {
                n: "03",
                icon: "📥",
                title: "Generate, Preview & Download",
                body: `Hit Generate. Your background is ready in under 15 seconds. Preview it full-size in the browser, then download a high-resolution watermark-free PNG file. Use it immediately — on your website, in your video editor, in Canva, uploaded to Zoom, added to your OBS scene, or dropped into PowerPoint. No attribution required, commercial use included.`,
              },
            ].map((s) => (
              <article className={styles.step} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.ctaCenter}>
            <a href={UTM_HERO} className={styles.btnPrimary} rel="noopener">
              🎨 Start Generating Free Backgrounds
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            STYLE EXPLORER (INTERACTIVE)
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="styles-h2">
          <div className={styles.sectionTag}>Style Guide</div>
          <h2 id="styles-h2" className={styles.h2}>
            6 Background Styles — Which One Is Right for You?
          </h2>
          <p className={styles.sectionDesc}>
            Each art style produces completely different results from the same
            prompt. Click a style to explore prompts and use cases:
          </p>

          <div className={styles.styleExplorer}>
            <div className={styles.styleTabs} role="tablist" aria-label="Background styles">
              {STYLE_SHOWCASE.map((s, i) => (
                <button
                  key={s.style}
                  role="tab"
                  aria-selected={activeStyle === i}
                  className={`${styles.styleTab} ${activeStyle === i ? styles.styleTabActive : ""}`}
                  onClick={() => setActiveStyle(i)}
                  style={
                    activeStyle === i
                      ? {
                          background: STYLE_SHOWCASE[i].bg,
                          borderColor: STYLE_SHOWCASE[i].color,
                          color: STYLE_SHOWCASE[i].color,
                        }
                      : {}
                  }
                >
                  <span className={styles.styleTabIcon}>{s.icon}</span>
                  <span>{s.style}</span>
                </button>
              ))}
            </div>

            <div className={styles.stylePanel} style={{ background: STYLE_SHOWCASE[activeStyle].bg }}>
              <div className={styles.stylePanelLeft}>
                <h3
                  className={styles.stylePanelTitle}
                  style={{ color: STYLE_SHOWCASE[activeStyle].color }}
                >
                  {STYLE_SHOWCASE[activeStyle].icon} {STYLE_SHOWCASE[activeStyle].style}
                </h3>
                <p className={styles.stylePanelDesc}>
                  {STYLE_SHOWCASE[activeStyle].desc}
                </p>
                <div className={styles.stylePanelUses}>
                  <span className={styles.stylePanelUsesLabel}>Best for:</span>
                  {STYLE_SHOWCASE[activeStyle].uses.map((u) => (
                    <span
                      key={u}
                      className={styles.useTag}
                      style={{
                        background: STYLE_SHOWCASE[activeStyle].bg,
                        borderColor: STYLE_SHOWCASE[activeStyle].color,
                        color: STYLE_SHOWCASE[activeStyle].color,
                      }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.stylePanelRight}>
                <p className={styles.promptsLabel}>Example prompts:</p>
                {STYLE_SHOWCASE[activeStyle].prompts.map((p) => (
                  <div className={styles.promptRow} key={p}>
                    <span className={styles.promptRowText}>"{p}"</span>
                    <button
                      className={styles.promptCopyBtn}
                      onClick={() => copyPrompt(p)}
                      title="Copy prompt"
                      aria-label={`Copy prompt: ${p}`}
                    >
                      {copiedPrompt === p ? "✓" : "⎘"}
                    </button>
                  </div>
                ))}
                <a
                  href={`${UTM_INLINE}&style=${STYLE_SHOWCASE[activeStyle].style}`}
                  className={styles.styleTryBtn}
                  rel="noopener"
                  style={{
                    background: STYLE_SHOWCASE[activeStyle].color,
                  }}
                >
                  Try {STYLE_SHOWCASE[activeStyle].style} Style →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            USE CASES DEEP DIVE
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="usecases-h2">
          <div className={styles.sectionTag}>Use Cases</div>
          <h2 id="usecases-h2" className={styles.h2}>
            8 Ways to Use AI-Generated Backgrounds in 2026
          </h2>
          <p className={styles.sectionDesc}>
            Every content creator, marketer, developer, and designer has a
            different problem. Here's how AI background generation solves each one:
          </p>

          <div className={styles.useCaseList}>
            {USE_CASE_DEEP.map((uc) => (
              <article className={styles.useCaseItem} key={uc.title}>
                <div className={styles.useCaseHeader}>
                  <span className={styles.useCaseIcon}>{uc.icon}</span>
                  <div>
                    <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                    <p className={styles.useCaseSubtitle}>{uc.subtitle}</p>
                  </div>
                </div>
                <p className={styles.useCaseBody}>{uc.body}</p>
                <div className={styles.useCaseBottom}>
                  <div className={styles.useCasePrompt}>
                    <span className={styles.useCasePromptLabel}>Try this prompt:</span>
                    <span className={styles.useCasePromptText}>
                      "{uc.promptExample}"
                    </span>
                    <button
                      className={styles.useCaseCopyBtn}
                      onClick={() => copyPrompt(uc.promptExample)}
                      aria-label="Copy example prompt"
                    >
                      {copiedPrompt === uc.promptExample ? "Copied ✓" : "Copy prompt ⎘"}
                    </button>
                  </div>
                  <div className={styles.useCaseStat}>
                    <span>📊</span> {uc.stat}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.ctaCenter}>
            <a href={UTM_INLINE} className={styles.btnPrimary} rel="noopener">
              🎨 Generate Your Background Now — Free
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROMPT LIBRARY
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="prompts-h2">
          <div className={styles.sectionTag}>Prompt Library</div>
          <h2 id="prompts-h2" className={styles.h2}>
            30 Ready-to-Use AI Background Prompts (Copy & Generate)
          </h2>
          <p className={styles.sectionDesc}>
            Not sure what to type? Start with any of these proven prompts. Click
            to copy, then paste directly into the generator:
          </p>

          <div className={styles.promptLibrary}>
            {PROMPT_LIBRARY.map((cat) => (
              <div key={cat.category} className={styles.promptCat}>
                <h3 className={styles.promptCatTitle}>{cat.category}</h3>
                <div className={styles.promptCatItems}>
                  {cat.items.map((p) => (
                    <button
                      key={p}
                      className={styles.promptItem}
                      onClick={() => copyPrompt(p)}
                      title="Click to copy this prompt"
                    >
                      <span className={styles.promptItemText}>"{p}"</span>
                      <span className={styles.promptItemAction}>
                        {copiedPrompt === p ? "Copied ✓" : "Copy & use →"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.promptLibraryCta}>
            <p>
              Copy any prompt above, then paste it into the generator to create your background:
            </p>
            <a href={UTM_INLINE} className={styles.btnPrimary} rel="noopener">
              Open the AI Background Generator →
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WRITING GREAT BACKGROUND PROMPTS (GUIDE)
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="guide-h2">
          <div className={styles.guideCard}>
            <div className={styles.sectionTag}>Expert Guide</div>
            <h2 id="guide-h2" className={styles.h2}>
              The Complete Guide to Writing Background Prompts That Actually Work
            </h2>
            <div className={styles.prose}>
              <p>
                Background images have specific requirements that differ from
                portrait or subject photography. A good background needs to{" "}
                <strong>recede</strong> — it should support your content, not
                compete with it. Here's how to prompt specifically for
                backgrounds:
              </p>

              <h3>1. Always State That It's a Background</h3>
              <p>
                Add the phrase <em>"background image"</em>,{" "}
                <em>"wide landscape format"</em>, or{" "}
                <em>"panoramic composition"</em> to your prompt. Without this,
                the AI tends to center a subject in the frame — perfect for a
                portrait, bad for a background that will have text overlaid on
                top. Telling the model explicitly that this is a background guides
                it toward broader, more open compositions.
              </p>

              <h3>2. Specify Depth and Negative Space Intentionally</h3>
              <p>
                For backgrounds that will have content overlaid (websites, slides,
                thumbnails), you need clear areas where text or UI elements can
                sit. Prompts like "with open sky in the upper third" or "soft
                blurred foreground, darker area on the left for text overlay" give
                you usable negative space. The alternative — a beautifully
                complex image with detail everywhere — looks great on its own but
                becomes cluttered as a background once content is placed on top.
              </p>

              <h3>3. Color Palette as Constraint, Not Afterthought</h3>
              <p>
                Background images that work in real applications are almost always
                built around a tight color palette. Rather than describing the
                scene and hoping the colors come out right, lead with the palette:{" "}
                <em>
                  "Monochromatic deep teal palette, three shades of teal only,
                  misty forest scene."
                </em>{" "}
                Color specificity dramatically improves how usable the background
                is across different contexts — especially important for brand
                applications where off-brand colors are unusable.
              </p>

              <h3>4. Use Lighting Description to Control Mood</h3>
              <p>
                Lighting is the emotional language of backgrounds. "Harsh direct
                sunlight" creates energy and drama. "Soft overcast diffused light"
                creates calm and professional neutrality. "Dramatic side lighting
                with deep shadows" creates luxury and intrigue. "Warm golden hour
                backlighting" creates nostalgia and approachability. Naming your
                lighting style is often more impactful than any other single
                element of your prompt.
              </p>

              <h3>5. Match the Orientation to Your Use Case</h3>
              <p>
                Different backgrounds need different proportions. For website hero
                backgrounds: wide horizontal (16:9 or even wider). For social
                media posts and phone wallpapers: square or portrait (1:1 or
                9:16). For presentation slides: 16:9 exactly. While the generator
                outputs a square format by default, you can add phrasing like
                "wide horizontal composition" or "tall portrait format" to guide
                the compositional choice within the generated frame.
              </p>

              <h3>6. The "Negative Space First" Strategy</h3>
              <p>
                If you already know what content will sit on top of your
                background, build the prompt around that constraint. If your hero
                text sits on the left third of the screen, write:{" "}
                <em>
                  "Open negative space on the left third of the image, dark
                  gradient fading to near-black on the left, detailed scene
                  content on the right, seamless transition"
                </em>
                . This approach produces backgrounds that work immediately as
                practical design assets rather than just aesthetically pleasing
                images.
              </p>

              <h3>7. Iterate Fast: The 3-Prompt System</h3>
              <p>
                Professional designers typically don't get the background they
                want on the first generation. The most efficient workflow is the
                3-prompt system: generate a broad first version to establish the
                mood, then generate a second version with specific changes to
                improve what didn't work, then finalize with exact tweaks. Save
                prompts that are working well — each saved prompt is a reusable
                asset. Build a prompt library of 10–15 background archetypes that
                reliably produce on-brand results, and you've essentially created
                a custom visual system.
              </p>

              <h3>8. Style Keywords That Reliably Produce Great Backgrounds</h3>
              <p>
                Certain words reliably steer AI models toward background-appropriate
                aesthetics. For professional use: "subtle", "minimal", "clean",
                "muted tones", "desaturated", "atmospheric", "understated". For
                creative use: "cinematic", "editorial", "bold", "dramatic
                contrast", "vivid", "painterly", "textured". For elegant use:
                "luxury", "refined", "sophisticated", "fine art", "gallery
                quality". Always end your prompt with 3–4 quality-steering words
                that match your target aesthetic.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            AI MODELS COMPARISON
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="models-h2">
          <div className={styles.sectionTag}>Model Guide</div>
          <h2 id="models-h2" className={styles.h2}>
            Which AI Model Creates the Best Backgrounds?
          </h2>
          <p className={styles.sectionDesc}>
            Scenith gives you access to 7 AI image models. Each excels at
            different types of backgrounds. Here's how to choose:
          </p>

          <div className={styles.modelTable}>
            {[
              {
                model: "Stability AI Core",
                cost: "2 cr",
                bestFor: "Abstract patterns, textures, artistic backgrounds",
                speed: "Fastest",
                quality: "Good",
                tip: "Best starting point for abstract and texture-based backgrounds. Excellent for rapid iteration.",
              },
              {
                model: "GPT Image 1 Mini",
                cost: "3 cr",
                bestFor: "Concept backgrounds, editorial styles, creative compositions",
                speed: "Fast",
                quality: "Good",
                tip: "Strong on conceptual prompts. Good balance of speed and quality for most background needs.",
              },
              {
                model: "Imagen 4 Fast",
                cost: "5 cr",
                bestFor: "Nature landscapes, atmospheric scenes, color-accurate backgrounds",
                speed: "Fast",
                quality: "Very Good",
                tip: "Google's Imagen model excels at naturalistic scenes. Best for landscape and nature backgrounds.",
              },
              {
                model: "FLUX 1.1 Pro",
                cost: "7 cr",
                bestFor: "Artistic styles, painterly backgrounds, high-detail textures",
                speed: "Medium",
                quality: "Excellent",
                tip: "Top choice for artistic and painterly backgrounds. Outstanding at following complex style prompts.",
              },
              {
                model: "Imagen 4 Standard",
                cost: "8 cr",
                bestFor: "Photorealistic backgrounds, product photography settings, professional use",
                speed: "Medium",
                quality: "Excellent",
                tip: "The best model for photorealistic output. Use for backgrounds that need to look like real photography.",
              },
              {
                model: "GPT Image 1 Medium",
                cost: "10 cr",
                bestFor: "Complex compositions, high-quality all-around, premium results",
                speed: "Medium",
                quality: "Highest",
                tip: "The premium choice for high-stakes applications. Best overall quality for client work and final production.",
              },
            ].map((m, i) => (
              <div className={styles.modelRow} key={m.model}>
                <div className={styles.modelRowNum}>{String(i + 1).padStart(2, "0")}</div>
                <div className={styles.modelRowMain}>
                  <div className={styles.modelRowTop}>
                    <strong className={styles.modelRowName}>{m.model}</strong>
                    <span className={styles.modelRowCost}>{m.cost} / image</span>
                    <span className={styles.modelRowSpeed}>{m.speed}</span>
                    <span className={styles.modelRowQ}>{m.quality}</span>
                  </div>
                  <p className={styles.modelRowBest}>Best for: {m.bestFor}</p>
                  <p className={styles.modelRowTip}>💡 {m.tip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaCenter}>
            <a href={UTM_INLINE} className={styles.btnPrimary} rel="noopener">
              Try All 6 Models Free →
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            THE BIG CTA BLOCK
        ═══════════════════════════════════════════ */}
        <section className={styles.bigCta} aria-labelledby="cta-h2">
          <div className={styles.bigCtaGlow} aria-hidden="true" />
          <div className={styles.bigCtaInner}>
            <div className={styles.bigCtaBadge}>Free to start · No card needed</div>
            <h2 id="cta-h2" className={styles.bigCtaTitle}>
              Generate Your First Custom
              <br />
              AI Background Right Now
            </h2>
            <p className={styles.bigCtaBody}>
              50 free credits waiting. Access to 6 AI models. 8 art styles.
              Watermark-free PNG downloads. Commercial use included.
              Your first background is one prompt away.
            </p>
            <a href={UTM_HERO} className={styles.bigCtaBtn} rel="noopener">
              <span className={styles.btnShine} aria-hidden="true" />
              🎨 Open AI Background Generator — Free
            </a>
            <div className={styles.bigCtaFeatures}>
              {[
                "✓ Stability AI, FLUX, GPT Image 1, Imagen 4",
                "✓ Website, YouTube, Zoom, Streaming",
                "✓ Watermark-free downloads",
                "✓ Commercial use included",
                "✓ No design skills needed",
                "✓ Results in under 15 seconds",
              ].map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PLATFORM-SPECIFIC GUIDE
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="platforms-h2">
          <div className={styles.sectionTag}>Platform Guide</div>
          <h2 id="platforms-h2" className={styles.h2}>
            AI Background Best Practices for Every Platform
          </h2>
          <div className={styles.prose}>
            <h3>Website Background Images</h3>
            <p>
              Website backgrounds need to serve two masters: aesthetics and
              performance. AI-generated backgrounds are typically 1–3MB as PNGs,
              which is acceptable for hero sections but should be converted to
              WEBP for use as full-page or repeating backgrounds. For the best
              results: generate in a neutral palette that your brand typography
              will be readable on, apply a CSS overlay (e.g.,{" "}
              <code>rgba(0,0,0,0.4)</code>) for text contrast, and export both a
              full-size and a compressed version for above-the-fold use.
              Backgrounds with strong compositional asymmetry — detail on one
              side, open space on the other — convert well for responsive designs
              where the image is cropped differently on mobile.
            </p>

            <h3>YouTube Channel Art Dimensions</h3>
            <p>
              YouTube channel art displays at vastly different dimensions
              depending on the device: 2560×1440px on TV, 1546×423px on desktop,
              1546×423px on tablet, and the banner is essentially invisible on
              mobile (only 1546×196px is shown). The AI generates 1024×1024, so
              you'll need to place it in a canvas of 2560×1440 in Canva or your
              editor of choice. The safe zone where content is visible on all
              devices is the central 1546×423 area. Generate backgrounds with a
              wide, panoramic composition and important visual elements centered
              in the middle third.
            </p>

            <h3>Zoom & Video Call Backgrounds</h3>
            <p>
              Zoom, Google Meet, and Microsoft Teams all support custom virtual
              backgrounds at 1920×1080 (16:9 ratio). The ideal AI background for
              video calls has: depth blur / bokeh that suggests a real space, a
              neutral or complementary color palette that doesn't clash with your
              skin tone and clothing, and no busy details that would trigger your
              platform's edge-detection to fail (which makes your head look like
              it's floating). Prompt specifically for: "soft background blur,
              bokeh depth of field, suggests interior space, professional and
              warm." This describes the photographic behavior you want rather than
              just the scene.
            </p>

            <h3>Streaming Backgrounds & OBS Scenes</h3>
            <p>
              Streamers using OBS, Streamlabs, or Twitch Studio use backgrounds
              in multiple ways: as "just chatting" scene backgrounds, as
              starting-soon and BRB screen backgrounds, and as frame borders. The
              standard stream canvas is 1920×1080. For starting-soon screens,
              generate a darker background (dark colors allow text overlays to be
              easily readable). For animated stream scenes, generate a static
              background and animate specific elements (an Animated GIF of
              particle effects, a loop of a candle flame) on top using OBS
              compositing. Use the AI background as your base layer.
            </p>

            <h3>Presentation Backgrounds (Google Slides, PowerPoint, Keynote)</h3>
            <p>
              The single most common mistake in presentation design is backgrounds
              that are too busy. Your slides need to communicate information
              clearly — the background is there to create atmosphere, not to
              compete with your data. For professional presentations: generate
              very subtle textures or gradients (50% opacity if applied via CSS,
              or use a darkened/lightened version in your editor). For dramatic
              conference talks or keynotes: full bleed cinematic backgrounds with
              white text work powerfully, but every slide becomes a commitment to
              that aesthetic. Test at full screen before committing to a
              presentation-wide background.
            </p>

            <h3>Social Media Background Best Practices</h3>
            <p>
              Each social platform has different optimal background strategies.
              Instagram feed posts: square (1:1) backgrounds with clean
              compositions that look good as thumbnails. Instagram Stories/Reels:
              9:16 portrait backgrounds with subject space in the upper two-thirds
              (text/stickers go at the bottom third). Pinterest: tall vertical
              (2:3) backgrounds that take up more real estate in the feed and stop
              the scroll. LinkedIn: horizontal (1.91:1) backgrounds for
              professional aesthetic. Twitter/X: use square or horizontal
              backgrounds for quote graphics. The AI generates square by default
              — select "portrait" or "landscape" in your prompt to get the
              compositional balance right.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COMPARISON TABLE
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="compare-h2">
          <div className={styles.sectionTag}>Comparison</div>
          <h2 id="compare-h2" className={styles.h2}>
            AI Background Generator vs Traditional Methods
          </h2>
          <p className={styles.sectionDesc}>
            Here's an honest comparison of what you get with different approaches
            to sourcing background images:
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Method</th>
                  <th className={styles.thHighlight}>Scenith AI</th>
                  <th>Stock Photography</th>
                  <th>Hire a Designer</th>
                  <th>DIY Photography</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Time to first result", "< 15 seconds", "Minutes (searching)", "Days–weeks", "Hours–days"],
                  ["Cost", "Free / from $9/mo", "$10–$50 per image", "$50–$500 per asset", "Equipment + time"],
                  ["Uniqueness", "100% unique", "Used by millions", "100% unique", "100% unique"],
                  ["Commercial rights", "✓ Included", "License required", "✓ Included", "✓ Owned"],
                  ["Style flexibility", "Unlimited styles", "Limited to library", "Any style", "Limited by skills"],
                  ["Iteration speed", "Seconds per variant", "Manual search", "Days per revision", "Re-shoot required"],
                  ["Watermarks", "None", "On free tier", "None", "None"],
                  ["Brand specificity", "Exact to prompt", "Approximate match", "Exact brief", "Approximate"],
                  ["Volume", "Unlimited", "Per license", "Budget limited", "Time limited"],
                ].map(([feat, scenith, stock, designer, diy]) => (
                  <tr key={feat as string}>
                    <td className={styles.tdFeat}>{feat}</td>
                    <td className={styles.tdHighlight}>{scenith}</td>
                    <td>{stock}</td>
                    <td>{designer}</td>
                    <td>{diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.ctaCenter}>
            <a href={UTM_INLINE} className={styles.btnPrimary} rel="noopener">
              Try Scenith Free — No Card Required
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="faq-h2">
          <div className={styles.sectionTag}>FAQ</div>
          <h2 id="faq-h2" className={styles.h2}>
            Frequently Asked Questions — AI Background Image Generator
          </h2>

          <div className={styles.faqList}>
            {[
              {
                q: "Is the AI background generator completely free?",
                a: (
                  <p>
                    Creating a Scenith account is completely free with no credit card
                    required. You receive generation credits immediately that you can
                    use on any AI model. Paid plans start at $9/month if you need
                    higher volume.{" "}
                    <a href={UTM_FAQ} rel="noopener">
                      Create your free account here →
                    </a>
                  </p>
                ),
              },
              {
                q: "What's the resolution of AI-generated backgrounds?",
                a: (
                  <p>
                    Backgrounds are generated at 1024×1024 pixels by default, which is
                    suitable for web, social media, presentations, and standard displays.
                    For larger formats like desktop wallpapers (1920×1080 or 4K), use the
                    Scenith image editor to upscale, or use a third-party upscaling tool
                    like Topaz Gigapixel AI after downloading your background.
                  </p>
                ),
              },
              {
                q: "Can I use AI backgrounds on my website commercially?",
                a: (
                  <p>
                    Yes. All images generated through Scenith are royalty-free and cleared
                    for any commercial use: websites, YouTube, client projects, marketing
                    materials, print products, merchandise, and resale as part of a
                    service. No attribution required, no licensing fees, no territory
                    restrictions.
                  </p>
                ),
              },
              {
                q: "How do I create a background without a subject in the middle?",
                a: (
                  <p>
                    Add phrasing like{" "}
                    <em>
                      "background image, no central subject, open composition, texture
                      only"
                    </em>{" "}
                    to your prompt. For abstract backgrounds: describe only the texture,
                    gradient, or pattern without naming a subject. For landscape
                    backgrounds: specify "wide panoramic view with sky in upper half, no
                    foreground subject, clean horizon line." These instructions guide the
                    model away from centering a specific object.
                  </p>
                ),
              },
              {
                q: "Can I create seamless repeating patterns for websites?",
                a: (
                  <p>
                    To increase chances of a tileable result, add "seamless pattern,
                    repeating tile, no visible edges" to an abstract or geometric prompt.
                    Purely geometric or abstract patterns tile more reliably than natural
                    scenes. For guaranteed seamless results, use CSS{" "}
                    <code>background-repeat: repeat</code> with a centered or symmetrical
                    pattern that doesn't have strong directional elements that would show
                    seams.
                  </p>
                ),
              },
              {
                q: "Which AI model should I use for photorealistic backgrounds?",
                a: (
                  <p>
                    For photorealistic backgrounds — nature landscapes, studio setups,
                    architectural spaces — use{" "}
                    <strong>Imagen 4 Standard</strong> or{" "}
                    <strong>GPT Image 1 Medium</strong>. These models produce the most
                    convincingly photographic output. Add "photography" or "photorealistic"
                    to your prompt and select the Realistic Photo style preset for the
                    best results.
                  </p>
                ),
              },
              {
                q: "Can I make a custom Zoom background with AI?",
                a: (
                  <p>
                    Absolutely. Generate your background with a prompt like "professional
                    home office bookshelf, warm lighting, blurred background, video call
                    background" then download the PNG and upload directly to Zoom at
                    Settings → Background & Effects → Virtual Backgrounds → + Add Image.
                    The same process works for Google Meet and Microsoft Teams.
                  </p>
                ),
              },
              {
                q: "What is the difference between background generation and full image generation?",
                a: (
                  <p>
                    Standard AI image generation creates any image — portraits, products,
                    characters, scenes with central subjects. AI background generation is a
                    specific use case where you prompt the AI to create images suitable as
                    backgrounds: open compositions, no dominant foreground subjects, wide
                    format aesthetics, and color/tone choices that work behind other
                    content. You can use the same AI image generator for both — the
                    difference is in how you write your prompt.
                  </p>
                ),
              },
              {
                q: "How many background variations can I generate?",
                a: (
                  <p>
                    As many as your credits allow. Each generation uses a set number of
                    credits depending on the model (2–10 credits per image). Free accounts
                    receive credits on signup. Paid plans on Scenith start at $9/month and
                    include significantly more credits for ongoing content creation.
                    Professional content creators and agencies typically use 50–200 credits
                    per month.
                  </p>
                ),
              },
              {
                q: "Can I edit AI backgrounds after generation?",
                a: (
                  <p>
                    Yes. After generating your background, click "Edit in Editor" to open
                    it in Scenith's built-in image editor where you can add text overlays,
                    apply color filters, adjust brightness/contrast, crop to different
                    aspect ratios, add graphic elements, and export in various formats.
                    You can also download the PNG and edit it in any external tool: Canva,
                    Photoshop, Figma, GIMP, or Affinity Photo.
                  </p>
                ),
              },
            ].map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════ */}
        <section className={styles.finalCta} aria-labelledby="final-h2">
          <div className={styles.finalCtaBg} aria-hidden="true" />
          <span className={styles.finalCtaEyebrow}>Free forever · No credit card · Instant access</span>
          <h2 id="final-h2" className={styles.finalCtaTitle}>
            Your Perfect Background is
            <br />
            One Prompt Away
          </h2>
          <p className={styles.finalCtaDesc}>
            Join designers, creators, and marketers who are generating custom
            backgrounds for every project in seconds. No subscriptions required to
            start. No templates. No stock libraries. Just your idea and the AI.
          </p>
          <a href={UTM_BOTTOM} className={styles.bigCtaBtn} rel="noopener">
            <span className={styles.btnShine} aria-hidden="true" />
            🎨 Generate Free AI Backgrounds Now
          </a>
          <div className={styles.finalCtaFeatures}>
            {[
              "✓ Website & App Backgrounds",
              "✓ YouTube & Streaming",
              "✓ Zoom & Video Calls",
              "✓ Presentations & Slides",
              "✓ Social Media",
              "✓ Wallpapers",
              "✓ 8 Art Styles",
              "✓ 6 AI Models",
            ].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </section>

        {/* ── Footer nav ── */}
        <nav className={styles.footerNav} aria-label="Related pages">
          <a href="/tools">← All AI Tools</a>
          <a href="/tools/ai-image-generation">AI Image Generator</a>
          <a href="/tools/image-editing">Image Editor</a>
          <a href="/pricing">Pricing & Plans</a>
        </nav>

        <div style={{ height: 60 }} />
      </div>
    </main>
  );
}