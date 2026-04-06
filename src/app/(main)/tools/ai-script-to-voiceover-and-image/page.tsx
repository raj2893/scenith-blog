// app/tools/ai-script-to-voiceover-and-image/page.tsx
// Static SEO page — no client-side JS needed.
// All content is rendered server-side for maximum SEO indexing.

import type { Metadata } from "next";
import Link from "next/link";
import "./ai-script-to-voiceover-and-image.css";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Script to Voiceover & Image Generator — Convert Scripts Instantly | Scenith",
  description:
    "Transform any written script into a professional AI voiceover and stunning matching image in seconds. No recording booth, no designer. Just paste your script, click generate. Free to start.",
  keywords: [
    "ai script to voiceover",
    "script to voice generator",
    "ai voiceover from script",
    "text to speech script",
    "ai script to image",
    "script to visual generator",
    "ai narration generator",
    "scriptwriter ai tool",
    "voiceover generator free",
    "ai content creator from script",
    "convert script to audio",
    "youtube script to voiceover",
    "podcast script to audio ai",
    "ad script to voiceover",
    "ai voice and image generator",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-script-to-voiceover-and-image",
  },
  openGraph: {
    title: "AI Script to Voiceover & Image Generator | Scenith",
    description:
      "Paste your script. Pick a voice. Generate a matching image. AI-powered — done in under 30 seconds. Free to start on Scenith.",
    url: "https://scenith.in/tools/ai-script-to-voiceover-and-image",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Script to Voiceover & Image — Scenith",
    description:
      "Turn any written script into a voiced narration + matching AI image. YouTube, podcasts, ads, e-learning — instant and free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const CREATE_AI_CONTENT_URL =
  "https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=cta&utm_campaign=script_to_voiceover_image&utm_content=hero_cta";

const CREATE_AI_IMAGE_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=cta&utm_campaign=script_to_voiceover_image&utm_content=image_section_cta";

// ─── Structured Data ──────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-script-to-voiceover-and-image",
      url: "https://scenith.in/tools/ai-script-to-voiceover-and-image",
      name: "AI Script to Voiceover & Image Generator",
      description:
        "Convert any written script into a professional AI voiceover and matching AI-generated image in seconds using Scenith.",
      isPartOf: { "@id": "https://scenith.in" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://scenith.in/og-script-to-voiceover.png",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Script to Voiceover & Image",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start — 50 credits on sign-up, no card required.",
      },
      featureList: [
        "Script to AI voiceover in 40+ voices",
        "Text-to-image from script description",
        "20+ language support",
        "Google, OpenAI, Azure voice providers",
        "7 AI image models including GPT Image 1, Imagen 4, FLUX",
        "Instant MP3 and PNG download",
        "Commercial use rights included",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I turn my YouTube script into a voiceover with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith lets you paste any YouTube script and convert it to a natural AI voiceover using Google, OpenAI, or Azure voices. Choose from 40+ voices in 20+ languages, adjust speed, and download an MP3 file instantly — no recording equipment needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI generate an image from a script description?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. On Scenith's image tab, you can describe any scene or visual from your script and generate a matching image using models like GPT Image 1, Imagen 4, FLUX 1.1 Pro, or Grok Aurora. The result is a high-resolution PNG you can use as a thumbnail, slide, or article visual.",
          },
        },
        {
          "@type": "Question",
          name: "Is the AI voiceover and image generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Scenith gives you 50 free credits on sign-up with no credit card required. These credits cover both voice generation and image generation. Paid plans start at $9/month and include 300 credits for unlimited use across voice, image, and video.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to turn a script into a voiceover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI voice generation on Scenith completes in approximately 2–4 seconds. Image generation takes 10–30 seconds depending on the model selected. The entire workflow from pasting a script to having both a voiceover and a visual typically takes under 45 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What types of scripts work best with AI voiceover generators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Virtually any written script works well with AI voiceover generators. This includes YouTube video scripts, podcast episode intros, explainer video narration, ad copy, e-learning course modules, audiobook excerpts, product demo scripts, and corporate training content. The key is writing in natural spoken language rather than formal written English.",
          },
        },
      ],
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function AiScriptToVoiceoverAndImagePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="svi-page">

        {/* ═══════ HERO ═══════════════════════════════════════════════════════ */}
        <section className="svi-hero">
          <div className="svi-hero-inner">
            <div className="svi-eyebrow">
              <span>✦</span>
              <span>AI Content Creation · 2026</span>
              <span>✦</span>
            </div>

            <h1 className="svi-hero-title">
              Turn Your Script into a <br />
              <em>Voiceover & Image</em><br />
              in Seconds
            </h1>

            <p className="svi-hero-sub">
              You wrote the script. Now let AI handle the rest.{" "}
              <strong>Paste your text, pick a voice, describe your visual</strong> — and
              walk away with a professional narration and a stunning matched image.
              No microphone. No designer. No waiting.
            </p>

            <div className="svi-cta-block">
              <a
                href={CREATE_AI_CONTENT_URL}
                className="svi-cta-primary"
                rel="noopener noreferrer"
              >
                <span>🎙️ Generate Your Voiceover + Image Free</span>
                <span className="svi-cta-arrow">→</span>
              </a>
              <div className="svi-cta-sub-note">
                <span>✓ 50 free credits on sign-up</span>
                <span>✓ No credit card required</span>
                <span>✓ Instant MP3 + PNG download</span>
              </div>
            </div>

            <div className="svi-hero-stats">
              <div className="svi-stat">
                <div className="svi-stat-num">40+</div>
                <div className="svi-stat-label">AI Voices</div>
              </div>
              <div className="svi-stat-divider" />
              <div className="svi-stat">
                <div className="svi-stat-num">20+</div>
                <div className="svi-stat-label">Languages</div>
              </div>
              <div className="svi-stat-divider" />
              <div className="svi-stat">
                <div className="svi-stat-num">7</div>
                <div className="svi-stat-label">Image Models</div>
              </div>
              <div className="svi-stat-divider" />
              <div className="svi-stat">
                <div className="svi-stat-num">~3s</div>
                <div className="svi-stat-label">Voice Generation</div>
              </div>
              <div className="svi-stat-divider" />
              <div className="svi-stat">
                <div className="svi-stat-num">Free</div>
                <div className="svi-stat-label">To Start</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ WORKFLOW STRIP ═════════════════════════════════════════════ */}
        <div className="svi-workflow">
          <div className="svi-workflow-inner">
            <div className="svi-wf-step">
              <div className="svi-wf-icon">✍️</div>
              <div className="svi-wf-text">
                <strong>1. Paste Your Script</strong>
                Any written text
              </div>
            </div>
            <div className="svi-wf-arrow">→</div>
            <div className="svi-wf-step">
              <div className="svi-wf-icon">🎙️</div>
              <div className="svi-wf-text">
                <strong>2. Pick a Voice</strong>
                40+ AI voices
              </div>
            </div>
            <div className="svi-wf-arrow">→</div>
            <div className="svi-wf-step">
              <div className="svi-wf-icon">🖼️</div>
              <div className="svi-wf-text">
                <strong>3. Describe Your Visual</strong>
                Text-to-image prompt
              </div>
            </div>
            <div className="svi-wf-arrow">→</div>
            <div className="svi-wf-step">
              <div className="svi-wf-icon">📥</div>
              <div className="svi-wf-text">
                <strong>4. Download Both</strong>
                MP3 + PNG instantly
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ MAIN CONTENT ═══════════════════════════════════════════════ */}
        <main className="svi-main">

          {/* ── What this page is about ── */}
          <section className="svi-section">
            <div className="svi-section-label">The Problem It Solves</div>
            <h2 className="svi-section-title">
              You Already Have the Script.<br />
              <em>The Hard Part Shouldn't Be Everything Else.</em>
            </h2>
            <div className="svi-prose">
              <p>
                Every content creator, marketer, educator, and entrepreneur knows this feeling:
                you've spent hours writing a tight, polished script. The words are good. The
                message is clear. But now you need to actually <strong>produce</strong> it — and
                suddenly you're staring at a to-do list that never ends.
              </p>
              <p>
                You need a voiceover. That means recording equipment, a quiet room, multiple
                takes, audio editing software, noise reduction, levelling, and export. Or it
                means hiring a voice actor, briefing them, waiting days, paying $100–$500+,
                and hoping their interpretation matches what you had in mind.
              </p>
              <p>
                Then you need a visual. A thumbnail. An article cover image. A slide background.
                That means either hiring a designer (another $50–$300 and another 48-hour wait),
                or wrestling with Canva templates that look like every other piece of content on
                the internet.
              </p>
              <p>
                In 2026, this entire workflow is solved in one tab.{" "}
                <strong>Scenith's AI Script to Voiceover & Image tool</strong> converts your
                written script into a natural-sounding AI narration and a high-resolution
                AI-generated image — simultaneously, in under 30 seconds, for free.
              </p>
              <p>
                This isn't about replacing creativity. It's about eliminating the production
                bottleneck that keeps creative people from shipping content consistently.
              </p>
            </div>
          </section>

          {/* ── Mid-page CTA 1 ── */}
          <div className="svi-mid-cta">
            <div className="svi-mid-cta-text">
              <h3>Ready to hear your script out loud?</h3>
              <p>Pick from 40+ AI voices in 20+ languages. Download MP3 in 3 seconds. Free to start.</p>
            </div>
            <a href={CREATE_AI_CONTENT_URL} className="svi-cta-secondary" rel="noopener noreferrer">
              🎙️ Try AI Voiceover Free →
            </a>
          </div>

          {/* ── AI Voiceover deep section ── */}
          <section className="svi-section">
            <div className="svi-section-label">AI Voiceover from Script</div>
            <h2 className="svi-section-title">
              What Makes a Great <em>AI Voiceover</em> from a Script — and How to Get One
            </h2>
            <div className="svi-prose">
              <p>
                AI text-to-speech has evolved dramatically. In 2023, the tell-tale robotic
                cadence was still obvious. By 2025, the gap between a professional human voice
                actor and a well-configured AI voice had narrowed to the point where most
                listeners couldn't reliably tell the difference on a typical YouTube video,
                podcast, or e-learning module. In 2026, the best AI voices are indistinguishable
                from high-quality human recordings.
              </p>
              <p>
                But the quality of your AI voiceover depends heavily on <strong>three things</strong>:
                the underlying model you choose, the voice character you select, and how well
                your script is written for spoken delivery. Let's break all three down.
              </p>

              <h3>Choosing the Right AI Voice Model for Your Script</h3>
              <p>
                Not all AI voice engines are built the same. Scenith gives you access to three
                major providers on one platform — each with distinct strengths:
              </p>
              <ul>
                <li>
                  <strong>Google Text-to-Speech:</strong> The broadest language coverage available.
                  Over 20 languages with multiple regional accents within each. Ideal for multilingual
                  content, global brand campaigns, and any project where language variety is critical.
                  Google WaveNet and Neural2 voices produce natural intonation on longer sentences.
                </li>
                <li>
                  <strong>OpenAI TTS:</strong> Exceptional prosody and emotional range, particularly
                  in English. OpenAI's voices feel more conversational and less "broadcast-formal"
                  than many alternatives — which makes them ideal for YouTube voiceovers, podcast
                  intros, and ad scripts where you want warmth rather than authority. Available on
                  paid plans.
                </li>
                <li>
                  <strong>Azure Neural TTS:</strong> Microsoft's enterprise-grade neural voices.
                  Particularly strong for professional corporate content, e-learning, and any
                  context where clarity and precise diction matter more than conversational warmth.
                  Azure also offers some of the best non-English voices for Hindi, Arabic, Mandarin,
                  and many European languages. Available on paid plans.
                </li>
              </ul>

              <h3>Writing Scripts That Sound Great When Read by AI</h3>
              <p>
                The single most underrated skill in AI voiceover production is writing a script
                that sounds natural when spoken. Most writers unconsciously write for the eye,
                not the ear. Here's what to do differently when writing for AI narration:
              </p>
              <ul>
                <li>
                  <strong>Use contractions:</strong> "You're going to love this" sounds more natural
                  than "You are going to love this" when spoken aloud — by both humans and AI.
                </li>
                <li>
                  <strong>Break up long sentences:</strong> AI voices, like human voices, handle
                  short declarative sentences better than complex compound sentences with multiple
                  clauses. Keep each sentence to one idea whenever possible.
                </li>
                <li>
                  <strong>Spell out numbers and abbreviations:</strong> Write "twenty-five percent"
                  rather than "25%" and "for example" rather than "e.g." — AI reads what it sees,
                  so explicit text produces better results.
                </li>
                <li>
                  <strong>Use punctuation as a breathing guide:</strong> Commas and periods control
                  pacing. A comma creates a brief pause; a period creates a longer one. Use them
                  intentionally to set the rhythm you want.
                </li>
                <li>
                  <strong>Avoid technical jargon in flowing prose:</strong> Acronyms and industry
                  shorthand that work fine in print can sound clunky when spoken. Expand them or
                  replace them with plain language.
                </li>
                <li>
                  <strong>Test short sections first:</strong> Before generating the full voiceover
                  for a 5-minute script, test your opening paragraph. If the AI voice misreads
                  something, it's easier to tweak the script now than after you've generated the
                  full file.
                </li>
              </ul>

              <h3>Speed Control: One Feature Most People Ignore</h3>
              <p>
                Scenith lets you adjust playback speed from 0.5× to 4.0× during generation (with
                higher speeds available on paid plans). This is more powerful than it sounds.
                For YouTube, most creators target 1.0–1.25× for a natural pace. For fast-paced
                advertising copy, 1.25–1.5× can add energy. For e-learning and instructional
                content, sticking to 0.9–1.0× gives listeners time to absorb each point.
                Experiment with speed as part of your production process, not as an afterthought.
              </p>
            </div>
          </section>

          {/* ── Voice use case scenarios ── */}
          <section className="svi-section">
            <div className="svi-section-label">Script → Voice Use Cases</div>
            <h2 className="svi-section-title">
              Every Script Type Has a <em>Perfect AI Voice</em>
            </h2>
            <p className="svi-section-body">
              Different content formats demand different vocal characters. Here's how creators
              across industries are using AI script-to-voiceover in their workflows right now.
            </p>

            <div className="svi-voice-scenarios">
              {[
                {
                  emoji: "🎬",
                  title: "YouTube Faceless Channels",
                  desc: "Documentary-style narration for finance, history, science, and true crime channels. No face-reveal required — your script drives everything, and an AI voice delivers it with broadcast credibility.",
                },
                {
                  emoji: "🎙️",
                  title: "Podcast Episode Intros",
                  desc: "A punchy 30-second cold open to hook listeners before the main interview. Script it tight, voice it with energy, and use the same AI persona every episode to build a consistent show identity.",
                },
                {
                  emoji: "📣",
                  title: "Social Media Ad Scripts",
                  desc: "30–60 second voiceover ads for Facebook, Instagram, TikTok, and YouTube pre-roll. AI voices now pass the 'ad authenticity test' — listeners stay engaged rather than skipping.",
                },
                {
                  emoji: "📚",
                  title: "E-Learning & Online Courses",
                  desc: "Narrate lesson modules, course intros, and explainer sections without recording a word. One script + one Azure voice = a professional-sounding course that costs a fraction of studio recording.",
                },
                {
                  emoji: "📰",
                  title: "Blog Post & Article Audio",
                  desc: "Convert long-form written content into audio versions for accessibility and commuter audiences. Upload to Spotify, Apple Podcasts, or embed directly in your article.",
                },
                {
                  emoji: "🏢",
                  title: "Corporate Training Videos",
                  desc: "Onboarding content, compliance training, product knowledge modules. AI voices maintain consistent pronunciation of brand names and technical terms — something human voice actors sometimes struggle with.",
                },
                {
                  emoji: "📖",
                  title: "Audiobook Sample Chapters",
                  desc: "Test your manuscript as audio before committing to a full production budget. Generate sample chapters with different voice characters to find the right narrator persona for your book.",
                },
                {
                  emoji: "🛍️",
                  title: "Product Demo & Explainer Videos",
                  desc: "Walk potential customers through your SaaS product, physical product, or service offering with a clean, professional voiceover synchronized to your screen recording or demo animation.",
                },
              ].map((s) => (
                <div key={s.title} className="svi-scenario-card">
                  <div className="svi-scenario-emoji">{s.emoji}</div>
                  <div className="svi-scenario-title">{s.title}</div>
                  <div className="svi-scenario-desc">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="svi-tip">
              <strong>Pro tip:</strong> For YouTube faceless channels, the sweet spot is 150–180
              words per minute at 1.0× speed. Write your script at that density and your AI
              voiceover will feel natural without rushing through ideas. Most professional
              YouTube narrators land between 140 and 190 WPM — use Scenith's speed slider
              to hit that range precisely.
            </div>
          </section>

          {/* ── Mid-page CTA 2 ── */}
          <div className="svi-mid-cta">
            <div className="svi-mid-cta-text">
              <h3>Generate a matched image for your script</h3>
              <p>7 AI image models including GPT Image 1, Imagen 4, and FLUX. High-res PNG. Commercial use included.</p>
            </div>
            <a href={CREATE_AI_IMAGE_URL} className="svi-cta-secondary" rel="noopener noreferrer">
              🖼️ Try AI Image Generator Free →
            </a>
          </div>

          {/* ── AI Image from Script deep section ── */}
          <section className="svi-section">
            <div className="svi-section-label">AI Image from Script Description</div>
            <h2 className="svi-section-title">
              From Written Words to <em>Visual Content</em> — Without a Designer
            </h2>
            <div className="svi-prose">
              <p>
                The other half of the content production problem is visual. Written scripts
                need visual counterparts — thumbnails, cover images, slide backgrounds, social
                media cards, article headers. In most traditional workflows, this meant either
                a designer, a stock photo subscription (and settling for something generic), or
                hours in a design tool you barely know.
              </p>
              <p>
                AI image generation has changed this equation entirely. If you can describe a
                scene in words — and you already did, in your script — you can generate a
                high-resolution, commercially licensed image in under 30 seconds. You're not
                searching for something that approximately matches your vision. You're creating
                exactly what you had in mind.
              </p>

              <h3>How to Extract Image Prompts from Your Script</h3>
              <p>
                The fastest way to generate a matched visual for your script is to pull the
                most vivid descriptive sentence from your content and use that as your image
                prompt. This keeps your visual and audio content thematically unified — which
                is exactly what strong content branding requires.
              </p>
              <p>
                For example: if your YouTube script opens with "Imagine waking up in a
                glass-walled apartment overlooking a neon-lit Tokyo skyline at 3AM, your phone
                buzzing with notifications that tell you your passive income just cleared
                another $10,000 while you slept," your image prompt practically writes itself.
                That's an arresting thumbnail concept that directly reinforces the script's
                hook.
              </p>

              <h3>Choosing the Right Image Model for Script-Based Content</h3>
              <p>
                Different AI image models have different strengths. Scenith gives you access
                to seven, and here's how to think about them in the context of script-based
                content creation:
              </p>
            </div>

            <div className="svi-table-wrap">
              <table className="svi-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Best For</th>
                    <th>Style Strength</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>GPT Image 1 Medium</strong></td>
                    <td>YouTube thumbnails, ad visuals, social cards</td>
                    <td>Photorealistic, editorial</td>
                    <td>15–47cr</td>
                  </tr>
                  <tr>
                    <td><strong>Imagen 4 Standard</strong></td>
                    <td>Educational content, print-quality assets</td>
                    <td>Crisp, high-detail, photographic</td>
                    <td>15cr</td>
                  </tr>
                  <tr>
                    <td><strong>Imagen 4 Fast</strong></td>
                    <td>Rapid iteration, draft concepts</td>
                    <td>Clean, versatile</td>
                    <td>10cr</td>
                  </tr>
                  <tr>
                    <td><strong>FLUX 1.1 Pro</strong></td>
                    <td>Digital art, sci-fi, fantasy script visuals</td>
                    <td>Hyperrealistic cinematic</td>
                    <td>15cr</td>
                  </tr>
                  <tr>
                    <td><strong>Grok Aurora</strong></td>
                    <td>Portrait-style thumbnails, editorial imagery</td>
                    <td>2K photorealism, vivid</td>
                    <td>14cr</td>
                  </tr>
                  <tr>
                    <td><strong>Stability AI Core</strong></td>
                    <td>Artistic thumbnails, diverse aesthetic styles</td>
                    <td>Versatile, supports image-to-image</td>
                    <td>15cr</td>
                  </tr>
                  <tr>
                    <td><strong>GPT Image 1 Mini</strong></td>
                    <td>Quick drafts, bulk content production</td>
                    <td>Clean, fast, cost-efficient</td>
                    <td>10–15cr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="svi-prose">
              <h3>Script-to-Image Workflow: A Step-by-Step Example</h3>
              <p>
                Here's how a YouTube creator writing a video about "10 ways to make passive
                income in 2026" might use Scenith's AI Image Generator alongside their script:
              </p>
              <ul>
                <li>
                  <strong>Identify the hook moment in your script</strong> — the moment that's
                  most visually interesting or emotionally resonant. That's your thumbnail.
                </li>
                <li>
                  <strong>Translate the scene into visual language</strong> — instead of "make
                  money while you sleep," write something like: "Person sleeping in bed, laptop
                  screen glowing with rising graph charts, golden light from windows, cinematic
                  depth of field."
                </li>
                <li>
                  <strong>Add style and quality keywords</strong> — Scenith's style presets
                  (realistic, digital art, 3D render) do the heavy lifting, but appending
                  "4K, professional lighting, editorial photography" lifts the quality further.
                </li>
                <li>
                  <strong>Iterate quickly</strong> — generate 2–3 variants using different
                  aspect ratios (landscape 16:9 for article headers, square 1:1 for Instagram,
                  portrait 9:16 for Pinterest and TikTok covers).
                </li>
                <li>
                  <strong>Use image-to-video if you want motion</strong> — Scenith lets you
                  take any generated image directly to the video tab to animate it. Your static
                  thumbnail becomes a 5-second animated clip for YouTube intro branding.
                </li>
              </ul>
            </div>
          </section>

          {/* ── Image use case scenarios ── */}
          <section className="svi-section">
            <div className="svi-section-label">Script → Image Use Cases</div>
            <h2 className="svi-section-title">
              Every Script Type Needs a <em>Visual</em>
            </h2>
            <p className="svi-section-body">
              The visual you generate from your script serves a different purpose depending on
              where you're publishing. Here's how to think about image generation for each context.
            </p>

            <div className="svi-img-scenarios">
              {[
                {
                  emoji: "📺",
                  title: "YouTube Thumbnails",
                  desc: "High-contrast, high-impact images at 1280×720. Script-first thumbnails have an inherent advantage — they directly visualise what the video delivers, which boosts click-through rates from search.",
                },
                {
                  emoji: "📱",
                  title: "Social Media Graphics",
                  desc: "Square (1:1) for Instagram and Facebook, portrait (9:16) for Stories, TikTok, and Pinterest. AI images consistently outperform stock photography in scroll-stopping power.",
                },
                {
                  emoji: "📝",
                  title: "Blog & Article Headers",
                  desc: "Replace generic stock photos with original AI images that actually match your article's specific angle. Readers notice when the visual is specific, not generic.",
                },
                {
                  emoji: "🖥️",
                  title: "Presentation Slides",
                  desc: "Each section of your script deserves a matching visual. Generate a slide background or featured image for every major talking point — in minutes, not hours.",
                },
                {
                  emoji: "📧",
                  title: "Email Campaign Headers",
                  desc: "A unique header image per email significantly improves open-to-click rates. AI generation means you can produce a matched visual for every single send.",
                },
                {
                  emoji: "🎓",
                  title: "Online Course Thumbnails",
                  desc: "Module covers, chapter headers, and course card images. Consistency across a whole course is easy when you can generate matched images from each module's script with the same style preset.",
                },
                {
                  emoji: "📣",
                  title: "Ad Creative Variants",
                  desc: "A/B testing ad visuals is a cornerstone of performance marketing. Generate 5–10 visual variants from the same script description in minutes and test which concept drives the most conversions.",
                },
                {
                  emoji: "🛒",
                  title: "Product Story Visuals",
                  desc: "Lifestyle imagery for e-commerce product pages, without a photoshoot. Describe your product in context — who uses it, where, how it makes them feel — and generate the lifestyle shot you need.",
                },
              ].map((s) => (
                <div key={s.title} className="svi-scenario-card">
                  <div className="svi-scenario-emoji">{s.emoji}</div>
                  <div className="svi-scenario-title">{s.title}</div>
                  <div className="svi-scenario-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── How-it-works steps ── */}
          <section className="svi-section">
            <div className="svi-section-label">Step-by-Step Guide</div>
            <h2 className="svi-section-title">
              How to Use Scenith to Convert Your <em>Script to Voiceover & Image</em>
            </h2>

            <div className="svi-steps">
              <div className="svi-step">
                <div className="svi-step-num">01</div>
                <div className="svi-step-content">
                  <h3>Sign Up for a Free Account (30 seconds)</h3>
                  <p>
                    Visit Scenith and create your free account with either email/password or Google
                    sign-in. You'll receive 50 credits immediately — no credit card, no waitlist,
                    no forms to fill out. These credits are valid across voice, image, and video
                    generation. A single voice generation for a short script costs roughly 1 credit.
                    A standard AI image generation costs 10–15 credits. Your 50 free credits will
                    produce multiple voiceovers and several high-quality images before you even
                    think about upgrading.
                  </p>
                  <span className="svi-step-tag">⚡ Free · No card required</span>
                </div>
              </div>

              <div className="svi-step">
                <div className="svi-step-num">02</div>
                <div className="svi-step-content">
                  <h3>Navigate to the Voice Tab and Paste Your Script</h3>
                  <p>
                    On the Create AI Content page, click the "🎙️ Voice" tab. You'll see a large
                    text area — paste your script directly here. Scenith supports up to 2,000
                    characters per generation request. For longer scripts, break them into logical
                    sections (intro, body, outro) and generate each separately. This approach also
                    gives you finer control over pacing and allows you to use different voices for
                    different segments if your script has multiple characters or tones.
                  </p>
                  <span className="svi-step-tag">✍️ Paste · Type · Use Prompt Suggestions</span>
                </div>
              </div>

              <div className="svi-step">
                <div className="svi-step-num">03</div>
                <div className="svi-step-content">
                  <h3>Choose Your AI Voice Provider and Voice Character</h3>
                  <p>
                    Select from Google, OpenAI, or Azure (the latter two require a paid plan). Then
                    scroll through the voice panel on the right — filter by language and gender to
                    find the right character. Click the ▶️ button on any voice to preview it with
                    a sample clip before committing. Once you find the right voice, click it to
                    select. Consider the voice personality relative to your script tone: a calm,
                    measured Azure voice suits corporate training; an energetic OpenAI voice suits
                    YouTube intro scripts; a warm Google female voice suits meditation or wellness content.
                  </p>
                  <span className="svi-step-tag">🎙️ 40+ Voices · Listen Before You Generate</span>
                </div>
              </div>

              <div className="svi-step">
                <div className="svi-step-num">04</div>
                <div className="svi-step-content">
                  <h3>Adjust Speed and Generate Your Voiceover</h3>
                  <p>
                    Set the playback speed (0.5× to 2.0× on free plans, up to 4.0× on paid plans).
                    For most YouTube and social media content, 1.0–1.25× is the sweet spot. Click
                    "🎙️ Generate Voice" and wait roughly 2–4 seconds. Your MP3 will appear with a
                    built-in player — listen to the full output, and if you're happy, click
                    "📥 Download MP3" to save it directly to your device. No processing fees.
                    No watermarks on the audio.
                  </p>
                  <span className="svi-step-tag">⚡ ~3 Second Generation · Instant MP3</span>
                </div>
              </div>

              <div className="svi-step">
                <div className="svi-step-num">05</div>
                <div className="svi-step-content">
                  <h3>Switch to the Image Tab and Describe Your Visual</h3>
                  <p>
                    Click the "🖼️ Image" tab. Now think about the visual that best represents your
                    script's core idea or most powerful moment. Write a descriptive prompt in the
                    text area — you don't need to be a prompt engineer. A clear, specific description
                    in plain language produces excellent results. Use the "💡 Try a prompt" dropdown
                    for inspiration if you want to see the format. Select your preferred style preset
                    (realistic, artistic, digital art, etc.), choose an image model and size, and click
                    "🖼️ Generate Image." Results appear in 10–30 seconds.
                  </p>
                  <span className="svi-step-tag">🖼️ 7 Models · 8 Styles · 3 Aspect Ratios</span>
                </div>
              </div>

              <div className="svi-step">
                <div className="svi-step-num">06</div>
                <div className="svi-step-content">
                  <h3>Download Your Image — or Animate It</h3>
                  <p>
                    Once your image is generated, click "📥 Download PNG" for the high-resolution
                    file. All images come with full commercial rights — use them in client work,
                    YouTube thumbnails, paid ads, anything. If you want to take it a step further,
                    click "🎬 Make Video from this Image" directly from the result card. Scenith
                    will carry your generated image into the video tab, where you can add a prompt
                    to animate it using Kling 2.6, Veo 3.1, Wan 2.5, or Grok Imagine — turning
                    your script's visual into a 5–10 second animated sequence.
                  </p>
                  <span className="svi-step-tag">📥 PNG Download · Commercial Rights · Image-to-Video</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Comparison section ── */}
          <section className="svi-section">
            <div className="svi-section-label">Traditional vs AI Production</div>
            <h2 className="svi-section-title">
              The Old Way vs. <em>The Scenith Way</em>
            </h2>
            <p className="svi-section-body">
              Here's an honest side-by-side comparison of what content production looked like
              before AI voiceover and image generation, and what it looks like today.
            </p>

            <div className="svi-compare-grid">
              <div className="svi-compare-col svi-compare-old">
                <h3>❌ Traditional Script Production</h3>
                <ul>
                  <li>Record voiceover yourself — needs mic, quiet room, multiple takes</li>
                  <li>Or hire a voice actor on Fiverr/Voices.com — $50–$500, 24–72hr wait</li>
                  <li>Edit audio in Audacity, Adobe Audition, or GarageBand</li>
                  <li>Commission a thumbnail designer — $30–$150 per image</li>
                  <li>Wait 1–3 days for design revisions</li>
                  <li>Stock photo subscriptions ($15–$50/mo) for generic visuals</li>
                  <li>Separate tools, separate logins, separate billing</li>
                  <li>Full production cycle: 2–5 days minimum</li>
                  <li>Cost per piece of content: $100–$500+</li>
                </ul>
              </div>
              <div className="svi-compare-col svi-compare-new">
                <h3>✅ Script Production with Scenith AI</h3>
                <ul>
                  <li>Paste script → click generate → MP3 in 3 seconds</li>
                  <li>40+ professional AI voices, 20+ languages, instant preview</li>
                  <li>No audio editing required — production-ready output</li>
                  <li>Generate a matching AI image from your script description</li>
                  <li>High-res PNG in 10–30 seconds, exactly what you imagined</li>
                  <li>Full commercial rights on all outputs, no attribution required</li>
                  <li>Voice + Image + Video in one tab, one credit balance</li>
                  <li>Full production cycle: under 60 seconds</li>
                  <li>Cost per piece of content: 25–60 credits (~$0.09–$0.22)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Feature cards ── */}
          <section className="svi-section">
            <div className="svi-section-label">Platform Capabilities</div>
            <h2 className="svi-section-title">
              Everything You Need to <em>Ship Script-Based Content</em> at Scale
            </h2>
            <p className="svi-section-body">
              Scenith was built to remove every friction point between your script and your
              finished content. Here are the platform capabilities that make it the fastest
              script-to-content workflow available in 2026.
            </p>

            <div className="svi-feature-grid">
              {[
                {
                  icon: "🎙️",
                  title: "40+ Natural AI Voices",
                  desc: "Male, female, and gender-neutral voices across 20+ languages. Filter by language and gender, preview each voice with a sample clip, and choose the character that fits your script's tone.",
                },
                {
                  icon: "🌍",
                  title: "Multilingual Support",
                  desc: "English, Hindi, Mandarin, Spanish, French, German, Arabic, Japanese, Portuguese, and 15+ more. Reach global audiences with your script without hiring multilingual voice actors.",
                },
                {
                  icon: "⚡",
                  title: "Speed Control (0.5× – 4.0×)",
                  desc: "Adjust delivery speed at generation time. Create slow, deliberate narration for meditation content or fast-paced energy for ad scripts — the same voice, different speeds.",
                },
                {
                  icon: "🖼️",
                  title: "7 AI Image Models",
                  desc: "GPT Image 1 (Mini & Medium), Imagen 4 Fast & Standard, FLUX 1.1 Pro, Stability AI Core, and Grok Aurora. Each model excels at different styles — pick the right tool for your visual.",
                },
                {
                  icon: "🎨",
                  title: "8 Artistic Style Presets",
                  desc: "Realistic, artistic, anime, digital art, 3D render, fantasy, sci-fi, and vintage. Style presets apply additional prompt optimizations to push your images toward the aesthetic you want.",
                },
                {
                  icon: "📐",
                  title: "Flexible Aspect Ratios",
                  desc: "Generate images in square (1:1), landscape (16:9), portrait (9:16), standard (4:3), and tall (3:4) — matching the exact spec of your publishing platform without any cropping.",
                },
                {
                  icon: "🔄",
                  title: "Image-to-Image Generation",
                  desc: "Upload a reference image alongside your script description to generate variations, style transfers, and AI-enhanced versions of existing photos or visuals.",
                },
                {
                  icon: "🎬",
                  title: "Image-to-Video Animation",
                  desc: "Click 'Make Video from this Image' on any generated image to animate it into a 5–10 second video clip using Kling 2.6, Veo 3.1, or Wan 2.5. Your script's thumbnail becomes a motion asset.",
                },
                {
                  icon: "📥",
                  title: "Instant Download, Commercial Rights",
                  desc: "Every generated asset — MP3, PNG, MP4 — can be downloaded instantly. Full commercial use rights included on all plans. No attribution required. Use in client work, ads, anything.",
                },
              ].map((f) => (
                <div key={f.title} className="svi-feature-card">
                  <span className="svi-feature-icon">{f.icon}</span>
                  <div className="svi-feature-title">{f.title}</div>
                  <div className="svi-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Who is this for ── */}
          <section className="svi-usecase-section">
            <div className="svi-section-label">Who Benefits Most</div>
            <h2 className="svi-section-title">
              Built for Everyone Who <em>Starts with a Script</em>
            </h2>
            <p className="svi-section-body">
              The "script-first" workflow applies across a huge range of professions and creator
              types. If your content creation process starts with writing, this tool is for you.
            </p>

            <div className="svi-usecase-grid">
              {[
                {
                  emoji: "🎬",
                  title: "Faceless YouTube Channel Operators",
                  desc: "The entire faceless YouTube model is built on script + voiceover + visuals. Scenith compresses the production side of that workflow dramatically — letting you publish more frequently without a team.",
                },
                {
                  emoji: "📱",
                  title: "Short-Form Content Creators",
                  desc: "TikTok, Instagram Reels, and YouTube Shorts all benefit from punchy AI voiceovers layered over video clips. Write a 30-second hook script, voice it, generate a cover image, ship it.",
                },
                {
                  emoji: "🧑‍🎓",
                  title: "Online Course Creators & Educators",
                  desc: "Each lesson module in your course has a script. Turn every module script into a narrated audio track and a matched lesson thumbnail simultaneously — without ever touching recording software.",
                },
                {
                  emoji: "✍️",
                  title: "Bloggers & Content Marketers",
                  desc: "Your blog posts are already scripts. Convert your best articles into podcast-style audio with an AI voiceover. Generate a unique header image from each article's core concept.",
                },
                {
                  emoji: "📣",
                  title: "Performance Marketers & Ad Agencies",
                  desc: "Script-to-voiceover-to-video is the fastest way to produce testable ad creative at scale. Generate 10 voiceover variants from 10 script angles and A/B test at a fraction of production house cost.",
                },
                {
                  emoji: "💼",
                  title: "B2B Marketers & Startup Founders",
                  desc: "Explainer videos, product demos, and pitch deck narration all start with a script. Go from written deck notes to a voiced explainer video in under an hour with no production team.",
                },
                {
                  emoji: "🎮",
                  title: "Indie Game Developers",
                  desc: "Character dialogue, trailer narration, and tutorial voiceovers. AI voices now reach a quality level that works well for indie game cut scenes and voice acting for smaller speaking roles.",
                },
                {
                  emoji: "🤖",
                  title: "AI App & Tool Builders",
                  desc: "If you're building an AI product and need demo content, explainer voiceovers, or generated visual assets for your marketing pages, Scenith is the fastest production layer in your stack.",
                },
                {
                  emoji: "📚",
                  title: "Authors & Ghostwriters",
                  desc: "Test how your manuscript sounds before committing to a full audiobook production budget. Generate chapter samples, listen to different voice interpretations, and sharpen your prose for spoken delivery.",
                },
              ].map((uc) => (
                <div key={uc.title} className="svi-usecase-card">
                  <div className="svi-usecase-card-emoji">{uc.emoji}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Models strip ── */}
          <section className="svi-section">
            <div className="svi-section-label">Powered By</div>
            <h2 className="svi-section-title">
              World-Class AI Models, <em>One Platform</em>
            </h2>
            <p className="svi-section-body">
              Scenith integrates the most capable AI models available in 2026 for voice, image,
              and video — all accessible under a single credit balance.
            </p>

            <div className="svi-model-strip">
              {[
                "Google Neural TTS",
                "OpenAI TTS",
                "Azure Neural TTS",
                "GPT Image 1 (OpenAI)",
                "Imagen 4 Fast (Google)",
                "Imagen 4 Standard (Google)",
                "FLUX 1.1 Pro (Black Forest)",
                "Stability AI Core",
                "Grok Aurora (xAI)",
                "Kling 2.6 Pro",
                "Kling 2.5 Turbo",
                "Veo 3.1 (Google)",
                "Veo 3.1 Fast",
                "Wan 2.5",
                "Grok Imagine (xAI)",
              ].map((m) => (
                <span key={m} className="svi-model-badge">{m}</span>
              ))}
            </div>
          </section>

          {/* ── Tips section ── */}
          <section className="svi-section">
            <div className="svi-section-label">Expert Tips</div>
            <h2 className="svi-section-title">
              Advanced Techniques for <em>Script-to-Content Production</em>
            </h2>
            <div className="svi-prose">
              <p>
                Once you've mastered the basic script-to-voiceover and script-to-image workflow,
                these advanced techniques will push the quality and efficiency of your production
                even further.
              </p>

              <h3>Technique 1: The Modular Script Architecture</h3>
              <p>
                Instead of writing one long monolithic script, structure your content in modular
                blocks: hook (30 seconds), setup (60 seconds), value delivery (section 1, 2, 3),
                and CTA (30 seconds). Generate each module as a separate voiceover. This gives
                you atomic pieces you can remix into different formats — a 90-second LinkedIn
                clip, a 5-minute YouTube video, and a 30-second ad can all be assembled from
                the same modular script blocks with different AI voices or speeds.
              </p>

              <h3>Technique 2: Visual Foreshadowing with Script Timestamps</h3>
              <p>
                As you write your script, annotate each paragraph with a visual cue: [VISUAL: city
                skyline at dawn], [VISUAL: close-up of a laptop screen with analytics], [VISUAL:
                smiling professional in modern office]. When you get to image generation, you have
                a ready-made list of prompts that are perfectly synced to your script's narrative arc.
                This technique produces content that feels professionally edited and storyboarded,
                not randomly assembled.
              </p>

              <h3>Technique 3: Style Consistency Across a Series</h3>
              <p>
                If you're producing a content series (podcast, YouTube channel, online course),
                visual and audio consistency builds brand recognition. Choose one AI voice and
                one image model/style combination and stick with it across every piece of content
                in the series. Listeners and viewers will begin to associate your specific AI voice
                character and visual aesthetic with your brand — the same way they recognise a
                human host's voice.
              </p>

              <h3>Technique 4: The Script Audit Before Generation</h3>
              <p>
                Before hitting generate on a long voiceover script, read it aloud yourself once.
                Every sentence where you stumble or feel awkward is a sentence your AI voice will
                also mishandle. Rewrite those sentences in simpler, more natural spoken language.
                This 3-minute script audit will meaningfully improve your final AI voiceover quality
                — it's the single highest-ROI step in the workflow that most people skip.
              </p>

              <h3>Technique 5: Image-to-Video for Maximum Content Leverage</h3>
              <p>
                After generating your script's thumbnail image, use Scenith's "Make Video from
                this Image" feature to animate it. A 5-second animated version of your thumbnail
                becomes: a YouTube intro card, a loop for your Instagram story, a background for
                your podcast's video format, and a transition element in your video editing timeline.
                One image prompt generates an entire suite of motion assets at no additional
                creative cost.
              </p>

              <h3>Technique 6: Multilingual Content Scaling</h3>
              <p>
                If you have a script performing well in English, use Scenith's multilingual voice
                support to generate Spanish, French, German, Hindi, and Mandarin versions of the
                same script. You now have five pieces of content across five languages from one
                script's worth of creative work. The image assets you generated are language-neutral
                — they'll work across all localised versions. This is how solo creators scale to
                global audiences without a localisation budget.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="svi-section">
            <div className="svi-section-label">Frequently Asked Questions</div>
            <h2 className="svi-section-title">
              Everything About <em>AI Script to Voiceover & Image</em>
            </h2>

            <div className="svi-faq">
              {[
                {
                  q: "Can I turn my YouTube script into an AI voiceover for free?",
                  a: "Yes. Scenith gives you 50 free credits on sign-up — no credit card required. A short YouTube script voiceover typically costs between 1–5 credits depending on length. That means you can produce multiple voiceovers completely free before even considering an upgrade. Head to Scenith's Voice tab, paste your script, pick a voice, and generate. Your MP3 is ready in about 3 seconds.",
                },
                {
                  q: "What's the difference between AI voiceover and text-to-speech?",
                  a: "Traditional text-to-speech (TTS) was the robotic, monotone reading systems that appeared in early screen readers and GPS devices. Modern AI voiceover uses neural network models trained on enormous datasets of natural human speech, capturing rhythm, emphasis, emotion, and conversational cadence. The term 'AI voiceover' generally refers to these higher-quality neural voice systems, while 'text-to-speech' has historically referred to older, lower-quality synthesis. In practice, the distinction is blurring — most modern TTS systems are AI-powered — but AI voiceover implies premium quality neural output.",
                },
                {
                  q: "How many words can I convert to voice in one generation?",
                  a: "On Scenith's free plan, each voice generation supports up to 80 characters (roughly 10–15 words). On paid plans (Creator Lite and above), this limit expands significantly — typically to several hundred characters per request. For longer scripts, simply break your content into logical sections (intro, body paragraphs, outro) and generate each section separately. The resulting MP3 files can then be concatenated in any basic audio editing tool.",
                },
                {
                  q: "Can I use AI-generated voiceovers on YouTube without copyright issues?",
                  a: "Yes. AI-generated voiceovers produced through Scenith come with full commercial rights — you own the output and can use it on YouTube, in ads, in client work, in podcasts, anywhere. YouTube's content ID system looks for copyrighted audio signatures (existing songs, recorded performances, etc.) — an AI-synthesised voice does not match any such signature. Millions of YouTube creators use AI voiceovers without issue. The important caveat is that you cannot use AI-synthesised versions of specific copyrighted voice recordings without the original creator's permission — but generating a new AI voice from your script using Scenith doesn't fall into this category.",
                },
                {
                  q: "Which AI image model produces the best thumbnails for YouTube?",
                  a: "For YouTube thumbnails specifically, GPT Image 1 Medium (at standard or premium quality) and Grok Aurora tend to produce the most click-worthy results — high contrast, vivid, photorealistic images that hold up as thumbnail-sized. Set your image size to 'landscape (16:9)' to match YouTube's native thumbnail aspect ratio. Add 'high contrast, professional photography, vivid colours, YouTube thumbnail style' to your prompt for results optimised for the format.",
                },
                {
                  q: "Can I generate an AI image that matches the mood of my script?",
                  a: "Absolutely — and this is one of the most powerful things about script-based image generation. Your script already describes the emotional world of your content. Take the most vivid or emotionally resonant sentence in your script and use it as your image prompt foundation. Then layer on technical descriptors: 'cinematic lighting, dramatic shadows, 8K, ultra-detailed' for aspirational or educational content; 'soft natural light, warm tones, lifestyle photography' for wellness and personal development content; 'dark, moody, high-contrast, noir' for true crime or thriller content.",
                },
                {
                  q: "Is Scenith better than ElevenLabs for script voiceovers?",
                  a: "The comparison depends on your specific use case. ElevenLabs specialises in voice cloning and has very strong emotional range on custom-trained voices. Scenith's advantage is breadth: it offers three voice providers (Google, OpenAI, Azure) with 40+ voices in 20+ languages, combined with AI image and video generation on the same platform under a single credit balance. If you need a hyper-realistic clone of a specific voice, ElevenLabs is purpose-built for that. If you need a complete script-to-content production workflow — voiceover, thumbnail image, and optional animated video from a single interface — Scenith is the more efficient choice.",
                },
                {
                  q: "Can AI voiceovers be used for podcast production?",
                  a: "Yes — and more podcasters than you might expect are already doing exactly this. AI voiceovers work particularly well for podcast intros and outros, episode recap snippets, short-form podcast clips for social distribution, and audio blog content repurposed as podcast episodes. Where AI voiceovers have a natural limitation is in long-form conversational interview formats — the genuine human spontaneity of a two-person conversation still isn't replicable with current TTS. But for scripted solo podcasts, narrator-style shows, and news-style formats, AI voices produce excellent results.",
                },
                {
                  q: "What image resolution do I get with Scenith's AI image generator?",
                  a: "Scenith generates images at '2K' quality by default, which translates to high-resolution PNG output suitable for YouTube thumbnails, print materials, website headers, and presentation slides. The actual pixel dimensions vary by aspect ratio: square (1:1) images are typically 1024×1024 or higher; landscape (16:9) images hit 1792×1024 and above depending on model. For specific high-resolution requirements like print campaigns or billboard-scale assets, the premium quality tiers on GPT Image 1 Medium produce the sharpest output.",
                },
                {
                  q: "How is this different from using ChatGPT's voice feature?",
                  a: "ChatGPT's voice feature is designed for real-time conversational interaction — it responds to what you say in real time. Scenith's AI voiceover is a production tool: you provide a complete written script, it converts that exact text to a natural-sounding MP3 with fine control over voice character, language, and speed. ChatGPT doesn't give you a downloadable production-ready MP3, doesn't offer 40+ voice characters, doesn't let you generate a matching image from the same interface, and doesn't provide commercial rights for the voice output. Scenith is a content production tool; ChatGPT voice is a conversational assistant feature.",
                },
              ].map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <div className="svi-faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* ── Bottom CTA ── */}
          <div className="svi-bottom-cta">
            <div className="svi-bottom-cta-eyebrow">Start For Free · No Card Required</div>
            <h2 className="svi-bottom-cta-title">
              Your Script Deserves <em>to Be Heard</em><br />
              and Seen.
            </h2>
            <p className="svi-bottom-cta-sub">
              Stop letting production friction slow down your content output.
              Paste your script, pick a voice, describe your visual, and publish.
              50 free credits waiting for you.
            </p>
            <a
              href={CREATE_AI_CONTENT_URL}
              className="svi-cta-primary"
              rel="noopener noreferrer"
            >
              <span>🎙️ Generate Voiceover & Image Free</span>
              <span className="svi-cta-arrow">→</span>
            </a>
            <div className="svi-cta-sub-note" style={{ justifyContent: "center", marginTop: 16 }}>
              <span>✓ 50 free credits</span>
              <span>✓ MP3 + PNG download</span>
              <span>✓ Commercial rights included</span>
            </div>
          </div>

          {/* ── Internal links SEO footer ── */}
          <section className="svi-section" style={{ marginBottom: 0 }}>
            <div className="svi-section-label">More AI Content Tools</div>
            <h2 className="svi-section-title">
              Explore the Full <em>Scenith AI Suite</em>
            </h2>
            <p className="svi-section-body">
              Script to voiceover and image is just the beginning. Scenith offers a complete
              AI content production suite — video generation, image-to-video animation, and
              multilingual voice support — all under one login.
            </p>
            <div className="svi-feature-grid" style={{ marginTop: 24 }}>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=internal_link&utm_campaign=script_to_voiceover_image"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <div className="svi-feature-card" style={{ cursor: "pointer" }}>
                  <span className="svi-feature-icon">🎬</span>
                  <div className="svi-feature-title">AI Video Generator</div>
                  <div className="svi-feature-desc">
                    Animate your script's concept with Kling 2.6, Veo 3.1, or Wan 2.5.
                    Text-to-video and image-to-video. Up to 1080p. Download MP4 instantly.
                    From the same platform, same credits.
                  </div>
                </div>
              </a>
              <a
                href="https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=internal_link&utm_campaign=script_to_voiceover_image"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <div className="svi-feature-card" style={{ cursor: "pointer" }}>
                  <span className="svi-feature-icon">🖼️</span>
                  <div className="svi-feature-title">AI Image Generator</div>
                  <div className="svi-feature-desc">
                    7 state-of-the-art models for every visual style. GPT Image 1,
                    Imagen 4, FLUX, Grok Aurora, and more. Commercial PNG in under 30 seconds.
                  </div>
                </div>
              </a>
              <a
                href="https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=internal_link&utm_campaign=script_to_voiceover_image"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <div className="svi-feature-card" style={{ cursor: "pointer" }}>
                  <span className="svi-feature-icon">🎙️</span>
                  <div className="svi-feature-title">AI Voice Generator</div>
                  <div className="svi-feature-desc">
                    40+ natural voices across Google, OpenAI, and Azure. 20+ languages.
                    Speed control. Commercial MP3 download in 3 seconds. Free to start.
                  </div>
                </div>
              </a>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}