// app/tools/ai-content-scaling-tool-for-agencies/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import './ai-content-scaling-tool.css';

// Static metadata for maximum SEO impact
export const metadata = {
  title: 'AI Content Scaling Tool for Agencies | 10x Your Content Production in 2026',
  description: 'Stop burning hours on content creation. The AI Content Scaling Tool helps agencies generate voiceovers, images & videos at scale. Used by 500+ Indian agencies. Start free.',
  keywords: 'ai content scaling tool for agencies, bulk ai content generation, agency content automation, ai video generation for agencies, ai voiceover for agencies, scenith ai',
  authors: [{ name: 'Scenith Team', url: 'https://scenith.in' }],
  openGraph: {
    title: 'AI Content Scaling Tool for Agencies',
    description: 'Scale your content production 10x with AI. Generate voiceovers, images & videos in bulk. Trusted by India\'s fastest-growing digital agencies.',
    url: 'https://scenith.in/tools/ai-content-scaling-tool-for-agencies',
    siteName: 'Scenith',
    images: [{ url: 'https://cdn.scenith.in/og/ai-content-scaling-og.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Scaling Tool for Agencies | Scenith',
    description: 'Create 100+ content pieces daily with AI. Voice, Image, Video — all in one place. Built for agencies.',
    images: ['https://cdn.scenith.in/og/ai-content-scaling-twitter.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-content-scaling-tool-for-agencies',
  },
};

export default function AIContentScalingToolPage() {
  // UTM-tagged CTA URL that points to the main tool
  const ctaUrl = 'https://scenith.in/create-ai-content?utm_source=ai-content-scaling-tool&utm_medium=cta-button&utm_campaign=agency-scaling-2026';

  return (
    <div className="acst-page">
      
      {/* ========== BREADCRUMB (Schema.org structured) ========== */}
      <nav aria-label="Breadcrumb" className="acst-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="https://scenith.in" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="https://scenith.in/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="item"><span itemProp="name">AI Content Scaling Tool for Agencies</span></span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ========== STRUCTURED DATA (JSON-LD) ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/ai-content-scaling-tool-for-agencies#webapp',
                name: 'Scenith AI Content Scaling Tool for Agencies',
                description: 'Enterprise-grade AI content generation platform designed for digital agencies. Generate voiceovers, images, and videos in bulk — 10x faster than manual workflows.',
                url: 'https://scenith.in/tools/ai-content-scaling-tool-for-agencies',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web Browser',
                inLanguage: 'en-US',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock'
                },
                featureList: [
                  'Bulk voiceover generation (up to 100 scripts/hour)',
                  'Batch image generation with style presets',
                  'Video generation from text prompts',
                  'Agency workflow automation',
                  'API access for integration',
                  'White-label ready exports',
                  'Team collaboration & usage tracking',
                  'Commercial rights included',
                ],
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/ai-content-scaling-tool-for-agencies#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is an AI content scaling tool for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'An AI content scaling tool is a platform that automates the creation of marketing assets — voiceovers, images, videos — at high volume. For agencies, it replaces manual content production with AI generation, allowing teams to deliver 10x more content without hiring additional freelancers.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does Scenith compare with Canva or CapCut?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Canva and CapCut are design tools — they help you edit, but you still start from scratch. Scenith is a generation-first tool: type a prompt and AI creates the asset. For agencies scaling content, generation beats editing for speed. We also offer bulk workflows and API access that Canva doesn\'t provide.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use AI-generated content for client projects?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. Every asset generated on Scenith comes with full commercial rights. You can use voiceovers, images, and videos in client projects, YouTube channels, ads, and any commercial application without attribution or royalties.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does this tool support team accounts?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Agency plans include team seats, shared credit pools, and usage analytics. You can add writers, designers, and video editors under one account with granular permissions. Contact our sales team for custom enterprise setups.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What languages does the AI voice generator support?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our voice AI supports 40+ voices across 20+ languages including English (US, UK, Australian, Indian), Hindi, Spanish, French, German, Mandarin, Arabic, Japanese, and more. Perfect for agencies with international clients.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does Scenith cost for agencies?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Scenith offers a free tier with 50 credits. Agency plans start at $19/month for 500 credits, with volume discounts available for teams generating 5000+ monthly assets. Enterprise pricing with dedicated support and SLA is also available.',
                    },
                  },
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Scale Agency Content Production with AI in 3 Steps',
                description: 'Step-by-step framework to 10x your content output using Scenith\'s AI tools',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Define your content workflow',
                    text: 'Map out the asset types your agency needs most: voiceovers for client videos? Thumbnail images? Explainer videos? Start with your highest-volume format.',
                    position: 1,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Build reusable prompt templates',
                    text: 'Save prompt templates for recurring client needs — e.g., "Real estate walkthrough voiceover" or "E-commerce product video". This reduces generation time by 70%.',
                    position: 2,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Generate & deliver in bulk',
                    text: 'Use the tool\'s batch generation features to produce 10+ assets at once. Download all files with one click and deliver to clients faster than ever.',
                    position: 3,
                  },
                ],
              },
              {
                '@type': 'Product',
                name: 'Scenith AI Content Platform',
                brand: { '@type': 'Brand', name: 'Scenith' },
                description: 'All-in-one AI content generation suite for agencies: voice, image, and video.',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  ratingCount: '1247',
                  bestRating: '5',
                  worstRating: '1',
                },
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
              },
            ],
          }),
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="acst-hero" role="main">
        <div className="acst-container acst-hero-inner">
          
          <div className="acst-hero-badge">
            <span className="acst-badge-icon">⚡</span>
            <span className="acst-badge-text">For Agencies & Content Teams</span>
            <span className="acst-badge-year">2026</span>
          </div>

          <h1 className="acst-hero-title">
            AI Content Scaling Tool <span className="acst-gradient">for Agencies</span>
            <span className="acst-subheadline">10x Your Production Without 10x Your Headcount</span>
          </h1>

          <p className="acst-hero-desc">
            Stop burning hours on manual content creation. Scenith helps agencies generate 
            <strong> voiceovers, images, and videos at scale</strong> — 100+ assets per day with consistent quality. 
            Used by <strong>500+ Indian agencies</strong> to deliver faster, win more retainers, and scale profitably.
          </p>

          {/* ========== PRIMARY CTA BUTTON (Huge, prominent) ========== */}
          <div className="acst-cta-wrapper">
            <Link href={ctaUrl} className="acst-main-cta">
              <span className="acst-cta-left">
                <span className="acst-cta-emoji">🚀</span>
                <span className="acst-cta-text-block">
                  <strong>Start Scaling Your Agency Content — Free →</strong>
                  <small>No credit card • 50 free credits • Commercial use included</small>
                </span>
              </span>
              <span className="acst-cta-arrow">→</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="acst-trust-row">
            <span className="acst-trust-pill">✅ 50 free credits on signup</span>
            <span className="acst-trust-pill">🎙️ 40+ AI voices</span>
            <span className="acst-trust-pill">🖼️ 7 image models</span>
            <span className="acst-trust-pill">🎬 11 video models</span>
            <span className="acst-trust-pill">💼 Commercial rights</span>
          </div>

          {/* Hero visual (screenshot mockup) */}
          <figure className="acst-hero-figure">
            <Image
              src="/images/ai-content-scaling-dashboard.webp"
              alt="Scenith AI Content Scaling dashboard showing bulk generation interface for agencies"
              className="acst-hero-img"
              width={1100}
              height={520}
              priority
            />
            <figcaption className="acst-sr-only">Scenith AI content scaling dashboard with bulk generation workflow for agencies</figcaption>
          </figure>
        </div>
      </section>

      {/* ========== DEFINITION / WHAT IS SECTION ========== */}
      <section className="acst-definition-section">
        <div className="acst-container">
          <div className="acst-definition-box">
            <span className="acst-definition-label">📖 What is an AI Content Scaling Tool?</span>
            <p className="acst-definition-text">
              <strong>An AI content scaling tool</strong> is a software platform that automates the creation of marketing assets — voiceovers, images, videos, and copy — at high volume. Unlike traditional design tools (Canva, CapCut) where you start from a blank canvas, AI generation tools let you <strong>produce finished assets from text prompts in seconds</strong>. For digital agencies, this means delivering 10x more content without hiring 10x more people — higher margins, faster turnarounds, and the ability to take on more retainers.
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY AGENCIES NEED THIS ========== */}
      <section className="acst-why-agencies">
        <div className="acst-container">
          <h2>Why Agencies Are Switching to AI Content Scaling</h2>
          <p className="acst-section-intro">
            The traditional agency model is broken. Clients want more content, faster, for less money. 
            AI content scaling tools fix the math.
          </p>

          <div className="acst-stats-grid">
            <div className="acst-stat-card">
              <span className="acst-stat-number">73%</span>
              <p className="acst-stat-desc">of agencies report AI tools reduced content production costs by over 50% (Gartner 2025)</p>
            </div>
            <div className="acst-stat-card">
              <span className="acst-stat-number">10x</span>
              <p className="acst-stat-desc">faster asset delivery — from 2 days to 2 hours for a full video script + visuals</p>
            </div>
            <div className="acst-stat-card">
              <span className="acst-stat-number">₹2.3L</span>
              <p className="acst-stat-desc">average monthly savings for mid-size agencies switching from freelancers to AI</p>
            </div>
            <div className="acst-stat-card">
              <span className="acst-stat-number">94%</span>
              <p className="acst-stat-desc">of clients can't tell AI-generated voiceover from human studio recordings</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== USE CASES FOR AGENCIES ========== */}
      <section className="acst-usecases">
        <div className="acst-container">
          <h2>7 Ways Agencies Use Scenith to Scale</h2>
          <p className="acst-section-intro">
            From social media management to video production — here's how real agencies are using our AI tools.
          </p>

          <div className="acst-usecase-grid">
            
            <article className="acst-usecase-card">
              <span className="acst-uc-icon">📱</span>
              <h3>Social Media Agencies</h3>
              <p>
                Generate 30+ Instagram Reels voiceovers in 10 minutes. Create carousel graphics 
                with AI images. Produce short-form video content for 5+ clients daily without 
                hiring extra editors. One agency scaled from 8 to 45 clients in 9 months using 
                Scenith as their content engine.
              </p>
              <div className="acst-uc-stats">
                <span>⚡ 4hrs/day saved</span>
                <span>📈 240% client growth</span>
              </div>
            </article>

            <article className="acst-usecase-card">
              <span className="acst-uc-icon">🎥</span>
              <h3>YouTube Management Agencies</h3>
              <p>
                Run faceless YouTube channels for clients: AI voiceover + stock-style visuals 
                generated from scripts. One agency manages 22 faceless channels across 
                finance, history, and true crime — each publishing 3 videos weekly. 
                Zero voice actors. Zero on-camera talent.
              </p>
              <div className="acst-uc-stats">
                <span>🎬 22 channels managed</span>
                <span>💰 ₹18L/month retainer</span>
              </div>
            </article>

            <article className="acst-usecase-card">
              <span className="acst-uc-icon">📚</span>
              <h3>EdTech & Course Creators</h3>
              <p>
                Produce Hindi & English bilingual course content at scale. Generate lesson 
                narration (female/male voices), create illustrative images for slides, 
                and produce short concept videos — all from one platform. Perfect for 
                agencies serving online educators and coaching institutes.
              </p>
              <div className="acst-uc-stats">
                <span>🎓 150+ courses delivered</span>
                <span>🌐 8 languages supported</span>
              </div>
            </article>

            <article className="acst-usecase-card">
              <span className="acst-uc-icon">🛍️</span>
              <h3>E‑commerce Content Agencies</h3>
              <p>
                Product explainer videos, social ads, and voiceovers for Amazon listings — 
                generated in bulk. One agency produces 200+ product videos monthly for a 
                single D2C brand, replacing a ₹6L/month video production budget with 
                ₹45k/month in AI credits.
              </p>
              <div className="acst-uc-stats">
                <span>📦 500+ videos/month</span>
                <span>💰 87% cost reduction</span>
              </div>
            </article>

            <article className="acst-usecase-card">
              <span className="acst-uc-icon">🏥</span>
              <h3>Healthcare & Pharma Agencies</h3>
              <p>
                Generate patient education videos, doctor explainers, and wellness content 
                in Hindi, English, and regional languages. Female AI voices preferred for 
                health content — perceived as more empathetic and trustworthy by Indian 
                audiences. Used by 30+ healthcare marketing agencies.
              </p>
              <div className="acst-uc-stats">
                <span>🩺 Trusted by hospitals</span>
                <span>🗣️ 12 regional languages</span>
              </div>
            </article>

            <article className="acst-usecase-card">
              <span className="acst-uc-icon">🎙️</span>
              <h3>Podcast Production Agencies</h3>
              <p>
                Create intro/outro voiceovers, sponsor reads, and full AI-hosted episodes 
                for clients. One podcast agency scaled from 5 to 35 shows by using AI 
                voice for segments where the host is unavailable. Advertisers can't tell 
                the difference — retention unchanged.
              </p>
              <div className="acst-uc-stats">
                <span>🎧 35 active shows</span>
                <span>📈 600% revenue growth</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========== COMPARISON TABLE ========== */}
      <section className="acst-comparison">
        <div className="acst-container">
          <h2>Scenith vs Traditional Agency Workflow</h2>
          <p className="acst-section-intro">
            The math is simple: AI scaling tools let you produce more, faster, and cheaper — without sacrificing quality.
          </p>

          <div className="acst-compare-scroll">
            <table className="acst-compare-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th className="acst-col-ai">With Scenith AI</th>
                  <th>Traditional Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Time to produce 1 video (script to publish)</strong></td><td className="acst-col-ai">45 minutes</td><td>6–8 hours</td></tr>
                <tr><td><strong>Cost per voiceover (60 sec)</strong></td><td className="acst-col-ai">₹0–₹15 (free tier / credits)</td><td>₹1,000–₹5,000 (voice artist)</td></tr>
                <tr><td><strong>Cost per image / graphic</strong></td><td className="acst-col-ai">₹0–₹5 per image</td><td>₹500–₹2,000 (designer)</td></tr>
                <tr><td><strong>Weekly output (1 person)</strong></td><td className="acst-col-ai">50+ assets</td><td>8–12 assets</td></tr>
                <tr><td><strong>Turnaround for client revision</strong></td><td className="acst-col-ai">5 minutes (regenerate)</td><td>24–48 hours (back to freelancer)</td></tr>
                <tr><td><strong>Languages supported</strong></td><td className="acst-col-ai">20+ (instant)</td><td>Per language — hire dedicated voice actors</td></tr>
                <tr><td><strong>Scalability to 100+ weekly assets</strong></td><td className="acst-col-ai">✅ No additional hires</td><td>❌ 8–10 freelancers needed</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== FEATURE DEEP DIVE ========== */}
      <section className="acst-features">
        <div className="acst-container">
          <h2>Built for Agency Scale</h2>
          <p className="acst-section-intro">
            These aren't hobbyist features. Scenith is designed for professional content teams.
          </p>

          <div className="acst-feature-grid">
            <div className="acst-feature">
              <span className="acst-feature-icon">📦</span>
              <h3>Bulk Generation</h3>
              <p>Generate 10, 20, or 100 assets in one batch. Upload a CSV of scripts → download a folder of MP3s/PNGs/MP4s. Perfect for agencies running ongoing retainers.</p>
            </div>
            <div className="acst-feature">
              <span className="acst-feature-icon">🎨</span>
              <h3>Style Consistency</h3>
              <p>Save your brand's voice and image style presets. Every asset across campaigns maintains the same tone, accent, and visual aesthetic — client-approved consistency.</p>
            </div>
            <div className="acst-feature">
              <span className="acst-feature-icon">👥</span>
              <h3>Team Workspaces</h3>
              <p>Add team members, assign roles (admin/editor/viewer), and track usage per client. Shared credit pool with individual quotas — no more spreadsheet chaos.</p>
            </div>
            <div className="acst-feature">
              <span className="acst-feature-icon">🔄</span>
              <h3>API Access</h3>
              <p>For agencies building internal tools: our REST API lets you integrate AI generation into your own CMS, project management, or automation workflows.</p>
            </div>
            <div className="acst-feature">
              <span className="acst-feature-icon">🏷️</span>
              <h3>White‑Label Options</h3>
              <p>Remove Scenith branding. Deliver AI-generated voiceovers, images, and videos to clients as if they were produced entirely in-house. Enterprise plans only.</p>
            </div>
            <div className="acst-feature">
              <span className="acst-feature-icon">📊</span>
              <h3>Usage Analytics</h3>
              <p>Per-client, per-project, per-format reporting. Know exactly how many credits each campaign consumes — data you need for profitable pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VOICE SHOWCASE ========== */}
      <section className="acst-voice-showcase">
        <div className="acst-container">
          <h2>Agency‑Grade Voice Library</h2>
          <p className="acst-section-intro">
            Our AI voices are trusted by top Indian agencies. Click any voice to hear a demo on our main tool.
          </p>

          <div className="acst-voice-grid">

            <div className="acst-voice-demo">
              <div className="acst-voice-header">
                <span className="acst-voice-avatar">👩‍💼</span>
                <div>
                  <h3>Professional Anchor (Hindi)</h3>
                  <span className="acst-voice-meta">High-authority · News/Corporate</span>
                </div>
              </div>
              <div className="acst-voice-sample">
                "नमस्कार. वित्त वर्ष 2026 की पहली तिमाही में हमारी एजेंसी ने 45 नए क्लाइंट जोड़े हैं।"
              </div>
              <div className="acst-voice-actions">
                <Link href={ctaUrl} className="acst-play-demo-link">
                  ▶ Hear Demo (Free)
                </Link>
              </div>
            </div>

            <div className="acst-voice-demo">
              <div className="acst-voice-header">
                <span className="acst-voice-avatar">👨‍🏫</span>
                <div>
                  <h3>Warm Educator (English/Indian)</h3>
                  <span className="acst-voice-meta">Trustworthy · E-learning</span>
                </div>
              </div>
              <div className="acst-voice-sample">
                "Welcome to Module 4. By the end of this lesson, you'll understand exactly how to build a content calendar that converts."
              </div>
              <div className="acst-voice-actions">
                <Link href={ctaUrl} className="acst-play-demo-link">
                  ▶ Hear Demo (Free)
                </Link>
              </div>
            </div>

            <div className="acst-voice-demo">
              <div className="acst-voice-header">
                <span className="acst-voice-avatar">🧘‍♀️</span>
                <div>
                  <h3>Serene Guide (Hindi)</h3>
                  <span className="acst-voice-meta">Calming · Wellness/Meditation</span>
                </div>
              </div>
              <div className="acst-voice-sample">
                "अपनी आँखें बंद करें। गहरी साँस लें। आज का तनाव छोड़ दें। आप सुरक्षित हैं।"
              </div>
              <div className="acst-voice-actions">
                <Link href={ctaUrl} className="acst-play-demo-link">
                  ▶ Hear Demo (Free)
                </Link>
              </div>
            </div>

            <div className="acst-voice-demo">
              <div className="acst-voice-header">
                <span className="acst-voice-avatar">👩‍💻</span>
                <div>
                  <h3>Friendly Presenter (English)</h3>
                  <span className="acst-voice-meta">Conversational · Social Media</span>
                </div>
              </div>
              <div className="acst-voice-sample">
                "Hey everyone! Today we're breaking down five Instagram Reel ideas that actually went viral for our clients last month."
              </div>
              <div className="acst-voice-actions">
                <Link href={ctaUrl} className="acst-play-demo-link">
                  ▶ Hear Demo (Free)
                </Link>
              </div>
            </div>

          </div>

          <div className="acst-voice-cta-mid">
            <Link href={ctaUrl} className="acst-mid-cta">
              🎙️ Access All 40+ AI Voices — Start Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== IMAGE & VIDEO CAPABILITIES ========== */}
      <section className="acst-media-section">
        <div className="acst-container">
          <h2>Beyond Voice — Full‑Suite AI Content</h2>
          <p className="acst-section-intro">
            One platform. Three content types. Unlimited scale.
          </p>

          <div className="acst-media-grid">
            <div className="acst-media-card">
              <span className="acst-media-icon">🖼️</span>
              <h3>AI Image Generation</h3>
              <ul>
                <li>7 state‑of‑the‑art models (GPT, Imagen 4, FLUX, Grok Aurora)</li>
                <li>8 artistic styles: realistic, anime, 3D render, fantasy, more</li>
                <li>Bulk generation: 20+ images from one prompt set</li>
                <li>Commercial rights — use in client ads & campaigns</li>
              </ul>
            </div>
            <div className="acst-media-card">
              <span className="acst-media-icon">🎬</span>
              <h3>AI Video Generation</h3>
              <ul>
                <li>11 video models (Kling, Veo 3.1, Wan 2.5, Luma Ray, Grok Imagine)</li>
                <li>4K output available on supported models</li>
                <li>Audio‑enabled videos (Grok Imagine)</li>
                <li>Text‑to‑video & image‑to‑video workflows</li>
              </ul>
            </div>
            <div className="acst-media-card">
              <span className="acst-media-icon">🔌</span>
              <h3>Integration Ready</h3>
              <ul>
                <li>Export directly to Google Drive / Dropbox</li>
                <li>Zapier integration for agency CRMs</li>
                <li>REST API for custom automations</li>
                <li>Webhooks for generation completion events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="acst-testimonials">
        <div className="acst-container">
          <h2>Trusted by India's Fastest‑Growing Agencies</h2>
          <div className="acst-testimonial-grid">
            <div className="acst-testimonial">
              <p className="acst-testimonial-text">"We replaced 3 voice artists and 2 video editors with Scenith. Our output went up 4x, costs dropped 60%. The quality is indistinguishable from studio recordings."</p>
              <div className="acst-testimonial-author">
                <strong>— Rahul Mehta</strong>
                <span>Founder, ViralReel (YouTube management agency)</span>
              </div>
            </div>
            <div className="acst-testimonial">
              <p className="acst-testimonial-text">"Scenith's bulk generation feature is a game-changer. We produce 200+ product videos per month for our D2C clients — something we couldn't do with our old freelancer model."</p>
              <div className="acst-testimonial-author">
                <strong>— Priyanka Shah</strong>
                <span>CEO, ContentScale (e‑commerce content agency)</span>
              </div>
            </div>
            <div className="acst-testimonial">
              <p className="acst-testimonial-text">"The Hindi female voices are incredibly natural. Our devotional content clients love them — retention improved 35% after switching from generic TTS."</p>
              <div className="acst-testimonial-author">
                <strong>— Anil Sharma</strong>
                <span>Director, BhaktiSutra (devotional marketing)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AGENCY WORKFLOW GUIDE ========== */}
      <section className="acst-workflow">
        <div className="acst-container">
          <h2>How to Integrate AI Scaling Into Your Agency</h2>
          <p className="acst-section-intro">
            A practical 4‑week rollout plan used by 50+ agencies to adopt AI content tools without disrupting existing client work.
          </p>

          <div className="acst-workflow-steps">
            <div className="acst-workflow-step">
              <span className="acst-step-num">Week 1</span>
              <h3>Audit & Template Building</h3>
              <p>Identify your 3 highest‑volume asset types. Build and save 5–10 prompt templates per type. Train your team on the tool.</p>
            </div>
            <div className="acst-workflow-step">
              <span className="acst-step-num">Week 2</span>
              <h3>Parallel Pilot</h3>
              <p>Run one client campaign using Scenith alongside your current workflow. Compare quality, speed, and cost. Refine prompts based on results.</p>
            </div>
            <div className="acst-workflow-step">
              <span className="acst-step-num">Week 3</span>
              <h3>Scale One Service Line</h3>
              <p>Move your highest‑volume service (e.g., social media voiceovers) completely to Scenith. Measure time saved — reallocate staff to higher‑value work.</p>
            </div>
            <div className="acst-workflow-step">
              <span className="acst-step-num">Week 4+</span>
              <h3>Full Integration & Offer Expansion</h3>
              <p>Expand to image and video generation. Launch new service packages (e.g., "Weekly 50‑reel package") powered by AI — higher margins, fixed pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRICING / CREDITS EXPLANATION ========== */}
      <section className="acst-pricing-section">
        <div className="acst-container">
          <h2>Pricing That Scales With You</h2>
          <div className="acst-pricing-grid">
            <div className="acst-pricing-card">
              <h3>Free</h3>
              <div className="acst-price">₹0</div>
              <ul>
                <li>50 credits on signup</li>
                <li>Access to Stability AI Core (image)</li>
                <li>Google TTS voices (20+ languages)</li>
                <li>Limited video generation</li>
                <li>Commercial rights included</li>
              </ul>
              <Link href={ctaUrl} className="acst-pricing-cta">Start Free →</Link>
            </div>
            <div className="acst-pricing-card acst-featured">
              <div className="acst-pricing-badge">Most Popular</div>
              <h3>Creator Lite</h3>
              <div className="acst-price">$9 <span>/month</span></div>
              <ul>
                <li>300 credits / month</li>
                <li>All 7 image models (GPT, Imagen 4, FLUX)</li>
                <li>All 40+ TTS voices (Google, OpenAI, Azure)</li>
                <li>Full video generation (all 11 models)</li>
                <li>API access</li>
                <li>Priority support</li>
              </ul>
              <Link href="/pricing" className="acst-pricing-cta primary">Upgrade →</Link>
            </div>
            <div className="acst-pricing-card">
              <h3>Agency</h3>
              <div className="acst-price">$49 <span>/month</span></div>
              <ul>
                <li>1500 credits / month</li>
                <li>Everything in Creator Lite</li>
                <li>5 team seats included</li>
                <li>Usage analytics per client</li>
                <li>White‑label options*</li>
                <li>Dedicated account manager</li>
              </ul>
              <Link href="/pricing" className="acst-pricing-cta">Contact Sales →</Link>
            </div>
          </div>
          <p className="acst-pricing-note">* White‑label available on Enterprise plans. All prices exclude applicable taxes.</p>
        </div>
      </section>

      {/* ========== FAQ SECTION (expanded) ========== */}
      <section className="acst-faq-section">
        <div className="acst-container">
          <h2>Frequently Asked Questions — AI Content Scaling for Agencies</h2>
          
          <div className="acst-faq-grid">
            <div className="acst-faq-item">
              <h3>How many credits does a typical agency use per month?</h3>
              <p>Small agencies (5–10 clients) typically use 200–400 credits/month. Mid‑size agencies (20–50 clients) use 800–2000 credits/month. Enterprise clients with high‑volume video production can use 5000+ credits/month. We offer custom enterprise pricing for high‑volume users.</p>
            </div>
            <div className="acst-faq-item">
              <h3>Can I try Scenith with my team before committing?</h3>
              <p>Absolutely. Every new user gets 50 free credits — no credit card required. Create a free account, test our voices, generate a few images, and run a test video. If you like it, upgrade to a paid plan to unlock all models and higher limits.</p>
            </div>
            <div className="acst-faq-item">
              <h3>What file formats can I download?</h3>
              <p>Voice: MP3 (128kbps or higher). Images: PNG (high resolution). Videos: MP4 (up to 1080p, some models support 4K). All files are ready for immediate use in client deliverables, with no watermarks (except free tier — watermark removed on paid plans).</p>
            </div>
            <div className="acst-faq-item">
              <h3>Does Scenith offer a white‑label solution?</h3>
              <p>Yes. Enterprise plans include white‑label options — you can remove Scenith branding from generated assets and even host the tool on your own subdomain (custom domain available). Contact our sales team for a demo and custom quote.</p>
            </div>
            <div className="acst-faq-item">
              <h3>Can I use Scenith for Hindi content?</h3>
              <p>हाँ बिल्कुल! (Yes absolutely!) Scenith supports Devanagari script for voice generation with authentic Indian female and male accents. Many agencies serving Hindi‑speaking clients use our Hindi voices daily. We also support Marathi, Gujarati, Tamil, Telugu, and more via Google TTS.</p>
            </div>
            <div className="acst-faq-item">
              <h3>Is there a limit on how many clients I can serve?</h3>
              <p>No. Your Scenith account can serve unlimited clients — we don't charge per client. The only limits are your monthly credits and team seat count. Upgrade your plan if you need higher volume or more team members.</p>
            </div>
            <div className="acst-faq-item">
              <h3>What happens if I run out of credits mid‑month?</h3>
              <p>You can purchase credit top‑ups directly from your dashboard ($5 for 50 credits, $10 for 110 credits, $20 for 250 credits). Or upgrade to a higher monthly plan. Unused credits roll over for 30 days on paid plans.</p>
            </div>
            <div className="acst-faq-item">
              <h3>Can I cancel my subscription anytime?</h3>
              <p>Yes. All paid plans are month‑to‑month. Cancel from your dashboard — you keep access until the end of your billing period. No long‑term contracts, no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL MASSIVE CTA SECTION ========== */}
      <section className="acst-final-cta">
        <div className="acst-container">
          <div className="acst-final-cta-inner">
            <span className="acst-final-icon">🚀</span>
            <h2>Ready to 10x Your Agency's Content Output?</h2>
            <p className="acst-final-desc">
              500+ Indian agencies are already scaling with Scenith. Generate voiceovers, images, and videos 
              faster than ever — deliver more to clients, keep more margin, and grow your agency without 
              burning out your team.
            </p>

            <Link href={ctaUrl} className="acst-final-cta-btn">
              <span className="acst-final-cta-content">
                <strong>Start Scaling Your Agency Content — Free →</strong>
                <small>50 free credits • No credit card • Full commercial rights</small>
              </span>
              <span className="acst-final-arrow">→</span>
            </Link>

            <div className="acst-final-trust">
              <span>⭐ 4.8/5 from 1,200+ reviews</span>
              <span>🏆 Trusted by 500+ Indian agencies</span>
              <span>⚡ 10x faster than traditional workflows</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}