// app/tools/agency-content-automation-ai/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import './agency-content-automation-ai.css';

// ─── Metadata for maximum SEO juice ──────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Agency Content Automation AI | Scale Content 10x Faster (2026)',
  description: 'Stop burning hours on manual content creation. AI-powered agency automation that generates voiceovers, images & videos at scale. Trusted by 500+ agencies.',
  keywords: 'agency content automation, ai content automation, content automation platform, ai agency tools, bulk content generation, marketing automation ai',
  openGraph: {
    title: 'Agency Content Automation AI | Scale Content 10x Faster',
    description: 'Generate voiceovers, images & videos in bulk. The #1 AI platform for digital agencies, freelancers and content teams.',
    url: 'https://scenith.in/tools/agency-content-automation-ai',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/og/agency-automation.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith Agency Content Automation AI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Content Automation AI | Scale Content 10x Faster',
    description: 'Bulk AI content generation for agencies — voiceovers, images, videos. Save 20+ hours weekly.',
    images: ['https://scenith.in/og/agency-automation-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/agency-content-automation-ai',
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

export default function AgencyContentAutomationPage() {
  // UTM-tagged CTA link pointing to the main create-ai-content tool
  const ctaUrl =
    'https://scenith.in/create-ai-content?utm_source=agency-automation-page&utm_medium=cta-button&utm_campaign=agency-cta-traffic';

  return (
    <>
      {/* ── JSON-LD Structured Data (rich snippets) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/agency-content-automation-ai#webpage',
                url: 'https://scenith.in/tools/agency-content-automation-ai',
                name: 'Agency Content Automation AI | Scenith',
                description:
                  'AI-powered content automation platform built for agencies. Bulk generate voice, image and video content at scale.',
                inLanguage: 'en-US',
                isPartOf: { '@id': 'https://scenith.in/#website' },
                breadcrumb: { '@id': 'https://scenith.in/tools/agency-content-automation-ai#breadcrumb' },
                primaryImageOfPage: {
                  '@type': 'ImageObject',
                  url: 'https://scenith.in/og/agency-automation.jpg',
                  width: 1200,
                  height: 630,
                },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/agency-content-automation-ai#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in/' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Agency Content Automation AI',
                    item: 'https://scenith.in/tools/agency-content-automation-ai',
                  },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                name: 'Scenith Agency Content Automation',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '847',
                  bestRating: '5',
                  worstRating: '1',
                },
                featureList: [
                  'Bulk AI voice generation (20+ languages)',
                  'Batch AI image generation (10+ models)',
                  'AI video generation at scale',
                  'Team collaboration workspaces',
                  'Client-ready export formats',
                  'API access for automation',
                  'Usage analytics dashboard',
                  'White-label options (Pro plan)',
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is agency content automation AI?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Agency content automation AI uses artificial intelligence to automatically generate text, voice, images, and video content in bulk. Instead of manually creating each asset, agencies set parameters and let AI produce hundreds of variations in minutes — cutting production time by up to 90%.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can this replace my content team?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No — AI content automation augments your team, not replaces it. It handles repetitive, high-volume production (voiceovers, social media assets, video drafts), allowing your creative team to focus on strategy, client management, and high-value creative work. Agencies using automation typically grow revenue without increasing headcount.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What formats does Scenith agency automation support?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'MP3 voiceovers (20 languages, 40+ voices), PNG images (10+ AI models like GPT Image, Imagen 4, FLUX), MP4 videos (Kling, Veo, Wan 2.5). Everything is exportable in client-ready quality, no watermarks, with full commercial rights.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much time can an agency save with AI automation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most agencies report saving 15–25 hours per week. A single social media campaign that required 8 hours of manual asset creation can be completed in under 45 minutes using Scenith\'s bulk generation and templates feature.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ─── Breadcrumb Navigation ─── */}
      <nav aria-label="Breadcrumb" className="agency-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item">
              <span itemProp="name">Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools/agency-content-automation-ai" itemProp="item">
              <span itemProp="name">Agency Content Automation AI</span>
            </a>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="agency-hero">
        <div className="agency-container">
          <div className="agency-hero-badge">
            <span className="agency-badge-icon">⚡</span>
            <span className="agency-badge-text">For Agencies & Content Teams</span>
            <span className="agency-badge-year">2026</span>
          </div>

          <h1 className="agency-hero-title">
            Agency Content Automation <span className="agency-gradient-text">Powered by AI</span>
          </h1>
          <p className="agency-hero-subtitle">
            Stop burning 20+ hours weekly on manual content creation. Generate voiceovers, images & videos
            at scale — with AI that actually understands agency workflows.
          </p>

          {/* ─── The Massive CTA Button ─── */}
          <div className="agency-cta-wrapper">
            <Link href={ctaUrl} className="agency-main-cta">
              <span className="agency-cta-left">
                <span className="agency-cta-emoji">🚀</span>
                <span className="agency-cta-text">
                  <strong>Launch Scenith AI — Start Automating →</strong>
                  <small>Voice · Image · Video · Bulk Generation</small>
                </span>
              </span>
              <span className="agency-cta-arrow">→</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="agency-trust-row">
            <span className="agency-trust-pill">✅ Used by 500+ agencies</span>
            <span className="agency-trust-pill">⚡ Save 20hrs/week</span>
            <span className="agency-trust-pill">📦 Bulk generation ready</span>
            <span className="agency-trust-pill">🔌 API access included</span>
            <span className="agency-trust-pill">👥 Team workspaces</span>
          </div>

          {/* Hero image placeholder (optional) — shows the tool interface */}
          <div className="agency-hero-figure">
            <div className="agency-hero-img-placeholder">
              <div className="agency-interface-mock">
                <div className="agency-mock-header">
                  <span className="agency-mock-dot"></span>
                  <span className="agency-mock-dot"></span>
                  <span className="agency-mock-dot"></span>
                  <span className="agency-mock-title">Scenith Agency Dashboard</span>
                </div>
                <div className="agency-mock-body">
                  <div className="agency-mock-sidebar"></div>
                  <div className="agency-mock-main">
                    <div className="agency-mock-toolbar"></div>
                    <div className="agency-mock-grid">
                      <div className="agency-mock-card"></div>
                      <div className="agency-mock-card"></div>
                      <div className="agency-mock-card"></div>
                      <div className="agency-mock-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pain Points Section (agency-specific) ─── */}
      <section className="agency-pain-section">
        <div className="agency-container">
          <h2 className="agency-section-title">
            The <span className="agency-highlight">Agency Content Nightmare</span> — Solved
          </h2>
          <p className="agency-section-subtitle">
            You're losing time, money, and sanity. Here's exactly how AI automation fixes each problem.
          </p>

          <div className="agency-pain-grid">
            <div className="agency-pain-card">
              <div className="agency-pain-icon">⏱️</div>
              <h3>20+ Hours Weekly on Manual Creation</h3>
              <p>
                Every voiceover, social image, and short video eats hours of your team's time.
                Scenith automates the repetitive work — generate 50 variations in the time it
                takes to manually produce one.
              </p>
            </div>
            <div className="agency-pain-card">
              <div className="agency-pain-icon">💰</div>
              <h3>Freelancers Costing You ₹50k+/Month</h3>
              <p>
                Voice artists, video editors, graphic designers — the bills add up fast.
                Switch to AI and produce unlimited assets for a flat subscription.
                No per-project fees, no delays.
              </p>
            </div>
            <div className="agency-pain-card">
              <div className="agency-pain-icon">📦</div>
              <h3>No Bulk Workflow for 50+ Assets</h3>
              <p>
                Most tools are built for single creators, not agencies.
                Scenith supports batch prompts, templates, and campaign-level generation.
                Create 100 images with one click.
              </p>
            </div>
            <div className="agency-pain-card">
              <div className="agency-pain-icon">👥</div>
              <h3>Team Collaboration is Broken</h3>
              <p>
                Shared logins and messy handoffs kill productivity. Scenith gives you team
                workspaces, role-based access, and shared asset libraries — just like
                Figma or Notion, but for AI content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's Inside (features) ─── */}
      <section className="agency-features-section">
        <div className="agency-container">
          <h2 className="agency-section-title">
            Everything Your Agency Needs — <span className="agency-gradient-text">In One AI Dashboard</span>
          </h2>

          <div className="agency-features-grid">
            <div className="agency-feature-card agency-feature-voice">
              <span className="agency-feature-icon">🎙️</span>
              <h3>Bulk AI Voice Generation</h3>
              <p>
                40+ natural voices across 20 languages. Generate entire ad campaigns,
                podcast episodes, or e-learning narrations in seconds, not days.
                Download MP3s ready for client delivery.
              </p>
              <ul className="agency-feature-list">
                <li>✓ Google, OpenAI & Azure voices</li>
                <li>✓ Batch script processing</li>
                <li>✓ Voice cloning (Pro plan)</li>
                <li>✓ SSML support for fine control</li>
              </ul>
            </div>

            <div className="agency-feature-card agency-feature-image">
              <span className="agency-feature-icon">🖼️</span>
              <h3>Batch AI Image Generation</h3>
              <p>
                Generate 100+ social media visuals, product shots, or ad creatives in minutes.
                GPT Image 2, Imagen 4, FLUX 1.1 Pro, Grok Aurora — all under one roof.
              </p>
              <ul className="agency-feature-list">
                <li>✓ 10+ state-of-the-art models</li>
                <li>✓ Bulk prompt CSV upload</li>
                <li>✓ Consistent brand styles</li>
                <li>✓ Transparent background support</li>
              </ul>
            </div>

            <div className="agency-feature-card agency-feature-video">
              <span className="agency-feature-icon">🎬</span>
              <h3>Scalable AI Video Production</h3>
              <p>
                Produce short-form videos for TikTok, Reels, and YouTube Shorts at scale.
                Kling 2.6, Veo 3.1, Wan 2.5 — cinematic quality without the production team.
              </p>
              <ul className="agency-feature-list">
                <li>✓ Text-to-video & image-to-video</li>
                <li>✓ AI-generated audio sync</li>
                <li>✓ 16:9, 9:16, 1:1 ratios</li>
                <li>✓ Batch video generation</li>
              </ul>
            </div>

            <div className="agency-feature-card agency-feature-team">
              <span className="agency-feature-icon">👥</span>
              <h3>Team Workspaces & Analytics</h3>
              <p>
                Stop sharing passwords. Invite team members, assign roles,
                track usage per client, and export white-labeled assets.
              </p>
              <ul className="agency-feature-list">
                <li>✓ Role-based access (Admin, Editor, Viewer)</li>
                <li>✓ Client-specific folders</li>
                <li>✓ Usage reports & analytics</li>
                <li>✓ White-label exports (Pro only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers That Matter (stats) ─── */}
      <section className="agency-stats-section">
        <div className="agency-container">
          <h2 className="agency-section-title">Agency Results You Can Actually Measure</h2>
          <div className="agency-stats-grid">
            <div className="agency-stat-card">
              <span className="agency-stat-number">87%</span>
              <span className="agency-stat-label">Faster content turnaround</span>
              <p className="agency-stat-detail">From brief to delivery in hours, not weeks.</p>
            </div>
            <div className="agency-stat-card">
              <span className="agency-stat-number">₹3.2L</span>
              <span className="agency-stat-label">Average annual savings</span>
              <p className="agency-stat-detail">By replacing freelancers + editing tools.</p>
            </div>
            <div className="agency-stat-card">
              <span className="agency-stat-number">5.2x</span>
              <span className="agency-stat-label">Content output increase</span>
              <p className="agency-stat-detail">Same team, dramatically more deliverables.</p>
            </div>
            <div className="agency-stat-card">
              <span className="agency-stat-number">94%</span>
              <span className="agency-stat-label">Client retention rate</span>
              <p className="agency-stat-detail">Agencies using automation report happier clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Workflow Steps (how agencies use it) ─── */}
      <section className="agency-workflow-section">
        <div className="agency-container">
          <h2 className="agency-section-title">How Agencies Automate Content With Scenith</h2>
          <div className="agency-workflow-steps">
            <div className="agency-workflow-step">
              <div className="agency-step-number">1</div>
              <div className="agency-step-content">
                <h3>Set up your campaign prompt</h3>
                <p>Write one master prompt or upload a CSV with 50+ variations. Define tone, voice style, and visual direction once.</p>
              </div>
            </div>
            <div className="agency-workflow-step">
              <div className="agency-step-number">2</div>
              <div className="agency-step-content">
                <h3>Choose your asset types</h3>
                <p>Select voice, image, video — or all three. Scenith will generate a complete content kit for each variation.</p>
              </div>
            </div>
            <div className="agency-workflow-step">
              <div className="agency-step-number">3</div>
              <div className="agency-step-content">
                <h3>Generate in bulk</h3>
                <p>Click once and walk away. 100 voiceovers. 500 images. 50 videos. Scenith handles the queue — you get a download link when it's done.</p>
              </div>
            </div>
            <div className="agency-workflow-step">
              <div className="agency-step-number">4</div>
              <div className="agency-step-content">
                <h3>Deliver to clients instantly</h3>
                <p>Download branded assets, share workspace access, or use the API to push directly to your client's CMS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Models & Technology (trust signal) ─── */}
      <section className="agency-models-section">
        <div className="agency-container">
          <h2 className="agency-section-title">Powered by the Industry's Best AI Models</h2>
          <p className="agency-section-subtitle">
            Not generic "AI slop" — Scenith gives you the same models that power OpenAI, Google, and top-tier video labs.
          </p>
          <div className="agency-models-grid">
            <div className="agency-models-category">
              <span className="agency-category-tag">🎙️ Voice</span>
              <div className="agency-model-pills">
                <span>Google Neural TTS</span>
                <span>OpenAI TTS</span>
                <span>Azure Neural</span>
              </div>
            </div>
            <div className="agency-models-category">
              <span className="agency-category-tag">🖼️ Image</span>
              <div className="agency-model-pills">
                <span>GPT Image 2</span>
                <span>Imagen 4</span>
                <span>FLUX 1.1 Pro</span>
                <span>Grok Aurora</span>
                <span>Stability Core</span>
              </div>
            </div>
            <div className="agency-models-category">
              <span className="agency-category-tag">🎬 Video</span>
              <div className="agency-model-pills">
                <span>Kling 3.0 Pro</span>
                <span>Veo 3.1</span>
                <span>Wan 2.5</span>
                <span>Grok Imagine</span>
                <span>Runway Gen-4.5</span>
                <span>Luma Ray 3.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table: Agency vs DIY ─── */}
      <section className="agency-compare-section">
        <div className="agency-container">
          <h2 className="agency-section-title">Agency Automation vs Doing It Yourself</h2>
          <div className="agency-compare-scroll">
            <table className="agency-compare-table">
              <thead>
                <tr>
                  <th>Consideration</th>
                  <th className="agency-col-ai">Scenith AI Automation ✅</th>
                  <th>Traditional Agency Workflow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time per 50 assets</td>
                  <td className="agency-col-ai">~15 minutes</td>
                  <td>10–15 hours</td>
                </tr>
                <tr>
                  <td>Monthly cost (voice + image + video)</td>
                  <td className="agency-col-ai">$49–$199/month</td>
                  <td>$3,000–$8,000+ (freelancers + tools)</td>
                </tr>
                <tr>
                  <td>Team collaboration</td>
                  <td className="agency-col-ai">✅ Built-in workspaces</td>
                  <td>❌ Google Drive + chaos</td>
                </tr>
                <tr>
                  <td>Bulk generation API</td>
                  <td className="agency-col-ai">✅ Available on Pro plan</td>
                  <td>❌ Not possible manually</td>
                </tr>
                <tr>
                  <td>White-label exports</td>
                  <td className="agency-col-ai">✅ Yes (Pro plan)</td>
                  <td>Manual rebranding</td>
                </tr>
                <tr>
                  <td>Scalability</td>
                  <td className="agency-col-ai">Generate 1,000+ assets/week</td>
                  <td>Limited by team size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Use Cases for Different Agency Types ─── */}
      <section className="agency-usecases-section">
        <div className="agency-container">
          <h2 className="agency-section-title">Who Uses Scenith Agency Automation?</h2>
          <div className="agency-usecases-grid">
            <div className="agency-usecase">
              <span className="agency-uc-icon">📱</span>
              <h3>Social Media Agencies</h3>
              <p>Generate 50 Reels scripts, voiceovers, and thumbnails for client campaigns — all in one batch. Post calendar filled in under an hour.</p>
            </div>
            <div className="agency-usecase">
              <span className="agency-uc-icon">🎓</span>
              <h3>E-Learning & EdTech Agencies</h3>
              <p>Create full course narrations (20+ languages), generate explanatory illustrations, and produce short video summaries — at scale.</p>
            </div>
            <div className="agency-usecase">
              <span className="agency-uc-icon">🛍️</span>
              <h3>E‑commerce Content Agencies</h3>
              <p>Product description voiceovers, 200+ product images, and video ads for Amazon, Shopify, and social — automated weekly.</p>
            </div>
            <div className="agency-usecase">
              <span className="agency-uc-icon">🎬</span>
              <h3>Video Production Agencies</h3>
              <p>Rough cut generation, B-roll voiceovers, and subtitle-ready videos. Focus on high-end editing — let AI handle the volume.</p>
            </div>
            <div className="agency-usecase">
              <span className="agency-uc-icon">📢</span>
              <h3>Performance Marketing Agencies</h3>
              <p>A/B test 100 ad variations (video + voiceover) without burning production budget. Find winners faster.</p>
            </div>
            <div className="agency-usecase">
              <span className="agency-uc-icon">🔊</span>
              <h3>Podcast & Audiobook Agencies</h3>
              <p>Turn written content into narrated episodes. Multiple voices, chapters, and distribution-ready audio in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section (long, SEO-rich) ─── */}
      <section className="agency-faq-section">
        <div className="agency-container">
          <h2 className="agency-section-title">Agency Content Automation: Frequently Asked Questions</h2>
          <div className="agency-faq-grid">
            <details className="agency-faq-item">
              <summary>How does AI content automation differ from regular AI tools?</summary>
              <p>
                Regular AI tools are built for one-off generation — you type a prompt, get one result.
                Agency automation focuses on <strong>scale, workflows, and team collaboration</strong>.
                Scenith supports CSV batch uploads, templating, role-based access, and API integration
                so you can produce 100+ assets without manual repetition.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>Can I use Scenith for client work without branding?</summary>
              <p>
                Yes. Our Pro plan includes <strong>white-label exports</strong> — download assets without
                any Scenith watermark or mention. Perfect for agencies that need to deliver client-ready
                files under their own brand name.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>What's the learning curve for my team?</summary>
              <p>
                Most team members are productive within <strong>30 minutes</strong>. The interface is
                modeled after creative tools like Canva and Figma — intuitive and familiar.
                We also provide video tutorials, documentation, and live onboarding calls for agency plans.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>Does Scenith offer an API for programmatic generation?</summary>
              <p>
                Absolutely. The <strong>API is available on Growth and Pro plans</strong>.
                You can integrate Scenith into your internal tools, client portals, or automation
                workflows (Zapier, Make, custom scripts). Generate voice, image, and video via REST API.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>How many team members can I add?</summary>
              <p>
                Agency plan starts with 5 team seats, but you can add more (pricing per extra seat).
                Each member has their own login, usage tracking, and role-based permissions.
                Admins can see team-wide analytics and credit usage.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>What file formats does Scenith support for bulk upload?</summary>
              <p>
                Bulk voice: CSV with script column + optional voice mapping.<br />
                Bulk image: CSV with prompts + style/size columns, or image-to-image folder upload.<br />
                Bulk video: CSV with prompts + duration/aspect columns.<br />
                Output: MP3, PNG, MP4 — ready for delivery.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>Is there a free trial for agencies?</summary>
              <p>
                Yes. <strong>50 free credits on signup</strong> — no credit card required.
                That's enough to generate several voiceovers, images, or short videos.
                Upgrade when you're ready to scale.
              </p>
            </details>
            <details className="agency-faq-item">
              <summary>What's the difference between Scenith and generic AI like ChatGPT?</summary>
              <p>
                ChatGPT generates text. Scenith generates <strong>production-ready media assets</strong>:
                voice MP3s, high-res PNGs, cinematic MP4s. Plus team collaboration, API, and bulk workflows.
                ChatGPT can't generate a video or a natural Hindi female voice. Scenith does both.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ─── Final CTA (second, massive button) ─── */}
      <section className="agency-final-cta-section">
        <div className="agency-container">
          <div className="agency-final-cta-inner">
            <span className="agency-final-icon">⚡</span>
            <h2>Ready to Scale Your Agency with AI?</h2>
            <p className="agency-final-desc">
              Join 500+ agencies that have already automated their content production.
              Save 20+ hours weekly, deliver faster, and grow your bottom line.
            </p>
            <Link href={ctaUrl} className="agency-final-cta-btn">
              <span className="agency-final-cta-content">
                <strong>🚀 Start Automating Your Agency Content — Free Trial →</strong>
                <small>Voice · Image · Video · Bulk Generation · Team Workspaces</small>
              </span>
              <span className="agency-final-arrow">→</span>
            </Link>
            <div className="agency-final-trust">
              <span>✅ No credit card required</span>
              <span>⚡ 50 free credits on signup</span>
              <span>📦 Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Tools (internal linking for SEO) ─── */}
      <section className="agency-related-section">
        <div className="agency-container">
          <h3 className="agency-related-title">More AI Tools for Agencies</h3>
          <div className="agency-related-links">
            <Link href="/tools/create-ai-content">Create AI Content (Main Tool)</Link>
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi Female Voice Generator</Link>
            <Link href="/tools/add-subtitles-to-videos">Add Subtitles to Videos</Link>
            <Link href="/tools/ai-voice-generation">AI Voice Generation (All Languages)</Link>
            <Link href="/tools/ai-image-generation">Free AI Image Generator</Link>
          </div>
        </div>
      </section>
    </>
  );
}