import type { Metadata } from 'next';
import Script from 'next/script';
import AutoSubtitleClient from './AutoSubtitleClient';

export const metadata: Metadata = {
  title: 'Auto Subtitle Generator – Automatic Video Captions in 60 Seconds | Scenith',
  description:
    'Generate automatic subtitles for any video in 60 seconds. Our auto subtitle generator uses Whisper AI for 97% accuracy across 50+ languages. Free, no software needed. Burn captions into MP4 instantly.',
  keywords: [
    'auto subtitle generator',
    'automatic subtitle generator',
    'automatic video captions',
    'auto caption generator',
    'subtitle generator online free',
    'automatic subtitles for video',
    'video subtitle generator',
    'whisper ai subtitles',
    'free auto captioning',
    'online subtitle maker',
    'burn subtitles into video',
    'caption video online',
    'add captions automatically',
    'speech to text subtitles',
    'auto transcribe video',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/auto-subtitle-generator',
  },
  openGraph: {
    title: 'Auto Subtitle Generator – Automatic Video Captions in 60 Seconds',
    description:
      'Automatically generate subtitles for your videos with 97% AI accuracy. 50+ languages, custom styles, and instant MP4 download. 100% free.',
    url: 'https://scenith.in/tools/auto-subtitle-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AddSubtitlesSS.png',
        width: 1200,
        height: 630,
        alt: 'Auto Subtitle Generator by Scenith – AI-powered automatic video captions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Subtitle Generator – Automatic Video Captions in 60 Seconds',
    description:
      'Generate accurate subtitles automatically with Whisper AI. Free, fast, and works on any video. Try it now.',
    images: ['https://scenith.in/images/AddSubtitlesSS.png'],
    site: '@scenith_in',
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

export default function AutoSubtitleGeneratorPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/auto-subtitle-generator#webpage',
        url: 'https://scenith.in/tools/auto-subtitle-generator',
        name: 'Auto Subtitle Generator – Automatic Video Captions in 60 Seconds',
        description:
          'Generate automatic subtitles for any video instantly using Whisper AI. Supports 50+ languages, fully customizable styles, and direct MP4 download. No installation required.',
        isPartOf: { '@id': 'https://scenith.in/#website' },
        breadcrumb: { '@id': 'https://scenith.in/tools/auto-subtitle-generator#breadcrumb' },
        inLanguage: 'en-US',
        datePublished: '2025-01-01',
        dateModified: '2026-04-01',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://scenith.in/tools/auto-subtitle-generator#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Auto Subtitle Generator',
            item: 'https://scenith.in/tools/auto-subtitle-generator',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://scenith.in/tools/auto-subtitle-generator#app',
        name: 'Scenith Auto Subtitle Generator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        url: 'https://scenith.in/tools/auto-subtitle-generator',
        description:
          'Free AI-powered automatic subtitle generator that transcribes and captions videos in 60 seconds. Uses Whisper AI for 97% accuracy. Supports 50+ languages.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        featureList: [
          'Automatic speech-to-text transcription',
          '97% accuracy with Whisper AI',
          '50+ language support',
          'Custom subtitle styling',
          'Instant MP4 export',
          'No watermarks on free plan',
          'Browser-based, no installation',
        ],
        screenshot: 'https://scenith.in/images/AddSubtitlesSS.png',
        author: {
          '@type': 'Organization',
          '@id': 'https://scenith.in/#organization',
          name: 'Scenith',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1500',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an auto subtitle generator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An auto subtitle generator is an AI-powered tool that automatically transcribes spoken audio from a video and creates timed subtitle captions, eliminating the need for manual typing or expensive transcription services. Scenith uses Whisper AI to deliver 97% accuracy in under 60 seconds.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does auto subtitle generation take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For most videos under 5 minutes, automatic subtitle generation completes in 60–120 seconds. Longer videos may take 3–5 minutes. Processing time depends on video length, audio clarity, and server load.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the auto subtitle generator free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Scenith\'s auto subtitle generator is completely free for videos under 1 minute. Free accounts include subtitle generation without watermarks, full editing capabilities, and MP4 download.',
            },
          },
          {
            '@type': 'Question',
            name: 'What languages does the auto subtitle generator support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Scenith auto subtitle generator supports 50+ languages including English, Hindi, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, Russian, Korean, and many more. The Whisper AI model automatically detects the language spoken in the video.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I edit the automatically generated subtitles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. After auto generation, you can click any subtitle to edit text, adjust timing, reposition, or restyle it. Changes auto-save and sync instantly with the video preview.',
            },
          },
          {
            '@type': 'Question',
            name: 'How accurate is automatic subtitle generation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Scenith\'s Whisper-powered auto subtitle generator achieves 95–98% accuracy for clear audio in standard accents. Accuracy may vary for heavy accents, technical jargon, or noisy audio. Manual editing is always available for corrections.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use auto-generated subtitles for commercial videos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All subtitles and processed videos created on Scenith are fully licensed for commercial use, including YouTube monetization, advertising, and client deliverables.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Auto-Generate Subtitles for a Video',
        description: 'Step-by-step guide to automatically generating and downloading subtitled videos using Scenith.',
        totalTime: 'PT2M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Upload or Select Your Video',
            text: 'Click "Go to Auto Subtitle Generator" and upload any video file. Supported formats: MP4, MOV, AVI, MKV, WMV. Videos under 1 minute are processed on the free plan.',
            image: 'https://scenith.in/images/AddSubtitlesSS.png',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Click Generate Subtitles',
            text: 'Select your preferred subtitle style and click "Generate Subtitles". The Whisper AI model will transcribe speech and auto-sync subtitles within 60–120 seconds.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Review and Edit',
            text: 'Review auto-generated subtitles in the editor panel. Click any subtitle to fix text, adjust timing, change font, color, or position in real time.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Process and Download',
            text: 'Click "Process Subtitles" to burn captions into the video. Download the final MP4 with embedded subtitles, ready for any platform.',
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="auto-subtitle-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AutoSubtitleClient />
    </>
  );
}