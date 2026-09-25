// app/(main)/tools/content-calendar-planner/page.tsx
// SEO landing page for Scenith Content Engine (the AI content planner inside /create-ai-content).
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "content-calendar-planner";
const PAGE_URL = `https://scenith.in/tools/${SLUG}`;
const UTM = `utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const ENGINE_URL = `/create-ai-content/content-engine?${UTM}`;
const STUDIO_URL = `/create-ai-content?${UTM}`;
const PRICING_URL = `/pricing?src=${SLUG}`;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Content Planner & Content Calendar Generator (2026) | Scenith",
  description:
    "Plan up to 90 days of social media content in minutes. Scenith’s AI content planner writes hooks, captions, CTAs and shot ideas for Instagram, TikTok, YouTube and X — then helps you create every post.",
  keywords: [
    "ai content planner",
    "content calendar planner",
    "ai content calendar generator",
    "social media content planner",
    "social media content calendar",
    "content calendar generator",
    "30 day content plan generator",
    "content planner for instagram",
    "tiktok content planner",
    "youtube content planner",
    "content planning tool",
    "ai social media planner",
    "content calendar template",
    "multi platform content planner",
    "content ideas generator",
    "content pillars planner",
    "content plan for creators",
    "social media content plan for small business",
    "content calendar for agencies",
    "monthly content calendar ai",
  ],
  openGraph: {
    title: "AI Content Planner — Generate a Full Content Calendar in Minutes | Scenith",
    description:
      "Describe your brand once. Get a day-by-day content calendar with hooks, captions, CTAs and creative direction for Instagram, TikTok, YouTube and X.",
    url: PAGE_URL,
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Planner & Calendar Generator | Scenith",
    description:
      "A full social media content calendar — hooks, captions, CTAs and shot ideas — generated for Instagram, TikTok, YouTube and X.",
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── Content data (also feeds the JSON-LD so schema always matches the page) ──
const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI content planner?",
    a: "An AI content planner is a tool that turns a short brief about your brand — niche, audience, goal, platforms and tone — into a complete content calendar. Instead of a blank spreadsheet, you get a day-by-day plan where every slot already has a content idea, a format, a hook, a caption, a call-to-action and creative direction. Scenith’s AI content planner is called Content Engine and lives inside the Scenith AI studio.",
  },
  {
    q: "Which platforms does Scenith’s content calendar planner support?",
    a: "Content Engine plans content for Instagram, TikTok, YouTube and X (Twitter). You can pick one platform or several for the same plan, and any single idea can have separate platform versions — for example an Instagram Reel caption and an X thread built from the same concept.",
  },
  {
    q: "How many days of content can I plan at once?",
    a: "A single plan can cover anything from 1 day upwards, limited by the planning days left on your subscription. Creator Lite includes 25 planning days per month, Creator Spark includes 60, and Creator Odyssey includes 90. Planning days are a monthly total, so on Creator Lite you could run one 25-day plan or split it into a 15-day plan and a 10-day plan.",
  },
  {
    q: "Is the AI content planner free?",
    a: "Scenith itself is free to sign up for, and the image, video and voice tools have a free tier. Content Engine, the AI content planner, is included on the paid Creator plans starting with Creator Lite (₹799/month in India, $9/month internationally), alongside your monthly credits, voice characters and watermark-free exports.",
  },
  {
    q: "What does each planned post include?",
    a: "Every item in your calendar has an idea or title, a content format (Reel, Short, Carousel, Thread and so on), a hook for the first seconds or first line, a full caption, a CTA, creative direction describing what to film or design, and a notes field for your own reminders. You can edit any field by hand at any time.",
  },
  {
    q: "Can I change or regenerate ideas I don’t like?",
    a: "Yes. You can regenerate a whole plan, a single content item, or one platform version of an item with AI. Regenerations have a daily limit that resets every day, but your own manual edits are unlimited and never count against it.",
  },
  {
    q: "How do I turn a planned idea into an actual post?",
    a: "Each item has a “Create with Scenith” button. It opens the Scenith AI studio with the item’s creative direction already filled in as the prompt — on the video tab for Reels, Shorts and TikToks, or the image tab for posts and carousels. You can also add an AI voiceover, then upload the finished file back to the item so everything stays in one place.",
  },
  {
    q: "Can I track what’s been posted?",
    a: "Yes. Every item has a status — Planned, In progress, Ready, Posted or Archived. The list view lets you filter by platform and status, so you can instantly see what still needs filming, what is ready to go and what has already gone live.",
  },
  {
    q: "Does Content Engine auto-post to my social accounts?",
    a: "No. Content Engine is a planner and production workspace, not an auto-publisher, and it does not need access to your Instagram, TikTok, YouTube or X accounts. You download your finished assets, post them natively (which platforms tend to prefer) and mark them as Posted.",
  },
  {
    q: "Can agencies or social media managers use it for multiple clients?",
    a: "Yes. You can run several active content plans at the same time — one per client, brand or channel — each with its own niche, audience, tone and content pillars. When a campaign ends, archive the plan to free up an active-plan slot.",
  },
  {
    q: "How is this different from ChatGPT or a content calendar template?",
    a: "A chat prompt gives you a wall of text you then have to copy into a spreadsheet, and a template gives you empty cells. Content Engine produces a structured, editable calendar organised by date and platform, tracks the status of each piece, stores the finished files, and connects every idea directly to AI image, video and voice generation.",
  },
  {
    q: "What should I write in the plan brief to get the best calendar?",
    a: "Be specific. Instead of “fitness”, write “home workouts for busy mothers over 30”. Name a concrete goal such as “grow email list” or “drive app installs”, list 3–5 content pillars, and describe your tone in two or three words. Specific briefs produce specific hooks; vague briefs produce generic ones.",
  },
];

const HOWTO_STEPS: { title: string; body: string }[] = [
  {
    title: "Open Content Engine",
    body: "Go to the Scenith AI studio and click Content Engine in the sidebar, then choose “Create a content plan”.",
  },
  {
    title: "Name the plan and set the dates",
    body: "Give it a title like “October launch”, pick a start date and a duration in days. The planner shows how many planning days you have left before and after creation.",
  },
  {
    title: "Pick your platforms",
    body: "Select Instagram, TikTok, YouTube and/or X. The calendar will generate platform-appropriate formats for each one.",
  },
  {
    title: "Write a short brief",
    body: "Add your niche, audience, goal, posting frequency, tone and comma-separated content pillars. This is what the AI plans around.",
  },
  {
    title: "Generate the calendar with AI",
    body: "Keep “Generate content ideas with AI” switched on and click Generate plan. You get a day-by-day calendar with hooks, captions, CTAs and creative direction.",
  },
  {
    title: "Edit, create and track",
    body: "Tweak anything, regenerate what doesn’t land, hit “Create with Scenith” to produce the visual or video, upload the final file and mark it Posted.",
  },
];

const PLATFORMS = [
  {
    icon: "📸",
    name: "Instagram content planner",
    formats: "Reels · Carousels · Stories · Single posts",
    body: "Plan a mix of reach-driving Reels and save-driving carousels. Each Reel slot gets a scroll-stopping hook and on-screen direction; each carousel slot gets a clear headline angle and a caption built to earn saves and shares.",
    link: { href: "/tools/ai-content-calendar-for-instagram", label: "Instagram calendar guide" },
  },
  {
    icon: "🎵",
    name: "TikTok content planner",
    formats: "Short videos · Hook tests · Reply videos · Series",
    body: "TikTok rewards volume and fast hooks. The planner writes punchy opening lines, suggests multi-part series that keep viewers coming back, and gives creative direction you can film in one take or generate as AI video.",
    link: { href: "/tools/ai-content-generator-for-tiktok", label: "AI content for TikTok" },
  },
  {
    icon: "▶️",
    name: "YouTube content planner",
    formats: "Shorts · Long-form outlines · Community posts",
    body: "Plan Shorts that feed your long-form channel, video titles with a clear promise, and community posts to keep subscribers engaged between uploads. Pair it with AI voiceovers for faceless channels.",
    link: { href: "/tools/ai-content-generator-for-youtube", label: "AI content for YouTube" },
  },
  {
    icon: "𝕏",
    name: "X (Twitter) content planner",
    formats: "Threads · Single posts · Opinion takes",
    body: "Turn your best ideas into threads with a strong first line and a clean CTA. Use platform versions to rewrite a Reel concept as a thread without starting from scratch.",
    link: { href: "/tools/social-media-post-generator-ai", label: "Social post generator" },
  },
];

const EXAMPLE_PLANS = [
  {
    niche: "Fitness coach",
    brief: "Home workouts for busy professionals · Goal: coaching sign-ups · Tone: motivating, no-nonsense",
    rows: [
      ["Mon", "Instagram", "Reel", "“You don’t need a gym. You need 12 minutes.”"],
      ["Tue", "TikTok", "Video", "“3 exercises you’re doing wrong at home”"],
      ["Wed", "Instagram", "Carousel", "“The 5-day desk-worker reset plan”"],
      ["Thu", "YouTube", "Short", "“Full-body workout, zero equipment, 60 seconds”"],
      ["Fri", "X", "Thread", "“What 100 clients taught me about consistency”"],
      ["Sat", "Instagram", "Story", "Poll: “Morning or evening workouts?”"],
      ["Sun", "TikTok", "Video", "Client transformation story + coaching CTA"],
    ],
  },
  {
    niche: "SaaS founder",
    brief: "AI productivity app · Audience: freelancers · Goal: free trials · Tone: smart, friendly",
    rows: [
      ["Mon", "X", "Thread", "“I tracked every hour for 30 days. Here’s where it went.”"],
      ["Tue", "Instagram", "Carousel", "“7 tasks you should never do manually in 2026”"],
      ["Wed", "YouTube", "Short", "Screen demo: “Invoice to paid in 40 seconds”"],
      ["Thu", "TikTok", "Video", "“Freelancer red flags: client edition”"],
      ["Fri", "Instagram", "Reel", "Behind the scenes: shipping a feature in a week"],
      ["Sat", "X", "Post", "Hot take on tool fatigue + reply prompt"],
      ["Sun", "YouTube", "Community", "Poll: “What should we build next?”"],
    ],
  },
  {
    niche: "Local café",
    brief: "Specialty coffee in Ahmedabad · Audience: students & remote workers · Goal: footfall",
    rows: [
      ["Mon", "Instagram", "Reel", "Latte art in slow motion + “Monday fuel” hook"],
      ["Tue", "Instagram", "Story", "Quiz: “Guess today’s single-origin”"],
      ["Wed", "TikTok", "Video", "“Rating our menu honestly, 1 to 10”"],
      ["Thu", "Instagram", "Carousel", "“Best corners to work from (with Wi-Fi speeds)”"],
      ["Fri", "YouTube", "Short", "“Day in the life of a barista”"],
      ["Sat", "Instagram", "Reel", "Weekend special reveal + visit CTA"],
      ["Sun", "TikTok", "Video", "Regulars answer “Why this café?”"],
    ],
  },
];

const COMPARE_ROWS: [string, string, string, string][] = [
  ["Generates ideas for you", "✅ Full calendar from one brief", "❌ Empty cells", "⚠️ Text you must copy out"],
  ["Hook + caption + CTA per post", "✅ Built into every item", "❌ Manual", "⚠️ If you prompt for it"],
  ["Organised by date & platform", "✅ Calendar and list views", "⚠️ If you build it", "❌ No"],
  ["Separate version per platform", "✅ Instagram, TikTok, YouTube, X", "❌ Manual", "⚠️ Separate prompts"],
  ["Status tracking (Planned → Posted)", "✅ Built in with filters", "⚠️ Manual column", "❌ No"],
  ["Store finished videos & images", "✅ Upload to each item", "❌ Separate folders", "❌ No"],
  ["Create the image/video/voiceover", "✅ One click into AI studio", "❌ Separate tools", "❌ Separate tools"],
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContentCalendarPlannerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "AI Content Planner & Content Calendar Generator",
        description:
          "Generate a day-by-day social media content calendar with hooks, captions, CTAs and creative direction for Instagram, TikTok, YouTube and X.",
        isPartOf: { "@type": "WebSite", name: "Scenith", url: "https://scenith.in" },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE_URL}#app`,
        name: "Scenith Content Engine — AI Content Planner",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        url: PAGE_URL,
        featureList: [
          "AI-generated content calendar from a brand brief",
          "Planning for Instagram, TikTok, YouTube and X",
          "Hook, caption, CTA and creative direction for every post",
          "Platform-specific versions of each idea",
          "Regenerate plans, items or versions with AI",
          "Status tracking: Planned, In progress, Ready, Posted, Archived",
          "Asset uploads (MP4, MOV, JPG, PNG, WEBP)",
          "One-click hand-off to AI image, video and voice generation",
        ],
        offers: [
          { "@type": "Offer", name: "Creator Lite", price: "799", priceCurrency: "INR" },
          { "@type": "Offer", name: "Creator Lite", price: "9", priceCurrency: "USD" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to create an AI content calendar with Scenith",
        totalTime: "PT5M",
        step: HOWTO_STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI Content Planner", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="ccp-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="ccp-breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li aria-current="page">AI Content Planner</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <header className="ccp-hero">
        <div className="ccp-container ccp-hero__grid">
          <div className="ccp-hero__copy">
            <span className="ccp-eyebrow">🗓️ Scenith Content Engine</span>
            <h1>
              AI Content Planner: Generate a Full <span className="ccp-grad">Content Calendar</span> for
              Instagram, TikTok, YouTube &amp; X
            </h1>
            <p className="ccp-lead">
              Describe your brand once. Scenith’s AI content calendar generator writes a day-by-day
              plan — <strong>hooks, captions, CTAs and shot direction</strong> for every post — then
              sends any idea straight into the AI studio to become an image, video or voiceover.
            </p>
            <div className="ccp-cta-row">
              <Link href={ENGINE_URL} className="ccp-btn ccp-btn--primary">Plan my content with AI →</Link>
              <Link href={PRICING_URL} className="ccp-btn ccp-btn--ghost">See plans</Link>
            </div>
            <ul className="ccp-hero__facts">
              <li>📅 Up to 90 planning days / month</li>
              <li>🎯 4 platforms, one plan</li>
              <li>⚡ From brief to calendar in minutes</li>
            </ul>
          </div>

          {/* Static product preview — mirrors the real Content Engine data model */}
          <div className="ccp-preview" aria-label="Example of a planned content day">
            <div className="ccp-preview__bar" aria-hidden="true">
              <span /><span /><span />
              <em>Content Engine · October launch · Day 4</em>
            </div>
            <div className="ccp-preview__body">
              <p className="ccp-preview__date">Thursday — 5 pieces planned</p>
              <div className="ccp-item ccp-item--open">
                <div className="ccp-item__head">
                  <span className="ccp-tag ccp-tag--ig">📸 Instagram</span>
                  <strong>3 editing mistakes beginners make</strong>
                  <span className="ccp-status ccp-status--ready">Ready</span>
                </div>
                <dl className="ccp-item__fields">
                  <div><dt>Format</dt><dd>Reel</dd></div>
                  <div><dt>Hook</dt><dd>“If your videos feel amateur, it’s probably one of these three.”</dd></div>
                  <div><dt>Caption</dt><dd>Mistake #2 is the one nobody talks about… Save this before your next edit.</dd></div>
                  <div><dt>CTA</dt><dd>Comment “EDIT” for the checklist</dd></div>
                  <div><dt>Creative direction</dt><dd>Split-screen before/after, fast cuts, bold captions</dd></div>
                </dl>
                <span className="ccp-item__make">⚡ Create with Scenith →</span>
              </div>
              <div className="ccp-item">
                <span className="ccp-tag ccp-tag--tt">🎵 TikTok</span>
                <strong>Hook test — “Nobody tells you this about editing”</strong>
                <span className="ccp-status ccp-status--progress">In progress</span>
              </div>
              <div className="ccp-item">
                <span className="ccp-tag ccp-tag--yt">▶️ YouTube</span>
                <strong>Short — Fastest way to cut a scene</strong>
                <span className="ccp-status ccp-status--planned">Planned</span>
              </div>
              <div className="ccp-item">
                <span className="ccp-tag ccp-tag--x">𝕏 X</span>
                <strong>Thread — What I learned editing 100 videos</strong>
                <span className="ccp-status ccp-status--posted">Posted</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="ccp-toc ccp-container" aria-label="On this page">
        <strong>On this page:</strong>
        <a href="#what-is">What is an AI content planner</a>
        <a href="#whats-included">What each post includes</a>
        <a href="#how-to">How to plan</a>
        <a href="#platforms">Platforms</a>
        <a href="#examples">Example calendars</a>
        <a href="#strategy">Strategy guide</a>
        <a href="#compare">Comparison</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>

      {/* ── WHAT IS ── */}
      <section id="what-is" className="ccp-section">
        <div className="ccp-container ccp-prose">
          <h2>What is an AI content planner?</h2>
          <p className="ccp-definition">
            An <strong>AI content planner</strong> is a tool that turns a short description of your
            brand, audience and goals into a ready-to-execute <strong>social media content calendar</strong>.
            Instead of filling an empty spreadsheet, you get every day pre-planned with a content idea,
            the right format for each platform, a hook, a caption, a call-to-action and notes on what
            to film or design.
          </p>
          <p>
            Most creators don’t struggle with <em>making</em> content — they struggle with deciding
            <em> what</em> to make, every single day. By Wednesday the ideas run dry, the same concept
            gets rewritten by hand for four different apps, and finished videos end up scattered across
            camera rolls, Drive folders and WhatsApp chats. A content planning tool fixes the part that
            happens <em>before</em> the camera rolls.
          </p>
          <p>
            Scenith’s AI content planner is called <strong>Content Engine</strong>. It sits inside the
            same studio that already generates your{" "}
            <Link href="/tools/ai-image-generation">AI images</Link>,{" "}
            <Link href="/tools/ai-video-generation">AI videos</Link> and{" "}
            <Link href="/tools/ai-voice-generation">AI voiceovers</Link> — so the calendar doesn’t just
            tell you what to post, it gets you one click away from actually making it.
          </p>

          <div className="ccp-pain-grid">
            {[
              ["🎬", "Posting daily?", "Stop running out of ideas halfway through the week."],
              ["📱", "On multiple platforms?", "Stop rewriting the same idea four times by hand."],
              ["🗂️", "Batch creating?", "Stop losing track of which clip goes where."],
              ["🏢", "Managing clients?", "Stop juggling separate spreadsheets for every brand."],
            ].map(([icon, t, b]) => (
              <div key={t} className="ccp-pain">
                <span>{icon}</span>
                <strong>{t}</strong>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="whats-included" className="ccp-section ccp-section--soft">
        <div className="ccp-container">
          <h2 className="ccp-center">What every post in your AI content calendar includes</h2>
          <p className="ccp-intro">
            Content Engine doesn’t hand you a list of vague topics. Every slot in the calendar is a
            production-ready brief you can film, design or generate straight away.
          </p>
          <div className="ccp-feature-grid">
            {[
              ["💡", "Idea / title", "A specific, clickable concept — not just “post about fitness”."],
              ["🎞️", "Content format", "Reel, Short, Carousel, Story, Thread… matched to the platform."],
              ["🪝", "Hook", "The first line or first 3 seconds, written to stop the scroll."],
              ["✍️", "Caption", "A full caption in your chosen tone, ready to paste."],
              ["📣", "Call-to-action", "One clear ask — comment, save, follow, sign up or visit."],
              ["🎥", "Creative direction", "What to show on screen: shots, text overlays, pacing, style."],
              ["📝", "Notes", "Your own reminders — props, collaborators, talking points."],
              ["🔁", "Platform versions", "The same idea rewritten properly for each platform you use."],
              ["📦", "Asset storage", "Upload the finished MP4, MOV, JPG, PNG or WEBP to the post."],
            ].map(([icon, t, b]) => (
              <article key={t} className="ccp-feature">
                <span className="ccp-feature__icon">{icon}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ── */}
      <section id="how-to" className="ccp-section">
        <div className="ccp-container">
          <h2 className="ccp-center">How to create a content calendar with AI (step by step)</h2>
          <p className="ccp-intro">
            From an empty page to a full month of planned posts in about five minutes.
          </p>
          <ol className="ccp-steps">
            {HOWTO_STEPS.map((s, i) => (
              <li key={s.title} className="ccp-step">
                <span className="ccp-step__n">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="ccp-brief">
            <div className="ccp-brief__head">
              <strong>Example brief that produces a great calendar</strong>
              <span>Copy the structure, swap in your details</span>
            </div>
            <dl>
              <div><dt>Plan title</dt><dd>October launch</dd></div>
              <div><dt>Duration</dt><dd>25 days</dd></div>
              <div><dt>Platforms</dt><dd>Instagram, TikTok, YouTube</dd></div>
              <div><dt>Niche / topic</dt><dd>Budget skincare for oily, acne-prone skin</dd></div>
              <div><dt>Audience</dt><dd>College students in India, 18–24</dd></div>
              <div><dt>Goal</dt><dd>Grow followers and drive clicks to our product page</dd></div>
              <div><dt>Posting frequency</dt><dd>1–2 posts/day</dd></div>
              <div><dt>Tone</dt><dd>Honest, friendly, a little funny</dd></div>
              <div><dt>Content pillars</dt><dd>education, myth-busting, routines, reviews, behind the scenes</dd></div>
            </dl>
            <Link href={ENGINE_URL} className="ccp-btn ccp-btn--primary ccp-btn--block">
              Use this brief in Content Engine →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PLAN → CREATE WORKFLOW ── */}
      <section className="ccp-section ccp-section--dark">
        <div className="ccp-container">
          <h2 className="ccp-center">Plan it, create it, track it — in one place</h2>
          <p className="ccp-intro ccp-intro--light">
            Most content calendar tools stop at the calendar. Content Engine is connected to the full
            Scenith AI studio, so every planned post has a direct path to being finished.
          </p>
          <div className="ccp-flow">
            <div className="ccp-flow__card">
              <span className="ccp-flow__tag">1 · Plan</span>
              <h3>Content Engine</h3>
              <p>AI writes your calendar: ideas, formats, hooks, captions, CTAs and creative direction for every day.</p>
            </div>
            <span className="ccp-flow__arrow" aria-hidden="true">→</span>
            <div className="ccp-flow__card">
              <span className="ccp-flow__tag">2 · Create</span>
              <h3>Scenith AI Studio</h3>
              <p>“Create with Scenith” opens the studio with the brief pre-filled — video tab for Reels and Shorts, image tab for posts and carousels.</p>
            </div>
            <span className="ccp-flow__arrow" aria-hidden="true">→</span>
            <div className="ccp-flow__card">
              <span className="ccp-flow__tag">3 · Track</span>
              <h3>Status &amp; assets</h3>
              <p>Upload the final file to the item and move it from Planned → In progress → Ready → Posted.</p>
            </div>
          </div>
          <div className="ccp-status-row" aria-label="Content status workflow">
            <span className="ccp-status ccp-status--planned">Planned</span>
            <span className="ccp-status ccp-status--progress">In progress</span>
            <span className="ccp-status ccp-status--ready">Ready</span>
            <span className="ccp-status ccp-status--posted">Posted</span>
            <span className="ccp-status ccp-status--archived">Archived</span>
          </div>
          <p className="ccp-flow__note">
            Switch between the <strong>calendar view</strong> (day by day, grouped by platform) and the{" "}
            <strong>list view</strong> with platform and status filters — perfect for a Sunday batch-filming
            session where you only want to see what’s still “Planned”.
          </p>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section id="platforms" className="ccp-section">
        <div className="ccp-container">
          <h2 className="ccp-center">One content planner for every platform you post on</h2>
          <p className="ccp-intro">
            Each platform has its own formats, pacing and audience expectations. Content Engine plans
            natively for each — and lets you add a separate <strong>platform version</strong> of any idea
            so a Reel concept can become a TikTok, a Short and an X thread without starting from zero.
          </p>
          <div className="ccp-platform-grid">
            {PLATFORMS.map((p) => (
              <article key={p.name} className="ccp-platform">
                <div className="ccp-platform__head">
                  <span className="ccp-platform__icon">{p.icon}</span>
                  <div>
                    <h3>{p.name}</h3>
                    <span className="ccp-platform__formats">{p.formats}</span>
                  </div>
                </div>
                <p>{p.body}</p>
                <Link href={p.link.href} className="ccp-link">→ {p.link.label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section id="examples" className="ccp-section ccp-section--soft">
        <div className="ccp-container">
          <h2 className="ccp-center">Example 7-day content calendars generated from a brief</h2>
          <p className="ccp-intro">
            Here’s what one week of an AI-generated content plan can look like for three very different
            businesses. In the real planner each row also has a full hook, caption, CTA and creative direction.
          </p>
          <div className="ccp-examples">
            {EXAMPLE_PLANS.map((plan) => (
              <article key={plan.niche} className="ccp-example">
                <h3>{plan.niche}</h3>
                <p className="ccp-example__brief">{plan.brief}</p>
                <div className="ccp-table-wrap">
                  <table className="ccp-table">
                    <thead>
                      <tr><th>Day</th><th>Platform</th><th>Format</th><th>Idea</th></tr>
                    </thead>
                    <tbody>
                      {plan.rows.map((r) => (
                        <tr key={r[0] + r[3]}>
                          <td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>
          <div className="ccp-center ccp-mt">
            <Link href={ENGINE_URL} className="ccp-btn ccp-btn--primary">Generate a calendar for my niche →</Link>
          </div>
        </div>
      </section>

      {/* ── STRATEGY GUIDE ── */}
      <section id="strategy" className="ccp-section">
        <div className="ccp-container ccp-prose">
          <h2>Content planning strategy: how to build a calendar that actually grows your account</h2>
          <p>
            AI can fill a calendar in seconds, but the brief you give it — and how you use the plan —
            decides whether it grows your audience. These are the principles experienced social media
            managers use, and how to apply each one inside Content Engine.
          </p>

          <h3>1. Start with 3–5 content pillars</h3>
          <p>
            Content pillars are the recurring themes your account is known for. A skincare brand might use
            <em> education, myth-busting, routines, reviews</em> and <em>behind the scenes</em>. Pillars keep
            your feed varied without drifting off-topic, and they give the AI a structure to rotate through.
            Enter them comma-separated in the “Content pillars” field and your calendar will balance them
            across the plan automatically.
          </p>
          <div className="ccp-pillars">
            {[
              ["Educate", "Tips, how-tos, explainers", "Builds authority and saves"],
              ["Entertain", "Trends, humour, relatable moments", "Builds reach and shares"],
              ["Inspire", "Stories, transformations, wins", "Builds emotional connection"],
              ["Connect", "Behind the scenes, Q&As, polls", "Builds trust and comments"],
              ["Convert", "Offers, demos, testimonials", "Drives sign-ups and sales"],
            ].map(([t, what, why]) => (
              <div key={t} className="ccp-pillar">
                <strong>{t}</strong>
                <span>{what}</span>
                <em>{why}</em>
              </div>
            ))}
          </div>

          <h3>2. Pick a posting frequency you can sustain</h3>
          <p>
            Consistency beats intensity. A realistic schedule you keep for three months will outperform an
            ambitious one you abandon after two weeks. Use these as common starting points, then adjust
            based on your own analytics:
          </p>
          <div className="ccp-table-wrap">
            <table className="ccp-table ccp-table--compact">
              <thead>
                <tr><th>Platform</th><th>Starting cadence</th><th>Best-performing formats</th></tr>
              </thead>
              <tbody>
                <tr><td>Instagram</td><td>4–7 posts / week</td><td>Reels for reach, carousels for saves, Stories daily</td></tr>
                <tr><td>TikTok</td><td>1–3 videos / day</td><td>Short hook-first videos, series, reply videos</td></tr>
                <tr><td>YouTube</td><td>3–7 Shorts / week + 1 long-form</td><td>Shorts to discover, long-form to retain</td></tr>
                <tr><td>X (Twitter)</td><td>1–3 posts / day</td><td>Threads, opinions, quick takes</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Type your target into the “Posting frequency” field (for example <em>1–2 posts/day</em>) and the
            planner will size the calendar accordingly. You can always add or delete items on any day.
          </p>

          <h3>3. Write hooks first, content second</h3>
          <p>
            On short-form video, the first one to three seconds decide whether anyone sees the rest. That’s
            why every item in Content Engine has a dedicated hook field. If a hook feels weak, regenerate just
            that item instead of the whole plan. For more hook formulas, see our{" "}
            <Link href="/tools/ai-hook-generator-for-reels">AI hook generator for Reels</Link> and the{" "}
            <Link href="/blogs/three-second-rule">three-second rule</Link> breakdown.
          </p>

          <h3>4. Create once, adapt for every platform</h3>
          <p>
            Repurposing is the biggest time-saver in content marketing. One strong idea can become an
            Instagram Reel, a TikTok, a YouTube Short and an X thread. In Content Engine, open any item and
            use <strong>+ Add version</strong> to generate a platform-specific version with its own hook,
            caption and CTA — so you’re adapting, not rewriting. Our guide to{" "}
            <Link href="/blogs/tiktok-to-instagram-trend-migration-strategy">moving trends between TikTok and Instagram</Link>{" "}
            goes deeper on this.
          </p>

          <h3>5. Plan in batches, create in batches</h3>
          <p>
            Batch creation — filming or generating a week of content in one sitting — is how solo creators
            keep up with daily posting. Filter the list view to <em>Planned</em>, work through every item,
            upload the finished files and flip them to <em>Ready</em>. During the week, you only need to post
            and mark each one <em>Posted</em>.
          </p>

          <h3>6. Keep promotion to roughly one post in five</h3>
          <p>
            Audiences follow accounts that give value, not ones that sell constantly. A useful rule of thumb
            is that about 80% of your calendar should educate, entertain or inspire, and around 20% should
            directly promote. Setting a clear goal like <em>“drive signups”</em> tells the AI where to place
            CTAs without turning every post into an ad.
          </p>

          <h3>7. Review weekly and regenerate what doesn’t fit</h3>
          <p>
            A content plan is a living document. Once a week, look at which posts performed best, then edit
            or regenerate the upcoming items to lean into what’s working. Manual edits are unlimited; AI
            regenerations have a daily allowance that resets every day.
          </p>

          <div className="ccp-callout">
            <strong>Common content planning mistakes to avoid</strong>
            <ul>
              <li><b>Vague briefs.</b> “Fitness” gets generic ideas; “home workouts for new mothers” gets specific, shareable ones.</li>
              <li><b>Too many platforms too soon.</b> Master one or two before planning for all four.</li>
              <li><b>No CTA.</b> Every post should ask for one clear action — even if it’s just “save this”.</li>
              <li><b>Planning without producing.</b> Use “Create with Scenith” so ideas become posts the same day.</li>
              <li><b>Losing finished files.</b> Upload every final asset to its item so nothing lives only on your phone.</li>
            </ul>
            <p>
              More on this in{" "}
              <Link href="/blogs/why-your-content-isnt-going-viral-7-mistakes">7 reasons your content isn’t going viral</Link>{" "}
              and our{" "}
              <Link href="/blogs/zero-to-10k-followers-content-strategy-2025">0 to 10K followers content strategy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="ccp-section ccp-section--soft">
        <div className="ccp-container">
          <h2 className="ccp-center">Who uses an AI content planner?</h2>
          <div className="ccp-who-grid">
            {[
              ["🎥", "Content creators & influencers", "Never face a blank calendar again. Plan a month of Reels, TikToks and Shorts around your niche and keep posting consistently.", "/tools/ai-content-generator-for-creators", "AI content for creators"],
              ["👻", "Faceless channel owners", "Plan scripts, hooks and visuals for faceless YouTube and Instagram pages, then generate the video and AI voiceover in the same studio.", "/tools/faceless-youtube-workflow-with-ai", "Faceless workflow with AI"],
              ["📊", "Social media managers", "Run a separate content plan per brand, each with its own tone and pillars, and track every post from idea to published.", "/tools/ai-content-creation-for-social-media-managers", "Tools for social media managers"],
              ["🏢", "Agencies & freelancers", "Keep several client calendars active at once and archive them when campaigns end. Deliver plans faster than your competitors.", "/tools/bulk-content-generator-for-agencies", "Bulk content for agencies"],
              ["🛍️", "Small businesses & D2C brands", "Plan product launches, offers and everyday content without hiring a full marketing team.", "/tools/ai-social-media-content-generator", "AI social media content"],
              ["🚀", "Startups & founders", "Build in public with a planned mix of launch posts, product demos and founder stories across X, LinkedIn-style threads and short video.", "/tools/ai-startup-content-generator", "AI content for startups"],
            ].map(([icon, t, b, href, label]) => (
              <article key={t} className="ccp-who">
                <span className="ccp-who__icon">{icon}</span>
                <h3>{t}</h3>
                <p>{b}</p>
                <Link href={href} className="ccp-link">→ {label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section id="compare" className="ccp-section">
        <div className="ccp-container">
          <h2 className="ccp-center">AI content planner vs spreadsheet template vs ChatGPT prompt</h2>
          <p className="ccp-intro">
            All three can technically give you a content calendar. Only one turns it into finished posts.
          </p>
          <div className="ccp-table-wrap">
            <table className="ccp-table ccp-table--compare">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="ccp-hl">Scenith Content Engine</th>
                  <th>Spreadsheet / template</th>
                  <th>Generic AI chat</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td className="ccp-hl">{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="ccp-section ccp-section--soft">
        <div className="ccp-container">
          <h2 className="ccp-center">Planning days included with every Creator plan</h2>
          <p className="ccp-intro">
            Content Engine is included from Creator Lite, alongside your monthly AI credits, voice
            characters and watermark-free exports. Planning days are a monthly total you can split across
            as many plans as you like.
          </p>
          <div className="ccp-price-grid">
            <article className="ccp-price">
              <h3>Creator Lite</h3>
              <p className="ccp-price__amt">₹799<span>/mo</span> <em>· $9 international</em></p>
              <p className="ccp-price__days"><strong>25</strong> planning days / month</p>
              <p className="ccp-price__eg">e.g. one 25-day plan, or a 15-day + a 10-day plan</p>
            </article>
            <article className="ccp-price ccp-price--hl">
              <span className="ccp-price__badge">Most popular</span>
              <h3>Creator Spark</h3>
              <p className="ccp-price__amt">₹1,749<span>/mo</span> <em>· $19 international</em></p>
              <p className="ccp-price__days"><strong>60</strong> planning days / month</p>
              <p className="ccp-price__eg">e.g. two full 30-day calendars</p>
            </article>
            <article className="ccp-price">
              <h3>Creator Odyssey</h3>
              <p className="ccp-price__amt">₹3,599<span>/mo</span> <em>· $39 international</em></p>
              <p className="ccp-price__days"><strong>90</strong> planning days / month</p>
              <p className="ccp-price__eg">e.g. three client calendars running at once</p>
            </article>
          </div>
          <div className="ccp-center ccp-mt">
            <Link href={PRICING_URL} className="ccp-btn ccp-btn--primary">Compare all plans →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="ccp-section">
        <div className="ccp-container ccp-faq">
          <h2 className="ccp-center">AI content planner — frequently asked questions</h2>
          {FAQS.map((f) => (
            <details key={f.q} className="ccp-faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ccp-final">
        <div className="ccp-container ccp-center">
          <h2>Stop wondering what to post next.</h2>
          <p>
            Plan your next 25 days in one pass — then create every image, video and voiceover in the same place.
          </p>
          <div className="ccp-cta-row ccp-cta-row--center">
            <Link href={ENGINE_URL} className="ccp-btn ccp-btn--light">Open Content Engine →</Link>
            <Link href={STUDIO_URL} className="ccp-btn ccp-btn--outline">Explore the AI studio</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <footer className="ccp-related">
        <div className="ccp-container">
          <strong>Related tools &amp; guides</strong>
          <div className="ccp-related__links">
            <Link href="/tools/ai-content-calendar-for-instagram">AI Content Calendar for Instagram</Link>
            <Link href="/tools/ai-viral-content-ideas-generator">AI Viral Content Ideas Generator</Link>
            <Link href="/tools/ai-hook-generator-for-reels">AI Hook Generator for Reels</Link>
            <Link href="/tools/social-media-content-generator-ai">Social Media Content Generator</Link>
            <Link href="/tools/ai-content-generator-for-instagram">AI Content Generator for Instagram</Link>
            <Link href="/tools/ai-content-generator-for-tiktok">AI Content Generator for TikTok</Link>
            <Link href="/tools/ai-content-generator-for-youtube">AI Content Generator for YouTube</Link>
            <Link href="/tools/multi-client-content-generator">Multi-Client Content Generator</Link>
            <Link href="/tools/ai-script-for-shorts-content">AI Script for Shorts</Link>
            <Link href="/blogs/how-to-beat-instagram-algorithm-2025-reels-strategy">Instagram Reels Strategy</Link>
            <Link href="/create-ai-content">🎬 Scenith AI Studio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}