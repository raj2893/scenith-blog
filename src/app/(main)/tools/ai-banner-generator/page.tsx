import type { Metadata } from 'next';
import '../../../../../styles/tools/AIBannerGenerator.css';

export const metadata: Metadata = {
  title: 'Free AI Banner Generator — Create Stunning Banners Online in Seconds (2026)',
  description:
    'Create professional banners, social media ads, YouTube channel art, and marketing visuals using AI. Free AI banner generator — no design skills needed. Generate custom banners instantly.',
  keywords: [
    'ai banner generator',
    'free banner generator',
    'ai banner maker',
    'banner generator online',
    'social media banner generator',
    'youtube banner generator',
    'facebook banner maker',
    'ai banner design',
    'free banner maker online',
    'custom banner generator',
    'marketing banner generator',
    'banner creator free',
    'ai image banner',
    'promotional banner generator',
    'business banner maker',
    'instagram banner generator',
    'linkedin banner maker',
    'twitter banner generator',
    'banner design tool',
    'ai graphic generator free',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/ai-banner-generator',
  },
  openGraph: {
    title: 'Free AI Banner Generator — Create Stunning Banners in Seconds',
    description:
      'Generate professional banners for social media, YouTube, websites, and marketing campaigns using AI. Free, instant, no design skills required.',
    url: 'https://scenith.in/tools/ai-banner-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AIBannerGeneratorOG.png',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Banner Generator — Create Professional Banners Instantly',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Banner Generator — Create Stunning Banners in Seconds',
    description:
      'Generate professional banners for social media, YouTube, and marketing using AI. Free and instant.',
    images: ['https://scenith.in/images/AIBannerGeneratorOG.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const BANNER_USE_CASES = [
  {
    icon: '📺',
    title: 'YouTube Channel Art',
    desc: 'Eye-catching channel banners that attract subscribers',
    size: '2560×1440px',
    color: '#FF0000',
  },
  {
    icon: '📘',
    title: 'Facebook Cover',
    desc: 'Professional brand presence on your FB page',
    size: '820×312px',
    color: '#1877F2',
  },
  {
    icon: '💼',
    title: 'LinkedIn Banner',
    desc: 'Stand out with a bold personal brand banner',
    size: '1584×396px',
    color: '#0A66C2',
  },
  {
    icon: '🐦',
    title: 'Twitter/X Header',
    desc: 'Capture attention with vibrant header art',
    size: '1500×500px',
    color: '#000000',
  },
  {
    icon: '🛍️',
    title: 'E-Commerce Banners',
    desc: 'Sale, launch, and promo banners that convert',
    size: '1200×628px',
    color: '#F97316',
  },
  {
    icon: '🌐',
    title: 'Website Hero Banners',
    desc: 'High-impact hero sections and landing pages',
    size: '1920×600px',
    color: '#8B5CF6',
  },
  {
    icon: '📧',
    title: 'Email Header Banners',
    desc: 'Newsletter and campaign banners that get opened',
    size: '600×200px',
    color: '#10B981',
  },
  {
    icon: '🎮',
    title: 'Twitch / Discord',
    desc: 'Gaming and community server banners',
    size: '1920×480px',
    color: '#9146FF',
  },
];

const PROMPT_EXAMPLES = [
  {
    category: 'E-Commerce Sale',
    icon: '🛍️',
    prompt:
      'Grand Diwali Sale banner, golden and red fireworks bursting, deep navy background, bold "50% OFF" text space, premium product showcase area, luxury festive feel, wide horizontal format',
  },
  {
    category: 'Tech Startup',
    icon: '🚀',
    prompt:
      'SaaS product launch banner, futuristic dashboard interface glowing in dark mode, neon blue accents, abstract data nodes, "The Future of Work" headline space, ultra-modern minimal corporate aesthetic',
  },
  {
    category: 'Fitness Brand',
    icon: '💪',
    prompt:
      'Gym membership banner, powerful athlete silhouette against sunrise, dramatic orange-to-crimson gradient, motivational energy, bold typography space on left, cinematic photography style',
  },
  {
    category: 'Food & Restaurant',
    icon: '🍜',
    prompt:
      'Restaurant opening banner, gourmet dish close-up overhead shot, warm golden bokeh lights, rustic wooden texture, "New Location Open" text area, magazine-cover food photography style',
  },
  {
    category: 'YouTube Channel',
    icon: '📺',
    prompt:
      'Tech review YouTube channel art, dark studio setup, glowing screens, gadgets arranged artistically, "TechBreak" channel name space, cinematic purple-blue ambient lighting, widescreen 2560x1440',
  },
  {
    category: 'Music Release',
    icon: '🎵',
    prompt:
      'Album release banner, abstract sound waves turning into galaxies, deep space background, electric violet and teal palette, artist name text zone, music streaming visual aesthetic',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What is an AI banner generator?',
    a: "An AI banner generator uses machine learning models to create custom visual banner images from text descriptions. Instead of using design software like Photoshop or Canva, you simply describe what you want — such as 'a bold summer sale banner with tropical colors' — and the AI generates a high-quality image ready for use as a banner across social media, websites, and marketing materials.",
  },
  {
    q: 'Is AI banner generation free?',
    a: "Scenith's AI banner generator is accessible via our AI Image Generation tool. The free BASIC plan lets you explore the tool, with paid plans starting from $9/month offering generous image credits. Each credit generates one high-resolution banner image with no watermarks and full commercial rights.",
  },
  {
    q: 'What banner sizes can AI generate?',
    a: "Our AI currently generates square 1024×1024px images by default, which can be easily resized or cropped for any banner dimension. For precise sizing — such as YouTube's 2560×1440px channel art or LinkedIn's 1584×396px banner — we recommend generating the image and using our free Image Editor to crop and resize to exact platform specifications.",
  },
  {
    q: 'Can I use AI-generated banners commercially?',
    a: 'Yes. All images generated through Scenith come with full commercial use rights. You can use them in client projects, paid advertising campaigns, product packaging, social media marketing, and any other commercial application without attribution requirements.',
  },
  {
    q: 'How do I write a good prompt for banner generation?',
    a: "The best banner prompts include: (1) the purpose — 'sale banner', 'YouTube channel art'; (2) visual style — 'minimalist', 'bold and vibrant', 'luxury dark theme'; (3) color palette; (4) mood or emotion; and (5) any specific elements like 'space for text on the left'. The more specific you are, the closer the result will match your vision.",
  },
  {
    q: 'Which AI models work best for banner images?',
    a: "For banners requiring photorealism — product shots, lifestyle imagery — GPT Image 1 (Medium) and Imagen 4 Standard perform excellently. For artistic, illustrative, or stylized banners, FLUX 1.1 Pro and Stable Diffusion Core offer exceptional aesthetic flexibility. You can switch between models in the generation interface.",
  },
  {
    q: 'Can AI generate text inside banner images?',
    a: "AI models have improved significantly at rendering text within images but it is still not perfectly reliable for all fonts and styles. Our recommended workflow is: generate the banner background and visual elements with AI, then use our free Image Editor to add crisp, editable text overlays. This gives you professional typography control on top of a stunning AI-generated background.",
  },
  {
    q: 'What industries use AI banner generators most?',
    a: 'E-commerce businesses use AI banners for seasonal sales and promotions. Content creators use them for YouTube channel art and thumbnails. Marketing agencies use them for rapid campaign mockups. SaaS companies use them for landing page hero sections. Restaurants and food brands create menu and opening banners. Event organizers generate event promotional imagery.',
  },
];

const STYLE_GUIDE = [
  {
    style: 'Photorealistic',
    best_for: 'Product banners, lifestyle ads, real-estate promos',
    prompt_tip: 'Add "studio lighting, commercial photography, 4K quality"',
    icon: '📷',
  },
  {
    style: 'Digital Art / Illustration',
    best_for: 'Tech brands, SaaS products, app promotions',
    prompt_tip: 'Add "vector illustration, clean graphic design, flat style"',
    icon: '💻',
  },
  {
    style: 'Cinematic / Dramatic',
    best_for: 'Events, music, entertainment, gaming',
    prompt_tip: 'Add "cinematic lighting, wide angle, movie poster composition"',
    icon: '🎬',
  },
  {
    style: 'Minimalist',
    best_for: 'Luxury brands, fashion, corporate LinkedIn',
    prompt_tip: 'Add "minimal, white space, elegant typography zone, clean layout"',
    icon: '⬜',
  },
  {
    style: 'Vibrant & Bold',
    best_for: 'Sales, discounts, food & beverage, streetwear',
    prompt_tip: 'Add "vibrant colors, high contrast, energy, bold composition"',
    icon: '🎨',
  },
  {
    style: 'Dark & Premium',
    best_for: 'Tech gadgets, crypto, gaming, premium services',
    prompt_tip: 'Add "dark background, neon accents, premium luxury, matte texture"',
    icon: '🌑',
  },
];

export default function AIBannerGeneratorPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://scenith.in/tools/ai-banner-generator#webapp',
        name: 'Scenith AI Banner Generator',
        description:
          'Free AI-powered banner generator for creating professional social media banners, YouTube channel art, website hero images, and marketing visuals from text descriptions.',
        url: 'https://scenith.in/tools/ai-banner-generator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        featureList: [
          'Text-to-banner AI generation',
          'Social media banner creation',
          'YouTube channel art generator',
          'No watermarks',
          'Commercial use rights',
          'Multiple AI models',
          'High-resolution output',
        ],
        author: {
          '@type': 'Organization',
          name: 'Scenith',
          url: 'https://scenith.in',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://scenith.in/tools/ai-banner-generator#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'AI Banner Generator',
            item: 'https://scenith.in/tools/ai-banner-generator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://scenith.in/tools/ai-banner-generator#faq',
        mainEntity: FAQ_ITEMS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': 'https://scenith.in/tools/ai-banner-generator#howto',
        name: 'How to Create an AI Banner in 3 Steps',
        description: 'Step-by-step guide to generating professional banners using AI',
        totalTime: 'PT2M',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Describe Your Banner',
            text: 'Write a detailed description of your banner: platform, style, colors, mood, and key visual elements.',
            position: 1,
          },
          {
            '@type': 'HowToStep',
            name: 'Choose AI Model & Style',
            text: 'Select the AI model and art style that matches your brand aesthetic — realistic, digital art, cinematic, or minimalist.',
            position: 2,
          },
          {
            '@type': 'HowToStep',
            name: 'Generate, Edit & Download',
            text: 'Generate your banner in seconds, optionally refine it in the free Image Editor, and download high-resolution PNG for immediate use.',
            position: 3,
          },
        ],
      },
    ],
  };

  return (
    <div className="banner-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="banner-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Banner Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="banner-hero" id="hero">
        <div className="banner-hero-bg">
          <div className="banner-orb banner-orb-1" />
          <div className="banner-orb banner-orb-2" />
          <div className="banner-orb banner-orb-3" />
          <div className="banner-grid-overlay" />
        </div>

        <div className="banner-hero-inner">
          <div className="banner-hero-badge">
            <span className="badge-dot" />
            AI-Powered · Free to Start · No Design Skills Needed
          </div>

          <h1 className="banner-hero-h1">
            Free AI Banner Generator<br />
            <span className="banner-hero-accent">Create Stunning Banners</span><br />
            <span className="banner-hero-sub">in Seconds — Not Hours</span>
          </h1>

          <p className="banner-hero-desc">
            Design professional banners for YouTube, LinkedIn, Facebook, Twitter, e-commerce stores,
            and websites using cutting-edge AI. Describe your vision in plain language — our AI
            handles the design, colour theory, composition, and visual storytelling for you.
          </p>

          {/* Platform size pills */}
          <div className="banner-platform-pills">
            {['YouTube Channel Art', 'LinkedIn Banner', 'Facebook Cover', 'Twitter Header', 'Website Hero', 'Email Header'].map((p) => (
              <span key={p} className="platform-pill">{p}</span>
            ))}
          </div>

          {/* ── MAIN CTA ── */}
          <div className="banner-cta-card">
            <div className="cta-card-header">
              <div className="cta-card-icon">🎨</div>
              <div>
                <h2 className="cta-card-title">Start Creating Your AI Banner Now</h2>
                <p className="cta-card-subtitle">
                  Powered by GPT Image 1, FLUX 1.1 Pro, Imagen 4 &amp; more — choose the model that fits your style
                </p>
              </div>
            </div>

            <div className="cta-prompt-preview">
              <div className="prompt-preview-label">Try a prompt like this ↓</div>
              <div className="prompt-preview-text">
                "Bold Diwali sale banner, gold and crimson fireworks, dark navy background, premium festive energy, wide horizontal format, space for headline text on the left"
              </div>
            </div>

            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=hero_cta&utm_campaign=banner_tool_page"
              className="banner-main-cta-btn"
              aria-label="Open AI Image Generator to create banners"
            >
              <span className="cta-btn-icon">✨</span>
              Generate Your AI Banner — Free
              <span className="cta-btn-arrow">→</span>
            </a>

            <div className="cta-trust-row">
              <span>✅ No watermarks</span>
              <span>✅ Commercial rights</span>
              <span>✅ Multiple AI models</span>
              <span>✅ Free to start</span>
            </div>
          </div>

          {/* Stats bar */}
          <div className="banner-stats-bar">
            <div className="banner-stat">
              <strong>7+</strong>
              <span>AI Models Available</span>
            </div>
            <div className="banner-stat-sep" />
            <div className="banner-stat">
              <strong>8</strong>
              <span>Art Styles</span>
            </div>
            <div className="banner-stat-sep" />
            <div className="banner-stat">
              <strong>1024px+</strong>
              <span>High Resolution</span>
            </div>
            <div className="banner-stat-sep" />
            <div className="banner-stat">
              <strong>∞</strong>
              <span>Creative Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM USE CASES ── */}
      <section className="banner-usecases-section" id="banner-use-cases" aria-labelledby="usecases-title">
        <div className="section-container">
          <div className="section-label">What You Can Create</div>
          <h2 id="usecases-title" className="section-h2">
            AI Banner Generator for Every Platform & Purpose
          </h2>
          <p className="section-desc">
            Whether you need a YouTube channel banner that stops viewers from scrolling, a LinkedIn profile header
            that communicates authority, or a high-converting e-commerce sale banner — our AI image generator handles
            every format with precision.
          </p>

          <div className="usecase-grid">
            {BANNER_USE_CASES.map((uc) => (
              <article key={uc.title} className="usecase-card">
                <div className="usecase-icon">{uc.icon}</div>
                <h3 className="usecase-title">{uc.title}</h3>
                <p className="usecase-desc">{uc.desc}</p>
                <div className="usecase-size" style={{ borderColor: uc.color + '44', color: uc.color }}>
                  {uc.size}
                </div>
              </article>
            ))}
          </div>

          <div className="usecase-cta-inline">
            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=usecases_section&utm_campaign=banner_tool_page"
              className="inline-cta-btn"
            >
              Create Any Banner Format — Open AI Generator →
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="banner-howto-section" id="how-to-create-ai-banner" aria-labelledby="howto-title">
        <div className="section-container">
          <div className="section-label">Step-by-Step Guide</div>
          <h2 id="howto-title" className="section-h2">
            How to Create a Professional AI Banner in 3 Steps
          </h2>
          <p className="section-desc">
            Creating a banner with AI takes less than two minutes from idea to downloadable PNG.
            No Photoshop skills. No design degree. Just your words.
          </p>

          <div className="howto-steps">
            <article className="howto-step">
              <div className="step-num">01</div>
              <div className="step-content">
                <h3>Write Your Banner Description</h3>
                <p>
                  Open the AI Image Generator and describe your banner in the prompt box. The key is specificity:
                  mention the <strong>platform</strong> (YouTube, LinkedIn, website), <strong>visual style</strong> (dark
                  luxury, vibrant sale, minimal corporate), <strong>colour palette</strong>, <strong>mood</strong>, and
                  any <strong>compositional elements</strong> (text space on the left, product on the right, centred logo area).
                </p>
                <div className="step-tip">
                  <strong>🎯 Tip:</strong> Append "wide horizontal banner format" or "cinematic landscape orientation"
                  to ensure the composition feels banner-native, not portrait.
                </div>
              </div>
            </article>

            <article className="howto-step">
              <div className="step-num">02</div>
              <div className="step-content">
                <h3>Choose Your AI Model & Art Style</h3>
                <p>
                  Select from multiple state-of-the-art AI models — <strong>GPT Image 1 Medium</strong> for photorealistic
                  detail, <strong>FLUX 1.1 Pro</strong> for artistic and stylised aesthetics, <strong>Imagen 4 Standard</strong> for
                  sharp commercial-grade visuals, or <strong>Grok Aurora</strong> for creatively unexpected results.
                  Pair your model choice with one of 8 art style presets: Realistic, Digital Art, Cinematic, Fantasy,
                  Sci-Fi, Vintage, Anime, or 3D Render.
                </p>
                <div className="step-tip">
                  <strong>🎯 Tip:</strong> For brand banners, use <em>Digital Art</em> or <em>Realistic Photo</em>.
                  For event or gaming banners, try <em>Cinematic</em> or <em>Sci-Fi</em>.
                </div>
              </div>
            </article>

            <article className="howto-step">
              <div className="step-num">03</div>
              <div className="step-content">
                <h3>Generate, Refine & Download</h3>
                <p>
                  Hit <strong>Generate Image</strong> — your banner visual arrives in under 5 seconds. Not quite right?
                  Refine your prompt and regenerate instantly. Once satisfied, download the high-resolution PNG.
                  Open it in our free <a href="https://scenith.in/tools/image-editing" className="inline-link">Image Editor</a> to
                  add your brand text, logo, CTA buttons, or any graphic overlays before final export.
                </p>
                <div className="step-tip">
                  <strong>🎯 Tip:</strong> The AI is great at backgrounds, textures, and visual atmosphere.
                  Add your actual headline text in the Image Editor for crisp, professional typography.
                </div>
              </div>
            </article>
          </div>

          <div className="howto-cta">
            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=howto_section&utm_campaign=banner_tool_page"
              className="banner-main-cta-btn"
              aria-label="Generate AI banner now"
            >
              <span className="cta-btn-icon">🚀</span>
              Start Generating Banners Now
              <span className="cta-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROMPT EXAMPLES ── */}
      <section className="banner-prompts-section" id="banner-prompt-examples" aria-labelledby="prompts-title">
        <div className="section-container">
          <div className="section-label">Prompt Library</div>
          <h2 id="prompts-title" className="section-h2">
            Ready-to-Use AI Banner Prompt Examples
          </h2>
          <p className="section-desc">
            Copy any of these proven prompts directly into the AI generator and customise to your brand.
            Each prompt has been crafted to produce visually compelling banner compositions.
          </p>

          <div className="prompts-grid">
            {PROMPT_EXAMPLES.map((ex) => (
              <article key={ex.category} className="prompt-card">
                <div className="prompt-card-header">
                  <span className="prompt-icon">{ex.icon}</span>
                  <span className="prompt-category">{ex.category}</span>
                </div>
                <p className="prompt-text">"{ex.prompt}"</p>
                <a
                  href={`https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=prompt_example&utm_campaign=banner_tool_page&utm_content=${encodeURIComponent(ex.category)}`}
                  className="prompt-try-btn"
                >
                  Try this prompt →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STYLE GUIDE ── */}
      <section className="banner-style-section" id="ai-banner-style-guide" aria-labelledby="style-title">
        <div className="section-container">
          <div className="section-label">Visual Style Guide</div>
          <h2 id="style-title" className="section-h2">
            Choosing the Right AI Art Style for Your Banner
          </h2>
          <p className="section-desc">
            The art style you select dramatically impacts how your banner is perceived. A luxury fintech brand needs
            a completely different aesthetic than a streetwear drop or a kids' educational app. Here is a quick
            cheat-sheet for matching styles to use cases.
          </p>

          <div className="style-guide-grid">
            {STYLE_GUIDE.map((s) => (
              <article key={s.style} className="style-guide-card">
                <div className="sg-icon">{s.icon}</div>
                <h3 className="sg-style">{s.style}</h3>
                <div className="sg-best-for">
                  <strong>Best for:</strong> {s.best_for}
                </div>
                <div className="sg-tip">
                  <strong>Prompt tip:</strong> {s.prompt_tip}
                </div>
              </article>
            ))}
          </div>

          <div className="style-cta-inline">
            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=style_guide_section&utm_campaign=banner_tool_page"
              className="inline-cta-btn"
            >
              Explore All 8 Styles in the AI Generator →
            </a>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE: WHY AI FOR BANNERS ── */}
      <section className="banner-deepdive-section" id="why-use-ai-banner-generator" aria-labelledby="why-title">
        <div className="section-container">
          <div className="section-label">Why AI-Powered Banners?</div>
          <h2 id="why-title" className="section-h2">
            Why Use an AI Banner Generator in 2026?
          </h2>

          <div className="deepdive-grid">
            <div className="deepdive-main">
              <p>
                In 2026, digital visual content is the single most important factor for capturing attention online.
                Across all major platforms — Instagram, LinkedIn, YouTube, and TikTok — <strong>banner images are the
                first thing a visitor sees</strong>, often determining within 50 milliseconds whether they stay, engage,
                or leave. Yet the traditional design workflow remains inaccessible to most businesses:
                hiring a professional designer costs ₹5,000–₹50,000 per project, Photoshop demands a steep learning
                curve, and even "simple" tools like Canva still require design intuition and hours of iteration.
              </p>

              <p>
                AI banner generators remove every single one of these barriers. You describe what you need — the
                platform, the brand feeling, the colour direction, the key visual elements — and the AI synthesises
                a polished, high-resolution visual in seconds. This is not just about speed. The quality of outputs
                from modern AI models like <strong>GPT Image 1, FLUX 1.1 Pro, and Imagen 4</strong> is genuinely
                competitive with mid-tier professional design work, especially for background art, texture, atmospheric
                lighting, and compositional framing.
              </p>

              <h3>The Real Business Case for AI Banners</h3>
              <p>
                Consider a D2C brand running a 5-day sale campaign. Traditionally, this requires briefing a designer,
                waiting 1–3 days for drafts, two rounds of revisions, and a final delivery timeline of 4–7 days.
                With an AI banner generator, the same brand can produce 10 variations of sale banners in under 30
                minutes — testing different colour schemes, visual styles, and compositional approaches across
                different platforms simultaneously. The ability to iterate at zero marginal cost is a fundamentally
                different operational model.
              </p>

              <h3>AI Banners for Content Creators</h3>
              <p>
                For independent YouTube creators, the channel banner is permanent brand real estate. A well-designed
                2560×1440px channel art communicates the content niche, visual personality, and production quality
                of a channel before a single video is played. Using AI to generate channel banner concepts gives
                creators the ability to match their rapidly evolving aesthetic — something that was previously only
                accessible to channels with budgets for ongoing design work.
              </p>

              <h3>The Workflow Integration Advantage</h3>
              <p>
                What makes Scenith's approach particularly powerful is the seamless transition from AI generation
                to the <a href="https://scenith.in/tools/image-editing" className="inline-link">free Image Editor</a>.
                The AI handles the hardest part — creating a visually compelling, professionally composed background
                with the right mood, lighting, and aesthetic — and then the editor handles the structured design work:
                adding text layers, brand logos, call-to-action buttons, and precise cropping for platform specifications.
                This division of labour between AI and human editor produces results that neither could achieve alone
                as efficiently.
              </p>
            </div>

            <aside className="deepdive-aside">
              <div className="aside-card">
                <h4>🕐 Time Saved</h4>
                <p>Average banner design time drops from <strong>3–7 hours</strong> (traditional) to <strong>5–15 minutes</strong> (AI + editor).</p>
              </div>
              <div className="aside-card">
                <h4>💰 Cost Comparison</h4>
                <p>Professional designer: ₹5,000–₹50,000/project. Scenith AI: from $9/month for unlimited iterations.</p>
              </div>
              <div className="aside-card">
                <h4>🔄 Iteration Speed</h4>
                <p>Generate 10+ creative variants in the time it takes to brief a designer on a single concept.</p>
              </div>
              <div className="aside-card aside-cta-card">
                <h4>Ready to try it?</h4>
                <a
                  href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=aside_cta&utm_campaign=banner_tool_page"
                  className="aside-cta-btn"
                >
                  Open AI Banner Generator →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW SECTION ── */}
      <section className="banner-workflow-section" id="ai-banner-workflow" aria-labelledby="workflow-title">
        <div className="section-container">
          <div className="section-label">Complete Workflow</div>
          <h2 id="workflow-title" className="section-h2">
            The Professional AI Banner Creation Workflow
          </h2>
          <p className="section-desc">
            This is the workflow used by marketers, content creators, and agencies to produce
            platform-ready banner images with AI — from brief to download.
          </p>

          <div className="workflow-timeline">
            <div className="workflow-step">
              <div className="wf-step-num">1</div>
              <div className="wf-step-body">
                <h3>Define Your Banner Brief</h3>
                <p>Clarify: platform, dimensions, brand colours, key message, target emotion, and visual reference (e.g. "like Apple's product launch pages but warmer").</p>
              </div>
            </div>
            <div className="workflow-connector" />
            <div className="workflow-step">
              <div className="wf-step-num">2</div>
              <div className="wf-step-body">
                <h3>Craft Your AI Prompt</h3>
                <p>Translate your brief into a descriptive prompt. Include format hints ("wide landscape banner"), style ("cinematic", "minimal"), and composition ("text zone on the left third").</p>
              </div>
            </div>
            <div className="workflow-connector" />
            <div className="workflow-step">
              <div className="wf-step-num">3</div>
              <div className="wf-step-body">
                <h3>Generate Multiple Variants</h3>
                <p>Run 3–5 generations with slight prompt variations. Explore different model choices — some prompts shine in FLUX, others in GPT Image 1.</p>
              </div>
            </div>
            <div className="workflow-connector" />
            <div className="workflow-step">
              <div className="wf-step-num">4</div>
              <div className="wf-step-body">
                <h3>Refine in Image Editor</h3>
                <p>Take your best generation into the Image Editor. Add brand text, logo, CTA copy, and crop to exact platform dimensions.</p>
              </div>
            </div>
            <div className="workflow-connector" />
            <div className="workflow-step">
              <div className="wf-step-num">5</div>
              <div className="wf-step-body">
                <h3>Export & Deploy</h3>
                <p>Download the finished PNG. Upload directly to YouTube Studio, LinkedIn profile, Facebook Business Manager, or your website CMS.</p>
              </div>
            </div>
          </div>

          <div className="workflow-cta">
            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=workflow_section&utm_campaign=banner_tool_page"
              className="banner-main-cta-btn"
            >
              <span className="cta-btn-icon">🎨</span>
              Start Your Banner Workflow
              <span className="cta-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PLATFORM SPECS GUIDE ── */}
      <section className="banner-specs-section" id="banner-size-guide" aria-labelledby="specs-title">
        <div className="section-container">
          <div className="section-label">Platform Specifications</div>
          <h2 id="specs-title" className="section-h2">
            AI Banner Size Guide: Every Platform's Ideal Banner Dimensions
          </h2>
          <p className="section-desc">
            Use the AI generator to create your visual concept, then use the Image Editor to crop
            and resize to these exact specifications.
          </p>

          <div className="specs-table-wrapper">
            <table className="specs-table" aria-label="Banner dimensions by platform">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Banner Type</th>
                  <th>Recommended Size</th>
                  <th>AI Prompt Hint</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['YouTube', 'Channel Art', '2560×1440px', '"ultra-widescreen channel banner, TV-safe zone centre"'],
                  ['LinkedIn', 'Profile Banner', '1584×396px', '"professional landscape banner, 4:1 ratio, executive tone"'],
                  ['Facebook', 'Page Cover', '820×312px', '"wide horizontal cover photo, social media header"'],
                  ['Twitter / X', 'Profile Header', '1500×500px', '"Twitter header art, 3:1 panoramic format"'],
                  ['Instagram', 'Story / Ad', '1080×1920px', '"vertical story banner, portrait orientation, mobile-first"'],
                  ['Website', 'Hero Banner', '1920×600px', '"cinematic website hero, ultra-wide format, minimal text zone"'],
                  ['Email', 'Header', '600×200px', '"email newsletter header, clean horizontal banner"'],
                  ['Discord', 'Server Banner', '960×540px', '"16:9 community banner, gaming or community vibe"'],
                  ['Twitch', 'Offline Banner', '1920×1080px', '"full HD stream offline screen, dark gaming aesthetic"'],
                  ['Pinterest', 'Promoted Pin', '1000×1500px', '"vertical Pinterest pin banner, 2:3 ratio, lifestyle visual"'],
                ].map(([platform, type, size, hint]) => (
                  <tr key={platform + type}>
                    <td><strong>{platform}</strong></td>
                    <td>{type}</td>
                    <td><code>{size}</code></td>
                    <td className="specs-hint">{hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY DEEP DIVE ── */}
      <section className="banner-industry-section" id="ai-banner-by-industry" aria-labelledby="industry-title">
        <div className="section-container">
          <div className="section-label">Industry Use Cases</div>
          <h2 id="industry-title" className="section-h2">
            AI Banner Generator by Industry: Use Cases & Prompt Strategies
          </h2>
          <p className="section-desc">
            Different industries need fundamentally different visual languages. Here is how to adapt
            the AI banner generator to your specific sector.
          </p>

          <div className="industry-accordions">
            {[
              {
                industry: 'E-Commerce & Retail',
                icon: '🛍️',
                content: `E-commerce brands live and die by visual promotions. AI banner generators are transformative here because seasonal campaigns — Diwali, Holi, Christmas, Black Friday, End of Season Sale — require fresh visuals every few weeks. Traditionally this meant expensive design retainers. With AI, you can generate 20 sale banner variations across colour themes, product placements, and emotional tones in a single afternoon.

Key prompt elements for e-commerce banners: product category (fashion, electronics, beauty), the sale type ("flash sale", "grand opening", "clearance"), dominant colour emotion (red/gold for Diwali urgency, pastels for spring fashion), and compositional layout ("product image zone right side, headline text left side, confetti background").`,
              },
              {
                industry: 'Personal Branding & Creators',
                icon: '🎤',
                content: `For LinkedIn thought leaders, YouTube creators, podcast hosts, and personal brand builders, the banner image communicates authority, personality, and niche before a word is read. A well-generated LinkedIn banner that conveys "AI technology expert with a calm, analytical demeanour" or a YouTube channel art that immediately communicates "cinematic travel videography" can meaningfully increase follower conversion from profile visits.

Key prompt strategy: describe yourself indirectly through visual metaphor. Instead of "put my photo here", describe the environment, colour mood, and industry context: "futuristic data visualisation background, deep blue palette, neural network patterns, space for headshot on right, clean minimal text zone left".`,
              },
              {
                industry: 'SaaS & Tech Companies',
                icon: '💻',
                content: `Tech brands consistently benefit from AI-generated banners that visualise abstract concepts: data flowing through networks, cloud infrastructure at scale, AI processing pipelines, cybersecurity shields. These are notoriously hard and expensive to commission as illustrations — concept art studios charge ₹20,000–₹80,000 for a single hero image. AI generates compelling visual representations of these concepts in seconds.

For SaaS banners, the most effective prompts combine: technical visual metaphors ("interconnected API nodes", "code compiling in dark IDE", "abstract dashboard interface"), brand colour matching, and specific aesthetic directions ("flat illustration with gradient fills", "isometric 3D infographic style", "cinematic dark-mode product screenshot mockup").`,
              },
              {
                industry: 'Events & Entertainment',
                icon: '🎭',
                content: `Event organisers — concerts, conferences, webinars, hackathons, weddings — need banners that create excitement and communicate essential information within a glanceable visual. The AI excels at generating atmospheric backgrounds: dramatic stage lighting for concerts, professional conference halls for business events, festive outdoor settings for weddings.

The recommended workflow: generate the atmospheric visual background with AI (crowd energy, stage lights, confetti, architectural grandeur), then overlay event name, date, speakers, and ticket CTA in the Image Editor. This produces event banners that rival expensive agency work at a fraction of the cost and timeline.`,
              },
              {
                industry: 'Education & EdTech',
                icon: '📚',
                content: `Online courses, coaching programs, and educational platforms need banners that feel authoritative yet approachable. AI generation works particularly well for creating: subject-specific visual metaphors (microscopes and DNA for biology courses, circuit boards for electronics, globe imagery for international business), learning environment aesthetics (bright, energetic classroom vibes for kids' education; serious, focused desk setups for professional certifications), and achievement-forward imagery (graduation, success, breakthrough moments).

The AI handles the visual narrative; the editor adds course name, instructor branding, and platform trust signals.`,
              },
            ].map((item) => (
              <article key={item.industry} className="industry-block">
                <h3 className="industry-block-title">
                  <span>{item.icon}</span> {item.industry}
                </h3>
                <div className="industry-block-content">
                  {item.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="banner-compare-section" id="ai-banner-generator-comparison" aria-labelledby="compare-title">
        <div className="section-container">
          <div className="section-label">Tool Comparison</div>
          <h2 id="compare-title" className="section-h2">
            Scenith AI Banner Generator vs Other Tools: Honest Comparison
          </h2>

          <div className="compare-table-wrapper">
            <table className="compare-table" aria-label="AI banner generator comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="col-scenith">Scenith AI</th>
                  <th>Canva AI</th>
                  <th>Adobe Firefly</th>
                  <th>Midjourney</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Free to start', '✅ Yes', '✅ Limited', '⚠️ Trial only', '❌ No'],
                  ['Multiple AI models', '✅ 7+ models', '❌ Single model', '⚠️ 2 modes', '❌ Single model'],
                  ['Commercial rights', '✅ All plans', '⚠️ Paid plans', '✅ Yes', '⚠️ Paid only'],
                  ['Image Editor included', '✅ Free', '✅ Paid features', '❌ Separate', '❌ No'],
                  ['No watermarks', '✅ All plans', '⚠️ Paid only', '✅ Yes', '⚠️ Paid only'],
                  ['Pricing (India)', '$9/mo+', '₹899/mo+', '₹1,999/mo+', '$10/mo+'],
                  ['Web-based access', '✅ Yes', '✅ Yes', '✅ Yes', '❌ Discord only'],
                  ['Prompt-to-image control', '✅ Full', '⚠️ Limited', '✅ Full', '✅ Full'],
                ].map(([feature, scenith, canva, adobe, mid]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td className="col-scenith"><strong>{scenith}</strong></td>
                    <td>{canva}</td>
                    <td>{adobe}</td>
                    <td>{mid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="banner-faq-section" id="ai-banner-generator-faq" aria-labelledby="faq-title">
        <div className="section-container">
          <div className="section-label">FAQ</div>
          <h2 id="faq-title" className="section-h2">
            Frequently Asked Questions About AI Banner Generation
          </h2>

          <div className="faq-grid">
            {FAQ_ITEMS.map((item) => (
              <article key={item.q} className="faq-item">
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="banner-final-cta-section" id="get-started" aria-labelledby="final-cta-title">
        <div className="final-cta-bg">
          <div className="final-cta-orb-1" />
          <div className="final-cta-orb-2" />
        </div>
        <div className="section-container final-cta-inner">
          <div className="final-cta-badge">🎨 AI-Powered Banner Creation</div>
          <h2 id="final-cta-title" className="final-cta-h2">
            Your Next Banner Is One Prompt Away
          </h2>
          <p className="final-cta-desc">
            Stop waiting for designers. Stop fighting with complex tools. Describe your banner,
            choose your AI model, and have a professional-grade visual ready in under 60 seconds.
            Completely free to start — no credit card required.
          </p>

          <a
            href="https://scenith.in/tools/ai-image-generation?utm_source=ai_banner_generator&utm_medium=final_cta&utm_campaign=banner_tool_page"
            className="final-cta-btn"
            aria-label="Generate your AI banner for free"
          >
            <span>✨ Generate Your AI Banner Free</span>
            <span className="final-cta-arrow">→</span>
          </a>

          <div className="final-trust-row">
            <span>✅ No watermarks</span>
            <span>✅ Commercial rights</span>
            <span>✅ 7+ AI models</span>
            <span>✅ Free image editor included</span>
            <span>✅ Plans from $9/month</span>
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      <section className="banner-related-section" aria-labelledby="related-title">
        <div className="section-container">
          <h2 id="related-title" className="section-h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Complete Your Creative Stack
          </h2>
          <div className="related-grid">
            <a href="https://scenith.in/tools/image-editing" className="related-card">
              <span className="related-icon">🖼️</span>
              <h3>Free Image Editor</h3>
              <p>Add text, logos, and effects to your AI-generated banners. Full design toolkit, free.</p>
              <span className="related-cta">Open Editor →</span>
            </a>
            <a href="https://scenith.in/tools/ai-voice-generation" className="related-card">
              <span className="related-icon">🎤</span>
              <h3>AI Voice Generator</h3>
              <p>Add professional voiceovers to video ads that feature your AI banners.</p>
              <span className="related-cta">Try Voice Gen →</span>
            </a>
            <a href="https://scenith.in/tools/add-subtitles-to-videos" className="related-card">
              <span className="related-icon">📝</span>
              <h3>Subtitle Generator</h3>
              <p>Auto-add subtitles to your video campaigns with AI-powered transcription.</p>
              <span className="related-cta">Add Subtitles →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}