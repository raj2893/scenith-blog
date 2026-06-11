// app/tools/ai-cover-art-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Cover Art Generator: Create Stunning Album & Book Covers | Scenith',
  description: 'Generate professional cover art for albums, books, podcasts, and playlists using AI. Create stunning visuals in seconds. Perfect for musicians, authors, and content creators. Start free.',
  keywords: 'ai cover art generator, album cover generator, book cover ai, podcast cover art, music cover generator, ai artwork',
  openGraph: {
    title: 'AI Cover Art Generator: Create Stunning Album & Book Covers',
    description: 'Generate professional cover art for any project. Music albums, books, podcasts, playlists — all powered by AI.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-cover-art-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cover Art Generator | Scenith',
    description: 'Create stunning cover art with AI in seconds.',
  },
};

export default function AICoverArtGeneratorPage() {
  const ctaUrl = '/create-ai-content?tab=image&utm_source=ai-cover-art-generator&utm_medium=cta&utm_campaign=seo';

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI cover art generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI cover art generator is a tool that uses artificial intelligence to create professional cover images for albums, books, podcasts, playlists, and other media. You simply describe what you want — including style, mood, colors, and elements — and the AI generates original artwork in seconds. No design skills or expensive software required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use AI-generated cover art commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All cover art generated on Scenith comes with full commercial rights. You can use AI-generated covers for album releases (Spotify, Apple Music), book covers (Amazon KDP), podcast artwork, merchandise, and any commercial project. No attribution to Scenith is required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free AI cover art generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Scenith offers 50 free credits on signup (no credit card required). Free credits can be used to generate multiple cover art pieces using models like Stability AI Core. For higher resolution and more model options, paid plans start at just $9/month.',
        },
      },
      {
        '@type': 'Question',
        name: 'What resolution can I generate cover art in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scenith supports multiple aspect ratios perfect for covers: square (1:1) for albums and books, portrait (9:16) for vertical covers, and landscape (16:9) for social media banners. Resolution depends on the model but typically ranges from 1024x1024 to 2048x2048 pixels — sufficient for print and digital use.',
        },
      },
      {
        '@type': 'Question',
        name: 'What styles of cover art can AI generate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI can generate virtually any style: realistic photography, digital painting, anime, 3D render, vintage, minimalist, abstract, fantasy, sci-fi, grunge, watercolor, typography-focused, and more. You can also reference specific artists, eras, or genres in your prompts.',
        },
      },
    ],
  };

  // HowTo Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate AI Cover Art',
    description: 'Step-by-step guide to creating professional cover art using AI',
    totalTime: 'PT2M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Describe Your Cover Vision',
        text: 'Write a detailed prompt including genre, mood, colors, and elements.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Select Aspect Ratio',
        text: 'Choose 1:1 for albums/books, 9:16 for vertical covers, or 16:9 for banners.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Pick an Art Style',
        text: 'Select from realistic, artistic, anime, digital art, or 3D render styles.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Generate and Download',
        text: 'Click generate and receive your high-res cover art as PNG.',
        position: 4,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Scenith AI Cover Art Generator',
            description: 'Generate professional album covers, book covers, and podcast artwork using AI. Create stunning visuals in any style.',
            url: 'https://scenith.in/tools/ai-cover-art-generator',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '2847',
            },
          }),
        }}
      />

      <div className="cag-page">
        {/* Hero Section */}
        <section className="cag-hero">
          <div className="cag-container">
            <div className="cag-hero-badge">
              <span className="cag-badge-icon">🎨</span>
              <span className="cag-badge-text">AI Cover Art Generator</span>
              <span className="cag-badge-new">Professional Quality</span>
            </div>
            <h1 className="cag-hero-title">
              AI Cover Art Generator
              <span className="cag-hero-highlight">Create Stunning Album & Book Covers</span>
            </h1>
            <p className="cag-hero-desc">
              Generate <strong>professional cover art</strong> for music albums, books, podcasts, and playlists using AI.
              Used by musicians, authors, podcasters, and creators worldwide to create eye-catching covers that stand out on
              Spotify, Amazon, Apple Music, and Audible. No design skills needed — just describe your vision.
            </p>
            <div className="cag-hero-cta-group">
              <Link href={ctaUrl} className="cag-primary-cta">
                <span className="cag-cta-icon">🎵</span>
                Generate Cover Art Free →
              </Link>
              <Link href="/pricing" className="cag-secondary-link">
                Explore All Styles
              </Link>
            </div>
            <div className="cag-trust-badges">
              <span>✅ 50 Free Credits</span>
              <span>🎨 8 Art Styles</span>
              <span>📥 PNG Download</span>
              <span>💼 Commercial Rights</span>
              <span>🖼️ Up to 4K Resolution</span>
            </div>
          </div>
        </section>

        {/* Interactive Prompt Box - Direct CTA */}
        <section className="cag-prompt-section">
          <div className="cag-container">
            <div className="cag-prompt-card">
              <div className="cag-prompt-header">
                <span className="cag-prompt-icon">✨</span>
                <h2>Create Your Cover Art — Just Describe It</h2>
              </div>
              <textarea
                className="cag-prompt-textarea"
                placeholder="Example: A cinematic album cover for an indie folk band — a lone figure walking through a misty forest at golden hour, warm orange and amber tones, vintage film texture, minimalist typography space..."
                rows={3}
                defaultValue=""
              />
              <div className="cag-prompt-examples">
                <span className="cag-example-label">🎵 Try these cover prompts:</span>
                <button className="cag-example-chip" data-prompt="A surreal album cover for electronic music — neon purple and blue waves, glowing geometric shapes, futuristic city silhouette, dark background, holographic texture">🎧 Electronic</button>
                <button className="cag-example-chip" data-prompt="A vintage rock album cover — distressed texture, desaturated red and black, electric guitar silhouette, grunge aesthetic, 1970s vinyl feel">🎸 Rock</button>
                <button className="cag-example-chip" data-prompt="A dreamy indie folk cover — watercolor painting of mountains at sunset, soft pastel colors, birds silhouettes, hand-drawn look">🪕 Indie Folk</button>
                <button className="cag-example-chip" data-prompt="A minimalist book cover — single feather floating on dark background, elegant serif typography space, moody lighting, literary fiction style">📖 Fiction</button>
              </div>
              <Link href={ctaUrl} className="cag-generate-btn">
                🎨 Generate Cover Art →
              </Link>
              <p className="cag-prompt-note">No account required for first generation • High-resolution PNG • Commercial use included</p>
            </div>
          </div>
        </section>

        {/* What is AI Cover Art */}
        <section className="cag-definition-section">
          <div className="cag-container">
            <div className="cag-definition-box">
              <span className="cag-definition-label">🎨 What is AI Cover Art Generation?</span>
              <p className="cag-definition-text">
                <strong>AI cover art generation</strong> uses advanced machine learning models to create original, 
                publication-ready artwork from text descriptions. Unlike stock photography or hiring a designer, 
                AI cover art is <strong>completely unique, infinitely customizable, and costs a fraction of traditional design</strong>. 
                The technology understands artistic concepts like composition, color theory, lighting, texture, and style 
                references — allowing you to generate professional covers for albums, books, podcasts, singles, playlists, 
                and social media in minutes. Whether you need a gritty rock album cover, a dreamy indie folk aesthetic, 
                a minimalist literary fiction book cover, or a bold podcast thumbnail, AI can create it in any aspect ratio 
                and resolution suitable for both digital platforms and print.
              </p>
            </div>
          </div>
        </section>

        {/* Best AI Models for Cover Art */}
        <section className="cag-models-section">
          <div className="cag-container">
            <h2>Best AI Models for Cover Art</h2>
            <p className="cag-section-intro">
              Different AI models excel at different cover art styles. Here's when to use each:
            </p>
            <div className="cag-models-grid">
              <div className="cag-model-card">
                <div className="cag-model-header">
                  <span className="cag-model-icon">🖼️</span>
                  <h3>Stability AI Core</h3>
                  <span className="cag-model-badge">Photorealistic</span>
                </div>
                <p className="cag-model-desc">
                  Excellent for realistic photography-style covers. Perfect for author portraits, 
                  lifestyle album art, documentary podcasts, and any cover needing authentic human 
                  subjects or real-world scenes. Handles lighting and textures beautifully.
                </p>
                <div className="cag-model-features">
                  <span>✅ Photorealistic</span>
                  <span>✅ Portrait/landscape</span>
                  <span>✅ Free tier available</span>
                </div>
                <div className="cag-model-example">
                  <strong>Best for:</strong> Author headshots, documentary covers, lifestyle albums
                </div>
              </div>
              <div className="cag-model-card">
                <div className="cag-model-header">
                  <span className="cag-model-icon">🎨</span>
                  <h3>GPT Image 2</h3>
                  <span className="cag-model-badge">Versatile</span>
                </div>
                <p className="cag-model-desc">
                  Most versatile model — handles realistic, illustrated, and stylized covers equally well. 
                  Excellent typography integration, understands composition rules, and produces consistent 
                  results across genres. Great for book covers requiring text space.
                </p>
                <div className="cag-model-features">
                  <span>✅ All styles</span>
                  <span>✅ Typography-friendly</span>
                  <span>✅ 1024x1024+</span>
                </div>
                <div className="cag-model-example">
                  <strong>Best for:</strong> Book covers, general album art, any genre
                </div>
              </div>
              <div className="cag-model-card">
                <div className="cag-model-header">
                  <span className="cag-model-icon">✨</span>
                  <h3>Nano Banana</h3>
                  <span className="cag-model-badge">Premium Quality</span>
                </div>
                <p className="cag-model-desc">
                  Highest quality output with incredible detail and resolution options (up to 4K). 
                  Best for professional album releases, print book covers, and high-end projects 
                  where every detail matters. Slightly higher credit cost but worth it for premium work.
                </p>
                <div className="cag-model-features">
                  <span>✅ Up to 4K</span>
                  <span>✅ Exceptional detail</span>
                  <span>✅ Print-ready</span>
                </div>
                <div className="cag-model-example">
                  <strong>Best for:</strong> Professional albums, print books, gallery-worthy art
                </div>
              </div>
              <div className="cag-model-card">
                <div className="cag-model-header">
                  <span className="cag-model-icon">🎌</span>
                  <h3>Grok Aurora</h3>
                  <span className="cag-model-badge">Artistic</span>
                </div>
                <p className="cag-model-desc">
                  Excellent for stylized, artistic, and illustrated covers. Perfect for fantasy novels, 
                  animated-style album art, children's books, and any cover needing a distinctive 
                  illustrated look rather than photorealism.
                </p>
                <div className="cag-model-features">
                  <span>✅ Illustrated style</span>
                  <span>✅ Vibrant colors</span>
                  <span>✅ Creative freedom</span>
                </div>
                <div className="cag-model-example">
                  <strong>Best for:</strong> Fantasy/Sci-fi books, children's books, illustrated albums
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Art Use Cases */}
        <section className="cag-usecases-section">
          <div className="cag-container">
            <h2>Who Uses AI Cover Art?</h2>
            <p className="cag-section-intro">
              From independent musicians to bestselling authors, creators across industries use AI cover art to stand out.
            </p>
            <div className="cag-usecases-grid">
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">🎵</span>
                <h3>Musicians & Bands</h3>
                <p>Generate album covers, single artwork, and playlist covers for Spotify, Apple Music, and Bandcamp. Create cohesive visual identity across your entire discography without hiring different artists for each release.</p>
                <div className="cag-uc-stats">
                  <span>🎧 1,000s of covers</span>
                  <span>💰 Save $500+/cover</span>
                </div>
              </div>
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">📚</span>
                <h3>Authors & Publishers</h3>
                <p>Create professional book covers for Amazon KDP, Kindle, and print-on-demand. Test multiple cover concepts quickly. Perfect for series where you need consistent branding across multiple books.</p>
                <div className="cag-uc-stats">
                  <span>📖 KDP-ready</span>
                  <span>⚡ Test 10+ concepts/day</span>
                </div>
              </div>
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">🎙️</span>
                <h3>Podcasters</h3>
                <p>Design eye-catching podcast cover art that drives clicks in Apple Podcasts, Spotify, and Google Podcasts. Update seasonally or per episode. Create branded artwork for your entire show.</p>
                <div className="cag-uc-stats">
                  <span>📱 1400x1400 ready</span>
                  <span>🎨 Consistent branding</span>
                </div>
              </div>
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">📱</span>
                <h3>Playlist Curators</h3>
                <p>Generate unique covers for your Spotify, Apple Music, or YouTube playlists. Stand out in search results and attract more followers with professional, genre-appropriate artwork.</p>
                <div className="cag-uc-stats">
                  <span>🎵 Genre-specific</span>
                  <span>📈 Higher click-through</span>
                </div>
              </div>
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">🎮</span>
                <h3>Game Developers</h3>
                <p>Create cover art for indie games on Steam, Itch.io, and console stores. Generate key art, promotional images, and thumbnail variations for different platforms.</p>
                <div className="cag-uc-stats">
                  <span>🎮 Steam capsule ready</span>
                  <span>🖼️ Multiple variations</span>
                </div>
              </div>
              <div className="cag-usecase-card">
                <span className="cag-uc-icon">📺</span>
                <h3>Content Creators</h3>
                <p>Design channel art, video thumbnails, and merch designs. Create cohesive visual branding across YouTube, Twitch, and social media. Generate unique art for every video series.</p>
                <div className="cag-uc-stats">
                  <span>🎬 Thumbnail optimized</span>
                  <span>🖌️ Brand consistency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-Specific Cover Requirements */}
        <section className="cag-platform-section">
          <div className="cag-container">
            <h2>Platform-Specific Cover Requirements</h2>
            <p className="cag-section-intro">
              Different platforms have different cover art requirements. Here's what you need to know:
            </p>
            <div className="cag-platform-grid">
              <div className="cag-platform-card">
                <div className="cag-platform-header">
                  <span className="cag-platform-icon">🎵</span>
                  <h3>Spotify / Apple Music</h3>
                </div>
                <div className="cag-platform-specs">
                  <div className="cag-spec-row"><strong>Size:</strong> 3000x3000px minimum (square 1:1)</div>
                  <div className="cag-spec-row"><strong>Format:</strong> JPEG or PNG</div>
                  <div className="cag-spec-row"><strong>Best practices:</strong> No text (or minimal), high contrast, no borders</div>
                </div>
                <div className="cag-platform-prompt">
                  <span className="cag-prompt-label">Example prompt:</span>
                  <p>"Square album cover for electronic music, dark background with neon purple and blue geometric shapes, futuristic aesthetic, no text, high contrast, professional"</p>
                </div>
              </div>
              <div className="cag-platform-card">
                <div className="cag-platform-header">
                  <span className="cag-platform-icon">📖</span>
                  <h3>Amazon KDP (Books)</h3>
                </div>
                <div className="cag-platform-specs">
                  <div className="cag-spec-row"><strong>Size:</strong> 2560x1600px (1:1.6 ratio)</div>
                  <div className="cag-spec-row"><strong>Format:</strong> JPEG (high quality)</div>
                  <div className="cag-spec-row"><strong>Best practices:</strong> Clear title space, genre-appropriate, professional typography</div>
                </div>
                <div className="cag-platform-prompt">
                  <span className="cag-prompt-label">Example prompt:</span>
                  <p>"Book cover for thriller novel — dark alley at night, rain on cobblestone, silhouetted figure, moody blue and black color scheme, space for title at top"</p>
                </div>
              </div>
              <div className="cag-platform-card">
                <div className="cag-platform-header">
                  <span className="cag-platform-icon">🎙️</span>
                  <h3>Podcast Covers</h3>
                </div>
                <div className="cag-platform-specs">
                  <div className="cag-spec-row"><strong>Size:</strong> 1400x1400px to 3000x3000px</div>
                  <div className="cag-spec-row"><strong>Format:</strong> JPEG or PNG</div>
                  <div className="cag-spec-row"><strong>Best practices:</strong> Show title clearly, high contrast for thumbnails, host face optional</div>
                </div>
                <div className="cag-platform-prompt">
                  <span className="cag-prompt-label">Example prompt:</span>
                  <p>"Podcast cover art for true crime show — vintage microphone with dramatic shadows, dark red and black, mysterious atmosphere, space for title"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Write Cover Art Prompts */}
        <section className="cag-prompt-guide">
          <div className="cag-container">
            <h2>How to Write Perfect Cover Art Prompts</h2>
            <p className="cag-section-intro">
              The difference between amateur and professional cover art is in the prompt. Here's exactly how to write prompts that deliver stunning results.
            </p>
            <div className="cag-prompt-structure">
              <div className="cag-prompt-card-struct">
                <div className="cag-prompt-step">
                  <span className="cag-step-num">1</span>
                  <div className="cag-step-content">
                    <h3>Specify the Genre & Mood</h3>
                    <p>Tell the AI what kind of cover you need and the emotional tone.</p>
                    <div className="cag-step-example">
                      <strong>Examples:</strong> "Indie folk album cover — warm, nostalgic, intimate" / "Techno single — dark, energetic, futuristic" / "Romance novel cover — dreamy, passionate, soft lighting"
                    </div>
                  </div>
                </div>
                <div className="cag-prompt-step">
                  <span className="cag-step-num">2</span>
                  <div className="cag-step-content">
                    <h3>Describe Key Visual Elements</h3>
                    <p>What should the viewer see? Be specific but not overwhelming.</p>
                    <div className="cag-step-example">
                      <strong>Examples:</strong> "A lone figure with a guitar walking away into fog" / "A castle on a floating island with waterfalls" / "A close-up of hands on piano keys"
                    </div>
                  </div>
                </div>
                <div className="cag-prompt-step">
                  <span className="cag-step-num">3</span>
                  <div className="cag-step-content">
                    <h3>Define Color Palette</h3>
                    <p>Colors dramatically affect mood and genre perception.</p>
                    <div className="cag-step-example">
                      <strong>Examples:</strong> "Warm amber and orange tones" / "Monochrome blue with neon purple accents" / "Desaturated vintage colors with sepia tint"
                    </div>
                  </div>
                </div>
                <div className="cag-prompt-step">
                  <span className="cag-step-num">4</span>
                  <div className="cag-step-content">
                    <h3>Specify Text Space</h3>
                    <p>If you'll add text later, leave room for it.</p>
                    <div className="cag-step-example">
                      <strong>Examples:</strong> "Negative space at top for title" / "Dark area at bottom for text" / "Centered subject with text space on sides"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cag-perfect-prompt-box">
              <h3>✨ The Perfect Cover Art Prompt Formula</h3>
              <div className="cag-formula">
                <code>[Genre/Mood] + [Subject/Action] + [Color Palette] + [Text Space] + [Art Style] + [Quality]</code>
              </div>
              <div className="cag-formula-example">
                <strong>Example:</strong> "Indie folk album cover — a lone figure walking through misty forest at golden hour, warm amber tones, negative space at top for title, vintage film texture, nostalgic mood, high resolution 4K"
              </div>
              <Link href={ctaUrl} className="cag-generate-small">Generate This Cover →</Link>
            </div>
          </div>
        </section>

        {/* Best Practices & Common Mistakes */}
        <section className="cag-best-practices">
          <div className="cag-container">
            <div className="cag-two-col">
              <div className="cag-col">
                <div className="cag-practices-card">
                  <h3>✅ Cover Art Best Practices</h3>
                  <ul>
                    <li><strong>Research your genre</strong> — Different genres have distinct visual conventions. Study top covers in your category before generating.</li>
                    <li><strong>Test multiple concepts</strong> — Generate 5-10 variations of your cover idea. Small prompt changes can dramatically improve results.</li>
                    <li><strong>Consider thumbnail size</strong> — Your cover will be viewed tiny on phones. Ensure high contrast and clear focal point.</li>
                    <li><strong>Leave text space</strong> — If adding title/artist name, generate with negative space in the right area.</li>
                    <li><strong>Match resolution to platform</strong> — Use 3000x3000 for streaming services, 2560x1600 for KDP books.</li>
                    <li><strong>Stay on brand</strong> — For series, generate multiple covers with consistent color palette and composition.</li>
                    <li><strong>Use specific art references</strong> — "Studio Ghibli style" or "1980s synthwave aesthetic" gives better results than generic descriptions.</li>
                  </ul>
                </div>
              </div>
              <div className="cag-col">
                <div className="cag-practices-card cag-mistakes">
                  <h3>❌ Common Cover Art Mistakes</h3>
                  <ul>
                    <li><strong>Too much text in the image</strong> — AI often places fake text. Generate images without text, add typography later in Canva/Photoshop.</li>
                    <li><strong>Wrong aspect ratio</strong> — Using 16:9 for Spotify (requires 1:1) results in cropping or rejection.</li>
                    <li><strong>Low contrast covers</strong> — Muted, low-contrast images disappear in small thumbnails.</li>
                    <li><strong>Cluttered compositions</strong> — Too many elements confuse the viewer at small sizes.</li>
                    <li><strong>Genre mismatch</strong> — A fantasy-style cover for a business book will confuse potential readers.</li>
                    <li><strong>Ignoring platform guidelines</strong> — Each platform has specific requirements. Check before finalizing.</li>
                    <li><strong>Over-relying on trends</strong> — Today's trendy style may look dated next year. Classic compositions last longer.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Cover Art Examples */}
        <section className="cag-examples-section">
          <div className="cag-container">
            <h2>Real Cover Art Prompts & Examples</h2>
            <p className="cag-section-intro">
              See exactly what prompts produce professional covers. Use these templates for your own projects.
            </p>
            <div className="cag-examples-grid">
              <div className="cag-example-item">
                <div className="cag-example-genre">🎸 Rock Album</div>
                <div className="cag-example-prompt">
                  <span className="cag-example-quote">"</span>
                  Vintage rock album cover — distressed texture, desaturated red and black, electric guitar silhouette against brick wall, grunge aesthetic, 1970s vinyl feel, negative space for band name at top
                  <span className="cag-example-quote">"</span>
                </div>
                <div className="cag-example-meta">
                  <span>🏆 Model: GPT Image 2</span>
                  <span>📐 Size: Square 1:1</span>
                </div>
              </div>
              <div className="cag-example-item">
                <div className="cag-example-genre">🎧 Electronic Music</div>
                <div className="cag-example-prompt">
                  <span className="cag-example-quote">"</span>
                  Electronic music album cover — neon purple and blue geometric shapes, glowing lines, futuristic city silhouette at night, dark background, holographic texture, cyberpunk aesthetic, space for title at bottom
                  <span className="cag-example-quote">"</span>
                </div>
                <div className="cag-example-meta">
                  <span>🏆 Model: Nano Banana</span>
                  <span>📐 Size: Square 1:1</span>
                </div>
              </div>
              <div className="cag-example-item">
                <div className="cag-example-genre">📖 Thriller Novel</div>
                <div className="cag-example-prompt">
                  <span className="cag-example-quote">"</span>
                  Book cover for psychological thriller — dark alley in rainy city at night, silhouetted figure in trench coat, moody blue and black color scheme, dramatic lighting, negative space at top for title, cinematic composition
                  <span className="cag-example-quote">"</span>
                </div>
                <div className="cag-example-meta">
                  <span>🏆 Model: Stability AI Core</span>
                  <span>📐 Size: Portrait 9:16</span>
                </div>
              </div>
              <div className="cag-example-item">
                <div className="cag-example-genre">🎙️ True Crime Podcast</div>
                <div className="cag-example-prompt">
                  <span className="cag-example-quote">"</span>
                  Podcast cover art for true crime — vintage microphone with dramatic shadows, dark red and black color scheme, mysterious atmosphere, evidence board in background blur, space for show title at bottom
                  <span className="cag-example-quote">"</span>
                </div>
                <div className="cag-example-meta">
                  <span>🏆 Model: Grok Aurora</span>
                  <span>📐 Size: Square 1:1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Tutorial */}
        <section className="cag-steps-section">
          <div className="cag-container">
            <h2>Create Professional Cover Art in 4 Steps</h2>
            <div className="cag-steps-grid">
              <div className="cag-step-card">
                <div className="cag-step-number">1</div>
                <h3>Describe Your Vision</h3>
                <p>Write a detailed prompt including genre, mood, colors, elements, and text space requirements.</p>
              </div>
              <div className="cag-step-card">
                <div className="cag-step-number">2</div>
                <h3>Choose Aspect Ratio</h3>
                <p>1:1 for Spotify/Apple Music, 9:16 for vertical book covers, 16:9 for social banners.</p>
              </div>
              <div className="cag-step-card">
                <div className="cag-step-number">3</div>
                <h3>Select Art Style</h3>
                <p>Pick realistic for photos, artistic for paintings, anime for illustrated, or 3D for modern looks.</p>
              </div>
              <div className="cag-step-card">
                <div className="cag-step-number">4</div>
                <h3>Generate & Download</h3>
                <p>Click generate and receive high-res PNG. Add typography in any editor if needed.</p>
              </div>
            </div>
            <div className="cag-steps-cta">
              <Link href={ctaUrl} className="cag-primary-cta cag-steps-cta-btn">
                Create Your Cover Art Now →
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="cag-advanced-section">
          <div className="cag-container">
            <h2>🎨 Advanced Cover Art Techniques</h2>
            <div className="cag-advanced-grid">
              <div className="cag-advanced-card">
                <h3>Reference Specific Artists or Albums</h3>
                <p>AI models understand artistic references. Try: "In the style of Storm Thorgerson (Pink Floyd covers)", "Radiohead 'Kid A' aesthetic", "Olly Moss minimalist poster style", "Japanese citypop album art 1980s". This gives immediate direction for the visual language.</p>
              </div>
              <div className="cag-advanced-card">
                <h3>Generate Series with Consistent Branding</h3>
                <p>For album series or book trilogies, use the same core prompt but change one element. Keep color palette, composition, and style identical while varying subject. This creates professional cohesive branding across multiple releases.</p>
              </div>
              <div className="cag-advanced-card">
                <h3>Combine AI Art with Typography</h3>
                <p>Generate clean backgrounds with negative space, then add professional typography in Canva, Figma, or Photoshop. This gives you control over font, sizing, and positioning while leveraging AI for the complex visual elements.</p>
              </div>
              <div className="cag-advanced-card">
                <h3>Use Negative Prompts for Better Results</h3>
                <p>Add to your prompt: "no blurry details, no distorted faces, no text, no watermark, no low resolution". This significantly improves output quality, especially for photorealistic covers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="cag-compare-section">
          <div className="cag-container">
            <h2>AI Cover Art vs Traditional Design</h2>
            <div className="cag-compare-table-wrapper">
              <table className="cag-compare-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th className="cag-col-ai">AI Cover Art ✅</th>
                    <th>Hiring a Designer</th>
                    <th>Stock Photography</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Cost per cover</strong></td><td className="cag-col-ai">$0–$5</td><td>$50–$500+</td><td>$10–$50 (non-exclusive)</td></tr>
                  <tr><td><strong>Uniqueness</strong></td><td className="cag-col-ai">100% original</td><td>Original (one designer)</td><td>Used by thousands</td></tr>
                  <tr><td><strong>Turnaround time</strong></td><td className="cag-col-ai">30 seconds</td><td>2–7 days</td><td>Immediate (limited options)</td></tr>
                  <tr><td><strong>Revisions</strong></td><td className="cag-col-ai">Unlimited, instant</td><td>Limited, extra fees</td><td>None</td></tr>
                  <tr><td><strong>Style range</strong></td><td className="cag-col-ai">Any style imaginable</td><td>Designer's specialty</td><td>What's available in library</td></tr>
                  <tr><td><strong>Multiple concepts</strong></td><td className="cag-col-ai">Generate 10+ variations</td><td>Expensive per concept</td><td>Search different keywords</td></tr>
                  <tr><td><strong>Commercial rights</strong></td><td className="cag-col-ai">Full rights included</td><td>Usually full rights (higher cost)</td><td>Limited, attribution often required</td></tr>
                  <tr><td><strong>Scale 100 covers</strong></td><td className="cag-col-ai">$0–$500</td><td>$5,000–$50,000+</td><td>$1,000–$5,000 (non-exclusive)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="cag-faq-section">
          <div className="cag-container">
            <h2>Frequently Asked Questions</h2>
            <div className="cag-faq-grid">
              <div className="cag-faq-item">
                <h3>Can I use AI-generated cover art for Spotify releases?</h3>
                <p>Yes! Spotify, Apple Music, Amazon Music, and all major streaming platforms accept AI-generated cover art. Scenith provides full commercial rights, so you own the artwork completely. Ensure your cover meets their technical requirements: 3000x3000px minimum, JPEG or PNG, no borders or text (or minimal), high resolution.</p>
              </div>
              <div className="cag-faq-item">
                <h3>What resolution should my cover art be?</h3>
                <p><strong>Streaming (Spotify/Apple):</strong> 3000x3000px square | <strong>Amazon KDP books:</strong> 2560x1600px | <strong>Podcasts:</strong> 1400x1400px to 3000x3000px | <strong>Bandcamp:</strong> 1400x1400px minimum | <strong>YouTube Thumbnails:</strong> 1280x720px (16:9). Always export at highest available resolution — you can always downscale but can't upscale without quality loss.</p>
              </div>
              <div className="cag-faq-item">
                <h3>Does AI cover art look like stock photos?</h3>
                <p>No — AI generates completely original artwork. Unlike stock photos that thousands of others can license, your AI cover is unique to you. With specific prompting, you can create distinctive styles that stand out. Stock photos also rarely fit exactly what you need; AI generates exactly your vision.</p>
              </div>
              <div className="cag-faq-item">
                <h3>Can AI generate covers with text/titles?</h3>
                <p>AI can generate text, but it's often imperfect (misspelled words, weird fonts). Best practice: Generate the background imagery without text, then add professional typography using Canva, Figma, Photoshop, or free tools like GIMP. This gives you full control over font choice, sizing, and positioning.</p>
              </div>
              <div className="cag-faq-item">
                <h3>What's the best aspect ratio for book covers?</h3>
                <p>Amazon KDP recommends 2560x1600 pixels (1:1.6 ratio) for paperback and eBook covers. This works for most self-publishing platforms. For hardcover, check specific trim size requirements. Always download the highest resolution available and resize/crop as needed for your specific platform.</p>
              </div>
              <div className="cag-faq-item">
                <h3>Is there a free AI cover art generator?</h3>
                <p>Yes! Scenith offers 50 free credits on signup — no credit card required. Free credits work with Stability AI Core and other models. That's enough for multiple cover art pieces. For higher volume and premium models (Nano Banana, GPT Image 2), paid plans start at $9/month with 300 credits.</p>
              </div>
              <div className="cag-faq-item">
                <h3>Can AI match an existing brand style?</h3>
                <p>Absolutely. Reference your existing brand in the prompt: "in the style of [your brand] — dark background with gold accents, serif typography space, minimalist composition." For existing covers, describe their characteristics (color palette, composition style, subject matter) and the AI will generate consistent new artwork.</p>
              </div>
              <div className="cag-faq-item">
                <h3>How do I add typography to AI-generated covers?</h3>
                <p>Generate your cover with negative space (dark area, sky, or simple background where text will go). Download the high-res PNG. Import into Canva (free), Figma, or Photoshop. Add your title, artist name, or author name using professional fonts. Export as final cover. This two-step process gives best of both worlds: AI visuals + professional typography.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cag-final-section">
          <div className="cag-container">
            <div className="cag-final-card">
              <span className="cag-final-icon">🎨</span>
              <h2>Ready to Create Stunning Cover Art?</h2>
              <p>Join thousands of musicians, authors, and creators using Scenith to generate professional covers. Start free — no credit card required.</p>
              <div className="cag-final-buttons">
                <Link href={ctaUrl} className="cag-final-cta">
                  🎨 Create Your Cover Art Free →
                </Link>
                <Link href="/pricing" className="cag-final-secondary">
                  View All Art Styles & Pricing
                </Link>
              </div>
              <div className="cag-final-links">
                <p><strong>Explore more creative tools:</strong></p>
                <div className="cag-internal-links">
                  <Link href="/create-ai-content">✨ Create AI Content Hub</Link>
                  <Link href="/tools/ai-image-generation">🖼️ AI Image Generator</Link>
                  <Link href="/tools/ai-art-generator">🎨 AI Art Generator</Link>
                  <Link href="/tools/ai-logo-generator">⭐ AI Logo Generator</Link>
                  <Link href="/tools/ai-poster-generator">📰 AI Poster Generator</Link>
                  <Link href="/tools/ai-video-generator-from-text">🎬 AI Video Generator</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Small script for interactive prompt chips - only for UI enhancement, no core logic */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var chips = document.querySelectorAll('.cag-example-chip');
              var textarea = document.querySelector('.cag-prompt-textarea');
              if (chips && textarea) {
                chips.forEach(function(chip) {
                  chip.addEventListener('click', function(e) {
                    var prompt = this.getAttribute('data-prompt');
                    if (prompt) textarea.value = prompt;
                  });
                });
              }
            })();
          `,
        }}
      />
    </>
  );
}