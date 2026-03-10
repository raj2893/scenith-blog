import type { Metadata } from "next";
import TikTokVoiceGeneratorPage from "./TikTokVoiceGeneratorPage";

export const metadata: Metadata = {
  title: 'Free TikTok Voice Generator – AI Text to Speech for TikTok 2026 | Scenith',
  description:
    'Generate scroll-stopping TikTok voiceovers with AI. 40+ natural voices, emotion presets, instant MP3 download. Free TikTok voice generator — no watermark, full commercial rights.',
  keywords: [
    'TikTok voice generator',
    'TikTok text to speech',
    'AI voice for TikTok',
    'free TikTok voice generator',
    'TikTok TTS',
    'TikTok voiceover generator',
    'AI TikTok voice 2026',
    'faceless TikTok voice',
    'best TikTok voice generator',
    'TikTok AI voice free',
    'TikTok voice generator no watermark',
    'TikTok text to speech free',
    'AI voiceover TikTok',
    'TikTok narration generator',
    'TikTok script to voice',
    'viral TikTok voice AI',
    'TikTok voice generator online',
    'faceless TikTok AI',
    'TikTok content creator tools',
    'AI voice TikTok monetization',
  ],
  openGraph: {
    title: 'Free TikTok Voice Generator – 40+ AI Voices, Emotion Presets, Instant MP3 | Scenith',
    description:
      'Create scroll-stopping TikTok voiceovers in seconds. AI-powered text to speech with 40+ natural voices, 9 emotion presets, and zero watermarks. Trusted by 1,500+ TikTok creators.',
    type: 'website',
    url: 'https://scenith.in/tools/tiktok-ai-voice-generation',
    images: [
      {
        url: '/images/og-tiktok-voice-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith TikTok Voice Generator – AI Text to Speech for TikTok',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free TikTok Voice Generator – AI Voiceover in 3 Seconds | Scenith',
    description:
      'Stop recording, start generating. Create natural AI voices for TikTok with emotion presets, 40+ voices, and instant MP3 — completely free.',
    images: ['/images/twitter-tiktok-voice-generator.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/tiktok-ai-voice-generation',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#fe2c55',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TikTok Voice Generator',
  },
  manifest: '/manifest.json',
};

export default function TikTokVoiceGeneratorPageWrapper() {
  return <TikTokVoiceGeneratorPage />;
}