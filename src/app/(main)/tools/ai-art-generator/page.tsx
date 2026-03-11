"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import '../../../../../styles/tools/AIArtGenerator.css';

// ── Metadata (export from a sibling layout or use generateMetadata in a Server Component wrapper) ──
// This component is the CLIENT shell. For metadata, pair with a server page.tsx that re-exports
// generateMetadata and renders <AIArtGeneratorClient />.

const STYLE_SHOWCASE = [
  {
    id: "hyperrealism",
    label: "Hyperrealism",
    icon: "📷",
    color: "#3b82f6",
    description:
      "Ultra-detailed photorealistic renders indistinguishable from photographs. Perfect for product shots, portraits, and architectural visualization.",
    prompt: "A dew-covered red rose, macro lens, f/1.8, golden hour light, hyperrealistic",
    tags: ["Product", "Portrait", "Architecture"],
  },
  {
    id: "anime",
    label: "Anime & Manga",
    icon: "🎌",
    color: "#f43f5e",
    description:
      "Authentic Japanese animation aesthetics from Ghibli-soft watercolor to crisp Shonen ink. Characters, scenes, and entire worlds.",
    prompt: "Girl in a sunflower field, soft Ghibli watercolor style, warm afternoon glow",
    tags: ["Character", "Scene", "Story"],
  },
  {
    id: "oil-painting",
    label: "Oil Painting",
    icon: "🖌️",
    color: "#d97706",
    description:
      "Master-level oil painting textures — visible brushwork, rich impasto, glazing layers. From Baroque to Impressionism.",
    prompt: "Stormy ocean at night, thick impasto oil paint, Rembrandt dramatic lighting",
    tags: ["Fine Art", "Portrait", "Landscape"],
  },
  {
    id: "concept-art",
    label: "Concept Art",
    icon: "🎮",
    color: "#8b5cf6",
    description:
      "Professional game and film concept art. Environment design, character sheets, creature concepts with cinematic storytelling.",
    prompt: "Abandoned space station interior, dramatic key light, cinematic concept art",
    tags: ["Game Dev", "Film", "Character"],
  },
  {
    id: "watercolor",
    label: "Watercolor",
    icon: "🌊",
    color: "#06b6d4",
    description:
      "Delicate watercolor washes with paper texture bleed. Editorial illustration, greeting cards, botanical art.",
    prompt: "Hummingbird hovering over wildflowers, loose watercolor washes, white paper grain",
    tags: ["Editorial", "Card", "Botanical"],
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk / Neon",
    icon: "🌆",
    color: "#ec4899",
    description:
      "Neon-drenched dystopian cityscapes, chrome augmentations, holographic interfaces. The future is now.",
    prompt: "Tokyo alley at 3AM, neon signs reflecting in puddles, cyberpunk noir atmosphere",
    tags: ["Cityscape", "Character", "Sci-Fi"],
  },
  {
    id: "surrealism",
    label: "Surrealism",
    icon: "🌀",
    color: "#a855f7",
    description:
      "Dreamlike juxtapositions, melting forms, impossible architecture. Channel Dalí, Magritte, and Ernst with AI.",
    prompt: "A clock melting over a desert horizon, surrealist oil painting, hyper-detailed",
    tags: ["Dreamscape", "Abstract", "Fine Art"],
  },
  {
    id: "pixel-art",
    label: "Pixel Art",
    icon: "👾",
    color: "#22c55e",
    description:
      "Retro 8-bit and 16-bit sprite art, isometric scenes, game assets. Nostalgia engineered to perfection.",
    prompt: "Isometric fantasy village, 16-bit pixel art, warm palette, game screenshot",
    tags: ["Game Dev", "NFT", "Retro"],
  },
];

const PROMPT_TIPS = [
  {
    category: "Subject Mastery",
    icon: "🎯",
    tips: [
      "Name the subject first and foremost: 'A Bengal tiger...' not 'Something with stripes...'",
      "Specify count and spatial relationship: 'Two wolves facing each other across a frozen river'",
      "Add emotional state for characters: 'A tired astronaut removing her helmet, exhausted relief'",
      "For objects: mention material, texture, finish: 'brushed titanium water bottle, condensation droplets'",
    ],
  },
  {
    category: "Lighting is Everything",
    icon: "💡",
    tips: [
      "Golden hour: 'warm golden hour backlight, long soft shadows, lens flare'",
      "Dramatic studio: 'single key light from above-left, deep shadow fill, catchlight in eyes'",
      "Moody ambient: 'overcast diffuse light, muted saturation, cinematic tone'",
      "Neon atmosphere: 'pink and blue neon practical lights, volumetric glow, wet pavement reflection'",
    ],
  },
  {
    category: "Style Vocabulary",
    icon: "🎨",
    tips: [
      "Reference artist styles: 'in the style of Hiroshi Yoshida woodblock prints'",
      "Camera lens data: 'shot on 85mm, f/1.4, shallow depth of field, bokeh background'",
      "Era and movement: 'Art Nouveau poster style, organic lines, pastel lithograph palette'",
      "Medium specificity: 'gouache illustration, visible tooth of paper, flat graphic shapes'",
    ],
  },
  {
    category: "Composition Control",
    icon: "📐",
    tips: [
      "Rule of thirds: 'subject positioned left third, negative space right, wide establishing shot'",
      "Camera angle: 'extreme low angle, looking up at skyscraper, dramatic foreshortening'",
      "Depth layers: 'blurred foreground leaves, sharp midground subject, soft background bokeh'",
      "Frame within frame: 'viewed through an arch, framed by tree branches, vignette corners'",
    ],
  },
];

const COMPARISON_DATA = [
  {
    feature: "Generation Speed",
    scenith: "3–8 seconds",
    midjourney: "30–60 seconds",
    dalle: "5–15 seconds",
    stable: "10–30 seconds",
    highlight: true,
  },
  {
    feature: "Pricing",
    scenith: "From ₹99/mo",
    midjourney: "$10/mo minimum",
    dalle: "Via ChatGPT Plus $20/mo",
    stable: "Self-hosted or cloud cost",
    highlight: false,
  },
  {
    feature: "No-Code Web UI",
    scenith: "✅ Yes",
    midjourney: "❌ Discord only",
    dalle: "⚠️ Via ChatGPT",
    stable: "⚠️ Complex setup",
    highlight: true,
  },
  {
    feature: "Art Style Presets",
    scenith: "✅ 8 presets built-in",
    midjourney: "❌ Manual params",
    dalle: "❌ Manual params",
    stable: "⚠️ Via extensions",
    highlight: false,
  },
  {
    feature: "Commercial Rights",
    scenith: "✅ Included free",
    midjourney: "⚠️ Paid tiers only",
    dalle: "✅ Yes",
    stable: "✅ Open license",
    highlight: true,
  },
  {
    feature: "Image Editor Integration",
    scenith: "✅ Built-in editor",
    midjourney: "❌ No",
    dalle: "❌ No",
    stable: "❌ No",
    highlight: false,
  },
  {
    feature: "Negative Prompts",
    scenith: "✅ Advanced control",
    midjourney: "✅ Via --no flag",
    dalle: "❌ Limited",
    stable: "✅ Full support",
    highlight: false,
  },
  {
    feature: "AI Model Choice",
    scenith: "✅ 7 models (FLUX, GPT, Imagen, Grok...)",
    midjourney: "❌ One model",
    dalle: "❌ One model",
    stable: "✅ Community models",
    highlight: true,
  },
];

const FAQ_DATA = [
  {
    q: "What's the difference between 'AI art' and 'AI image generation'?",
    a: "The terms are largely interchangeable in 2026, but there's a nuance. 'AI art generation' implies creative, stylized outputs — paintings, illustrations, concept art — whereas 'AI image generation' sometimes refers to photorealistic renders. On Scenith, both are handled by the same tool with style presets that span the full spectrum: from hyperrealistic photography to expressive oil paintings to surrealist dreamscapes.",
  },
  {
    q: "How do I write a good AI art prompt in 2026?",
    a: "The golden formula is: [Subject] + [Setting/Context] + [Art Style/Medium] + [Lighting] + [Camera/Composition] + [Mood/Quality Tags]. For example: 'A samurai meditating on a mountain peak, at dawn, watercolor wash, soft diffuse light, wide establishing shot, serene and peaceful, high detail.' The key shift in 2026 is that modern models like FLUX 1.1 Pro and Imagen 4 understand natural language far better than older Stable Diffusion v1.4 ever did — so conversational prompts work well too.",
  },
  {
    q: "Can I generate AI art for free on Scenith?",
    a: "Yes — but with a caveat. Creating an account is free, and the basic plan lets you explore the interface. AI image generation credits start with Creator Lite at ₹99/month (approximately $1.20 USD), which is among the most affordable in the market. This gives you 100 credits, where each image costs between 2–12 credits depending on the AI model chosen. You get commercial rights to every image you generate.",
  },
  {
    q: "Is AI-generated art copyrightable in India and globally?",
    a: "As of 2026, the legal landscape is still evolving but clearer than it was. In India, the Copyright Act doesn't explicitly address AI-generated works; courts are yet to set definitive precedent. In the US, the Copyright Office continues to reject fully AI-generated works without meaningful human authorship. In the EU, the AI Act focuses more on liability than copyright. Best practice: use AI art commercially, but don't claim it as entirely your own original artwork if challenged. Scenith grants you full commercial use rights to images generated on the platform.",
  },
  {
    q: "What is FLUX 1.1 Pro and why is it considered the best AI art model?",
    a: "FLUX 1.1 Pro, developed by Black Forest Labs (founded by the original Stable Diffusion creators), is widely regarded as the best image generation model in 2026 for creative and photorealistic outputs. It excels at prompt adherence (generating exactly what you describe), fine detail in complex scenes, consistent anatomy in human figures, and artistic coherence across styles. On Scenith, FLUX 1.1 Pro costs 7 credits per image — the sweet spot of quality vs. cost.",
  },
  {
    q: "How does Imagen 4 compare to other AI art models?",
    a: "Google's Imagen 4 (available in Fast and Standard variants on Scenith) is exceptional for photorealism and natural scenes. It produces the most faithful color science and outdoor lighting of any current model. Standard is slightly sharper and handles complex compositions better; Fast is ~40% quicker with only a subtle quality trade-off. Imagen 4 is particularly strong for: product photography, food and lifestyle imagery, architecture, and anything where color accuracy is critical.",
  },
  {
    q: "Can AI generate art in the style of famous artists?",
    a: "Technically yes — AI models have been trained on art history and can produce work inspired by the visual characteristics of artists like Van Gogh, Monet, Basquiat, or Yoshitaka Amano. However, living artists have been vocal about the ethical implications, and several have successfully lobbied platforms to restrict direct name-based style mimicry. Best practice: reference style characteristics rather than artist names. Instead of 'in the style of [living artist],' try 'loose expressive brushwork, bold color blocking, neo-expressionist street art aesthetic.'",
  },
  {
    q: "What resolution does Scenith AI art generator produce?",
    a: "All images are generated at 1024×1024 pixels as the base resolution. This is the optimal generation size for current diffusion architectures — upscaling beyond this in generation (e.g., 2048×2048) introduces artifacts and is computationally expensive. For larger final outputs, we recommend using our built-in Image Editor to apply AI upscaling (2× or 4×) post-generation, which uses specialized super-resolution models to cleanly enlarge to 4096×4096 pixels.",
  },
  {
    q: "What are negative prompts and how do I use them effectively?",
    a: "Negative prompts tell the AI what you explicitly don't want in the image. They're accessed under 'Advanced Options' and are one of the most powerful quality improvement tools. Default best practice: 'blurry, low quality, distorted, watermark, text, signature, deformed hands, extra fingers, duplicate.' For portraits specifically add: 'uneven eyes, asymmetrical face, bad teeth.' For art styles: if you want oil painting, add 'digital art, 3D render, anime' to your negatives to prevent style bleed.",
  },
  {
    q: "How do Grok Aurora's AI art capabilities compare?",
    a: "Grok Aurora (xAI's image model, available on Scenith at 12 credits) is the newest and highest-quality model in our lineup. It has exceptional performance on complex multi-element scenes, accurate text rendering within images, and remarkable stylistic range. Aurora is particularly good for surrealism and conceptual art where other models get confused by abstract prompts. At 12 credits, it's best reserved for your highest-priority generations.",
  },
];

const GALLERY_PROMPTS = [
  { label: "Neon Samurai", style: "Cyberpunk", emoji: "⚔️" },
  { label: "Botanical Watercolor", style: "Watercolor", emoji: "🌿" },
  { label: "Deep Sea Concept", style: "Concept Art", emoji: "🌊" },
  { label: "Ancient Temple Ruins", style: "Hyperrealism", emoji: "🏛️" },
  { label: "Fox Spirit Anime", style: "Anime", emoji: "🦊" },
  { label: "Baroque Portrait", style: "Oil Painting", emoji: "👑" },
  { label: "Dream Architecture", style: "Surrealism", emoji: "🏰" },
  { label: "Retro Game World", style: "Pixel Art", emoji: "🎮" },
  { label: "Macro Butterfly Wing", style: "Hyperrealism", emoji: "🦋" },
  { label: "Midnight City Rain", style: "Cyberpunk", emoji: "🌧️" },
  { label: "Cherry Blossom Warrior", style: "Anime", emoji: "🌸" },
  { label: "Abstract Data Storm", style: "Concept Art", emoji: "💫" },
];

const USE_CASES = [
  {
    title: "Book Cover Design",
    icon: "📚",
    color: "#f59e0b",
    description:
      "Self-publishing authors are saving ₹15,000–₹50,000 per cover. Describe the genre, mood, protagonist, and setting — get a professional cover in seconds that beats generic stock.",
    example: "A woman astronaut floating above a dying red planet, painted cover art, cinematic, epic scale",
    stat: "~₹25,000 saved vs. hiring a designer",
  },
  {
    title: "D&D & Tabletop RPG",
    icon: "🎲",
    color: "#8b5cf6",
    description:
      "DMs generating custom character portraits, dungeon maps, monster illustrations, and item cards. Build immersive worlds your players will never forget.",
    example: "Dwarf rogue with mechanical arm, tavern background, fantasy portrait, detailed armor",
    stat: "200,000+ DMs use AI art monthly",
  },
  {
    title: "Fashion Mood Boards",
    icon: "👗",
    color: "#ec4899",
    description:
      "Fashion designers and stylists are visualizing collections before a single stitch. Generate outfit concepts, fabric texture details, editorial photography aesthetics.",
    example: "Model in avant-garde structured coat, editorial fashion shoot, high contrast black and white",
    stat: "Cut concept cycle from 2 weeks to 2 days",
  },
  {
    title: "Architecture Visualization",
    icon: "🏗️",
    color: "#06b6d4",
    description:
      "Architects and interior designers are winning client pitches with AI-generated photorealistic renders before CAD modeling begins.",
    example: "Modern minimalist villa, floor-to-ceiling glass, infinity pool, sunset hour, architectural render",
    stat: "Pitch acceptance up 40% with visual moodboards",
  },
  {
    title: "NFT & Digital Collectibles",
    icon: "💎",
    color: "#3b82f6",
    description:
      "Artists building generative collections, 1/1 artwork series, and profile picture (PFP) projects. AI handles the visual heavy lifting; your curation is the art.",
    example: "Abstract cosmic entity, iridescent scales, void background, generative art, vibrant 3D",
    stat: "73% of top NFT collections use AI tools",
  },
  {
    title: "Children's Book Illustration",
    icon: "📖",
    color: "#22c55e",
    description:
      "Indie authors creating full picture books with consistent character designs across 30+ illustrations. Whimsical, colorful, age-appropriate art at scale.",
    example: "Friendly purple dragon learning to fly, children's book illustration, soft watercolor, pastel",
    stat: "Full 32-page book illustrated in under 3 hours",
  },
  {
    title: "Social Media Content",
    icon: "📱",
    color: "#f43f5e",
    description:
      "Content creators generating 7–30 days of scroll-stopping visuals in a single session. Quote cards, product mockups, aesthetic flat lays, inspirational scenes.",
    example: "Aesthetic morning coffee setup, marble table, golden light, Instagram lifestyle photography",
    stat: "3× faster content calendar creation",
  },
  {
    title: "Tattoo Design",
    icon: "🖋️",
    color: "#6366f1",
    description:
      "Custom tattoo reference art that clients can take to their artist. Geometric patterns, traditional motifs, neo-traditional, blackwork — fully realized before booking.",
    example: "Geometric wolf with constellation background, minimalist blackwork, tattoo flash art",
    stat: "Tattoo studios report 50% fewer revision rounds",
  },
];

const MODELS_DATA = [
  {
    id: "stability-core",
    name: "Stability AI Core",
    credits: 2,
    specialty: "Balanced all-rounder. Best entry point for exploring styles.",
    strengths: ["Fast iteration", "Style variety", "Cost-effective"],
    color: "#38bdf8",
    bg: "linear-gradient(135deg,#0c2d4a,#0e3a5e)",
    border: "#38bdf8",
    badge: "Best Value",
  },
  {
    id: "gpt-image-1-mini",
    name: "GPT Image 1 Mini",
    credits: 3,
    specialty: "OpenAI's lightweight model. Strong prompt adherence and clean outputs.",
    strengths: ["Prompt accuracy", "Clean edges", "Text in images"],
    color: "#4ade80",
    bg: "linear-gradient(135deg,#052e16,#064e25)",
    border: "#4ade80",
    badge: "Prompt Accurate",
  },
  {
    id: "imagen-4-fast",
    name: "Imagen 4 Fast",
    credits: 5,
    specialty: "Google's speed-optimized model. Exceptional color science and photorealism.",
    strengths: ["Color accuracy", "Nature/outdoor", "Product shots"],
    color: "#fbbf24",
    bg: "linear-gradient(135deg,#2d1a00,#3d2400)",
    border: "#fbbf24",
    badge: "Google AI",
  },
  {
    id: "flux-1-1-pro",
    name: "FLUX 1.1 Pro",
    credits: 7,
    specialty: "Industry benchmark for creative AI art. Best anatomy and scene coherence.",
    strengths: ["Human anatomy", "Complex scenes", "Artistic range"],
    color: "#a78bfa",
    bg: "linear-gradient(135deg,#1e0a3c,#2d1256)",
    border: "#a78bfa",
    badge: "Fan Favourite",
  },
  {
    id: "imagen-4-standard",
    name: "Imagen 4 Standard",
    credits: 8,
    specialty: "Full-quality Imagen 4. Sharpest details, best for commercial photography.",
    strengths: ["Max sharpness", "Commercial photography", "Architecture"],
    color: "#f472b6",
    bg: "linear-gradient(135deg,#3b0a28,#4a0f33)",
    border: "#f472b6",
    badge: "Google Premium",
  },
  {
    id: "gpt-image-1-medium",
    name: "GPT Image 1 Medium",
    credits: 10,
    specialty: "OpenAI's mid-tier with richer detail, better lighting, and complex compositions.",
    strengths: ["Detail richness", "Complex lighting", "Character fidelity"],
    color: "#fb923c",
    bg: "linear-gradient(135deg,#2d1500,#3d1e00)",
    border: "#fb923c",
    badge: "OpenAI",
  },
  {
    id: "grok-aurora",
    name: "Grok Aurora",
    credits: 12,
    specialty: "xAI's flagship. Best for surreal, abstract, and highly conceptual prompts.",
    strengths: ["Abstract concepts", "Text rendering", "Surrealism"],
    color: "#818cf8",
    bg: "linear-gradient(135deg,#0f0c29,#1a1650)",
    border: "#818cf8",
    badge: "xAI · Best Quality",
  },
];

const HISTORY_TIMELINE = [
  {
    year: "2014",
    title: "GANs Are Born",
    body: "Ian Goodfellow invents Generative Adversarial Networks. Early outputs: blurry 64×64 faces, barely recognizable. The seed of a revolution is planted.",
    icon: "🌱",
  },
  {
    year: "2019",
    title: "BigGAN & Progressive Growing",
    body: "NVIDIA's StyleGAN and DeepMind's BigGAN produce shockingly convincing human faces at 1024×1024. 'This Person Does Not Exist' goes viral. The public takes notice.",
    icon: "😲",
  },
  {
    year: "2021",
    title: "DALL-E & CLIP Change Everything",
    body: "OpenAI releases DALL-E and CLIP, proving that language-conditioned image generation is possible. Text-to-image becomes real. The era of prompt engineering begins.",
    icon: "🔤",
  },
  {
    year: "2022",
    title: "The Stable Diffusion Revolution",
    body: "Stability AI open-sources Stable Diffusion. Within weeks, millions are running it locally. Midjourney launches. AI art enters mainstream consciousness. Artists debate, create, protest, and adapt.",
    icon: "💥",
  },
  {
    year: "2023",
    title: "SDXL, DALL-E 3, Firefly",
    body: "Quality leaps again. Adobe Firefly brings AI into Photoshop. DALL-E 3's prompt understanding reaches near-perfection. The tools are now genuinely usable by non-technical creatives.",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "FLUX, Ideogram, Imagen 3",
    body: "Black Forest Labs (ex-Stability AI) releases FLUX — outperforming everything in anatomy and prompt adherence. Ideogram 2.0 dominates text-in-image. Google's Imagen 3 sets new photorealism benchmarks.",
    icon: "⚡",
  },
  {
    year: "2025–26",
    title: "The Multimodel Era",
    body: "FLUX 1.1 Pro, Imagen 4, GPT Image 1, Grok Aurora: each model has distinct strengths. The question is no longer 'can AI make art?' but 'which model is right for this project?' Platforms like Scenith unify them in one interface.",
    icon: "🌐",
  },
];

export default function AIArtGeneratorPage() {
  const [activeStyle, setActiveStyle] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"tips" | "history" | "models">("tips");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -80]);

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopiedPrompt(prompt);
      setTimeout(() => setCopiedPrompt(null), 2000);
    });
  };

  const handleCTAClick = () => {
    window.location.href = "https://scenith.in/tools/ai-image-generation";
  };

  return (
    <div className="aag-page">
      {/* ── SEO structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://scenith.in/tools/ai-art-generator#webpage",
                url: "https://scenith.in/tools/ai-art-generator",
                name: "AI Art Generator — Create Stunning Art with AI in 2026 | Scenith",
                description:
                  "Generate breathtaking AI artwork in any style — hyperrealism, anime, oil painting, cyberpunk, concept art and more. Powered by FLUX, GPT Image, Imagen 4, and Grok Aurora. Free to start.",
                isPartOf: { "@id": "https://scenith.in/#website" },
                about: { "@id": "https://scenith.in/tools/ai-image-generator#webapp" },
                breadcrumb: { "@id": "https://scenith.in/tools/ai-art-generator#breadcrumb" },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://scenith.in/tools/ai-art-generator#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
                  { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "AI Art Generator",
                    item: "https://scenith.in/tools/ai-art-generator",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://scenith.in/tools/ai-art-generator#faq",
                mainEntity: FAQ_DATA.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "HowTo",
                "@id": "https://scenith.in/tools/ai-art-generator#howto",
                name: "How to Create AI Art in 2026",
                description: "Step-by-step guide to generating stunning AI artwork from text prompts",
                totalTime: "PT2M",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Write a descriptive art prompt",
                    text: "Describe your vision with subject, style, lighting, mood, and composition details.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Select an AI model",
                    text: "Choose from FLUX 1.1 Pro, Imagen 4, GPT Image 1, Grok Aurora based on your desired art style.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Pick an art style preset",
                    text: "Select from Hyperrealism, Anime, Oil Painting, Cyberpunk, Concept Art and 3 more styles.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 4,
                    name: "Generate and download",
                    text: "Get your high-resolution 1024×1024 PNG in 3–8 seconds with full commercial use rights.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav className="aag-breadcrumb" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="aag-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="aag-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Art Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <motion.section
        className="aag-hero"
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        aria-label="Hero"
      >
        <div className="aag-hero-noise" aria-hidden="true" />
        <div className="aag-hero-grid" aria-hidden="true" />

        <div className="aag-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="aag-hero-text"
          >
            <div className="aag-eyebrow">
              <span className="aag-eyebrow-dot" />
              AI Art Generator · 2026
            </div>

            <h1 className="aag-h1">
              Turn Words Into
              <br />
              <span className="aag-h1-gradient">Breathtaking Art.</span>
            </h1>

            <p className="aag-hero-sub">
              Powered by <strong>FLUX 1.1 Pro</strong>, <strong>Imagen 4</strong>,{" "}
              <strong>GPT Image 1</strong>, and <strong>Grok Aurora</strong> — the world's
              most advanced AI art models in one place. Generate hyperrealism, anime, oil
              paintings, concept art, cyberpunk, and more. No design skills. No expensive
              software. Just your imagination.
            </p>

            <div className="aag-hero-stats">
              {[
                { n: "7", label: "AI Models" },
                { n: "8", label: "Art Styles" },
                { n: "3–8s", label: "Generation" },
                { n: "1024px", label: "Resolution" },
              ].map((s) => (
                <div key={s.label} className="aag-stat">
                  <span className="aag-stat-n">{s.n}</span>
                  <span className="aag-stat-l">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="aag-hero-cta-row">
              <motion.button
                className="aag-cta-primary"
                onClick={handleCTAClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="aag-cta-icon">✨</span>
                Create AI Art Free
                <span className="aag-cta-arrow">→</span>
              </motion.button>
              <a className="aag-cta-secondary" href="#styles">
                Explore Art Styles
              </a>
            </div>

            <p className="aag-hero-note">
              Free account · Commercial rights included · No watermarks
            </p>
          </motion.div>

          {/* Style cards preview */}
          <motion.div
            className="aag-hero-cards"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            {STYLE_SHOWCASE.slice(0, 4).map((style, i) => (
              <motion.div
                key={style.id}
                className="aag-hero-style-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{ "--card-color": style.color } as React.CSSProperties}
              >
                <span className="aag-hsc-icon">{style.icon}</span>
                <span className="aag-hsc-label">{style.label}</span>
              </motion.div>
            ))}
            <div className="aag-hero-card-main">
              <div className="aag-hcm-inner">
                <div className="aag-hcm-pulse" />
                <span className="aag-hcm-icon">🎨</span>
                <span className="aag-hcm-text">AI Art</span>
                <span className="aag-hcm-sub">Generating…</span>
              </div>
            </div>
            {STYLE_SHOWCASE.slice(4, 8).map((style, i) => (
              <motion.div
                key={style.id}
                className="aag-hero-style-card aag-hero-style-card--right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                style={{ "--card-color": style.color } as React.CSSProperties}
              >
                <span className="aag-hsc-icon">{style.icon}</span>
                <span className="aag-hsc-label">{style.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="aag-hero-scroll-hint" aria-hidden="true">
          <span>scroll to explore</span>
          <div className="aag-scroll-line" />
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          ART STYLES DEEP DIVE
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-styles-section" id="styles" aria-labelledby="styles-title">
        <div className="aag-container">
          <SectionHeading
            id="styles-title"
            eyebrow="Style Gallery"
            title="Every Art Style, Mastered by AI"
            sub="From photorealistic renders to dreamlike surrealism — choose your aesthetic and create with precision."
          />

          <div className="aag-styles-layout">
            <div className="aag-styles-nav" role="tablist" aria-label="Art styles">
              {STYLE_SHOWCASE.map((style, i) => (
                <button
                  key={style.id}
                  role="tab"
                  aria-selected={activeStyle === i}
                  aria-controls={`style-panel-${i}`}
                  className={`aag-style-tab ${activeStyle === i ? "aag-style-tab--active" : ""}`}
                  onClick={() => setActiveStyle(i)}
                  style={{ "--tab-color": style.color } as React.CSSProperties}
                >
                  <span className="aag-style-tab-icon">{style.icon}</span>
                  <span className="aag-style-tab-label">{style.label}</span>
                </button>
              ))}
            </div>

            <div className="aag-styles-panel">
              {STYLE_SHOWCASE.map((style, i) => (
                <motion.div
                  key={style.id}
                  id={`style-panel-${i}`}
                  role="tabpanel"
                  className={`aag-style-content ${activeStyle === i ? "aag-style-content--active" : ""}`}
                  initial={false}
                  animate={activeStyle === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden={activeStyle !== i}
                >
                  <div
                    className="aag-style-panel-header"
                    style={{ "--panel-color": style.color } as React.CSSProperties}
                  >
                    <span className="aag-sph-icon">{style.icon}</span>
                    <div>
                      <h3 className="aag-sph-title">{style.label}</h3>
                      <div className="aag-sph-tags">
                        {style.tags.map((t) => (
                          <span key={t} className="aag-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="aag-style-desc">{style.description}</p>

                  <div className="aag-style-prompt-box">
                    <div className="aag-spb-label">
                      <span>✦ Example Prompt</span>
                      <button
                        className="aag-copy-btn"
                        onClick={() => copyPrompt(style.prompt)}
                        aria-label="Copy prompt"
                      >
                        {copiedPrompt === style.prompt ? "✓ Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="aag-spb-text">"{style.prompt}"</p>
                  </div>

                  <motion.button
                    className="aag-style-try-btn"
                    onClick={handleCTAClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ "--btn-color": style.color } as React.CSSProperties}
                  >
                    Try {style.label} Style →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROMPT GALLERY (scrolling visual)
      ══════════════════════════════════════════ */}
      <section className="aag-gallery-strip" aria-label="Example art subjects">
        <div className="aag-gallery-track aag-gallery-track--fwd" aria-hidden="true">
          {[...GALLERY_PROMPTS, ...GALLERY_PROMPTS].map((item, i) => (
            <div key={i} className="aag-gallery-chip">
              <span>{item.emoji}</span>
              <span>{item.label}</span>
              <span className="aag-gc-style">{item.style}</span>
            </div>
          ))}
        </div>
        <div className="aag-gallery-track aag-gallery-track--rev" aria-hidden="true">
          {[...GALLERY_PROMPTS.slice().reverse(), ...GALLERY_PROMPTS.slice().reverse()].map((item, i) => (
            <div key={i} className="aag-gallery-chip">
              <span>{item.emoji}</span>
              <span>{item.label}</span>
              <span className="aag-gc-style">{item.style}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROMPT MASTERY GUIDE
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-prompt-section" id="prompt-guide" aria-labelledby="prompt-title">
        <div className="aag-container">
          <SectionHeading
            id="prompt-title"
            eyebrow="Prompt Engineering"
            title="The Art of Writing AI Art Prompts"
            sub="The difference between a mediocre image and a jaw-dropping one lives in the prompt. Master these frameworks."
          />

          <div className="aag-prompt-formula">
            <h3 className="aag-pf-title">The Master Formula</h3>
            <div className="aag-pf-parts">
              {[
                { part: "Subject", example: "A lone samurai", color: "#f59e0b" },
                { part: "Context", example: "standing in cherry blossom rain", color: "#ec4899" },
                { part: "Style/Medium", example: "ink wash painting", color: "#8b5cf6" },
                { part: "Lighting", example: "dusk amber light", color: "#f97316" },
                { part: "Composition", example: "wide shot, rule of thirds", color: "#06b6d4" },
                { part: "Quality Tags", example: "masterpiece, ultra-detailed", color: "#22c55e" },
              ].map((p, i) => (
                <React.Fragment key={p.part}>
                  <div
                    className="aag-pf-part"
                    style={{ "--pf-color": p.color } as React.CSSProperties}
                  >
                    <span className="aag-pf-part-label">{p.part}</span>
                    <span className="aag-pf-part-example">"{p.example}"</span>
                  </div>
                  {i < 5 && <span className="aag-pf-plus" aria-hidden="true">+</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="aag-pf-result">
              <span className="aag-pf-result-label">Full Prompt:</span>
              <span className="aag-pf-result-text">
                "A lone samurai standing in cherry blossom rain, ink wash painting, dusk amber light, wide shot rule of thirds, masterpiece ultra-detailed"
              </span>
            </div>
          </div>

          <div className="aag-tips-grid">
            {PROMPT_TIPS.map((cat) => (
              <div key={cat.category} className="aag-tip-card">
                <div className="aag-tip-header">
                  <span className="aag-tip-icon">{cat.icon}</span>
                  <h3 className="aag-tip-title">{cat.category}</h3>
                </div>
                <ul className="aag-tip-list">
                  {cat.tips.map((tip, i) => (
                    <li key={i} className="aag-tip-item">
                      <span className="aag-tip-bullet" aria-hidden="true">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="aag-prompt-cta">
            <p>Ready to put these techniques to work?</p>
            <button className="aag-cta-primary" onClick={handleCTAClick}>
              Open AI Art Generator →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI MODELS COMPARISON
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-models-section" id="models" aria-labelledby="models-title">
        <div className="aag-container">
          <SectionHeading
            id="models-title"
            eyebrow="Model Lineup"
            title="7 Cutting-Edge AI Art Models"
            sub="Different models excel at different styles. Here's how to pick the right one for your project."
          />

          <div className="aag-models-grid">
            {MODELS_DATA.map((model, i) => (
              <motion.div
                key={model.id}
                className="aag-model-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: model.bg,
                  borderColor: model.border,
                  "--model-color": model.color,
                } as React.CSSProperties}
              >
                <div className="aag-mc-top">
                  <h3 className="aag-mc-name" style={{ color: model.color }}>
                    {model.name}
                  </h3>
                  <div className="aag-mc-badge-row">
                    <span
                      className="aag-mc-badge"
                      style={{
                        background: `${model.color}22`,
                        color: model.color,
                        borderColor: `${model.color}44`,
                      }}
                    >
                      {model.badge}
                    </span>
                    <span className="aag-mc-credits">{model.credits}cr/image</span>
                  </div>
                </div>

                <p className="aag-mc-specialty">{model.specialty}</p>

                <div className="aag-mc-strengths">
                  {model.strengths.map((s) => (
                    <span key={s} className="aag-mc-strength">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="aag-models-cta">
            <p className="aag-models-cta-text">
              All 7 models are available on Creator plans. Try them all to find your perfect match.
            </p>
            <button className="aag-cta-primary" onClick={handleCTAClick}>
              Access All 7 Models →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          USE CASES
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-uses-section" id="use-cases" aria-labelledby="uses-title">
        <div className="aag-container">
          <SectionHeading
            id="uses-title"
            eyebrow="Real-World Uses"
            title="Who's Creating AI Art — and Why"
            sub="From indie authors to game developers to fashion brands — here's how AI art is transforming creative work in 2026."
          />

          <div className="aag-uses-grid">
            {USE_CASES.map((uc, i) => (
              <motion.article
                key={uc.title}
                className="aag-use-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ "--uc-color": uc.color } as React.CSSProperties}
              >
                <div className="aag-uc-top">
                  <span className="aag-uc-icon">{uc.icon}</span>
                  <span className="aag-uc-stat">{uc.stat}</span>
                </div>
                <h3 className="aag-uc-title">{uc.title}</h3>
                <p className="aag-uc-desc">{uc.description}</p>
                <div className="aag-uc-prompt">
                  <span className="aag-uc-prompt-label">Example prompt:</span>
                  <em>"{uc.example}"</em>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPETITOR COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-compare-section" id="comparison" aria-labelledby="compare-title">
        <div className="aag-container">
          <SectionHeading
            id="compare-title"
            eyebrow="Competitor Analysis"
            title="Scenith vs Midjourney vs DALL-E vs Stable Diffusion"
            sub="An honest, feature-by-feature comparison of the leading AI art generators in 2026."
          />

          <div className="aag-table-wrap" role="region" aria-label="AI art generator comparison table" tabIndex={0}>
            <table className="aag-compare-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="aag-col-scenith">Scenith ✦</th>
                  <th scope="col">Midjourney</th>
                  <th scope="col">DALL-E 3</th>
                  <th scope="col">Stable Diffusion</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr key={row.feature} className={row.highlight ? "aag-row-highlight" : ""}>
                    <td className="aag-col-feature">{row.feature}</td>
                    <td className="aag-col-scenith">{row.scenith}</td>
                    <td>{row.midjourney}</td>
                    <td>{row.dalle}</td>
                    <td>{row.stable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="aag-compare-note">
            Comparison based on publicly available information as of Q1 2026. Features may have changed. Scenith actively updates its model lineup.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TABBED DEEP-DIVE (Tips / History / Models)
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-deepdive-section" id="deep-dive" aria-labelledby="deepdive-title">
        <div className="aag-container">
          <SectionHeading
            id="deepdive-title"
            eyebrow="Deep Dive"
            title="Everything You Need to Know About AI Art"
            sub="The technology, the history, the techniques — all in one place."
          />

          <div className="aag-tabs-header" role="tablist">
            {(["tips", "history", "models"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`aag-tab-btn ${activeTab === tab ? "aag-tab-btn--active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "tips" && "🎓 Prompt Tips"}
                {tab === "history" && "📜 AI Art History"}
                {tab === "models" && "🤖 How Models Work"}
              </button>
            ))}
          </div>

          <div className="aag-tab-content-wrap">
            {activeTab === "tips" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="aag-tab-content"
              >
                <div className="aag-tips-prose">
                  <h3>Advanced Prompt Engineering for AI Art</h3>
                  <p>
                    The gap between a good AI art prompt and a great one can be enormous. Modern models like FLUX 1.1
                    Pro and Imagen 4 understand natural language remarkably well — but they respond even better to
                    structured, information-dense prompts that leave nothing to ambiguity.
                  </p>
                  <h4>The Weight Principle</h4>
                  <p>
                    Most AI art models weight the beginning of your prompt more heavily. Lead with what matters most.
                    If you're generating a portrait, start with "Portrait of a woman..." not "A beautiful,
                    detailed, high-resolution image of a portrait of a woman..." The adjectives come after the
                    subject.
                  </p>
                  <h4>Style Stacking</h4>
                  <p>
                    You can blend multiple art styles by listing them. "Watercolor and ink illustration, Moebius
                    meets Miyazaki aesthetic" creates fascinating hybrid outputs. The key is keeping the styles
                    thematically compatible — oil painting and pixel art will fight each other, but watercolor
                    and pen illustration are natural partners.
                  </p>
                  <h4>The Negative Prompt Stack</h4>
                  <p>
                    Build a personal negative prompt library for different use cases. Here's a production-ready
                    starting stack for photorealistic work:
                  </p>
                  <div className="aag-code-block">
                    <code>
                      blurry, low quality, compressed, artifact, watermark, text, signature, logo, deformed,
                      mutated, extra limbs, extra fingers, missing fingers, bad anatomy, ugly, worst quality,
                      JPEG compression, noise grain, oversaturated
                    </code>
                  </div>
                  <h4>Resolution and Aspect Ratio Signals</h4>
                  <p>
                    Mention resolution and format in your prompt — models use these as quality signals.
                    "8K resolution, ultra-detailed, sharp focus" signals the model to prioritize detail.
                    "Wide cinematic aspect ratio, panoramic" guides composition even when the output is square.
                  </p>
                  <h4>Temporal and Environmental Context</h4>
                  <p>
                    Time of day and weather dramatically affect mood. "3 PM harsh overhead sun" vs "golden hour"
                    vs "blue hour twilight" vs "overcast diffuse light" will produce completely different
                    emotional results from the same subject. Always be explicit.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "history" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="aag-tab-content"
              >
                <div className="aag-timeline">
                  {HISTORY_TIMELINE.map((event, i) => (
                    <div key={event.year} className="aag-timeline-item">
                      <div className="aag-tl-left">
                        <span className="aag-tl-icon">{event.icon}</span>
                        <span className="aag-tl-year">{event.year}</span>
                      </div>
                      <div className="aag-tl-line" aria-hidden="true">
                        <div className="aag-tl-dot" />
                        {i < HISTORY_TIMELINE.length - 1 && <div className="aag-tl-connector" />}
                      </div>
                      <div className="aag-tl-right">
                        <h4 className="aag-tl-title">{event.title}</h4>
                        <p className="aag-tl-body">{event.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "models" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="aag-tab-content"
              >
                <div className="aag-models-prose">
                  <h3>How AI Image Generation Models Actually Work</h3>
                  <p>
                    Understanding the underlying technology helps you prompt better and choose the right model.
                    Here's a plain-language breakdown of the architectures powering the tools you use every day.
                  </p>
                  <h4>Diffusion Models: The Dominant Architecture</h4>
                  <p>
                    Every model currently available on Scenith — FLUX, Imagen, GPT Image, Grok Aurora — is based
                    on diffusion. The core idea: take a pure-noise image and gradually "denoise" it, guided by
                    your text prompt, until you have a coherent picture. Each denoising step is done by a trained
                    neural network that has learned what "reducing noise while respecting the prompt" looks like
                    from hundreds of millions of training examples.
                  </p>
                  <h4>Text Understanding: CLIP, T5, and LLMs</h4>
                  <p>
                    The text encoding component is what translates your words into a mathematical form the image
                    model can use. Older models used CLIP — a joint text-image embedding space. Modern models
                    (FLUX, Imagen 4) use large language model encoders (T5-XXL, GPT-style transformers) that
                    understand language far more deeply. This is why "a red ball that is to the left of a blue
                    cube" works in FLUX but failed in Stable Diffusion 1.4.
                  </p>
                  <h4>Why Different Models Excel at Different Things</h4>
                  <p>
                    Training data composition and architecture choices create characteristic strengths.
                    Imagen 4 was trained heavily on photography and excels at photorealism and color science.
                    FLUX 1.1 Pro used a flow-matching architecture that dramatically improves anatomy and
                    spatial reasoning. Grok Aurora's training included more surrealist and abstract art, making
                    it the best choice for conceptual and non-representational prompts.
                  </p>
                  <h4>Why Does Generation Take Time?</h4>
                  <p>
                    Standard diffusion requires 20–50 denoising steps, each a forward pass through a billion+
                    parameter model. "Fast" variants (Imagen 4 Fast, stability-core) use fewer steps or smaller
                    architectures. Scenith's GPU infrastructure is optimized to run these models efficiently,
                    which is why generation completes in 3–8 seconds instead of the minutes required by
                    self-hosted setups.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-faq-section" id="faq" aria-labelledby="faq-title">
        <div className="aag-container aag-container--narrow">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions About AI Art, Answered"
            sub="Everything you've wondered about AI art generation — from prompting techniques to legal rights."
          />

          <div className="aag-faq-list" role="list">
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                className={`aag-faq-item ${expandedFaq === i ? "aag-faq-item--open" : ""}`}
                role="listitem"
              >
                <button
                  className="aag-faq-q"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="aag-faq-chevron" aria-hidden="true">
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  id={`faq-answer-${i}`}
                  className="aag-faq-a"
                  initial={false}
                  animate={
                    expandedFaq === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="aag-faq-a-inner">{item.a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WORKFLOW INTEGRATION SECTION
      ══════════════════════════════════════════ */}
      <section className="aag-section aag-workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div className="aag-container">
          <SectionHeading
            id="workflow-title"
            eyebrow="Complete Workflow"
            title="Generate. Edit. Publish. All on Scenith."
            sub="AI art generation is the beginning. Here's how to take your creation from raw output to polished final piece."
          />

          <div className="aag-workflow-steps">
            {[
              {
                n: "01",
                title: "Generate",
                desc: "Describe your vision, pick your model and style, generate your base image in seconds.",
                icon: "✨",
                color: "#8b5cf6",
              },
              {
                n: "02",
                title: "Edit",
                desc: "Open directly in Scenith's free Image Editor. Add text, effects, overlays, crop, reframe.",
                icon: "🖼️",
                color: "#3b82f6",
              },
              {
                n: "03",
                title: "Voiceover",
                desc: "Pair with our AI Voice Generator to create scroll-stopping Reels, TikToks, and YouTube Shorts.",
                icon: "🎤",
                color: "#f59e0b",
              },
              {
                n: "04",
                title: "Publish",
                desc: "Download full-resolution PNG with commercial rights. No watermarks. Ready to deploy anywhere.",
                icon: "🚀",
                color: "#22c55e",
              },
            ].map((step, i) => (
              <React.Fragment key={step.n}>
                <motion.div
                  className="aag-wf-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ "--wf-color": step.color } as React.CSSProperties}
                >
                  <span className="aag-wf-n">{step.n}</span>
                  <span className="aag-wf-icon">{step.icon}</span>
                  <h3 className="aag-wf-title">{step.title}</h3>
                  <p className="aag-wf-desc">{step.desc}</p>
                </motion.div>
                {i < 3 && (
                  <div className="aag-wf-arrow" aria-hidden="true">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="aag-workflow-tools">
            <a href="https://scenith.in/tools/image-editing" className="aag-tool-link">
              <span>🖼️</span>
              <span>Free Image Editor</span>
              <span className="aag-tool-arrow">→</span>
            </a>
            <a href="https://scenith.in/tools/ai-voice-generation" className="aag-tool-link">
              <span>🎤</span>
              <span>AI Voice Generator</span>
              <span className="aag-tool-arrow">→</span>
            </a>
            <a href="https://scenith.in/tools/add-subtitles-to-videos" className="aag-tool-link">
              <span>📝</span>
              <span>Subtitle Generator</span>
              <span className="aag-tool-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="aag-final-cta" aria-labelledby="final-cta-title">
        <div className="aag-fca-noise" aria-hidden="true" />
        <div className="aag-container aag-container--narrow aag-fca-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="final-cta-title" className="aag-fca-title">
              Your next great piece of AI art
              <br />
              is one prompt away.
            </h2>
            <p className="aag-fca-sub">
              Join thousands of creators generating art with FLUX, Imagen 4, GPT Image, and Grok Aurora.
              Start free. Upgrade when you're ready.
            </p>
            <motion.button
              className="aag-cta-primary aag-cta-primary--large"
              onClick={handleCTAClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="aag-cta-icon">🎨</span>
              Launch AI Art Generator
              <span className="aag-cta-arrow">→</span>
            </motion.button>
            <div className="aag-fca-trust">
              <span>✓ Plans from ₹99/mo</span>
              <span>✓ Commercial rights included</span>
              <span>✓ No watermarks</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── Small reusable heading component ──
function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="aag-section-heading"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="aag-section-eyebrow">{eyebrow}</span>
      <h2 id={id} className="aag-section-title">{title}</h2>
      <p className="aag-section-sub">{sub}</p>
    </motion.div>
  );
}