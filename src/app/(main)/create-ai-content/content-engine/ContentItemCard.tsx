"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiRefreshCw, FiTrash2, FiUpload, FiChevronDown, FiChevronRight } from "react-icons/fi";
import {
  contentEngineApi, ContentEngineError, ContentEngineEntitlement,
  ContentItem, ContentItemStatus, PlatformVersion, ContentPlatform,
  ALL_ITEM_STATUSES, ALL_PLATFORMS, PLATFORM_META, STATUS_META,
} from "./contentEngineApi";

function bytes(n: number | null): string {
  if (!n) return "";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}
const isImage = (ct: string | null) => !!ct && ct.startsWith("image/");

interface Draft {
  title: string; contentFormat: string; hook: string; caption: string;
  cta: string; creativeDirection: string; notes: string;
}
const draftOf = (i: ContentItem): Draft => ({
  title: i.title || "", contentFormat: i.contentFormat || "", hook: i.hook || "",
  caption: i.caption || "", cta: i.cta || "", creativeDirection: i.creativeDirection || "", notes: i.notes || "",
});

export default function ContentItemCard({
  item: initial, entitlement, startExpanded = false, onChanged, onDeleted, onMetaChanged,
}: {
  item: ContentItem;
  entitlement: ContentEngineEntitlement | null;
  startExpanded?: boolean;
  onChanged: (i: ContentItem) => void;
  onDeleted: (id: number) => void;
  onMetaChanged: () => void;
}) {
  const [item, setItem] = useState<ContentItem>(initial);
  const [expanded, setExpanded] = useState(startExpanded);
  const [draft, setDraft] = useState<Draft>(draftOf(initial));
  const [busy, setBusy] = useState<string | null>(null);
  const [addVerOpen, setAddVerOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setItem(initial); setDraft(draftOf(initial)); }, [initial]);

  const sync = (next: ContentItem) => { setItem(next); onChanged(next); };
  const dirty = JSON.stringify(draft) !== JSON.stringify(draftOf(item));
  const regenLeft = entitlement ? entitlement.regenerationsRemainingToday : null;
  const noRegen = regenLeft !== null && regenLeft === 0;

  const save = async () => {
    setBusy("save");
    try { sync(await contentEngineApi.updateItem(item.id, draft)); }
    catch (err) { alert(msg(err)); }
    finally { setBusy(null); }
  };
  const changeStatus = async (status: ContentItemStatus) => {
    setBusy("status");
    try { sync(await contentEngineApi.setItemStatus(item.id, status)); }
    catch (err) { alert(msg(err)); }
    finally { setBusy(null); }
  };
  const regenerate = async () => {
    setBusy("regen");
    try { sync(await contentEngineApi.regenerateItem(item.id)); onMetaChanged(); }
    catch (err) { alert(msg(err)); }
    finally { setBusy(null); }
  };
  const del = async () => {
    if (!confirm("Delete this content item and its versions + assets?")) return;
    setBusy("del");
    try { await contentEngineApi.deleteItem(item.id); onDeleted(item.id); }
    catch (err) { alert(msg(err)); setBusy(null); }
  };

  const regenVersion = async (v: PlatformVersion) => {
    setBusy(`ver-${v.id}`);
    try {
      const updated = await contentEngineApi.regenerateVersion(v.id);
      sync({ ...item, platformVersions: item.platformVersions.map((x) => (x.id === v.id ? updated : x)) });
      onMetaChanged();
    } catch (err) { alert(msg(err)); } finally { setBusy(null); }
  };
  const addVersion = async (platform: ContentPlatform) => {
    setBusy("addver");
    try {
      const v = await contentEngineApi.createVersion(item.id, { platform });
      sync({ ...item, platformVersions: [...item.platformVersions, v] });
      setAddVerOpen(false);
    } catch (err) { alert(msg(err)); } finally { setBusy(null); }
  };
  const delVersion = async (v: PlatformVersion) => {
    if (!confirm(`Delete the ${PLATFORM_META[v.platform].label} version?`)) return;
    setBusy(`ver-${v.id}`);
    try { await contentEngineApi.deleteVersion(v.id); sync({ ...item, platformVersions: item.platformVersions.filter((x) => x.id !== v.id) }); }
    catch (err) { alert(msg(err)); } finally { setBusy(null); }
  };

  const upload = async (file: File) => {
    setBusy("upload");
    try { const a = await contentEngineApi.uploadAsset(item.id, file); sync({ ...item, assets: [...item.assets, a] }); }
    catch (err) { alert(msg(err)); } finally { setBusy(null); if (fileRef.current) fileRef.current.value = ""; }
  };
  const delAsset = async (id: number) => {
    if (!confirm("Delete this uploaded file?")) return;
    setBusy(`asset-${id}`);
    try { await contentEngineApi.deleteAsset(id); sync({ ...item, assets: item.assets.filter((a) => a.id !== id) }); }
    catch (err) { alert(msg(err)); } finally { setBusy(null); }
  };

  const sm = STATUS_META[item.status];

  return (
    <div className={`ce-item ${expanded ? "is-open" : ""}`}>
      <div className="ce-item__bar" onClick={() => setExpanded(!expanded)}>
        <span className="ce-item__chev">{expanded ? <FiChevronDown size={15} /> : <FiChevronRight size={15} />}</span>
        <span className="ce-item__title">{item.title || "Untitled content"}</span>
        {item.contentFormat && <span className="ce-item__fmt">{item.contentFormat}</span>}
        <span className="ce-badge" style={{ color: sm.color, background: sm.bg }}>{sm.label}</span>
      </div>

      {expanded && (
        <div className="ce-item__body">
          <div className="ce-item__grid">
            <Field label="Idea / title"><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} /></Field>
            <Field label="Format"><input value={draft.contentFormat} onChange={(e) => setDraft({ ...draft, contentFormat: e.target.value })} placeholder="Reel, Short, Carousel…" /></Field>
            <Field label="Hook" full><textarea rows={2} value={draft.hook} onChange={(e) => setDraft({ ...draft, hook: e.target.value })} /></Field>
            <Field label="Caption" full><textarea rows={3} value={draft.caption} onChange={(e) => setDraft({ ...draft, caption: e.target.value })} /></Field>
            <Field label="CTA"><input value={draft.cta} onChange={(e) => setDraft({ ...draft, cta: e.target.value })} /></Field>
            <Field label="Creative direction" full><textarea rows={2} value={draft.creativeDirection} onChange={(e) => setDraft({ ...draft, creativeDirection: e.target.value })} /></Field>
            <Field label="Notes" full><textarea rows={2} value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} /></Field>
          </div>

          <div className="ce-item__toolbar">
            <button className="ce-btn ce-btn--primary ce-btn--sm" onClick={save} disabled={!dirty || busy === "save"}>{busy === "save" ? "Saving…" : "Save"}</button>
            {dirty && <button className="ce-btn ce-btn--ghost ce-btn--sm" onClick={() => setDraft(draftOf(item))}>Reset</button>}
            <button className="ce-btn ce-btn--ghost ce-btn--sm" onClick={regenerate} disabled={!!busy || noRegen}
                    title={noRegen ? "No regenerations left today" : ""}>
              <FiRefreshCw size={13} /> {busy === "regen" ? "Regenerating…" : "Regenerate"}
            </button>
            <select className="ce-status-select" value={item.status} disabled={busy === "status"}
                    onChange={(e) => changeStatus(e.target.value as ContentItemStatus)}>
              {ALL_ITEM_STATUSES.map((s) => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
            </select>
            <button className="ce-icon-btn ce-icon-btn--danger" onClick={del} disabled={!!busy} title="Delete item"><FiTrash2 size={14} /></button>
          </div>

          {/* Platform versions */}
          <div className="ce-sub">
            <div className="ce-sub__head">
              <span>Platform versions</span>
              <div className="ce-addmenu">
                <button className="ce-link-btn" onClick={() => setAddVerOpen(!addVerOpen)} disabled={busy === "addver"}>+ Add version</button>
                {addVerOpen && (
                  <div className="ce-addmenu__pop">
                    {ALL_PLATFORMS.map((p) => <button key={p} onClick={() => addVersion(p)} disabled={!!busy}>{PLATFORM_META[p].emoji} {PLATFORM_META[p].label}</button>)}
                  </div>
                )}
              </div>
            </div>
            {item.platformVersions.length === 0 ? (
              <p className="ce-sub__empty">No platform-specific versions yet.</p>
            ) : (
              item.platformVersions.map((v) => (
                <div key={v.id} className="ce-ver">
                  <div className="ce-ver__head">
                    <span>{PLATFORM_META[v.platform].emoji} {PLATFORM_META[v.platform].label}</span>
                    <div className="ce-ver__actions">
                      <button className="ce-link-btn" onClick={() => regenVersion(v)} disabled={!!busy || noRegen}>
                        {busy === `ver-${v.id}` ? "…" : "Regenerate"}
                      </button>
                      <button className="ce-link-btn ce-link-btn--danger" onClick={() => delVersion(v)} disabled={!!busy}>Delete</button>
                    </div>
                  </div>
                  {(v.hook || v.caption || v.bodyText || v.title) && (
                    <div className="ce-ver__body">
                      {v.hook && <p><strong>Hook:</strong> {v.hook}</p>}
                      {v.caption && <p><strong>Caption:</strong> {v.caption}</p>}
                      {v.bodyText && <p>{v.bodyText}</p>}
                      {v.cta && <p><strong>CTA:</strong> {v.cta}</p>}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Assets */}
          <div className="ce-sub">
            <div className="ce-sub__head">
              <span>Uploaded content</span>
              <button className="ce-link-btn" onClick={() => fileRef.current?.click()} disabled={busy === "upload"}>
                <FiUpload size={12} /> {busy === "upload" ? "Uploading…" : "Upload"}
              </button>
              <input ref={fileRef} type="file" hidden accept=".mp4,.mov,.jpg,.jpeg,.png,.webp,video/mp4,video/quicktime,image/*"
                     onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }} />
            </div>
            {item.assets.length === 0 ? (
              <p className="ce-sub__empty">Upload your finished content here.</p>
            ) : (
              <div className="ce-assets">
                {item.assets.map((a) => (
                  <div key={a.id} className="ce-asset">
                    {isImage(a.contentType) && a.url
                      ? <img src={a.url} alt={a.originalName || "asset"} />
                      : <div className="ce-asset__file">🎬</div>}
                    <div className="ce-asset__meta">
                      <span className="ce-asset__name" title={a.originalName || ""}>{a.originalName || "file"}</span>
                      <span className="ce-asset__size">{bytes(a.sizeBytes)}</span>
                    </div>
                    <button className="ce-icon-btn ce-icon-btn--danger" onClick={() => delAsset(a.id)} disabled={!!busy}><FiTrash2 size={12} /></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`ce-f ${full ? "ce-f--full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function msg(err: unknown): string {
  return err instanceof ContentEngineError ? err.message : "Something went wrong. Please try again.";
}
