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
        <h2 className="ce-empty__title">Content Engine is a Creator feature</h2>
        <p className="ce-empty__sub">
          Plan and AI-generate a full content calendar across every platform. Available on Creator
          Lite, Creator Spark, and Creator Odyssey.
        </p>
        <a className="ce-btn ce-btn--primary" href="/pricing">View plans →</a>
      </div>
    );
  }

  const canCreate =
    (ent.contentDaysRemaining < 0 || ent.contentDaysRemaining > 0) &&
    (ent.maxActivePlans < 0 || ent.activePlansUsed < ent.maxActivePlans);

  return (
    <div className="ce-hub">
      <EntitlementBar ent={ent} planLabel={me?.role} />

      <div className="ce-hub__head">
        <h1 className="ce-hub__title">Your content plans</h1>
        <button className="ce-btn ce-btn--primary" onClick={onCreate} disabled={!canCreate} title={canCreate ? "" : "No planning days or active-plan slots left"}>
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
        <div className="ce-ent__label">Active plans</div>
        <div className="ce-ent__value">{ent.activePlansUsed}<span className="ce-ent__of"> / {unl(ent.maxActivePlans)}</span></div>
      </div>
      <div className="ce-ent__stat">
        <div className="ce-ent__label">Platforms / plan</div>
        <div className="ce-ent__value">{unl(ent.maxPlatforms)}</div>
      </div>
      <div className="ce-ent__stat">
        <div className="ce-ent__label">Regenerations today</div>
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
