import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alex Carter" },
      { name: "description", content: "Embedded systems, cybersecurity, and automotive engineering toolkit." },
      { property: "og:title", content: "Skills — Alex Carter" },
      { property: "og:description", content: "Firmware, exploits, and engines." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Embedded Systems",
    items: [
      { n: "C / C++ (bare-metal)", l: 95 },
      { n: "ARM Cortex-M / RISC-V", l: 90 },
      { n: "RTOS (FreeRTOS, Zephyr)", l: 85 },
      { n: "PCB design (KiCad)", l: 78 },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      { n: "Reverse Engineering (Ghidra/IDA)", l: 92 },
      { n: "Binary Exploitation", l: 88 },
      { n: "Hardware / Side-Channel Attacks", l: 80 },
      { n: "Network & Protocol Fuzzing", l: 85 },
    ],
  },
  {
    title: "Automotive",
    items: [
      { n: "Engine Rebuilds & Diagnostics", l: 88 },
      { n: "CAN Bus & OBD-II Tooling", l: 90 },
      { n: "ECU Tuning & Reflashing", l: 75 },
      { n: "Suspension & Brakes", l: 82 },
    ],
  },
];

function Skills() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Skills"
        title="What I work with."
        sub="Soldering iron in one hand, debugger in the other, torque wrench within reach."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              0{gi + 1} / {g.title}
            </div>
            <div className="space-y-5">
              {g.items.map((it, i) => (
                <div key={it.n}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{it.n}</span>
                    <span className="font-mono text-muted-foreground">{it.l}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.l}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: gi * 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Also fluent in
        </div>
        <div className="flex flex-wrap gap-3">
          {["Python", "Rust", "Assembly (ARM/x86)", "Ghidra", "Burp Suite", "Wireshark", "JTAG/SWD", "Logic Analyzers", "Oscilloscopes", "MIG Welding", "Linux Kernel", "Yocto", "Docker", "Git"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-border bg-surface/40 text-sm font-mono hover:border-primary/50 hover:text-primary transition-colors">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
}
