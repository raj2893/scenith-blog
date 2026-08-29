/* app/(main)/create-ai-content/tips/tips.ts
   Tooltip copy. Numbers verified against getImageCreditCost(),
   calcVideoCredits() and STATIC_VIDEO_MODELS in CreateAIContentClient.tsx. */

export interface TipContent {
  title: string;
  body: string;
  /** Optional bullet lines rendered under the body. */
  points?: string[];
}

export const TIPS = {
  /* ── Credits & allowances ───────────────────────────── */
  credits: {
    title: "What's a credit?",
    body: "One shared wallet across voice, image and video. Each generation deducts a different amount depending on the model and settings you pick.",
    points: [
      "🖼️ Image — 8 to 47 credits",
      "🎬 Video — 46 to 186 credits (5s clip)",
      "🎙️ Voice — uses your character allowance, not credits",
    ],
  },
  voiceChars: {
    title: "Characters, not credits",
    body: "Voice runs on a separate monthly character allowance, so generating speech never eats into your image and video credits.",
    points: ["1 character of your script = 1 character used", "Resets every month on paid plans"],
  },

  /* ── Image controls ─────────────────────────────────── */
  imageModel: {
    title: "Which model should I pick?",
    body: "Each model has its own strengths and its own credit cost — shown next to the name.",
    points: [
      "Imagen 4 — best all-rounder, reliable faces",
      "GPT Image 2 — best at text inside images",
      "Nano Banana Pro — sharpest detail, highest cost",
      "FLUX Pro — strong on style and composition",
    ],
  },
  imageSize: {
    title: "Aspect ratio",
    body: "1:1 for feed posts, 9:16 for Reels and Stories, 16:9 for thumbnails and YouTube.",
    points: ["Non-square sizes cost more credits on some models — watch the number on the model chip"],
  },
  imageQuality: {
    title: "Quality level",
    body: "Controls how much compute the model spends. Higher quality means finer detail and cleaner edges.",
    points: [
      "Draft — fastest and cheapest, good for testing prompts",
      "Standard — the everyday choice",
      "Premium / 4K — final assets only; can cost 2–3× standard",
    ],
  },
  imgToImg: {
    title: "Image to Image",
    body: "Upload a photo and the model rebuilds it following your prompt — keeping the composition, changing the style, subject or setting.",
    points: ["Great for restyling a product shot or reworking a photo you already have"],
  },
  carousel: {
    title: "Carousel mode",
    body: "Writes three linked images in one run — for Instagram or LinkedIn carousels where the slides need to look like a set.",
    points: ["Each slide gets its own prompt", "Costs the model's price × the number of slides you fill"],
  },
  carouselShared: {
    title: "Shared reference image",
    body: "Applies one uploaded image as the visual base for all three slides, so the character, product or style stays consistent across the set.",
  },

  /* ── Video controls ─────────────────────────────────── */
  videoModel: {
    title: "Which video model?",
    body: "Cost shown on the chip updates live as you change duration, resolution and audio.",
    points: [
      "Wan 2.5 — cheapest starting point (46cr)",
      "Kling 3.0 Pro — best motion and realism",
      "Veo 3.1 — highest quality, native audio, priciest",
      "Grok Imagine — audio always included",
    ],
  },
  videoResolution: {
    title: "Resolution",
    body: "Only some models let you choose. Higher resolution multiplies the credit cost significantly.",
    points: ["480p → 720p roughly doubles the cost", "720p → 1080p adds about 50% again"],
  },
  videoAudio: {
    title: "AI-generated audio",
    body: "The model generates a matching soundtrack or ambient audio with the clip, instead of returning silent video.",
    points: ["Roughly doubles the credit cost on models that support it"],
  },
  videoDuration: {
    title: "Clip length",
    body: "Credits scale directly with duration — a 10-second clip costs about twice a 5-second one.",
    points: ["Start at 5s while you're testing a prompt, then extend once it looks right"],
  },
  imgToVideo: {
    title: "Image to Video",
    body: "Your uploaded image becomes the first frame, and the model animates forward from it.",
    points: ["Gives you far more control over the look than describing it in text alone"],
  },
  makeVideoFromImage: {
    title: "Turn this into video",
    body: "Sends this exact image to the Video tab as the starting frame, with its prompt already filled in.",
  },

  /* ── Content Engine ─────────────────────────────────── */
  cePlanningDays: {
    title: "Planning days",
    body: "The total number of calendar days you can schedule content across, added up over all your plans. A 30-day plan uses 30 days from this allowance.",
  },
  ceActivePlans: {
    title: "Active plans",
    body: "How many content calendars you can run at once — useful if you manage several brands or channels. Archive a finished plan to free up a slot.",
  },
  cePlatforms: {
    title: "Platforms per plan",
    body: "How many channels one calendar can cover — Instagram, YouTube, TikTok, LinkedIn and X each count as one.",
  },
  ceRegens: {
    title: "Regenerations",
    body: "Daily limit on re-rolling AI content for a slot you don't like. Resets every day, so you're never permanently stuck with a bad draft.",
  },
} as const satisfies Record<string, TipContent>;

export type TipId = keyof typeof TIPS;