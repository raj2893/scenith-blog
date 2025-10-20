// app/ai-voice-generator/page.tsx (Server Component)
import type { Metadata } from "next";
import AIVoiceGeneratorClient from './AIVoiceGeneratorClient';

export const metadata: Metadata = {
  title: 'FREE AI Voice Generator - Text to Speech Online | SCENITH',
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
    title: 'Free AI Voice Generator - Instant Text to Speech Online',
    description: 'Create lifelike AI voices from your text in seconds. Free text-to-speech tool supporting multiple languages and voices for content creators, educators, and businesses.',
    type: 'website',
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
    title: 'Free AI Voice Generator - Text to Speech in Seconds',
    description: 'Transform text into natural AI voices effortlessly. Free online TTS tool for podcasts, videos, and presentations - download MP3 instantly!',
    images: ['/images/twitter-card-ai-voice.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/ai-voice-generation',
  },
};

export default function AIVoiceGeneratorPage() {
  return <AIVoiceGeneratorClient />;
}