// app/(main)/tools/multi-platform-content-planner/page.tsx
// SEO landing page for Scenith Content Engine — cross-platform planning & repurposing angle.
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "multi-platform-content-planner";
const PAGE_URL = `https://scenith.in/tools/${SLUG}`;
const UTM = `utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const ENGINE_URL = `/create-ai-content/content-engine?${UTM}`;
const STUDIO_URL = `/create-ai-content?${UTM}`;
const PRICING_URL = `/pricing?src=${SLUG}`;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Multi-Platform Content Planner — Repurpose Content with AI | Scenith",
  description:
    "Plan once, post everywhere. Scenith’s multi-platform content planner turns one idea into native versions for Instagram, TikTok, YouTube Shorts and X — hooks, captions and CTAs written for each platform.",
  keywords: [
    "multi platform content planner",
    "cross platform content planner",
    "cross platform content strategy",
    "repurpose content across platforms",
    "content repurposing tool",
    "ai content repurposing",
    "one piece of content multiple platforms",
    "cross posting content planner",
    "instagram tiktok youtube content plan",
    "repurpose tiktok to instagram reels",
    "repurpose youtube video into shorts",
    "turn video into twitter thread",
    "platform specific captions",
    "social media repurposing strategy",
    "omnichannel content calendar",
    "content planner for multiple social media accounts",
    "reels vs tiktok vs shorts",
    "create once publish everywhere",
  ],
  openGraph: {
    title: "Multi-Platform Content Planner — One Idea, Four Native Posts | Scenith",
    description:
      "Stop copy-pasting the same caption everywhere. Plan and rewrite every idea natively for Instagram, TikTok, YouTube and X with AI.",
    url: PAGE_URL,
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Platform Content Planner | Scenith",
    description:
      "Turn one content idea into native versions for Instagram, TikTok, YouTube Shorts and X — planned, written and tracked in one calendar.",
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── Content data ─────────────────────────────────────────────────────────────
const FAQS: { q: string; a: string }[] = [
  {
    q: "What is a multi-platform content planner?",
    a: "A multi-platform content planner is a tool for planning social media content across several channels at once — typically Instagram, TikTok, YouTube and X — from a single calendar. Instead of keeping a separate plan for each app, you plan an idea once and create a version of it that is adapted to each platform’s format, length and audience.",
  },
  {
    q: "Is it okay to post the same content on every platform?",
    a: "Posting the same idea on every platform is smart; posting the identical file and caption everywhere usually isn’t. Each platform rewards different hooks, lengths, caption styles and calls-to-action, and Instagram has said it may show less of reposted content that carries another app’s watermark. The best approach is to keep the core idea and adapt the packaging for each platform.",
  },
  {
    q: "How does Scenith create a version of a post for each platform?",
    a: "In Content Engine, open any planned item and click “+ Add version”, then choose Instagram, TikTok, YouTube or X. The AI writes a platform-specific version with its own title, hook, caption, CTA and body text. You can edit it by hand or regenerate just that one version without touching the original idea.",
  },
  {
    q: "Which platforms can I plan for?",
    a: "Content Engine currently plans for Instagram, TikTok, YouTube and X (Twitter). You choose which of them each content plan covers when you create it, up to the platform limit included in your subscription.",
  },
  {
    q: "What’s the difference between Instagram Reels, TikTok and YouTube Shorts content?",
    a: "All three are vertical short-form video, but the audiences behave differently. TikTok favours raw, fast, trend-aware videos and conversational captions. Instagram Reels reward polished visuals and content people save or send to friends. YouTube Shorts work best as searchable, clearly titled videos that lead viewers to your long-form channel. A good multi-platform plan keeps the idea and changes the hook, pacing, caption and CTA for each.",
  },
  {
    q: "What is content repurposing?",
    a: "Content repurposing means taking one strong piece of content and turning it into several others — for example, turning a long YouTube video into Shorts, Reels and TikToks, pulling the key points into an Instagram carousel, and summarising the lesson as an X thread. It multiplies your output without multiplying your research and filming time.",
  },
  {
    q: "Can I see only one platform’s posts at a time?",
    a: "Yes. The calendar view groups each day’s items by platform, and the list view lets you filter by platform and by status. That makes it easy to, say, film every planned TikTok in one session or check which X threads are ready to post.",
  },
  {
    q: "Does Content Engine post to my accounts automatically?",
    a: "No. Content Engine plans, writes and organises your content, and connects to the Scenith AI studio for creating images, videos and voiceovers. You post natively on each platform yourself and mark items as Posted, so there’s no need to connect or share access to your social accounts.",
  },
  {
    q: "How much does the multi-platform content planner cost?",
    a: "Content Engine is included with Scenith’s Creator plans: Creator Lite (₹799/month in India, $9/month internationally) with 25 planning days a month, Creator Spark with 60 and Creator Odyssey with 90. Each plan also includes monthly AI credits for creating the actual images, videos and voiceovers.",
  },
  {
    q: "Is a multi-platform strategy right for a brand-new account?",
    a: "It can be, as long as you don’t spread yourself too thin. Many creators start with one primary platform where they post natively every day, then repurpose the best-performing ideas to one or two secondary platforms. Content Engine lets you start with one platform and add versions for others only when an idea has proven itself.",
  },
];

const HOWTO_STEPS: { title: string; body: string }[] = [
  { title: "Create a plan with several platforms", body: "In Content Engine, create a content plan and select every platform you post on — Instagram, TikTok, YouTube and/or X." },
  { title: "Describe your brand once", body: "Add your niche, audience, goal, tone and content pillars. This single brief powers every platform in the plan." },
  { title: "Generate the calendar", body: "The AI plans each day with platform-appropriate formats: Reels and carousels for Instagram, short videos for TikTok, Shorts for YouTube and threads for X." },
  { title: "Add platform versions to your best ideas", body: "Open an item and use “+ Add version” to rewrite it natively for another platform, with its own hook, caption and CTA." },
  { title: "Create the assets", body: "Click “Create with Scenith” to generate the video or image in the AI studio, reframe it for each platform, and add an AI voiceover if you need one." },
  { title: "Post natively and track", body: "Upload finished files to the item, post on each platform, and move it through Planned, In progress, Ready and Posted." },
];

const MATRIX: { label: string; ig: string; tt: string; yt: string; x: string }[] = [
  { label: "Main format", ig: "Reels, carousels, Stories", tt: "Short vertical video", yt: "Shorts + long-form", x: "Text posts & threads" },
  { label: "Where reach comes from", ig: "Shares, saves, Explore & Reels feed", tt: "For You feed & watch-through", yt: "Shorts feed + search", x: "Replies, reposts & follows" },
  { label: "Hook style that works", ig: "Visual first frame + bold on-screen text", tt: "Spoken hook in under 2 seconds", yt: "Clear promise in title & first line", x: "A strong, specific opening sentence" },
  { label: "Caption’s job", ig: "Add value, earn saves, prompt DMs", tt: "Short, conversational, searchable", yt: "Title-led; description supports search", x: "The caption is the content" },
  { label: "Tone", ig: "Polished, aesthetic, aspirational", tt: "Raw, fast, personality-led", yt: "Informative, binge-able", x: "Opinionated, concise" },
  { label: "CTA that fits", ig: "“Save this” / “Send to a friend”", tt: "“Follow for part 2”", yt: "“Watch the full video”", x: "“Repost if you agree” / reply prompt" },
];

const VERSIONS = [
  {
    key: "ig",
    platform: "📸 Instagram",
    format: "Carousel (7 slides)",
    hook: "The 50/30/20 budget rule is broken. Here’s what to use instead →",
    caption: "Most budgeting advice was written before rent ate half your salary. Slide 5 is the one that changed my savings rate.",
    cta: "Save this for your next payday 💸",
    direction: "Clean cream background, bold serif headlines, one number per slide, simple pie-chart visual on slide 3.",
  },
  {
    key: "tt",
    platform: "🎵 TikTok",
    format: "30-second talking video",
    hook: "“If you’re using the 50/30/20 rule in 2026, stop.”",
    caption: "budgeting rule nobody updated 😭 #budgeting #moneytips",
    cta: "Follow for part 2: the exact percentages I use",
    direction: "Face to camera, handheld, green-screen over a bank-app screenshot, quick cuts every 2–3 seconds.",
  },
  {
    key: "yt",
    platform: "▶️ YouTube",
    format: "Short (45 seconds)",
    hook: "Why the 50/30/20 Budget Rule Fails in 2026 (and the fix)",
    caption: "A simple updated budgeting split for high-rent cities. Full breakdown in the linked video.",
    cta: "Watch the full budgeting guide on the channel",
    direction: "Animated text-on-screen explainer with AI voiceover — works for a faceless finance channel.",
  },
  {
    key: "x",
    platform: "𝕏 X",
    format: "Thread (6 posts)",
    hook: "The 50/30/20 rule assumes rent is ~25% of your income. For most people under 30, it’s closer to 40%. So the rule quietly fails. 🧵",
    caption: "Post-by-post: the math, the new split, how to automate it, and one mistake to avoid.",
    cta: "Repost to help a friend who’s budgeting for the first time",
    direction: "Plain text, one idea per post, final post links back to the full YouTube video.",
  },
];

const LADDER = [
  { n: "1", t: "Pillar piece", b: "One long YouTube video, podcast episode, live stream or blog post where you go deep on a topic." },
  { n: "2", t: "Short-form clips", b: "Cut the best 3–5 moments into Shorts, Reels and TikToks, each with its own hook." },
  { n: "3", t: "Carousel", b: "Turn the key steps or takeaways into a swipeable Instagram carousel people save." },
  { n: "4", t: "Thread", b: "Summarise the argument as an X thread that links back to the full piece." },
  { n: "5", t: "Stories & community posts", b: "Polls, questions and behind-the-scenes clips that keep the conversation going." },
];

const WEEK: [string, string, string, string, string][] = [
  ["Mon", "Reel — idea A", "Video — idea A", "Short — idea A", "Thread — idea A"],
  ["Tue", "Story poll", "Video — trend", "—", "Hot take"],
  ["Wed", "Carousel — idea B", "Video — idea B", "Short — idea B", "Post — idea B"],
  ["Thu", "Story Q&A", "Reply video", "Community post", "Thread — lesson"],
  ["Fri", "Reel — idea C", "Video — idea C", "Short — idea C", "Post — idea C"],
  ["Sat", "Carousel — recap", "Video — behind the scenes", "—", "Weekly recap"],
  ["Sun", "Rest / Story", "Video — best of week", "Long-form upload", "Reply prompt"],
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MultiPlatformContentPlannerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Multi-Platform Content Planner",
        description:
          "Plan and repurpose content across Instagram, TikTok, YouTube and X from one AI-generated calendar, with platform-specific hooks, captions and CTAs.",
        isPartOf: { "@type": "WebSite", name: "Scenith", url: "https://scenith.in" },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE_URL}#app`,
        name: "Scenith Content Engine — Multi-Platform Content Planner",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        url: PAGE_URL,
        featureList: [
          "One content calendar for Instagram, TikTok, YouTube and X",
          "AI-written platform versions of each idea",
          "Platform-specific hooks, captions and CTAs",
          "Regenerate a single platform version with AI",
          "Calendar grouped by platform and list view with platform filters",
          "Status tracking from Planned to Posted",
          "One-click hand-off to AI image, video and voice creation",
        ],
        offers: [
          { "@type": "Offer", name: "Creator Lite", price: "799", priceCurrency: "INR" },
          { "@type": "Offer", name: "Creator Lite", price: "9", priceCurrency: "USD" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to plan and repurpose content across multiple platforms with AI",
        step: HOWTO_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
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
          { "@type": "ListItem", position: 3, name: "Multi-Platform Content Planner", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="mpcp-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="mpcp-breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li aria-current="page">Multi-Platform Content Planner</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <header className="mpcp-hero">
        <div className="mpcp-container mpcp-hero__inner">
          <span className="mpcp-eyebrow">🔁 Plan once · Post everywhere</span>
          <h1>
            Multi-Platform Content Planner: Turn <span className="mpcp-grad">One Idea</span> into Native
            Posts for Instagram, TikTok, YouTube &amp; X
          </h1>
          <p className="mpcp-lead">
            Stop copy-pasting the same caption into four apps. Scenith’s Content Engine plans your content
            across every platform from a single brief, then uses AI to rewrite each idea the way{" "}
            <strong>each platform actually wants it</strong> — its own hook, caption, format and CTA.
          </p>
          <div className="mpcp-cta-row">
            <Link href={ENGINE_URL} className="mpcp-btn mpcp-btn--primary">Start my multi-platform plan →</Link>
            <Link href="#example" className="mpcp-btn mpcp-btn--ghost">See one idea → 4 versions</Link>
          </div>

          {/* Visual: one idea fanning out */}
          <div className="mpcp-fan" aria-label="One idea becomes four platform versions">
            <div className="mpcp-fan__core">
              <span>💡 One idea</span>
              <strong>“The 50/30/20 budget rule is broken”</strong>
            </div>
            <div className="mpcp-fan__lines" aria-hidden="true" />
            <div className="mpcp-fan__outs">
              <div className="mpcp-chip mpcp-chip--ig">📸 Instagram carousel</div>
              <div className="mpcp-chip mpcp-chip--tt">🎵 TikTok video</div>
              <div className="mpcp-chip mpcp-chip--yt">▶️ YouTube Short</div>
              <div className="mpcp-chip mpcp-chip--x">𝕏 X thread</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── INTRO / DEFINITION ── */}
      <section className="mpcp-section">
        <div className="mpcp-container mpcp-prose">
          <h2>What is a multi-platform content planner?</h2>
          <p className="mpcp-definition">
            A <strong>multi-platform content planner</strong> is a single calendar where you plan social media
            content for several channels at once — and adapt each idea to every platform’s format, length and
            audience — instead of keeping a separate plan for Instagram, TikTok, YouTube and X.
          </p>
          <p>
            Being on several platforms is one of the fastest ways to grow a personal brand or business: one
            idea can reach four completely different audiences. But doing it by hand is exhausting. You keep
            four notes apps, rewrite the same concept four times, forget which version went where, and
            eventually fall back on cross-posting the exact same video and caption everywhere — which rarely
            performs well on any of them.
          </p>
          <p>
            Scenith’s Content Engine is built for this problem. You describe your brand once, pick your
            platforms, and the AI plans a calendar with the right formats for each. Any idea can then be
            expanded into <strong>platform versions</strong>: separate, native rewrites that share one concept
            but speak each platform’s language. If you only need a single-channel calendar, see our{" "}
            <Link href="/tools/content-calendar-planner">AI content calendar planner</Link> guide.
          </p>

          <div className="mpcp-vs">
            <div className="mpcp-vs__col mpcp-vs__col--bad">
              <strong>❌ Cross-posting</strong>
              <p>Same file, same caption, same hook, uploaded everywhere. Fast, but ignores what each audience expects.</p>
            </div>
            <div className="mpcp-vs__col mpcp-vs__col--good">
              <strong>✅ Multi-platform planning</strong>
              <p>Same core idea, rewritten natively for every platform. Almost as fast with AI — and far more effective.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM MATRIX ── */}
      <section className="mpcp-section mpcp-section--soft">
        <div className="mpcp-container">
          <h2 className="mpcp-center">Instagram vs TikTok vs YouTube vs X: what each platform rewards</h2>
          <p className="mpcp-intro">
            This is why a single caption can’t win everywhere. Content Engine uses these differences when it
            writes each platform version.
          </p>
          <div className="mpcp-table-wrap">
            <table className="mpcp-table mpcp-table--matrix">
              <thead>
                <tr>
                  <th></th>
                  <th className="mpcp-th--ig">📸 Instagram</th>
                  <th className="mpcp-th--tt">🎵 TikTok</th>
                  <th className="mpcp-th--yt">▶️ YouTube</th>
                  <th className="mpcp-th--x">𝕏 X</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((r) => (
                  <tr key={r.label}>
                    <td>{r.label}</td><td>{r.ig}</td><td>{r.tt}</td><td>{r.yt}</td><td>{r.x}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mpcp-footnote">
            Platforms change their formats and limits regularly — treat this as a strategy guide, and check each
            app’s current rules before you publish.
          </p>
        </div>
      </section>

      {/* ── WORKED EXAMPLE ── */}
      <section id="example" className="mpcp-section">
        <div className="mpcp-container">
          <h2 className="mpcp-center">Worked example: one idea, four native versions</h2>
          <p className="mpcp-intro">
            A personal-finance creator plans one idea in Content Engine and adds a version for every platform.
            Same message — completely different packaging.
          </p>
          <div className="mpcp-versions">
            {VERSIONS.map((v) => (
              <article key={v.key} className={`mpcp-version mpcp-version--${v.key}`}>
                <header>
                  <span className="mpcp-version__plat">{v.platform}</span>
                  <span className="mpcp-version__fmt">{v.format}</span>
                </header>
                <dl>
                  <div><dt>Hook</dt><dd>{v.hook}</dd></div>
                  <div><dt>Caption</dt><dd>{v.caption}</dd></div>
                  <div><dt>CTA</dt><dd>{v.cta}</dd></div>
                  <div><dt>Creative direction</dt><dd>{v.direction}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mpcp-center mpcp-mt">
            <Link href={ENGINE_URL} className="mpcp-btn mpcp-btn--primary">Create versions for my ideas →</Link>
          </div>
        </div>
      </section>

      {/* ── HOW TO ── */}
      <section className="mpcp-section mpcp-section--dark">
        <div className="mpcp-container">
          <h2 className="mpcp-center">How to plan content for multiple platforms with AI</h2>
          <p className="mpcp-intro mpcp-intro--light">
            Six steps from a blank page to a cross-platform calendar you can actually keep up with.
          </p>
          <ol className="mpcp-steps">
            {HOWTO_STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="mpcp-steps__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="mpcp-section">
        <div className="mpcp-container">
          <h2 className="mpcp-center">Built for cross-platform creators, not single-app schedulers</h2>
          <div className="mpcp-feature-grid">
            {[
              ["🧠", "One brief, every platform", "Niche, audience, goal, tone and pillars are entered once and shared by every platform in the plan."],
              ["🔁", "Platform versions", "Add an Instagram, TikTok, YouTube or X version to any idea — each with its own title, hook, caption, CTA and body text."],
              ["♻️", "Regenerate just one version", "Don’t like the X thread? Regenerate only that version. The original idea and other versions stay untouched."],
              ["🗓️", "Calendar grouped by platform", "Each day shows what’s going to Instagram, TikTok, YouTube and X side by side, so nothing is double-booked or forgotten."],
              ["🔎", "Filter by platform & status", "The list view filters by platform and status — perfect for filming all your TikToks in one batch."],
              ["⚡", "Create in the same place", "“Create with Scenith” opens the AI studio with the brief pre-filled for video or image generation, plus AI voiceovers."],
              ["📦", "Assets stored with the post", "Upload the final MP4, MOV, JPG, PNG or WEBP to each item, so every platform’s file is easy to find."],
              ["✅", "Status from idea to live", "Move each item from Planned to In progress, Ready and Posted — at a glance you know what’s left."],
              ["🏢", "Multiple active plans", "Run separate cross-platform plans for different brands or clients, and archive them when a campaign ends."],
            ].map(([icon, t, b]) => (
              <article key={t} className="mpcp-feature">
                <span>{icon}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPURPOSING STRATEGY ── */}
      <section className="mpcp-section mpcp-section--soft">
        <div className="mpcp-container mpcp-prose">
          <h2>The content repurposing ladder: create once, publish five ways</h2>
          <p>
            The creators who seem to be everywhere aren’t making five times more content — they’re making one
            strong piece and repurposing it down a ladder. Plan the pillar piece in Content Engine, then add
            each rung as a platform version or a new item later in the week.
          </p>
          <ol className="mpcp-ladder">
            {LADDER.map((l) => (
              <li key={l.n}>
                <span>{l.n}</span>
                <div>
                  <strong>{l.t}</strong>
                  <p>{l.b}</p>
                </div>
              </li>
            ))}
          </ol>
          <p>
            Scenith’s studio helps with every rung: generate B-roll with{" "}
            <Link href="/tools/ai-video-generation">AI video</Link>, narrate faceless clips with{" "}
            <Link href="/tools/ai-voice-generation">AI voiceovers</Link>, design slides with the{" "}
            <Link href="/tools/ai-image-generation">AI image generator</Link>, add captions with the{" "}
            <Link href="/tools/add-subtitles-to-videos">subtitle generator</Link>, and reframe clips with the{" "}
            <Link href="/tools/change-aspect-ratio">aspect ratio changer</Link>. For a deeper walkthrough, read{" "}
            <Link href="/blogs/ai-workflow-youtube-to-reels">our YouTube-to-Reels AI workflow</Link> and{" "}
            <Link href="/blogs/how-to-make-youtube-shorts-from-long-videos">how to make Shorts from long videos</Link>.
          </p>

          <h2 className="mpcp-h2-spaced">A weekly multi-platform content schedule template</h2>
          <p>
            Three core ideas a week (A, B and C) is a sustainable rhythm for most solo creators. Each idea gets
            a native version on every platform, and lighter posts fill the gaps. Use this as a starting point,
            then let the AI fill in the specifics for your niche.
          </p>
          <div className="mpcp-table-wrap">
            <table className="mpcp-table mpcp-table--week">
              <thead>
                <tr><th>Day</th><th>📸 Instagram</th><th>🎵 TikTok</th><th>▶️ YouTube</th><th>𝕏 X</th></tr>
              </thead>
              <tbody>
                {WEEK.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => <td key={i}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mpcp-h2-spaced">7 rules for cross-platform content that performs everywhere</h2>
          <div className="mpcp-rules">
            {[
              ["Keep the idea, change the hook", "The first line or first two seconds is the most platform-specific part of any post. Rewrite it every time."],
              ["Export clean files", "Download from Scenith and upload natively. Avoid reposting videos that carry another app’s watermark or UI."],
              ["Match the native tone", "TikTok can be messy and personal; Instagram likes it polished; X wants a point of view; YouTube wants clarity."],
              ["Rewrite captions, don’t paste them", "Hashtag-heavy captions that work on Instagram look like spam on X. Platform versions handle this for you."],
              ["Use one CTA per platform", "Ask TikTok to follow for part 2, Instagram to save, YouTube to watch the full video and X to repost."],
              ["Lead with your strongest platform", "Post there first, see what wins, then add versions of the winners to your other platforms."],
              ["Track per platform", "Use the platform filter to review what’s been posted where each week, and plan more of what works."],
            ].map(([t, b], i) => (
              <div key={t} className="mpcp-rule">
                <span>{i + 1}</span>
                <div><strong>{t}</strong><p>{b}</p></div>
              </div>
            ))}
          </div>
          <p className="mpcp-mt">
            Related reading:{" "}
            <Link href="/blogs/tiktok-to-instagram-trend-migration-strategy">moving trends from TikTok to Instagram</Link>,{" "}
            <Link href="/blogs/youTube-shorts-vs-instagram-reels-editing-differences">Shorts vs Reels editing differences</Link> and{" "}
            <Link href="/blogs/aspect-ratio-guide-for-every-platform">the aspect ratio guide for every platform</Link>.
          </p>
        </div>
      </section>

      {/* ── WHO ── */}
      <section className="mpcp-section">
        <div className="mpcp-container">
          <h2 className="mpcp-center">Who needs a cross-platform content planner?</h2>
          <div className="mpcp-who-grid">
            {[
              ["🎤", "Creators growing beyond one app", "You’ve found traction on one platform and want to repeat it on the others without burning out.", "/tools/ai-content-generator-for-creators", "AI content for creators"],
              ["👻", "Faceless channel owners", "Run the same faceless concept as YouTube Shorts, Reels and TikToks with AI video and voiceovers.", "/tools/faceless-content-ai-generator", "Faceless content generator"],
              ["📊", "Social media managers", "Deliver platform-native content for every channel a client is on, from one organised plan per client.", "/tools/ai-content-creation-for-social-media-managers", "Tools for social media managers"],
              ["🏢", "Agencies", "Scale output across clients and platforms without scaling headcount.", "/tools/ai-content-scaling-tool-for-agencies", "Content scaling for agencies"],
              ["🛍️", "Brands & small businesses", "Show up consistently where your customers already scroll, whichever app that is.", "/tools/ai-brand-content-generator", "AI brand content generator"],
              ["🎓", "Educators & coaches", "Turn one lesson into a Short, a carousel and a thread that each teach something useful.", "/tools/ai-educational-video-generator", "AI educational videos"],
            ].map(([icon, t, b, href, label]) => (
              <article key={t} className="mpcp-who">
                <span>{icon}</span>
                <h3>{t}</h3>
                <p>{b}</p>
                <Link href={href} className="mpcp-link">→ {label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING STRIP ── */}
      <section className="mpcp-section mpcp-section--soft">
        <div className="mpcp-container">
          <div className="mpcp-pricing">
            <div>
              <h2>Included with every Scenith Creator plan</h2>
              <p>
                Content Engine comes with your monthly AI credits for images, videos and voiceovers. Planning days
                are a monthly total you can split across plans and platforms.
              </p>
            </div>
            <ul>
              <li><strong>Creator Lite</strong><span>25 planning days / mo</span><em>₹799 · $9</em></li>
              <li><strong>Creator Spark</strong><span>60 planning days / mo</span><em>₹1,749 · $19</em></li>
              <li><strong>Creator Odyssey</strong><span>90 planning days / mo</span><em>₹3,599 · $39</em></li>
            </ul>
            <Link href={PRICING_URL} className="mpcp-btn mpcp-btn--primary">Compare plans →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mpcp-section">
        <div className="mpcp-container mpcp-faq">
          <h2 className="mpcp-center">Multi-platform content planning — FAQ</h2>
          {FAQS.map((f) => (
            <details key={f.q} className="mpcp-faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mpcp-final">
        <div className="mpcp-container mpcp-center">
          <h2>One idea. Four platforms. Zero copy-paste.</h2>
          <p>Plan your cross-platform calendar with AI, then create every version in the same studio.</p>
          <div className="mpcp-cta-row mpcp-cta-row--center">
            <Link href={ENGINE_URL} className="mpcp-btn mpcp-btn--light">Open Content Engine →</Link>
            <Link href={STUDIO_URL} className="mpcp-btn mpcp-btn--outline">Explore the AI studio</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <footer className="mpcp-related">
        <div className="mpcp-container">
          <strong>Related tools &amp; guides</strong>
          <div className="mpcp-related__links">
            <Link href="/tools/content-calendar-planner">AI Content Calendar Planner</Link>
            <Link href="/tools/ai-content-calendar-for-instagram">AI Content Calendar for Instagram</Link>
            <Link href="/tools/ai-social-media-content-generator">AI Social Media Content Generator</Link>
            <Link href="/tools/ai-content-generator-for-tiktok">AI Content Generator for TikTok</Link>
            <Link href="/tools/ai-content-generator-for-youtube">AI Content Generator for YouTube</Link>
            <Link href="/tools/ai-content-generator-for-instagram">AI Content Generator for Instagram</Link>
            <Link href="/tools/ai-hook-generator-for-reels">AI Hook Generator for Reels</Link>
            <Link href="/tools/multi-client-content-generator">Multi-Client Content Generator</Link>
            <Link href="/tools/thread-to-carousel-ai-generator">Thread to Carousel Generator</Link>
            <Link href="/create-ai-content">🎬 Scenith AI Studio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}