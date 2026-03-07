import type { Metadata } from 'next';
import { OnlineVideoSpeedChangerCTA } from './OnlineVideoSpeedChangerClient';

export const metadata: Metadata = {
  title: 'Online Video Speed Changer — No Download, No Install | Scenith',
  description:
    'Change video speed online instantly — slow motion 0.5x to timelapse 15x. Free browser-based video speed changer. No software download needed. Export MP4 in seconds.',
  keywords: [
    'online video speed changer',
    'change video speed online',
    'video speed changer no download',
    'slow motion video online',
    'speed up video online free',
    'video playback speed changer',
    'timelapse video maker online',
    'video speed editor browser',
    'mp4 speed changer online',
    'free video speed changer',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/online-video-speed-changer',
  },
  openGraph: {
    title: 'Online Video Speed Changer — Slow Motion to Timelapse | Scenith',
    description:
      'Instantly change video playback speed in your browser. 0.5x slow-mo to 15x timelapse. Free MP4 export, no software needed.',
    url: 'https://scenith.in/tools/online-video-speed-changer',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Online Video Speed Changer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Video Speed Changer — Free, No Download | Scenith',
    description:
      'Change video speed online. Slow motion or timelapse in seconds. Free MP4 export.',
    images: ['https://scenith.in/images/VideoSpeedModifierSS.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Scenith Online Video Speed Changer',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      url: 'https://scenith.in/tools/online-video-speed-changer',
      description:
        'Free browser-based video speed changer. Adjust video playback from 0.5x slow motion to 15x timelapse without downloading any software.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        '0.5x to 15x speed range',
        'No software download required',
        'MP4 export',
        'Slow motion creation',
        'Timelapse creation',
        'Audio pitch correction',
        'Works in any browser',
      ],
      author: { '@type': 'Organization', name: 'Scenith' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1520',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I change video speed online without downloading software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Scenith\'s online video speed changer runs entirely in your browser. Upload your video, choose a speed preset or enter a custom value from 0.5x to 15x, and download your MP4. No software installation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the fastest speed I can apply to a video online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can speed up a video up to 15x using Scenith\'s online speed changer, turning a 15-minute clip into a 1-minute timelapse. Most social media creators use 4x–8x for satisfying timelapse effects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does changing video speed affect audio quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scenith applies automatic audio pitch correction when adjusting speed, so voices and music stay natural-sounding up to around 2x. Above 2x, most creators remove audio or replace it with music for best results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What video formats does the online speed changer support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tool accepts MP4, MOV, AVI, MKV, WebM, MPEG, and FLV files up to 500MB. All exports are delivered as optimized MP4 files ready for social media or professional use.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the online video speed changer free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the core speed changer is free. Free accounts include 5 speed-adjusted exports per month up to 720p quality. Creator and Studio plans unlock up to 45+ exports, 2K/4K quality, and longer video lengths.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a slow motion video online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your video to Scenith\'s online speed changer, then select the 0.5x "Dramatic Slow" or 0.75x "Cinematic" preset. Click Start Processing and download your slow-motion MP4. The whole process takes under 3 minutes.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Change Video Speed Online',
      description: 'Step-by-step guide to adjusting video speed in a browser without any software.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Open the Online Video Speed Changer',
          text: 'Navigate to Scenith\'s online video speed changer at scenith.in/tools/video-speed-modifier.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Upload Your Video File',
          text: 'Click Upload Video and select your MP4, MOV, AVI, or other supported video. Files up to 500MB are accepted.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Choose a Speed Preset or Custom Value',
          text: 'Pick a preset like 0.5x Slow Motion, 2x Learning Mode, or 8x Extreme Timelapse — or dial in any value between 0.5x and 15x.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Select Export Quality',
          text: 'Choose output quality from 144p to 4K depending on your plan. 720p is available on all free accounts.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Process and Download MP4',
          text: 'Click Start Processing. Your speed-adjusted video is ready to download as an MP4 in under 3 minutes.',
        },
      ],
    },
  ],
};

export default function OnlineVideoSpeedChangerPage() {
  return (
    <>
      <script
        id="online-vsc-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="ovsc-page">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="ovsc-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Online Video Speed Changer</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <section className="ovsc-hero" id="hero">
          <div className="ovsc-hero-badge">
            <span className="ovsc-badge-dot" aria-hidden="true" />
            100% Free · No Download · No Watermark
          </div>

          <h1 className="ovsc-h1">
            Online Video Speed Changer
            <span className="ovsc-h1-sub"> — Slow Motion to Timelapse in Your Browser</span>
          </h1>

          <p className="ovsc-hero-desc">
            The fastest way to change video playback speed online. Go from <strong>0.5× dramatic slow-motion</strong> to <strong>15× extreme timelapse</strong> without installing a single app. Upload any MP4, MOV, AVI, or MKV — export a crisp MP4 in minutes.
          </p>

          <div className="ovsc-trust-row" role="list" aria-label="Key features">
            {[
              { icon: '⚡', text: '2-min avg processing' },
              { icon: '🎬', text: '0.5× – 15× speed range' },
              { icon: '📥', text: 'Instant MP4 download' },
              { icon: '🔒', text: 'Secure & private' },
              { icon: '📱', text: 'Works on mobile' },
              { icon: '🌐', text: 'Any browser, any OS' },
            ].map((item) => (
              <div key={item.text} className="ovsc-trust-item" role="listitem">
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* ── Primary CTA ── */}
          <OnlineVideoSpeedChangerCTA />

          <p className="ovsc-cta-note">
            Opens Scenith&apos;s full video speed editor 
          </p>
        </section>

        {/* ── Speed Presets Visual ── */}
        <section className="ovsc-presets-section" aria-labelledby="presets-title">
          <h2 id="presets-title" className="ovsc-section-title">
            8 Speed Presets Built for Every Creator
          </h2>
          <p className="ovsc-section-desc">
            Not sure which speed to pick? These science-backed presets cover the most popular use cases on social media and professional video production. Every preset is available the moment you open the tool — no settings to dig through.
          </p>
          <div className="ovsc-presets-grid" role="list">
            {[
              { emoji: '🐌', label: 'Dramatic Slow', value: '0.5×', desc: 'Cinematic emphasis on action shots, emotion, or product details. Standard for Instagram Reels slow-mo reveals.' },
              { emoji: '🎥', label: 'Cinematic', value: '0.75×', desc: 'Subtle slow-down that feels intentional, not gimmicky. Popular in short-film and brand storytelling.' },
              { emoji: '🙂', label: 'Natural', value: '1.0×', desc: 'Original speed preserved. Use this to preview before committing to a speed change.' },
              { emoji: '⚡', label: 'Social Fast', value: '1.25×', desc: 'Trim watch time without losing the natural feel. Great for tutorials and talking-head videos.' },
              { emoji: '🔥', label: 'Reels Speed', value: '1.5×', desc: 'The sweet spot for TikTok and Reels. Feels fast and energetic while keeping dialogue intelligible.' },
              { emoji: '🎓', label: 'Learning Mode', value: '2.0×', desc: 'Proven to cut lecture and tutorial watch time in half without hurting comprehension scores.' },
              { emoji: '🚀', label: 'Timelapse', value: '4.0×', desc: 'Compress 1-hour events into 15-minute highlight reels. Ideal for unboxings, cooking, or travel vlogs.' },
              { emoji: '💨', label: 'Extreme Timelapse', value: '8.0×', desc: 'Turn a full workday into a 1-minute loop. Perfect for construction, art creation, or sunrise sequences.' },
            ].map((p) => (
              <article key={p.value} className="ovsc-preset-card" role="listitem">
                <div className="ovsc-preset-top">
                  <span className="ovsc-preset-emoji" aria-hidden="true">{p.emoji}</span>
                  <span className="ovsc-preset-value">{p.value}</span>
                </div>
                <h3 className="ovsc-preset-label">{p.label}</h3>
                <p className="ovsc-preset-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="ovsc-how-section" id="how-it-works" aria-labelledby="how-title">
          <h2 id="how-title" className="ovsc-section-title">
            How to Change Video Speed Online — 5 Steps
          </h2>
          <p className="ovsc-section-desc">
            No timeline. No keyframes. No render queue. Just a slider, a button, and your download.
          </p>
          <ol className="ovsc-steps-list">
            {[
              {
                n: '01',
                title: 'Open the Speed Changer',
                body: 'Click the button above to launch Scenith\'s online video speed changer. It opens in the same tab — no new app, no account wall on the first visit.',
              },
              {
                n: '02',
                title: 'Upload Your Video',
                body: 'Drag-and-drop or browse to select your file. Supported formats: MP4, MOV, AVI, MKV, WebM, MPEG, FLV — up to 500 MB. Your file is encrypted in transit.',
              },
              {
                n: '03',
                title: 'Pick a Speed or Go Custom',
                body: 'Tap any of the 8 one-click presets — or switch to Custom and type any value between 0.5× and 15×. The in-browser preview updates instantly so you can audition the feel before committing.',
              },
              {
                n: '04',
                title: 'Choose Export Quality',
                body: 'Free users export up to 720p. Upgrade to Creator for 2K or Studio for 4K. Select your quality and click Start Processing.',
              },
              {
                n: '05',
                title: 'Download Your MP4',
                body: 'Processing typically completes in under 3 minutes. Click Download MP4 and your speed-adjusted video is ready for social media, client delivery, or further editing.',
              },
            ].map((step) => (
              <li key={step.n} className="ovsc-step-item">
                <div className="ovsc-step-number" aria-hidden="true">{step.n}</div>
                <div className="ovsc-step-content">
                  <h3 className="ovsc-step-title">{step.title}</h3>
                  <p className="ovsc-step-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="ovsc-steps-cta">
            <OnlineVideoSpeedChangerCTA variant="secondary" />
          </div>
        </section>

        {/* ── Use Cases Deep-Dive ── */}
        <section className="ovsc-usecases-section" aria-labelledby="usecases-title">
          <h2 id="usecases-title" className="ovsc-section-title">
            Who Uses an Online Video Speed Changer — And Why
          </h2>
          <p className="ovsc-section-desc">
            Speed adjustment is one of the highest-impact edits you can make to a video. Here&apos;s how different creators use it.
          </p>

          <div className="ovsc-usecases-grid">
            {[
              {
                icon: '📱',
                heading: 'Social Media Creators',
                subhead: 'TikTok · Instagram Reels · YouTube Shorts',
                body: 'Platform algorithms reward completion rate. A well-placed slow-motion reveal or a snappy 2× speed-up keeps viewers watching longer and triggers replays. Research from social media analytics platforms consistently shows that videos with at least one speed variation see higher average watch time than flat-speed videos. The 1.5× "Reels Speed" preset is particularly effective for satisfying transformation or process content — it feels urgent without feeling rushed.',
                tags: ['0.5× reveals', '1.5× processes', '4× montages'],
              },
              {
                icon: '🎬',
                heading: 'Indie Filmmakers',
                subhead: 'Short films · Music videos · Branded content',
                body: 'Slow motion is the most cost-effective way to elevate production value. A 0.5× shot of a door closing or a glance across the room carries emotional weight that\'s impossible to achieve at 1×. Without access to a high-speed camera (shooting at 120fps+), you can still approximate the effect by slowing standard 30fps footage to 0.5×, then adding a subtle motion-blur overlay in post. Many indie directors use this online speed changer for rough cuts before committing to final export settings in Premiere or DaVinci.',
                tags: ['0.5× drama', '0.75× atmosphere', 'rough-cut testing'],
              },
              {
                icon: '🎓',
                heading: 'Educators & Course Creators',
                subhead: 'Online courses · Tutorial channels · Webinar recordings',
                body: 'Studies on e-learning consistently show that 1.5× is the optimal speed for retaining instructional content — fast enough to respect learners\' time, slow enough that complex steps aren\'t missed. If you record tutorials, speed up the setup phases (installation, environment config) to 2×–3× and keep the key explanations at 1× by processing separate clips. Many course creators also use 0.5× to slow down hands demos so every mouse click and keystroke is legible.',
                tags: ['1.5× lectures', '2× setup phases', '0.5× demos'],
              },
              {
                icon: '⚽',
                heading: 'Sports Coaches & Athletes',
                subhead: 'Technique analysis · Highlight reels · Scouting',
                body: 'Frame-level analysis at 0.5× reveals technique flaws invisible at game speed: elbow angle in a tennis serve, hip rotation in a golf swing, footwork in a basketball crossover. For highlights, 4×–8× condenses a 90-minute match into a shareable 2-minute reel. Sports organizations increasingly send these compressed reels as pre-game scouting packages — a 0.5× breakdown of an opponent\'s set play tells a team far more than a written report.',
                tags: ['0.5× technique', '4× highlights', '8× match summary'],
              },
              {
                icon: '🏗️',
                heading: 'Real Estate & Construction',
                subhead: 'Progress documentation · Listings · Developer reports',
                body: 'Time-lapse is a proven visual for communicating scale and progress. A 30-day construction sequence shot daily at 10 seconds per day = 5 minutes of footage. At 8×–15×, that compresses to under 40 seconds — perfect for investor updates, social media, or client portals. Real estate agents use 0.75×–1× speed on walkthrough videos to give a more relaxed, premium feel compared to the rushed pace of a standard walkthrough.',
                tags: ['8× progress', '15× timelapse', '0.75× walkthroughs'],
              },
              {
                icon: '🎤',
                heading: 'Musicians & Performers',
                subhead: 'Practice analysis · Concert clips · Music videos',
                body: 'Slowing a performance video to 0.5× lets musicians study their own technique at a detail level that mirrors slow-motion replay in sports coaching. For music videos, speed changes can serve as transitions or create visual rhythm synced to the track\'s BPM. A 2× section that snaps to beat is a common DIY effect achievable with this tool — no After Effects needed.',
                tags: ['0.5× technique', '2× beat sync', '4× montage'],
              },
            ].map((uc) => (
              <article key={uc.heading} className="ovsc-usecase-card">
                <div className="ovsc-usecase-header">
                  <span className="ovsc-usecase-icon" aria-hidden="true">{uc.icon}</span>
                  <div>
                    <h3 className="ovsc-usecase-heading">{uc.heading}</h3>
                    <p className="ovsc-usecase-subhead">{uc.subhead}</p>
                  </div>
                </div>
                <p className="ovsc-usecase-body">{uc.body}</p>
                <div className="ovsc-usecase-tags">
                  {uc.tags.map((t) => (
                    <span key={t} className="ovsc-tag">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Technical Deep Dive ── */}
        <section className="ovsc-tech-section" aria-labelledby="tech-title">
          <h2 id="tech-title" className="ovsc-section-title">
            How Online Video Speed Changing Works Under the Hood
          </h2>
          <p className="ovsc-section-desc">
            Understanding the technology helps you get better results. Here&apos;s what happens between upload and download.
          </p>

          <div className="ovsc-tech-grid">
            <article className="ovsc-tech-card">
              <h3>
                <span aria-hidden="true">🎞️</span> Frame-Rate Manipulation
              </h3>
              <p>
                Every video is a sequence of still images (frames) played at a fixed rate — typically 24fps for film, 30fps for web, 60fps for smooth action. <strong>Speeding up</strong> means dropping frames at a calculated interval so the same motion plays in less time. <strong>Slowing down</strong> means either duplicating existing frames (faster, lower quality) or interpolating new intermediate frames using motion estimation (slower, higher quality). Scenith uses FFmpeg&apos;s <code>setpts</code> filter for precise frame-timing adjustment on every export.
              </p>
            </article>

            <article className="ovsc-tech-card">
              <h3>
                <span aria-hidden="true">🎵</span> Audio Pitch Correction
              </h3>
              <p>
                Raw speed change shifts audio pitch — slow down a voice and it sounds like a giant; speed it up and it sounds like a chipmunk. Scenith applies the <strong>atempo filter chain</strong> in FFmpeg to adjust audio duration independently from pitch, keeping voices and music sounding natural. This works well up to 2×. Above 2×, audio becomes increasingly difficult to process naturally — which is why the tool nudges you to replace high-speed audio with music instead.
              </p>
            </article>

            <article className="ovsc-tech-card">
              <h3>
                <span aria-hidden="true">⚙️</span> Codec & Container
              </h3>
              <p>
                All exports are delivered as H.264-encoded MP4 files — the most widely supported format across browsers, phones, social media platforms, and professional video software. The container is re-muxed rather than full re-encoded where possible, cutting processing time significantly. For quality selections above 1080p, H.264 High Profile is used to maximize detail retention in fine textures and motion.
              </p>
            </article>

            <article className="ovsc-tech-card">
              <h3>
                <span aria-hidden="true">☁️</span> Cloud Processing vs Browser
              </h3>
              <p>
                Pure browser-based speed changers (JavaScript + WebAssembly) are limited by your device&apos;s CPU and available RAM — a 500MB file on a mid-range laptop can take 10–20 minutes to process locally. Scenith offloads processing to a cloud server with dedicated GPU acceleration, compressing the same job to under 3 minutes. Your file is deleted from server storage after export — it&apos;s never used for training or shared with third parties.
              </p>
            </article>
          </div>
        </section>

        {/* ── Format Compatibility ── */}
        <section className="ovsc-formats-section" aria-labelledby="formats-title">
          <h2 id="formats-title" className="ovsc-section-title">
            Supported Video Formats
          </h2>
          <p className="ovsc-section-desc">
            Scenith&apos;s online video speed changer accepts all major video container formats. If your camera or phone produced it, we can process it.
          </p>
          <div className="ovsc-formats-table-wrap">
            <table className="ovsc-formats-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>Extension</th>
                  <th>Common Source</th>
                  <th>Max File Size</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fmt: 'MPEG-4', ext: '.mp4', src: 'Phones, cameras, screen recorders', size: '500 MB', note: 'Recommended format for best results' },
                  { fmt: 'QuickTime', ext: '.mov', src: 'iPhone, Mac apps, DSLR', size: '500 MB', note: 'Automatically converted to MP4 on export' },
                  { fmt: 'AVI', ext: '.avi', src: 'Windows apps, older camcorders', size: '500 MB', note: 'Larger files; upload may take longer' },
                  { fmt: 'Matroska', ext: '.mkv', src: 'Screen recorders, downloads', size: '500 MB', note: 'Multi-audio tracks preserved' },
                  { fmt: 'WebM', ext: '.webm', src: 'Web browsers, screen capture', size: '500 MB', note: 'VP8/VP9 decoded before processing' },
                  { fmt: 'MPEG', ext: '.mpeg / .mpg', src: 'Legacy cameras, DVDs', size: '500 MB', note: 'Older codec; processing may be slower' },
                  { fmt: 'Flash Video', ext: '.flv', src: 'Older web platforms', size: '500 MB', note: 'Supported but MP4 upload recommended' },
                ].map((r) => (
                  <tr key={r.ext}>
                    <td><strong>{r.fmt}</strong></td>
                    <td><code>{r.ext}</code></td>
                    <td>{r.src}</td>
                    <td>{r.size}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Speed + Platform Guide ── */}
        <section className="ovsc-platform-section" aria-labelledby="platform-title">
          <h2 id="platform-title" className="ovsc-section-title">
            Recommended Speeds by Platform
          </h2>
          <p className="ovsc-section-desc">
            Each platform has distinct audience expectations for video pacing. Match your speed to the context for maximum performance.
          </p>
          <div className="ovsc-platform-grid">
            {[
              {
                platform: 'TikTok',
                icon: '🎵',
                recs: [
                  { type: 'Process / transformation', speed: '1.5× – 2×' },
                  { type: 'Slow-mo reveal', speed: '0.5×' },
                  { type: 'POV daily life', speed: '1× – 1.25×' },
                  { type: 'Transition montage', speed: '4×' },
                ],
                tip: 'TikTok\'s algorithm rewards completion rate. A 1.5× tutorial is more likely to be watched fully than a 1× version of the same length.',
              },
              {
                platform: 'Instagram Reels',
                icon: '📸',
                recs: [
                  { type: 'Aesthetic b-roll', speed: '0.5× – 0.75×' },
                  { type: 'Before/after', speed: '1.5×' },
                  { type: 'Recipe / cooking', speed: '2× – 4×' },
                  { type: 'Construction / art', speed: '8×' },
                ],
                tip: 'Reels favour cinematic aesthetics. Slow motion with trending audio outperforms fast cuts in the beauty and lifestyle niches.',
              },
              {
                platform: 'YouTube Shorts',
                icon: '▶️',
                recs: [
                  { type: 'Tutorial speed-up', speed: '1.5× – 2×' },
                  { type: 'Gaming highlight', speed: '0.5× – 0.75×' },
                  { type: 'Tech unboxing', speed: '1.25×' },
                  { type: 'Timelapse intro', speed: '8× – 15×' },
                ],
                tip: 'YouTube Shorts are indexed for search. Speed changes that create a "satisfying" loop (timelapse) tend to accumulate replays, boosting the video in recommendations.',
              },
              {
                platform: 'LinkedIn Video',
                icon: '💼',
                recs: [
                  { type: 'Thought leadership', speed: '1× – 1.25×' },
                  { type: 'Case study walkthrough', speed: '1.5×' },
                  { type: 'Event highlights', speed: '2×' },
                  { type: 'Construction / progress', speed: '4× – 8×' },
                ],
                tip: 'LinkedIn audiences watch with sound off more often than other platforms. 1× – 1.25× with captions performs better than heavy speed variation.',
              },
            ].map((p) => (
              <article key={p.platform} className="ovsc-platform-card">
                <div className="ovsc-platform-header">
                  <span className="ovsc-platform-icon" aria-hidden="true">{p.icon}</span>
                  <h3 className="ovsc-platform-name">{p.platform}</h3>
                </div>
                <table className="ovsc-platform-table">
                  <thead>
                    <tr><th>Content type</th><th>Speed</th></tr>
                  </thead>
                  <tbody>
                    {p.recs.map((r) => (
                      <tr key={r.type}>
                        <td>{r.type}</td>
                        <td><strong>{r.speed}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="ovsc-platform-tip">
                  <strong>Pro tip:</strong> {p.tip}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ovsc-faq-section" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="ovsc-section-title">
            Frequently Asked Questions
          </h2>
          <div className="ovsc-faq-grid">
            {[
              {
                q: 'Can I change video speed online without downloading software?',
                a: 'Yes. Scenith\'s online video speed changer runs entirely through a web interface — upload, adjust, download. No FFmpeg installation, no Premiere subscription, no app store. It works on Windows, macOS, Linux, Android, and iOS.',
              },
              {
                q: 'What is the slowest speed I can set?',
                a: '0.5× is the minimum preset. For anything slower, you\'d need source footage shot at a higher frame rate (60fps or 120fps) to avoid stuttering. If you have such footage, the custom speed input accepts any decimal value down to 0.5×.',
              },
              {
                q: 'What is the fastest speed available?',
                a: '15× using the custom speed input. This turns a 1-hour clip into a 4-minute video. Most creators find the 8× "Extreme Timelapse" preset covers all real-world needs; 15× is best for very long static recordings like security footage or overnight time-lapses.',
              },
              {
                q: 'Does changing video speed affect audio quality?',
                a: 'Pitch correction is automatically applied. At speeds between 0.75× and 2×, most viewers can\'t tell the audio was touched. Outside that range, the tool continues to adjust, but natural-sounding audio degrades. For 4×+ exports, replacing audio with background music produces the best results.',
              },
              {
                q: 'Will the output video have a watermark?',
                a: 'No. Scenith does not add watermarks on any plan, including the free tier. The exported MP4 is clean and ready for commercial use.',
              },
              {
                q: 'How many videos can I process per month on the free plan?',
                a: 'Free accounts get 5 speed-adjusted exports per month at up to 720p quality. Creator plan unlocks 45 exports at up to 2K. Studio plan includes unlimited exports at up to 4K.',
              },
              {
                q: 'Is my video kept private?',
                a: 'Uploaded videos are stored temporarily for processing only. They are not shared, sold, or used for AI training. Files are purged from server storage after your download or upon account deletion.',
              },
              {
                q: 'What\'s the difference between this page and the main video speed modifier?',
                a: 'This page focuses specifically on browser-based use cases and provides a comprehensive guide for online video speed changing. The main tool at /tools/video-speed-modifier is the full interactive editor where you upload, adjust, and download your video.',
              },
            ].map((item) => (
              <article key={item.q} className="ovsc-faq-item">
                <h3 className="ovsc-faq-q">{item.q}</h3>
                <p className="ovsc-faq-a">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Final CTA Section ── */}
        <section className="ovsc-final-cta" aria-labelledby="final-cta-title">
          <h2 id="final-cta-title" className="ovsc-final-cta-title">
            Start Changing Video Speed Online — Free
          </h2>
          <p className="ovsc-final-cta-desc">
            No software. No watermarks. No credit card. Join 30,000+ creators who use Scenith to change video speed online in minutes.
          </p>
          <OnlineVideoSpeedChangerCTA variant="large" />
          <div className="ovsc-final-trust">
            <span>✅ 30,000+ creators</span>
            <span>⭐ 4.8 / 5 rating</span>
            <span>🔒 Files auto-deleted after export</span>
            <span>📥 MP4 download, no watermark</span>
          </div>
        </section>
      </main>
    </>
  );
}