// app/(main)/tools/festival-content-calendar-india/page.tsx
// SEO landing page: Indian festival content calendar 2026–27 (Diwali, Navratri, Holi…)
// + Hinglish caption bank + Hindi voiceover scripts → Scenith Content Engine & AI studio.
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "festival-content-calendar-india";
const PAGE_URL = `https://scenith.in/tools/${SLUG}`;
const UTM = `utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const ENGINE_URL = `/create-ai-content/content-engine?${UTM}`;
const PRICING_URL = `/pricing?src=${SLUG}`;
const studio = (tab: "video" | "image" | "voice", text: string) =>
  `/create-ai-content?tab=${tab}&text=${encodeURIComponent(text)}&${UTM}`;

const PUBLISHED = "2026-10-02";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Festival Content Calendar 2026 India: Diwali, Navratri Reel Ideas & Hinglish Captions | Scenith",
  description:
    "Complete Indian festival content calendar for Oct 2026–Mar 2027 with exact dates for Navratri, Dussehra, Karwa Chauth, Diwali, Bhai Dooj & Holi. Reel ideas, 40+ Hinglish captions, Hindi voiceover scripts and a 25-day Diwali content plan.",
  keywords: [
    "festival content calendar 2026",
    "indian festival content calendar",
    "diwali content ideas for instagram",
    "diwali reel ideas",
    "diwali post ideas for business",
    "diwali marketing ideas for small business",
    "navratri reel ideas",
    "navratri captions for instagram",
    "diwali captions hinglish",
    "diwali captions in hindi",
    "hinglish captions for instagram",
    "karwa chauth captions",
    "bhai dooj captions",
    "dussehra captions",
    "holi captions hinglish",
    "festive marketing calendar india 2026",
    "diwali 2026 date",
    "diwali reel voiceover hindi",
    "festival poster ideas",
    "social media calendar india 2026",
  ],
  openGraph: {
    title: "Festival Content Calendar 2026 (India) — Diwali, Navratri & Holi Content Ideas",
    description:
      "Every festival date from Navratri to Holi, with reel ideas, Hinglish captions and Hindi voiceover scripts — plus a ready 25-day Diwali content plan.",
    url: PAGE_URL,
    siteName: "Scenith",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Content Calendar 2026 India | Diwali & Navratri Ideas",
    description: "Dates, reel ideas, Hinglish captions and Hindi voiceover scripts for every Indian festival this season.",
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
type Fest = { id: string; date: string; day: string; name: string; startFrom: string; angle: string };

const FESTIVALS: Fest[] = [
  { id: "navratri", date: "11 Oct 2026", day: "Sun", name: "Sharad Navratri begins", startFrom: "8 Oct", angle: "Colour-of-the-day looks, garba & dandiya reels, 9-day series" },
  { id: "durga-puja", date: "17 Oct 2026", day: "Sat", name: "Durga Puja festivities begin", startFrom: "12 Oct", angle: "Pandal hopping, Bengali food, dhunuchi dance" },
  { id: "dussehra", date: "20 Oct 2026", day: "Tue", name: "Dussehra / Vijayadashami", startFrom: "17 Oct", angle: "Good-over-evil stories, Ravan dahan, ‘burn your bad habit’ trend" },
  { id: "karwa-chauth", date: "29 Oct 2026", day: "Thu", name: "Karwa Chauth", startFrom: "22 Oct", angle: "Mehendi, sargi, couple reels, moonrise moments" },
  { id: "dhanteras", date: "6 Nov 2026", day: "Fri", name: "Dhanteras", startFrom: "30 Oct", angle: "Shopping guides, gold & utensils, ‘shubh’ new beginnings" },
  { id: "diwali", date: "8 Nov 2026", day: "Sun", name: "Diwali / Lakshmi Puja", startFrom: "15 Oct", angle: "Cleaning, rangoli, gifting, sale countdown, family moments" },
  { id: "govardhan", date: "9 Nov 2026", day: "Mon", name: "Govardhan Puja", startFrom: "6 Nov", angle: "Annakut food spreads, Krishna stories" },
  { id: "bhai-dooj", date: "11 Nov 2026", day: "Wed", name: "Bhai Dooj", startFrom: "4 Nov", angle: "Sibling humour, gift ideas, nostalgia" },
  { id: "chhath", date: "15 Nov 2026", day: "Sun", name: "Chhath Puja", startFrom: "10 Nov", angle: "Sunrise & sunset arghya, Bihar & UP pride, devotional reels" },
  { id: "gurpurab", date: "24 Nov 2026", day: "Tue", name: "Guru Nanak Jayanti", startFrom: "20 Nov", angle: "Langar, seva, teachings & quotes" },
  { id: "christmas", date: "25 Dec 2026", day: "Fri", name: "Christmas", startFrom: "15 Dec", angle: "Secret Santa, café specials, year-end sales" },
  { id: "new-year", date: "1 Jan 2027", day: "Fri", name: "New Year", startFrom: "20 Dec", angle: "Year recaps, resolutions, ‘2027 goals’ carousels" },
  { id: "sankranti", date: "15 Jan 2027", day: "Fri", name: "Makar Sankranti / Pongal (Lohri the evening before)", startFrom: "8 Jan", angle: "Kite reels, til-gud, regional food, harvest" },
  { id: "republic-day", date: "26 Jan 2027", day: "Tue", name: "Republic Day", startFrom: "19 Jan", angle: "Made-in-India stories, Republic Day sales" },
  { id: "vasant-panchami", date: "11 Feb 2027", day: "Thu", name: "Vasant Panchami", startFrom: "6 Feb", angle: "Yellow outfits, Saraswati puja for students" },
  { id: "valentines", date: "14 Feb 2027", day: "Sun", name: "Valentine’s Day (week starts 7 Feb)", startFrom: "1 Feb", angle: "Rose Day → Valentine’s countdown, couple & self-love content" },
  { id: "shivaratri", date: "6 Mar 2027", day: "Sat", name: "Maha Shivaratri", startFrom: "1 Mar", angle: "Devotional reels, temple visits, fasting recipes" },
  { id: "eid", date: "10 Mar 2027", day: "Wed", name: "Eid al-Fitr (expected, moon-dependent)", startFrom: "Ramzan weeks", angle: "Iftar spreads, Eid outfits, Eidi gift ideas" },
  { id: "holi", date: "22 Mar 2027", day: "Mon", name: "Holi", startFrom: "12 Mar", angle: "Colour reels, gujiya, skin & hair care, Holi parties" },
];

const COUNTDOWN = [
  {
    phase: "Days 1–7",
    range: "15–21 Oct",
    title: "Warm up during Navratri & Dussehra",
    goal: "Get on the festive feed early, before everyone else does.",
    items: [
      "Reel: ‘Diwali is 24 days away — here’s my plan’",
      "Navratri colour-of-the-day outfit or product posts",
      "Dussehra reel: ‘Burning these 3 habits this year’",
      "Story poll: ‘Diwali cleaning — started or not?’",
      "Carousel: festive checklist your audience can save",
    ],
  },
  {
    phase: "Days 8–14",
    range: "22–28 Oct",
    title: "Gift guides & early offers",
    goal: "Capture people who plan and shop early.",
    items: [
      "Carousel: ‘Diwali gifts under ₹500 / ₹1,000 / ₹2,000’",
      "Reel: unboxing or making of your festive collection",
      "Early-bird offer announcement + WhatsApp Status version",
      "Behind the scenes: packing festive orders",
      "Karwa Chauth teaser for the coming week",
    ],
  },
  {
    phase: "Days 15–21",
    range: "29 Oct – 4 Nov",
    title: "Karwa Chauth & home prep",
    goal: "Ride the emotional moments, build anticipation.",
    items: [
      "Karwa Chauth couple or mehendi reel (29 Oct)",
      "Rangoli / home décor ideas reel",
      "Customer or community feature: ‘How do you celebrate?’",
      "Countdown sticker on Stories: ‘Sale ends on Diwali’",
      "Carousel: last-minute Diwali checklist",
    ],
  },
  {
    phase: "Days 22–25",
    range: "5–8 Nov",
    title: "Dhanteras → Diwali peak",
    goal: "Convert, then celebrate with your audience.",
    items: [
      "Dhanteras ‘shubh shuruaat’ offer reel (6 Nov)",
      "Choti Diwali behind-the-scenes Stories",
      "Diwali morning greeting reel with Hindi voiceover (8 Nov)",
      "Family / team celebration photo dump",
      "Schedule everything in advance — you’ll be busy celebrating!",
    ],
  },
];

const IDEA_PACKS = [
  {
    id: "ideas-navratri",
    emoji: "💃",
    festival: "Navratri & Durga Puja",
    reels: [
      "9-day series: one outfit, look or product for each day’s colour",
      "‘Garba steps for people who can’t dance’ tutorial",
      "Pandal-hopping vlog in 30 seconds with fast cuts",
      "Before/after: getting ready for dandiya night",
    ],
    business: "Run a 9-day ‘Navratri special’ — a different deal or product highlighted each day.",
  },
  {
    id: "ideas-dussehra",
    emoji: "🏹",
    festival: "Dussehra",
    reels: [
      "‘Ravan ke 10 sar = 10 bad habits I’m burning’ trend",
      "Mini story reel of Ram vs Ravan with AI visuals and narration",
      "Local Ravan dahan clips with dramatic slow motion",
      "‘Good vs evil’ comparison memes for your niche",
    ],
    business: "Position your product as the ‘win’ over a common customer problem.",
  },
  {
    id: "ideas-karwa-chauth",
    emoji: "🌙",
    festival: "Karwa Chauth",
    reels: [
      "Mehendi design reveal in slow motion",
      "‘Sargi thali’ aesthetic food reel",
      "Husband-joins-the-fast couple reel",
      "Moonrise countdown Stories for your city",
    ],
    business: "Salons, mehendi artists and jewellers: post booking slots and last-day reminders.",
  },
  {
    id: "ideas-diwali",
    emoji: "🪔",
    festival: "Dhanteras & Diwali",
    reels: [
      "Diwali cleaning transformation (time-lapse)",
      "Rangoli in 15 seconds — top-down shot, sped up",
      "‘Types of relatives at Diwali’ comedy skit",
      "Gift-wrapping hack + festive packaging ASMR",
      "Diyas-lighting cinematic reel with a soft Hindi voiceover",
    ],
    business: "Countdown sale, gifting combos, corporate hampers and a heartfelt thank-you reel on Diwali day.",
  },
  {
    id: "ideas-bhai-dooj",
    emoji: "👫",
    festival: "Bhai Dooj",
    reels: [
      "‘Things only siblings understand’ POV reel",
      "Childhood photo vs now transition",
      "Gift ideas for brothers / sisters under a budget",
      "Emotional voiceover reel about sibling bonds",
    ],
    business: "Sibling gift combos and ‘tag your bhai/behen’ giveaways.",
  },
  {
    id: "ideas-holi",
    emoji: "🎨",
    festival: "Holi",
    reels: [
      "Pre-Holi skin & hair protection routine",
      "Gujiya recipe in 30 seconds",
      "Slow-motion colour splash with trending audio",
      "‘Holi party playlist’ carousel",
    ],
    business: "Holi-safe product bundles, colour-themed menu specials and party bookings.",
  },
];

const CAPTIONS: { festival: string; id: string; lines: string[] }[] = [
  {
    festival: "Navratri", id: "cap-navratri",
    lines: [
      "9 din, 9 rang, aur ek hi mood — garba night 💃",
      "Dandiya ready, outfit ready, bas playlist baaki hai 🎶",
      "Maa ka aashirwad aur thoda sa sparkle ✨ Happy Navratri!",
      "Garba ki thakaan bhi kitni pyaari lagti hai 🥹",
      "Aaj ka colour? Humne toh pehle se plan kar rakha hai 😌",
      "Ghoomar, garba, dandiya — sab ek hi raat mein 🔥",
    ],
  },
  {
    festival: "Dussehra", id: "cap-dussehra",
    lines: [
      "Is Dussehra, apne andar ke Raavan ko bhi bye bolo 🔥",
      "Burai pe acchai ki jeet — har saal, har baar 🏹",
      "10 sar wala Raavan nahi, 10 bad habits jalani hain is baar 😤",
      "Raavan dahan dekhne gaye the, mood lift karke laute 🎇",
    ],
  },
  {
    festival: "Karwa Chauth", id: "cap-karwa-chauth",
    lines: [
      "Chaand ka intezaar, aur tumhara bhi 🌙",
      "Mehendi dark aayi, matlab pyaar strong hai 😉",
      "Bhookh bhi pyaari lagti hai jab wajah tum ho ❤️",
      "Sargi se chaand tak — ek din, poori kahaani 🌙✨",
    ],
  },
  {
    festival: "Dhanteras", id: "cap-dhanteras",
    lines: [
      "Naya shuru karne ka sabse shubh din ✨ Happy Dhanteras!",
      "Sona na sahi, ek acchi deal toh banti hai 🪙",
      "Dhanteras pe dhan bhi aaye, aur dher saari khushiyan bhi 💛",
    ],
  },
  {
    festival: "Diwali", id: "cap-diwali",
    lines: [
      "Ghar bhi chamka, chehra bhi — Happy Diwali ✨",
      "Mithai zyada, diet kal se 🍬",
      "Diyon ki roshni, apno ka saath — bas yahi asli Diwali hai 🪔",
      "Safai ho gayi, rangoli bhi — ab sirf photos baaki hain 📸",
      "Patakhe kam, pyaar zyada 💛 Happy Green Diwali",
      "Roshni bahar bhi, andar bhi 🪔",
      "Is Diwali, khushiyan double — aur hamare offers bhi 🎁",
      "Rangoli meri, compliments sabke 😌🪔",
      "Saal bhar ka wait, aur ek raat ki roshni — worth it ✨",
    ],
  },
  {
    festival: "Bhai Dooj", id: "cap-bhai-dooj",
    lines: [
      "Ladte bhi hum hi, bachate bhi hum hi — Happy Bhai Dooj 👫",
      "Tilak ho gaya, ab gift ka intezaar hai bhai 👀",
      "Duniya ka sabse annoying aur sabse pyaara insaan — mera bhai ❤️",
      "Behen ka pyaar aur bhai ka wallet — dono aaj full on 😂",
    ],
  },
  {
    festival: "Chhath Puja", id: "cap-chhath",
    lines: [
      "Doobta suraj, ugta suraj — aastha har pal ☀️",
      "Ghaat ki roshni, maa ki aastha 🙏 Chhath Puja ki shubhkamnayein",
      "Thekua ki khushboo aur ghar ki yaad 🧡",
    ],
  },
  {
    festival: "Christmas & New Year", id: "cap-xmas",
    lines: [
      "Santa ka gift late hai, par vibe bilkul on time hai 🎄",
      "Naya saal, wahi main — bas better version 😎",
      "2026 ko thank you, 2027 ko ‘chal shuru karte hain’ 🚀",
    ],
  },
  {
    festival: "Holi", id: "cap-holi",
    lines: [
      "Rang utar jayenge, yaadein nahi 🌈",
      "Gujiya pehle, rang baad mein 😋",
      "Is Holi sirf rang nahi, purani naraazgiyan bhi dho daalo 💦",
      "Chehra pehchaan mein nahi aa raha? Matlab Holi sahi gayi 😂",
      "Safed kapde, pakke dost aur pakka rang 🎨",
    ],
  },
];

const VOICE_SCRIPTS = [
  {
    title: "Diwali sale reel (shop / brand)",
    voice: "Warm female voice",
    text: "इस दिवाली, घर लाइए नई रौनक। हमारा फेस्टिव कलेक्शन अब लाइव है — हर ख़रीद पर ख़ास दिवाली ऑफ़र। आज ही आइए, क्योंकि खुशियाँ इंतज़ार नहीं करतीं।",
  },
  {
    title: "Navratri greeting reel",
    voice: "Calm devotional voice",
    text: "नौ दिन, नौ रूप, और माँ का अटूट आशीर्वाद। आपको और आपके पूरे परिवार को नवरात्रि की हार्दिक शुभकामनाएँ।",
  },
  {
    title: "Bhai Dooj emotional reel",
    voice: "Soft storytelling voice",
    text: "बचपन की लड़ाइयाँ, चुपके से बाँटी चॉकलेट, और हर मुश्किल में साथ। भाई दूज पर उस रिश्ते के नाम, जो कभी नहीं बदलता।",
  },
];

const BUSINESSES = [
  { icon: "🍛", t: "Restaurants, cafés & sweet shops", b: "Festive thali reveals, mithai box making, pre-order reminders before Diwali and Bhai Dooj.", href: "/tools/restaurant-reels-generator-ai", label: "Restaurant reels generator" },
  { icon: "👗", t: "Clothing, saree & ethnic wear", b: "Navratri colour-of-the-day looks, ‘outfit for every festival’ carousels, try-on reels.", href: "/tools/clothing-brand-instagram-video-generator", label: "Clothing brand video generator" },
  { icon: "💍", t: "Jewellery & gold", b: "Dhanteras is your biggest day — muhurat reminders, new collection reels, EMI/offer explainers.", href: "/tools/ai-ad-video-generator", label: "AI ad video generator" },
  { icon: "💅", t: "Salons, mehendi & beauty", b: "Karwa Chauth and Diwali booking slots, bridal-style looks, before/after reels.", href: "/tools/beauty-product-video-maker-ai", label: "Beauty video maker" },
  { icon: "🏪", t: "Local shops & kirana", b: "Simple greeting videos and offer posts for WhatsApp Status and Instagram.", href: "/tools/whatsapp-marketing-video-generator-for-local-businesses", label: "WhatsApp marketing videos" },
  { icon: "🎓", t: "Coaching & edtech", b: "Festive admission offers, Saraswati puja on Vasant Panchami, motivational ‘new beginnings’ posts.", href: "/tools/ai-educational-video-generator", label: "AI educational videos" },
  { icon: "🛒", t: "D2C & e-commerce brands", b: "Gift guides by budget, combo launches, countdown-sale reels and corporate gifting.", href: "/tools/ai-product-content-generator", label: "AI product content" },
  { icon: "🎥", t: "Creators & influencers", b: "Relatable festival skits, GRWM reels and family vlogs — the content that gets shared on WhatsApp.", href: "/tools/ai-reels-generator-with-voiceover", label: "Reels with AI voiceover" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "When is Diwali 2026?",
    a: "Diwali (Lakshmi Puja) falls on Sunday, 8 November 2026. Dhanteras is on Friday, 6 November, Govardhan Puja on Monday, 9 November, and Bhai Dooj on Wednesday, 11 November 2026. Exact tithi timings can vary by region, so confirm with your local panchang.",
  },
  {
    q: "How early should I start posting Diwali content?",
    a: "Start about 3–4 weeks before Diwali. For 2026 that means warming up from mid-October (during Navratri and Dussehra), sharing gift guides and early offers in the last week of October, and saving your biggest push for Dhanteras (6 Nov) to Diwali (8 Nov). Our 25-day countdown on this page starts on 15 October.",
  },
  {
    q: "When does Navratri start in 2026?",
    a: "Sharad Navratri 2026 begins on Sunday, 11 October, and Dussehra (Vijayadashami) is on Tuesday, 20 October 2026. Durga Puja festivities begin on Saturday, 17 October.",
  },
  {
    q: "Should I write captions in Hindi, Hinglish or English?",
    a: "For most Indian audiences on Instagram and YouTube Shorts, Hinglish (Hindi written in English letters, mixed with English) feels the most natural and casual. Pure Hindi in Devanagari works well for devotional content, greetings and voiceovers, while English suits premium brands and metro audiences. Many creators use a Hinglish caption with a Hindi voiceover.",
  },
  {
    q: "Can I make a Diwali reel with a Hindi AI voiceover?",
    a: "Yes. Paste any of the Hindi scripts on this page into Scenith’s AI voice generator, pick a Hindi male or female voice, and download the voiceover. You can also generate the visuals with AI image or video in the same studio, then add Hinglish subtitles.",
  },
  {
    q: "What are the best Diwali content ideas for small businesses?",
    a: "Countdown offers, gift guides by budget, behind-the-scenes of festive orders, customer greeting videos, and a heartfelt thank-you reel on Diwali day. Make a WhatsApp Status version of each post — for many local businesses in India, Status gets more views from real customers than Instagram.",
  },
  {
    q: "What time should I post festival content?",
    a: "Post greetings early on the festival morning, before puja and family time. For offers and reels, the evening (7–10 pm) usually sees the most scrolling in India. Since you will be celebrating too, plan and create everything in advance so posting takes seconds.",
  },
  {
    q: "How do I plan festival content with AI?",
    a: "Open Scenith’s Content Engine, create a plan with a start date and duration (for example, 15 October for 25 days), choose your platforms, and describe your business, audience and festive goal. The AI generates a day-by-day calendar with hooks, captions, CTAs and creative direction, which you can edit and send straight to the AI studio to create.",
  },
  {
    q: "Is Scenith’s content planner free?",
    a: "Scenith is free to sign up, and the AI voice, image and video tools have a free tier. Content Engine, the AI content planner, is included from Creator Lite at ₹799/month, which includes 25 planning days a month — enough for this entire Diwali countdown.",
  },
  {
    q: "Are these festival dates final?",
    a: "The dates on this page follow standard Indian holiday calendars for 2026–27. Hindu festivals follow the lunar calendar and Eid depends on moon sighting, so some dates can shift by a day in certain regions. Always double-check before scheduling time-sensitive offers.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FestivalContentCalendarIndiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Festival Content Calendar 2026–27 for India: Diwali, Navratri & Holi Ideas with Hinglish Captions",
        description:
          "Indian festival dates from October 2026 to March 2027 with reel ideas, Hinglish captions, Hindi voiceover scripts and a 25-day Diwali content plan.",
        url: PAGE_URL,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: "en-IN",
        author: { "@type": "Organization", name: "Scenith", url: "https://scenith.in" },
        publisher: { "@type": "Organization", name: "Scenith", url: "https://scenith.in" },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE_URL}#app`,
        name: "Scenith Content Engine — AI Festival Content Planner",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        url: PAGE_URL,
        offers: { "@type": "Offer", name: "Creator Lite", price: "799", priceCurrency: "INR" },
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
          { "@type": "ListItem", position: 3, name: "Festival Content Calendar India", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="fcc-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="fcc-breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li aria-current="page">Festival Content Calendar India</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <header className="fcc-hero">
        <div className="fcc-hero__glow" aria-hidden="true" />
        <div className="fcc-container">
          <span className="fcc-eyebrow">🪔 Updated October 2026 · Oct 2026 – Mar 2027</span>
          <h1>
            Festival Content Calendar 2026 for India: <span className="fcc-grad">Diwali, Navratri &amp; Holi</span>{" "}
            Reel Ideas + Hinglish Captions
          </h1>
          <p className="fcc-lead">
            Every festival date this season, what to post for each one, <strong>40+ copy-ready Hinglish
            captions</strong>, Hindi voiceover scripts and a day-by-day <strong>25-day Diwali content plan</strong>.
            Bookmark it — festive season is the biggest reach window of the year.
          </p>

          <div className="fcc-next" aria-label="Upcoming festivals">
            <div className="fcc-next__item">
              <span>Navratri</span><strong>11 Oct</strong>
            </div>
            <div className="fcc-next__item">
              <span>Dussehra</span><strong>20 Oct</strong>
            </div>
            <div className="fcc-next__item">
              <span>Karwa Chauth</span><strong>29 Oct</strong>
            </div>
            <div className="fcc-next__item fcc-next__item--hl">
              <span>Diwali</span><strong>8 Nov</strong>
            </div>
          </div>

          <div className="fcc-cta-row">
            <Link href={ENGINE_URL} className="fcc-btn fcc-btn--primary">Plan my festive content with AI →</Link>
            <a href="#captions" className="fcc-btn fcc-btn--ghost">Jump to Hinglish captions</a>
          </div>
        </div>
      </header>

      {/* ── TOC ── */}
      <nav className="fcc-toc" aria-label="On this page">
        <div className="fcc-container fcc-toc__inner">
          <a href="#calendar">📅 Dates</a>
          <a href="#diwali-plan">🪔 25-day Diwali plan</a>
          <a href="#ideas">💡 Reel ideas</a>
          <a href="#captions">✍️ Hinglish captions</a>
          <a href="#voiceover">🎙️ Hindi voiceovers</a>
          <a href="#business">🏪 By business</a>
          <a href="#how-to">⚡ Plan with AI</a>
          <a href="#faq">❓ FAQ</a>
        </div>
      </nav>

      {/* ── QUICK ANSWER ── */}
      <section className="fcc-section fcc-section--tight">
        <div className="fcc-container fcc-prose">
          <div className="fcc-answer">
            <strong>Quick answer:</strong> Diwali 2026 is on <b>Sunday, 8 November</b>. Start festive content
            about <b>3–4 weeks early</b> — warm up during Navratri (from 11 Oct), share gift guides and offers in
            late October, and save your biggest push for <b>Dhanteras (6 Nov) to Diwali (8 Nov)</b>, followed by
            Bhai Dooj (11 Nov).
          </div>
          <p>
            In India, the October–November festival season is when audiences spend the most time on Instagram,
            YouTube Shorts and WhatsApp — and when brands spend the most on marketing. Creators and businesses
            that plan ahead ride that wave. Those who wait until the morning of Diwali to think of a post get lost
            in a feed full of identical “Happy Diwali” graphics.
          </p>
          <p>
            This page gives you everything you need to plan ahead: the full festival calendar, idea packs,
            captions you can copy right now and a ready countdown you can load into Scenith’s AI{" "}
            <Link href="/tools/content-calendar-planner">content calendar planner</Link>.
          </p>
        </div>
      </section>

      {/* ── CALENDAR ── */}
      <section id="calendar" className="fcc-section fcc-section--soft">
        <div className="fcc-container">
          <h2 className="fcc-center">Indian festival calendar 2026–27 for content creators</h2>
          <p className="fcc-intro">
            Each festival with its date, when to start posting, and the content angle that tends to work. Save
            this table — it covers October 2026 through Holi 2027.
          </p>

          <div className="fcc-cal">
            {FESTIVALS.map((f) => (
              <article key={f.id} id={f.id} className={`fcc-cal__row ${f.id === "diwali" ? "is-hl" : ""}`}>
                <div className="fcc-cal__date">
                  <strong>{f.date.split(" ").slice(0, 2).join(" ")}</strong>
                  <span>{f.day} · {f.date.split(" ")[2]}</span>
                </div>
                <div className="fcc-cal__body">
                  <h3>{f.name}</h3>
                  <p>{f.angle}</p>
                </div>
                <div className="fcc-cal__start">
                  <span>Start posting</span>
                  <strong>{f.startFrom}</strong>
                </div>
              </article>
            ))}
          </div>
          <p className="fcc-note">
            Dates follow standard Indian holiday calendars. Lunar festivals can shift by a day by region and Eid
            depends on moon sighting — confirm locally before scheduling offers.
          </p>
        </div>
      </section>

      {/* ── 25-DAY DIWALI PLAN ── */}
      <section id="diwali-plan" className="fcc-section fcc-section--dark">
        <div className="fcc-container">
          <h2 className="fcc-center">The 25-day Diwali 2026 content countdown (15 Oct → 8 Nov)</h2>
          <p className="fcc-intro fcc-intro--light">
            Twenty-five days, four phases, one goal: be on your audience’s feed before, during and after the
            festival rush. It’s also exactly the 25 planning days included every month with Scenith Creator Lite.
          </p>
          <div className="fcc-phases">
            {COUNTDOWN.map((p) => (
              <article key={p.phase} className="fcc-phase">
                <header>
                  <span className="fcc-phase__tag">{p.phase}</span>
                  <span className="fcc-phase__range">{p.range}</span>
                </header>
                <h3>{p.title}</h3>
                <p className="fcc-phase__goal">{p.goal}</p>
                <ul>
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="fcc-center fcc-mt">
            <Link href={ENGINE_URL} className="fcc-btn fcc-btn--light">Generate this plan for my brand →</Link>
            <p className="fcc-small">Content Engine fills every day with a hook, caption, CTA and shot direction.</p>
          </div>
        </div>
      </section>

      {/* ── IDEA PACKS ── */}
      <section id="ideas" className="fcc-section">
        <div className="fcc-container">
          <h2 className="fcc-center">Festival reel & post ideas that get shared</h2>
          <p className="fcc-intro">
            Festive content that spreads in India is usually relatable, emotional or useful. These ideas work for
            Instagram Reels, YouTube Shorts and WhatsApp Status.
          </p>
          <div className="fcc-ideas">
            {IDEA_PACKS.map((p) => (
              <article key={p.id} id={p.id} className="fcc-idea">
                <h3><span>{p.emoji}</span> {p.festival} content ideas</h3>
                <ul>
                  {p.reels.map((r) => <li key={r}>{r}</li>)}
                </ul>
                <p className="fcc-idea__biz"><b>For businesses:</b> {p.business}</p>
                <Link href={studio("video", `${p.festival} reel: ${p.reels[0]}`)} className="fcc-link">
                  ⚡ Turn an idea into an AI video →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPTION BANK ── */}
      <section id="captions" className="fcc-section fcc-section--warm">
        <div className="fcc-container">
          <h2 className="fcc-center">40+ Hinglish captions for Diwali, Navratri, Holi &amp; more</h2>
          <p className="fcc-intro">
            Original, copy-ready captions in the Hinglish your audience actually types. <b>Tap a caption to select
            it</b>, then copy and paste into Instagram, YouTube or WhatsApp.
          </p>
          <div className="fcc-capgrid">
            {CAPTIONS.map((c) => (
              <article key={c.id} id={c.id} className="fcc-capcard">
                <h3>{c.festival} captions</h3>
                <ul>
                  {c.lines.map((l) => (
                    <li key={l}><span className="fcc-cap">{l}</span></li>
                  ))}
                </ul>
                <Link href={studio("image", `${c.festival} festive Instagram post, warm Indian festive lighting, space for text: ${c.lines[0]}`)} className="fcc-link">
                  🎨 Make a matching festive post →
                </Link>
              </article>
            ))}
          </div>
          <div className="fcc-tip">
            <strong>Caption formula that works:</strong> one relatable Hinglish line + one emoji + a CTA
            (“Tag your bhai 👇”, “Save for Diwali shopping”, “Share with your gang”). Add{" "}
            <Link href="/tools/add-subtitles-to-videos">Hinglish subtitles to your reel</Link> so it works with the
            sound off.
          </div>
        </div>
      </section>

      {/* ── HINDI VOICEOVER ── */}
      <section id="voiceover" className="fcc-section">
        <div className="fcc-container">
          <h2 className="fcc-center">Ready-made Hindi voiceover scripts for festive reels</h2>
          <p className="fcc-intro">
            A warm Hindi voiceover turns a simple diya or product clip into a reel that feels like an ad. Paste a
            script into Scenith’s AI voice generator, pick a Hindi voice, and download it in seconds — no mic or
            studio needed.
          </p>
          <div className="fcc-scripts">
            {VOICE_SCRIPTS.map((s) => (
              <article key={s.title} className="fcc-script">
                <header>
                  <h3>{s.title}</h3>
                  <span>{s.voice}</span>
                </header>
                <p lang="hi" className="fcc-script__text">{s.text}</p>
                <Link href={studio("voice", s.text)} className="fcc-btn fcc-btn--primary fcc-btn--sm">
                  🎙️ Generate this voiceover →
                </Link>
              </article>
            ))}
          </div>
          <div className="fcc-voicelinks">
            <span>Pick the right voice:</span>
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi female AI voice</Link>
            <Link href="/tools/hindi-male-ai-voice-generation">Hindi male AI voice</Link>
            <Link href="/tools/indian-female-ai-voice-generator">Indian female voice</Link>
            <Link href="/tools/ai-voice-generation-hindi">Hindi text to speech</Link>
          </div>
        </div>
      </section>

      {/* ── BY BUSINESS ── */}
      <section id="business" className="fcc-section fcc-section--soft">
        <div className="fcc-container">
          <h2 className="fcc-center">Diwali marketing ideas for small businesses (by business type)</h2>
          <p className="fcc-intro">
            Festive season is the biggest sales window for most Indian businesses. Here’s what to post if you run…
          </p>
          <div className="fcc-biz">
            {BUSINESSES.map((b) => (
              <article key={b.t} className="fcc-biz__card">
                <span className="fcc-biz__icon">{b.icon}</span>
                <h3>{b.t}</h3>
                <p>{b.b}</p>
                <Link href={b.href} className="fcc-link">→ {b.label}</Link>
              </article>
            ))}
          </div>
          <div className="fcc-tip fcc-mt">
            <strong>Don’t forget WhatsApp Status.</strong> For local businesses, your customers’ WhatsApp is often
            a stronger channel than Instagram. Download each reel from Scenith and post it to Status the same day.
            Need posters too? Try the <Link href="/tools/ai-poster-generator">AI poster generator</Link> or the{" "}
            <Link href="/tools/instagram-story-maker">Instagram story maker</Link>.
          </div>
        </div>
      </section>

      {/* ── HOW TO WITH CONTENT ENGINE ── */}
      <section id="how-to" className="fcc-section">
        <div className="fcc-container">
          <h2 className="fcc-center">How to plan your whole festive season with AI in 5 minutes</h2>
          <div className="fcc-howto">
            <ol className="fcc-steps">
              <li><span>1</span><div><h3>Open Content Engine</h3><p>In the Scenith AI studio, click Content Engine and choose “Create a content plan”.</p></div></li>
              <li><span>2</span><div><h3>Set your festive window</h3><p>Start date 15 October, duration 25 days — or any window from the calendar above.</p></div></li>
              <li><span>3</span><div><h3>Pick your platforms</h3><p>Instagram and YouTube for Reels and Shorts, X for quick posts. Download any piece for WhatsApp Status.</p></div></li>
              <li><span>4</span><div><h3>Describe your business &amp; festive goal</h3><p>Niche, city, audience, offer and tone — add “Hinglish captions” in the tone field.</p></div></li>
              <li><span>5</span><div><h3>Generate, edit, create</h3><p>Every day gets a hook, caption, CTA and shot idea. Hit “Create with Scenith” to make the video, image or Hindi voiceover.</p></div></li>
            </ol>

            <div className="fcc-brief">
              <div className="fcc-brief__head">Example brief</div>
              <dl>
                <div><dt>Plan title</dt><dd>Diwali 2026 countdown</dd></div>
                <div><dt>Start · Duration</dt><dd>15 Oct 2026 · 25 days</dd></div>
                <div><dt>Platforms</dt><dd>Instagram, YouTube</dd></div>
                <div><dt>Niche</dt><dd>Handmade mithai &amp; gift boxes, Jaipur</dd></div>
                <div><dt>Audience</dt><dd>Families and corporate gifting buyers, 25–45</dd></div>
                <div><dt>Goal</dt><dd>Pre-orders for Diwali and Bhai Dooj</dd></div>
                <div><dt>Tone</dt><dd>Warm, festive, Hinglish captions</dd></div>
                <div><dt>Pillars</dt><dd>behind the scenes, gift guides, offers, family moments</dd></div>
              </dl>
              <Link href={ENGINE_URL} className="fcc-btn fcc-btn--primary fcc-btn--block">Use this brief →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="fcc-section fcc-section--soft">
        <div className="fcc-container fcc-prose">
          <h2>8 festive content rules for the Indian audience</h2>
          <div className="fcc-rules">
            {[
              ["Post before the festival, not on it", "Feeds are flooded on the day itself. Your best reach comes 2–5 days earlier."],
              ["Mobile-first, sound-off friendly", "Most viewers watch on phones, often muted. Use big text and Hinglish subtitles."],
              ["Emotion beats aesthetics", "Family, siblings and nostalgia get shared on WhatsApp far more than polished graphics."],
              ["Hook in the first 3 seconds", <>Open with a question or a relatable line. Read the <Link href="/blogs/three-second-rule">three-second rule</Link>.</>],
              ["Make a Status version of everything", "A 15–30 second vertical cut works for Reels, Shorts and WhatsApp Status."],
              ["Be respectful", "Use religious symbols and deities with care, especially in ads, and avoid stereotypes about regions or communities."],
              ["Schedule, then celebrate", "Plan and create everything a few days early so posting on the day takes seconds."],
              ["Reuse your winners", "If a Navratri reel performs, adapt the same format for Diwali and Holi."],
            ].map(([t, b], i) => (
              <div key={i} className="fcc-rule">
                <span>{i + 1}</span>
                <div><strong>{t}</strong><p>{b}</p></div>
              </div>
            ))}
          </div>
          <p className="fcc-mt">
            More growth reading:{" "}
            <Link href="/blogs/how-to-beat-instagram-algorithm-2025-reels-strategy">beating the Instagram Reels algorithm</Link>{" "}
            and <Link href="/tools/multi-platform-content-planner">planning one idea for multiple platforms</Link>.
          </p>
        </div>
      </section>

      {/* ── PRICING STRIP ── */}
      <section className="fcc-section fcc-section--tight">
        <div className="fcc-container">
          <div className="fcc-price">
            <div>
              <h2>Your whole Diwali countdown for ₹799</h2>
              <p>
                Creator Lite includes 25 planning days a month in Content Engine, plus 1,000 AI credits and 50,000
                voice characters for Hindi voiceovers, images and videos — no watermark.
              </p>
            </div>
            <div className="fcc-price__actions">
              <Link href={ENGINE_URL} className="fcc-btn fcc-btn--primary">Start planning →</Link>
              <Link href={PRICING_URL} className="fcc-btn fcc-btn--ghost">See all plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="fcc-section">
        <div className="fcc-container fcc-faq">
          <h2 className="fcc-center">Festival content calendar — FAQ</h2>
          {FAQS.map((f) => (
            <details key={f.q} className="fcc-faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="fcc-final">
        <div className="fcc-container fcc-center">
          <h2>Is Diwali, content ka tension mat lo 🪔</h2>
          <p>Plan your festive season with AI, then create every reel, post and Hindi voiceover in one place.</p>
          <div className="fcc-cta-row">
            <Link href={ENGINE_URL} className="fcc-btn fcc-btn--light">Open Content Engine →</Link>
            <Link href={studio("voice", VOICE_SCRIPTS[0].text)} className="fcc-btn fcc-btn--outline">Try a Hindi voiceover free</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <footer className="fcc-related">
        <div className="fcc-container">
          <strong>Related tools &amp; guides</strong>
          <div className="fcc-related__links">
            <Link href="/tools/content-calendar-planner">AI Content Calendar Planner</Link>
            <Link href="/tools/multi-platform-content-planner">Multi-Platform Content Planner</Link>
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi Female AI Voice</Link>
            <Link href="/tools/hindi-male-ai-voice-generation">Hindi Male AI Voice</Link>
            <Link href="/tools/ai-poster-generator">AI Poster Generator</Link>
            <Link href="/tools/instagram-story-maker">Instagram Story Maker</Link>
            <Link href="/tools/add-subtitles-to-videos">Add Subtitles to Videos</Link>
            <Link href="/tools/local-business-video-ads-generator-india">Local Business Video Ads (India)</Link>
            <Link href="/tools/small-business-whatsapp-ad-video-maker">WhatsApp Ad Video Maker</Link>
            <Link href="/tools/ai-content-calendar-for-instagram">Instagram Content Calendar</Link>
            <Link href="/create-ai-content">🎬 Scenith AI Studio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}