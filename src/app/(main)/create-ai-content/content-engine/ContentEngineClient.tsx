"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FiPlus, FiCalendar, FiArchive, FiTrash2, FiMenu, FiArrowLeft } from "react-icons/fi";
import { API_BASE_URL } from "@/app/config";
import StudioShell from "../workspace/StudioShell";
import StudioSidebar from "../workspace/StudioSidebar";
import "../create-ai-content.css";
import "../workspace/studio.css";
import "./content-engine.css";
import {
  contentEngineApi, ContentEngineError, ContentEngineEntitlement, ContentPlan,
  PLATFORM_META,
} from "./contentEngineApi";
import CreatePlanModal from "./CreatePlanModal";
import PlanWorkspace from "./PlanWorkspace";
import Tip from "../tips/Tip";
import StudioLoginModal from "../workspace/StudioLoginModal";
import { AnimatePresence } from "framer-motion";
import { CeUiProvider, useCeUi } from "./CeUi";

interface Me { name: string; email: string; picture: string | null; role: string; }

export default function ContentEngineClient() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [me, setMe] = useState<Me | null>(null);
  const [ent, setEnt] = useState<ContentEngineEntitlement | null>(null);
  const [plans, setPlans] = useState<ContentPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [activePlanId, setActivePlanId] = useState<number | null>(null);
  const [signedOut, setSignedOut] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      // Not signed in: don't bounce off the page — show the Content Engine with a
      // sign-up prompt instead. (Entitlements/plans need auth, so we skip them.)
      if (!token) { setSignedOut(true); return; }
      setSignedOut(false);
      const meRes = await axios
        .get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .catch(() => null);
      if (meRes?.data) {
        setMe({
          name: meRes.data.name || "",
          email: meRes.data.email || "",
          picture: meRes.data.picture || null,
          role: meRes.data.role || "BASIC",
        });
      }
      const [e, p] = await Promise.all([
        contentEngineApi.getEntitlements(),
        contentEngineApi.listPlans(),
      ]);
      setEnt(e);
      setPlans(p);
    } catch (err) {
      setError(err instanceof ContentEngineError ? err.message : "Could not load Content Engine.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const refreshMeta = useCallback(async () => {
    try {
      const [e, p] = await Promise.all([
        contentEngineApi.getEntitlements(),
        contentEngineApi.listPlans(),
      ]);
      setEnt(e);
      setPlans(p);
    } catch { /* keep current view on refresh failure */ }
  }, []);

  const onPlanCreated = useCallback((planId: number) => {
    setShowCreate(false);
    refreshMeta();
    setActivePlanId(planId);
  }, [refreshMeta]);

  const sidebar = (
    <StudioSidebar
      activeTab="video"
      currentPath="/create-ai-content/content-engine"
      isLoggedIn={!!me}
      userName={me?.name || ""}
      userEmail={me?.email || ""}
      userPicture={me?.picture || null}
      creditBalance={null}
      planLabel={me?.role || ""}
      planMeter={null}
      onSwitchTab={() => router.push("/create-ai-content")}
      onNewCreation={() => router.push("/create-ai-content")}
      onClose={() => setSidebarOpen(false)}
    />
  );

  const topbar = (
    <div className="ce-topbar">
      <button className="ce-topbar__menu" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
        <FiMenu size={18} />
      </button>
      {activePlanId ? (
        // A plan is open: the back control lives in the sticky topbar so it stays
        // visible while the calendar scrolls (instead of hiding under this bar).
        <button className="ce-topbar__back" onClick={() => setActivePlanId(null)}>
          <FiArrowLeft size={16} /> <span>Plans</span>
        </button>
      ) : (
        <div className="ce-topbar__title">
          <FiCalendar size={16} /> <span>Content Engine</span>
        </div>
      )}
    </div>
  );

  return (
    <CeUiProvider>
    <StudioShell
      sidebar={sidebar}
      topbar={topbar}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={() => setSidebarOpen(false)}
      showRail={false}
    >
      {loading ? (
        <div className="ce-loading"><div className="ce-spinner" /><p>Loading Content Engine…</p></div>
      ) : signedOut ? (
        <div className="ce-hub">
          <div className="ce-empty">
            <div className="ce-empty__icon">🗓️</div>
            <h2 className="ce-empty__title">Plan your content with Scenith</h2>
            <p className="ce-empty__sub">
              The Content Engine plans and AI-generates a full content calendar across Instagram,
              TikTok, YouTube and X. Sign up to start planning — it&apos;s part of the Creator plans.
            </p>
            <div className="ce-empty__actions">
              <button className="ce-btn ce-btn--primary" onClick={() => setShowLogin(true)}>Sign up free →</button>
              <button className="ce-btn ce-btn--ghost" onClick={() => setShowLogin(true)}>Log in</button>
            </div>
          </div>
        </div>
      ) : activePlanId ? (
        <PlanWorkspace
          planId={activePlanId}
          entitlement={ent}
          onMetaChanged={refreshMeta}
        />
      ) : (
        <Hub
          me={me}
          ent={ent}
          plans={plans}
          error={error}
          onOpenPlan={(id) => setActivePlanId(id)}
          onCreate={() => setShowCreate(true)}
          onChanged={refreshMeta}
        />
      )}

      {showCreate && ent && (
        <CreatePlanModal
          entitlement={ent}
          onClose={() => setShowCreate(false)}
          onCreated={onPlanCreated}
        />
      )}

      <AnimatePresence>
        {showLogin && (
          <StudioLoginModal
            subtitle="Log in to plan and generate content for free"
            onClose={() => setShowLogin(false)}
            onLoggedIn={() => {
              // Stay on the Content Engine page: just close the modal and reload
              // this page's data now that we have a token.
              setShowLogin(false);
              load();
            }}
          />
        )}
      </AnimatePresence>
    </StudioShell>
    </CeUiProvider>
  );
}

/* ── Hub view: entitlements + plan list + empty/upgrade states ─────────────── */
function Hub({
  me, ent, plans, error, onOpenPlan, onCreate, onChanged,
}: {
  me: Me | null;
  ent: ContentEngineEntitlement | null;
  plans: ContentPlan[];
  error: string | null;
  onOpenPlan: (id: number) => void;
  onCreate: () => void;
  onChanged: () => void;
}) {
  if (error) return <div className="ce-error">{error}</div>;
  if (!ent) return null;

  if (!ent.hasAccess) {
    return (
      <div className="ce-empty">
        <div className="ce-empty__icon">🗓️</div>
        <h2 className="ce-empty__title">Plan a month of content in one pass</h2>
        <p className="ce-empty__sub">
          Describe your brand once. Content Engine writes a full calendar — hooks, captions,
          CTAs and shot direction — then sends any slot straight to the AI studio.
        </p>

        <div style={{ display: "grid", gap: 8, maxWidth: 400, margin: "20px auto 22px", textAlign: "left" }}>
          {[
            ["📅", "A full calendar generated day by day"],
            ["🎯", "Instagram, TikTok, YouTube and X, each with its own version"],
            ["♻️", "Regenerate any piece that doesn't land"],
            ["⚡", "Send any slot to AI voice, image or video"],
          ].map(([icon, text]) => (
            <div
              key={text}
              style={{
                display: "flex", alignItems: "center", gap: 11,
                padding: "10px 14px", borderRadius: 11,
                background: "#fff", border: "1px solid var(--border)",
                fontSize: 12.8, color: "#3a3a5c", lineHeight: 1.45,
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>{text}
            </div>
          ))}
        </div>

        <a className="ce-btn ce-btn--primary" href="/pricing?src=engine_lock">
          Unlock Content Engine →
        </a>
        <p style={{ fontSize: 11.5, color: "#a0a0c0", marginTop: 11 }}>
          Included with Creator Lite (25 planning days), Creator Spark (60) and
          Creator Odyssey (90) — from ₹799/mo.
        </p>
      </div>
    );
  }

  const canCreate =
    (ent.contentDaysRemaining < 0 || ent.contentDaysRemaining > 0) &&
    (ent.maxActivePlans < 0 || ent.activePlansUsed < ent.maxActivePlans);

    /* Which limit is blocking? Backend remains source of truth — we only read ent.* */
    const outOfDays  = ent.contentDaysRemaining === 0;
    const outOfSlots = ent.maxActivePlans >= 0 && ent.activePlansUsed >= ent.maxActivePlans;
    const lowOnDays  =
      ent.contentDaysRemaining > 0 && ent.contentDaysAllowed > 0 &&
      ent.contentDaysRemaining <= Math.max(5, Math.round(ent.contentDaysAllowed * 0.2));    

  return (
    <div className="ce-hub">
      <EntitlementBar ent={ent} planLabel={me?.role} />

      {(outOfDays || outOfSlots || lowOnDays) && (
        <div className={`ce-limit ${outOfDays || outOfSlots ? "is-blocked" : "is-low"}`}>
          <span className="ce-limit__ico">{outOfDays || outOfSlots ? "🔒" : "⚡"}</span>
          <div className="ce-limit__txt">
            {outOfDays && (
              <>
                <strong>Your planning days are used up.</strong>
                <span>
                  You've planned all {ent.contentDaysAllowed} days for this billing period.
                  They reset on{" "}
                  {ent.billingCycleEnd
                    ? new Date(ent.billingCycleEnd).toLocaleDateString(undefined, { day: "numeric", month: "short" })
                    : "your next renewal"}
                  . Upgrade to keep planning now.
                </span>
              </>
            )}
            {!outOfDays && outOfSlots && (
              <>
                <strong>
                  You're using all {ent.maxActivePlans} active plan
                  {ent.maxActivePlans === 1 ? "" : "s"}.
                </strong>
                <span>
                  Archive a plan below to free a slot — you keep everything in it — or upgrade
                  for more plans at once. You still have {ent.contentDaysRemaining} planning days left.
                </span>
              </>
            )}
            {!outOfDays && !outOfSlots && lowOnDays && (
              <>
                <strong>
                  {ent.contentDaysRemaining} planning day
                  {ent.contentDaysRemaining === 1 ? "" : "s"} left.
                </strong>
                <span>
                  That's {ent.contentDaysUsed} of {ent.contentDaysAllowed} used this period.
                </span>
              </>
            )}
          </div>
          {(outOfDays || outOfSlots) && (
            
            <a  className="ce-btn ce-btn--primary ce-btn--sm ce-limit__cta"
              href="/pricing?src=engine_limit"
              onClick={() => { try { (window as any).gtag?.("event", "content_engine_upgrade_click", { reason: outOfDays ? "days" : "slots" }); } catch {} }}
            >
              See plans →
            </a>
          )}
        </div>
      )}      

      <div className="ce-hub__head">
        <div>
          <h1 className="ce-hub__title">Content Engine</h1>
          <p className="ce-hub__sub">
            Plan, organise and create your content across every platform.
          </p>
        </div>
        <button className="ce-btn ce-btn--primary" onClick={onCreate} disabled={!canCreate} title={canCreate ? "" : outOfDays ? "No planning days left this period" : "Archive a plan to free a slot"}>
          <FiPlus size={15} /> Create new plan
        </button>
      </div>

      {plans.length === 0 ? (
        <div className="ce-empty ce-empty--inset">
          <div className="ce-empty__icon">✨</div>
          <h2 className="ce-empty__title">Build your next content cycle</h2>
          <p className="ce-empty__sub">Generate a full multi-platform plan with AI, or start from a blank calendar.</p>
          <button className="ce-btn ce-btn--primary" onClick={onCreate} disabled={!canCreate}>
            <FiPlus size={15} /> Create new plan
          </button>
        </div>
      ) : (
        <div className="ce-plan-grid">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} onOpen={() => onOpenPlan(p.id)} onChanged={onChanged} />
          ))}
        </div>
      )}
    </div>
  );
}

export function EntitlementBar({ ent, planLabel }: { ent: ContentEngineEntitlement; planLabel?: string }) {
  const unl = (n: number) => (n < 0 ? "∞" : String(n));
  const daysPct = ent.contentDaysAllowed > 0
    ? Math.min(100, Math.round((ent.contentDaysUsed / ent.contentDaysAllowed) * 100))
    : 0;
  return (
    <div className="ce-ent">
      <div className="ce-ent__stat">
        <div className="ce-ent__label" style={{ display: "flex", alignItems: "center", gap: 5 }}>
          Planning days <Tip id="cePlanningDays" />
        </div>
        <div className="ce-ent__value">
          {unl(ent.contentDaysRemaining)}<span className="ce-ent__of"> / {unl(ent.contentDaysAllowed)} left</span>
        </div>
        {ent.contentDaysAllowed > 0 && (
          <div className="ce-ent__meter"><span style={{ width: `${daysPct}%` }} /></div>
        )}
      </div>
      <div className="ce-ent__stat">
        <div className="ce-ent__label" style={{ display: "flex", alignItems: "center", gap: 5 }}>
          Active plans <Tip id="ceActivePlans" />
        </div>
        <div className="ce-ent__value">{ent.activePlansUsed}<span className="ce-ent__of"> / {unl(ent.maxActivePlans)}</span></div>
      </div>
      <div className="ce-ent__stat">
        <div className="ce-ent__label" style={{ display: "flex", alignItems: "center", gap: 5 }}>
          Platforms / plan <Tip id="cePlatforms" />
        </div>
        <div className="ce-ent__value">{unl(ent.maxPlatforms)}</div>
      </div>
      <div className="ce-ent__stat">
        <div className="ce-ent__label" style={{ display: "flex", alignItems: "center", gap: 5 }}>
          Regenerations today <Tip id="ceRegens" />
        </div>
        <div className="ce-ent__value">{unl(ent.regenerationsRemainingToday)}<span className="ce-ent__of"> / {unl(ent.regenerationLimitPerDay)} left</span></div>
      </div>
      <div className="ce-ent__plan">{planLabel || ent.subscriptionPlan}</div>
    </div>
  );
}

function PlanCard({ plan, onOpen, onChanged }: { plan: ContentPlan; onOpen: () => void; onChanged: () => void; }) {
  const [busy, setBusy] = useState(false);
  const ui = useCeUi();

  const archive = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setBusy(true);
    try { await contentEngineApi.archivePlan(plan.id); onChanged(); ui.toast("Plan archived.", "success"); }
    catch (err) { ui.toast(err instanceof ContentEngineError ? err.message : "Failed to archive.", "error"); }
    finally { setBusy(false); }
  };
  const del = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ok = await ui.confirm({
      title: `Delete “${plan.title}”?`,
      message: "This permanently removes the whole plan. This cannot be undone.",
      details: [`${plan.durationDays} day${plan.durationDays === 1 ? "" : "s"} of planning`, "All content pieces, versions & uploaded files"],
      confirmLabel: "Delete plan",
      destructive: true,
    });
    if (!ok) return;
    setBusy(true);
    try { await contentEngineApi.deletePlan(plan.id); onChanged(); ui.toast("Plan deleted.", "success"); }
    catch (err) { ui.toast(err instanceof ContentEngineError ? err.message : "Failed to delete.", "error"); setBusy(false); }
  };

  return (
    <div className="ce-plan-card" onClick={onOpen} role="button" tabIndex={0}
         onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}>
      <div className="ce-plan-card__top">
        <span className={`ce-plan-badge ce-plan-badge--${plan.status.toLowerCase()}`}>{plan.status}</span>
        <div className="ce-plan-card__actions">
          {plan.status === "ACTIVE" && (
            <button className="ce-icon-btn" title="Archive" onClick={archive} disabled={busy}><FiArchive size={14} /></button>
          )}
          <button className="ce-icon-btn ce-icon-btn--danger" title="Delete" onClick={del} disabled={busy}><FiTrash2 size={14} /></button>
        </div>
      </div>
      <h3 className="ce-plan-card__title">{plan.title}</h3>
      <div className="ce-plan-card__dates">{plan.startDate} → {plan.endDate} · {plan.durationDays} days</div>
      <div className="ce-plan-card__platforms">
        {plan.platforms.map((p) => (
          <span key={p} className="ce-chip" title={PLATFORM_META[p].label}>{PLATFORM_META[p].emoji} {PLATFORM_META[p].label}</span>
        ))}
      </div>
    </div>
  );
}
