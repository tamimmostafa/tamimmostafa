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

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
