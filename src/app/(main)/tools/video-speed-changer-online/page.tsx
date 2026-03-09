import type { Metadata } from 'next';
import Script from 'next/script';
import VideoSpeedChangerClient from './VideoSpeedChangerClient';

export const metadata: Metadata = {
  title: 'Video Speed Changer Online — Free, Instant & No Watermark (2025)',
  description:
    'Change video speed online free — slow down to 0.5x or fast-forward up to 15x. No app download, no watermark, no login needed to preview. Works on MP4, MOV, AVI, MKV. Trusted by 30,000+ creators.',
  keywords: [
    'video speed changer online',
    'change video speed online free',
    'slow motion video maker online',
    'speed up video online',
    'video speed controller',
    'online video speed editor',
    'slow down video online',
    'video playback speed changer',
    'fast forward video online',
    'timelapse video maker online',
    'change mp4 speed online',
    'video speed changer no watermark',
    'free video speed changer',
    'video speed changer without app',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/video-speed-changer-online',
  },
  openGraph: {
    title: 'Video Speed Changer Online — Free, Instant & No Watermark',
    description:
      'The fastest way to change video speed online. Supports 0.5x slow-mo to 15x timelapse. No watermark, no install — just upload and download.',
    url: 'https://scenith.in/tools/video-speed-changer-online',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Video Speed Changer Online Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Speed Changer Online — Free & No Watermark',
    description:
      'Change video speed from 0.5x to 15x online for free. No watermark, no software install. Works on any device.',
    images: ['https://scenith.in/images/VideoSpeedModifierSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function VideoSpeedChangerOnlinePage() {
  const structuredDataWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Scenith Video Speed Changer Online',
    url: 'https://scenith.in/tools/video-speed-changer-online',
    description:
      'Free online video speed changer. Adjust video playback speed from 0.5x slow motion to 15x timelapse. No watermark, no software install required.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Change video speed from 0.5x to 15x',
      'No watermark on output video',
      'Supports MP4, MOV, AVI, MKV, WebM',
      'Slow motion video creator',
      'Timelapse video maker',
      'Free MP4 download',
      'No software installation required',
      'Mobile-friendly interface',
    ],
    author: {
      '@type': 'Organization',
      name: 'Scenith',
      url: 'https://scenith.in',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1547',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const structuredDataFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I change video speed online for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upload your video to Scenith Video Speed Changer, choose a speed preset between 0.5x and 15x, click "Start Processing", then download your speed-adjusted MP4 — completely free with no watermark.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I slow down a video online without losing quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Scenith uses FFmpeg-powered processing to slow down video to 0.5x with maintained resolution and audio sync. No quality loss, no pixelation, no watermark.',
        },
      },
      {
        '@type': 'Question',
        name: 'What video formats does the online speed changer support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scenith supports MP4, MOV, AVI, MKV, WebM, MPEG, and FLV. Output is delivered as a high-quality MP4 file.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a watermark on the speed-changed video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Scenith adds zero watermarks on free plan exports. Your video is 100% yours with full commercial rights.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maximum speed I can change a video to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can speed up a video up to 15x using Scenith, making it ideal for timelapse creation, tutorials, and social media content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to install software to change video speed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No installation required. Scenith is a fully browser-based video speed changer that works on desktop and mobile without any app download.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I speed up a video for Instagram Reels or TikTok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Use the 1.5x or 2x preset to create snappy Reels-style content, or the 0.5x preset for dramatic slow-motion. Export as MP4 and upload directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does video speed processing take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most videos are processed in under 2–3 minutes depending on file size and speed setting. GPU-accelerated servers ensure fast turnaround.',
        },
      },
    ],
  };

  const structuredDataHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Change Video Speed Online',
    description: 'Step-by-step guide to adjusting video playback speed online for free using Scenith.',
    totalTime: 'PT3M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Scenith Video Speed Changer',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Upload your video',
        text: 'Click the Upload Video button and select your MP4, MOV, AVI, or other video file from your device.',
        url: 'https://scenith.in/tools/video-speed-modifier?utm_source=vsc-online&utm_medium=satellite&utm_campaign=video-speed-changer-online#hero',
      },
      {
        '@type': 'HowToStep',
        name: 'Select a speed preset',
        text: 'Choose from speed presets like Slow Motion (0.5x), Natural (1x), Reels Speed (1.5x), or Timelapse (4x–15x), or set a custom speed.',
        url: 'https://scenith.in/tools/video-speed-modifier?utm_source=vsc-online&utm_medium=satellite&utm_campaign=video-speed-changer-online#hero',
      },
      {
        '@type': 'HowToStep',
        name: 'Process your video',
        text: 'Click Start Processing. Our servers will adjust the video speed and notify you when done.',
        url: 'https://scenith.in/tools/video-speed-modifier?utm_source=vsc-online&utm_medium=satellite&utm_campaign=video-speed-changer-online#hero',
      },
      {
        '@type': 'HowToStep',
        name: 'Download the speed-adjusted video',
        text: 'Click Download MP4 to save your speed-changed video — no watermark, full quality.',
        url: 'https://scenith.in/tools/video-speed-modifier?utm_source=vsc-online&utm_medium=satellite&utm_campaign=video-speed-changer-online#hero',
      },
    ],
  };

  const structuredDataBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://scenith.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://scenith.in/tools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Video Speed Changer Online',
        item: 'https://scenith.in/tools/video-speed-changer-online',
      },
    ],
  };

  return (
    <>
      <Script
        id="sd-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataWebApp) }}
      />
      <Script
        id="sd-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />
      <Script
        id="sd-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataHowTo) }}
      />
      <Script
        id="sd-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumb) }}
      />
      <VideoSpeedChangerClient />
    </>
  );
}