import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Selected work across embedded systems, cybersecurity research, and automotive builds." },
      { property: "og:title", content: "Projects — Alex Carter" },
      { property: "og:description", content: "Firmware, exploits, and engine builds." },
    ],
  }),
  component: Projects,
});

const projects = [
  { year: "2026", name: "CANary", role: "Firmware + Hardware", desc: "Open-source CAN bus sniffer and fuzzer built around an RP2040. Catches manufacturer-specific UDS handshakes in real time.", tag: "Automotive", color: "from-primary/30 to-transparent" },
  { year: "2025", name: "GlitchKit v2", role: "Hardware Security", desc: "Voltage glitching rig for bypassing secure boot on common automotive MCUs. Used in 3 published vulnerability disclosures.", tag: "Hardware Sec", color: "from-accent/30 to-transparent" },
  { year: "2025", name: "ECU Reflash Toolkit", role: "Solo Build", desc: "Reverse-engineered a stock ECU map and built a Python tool to reflash it safely with custom fuel/ignition tables.", tag: "Tuning", color: "from-primary/30 to-accent/30" },
  { year: "2024", name: "CVE-2024-XXXX", role: "Security Research", desc: "Stack overflow in a popular IoT camera firmware. Coordinated disclosure, patched across 4 vendors.", tag: "CVE", color: "from-accent/40 to-primary/20" },
  { year: "2024", name: "PitLane Telemetry", role: "Embedded + Web", desc: "Real-time lap and engine telemetry over LoRa for an amateur racing team. STM32 + custom dashboards.", tag: "Embedded", color: "from-primary/40 to-transparent" },
  { year: "2023", name: "E30 Restomod", role: "Personal Build", desc: "Full nut-and-bolt restoration of a 1989 BMW E30 — engine rebuild, custom wiring harness, modern infotainment.", tag: "Garage", color: "from-accent/20 to-primary/30" },
];

function Projects() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Selected work"
        title="Projects."
        sub="Six projects from the bench, the lab, and the garage."
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
