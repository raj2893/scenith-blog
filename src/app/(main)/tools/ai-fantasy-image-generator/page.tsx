// app/tools/ai-fantasy-image-generator/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

export const metadata = {
  title: 'Free AI Fantasy Image Generator | Create Epic Mythical Art (Dragons, Elves, Magic)',
  description: 'Generate breathtaking fantasy art with AI: dragons, elves, castles, magic realms & mythical creatures. The best free fantasy image generator for D&D, authors, game devs & worldbuilders.',
  keywords: 'fantasy ai art generator, fantasy image generator, dnd art generator, mythical creature generator, fantasy world builder, ai fantasy art',
  openGraph: {
    title: 'Free AI Fantasy Image Generator | Epic Mythical Art in Seconds',
    description: 'Create stunning fantasy artwork: dragons, wizards, landscapes, and mythical creatures. Used by 10,000+ worldbuilders, D&D players, and fantasy authors.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-fantasy-image-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Fantasy Image Generator',
    description: 'Generate epic fantasy art with AI — dragons, elves, magic realms, and more.',
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-fantasy-image-generator',
  },
};

// Helper for dynamic UTM source
const getCtaUrl = () => {
  const base = 'https://scenith.in/create-ai-content?tab=image&utm_source=ai-fantasy-image-generator&utm_medium=cta&utm_campaign=seo';
  return base;
};

export default function AIFantasyImageGeneratorPage() {
  const ctaUrl = getCtaUrl();

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI Fantasy Image Generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI fantasy image generator is a tool that uses artificial intelligence (specifically diffusion models or GANs) to create original artwork based on text prompts describing fantasy themes. You type "a majestic dragon perched on a crumbling castle tower under a blood moon", and the AI generates a unique image matching that description in seconds.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use AI-generated fantasy images for my book cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Scenith grants full commercial rights to all images you generate, including book covers, album art, game assets, merchandise, and YouTube thumbnails. No attribution required, no watermarks, no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI model is best for fantasy art?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For high-fidelity fantasy art, GPT Image 2 and Imagen 4 produce stunning detail with accurate anatomy and lighting. For surreal or abstract fantasy, FLUX 1.1 Pro and Stability Core give excellent results. For cinematic dark fantasy, Grok Aurora excels at moody atmospheric pieces.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the fantasy image generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — you get 50 free credits on sign-up, no credit card required. Each 1024x1024 image costs 14–15 credits. Paid plans start at ₹50/month ($1) and include access to all premium models like GPT Image 2, Imagen 4, and Nano Banana.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I generate D&D character art with this tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! The tool excels at RPG character art — from half-elf rangers and dwarven blacksmiths to tiefling warlocks and goliath barbarians. Use specific prompt details like class, race, equipment, and pose for best results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What resolutions and aspect ratios are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support square (1024x1024), portrait (9:16, 768x1344), and landscape (16:9, 1344x768). Premium users can generate 2K and 4K images using the Nano Banana model — perfect for large prints and high-res game assets.',
        },
      },
    ],
  };

  // HowTo Schema for step-by-step
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate Fantasy Images with AI',
    description: 'A step-by-step guide to creating epic fantasy artwork using artificial intelligence',
    totalTime: 'PT1M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Fantasy Prompt',
        text: 'Describe the fantasy scene you want — be specific about characters, setting, lighting, mood, and art style (e.g., "oil painting of an elven queen in a glowing forest").',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Select Art Style & Model',
        text: 'Choose from 8 presets: Realistic, Artistic, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, or Vintage. Pick a model like GPT Image 2, Imagen 4, or FLUX 1.1 Pro.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Set Resolution and Generate',
        text: 'Choose square (1:1), portrait (9:16), or landscape (16:9) and click Generate. Your image will be ready in 10–30 seconds.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Download & Use',
        text: 'Download as high-quality PNG with full commercial rights — use for book covers, game assets, YouTube thumbnails, or D&D campaigns.',
        position: 4,
      },
    ],
  };

  return (
    <div className="ff-page">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="ff-breadcrumb">
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
            <a href="/tools/ai-image-generation" itemProp="item"><span itemProp="name">AI Image Generator</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Fantasy Image Generator</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* JSON-LD Structured Data */}
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
            name: 'Scenith AI Fantasy Image Generator',
            description: 'Generate professional fantasy artwork using AI — dragons, elves, mythical creatures, magical landscapes, and character portraits.',
            url: 'https://scenith.in/tools/ai-fantasy-image-generator',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '2450',
              bestRating: '5',
            },
          }),
        }}
      />

      {/* ======== HERO SECTION ======== */}
      <section className="ff-hero">
        <div className="ff-container">
          <div className="ff-hero-badge">
            <span className="ff-badge-icon">🐉</span>
            <span className="ff-badge-text">Fantasy Art Generator</span>
            <span className="ff-badge-new">✨ Free + Commercial Use</span>
          </div>

          <h1 className="ff-hero-title">
            AI Fantasy Image Generator
            <span className="ff-hero-subhead">Create Epic Dragons, Elves & Mythical Worlds</span>
          </h1>

          <p className="ff-hero-desc">
            Transform your imagination into stunning fantasy artwork with our advanced AI.
            From <strong>majestic dragons</strong> and <strong>ethereal elves</strong> to
            <strong> haunted castles</strong> and <strong>magical realms</strong> — generate
            professional-grade fantasy art in seconds. Used by <strong>10,000+ authors,
            game developers, D&D players, and worldbuilders</strong> worldwide. Complete
            commercial rights included.
          </p>

          {/* Interactive Prompt Box */}
          <div className="ff-prompt-box">
            <div className="ff-prompt-header">
              <span className="ff-prompt-icon">🎨</span>
              <span className="ff-prompt-label">Describe your fantasy scene</span>
            </div>
            <div className="ff-prompt-input-group">
              <input
                type="text"
                id="fantasyPromptInput"
                className="ff-prompt-input"
                placeholder="E.g., A majestic silver dragon soaring above a floating crystal city, golden hour lighting, cinematic, ultra-detailed..."
                defaultValue="A powerful wizard casting a lightning spell from an ancient stone tower, storm clouds gathering, dramatic lighting, fantasy art, 8K"
              />
              <Link href={ctaUrl} className="ff-prompt-btn">
                Generate Fantasy Art →
              </Link>
            </div>
            <div className="ff-prompt-suggestions">
              <span>Try:</span>
              <button className="ff-suggestion-chip" data-prompt="Ancient forest elf queen with glowing antlers, ethereal mist, magical runes floating around her, fantasy illustration">
                🧝 Elf Queen
              </button>
              <button className="ff-suggestion-chip" data-prompt="Red dragon sleeping on a mountain of gold coins in a dark cavern, warm torchlight, D&D style">
                🐉 Dragon Hoard
              </button>
              <button className="ff-suggestion-chip" data-prompt="Floating magical castle in the clouds, waterfalls cascading into the void, rainbow light refraction, hyper-detailed">
                🏰 Floating Castle
              </button>
              <button className="ff-suggestion-chip" data-prompt="Dark knight in black armor with a flaming sword, standing in a cursed forest, red moon, horror fantasy">
                ⚔️ Dark Knight
              </button>
            </div>
            <p className="ff-prompt-note">
              ✨ <strong>Pro tip:</strong> Add &quot;cinematic lighting&quot;, &quot;8K&quot;, &quot;oil painting&quot;, or 
              &quot;D&D style&quot; for better results. <Link href={ctaUrl} className="ff-inline-link">Get 50 free credits →</Link>
            </p>
          </div>

          <div className="ff-cta-wrapper">
            <Link href={ctaUrl} className="ff-main-cta">
              <span className="ff-cta-left">
                <span className="ff-cta-emoji">🎨</span>
                <span className="ff-cta-text-block">
                  <strong>Start Creating Fantasy Art – Free</strong>
                  <small>50 free credits • 7 AI models • Commercial use</small>
                </span>
              </span>
              <span className="ff-cta-arrow">→</span>
            </Link>
          </div>

          <div className="ff-trust-row">
            <span className="ff-trust-pill">✅ 50 Free Credits</span>
            <span className="ff-trust-pill">🐉 Fantasy-Optimized Models</span>
            <span className="ff-trust-pill">📖 Book Cover Ready</span>
            <span className="ff-trust-pill">🎮 Game Asset Quality</span>
            <span className="ff-trust-pill">💼 Full Commercial Rights</span>
          </div>
        </div>
      </section>

      {/* ======== DEFINITION & OVERVIEW ======== */}
      <section className="ff-definition-section">
        <div className="ff-container">
          <div className="ff-definition-box">
            <span className="ff-definition-label">📖 What is an AI Fantasy Image Generator?</span>
            <p className="ff-definition-text">
              An <strong>AI fantasy image generator</strong> is a specialized artificial intelligence tool
              that creates original artwork based on text descriptions of fantasy themes. Unlike generic
              image generators, fantasy-optimized models understand genre-specific concepts like
              <strong> dragon anatomy, elven architecture, magical effects, mythical creature
              morphology, and fantasy lighting techniques</strong>. These models are trained on millions
              of fantasy illustrations, paintings, concept art, and digital renders — allowing them to
              produce everything from classic high-fantasy book cover art to dark gritty RPG character
              portraits and whimsical fairy tale scenes.
            </p>
          </div>
        </div>
      </section>

      {/* ======== USE CASES - DEEP SECTION ======== */}
      <section className="ff-usecases-section">
        <div className="ff-container">
          <h2>Who Uses AI Fantasy Image Generation? (Real-World Applications)</h2>
          <p className="ff-section-intro">
            From self-published authors to AAA game studios — here's how professionals are using AI
            fantasy art to save time, reduce costs, and unlock creativity.
          </p>

          <div className="ff-usecase-grid">
            <article className="ff-usecase-card">
              <span className="ff-uc-icon">📚</span>
              <h3>Self-Published Fantasy Authors</h3>
              <p>
                <strong>Problem:</strong> Professional book covers cost $300–$2,000+ per design.
                Stock art rarely matches your specific characters and world.
                <strong>Solution:</strong> Generate bespoke cover art, chapter headers, and
                interior illustrations for every book in your series — consistent character
                designs across all volumes. One author saved $8,000 on a 5-book series by
                generating all covers and promotional art with AI.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;Book cover for epic fantasy novel: a young woman
                with silver hair holding a glowing crystal staff, standing before a massive ice dragon,
                snowstorm, dramatic lighting, cinematic, high fantasy, 8K&quot;
              </div>
            </article>

            <article className="ff-usecase-card">
              <span className="ff-uc-icon">🎲</span>
              <h3>Dungeons & Dragons Players & DMs</h3>
              <p>
                <strong>Problem:</strong> Finding character art that matches your exact D&D character
                is nearly impossible. Commissions take weeks and cost $50–$500+ per piece.
                <strong>Solution:</strong> Generate character portraits, NPCs, monsters, battle maps,
                and location art on demand. Create a unique look for every PC and major NPC in your
                campaign — maintaining party cohesion and immersion.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;D&D character portrait: half-orc paladin in
                shining plate armor, a holy symbol of Tyr on his shield, standing in a ruined temple,
                morning light, realistic fantasy art, D&amp;D style&quot;
              </div>
            </article>

            <article className="ff-usecase-card">
              <span className="ff-uc-icon">🎮</span>
              <h3>Indie Game Developers</h3>
              <p>
                <strong>Problem:</strong> Hiring concept artists for a full game asset library can
                cost $10,000–$100,000+. Production timelines stretch months or years.
                <strong>Solution:</strong> Generate concept art, environment assets, character sprites,
                UI icons, and promotional materials rapidly. One indie studio created 500+ unique
                fantasy creature assets in one week — a task that would have taken 3 months
                traditionally.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;Game asset design: goblin rogue in leather armor,
                holding two daggers, crouched sneaking pose, top-down RPG perspective, fantasy art style,
                transparent background&quot;
              </div>
            </article>

            <article className="ff-usecase-card">
              <span className="ff-uc-icon">🎥</span>
              <h3>YouTube Fantasy Content Creators</h3>
              <p>
                <strong>Problem:</strong> Thumbnails need to be clickable, but stock fantasy art
                is overused and generic. Custom art is expensive per video.
                <strong>Solution:</strong> Generate unique thumbnails for every video — from
                &quot;Top 10 Most Powerful Dragons&quot; to &quot;The Entire History of Elves.&quot;
                Channels report <strong>15–30% higher CTR</strong> after switching to custom
                AI-generated fantasy thumbnails.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;YouTube thumbnail for fantasy lore video:
                epic battle between angels and demons, red vs blue energy clash, dramatic contrast,
                high contrast, eye-catching, clickbait style, 16:9&quot;
              </div>
            </article>

            <article className="ff-usecase-card">
              <span className="ff-uc-icon">🃏</span>
              <h3>TTRPG & Trading Card Designers</h3>
              <p>
                <strong>Problem:</strong> Custom card art for TCGs or TTRPG supplements requires
                hundreds of unique illustrations — prohibitively expensive for small publishers.
                <strong>Solution:</strong> Generate consistent art styles across entire card sets.
                Create monster cards, spell cards, equipment cards, and location cards with unified
                aesthetics. One Kickstarter project saved over $15,000 in art costs using AI for
                their 200+ card deck.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;Trading card art: legendary fire elemental,
                emerging from volcano, glowing orange and red, dynamic action pose, card frame
                composition, collectible card game style, 3:4 aspect ratio&quot;
              </div>
            </article>

            <article className="ff-usecase-card">
              <span className="ff-uc-icon">🌍</span>
              <h3>Worldbuilders & Map Creators</h3>
              <p>
                <strong>Problem:</strong> Illustrating cities, landmarks, cultures, and creatures
                for a fantasy world takes years if done manually.
                <strong>Solution:</strong> Rapidly visualize every aspect of your world —
                from architecture styles and clothing designs to flora, fauna, and landscapes.
                Create visual bibles for your world to keep writing consistent and share with
                your audience.
              </p>
              <div className="ff-uc-example">
                <strong>Example prompt:</strong> &quot;Fantasy city concept art: dwarven mountain
                city built into a cliff face, multiple levels connected by bridges and waterfalls,
        warm glowing windows, sunset, intricate detail, high fantasy&quot;
              </div>
            </article>
          </div>

          <div className="ff-cta-mid">
            <Link href={ctaUrl} className="ff-mid-cta-btn">
              🎨 Generate Your First Fantasy Image Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ======== ART STYLES & TECHNIQUES SECTION ======== */}
      <section className="ff-styles-section">
        <div className="ff-container">
          <h2>Fantasy Art Styles — Master the Prompt Craft</h2>
          <p className="ff-section-intro">
            Different fantasy subgenres require different visual approaches. Here's how to prompt
            for specific fantasy aesthetics.
          </p>

          <div className="ff-styles-grid">
            <div className="ff-style-card">
              <h3>🏰 High Fantasy / Epic Fantasy</h3>
              <p><strong>Characteristics:</strong> Bright, heroic, dramatic. Inspired by Lord of the Rings, Dragonlance, World of Warcraft. Clear light sources, vibrant colors, heroic poses.</p>
              <div className="ff-style-prompt">
                <strong>Prompt formula:</strong> &quot;[subject], epic fantasy art, dramatic lighting, vibrant colors, heroic composition, Michael Whelan style, 8K&quot;
              </div>
            </div>
            <div className="ff-style-card">
              <h3>⚔️ Dark Fantasy / Grimdark</h3>
              <p><strong>Characteristics:</strong> Moody, desaturated, violent. Inspired by Dark Souls, Berserk, Warhammer. Low lighting, blood, decay, monstrous designs.</p>
              <div className="ff-style-prompt">
                <strong>Prompt formula:</strong> &quot;[subject], dark fantasy, grimdark, moody atmosphere, desaturated colors, horror elements, John Blanche style, gritty texture&quot;
              </div>
            </div>
            <div className="ff-style-card">
              <h3>🧝 Mythic / Celtic Fantasy</h3>
              <p><strong>Characteristics:</strong> Organic, mystical, nature-focused. Elves, druids, faeries. Soft lighting, green and gold palettes, intricate knotwork.</p>
              <div className="ff-style-prompt">
                <strong>Prompt formula:</strong> &quot;[subject], celtic fantasy, mystical atmosphere, forest setting, golden hour lighting, art nouveau style, ethereal&quot;
              </div>
            </div>
            <div className="ff-style-card">
              <h3>🏙️ Urban Fantasy / Magical Realism</h3>
              <p><strong>Characteristics:</strong> Modern settings with hidden magic. Wizards in cities, werewolves in alleys. Contrast between mundane and magical.</p>
              <div className="ff-style-prompt">
                <strong>Prompt formula:</strong> &quot;[subject], urban fantasy, modern city background, hidden magic, neon and shadow, cinematic, realistic textures&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== STEP-BY-STEP GUIDE ======== */}
      <section className="ff-steps-section">
        <div className="ff-container">
          <h2>How to Generate Professional Fantasy Art (Step-by-Step)</h2>
          <p className="ff-section-intro">
            Follow this workflow used by professional artists and creators to get stunning results every time.
          </p>

          <div className="ff-steps-list">
            <div className="ff-step">
              <div className="ff-step-number">1</div>
              <div className="ff-step-content">
                <h3>Start With a Clear Subject & Action</h3>
                <p>Begin your prompt with the main subject and what they're doing. <strong>Weak:</strong> &quot;dragon&quot; → <strong>Strong:</strong> &quot;An ancient green dragon coiled around a crumbling stone tower, smoke rising from its nostrils&quot;. Specificity drives quality.</p>
              </div>
            </div>
            <div className="ff-step">
              <div className="ff-step-number">2</div>
              <div className="ff-step-content">
                <h3>Add Environmental Context</h3>
                <p>Where is the scene taking place? A battle in a <strong>volcanic wasteland</strong> feels different than the same battle in a <strong>crystal forest</strong>. Environment sets mood and narrative: &quot;...on a floating sky island with waterfalls cascading into the void...&quot;</p>
              </div>
            </div>
            <div className="ff-step">
              <div className="ff-step-number">3</div>
              <div className="ff-step-content">
                <h3>Specify Lighting & Atmosphere</h3>
                <p>Lighting transforms an image from amateur to professional. Use: <strong>golden hour, dramatic backlighting, magical glow, candlelight, storm clouds, moonlight through fog, firelight</strong>. Each creates completely different emotional impact.</p>
              </div>
            </div>
            <div className="ff-step">
              <div className="ff-step-number">4</div>
              <div className="ff-step-content">
                <h3>Choose Your Art Style Reference</h3>
                <p>Tell the AI which artistic tradition to follow: <strong>oil painting, digital concept art, watercolor illustration, woodcut print, 1980s fantasy art (Frazetta/Hildebrandt), anime, photorealistic, stained glass, tarot card style</strong>. This controls texture and overall aesthetic.</p>
              </div>
            </div>
            <div className="ff-step">
              <div className="ff-step-number">5</div>
              <div className="ff-step-content">
                <h3>Add Quality Modifiers & Generate</h3>
                <p>End with quality boosters: <strong>8K, ultra-detailed, sharp focus, high contrast, award-winning illustration, trending on ArtStation</strong>. Then select your model (GPT Image 2 for realism, FLUX for painting style) and click Generate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== PROMPT EXAMPLES GALLERY ======== */}
      <section className="ff-examples-section">
        <div className="ff-container">
          <h2>10 Fantasy Prompts That Actually Work</h2>
          <p className="ff-section-intro">
            Copy-paste these proven prompts to get amazing results immediately.
          </p>

          <div className="ff-examples-grid">
            <div className="ff-example-card">
              <h3>🐉 1. Ancient Dragon Lair</h3>
              <p className="ff-example-prompt">&quot;Massive red dragon sleeping on a hoard of gold coins and magical treasures in a dark cavern, warm firelight reflecting on scales, smoke curling from nostrils, D&D manual illustration style, 8K&quot;</p>
            </div>
            <div className="ff-example-card">
              <h3>🧙 2. Archmage's Study</h3>
              <p className="ff-example-prompt">&quot;Cluttered wizard's tower study at night, glowing magical orbs floating between bookshelves, star charts on desk, candlelight, potion bottles, cozy dark academia aesthetic, oil painting texture&quot;</p>
            </div>
            <div className="ff-example-card">
              <h3>🏰 3. Floating Castle</h3>
              <p className="ff-example-prompt">&quot;A magnificent castle floating on an island in the clouds, waterfalls falling into the sky, rainbows and golden light, fantasy art, hyper-detailed, Studio Ghibli-inspired atmosphere&quot;</p>
            </div>
            <div className="ff-example-card">
              <h3>🧝♀️ 4. Elven Forest Queen</h3>
              <p className="ff-example-prompt">&quot;Elven queen with silver hair and glowing antlers standing in an ancient forest, bioluminescent mushrooms at her feet, magical dust floating, ethereal lighting, art nouveau style, Alphonse Mucha inspired&quot;</p>
            </div>
            <div className="ff-example-card">
              <h3>⚔️ 5. Knight & Fallen Angel</h3>
              <p className="ff-example-prompt">&quot;Dark fantasy: a knight in tarnished armor kneeling before a fallen angel with black wings, rain, gothic cathedral ruins, moody desaturated colors, cinematic composition, Dark Souls concept art&quot;</p>
            </div>
            <div className="ff-example-card">
              <h3>🌊 6. Sea Serpent Attack</h3>
              <p className="ff-example-prompt">&quot;Giant sea serpent emerging from stormy ocean to attack a wooden galleon, lightning strike illuminating the scene, crew reacting, dramatic waves, high contrast, classic maritime fantasy illustration&quot;</p>
            </div>
          </div>

          <div className="ff-examples-note">
            <p>💡 <strong>Pro tip:</strong> Adjust these prompts by changing colors, times of day, or art styles to create variations. &quot;Red dragon&quot; → &quot;ice dragon&quot; changes everything while keeping the composition strong.</p>
          </div>
        </div>
      </section>

      {/* ======== BEST PRACTICES ======== */}
      <section className="ff-bestpractices-section">
        <div className="ff-container">
          <h2>Best Practices for Fantasy AI Art (From Power Users)</h2>

          <div className="ff-practices-grid">
            <div className="ff-practice-card green">
              <span className="ff-practice-icon">✅</span>
              <h3>DO: Use Negative Prompts Wisely</h3>
              <p>If your dragon keeps coming out with six legs, add &quot;six legs, extra limbs, malformed, bad anatomy&quot; to negative prompt. This steers the model away from common failure modes without cluttering your main prompt.</p>
              <div className="ff-practice-example">Example negative: &quot;blurry, low quality, distorted, extra fingers, bad anatomy, watermark, text&quot;</div>
            </div>
            <div className="ff-practice-card red">
              <span className="ff-practice-icon">❌</span>
              <h3>DON'T: Overstuff Your Prompt</h3>
              <p>Prompts longer than 200-300 words often confuse the model. Focus on 3-5 key elements, then use quality modifiers. Let the model fill in reasonable details based on your art style keywords.</p>
              <div className="ff-practice-example">Instead of listing every armor piece: &quot;ornate silver armor&quot; works better than detailed inventory.</div>
            </div>
            <div className="ff-practice-card green">
              <span className="ff-practice-icon">✅</span>
              <h3>DO: Maintain Character Consistency</h3>
              <p>For book or game characters, save the seed value from your first generation. Use the same seed + similar prompts to keep facial features, armor design, and color palette consistent across multiple images.</p>
              <div className="ff-practice-example">Save prompts in a spreadsheet with seed numbers for each character.</div>
            </div>
            <div className="ff-practice-card red">
              <span className="ff-practice-icon">❌</span>
              <h3>DON'T: Expect Perfect Anatomy Every Time</h3>
              <p>Even the best models struggle with hands, feet, and complex poses. Generate 4 variations and pick the best, or use inpainting to fix small issues. For critical commercial work, consider AI + Photoshop touchup workflow.</p>
              <div className="ff-practice-example">Generate at least 4 images before choosing a final one.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== COMPARISON TABLE ======== */}
      <section className="ff-compare-section">
        <div className="ff-container">
          <h2>Fantasy AI Generator: Scenith vs Alternatives</h2>
          <p className="ff-section-intro">
            Not all AI art tools handle fantasy equally. Here's why fantasy creators choose Scenith.
          </p>

          <div className="ff-compare-scroll">
            <table className="ff-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scenith Fantasy AI ✅</th>
                  <th>Midjourney</th>
                  <th>Leonardo.ai</th>
                  <th>Free Generic Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Fantasy-optimized models</strong></td><td>✓ Multiple (GPT, Imagen, FLUX)</td><td>✓ Generic</td><td>✓ Some</td><td>❌ None</td></tr>
                <tr><td><strong>Free tier</strong></td><td>✓ 50 credits, no card</td><td>✗ Paid only ($10+)</td><td>✓ 150 tokens/day</td><td>✓ Very limited</td></tr>
                <tr><td><strong>Commercial rights</strong></td><td>✓ Full, no attribution</td><td>✓ (paid plan)</td><td>✓ (paid plan)</td><td>❌ Usually none</td></tr>
                <tr><td><strong>Resolution options</strong></td><td>✓ Square, 16:9, 9:16, 4K on premium</td><td>✓ Up to 8K</td><td>✓ Various</td><td>❌ Fixed small</td></tr>
                <tr><td><strong>Art style presets</strong></td><td>✓ 8 presets + custom</td><td>✗ Parameter based</td><td>✓ Fine-tuned models</td><td>❌ None</td></tr>
                <tr><td><strong>Generation speed</strong></td><td>✓ 10-30 sec</td><td>✓ 30-60 sec</td><td>✓ 15-45 sec</td><td>✗ 60+ sec, queues</td></tr>
                <tr><td><strong>Starting price</strong></td><td><strong>$1/mo</strong></td><td>$10/mo</td><td>$10/mo</td><td>Free but ads/watermarks</td></tr>
                <tr><td><strong>Image-to-image (img2img)</strong></td><td>✓ Yes</td><td>✓ Yes (paid)</td><td>✓ Yes</td><td>❌ Rare</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======== ADVANCED TIPS ======== */}
      <section className="ff-advanced-section">
        <div className="ff-container">
          <h2>Advanced Techniques: Beyond Basic Prompts</h2>
          <p className="ff-section-intro">
            Level up your fantasy art with these techniques used by professional AI artists.
          </p>

          <div className="ff-advanced-grid">
            <div className="ff-advanced-card">
              <h3>🎨 Style Blending</h3>
              <p>Combine two art styles for unique aesthetics. <strong>Example:</strong> &quot;dragon, oil painting style with anime character proportions, watercolor texture&quot; — merges Western painting texture with Eastern character design.</p>
            </div>
            <div className="ff-advanced-card">
              <h3>📐 Composition Keywords</h3>
              <p>Use photography terms to control framing: &quot;close-up, extreme wide shot, bird's eye view, worm's eye view, Dutch angle, rule of thirds, silhouette, macro shot of eye&quot; — each fundamentally changes image structure.</p>
            </div>
            <div className="ff-advanced-card">
              <h3>🎨 Color Palette Targeting</h3>
              <p>Specify exact colors for controlled mood: &quot;monochromatic blue, complementary orange and teal, pastel goth palette, desaturated earth tones with red accent&quot; — perfect for maintaining brand or series color identity.</p>
            </div>
            <div className="ff-advanced-card">
              <h3>⚡ Motion & Effects</h3>
              <p>Add dynamic energy with: &quot;motion blur, particle effects, embers floating, snow falling, lightning crackling, dust in sunbeams, lens flare, water droplets suspended in mid-air&quot; — brings static images to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FAQ SECTION ======== */}
      <section className="ff-faq-section">
        <div className="ff-container">
          <h2>Frequently Asked Questions — AI Fantasy Image Generator</h2>

          <div className="ff-faq-grid">
            <details className="ff-faq-item">
              <summary>What makes a fantasy image generator different from regular AI art tools?</summary>
              <p>Fantasy-optimized models are specifically trained on fantasy artwork — including dragons, elves, mythical creatures, magical effects, and fantasy architecture. They understand genre-specific concepts like &quot;elf ears&quot;, &quot;dragon scale patterns&quot;, &quot;magic glow&quot;, and &quot;fantasy armor&quot; better than general models, resulting in more accurate and genre-appropriate images without extra prompting.</p>
            </details>

            <details className="ff-faq-item">
              <summary>Can I generate images for my self-published fantasy novel?</summary>
              <p>Absolutely! Scenith grants full commercial rights for all generated images. You can use them for book covers, interior illustrations, promotional materials, audiobook art, and merchandise. No attribution required, no royalties, no hidden fees. Many indie authors have successfully launched books using AI-generated cover art — just ensure you add final typography/layout in design software.</p>
            </details>

            <details className="ff-faq-item">
              <summary>Which AI model is best for dark fantasy / grimdark art?</summary>
              <p>For dark fantasy, use <strong>GPT Image 2</strong> with quality set to &quot;standard&quot; or &quot;premium&quot;. Add keywords like &quot;grimdark, desaturated colors, moody atmosphere, heavy shadows, horror elements&quot;. Imagen 4 also excels at dark fantasy but tends toward cleaner compositions. FLUX 1.1 Pro creates excellent painterly dark fantasy with visible brush textures.</p>
            </details>

            <details className="ff-faq-item">
              <summary>How do I get consistent characters across multiple images?</summary>
              <p>Save your <strong>seed number</strong> from the first successful generation (available in job details). Use the same seed + similar prompt structure for subsequent images. For best results, also keep the same model, resolution, and style preset. For critical projects, create a &quot;character reference sheet&quot; first by generating multiple poses with consistent prompts.</p>
            </details>

            <details className="ff-faq-item">
              <summary>What resolution is best for book covers?</summary>
              <p>For print book covers (6x9 inch), generate at <strong>portrait (9:16) aspect ratio</strong> with the highest resolution your model supports (2K or 4K recommended). For eBook covers, square (1:1) at 1024x1024 is sufficient. Always add &quot;book cover composition, space for title text&quot; to your prompt to leave appropriate negative space in the upper or lower third.</p>
            </details>

            <details className="ff-faq-item">
              <summary>Can I generate D&D character tokens and battle maps?</summary>
              <p>Yes — for character tokens, use &quot;top-down perspective, transparent background, isolated character on white&quot;. For battle maps, prompt &quot;top-down dungeon map, grid overlay, fantasy battle map style, stone floor, pillars, treasure chest&quot;. You can also generate environment art for virtual tabletop backgrounds.</p>
            </details>

            <details className="ff-faq-item">
              <summary>How many images can I generate with the free plan?</summary>
              <p>The free plan gives you <strong>50 credits</strong>. Each square (1:1) fantasy image costs 14–15 credits, so you can generate approximately 3-4 images for free. Premium plans start at ₹50/month ($1) and include 300 credits plus access to all premium models like GPT Image 2 and Nano Banana 4K.</p>
            </details>

            <details className="ff-faq-item">
              <summary>What are the best keywords for fantasy art quality?</summary>
              <p>Add these proven quality boosters: &quot;8K, ultra-detailed, sharp focus, high resolution, professional illustration, trending on ArtStation, award-winning fantasy art, cinematic lighting, volumetric fog, ray tracing, global illumination, subsurface scattering&quot;. These signal the AI to apply higher rendering quality.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ======== FINAL CTA ======== */}
      <section className="ff-final-cta-section">
        <div className="ff-container">
          <div className="ff-final-cta-inner">
            <span className="ff-final-icon">🎨</span>
            <h2>Ready to Bring Your Fantasy World to Life?</h2>
            <p className="ff-final-desc">
              Join 10,000+ authors, game developers, and D&D players using Scenith to generate
              stunning fantasy artwork. Start completely free — no credit card required.
            </p>

            <Link href={ctaUrl} className="ff-final-cta-btn">
              <span className="ff-final-cta-content">
                <strong>✨ Generate Fantasy Art Now – 50 Free Credits</strong>
                <small>Dragons · Elves · Castles · Mythical Creatures</small>
              </span>
              <span className="ff-final-arrow">→</span>
            </Link>

            <div className="ff-final-trust-pills">
              <span>✅ 50 Free Credits</span>
              <span>🐉 7+ AI Models</span>
              <span>📥 PNG Download</span>
              <span>💼 Full Commercial Rights</span>
              <span>🚫 No Watermarks</span>
            </div>

            <p className="ff-final-footnote">
              <strong>Also explore:</strong>{' '}
              <Link href="/tools/ai-image-generation" className="ff-inline-link">
                AI Image Generator (All Styles)
              </Link>{' '}
              •{' '}
              <Link href="/tools/ai-character-image-generator" className="ff-inline-link">
                AI Character Image Generator
              </Link>{' '}
              •{' '}
              <Link href="/tools/ai-voice-generation" className="ff-inline-link">
                AI Voice for Fantasy Narration
              </Link>{' '}
              •{' '}
              <Link href="/create-ai-content" className="ff-inline-link">
                Create AI Content Hub
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Simple JS for suggestion chips - inline script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.querySelectorAll('.ff-suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
              const input = document.getElementById('fantasyPromptInput');
              if (input) input.value = chip.dataset.prompt;
            });
          });
        `
      }} />
    </div>
  );
}