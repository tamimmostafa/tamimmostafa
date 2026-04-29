import { useEffect, useState } from "react";

/**
 * Client-side deterrents against casual inspection.
 * NOTE: This cannot truly hide HTML — anyone can use view-source:, disable JS,
 * or use curl. It only blocks casual users.
 */
export function AntiInspect() {
  const [devtoolsOpen, setDevtoolsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Block right-click
    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    // Block common inspector shortcuts
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
        (e.metaKey && e.altKey && (k === "i" || k === "j" || k === "c")) ||
        (e.ctrlKey && k === "u") ||
        (e.metaKey && e.altKey && k === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);

    // DevTools open detection via window size diff
    const threshold = 160;
    let raf = 0;
    const check = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      const open = widthDiff > threshold || heightDiff > threshold;
      setDevtoolsOpen(open);
      raf = window.setTimeout(check, 1000) as unknown as number;
    };
    check();

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(raf);
    };
  }, []);

  if (!devtoolsOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background p-8 text-center">
      <div className="max-w-md">
        <h1 className="font-display text-3xl font-bold text-gradient">Nope.</h1>
        <p className="mt-3 text-sm text-muted-foreground font-mono">
          Developer tools detected. Please close them to continue.
        </p>
      </div>
    </div>
  );
}
