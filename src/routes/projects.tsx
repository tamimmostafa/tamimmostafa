import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { PageNav } from "@/components/PageNav";

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
    year: "Future plan",
    name: "Alfa Romeo Brera — Sleeper Build",
    role: "Car Tuning · Planning",
    desc: "A future build I'm planning from now: an Alfa Romeo Brera on the 1750 TBI, targeted at Stage 2+ (320–360 hp). Custom ECU map, upgraded intake/exhaust path, reinforced clutch — innocent on the outside, properly mean once the throttle opens. Still on paper today, but the spec is already locked in my head.",
    tag: "1750 TBI · Stage 2+ (Planned)",
    url: "#",
    color: "from-primary/30 to-transparent",
  },
  {
    year: "2025 - now",
    name: "ESP32 Multi-Band Network Analyzer",
    role: "Embedded · Security",
    desc: "All-in-one ESP32 tool combining multi-band scanning, packet capture, and exploit modules. Built to learn radio + protocol attack surface hands-on, packaged as a single portable device.",
    tag: "ESP32 · Wi-Fi/BLE",
    url: "#",
    color: "from-accent/30 to-transparent",
  },
  {
    year: "2012 — now",
    name: "Fiat Bravo '09 — 1.4 T-Jet Build",
    role: "Car Tuning · Family Build",
    desc: "Started by my father, continued by me. A 1.4 T-Jet pushed to Stage 2+ (280–300 hp) through staged tuning, hardware upgrades, and lots of road miles. The platform that taught me ECU mapping and how engines actually behave under load.",
    tag: "1.4 T-Jet · Stage 2+",
    url: "#",
    color: "from-primary/30 to-accent/30",
  },
];
// ============================================================

function Projects() {
  return (
    <PageTransition>
      <LazyFloatingIcons variant="projects" />
      <SectionHeader
        kicker="Selected work"
        title="Projects."
        sub="A few things I've built — engines, embedded gear, and in the future an occasional sleeper."
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

      <PageNav current="/projects" />
    </PageTransition>
  );
}
