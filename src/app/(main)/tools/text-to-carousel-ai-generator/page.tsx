import type { Metadata } from "next";
import Link from "next/link";
import "./carousel-tool.css";

export const metadata: Metadata = {
  title: "Text to Carousel AI Generator — Create Scroll-Stopping Carousels in Seconds | Scenith",
  description:
    "Generate stunning AI carousel images from text prompts. Perfect for LinkedIn, Instagram & social media. Create 3-slide carousel posts with Imagen 4, GPT Image, FLUX & more. Free to try — no design skills needed.",
  keywords: [
    "text to carousel AI generator",
    "AI carousel generator",
    "carousel image generator AI",
    "LinkedIn carousel generator AI",
    "Instagram carousel maker AI",
    "AI social media carousel",
    "carousel post generator",
    "text to image carousel",
    "AI image carousel creator",
    "free carousel generator AI",
    "carousel slide generator",
    "AI content carousel",
    "carousel maker for LinkedIn",
    "social media carousel AI",
    "automatic carousel generator",
  ],
  openGraph: {
    title: "Text to Carousel AI Generator — Scroll-Stopping Carousels in Seconds",
    description:
      "Turn any text into a 3-slide AI carousel. Perfect for LinkedIn, Instagram, and social content. Powered by GPT Image, Imagen 4, FLUX, and more.",
    url: "https://scenith.in/tools/text-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/carousel-tool-og.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Text to Carousel AI Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text to Carousel AI Generator | Scenith",
    description:
      "Generate 3-slide AI carousel posts from text prompts. LinkedIn & Instagram ready. Free to try.",
    images: ["https://cdn.scenith.in/og/carousel-tool-og.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/text-to-carousel-ai-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&mode=carousel&utm_source=carousel_tool_page&utm_medium=cta_button&utm_campaign=text_to_carousel_seo_2026";

const MODEL_LOGOS: { src: string; name: string }[] = [
  { src: "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp", name: "GPT Image" },
  { src: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp", name: "Imagen 4" },
  { src: "https://cdn.scenith.in/brand-logos/Flux%20logo.png", name: "FLUX 1.1" },
  { src: "https://cdn.scenith.in/brand-logos/Stability%20logo.png", name: "Stability AI" },
  { src: "https://cdn.scenith.in/brand-logos/Grok.png", name: "Grok Aurora" },
];

const USE_CASES = [
  {
    icon: "💼",
    platform: "LinkedIn",
    title: "LinkedIn Thought Leadership Carousels",
    desc: "The LinkedIn algorithm rewards carousel posts with 3× more impressions than single images. AI-generated carousels let you consistently publish polished 3-slide visual stories about your expertise, industry data, or career lessons — without spending hours in Canva.",
    stats: "Carousels get 3× more impressions on LinkedIn",
  },
  {
    icon: "📱",
    platform: "Instagram",
    title: "Instagram Edu-tainment Slide Decks",
    desc: "Instagram's algorithm favors 'save' and 'swipe' behaviors over likes. Educational carousel posts — tips, how-tos, before/afters — get saved 5× more than single-image posts. With AI-generated carousels, you can batch-create a week's worth of swipeable content in minutes.",
    stats: "Edu-carousels get 5× more saves on Instagram",
  },
  {
    icon: "🛍️",
    platform: "E-commerce",
    title: "Product Showcase Carousels",
    desc: "Showcase your product from multiple angles and contexts without a professional shoot. Generate 3 unique visual styles for the same product — lifestyle, closeup, and aspirational — and let customers swipe through each. Proven to increase product page time-on-site by up to 40%.",
    stats: "Multi-image posts drive 40% more time on page",
  },
  {
    icon: "🎓",
    platform: "EdTech",
    title: "Educational Step-by-Step Guides",
    desc: "Break complex topics into 3 visual beats. Each slide shows one concept, making learning digestible. AI-generated carousels for step-by-step guides, numbered listicles, or historical timelines are shared 2× more than blog posts covering the same topic.",
    stats: "Visual guides are shared 2× more than blog posts",
  },
  {
    icon: "🏢",
    platform: "B2B",
    title: "B2B Case Study & Data Carousels",
    desc: "Turn a data story into 3 visual moments: the problem, the approach, the result. AI imagery makes your results feel real and polished without a design team. Perfect for agency portfolios, SaaS case studies, and consultant authority content.",
    stats: "Data visuals generate 94% more total views",
  },
  {
    icon: "🎨",
    platform: "Personal Brand",
    title: "Personal Brand Story Carousels",
    desc: "Your audience connects with your journey. A 3-slide carousel — 'Where I started → What changed → Where I am now' — outperforms almost every other post format on LinkedIn for personal brand growth. AI handles the visuals; you supply the story.",
    stats: "Story carousels grow personal brand followers 2× faster",
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Write Your Slide Prompts",
    desc: "Describe each of your 3 slides separately using plain English. You don't need design vocabulary — just tell the AI what you want to show. 'A confident professional presenting data on a glass screen in a modern office' works perfectly.",
  },
  {
    num: "02",
    title: "Choose Your AI Model & Style",
    desc: "Pick from 7 state-of-the-art models including GPT Image 1, Imagen 4, FLUX 1.1 Pro, Grok Aurora, and Stability AI Core. Then select a visual style — realistic, digital art, cinematic, flat illustration, or anime. Each slide inherits your global style for a cohesive look.",
  },
  {
    num: "03",
    title: "Optionally Add Reference Images",
    desc: "Upload a single shared reference image for all 3 slides (great for consistent product visuals or character consistency), or upload unique reference images per slide for maximum creative control. Image-to-image mode is supported on GPT Image, Stability AI, and Grok Aurora.",
  },
  {
    num: "04",
    title: "Generate All 3 Slides Simultaneously",
    desc: "Hit Generate and watch the AI produce all 3 slides in sequence. Each slide processes independently, so if one model run stumbles (rare), your other slides are safe. Total generation time is typically 30–90 seconds for all 3 slides combined.",
  },
  {
    num: "05",
    title: "Preview, Swipe, and Download",
    desc: "Review your carousel in an interactive swipeable viewer right inside Scenith. Navigate with arrows or dot indicators, inspect each slide at full resolution, and download individual slides as high-res PNGs — or batch download all 3 in one click.",
  },
];

const STYLE_OPTIONS = [
  { emoji: "📷", name: "Realistic", desc: "Photorealistic, cinematic lighting — indistinguishable from photography" },
  { emoji: "🎨", name: "Artistic", desc: "Bold painterly strokes, rich colours, gallery-quality composition" },
  { emoji: "💻", name: "Digital Art", desc: "Clean rendered 3D, concept-art lighting, modern illustration" },
  { emoji: "🎌", name: "Anime", desc: "Japanese animation-inspired characters and environments" },
  { emoji: "🧙", name: "Fantasy", desc: "Magical worlds, epic environments, mythical characters" },
  { emoji: "🚀", name: "Sci-Fi", desc: "Futuristic technology, neon environments, cyberpunk aesthetics" },
  { emoji: "🎮", name: "3D Render", desc: "Product-quality 3D renders with studio lighting" },
  { emoji: "📼", name: "Vintage", desc: "Film grain, muted tones, nostalgic 70s–90s aesthetics" },
];

const COMPARISON_ROWS = [
  { feature: "Time to create 3 slides", manual: "2–4 hours in Canva/PS", aiWay: "30–90 seconds" },
  { feature: "Design skill required", manual: "Intermediate to expert", aiWay: "Zero — plain English prompts" },
  { feature: "Cost per carousel", manual: "$25–$150 (freelancer/tool)", aiWay: "As low as 30 credits (~$0.30)" },
  { feature: "Visual consistency across slides", manual: "Hard — manual effort", aiWay: "Automatic — shared style system" },
  { feature: "Reference image support", manual: "Manual placement in tool", aiWay: "Built-in img2img per slide or shared" },
  { feature: "AI model variety", manual: "Not applicable", aiWay: "7 models — GPT, Imagen 4, FLUX & more" },
  { feature: "Commercial rights", manual: "Varies by asset", aiWay: "Full commercial rights on all outputs" },
  { feature: "Resolution", manual: "Limited by template", aiWay: "2K native output per slide" },
];

const FAQS = [
  {
    q: "What is a text to carousel AI generator?",
    a: "A text to carousel AI generator converts plain text descriptions into a series of cohesive AI-generated images — typically 3 slides — formatted for social media carousel posts on LinkedIn, Instagram, and similar platforms. Instead of manually designing each slide in Canva or Photoshop, you describe what each slide should look like and the AI renders it at high resolution within seconds. Scenith's carousel tool goes further by letting you choose from 7 state-of-the-art AI models including GPT Image 1 (OpenAI), Imagen 4 (Google), FLUX 1.1 Pro, Grok Aurora, and Stability AI Core.",
  },
  {
    q: "Are AI-generated carousels allowed on LinkedIn and Instagram?",
    a: "Yes. Both LinkedIn and Instagram permit AI-generated image content as long as it doesn't violate their community guidelines or constitute misleading synthetic media (e.g., AI-generated photos of real people presented as real). For brand carousels, educational content, product showcases, and thought leadership posts — all common carousel formats — AI-generated imagery is fully permitted and widely used by top creators and brands in 2025–2026.",
  },
  {
    q: "How many slides can I generate per carousel?",
    a: "Scenith's carousel tool currently generates 3 slides per carousel — the optimal number for algorithm performance on both LinkedIn and Instagram. Research consistently shows that 3–7 slide carousels outperform longer decks in terms of completion rate and shares. Each of the 3 slides can have its own unique prompt, its own reference image, and is generated independently using the selected AI model.",
  },
  {
    q: "What image resolution does the carousel generator output?",
    a: "All carousel slides are generated at 2K resolution (2048px on the long edge), giving you sharp, print-quality images that look exceptional on any screen. The output format is PNG with full colour fidelity. For square (1:1) carousels — ideal for Instagram — the output is 2048×2048px. Portrait (9:16) slides for Instagram Stories or LinkedIn mobile are proportionally scaled to 2K.",
  },
  {
    q: "Can I use the same reference image for all 3 slides?",
    a: "Yes. Scenith's carousel tool has a dedicated 'shared reference image' toggle. When enabled, you upload one image that is applied to all 3 slides as the img2img base. This is perfect for product consistency (same product, different scenes), brand character consistency, or location continuity. Alternatively, you can upload a unique reference image per slide for maximum creative flexibility.",
  },
  {
    q: "Which AI model is best for LinkedIn carousel images?",
    a: "For professional LinkedIn carousel content, we recommend GPT Image 1 Medium (for detailed, realistic corporate imagery), Imagen 4 Standard (for clean, high-detail professional visuals), or Grok Aurora (for modern photorealistic 2K imagery). For more creative or brand-forward carousels, FLUX 1.1 Pro and Stability AI Core produce excellent results in artistic and digital-art styles. The best model depends on your brand aesthetic and the style of content you're creating.",
  },
  {
    q: "Is the carousel AI generator free?",
    a: "Scenith offers 50 free credits on sign-up — no credit card required. A single carousel (3 slides) costs between 30 and 90 credits depending on the model selected, meaning your free credits can generate at least one full carousel and potentially more. Paid plans start at $9/month and include 300 credits monthly, with full access to all 7 AI image models including GPT Image 1 Medium and Imagen 4 Standard.",
  },
  {
    q: "Can I download individual slides or only the full carousel?",
    a: "Both. In Scenith's carousel result viewer, each individual slide has its own Download button so you can save exactly the slides you want. You can also download all completed slides in sequence. All downloads are high-resolution PNG files with no watermarks and full commercial usage rights.",
  },
  {
    q: "How is this different from Canva's AI image feature?",
    a: "Canva's AI image tool generates single images and requires you to manually arrange them into a carousel template with text overlays, borders, and brand assets — a process that still takes 30–60 minutes per carousel. Scenith's carousel tool generates all 3 slides from text prompts simultaneously, with a shared style system that ensures visual consistency across slides. There's no template layout required, no Canva drag-and-drop — just prompts in, carousel out.",
  },
  {
    q: "Does the carousel tool support non-English prompts?",
    a: "Yes. All AI models on Scenith process prompts in any language, though English prompts generally produce the most predictable and high-quality results. If you're generating carousels for non-English markets, you can write your prompts in English but describe culturally specific content (e.g., 'Indian wedding celebration, Rajasthani architecture, golden marigold decorations') for localised visual output.",
  },
  {
    q: "Can I animate my carousel slides into a video?",
    a: "Yes — this is one of Scenith's most powerful cross-tool features. After generating your carousel, any individual slide can be sent directly to Scenith's AI Video Generator with one click. The selected slide becomes the reference frame for image-to-video generation using models like Kling 2.6 Pro, Veo 3.1, or Wan 2.5. You can transform a static carousel slide into a 5–10 second animated video clip — perfect for Instagram Reels, LinkedIn video posts, or YouTube Shorts.",
  },
  {
    q: "What aspect ratio should I use for LinkedIn carousels?",
    a: "LinkedIn displays carousels in a 1:1 (square) format in the feed on both desktop and mobile. Square (1:1) is the recommended aspect ratio for maximum visual real estate on LinkedIn. For Instagram feed carousels, 1:1 is also standard. For Instagram Stories or TikTok-style carousels designed to be screenshotted and re-shared, Portrait (9:16) gives you full-screen coverage.",
  },
];

const PROMPT_EXAMPLES = [
  {
    topic: "SaaS Product Launch",
    slides: [
      "Slide 1: A glowing SaaS dashboard on a dark glass screen inside a sleek modern office, soft blue ambient lighting, professional, editorial",
      "Slide 2: Animated data charts rising on a translucent holographic display, clean white background, digital art style, product-quality 3D",
      "Slide 3: A happy remote team collaborating via video call, warm morning light, cozy home office setup, authentic and photorealistic",
    ],
  },
  {
    topic: "LinkedIn Personal Brand",
    slides: [
      "Slide 1: A lone figure standing at the base of a massive mountain, dramatic sunrise, cinematic wide shot, metaphor for starting a journey",
      "Slide 2: The same figure halfway up the mountain, storm clouds clearing, rays of light breaking through, realistic dramatic photography",
      "Slide 3: Summit view, figure silhouetted against a golden sky, hands raised, ultra-cinematic, victory and achievement atmosphere",
    ],
  },
  {
    topic: "E-commerce Product (Skincare)",
    slides: [
      "Slide 1: Luxury skincare serum bottle on a marble surface with fresh botanical ingredients scattered around, soft natural morning light, editorial product photography",
      "Slide 2: Close-up macro shot of serum droplets on skin, glowing healthy complexion, extreme bokeh background, warm golden light",
      "Slide 3: Minimalist flat lay of the complete skincare range on white background, fresh green leaves, overhead shot, clean and premium",
    ],
  },
];

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/text-to-carousel-ai-generator",
      url: "https://scenith.in/tools/text-to-carousel-ai-generator",
      name: "Text to Carousel AI Generator — Create Scroll-Stopping Carousels in Seconds | Scenith",
      description:
        "Generate stunning AI carousel images from text prompts. Perfect for LinkedIn, Instagram & social media. Create 3-slide carousel posts with Imagen 4, GPT Image, FLUX & more.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: { "@id": "https://scenith.in/tools/text-to-carousel-ai-generator#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scenith.in/tools/text-to-carousel-ai-generator#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scenith", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        { "@type": "ListItem", position: 3, name: "Text to Carousel AI Generator", item: "https://scenith.in/tools/text-to-carousel-ai-generator" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Carousel Generator",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on signup. Paid plans from $9/month.",
      },
      featureList: [
        "Text to carousel image generation",
        "3-slide carousel generation",
        "7 AI image models",
        "LinkedIn and Instagram optimised",
        "Reference image support (img2img)",
        "2K resolution output",
        "Full commercial rights",
        "One-click video animation from carousel slides",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function TextToCarouselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON) }}
      />

      <div className="ct-page">

        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="ct-hero">
          <div className="ct-hero-bg-grid" aria-hidden="true" />
          <div className="ct-hero-noise" aria-hidden="true" />

          <div className="ct-hero-inner">
            <div className="ct-hero-badge">
              <span className="ct-badge-dot" />
              New in 2026 · 7 AI Models · 2K Resolution
            </div>

            <h1 className="ct-hero-title">
              Text to Carousel{" "}
              <span className="ct-hero-gradient">AI Generator</span>
            </h1>

            <p className="ct-hero-subtitle">
              Turn plain-text descriptions into 3-slide, scroll-stopping carousel
              posts for LinkedIn, Instagram, and beyond — in under 90 seconds.
              Powered by GPT Image 1, Imagen 4, FLUX 1.1 Pro, Grok Aurora &amp;
              more.
            </p>

            {/* Model logos */}
            <div className="ct-model-strip" aria-label="Supported AI models">
              {MODEL_LOGOS.map((m) => (
                <div className="ct-model-chip" key={m.name}>
                  <img src={m.src} alt={m.name} width={16} height={16} />
                  <span>{m.name}</span>
                </div>
              ))}
            </div>

            {/* ─── MEGA CTA ─── */}
            <div className="ct-cta-block">
              <Link href={CTA_URL} className="ct-cta-btn" target="_blank" rel="noopener">
                <span className="ct-cta-icon">🎠</span>
                <span className="ct-cta-text">
                  Generate My AI Carousel — Free
                </span>
                <span className="ct-cta-arrow">→</span>
              </Link>
              <p className="ct-cta-note">
                No credit card · 50 free credits on signup · Download high-res PNGs
              </p>
            </div>

            {/* ─── Mock carousel preview ─── */}
            <div className="ct-demo-carousel" aria-label="Example carousel preview">
              <div className="ct-demo-slides">
                <div className="ct-demo-slide ct-slide-1">
                  <div className="ct-slide-shimmer" />
                  <div className="ct-slide-label">Slide 1 ·  Problem</div>
                </div>
                <div className="ct-demo-slide ct-slide-2">
                  <div className="ct-slide-shimmer" />
                  <div className="ct-slide-label">Slide 2 ·  Solution</div>
                </div>
                <div className="ct-demo-slide ct-slide-3">
                  <div className="ct-slide-shimmer" />
                  <div className="ct-slide-label">Slide 3 ·  Result</div>
                </div>
              </div>
              <div className="ct-demo-dots">
                <span className="ct-dot ct-dot-active" />
                <span className="ct-dot" />
                <span className="ct-dot" />
              </div>
              <div className="ct-demo-badge">
                <span>⚡ AI generated in 90s</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STATS BAND ───────────────────────────────────────────── */}
        <section className="ct-stats-band" aria-label="Key statistics">
          <div className="ct-stats-inner">
            {[
              { val: "3×", label: "More LinkedIn impressions with carousels" },
              { val: "5×", label: "More Instagram saves vs single images" },
              { val: "90s", label: "Average time to generate all 3 slides" },
              { val: "7", label: "State-of-the-art AI image models" },
              { val: "2K", label: "Resolution output — no watermarks" },
              { val: "$0", label: "To start — 50 free credits on signup" },
            ].map((s) => (
              <div className="ct-stat" key={s.val}>
                <span className="ct-stat-val">{s.val}</span>
                <span className="ct-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHY CAROUSELS WIN ────────────────────────────────────── */}
        <section className="ct-section ct-section-why">
          <div className="ct-section-inner">
            <div className="ct-section-label">The Algorithm Truth</div>
            <h2 className="ct-section-title">
              Why Carousel Posts Dominate Social Media in 2026
            </h2>
            <div className="ct-section-body">
              <p>
                Carousel posts are the highest-performing organic content format on both LinkedIn
                and Instagram — and have been since 2022. The reason is algorithmic: carousel
                posts require the viewer to actively swipe, which signals engagement to the
                platform&apos;s ranking algorithm. Every swipe tells the algorithm that the content
                is compelling enough to interact with, triggering wider distribution.
              </p>
              <p>
                On LinkedIn, native document carousels (PDF-style slide decks) consistently
                achieve 3–5× more impressions than single image posts at equivalent follower
                counts. On Instagram, carousel posts have a second-chance distribution mechanic:
                if a user doesn&apos;t engage with the first slide, Instagram will re-surface the
                carousel starting from the second slide in a later session — effectively giving
                your post two shots at attention.
              </p>
              <p>
                The problem has never been <em>whether</em> to make carousels — it&apos;s always
                been the time cost. A well-designed 3-slide carousel took 2–4 hours of design
                work in 2022. In 2026, with AI image generation at this quality level, the same
                3-slide carousel takes under 90 seconds. This is the unlock that makes consistent
                carousel publishing viable for every creator, marketer, and brand — not just those
                with dedicated design teams.
              </p>
              <p>
                What makes Scenith&apos;s carousel generator uniquely powerful is the combination
                of multi-model access (7 AI image models including GPT Image 1, Imagen 4, and
                FLUX 1.1 Pro), a shared style system that keeps all 3 slides visually consistent,
                per-slide reference image support for brand or character consistency, and 2K
                resolution output with full commercial rights. It&apos;s not just image generation
                bolted onto a carousel layout — it&apos;s a purpose-built carousel creation workflow.
              </p>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="ct-section ct-section-how">
          <div className="ct-section-inner">
            <div className="ct-section-label">Step by Step</div>
            <h2 className="ct-section-title">
              How the AI Carousel Generator Works
            </h2>
            <div className="ct-steps-grid">
              {HOW_STEPS.map((step) => (
                <div className="ct-step-card" key={step.num}>
                  <div className="ct-step-num">{step.num}</div>
                  <div className="ct-step-body">
                    <h3 className="ct-step-title">{step.title}</h3>
                    <p className="ct-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-cta-inline">
              <Link href={CTA_URL} className="ct-cta-btn" target="_blank" rel="noopener">
                <span className="ct-cta-icon">🎠</span>
                Start Creating My Carousel
                <span className="ct-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── STYLE OPTIONS ────────────────────────────────────────── */}
        <section className="ct-section ct-section-styles">
          <div className="ct-section-inner">
            <div className="ct-section-label">Visual Identity</div>
            <h2 className="ct-section-title">
              8 Artistic Styles — Every Brand, Every Vibe
            </h2>
            <p className="ct-section-lead">
              Your carousel&apos;s visual style is applied consistently across all 3 slides,
              so your content always looks like it was made by the same designer. Pick
              from 8 distinct artistic directions — or override them per slide with a
              descriptive prompt.
            </p>
            <div className="ct-styles-grid">
              {STYLE_OPTIONS.map((s) => (
                <div className="ct-style-card" key={s.name}>
                  <span className="ct-style-emoji">{s.emoji}</span>
                  <h3 className="ct-style-name">{s.name}</h3>
                  <p className="ct-style-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── USE CASES ────────────────────────────────────────────── */}
        <section className="ct-section ct-section-usecases">
          <div className="ct-section-inner">
            <div className="ct-section-label">Who It&apos;s For</div>
            <h2 className="ct-section-title">
              6 High-Impact Ways to Use AI-Generated Carousels
            </h2>
            <div className="ct-usecase-grid">
              {USE_CASES.map((uc) => (
                <article className="ct-usecase-card" key={uc.title}>
                  <div className="ct-uc-header">
                    <span className="ct-uc-icon">{uc.icon}</span>
                    <span className="ct-uc-platform">{uc.platform}</span>
                  </div>
                  <h3 className="ct-uc-title">{uc.title}</h3>
                  <p className="ct-uc-desc">{uc.desc}</p>
                  <div className="ct-uc-stat">📊 {uc.stats}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROMPT EXAMPLES ──────────────────────────────────────── */}
        <section className="ct-section ct-section-prompts">
          <div className="ct-section-inner">
            <div className="ct-section-label">Prompt Engineering</div>
            <h2 className="ct-section-title">
              Real Carousel Prompt Examples That Get Results
            </h2>
            <p className="ct-section-lead">
              Great AI carousel results start with great prompts. Each slide should
              describe a distinct visual scene that advances a narrative. Here are 3
              real examples you can use or adapt — copy them directly into the
              generator.
            </p>
            <div className="ct-prompts-grid">
              {PROMPT_EXAMPLES.map((ex) => (
                <div className="ct-prompt-card" key={ex.topic}>
                  <div className="ct-prompt-topic">Topic: {ex.topic}</div>
                  {ex.slides.map((s, i) => (
                    <div className="ct-prompt-slide" key={i}>
                      <div className="ct-prompt-num">S{i + 1}</div>
                      <p className="ct-prompt-text">{s}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="ct-cta-inline" style={{ marginTop: "2.5rem" }}>
              <Link href={CTA_URL} className="ct-cta-btn" target="_blank" rel="noopener">
                <span className="ct-cta-icon">✨</span>
                Use These Prompts Now — Free
                <span className="ct-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON TABLE ─────────────────────────────────────── */}
        <section className="ct-section ct-section-compare">
          <div className="ct-section-inner">
            <div className="ct-section-label">vs. Traditional Design</div>
            <h2 className="ct-section-title">
              AI Carousel Generator vs. Manual Design — Full Comparison
            </h2>
            <div className="ct-compare-wrap">
              <table className="ct-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="ct-col-them">❌ Manual (Canva / Photoshop)</th>
                    <th className="ct-col-us">✅ Scenith AI Carousel</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td className="ct-feature-col">{row.feature}</td>
                      <td className="ct-col-them">{row.manual}</td>
                      <td className="ct-col-us">{row.aiWay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── DEEP CONTENT — LINKEDIN STRATEGY ────────────────────── */}
        <section className="ct-section ct-section-deepdive">
          <div className="ct-section-inner ct-two-col">
            <div className="ct-deepdive-text">
              <div className="ct-section-label">LinkedIn Strategy 2026</div>
              <h2 className="ct-section-title">
                The LinkedIn Carousel Playbook That Actually Works
              </h2>
              <p>
                LinkedIn&apos;s feed algorithm in 2026 rewards three things above all else:
                dwell time, interaction diversity, and content that keeps people on the
                platform. Carousels check all three boxes simultaneously.
              </p>
              <p>
                The structure that consistently outperforms is what growth strategists
                call the <strong>Problem → Proof → Payoff</strong> arc. Slide 1 presents
                a relatable problem your audience faces. Slide 2 offers evidence, data,
                or a case study that validates the problem and teases the solution. Slide 3
                delivers the actionable insight or call to action that makes the viewer
                feel rewarded for swiping through.
              </p>
              <p>
                AI-generated imagery dramatically elevates this format because each slide
                now carries its own visual weight — a cinematic photograph of a stressed
                professional for Slide 1, a clean data visualization for Slide 2, and a
                triumphant wide-angle scene for Slide 3. The visual storytelling happens
                at the image level, so your text overlay can stay minimal and punchy rather
                than carrying all the narrative load.
              </p>
              <p>
                For LinkedIn creators publishing at volume — 3–5 posts per week — the AI
                carousel workflow is transformative. Instead of spending Monday morning
                designing, you spend 10 minutes writing 9 slide prompts (3 carousels × 3
                slides), fire them all through Scenith&apos;s generator, and download a week&apos;s
                worth of visual content in one session. Your editorial calendar is full
                before your coffee is done.
              </p>
            </div>
            <div className="ct-deepdive-visual">
              <div className="ct-arc-card ct-arc-1">
                <div className="ct-arc-num">S1</div>
                <div className="ct-arc-label">Problem</div>
                <div className="ct-arc-desc">Hook your audience with a pain they recognise immediately</div>
              </div>
              <div className="ct-arc-arrow">↓</div>
              <div className="ct-arc-card ct-arc-2">
                <div className="ct-arc-num">S2</div>
                <div className="ct-arc-label">Proof</div>
                <div className="ct-arc-desc">Validate with data, a case study, or surprising insight</div>
              </div>
              <div className="ct-arc-arrow">↓</div>
              <div className="ct-arc-card ct-arc-3">
                <div className="ct-arc-num">S3</div>
                <div className="ct-arc-label">Payoff</div>
                <div className="ct-arc-desc">Deliver the actionable insight that makes swiping worth it</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INSTAGRAM STRATEGY ───────────────────────────────────── */}
        <section className="ct-section ct-section-instagram">
          <div className="ct-section-inner">
            <div className="ct-section-label">Instagram Strategy 2026</div>
            <h2 className="ct-section-title">
              Mastering Instagram Carousels with AI-Generated Imagery
            </h2>
            <div className="ct-section-body">
              <p>
                Instagram&apos;s carousel algorithm operates differently from LinkedIn&apos;s. Where
                LinkedIn prioritises dwell time and swipe completions, Instagram&apos;s carousel
                mechanic is built around the save-and-share loop. Content that gets saved is
                algorithmically marked as &quot;highly valuable&quot; and gets re-served to new audiences
                in the Explore tab and Suggested Posts feed.
              </p>
              <p>
                The carousel formats that consistently drive saves on Instagram in 2026 fall
                into four categories: <strong>how-to tutorials</strong> (step-by-step instructions
                spread across slides), <strong>before/after transformations</strong> (contrasting
                states shown visually), <strong>comparison breakdowns</strong> (option A vs option B
                presented side by side), and <strong>data storytelling</strong> (statistics and
                insights visualised with compelling imagery).
              </p>
              <p>
                AI-generated imagery gives every creator access to the visual quality that
                previously required a photographer, location, and post-production workflow. A
                skincare brand can generate a 3-slide carousel showing their product in a
                morning light bathroom scene, a close-up application shot, and a flat lay product
                arrangement — all in 90 seconds, all at consistent 2K resolution, without
                scheduling a photoshoot.
              </p>
              <p>
                For maximum Instagram algorithm performance, pair your AI-generated carousel
                images with keyword-rich caption copy and 5–8 highly specific niche hashtags
                (not generic mega-hashtags). The visual quality of AI-generated imagery
                at 2K resolution holds up perfectly on Instagram&apos;s compressed feed and also
                looks exceptional on Stories swipe-ups, where the full 9:16 format is available.
              </p>
            </div>
          </div>
        </section>

        {/* ─── MODEL BREAKDOWN ──────────────────────────────────────── */}
        <section className="ct-section ct-section-models">
          <div className="ct-section-inner">
            <div className="ct-section-label">AI Models Explained</div>
            <h2 className="ct-section-title">
              Which AI Image Model Should You Use for Your Carousel?
            </h2>
            <div className="ct-models-grid">
              {[
                {
                  logo: "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp",
                  name: "GPT Image 1 Mini",
                  tag: "Best for: Flexible, balanced quality",
                  desc: "OpenAI's efficient model handles a wide range of styles from photorealistic to illustrated. Excellent text-in-image support makes it ideal for carousels where slide text needs to be baked into the image itself. Fast generation, solid consistency.",
                  credits: "From 10cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp",
                  name: "GPT Image 1 Medium",
                  tag: "Best for: Premium corporate & brand carousels",
                  desc: "The higher-tier OpenAI model with enhanced detail fidelity, better prompt adherence, and more photorealistic output. Best choice for LinkedIn professional carousels where visual credibility matters. Premium quality option available.",
                  credits: "From 12cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
                  name: "Imagen 4 Fast",
                  tag: "Best for: Quick iteration & volume creation",
                  desc: "Google's fast Imagen 4 variant prioritises speed without compromising on visual coherence. Perfect for teams that need to generate multiple carousel variants quickly to A/B test different visual directions.",
                  credits: "10cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
                  name: "Imagen 4 Standard",
                  tag: "Best for: Print-quality & detail-rich carousels",
                  desc: "Full Imagen 4 quality — Google's flagship image generation model known for exceptional detail rendering, photorealistic texture, and superb colour science. The best choice when your carousel will be displayed at large size.",
                  credits: "15cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Flux%20logo.png",
                  name: "FLUX 1.1 Pro",
                  tag: "Best for: Artistic & creative brand carousels",
                  desc: "Black Forest Labs' flagship model renowned for photorealistic detail and creative visual interpretation. Exceptional for carousels with strong artistic direction — fashion, luxury goods, creative agencies, editorial-style content.",
                  credits: "15cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Grok.png",
                  name: "Grok Aurora",
                  tag: "Best for: Modern photorealism with img2img",
                  desc: "xAI's Aurora model delivers 2K photorealistic imagery with excellent reference image adherence. Strong choice when you need to maintain product, character, or environment consistency across all 3 carousel slides using the shared reference image feature.",
                  credits: "14cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Stability%20logo.png",
                  name: "Stability AI Core",
                  tag: "Best for: Stylised & artistic illustrations",
                  desc: "Stability AI's Core model (SDXL-based) excels at artistic, illustrative, and stylised output. Best for carousels with strong creative or brand-art identity — educational content with illustrated characters, styled brand visuals, or non-photorealistic creative work.",
                  credits: "15cr/slide",
                },
                {
                  logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
                  name: "Nano Banana Pro",
                  tag: "Best for: Ultra-high resolution 4K output",
                  desc: "Scenith's highest-resolution model — outputs up to 4K per slide. The go-to choice when carousel images will be printed, displayed on large screens, or repurposed for high-resolution marketing materials beyond social media.",
                  credits: "26–46cr/slide",
                },
              ].map((m) => (
                <div className="ct-model-card" key={m.name}>
                  <div className="ct-model-card-header">
                    <img src={m.logo} alt={m.name} width={20} height={20} />
                    <h3 className="ct-model-card-name">{m.name}</h3>
                  </div>
                  <div className="ct-model-tag">{m.tag}</div>
                  <p className="ct-model-desc">{m.desc}</p>
                  <div className="ct-model-credits">{m.credits}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECOND BIG CTA ───────────────────────────────────────── */}
        <section className="ct-cta-section">
          <div className="ct-cta-section-inner">
            <div className="ct-cta-section-badge">🎠 Ready to Create?</div>
            <h2 className="ct-cta-section-title">
              Generate Your First AI Carousel in 90 Seconds
            </h2>
            <p className="ct-cta-section-sub">
              50 free credits · No credit card · 7 AI models · 2K resolution · Full commercial rights
            </p>
            <Link href={CTA_URL} className="ct-cta-btn ct-cta-btn-lg" target="_blank" rel="noopener">
              <span className="ct-cta-icon">🎠</span>
              Open AI Carousel Generator — Free
              <span className="ct-cta-arrow">→</span>
            </Link>
            <p className="ct-cta-section-note">
              Already have a Scenith account?{" "}
              <Link href={CTA_URL} target="_blank" rel="noopener" style={{ color: "var(--ct-accent)", fontWeight: 700 }}>
                Go straight to Carousel mode →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section className="ct-section ct-section-faq">
          <div className="ct-section-inner">
            <div className="ct-section-label">FAQ</div>
            <h2 className="ct-section-title">
              Frequently Asked Questions — Text to Carousel AI Generator
            </h2>
            <div className="ct-faq-grid">
              {FAQS.map((faq) => (
                <details className="ct-faq-item" key={faq.q}>
                  <summary className="ct-faq-q">{faq.q}</summary>
                  <p className="ct-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED TOOLS ────────────────────────────────────────── */}
        <section className="ct-section ct-section-related">
          <div className="ct-section-inner">
            <div className="ct-section-label">Also on Scenith</div>
            <h2 className="ct-section-title">Related AI Content Tools</h2>
            <div className="ct-related-grid">
              {[
                {
                  icon: "🖼️",
                  name: "AI Image Generator",
                  desc: "Single-image generation across 7 AI models. Text-to-image and image-to-image in 8 styles. 2K resolution PNG.",
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=carousel_tool_page&utm_medium=related_tools",
                },
                {
                  icon: "🎬",
                  name: "AI Video Generator",
                  desc: "Text-to-video and image-to-video with Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine. Up to 1080p MP4.",
                  href: "https://scenith.in/create-ai-content?tab=video&utm_source=carousel_tool_page&utm_medium=related_tools",
                },
                {
                  icon: "🎙️",
                  name: "AI Voice Generator",
                  desc: "40+ natural voices across 20+ languages. Google, OpenAI, and Azure TTS. Instant MP3 download.",
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=carousel_tool_page&utm_medium=related_tools",
                },
                {
                  icon: "💬",
                  name: "Add Subtitles to Video",
                  desc: "Automatically generate and burn subtitles onto any video. Multi-language support, SRT export.",
                  href: "https://scenith.in/tools/add-subtitles-to-videos?utm_source=carousel_tool_page&utm_medium=related_tools",
                },
              ].map((tool) => (
                <Link href={tool.href} className="ct-related-card" key={tool.name} target="_blank" rel="noopener">
                  <span className="ct-related-icon">{tool.icon}</span>
                  <h3 className="ct-related-name">{tool.name}</h3>
                  <p className="ct-related-desc">{tool.desc}</p>
                  <span className="ct-related-link">Try it free →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────────── */}
        <section className="ct-final-cta">
          <div className="ct-final-inner">
            <h2 className="ct-final-title">
              Stop Spending Hours on Carousel Design.<br />
              Let AI Handle It in 90 Seconds.
            </h2>
            <Link href={CTA_URL} className="ct-cta-btn ct-cta-btn-lg" target="_blank" rel="noopener">
              <span className="ct-cta-icon">🎠</span>
              Create My AI Carousel — Free
              <span className="ct-cta-arrow">→</span>
            </Link>
            <p className="ct-final-note">
              Joins thousands of creators, marketers & brands using Scenith · 50 free credits · No card needed
            </p>
          </div>
        </section>

      </div>
    </>
  );
}