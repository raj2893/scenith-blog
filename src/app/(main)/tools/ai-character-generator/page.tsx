// app/tools/ai-character-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Character Generator: Create Consistent Characters for Stories & Games',
  description: 'Generate unique, consistent AI characters for animations, comics, games, and storytelling. Perfect for character design, concept art, and world-building.',
  keywords: 'AI character generator, character design AI, consistent character AI, D&D character art, game character generator',
};

export default function AICharacterGeneratorPage() {
  const slug = 'ai-character-generator';
  const ctaUrl = `/create-ai-content?tab=image&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="character-page">
      {/* Breadcrumb Navigation */}
      <nav className="cg-breadcrumb" aria-label="Breadcrumb">
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
            <span itemProp="name">AI Character Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* FAQ + HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                name: 'AI Character Generator',
                description: 'Generate unique, consistent character designs for games, comics, animations, and storytelling using advanced AI.',
                url: `https://scenith.in/tools/${slug}`,
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                featureList: [
                  'Character consistency across poses',
                  'Multiple art styles (anime, realistic, pixel art)',
                  'Expression variations',
                  'Outfit and accessory customization',
                  'Background removal',
                  'High-resolution exports',
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Create Consistent AI Characters',
                description: 'Step-by-step guide to generating characters you can reuse across scenes',
                step: [
                  { '@type': 'HowToStep', name: 'Define character traits', position: 1 },
                  { '@type': 'HowToStep', name: 'Create a character sheet prompt', position: 2 },
                  { '@type': 'HowToStep', name: 'Generate base character', position: 3 },
                  { '@type': 'HowToStep', name: 'Create variations (poses/expressions)', position: 4 },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Can AI generate the same character in different poses?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Advanced AI character generators can maintain visual consistency across different poses, expressions, and outfits when you use a consistent seed and detailed character description. Techniques like "character sheets" and reference image prompts help achieve reliable consistency.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What art styles can AI character generators create?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Modern AI can generate characters in dozens of styles: anime/manga, Disney/Pixar, realistic/3D rendered, pixel art, retro 8-bit, watercolor painting, comic book, cyberpunk, fantasy, chibi, and many more. Specify the style in your prompt.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="cg-hero">
        <div className="cg-container">
          <div className="cg-hero-badge">
            <span>🎭</span>
            <span>Used by 100,000+ creators & game devs</span>
          </div>
          <h1 className="cg-hero-title">
            AI Character Generator
            <span className="cg-hero-subtitle">Create Consistent Characters for Stories & Games</span>
          </h1>
          <p className="cg-hero-desc">
            Generate <strong>unique, consistent characters</strong> for animations, comics, video games, and storytelling.
            Our AI maintains visual identity across poses, expressions, and scenes — perfect for character design, 
            concept art, and world-building. No art skills required.
          </p>

          {/* CTA Prompt Box */}
          <div className="cg-prompt-box">
            <div className="cg-prompt-header">
              <span>🎨</span>
              <h3>Describe your character</h3>
              <span className="cg-prompt-badge">Character design</span>
            </div>
            <textarea
              className="cg-prompt-textarea"
              placeholder="Example: 'A young elven archer with long silver hair, green eyes, wearing forest-green leather armor, holding a bow, standing in a magical forest, anime art style, full body shot, detailed character design.'"
              rows={3}
              id="characterPromptInput"
            />
            <div className="cg-prompt-footer">
              <div className="cg-prompt-suggestions">
                <button type="button" className="cg-suggestion-chip" data-prompt="A stoic dwarven warrior with braided red beard, wearing heavy steel armor, carrying a massive battle axe, standing in a mountain cave, fantasy digital painting style, dramatic lighting, full body">⚔️ Dwarven Warrior</button>
                <button type="button" className="cg-suggestion-chip" data-prompt="A mysterious rogue with dark hood, glowing purple eyes, twin daggers, perched on a rooftop at night, cyberpunk anime style, neon city background, cinematic pose">🗡️ Cyberpunk Rogue</button>
                <button type="button" className="cg-suggestion-chip" data-prompt="A gentle forest mage with long brown hair, antlers, wearing flowy earth-tone robes, glowing green magic in hands, surrounded by fireflies, Ghibli-inspired art style, warm colors">🧙‍♀️ Forest Mage</button>
              </div>
              <Link href={ctaUrl} className="cg-generate-btn" id="cgGenerateBtn">
                <span>✨ Generate Character →</span>
              </Link>
            </div>
          </div>

          <div className="cg-trust-badges">
            <span>✅ Consistent across poses</span>
            <span>🎨 20+ art styles</span>
            <span>📸 Expression variants</span>
            <span>⚡ High-res exports</span>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="cg-definition">
        <div className="cg-container">
          <div className="cg-definition-box">
            <span className="cg-definition-label">📖 What Is an AI Character Generator?</span>
            <p className="cg-definition-text">
              An <strong>AI character generator</strong> is a specialized tool that creates unique character 
              designs using artificial intelligence — from fantasy heroes to sci-fi aliens to modern everyday people. 
              Unlike generic image generators, advanced character AI understands <strong>character design principles</strong>: 
              visual consistency across multiple images, pose variation, expression range, outfit changes, and 
              style adherence. The best character generators can produce full character sheets with multiple 
              views (front, side, back) and expressions, saving artists and creators hundreds of hours of work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Character Design Matters */}
      <section className="cg-why-section">
        <div className="cg-container">
          <h2>Why Great Character Design Makes or Breaks Your Story</h2>
          <p className="cg-section-intro">
            Memorable characters are the heart of every successful game, comic, and animation.
            Here's what professional character designers know.
          </p>

          <div className="cg-why-grid">
            <div className="cg-why-card">
              <div className="cg-why-icon">💭</div>
              <h3>Visual Recognition = Emotional Connection</h3>
              <p>
                Audiences form emotional bonds with characters they can instantly recognize. 
                Think of Pikachu, Mario, or Goku — their <strong>silhouettes alone are unforgettable</strong>. 
                Good character design uses distinct shapes, color palettes, and signature features 
                (a unique hat, scar, weapon) that make characters identifiable even from across the room.
              </p>
            </div>
            <div className="cg-why-card">
              <div className="cg-why-icon">🔄</div>
              <h3>Consistency = Professionalism</h3>
              <p>
                Nothing breaks immersion faster than a character who looks different in every scene. 
                Professional productions maintain strict <strong>character sheets</strong> showing the same 
                character in different poses, from different angles, with different expressions. 
                AI character generators excel at maintaining this consistency across dozens of generations.
              </p>
            </div>
            <div className="cg-why-card">
              <div className="cg-why-icon">⚡</div>
              <h3>Character Silhouettes Communicate Personality</h3>
              <p>
                Heroes stand tall with broad shoulders. Villains hunch with sharp angles. 
                Comic relief characters have rounded, soft shapes. A character's silhouette 
                should <strong>immediately communicate their role and personality</strong> — 
                even before you see their face. AI character designers understand these principles.
              </p>
            </div>
            <div className="cg-why-card">
              <div className="cg-why-icon">🎨</div>
              <h3>Color Theory in Character Design</h3>
              <p>
                Color choices telegraph alignment: heroes in blue/red/gold, villains in purple/black/green, 
                nature characters in earthy tones. Limit your character's palette to <strong>3-5 main colors</strong> 
                for memorability. AI character generators can enforce these color restrictions across all generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Archetypes Section */}
      <section className="cg-archetypes-section">
        <div className="cg-container">
          <h2>12 Classic Character Archetypes (With AI Prompts)</h2>
          <p className="cg-section-intro">
            Start with proven templates. Each archetype has specific visual cues that audiences instantly recognize.
          </p>

          <div className="cg-archetypes-grid">
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">🛡️</span>
                <h3>The Hero</h3>
              </div>
              <p className="cg-archetype-desc">Confident posture, strong jawline, heroic stance, primary colors (red/blue/gold).</p>
              <div className="cg-archetype-prompt">"A brave knight in shining armor, standing tall, sword raised, dramatic lighting, fantasy art style"</div>
            </div>
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">🎭</span>
                <h3>The Mentor</h3>
              </div>
              <p className="cg-archetype-desc">Older, wise eyes, flowing robes, staff or book, warm colors, calm expression.</p>
              <div className="cg-archetype-prompt">"A wise old wizard with long white beard, glowing staff, starry robes, kind eyes, fantasy art, cinematic lighting"</div>
            </div>
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">😈</span>
                <h3>The Villain</h3>
              </div>
              <p className="cg-archetype-desc">Sharp angles, dark colors, asymmetrical features, dramatic shadows, smirk.</p>
              <div className="cg-archetype-prompt">"A dark lord in black armor, jagged crown, crimson cape, sitting on a throne of bones, epic fantasy, dramatic shadows"</div>
            </div>
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">🤡</span>
                <h3>The Trickster</h3>
              </div>
              <p className="cg-archetype-desc">Playful posture, mischievous grin, bright/chaotic colors, asymmetrical design.</p>
              <div className="cg-archetype-prompt">"A mischievous jester with colorful patchwork clothes, sly grin, juggling flaming torches, medieval fair background, vibrant art"</div>
            </div>
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">💔</span>
                <h3>The Lover</h3>
              </div>
              <p className="cg-archetype-desc">Soft features, warm tones, romantic pose, gentle expression, flowing lines.</p>
              <div className="cg-archetype-prompt">"A romantic princess in a flowing pink gown, holding a rose, soft sunset lighting, dreamy anime art style, castle garden background"</div>
            </div>
            <div className="cg-archetype-card">
              <div className="cg-archetype-header">
                <span className="cg-archetype-emoji">🌿</span>
                <h3>The Caregiver</h3>
              </div>
              <p className="cg-archetype-desc">Warm, nurturing posture, soft features, earthy colors, gentle expression.</p>
              <div className="cg-archetype-prompt">"A kind healer with gentle smile, wearing simple earth-tone robes, holding a glowing healing herb, warm lighting, cottagecore art style"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="cg-steps-section">
        <div className="cg-container">
          <h2>How to Create Consistent AI Characters (Pro Workflow)</h2>
          <p className="cg-section-intro">
            Follow this 4-step system used by professional concept artists and game developers.
          </p>

          <div className="cg-steps">
            <div className="cg-step">
              <div className="cg-step-number">1</div>
              <div className="cg-step-content">
                <h3>Write a Detailed Character Bible</h3>
                <p>
                  Before generating anything, write a <strong>character description</strong> with specific details:
                </p>
                <ul>
                  <li><strong>Physical:</strong> Age, height, build, face shape, eye/hair/skin color, scars, tattoos</li>
                  <li><strong>Clothing:</strong> Main outfit, colors, materials, accessories, weapons</li>
                  <li><strong>Vibe:</strong> Personality (brave, shy, arrogant), expression tendencies, posture</li>
                  <li><strong>Setting:</strong> Fantasy? Sci-fi? Modern? Historical?</li>
                </ul>
                <div className="cg-step-example">
                  <strong>📝 Example character bible:</strong> "Kaelen, 28-year-old elven ranger. Tall and lean with angular face, long silver-white hair tied back, piercing green eyes. Wears worn forest-green leather armor with a hooded cloak. Carries an ancient elven bow carved with runes. Quiet, observant personality. Fantasy medieval setting."
                </div>
              </div>
            </div>

            <div className="cg-step">
              <div className="cg-step-number">2</div>
              <div className="cg-step-content">
                <h3>Generate Your Base Character Design</h3>
                <p>
                  Use the character bible to create your prompt. For best results:
                </p>
                <ul>
                  <li>Request a <strong>"full body shot"</strong> to capture proportions</li>
                  <li>Add <strong>"character design sheet"</strong> for professional layouts</li>
                  <li>Specify <strong>"neutral expression, standing pose"</strong> for your base version</li>
                  <li>Include art style: <strong>"anime style" / "realistic" / "pixel art" / "Disney style"</strong></li>
                </ul>
                <div className="cg-step-example">
                  <strong>🎨 Base prompt:</strong> "[Character bible description], full body character design sheet, neutral expression, standing pose, fantasy art style, high quality, 4K"
                </div>
              </div>
            </div>

            <div className="cg-step">
              <div className="cg-step-number">3</div>
              <div className="cg-step-content">
                <h3>Generate Expression & Pose Variations</h3>
                <p>
                  Once you have a base design you love, create variations by modifying the prompt:
                </p>
                <ul>
                  <li><strong>Expressions:</strong> "angry expression" / "laughing" / "surprised" / "sad"</li>
                  <li><strong>Poses:</strong> "action pose" / "casting a spell" / "drawing a sword" / "crouching"</li>
                  <li><strong>Camera angles:</strong> "close-up portrait" / "low angle" / "from behind"</li>
                </ul>
                <div className="cg-step-example">
                  <strong>🎬 Variation prompt:</strong> "[Same character description], casting a spell with glowing green magic, dynamic action pose, dramatic lighting"
                </div>
              </div>
            </div>

            <div className="cg-step">
              <div className="cg-step-number">4</div>
              <div className="cg-step-content">
                <h3>Create a Character Sheet (Multiple Views)</h3>
                <p>
                  For professional use (animation, games, comics), generate a <strong>character turnaround</strong>:
                </p>
                <ul>
                  <li><strong>"Front view, side view, back view"</strong> — shows proportions from all angles</li>
                  <li><strong>"Character turnaround sheet"</strong> — professional term for this format</li>
                  <li>Include clothing details and accessory close-ups</li>
                  <li>Add <strong>"plain background, no shadow"</strong> for clean reference images</li>
                </ul>
                <div className="cg-step-example">
                  <strong>📐 Turnaround prompt:</strong> "[Character description], character turnaround sheet showing front, side, and back views, plain white background, consistent character design, reference sheet style"
                </div>
              </div>
            </div>
          </div>

          <div className="cg-steps-cta">
            <Link href={ctaUrl} className="cg-steps-cta-btn">
              🎨 Generate Your Character Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="cg-usecases-section">
        <div className="cg-container">
          <h2>Who Uses AI Character Generators?</h2>
          <p className="cg-section-intro">
            From indie game devs to comic artists — here's how creators use AI for character design.
          </p>

          <div className="cg-usecase-grid">
            <div className="cg-usecase-card">
              <span className="cg-uc-icon">🎮</span>
              <h3>Indie Game Developers</h3>
              <p>
                Generate character sprites, concept art, and portrait assets in days instead of months. 
                AI character generators can produce consistent NPCs, player avatars, enemies, and bosses 
                — all matching the same art style. Perfect for RPGs, visual novels, and platformers.
              </p>
              <div className="cg-uc-metrics">
                ⏱️ Time saved: 50-100 hours per game
              </div>
            </div>

            <div className="cg-usecase-card">
              <span className="cg-uc-icon">📚</span>
              <h3>Comic & Manga Artists</h3>
              <p>
                Create consistent character designs for ongoing series. Generate reference sheets, 
                different expressions, and action poses. Use AI to ideate quickly, then refine manually. 
                Many webtoon artists now use AI for background characters and rapid prototyping.
              </p>
              <div className="cg-uc-metrics">
                📊 Pages per week: 2x-3x faster ideation
              </div>
            </div>

            <div className="cg-usecase-card">
              <span className="cg-uc-icon">🎬</span>
              <h3>Animators & Storyboard Artists</h3>
              <p>
                Generate character model sheets, turnarounds, and expression libraries. 
                AI helps maintain consistency across hundreds of frames. Independent animators use 
                character generators to produce pitch decks and proof-of-concept trailers.
              </p>
              <div className="cg-uc-metrics">
                🎨 Production time: Reduced by 40-60%
              </div>
            </div>

            <div className="cg-usecase-card">
              <span className="cg-uc-icon">🐉</span>
              <h3>D&D & TTRPG Players</h3>
              <p>
                Bring your tabletop characters to life! Generate custom art for player characters, 
                NPCs, villains, and monsters. Perfect for character portraits, token art, and campaign 
                visuals. D&D players save hours searching for "close enough" art online.
              </p>
              <div className="cg-uc-metrics">
                🎲 Used by 500,000+ TTRPG players
              </div>
            </div>

            <div className="cg-usecase-card">
              <span className="cg-uc-icon">✍️</span>
              <h3>Writers & World-Builders</h3>
              <p>
                Visualize characters from your novel or screenplay. Generate reference images 
                to maintain physical consistency while writing. Many authors use AI character art 
                for Patreon rewards, book covers, and promotional materials.
              </p>
              <div className="cg-uc-metrics">
                📖 Used by 10,000+ published authors
              </div>
            </div>

            <div className="cg-usecase-card">
              <span className="cg-uc-icon">🎨</span>
              <h3>Concept Artists (Professional)</h3>
              <p>
                Use AI for rapid iteration. Generate 50+ character variations in an hour, then 
                refine the best ones manually. Professional studios are adopting AI character 
                generators for early-stage ideation and background character generation.
              </p>
              <div className="cg-uc-metrics">
                🚀 Ideation speed: 10x faster
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="cg-practices-section">
        <div className="cg-container">
          <h2>10 Best Practices for AI Character Generation</h2>
          <p className="cg-section-intro">
            Pro tips from character designers who use AI daily.
          </p>

          <div className="cg-practices-grid">
            <div className="cg-practice-item">
              <h3>🎭 Start with a strong silhouette</h3>
              <p>Test your character's recognizability by squinting at the image. The silhouette alone should suggest personality and role.</p>
            </div>
            <div className="cg-practice-item">
              <h3>🎨 Limit your color palette to 3-5 colors</h3>
              <p>Memorable characters have restricted palettes (Mario: red + blue, Sonic: blue + red + white). Specify colors in your prompt.</p>
            </div>
            <div className="cg-practice-item">
              <h3>📐 Use "character sheet" prompts for consistency</h3>
              <p>Phrases like "character design sheet" or "reference sheet" produce more consistent, professional layouts.</p>
            </div>
            <div className="cg-practice-item">
              <h3>🖼️ Generate a "neutral pose" first</h3>
              <p>Establish the base design before creating action shots. Neutral standing poses are easier to iterate from.</p>
            </div>
            <div className="cg-practice-item">
              <h3>📝 Keep a prompt log for each character</h3>
              <p>Save every prompt you use. When you need to generate more variations, you can repeat the successful patterns.</p>
            </div>
            <div className="cg-practice-item">
              <h3>🎨 Use artist/style references</h3>
              <p>Add "in the style of Studio Ghibli" or "Akira Toriyama art style" to lock in consistent aesthetics.</p>
            </div>
            <div className="cg-practice-item">
              <h3>🔄 Generate multiple versions and curate</h3>
              <p>AI often produces 1 great image for every 10 generations. Batch generate and pick the best.</p>
            </div>
            <div className="cg-practice-item">
              <h3>📸 Create expression libraries</h3>
              <p>Generate the same character with 8-10 expressions (happy, sad, angry, surprised, scared, etc.) for your reference sheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="cg-mistakes-section">
        <div className="cg-container">
          <h2>7 Common Mistakes in AI Character Design (And How to Fix Them)</h2>
          <p className="cg-section-intro">
            Avoid these pitfalls that make AI-generated characters look unprofessional.
          </p>

          <div className="cg-mistakes-list">
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 1</span>
              <p><strong>Inconsistent features across generations</strong> — Fix: Use a detailed character bible and include "same character" in every prompt. Generate a "seed" image and reference it.</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 2</span>
              <p><strong>Overly complex color palettes</strong> — Fix: Limit to 3-5 colors. Explicitly state "color palette: blue, gold, white" in your prompt.</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 3</span>
              <p><strong>Same-face syndrome</strong> — Fix: Add distinctive features to your prompts: "scar on left cheek", "missing tooth", "unique nose shape", "different eye size".</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 4</span>
              <p><strong>Unnatural body proportions</strong> — Fix: Add "realistic proportions" or "anatomically correct" to your prompt. Avoid "exaggerated" unless intentional.</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 5</span>
              <p><strong>Hands and feet errors</strong> — Fix: Add "detailed hands" or "hidden hands" (e.g., "hands behind back", "clasped hands"). Hands are notoriously hard for AI.</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 6</span>
              <p><strong>No sense of scale or environment</strong> — Fix: Add context: "standing next to a door" (shows height), "holding an apple" (shows hand size).</p>
            </div>
            <div className="cg-mistake">
              <span className="cg-mistake-num">❌ 7</span>
              <p><strong>Static, lifeless poses</strong> — Fix: Use dynamic pose descriptions: "mid-stride", "adjusting glove", "looking over shoulder", "leaning on sword".</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="cg-advanced-section">
        <div className="cg-container">
          <h2>Advanced Character Design Techniques (Pro Level)</h2>
          <p className="cg-section-intro">
            Take your AI character generation to the next level.
          </p>

          <div className="cg-advanced-grid">
            <div className="cg-advanced-card">
              <h3>🎨 Create a Full Character Turnaround Sheet</h3>
              <p>
                For animation-ready characters, generate <strong>front, ¾, side, and back views</strong> 
                of the exact same character. Prompt: "[Character description], character turnaround sheet 
                showing front, three-quarter, side, and back views, same character in each panel, 
                professional reference sheet, plain white background, no shadows." This gives animators 
                everything they need to draw the character from any angle.
              </p>
            </div>

            <div className="cg-advanced-card">
              <h3>😲 Expression Range Generation</h3>
              <p>
                Generate 9 expressions on a single grid for your reference sheet:
                <br/><br/>
                "Nine-panel character expression sheet showing: neutral, happy, sad, angry, surprised, 
                scared, disgusted, mischievous, and tired. Same character, same outfit, same lighting, 
                grid layout, white background."
                <br/><br/>
                This is invaluable for comic artists, animators, and game dialogue portraits.
              </p>
            </div>

            <div className="cg-advanced-card">
              <h3>⚙️ Consistent Outfit Variations</h3>
              <p>
                Create alternate costumes for the same character using "same character, different outfit" 
                prompts. Start with the base character image, then prompt: "[Base character description], 
                wearing [new outfit description], same pose, same facial features, consistent character."
                This works best when you specify which features must stay identical (eye color, hair style, scars).
              </p>
            </div>

            <div className="cg-advanced-card">
              <h3>🎭 Age Progression & Alternate Versions</h3>
              <p>
                Generate younger/older versions of your character: "[Character description] as a 12-year-old" 
                or "[Character description], aged 60 with grey hair and wrinkles, same facial structure."
                Perfect for stories with flashbacks, time skips, or multiverse variants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Art Styles Section */}
      <section className="cg-styles-section">
        <div className="cg-container">
          <h2>Popular Art Styles for AI Character Generation</h2>
          <p className="cg-section-intro">
            Choose the perfect aesthetic for your project.
          </p>

          <div className="cg-styles-grid">
            <div className="cg-style-card">
              <span className="cg-style-icon">🇯🇵</span>
              <h3>Anime / Manga</h3>
              <p>Add "anime style" or "Studio Ghibli style" to prompts. Great for visual novels, webtoons, and JRPGs.</p>
            </div>
            <div className="cg-style-card">
              <span className="cg-style-icon">🎨</span>
              <h3>Western Animation</h3>
              <p>"Disney style," "Cartoon Network," or "Calarts style" produces expressive, family-friendly characters.</p>
            </div>
            <div className="cg-style-card">
              <span className="cg-style-icon">🎮</span>
              <h3>Realistic / 3D Rendered</h3>
              <p>"Unreal Engine 5 render," "photorealistic," "highly detailed 3D model" for game-ready assets.</p>
            </div>
            <div className="cg-style-card">
              <span className="cg-style-icon">🖌️</span>
              <h3>Watercolor / Painted</h3>
              <p>"Watercolor painting," "digital painting," "concept art" for stylized, artistic characters.</p>
            </div>
            <div className="cg-style-card">
              <span className="cg-style-icon">🎮</span>
              <h3>Pixel Art / Retro</h3>
              <p>"8-bit pixel art," "16-bit RPG sprite style" for indie games and nostalgic projects.</p>
            </div>
            <div className="cg-style-card">
              <span className="cg-style-icon">🤖</span>
              <h3>Cyberpunk / Sci-Fi</h3>
              <p>"Cyberpunk style," "neon noir," "sci-fi concept art" for futuristic characters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cg-faq-section">
        <div className="cg-container">
          <h2>Frequently Asked Questions — AI Character Generator</h2>
          <div className="cg-faq-grid">
            <div className="cg-faq-item">
              <h3>Can AI generate the exact same character in different poses?</h3>
              <p>
                Yes, with the right prompts. Use a detailed, consistent character description in every prompt. 
                For best results, generate a "base character" first, then use that image as a reference for 
                variations. Adding "same character" or "consistent character design" to your prompts helps 
                maintain visual identity across different poses and expressions.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>What's the best AI for character consistency?</h3>
              <p>
                Our AI Content Creator uses advanced models that excel at character consistency when given 
                detailed prompts. Key techniques: use the same seed value, maintain identical character 
                descriptions across generations, and generate reference sheets before action poses. 
                For professional work, start with a character turnaround sheet.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>Can I use AI-generated characters for commercial projects?</h3>
              <p>
                Yes. All characters generated on Scenith come with full commercial rights. You can use them 
                in games, comics, animations, merchandise, and any commercial project — no attribution required.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>How do I create a D&D character portrait with AI?</h3>
              <p>
                Describe your character's race, class, equipment, and personality. Example: "A half-elf rogue 
                with short brown hair, leather armor, dual daggers, standing in a tavern, D&D art style, 
                fantasy illustration." Add "portrait" or "headshot" for token art, or "full body" for character 
                sheets. D&D players love generating custom art for their party members.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>What resolution should character art be?</h3>
              <p>
                For most uses: 1024x1024 (square) or 1024x1536 (portrait). For game sprites: 512x512 or 256x256. 
                For print/merchandise: 2048x2048 minimum. Our AI character generator outputs high-resolution 
                images suitable for any use case.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>Can AI generate characters in multiple art styles?</h3>
              <p>
                Absolutely. You can specify any art style: "anime," "realistic," "pixel art," "watercolor," 
                "Disney," "Tim Burton," "cyberpunk," "chibi," and hundreds more. Each style produces 
                dramatically different results — experiment to find what fits your project.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>How do I generate expressions for the same character?</h3>
              <p>
                Use the same character description but change the emotion: "happy expression," "angry expression," 
                "surprised expression." For best consistency, add "same character, same outfit, same lighting" 
                to your prompt. Generate an expression sheet (9 emotions in a grid) for professional reference.
              </p>
            </div>

            <div className="cg-faq-item">
              <h3>What's the difference between a character and a character sheet?</h3>
              <p>
                A "character" is a single image. A "character sheet" or "turnaround" shows the same character 
                from multiple angles (front, side, back) and often includes expressions and clothing details. 
                Character sheets are essential for animation, game development, and commissioning artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cg-final-cta-section">
        <div className="cg-container">
          <div className="cg-final-cta-card">
            <span className="cg-final-icon">🎨</span>
            <h2>Ready to Bring Your Characters to Life?</h2>
            <p>
              Join 100,000+ game developers, comic artists, and storytellers using AI to create 
              unforgettable characters. Start free — no art skills required.
            </p>
            <Link href={ctaUrl} className="cg-final-cta-btn">
              <span>✨ Generate Your First Character Free →</span>
            </Link>
            <div className="cg-final-features">
              <span>✅ 50 free credits on signup</span>
              <span>🎨 20+ art styles</span>
              <span>🔄 Consistent character generation</span>
              <span>📸 Expression & pose variants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer */}
      <section className="cg-internal-links">
        <div className="cg-container">
          <h3>More AI Creation Tools</h3>
          <div className="cg-links-grid">
            <Link href="/create-ai-content" className="cg-internal-link">🎬 AI Content Creator Suite</Link>
            <Link href="/tools/ai-image-generation" className="cg-internal-link">🖼️ AI Image Generator</Link>
            <Link href="/tools/ai-character-generator" className="cg-internal-link">🎭 AI Character Generator</Link>
            <Link href="/tools/ai-thumbnail-generator" className="cg-internal-link">📸 AI Thumbnail Generator</Link>
            <Link href="/tools/viral-ai-video-creator" className="cg-internal-link">📈 Viral AI Video Creator</Link>
            <Link href="/tools/ai-voice-generation" className="cg-internal-link">🎙️ AI Voice Generator</Link>
            <Link href="/tools/hindi-female-ai-voice-generation" className="cg-internal-link">🇮🇳 Hindi Female Voice</Link>
            <Link href="/pricing" className="cg-internal-link">💎 Pricing & Credits</Link>
          </div>
        </div>
      </section>

      {/* JavaScript for prompt suggestions and redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const textarea = document.getElementById('characterPromptInput');
              const generateBtn = document.getElementById('cgGenerateBtn');
              const suggestionChips = document.querySelectorAll('.cg-suggestion-chip');
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
                    sessionStorage.setItem('characterPrompt', promptValue);
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