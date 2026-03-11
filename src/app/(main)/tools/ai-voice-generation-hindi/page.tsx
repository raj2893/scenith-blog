import type { Metadata } from "next";
import HindiTextToSpeechPage from "./HindiTextToSpeechPage";

export const metadata: Metadata = {
  title: 'Free Hindi Text to Speech – AI Voice Generator in Hindi (भारतीय आवाज़) | Scenith',
  description: 'हिंदी में मुफ्त टेक्स्ट टू स्पीच। Convert Hindi text to natural Indian voice instantly. Best AI voice generator for Hindi content creators, educators & businesses. Download MP3 free!',
  keywords: [
    'hindi text to speech',
    'hindi voice generator',
    'text to speech hindi',
    'hindi TTS',
    'indian voice generator',
    'hindi audio generator',
    'भारतीय आवाज़ जनरेटर',
    'हिंदी टेक्स्ट टू स्पीच',
    'hindi voiceover generator',
    'devanagari text to speech',
    'indian accent voice AI',
    'hindi speech synthesis',
    'free hindi TTS online',
    'hindi AI voice free',
    'natural hindi voice',
  ],
  openGraph: {
    title: 'Free Hindi Text to Speech – Convert Text to Indian Voice (भारतीय आवाज़)',
    description: 'हिंदी टेक्स्ट को प्राकृतिक आवाज़ में बदलें। Generate natural Hindi voices for YouTube, education & marketing. Free AI-powered Hindi TTS with instant MP3 download.',
    type: 'website',
    url: 'https://scenith.in/tools/ai-voice-generation-hindi',
    locale: 'hi_IN',
    images: [
      {
        url: '/images/og-hindi-tts-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hindi Text to Speech AI Voice Generator - भारतीय आवाज़ जनरेटर',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Hindi Text to Speech – AI Voice in Indian Accent (भारतीय आवाज़)',
    description: 'Convert Hindi text to natural speech instantly. Best free Hindi TTS for content creators. Download MP3 in seconds!',
    images: ['/images/twitter-hindi-tts.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/ai-voice-generation-hindi',
    languages: {
      'hi-IN': 'https://scenith.in/tools/ai-voice-generation-hindi',
      'en-IN': 'https://scenith.in/tools/ai-voice-generation',
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FF9933',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hindi Text to Speech',
  },
};

export default function HindiTextToSpeechPageWrapper() {
  return <HindiTextToSpeechPage />;
}