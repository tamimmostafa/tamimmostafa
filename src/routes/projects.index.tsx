import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { PageNav } from "@/components/PageNav";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Tamim Mostafa" },
      { name: "description", content: "Selected projects across cybersecurity, embedded systems, and automotive tuning." },
      { property: "og:title", content: "Projects — Tamim Mostafa" },
      { property: "og:description", content: "Selected work." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    to: "/projects/brera" as const,
    name: "Alfa Romeo Brera — Sleeper Build",
    role: "Car Tuning · Planning",
    tag: "1750 TBI · Stage 2+",
    color: "from-primary/30 to-transparent",
  },
  {
    to: "/projects/esp32" as const,
    name: "ESP32 Multi-Band Network Analyzer",
    role: "Embedded · Security",
    tag: "ESP32 · Wi-Fi/BLE",
    color: "from-accent/30 to-transparent",
  },
  {
    to: "/projects/bravo" as const,
    name: "Fiat Bravo '09 — 1.4 T-Jet Build",
    role: "Car Tuning · Family Build",
    tag: "1.4 T-Jet · Stage 2+",
    color: "from-primary/30 to-accent/30",
  },
];

function Projects() {
  return (
    <PageTransition>
      <LazyFloatingIcons variant="projects" />
      <SectionHeader
        kicker="Selected work"
        title="Projects."
        sub="Click any project to see the full story."
      />

      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Link
              to={p.to}
              className="group block relative overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur p-8 hover:border-primary/50 transition-all hover:translate-x-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{p.name}</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mt-2">{p.role}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full border border-border text-xs font-mono">{p.tag}</span>
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">click for more</span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <PageNav current="/projects" />
    </PageTransition>
  );
}
