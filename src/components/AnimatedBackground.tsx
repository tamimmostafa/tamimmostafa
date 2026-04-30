import { motion, useReducedMotion } from "framer-motion";

/**
 * Global animated background — aurora blobs, drifting conic gradient,
 * scanlines & vignette. Sits behind everything (z=-10), pointer-events:none.
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Drifting conic gradient — slow rotation */}
      <motion.div
        className="absolute -inset-[40%] opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, oklch(0.72 0.30 350 / 0.35), transparent 25%, oklch(0.85 0.18 200 / 0.30) 50%, transparent 75%, oklch(0.72 0.30 350 / 0.35))",
          filter: "blur(80px)",
        }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Aurora blob — pink */}
      <motion.div
        className="absolute h-[60vmax] w-[60vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.30 350 / 0.45), transparent 65%)",
          filter: "blur(60px)",
          top: "-20%",
          left: "-15%",
        }}
        animate={
          reduce
            ? undefined
            : { x: ["0%", "20%", "-10%", "0%"], y: ["0%", "15%", "-8%", "0%"] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora blob — cyan */}
      <motion.div
        className="absolute h-[55vmax] w-[55vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 200 / 0.40), transparent 65%)",
          filter: "blur(60px)",
          bottom: "-20%",
          right: "-15%",
        }}
        animate={
          reduce
            ? undefined
            : { x: ["0%", "-15%", "10%", "0%"], y: ["0%", "-12%", "6%", "0%"] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora blob — magenta center */}
      <motion.div
        className="absolute h-[40vmax] w-[40vmax] rounded-full left-1/2 top-1/2"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.28 320 / 0.30), transparent 70%)",
          filter: "blur(80px)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={reduce ? undefined : { scale: [1, 1.25, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid shimmer */}
      <div
        className="absolute inset-0 opacity-[0.08] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.72 0.30 350) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.18 200) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(0.85 0.18 200) 0 1px, transparent 1px 3px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.04 0 0 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
