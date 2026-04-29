import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/projects")({
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

// ============================================================
// EDIT ME — fill in your 4 projects below.
// Just change the strings; layout stays the same.
// ============================================================
const projects = [
  {
    year: "20XX",
    name: "Project One",
    role: "Role / Category",
    desc: "Short description of what this project is and what you did. Replace this text with your own.",
    tag: "Tag",
    url: "#",
    color: "from-primary/30 to-transparent",
  },
  {
    year: "20XX",
    name: "Project Two",
    role: "Role / Category",
    desc: "Short description of what this project is and what you did. Replace this text with your own.",
    tag: "Tag",
    url: "#",
    color: "from-accent/30 to-transparent",
  },
  {
    year: "20XX",
    name: "Project Three",
    role: "Role / Category",
    desc: "Short description of what this project is and what you did. Replace this text with your own.",
    tag: "Tag",
    url: "#",
    color: "from-primary/30 to-accent/30",
  },
  {
    year: "20XX",
    name: "Project Four",
    role: "Role / Category",
    desc: "Short description of what this project is and what you did. Replace this text with your own.",
    tag: "Tag",
    url: "#",
    color: "from-accent/40 to-primary/20",
  },
];
// ============================================================

function Projects() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Selected work"
        title="Projects."
        sub="Four slots — fill them with your own."
      />

      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.name + i}
            href={p.url}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ x: 8 }}
            className="group block relative overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur p-8 hover:border-primary/50 transition-colors"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.year}</div>
              <div className="md:col-span-3">
                <div className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{p.name}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-primary mt-1">{p.role}</div>
              </div>
              <div className="md:col-span-6 text-muted-foreground">{p.desc}</div>
              <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-border text-xs font-mono">{p.tag}</span>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </PageTransition>
  );
}
