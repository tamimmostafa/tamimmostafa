import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Selected projects spanning product design, engineering, and creative experiments." },
      { property: "og:title", content: "Projects — Alex Carter" },
      { property: "og:description", content: "Selected work in design engineering." },
    ],
  }),
  component: Projects,
});

const projects = [
  { year: "2026", name: "Halcyon", role: "Design + Frontend", desc: "An async-first project tool for distributed engineering teams. Reimagined ticketing around momentum, not status.", tag: "Product", color: "from-primary/30 to-transparent" },
  { year: "2025", name: "Stratus Bank", role: "Design System Lead", desc: "Built the multi-brand design system powering 14 financial products across 6 markets.", tag: "Design System", color: "from-accent/30 to-transparent" },
  { year: "2025", name: "Field Notes OS", role: "Solo Build", desc: "Notetaking app with a generative knowledge graph. Open source, 8k+ stars.", tag: "OSS", color: "from-primary/30 to-accent/30" },
  { year: "2024", name: "Lumen Studio", role: "Creative Director", desc: "Brand & site for a generative typography studio. Awwwards SOTD.", tag: "Brand", color: "from-accent/40 to-primary/20" },
  { year: "2024", name: "Verge AI", role: "Product Design", desc: "Conversational interface for legal contract review. Cut review time 73%.", tag: "AI", color: "from-primary/40 to-transparent" },
  { year: "2023", name: "Atlas Logistics", role: "Frontend Architecture", desc: "Replaced a 12-year-old dispatch interface with a real-time React app.", tag: "Enterprise", color: "from-accent/20 to-primary/30" },
];

function Projects() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Selected work"
        title="Projects."
        sub="Six projects from the last three years. I lead end-to-end — research, design, build, ship."
      />

      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
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
