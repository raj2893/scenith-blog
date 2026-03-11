import type { Metadata } from "next";
import AIVoiceForCreatorsClient from './AIVoiceForCreatorsClient';

export const metadata: Metadata = {
  title: 'AI Voice Generation for Creators – Best TTS Tool for YouTubers, Podcasters & Influencers 2026 | Scenith',
  description: 'The #1 AI voice generation tool built for content creators. Generate studio-quality voiceovers for YouTube, TikTok, podcasts, Reels & courses in seconds. 40+ natural voices, 20+ languages, free MP3 download. No recording gear needed.',
  keywords: [
    'AI voice generation for creators',
    'AI voice for YouTube',
    'AI voice for podcasters',
    'best TTS for content creators',
    'AI voiceover for TikTok',
    'text to speech for YouTubers',
    'faceless YouTube AI voice',
    'AI voice for Instagram Reels',
    'content creator voice tool',
    'AI podcast voice generator',
    'voiceover tool for influencers',
    'free AI voice for creators',
    'AI narration for online courses',
    'text to speech 2026',
    'AI voiceover generator free',
    'best AI voice generator 2026',
    'natural AI voices for video',
    'AI voice script generator',
    'voice generator for social media',
    'TTS for e-learning creators',
  ],
  openGraph: {
    title: 'AI Voice Generation for Creators – Studio Voiceovers in Seconds | Scenith',
    description: 'Built for YouTubers, podcasters, TikTokers & course creators. Generate lifelike AI voiceovers for any content — free, instant, commercial use included.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-voice-generation-for-creators',
    images: [
      {
        url: '/images/og-ai-voice-creators.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Voice Generation for Content Creators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice for Creators – YouTube, Podcasts, TikTok & More | Scenith',
    description: 'Stop paying voice actors. Generate studio-quality AI voices for your content in seconds. Free MP3. Commercial use. 40+ voices.',
    images: ['/images/twitter-card-ai-voice-creators.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-voice-generation-for-creators',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f0c29',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Scenith – Voice for Creators',
  },
  manifest: '/manifest.json',
};

export default function AIVoiceForCreatorsPage() {
  return <AIVoiceForCreatorsClient />;
}