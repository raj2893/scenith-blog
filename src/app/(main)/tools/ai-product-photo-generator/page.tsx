// app/tools/ai-product-photo-generator/page.tsx
import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: 'AI Product Photo Generator: Create Professional E-commerce Images Instantly',
  description: 'Generate studio-quality product photos with AI. Save thousands on photography. Perfect for Amazon, Shopify, Etsy, and social media. Try free.',
  keywords: 'AI product photo generator, product photography AI, e-commerce image generator, Amazon product photos, Shopify image creator',
};

export default function AIProductPhotoGeneratorPage() {
  const slug = 'ai-product-photo-generator';
  const ctaUrl = `/create-ai-content?tab=image&utm_source=${slug}&utm_medium=cta&utm_campaign=seo`;

  return (
    <div className="product-photo-page">
      {/* Breadcrumb Navigation */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
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
            <span itemProp="name">AI Product Photo Generator</span>
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
                name: 'AI Product Photo Generator',
                description: 'Generate professional e-commerce product photos with AI. Studio-quality images for Amazon, Shopify, Etsy, and social media.',
                url: `https://scenith.in/tools/${slug}`,
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                featureList: [
                  'Product background removal',
                  'Lifestyle scene generation',
                  'White background studio shots',
                  'Multiple angles & variants',
                  'Amazon/Etsy optimized',
                  'High-resolution exports',
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Generate AI Product Photos for E-commerce',
                description: 'Step-by-step guide to creating professional product images',
                step: [
                  { '@type': 'HowToStep', name: 'Upload or describe your product', position: 1 },
                  { '@type': 'HowToStep', name: 'Select photo style (studio/lifestyle)', position: 2 },
                  { '@type': 'HowToStep', name: 'Generate AI product photos', position: 3 },
                  { '@type': 'HowToStep', name: 'Download and optimize for your platform', position: 4 },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Can AI generate realistic product photos?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Modern AI product photo generators create photorealistic images that are often indistinguishable from professional studio photography. They can generate products on white backgrounds, in lifestyle settings, with models, and in various environments — all without expensive equipment or studio rental.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What e-commerce platforms can use AI product photos?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI-generated product photos work on all major platforms: Amazon, Shopify, Etsy, eBay, Walmart, WooCommerce, and social media (Instagram, Facebook, Pinterest). Just ensure images meet platform requirements (e.g., Amazon requires pure white backgrounds for main images).',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pp-hero">
        <div className="pp-container">
          <div className="pp-hero-badge">
            <span>📸</span>
            <span>Used by 50,000+ e-commerce sellers</span>
          </div>
          <h1 className="pp-hero-title">
            AI Product Photo Generator
            <span className="pp-hero-subtitle">Save $5,000+ on Professional Photography</span>
          </h1>
          <p className="pp-hero-desc">
            Generate <strong>studio-quality product photos</strong> in seconds — no expensive equipment, 
            no studio rental, no professional photographers. Perfect for Amazon listings, Shopify stores, 
            Etsy shops, and social media. Create white background shots, lifestyle scenes, and multiple 
            angles instantly with AI.
          </p>

          {/* CTA Prompt Box */}
          <div className="pp-prompt-box">
            <div className="pp-prompt-header">
              <span>📦</span>
              <h3>Describe your product or upload a photo</h3>
              <span className="pp-prompt-badge">E-commerce optimized</span>
            </div>
            <textarea
              className="pp-prompt-textarea"
              placeholder="Example: 'A minimalist ceramic coffee mug, matte white finish, sitting on a wooden table, soft natural lighting from a window, coffee beans scattered around, Instagram aesthetic, product photography style.'"
              rows={3}
              id="productPromptInput"
            />
            <div className="pp-prompt-footer">
              <div className="pp-prompt-suggestions">
                <button type="button" className="pp-suggestion-chip" data-prompt="A modern stainless steel water bottle, isolated on pure white background, studio lighting, 360-degree product view, Amazon main image style, high resolution">🥤 White Background</button>
                <button type="button" className="pp-suggestion-chip" data-prompt="A leather tote bag being held by a woman in a coffee shop, natural sunlight, candid lifestyle shot, warm tones, Instagram fashion photography style">👜 Lifestyle Scene</button>
                <button type="button" className="pp-suggestion-chip" data-prompt="A skincare bottle on a marble bathroom counter, with eucalyptus leaves and a folded white towel, soft morning light, clean aesthetic, premium product photography">🧴 Beauty/Skincare</button>
              </div>
              <Link href={ctaUrl} className="pp-generate-btn" id="ppGenerateBtn">
                <span>✨ Generate Product Photo →</span>
              </Link>
            </div>
          </div>

          <div className="pp-trust-badges">
            <span>✅ Amazon & Shopify optimized</span>
            <span>📸 White background + lifestyle</span>
            <span>💰 Save $5k+ on photography</span>
            <span>⚡ 10-second generation</span>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="pp-definition">
        <div className="pp-container">
          <div className="pp-definition-box">
            <span className="pp-definition-label">📖 What Is an AI Product Photo Generator?</span>
            <p className="pp-definition-text">
              An <strong>AI product photo generator</strong> is a specialized tool that creates professional 
              product images using artificial intelligence — from simple white-background catalog shots to 
              elaborate lifestyle scenes with models and environments. Unlike generic image generators, 
              product-focused AI understands <strong>e-commerce requirements</strong>: Amazon's pure white 
              background guidelines, Shopify's aspect ratio needs, and the lighting/angle conventions that 
              drive sales. The best generators can take a basic product photo and transform it into dozens 
              of variations, or generate entirely new product images from text descriptions alone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Product Photos Matter */}
      <section className="pp-why-section">
        <div className="pp-container">
          <h2>Why Professional Product Photos Are Non-Negotiable for E-commerce</h2>
          <p className="pp-section-intro">
            Data from millions of online sales proves: better photos = more sales. Here's what the numbers say.
          </p>

          <div className="pp-why-grid">
            <div className="pp-why-card">
              <div className="pp-why-icon">📊</div>
              <h3>67% of Buyers Say Photo Quality Matters</h3>
              <p>
                According to surveys, <strong>67% of online shoppers</strong> consider product image quality 
                "very important" to their purchase decision. For categories like fashion, home decor, and 
                electronics, that number jumps to 83%. Poor photos are the #1 reason customers abandon carts 
                and buy from competitors instead.
              </p>
            </div>
            <div className="pp-why-card">
              <div className="pp-why-icon">💰</div>
              <h3>Better Photos = Higher Conversion Rates</h3>
              <p>
                E-commerce data shows that products with <strong>professional photography convert 2-3x higher</strong> 
                than those with amateur photos. A/B tests consistently reveal that upgrading from smartphone 
                photos to professional-style images increases conversion rates by 30-50% — often the single 
                highest-ROI improvement an online store can make.
              </p>
            </div>
            <div className="pp-why-card">
              <div className="pp-why-icon">🔍</div>
              <h3>Amazon Requires Pure White Backgrounds</h3>
              <p>
                For Amazon's main product image, <strong>pure white backgrounds (RGB 255,255,255) are mandatory</strong>. 
                Listings that violate this can be suppressed or removed. AI product photo generators 
                automatically enforce this requirement, ensuring your Amazon listings stay compliant.
              </p>
            </div>
            <div className="pp-why-card">
              <div className="pp-why-icon">📱</div>
              <h3>Mobile Shopping Demands Clear Photos</h3>
              <p>
                <strong>79% of smartphone users</strong> have made a purchase online using their mobile device. 
                On small screens, low-quality or cluttered product photos are impossible to evaluate. 
                Professional, zoomable, high-contrast images are essential for mobile conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Photo Types Section */}
      <section className="pp-types-section">
        <div className="pp-container">
          <h2>Essential Product Photo Types Every E-commerce Store Needs</h2>
          <p className="pp-section-intro">
            Here are the 6 image types that drive sales — and how AI generates them instantly.
          </p>

          <div className="pp-types-grid">
            <div className="pp-type-card">
              <div className="pp-type-icon">⬜</div>
              <h3>White Background (Main Image)</h3>
              <p>Required for Amazon, ideal for catalogs. Clean, distraction-free, pure white background. Shows product clearly from a straight-on angle.</p>
              <div className="pp-type-prompt">"Stainless steel kitchen knife, isolated on pure white background, studio lighting, sharp shadows, product photography"</div>
            </div>
            <div className="pp-type-card">
              <div className="pp-type-icon">🌅</div>
              <h3>Lifestyle / In-Context</h3>
              <p>Shows product being used in real scenarios. Helps customers imagine owning it. Drives emotional connection and higher conversion.</p>
              <div className="pp-type-prompt">"Leather notebook on a coffee shop table, person writing in it, warm lighting, cozy aesthetic, candid shot"</div>
            </div>
            <div className="pp-type-card">
              <div className="pp-type-icon">🔄</div>
              <h3>Multiple Angles</h3>
              <p>Front, back, side, top-down, and detail shots. Builds trust by showing exactly what customers receive.</p>
              <div className="pp-type-prompt">"Ceramic vase, top-down view, flat lay on white surface, soft studio lighting, minimalist style"</div>
            </div>
            <div className="pp-type-card">
              <div className="pp-type-icon">🔍</div>
              <h3>Close-Up / Detail Shots</h3>
              <p>Shows texture, material quality, stitching, finish. Critical for clothing, jewelry, and handmade items.</p>
              <div className="pp-type-prompt">"Close-up of wool sweater texture, macro photography, natural light, showing fiber detail, soft focus background"</div>
            </div>
            <div className="pp-type-card">
              <div className="pp-type-icon">📏</div>
              <h3>Scale / Size Reference</h3>
              <p>Shows product next to common objects (hand, coin, phone) to convey true dimensions.</p>
              <div className="pp-type-prompt">"Mini backpack held in a person's hand, showing size reference, outdoor setting, natural light"</div>
            </div>
            <div className="pp-type-card">
              <div className="pp-type-icon">🎨</div>
              <h3>Color Variations</h3>
              <p>Same product in different colors. Allows customers to compare options without confusion.</p>
              <div className="pp-type-prompt">"Same ceramic mug in red, blue, green, and yellow, arranged in a row, white background, studio lighting"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="pp-steps-section">
        <div className="pp-container">
          <h2>How to Generate Professional Product Photos With AI</h2>
          <p className="pp-section-intro">
            Follow this workflow used by top Amazon sellers and Shopify store owners.
          </p>

          <div className="pp-steps">
            <div className="pp-step">
              <div className="pp-step-number">1</div>
              <div className="pp-step-content">
                <h3>Prepare Your Product Reference</h3>
                <p>
                  For best results, start with a <strong>clear photo of your product</strong> on a plain background. 
                  Even a smartphone photo works! Or describe your product in detail for text-to-image generation.
                </p>
                <div className="pp-step-tip">
                  💡 <strong>Pro tip:</strong> Photograph your product in natural daylight against a white wall. 
                  Even basic photos give AI the information it needs to generate professional variations.
                </div>
              </div>
            </div>

            <div className="pp-step">
              <div className="pp-step-number">2</div>
              <div className="pp-step-content">
                <h3>Write a Detailed Prompt (For Text-to-Image)</h3>
                <p>
                  The best product photo prompts include:
                </p>
                <ul>
                  <li><strong>Product:</strong> "Ceramic coffee mug, matte white finish"</li>
                  <li><strong>Environment:</strong> "On a rustic wooden table"</li>
                  <li><strong>Lighting:</strong> "Soft morning sunlight from a window"</li>
                  <li><strong>Props:</strong> "Coffee beans scattered, steam rising"</li>
                  <li><strong>Style:</strong> "Instagram aesthetic, product photography"</li>
                </ul>
              </div>
            </div>

            <div className="pp-step">
              <div className="pp-step-number">3</div>
              <div className="pp-step-content">
                <h3>Generate Multiple Variations</h3>
                <p>
                  Create 4-6 different versions of each product shot:
                </p>
                <ul>
                  <li><strong>White background</strong> — for Amazon main image and catalogs</li>
                  <li><strong>Lifestyle scene 1</strong> — product in use</li>
                  <li><strong>Lifestyle scene 2</strong> — product in a different setting</li>
                  <li><strong>Detail close-up</strong> — material texture or feature</li>
                  <li><strong>Scale shot</strong> — with size reference</li>
                </ul>
              </div>
            </div>

            <div className="pp-step">
              <div className="pp-step-number">4</div>
              <div className="pp-step-content">
                <h3>Optimize for Your Platform</h3>
                <p>
                  Each platform has specific requirements:
                </p>
                <ul>
                  <li><strong>Amazon:</strong> Main image must be pure white, 1000px+ on longest side</li>
                  <li><strong>Shopify:</strong> 2048x2048px recommended, any background</li>
                  <li><strong>Etsy:</strong> Square format (1:1), lifestyle images perform best</li>
                  <li><strong>Instagram:</strong> Vertical (4:5) for feed, square for grid consistency</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pp-steps-cta">
            <Link href={ctaUrl} className="pp-steps-cta-btn">
              📸 Generate Your Product Photos Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="pp-usecases-section">
        <div className="pp-container">
          <h2>Who Uses AI Product Photo Generators? (Real Examples)</h2>
          <p className="pp-section-intro">
            From Amazon FBA sellers to boutique Etsy shops — here's how businesses use AI product photography.
          </p>

          <div className="pp-usecase-grid">
            <div className="pp-usecase-card">
              <span className="pp-uc-icon">📦</span>
              <h3>Amazon FBA Sellers</h3>
              <p>
                Generate compliant main images (pure white background), infographic-style comparison shots, 
                and lifestyle photos. Amazon sellers save <strong>$500-2000 per product</strong> on professional 
                photography. Create A+ content images and variation photos instantly.
              </p>
              <div className="pp-uc-metrics">
                📊 Avg savings: $1,200 per product
              </div>
            </div>

            <div className="pp-usecase-card">
              <span className="pp-uc-icon">🛍️</span>
              <h3>Shopify & WooCommerce Stores</h3>
              <p>
                Generate consistent product photography across your entire catalog. Create collection page 
                thumbnails, product detail images, and social media content. Perfect for dropshippers who 
                don't have physical products to photograph.
              </p>
              <div className="pp-uc-metrics">
                ⏱️ Time saved: 10-20 hours per week
              </div>
            </div>

            <div className="pp-usecase-card">
              <span className="pp-uc-icon">🎨</span>
              <h3>Etsy & Handmade Sellers</h3>
              <p>
                Generate lifestyle photos showing handmade products in beautiful settings. Create consistent 
                thumbnails for your shop, mockups for different color variations, and gift-in-action shots. 
                Etsy's algorithm favors shops with complete, professional-looking photo sets.
              </p>
              <div className="pp-uc-metrics">
                📈 Sales lift: 25-40% with better photos
              </div>
            </div>

            <div className="pp-usecase-card">
              <span className="pp-uc-icon">📱</span>
              <h3>Social Media Managers</h3>
              <p>
                Generate endless product content for Instagram, TikTok, Facebook, and Pinterest. 
                Create seasonal variations, holiday-themed photos, and platform-specific crops. 
                Never run out of content for your product feed again.
              </p>
              <div className="pp-uc-metrics">
                📸 Content output: 5x faster
              </div>
            </div>

            <div className="pp-usecase-card">
              <span className="pp-uc-icon">🏷️</span>
              <h3>Print-on-Demand Sellers</h3>
              <p>
                Generate mockups of t-shirts, mugs, phone cases, and posters without expensive sample 
                photography. Create lifestyle images showing your designs in real-world settings. 
                Perfect for Redbubble, Printful, and Merch by Amazon sellers.
              </p>
              <div className="pp-uc-metrics">
                🖨️ Mockup cost: $0 vs $50-200 each
              </div>
            </div>

            <div className="pp-usecase-card">
              <span className="pp-uc-icon">📰</span>
              <h3>Marketplaces (eBay, Walmart, Etsy)</h3>
              <p>
                Optimize listings across multiple platforms with platform-specific requirements. 
                Generate additional images for variation listings (size, color, style). 
                Boost search ranking with high-quality, complete photo sets.
              </p>
              <div className="pp-uc-metrics">
                🥇 Ranking improvement: 2-3x views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="pp-practices-section">
        <div className="pp-container">
          <h2>Best Practices for High-Converting Product Photos</h2>
          <p className="pp-section-intro">
            Follow these e-commerce photography rules proven to increase sales.
          </p>

          <div className="pp-practices-grid">
            <div className="pp-practice-item">
              <h3>📸 Use 5+ Images Per Product</h3>
              <p>Products with 5+ images sell 3x better than those with 1-2 images. Include: main shot, lifestyle, detail, scale, and packaging.</p>
            </div>
            <div className="pp-practice-item">
              <h3>⬜ Amazon: Pure White Background Only</h3>
              <p>RGB 255,255,255. No shadows, no props, no text on the main image. Violations get your listing suppressed.</p>
            </div>
            <div className="pp-practice-item">
              <h3>🌅 Show Product In Use</h3>
              <p>Lifestyle photos increase conversion by 47% by helping customers visualize ownership. Show real people using your product.</p>
            </div>
            <div className="pp-practice-item">
              <h3>🔍 Zoom Matters</h3>
              <p>1000px+ minimum on longest side. Amazon recommends 2000px+ for zoom functionality. Higher resolution = more trust.</p>
            </div>
            <div className="pp-practice-item">
              <h3>🎨 Consistent Lighting & Style</h3>
              <p>All photos in your catalog should look like they were shot by the same photographer. Consistent aesthetic builds brand trust.</p>
            </div>
            <div className="pp-practice-item">
              <h3>📏 Show Scale</h3>
              <p>Include a common object (hand, coin, phone) or dimensions in at least one photo. Reduces returns from size confusion.</p>
            </div>
            <div className="pp-practice-item">
              <h3>⚪ Remove Distracting Backgrounds</h3>
              <p>For secondary images, clean backgrounds still outperform busy ones. Let the product be the hero.</p>
            </div>
            <div className="pp-practice-item">
              <h3>📱 Optimize for Mobile First</h3>
              <p>Test your photos on a phone screen. If details disappear or the image looks cluttered, simplify.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="pp-mistakes-section">
        <div className="pp-container">
          <h2>8 Product Photo Mistakes Killing Your Sales (And How AI Fixes Them)</h2>
          <p className="pp-section-intro">
            Avoid these errors that cost e-commerce sellers millions in lost revenue.
          </p>

          <div className="pp-mistakes-list">
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 1</span>
              <p><strong>Dark, underexposed photos</strong> — AI automatically brightens and color-corrects to optimal levels.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 2</span>
              <p><strong>Busy, distracting backgrounds</strong> — AI can remove or replace backgrounds with clean, professional options.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 3</span>
              <p><strong>Inconsistent catalog styling</strong> — AI generates consistent lighting and composition across all products.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 4</span>
              <p><strong>No lifestyle images</strong> — AI creates realistic lifestyle scenes without expensive photoshoots.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 5</span>
              <p><strong>Poor color accuracy</strong> — AI maintains true product colors with proper white balance.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 6</span>
              <p><strong>Missing detail shots</strong> — AI can generate close-up images showing texture and quality.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 7</span>
              <p><strong>Low resolution / pixelated</strong> — AI generates high-res 2000px+ images ready for zoom.</p>
            </div>
            <div className="pp-mistake">
              <span className="pp-mistake-num">❌ 8</span>
              <p><strong>No scale reference</strong> — AI can add common objects to show true product size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="pp-advanced-section">
        <div className="pp-container">
          <h2>Advanced Product Photography Tactics for Power Sellers</h2>
          <p className="pp-section-intro">
            Level up your e-commerce visuals with these pro strategies.
          </p>

          <div className="pp-advanced-grid">
            <div className="pp-advanced-card">
              <h3>🎨 Generate Color & Size Variations Automatically</h3>
              <p>
                Create a single "base" product photo, then use AI to generate all your color and size variations. 
                Prompt: "The same ceramic mug in [red/blue/green], same angle, same lighting, same background." 
                This creates perfectly consistent variation photos without reshooting each option.
              </p>
            </div>

            <div className="pp-advanced-card">
              <h3>📸 Create Infographic-Style Comparison Shots</h3>
              <p>
                Generate images with text overlays showing features, dimensions, and benefits. 
                Amazon sellers use these for "A+ Content" and secondary images. Example: 
                "Product photo with callout arrows pointing to features: 'leather handle', 'brass zipper', 'water-resistant fabric'."
              </p>
            </div>

            <div className="pp-advanced-card">
              <h3>🌍 Localize Lifestyle Photos for Different Markets</h3>
              <p>
                Generate lifestyle photos tailored to different geographic markets: 
                "Product on a Tokyo apartment desk" vs "Product on a California beach towel" vs 
                "Product in a London coffee shop." Localized imagery increases conversion in target markets.
              </p>
            </div>

            <div className="pp-advanced-card">
              <h3>🎄 Create Seasonal & Holiday Variations</h3>
              <p>
                Generate product photos for Christmas, Halloween, Valentine's Day, and other holidays 
                without reshooting. Prompt: "Same product, Christmas theme, wrapped gift beside it, 
                twinkling lights in background, festive atmosphere." Seasonal content drives holiday sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Requirements Section */}
      <section className="pp-platform-section">
        <div className="pp-container">
          <h2>Platform-Specific Product Photo Requirements</h2>
          <p className="pp-section-intro">
            Each marketplace has unique requirements. Here's what you need to know.
          </p>

          <div className="pp-platform-grid">
            <div className="pp-platform-card">
              <h3>📦 Amazon</h3>
              <ul>
                <li>Main image: Pure white background (RGB 255,255,255)</li>
                <li>Resolution: 1000px+ on longest side (2000px+ recommended)</li>
                <li>Format: JPEG or PNG</li>
                <li>No text, logos, watermarks, or props on main image</li>
                <li>Secondary images can show lifestyle, details, infographics</li>
              </ul>
            </div>
            <div className="pp-platform-card">
              <h3>🛍️ Shopify</h3>
              <ul>
                <li>2048x2048px recommended for zoom</li>
                <li>Any background allowed (white converts best for main image)</li>
                <li>Square format (1:1 aspect ratio)</li>
                <li>Lifestyle images strongly recommended</li>
                <li>Alt text important for SEO</li>
              </ul>
            </div>
            <div className="pp-platform-card">
              <h3>🎨 Etsy</h3>
              <ul>
                <li>Square format (1:1) for thumbnails</li>
                <li>First image: product on white or neutral background</li>
                <li>Lifestyle images increase conversion significantly</li>
                <li>Show scale (hand, ruler, common object)</li>
                <li>10 photo slots available — use all</li>
              </ul>
            </div>
            <div className="pp-platform-card">
              <h3>📸 Instagram Shopping</h3>
              <ul>
                <li>Square (1:1) or vertical (4:5)</li>
                <li>Product must fill at least 80% of frame</li>
                <li>White or simple backgrounds for catalog feed</li>
                <li>Lifestyle images for organic posts</li>
                <li>No text overlays on catalog images</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pp-faq-section">
        <div className="pp-container">
          <h2>Frequently Asked Questions — AI Product Photo Generator</h2>
          <div className="pp-faq-grid">
            <div className="pp-faq-item">
              <h3>Are AI-generated product photos allowed on Amazon?</h3>
              <p>
                Yes. Amazon allows AI-generated product images as long as they accurately represent the product 
                and follow Amazon's image requirements (pure white background, no watermarks, proper sizing). 
                However, Amazon's main image must be a true representation — you cannot add features the product 
                doesn't have. Our AI generates realistic, compliant images for all marketplaces.
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>Can AI replace professional product photography entirely?</h3>
              <p>
                For many e-commerce businesses, yes. AI product photo generators can produce images that are 
                indistinguishable from professional studio photography — at a fraction of the cost. However, 
                for high-end products where every detail matters (luxury watches, fine jewelry, high-end fashion), 
                professional photography may still be worth the investment. For 90% of e-commerce products, 
                AI is more than sufficient.
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>What resolution do AI product photos have?</h3>
              <p>
                Our AI generates product photos up to 2048x2048 pixels — perfect for Amazon zoom functionality, 
                Shopify's zoom feature, and high-resolution printing. You can also upscale images further using 
                our enhancement tools if needed.
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>Can I generate lifestyle photos without hiring models?</h3>
              <p>
                Yes. AI can generate realistic lifestyle scenes with models, environments, and props — all from 
                text descriptions. You can specify "woman in her 30s, coffee shop setting, natural light" and 
                AI creates the entire scene. This saves thousands on model fees, studio rental, and photographer costs.
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>How do I get a pure white background for Amazon?</h3>
              <p>
                Simply include "pure white background" or "isolated on white" in your prompt. Our AI ensures 
                the background is exactly RGB 255,255,255 — compliant with Amazon's strict requirements. 
                Example: "Stainless steel water bottle, pure white background, studio lighting, product photography."
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>Can I generate multiple product angles?</h3>
              <p>
                Absolutely. Generate front, back, side, top-down, and 45-degree angle shots with simple prompt 
                modifications. For consistency, keep the product description identical and only change the angle: 
                "Same product, front view" vs "Same product, top-down view."
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>What file format should I use for product photos?</h3>
              <p>
                JPEG at 90-100% quality for the best balance of quality and file size. PNG for images requiring 
                transparency (though Amazon and most platforms prefer opaque white backgrounds). Our AI generates 
                high-quality JPEGs by default, optimized for web loading speed.
              </p>
            </div>

            <div className="pp-faq-item">
              <h3>How many product photos should I create?</h3>
              <p>
                For optimal conversion: 5-8 images per product. This typically includes: 1) White background main shot, 
                2) Lifestyle/in-use, 3) Detail/close-up, 4) Scale reference, 5) Packaging/setup, 6) Color variations, 
                7) Infographic with features, 8) Comparison with competitor/size. Use all slots your platform offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pp-final-cta-section">
        <div className="pp-container">
          <div className="pp-final-cta-card">
            <span className="pp-final-icon">🚀</span>
            <h2>Stop Paying $500+ Per Product Photoshoot</h2>
            <p>
              Join 50,000+ e-commerce sellers who've saved over $10M on product photography using AI. 
              Generate studio-quality photos for your entire catalog — starting free.
            </p>
            <Link href={ctaUrl} className="pp-final-cta-btn">
              <span>✨ Generate Your First Product Photo Free →</span>
            </Link>
            <div className="pp-final-features">
              <span>✅ 50 free credits on signup</span>
              <span>📸 White background + lifestyle</span>
              <span>🛍️ Amazon & Shopify optimized</span>
              <span>🎨 Color variation generator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer */}
      <section className="pp-internal-links">
        <div className="pp-container">
          <h3>More AI Tools for E-commerce</h3>
          <div className="pp-links-grid">
            <Link href="/create-ai-content" className="pp-internal-link">🎬 AI Content Creator Suite</Link>
            <Link href="/tools/ai-image-generation" className="pp-internal-link">🖼️ AI Image Generator</Link>
            <Link href="/tools/ai-product-photo-generator" className="pp-internal-link">📦 AI Product Photo Generator</Link>
            <Link href="/tools/ai-thumbnail-generator" className="pp-internal-link">📸 AI Thumbnail Generator</Link>
            <Link href="/tools/ai-character-generator" className="pp-internal-link">🎭 AI Character Generator</Link>
            <Link href="/tools/viral-ai-video-creator" className="pp-internal-link">📈 Viral AI Video Creator</Link>
            <Link href="/tools/ai-voice-generation" className="pp-internal-link">🎙️ AI Voice Generator</Link>
            <Link href="/pricing" className="pp-internal-link">💎 Pricing & Credits</Link>
          </div>
        </div>
      </section>

      {/* JavaScript for prompt suggestions and redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const textarea = document.getElementById('productPromptInput');
              const generateBtn = document.getElementById('ppGenerateBtn');
              const suggestionChips = document.querySelectorAll('.pp-suggestion-chip');
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
                    sessionStorage.setItem('productPhotoPrompt', promptValue);
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