import type { Metadata } from "next";
import YouTubeVoiceGeneratorPage from "./YouTubeVoiceGeneratorPage";

export const metadata: Metadata = {
  title: 'Free YouTube Voice Generator – AI Narration for Faceless Channels 2026 | Scenith',
  description:
    'Generate studio-quality AI narration for YouTube videos in seconds. 40+ natural voices, 20+ languages, emotion presets, instant MP3. Trusted by 25,000+ YouTube creators — no watermark, full commercial rights.',
  keywords: [
    'YouTube voice generator',
    'AI voice for YouTube',
    'free YouTube voice generator',
    'faceless YouTube channel AI voice',
    'YouTube text to speech',
    'YouTube TTS free',
    'AI narration YouTube',
    'YouTube voiceover generator',
    'best AI voice YouTube 2026',
    'faceless channel voice generator',
    'YouTube voice generator no watermark',
    'AI voice generator YouTube free',
    'text to speech YouTube videos',
    'AI voiceover for YouTube',
    'YouTube channel narration AI',
    'faceless YouTube voice AI',
    'YouTube content creator tools',
    'automated YouTube channel voice',
    'YouTube AI narrator',
    'free text to speech YouTube monetization',
  ],
  openGraph: {
    title: 'Free YouTube Voice Generator – AI Narration for Faceless Channels | Scenith',
    description:
      'Create professional YouTube narration with AI. 40+ natural voices, 20+ languages, emotion presets, instant MP3 download. No watermark. Trusted by 25,000+ YouTube creators worldwide.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-voice-generation-for-youtube',
    images: [
      {
        url: '/images/og-youtube-voice-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Scenith YouTube Voice Generator – AI Narration for Faceless YouTube Channels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Voice Generator – AI Narration in 3 Seconds | Scenith',
    description:
      'Build a faceless YouTube channel with professional AI narration. 40+ voices, 20+ languages, instant MP3 — free to start, no watermark, commercial use OK.',
    images: ['/images/twitter-youtube-voice-generator.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-voice-generation-for-youtube',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ff0000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'YouTube Voice Generator',
  },
  manifest: '/manifest.json',
};

export default function YouTubeVoiceGeneratorPageWrapper() {
  return <YouTubeVoiceGeneratorPage />;
}