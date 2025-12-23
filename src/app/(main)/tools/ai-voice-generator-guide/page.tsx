import type { Metadata } from "next";
import AIVoiceGuide from './AIVoiceGuide';

export const metadata: Metadata = {
  title: 'AI Voice Generator 2025: Complete Guide to Text-to-Speech Technology | SCENITH',
  description: 'The ultimate 2025 guide to AI voice generation and text-to-speech technology. Learn how AI voices work, choose the best voice for your content, discover professional best practices, real-world applications, and start creating lifelike voiceovers instantly for free.',
  keywords: [
    'AI voice generator guide',
    'text to speech technology 2025',
    'how AI voice generation works',
    'best AI voice generator',
    'AI TTS tutorial',
    'choose AI voice',
    'AI voiceover best practices',
    'AI vs human voice',
    'free AI voice generator',
    'natural text to speech',
    'AI voice for YouTube',
    'AI voice for podcasts',
    'multilingual AI voices',
    'speech synthesis explained',
    'neural TTS guide'
  ],
  openGraph: {
    title: 'AI Voice Generator 2025: Complete Guide to Text-to-Speech Technology',
    description: 'Master AI voice generation in 2025. Comprehensive guide covering how TTS works, voice selection, best practices, applications, and free tool access.',
    type: 'article',
    images: [
      {
        url: '/images/og-ai-voice-guide-2025.jpg',
        width: 1200,
        height: 630,
        alt: '2025 Ultimate Guide to AI Voice Generator & Text-to-Speech Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Generator 2025 Complete Guide | SCENITH',
    description: 'Everything you need to know about AI voice generation in 2025 – technology, best practices, applications, and free tool.',
    images: ['/images/twitter-ai-voice-guide-2025.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/blog/ai-voice-generator-guide-2025', // Recommended URL structure – adjust if needed
  },
};

export default function AIVoiceGuidePage() {
  return <AIVoiceGuide />;
}