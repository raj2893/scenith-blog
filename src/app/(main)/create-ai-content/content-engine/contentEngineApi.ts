/* ============================================================================
   Content Engine — typed API layer.
   Mirrors the backend contract in Scenith_Backend/CONTENT_ENGINE_API.md exactly.
   Backend is the single source of truth: routes, bodies, fields, enums, codes.
   ============================================================================ */

import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/app/config";

const BASE = `${API_BASE_URL}/api/content-engine`;

/* ── Enums (match backend) ─────────────────────────────────────────────────── */
export type ContentPlatform = "INSTAGRAM" | "TIKTOK" | "YOUTUBE" | "X";
export type ContentItemStatus = "PLANNED" | "IN_PROGRESS" | "READY" | "POSTED" | "ARCHIVED";
export type ContentPlanStatus = "ACTIVE" | "ARCHIVED" | "COMPLETED";

export const ALL_PLATFORMS: ContentPlatform[] = ["INSTAGRAM", "TIKTOK", "YOUTUBE", "X"];
export const ALL_ITEM_STATUSES: ContentItemStatus[] = ["PLANNED", "IN_PROGRESS", "READY", "POSTED", "ARCHIVED"];

/* ── Response shapes (match backend DTOs) ──────────────────────────────────── */
export interface ContentEngineEntitlement {
  hasAccess: boolean;
  subscriptionPlan: string;
  contentDaysAllowed: number;      // -1 = unlimited (admin)
  contentDaysUsed: number;
  contentDaysRemaining: number;    // -1 = unlimited
  maxActivePlans: number;          // -1 = unlimited
  activePlansUsed: number;
  maxPlatforms: number;            // -1 = unlimited
  regenerationLimitPerDay: number; // -1 = unlimited
  regenerationsUsedToday: number;
  regenerationsRemainingToday: number; // -1 = unlimited
  billingCycleStart: string | null;
  billingCycleEnd: string | null;
}

export interface ContentPlan {
  id: number;
  title: string;
  description: string | null;
  startDate: string;   // yyyy-MM-dd
  endDate: string;     // yyyy-MM-dd
  durationDays: number;
  audience: string | null;
  goal: string | null;
  postingFrequency: string | null;
  platforms: ContentPlatform[];
  contentPillars: string[];
  tone: string | null;
  preferences: string | null;
  status: ContentPlanStatus;
  createdAt: string;
  updatedAt: string;
}

export interface PlatformVersion {
  id: number;
  itemId: number;
  platform: ContentPlatform;
  title: string | null;
  hook: string | null;
  caption: string | null;
  cta: string | null;
  contentFormat: string | null;
  bodyText: string | null;
  regenerationCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContentAsset {
  id: number;
  itemId: number;
  r2Path: string;
  url: string | null;
  originalName: string | null;
  contentType: string | null;
  sizeBytes: number | null;
  createdAt: string;
}

export interface ContentItem {
  id: number;
  dayId: number;
  platform: ContentPlatform;
  title: string | null;
  contentFormat: string | null;
  hook: string | null;
  caption: string | null;
  cta: string | null;
  creativeDirection: string | null;
  notes: string | null;
  status: ContentItemStatus;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  platformVersions: PlatformVersion[];
  assets: ContentAsset[];
}

export interface ContentDay {
  id: number;
  calendarDate: string; // yyyy-MM-dd
  items: ContentItem[];
}

export interface CalendarResponse {
  plan: ContentPlan;
  days: ContentDay[];
}

/* ── Request shapes ────────────────────────────────────────────────────────── */
export interface PlanGenerationRequest {
  title: string;
  description?: string;
  niche?: string;
  audience?: string;
  goal?: string;
  platforms: ContentPlatform[];
  postingFrequency?: string;
  contentPillars?: string[];
  tone?: string;
  preferences?: string;
  startDate: string;   // yyyy-MM-dd
  durationDays: number;
  generateWithAi: boolean;
}

export interface PlanUpdateRequest {
  title?: string;
  description?: string;
  audience?: string;
  goal?: string;
  postingFrequency?: string;
  tone?: string;
  preferences?: string;
}

export interface ContentItemRequest {
  platform?: ContentPlatform;
  title?: string;
  contentFormat?: string;
  hook?: string;
  caption?: string;
  cta?: string;
  creativeDirection?: string;
  notes?: string;
  status?: ContentItemStatus;
}

export interface PlatformVersionRequest {
  platform?: ContentPlatform;
  title?: string;
  hook?: string;
  caption?: string;
  cta?: string;
  contentFormat?: string;
  bodyText?: string;
}

/* ── Errors: map backend { success, code, error } to friendly messages ──────── */
export class ContentEngineError extends Error {
  code: string;
  status: number;
  constructor(code: string, message: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

const FRIENDLY: Record<string, string> = {
  NO_CONTENT_ENGINE_ACCESS: "Content Engine is available on Creator Lite, Creator Spark, and Creator Odyssey plans.",
  DAY_ALLOWANCE_EXCEEDED: "Not enough planning days left in this billing period for a plan of that length.",
  ACTIVE_PLAN_LIMIT: "You've reached your active-plan limit. Archive a plan to create another.",
  PLATFORM_LIMIT: "Your plan doesn't allow that many platforms. Remove some to continue.",
  REGEN_LIMIT_REACHED: "You've used all of today's regenerations. They reset tomorrow.",
  VALIDATION_ERROR: "Please check the form and try again.",
  INVALID_PLATFORM: "That platform isn't supported.",
  INVALID_STATUS: "That status isn't valid.",
  INVALID_REORDER: "Couldn't reorder — please refresh and try again.",
  UNSUPPORTED_TYPE: "Unsupported file type. Use MP4, MOV, JPG, PNG, or WEBP.",
  UPLOAD_FAILED: "Upload failed. Please try again.",
  NOT_FOUND: "That item couldn't be found.",
  UNAUTHORIZED: "Please sign in again.",
  AI_PROVIDER_ERROR: "The AI couldn't generate content right now. Please try again.",
  AI_MALFORMED_RESPONSE: "The AI returned an unexpected result. Please try again.",
  AI_UNAVAILABLE: "AI generation is temporarily unavailable.",
  INTERNAL_ERROR: "Something went wrong. Please try again.",
};

export function friendlyMessage(code: string, fallback?: string): string {
  return FRIENDLY[code] || fallback || "Something went wrong. Please try again.";
}

function toError(e: unknown): ContentEngineError {
  const ax = e as AxiosError<{ code?: string; error?: string }>;
  const status = ax.response?.status ?? 0;
  const code = ax.response?.data?.code ?? "INTERNAL_ERROR";
  const backendMsg = ax.response?.data?.error;
  return new ContentEngineError(code, friendlyMessage(code, backendMsg), status);
}

/* ── HTTP helpers ──────────────────────────────────────────────────────────── */
function authHeaders(): Record<string, string> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function req<T>(fn: () => Promise<{ data: T }>): Promise<T> {
  try {
    return (await fn()).data;
  } catch (e) {
    throw toError(e);
  }
}

/* ── Endpoints (all 22, exact routes) ──────────────────────────────────────── */
export const contentEngineApi = {
  getEntitlements: () =>
    req<ContentEngineEntitlement>(() => axios.get(`${BASE}/entitlements`, { headers: authHeaders() })),

  listPlans: () =>
    req<ContentPlan[]>(() => axios.get(`${BASE}/plans`, { headers: authHeaders() })),

  createPlan: (body: PlanGenerationRequest) =>
    req<CalendarResponse>(() => axios.post(`${BASE}/plans`, body, { headers: authHeaders() })),

  getCalendar: (planId: number) =>
    req<CalendarResponse>(() => axios.get(`${BASE}/plans/${planId}`, { headers: authHeaders() })),

  updatePlan: (planId: number, body: PlanUpdateRequest) =>
    req<ContentPlan>(() => axios.patch(`${BASE}/plans/${planId}`, body, { headers: authHeaders() })),

  archivePlan: (planId: number) =>
    req<ContentPlan>(() => axios.post(`${BASE}/plans/${planId}/archive`, {}, { headers: authHeaders() })),

  regeneratePlan: (planId: number) =>
    req<CalendarResponse>(() => axios.post(`${BASE}/plans/${planId}/regenerate`, {}, { headers: authHeaders() })),

  deletePlan: (planId: number) =>
    req<void>(() => axios.delete(`${BASE}/plans/${planId}`, { headers: authHeaders() })),

  addItem: (dayId: number, body: ContentItemRequest) =>
    req<ContentItem>(() => axios.post(`${BASE}/days/${dayId}/items`, body, { headers: authHeaders() })),

  updateItem: (itemId: number, body: ContentItemRequest) =>
    req<ContentItem>(() => axios.patch(`${BASE}/items/${itemId}`, body, { headers: authHeaders() })),

  setItemStatus: (itemId: number, status: ContentItemStatus) =>
    req<ContentItem>(() => axios.post(`${BASE}/items/${itemId}/status`, { status }, { headers: authHeaders() })),

  regenerateItem: (itemId: number) =>
    req<ContentItem>(() => axios.post(`${BASE}/items/${itemId}/regenerate`, {}, { headers: authHeaders() })),

  deleteItem: (itemId: number) =>
    req<void>(() => axios.delete(`${BASE}/items/${itemId}`, { headers: authHeaders() })),

  reorder: (dayId: number, orderedItemIds: number[]) =>
    req<void>(() => axios.post(`${BASE}/days/${dayId}/reorder`, { orderedItemIds }, { headers: authHeaders() })),

  listVersions: (itemId: number) =>
    req<PlatformVersion[]>(() => axios.get(`${BASE}/items/${itemId}/versions`, { headers: authHeaders() })),

  createVersion: (itemId: number, body: PlatformVersionRequest) =>
    req<PlatformVersion>(() => axios.post(`${BASE}/items/${itemId}/versions`, body, { headers: authHeaders() })),

  updateVersion: (versionId: number, body: PlatformVersionRequest) =>
    req<PlatformVersion>(() => axios.patch(`${BASE}/versions/${versionId}`, body, { headers: authHeaders() })),

  regenerateVersion: (versionId: number) =>
    req<PlatformVersion>(() => axios.post(`${BASE}/versions/${versionId}/regenerate`, {}, { headers: authHeaders() })),

  deleteVersion: (versionId: number) =>
    req<void>(() => axios.delete(`${BASE}/versions/${versionId}`, { headers: authHeaders() })),

  listAssets: (itemId: number) =>
    req<ContentAsset[]>(() => axios.get(`${BASE}/items/${itemId}/assets`, { headers: authHeaders() })),

  uploadAsset: (itemId: number, file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    return req<ContentAsset>(() =>
      axios.post(`${BASE}/items/${itemId}/assets`, fd, {
        headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
      }));
  },

  deleteAsset: (assetId: number) =>
    req<void>(() => axios.delete(`${BASE}/assets/${assetId}`, { headers: authHeaders() })),
};

/* ── Display helpers ───────────────────────────────────────────────────────── */
export const PLATFORM_META: Record<ContentPlatform, { label: string; emoji: string }> = {
  INSTAGRAM: { label: "Instagram", emoji: "📸" },
  TIKTOK: { label: "TikTok", emoji: "🎵" },
  YOUTUBE: { label: "YouTube", emoji: "▶️" },
  X: { label: "X", emoji: "𝕏" },
};

export const STATUS_META: Record<ContentItemStatus, { label: string; color: string; bg: string }> = {
  PLANNED: { label: "Planned", color: "#7070a0", bg: "rgba(112,112,160,0.12)" },
  IN_PROGRESS: { label: "In progress", color: "#d97706", bg: "rgba(245,158,11,0.12)" },
  READY: { label: "Ready", color: "#5c4de8", bg: "rgba(92,77,232,0.12)" },
  POSTED: { label: "Posted", color: "#059669", bg: "rgba(16,185,129,0.12)" },
  ARCHIVED: { label: "Archived", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
};
