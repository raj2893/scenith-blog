import { Metadata } from "next";
import HindiFemaleVoicePage from "./HindiFemaleVoicePage";

export const metadata: Metadata = {
  title: 'Hindi Female Voice Generator – Free AI महिला आवाज़ | Scenith',
  description: 'Generate natural Hindi female AI voices free. Best महिला आवाज़ जनरेटर for YouTube, education, audiobooks & customer support. Warm, clear Indian female voices. Download MP3 instantly!',
  keywords: [
    'hindi female voice generator',
    'hindi female text to speech',
    'hindi mahila awaz generator',
    'female hindi AI voice',
    'hindi female TTS',
    'महिला आवाज़ जनरेटर',
    'हिंदी महिला आवाज़',
    'indian female voice AI',
    'hindi woman voice generator',
    'female voice hindi free',
    'hindi female voice online',
    'natural hindi female voice',
    'hindi female voiceover generator',
    'female indian accent AI voice',
    'hindi girl voice text to speech',
    'free female hindi TTS',
    'hindi female narrator AI',
    'best hindi female voice generator',
    'AI mahila awaz hindi',
    'devanagari female voice',
  ],
  openGraph: {
    title: 'Free Hindi Female Voice Generator – Natural महिला आवाज़ AI | Scenith',
    description: 'हिंदी महिला आवाज़ जनरेटर – Convert text to warm, natural Indian female voice. Perfect for YouTube, education & storytelling. Free AI-powered Hindi female TTS with MP3 download.',
    type: 'website',
    url: 'https://scenith.in/tools/hindi-female-ai-voice-generation',
    locale: 'hi_IN',
    images: [
      {
        url: '/images/og-hindi-female-voice.jpg',
        width: 1200,
        height: 630,
        alt: 'Hindi Female Voice Generator – महिला आवाज़ जनरेटर AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Hindi Female AI Voice – Natural महिला आवाज़ Generator',
    description: 'Generate warm, natural Hindi female voices instantly. Best free female Hindi TTS. Download MP3 in seconds!',
    images: ['/images/twitter-hindi-female-voice.jpg'],
    creator: '@scenith_1902',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://scenith.in/tools/hindi-female-ai-voice-generation',
    languages: {
      'hi-IN': 'https://scenith.in/tools/hindi-female-ai-voice-generation',
      'en-IN': 'https://scenith.in/tools/ai-voice-generation',
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#D63384',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hindi Female Voice Generator',
  },
};

export default function HindiFemaleVoicePageWrapper() {
  return <HindiFemaleVoicePage />;
}