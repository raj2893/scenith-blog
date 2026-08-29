/* src/app/whatsNew.ts
   Launch announcement config. One place to flip everything on/off. */

export const WHATS_NEW = {
  id: "content-engine-v1",
  name: "Content Engine",
  href: "/create-ai-content/content-engine",
  /** Set to your actual launch date. */
  launchedAt: new Date("2026-08-28T00:00:00Z"),
  /** NEW badges disappear this many days after launch. */
  badgeDays: 30,
} as const;

const SEEN_KEY = `scenith_whatsnew_seen_${WHATS_NEW.id}`;

/** Are we still inside the badge window? */
export function isBadgeActive(): boolean {
  const ms = Date.now() - WHATS_NEW.launchedAt.getTime();
  return ms >= 0 && ms < WHATS_NEW.badgeDays * 24 * 60 * 60 * 1000;
}

export function hasSeenAnnouncement(): boolean {
  try { return localStorage.getItem(SEEN_KEY) === "1"; }
  catch { return true; } // storage blocked → never nag
}

export function markAnnouncementSeen(): void {
  try { localStorage.setItem(SEEN_KEY, "1"); } catch { /* ignore */ }
}

/** Fires into your existing GA4 (G-GV9N09RZ1B). No-op if absent. */
export function trackNew(event: string, props: Record<string, unknown> = {}): void {
  try {
    const w = window as any;
    const payload = { feature: WHATS_NEW.id, ...props };
    if (typeof w.gtag === "function") w.gtag("event", event, payload);
    else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...payload });
  } catch { /* analytics must never break UI */ }
}

/** Adds attribution so you can see which surface drove the clicks. */
export function newHref(source: string): string {
  return `${WHATS_NEW.href}?src=${encodeURIComponent(source)}`;
}