import type { Metadata } from "next";
import "./ecommerce-video-ads.css";

export const metadata: Metadata = {
  title: "Free AI Ecommerce Video Ads Generator for Shopify — Scenith",
  description:
    "Generate scroll-stopping AI video ads for your Shopify store, WooCommerce, or Amazon listings in 60 seconds. No editing skills, no agency fees. Powered by Kling 2.6, Veo 3.1, and Wan 2.5.",
  keywords: [
    "ecommerce video ads generator",
    "shopify video ads AI",
    "AI product video generator",
    "free video ads for shopify",
    "AI video ads for ecommerce",
    "product video generator AI",
    "shopify ad video maker",
    "automated product video ads",
    "AI video maker for online store",
    "ecommerce ad video creator",
    "dropshipping video ads",
    "woocommerce video ads",
    "amazon product video AI",
    "social media ads video AI",
    "reels ads generator shopify",
  ],
  openGraph: {
    title: "Free AI Ecommerce Video Ads Generator for Shopify — Scenith",
    description:
      "Generate cinematic product video ads for Shopify, WooCommerce, and Amazon in under 60 seconds. No editing required.",
    url: "https://scenith.in/tools/ecommerce-video-ads-generator-shopify",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ecommerce Video Ads Generator — Shopify & WooCommerce",
    description:
      "Turn any product description into a cinematic video ad in 60 seconds. Free to try — no signup needed.",
  },
  alternates: {
    canonical:
      "https://scenith.in/tools/ecommerce-video-ads-generator-shopify",
  },
};

const BEFORE_AFTER = [
  {
    before: "Blurry product photo from supplier",
    after: "Cinematic 1080p video ad with motion, lighting & call to action",
  },
  {
    before: "Generic stock footage that screams 'fake brand'",
    after: "Custom AI video that matches your exact product & color palette",
  },
  {
    before: "$500+ agency fee + 2-week turnaround",
    after: "46 credits (~$0.14) + 60 seconds to your inbox",
  },
  {
    before: "Static image ads getting 0.6% CTR on Meta",
    after: "Video ads averaging 3–5× higher CTR in ecommerce campaigns",
  },
];

const VIDEO_MODELS = [
  {
    name: "Wan 2.5",
    badge: "⚡ Fastest",
    desc: "Ideal for product reveal reels. 480p–1080p, 5–10s, lowest cost.",
    cost: "46 cr / 5s",
    color: "#f59e0b",
  },
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    desc: "Cinematic motion. Use for hero ads, brand stories, Instagram Reels.",
    cost: "64 cr / 5s",
    color: "#6355dc",
  },
  {
    name: "Veo 3.1",
    badge: "🎬 Most Realistic",
    desc: "Google's flagship. Photorealistic product motion, optional audio.",
    cost: "186 cr / 5s",
    color: "#10b981",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 Audio Included",
    desc: "Built-in AI sound design. Perfect for TikTok & YouTube Shorts.",
    cost: "47 cr / 5s",
    color: "#db2777",
  },
];

const AD_FORMATS = [
  {
    icon: "📱",
    label: "TikTok / Reels",
    ratio: "9:16",
    desc: "Vertical short-form. Highest organic reach for DTC brands in 2025–2026.",
  },
  {
    icon: "🖥️",
    label: "Meta & Google Display",
    ratio: "16:9",
    desc: "Horizontal video for Facebook Feed, YouTube pre-roll, Google Ads.",
  },
  {
    icon: "⬛",
    label: "Instagram Feed",
    ratio: "1:1",
    desc: "Square format dominates Instagram Feed and Pinterest shopping.",
  },
];

const PRODUCT_CATEGORIES = [
  { emoji: "👗", cat: "Fashion & Apparel" },
  { emoji: "💄", cat: "Beauty & Skincare" },
  { emoji: "🏠", cat: "Home & Decor" },
  { emoji: "🧴", cat: "Health & Wellness" },
  { emoji: "📱", cat: "Tech Accessories" },
  { emoji: "🎒", cat: "Bags & Luggage" },
  { emoji: "🍕", cat: "Food & Beverages" },
  { emoji: "🐾", cat: "Pet Products" },
  { emoji: "🧸", cat: "Kids & Toys" },
  { emoji: "🏋️", cat: "Fitness & Sports" },
  { emoji: "💍", cat: "Jewelry & Accessories" },
  { emoji: "📚", cat: "Books & Digital Products" },
];

const PROMPT_EXAMPLES = [
  {
    product: "Minimalist leather wallet",
    prompt:
      "Cinematic close-up of a slim cognac leather wallet sliding onto a marble surface, cards fanning out elegantly, warm golden hour light, luxury product photography style",
  },
  {
    product: "Face serum",
    prompt:
      "Beauty product video — glass serum bottle on wet stone with water droplets, steam rising softly, slow dramatic tilt-up reveal, deep teal background, 4K cinematic",
  },
  {
    product: "Running shoes",
    prompt:
      "Dynamic athletic shoe ad — sneaker floating mid-air against a white void, 360° spin with neon motion trails, energy sparks, high-energy sports commercial aesthetic",
  },
  {
    product: "Scented candle",
    prompt:
      "Cozy lifestyle candle video — flame flickering in a dark room, smoke wisps rising in slow motion, warm amber bokeh, hygge home atmosphere, 5-second mood reel",
  },
];

const PLATFORM_SPECS = [
  {
    platform: "TikTok Ads",
    ratio: "9:16",
    resolution: "1080×1920",
    maxDuration: "60s",
    bestModel: "Grok Imagine (audio)",
    tip: "Hook within first 2s. AI voiceover + motion = 3× watch-through rate.",
  },
  {
    platform: "Meta / Facebook",
    ratio: "16:9 or 1:1",
    resolution: "1280×720",
    maxDuration: "15s",
    bestModel: "Kling 2.6 Pro",
    tip: "No sound assumed. Use text overlays. Square outperforms landscape in feed.",
  },
  {
    platform: "Instagram Reels",
    ratio: "9:16",
    resolution: "1080×1920",
    maxDuration: "90s",
    bestModel: "Veo 3.1",
    tip: "First frame = thumbnail. Make it gorgeous. Veo's realism wins here.",
  },
  {
    platform: "YouTube Shorts",
    ratio: "9:16",
    resolution: "1080×1920",
    maxDuration: "60s",
    bestModel: "Wan 2.5 (fast)",
    tip: "High volume wins on Shorts. Use Wan 2.5 to generate 10+ variants cheaply.",
  },
  {
    platform: "Amazon Listing",
    ratio: "16:9",
    resolution: "1280×720",
    maxDuration: "30s",
    bestModel: "Kling 2.6 Pro",
    tip: "Listings with video see 9.7% higher conversion. Feature the unboxing moment.",
  },
  {
    platform: "Shopify Product Page",
    ratio: "1:1 or 16:9",
    resolution: "1080p",
    maxDuration: "15s",
    bestModel: "Veo 3.1 Fast",
    tip: "Autoplay muted video above the fold increases add-to-cart by up to 80%.",
  },
];

const STEP_BY_STEP = [
  {
    num: "01",
    title: "Write your product prompt",
    desc: 'Describe your product in one powerful sentence — include the material, mood, and scene you want. Example: "Luxury matte black perfume bottle on obsidian stone, rising smoke, dramatic backlight."',
    icon: "✍️",
  },
  {
    num: "02",
    title: "Choose your AI video model",
    desc: "Pick Wan 2.5 for fast low-cost testing, Kling 2.6 Pro for cinematic quality, Veo 3.1 for photorealism, or Grok Imagine for built-in audio. All run on Scenith in one click.",
    icon: "🤖",
  },
  {
    num: "03",
    title: "Set format & duration",
    desc: "Pick 9:16 for TikTok / Reels, 16:9 for YouTube / Meta, 1:1 for Instagram. Choose 5s or 10s. Resolution up to 1080p. All aspect ratios and durations included in one credit spend.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Generate & download",
    desc: "Hit Generate. Your video renders in 30–120 seconds. Download as MP4. Upload directly to your ad manager, Shopify product page, or social media. No watermark. Commercial rights included.",
    icon: "🚀",
  },
];

const FAQ = [
  {
    q: "Can I use AI-generated video ads on Shopify product pages?",
    a: "Yes. All videos generated on Scenith come with full commercial rights — you can embed them on Shopify product pages, use them in Shopify Ads, include them in email campaigns, and distribute them on any social platform. No attribution or watermarks.",
  },
  {
    q: "Do I need a product image to generate video ads?",
    a: "No — you can generate purely from a text description. But if you have a product photo, you can use our Image-to-Video mode to animate it directly. Just upload the photo and describe the motion you want. This works especially well for static product photography from suppliers.",
  },
  {
    q: "Which AI video model is best for Shopify product ads?",
    a: "For most Shopify products, Kling 2.6 Pro strikes the best balance of quality and cost. For maximum photorealism (skincare, jewelry, premium goods), use Veo 3.1. For budget testing and high-volume ad iterations, Wan 2.5 at 480p is very cost-effective.",
  },
  {
    q: "How much does it cost to generate a product video ad?",
    a: "A 5-second Wan 2.5 video costs 46 credits. Kling 2.6 Pro is 64 credits. Veo 3.1 is 186 credits. You start with 50 free credits on signup. Paid plans start at $1 (Spark plan). Compare that to $500+ for a single produced video ad.",
  },
  {
    q: "What resolution and aspect ratio should I use for TikTok ads?",
    a: "TikTok and Instagram Reels require 9:16 vertical format. We recommend 1080p resolution. Set duration to 5 seconds for paid TikTok ads — short hooks perform significantly better in auction. Grok Imagine adds auto-generated audio which helps TikTok completion rates.",
  },
  {
    q: "Can I generate multiple video variants for A/B testing?",
    a: "Absolutely. This is one of the biggest advantages of AI video for ecommerce. Generate 5–10 variants with slightly different prompts (different lighting, different angles, different scenes) and run them in Meta's Advantage+ or TikTok's Smart Performance Campaign to find your winner.",
  },
  {
    q: "Does this work for dropshipping stores?",
    a: "Yes — and it's actually ideal for dropshippers. You don't need physical inventory to create video ads. Just describe the product from the supplier's listing and generate a cinematic scene around it. Many successful dropshippers use AI video to create ads that outperform their competitors who use the exact same supplier images.",
  },
  {
    q: "Is this better than hiring a video editor on Fiverr?",
    a: "For iteration speed and cost, yes. A Fiverr video editor costs $30–$200 per video with a 1–5 day turnaround. AI video costs under $1 per clip and delivers in 60 seconds. For brand storytelling and highly custom productions, human editors still win — but for product ads, A/B testing, and social content, AI is now the smarter default.",
  },
  {
    q: "Can I add subtitles or captions to my AI video ads?",
    a: "Yes — after generating your video, you can use Scenith's subtitle tool to add auto-generated or custom captions. Captions significantly improve watch-through rate on mobile (85% of social video is watched on mute).",
  },
  {
    q: "How do I write a good prompt for a product video ad?",
    a: "The best ecommerce video prompts include: (1) the product and its material, (2) the scene or setting, (3) the lighting mood, and (4) the camera movement. Example: 'Close-up of a matte ceramic diffuser on a linen surface, lavender smoke rising in slow motion, warm morning light, soft bokeh background, lifestyle product ad.' Avoid vague prompts like 'show my product' — specificity is everything.",
  },
];

export default function EcommerceVideoAdsPage() {
  return (
    <main className="eva-root">
      {/* ── HERO ── */}
      <section className="eva-hero">
        <div className="eva-hero-bg-grid" aria-hidden="true" />
        <div className="eva-hero-noise" aria-hidden="true" />
        <div className="eva-container">
          <div className="eva-badge-row">
            <span className="eva-badge">🛍️ Shopify & WooCommerce</span>
            <span className="eva-badge eva-badge--glow">⚡ 60-Second Generation</span>
          </div>
          <h1 className="eva-h1">
            AI Ecommerce Video Ads
            <br />
            <span className="eva-gradient-text">That Actually Convert</span>
          </h1>
          <p className="eva-hero-sub">
            Stop paying $500 per video ad. Generate scroll-stopping product
            videos for your Shopify store, TikTok, Instagram Reels, and Meta
            Ads in under 60 seconds — using the same AI models powering
            Hollywood-level motion graphics.
          </p>

          {/* ── MEGA CTA ── */}
          <a
            href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta&utm_campaign=ecommerce_video_ads_shopify"
            className="eva-mega-cta"
            aria-label="Open AI video generator on Scenith"
          >
            <span className="eva-cta-inner">
              <span className="eva-cta-icon">🎬</span>
              <span className="eva-cta-text">
                <strong>Generate Your First Video Ad Free</strong>
                <small>50 free credits · No credit card · Commercial rights included</small>
              </span>
              <span className="eva-cta-arrow">→</span>
            </span>
            <span className="eva-cta-glow" aria-hidden="true" />
          </a>

          <p className="eva-hero-footnote">
            Powered by{" "}
            <strong>Kling 2.6 Pro · Veo 3.1 · Wan 2.5 · Grok Imagine</strong>
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="eva-section eva-section--alt">
        <div className="eva-container">
          <h2 className="eva-h2">Before AI Video Ads vs. After</h2>
          <p className="eva-section-sub">
            Here's the reality check every Shopify store owner needs in 2026.
          </p>
          <div className="eva-ba-grid">
            {BEFORE_AFTER.map((item, i) => (
              <div className="eva-ba-card" key={i}>
                <div className="eva-ba-before">
                  <span className="eva-ba-label eva-ba-label--before">❌ Before</span>
                  <p>{item.before}</p>
                </div>
                <div className="eva-ba-divider">→</div>
                <div className="eva-ba-after">
                  <span className="eva-ba-label eva-ba-label--after">✅ After</span>
                  <p>{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="eva-section">
        <div className="eva-container">
          <h2 className="eva-h2">
            How to Create Ecommerce Video Ads with AI in 4 Steps
          </h2>
          <p className="eva-section-sub">
            No Premiere Pro. No Canva. No freelancer. Just a prompt and 60
            seconds.
          </p>
          <div className="eva-steps">
            {STEP_BY_STEP.map((s) => (
              <div className="eva-step" key={s.num}>
                <div className="eva-step-num">{s.num}</div>
                <div className="eva-step-icon">{s.icon}</div>
                <h3 className="eva-step-title">{s.title}</h3>
                <p className="eva-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="eva-cta-block">
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=steps_cta&utm_campaign=ecommerce_video_ads_shopify"
              className="eva-inline-cta"
            >
              🚀 Try It Now — Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── AI MODELS ── */}
      <section className="eva-section eva-section--dark">
        <div className="eva-container">
          <h2 className="eva-h2 eva-h2--light">
            4 AI Video Models. One Ecommerce Platform.
          </h2>
          <p className="eva-section-sub eva-section-sub--light">
            Pick the right model for your product category, budget, and
            platform. All available on Scenith with a single credit balance.
          </p>
          <div className="eva-models-grid">
            {VIDEO_MODELS.map((m) => (
              <div className="eva-model-card" key={m.name} style={{ "--model-color": m.color } as React.CSSProperties}>
                <div className="eva-model-badge">{m.badge}</div>
                <h3 className="eva-model-name">{m.name}</h3>
                <p className="eva-model-desc">{m.desc}</p>
                <div className="eva-model-cost">{m.cost}</div>
              </div>
            ))}
          </div>
          <div className="eva-cta-block">
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=models_cta&utm_campaign=ecommerce_video_ads_shopify"
              className="eva-inline-cta eva-inline-cta--light"
            >
              🎬 Open Video Generator →
            </a>
          </div>
        </div>
      </section>

      {/* ── PLATFORM SPECS ── */}
      <section className="eva-section">
        <div className="eva-container">
          <h2 className="eva-h2">
            Platform-Specific Video Ad Specs & Best Practices
          </h2>
          <p className="eva-section-sub">
            Every platform has different requirements. Here's exactly what to
            generate for each channel where your Shopify ads will run.
          </p>
          <div className="eva-specs-table-wrap">
            <table className="eva-specs-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Ratio</th>
                  <th>Resolution</th>
                  <th>Max Duration</th>
                  <th>Best Model</th>
                  <th>Pro Tip</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_SPECS.map((ps) => (
                  <tr key={ps.platform}>
                    <td>
                      <strong>{ps.platform}</strong>
                    </td>
                    <td>
                      <code>{ps.ratio}</code>
                    </td>
                    <td>
                      <code>{ps.resolution}</code>
                    </td>
                    <td>{ps.maxDuration}</td>
                    <td>
                      <span className="eva-model-pill">{ps.bestModel}</span>
                    </td>
                    <td className="eva-tip-cell">{ps.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── AD FORMATS ── */}
      <section className="eva-section eva-section--alt">
        <div className="eva-container">
          <h2 className="eva-h2">Generate for Every Ad Format</h2>
          <p className="eva-section-sub">
            One tool. Every aspect ratio your campaigns need.
          </p>
          <div className="eva-formats-grid">
            {AD_FORMATS.map((f) => (
              <div className="eva-format-card" key={f.label}>
                <div className="eva-format-icon">{f.icon}</div>
                <div className="eva-format-ratio">{f.ratio}</div>
                <h3 className="eva-format-label">{f.label}</h3>
                <p className="eva-format-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="eva-section">
        <div className="eva-container">
          <h2 className="eva-h2">Works for Every Ecommerce Product Category</h2>
          <p className="eva-section-sub">
            From skincare bottles to sneakers — if you can describe it, the AI
            can film it.
          </p>
          <div className="eva-cats-grid">
            {PRODUCT_CATEGORIES.map((c) => (
              <div className="eva-cat-chip" key={c.cat}>
                <span>{c.emoji}</span>
                <span>{c.cat}</span>
              </div>
            ))}
          </div>

          <div className="eva-cta-block" style={{ marginTop: 40 }}>
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=categories_cta&utm_campaign=ecommerce_video_ads_shopify"
              className="eva-inline-cta"
            >
              🛍️ Generate Your Product Video Ad →
            </a>
          </div>
        </div>
      </section>

      {/* ── PROMPT EXAMPLES ── */}
      <section className="eva-section eva-section--dark">
        <div className="eva-container">
          <h2 className="eva-h2 eva-h2--light">
            Real Prompt Examples by Product Type
          </h2>
          <p className="eva-section-sub eva-section-sub--light">
            Copy, adapt, and use these prompts directly in Scenith's video
            generator.
          </p>
          <div className="eva-prompts-grid">
            {PROMPT_EXAMPLES.map((ex) => (
              <div className="eva-prompt-card" key={ex.product}>
                <div className="eva-prompt-product">{ex.product}</div>
                <p className="eva-prompt-text">"{ex.prompt}"</p>
                <a
                  href={`https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=prompt_example&utm_campaign=ecommerce_video_ads_shopify&text=${encodeURIComponent(ex.prompt)}`}
                  className="eva-prompt-cta"
                >
                  Use this prompt →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP EDITORIAL: WHY VIDEO ADS MATTER IN 2026 ── */}
      <section className="eva-section">
        <div className="eva-container eva-editorial">
          <h2 className="eva-h2">
            Why Every Shopify Store Needs AI Video Ads in 2026
          </h2>

          <h3>The Attention Economy Has Gone Fully Visual</h3>
          <p>
            The average person scrolls through 300 feet of content every single
            day on their phone. Static images now have a fraction of a second to
            stop a thumb mid-scroll — and they're increasingly failing. TikTok's
            own internal data shows video ads receive up to <strong>5× higher
            engagement rates</strong> compared to image-only creatives. Meta's
            algorithm actively deprioritizes static content in favor of video in
            both organic and paid placements. If your Shopify store is still
            running image carousels as your primary ad format in 2026, you're
            playing with a hand tied behind your back.
          </p>

          <h3>The Production Cost Problem — Until Now</h3>
          <p>
            The traditional barrier to professional video ads was cost and time.
            A competent freelance videographer charges $300–$1,500 per video. A
            production agency for a brand-quality 15-second product spot starts
            at $2,000 and can reach $10,000 for DTC-level polish. You'd need to
            book 2–4 weeks out, ship product samples, and iterate over days to
            get the final cut. For small Shopify stores, dropshippers, and solo
            founders, that math simply never worked.
          </p>
          <p>
            AI video generation has obliterated that barrier. Models like{" "}
            <strong>Kling 2.6 Pro</strong> and <strong>Veo 3.1</strong> now
            produce genuinely cinematic footage — with proper motion blur,
            physically accurate lighting, and smooth camera movement — from a
            text prompt in under 2 minutes. The cost? Under a dollar per clip.
            The creative ceiling? Effectively unlimited. A solo Shopify founder
            can now iterate through 20 video ad variants in the time it
            previously took to email a freelancer.
          </p>

          <h3>Image-to-Video: Animating Your Existing Product Photos</h3>
          <p>
            One of the most powerful and underused workflows for Shopify sellers
            is image-to-video generation. You almost certainly already have
            product photos — from your supplier, from a studio shoot, or from a
            quick iPhone capture. AI image-to-video models like Kling 2.6 and
            Wan 2.5 can take those static images and generate believable motion
            around them: a perfume bottle that slowly rotates with light refracting
            through the glass, a sneaker that floats in a void with dynamic
            lighting sweeping across it, a skincare tube with water droplets
            forming and rolling down the surface.
          </p>
          <p>
            This workflow costs the same as text-to-video and takes no additional
            setup. Upload your product photo, describe the motion you want, hit
            Generate. You've just turned a supplier image into a $500-equivalent
            product video in 60 seconds.
          </p>

          <h3>Volume is the New Competitive Advantage in Paid Social</h3>
          <p>
            In the era of Meta's Advantage+ and TikTok's Smart Performance
            Campaigns, creative volume has become the single biggest lever for
            performance marketers. The algorithm needs creative diversity to find
            your highest-performing variant. Brands running 10–20 video creatives
            per campaign consistently outperform brands running 2–3. Previously,
            this required either a massive content budget or a large in-house
            creative team. With AI video generation, a solo Shopify merchant can
            now generate 20 video variants in a single afternoon at a cost of
            roughly $5–$10 total. That's a genuine competitive asymmetry that
            wasn't available 18 months ago.
          </p>

          <h3>The Shopify-Specific Opportunity: Product Page Video</h3>
          <p>
            Beyond paid advertising, there's an often-overlooked conversion
            opportunity sitting directly on your Shopify product page. Studies
            consistently show that product pages with video see{" "}
            <strong>64–85% higher conversion rates</strong> compared to
            text-and-image-only pages. Shopify's native video support in product
            listings, combined with the new "Shop" tab features, means that a
            10-second autoplay video above the fold can be the difference between
            a 1.5% and 3% conversion rate — which at scale is the difference
            between a breakeven store and a profitable one.
          </p>

          <h3>TikTok Shop Integration and Social Commerce</h3>
          <p>
            TikTok Shop has become one of the fastest-growing ecommerce channels
            globally. In 2025–2026, TikTok Shop sellers who use video content
            in their listings report dramatically higher impressions and
            algorithmic push from TikTok's commerce algorithm. The trick is
            quantity and authenticity — TikTok's algorithm rewards fresh,
            frequently updated video content. AI video generation makes it
            economically viable to produce 3–5 new product videos per week for
            your TikTok Shop listings, keeping your algorithmic score high and
            your product visibility strong.
          </p>

          <h3>Amazon A+ Content and Video Listings</h3>
          <p>
            Amazon's A+ Content (formerly Enhanced Brand Content) now supports
            video in product listings. Amazon itself reports that product listings
            with video see a <strong>9.7% lift in conversion rate</strong> on
            average — and for competitive categories like electronics, beauty,
            and home goods, that number climbs significantly higher. The barrier
            was always producing the video. With AI generation, a 15-second
            product demo video for your Amazon listing can be created in a single
            afternoon and uploaded the same day.
          </p>

          <h3>Prompt Engineering for Ecommerce Video Ads</h3>
          <p>
            Getting great results from AI video generation for ecommerce requires
            thinking like a cinematographer, not a copywriter. The most effective
            ecommerce video prompts share a consistent structure:
          </p>
          <ol>
            <li>
              <strong>Shot type + subject:</strong> "Close-up of a glass diffuser
              bottle" — specify whether you want macro, wide, aerial, POV, etc.
            </li>
            <li>
              <strong>Setting + surface:</strong> "on a black marble surface" or
              "floating in a white void" — the environment dramatically changes
              the mood and perceived brand tier.
            </li>
            <li>
              <strong>Lighting mood:</strong> "warm golden hour light," "dramatic
              studio backlighting," "soft diffused daylight" — lighting is
              everything in product photography, and AI models respond
              exceptionally well to specific lighting direction.
            </li>
            <li>
              <strong>Motion description:</strong> "slow 360° rotation," "product
              drops into frame with splash," "camera slowly pushes in" — describe
              what moves, not just what's there.
            </li>
            <li>
              <strong>Aesthetic reference:</strong> "luxury beauty campaign,"
              "Nike commercial style," "hygge lifestyle editorial" — giving the
              AI a reference aesthetic dramatically improves output coherence.
            </li>
          </ol>

          <h3>The ROI Case for AI Video Ads: A Simple Math Exercise</h3>
          <p>
            Let's run the numbers for a typical Shopify store spending $1,000/month
            on paid social ads:
          </p>
          <ul>
            <li>
              Traditional approach: $300–$500 per video ad × 3 creatives = $900–$1,500
              monthly creative spend, leaving $0–$100 for actual media.
            </li>
            <li>
              AI video approach: $9/month Scenith plan (300 credits) = 6 full
              video ads at Kling 2.6 quality or 13 ads at Wan 2.5 quality.
              Full $1,000 stays in your media budget.
            </li>
            <li>
              Performance delta: Running 6–13 video variants vs. 3 static images
              with a $1,000 budget typically yields 2–4× more conversion data
              in the same time period, allowing for faster scaling.
            </li>
          </ul>
          <p>
            The compounding effect of creative abundance — more variants, faster
            iteration, more algorithmic data — is what separates the Shopify
            stores growing 3× year-over-year from the ones stuck at the same
            revenue for 18 months.
          </p>

          <h3>
            Combining AI Voice + AI Image + AI Video for a Full Content Stack
          </h3>
          <p>
            The most sophisticated ecommerce content operations in 2026 are
            using all three layers of AI content generation together. Start with
            an <strong>AI image</strong> for the hero visual and static ad
            creative. Animate it with <strong>AI video</strong> for dynamic ad
            variants. Add an <strong>AI voiceover</strong> for the TikTok and
            YouTube Shorts versions. All three — image, video, voice — are
            available under one login and one credit balance on Scenith, which is
            the primary reason leading DTC brands use it instead of managing
            separate subscriptions to Midjourney, Runway, and ElevenLabs.
          </p>

          <div className="eva-editorial-cta">
            <p>
              <strong>Ready to stop losing to competitors with better video ads?</strong>
            </p>
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=editorial_cta&utm_campaign=ecommerce_video_ads_shopify"
              className="eva-inline-cta"
            >
              🎬 Generate Your First Product Video Ad Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="eva-section eva-section--alt">
        <div className="eva-container">
          <h2 className="eva-h2">
            Frequently Asked Questions — AI Video Ads for Shopify
          </h2>
          <div className="eva-faq-list">
            {FAQ.map((item) => (
              <details className="eva-faq-item" key={item.q}>
                <summary className="eva-faq-q">{item.q}</summary>
                <p className="eva-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="eva-section eva-section--final">
        <div className="eva-hero-noise" aria-hidden="true" />
        <div className="eva-container eva-final-inner">
          <h2 className="eva-h2 eva-h2--light">
            Your competitors are already using AI video ads.
          </h2>
          <p className="eva-section-sub eva-section-sub--light" style={{ maxWidth: 560, margin: "0 auto 36px" }}>
            Generate your first ecommerce product video in 60 seconds. 50 free
            credits included — no credit card, no watermarks, full commercial
            rights.
          </p>
          <a
            href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=final_cta&utm_campaign=ecommerce_video_ads_shopify"
            className="eva-mega-cta eva-mega-cta--center"
          >
            <span className="eva-cta-inner">
              <span className="eva-cta-icon">🛍️</span>
              <span className="eva-cta-text">
                <strong>Start Generating Free →</strong>
                <small>
                  Kling 2.6 · Veo 3.1 · Wan 2.5 · Grok Imagine — all in one place
                </small>
              </span>
            </span>
            <span className="eva-cta-glow" aria-hidden="true" />
          </a>
          <div className="eva-trust-row">
            <span>✅ No credit card</span>
            <span>✅ Commercial rights included</span>
            <span>✅ MP4 download</span>
            <span>✅ 1080p quality</span>
          </div>
        </div>
      </section>

      {/* ── SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI Ecommerce Video Ads Generator for Shopify",
            description:
              "Generate AI-powered product video ads for Shopify, WooCommerce, and Amazon. Supports TikTok, Meta, Instagram Reels, and YouTube Shorts formats.",
            url: "https://scenith.in/tools/ecommerce-video-ads-generator-shopify",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "Scenith AI Video Generator",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "50 free credits on signup",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://scenith.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tools",
                  item: "https://scenith.in/tools",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Ecommerce Video Ads Generator",
                  item: "https://scenith.in/tools/ecommerce-video-ads-generator-shopify",
                },
              ],
            },
          }),
        }}
      />
    </main>
  );
}