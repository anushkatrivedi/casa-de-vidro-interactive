"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { assetPath, type Plate } from "@/lib/site";

type LightboxState = {
  open: (plates: Plate[], startIndex: number) => void;
};

const LightboxContext = createContext<LightboxState | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "prev" ? (
        <path d="M15 5 8 12l7 7" />
      ) : (
        <path d="m9 5 7 7-7 7" />
      )}
    </svg>
  );
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{
    plates: Plate[];
    index: number;
  } | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  const open = useCallback((plates: Plate[], startIndex: number) => {
    prevFocusRef.current = document.activeElement as HTMLElement | null;
    setState({ plates, index: startIndex });
  }, []);

  const close = useCallback(() => {
    setState(null);
    prevFocusRef.current?.focus();
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setState((s) => {
        if (!s) return s;
        const len = s.plates.length;
        return { ...s, index: (s.index + dir + len) % len };
      });
    },
    []
  );

  useEffect(() => {
    if (!state) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, close, go]);

  const current = state?.plates[state.index];

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {state && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.label}, image ${state.index + 1} of ${state.plates.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-ink/[0.94]"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <p className="archival text-sand/70">
              {current.label}
              <span className="ml-3 text-sand/40">
                {state.index + 1} / {state.plates.length}
              </span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="grid h-11 w-11 place-items-center rounded-full border border-sand/25 text-sand transition hover:border-sand/60 hover:bg-sand/10"
              >
                <Arrow dir="prev" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="grid h-11 w-11 place-items-center rounded-full border border-sand/25 text-sand transition hover:border-sand/60 hover:bg-sand/10"
              >
                <Arrow dir="next" />
              </button>
              <button
                type="button"
                ref={closeButtonRef}
                onClick={close}
                aria-label="Close"
                className="ml-1 grid h-11 w-11 place-items-center rounded-full border border-sand/25 text-sand transition hover:border-sand/60 hover:bg-sand/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 sm:px-12">
            <figure
              className="relative max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(current.src)}
                alt={current.alt}
                className="mx-auto max-h-[76vh] w-auto max-w-full object-contain shadow-[0_30px_90px_oklch(0.1_0.02_40_/0.5)]"
              />
              <figcaption className="mt-4 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-1 text-center">
                <span className="text-sand/85">{current.caption}</span>
                <span className="archival text-sand/45">{current.label}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
