// app/tools/instagram-faceless-video-generation-tool/page.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./InstagramFacelessVideo.css";

export default function InstagramFacelessVideoPage() {
  const router = useRouter();

  const handleGenerateClick = () => {
    const prompt = "A cinematic slow-motion shot of a quiet Japanese garden in the rain, droplets falling on a koi pond, lush green moss, warm lantern light, peaceful aesthetic, ultra-realistic, 9:16";
    router.push(`/create-ai-content?tab=video&text=${encodeURIComponent(prompt)}&aspect=9:16&duration=10`);
  };

  return (
    <div className="ifv-page">
      {/* Ambient Background */}
      <div className="ifv-ambient" aria-hidden="true">
        <div className="ifv-mesh-1" />
        <div className="ifv-mesh-2" />
        <div className="ifv-scanlines" />
      </div>

      <div className="ifv-container">
        {/* Breadcrumb */}
        <nav className="ifv-breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <span className="ifv-bc-sep">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <span className="ifv-bc-sep">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Faceless Instagram Video Tool</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="ifv-hero">
          <div className="ifv-hero-tags">
            <span className="ifv-tag ifv-tag-primary">♾️ Faceless Creator</span>
            <span className="ifv-tag ifv-tag-free">✨ 3800+ Creators</span>
            <span className="ifv-tag ifv-tag-format">📱 9:16 Reels Native</span>
          </div>

          <h1 className="ifv-hero-h1">
            <span className="ifv-h1-pre">The #1</span>
            <span className="ifv-h1-main">Faceless Instagram</span>
            <span className="ifv-h1-main ifv-h1-accent">Reels Generator</span>
          </h1>

          <p className="ifv-hero-desc">
            Generate scroll-stopping, cinematic Instagram Reels without showing your face. 
            <strong> AI turns your text prompts into 9:16 videos </strong> 
            ready to post. No camera, no crew, no stress. Used by 3800+ creators to grow faceless channels.
          </p>

          <button onClick={handleGenerateClick} className="ifv-hero-cta" aria-label="Generate your first Reel for free">
            <span className="ifv-cta-content">
              <span className="ifv-cta-icon">📱</span>
              <span className="ifv-cta-words">
                <strong>Generate Your First Reel — Free</strong>
                <small>9:16 Portrait · AI Video · No Face Needed · Instant MP4</small>
              </span>
              <span className="ifv-cta-arrow">→</span>
            </span>
          </button>

          <div className="ifv-hero-trust">
            <span>📱 9:16 Reels-Ready</span>
            <span>⚡ 60-90 second generation</span>
            <span>🚫 Zero watermarks</span>
            <span>♾️ Commercial rights</span>
          </div>

          {/* Demo Mock */}
          <div className="ifv-demo-wrap">
            <div className="ifv-demo-label">
              <span className="ifv-demo-dot" />
              <span>AI-Generated Sample — Instagram Reels Format</span>
            </div>
            <div className="ifv-demo-phone">
              <div className="ifv-phone-bezel">
                <div className="ifv-phone-notch" />
              </div>
              <div className="ifv-phone-screen">
                <video
                  src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="ifv-demo-video"
                />
                <div className="ifv-instagram-ui">
                  <span>@scenith_ai</span>
                  <span>❤️ 12.4K</span>
                </div>
              </div>
            </div>
            <p className="ifv-demo-caption">
              Every video is uniquely generated from your prompt — no templates, no stock footage.
            </p>
          </div>
        </section>

        {/* Why Faceless + AI Section */}
        <section className="ifv-why-section">
          <div className="ifv-section-eyebrow">📈 THE OPPORTUNITY</div>
          <h2 className="ifv-section-title">Why Faceless Instagram Reels Are Exploding in 2026</h2>
          <p className="ifv-section-desc">
            The algorithm doesn't care if you show your face. It cares about watch time and saves. 
            Here's why faceless AI video is the smartest content strategy right now.
          </p>

          <div className="ifv-why-grid">
            <div className="ifv-why-card">
              <div className="ifv-why-icon">⚡</div>
              <h3>Volume Without Burnout</h3>
              <p>
                Instagram rewards consistency. Posting 5-7 Reels per week is the minimum for growth. 
                Filming that many videos manually leads to burnout in weeks. AI reduces production time 
                from hours to minutes, allowing sustainable daily posting.
              </p>
            </div>
            <div className="ifv-why-card">
              <div className="ifv-why-icon">🎨</div>
              <h3>Visually Impossible Content Wins</h3>
              <p>
                The highest-performing Reels show things that don't exist: ancient civilizations, 
                futuristic cities, deep ocean creatures, cosmic events. AI generates these scenes 
                instantly. No budget, no CGI team, just a prompt.
              </p>
            </div>
            <div className="ifv-why-card">
              <div className="ifv-why-icon">🧠</div>
              <h3>Instagram is Format-Agnostic</h3>
              <p>
                The algorithm judges Reels on completion rate, shares, saves, and replays — not on 
                whether a human face appears. Faceless channels in niches like history, space, 
                and motivation regularly outperform face-first creators.
              </p>
            </div>
            <div className="ifv-why-card">
              <div className="ifv-why-icon">💰</div>
              <h3>Multiple Monetization Paths</h3>
              <p>
                From Instagram's Bonus Programs to brand deals, affiliate marketing, and digital products — 
                faceless channels are fully monetizable. Some creators in our community earn passive 
                income from libraries of 500+ AI Reels.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="ifv-how-section">
          <div className="ifv-section-eyebrow">⚙️ HOW IT WORKS</div>
          <h2 className="ifv-section-title">From Prompt to Published Reel in 4 Steps</h2>
          <p className="ifv-section-desc">
            Scenith's AI is built for speed. Here's exactly how to go from an idea to a published 
            Instagram Reel in under 30 minutes.
          </p>

          <div className="ifv-steps">
            <div className="ifv-step">
              <div className="ifv-step-node">1</div>
              <div className="ifv-step-content">
                <div className="ifv-step-icon">✍️</div>
                <h3>Write a Cinematic Prompt</h3>
                <p>Describe your scene in detail: subject, environment, lighting, camera movement, and mood. The more specific, the better the output.</p>
                <div className="ifv-step-time">⏱ Time: 2-3 minutes</div>
              </div>
            </div>
            <div className="ifv-step">
              <div className="ifv-step-node">2</div>
              <div className="ifv-step-content">
                <div className="ifv-step-icon">⚙️</div>
                <h3>Set Reels Format (9:16)</h3>
                <p>Select 9:16 aspect ratio, choose 5 or 10-second duration, and pick your AI model tier based on quality needs.</p>
                <div className="ifv-step-time">⏱ Time: 1 minute</div>
              </div>
            </div>
            <div className="ifv-step">
              <div className="ifv-step-node">3</div>
              <div className="ifv-step-content">
                <div className="ifv-step-icon">🤖</div>
                <h3>Generate & Download</h3>
                <p>Hit Generate. In 60-90 seconds, your MP4 clip is ready. Download immediately, watermark-free.</p>
                <div className="ifv-step-time">⏱ Time: 60-90 seconds per clip</div>
              </div>
            </div>
            <div className="ifv-step">
              <div className="ifv-step-node">4</div>
              <div className="ifv-step-content">
                <div className="ifv-step-icon">🚀</div>
                <h3>Assemble & Post</h3>
                <p>Combine clips in any editor (CapCut is free), add trending audio or voiceover, and publish to Instagram Reels.</p>
                <div className="ifv-step-time">⏱ Time: 15 minutes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Niche Playbooks (Long SEO) */}
        <section className="ifv-niches-section">
          <div className="ifv-section-eyebrow">🎯 NICHE PLAYBOOKS</div>
          <h2 className="ifv-section-title">10 Best Faceless Niches for Instagram Reels in 2026</h2>
          <p className="ifv-section-desc">
            These niches have the highest engagement rates for faceless AI video content. 
            Each comes with a proven prompt template and realistic growth expectations.
          </p>

          <div className="ifv-niches-grid">
            <div className="ifv-niche-card ifv-niche-elite">
              <div className="ifv-niche-tier">🏆 ELITE TIER</div>
              <div className="ifv-niche-icon">🏛️</div>
              <h3>Ancient History & Lost Civilizations</h3>
              <p>The single highest-save category on Instagram. AI recreates Rome, Egypt, and the Indus Valley with cinematic detail. Save rates often exceed 20%.</p>
              <div className="ifv-niche-metrics"><strong>Save Rate:</strong> 15-25% &nbsp;|&nbsp; <strong>Competition:</strong> Very Low</div>
              <div className="ifv-niche-prompt">Prompt: "Roman Colosseum at peak hour AD 80, 80,000 spectators, golden afternoon light, aerial cinematic, photorealistic, 9:16"</div>
            </div>
            <div className="ifv-niche-card ifv-niche-elite">
              <div className="ifv-niche-tier">🏆 ELITE TIER</div>
              <div className="ifv-niche-icon">🕉️</div>
              <h3>Indian Mythology & Spirituality</h3>
              <p>Massive underserved audience. Divine visuals from the Ramayana and Mahabharata resonate deeply and drive extraordinary engagement.</p>
              <div className="ifv-niche-metrics"><strong>Save Rate:</strong> 20%+ &nbsp;|&nbsp; <strong>Audience:</strong> 1.4B+</div>
              <div className="ifv-niche-prompt">Prompt: "Lord Krishna playing flute on Vrindavan ghat at midnight, divine glow, painterly cinematic style, 9:16"</div>
            </div>
            <div className="ifv-niche-card ifv-niche-strong">
              <div className="ifv-niche-tier">🥈 STRONG TIER</div>
              <div className="ifv-niche-icon">🌌</div>
              <h3>Space & Astrophysics</h3>
              <p>Highest share rate. Black holes, nebulas, and exoplanets. Viewers share these videos because they're genuinely awe-inspiring.</p>
              <div className="ifv-niche-prompt">Prompt: "Supermassive black hole accretion disc, relativistic jets, Milky Way core behind, ultra-cinematic, 9:16"</div>
            </div>
            <div className="ifv-niche-card ifv-niche-strong">
              <div className="ifv-niche-tier">🥈 STRONG TIER</div>
              <div className="ifv-niche-icon">👻</div>
              <h3>Horror & Paranormal</h3>
              <p>Highest completion rate. Fear compels viewers to watch to the end. Abandoned asylums, creepy forests, dark history.</p>
              <div className="ifv-niche-prompt">Prompt: "Abandoned asylum corridor, flickering light, mist on floor, slow dolly shot, desaturated, horror atmosphere, 9:16"</div>
            </div>
          </div>
        </section>

        {/* Monetization Section */}
        <section className="ifv-money-section">
          <div className="ifv-section-eyebrow">💰 MONETIZATION</div>
          <h2 className="ifv-section-title">How Faceless Creators Make Money</h2>
          <p className="ifv-section-desc">
            Instagram offers multiple income streams for faceless channels. Here's how creators in our community are monetizing.
          </p>

          <div className="ifv-money-streams">
            <div className="ifv-money-stream">
              <h3>Instagram Bonus Programs</h3>
              <p>Invite-only programs pay for Reels views and engagement. Typical rates range from $0.01-$0.05 per 1,000 qualified views. A channel with 5M monthly views can earn $50-$250/month from bonuses alone.</p>
            </div>
            <div className="ifv-money-stream">
              <h3>Brand Partnerships</h3>
              <p>At 50K followers, brand deals become regular. Faceless channels in premium niches (finance, tech, wellness) command $500-$5,000 per sponsored Reel.</p>
            </div>
            <div className="ifv-money-stream">
              <h3>Affiliate Marketing</h3>
              <p>Promote products naturally within your AI visuals. A 100K-follower channel can earn $1,000-$10,000/month from affiliate commissions.</p>
            </div>
          </div>

          <div className="ifv-income-table-wrap">
            <h3>Realistic Income Estimates (Faceless Channels)</h3>
            <table className="ifv-income-table">
              <thead><tr><th>Followers</th><th>Monthly Views</th><th>Bonus Program</th><th>Brand Deals</th><th>Affiliate</th><th>Est. Total</th></tr></thead>
              <tbody>
                <tr><td>0-10K</td><td>100K-1M</td><td>₹0-₹2K</td><td>—</td><td>₹0-₹5K</td><td>₹0-₹7K</td></tr>
                <tr><td>10K-50K</td><td>1M-10M</td><td>₹2K-₹15K</td><td>₹5K-₹25K</td><td>₹5K-₹25K</td><td>₹12K-₹65K</td></tr>
                <tr className="ifv-it-highlight"><td>50K-200K</td><td>10M-50M</td><td>₹15K-₹80K</td><td>₹25K-₹2L</td><td>₹25K-₹1L</td><td>₹65K-₹3.8L</td></tr>
                <tr><td>200K+</td><td>50M+</td><td>₹80K-₹5L+</td><td>₹2L-₹15L+</td><td>₹1L-₹5L+</td><td>₹3.8L-₹25L+</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ifv-faq-section">
          <div className="ifv-section-eyebrow">❓ FAQ</div>
          <h2 className="ifv-section-title">Frequently Asked Questions</h2>
          <div className="ifv-faq-grid">
            <div className="ifv-faq-item"><h3>Can I grow on Instagram without showing my face?</h3><p>Yes. Thousands of faceless channels have millions of followers. The algorithm distributes content based on engagement, not on whether a face appears.</p></div>
            <div className="ifv-faq-item"><h3>Does Instagram allow AI-generated content?</h3><p>Yes. Meta's current policies permit AI-generated content. You should use the "AI-generated" label when required, especially for realistic depictions of people or events.</p></div>
            <div className="ifv-faq-item"><h3>What resolution does Scenith output for Reels?</h3><p>1080x1920 (full 9:16 portrait), matching Instagram's native Reels resolution. Direct upload, no conversion needed.</p></div>
            <div className="ifv-faq-item"><h3>How many Reels should I post per week?</h3><p>For growth, 5-7 Reels per week is optimal. With AI, you can generate a week's content in one sitting.</p></div>
            <div className="ifv-faq-item"><h3>How do I add voiceover to faceless Reels?</h3><p>Record your own voice or use Scenith's AI voice tool. Add the audio track in CapCut before posting.</p></div>
            <div className="ifv-faq-item"><h3>Is Scenith's tool really free to start?</h3><p>Yes. New users get free credits to generate their first videos. No credit card required.</p></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="ifv-final-section">
          <div className="ifv-final-inner">
            <h2 className="ifv-final-title">Your First Viral Reel Starts Here.</h2>
            <p className="ifv-final-desc">
              Join 3800+ creators building faceless Instagram channels with Scenith AI. 
              Generate your first 9:16 Reel — no camera, no face, no editing skills required.
            </p>
            <button onClick={handleGenerateClick} className="ifv-final-cta-btn">
              <span className="ifv-final-btn-content">
                <span>📱</span>
                <span><strong>Generate Your First Reel — Free</strong><br /><small>9:16 AI Video · Instant MP4 · No Card Required</small></span>
                <span>→</span>
              </span>
            </button>
            <div className="ifv-final-trust-row">
              <span>📱 9:16 Native</span>
              <span>🤖 Cinematic AI</span>
              <span>🚫 No face needed</span>
              <span>⚡ Fast generation</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}