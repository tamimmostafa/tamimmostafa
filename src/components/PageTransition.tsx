import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-24 pb-24 px-6 max-w-7xl mx-auto min-h-screen"
    >
      {children}
    </motion.main>
  );
}

export function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
        — {kicker}
      </div>
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gradient">
        {title}
      </h1>
      {sub && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{sub}</p>}
    </motion.div>
  );
}
