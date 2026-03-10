import type { Metadata } from 'next';
import SpeedUpVideoClient from './SpeedUpVideoClient';

export const metadata: Metadata = {
  title: 'Speed Up Video Online Free — Fast Video Accelerator Tool 2025',
  description:
    'Speed up any video online for free — no software needed. Increase video playback speed from 1.25x to 15x instantly. Perfect for time-lapses, tutorials, social media reels. Export HD MP4 in minutes.',
  keywords: [
    'speed up video online',
    'video speed increaser online free',
    'make video faster online',
    'increase video playback speed',
    'video accelerator online',
    'speed up video for free',
    'fast forward video online',
    'video speed changer',
    'online video speed editor',
    'timelapse video maker online',
    'speed up mp4 online',
    'speed up video for instagram',
    'speed up video for tiktok',
    'speed up video no watermark',
    'free video speed tool',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/speed-up-video-online',
  },
  openGraph: {
    title: 'Speed Up Video Online Free — No Software, No Watermark | Scenith',
    description:
      'Instantly speed up any video online — from 1.25x brisk to 15x extreme timelapse. Free, no watermark, HD MP4 export. Trusted by 30K+ creators.',
    url: 'https://scenith.in/tools/speed-up-video-online',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/VideoSpeedModifierSS.png',
        width: 1200,
        height: 630,
        alt: 'Speed Up Video Online — Scenith Video Accelerator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Up Video Online Free — Scenith',
    description:
      'Speed up any video from 1.25x to 15x. Free, no watermark, instant HD MP4 download. No software needed.',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Scenith Video Speed Accelerator',
      description:
        'Free online tool to speed up any video from 1.25x to 15x. No download required. Supports MP4, MOV, AVI, MKV. Export as HD MP4 instantly.',
      url: 'https://scenith.in/tools/speed-up-video-online',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Speed up video from 1.25x to 15x',
        'Supports MP4, MOV, AVI, MKV, WebM',
        'No watermark on export',
        'HD and 2K quality export',
        'Instant MP4 download',
        'Mobile and desktop compatible',
      ],
      author: {
        '@type': 'Organization',
        name: 'Scenith',
        url: 'https://scenith.in',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1527',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
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
          name: 'Speed Up Video Online',
          item: 'https://scenith.in/tools/speed-up-video-online',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I speed up a video online for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upload your video to Scenith\'s free video speed tool, choose a speed preset between 1.25x and 15x (or enter a custom value), and click "Start Processing." Your accelerated MP4 will be ready to download in minutes — completely free with no watermark.',
          },
        },
        {
          '@type': 'Question',
          name: 'What video formats can I speed up online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scenith supports all major video formats for online speed adjustment: MP4, MOV, AVI, MKV, WebM, MPEG, and FLV. The output is always exported as a high-quality MP4 file.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the maximum speed I can increase a video to?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can increase video speed up to 15x using Scenith\'s online video accelerator. This is ideal for extreme time-lapses showing construction, art creation, sunsets, or any long-duration footage compressed into seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will speeding up a video affect audio quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — at speeds above 2x, audio can sound unnatural. For speeds above 2x, we recommend muting the video and adding background music. At 1.25x–1.75x, audio remains natural and clear with our pitch correction processing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a watermark on sped-up videos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Scenith adds zero watermarks to your exported videos. All sped-up videos are clean, commercial-use ready, and fully yours to publish anywhere.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to speed up a video online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most videos are processed and ready to download within 2–5 minutes, depending on file size and speed setting. GPU-accelerated processing means even long videos finish faster than traditional desktop editors.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Speed Up a Video Online for Free',
      description: 'Step-by-step guide to increasing video playback speed using Scenith\'s free online tool.',
      totalTime: 'PT3M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '0',
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload Your Video',
          text: 'Click the Upload Video button and select your video file (MP4, MOV, AVI, MKV, or WebM up to 500MB).',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Choose Your Speed',
          text: 'Select a speed preset from 1.25x (brisk pace) up to 15x (extreme timelapse), or enter a custom value.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Process and Download',
          text: 'Click Start Processing. Your speed-adjusted MP4 will be ready in minutes. Download it instantly — no watermark, no subscription needed.',
        },
      ],
    },
  ],
};

export default function SpeedUpVideoPage() {
  return (
    <>
      <script
        id="speed-up-video-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SpeedUpVideoClient />
    </>
  );
}