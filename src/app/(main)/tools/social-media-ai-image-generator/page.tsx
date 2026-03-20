import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../../../styles/tools/social-media-image.css';

export const metadata: Metadata = {
  title: 'Social Media AI Image Generator — Create Viral Posts Instantly | Scenith',
  description:
    'Generate stunning, platform-optimized AI images for Instagram, Facebook, LinkedIn, Twitter/X, Pinterest & TikTok in seconds. Free social media AI image generator — no design skills needed.',
  keywords: [
    'social media ai image generator',
    'ai image generator for instagram',
    'ai image generator for facebook',
    'social media post image generator',
    'ai generated social media images',
    'free social media image creator',
    'instagram ai image generator',
    'linkedin post image generator',
    'tiktok thumbnail ai generator',
    'pinterest ai image generator',
    'ai post image generator',
    'social media visual content ai',
    'generate social media graphics ai',
    'ai social media content creator',
    'free ai image generator social media 2026',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/social-media-ai-image-generator',
  },
  openGraph: {
    title: 'Social Media AI Image Generator — Create Viral Posts Instantly',
    description:
      'AI-powered image generator built for social media creators. Generate platform-perfect visuals for Instagram, LinkedIn, Pinterest, TikTok & more — free.',
    url: 'https://scenith.in/tools/social-media-ai-image-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/social-media-ai-image-generator-og.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Social Media AI Image Generator',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media AI Image Generator — Create Viral Posts Instantly',
    description:
      'Generate scroll-stopping AI images for every social platform — free. No design skills needed.',
    images: ['https://scenith.in/images/social-media-ai-image-generator-og.png'],
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

const PLATFORM_DATA = [
  {
    name: 'Instagram',
    icon: '📸',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.08)',
    border: 'rgba(225,48,108,0.2)',
    formats: ['Square Post 1080×1080', 'Story 1080×1920', 'Carousel Slide', 'Reel Cover'],
    tips: 'Warm tones, high contrast, and lifestyle-driven imagery perform best on Instagram. Aesthetic consistency across your feed builds follower trust.',
    bestStyles: ['Realistic Photo', 'Artistic/Painting', 'Vintage/Retro'],
    prompts: [
      'Golden hour beach sunset, warm amber tones, cinematic, Instagram aesthetic, no text',
      'Minimalist flat lay product shot, white marble surface, soft natural light, editorial',
      'Aesthetic coffee moment, bokeh background, warm brown palette, cozy lifestyle',
    ],
    stat: '2.4B users',
    growth: 'Visual-first platform',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    color: '#0077B5',
    bg: 'rgba(0,119,181,0.08)',
    border: 'rgba(0,119,181,0.2)',
    formats: ['Post Image 1200×627', 'Article Cover 1920×1080', 'Profile Banner 1584×396'],
    tips: 'Professional yet human imagery outperforms corporate stock photos. Show real processes, data visualizations, and genuine workplace moments.',
    bestStyles: ['Realistic Photo', 'Digital Art', '3D Render'],
    prompts: [
      'Modern open office, diverse team collaborating around glass table, natural light, professional',
      'Abstract data visualization, blue nodes network, clean white background, business infographic style',
      'Thought leader speaking on stage, dramatic spotlight, audience silhouette, conference setting',
    ],
    stat: '1B users',
    growth: '40% B2B reach',
  },
  {
    name: 'Pinterest',
    icon: '📌',
    color: '#E60023',
    bg: 'rgba(230,0,35,0.07)',
    border: 'rgba(230,0,35,0.18)',
    formats: ['Standard Pin 1000×1500', 'Square Pin 1000×1000', 'Infographic Pin 1000×3000'],
    tips: 'Vertical tall images dominate Pinterest feeds. Soft, aspirational, and pastel-toned visuals drive saves. DIY, recipe, and decor aesthetics dominate.',
    bestStyles: ['Artistic/Painting', 'Vintage/Retro', 'Realistic Photo'],
    prompts: [
      'Boho living room interior, warm terracotta tones, macrame wall art, golden hour, Pinterest aesthetic',
      'Flat lay recipe ingredients, rustic wooden surface, fresh herbs, overhead shot, food photography',
      'Hand-lettered inspirational quote background, watercolor florals, soft pink and sage green',
    ],
    stat: '518M users',
    growth: 'Highest purchase intent',
  },
  {
    name: 'Facebook',
    icon: '👍',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.07)',
    border: 'rgba(24,119,242,0.18)',
    formats: ['Post 1200×630', 'Story 1080×1920', 'Event Cover 1920×1005', 'Ad 1200×628'],
    tips: 'Facebook audiences respond to relatable, community-driven imagery. Local events, family moments, and behind-the-scenes content drive the highest organic reach.',
    bestStyles: ['Realistic Photo', 'Fantasy', 'Digital Art'],
    prompts: [
      'Small business owner smiling behind counter, warm shop interior, authentic and approachable',
      'Community event scene, people laughing outdoors, golden hour, inclusive diverse group',
      'Before-after transformation split image, clean graphic design, high contrast colors',
    ],
    stat: '3.07B users',
    growth: 'Largest social network',
  },
  {
    name: 'Twitter / X',
    icon: '🐦',
    color: '#000000',
    bg: 'rgba(0,0,0,0.05)',
    border: 'rgba(0,0,0,0.15)',
    formats: ['In-stream Image 1600×900', 'Profile Banner 1500×500', 'Card Image 800×418'],
    tips: 'High-information, punchy visuals work on X/Twitter. Bold typography-ready backgrounds, memes, charts, and striking conceptual images stop the scroll.',
    bestStyles: ['Digital Art', 'Sci-Fi', '3D Render'],
    prompts: [
      'Dramatic split-tone portrait, half light half shadow, editorial photography, high contrast black white',
      'Abstract tech concept visualization, circuit board patterns, glowing blue nodes, dark background',
      'Satirical editorial cartoon style, bold outlines, limited color palette, newspaper illustration',
    ],
    stat: '611M users',
    growth: 'Highest virality rate',
  },
  {
    name: 'TikTok',
    icon: '🎵',
    color: '#FE2C55',
    bg: 'rgba(254,44,85,0.07)',
    border: 'rgba(254,44,85,0.18)',
    formats: ['Video Thumbnail 1080×1920', 'Profile Image 200×200', 'Feed Image 1080×1080'],
    tips: 'TikTok rewards visually chaotic, energetic, and trend-driven imagery. Bright colors, bold text zones, and youth-culture aesthetics perform best.',
    bestStyles: ['Anime/Manga', 'Digital Art', 'Fantasy'],
    prompts: [
      'Y2K aesthetic bedroom, iridescent holographic accents, neon lights, trendy Gen-Z interior',
      'Anime-style character, expressive face, vibrant hair, urban street background, dynamic pose',
      'Dreamcore surreal landscape, pastel cotton candy sky, floating islands, aesthetic vaporwave',
    ],
    stat: '1.9B users',
    growth: 'Fastest growing',
  },
];

const CONTENT_TYPES = [
  { emoji: '🚀', title: 'Product Launch Posts', description: 'Create buzz-worthy product reveal images that feel polished enough for a Fortune 500 launch — without the agency price tag. Perfect for Shopify stores, app launches, and course drops.' },
  { emoji: '📊', title: 'Infographic Backgrounds', description: 'Generate clean, visually rich backgrounds for your data and statistics posts. Let AI handle the visual layer while you focus on the message — works brilliantly on LinkedIn and Twitter.' },
  { emoji: '🎉', title: 'Event Announcements', description: 'Stop using generic event flyer templates. Generate unique, on-brand visuals for webinars, workshops, meetups, and product demos that actually represent your event\'s energy.' },
  { emoji: '💬', title: 'Quote & Thought Leadership Cards', description: 'Turn your best insights into shareable, save-worthy quote cards. AI-generated backgrounds make your words look as powerful as they sound — great for Instagram and LinkedIn carousels.' },
  { emoji: '🛍️', title: 'Flash Sale & Promotion Graphics', description: 'Generate urgency-driving visuals for limited-time offers, discount announcements, and seasonal sales. High-contrast, attention-grabbing imagery that stops the scroll mid-feed.' },
  { emoji: '📸', title: 'Behind-the-Scenes Aesthetic Shots', description: 'Can\'t always shoot real BTS content? Use AI to create authentic-feeling workspace, process, and team imagery that keeps your content calendar full without a photographer.' },
  { emoji: '🌐', title: 'Campaign & Series Visuals', description: 'Build a cohesive visual identity across a 30-day campaign by using consistent style prompts. Create a visual series that signals professionalism and builds brand recognition.' },
  { emoji: '📱', title: 'Story & Reel Covers', description: 'Design eye-catching Story highlight covers and Reel thumbnails that make your profile look curated and intentional — the visual equivalent of a clean Instagram grid.' },
];

const PROMPT_FORMULAS = [
  {
    formula: 'The Platform Native',
    structure: '[subject] + [platform aesthetic] + [mood] + [lighting] + [no text]',
    example: '"A ceramic coffee mug, Instagram aesthetic, cozy warm tones, morning soft light, no text"',
    use: 'Best for organic-feeling brand posts',
  },
  {
    formula: 'The Viral Hook',
    structure: '[emotion-driven scene] + [bold visual contrast] + [trending aesthetic] + [clean composition]',
    example: '"Shocked expression face, bright yellow background, meme-style, high contrast, Twitter viral format"',
    use: 'Best for engagement-bait and reactions',
  },
  {
    formula: 'The Professional Statement',
    structure: '[business context] + [diverse people] + [environment detail] + [cinematic quality]',
    example: '"Startup team brainstorming, whiteboard background, modern office, diverse, cinematic, natural window light"',
    use: 'Best for LinkedIn and B2B content',
  },
  {
    formula: 'The Aesthetic Mood Board',
    structure: '[color palette] + [vibe/era] + [textures] + [composition style]',
    example: '"Terracotta and sage green palette, cottagecore aesthetic, linen textures, flat lay overhead composition"',
    use: 'Best for Pinterest and Instagram brand building',
  },
  {
    formula: 'The Product Hero Shot',
    structure: '[product type] + [surface/background] + [lighting technique] + [commercial photography style]',
    example: '"Skincare serum bottle, volcanic black stone surface, dramatic rim lighting, luxury commercial photography"',
    use: 'Best for e-commerce and product brands',
  },
];

const FAQ_DATA = [
  {
    q: 'What image sizes does the AI generate for social media?',
    a: 'Scenith\'s AI image generator creates 1024×1024 high-resolution PNG images by default — a square format that works natively on Instagram, Facebook, Twitter, Pinterest, LinkedIn, and TikTok. You can then crop or resize within our free image editor for platform-specific formats like Instagram Stories (9:16), LinkedIn banners, or Pinterest\'s tall pins.',
  },
  {
    q: 'Can I use AI-generated social media images for paid advertising?',
    a: 'Yes. All images generated on Scenith come with full commercial rights — including paid social media advertising on Facebook Ads, Instagram Ads, LinkedIn Campaigns, Pinterest Ads, and TikTok Ads. There are no watermarks, no attribution requirements, and no royalty fees.',
  },
  {
    q: 'How do I make AI images look consistent across my social media profile?',
    a: 'The key is prompt consistency. Save your exact prompt structure and always use the same art style preset. For example, if your brand uses "Realistic Photo" style with "warm tones, golden hour lighting," use those exact qualifiers in every prompt. This builds visual coherence that makes your profile grid look professionally curated.',
  },
  {
    q: 'What style works best for Instagram AI images?',
    a: '"Realistic Photo" and "Artistic/Painting" styles consistently outperform other presets on Instagram. Realistic photography works for lifestyle and product brands, while artistic painting styles excel for creative accounts, artists, and brands with a distinctive visual identity.',
  },
  {
    q: 'Can I create LinkedIn banner images with AI?',
    a: 'Absolutely. LinkedIn company page banners (1584×396px) and personal profile banners (1584×396px) can be created by generating a wide landscape-oriented image using our AI and then editing it in our free image editor. Use "Digital Art" or "3D Render" styles for tech brands, "Realistic Photo" for professional service firms.',
  },
  {
    q: 'How many social media images can I generate for free?',
    a: 'New users receive 50 free credits on signup. The cost per image varies by model — from 2 credits (GPT Mini) to 12 credits (GPT Medium). This gives you between 4 and 25 free AI images to start. No credit card required. Paid plans start from affordable monthly credit bundles for power users.',
  },
  {
    q: 'Is AI-generated content allowed on social media platforms?',
    a: 'Yes — all major platforms (Instagram, Facebook, LinkedIn, Pinterest, Twitter/X, TikTok) allow AI-generated images. Some platforms like LinkedIn encourage disclosure when AI content is used in certain contexts. Always check platform-specific creator guidelines for advertising use cases.',
  },
  {
    q: 'Can I create a full month of social media content with AI images?',
    a: 'Yes — this is one of the most powerful use cases. Content creators and social media managers use Scenith to batch-create 30 days of visual content in one session. By preparing a content calendar of prompts and generating them in bulk, you can plan an entire month of consistent, brand-aligned imagery in under an hour.',
  },
];

const COMPARISON_DATA = [
  { feature: 'Free credits on signup', scenith: '50 credits', canva: 'Limited AI generations', adobe: 'Trial only', midjourney: 'No free tier' },
  { feature: 'Social media style presets', scenith: '8 presets', canva: 'Template-based', adobe: 'Firefly styles', midjourney: 'Prompt only' },
  { feature: 'Commercial use on free plan', scenith: '✅ Yes', canva: '⚠️ Limited', adobe: '⚠️ Paid only', midjourney: '❌ No' },
  { feature: 'No watermark', scenith: '✅ Yes', canva: '⚠️ Some templates', adobe: '✅ Yes', midjourney: '✅ Yes' },
  { feature: 'Download format', scenith: 'PNG (high-res)', canva: 'PNG/JPG/PDF', adobe: 'PNG/JPG', midjourney: 'PNG/JPG' },
  { feature: 'Integrated image editor', scenith: '✅ Built-in', canva: '✅ Full editor', adobe: '✅ Photoshop', midjourney: '❌ None' },
  { feature: 'Negative prompt control', scenith: '✅ Yes', canva: '❌ No', adobe: '⚠️ Limited', midjourney: '✅ Yes' },
];

export default function SocialMediaAIImageGeneratorPage() {
  return (
    <div className="smig-page">
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/social-media-ai-image-generator#webpage',
                url: 'https://scenith.in/tools/social-media-ai-image-generator',
                name: 'Social Media AI Image Generator — Create Viral Posts Instantly | Scenith',
                description: 'Generate stunning, platform-optimized AI images for Instagram, Facebook, LinkedIn, Twitter/X, Pinterest & TikTok in seconds.',
                isPartOf: { '@id': 'https://scenith.in/#website' },
                about: { '@id': 'https://scenith.in/tools/social-media-ai-image-generator#tool' },
                breadcrumb: { '@id': 'https://scenith.in/tools/social-media-ai-image-generator#breadcrumb' },
                inLanguage: 'en-IN',
                dateModified: '2026-03-01',
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://scenith.in/tools/social-media-ai-image-generator#tool',
                name: 'Scenith Social Media AI Image Generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                url: 'https://scenith.in/tools/ai-image-generation',
                description: 'AI-powered image generator optimized for creating platform-specific social media content for Instagram, Facebook, LinkedIn, Pinterest, TikTok, and Twitter/X.',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
                featureList: [
                  'Platform-specific image generation',
                  '8 social media art styles',
                  'Instagram, LinkedIn, Pinterest, TikTok optimization',
                  'Commercial use allowed',
                  'No watermarks',
                  'Free to start',
                ],
                author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/social-media-ai-image-generator#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  { '@type': 'ListItem', position: 3, name: 'Social Media AI Image Generator', item: 'https://scenith.in/tools/social-media-ai-image-generator' },
                ],
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/social-media-ai-image-generator#faq',
                mainEntity: FAQ_DATA.map(({ q, a }) => ({
                  '@type': 'Question',
                  name: q,
                  acceptedAnswer: { '@type': 'Answer', text: a },
                })),
              },
              {
                '@type': 'HowTo',
                name: 'How to Generate AI Images for Social Media',
                description: 'Create platform-optimized social media images using Scenith\'s AI image generator in 4 steps.',
                totalTime: 'PT2M',
                step: [
                  { '@type': 'HowToStep', position: 1, name: 'Choose your platform', text: 'Identify which social media platform you\'re creating for — Instagram, LinkedIn, Pinterest, TikTok, Facebook, or Twitter/X. Each has different visual expectations.' },
                  { '@type': 'HowToStep', position: 2, name: 'Write a platform-optimized prompt', text: 'Use platform-specific prompt formulas. For Instagram, include aesthetic qualifiers like warm tones and golden hour. For LinkedIn, describe professional settings.' },
                  { '@type': 'HowToStep', position: 3, name: 'Select art style and AI model', text: 'Choose from 8 art style presets (Realistic Photo, Digital Art, Anime, etc.) and select the AI model that fits your quality and credit budget.' },
                  { '@type': 'HowToStep', position: 4, name: 'Generate, download, and post', text: 'Click generate, wait 10-30 seconds, download your high-resolution PNG, and upload directly to your social platform.' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="smig-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Social Media AI Image Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="smig-hero" id="hero">
        <div className="smig-hero-bg">
          <div className="smig-orb smig-orb-1" />
          <div className="smig-orb smig-orb-2" />
          <div className="smig-orb smig-orb-3" />
          <div className="smig-grid-lines" />
        </div>

        <div className="smig-hero-inner">
          <div className="smig-hero-badge">
            <span>✨</span>
            <span>Free AI Image Generator for Social Media — 2026</span>
          </div>

          <h1 className="smig-hero-title">
            Generate <span className="smig-gradient-text">Scroll-Stopping</span><br />
            Social Media Images with AI
          </h1>

          <p className="smig-hero-subtitle">
            Create platform-perfect AI images for Instagram, LinkedIn, Pinterest, TikTok,
            Facebook & Twitter/X in under 30 seconds. No design skills. No stock photo subscription.
            Just your idea, and an image ready to post.
          </p>

          <div className="smig-platform-pills">
            {['📸 Instagram', '💼 LinkedIn', '📌 Pinterest', '🎵 TikTok', '👍 Facebook', '🐦 Twitter/X'].map((p) => (
              <span key={p} className="smig-pill">{p}</span>
            ))}
          </div>

          {/* ── HERO CTA ── */}
          <Link
            href="https://scenith.in/tools/ai-image-generation?utm_source=social_media_ai_image_generator&utm_medium=hero_cta&utm_campaign=tool_landing_page&utm_content=hero_generate_button"
            className="smig-hero-cta"
          >
            <span className="smig-cta-icon">✨</span>
            <span className="smig-cta-text">
              <strong>Generate Your Social Media Image — Free</strong>
              <small>50 credits on signup · No credit card needed · Instant download</small>
            </span>
            <span className="smig-cta-arrow">→</span>
          </Link>

          <div className="smig-trust-row">
            <span>⚡ Results in ~15 seconds</span>
            <span>🔒 No watermarks</span>
            <span>📥 High-res PNG</span>
            <span>✅ Commercial use free</span>
          </div>
        </div>

        {/* Platform showcase cards */}
        <div className="smig-platform-cards-row" aria-hidden="true">
          {['Instagram', 'LinkedIn', 'Pinterest', 'TikTok'].map((name) => (
            <div key={name} className="smig-preview-card">
              <div className="smig-preview-shimmer" />
              <span className="smig-preview-label">{name} Ready</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT MAKES SOCIAL MEDIA AI IMAGES DIFFERENT ── */}
      <section className="smig-section smig-intro-section" id="what-makes-it-different">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Why Social Media Demands a Different Kind of AI Image</h2>
            <p className="smig-section-sub">
              Not all AI-generated images are created equal. Social media platforms have distinct visual
              languages, aspect ratio expectations, algorithmic preferences, and audience psychology.
              Understanding these differences is the gap between a post that dies at 12 impressions
              and one that goes viral.
            </p>
          </div>

          <div className="smig-intro-grid">
            <div className="smig-intro-card">
              <div className="smig-intro-icon">📐</div>
              <h3>Platform-Native Dimensions</h3>
              <p>
                Instagram's square feed, Pinterest's tall pins, LinkedIn's horizontal banners, and
                TikTok's vertical thumbnails all have distinct aspect ratios. Generating the right
                starting visual makes downstream resizing lossless and composition-preserving.
              </p>
            </div>
            <div className="smig-intro-card">
              <div className="smig-intro-icon">🧠</div>
              <h3>Audience-Matched Aesthetics</h3>
              <p>
                LinkedIn audiences expect muted, professional photography. TikTok skews maximalist
                and chaotic. Pinterest thrives on aspirational softness. Instagram rewards saturated
                lifestyle imagery. AI image generation lets you match the exact visual register of each
                platform's dominant content.
              </p>
            </div>
            <div className="smig-intro-card">
              <div className="smig-intro-icon">🔁</div>
              <h3>Content Velocity at Scale</h3>
              <p>
                Professional social media management requires 3–7 posts per week across multiple
                platforms. AI image generation collapses the production timeline from hours to
                minutes, enabling small teams to operate with the visual output of a full creative agency.
              </p>
            </div>
            <div className="smig-intro-card">
              <div className="smig-intro-icon">🎯</div>
              <h3>Algorithmic Advantage</h3>
              <p>
                Original imagery consistently outperforms stock photos in organic reach algorithms
                across Instagram, Pinterest, and LinkedIn. AI-generated images are unique by
                definition — every generation produces a fingerprint-original visual that no stock
                photo library can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM GUIDE ── */}
      <section className="smig-section smig-platforms-section" id="platforms">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Platform-by-Platform Social Media AI Image Guide</h2>
            <p className="smig-section-sub">
              Each social platform has a distinct visual culture. Here's exactly what works, what
              style preset to use, and which prompts drive the best results — backed by what we've
              seen across thousands of Scenith-generated images.
            </p>
          </div>

          <div className="smig-platforms-grid">
            {PLATFORM_DATA.map((platform) => (
              <article
                key={platform.name}
                className="smig-platform-card"
                style={{
                  '--platform-color': platform.color,
                  '--platform-bg': platform.bg,
                  '--platform-border': platform.border,
                } as React.CSSProperties}
              >
                <div className="smig-platform-header">
                  <span className="smig-platform-icon">{platform.icon}</span>
                  <div>
                    <h3 className="smig-platform-name">{platform.name}</h3>
                    <div className="smig-platform-meta">
                      <span>{platform.stat}</span>
                      <span>·</span>
                      <span>{platform.growth}</span>
                    </div>
                  </div>
                </div>

                <p className="smig-platform-tip">{platform.tips}</p>

                <div className="smig-platform-formats">
                  <strong>Supported Formats:</strong>
                  <div className="smig-format-tags">
                    {platform.formats.map((f) => (
                      <span key={f} className="smig-format-tag">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="smig-platform-styles">
                  <strong>Best AI Styles:</strong>
                  <div className="smig-style-tags">
                    {platform.bestStyles.map((s) => (
                      <span key={s} className="smig-style-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="smig-platform-prompts">
                  <strong>Example Prompts That Work:</strong>
                  <ul>
                    {platform.prompts.map((prompt, i) => (
                      <li key={i}>
                        <span className="smig-prompt-quote">"{prompt}"</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`https://scenith.in/tools/ai-image-generation?utm_source=social_media_ai_image_generator&utm_medium=platform_card&utm_campaign=tool_landing_page&utm_content=${platform.name.toLowerCase().replace(/\//g, '_')}_cta`}
                  className="smig-platform-cta"
                >
                  Generate {platform.name} Images →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT TYPES ── */}
      <section className="smig-section smig-content-types-section" id="content-types">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>8 Types of Social Media Content You Can Generate with AI Today</h2>
            <p className="smig-section-sub">
              Social media content strategy isn't just about frequency — it's about variety. AI image
              generation makes it possible to produce all content types consistently, even with a
              one-person team or a bootstrapped budget.
            </p>
          </div>

          <div className="smig-content-types-grid">
            {CONTENT_TYPES.map((ct) => (
              <article key={ct.title} className="smig-content-type-card">
                <div className="smig-ct-emoji">{ct.emoji}</div>
                <h3>{ct.title}</h3>
                <p>{ct.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMPT FORMULAS ── */}
      <section className="smig-section smig-prompts-section" id="prompt-formulas">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>5 Proven Prompt Formulas for Social Media AI Images That Actually Perform</h2>
            <p className="smig-section-sub">
              The quality of your AI-generated social media image is directly proportional to the
              quality of your prompt. These formula structures have been refined across thousands of
              generations to consistently produce scroll-stopping visuals.
            </p>
          </div>

          <div className="smig-formulas-list">
            {PROMPT_FORMULAS.map((pf, i) => (
              <div key={pf.formula} className="smig-formula-card">
                <div className="smig-formula-num">0{i + 1}</div>
                <div className="smig-formula-body">
                  <h3 className="smig-formula-title">{pf.formula}</h3>
                  <div className="smig-formula-structure">
                    <code>{pf.structure}</code>
                  </div>
                  <div className="smig-formula-example">
                    <span className="smig-formula-ex-label">Example →</span>
                    <span className="smig-formula-ex-text">{pf.example}</span>
                  </div>
                  <div className="smig-formula-use">
                    <span>✅ {pf.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="smig-prompt-tips-box">
            <h3>🔑 The Golden Rules of Social Media AI Prompts</h3>
            <div className="smig-tips-grid">
              <div>
                <strong>Always add "no text"</strong>
                <p>AI models sometimes hallucinate garbled text into images. Adding "no text, no watermark" to your prompt prevents this and keeps images clean for your own captions.</p>
              </div>
              <div>
                <strong>Reference real photography terms</strong>
                <p>Words like "golden hour," "bokeh background," "rim lighting," "overhead shot," "wide angle," and "macro closeup" signal real photographic compositions the AI understands deeply.</p>
              </div>
              <div>
                <strong>Name the color palette explicitly</strong>
                <p>Instead of "warm colors," say "terracotta, burnt sienna, and cream palette." Specific color naming dramatically improves palette consistency across multiple generations.</p>
              </div>
              <div>
                <strong>Use platform aesthetic cues</strong>
                <p>Phrases like "Instagram aesthetic," "Pinterest-worthy," "LinkedIn professional," and "TikTok trending" act as strong style signals that align generation with platform-native content patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO USE ── */}
      <section className="smig-section smig-howto-section" id="how-to-use">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>How to Generate AI Images for Social Media: Complete 2026 Workflow</h2>
            <p className="smig-section-sub">
              From blank canvas to ready-to-post social media image in under 5 minutes — here's the
              exact workflow used by content creators who produce 100+ posts per month using Scenith.
            </p>
          </div>

          <div className="smig-steps">
            {[
              {
                num: '01',
                title: 'Map Your Content Calendar First',
                body: 'Before opening the generator, list the 5–7 posts you need this week. For each post, identify the platform, the content type (product, lifestyle, quote, event), and the emotion you want the visual to evoke (excitement, trust, aspiration, urgency). This pre-planning step makes your prompts 10× more focused.',
                tip: 'Pro Workflow: Use a simple spreadsheet with columns for Platform, Post Type, Desired Emotion, Draft Prompt. Fill this before generating.',
              },
              {
                num: '02',
                title: 'Write Your Platform-Specific Prompt',
                body: 'Use one of the 5 prompt formulas above as your starting structure. Reference the platform you\'re targeting explicitly in the prompt. Be specific about lighting (golden hour, studio, neon), composition (centered, rule of thirds, flat lay), and mood (vibrant, minimal, cinematic). Always end with "no text, no watermark."',
                tip: 'Pro Tip: Keep a "prompt swipe file" — a saved list of prompts that worked well. AI image generation is iterative; what works once tends to work again with small variations.',
              },
              {
                num: '03',
                title: 'Choose the Right Style Preset and Model',
                body: 'The art style preset is arguably more impactful than the prompt itself. "Realistic Photo" for brand authenticity, "Digital Art" for tech and SaaS brands, "Artistic/Painting" for creative and wellness brands, "Anime" for Gen-Z oriented brands, "3D Render" for product visualization. The model tier affects render quality — for hero images, use a higher-credit model; for content at scale, lighter models work great.',
                tip: 'Pro Tip: Test the same prompt across 2–3 style presets before committing. The difference between "Realistic Photo" and "Digital Art" for the same concept can be dramatic.',
              },
              {
                num: '04',
                title: 'Generate, Evaluate, and Iterate',
                body: 'Click generate and evaluate critically. Ask: Does this stop the scroll? Does it match the platform\'s visual language? Is the composition clean enough to add text overlay if needed? If not — iterate the prompt. Change one variable at a time: add a lighting qualifier, shift the color palette direction, or change the composition style.',
                tip: 'Pro Tip: Generate 3–5 variations of your hero image before choosing. Slight prompt tweaks produce dramatically different outputs.',
              },
              {
                num: '05',
                title: 'Edit for Platform Specs and Post',
                body: 'Download your PNG and open it in Scenith\'s free image editor. Crop to platform-specific dimensions, add your brand\'s text overlay if needed, apply a light filter for tonal consistency, and export. Then upload directly to your social platform. The whole process — from prompt to published post — typically takes 3–7 minutes.',
                tip: 'Pro Tip: Create a set of branded text overlay templates in the editor. Save them as project templates so you can batch-apply your brand font and color system across all generated images quickly.',
              },
            ].map((step) => (
              <article key={step.num} className="smig-step-card">
                <div className="smig-step-num">{step.num}</div>
                <div className="smig-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <div className="smig-step-tip">
                    <span className="smig-tip-label">💡 {step.tip}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="smig-section smig-comparison-section" id="comparison">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Social Media AI Image Generator Comparison: Scenith vs Alternatives</h2>
            <p className="smig-section-sub">
              Before committing to any AI image generation tool for your social media workflow,
              here's an honest feature-by-feature comparison of what you actually get.
            </p>
          </div>

          <div className="smig-table-wrapper">
            <table className="smig-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="smig-col-scenith">Scenith ✨</th>
                  <th>Canva AI</th>
                  <th>Adobe Firefly</th>
                  <th>Midjourney</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr key={row.feature}>
                    <td className="smig-feature-col">{row.feature}</td>
                    <td className="smig-col-scenith">{row.scenith}</td>
                    <td>{row.canva}</td>
                    <td>{row.adobe}</td>
                    <td>{row.midjourney}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="smig-comparison-note">
            <p>
              <strong>Why social media managers choose Scenith:</strong> The combination of free
              commercial use, an integrated image editor, and a credit-based model (rather than
              a flat subscription) makes Scenith particularly well-suited for social media workflows
              where volume, speed, and brand rights matter most.
            </p>
          </div>
        </div>
      </section>

      {/* ── USE CASES DEEP DIVE ── */}
      <section className="smig-section smig-usecases-section" id="use-cases">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Who Uses Social Media AI Image Generators in 2026? Real Use Cases</h2>
            <p className="smig-section-sub">
              AI image generation for social media isn't just a trend — it's become infrastructure
              for the modern content creator economy. Here's who's using it, and how.
            </p>
          </div>

          <div className="smig-usecases-grid">
            {[
              {
                icon: '🛍️',
                role: 'E-commerce Brand Owners',
                detail: 'D2C brands use AI image generation to produce product lifestyle imagery at a fraction of traditional photoshoot costs. Rather than booking a studio for $2,000 to get 20 images, a Shopify store owner generates 50 unique product-in-context images in an afternoon. Instagram feeds built with AI-enhanced product imagery routinely see 2–3× the organic engagement of stock-photo-heavy accounts.',
                platforms: 'Instagram · Pinterest · Facebook',
              },
              {
                icon: '📱',
                role: 'Content Creators & Influencers',
                detail: 'Micro and mid-tier creators use AI image generation to maintain posting consistency during travel, burnout, or creative blocks. A single well-crafted prompt library means never staring at a blank Canva canvas again. Many creators report generating an entire week\'s Instagram content in under 90 minutes using AI, freeing more time for filming and community engagement.',
                platforms: 'Instagram · TikTok · Pinterest',
              },
              {
                icon: '💼',
                role: 'B2B Marketers & SaaS Companies',
                detail: 'LinkedIn-focused B2B teams use AI image generation for thought leadership posts, case study covers, webinar promotional graphics, and product feature announcements. The "Digital Art" and "3D Render" styles resonate strongly with tech-savvy LinkedIn audiences, producing a sophisticated visual identity without a full-time designer.',
                platforms: 'LinkedIn · Twitter/X',
              },
              {
                icon: '🏪',
                role: 'Local Business & Service Owners',
                detail: 'Restaurants, salons, fitness studios, and local service businesses use AI image generation to stay visually competitive with larger brands on Facebook and Instagram. Generating seasonal promotional images, behind-the-scenes aesthetic shots, and event announcements in minutes — rather than relying on expensive freelance designers for every post.',
                platforms: 'Facebook · Instagram · Google Business',
              },
              {
                icon: '🎓',
                role: 'Course Creators & Coaches',
                detail: 'Online educators generating course promo imagery, webinar event banners, free resource graphics, and brand-building content use AI heavily. Consistent visual branding across social platforms signals professionalism and builds course purchase confidence — AI makes this achievable for solo creators.',
                platforms: 'LinkedIn · Instagram · Pinterest',
              },
              {
                icon: '🏢',
                role: 'Social Media Agencies',
                detail: 'Digital agencies managing multiple client accounts use AI image generation to dramatically increase content production capacity. A two-person creative team can handle 8–12 client social accounts simultaneously when AI handles the initial visual concept generation and human designers handle the brand refinement layer.',
                platforms: 'All platforms',
              },
            ].map((uc) => (
              <article key={uc.role} className="smig-usecase-card">
                <div className="smig-uc-icon">{uc.icon}</div>
                <h3>{uc.role}</h3>
                <p>{uc.detail}</p>
                <div className="smig-uc-platforms">{uc.platforms}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="smig-stats-strip" aria-label="Social media statistics">
        <div className="smig-stats-inner">
          {[
            { stat: '91%', label: 'of marketers use visual content for social media (Venngage, 2025)' },
            { stat: '650%', label: 'more engagement on posts with images vs text-only (Buffer)' },
            { stat: '3.2×', label: 'higher organic reach for original imagery vs stock photos on Instagram' },
            { stat: '67%', label: 'of B2B buyers say visual quality influences purchase intent (LinkedIn)' },
          ].map(({ stat, label }) => (
            <div key={stat} className="smig-stat-block">
              <span className="smig-stat-num">{stat}</span>
              <span className="smig-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE SCIENCE SECTION ── */}
      <section className="smig-section smig-science-section" id="science-of-visual-content">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>The Psychology and Science Behind High-Performing Social Media Images</h2>
            <p className="smig-section-sub">
              Understanding what makes a social media image perform well isn't guesswork — it's
              science. These psychological and platform-algorithmic principles should inform every
              AI image prompt you write.
            </p>
          </div>

          <div className="smig-science-blocks">
            <div className="smig-science-block">
              <h3>🎨 Color Psychology in Social Media Visuals</h3>
              <p>
                Color is processed by the human brain 60,000 times faster than text. Different
                color palettes trigger distinct emotional responses that align with different content
                goals. Warm tones (amber, terracotta, coral) evoke warmth and approachability —
                ideal for lifestyle, food, and wellness brands on Instagram. Cool blues and grays
                project trust and competence — dominant in LinkedIn-performing B2B content. Bold
                contrasting colors (yellow-black, red-white) trigger urgency — high performers in
                promotional and flash sale content.
              </p>
              <p>
                When writing AI image prompts for social media, explicitly naming your desired color
                palette dramatically improves emotional alignment. Specify hex values, color names,
                or reference palettes like "earth tones," "pastel palette," or "monochromatic blue."
              </p>
            </div>

            <div className="smig-science-block">
              <h3>👁️ Visual Hierarchy and the Scroll-Stop Mechanism</h3>
              <p>
                Eye-tracking studies show that social media users make a feed-scroll decision in
                approximately 1.7 seconds per post. Images that stop the scroll share a common
                characteristic: a single dominant visual anchor — one thing the eye immediately
                travels to. This could be a human face, a dramatic light source, an unexpected
                color, or a disruptive compositional choice.
              </p>
              <p>
                AI image prompts that specify composition (centered subject, rule of thirds, negative
                space left side, diagonal composition) consistently outperform vague subject-only
                prompts. When you tell the AI both what to show and how to frame it, the resulting
                visual has the structural hierarchy that stops scrolling thumbs.
              </p>
            </div>

            <div className="smig-science-block">
              <h3>🤖 How Social Algorithms Evaluate Visual Content</h3>
              <p>
                Instagram, Pinterest, LinkedIn, and TikTok all use computer vision systems to
                analyze the content of images before distributing them. These systems evaluate
                image clarity, originality signals (non-stock), subject recognition, text-to-image
                ratio, and stylistic alignment with platform norms.
              </p>
              <p>
                AI-generated images that are visually clean, compositionally clear, and aesthetically
                coherent tend to receive favorable early distribution from these systems. The absence
                of watermarks, logo overlays, and compressed JPEG artifacts — all characteristics of
                AI-generated PNG downloads — aligns with what platform algorithms associate with
                high-quality, original content.
              </p>
            </div>

            <div className="smig-science-block">
              <h3>📈 The Consistency Compound Effect on Follower Growth</h3>
              <p>
                Social media profile growth is more correlated with visual consistency than posting
                frequency, according to creator economy research. When your feed has a coherent
                visual identity — consistent color temperature, style, and compositional approach —
                the profile-view-to-follow conversion rate increases by 30–50% compared to
                visually inconsistent accounts.
              </p>
              <p>
                AI image generation enables this consistency at scale. By anchoring all your prompts
                to the same style preset, color palette descriptor, and compositional preferences,
                you can produce 30 days of content that looks like it came from the same creative
                shoot — without ever hiring a photographer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY SPECIFIC ── */}
      <section className="smig-section smig-industry-section" id="by-industry">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>AI Social Media Image Ideas by Industry</h2>
            <p className="smig-section-sub">
              Different industries have different visual expectations on social media.
              Here are proven prompt directions for the most common brand categories.
            </p>
          </div>

          <div className="smig-industry-grid">
            {[
              { industry: '🍽️ Food & Restaurant', prompts: ['Overhead shot of gourmet dish on slate plate, natural light, editorial food photography', 'Barista pouring latte art, warm café ambiance, golden steam, bokeh background', 'Fresh ingredients flat lay, rustic wooden surface, herbs and spices, overhead'], note: 'Use "Realistic Photo" style. Always add natural lighting qualifiers. Overhead shots perform 40% better on Instagram for food.' },
              { industry: '💪 Fitness & Wellness', prompts: ['Athletic woman doing yoga at sunrise, mountain backdrop, silhouette, inspirational', 'Clean protein shake product on white marble, minimal styling, health aesthetic', 'Gym interior, morning light through windows, motivational atmosphere, cinematic'], note: 'Mix "Realistic Photo" for aspirational content and "Digital Art" for informational/infographic posts. Warm morning light is the dominant visual trope.' },
              { industry: '💻 Tech & SaaS', prompts: ['Abstract data flowing through glowing neural network, dark background, blue gradient', 'Clean minimal interface mockup floating in air, soft shadow, product visualization', 'Futuristic workspace, transparent holographic screen, developer environment'], note: '"Digital Art" and "3D Render" styles dominate tech LinkedIn. Dark backgrounds with neon blue/purple accents are the visual language of SaaS on Twitter.' },
              { industry: '👗 Fashion & Lifestyle', prompts: ['Minimalist fashion flat lay, neutral tones, structured composition, editorial style', 'Street style portrait, urban background, golden hour, editorial photography mood', 'Luxury accessory on silk fabric, dramatic side lighting, high contrast, commercial'], note: '"Realistic Photo" and "Artistic/Painting" styles excel here. Pinterest and Instagram are the primary platforms. Always reference specific materials (silk, marble, linen) in prompts.' },
              { industry: '🏠 Real Estate & Interior', prompts: ['Bright Scandinavian living room interior, natural light, minimal furniture, warm tones', 'Luxury kitchen design, marble countertops, pendant lights, real estate photography', 'Modern apartment balcony at dusk, city view, ambient outdoor lighting, editorial'], note: '"Realistic Photo" is non-negotiable for real estate. Always specify the time of day for lighting. "Golden hour" consistently outperforms "bright day" for emotional impact.' },
              { industry: '📚 Education & Coaching', prompts: ['Open notebook beside coffee, clean workspace, study aesthetic, warm lighting', 'Abstract concept visualization — interconnected ideas as glowing spheres, dark background', 'Welcoming workshop space, people learning, natural light, community atmosphere'], note: 'LinkedIn and Instagram are the primary platforms. Mix "Realistic Photo" for personal branding and "Digital Art" for concept illustrations. Avoid generic stock-photo-feeling prompts.' },
            ].map((ind) => (
              <article key={ind.industry} className="smig-industry-card">
                <h3 className="smig-industry-name">{ind.industry}</h3>
                <ul className="smig-industry-prompts">
                  {ind.prompts.map((p, i) => (
                    <li key={i}><span className="smig-qmark">"</span>{p}<span className="smig-qmark">"</span></li>
                  ))}
                </ul>
                <div className="smig-industry-note">
                  <span>💡 </span>{ind.note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="smig-section smig-faq-section" id="faq">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Frequently Asked Questions — Social Media AI Image Generator</h2>
            <p className="smig-section-sub">
              Everything you need to know about generating AI images for social media — from platform
              specs and style selection to commercial rights and workflow integration.
            </p>
          </div>

          <div className="smig-faq-grid">
            {FAQ_DATA.map(({ q, a }) => (
              <div key={q} className="smig-faq-item">
                <h3 className="smig-faq-q">{q}</h3>
                <p className="smig-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT STRATEGY TIPS ── */}
      <section className="smig-section smig-strategy-section" id="content-strategy">
        <div className="smig-container">
          <div className="smig-section-header">
            <h2>Building a Full Social Media Content Strategy with AI Images</h2>
            <p className="smig-section-sub">
              AI image generation doesn't replace content strategy — it supercharges execution.
              Here's how to build a repeatable system that uses AI visuals as the foundation of
              your social media presence.
            </p>
          </div>

          <div className="smig-strategy-steps">
            <div className="smig-strategy-block">
              <h3>🏗️ Phase 1: Build Your Brand Visual DNA (Week 1)</h3>
              <p>
                Before generating any post imagery, define your brand's visual DNA by running 10–15
                "brand test" generations. Experiment with different style presets, color palettes,
                and compositional approaches. Identify the 2–3 combinations that best represent your
                brand's personality and save those prompts as your master templates. This is your
                visual brand system — the equivalent of a brand style guide, but expressed in AI
                prompt language.
              </p>
              <p>
                Your visual DNA should include: a primary style preset, a signature color palette
                descriptor (e.g., "warm terracotta, cream, and sage green palette"), a preferred
                lighting style (e.g., "golden hour, soft natural window light"), and a compositional
                preference (e.g., "centered subject with negative space" or "rule of thirds, dynamic
                diagonal").
              </p>
            </div>

            <div className="smig-strategy-block">
              <h3>📅 Phase 2: Build Your Content Calendar Architecture (Week 2)</h3>
              <p>
                Map out a 4-week content calendar with clearly defined content pillars — typically
                3–5 recurring themes that align with your brand's expertise and audience interests.
                For a fitness brand, pillars might be: Workout Content, Nutrition/Recipe, Motivation,
                Product Promotion, and Community Spotlights. For each pillar, define the visual style
                that best serves it — Motivation posts might use dramatic landscape imagery while
                Product Promotion uses clean product hero shots.
              </p>
              <p>
                With pillars and visual styles defined, prompt-writing becomes systematic. Each post
                slot in your calendar already has a visual direction — your job is just to write the
                specific prompt for that week's context.
              </p>
            </div>

            <div className="smig-strategy-block">
              <h3>⚡ Phase 3: Batch Generation Sessions (Ongoing)</h3>
              <p>
                Once your system is in place, move to weekly or bi-weekly batch generation sessions.
                Block 60–90 minutes once or twice per week to generate all the visual content for the
                coming period. With your prompt templates pre-written in your content calendar, a
                60-minute session can produce 15–25 unique, brand-consistent images ready for editing
                and scheduling.
              </p>
              <p>
                The batch approach also enables comparative iteration — generating 3 variations of
                a key post (same prompt, slightly different style or model) and choosing the strongest
                one. This quality filtering layer is the difference between AI-generated content that
                looks automated and AI-generated content that looks intentional.
              </p>
            </div>

            <div className="smig-strategy-block">
              <h3>📊 Phase 4: Performance Analysis and Prompt Refinement (Monthly)</h3>
              <p>
                At the end of each month, pull your social media analytics and identify your top-5
                performing posts by reach, engagement, and saves/repins. Look at the visual patterns
                in those posts — what style preset, color temperature, compositional approach, and
                subject matter drove the best results for your specific audience?
              </p>
              <p>
                Use these insights to refine your prompt templates for the following month. This
                creates a continuous improvement loop where your AI-generated visuals get progressively
                better calibrated to what resonates with your specific audience — something no
                stock photo library can replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="smig-bottom-cta-section" id="get-started">
        <div className="smig-bottom-cta-inner">
          <div className="smig-bottom-cta-bg" />
          <h2>Start Creating Social Media Images with AI — Free</h2>
          <p>
            50 free credits on signup. No credit card. No design experience needed.
            From prompt to post-ready image in under 30 seconds. Join thousands of creators,
            marketers, and brands who use Scenith to produce professional visual content daily.
          </p>

          <div className="smig-cta-buttons">
            <Link
              href="https://scenith.in/tools/ai-image-generation?utm_source=social_media_ai_image_generator&utm_medium=bottom_cta&utm_campaign=tool_landing_page&utm_content=bottom_generate_free"
              className="smig-bottom-cta-primary"
            >
              ✨ Generate Images Free — No Signup Required
            </Link>
            <Link
              href="https://scenith.in/tools/image-editing?utm_source=social_media_ai_image_generator&utm_medium=bottom_cta&utm_campaign=tool_landing_page&utm_content=bottom_editor_link"
              className="smig-bottom-cta-secondary"
            >
              🖼️ Open Free Image Editor →
            </Link>
          </div>

          <div className="smig-bottom-features">
            {[
              '📸 Instagram', '💼 LinkedIn', '📌 Pinterest',
              '🎵 TikTok', '👍 Facebook', '🐦 Twitter/X',
              '✅ Commercial Use', '📥 No Watermark',
            ].map((f) => (
              <span key={f} className="smig-bottom-feature-pill">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="smig-related-tools" aria-label="Related tools">
        <div className="smig-container">
          <h2>Explore More Scenith AI Tools</h2>
          <div className="smig-related-grid">
            <Link href="/tools/ai-image-generation?utm_source=social_media_ai_image_generator&utm_medium=related_tools&utm_campaign=internal_links" className="smig-related-card">
              <span>🖼️</span>
              <div>
                <strong>AI Image Generator</strong>
                <small>Full-featured text-to-image generation with 8 styles and 6 AI models</small>
              </div>
            </Link>
            <Link href="/tools/image-editing?utm_source=social_media_ai_image_generator&utm_medium=related_tools&utm_campaign=internal_links" className="smig-related-card">
              <span>✏️</span>
              <div>
                <strong>Free Image Editor</strong>
                <small>Edit, crop, add text, and apply filters to your AI-generated images</small>
              </div>
            </Link>
            <Link href="/tools/ai-voice-generation?utm_source=social_media_ai_image_generator&utm_medium=related_tools&utm_campaign=internal_links" className="smig-related-card">
              <span>🎤</span>
              <div>
                <strong>AI Voice Generator</strong>
                <small>Add professional voiceovers to your social media videos and reels</small>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}