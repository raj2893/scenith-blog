import type { Metadata } from "next";
import AIVoiceGeneratorClient from './AIVoiceGeneratorClient';

export const metadata: Metadata = {
  title: 'Free AI Voice Generator – Text to Speech Online (40+ Natural Voices) | Scenith',
  description: 'Generate realistic AI voices from text instantly for free. Convert text to speech in 100+ languages with natural-sounding voices. Perfect for videos, podcasts, and more - no signup required!',
  keywords: [
    'AI voice generator',
    'free text to speech',
    'text to speech online',
    'AI TTS tool',
    'voice generator free',
    'text to voice AI',
    'natural AI voices',
    'TTS online free',
    'speech synthesis',
    'voiceover generator',
    'AI audio generator',
    'free voice AI',
    'text to audio',
    'realistic TTS',
    'multi-language TTS'
  ],
  openGraph: {
    title: 'AI Voice Generator for YouTube & Marketing (Natural Voices) - Instant Text to Speech Online',
    description: 'Create lifelike AI voices from your text in seconds. Free text-to-speech tool supporting multiple languages and voices for content creators, educators, and businesses.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-voice-generation',
    images: [
      {
        url: '/images/og-ai-voice-generator-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Voice Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Generator for YouTube & Marketing (Natural Voices) - Text to Speech in Seconds',
    description: 'Transform text into natural AI voices effortlessly. Free online TTS tool for podcasts, videos, and presentations - download MP3 instantly!',
    images: ['/images/twitter-card-ai-voice.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-voice-generation',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a73e8',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith AI Voice',
  },
  manifest: '/manifest.json',  
};

export default function AIVoiceGeneratorPage() {
  return <AIVoiceGeneratorClient />;
}