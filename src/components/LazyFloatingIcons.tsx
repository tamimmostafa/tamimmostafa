import { lazy, Suspense, useEffect, useState } from "react";

const FloatingIcons = lazy(() =>
  import("./FloatingIcons").then((m) => ({ default: m.FloatingIcons })),
);

type Variant =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "hobbies"
  | "contact";

/**
 * Defers loading of the heavy decorative icon layer until the browser is idle,
 * skips it on small screens (icons are hidden on mobile anyway), and respects
 * users who prefer reduced motion.
 */
export function LazyFloatingIcons({ variant = "home" }: { variant?: Variant }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion users.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setShouldLoad(true), { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setShouldLoad(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  if (!shouldLoad) return null;
  return (
    <Suspense fallback={null}>
      <FloatingIcons variant={variant} />
    </Suspense>
  );
}
