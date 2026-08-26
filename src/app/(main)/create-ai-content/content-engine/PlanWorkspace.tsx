"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiPlus, FiRefreshCw, FiGrid, FiList } from "react-icons/fi";
import {
  contentEngineApi, ContentEngineError, ContentEngineEntitlement,
  CalendarResponse, ContentDay, ContentItem, ContentPlatform, ContentItemStatus,
  ALL_PLATFORMS, ALL_ITEM_STATUSES, PLATFORM_META, STATUS_META,
} from "./contentEngineApi";
import ContentItemCard from "./ContentItemCard";

/* Parse yyyy-MM-dd as a LOCAL date (never let UTC shift the calendar). */
function parseLocal(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function isoOf(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function PlanWorkspace({
  planId, entitlement, onMetaChanged,
}: {
  planId: number;
  entitlement: ContentEngineEntitlement | null;
  onMetaChanged: () => void;
}) {
  const [cal, setCal] = useState<CalendarResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [regenBusy, setRegenBusy] = useState(false);

  const refresh = useCallback(async (keepSelection = true) => {
    try {
      const c = await contentEngineApi.getCalendar(planId);
      setCal(c);
      if (!keepSelection || selectedDayId == null) {
        const firstWithItems = c.days.find((d) => d.items.length > 0) || c.days[0];
        setSelectedDayId(firstWithItems ? firstWithItems.id : null);
      }
    } catch (err) {
      setError(err instanceof ContentEngineError ? err.message : "Could not load this plan.");
    } finally {
      setLoading(false);
    }
  }, [planId, selectedDayId]);

  useEffect(() => { setLoading(true); refresh(false); /* eslint-disable-next-line */ }, [planId]);

  /* Local, targeted state updates (avoid full refetch / collapse on every edit). */
  const patchItem = useCallback((updated: ContentItem) => {
    setCal((c) => c && ({
      ...c,
      days: c.days.map((d) => ({ ...d, items: d.items.map((i) => (i.id === updated.id ? updated : i)) })),
    }));
  }, []);
  const removeItem = useCallback((itemId: number) => {
    setCal((c) => c && ({ ...c, days: c.days.map((d) => ({ ...d, items: d.items.filter((i) => i.id !== itemId) })) }));
  }, []);
  const appendItem = useCallback((dayId: number, item: ContentItem) => {
    setCal((c) => c && ({ ...c, days: c.days.map((d) => (d.id === dayId ? { ...d, items: [...d.items, item] } : d)) }));
  }, []);

  const regeneratePlan = async () => {
    if (!confirm("Regenerate the ENTIRE plan? This replaces all current content and uploaded assets. This cannot be undone.")) return;
    setRegenBusy(true);
    try {
      const c = await contentEngineApi.regeneratePlan(planId);
      setCal(c);
      onMetaChanged();
    } catch (err) {
      alert(err instanceof ContentEngineError ? err.message : "Failed to regenerate plan.");
    } finally {
      setRegenBusy(false);
    }
  };

  if (loading) return <div className="ce-loading"><div className="ce-spinner" /><p>Loading plan…</p></div>;
  if (error || !cal) return <div className="ce-error">{error || "Plan not found."}</div>;

  const plan = cal.plan;
  const daysByDate = new Map(cal.days.map((d) => [d.calendarDate, d]));
  const selectedDay = cal.days.find((d) => d.id === selectedDayId) || null;

  return (
    <div className="ce-ws">
      <div className="ce-ws__head">
        <div className="ce-ws__title">
          <h1>{plan.title}</h1>
          <span className="ce-ws__meta">{plan.startDate} → {plan.endDate} · {plan.durationDays} days</span>
        </div>
        <div className="ce-ws__actions">
          <div className="ce-viewtoggle">
            <button className={view === "calendar" ? "is-on" : ""} onClick={() => setView("calendar")} title="Calendar"><FiGrid size={14} /></button>
            <button className={view === "list" ? "is-on" : ""} onClick={() => setView("list")} title="List"><FiList size={14} /></button>
          </div>
          <button className="ce-btn ce-btn--ghost ce-btn--sm" onClick={regeneratePlan} disabled={regenBusy}>
            <FiRefreshCw size={14} /> {regenBusy ? "Regenerating…" : "Regenerate plan"}
          </button>
        </div>
      </div>

      {entitlement && (
        <div className="ce-ws__regen">
          Regenerations today: <strong>{entitlement.regenerationsRemainingToday < 0 ? "∞" : entitlement.regenerationsRemainingToday}</strong>
          {entitlement.regenerationLimitPerDay >= 0 && <> / {entitlement.regenerationLimitPerDay} left</>}
        </div>
      )}

      {view === "calendar" ? (
        <div className="ce-ws__cols">
          <CalendarBoard days={cal.days} daysByDate={daysByDate} startDate={plan.startDate} endDate={plan.endDate}
                         selectedDayId={selectedDayId} onSelect={setSelectedDayId} />
          <DayPanel day={selectedDay} entitlement={entitlement}
                    onItemChanged={patchItem} onItemDeleted={removeItem} onItemAdded={appendItem}
                    onMetaChanged={onMetaChanged} />
        </div>
      ) : (
        <ListView cal={cal} entitlement={entitlement}
                  onItemChanged={patchItem} onItemDeleted={removeItem} onMetaChanged={onMetaChanged} />
      )}
    </div>
  );
}

/* ── Calendar grid: continuous 7-col grid spanning the whole plan ──────────── */
function CalendarBoard({
  days, daysByDate, startDate, endDate, selectedDayId, onSelect,
}: {
  days: ContentDay[];
  daysByDate: Map<string, ContentDay>;
  startDate: string;
  endDate: string;
  selectedDayId: number | null;
  onSelect: (id: number) => void;
}) {
  const start = parseLocal(startDate);
  const end = parseLocal(endDate);
  const gridStart = new Date(start); gridStart.setDate(start.getDate() - start.getDay()); // back to Sunday
  const gridEnd = new Date(end); gridEnd.setDate(end.getDate() + (6 - end.getDay()));      // to Saturday

  const cells: Date[] = [];
  for (let d = new Date(gridStart); d <= gridEnd; d.setDate(d.getDate() + 1)) cells.push(new Date(d));

  return (
    <div className="ce-cal">
      <div className="ce-cal__dow">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="ce-cal__grid">
        {cells.map((date) => {
          const iso = isoOf(date);
          const inRange = date >= start && date <= end;
          const day = daysByDate.get(iso);
          const counts = day ? platformCounts(day.items) : [];
          const total = day ? day.items.length : 0;
          return (
            <button key={iso} disabled={!inRange}
                    className={`ce-cal__cell ${inRange ? "" : "is-out"} ${day && day.id === selectedDayId ? "is-sel" : ""}`}
                    onClick={() => day && onSelect(day.id)}>
              <span className="ce-cal__num">{date.getDate()}</span>
              {total > 0 && (
                <span className="ce-cal__counts">
                  {counts.slice(0, 3).map(([p, n]) => (
                    <span key={p} className="ce-cal__count" title={`${n} ${PLATFORM_META[p].label}`}>{PLATFORM_META[p].emoji}{n}</span>
                  ))}
                  {counts.length > 3 && <span className="ce-cal__count">+{total - counts.slice(0, 3).reduce((s, [, n]) => s + n, 0)}</span>}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function platformCounts(items: ContentItem[]): [ContentPlatform, number][] {
  const m = new Map<ContentPlatform, number>();
  for (const it of items) m.set(it.platform, (m.get(it.platform) || 0) + 1);
  return ALL_PLATFORMS.filter((p) => m.has(p)).map((p) => [p, m.get(p) as number]);
}

/* ── Day detail panel: items grouped by platform, add content ──────────────── */
function DayPanel({
  day, entitlement, onItemChanged, onItemDeleted, onItemAdded, onMetaChanged,
}: {
  day: ContentDay | null;
  entitlement: ContentEngineEntitlement | null;
  onItemChanged: (i: ContentItem) => void;
  onItemDeleted: (id: number) => void;
  onItemAdded: (dayId: number, i: ContentItem) => void;
  onMetaChanged: () => void;
}) {
  const [addOpen, setAddOpen] = useState<ContentPlatform | null>(null);
  const [adding, setAdding] = useState(false);

  if (!day) return <div className="ce-daypanel ce-daypanel--empty">Select a date to view its content.</div>;

  const groups = ALL_PLATFORMS.filter((p) => day.items.some((i) => i.platform === p));
  const platformsPresent = groups.length > 0;

  const addItem = async (platform: ContentPlatform) => {
    setAdding(true);
    try {
      const item = await contentEngineApi.addItem(day.id, { platform, title: "New content", status: "PLANNED" });
      onItemAdded(day.id, item);
      setAddOpen(null);
    } catch (err) {
      alert(err instanceof ContentEngineError ? err.message : "Failed to add content.");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="ce-daypanel">
      <div className="ce-daypanel__head">
        <div>
          <div className="ce-daypanel__date">{new Date(parseLocal(day.calendarDate)).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</div>
          <div className="ce-daypanel__count">{day.items.length} content piece{day.items.length === 1 ? "" : "s"}</div>
        </div>
        <div className="ce-addmenu">
          <button className="ce-btn ce-btn--primary ce-btn--sm" onClick={() => setAddOpen(addOpen ? null : "INSTAGRAM")} disabled={adding}>
            <FiPlus size={14} /> Add content
          </button>
          {addOpen && (
            <div className="ce-addmenu__pop">
              {ALL_PLATFORMS.map((p) => (
                <button key={p} onClick={() => addItem(p)} disabled={adding}>{PLATFORM_META[p].emoji} {PLATFORM_META[p].label}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {!platformsPresent ? (
        <div className="ce-empty ce-empty--inset">
          <div className="ce-empty__icon">📭</div>
          <p className="ce-empty__sub">No content on this date yet.</p>
        </div>
      ) : (
        groups.map((platform) => (
          <PlatformGroup key={platform} platform={platform}
                         items={day.items.filter((i) => i.platform === platform).sort((a, b) => a.sortOrder - b.sortOrder)}
                         entitlement={entitlement}
                         onItemChanged={onItemChanged} onItemDeleted={onItemDeleted} onMetaChanged={onMetaChanged} />
        ))
      )}
    </div>
  );
}

function PlatformGroup({
  platform, items, entitlement, onItemChanged, onItemDeleted, onMetaChanged,
}: {
  platform: ContentPlatform;
  items: ContentItem[];
  entitlement: ContentEngineEntitlement | null;
  onItemChanged: (i: ContentItem) => void;
  onItemDeleted: (id: number) => void;
  onMetaChanged: () => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="ce-group">
      <button className="ce-group__head" onClick={() => setOpen(!open)}>
        <span>{PLATFORM_META[platform].emoji} {PLATFORM_META[platform].label}</span>
        <span className="ce-group__count">{items.length} · {open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="ce-group__items">
          {items.map((item) => (
            <ContentItemCard key={item.id} item={item} entitlement={entitlement}
                             onChanged={onItemChanged} onDeleted={onItemDeleted} onMetaChanged={onMetaChanged} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── List view (spec §16) with platform + status filters ───────────────────── */
function ListView({
  cal, entitlement, onItemChanged, onItemDeleted, onMetaChanged,
}: {
  cal: CalendarResponse;
  entitlement: ContentEngineEntitlement | null;
  onItemChanged: (i: ContentItem) => void;
  onItemDeleted: (id: number) => void;
  onMetaChanged: () => void;
}) {
  const [fPlatform, setFPlatform] = useState<ContentPlatform | "ALL">("ALL");
  const [fStatus, setFStatus] = useState<ContentItemStatus | "ALL">("ALL");

  const rows = useMemo(() => {
    const out: { date: string; item: ContentItem }[] = [];
    for (const d of cal.days) for (const it of d.items) out.push({ date: d.calendarDate, item: it });
    return out
      .filter((r) => (fPlatform === "ALL" || r.item.platform === fPlatform))
      .filter((r) => (fStatus === "ALL" || r.item.status === fStatus))
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.item.sortOrder - b.item.sortOrder));
  }, [cal, fPlatform, fStatus]);

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="ce-list">
      <div className="ce-list__filters">
        <select value={fPlatform} onChange={(e) => setFPlatform(e.target.value as ContentPlatform | "ALL")}>
          <option value="ALL">All platforms</option>
          {ALL_PLATFORMS.map((p) => <option key={p} value={p}>{PLATFORM_META[p].label}</option>)}
        </select>
        <select value={fStatus} onChange={(e) => setFStatus(e.target.value as ContentItemStatus | "ALL")}>
          <option value="ALL">All statuses</option>
          {ALL_ITEM_STATUSES.map((s) => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
        </select>
        <span className="ce-list__count">{rows.length} items</span>
      </div>

      {rows.length === 0 ? (
        <div className="ce-empty ce-empty--inset"><p className="ce-empty__sub">No items match these filters.</p></div>
      ) : (
        <div className="ce-list__rows">
          {rows.map(({ date, item }) => (
            <div key={item.id} className="ce-list__group">
              <button className="ce-list__row" onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                <span className="ce-list__date">{date}</span>
                <span className="ce-list__plat">{PLATFORM_META[item.platform].emoji} {PLATFORM_META[item.platform].label}</span>
                <span className="ce-list__ttl">{item.title || "Untitled"}</span>
                <span className="ce-badge" style={{ color: STATUS_META[item.status].color, background: STATUS_META[item.status].bg }}>{STATUS_META[item.status].label}</span>
              </button>
              {expanded === item.id && (
                <div className="ce-list__expand">
                  <ContentItemCard item={item} entitlement={entitlement} startExpanded
                                   onChanged={onItemChanged} onDeleted={(id) => { onItemDeleted(id); setExpanded(null); }} onMetaChanged={onMetaChanged} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
