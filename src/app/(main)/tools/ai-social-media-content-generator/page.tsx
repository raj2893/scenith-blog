import type { Metadata } from 'next';
import Script from 'next/script';
import AiBrandContentPage from './AiBrandContentPage';

export const metadata: Metadata = {
  title: 'Free AI Brand Content Generator — Create On-Brand Content at Scale | Scenith',
  description:
    'Generate compelling brand content with AI — social posts, product descriptions, ad copy, blog intros, email campaigns, and more. Maintain your brand voice consistently across every channel. Free, fast, no design skills needed.',
  keywords: [
    'ai brand content generator',
    'brand content generator',
    'ai content generator for brands',
    'brand voice ai',
    'generate brand content',
    'ai marketing content generator',
    'brand storytelling ai',
    'ai social media content for brands',
    'consistent brand content ai',
    'brand copy generator',
    'ai product description generator',
    'brand ad copy generator',
    'ai brand voice generator',
    'marketing copy generator free',
    'brand content creation tool',
    'ai content for small business',
    'brand messaging generator',
    'startup brand content ai',
    'ecommerce brand content generator',
    'ai content strategy tool',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/ai-brand-content-generator',
  },
  openGraph: {
    title: 'Free AI Brand Content Generator — On-Brand Content at Scale',
    description:
      'Stop writing from scratch. Generate social posts, ad copy, product descriptions, and email campaigns that actually sound like your brand — powered by AI. Completely free.',
    url: 'https://scenith.in/tools/ai-brand-content-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AiBrandContentOG.png',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Brand Content Generator — create consistent brand content with AI',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Brand Content Generator — On-Brand Content at Scale',
    description:
      'Generate social posts, ad copy, product descriptions and email campaigns that sound exactly like your brand. Free AI content tool by Scenith.',
    images: ['https://scenith.in/images/AiBrandContentOG.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function AiBrandContentGeneratorPage() {
  return (
    <>
      {/* ── Structured Data ── */}
      <Script
        id="brand-content-webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/ai-brand-content-generator#webapp',
                name: 'Scenith AI Brand Content Generator',
                description:
                  'Free AI-powered brand content generator. Create on-brand social posts, ad copy, product descriptions, email campaigns, and brand storytelling content that maintains your unique brand voice at scale.',
                url: 'https://scenith.in/tools/ai-brand-content-generator',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                featureList: [
                  'AI brand voice preservation',
                  'Social media content generation',
                  'Product description writing',
                  'Ad copy and headline generation',
                  'Email marketing content',
                  'Brand storytelling frameworks',
                  'Multi-platform content adaptation',
                  'Free with no watermarks',
                  'Instant content generation',
                ],
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith',
                },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/ai-brand-content-generator#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'AI Brand Content Generator',
                    item: 'https://scenith.in/tools/ai-brand-content-generator',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Script
        id="brand-content-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is an AI brand content generator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An AI brand content generator is a tool that uses large language models to create marketing copy, social media posts, product descriptions, ad headlines, and other written content that reflects your brand\'s unique voice, tone, and messaging. Unlike generic AI writing tools, brand content generators are optimized to maintain consistency across all your content — so every post, caption, and campaign sounds unmistakably like you.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does AI maintain brand voice in generated content?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Brand voice is maintained by feeding the AI your brand guidelines, tone descriptors, sample copy, target audience details, and preferred vocabulary. The model uses this context to generate content that mirrors your established patterns. Advanced tools allow you to rate and refine outputs over time, creating a feedback loop that continuously improves brand alignment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI generate content for all social media platforms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Modern AI brand content generators adapt the same core message for different platform requirements — a LinkedIn thought leadership post, an Instagram caption with hashtags, a Twitter/X thread, a Facebook ad, and a TikTok hook script can all be generated from a single brand brief. Each platform version maintains brand voice while respecting platform-specific length, tone, and format conventions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is AI-generated brand content unique and plagiarism-free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI-generated content from large language models produces original text combinations that are not copied from any source. The outputs are unique compositions based on patterns learned during training. However, like any generated content, professional review before publishing is recommended — both for accuracy and to add brand-specific details that make content feel genuinely personal rather than generic.',
                },
              },
              {
                '@type': 'Question',
                name: 'What types of brand content can AI generate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI brand content generators can produce: social media posts and captions, ad headlines and body copy, product descriptions and feature highlights, email subject lines and body content, blog introductions and outlines, brand story narratives, taglines and slogans, website hero copy, press release templates, investor pitch narratives, and customer testimonial frameworks — covering virtually every written touchpoint in a brand\'s content ecosystem.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is AI brand content different from generic AI writing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Generic AI writing produces technically correct but tonally neutral text. Brand content AI is specifically engineered to capture personality — whether that\'s a luxury brand\'s measured sophistication, a startup\'s punchy irreverence, or a wellness brand\'s calm authority. The difference is context engineering: brand-specific inputs, audience psychology data, and competitive positioning inform every output, producing content that feels authored rather than generated.',
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="brand-content-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Generate AI Brand Content with Scenith',
            description: 'Step-by-step guide to creating consistent, on-brand AI content for social media, ads, email, and more.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Define Your Brand Voice',
                text: 'Select your brand tone, industry, target audience, and content type. Optionally paste sample brand copy for the AI to mirror your existing style.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Generate Brand Content',
                text: 'AI generates multiple on-brand content variations — social posts, ad copy, product descriptions, or email campaigns — in seconds.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Refine and Publish',
                text: 'Review outputs, make minor edits to personalize, then copy and publish across your channels. No design skills required.',
              },
            ],
          }),
        }}
      />

      <AiBrandContentPage />
    </>
  );
}