/* ============================================================
   studio.config.ts
   Presentation-layer configuration for the AI Content Studio
   workspace. Contains NO business logic, NO API calls and NO
   credit maths. Everything here is layout / labelling only.
   ============================================================ */

export type StudioTab = "voice" | "image" | "video";

/* ------------------------------------------------------------
   FEATURE FLAGS
   Flip these to change workspace behaviour without touching
   any component code.
   ------------------------------------------------------------ */
export const STUDIO_FLAGS = {
  /**
   * When true, the right-hand History rail loads the history for the
   * ACTIVE TAB ONLY, once per tab per session, using the existing
   * handlers. At most 3 extra GETs across an entire session.
   * Set to false to make the rail load only when the user clicks
   * "Load history" (zero extra requests).
   */
  autoLoadHistory: true,

  /**
   * Show the right-hand History rail at all. When false the main
   * column spans the full width.
   */
  showHistoryRail: true,

  /**
   * Show the Quick examples strip under the prompt card.
   */
  showQuickExamples: true,

  /**
   * Number of items rendered in the History rail before "View all".
   */
  historyRailLimit: 8,
} as const;

/* ------------------------------------------------------------
   SIDEBAR NAVIGATION
   `href` entries navigate. `tab` entries switch the in-page tab.
   Every href below points at a route that already exists in this
   codebase — no placeholder links.
   ------------------------------------------------------------ */

export interface StudioNavItem {
  id: string;
  label: string;
  icon: string; // react-icons/fi name, resolved in StudioSidebar
  href?: string;
  tab?: StudioTab;
}

export const STUDIO_PRIMARY_NAV: StudioNavItem[] = [
  { id: "create", label: "Create", icon: "FiZap", href: "/create-ai-content" },
  { id: "projects", label: "Projects", icon: "FiFolder", href: "/dashboard" },
  { id: "usage", label: "Usage & credits", icon: "FiPieChart", href: "/user-dashboard" },
];

export const STUDIO_TOOL_NAV: StudioNavItem[] = [
  { id: "tool-video", label: "AI video", icon: "FiVideo", tab: "video" },
  { id: "tool-image", label: "AI image", icon: "FiImage", tab: "image" },
  { id: "tool-voice", label: "AI voice", icon: "FiMic", tab: "voice" },
  { id: "tool-subtitles", label: "AI subtitles", icon: "FiType", href: "/tools/add-subtitles-to-videos" },
  { id: "tool-editor", label: "Image editor", icon: "FiEdit3", href: "/tools/image-editing" },
  { id: "tool-bgremove", label: "Background remover", icon: "FiCrop", href: "/tools/background-removal" },
  { id: "tool-all", label: "All tools", icon: "FiGrid", href: "/tools" },
];

/* ------------------------------------------------------------
   TAB METADATA — drives the topbar heading and the segmented
   control. Labels only.
   ------------------------------------------------------------ */
export const STUDIO_TABS: {
  value: StudioTab;
  label: string;
  icon: string;
  emoji: string;
}[] = [
  { value: "voice", label: "Voice", icon: "FiMic", emoji: "🎙️" },
  { value: "image", label: "Image", icon: "FiImage", emoji: "🖼️" },
  { value: "video", label: "Video", icon: "FiVideo", emoji: "🎬" },
];

/* ------------------------------------------------------------
   HISTORY RAIL — normalised shape.
   Built in CreateAIContentClient from the EXISTING history state
   arrays. Nothing is fetched by the rail itself.
   ------------------------------------------------------------ */
export interface StudioHistoryItem {
  key: string;
  id: number;
  kind: StudioTab;
  title: string;
  prompt: string;
  thumbUrl?: string | null;
  videoUrl?: string | null;
  audioUrl?: string | null;
  createdAt: string;
}

/* ------------------------------------------------------------
   Relative time — display helper, no side effects.
   ------------------------------------------------------------ */
export function studioRelativeTime(iso: string): string {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const secs = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (secs < 60) return "Just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  return new Date(iso).toLocaleDateString();
}

/* ------------------------------------------------------------
   Truncate a prompt into a rail/card title.
   ------------------------------------------------------------ */
export function studioTitleFromPrompt(prompt: string, fallback: string): string {
  const clean = (prompt || "").trim().replace(/\s+/g, " ");
  if (!clean) return fallback;
  if (clean.length <= 38) return clean;
  return `${clean.slice(0, 38).trimEnd()}…`;
}