"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { FiX, FiAlertTriangle, FiCheckCircle, FiInfo } from "react-icons/fi";

/* ============================================================
   Content Engine shared UI: toasts + a promise-based confirm
   modal. Replaces every native alert()/confirm() so destructive
   actions can show exactly what they destroy, and errors surface
   as non-blocking toasts instead of OS dialogs.
   ============================================================ */

type ToastType = "success" | "error" | "info";
interface ToastItem { id: number; message: string; type: ToastType; }

export interface ConfirmOptions {
  title: string;
  message?: string;
  /** Concrete things that will be destroyed, e.g. "62 content pieces". */
  details?: string[];
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
}

interface CeUi {
  toast: (message: string, type?: ToastType) => void;
  confirm: (opts: ConfirmOptions) => Promise<boolean>;
}

const Ctx = createContext<CeUi | null>(null);

export function useCeUi(): CeUi {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCeUi must be used within <CeUiProvider>");
  return c;
}

let idCounter = 1;

export function CeUiProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [confirmState, setConfirmState] =
    useState<{ opts: ConfirmOptions; resolve: (v: boolean) => void } | null>(null);

  const remove = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = idCounter++;
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => remove(id), type === "error" ? 6000 : 4000);
  }, [remove]);

  const confirm = useCallback(
    (opts: ConfirmOptions) => new Promise<boolean>((resolve) => setConfirmState({ opts, resolve })),
    []
  );

  const settle = (v: boolean) => {
    confirmState?.resolve(v);
    setConfirmState(null);
  };

  return (
    <Ctx.Provider value={{ toast, confirm }}>
      {children}

      <div className="ce-toaster" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`ce-toast ce-toast--${t.type}`}>
            <span className="ce-toast__icon">
              {t.type === "success" ? <FiCheckCircle size={16} />
                : t.type === "error" ? <FiAlertTriangle size={16} />
                : <FiInfo size={16} />}
            </span>
            <span className="ce-toast__msg">{t.message}</span>
            <button className="ce-toast__close" onClick={() => remove(t.id)} aria-label="Dismiss">
              <FiX size={13} />
            </button>
          </div>
        ))}
      </div>

      {confirmState && (
        <ConfirmModal
          opts={confirmState.opts}
          onCancel={() => settle(false)}
          onConfirm={() => settle(true)}
        />
      )}
    </Ctx.Provider>
  );
}

function ConfirmModal({
  opts, onCancel, onConfirm,
}: {
  opts: ConfirmOptions;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onCancel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  const danger = opts.destructive !== false; // default to destructive styling

  return (
    <div className="ce-overlay ce-overlay--confirm" onClick={onCancel}>
      <div className="ce-modal ce-modal--confirm" onClick={(e) => e.stopPropagation()} role="alertdialog" aria-modal="true">
        <div className={`ce-confirm__icon ${danger ? "is-danger" : ""}`}>
          <FiAlertTriangle size={20} />
        </div>
        <h2 className="ce-modal__title">{opts.title}</h2>
        {opts.message && <p className="ce-confirm__msg">{opts.message}</p>}
        {opts.details && opts.details.length > 0 && (
          <ul className="ce-confirm__list">
            {opts.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
        <div className="ce-modal__actions">
          <button className="ce-btn ce-btn--ghost" onClick={onCancel}>{opts.cancelLabel || "Cancel"}</button>
          <button
            className={`ce-btn ${danger ? "ce-btn--danger" : "ce-btn--primary"}`}
            onClick={onConfirm}
            autoFocus
          >
            {opts.confirmLabel || "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
