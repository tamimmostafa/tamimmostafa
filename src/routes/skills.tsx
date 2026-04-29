import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Tamim Mostafa" },
      { name: "description", content: "Languages, low-level systems, networks, hardware, and the security toolkit I work with daily." },
      { property: "og:title", content: "Skills — Tamim Mostafa" },
      { property: "og:description", content: "Code, protocols, and the security toolkit." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Languages & Low-Level",
    items: [
      { n: "Python", l: 92 },
      { n: "JavaScript", l: 80 },
      { n: "PHP", l: 70 },
      { n: "Binary & Hex", l: 85 },
    ],
  },
  {
    title: "Networks & Hardware",
    items: [
      { n: "Networks & Protocols", l: 85 },
      { n: "CAN bus & OBD", l: 80 },
      { n: "ECU Tuning & Mapping", l: 78 },
    ],
  },
  {
    title: "Security Toolkit",
    items: [
      { n: "Linux / Kali", l: 95 },
      { n: "Burp Suite", l: 88 },
      { n: "Wireshark", l: 85 },
      { n: "Nmap", l: 88 },
      { n: "Hydra", l: 80 },
    ],
  },
];

function Skills() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Skills"
        title="What I work with."
        sub="Keyboard in front of me, soldering iron close, OBD-II cable in the bag."
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
          Fluent in
        </div>
        <div className="flex flex-wrap gap-3">
          {["Python", "Linux / Kali", "Burp Suite", "Wireshark"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-sm font-mono text-primary">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
}
