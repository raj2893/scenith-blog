import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import './captions-generator-youtube.css';

export const metadata: Metadata = {
  title: 'Free YouTube Captions Generator – AI-Powered, 50+ Languages (2026)',
  description:
    'Generate accurate, auto-synced captions for YouTube videos in 60 seconds. Supports 50+ languages, custom styles, SRT export. Boost watch time 40% and YouTube SEO rankings. 100% free.',
  keywords: [
    'captions generator for youtube',
    'youtube captions generator',
    'auto captions youtube',
    'generate captions for youtube',
    'youtube caption maker',
    'free youtube captions',
    'automatic captions youtube',
    'ai captions for youtube',
    'youtube subtitle generator',
    'closed captions youtube',
    'youtube cc generator',
    'add captions to youtube video',
    'youtube auto caption tool',
    'caption creator youtube',
    'how to add captions to youtube',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/captions-generator-for-youtube',
  },
  openGraph: {
    title: 'Free YouTube Captions Generator – AI-Powered, 50+ Languages (2026)',
    description:
      'The fastest way to add accurate captions to YouTube videos. AI-generated, fully editable, SRT-ready. No watermarks. Free.',
    url: 'https://scenith.in/tools/captions-generator-for-youtube',
    siteName: 'Scenith',
    images: [{ url: 'https://scenith.in/images/AddSubtitlesSS.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Captions Generator – Auto-Captions in 60 Seconds',
    description: 'AI captions for YouTube. Accurate, customizable, 50+ languages.',
    images: ['https://scenith.in/images/AddSubtitlesSS.png'],
  },
  robots: { index: true, follow: true },
};

export default function CaptionsGeneratorForYoutube() {
  const toolUrl =
    'https://scenith.in/tools/add-subtitles-to-videos?utm_source=captions-generator-for-youtube&utm_medium=cta&utm_campaign=youtube-captions-tool&utm_content=hero-cta';

  // === SCHEMA ===
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: "Does YouTube auto-generate captions automatically?", acceptedAnswer: { '@type': 'Answer', text: "Yes, but YouTube's auto-captions are only 70–80% accurate and cannot be styled or pre-published. Scenith AI gives 95–98% accuracy with full styling control and SRT export." } },
      { '@type': 'Question', name: "How do I add captions to a YouTube video?", acceptedAnswer: { '@type': 'Answer', text: "Generate captions in Scenith, download the SRT file, then go to YouTube Studio → Content → Subtitles → Add → Upload file. For Shorts, download the burned-in MP4 instead." } },
      { '@type': 'Question', name: "Do captions help YouTube SEO?", acceptedAnswer: { '@type': 'Answer', text: "Yes. Caption text is indexed by Google and YouTube, giving videos 7.32% better search rankings and 40% more views on average. Captions also increase watch time—YouTube's top ranking signal." } },
      { '@type': 'Question', name: "What languages are supported?", acceptedAnswer: { '@type': 'Answer', text: "50+ languages including English, Hindi, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, Korean and more. Whisper AI auto-detects the language." } },
      { '@type': 'Question', name: "Are burned-in or SRT captions better for YouTube?", acceptedAnswer: { '@type': 'Answer', text: "SRT files are better for channel SEO and viewer toggle control. Burned-in captions are better for YouTube Shorts (which don't support SRT) and cross-platform sharing." } },
      { '@type': 'Question', name: "How long does caption generation take?", acceptedAnswer: { '@type': 'Answer', text: "YouTube Shorts captions are ready in under 30 seconds. 10-minute videos take under 2 minutes. Processing scales with video length." } },
      { '@type': 'Question', name: "Is it really free?", acceptedAnswer: { '@type': 'Answer', text: "Yes. The free plan includes AI generation, full editor access, SRT export, and no-watermark MP4 download. Premium plans unlock higher resolution and more monthly credits." } },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
      { '@type': 'ListItem', position: 3, name: 'Captions Generator for YouTube', item: 'https://scenith.in/tools/captions-generator-for-youtube' },
    ],
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Scenith YouTube Captions Generator',
    url: 'https://scenith.in/tools/captions-generator-for-youtube',
    applicationCategory: 'MultimediaApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['AI captions', '50+ languages', 'SRT export', 'Custom styling', 'No watermarks'],
  };

  return (
    <div className="yt-captions-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="yt-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1" />
          </li>
          <span aria-hidden="true"> › </span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a><meta itemProp="position" content="2" />
          </li>
          <span aria-hidden="true"> › </span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Captions Generator for YouTube</span><meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Particle BG */}
      <div className="yt-particle-bg" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="yt-particle" />)}
      </div>

      {/* ── HERO ── */}
      <section className="yt-hero" id="hero" role="main">
        <div className="yt-hero-inner">
          <div className="yt-hero-badge">
            <span className="yt-badge-dot" />
            Trusted by 2,000+ YouTube Creators in 2026
          </div>
          <h1 className="yt-hero-h1">
            Free YouTube Captions Generator —{' '}
            <span className="yt-gradient-text">AI-Powered. Accurate. Instant.</span>
          </h1>
          <p className="yt-hero-desc">
            Stop losing views because your YouTube videos lack captions. Our AI captions generator
            creates perfectly timed, fully editable captions for any YouTube video in under 60 seconds.
            Boost your YouTube SEO, accessibility, and watch time—all free, no watermarks.
          </p>
          <div className="yt-trust-strip">
            <span>✅ 95–98% AI Accuracy</span>
            <span>🌐 50+ Languages</span>
            <span>⚡ Under 60 Seconds</span>
            <span>🆓 Free Forever Plan</span>
            <span>🚫 No Watermarks</span>
          </div>

          {/* BIG CTA CARD */}
          <div className="yt-cta-card">
            <div className="yt-cta-card-inner">
              <div className="yt-cta-icon-ring" aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="22" r="22" fill="rgba(99,102,241,0.18)" />
                  <path d="M17 14l13 8-13 8V14z" fill="#6366F1" />
                </svg>
              </div>
              <h2 className="yt-cta-heading">Generate YouTube Captions Now — Free</h2>
              <p className="yt-cta-subtext">
                Upload your video. Get AI captions in seconds. Edit inline. Download SRT or burned-in MP4.
                Zero cost. Zero watermarks. Zero complexity.
              </p>
              <a href={toolUrl} className="yt-cta-button" rel="noopener" aria-label="Open free YouTube captions generator tool">
                <span>🎬</span>
                Generate Captions for Free
                <span className="yt-cta-arrow">→</span>
              </a>
              <p className="yt-cta-micro">No signup required to preview · Full features with free account</p>
            </div>
          </div>

          {/* Social proof numbers */}
          <div className="yt-social-proof">
            {[['2,000+','Active Creators'],['500K+','Captions Generated'],['4.9 / 5','Creator Rating'],['50+','Languages']].map(([n, l]) => (
              <div key={l} className="yt-sp-item"><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>

        <figure className="yt-hero-image-wrap">
          <Image src="/images/AddSubtitlesSS.png" alt="Scenith YouTube captions generator showing AI-generated captions with style options" className="yt-hero-image" width={860} height={480} priority />
          <figcaption className="sr-only">Screenshot of AI YouTube captions generator with styled caption editor</figcaption>
        </figure>
      </section>

      {/* ── FEATURED SNIPPET ── */}
      <section className="yt-definition-section">
        <div className="yt-container">
          <div className="yt-definition-box">
            <h2 className="visually-hidden">What is a YouTube Captions Generator?</h2>
            <p className="yt-definition-text">
              A <strong>YouTube captions generator</strong> is an AI tool that automatically transcribes spoken
              audio from a video into timed text captions, then formats them as SRT files for YouTube upload or
              burns them directly into the video. Modern AI caption generators achieve 95%+ accuracy in under
              60 seconds—compared to 4–6 hours of manual transcription—making them essential for YouTube
              creators who want better SEO, higher watch time, and broader accessibility in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CAPTIONS MATTER ── */}
      <section className="yt-why-section" id="why-captions-matter" aria-labelledby="yt-why-title">
        <div className="yt-container">
          <h2 id="yt-why-title" className="yt-section-title">Why YouTube Captions Are Non-Negotiable in 2026</h2>
          <p className="yt-section-desc">The YouTube algorithm has shifted. Captions are now a direct ranking signal, accessibility requirement, and viewer retention tool rolled into one.</p>
          <div className="yt-why-grid">
            {[
              { stat: '40%', title: 'More Views on Captioned Videos', body: "YouTube's own data confirms captioned videos receive 40% more views. Search algorithms crawl caption text as a primary ranking signal—videos without captions are essentially invisible to keyword discovery beyond title and description." },
              { stat: '85%', title: 'Videos Watched Without Sound', body: "In 2026, 85% of YouTube views happen in silent mode—on mobile, in offices, on public transit. Captions are how the modern majority actually consumes video. No captions means losing most of your potential audience immediately." },
              { stat: '7.32%', title: 'SEO Ranking Improvement', body: "Google indexes YouTube caption text to understand and rank video content in search results. Adding accurate captions gives an average 7.32% search visibility boost—compounding across your entire video library." },
              { stat: '466M', title: 'Global Deaf & HoH Audience', body: "466 million people worldwide have disabling hearing loss. Captions open your content to this enormous audience, many of whom demonstrate 60% higher brand loyalty to creators who prioritize accessibility." },
              { stat: '3×', title: 'Watch Time for Non-Native Speakers', body: "Captions triple watch completion rates for non-native speakers—one of YouTube's fastest-growing demographics. Better watch completion directly improves your average view duration, YouTube's top ranking metric." },
              { stat: '2026', title: 'New ADA Digital Compliance Rules', body: "Updated ADA Title III guidelines now explicitly cover online video published by businesses. If you monetize your YouTube channel or run brand content, adding captions is increasingly a legal requirement, not just best practice." },
            ].map((w) => (
              <article key={w.stat} className="yt-why-card">
                <div className="yt-why-stat">{w.stat}</div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="yt-how-section" id="how-it-works" aria-labelledby="yt-how-title">
        <div className="yt-container">
          <h2 id="yt-how-title" className="yt-section-title">How to Generate Captions for YouTube in 4 Steps</h2>
          <p className="yt-section-desc">From raw video to YouTube-ready captions in under 2 minutes. No editing software, no technical skills, no credit card.</p>
          <div className="yt-steps-grid">
            {[
              { n:'01', icon:'📤', title:'Upload Your Video', body:"Upload any format—MP4, MOV, AVI, MKV, WMV. Up to 500MB supported. Our system immediately extracts the audio track for AI analysis while keeping your video secure and private." },
              { n:'02', icon:'🤖', title:'Whisper AI Transcribes Instantly', body:"OpenAI's Whisper model—trained on 680,000 hours of multilingual audio—processes your video. Every word is transcribed and time-stamped to the millisecond. Auto-detects language, handles accents, filters background noise. 95–98% accuracy." },
              { n:'03', icon:'✏️', title:'Edit, Style & Perfect', body:"Review captions in the inline editor. Correct errors, adjust timing, add speaker labels, customize fonts, colors, sizes, and positions. Choose from 25+ YouTube-optimized styles or fully customize your own look." },
              { n:'04', icon:'📥', title:'Download & Upload to YouTube', body:"Download SRT and upload via YouTube Studio for SEO-boosting indexed captions—or download the burned-in MP4 for Shorts and social media. Your video is now accessible to 3× more viewers." },
            ].map((s) => (
              <article key={s.n} className="yt-step-card">
                <div className="yt-step-number">{s.n}</div>
                <div className="yt-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <div className="yt-steps-cta">
            <a href={toolUrl} className="yt-cta-button yt-cta-button--secondary" rel="noopener">Start Generating Captions Free →</a>
          </div>
        </div>
      </section>

      {/* ── VS YOUTUBE AUTO-CAPTIONS ── */}
      <section className="yt-vs-section" id="vs-youtube-auto-captions" aria-labelledby="yt-vs-title">
        <div className="yt-container">
          <h2 id="yt-vs-title" className="yt-section-title">Scenith AI Captions vs YouTube Auto-Captions: The Full Comparison</h2>
          <p className="yt-section-desc">YouTube's built-in auto-captions are only 70–80% accurate and can't be styled, pre-published, or optimized. Here's what that costs you.</p>
          <div className="yt-vs-table-wrap">
            <table className="yt-vs-table">
              <thead>
                <tr><th>Feature</th><th className="yt-vs-scenith">Scenith AI Captions</th><th className="yt-vs-yt">YouTube Auto-Captions</th></tr>
              </thead>
              <tbody>
                {[
                  ['Transcription Accuracy','✅ 95–98%','⚠️ 70–80%'],
                  ['Available Before Publishing','✅ Yes – pre-add before upload','❌ Only after video is live'],
                  ['Custom Fonts & Colors','✅ 25+ professional styles','❌ No styling control'],
                  ['Inline Editing Interface','✅ Full editor with live preview','⚠️ Basic text-only editor'],
                  ['Burned-in Caption Export','✅ Yes – perfect for Shorts','❌ Not available'],
                  ['Multiple Languages Per Video','✅ 50+ languages','⚠️ Limited detection'],
                  ['SRT / VTT Export','✅ Yes – direct upload to YouTube','✅ Yes (after generation)'],
                  ['Works on Non-YouTube Platforms','✅ Universal MP4 export','❌ YouTube only'],
                  ['Speaker Identification','✅ Supported with editing tools','❌ No speaker tagging'],
                  ['Background Noise Filtering','✅ Advanced AI filtering','⚠️ Often fails on noisy audio'],
                  ['Commercial Use','✅ Full commercial license','✅ Available'],
                ].map(([f, s, y]) => (
                  <tr key={f}><td><strong>{f}</strong></td><td className="yt-vs-scenith">{s}</td><td className="yt-vs-yt">{y}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="yt-vs-insight">
            <h3>💡 The Hidden Cost of Inaccurate Auto-Captions</h3>
            <p>Inaccurate captions don't just embarrass you—they actively hurt your YouTube SEO. Every incorrect word is a misassociation signal telling the algorithm your video is about something it's not. High-accuracy captions create clean keyword associations that compound over time as your video accumulates impressions. <strong>One wrong word per sentence compounds into thousands of lost impressions across your entire channel library.</strong></p>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE CAPTIONS SEO DEEP DIVE ── */}
      <section className="yt-seo-section" id="youtube-captions-seo" aria-labelledby="yt-seo-title">
        <div className="yt-container">
          <h2 id="yt-seo-title" className="yt-section-title">How YouTube Captions Directly Boost Channel SEO in 2026</h2>
          <p className="yt-section-desc">Caption-driven SEO is the single highest-ROI optimization available to YouTube creators today. Here's the complete mechanism.</p>
          <div className="yt-seo-content">
            <div className="yt-seo-explainer">
              <h3>How YouTube Indexes Captions for Search</h3>
              <p>YouTube's algorithm treats caption text as high-value content. Uploading accurate captions creates a full-text index of every spoken word. A 10-minute tutorial contains 1,200–1,500 spoken words. Without captions, only ~150 metadata words are indexed. With captions, all 1,500 words are searchable—a <strong>10× increase in indexable content per video.</strong></p>
              <p>In 2026, YouTube's multi-modal search uses caption context to understand what a video is about—not just which keywords appear. Captioned videos consistently rank for broader related search terms, appear more in Google "Videos" results, and surface more frequently in YouTube recommendations.</p>
              <h3>Caption Quality vs Caption Presence</h3>
              <p>Having captions isn't enough—<strong>accuracy matters enormously.</strong> YouTube auto-captions with 70% accuracy are filled with wrong words. Every incorrect word misassociates your video with wrong keywords. High-accuracy captions (95%+) create clean signals that compound over time. This is the difference between growing 20% faster and stagnating with the same viewership month after month.</p>
              <h3>Captions, Watch Time, and the Ranking Loop</h3>
              <p>Well-timed captions improve average view duration—YouTube's #1 ranking metric. Viewers in silent environments who can follow captions watch 40–60% more of each video. Higher watch time → better AVD → more algorithmic promotion → more impressions. <strong>Captions silently activate this compounding growth loop for every video you publish.</strong></p>
            </div>
            <div className="yt-seo-tactics">
              <h3>6 Caption SEO Tactics Top YouTubers Use in 2026</h3>
              <div className="yt-seo-tactics-list">
                {[
                  { n:1, title:'Keyword-Rich Natural Language', body:'Say your target keywords naturally in the video. Spoken keywords in captions carry weight similar to metadata. Plan scripts to include search terms conversationally.' },
                  { n:2, title:'Upload SRT Before Going Live', body:"Upload your SRT file via YouTube Studio before publishing. This gives Google time to index caption content during the critical first 48 hours when YouTube decides a video's distribution reach." },
                  { n:3, title:'Mirror Captions in Description', body:'Paste key caption excerpts into the video description. This creates keyword consistency between transcript and metadata, reinforcing topical relevance signals for both YouTube and Google search.' },
                  { n:4, title:'Retroactively Caption Old Videos', body:"Adding captions to your existing library can revive dormant videos. Many creators report older videos resurfacing in search after caption optimization. It's free SEO on content you already made." },
                  { n:5, title:'Add Multi-Language Captions', body:'Add captions in 2–3 languages. YouTube treats each language as additional indexable content, expanding discoverable reach globally at zero extra production cost.' },
                  { n:6, title:'Burn Captions into Shorts', body:"Shorts don't support SRT upload—burn captions into the video. Shorts with visible captions have 35% higher completion rates, feeding the Shorts algorithm the retention signals it needs to distribute your content." },
                ].map((t) => (
                  <div key={t.n} className="yt-tactic-item">
                    <div className="yt-tactic-num">{t.n}</div>
                    <div><strong>{t.title}</strong><p>{t.body}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="yt-features-section" id="features" aria-labelledby="yt-features-title">
        <div className="yt-container">
          <h2 id="yt-features-title" className="yt-section-title">Everything You Need to Caption YouTube Videos Like a Pro</h2>
          <p className="yt-section-desc">Built for YouTube creators—not generic video editors. Every feature designed around what channels actually need.</p>
          <div className="yt-features-grid">
            {[
              { icon:'🎙️', title:'Whisper AI Transcription', body:"Industry-leading 95–98% accuracy. Handles accents, technical jargon, and multiple speakers better than any competitor's free tier. Trained on 680,000 hours of multilingual audio." },
              { icon:'⚡', title:'60-Second Generation', body:'YouTube Shorts captioned in 30 seconds. 10-minute videos in under 2 minutes. No queue waiting. Publish faster, post more consistently.' },
              { icon:'✏️', title:'Live Preview Editor', body:'Edit captions with real-time video preview. See exactly how captions look on-screen as you type. Adjust timing with drag-and-drop, not raw timestamp editing.' },
              { icon:'🎨', title:'25+ YouTube-Optimized Styles', body:'Caption style templates designed for YouTube content types: vlogs, tutorials, interviews, gaming, cooking, news. One-click application, full manual customization.' },
              { icon:'🌐', title:'50+ Language Auto-Detection', body:"Upload in any language—Scenith auto-detects it. English, Hindi, Spanish, French, Mandarin, Arabic, Japanese, Korean, and 40+ more. Perfect for multilingual channels." },
              { icon:'📱', title:'YouTube Shorts Optimized', body:'Burn captions into vertical 9:16 videos with placement optimized for mobile. Large, bold, high-contrast captions that maximize Shorts engagement and completion rate.' },
              { icon:'📂', title:'SRT + MP4 Dual Export', body:'Download SRT for YouTube Studio (best for SEO) or download burned-in MP4 for Shorts, Instagram Reels, TikTok, and LinkedIn. One tool, every platform.' },
              { icon:'🔒', title:'Private & Secure', body:'Videos are encrypted in transit, processed in isolated environments, and auto-deleted within 48 hours. We never use your content for AI training data.' },
              { icon:'🆓', title:'Generous Free Tier', body:"Free plan includes caption generation, full editor, SRT export, and watermark-free MP4 download. No credit card required. Upgrade only when your channel's volume demands it." },
            ].map((f) => (
              <article key={f.title} className="yt-feature-card">
                <span className="yt-feature-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="yt-usecases-section" id="use-cases" aria-labelledby="yt-uc-title">
        <div className="yt-container">
          <h2 id="yt-uc-title" className="yt-section-title">Which YouTube Creators Need an AI Captions Generator?</h2>
          <p className="yt-section-desc">Whether you post daily Shorts or monthly documentaries, AI captions give every type of YouTube creator a measurable competitive advantage.</p>
          <div className="yt-uc-grid">
            {[
              { icon:'📹', title:'Vloggers & Daily Creators', body:"Post frequency is everything for vloggers. Manual captioning at 4–6 hours per video is impossible when posting 3–5 times weekly. AI captions take 2 minutes. Keep your schedule, stay accessible, let SEO compound automatically.", tags:['Daily vlogs','Travel','Lifestyle','Family channels'] },
              { icon:'💻', title:'Tutorial & How-To Creators', body:"Tutorial creators benefit most from caption SEO. Every step, tool name, and technical term in your captions becomes a searchable keyword. 'How to use [specific feature]' said conversationally can rank for queries your title never targeted.", tags:['Software tutorials','Cooking','DIY','Programming'] },
              { icon:'🎮', title:'Gaming YouTubers', body:"Gaming commentary is fast, jargon-heavy, and often has background audio. Whisper AI handles gaming vocabulary and filters game sound better than generic transcription tools.", tags:["Let's plays",'Reviews','Speedruns','Esports'] },
              { icon:'📚', title:'Educational & Course Creators', body:"YouTube is the world's #2 search engine for learning. Educational videos with captions rank dramatically better for study queries, get included in school resource lists, and retain international students.", tags:['Online courses','Study channels','Science','History'] },
              { icon:'💼', title:'Business & Brand Channels', body:"Business YouTube channels with captions project professionalism and accessibility. Product demos, testimonials, and webinar recordings see higher conversion rates with accurate captions.", tags:['Product demos','Testimonials','Brand content','Webinars'] },
              { icon:'🎵', title:'Music & Creative Channels', body:"Music video lyrics as burned-in captions are now an expected format—viewers sing along, share clips, and spend more time on-page. Creative channels use styled caption overlays as visual design elements.", tags:['Music videos','Lyric videos','Dance','Art'] },
            ].map((uc) => (
              <article key={uc.title} className="yt-uc-card">
                <div className="yt-uc-icon">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <p>{uc.body}</p>
                <div className="yt-uc-tags">
                  {uc.tags.map((t) => <span key={t} className="yt-uc-tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SRT UPLOAD GUIDE ── */}
      <section className="yt-srt-section" id="srt-upload-guide" aria-labelledby="yt-srt-title">
        <div className="yt-container">
          <h2 id="yt-srt-title" className="yt-section-title">Complete Guide: How to Upload SRT Captions to YouTube Studio (2026)</h2>
          <p className="yt-section-desc">Step-by-step instructions for uploading your SRT captions to YouTube for maximum SEO impact and accessibility compliance.</p>
          <div className="yt-srt-steps">
            {[
              { step:1, title:'Generate & Download Your SRT', body:'Use Scenith to generate captions. Review and edit for accuracy in the inline editor. Click "Download SRT" to save your .srt file.' },
              { step:2, title:'Open YouTube Studio', body:'Go to studio.youtube.com. Click "Content" in the left sidebar. Click the video you want to caption. Click "Edit" (pencil icon).' },
              { step:3, title:'Navigate to Subtitles Tab', body:"In the video editor, click 'Subtitles' in the left panel. You'll see any existing auto-generated captions. Click 'Add Language' and select your video's spoken language." },
              { step:4, title:'Upload Your SRT File', body:"Under 'Subtitles', click 'Add' then 'Upload file'. Choose 'With timing' (since your SRT already has timestamps). Select your .srt file and click 'Upload'. YouTube processes it within 1–2 minutes." },
              { step:5, title:'Publish and Verify', body:"Click 'Publish' to save. Within 24–48 hours, Google will crawl your caption text and update search indexing. Verify by searching for specific phrases spoken in your video." },
              { step:6, title:"Disable YouTube's Auto-Captions", body:"Once your accurate SRT is live, disable YouTube's auto-generated captions (Subtitles → Auto-generated → Edit → Delete). This ensures only your high-accuracy captions are indexed." },
            ].map((s) => (
              <div key={s.step} className="yt-srt-step">
                <div className="yt-srt-step-num">{s.step}</div>
                <div className="yt-srt-step-content"><h3>{s.title}</h3><p>{s.body}</p></div>
              </div>
            ))}
          </div>
          <div className="yt-srt-tip">
            <strong>⚡ Pro Tip:</strong> Upload your SRT <em>before</em> the video goes public. Schedule the video, upload captions via YouTube Studio, then publish. This ensures Google indexes caption text during the critical first 48-hour discovery window.
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="yt-testimonials-section" id="testimonials" aria-labelledby="yt-test-title">
        <div className="yt-container">
          <h2 id="yt-test-title" className="yt-section-title">What YouTube Creators Say About Scenith Captions</h2>
          <div className="yt-testimonials-grid">
            {[
              { quote:"I went from 800 to 4,200 monthly views in 6 weeks just by adding Scenith captions to my old tutorial videos. The SEO impact was immediate and shocking.", name:'Arjun P.', role:'Tech Tutorial Creator, 12K subscribers', stars:5 },
              { quote:"YouTube's auto-captions were making me look unprofessional with constant errors. Scenith gives me 95%+ accurate captions in 90 seconds. Game changer for my daily vlog schedule.", name:'Maya K.', role:'Daily Vlogger, 28K subscribers', stars:5 },
              { quote:"As a non-native English speaker running an English YouTube channel, I was terrified of caption errors. Scenith gets my accent right 97% of the time. Incredible.", name:'Carlos M.', role:'Business Educator, 8K subscribers', stars:5 },
              { quote:"The Shorts optimization is what sold me. Burned-in captions boosted my completion rate from 62% to 81%. That's directly responsible for 3× more Shorts recommendations.", name:'Priya S.', role:'Cooking Shorts Creator, 45K subscribers', stars:5 },
              { quote:"I caption every video in English and Hindi now. My Hindi-speaking audience doubled in 3 months. Adding a second language SRT takes 3 extra minutes and opens a 500M+ audience.", name:'Rahul D.', role:'Finance Creator, 19K subscribers', stars:5 },
              { quote:"For my gaming channel, the yellow bold style is perfect. Auto-generates in 45 seconds for my 8-minute highlights. My editor literally had a day off because of this tool.", name:'Alex T.', role:'Gaming Creator, 31K subscribers', stars:5 },
            ].map((t) => (
              <blockquote key={t.name} className="yt-testimonial-card">
                <div className="yt-testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>{'⭐'.repeat(t.stars)}</div>
                <p className="yt-testimonial-quote">"{t.quote}"</p>
                <cite className="yt-testimonial-cite"><strong>{t.name}</strong><br />{t.role}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="yt-faq-section" id="faq" aria-labelledby="yt-faq-title">
        <div className="yt-container">
          <h2 id="yt-faq-title" className="yt-section-title">Frequently Asked Questions: YouTube Captions Generator</h2>
          <div className="yt-faq-grid">
            {[
              { q:"Does YouTube auto-generate captions automatically?", a:"Yes, but YouTube's auto-captions are only 70–80% accurate, can't be styled, and are only generated after your video is already live—meaning Google can't index them during the critical first 48 hours. Scenith AI delivers 95–98% accuracy with full styling control and SRT files ready before you even hit publish." },
              { q:"How do I add captions to a YouTube video?", a:"Generate accurate captions using Scenith, download the SRT file, then go to YouTube Studio → Content → select your video → Subtitles → Add → Upload file. Your captions go live within minutes. For YouTube Shorts, download the burned-in MP4 instead, as Shorts don't support SRT upload." },
              { q:"Do captions improve YouTube SEO in 2026?", a:"Absolutely. YouTube captions are indexed as full text by Google and YouTube's search algorithm. Studies consistently show 7.32% better search rankings and 40% more views for captioned videos. Captions also improve watch time—the #1 YouTube ranking signal—by enabling silent viewing for 85% of mobile viewers." },
              { q:"What languages does the AI captions generator support?", a:"Scenith supports 50+ languages including English, Hindi, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, Korean, Russian, Italian, Dutch, Turkish, and more. Whisper AI auto-detects the language in your video—no manual selection needed." },
              { q:"Are burned-in or SRT captions better for YouTube?", a:"For standard YouTube videos: upload SRT for better SEO (Google indexes the text) and viewer toggle control. For YouTube Shorts: use burned-in captions (Shorts don't support SRT), which increase completion rates by 35%. For cross-platform posting to TikTok or Instagram Reels: burned-in captions work universally." },
              { q:"How long does caption generation take?", a:"YouTube Short captions (60 seconds of video) are ready in under 30 seconds. A 10-minute tutorial takes approximately 90 seconds. Processing time scales with video length, but is always dramatically faster than real-time." },
              { q:"Can I edit AI-generated captions before uploading to YouTube?", a:"Yes. Scenith's inline editor lets you correct any transcription errors, adjust timing, add speaker labels, and customize visual style. All changes auto-save. Most users spend 5–10 minutes reviewing 95%+ accurate AI captions vs 4–6 hours of manual transcription." },
              { q:"Is the YouTube captions generator free to use?", a:"Yes. Scenith's free plan includes AI caption generation, full editor access, SRT export, and no-watermark MP4 download. Premium plans unlock higher output resolution (up to 4K), longer video support, and increased monthly credits for high-volume channels." },
            ].map((f) => (
              <article key={f.q} className="yt-faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="yt-final-cta-section" id="get-started" aria-labelledby="yt-final-cta-title">
        <div className="yt-container">
          <div className="yt-final-cta-card">
            <div className="yt-final-cta-glow" aria-hidden="true" />
            <h2 id="yt-final-cta-title" className="yt-final-cta-h2">Ready to Grow Your YouTube Channel with AI Captions?</h2>
            <p className="yt-final-cta-p">Join 2,000+ YouTube creators already using Scenith to generate accurate captions, boost SEO, and reach a global audience. Takes 60 seconds. Free forever.</p>
            <a href={toolUrl} className="yt-cta-button yt-cta-button--large" rel="noopener">
              🎬 Generate YouTube Captions Free — Start Now →
            </a>
            <div className="yt-final-trust">
              <span>⚡ Under 60 seconds</span>
              <span>🌐 50+ languages</span>
              <span>🔒 Secure & private</span>
              <span>🆓 Free forever plan</span>
              <span>🚫 No watermarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      <section className="yt-related-section" aria-labelledby="yt-related-title">
        <div className="yt-container">
          <h2 id="yt-related-title" className="yt-section-title">More Free Tools for YouTube Creators</h2>
          <div className="yt-related-grid">
            <a href="/tools/ai-voice-generation" className="yt-related-card">
              <span className="yt-related-icon">🎙️</span>
              <div><h3>AI Voice Generator</h3><p>Professional voiceovers for YouTube in minutes. 50+ voices, multiple languages.</p></div>
            </a>
            <a href="/tools/image-editing" className="yt-related-card">
              <span className="yt-related-icon">🖼️</span>
              <div><h3>Free Image Editor</h3><p>Design YouTube thumbnails and channel art with our free image editor.</p></div>
            </a>
            <a href={toolUrl} className="yt-related-card">
              <span className="yt-related-icon">📝</span>
              <div><h3>Full AI Subtitle Generator</h3><p>25+ styles, inline editor, burned-in MP4 export for any platform.</p></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}