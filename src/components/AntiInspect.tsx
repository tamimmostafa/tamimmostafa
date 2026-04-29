import { useEffect } from "react";

/**
 * Client-side deterrents against casual inspection.
 */
export function AntiInspect() {

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

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
