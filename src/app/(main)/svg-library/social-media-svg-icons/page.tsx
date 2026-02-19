// app/svg-library/social-media-svg-icons/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../../../../styles/svg-library/SocialMediaIcons.css";

export const metadata: Metadata = {
  title: "Free Social Media SVG Icons – Download Facebook, Instagram, Twitter, TikTok Icons | Scenith",
  description:
    "Download 500+ free social media SVG icons for Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube, Pinterest, WhatsApp & more. Scalable, no attribution, instant download. Perfect for web design, apps & marketing.",
  keywords: [
    "social media svg icons",
    "free social media icons",
    "facebook icon svg",
    "instagram icon svg",
    "twitter x icon svg",
    "tiktok icon svg",
    "linkedin icon svg",
    "youtube icon svg",
    "whatsapp icon svg",
    "pinterest icon svg",
    "snapchat icon svg",
    "reddit icon svg",
    "discord icon svg",
    "telegram icon svg",
    "social media icons free download",
    "social media vector icons",
    "social media icons for website",
    "social media icons no attribution",
    "social media icons png svg",
    "flat social media icons",
    "outline social media icons",
    "social media logo icons",
    "social media share icons",
    "social media follow icons",
    "free social icons 2024",
  ],
  openGraph: {
    title: "Free Social Media SVG Icons – Facebook, Instagram, Twitter, TikTok & More",
    description:
      "500+ free social media SVG icons. Download Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube icons instantly. No attribution, commercial use allowed.",
    type: "website",
    url: "https://scenith.in/svg-library/social-media-svg-icons",
    images: [
      {
        url: "/images/og-social-media-icons.jpg",
        width: 1200,
        height: 630,
        alt: "Free Social Media SVG Icons – Scenith Icon Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Social Media SVG Icons – Download Instantly | Scenith",
    description:
      "500+ free social media icons for Facebook, Instagram, Twitter, TikTok & more. SVG, PNG, JPG formats. No attribution needed.",
    images: ["/images/twitter-social-media-icons.jpg"],
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.in/svg-library/social-media-svg-icons",
  },
};

const iconStyles = [
  {
    style: "Flat Filled",
    desc: "Solid color backgrounds with white logos. The most widely used social media icon style. Perfect for footer social links, contact pages, and brand kits.",
    bestFor: "Websites, email signatures, business cards",
    icon: "🟦",
  },
  {
    style: "Outline / Monochrome",
    desc: "Clean single-color line art icons without backgrounds. Adapts to any color theme. Ideal for minimal designs where icons shouldn't compete with content.",
    bestFor: "Minimal websites, light UI, dark mode interfaces",
    icon: "⬜",
  },
  {
    style: "Rounded Square (Squircle)",
    desc: "Platform-style rounded square containers following iOS and Android app icon conventions. Feels native and modern across all screen sizes.",
    bestFor: "Mobile apps, app store listings, digital marketing",
    icon: "🔷",
  },
  {
    style: "Circle Badges",
    desc: "Classic circular icon treatment beloved by social media toolbars everywhere. Creates uniform visual weight in horizontal icon rows.",
    bestFor: "Blog sidebars, share toolbars, contact sections",
    icon: "🔵",
  },
  {
    style: "Gradient / Brand Exact",
    desc: "Pixel-perfect brand color reproductions including Instagram's iconic gradient. Essential for brand compliance and professional presentations.",
    bestFor: "Marketing materials, pitch decks, brand guidelines",
    icon: "🌈",
  },
  {
    style: "Glassmorphism",
    desc: "Frosted glass effect with backdrop blur. The trendiest style of 2024-2025 that elevates any interface from ordinary to premium.",
    bestFor: "Premium websites, SaaS products, landing pages",
    icon: "🪟",
  },
];

const useCases = [
  {
    title: "Website Header & Footer Social Links",
    icon: "🌐",
    desc: "Every professional website needs social media icons in the header navigation or footer. Our SVG icons scale perfectly from 16px to 64px without any quality loss, ensuring your social links always look sharp on every screen from mobile to 4K. Use outline icons for minimal headers or filled icons to create eye-catching footer social bars.",
    tips: ["Use 24-32px for navigation bars", "32-48px for footer sections", "Match icon style to overall site aesthetic"],
  },
  {
    title: "Share Buttons & Social Sharing Widgets",
    icon: "📤",
    desc: "Social sharing buttons directly impact your content's reach. Well-designed share buttons increase click-through rates by 40%. Our social media SVG icons are optimized for interactive share widgets – they work perfectly with JavaScript share APIs, have crisp rendering at button sizes, and maintain accessibility with proper ARIA labels.",
    tips: ["Add hover effects with CSS transforms", "Use filled icons for higher visibility", "Include share count labels next to icons"],
  },
  {
    title: "Email Signature Social Icons",
    icon: "📧",
    desc: "Social media icons in email signatures professionally link recipients to your online presence. Since email clients have inconsistent SVG support, download our PNG versions at 2x resolution for crisp rendering in Gmail, Outlook, Apple Mail, and all major email clients on both retina and standard displays.",
    tips: ["Use 20-24px PNG for email signatures", "Always include alt text for accessibility", "Test in Gmail and Outlook before deploying"],
  },
  {
    title: "Mobile App UI Components",
    icon: "📱",
    desc: "Social login buttons, sharing modals, and profile connection screens are core components of modern apps. Our social media icons are available in sizes matching Material Design (24dp) and iOS Human Interface Guidelines (24pt, 28pt) specifications. Download SVG and export to any resolution your development workflow requires.",
    tips: ["Minimum 44x44px touch targets", "Use brand-exact colors for platform compliance", "Test on both iOS and Android"],
  },
  {
    title: "Social Media Marketing Creatives",
    icon: "🎨",
    desc: "Designers creating Instagram posts, Facebook ads, LinkedIn carousels, and Twitter/X graphics need platform-specific icons for 'follow us,' 'tag us,' and 'share' call-to-actions. Our high-resolution SVG icons export cleanly to any size needed for social media canvas sizes (1080×1080, 1200×628, 1080×1920).",
    tips: ["Export at 300 DPI for print quality ads", "Use brand gradient icons for recognition", "Apply brand colors consistently across all platforms"],
  },
  {
    title: "Landing Pages & Lead Generation",
    icon: "🎯",
    desc: "Social proof sections on landing pages featuring 'trusted by' logos, follower counts with platform icons, and social login options drive conversions. Our clean social media icons integrate seamlessly into hero sections, pricing pages, and testimonial blocks. Trust signals built with recognizable platform icons boost conversion rates significantly.",
    tips: ["Place above-the-fold for maximum impact", "Use social login to reduce signup friction", "Show follower counts with platform icons for social proof"],
  },
  {
    title: "Presentations & Pitch Decks",
    icon: "📊",
    desc: "PowerPoint and Google Slides presentations for client pitches, investor decks, and marketing reports need crisp social media icons that don't pixelate when projected. SVG icons remain perfect at any presentation screen size. Use our icons for social media strategy slides, analytics dashboards, and competitive analysis charts.",
    tips: ["Use gradient icons for polished investor decks", "Maintain consistent icon size throughout", "Export as PNG for maximum compatibility"],
  },
  {
    title: "E-commerce Product Pages",
    icon: "🛒",
    desc: "Online stores benefit enormously from social sharing icons on product pages. Studies show social share buttons on product pages increase average order value by 9-12%. Pinterest icons are especially valuable for visually appealing products. Our icons integrate with WooCommerce, Shopify, and custom e-commerce solutions.",
    tips: ["Add Pinterest icon for visual products", "Place share buttons below product images", "A/B test icon styles for conversion optimization"],
  },
];

const faqItems = [
  {
    q: "What social media SVG icons are available for free download?",
    a: "Scenith's library includes free SVG icons for all major social platforms: Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube, WhatsApp, Pinterest, Snapchat, Reddit, Discord, Telegram, Twitch, GitHub, Medium, Behance, Dribbble, Spotify, SoundCloud, Clubhouse, Threads, Mastodon, and dozens more emerging platforms. Icons are updated regularly as new platforms gain popularity.",
  },
  {
    q: "Can I use social media SVG icons commercially for free?",
    a: "Yes! All Scenith social media icons are 100% free for commercial use with zero attribution requirements. Use them in client websites, e-commerce stores, mobile apps, marketing materials, templates for sale, printed materials, and any business application. No license fees, no royalties, no credit needed.",
  },
  {
    q: "Are these social media icons brand-compliant with official guidelines?",
    a: "Our icons closely follow official brand guidelines from Facebook, Instagram, Twitter/X, TikTok, LinkedIn, and other platforms. They use correct brand colors, proportions, and design principles. For strict brand compliance (such as official partner or advertiser status), always refer to each platform's official press kit alongside our icons.",
  },
  {
    q: "What formats can I download social media icons in?",
    a: "Download in SVG (scalable vector, ideal for web), PNG with transparent background (universal compatibility), JPG (for photo compositions), and PDF (for professional printing). SVG is recommended for web use as it scales to any size perfectly. PNG 2x is recommended for email signatures and platforms with limited SVG support.",
  },
  {
    q: "How do I implement social media SVG icons in my website?",
    a: "Three main methods: (1) Inline SVG – paste SVG code directly in HTML for full CSS styling control. (2) IMG tag – use src attribute pointing to the SVG file for simple implementation. (3) CSS background-image for purely decorative icons. Inline SVG is preferred for interactive icons you'll animate or style with CSS hover effects.",
  },
  {
    q: "What size should social media icons be on websites?",
    a: "Recommended sizes: 16-20px for small inline icons within text, 24-32px for navigation and toolbar icons, 32-48px for footer social links, 48-64px for prominent 'follow us' sections, 80-120px for featured platform highlights. Always ensure touch targets are minimum 44×44px on mobile for accessibility compliance.",
  },
  {
    q: "Do social media SVG icons work with dark mode?",
    a: "SVG icons are perfect for dark mode because they can be styled with CSS. Use monochrome outline icons that switch color based on the prefers-color-scheme media query. Alternatively, use white filled icons on colored backgrounds that work in both modes. Our editor lets you create dark and light versions before downloading.",
  },
  {
    q: "Can I customize social media icons before downloading?",
    a: "Absolutely! Click 'Edit in Editor' on any icon to open our online design tool. Change fill colors to match your brand palette, resize to exact pixel dimensions, add backgrounds, apply rounded corners, add drop shadows, adjust opacity, and combine multiple platform icons into a social bar layout. Export customized icons in any format.",
  },
  {
    q: "What's the difference between outline and filled social media icons?",
    a: "Filled icons have solid colored backgrounds with white logos – high visibility, widely recognized, great for CTAs. Outline icons are single-color line art without backgrounds – versatile, minimal, blend into any design. Choose filled icons when you want strong visual emphasis (share buttons, follow CTAs) and outline icons for subtle, minimal use cases (navigation, footer links).",
  },
  {
    q: "How many social media icons are in the Scenith library?",
    a: "Scenith's library contains 500+ social media-specific icons covering all major global platforms, regional platforms (WeChat, VK, LINE), professional networks (GitHub, Behance, Dribbble, Figma Community), messaging apps, streaming platforms, and emerging social networks. The library is updated monthly with new platform additions.",
  },
  {
    q: "Are social media icons optimized for performance?",
    a: "Yes. SVG files are text-based XML typically 60-90% smaller than equivalent PNG files. Our icons are optimized with SVGO to remove unnecessary metadata and whitespace. For maximum performance, combine multiple icons into an SVG sprite sheet (one HTTP request), enable gzip compression on your server, and set long cache-control headers.",
  },
  {
    q: "Do social media SVG icons support animation?",
    a: "SVG icons support both CSS animations and JavaScript-powered animations. Common social media icon animations: hover color transitions (CSS), logo reveal on page load (CSS keyframes), pulsing notification badges (CSS), interactive social counter updates (JavaScript). Use the Web Animations API or GreenSock library for complex icon animations.",
  },
  {
    q: "Can I use these icons for Figma, Sketch, or Adobe XD projects?",
    a: "Yes! Download as SVG and import directly into Figma (File > Place Image or drag-and-drop), Sketch (drag SVG to canvas), or Adobe XD (File > Import). SVG imports preserve vector properties for infinite scaling. In Figma, use 'Detach Instance' to edit individual paths and customize brand colors to your design system.",
  },
  {
    q: "Are there social media icons for newer platforms like Threads and Mastodon?",
    a: "Yes! We continuously add icons for emerging platforms including Threads (Meta's Twitter alternative), Mastodon (decentralized social), Bluesky, BeReal, Clubhouse, Substack, and other rising platforms. Check the 'New' category in our library for recently added social platform icons.",
  },
];

const implementationGuide = [
  {
    step: "1",
    title: "Browse & Search Social Icons",
    desc: "Navigate to the Scenith SVG Library and search for your desired social platform (e.g., 'Instagram icon', 'Facebook logo', 'Twitter bird'). Use category filters to browse all social media icons at once. Preview icons at multiple sizes to ensure they meet your quality requirements before downloading.",
    code: `<!-- Search tips -->
Search: "instagram logo"
Filter: Social Media category
Preview: Click icon to see full size`,
  },
  {
    step: "2",
    title: "Choose Your Style & Format",
    desc: "Select the icon style that matches your design: filled/flat for maximum recognition, outline for minimal designs, gradient for premium aesthetics. Choose SVG format for web use, PNG for email and presentations, or open in the editor to customize colors before downloading.",
    code: `<!-- Format recommendations -->
Web/Apps:     SVG (scalable, CSS-styleable)
Email:        PNG @2x (96px for 48px display)
Print/PDF:    SVG or PDF (infinite scale)
Presentations: PNG @300dpi or SVG`,
  },
  {
    step: "3",
    title: "Implement in Your Project",
    desc: "Add icons to your HTML/CSS using the recommended inline SVG method for maximum control. Include proper accessibility attributes for screen readers. Test rendering across different browsers and devices.",
    code: `<!-- Inline SVG method (recommended) -->
<a href="https://instagram.com/yourprofile" 
   aria-label="Follow us on Instagram"
   rel="noopener noreferrer"
   target="_blank">
  <svg viewBox="0 0 24 24" 
       width="32" height="32"
       role="img"
       aria-hidden="true">
    <!-- SVG path data here -->
  </svg>
</a>`,
  },
  {
    step: "4",
    title: "Style with CSS",
    desc: "For inline SVG icons, you can control colors, sizes, hover effects, and animations purely with CSS. This is the most powerful and performant approach for social media icon implementations.",
    code: `/* CSS styling for SVG icons */
.social-icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
  transition: transform 0.2s ease,
              opacity 0.2s ease;
}

.social-icon:hover {
  transform: translateY(-3px) scale(1.1);
  opacity: 0.85;
}

/* Platform-specific colors */
.social-icon--instagram { fill: #E1306C; }
.social-icon--linkedin  { fill: #0077B5; }
.social-icon--twitter   { fill: #000000; }`,
  },
];

const ctaUrl = "https://scenith.in/svg-library";

const SocialMediaIconsPage = () => {
  return (
    <div className="sm-icons-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="smi-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/svg-library" itemProp="item"><span itemProp="name">SVG Library</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Social Media SVG Icons</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://scenith.in/svg-library/social-media-svg-icons",
                name: "Free Social Media SVG Icons – Facebook, Instagram, Twitter, TikTok & More",
                description:
                  "Download 500+ free social media SVG icons for all platforms. No attribution required. Commercial use allowed. Instant download in SVG, PNG, JPG formats.",
                url: "https://scenith.in/svg-library/social-media-svg-icons",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://scenith.in/#website",
                },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
                    { "@type": "ListItem", position: 2, name: "SVG Library", item: "https://scenith.in/svg-library" },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Social Media SVG Icons",
                      item: "https://scenith.in/svg-library/social-media-svg-icons",
                    },
                  ],
                },
              },
              {
                "@type": "CollectionPage",
                "@id": "https://scenith.in/svg-library/social-media-svg-icons#collection",
                name: "Free Social Media SVG Icons Collection",
                description: "500+ free social media icons for Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube, WhatsApp, Pinterest and more.",
                numberOfItems: 500,
                url: "https://scenith.in/svg-library/social-media-svg-icons",
                about: {
                  "@type": "Thing",
                  name: "Social Media Icons",
                  description: "SVG vector icons for social media platforms including Facebook, Instagram, Twitter, TikTok, LinkedIn, YouTube and more",
                },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://scenith.in/svg-library/social-media-svg-icons#faq",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              },
              {
                "@type": "HowTo",
                "@id": "https://scenith.in/svg-library/social-media-svg-icons#howto",
                name: "How to Download and Use Free Social Media SVG Icons",
                description: "Step-by-step guide to finding, downloading, customizing and implementing social media SVG icons",
                totalTime: "PT3M",
                step: [
                  {
                    "@type": "HowToStep",
                    position: 1,
                    name: "Browse & Search",
                    text: "Search for your desired social platform icon using the library search bar or browse the social media category.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 2,
                    name: "Choose Format",
                    text: "Select SVG for web use, PNG for email and presentations, or open in the editor to customize colors.",
                  },
                  {
                    "@type": "HowToStep",
                    position: 3,
                    name: "Download & Implement",
                    text: "Download your icon and implement using inline SVG, IMG tags, or CSS background-image methods.",
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ═══ HERO ═══ */}
      <section className="smi-hero">
        <div className="smi-hero-bg-grid" aria-hidden="true" />
        <div className="smi-hero-orb smi-hero-orb--1" aria-hidden="true" />
        <div className="smi-hero-orb smi-hero-orb--2" aria-hidden="true" />
        <div className="smi-hero-orb smi-hero-orb--3" aria-hidden="true" />

        <div className="smi-container">
          <div className="smi-hero-badge">
            <span className="smi-hero-badge-dot" aria-hidden="true" />
            500+ Free Icons • No Attribution Required
          </div>

          <h1 className="smi-hero-h1">
            Free Social Media
            <span className="smi-hero-gradient-text"> SVG Icons</span>
          </h1>

          <p className="smi-hero-sub">
            Download pixel-perfect SVG icons for every social media platform — Facebook, Instagram, Twitter/X, TikTok,
            LinkedIn, YouTube, WhatsApp, Pinterest, Snapchat, Discord & more. Scalable to any size, fully customizable,
            commercial use allowed, zero attribution needed.
          </p>

          {/* Animated platform row */}
          <div className="smi-platform-marquee" aria-label="Supported social media platforms">
            <div className="smi-platform-track">
              {["Facebook", "Instagram", "Twitter/X", "TikTok", "LinkedIn", "YouTube", "WhatsApp", "Pinterest", "Snapchat", "Reddit", "Discord", "Telegram", "Twitch", "GitHub", "Threads", "Mastodon"].map(
                (p) => (
                  <span key={p} className="smi-platform-chip">
                    {p}
                  </span>
                )
              )}
              {/* Duplicate for infinite scroll */}
              {["Facebook", "Instagram", "Twitter/X", "TikTok", "LinkedIn", "YouTube", "WhatsApp", "Pinterest", "Snapchat", "Reddit", "Discord", "Telegram", "Twitch", "GitHub", "Threads", "Mastodon"].map(
                (p) => (
                  <span key={`${p}-2`} aria-hidden="true" className="smi-platform-chip">
                    {p}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="smi-hero-cta-group">
            <Link href={ctaUrl} className="smi-cta-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2L10 14M10 14L5 9M10 14L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Browse All Social Media Icons
            </Link>
            <Link href={`${ctaUrl}?category=social`} className="smi-cta-secondary">
              View Full Collection →
            </Link>
          </div>

          <div className="smi-hero-trust">
            <span className="smi-trust-badge">✓ SVG &amp; PNG formats</span>
            <span className="smi-trust-badge">✓ Commercial use free</span>
            <span className="smi-trust-badge">✓ No watermarks</span>
            <span className="smi-trust-badge">✓ Instant download</span>
            <span className="smi-trust-badge">✓ No signup needed</span>
          </div>
        </div>
      </section>

      {/* ═══ QUICK DEFINITION (Featured Snippet Target) ═══ */}
      <section className="smi-definition-section" role="region" aria-labelledby="smi-definition-title">
        <div className="smi-container">
          <div className="smi-definition-card">
            <div className="smi-definition-label" id="smi-definition-title">Quick Definition</div>
            <p className="smi-definition-text">
              <strong>Social Media SVG Icons</strong> are scalable vector graphic files representing the logos and symbols of social
              networking platforms — Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube, and more. Unlike raster formats (PNG,
              JPG), SVG icons scale infinitely without pixelation, making them ideal for responsive websites, mobile apps,
              and high-resolution displays. They can be styled with CSS, animated with JavaScript, and typically weigh 60-90%
              less than equivalent PNG files. Free social media SVG icons enable designers and developers to add professional platform
              branding to any project without licensing costs or attribution requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM GRID ═══ */}
      <section className="smi-platforms-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">Every Social Platform You Need</h2>
            <p className="smi-section-desc">
              From global giants to niche communities — our library covers all 500+ social platforms designers actually use.
              Multiple icon styles available for each platform.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ICON STYLES ═══ */}
      <section className="smi-styles-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">6 Icon Styles for Every Design Need</h2>
            <p className="smi-section-desc">
              Not all social media icons should look the same. Choose from six distinct visual styles to match your project's
              design language — from corporate clean to cutting-edge glassmorphism.
            </p>
          </div>

          <div className="smi-styles-grid">
            {iconStyles.map((style) => (
              <article key={style.style} className="smi-style-card">
                <div className="smi-style-icon" aria-hidden="true">{style.icon}</div>
                <h3 className="smi-style-name">{style.style}</h3>
                <p className="smi-style-desc">{style.desc}</p>
                <div className="smi-style-best-for">
                  <strong>Best for:</strong> {style.bestFor}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="smi-usecases-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">8 High-Impact Use Cases for Social Media SVG Icons</h2>
            <p className="smi-section-desc">
              Social media icons appear in more places than most designers realize. Here are the most impactful applications — with
              pro tips for maximum effectiveness.
            </p>
          </div>

          <div className="smi-usecases-grid">
            {useCases.map((uc) => (
              <article key={uc.title} className="smi-usecase-card">
                <div className="smi-usecase-icon-wrap" aria-hidden="true">
                  <span className="smi-usecase-emoji">{uc.icon}</span>
                </div>
                <div className="smi-usecase-content">
                  <h3 className="smi-usecase-title">{uc.title}</h3>
                  <p className="smi-usecase-desc">{uc.desc}</p>
                  <ul className="smi-usecase-tips">
                    {uc.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMPLEMENTATION GUIDE ═══ */}
      <section className="smi-impl-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">Developer Implementation Guide</h2>
            <p className="smi-section-desc">
              Four steps from icon discovery to production deployment. Includes real code examples for every implementation method.
            </p>
          </div>

          <div className="smi-impl-steps">
            {implementationGuide.map((step) => (
              <article key={step.step} className="smi-impl-step">
                <div className="smi-impl-step-num" aria-hidden="true">{step.step}</div>
                <div className="smi-impl-step-content">
                  <h3 className="smi-impl-step-title">{step.title}</h3>
                  <p className="smi-impl-step-desc">{step.desc}</p>
                  <pre className="smi-impl-code"><code>{step.code}</code></pre>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY SVG OVER PNG ═══ */}
      <section className="smi-comparison-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">Why SVG Icons Beat PNG for Social Media Use</h2>
            <p className="smi-section-desc">
              Choosing the right format for social media icons has real performance and quality implications.
              Here's the definitive comparison.
            </p>
          </div>

          <div className="smi-comparison-grid">
            <div className="smi-comparison-col smi-comparison-col--winner">
              <div className="smi-comparison-header">
                <span className="smi-comparison-badge smi-comparison-badge--winner">✓ Recommended</span>
                <h3>SVG Icons</h3>
              </div>
              <ul className="smi-comparison-list">
                {[
                  ["Infinite scalability", "Perfect quality at 16px or 1600px — no pixelation ever"],
                  ["File size", "60-90% smaller than equivalent PNG files"],
                  ["CSS styleable", "Change colors, size, opacity with pure CSS"],
                  ["JavaScript animatable", "Animate paths, transforms, and properties with JS"],
                  ["Accessible", "Add title, desc, aria-label for screen readers"],
                  ["Dark mode ready", "Use CSS currentColor for automatic theme adaptation"],
                  ["HTTP caching", "Single SVG sprite serves all icons in one request"],
                  ["SEO benefit", "Search engines can read SVG title and description text"],
                ].map(([feature, detail]) => (
                  <li key={feature} className="smi-comparison-item smi-comparison-item--pro">
                    <strong>{feature}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="smi-comparison-col">
              <div className="smi-comparison-header">
                <span className="smi-comparison-badge">Use when needed</span>
                <h3>PNG Icons</h3>
              </div>
              <ul className="smi-comparison-list">
                {[
                  ["Email clients", "Use PNG 2x for Outlook/Gmail — SVG support is inconsistent"],
                  ["Legacy browsers", "IE11 and very old browsers lack full SVG support"],
                  ["WordPress upload", "PNG uploads work without server SVG configuration"],
                  ["Social media ads", "Facebook/Instagram ad managers prefer PNG assets"],
                  ["No-code builders", "Wix, Squarespace work better with PNG uploads"],
                  ["Photo compositions", "JPG/PNG for social icons layered over photos"],
                  ["Figma exports", "Export PNG for handoff to developers who prefer it"],
                  ["Third-party platforms", "CMS systems with limited SVG rendering support"],
                ].map(([feature, detail]) => (
                  <li key={feature} className="smi-comparison-item">
                    <strong>{feature}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS SECTION ═══ */}
      <section className="smi-stats-section">
        <div className="smi-container">
          <h2 className="smi-stats-title">Why Social Media Icons Matter for Your Brand</h2>
          <div className="smi-stats-grid">
            {[
              { number: "5.2B", label: "Social Media Users Worldwide", detail: "More than 64% of the global population uses social media actively in 2025" },
              { number: "40%", label: "More Clicks with Good Icons", detail: "Professional social media icons increase share button click-through rates by up to 40%" },
              { number: "3.7s", label: "Average Attention Span", detail: "Recognizable platform icons get attention in under 0.5 seconds vs text links taking 3.7 seconds" },
              { number: "73%", label: "Users Expect Social Links", detail: "73% of website visitors look for social media icons in the header or footer within their first visit" },
              { number: "2.8x", label: "Higher Engagement", detail: "Pages with recognizable social icons in CTAs see 2.8x higher social following conversion rates" },
              { number: "91%", label: "Brand Recognition", detail: "Platform icons achieve 91% instant recognition without any text labels across all demographics" },
            ].map((stat) => (
              <div key={stat.number} className="smi-stat-card">
                <div className="smi-stat-number">{stat.number}</div>
                <div className="smi-stat-label">{stat.label}</div>
                <p className="smi-stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACCESSIBILITY SECTION ═══ */}
      <section className="smi-accessibility-section">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">Accessible Social Media Icons: Best Practices</h2>
            <p className="smi-section-desc">
              Accessibility is not optional — it's a legal requirement in many jurisdictions and essential for inclusive design.
              Here's how to implement social media icons accessibly.
            </p>
          </div>

          <div className="smi-a11y-grid">
            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">🏷️</div>
              <h3>Always Add ARIA Labels</h3>
              <p>
                Icon-only links must have <code>aria-label</code> attributes describing their destination. Never leave social
                media icon links without text alternatives. Screen readers announce the label to visually impaired users, making
                your site accessible to the 7.3 million Americans with visual disabilities.
              </p>
              <div className="smi-a11y-code">
                <code>{`<a aria-label="Visit our Instagram">\n  <svg aria-hidden="true">...</svg>\n</a>`}</code>
              </div>
            </article>

            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">🎯</div>
              <h3>Minimum Touch Target Size</h3>
              <p>
                WCAG 2.5.5 (Success Criterion) and Apple/Google HIG both specify minimum 44×44px touch targets for interactive
                elements. Social media icons that are 24px visually must have 44px clickable areas through padding or wrapper
                elements. This prevents frustrating missed taps on mobile devices.
              </p>
              <div className="smi-a11y-code">
                <code>{`.social-link {\n  padding: 10px;\n  /* Creates 44px target for 24px icon */\n}`}</code>
              </div>
            </article>

            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">🌗</div>
              <h3>Color Contrast Requirements</h3>
              <p>
                WCAG AA standard requires 4.5:1 contrast ratio for text and 3:1 for graphical elements. Social media icons on
                white backgrounds must meet contrast thresholds. Monochrome dark icons on white (#000000 on #FFFFFF gives 21:1)
                are always compliant. Test colored icons against their backgrounds using browser accessibility tools.
              </p>
              <div className="smi-a11y-code">
                <code>{`/* High contrast always passes */\n.icon { color: #000; background: #fff; }\n/* Ratio: 21:1 ✓ */`}</code>
              </div>
            </article>

            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">⌨️</div>
              <h3>Keyboard Navigation Support</h3>
              <p>
                Social media icon links must be fully navigable by keyboard. Ensure visible focus styles (outline, box-shadow, or
                background change) appear when icons receive keyboard focus. Never use CSS <code>outline: none</code> without
                providing an alternative focus indicator. Test by pressing Tab key through your social icon row.
              </p>
              <div className="smi-a11y-code">
                <code>{`.social-link:focus-visible {\n  outline: 2px solid #0077B5;\n  outline-offset: 2px;\n}`}</code>
              </div>
            </article>

            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">🔄</div>
              <h3>Respect Reduced Motion</h3>
              <p>
                Many users have vestibular disorders triggered by animations. Use the <code>prefers-reduced-motion</code> media
                query to disable icon hover animations for users who opt into reduced motion settings. This affects approximately
                35% of users on desktop and iOS systems.
              </p>
              <div className="smi-a11y-code">
                <code>{`@media (prefers-reduced-motion: reduce) {\n  .social-icon { transition: none; }\n}`}</code>
              </div>
            </article>

            <article className="smi-a11y-card">
              <div className="smi-a11y-icon" aria-hidden="true">🔗</div>
              <h3>Descriptive Link Text</h3>
              <p>
                Avoid generic "Click here" patterns. Screen reader users often navigate by listing all links on a page. Links
                should make sense out of context. Use descriptive <code>aria-label</code> values like "Follow Scenith on
                Instagram" rather than just "Instagram" — this tells users both the platform and the specific account/action.
              </p>
              <div className="smi-a11y-code">
                <code>{`/* Too vague */\naria-label="Instagram"\n\n/* Better */\naria-label="Follow us on Instagram"`}</code>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ SEO DEEP-DIVE CONTENT ═══ */}
      <section className="smi-content-section">
        <div className="smi-container">
          <div className="smi-content-prose">
            <h2>The Complete Guide to Social Media SVG Icons: Everything Designers Need to Know in 2025</h2>

            <h3>What Are Social Media SVG Icons and Why Do They Matter?</h3>
            <p>
              Social media SVG icons are vector-format representations of social networking platform logos — the recognizable symbols
              of Facebook, Instagram, Twitter/X, TikTok, LinkedIn, YouTube, WhatsApp, Pinterest, and dozens of other platforms that
              collectively have 5.2 billion active users worldwide. Unlike photography or illustration, these icons exist in a unique
              design space: they must be instantly recognizable to users across all demographics, cultures, and age groups, while
              remaining flexible enough to integrate into vastly different design environments.
            </p>
            <p>
              The SVG (Scalable Vector Graphics) format transforms social media icons from fixed-resolution images into mathematical
              descriptions of shapes, curves, and fills. This fundamental difference in how the image is encoded — as XML code rather
              than pixels — gives SVG icons properties that make them categorically superior to PNG or JPG for most use cases. A 24px
              SVG icon and a 2400px SVG icon are the same file; the rendering engine scales the mathematical description rather than
              interpolating pixels.
            </p>

            <h3>The Technical Advantages of SVG Over Raster Formats for Social Icons</h3>
            <p>
              Performance is the first major advantage of SVG social media icons over raster alternatives. A typical set of 20 social
              media icons as SVG files weighs approximately 15-40KB total. The equivalent PNG set at 2x resolution (48px display
              size, 96px actual) typically weighs 200-400KB. This file size difference — typically 60-90% reduction — directly
              translates to faster page load times, better Core Web Vitals scores, and improved Google search rankings. For mobile
              users on 3G connections in emerging markets (a significant and growing demographic for major social platforms), this
              difference is not trivial.
            </p>
            <p>
              Retina and high-DPI display support is automatic with SVG. When Apple introduced the Retina display in 2010, web
              designers suddenly needed to maintain two versions of every image — the standard resolution and a 2x version for high-DPI
              screens. Today, with 3x and even 4x display densities becoming common in flagship smartphones, maintaining multiple
              resolution variants of PNG social icons creates significant design system overhead. SVG eliminates this entirely: one
              file renders perfectly across every display density, from a 96 DPI office monitor to a 460 DPI smartphone screen.
            </p>

            <h3>Social Media Icon Design Systems: Building Consistency at Scale</h3>
            <p>
              For design teams managing large-scale applications or multi-property websites, social media icons require systematic
              thinking beyond individual icon quality. A design system approach means establishing icon tokens — design variables
              that control how all social icons behave throughout the application. Icon size scale (16, 20, 24, 32, 40, 48px),
              color modes (brand-exact, monochrome-dark, monochrome-light, white-on-color), interactive states (default, hover,
              active, disabled), and spacing specifications should all be codified before implementing social icons at scale.
            </p>
            <p>
              Figma, Sketch, and Adobe XD component libraries built from SVG social media icons unlock massive efficiency gains for
              design teams. When the Facebook icon is updated (as it has been several times in recent years, most notably with the
              rebrand to the simplified 'f' mark), updating the master component in a design system propagates the change to all
              instances across every file in the organization. This single-source-of-truth approach prevents the icon inconsistency
              debt that plagues large organizations where different teams use different vintage icon sets.
            </p>

            <h3>Platform-by-Platform Social Media Icon Guide</h3>
            <p>
              Each major social platform has specific brand guidelines governing how their icon may be used. Understanding these
              guidelines prevents brand compliance issues, especially for official partner relationships or advertising use cases.
            </p>
            <p>
              <strong>Facebook/Meta icons</strong> have undergone significant evolution since the platform launched in 2004. The
              current brand mark is a clean, rounded 'f' in Meta's signature blue (#1877F2). The Meta umbrella rebrand introduced
              the infinity-loop logo for the corporate entity while keeping the 'f' for the Facebook product. When representing
              Facebook in icon sets, always use the lowercase 'f' against the brand blue — avoid the older, serif 'f' designs or
              unofficial gradient treatments. Meta's official brand guidelines permit the iconic 'f' logo for user-generated
              links to Facebook profiles or pages.
            </p>
            <p>
              <strong>Instagram's icon</strong> presents unique challenges because the brand's signature gradient (transitioning
              from yellow through orange and red to purple) is complex to reproduce precisely. The exact Instagram gradient uses
              three main color stops: #FCAF45 (yellow-orange), #E1306C (pink-red), and #833AB4 (purple), rendered as a CSS
              radial gradient with specific angle and position values. For the monochrome version preferred in minimal designs,
              the icon uses a simplified glyph-style camera representation. Instagram's guidelines prohibit modifying the gradient
              or substituting alternative brand colors.
            </p>
            <p>
              <strong>Twitter/X icons</strong> remain in transition as of 2025. The platform rebranded from the iconic Twitter
              bird to the minimalist 'X' logotype in July 2023, but many users and contexts still recognize and search for the
              bird icon. Best practice is to include both the 'X' mark (official) and the Twitter bird (legacy recognition) in
              comprehensive social icon sets. The 'X' icon is a simple mathematical letterform in pure black (#000000) with no
              gradients or shadows in the official brand guidelines.
            </p>
            <p>
              <strong>TikTok's icon</strong> uses a distinctive musical note derivation in the platform's two-color system:
              #FE2C55 (red-pink) and #25F4EE (cyan), typically with a white version of the note on a black background, or the
              colored logo on white. The 'duotone' effect using both brand colors is particularly recognizable and should be
              maintained for brand accuracy. TikTok's brand guidelines are among the strictest — they prohibit altering
              proportions, colors, or orientation of the branded icon.
            </p>

            <h3>Optimizing Social Media Icons for Core Web Vitals</h3>
            <p>
              Google's Core Web Vitals framework — measuring Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and
              Interaction to Next Paint (INP) — has made performance a direct SEO ranking factor. Social media icons, while small
              individually, can contribute to poor Core Web Vitals scores if implemented carelessly.
            </p>
            <p>
              For icons appearing above the fold (header social links, hero section platform badges), inline SVG is the fastest
              delivery method. Inline SVG is part of the HTML document itself — zero additional HTTP requests, renders immediately
              when the HTML is parsed, and never causes layout shift because it's part of the document flow from the first byte.
              For icons below the fold (footer social links, article share buttons), lazy loading via the native <code>loading="lazy"</code>
              attribute on img elements or JavaScript intersection observers prevents render-blocking resources from slowing the
              critical rendering path.
            </p>

            <h3>Social Media Icons in React, Vue, and Angular Frameworks</h3>
            <p>
              Modern JavaScript frameworks have reshaped how developers implement SVG social media icons. In React, the recommended
              pattern is to create individual SVG components that accept props for size, color, and className — enabling full
              design system integration with TypeScript type safety. Tools like SVGR automatically convert SVG files into React
              components during the build process, generating clean JSX with proper prop forwarding. This approach means the
              Instagram icon is imported as <code>{`import { InstagramIcon } from '@/components/icons'`}</code> rather than
              managed as static files.
            </p>
            <p>
              Vue 3's composition API and the concept of component props make social icon components particularly elegant. A single
              <code>SocialIcon</code> component that accepts a platform name, size, color mode, and variant prop can serve as the
              single source of truth for all social media icon rendering across a Vue application. Combined with Vue's built-in SVG
              rendering support, this creates maintainable and consistent icon usage without the overhead of icon font systems.
            </p>

            <h3>Social Media Icon SEO: Structured Data and Search Appearance</h3>
            <p>
              Social media icons play a specific role in search engine optimization beyond their visual function. Google's
              structured data specification includes the <code>sameAs</code> property, which allows websites to explicitly connect
              their Google Business Profile or organization schema to their social media presence. When implemented with social
              media icons as anchor elements within the page, and the corresponding JSON-LD markup declaring social profile URLs,
              search engines build a richer understanding of brand identity that can influence knowledge panel appearance.
            </p>
            <p>
              For local businesses especially, the combination of social media icon links and proper Schema.org <code>LocalBusiness</code>
              markup with social profile URLs in the <code>sameAs</code> array significantly improves the likelihood of appearing
              in Google's knowledge graph. This is increasingly important as AI-powered search overviews become the primary way
              users encounter brands.
            </p>

            <h3>Choosing the Right Social Media Icon Style for Your Brand</h3>
            <p>
              The visual style of your social media icons communicates as much as the icons themselves. A law firm using playful
              filled colored icons sends a different brand signal than the same firm using restrained monochrome outline icons.
              Understanding the psychological and perceptual effects of icon styles helps designers make deliberate choices rather
              than defaulting to the first option they see.
            </p>
            <p>
              Flat filled icons in brand colors are the most universally recognized because they most closely replicate how users
              experience the platforms on their native apps. The immediate color association — Facebook's blue, Instagram's
              gradient, Twitter/X's black — creates instant recognition in under 0.5 seconds according to eye-tracking studies.
              This recognition speed advantage makes filled icons the right choice when the primary goal is getting users to click
              through to your social profiles.
            </p>
            <p>
              Outline and monochrome icons sacrifice recognition speed for design flexibility. They integrate into any color scheme
              without visual conflict, work in both light and dark modes with a CSS variable, and create the impression of
              restraint and sophistication that many premium brands desire. The trade-off — slightly lower immediate recognition
              — is acceptable when social media presence is secondary to other page goals and the design aesthetic is the
              primary communication.
            </p>

            <h3>Social Media Icons for Marketing Automation and CRM Systems</h3>
            <p>
              Beyond websites and apps, social media icons appear throughout the marketing technology stack. Email marketing
              platforms like Mailchimp, Klaviyo, and HubSpot use social media icons in email templates for connecting with
              audiences across platforms. CRM platforms display social media icons in contact records to indicate which platforms
              a lead or customer uses. Marketing automation sequences include social share icons in HTML email templates to extend
              content reach.
            </p>
            <p>
              For email template use, the PNG 2x format remains the gold standard despite SVG's general superiority, because
              major email clients including Outlook 2016-2019 (which represents approximately 9% of email opens globally) have
              inconsistent or absent SVG rendering support. Download social media icons as PNG at double the display size
              (if you display at 32px, download at 64px) and use the <code>width</code> and <code>height</code> HTML attributes
              to render at the intended size — this provides retina-quality rendering across all email clients.
            </p>

            <h3>Free vs. Premium Social Media Icon Libraries: What You Actually Get</h3>
            <p>
              The social media icon landscape includes both free and premium options, and understanding the real differences
              helps designers make informed choices. Premium icon libraries like Streamline Icons ($180/year), Iconfinder Pro
              ($15/month), and Flaticon Premium ($9.99/month) offer advantages including guaranteed brand compliance auditing,
              unified design language across 5,000+ icons, standardized grid systems, and regular updates for platform rebrands.
              For design agencies working on brand-sensitive enterprise projects, these investments can be justified.
            </p>
            <p>
              Free libraries like Scenith offer the essential social media icons — the 50-100 platforms that represent 99% of
              actual use cases — at zero cost with no attribution requirements and full commercial use rights. The Scenith SVG
              library includes all major global platforms, regional platforms popular in specific markets (WeChat for China,
              VK for Russia, LINE for Japan/Korea/Thailand), professional networks, and emerging platforms. For the overwhelming
              majority of design projects, free social media SVG icons from quality sources like Scenith provide everything needed
              without the subscription overhead.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="smi-faq-section" id="faq">
        <div className="smi-container">
          <div className="smi-section-header">
            <h2 className="smi-section-title">Frequently Asked Questions</h2>
            <p className="smi-section-desc">
              Everything designers, developers, and marketers need to know about free social media SVG icons.
            </p>
          </div>

          <div className="smi-faq-grid">
            {faqItems.map((item, i) => (
              <article key={i} className="smi-faq-item">
                <h3 className="smi-faq-q">{item.q}</h3>
                <p className="smi-faq-a">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PEOPLE ALSO ASK ═══ */}
      <section className="smi-paa-section">
        <div className="smi-container">
          <h2 className="smi-section-title">People Also Ask About Social Media SVG Icons</h2>
          <div className="smi-paa-grid">
            {[
              {
                q: "Where can I download social media SVG icons for free?",
                a: "Scenith's SVG Library at scenith.in/svg-library offers 500+ free social media icons for every major platform including Facebook, Instagram, Twitter/X, TikTok, LinkedIn, and YouTube. Download instantly without registration, no attribution required, full commercial use allowed. Also available: Google Material Icons, Heroicons, Simple Icons (open source, MIT licensed), and Tabler Icons.",
              },
              {
                q: "What is the correct size for social media icons on a website?",
                a: "Standard sizes: 16px for inline icons in text, 24px for navigation elements, 32-48px for footer social links, 48-64px for featured social sections, and 80-120px for prominent platform showcases. Always ensure the clickable area is minimum 44×44px on mobile to meet WCAG 2.5.5 and platform touch target guidelines.",
              },
              {
                q: "Are social media icons copyrighted?",
                a: "Social media platform logos are trademarked (not copyrighted) by their respective companies. Most platforms (Facebook, Instagram, Twitter/X, LinkedIn, YouTube) provide official brand assets and guidelines for use in context — linking to their platform, representing their service, etc. Using icons for these purposes is generally permitted. Commercial resale of icon sets or use in ways that imply official partnership requires explicit permission.",
              },
              {
                q: "How do I add social media icons to my WordPress website?",
                a: "Three main methods: (1) Social Media Icons plugins (Social Icons Widget, Simple Social Icons) add icons via widget with configuration options. (2) Theme custom fields – most premium themes have footer social icon settings in the Customizer. (3) Manual implementation in HTML/CSS by downloading SVG files and adding to theme files or using shortcodes in page builders like Elementor or Divi.",
              },
              {
                q: "What's the best format for social media icons in Canva?",
                a: "Canva supports SVG import (Pro plan) and PNG/JPG upload (all plans). For best results in Canva: download social media icons as PNG with transparent background at 2x size (64px for 32px display), then upload as Canva elements. This ensures sharp rendering at all Canva export sizes including social media template sizes.",
              },
              {
                q: "How do I animate social media icons on hover?",
                a: "CSS transitions are the easiest method: add transition: transform 0.2s ease, filter 0.2s ease to the icon element, then define hover states with transform: scale(1.1) or translateY(-3px). For fill color animation on inline SVG, use transition: fill 0.2s ease and set new fill color on :hover. Complex animations like logo morphing require JavaScript animation libraries like GreenSock (GSAP).",
              },
            ].map((item, i) => (
              <div key={i} className="smi-paa-item">
                <h3 className="smi-paa-q">{item.q}</h3>
                <p className="smi-paa-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RELATED CATEGORIES ═══ */}
      <section className="smi-related-section">
        <div className="smi-container">
          <h2 className="smi-section-title">Explore More Free SVG Icon Categories</h2>
          <div className="smi-related-grid">
            {[
              { title: "Business & Finance Icons", desc: "Charts, graphs, money, analytics, corporate symbols", icon: "💼", href: ctaUrl },
              { title: "Technology Icons", desc: "Devices, software, hardware, AI, cloud, security symbols", icon: "⚙️", href: ctaUrl },
              { title: "E-commerce Icons", desc: "Shopping carts, payment, delivery, product symbols", icon: "🛒", href: ctaUrl },
              { title: "Communication Icons", desc: "Email, chat, phone, messaging, notification symbols", icon: "💬", href: ctaUrl },
              { title: "Arrow & Navigation Icons", desc: "Directional, UI navigation, cursor, pointer symbols", icon: "→", href: ctaUrl },
              { title: "Food & Restaurant Icons", desc: "Cuisine, dining, beverage, cooking, ingredient symbols", icon: "🍔", href: ctaUrl },
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="smi-related-card">
                <span className="smi-related-icon" aria-hidden="true">{cat.icon}</span>
                <strong className="smi-related-title">{cat.title}</strong>
                <p className="smi-related-desc">{cat.desc}</p>
                <span className="smi-related-link">Browse icons →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="smi-final-cta">
        <div className="smi-final-cta-bg" aria-hidden="true" />
        <div className="smi-container">
          <div className="smi-final-cta-content">
            <div className="smi-final-cta-eyebrow">Ready to get started?</div>
            <h2 className="smi-final-cta-title">
              Download Free Social Media Icons Now
            </h2>
            <p className="smi-final-cta-desc">
              Join 25,000+ designers using Scenith's SVG library. 500+ social media icons across all platforms.
              Commercial use, no attribution, instant download. Completely free — forever.
            </p>
            <div className="smi-final-cta-actions">
              <Link href={ctaUrl} className="smi-cta-primary smi-cta-primary--large">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M11 2v13M11 15L5 9M11 15l6-6M2 19h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Browse Social Media Icon Library
              </Link>
              <Link href="/tools/image-editing" className="smi-final-cta-secondary-btn">
                Try Icon Editor →
              </Link>
            </div>
            <div className="smi-final-features">
              <span>✓ 500+ social platform icons</span>
              <span>✓ SVG + PNG + JPG + PDF</span>
              <span>✓ Built-in icon editor</span>
              <span>✓ Zero attribution</span>
              <span>✓ Commercial use free</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaIconsPage;