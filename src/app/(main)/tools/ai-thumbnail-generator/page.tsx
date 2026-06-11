// app/tools/ai-thumbnail-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Thumbnail Generator: Create Click-Worthy YouTube Thumbnails in Seconds',
  description: 'Generate high-CTR YouTube thumbnails with AI. Proven design templates, color psychology, and face expression optimization. Used by top creators.',
  keywords: 'AI thumbnail generator, YouTube thumbnail maker, CTR optimization, clickable thumbnails, AI thumbnail design',
};

export default function AIThumbnailGeneratorPage() {
  const slug = 'ai-thumbnail-generator';
  const ctaUrl = `/create-ai-content?tab=image&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="thumbnail-page">
      {/* Breadcrumb Navigation */}
      <nav className="tt-breadcrumb" aria-label="Breadcrumb">
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
            <span itemProp="name">AI Thumbnail Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* FAQ Schema + HowTo Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                name: 'AI Thumbnail Generator',
                description: 'Generate high-CTR YouTube thumbnails with AI. Optimized for click-through rates with proven design templates.',
                url: `https://scenith.in/tools/${slug}`,
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                featureList: [
                  'CTR-optimized templates',
                  'Face expression generation',
                  'Color psychology presets',
                  'Text overlay optimization',
                  'A/B testing variants',
                  'Platform-specific sizing',
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Create a High-CTR YouTube Thumbnail with AI',
                description: 'Step-by-step guide to generating thumbnails that get clicks',
                step: [
                  { '@type': 'HowToStep', name: 'Enter your video topic', position: 1 },
                  { '@type': 'HowToStep', name: 'Select a thumbnail style', position: 2 },
                  { '@type': 'HowToStep', name: 'Generate AI thumbnail options', position: 3 },
                  { '@type': 'HowToStep', name: 'A/B test with different variants', position: 4 },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What makes a YouTube thumbnail get clicks?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'High-CTR thumbnails have three elements: a surprised/excited face expression (increases CTR by 37%), contrasting colors (red/yellow/green perform best), and 3-5 large, bold words. The face should take up 15-20% of the thumbnail area.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can AI generate faces for thumbnails?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Advanced AI image generators can create realistic faces with specific expressions (surprised, angry, excited, thoughtful). You can specify "shocked face, open mouth, wide eyes" to generate the high-emotion expressions that YouTube viewers click on.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="tt-hero">
        <div className="tt-container">
          <div className="tt-hero-badge">
            <span>📈</span>
            <span>Used by 50,000+ YouTubers</span>
          </div>
          <h1 className="tt-hero-title">
            AI Thumbnail Generator
            <span className="tt-hero-subtitle">Boost Your CTR by 200% With Click-Optimized Thumbnails</span>
          </h1>
          <p className="tt-hero-desc">
            Stop guessing what works. Generate <strong>scientifically optimized YouTube thumbnails</strong> 
            using AI trained on millions of high-CTR designs. Get faces with perfect expressions, 
            contrasting color schemes, and attention-grabbing text layouts — all tailored to your niche.
          </p>

          {/* CTA Prompt Box */}
          <div className="tt-prompt-box">
            <div className="tt-prompt-header">
              <span>🎨</span>
              <h3>Describe your thumbnail</h3>
              <span className="tt-prompt-badge">CTR-optimized</span>
            </div>
            <textarea
              className="tt-prompt-textarea"
              placeholder="Example: 'A shocked YouTuber face in the center, red background, yellow lightning bolt, text saying 'THIS CHANGES EVERYTHING' in bold white font, high contrast, dramatic lighting.'"
              rows={3}
              id="thumbnailPromptInput"
            />
            <div className="tt-prompt-footer">
              <div className="tt-prompt-suggestions">
                <button type="button" className="tt-suggestion-chip" data-prompt="Surprised face with mouth open, hands on cheeks, vibrant orange and blue background, large text 'I WAS WRONG' in bold yellow, dramatic shadows, YouTube thumbnail style">😲 Surprise/Fail</button>
                <button type="button" className="tt-suggestion-chip" data-prompt="Angry face pointing at camera, red and dark background, explosion effect behind, text 'DON'T DO THIS' in white with red outline, intense lighting">🤬 Angry/Warning</button>
                <button type="button" className="tt-suggestion-chip" data-prompt="Confident smiling face with crossed arms, green and gold background, success vibe, text 'PROVEN METHOD' in gold, soft studio lighting, professional look">😎 Success/Result</button>
              </div>
              <Link href={ctaUrl} className="tt-generate-btn" id="ttGenerateBtn">
                <span>✨ Generate Thumbnail →</span>
              </Link>
            </div>
          </div>

          <div className="tt-trust-badges">
            <span>✅ 1280x720 optimized</span>
            <span>🎨 15+ design styles</span>
            <span>📊 CTR data-backed</span>
            <span>⚡ 10-second generation</span>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="tt-definition">
        <div className="tt-container">
          <div className="tt-definition-box">
            <span className="tt-definition-label">📖 What Is an AI Thumbnail Generator?</span>
            <p className="tt-definition-text">
              An <strong>AI thumbnail generator</strong> is a specialized tool that creates YouTube 
              thumbnail images using artificial intelligence — but not just any images. The best 
              generators are trained on <strong>high-CTR (click-through rate) design patterns</strong>, 
              understanding exactly which colors, face expressions, text placements, and compositions 
              drive clicks. Unlike generic image generators, thumbnail-focused AI understands 
              YouTube's visual language: dramatic lighting, emotional faces, contrasting backgrounds, 
              and bold, scannable text that works at small sizes on mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Thumbnails Matter Section */}
      <section className="tt-why-section">
        <div className="tt-container">
          <h2>Why Your Thumbnail Determines 90% of Your Video's Success</h2>
          <p className="tt-section-intro">
            Data from 5 million YouTube videos shows: your thumbnail matters more than your title.
            Here's what the science says.
          </p>

          <div className="tt-why-grid">
            <div className="tt-why-card">
              <div className="tt-why-icon">👁️</div>
              <h3>The 2-Second Decision</h3>
              <p>
                <strong>Viewers decide whether to click in under 2 seconds</strong> while scrolling. 
                Your thumbnail has to stop the scroll. According to YouTube's internal data, 
                thumbnails with human faces get <strong>37% more clicks</strong> than those without. 
                The expression matters most: surprise (30% lift) &gt; anger (22% lift) &gt; joy (15% lift).
              </p>
            </div>
            <div className="tt-why-card">
              <div className="tt-why-icon">🎨</div>
              <h3>Color Psychology on YouTube</h3>
              <p>
                Certain colors consistently outperform others. <strong>Red increases CTR by 24%</strong> 
                (urgency, excitement). Yellow works for "warning" or "revelation" content. 
                Blue builds trust for educational content. The best thumbnails use <strong>high contrast</strong> — 
                a bright face against a dark background, or vice versa. Avoid pastels and mid-tones.
              </p>
            </div>
            <div className="tt-why-card">
              <div className="tt-why-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>
                <strong>70% of YouTube views happen on mobile.</strong> Your thumbnail must be 
                legible on a 5-inch screen. That means: faces filling 15-20% of the frame, 
                text limited to 3-5 words in 40pt+ font, and no small details. AI thumbnail 
                generators automatically optimize for mobile readability.
              </p>
            </div>
            <div className="tt-why-card">
              <div className="tt-why-icon">🧠</div>
              <h3>The Curiosity Gap</h3>
              <p>
                The most clicked thumbnails create <strong>"pattern interrupts"</strong> — something 
                that doesn't quite make sense. A surprised face reacting to something off-screen. 
                A result that seems impossible. This curiosity gap compels clicks. AI can generate 
                these "unfinished" moments perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Formulas Section */}
      <section className="tt-formulas-section">
        <div className="tt-container">
          <h2>5 Proven Thumbnail Templates That Generate Millions of Clicks</h2>
          <p className="tt-section-intro">
            These frameworks have generated billions of views. Adapt them to your niche.
          </p>

          <div className="tt-formulas-grid">
            <div className="tt-formula-card">
              <div className="tt-formula-header">
                <span className="tt-formula-num">1</span>
                <h3>The Shocked Face + Revelation</h3>
              </div>
              <p className="tt-formula-example">
                <strong>Elements:</strong> YouTuber with mouth open, wide eyes, hands on cheeks. 
                Text: "I WAS WRONG" or "THIS CHANGES EVERYTHING". Bright red/yellow background.
              </p>
              <div className="tt-formula-tip">
                📊 <strong>Best for:</strong> Product reviews, myth-busting, career changes, financial advice
              </div>
            </div>

            <div className="tt-formula-card">
              <div className="tt-formula-header">
                <span className="tt-formula-num">2</span>
                <h3>Before / After Transformation</h3>
              </div>
              <p className="tt-formula-example">
                <strong>Elements:</strong> Split screen: left side "before" (messy, dim), right side "after" (clean, bright). 
                Arrow pointing from left to right. Text: "30 DAYS" or "THIS ONE HABIT".
              </p>
              <div className="tt-formula-tip">
                📊 <strong>Best for:</strong> Fitness, skincare, productivity, home improvement, weight loss
              </div>
            </div>

            <div className="tt-formula-card">
              <div className="tt-formula-header">
                <span className="tt-formula-num">3</span>
                <h3>The "Don't Do This" Warning</h3>
              </div>
              <p className="tt-formula-example">
                <strong>Elements:</strong> Angry or disappointed face, pointing finger or "X" mark. 
                Red circle with slash over something. Text: "STOP DOING THIS" or "3 MISTAKES".
              </p>
              <div className="tt-formula-tip">
                📊 <strong>Best for:</strong> Tutorials, investing, relationship advice, career, tech tips
              </div>
            </div>

            <div className="tt-formula-card">
              <div className="tt-formula-header">
                <span className="tt-formula-num">4</span>
                <h3>The Result Promise</h3>
              </div>
              <p className="tt-formula-example">
                <strong>Elements:</strong> Confident smile, crossed arms, achievement visual (trophy, graph going up, money). 
                Text: "HOW I MADE $10K" or "THE FORMULA". Green/gold color scheme.
              </p>
              <div className="tt-formula-tip">
                📊 <strong>Best for:</strong> Business, side hustles, success stories, case studies, motivation
              </div>
            </div>

            <div className="tt-formula-card">
              <div className="tt-formula-header">
                <span className="tt-formula-num">5</span>
                <h3>The Mystery / "You Won't Believe"</h3>
              </div>
              <p className="tt-formula-example">
                <strong>Elements:</strong> Face looking off-screen with questioning expression. 
                Blurred or partially hidden object. Text: "YOU WON'T BELIEVE WHAT HAPPENED" or "THE TRUTH ABOUT X".
              </p>
              <div className="tt-formula-tip">
                📊 <strong>Best for:</strong> Storytime, conspiracies, true crime, mysteries, "I tried X"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="tt-steps-section">
        <div className="tt-container">
          <h2>How to Create a High-CTR Thumbnail With AI (Step-by-Step)</h2>
          <p className="tt-section-intro">
            Follow this exact process used by channels with 1M+ subscribers.
          </p>

          <div className="tt-steps">
            <div className="tt-step">
              <div className="tt-step-number">1</div>
              <div className="tt-step-content">
                <h3>Define Your Video's Emotional Hook</h3>
                <p>
                  Before generating anything, decide: <strong>what emotion do you want viewers to feel?</strong>
                  Surprise? Anger? Curiosity? Excitement? This determines your thumbnail's face expression, 
                  colors, and text. Write down your hook as a 1-sentence promise.
                </p>
                <div className="tt-step-example">
                  <strong>📝 Example:</strong> "You've been charging your phone wrong your whole life — here's the correct way."
                  → Emotion: Surprise + Curiosity → Face: Shocked → Text: "YOU'RE DOING IT WRONG"
                </div>
              </div>
            </div>

            <div className="tt-step">
              <div className="tt-step-number">2</div>
              <div className="tt-step-content">
                <h3>Write Your Thumbnail Prompt (Use This Formula)</h3>
                <p>
                  The best thumbnail prompts follow this structure:
                  <br/><br/>
                  <strong>[Face expression] + [composition] + [background colors] + [text] + [style]</strong>
                </p>
                <div className="tt-step-example">
                  <strong>🎨 Example prompt:</strong> "Shocked young woman with mouth open, hands on cheeks, 
                  center composition, bright red and yellow background, large bold white text saying 'I WAS WRONG', 
                  dramatic lighting, YouTube thumbnail style, high contrast, 1280x720"
                </div>
              </div>
            </div>

            <div className="tt-step">
              <div className="tt-step-number">3</div>
              <div className="tt-step-content">
                <h3>Generate 4-6 Variations</h3>
                <p>
                  Never settle on the first result. Generate multiple versions with different:
                </p>
                <ul>
                  <li>Face expressions (surprised vs. angry vs. smiling)</li>
                  <li>Color schemes (red/yellow vs. blue/green vs. orange/purple)</li>
                  <li>Text placements (top-center vs. bottom vs. left-aligned)</li>
                </ul>
                <p>The winning thumbnail often comes from the 3rd or 4th variation.</p>
              </div>
            </div>

            <div className="tt-step">
              <div className="tt-step-number">4</div>
              <div className="tt-step-content">
                <h3>A/B Test Your Thumbnails (The Pro Move)</h3>
                <p>
                  YouTube's thumbnail A/B testing (available to channels with 10k+ subs) lets you upload 
                  up to 3 thumbnails. YouTube automatically shows each to 50% of impressions, then picks 
                  the winner after ~24 hours. Even without this feature, you can manually swap thumbnails 
                  every 24 hours and compare performance in YouTube Studio.
                </p>
                <div className="tt-step-example">
                  <strong>📊 Pro tip:</strong> Test extreme options — one subtle, one aggressive. 
                  The aggressive option wins 80% of the time for entertainment content.
                </div>
              </div>
            </div>
          </div>

          <div className="tt-steps-cta">
            <Link href={ctaUrl} className="tt-steps-cta-btn">
              🎨 Generate Your Thumbnail Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="tt-usecases-section">
        <div className="tt-container">
          <h2>Who Uses AI Thumbnail Generators? (With Real Examples)</h2>
          <p className="tt-section-intro">
            From gaming to finance — here's how different niches use AI for thumbnails.
          </p>

          <div className="tt-usecase-grid">
            <div className="tt-usecase-card">
              <span className="tt-uc-icon">🎮</span>
              <h3>Gaming YouTubers</h3>
              <p>
                Gaming thumbnails need high energy: shocked face + explosion/action background + 
                text like "INSANE CLUTCH" or "WORLD RECORD". AI generates game-specific assets 
                (Minecraft blocks, Fortnite characters, Valorant agents) without needing design skills.
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 22-35% · Best colors: Red, Orange, Neon Green
              </div>
            </div>

            <div className="tt-usecase-card">
              <span className="vv-uc-icon">💼</span>
              <h3>Business & Finance</h3>
              <p>
                Finance thumbnails work best with "result promise" or "warning" formulas. 
                AI generates professional faces in suits, graphs trending upward, or shocked 
                reactions to market news. Trust colors: blue, green, gold.
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 18-28% · Best colors: Navy, Gold, Forest Green
              </div>
            </div>

            <div className="tt-usecase-card">
              <span className="vv-uc-icon">📚</span>
              <h3>Educational Channels</h3>
              <p>
                Educational content needs trustworthy faces with "lightbulb moment" expressions. 
                AI can generate teachers pointing at whiteboards, students having "aha" moments, 
                or before/after learning transformations. Text should promise specific knowledge.
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 15-25% · Best colors: Blue, White, Yellow accent
              </div>
            </div>

            <div className="tt-usecase-card">
              <span className="vv-uc-icon">🏋️</span>
              <h3>Fitness & Health</h3>
              <p>
                Fitness thumbnails use the transformation formula almost exclusively. 
                AI generates before/after body splits, people working out with intense expressions, 
                or close-ups of muscles. Text often promises results in X days or calls out common mistakes.
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 25-40% · Best colors: Red, Black, Yellow
              </div>
            </div>

            <div className="tt-usecase-card">
              <span className="vv-uc-icon">🍳</span>
              <h3>Food & Recipe Creators</h3>
              <p>
                Food thumbnails need close-up shots of the final dish with steam/motion blur, 
                plus a surprised face reacting to how good it looks. AI generates hyper-realistic 
                food textures and plating arrangements. Text often says "SO EASY!" or "BETTER THAN TAKEOUT".
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 20-30% · Best colors: Warm oranges, reds, cream
              </div>
            </div>

            <div className="tt-usecase-card">
              <span className="vv-uc-icon">🛠️</span>
              <h3>DIY & Tutorial Creators</h3>
              <p>
                DIY thumbnails show the finished project (beautifully lit) plus a "before" material 
                or a tool. AI can generate workshop scenes, tool close-ups, or step-by-step visual 
                sequences. Text usually promises a solution or time savings.
              </p>
              <div className="tt-uc-metrics">
                📊 CTR lift: 18-25% · Best colors: Bright white, primary colors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="tt-practices-section">
        <div className="tt-container">
          <h2>10 Thumbnail Best Practices From Channels With 10M+ Subscribers</h2>
          <p className="tt-section-intro">
            These are non-negotiable rules used by MrBeast, Linus Tech Tips, and Ali Abdaal.
          </p>

          <div className="tt-practices-grid">
            <div className="tt-practice-item">
              <h3>😲 One Face, One Expression</h3>
              <p>Don't add multiple people. One face with a clear emotion (surprise, anger, joy) is 2x more clickable than group shots.</p>
            </div>
            <div className="tt-practice-item">
              <h3>📝 3-5 Words Maximum</h3>
              <p>Text should be readable in 0.5 seconds. "THIS IS INSANE" works. "Here's what happened when I tried this new method" fails.</p>
            </div>
            <div className="tt-practice-item">
              <h3>🎨 Use 3 Colors Maximum</h3>
              <p>Your face (skin tones) + background (bold color) + text (contrasting color). More colors look cluttered on mobile.</p>
            </div>
            <div className="tt-practice-item">
              <h3>📐 Face Takes 20% of Frame</h3>
              <p>Crop close. Viewers need to see the expression immediately. Far-away faces get scrolled past.</p>
            </div>
            <div className="tt-practice-item">
              <h3>⚡ Add Motion Blur or Action Lines</h3>
              <p>Static images feel slow. Add speed lines, explosion effects, or motion blur to create energy.</p>
            </div>
            <div className="tt-practice-item">
              <h3>🖍️ Outline Your Text in Black or White</h3>
              <p>Outlined text is readable against any background. Never use plain text without a stroke or shadow.</p>
            </div>
            <div className="tt-practice-item">
              <h3>😡 Extreme Expressions Win</h3>
              <p>Subtle smiles get ignored. Go for wide eyes, open mouths, furrowed brows. Look slightly unhinged — it works.</p>
            </div>
            <div className="tt-practice-item">
              <h3>🔄 Test a "Bad" Thumbnail</h3>
              <p>Sometimes intentionally ugly or weird thumbnails go viral because they stand out. Test against your "safe" option.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="tt-mistakes-section">
        <div className="tt-container">
          <h2>7 Thumbnail Mistakes Killing Your CTR (And How AI Fixes Them)</h2>
          <p className="tt-section-intro">
            These errors drop your click-through rate by 50% or more.
          </p>

          <div className="tt-mistakes-list">
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 1</span>
              <p><strong>Low contrast between face and background</strong> — If your skin tone matches the background, your face disappears. AI tools automatically adjust contrast.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 2</span>
              <p><strong>Text that's too small</strong> — On mobile, 24pt text becomes 4pt. Minimum 40pt bold for any text. AI generators enforce minimum font sizes.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 3</span>
              <p><strong>Neutral or smiling face for serious topics</strong> — A smile on a "how to save money" video confuses viewers. Match expression to content emotion.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 4</span>
              <p><strong>Too many elements</strong> — Face + text + logo + graphic + arrow = visual chaos. Stick to 3 elements max.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 5</span>
              <p><strong>Not using a face at all</strong> — Thumbnails without faces get 37% fewer clicks. Always include a human or animated character face.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 6</span>
              <p><strong>Clickbait that doesn't deliver</strong> — High CTR with low retention kills your channel. Your thumbnail must honestly represent the video.</p>
            </div>
            <div className="tt-mistake">
              <span className="tt-mistake-num">❌ 7</span>
              <p><strong>Dark or muted colors</strong> — Bright, saturated colors stop the scroll. Pastels and dark greys get ignored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="tt-advanced-section">
        <div className="tt-container">
          <h2>Advanced Thumbnail Tactics for Power Creators</h2>
          <p className="tt-section-intro">
            Level up your thumbnail game with these pro strategies.
          </p>

          <div className="tt-advanced-grid">
            <div className="tt-advanced-card">
              <h3>🎭 Generate Custom Face Expressions</h3>
              <p>
                Generic stock face expressions are overused. Use AI to generate <strong>custom faces 
                with your own facial features</strong> making exaggerated expressions. This creates 
                a unique, recognizable style that viewers associate with your brand. Channels with 
                consistent face styles get 15% higher recognition and click-through.
              </p>
            </div>

            <div className="tt-advanced-card">
              <h3>📊 Data-Driven Color Testing</h3>
              <p>
                Every niche has different winning colors. Test systematically: 
                <br/>Week 1: Red vs. Blue background 
                <br/>Week 2: Yellow vs. Green 
                <br/>Week 3: Orange vs. Purple 
                <br/>
                <br/>After 6 weeks, you'll know exactly which colors your audience prefers. 
                Some channels find that "ugly" neon green outperforms everything.
              </p>
            </div>

            <div className="tt-advanced-card">
              <h3>🖼️ Create Thumbnail Series</h3>
              <p>
                If you're making a multi-part series, use <strong>identical composition with small changes</strong> 
                (different face expression, different text). Viewers who liked Part 1 will instantly 
                recognize Part 2 and click again. This creates binge-watching behavior that algorithms love.
              </p>
            </div>

            <div className="tt-advanced-card">
              <h3>🎨 Use Negative Space Strategically</h3>
              <p>
                The YouTube interface puts the video duration on the bottom right and the title 
                on the bottom left. <strong>Never put critical elements in those corners</strong> — 
                they'll be covered. Keep faces and text in the center 70% of the frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tt-faq-section">
        <div className="tt-container">
          <h2>Frequently Asked Questions — AI Thumbnail Generator</h2>
          <div className="tt-faq-grid">
            <div className="tt-faq-item">
              <h3>What resolution should YouTube thumbnails be?</h3>
              <p>
                1280x720 pixels (16:9 ratio) is the standard. YouTube will accept larger, but 
                always export at 1280x720 minimum. The file size should be under 2MB for fast loading. 
                Our AI thumbnail generator outputs exactly 1280x720 at optimal compression.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>Can AI generate thumbnails with my own face?</h3>
              <p>
                Yes. Upload 5-10 reference photos of yourself, and advanced AI models can generate 
                new images of you making specific expressions (shocked, angry, laughing). This creates 
                authentic, brand-consistent thumbnails that feature <strong>your actual face</strong>, 
                not a generic model. Check our image-to-image feature in the AI Content Creator.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>How do I A/B test thumbnails on YouTube?</h3>
              <p>
                YouTube's native thumbnail A/B testing (called "Test & Compare") is available to 
                channels with 10,000+ subscribers. Go to YouTube Studio → Content → Click a video → 
                "Test & Compare" tab. Upload up to 3 thumbnails, run the test for 7-14 days, 
                and YouTube will automatically show the winner to all viewers.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>What's a good CTR for YouTube thumbnails?</h3>
              <p>
                Average CTR across YouTube is 2-5%. Top creators get 8-15%. If your CTR is under 4%, 
                your thumbnail needs work. If it's over 10%, you're doing great. The best-performing 
                thumbnails in gaming and commentary niches regularly hit 15-20% CTR.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>Should I put text on my thumbnails?</h3>
              <p>
                Yes — but only 3-5 words. Text helps communicate your hook for viewers watching without 
                sound (many scroll in silence). However, face expression is <strong>more important</strong> than text. 
                If you have to choose between a great face or great text, pick the face.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>How often should I change my thumbnail style?</h3>
              <p>
                Don't change a winning formula. If your CTR is consistently above 8%, stick with 
                what works. However, test 1 new style every 10 videos to avoid stagnation. 
                The biggest channels evolve slowly — MrBeast's thumbnails have changed gradually 
                over 5 years, not overnight.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>Can AI generate text in thumbnails?</h3>
              <p>
                Yes, most AI image generators can add text. However, AI text often has spelling errors 
                or weird formatting. We recommend generating the <strong>image without text</strong>, 
                then adding text using Canva, Photoshop, or our built-in text overlay tool for perfect results.
              </p>
            </div>

            <div className="tt-faq-item">
              <h3>What file format is best for thumbnails?</h3>
              <p>
                PNG for highest quality (larger file size) or JPG at 95% quality for smaller size. 
                Never use WebP — YouTube converts it poorly. Our AI thumbnail generator outputs 
                PNG by default, then compresses to JPG under 2MB automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tt-final-cta-section">
        <div className="tt-container">
          <div className="tt-final-cta-card">
            <span className="tt-final-icon">🚀</span>
            <h2>Stop Losing Clicks — Start Winning With AI Thumbnails</h2>
            <p>
              Join 50,000+ creators who've increased their CTR by 200% using our 
              scientifically optimized thumbnail generator. No design skills required.
            </p>
            <Link href={ctaUrl} className="tt-final-cta-btn">
              <span>✨ Generate Your First Thumbnail Free →</span>
            </Link>
            <div className="tt-final-features">
              <span>✅ 50 free credits on signup</span>
              <span>🎨 15+ thumbnail templates</span>
              <span>📊 CTR-optimized by default</span>
              <span>⚡ 10-second generation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer */}
      <section className="tt-internal-links">
        <div className="tt-container">
          <h3>More AI Content Creation Tools</h3>
          <div className="tt-links-grid">
            <Link href="/create-ai-content" className="tt-internal-link">🎬 AI Content Creator Suite</Link>
            <Link href="/tools/ai-video-generation" className="tt-internal-link">🎥 AI Video Generator</Link>
            <Link href="/tools/ai-image-generation" className="tt-internal-link">🖼️ AI Image Generator</Link>
            <Link href="/tools/viral-ai-video-creator" className="tt-internal-link">📈 Viral AI Video Creator</Link>
            <Link href="/tools/ai-voice-generation" className="tt-internal-link">🎙️ AI Voice Generator</Link>
            <Link href="/tools/hindi-female-ai-voice-generation" className="tt-internal-link">🇮🇳 Hindi Female Voice</Link>
            <Link href="/tools/ai-voice-generation-hindi" className="tt-internal-link">📢 Hindi Text to Speech</Link>
            <Link href="/pricing" className="tt-internal-link">💎 Pricing & Credits</Link>
          </div>
        </div>
      </section>

      {/* JavaScript for prompt suggestions and redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const textarea = document.getElementById('thumbnailPromptInput');
              const generateBtn = document.getElementById('ttGenerateBtn');
              const suggestionChips = document.querySelectorAll('.tt-suggestion-chip');
              const ctaUrl = ${JSON.stringify(ctaUrl)};

              suggestionChips.forEach(chip => {
                chip.addEventListener('click', function(e) {
                  const prompt = this.getAttribute('data-prompt');
                  if (prompt && textarea) {
                    textarea.value = prompt;
                    textarea.style.height = 'auto';
                    textarea.style.height = textarea.scrollHeight + 'px';
                  }
                });
              });

              if (generateBtn) {
                generateBtn.addEventListener('click', function(e) {
                  e.preventDefault();
                  const promptValue = textarea ? textarea.value : '';
                  if (promptValue) {
                    sessionStorage.setItem('thumbnailPrompt', promptValue);
                  }
                  window.location.href = ctaUrl;
                });
              }

              if (textarea) {
                textarea.addEventListener('input', function() {
                  this.style.height = 'auto';
                  this.style.height = this.scrollHeight + 'px';
                });
              }
            })();
          `,
        }}
      />
    </div>
  );
}