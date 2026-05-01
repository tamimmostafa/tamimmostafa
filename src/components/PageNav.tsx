import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const order = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/contact", label: "Contact" },
] as const;

type Path = (typeof order)[number]["to"];

export function PageNav({ current }: { current: Path }) {
  const idx = order.findIndex((o) => o.to === current);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx < order.length - 1 ? order[idx + 1] : null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-24 pt-10 border-t border-border/60 grid grid-cols-2 gap-3 sm:gap-6"
    >
      {prev ? (
        <Link
          to={prev.to}
          className="group flex flex-col items-start gap-1 p-5 sm:p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/50 hover:glow-sm transition-all"
        >
          <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Previous
          </span>
          <span className="text-lg sm:text-2xl font-display font-semibold text-gradient">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.to}
          className="group flex flex-col items-end gap-1 p-5 sm:p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/50 hover:glow-sm transition-all text-right"
        >
          <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Next
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-lg sm:text-2xl font-display font-semibold text-gradient">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </motion.nav>
  );
}
