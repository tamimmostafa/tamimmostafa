import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { PageNav } from "@/components/PageNav";

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
      { n: "C++", l: 75 },
      { n: "PHP", l: 68 },
      { n: "Binary / Machine Code / Hex", l: 78 },
    ],
  },
  {
    title: "Networks & Hardware",
    items: [
      { n: "Network Fundamentals", l: 94 },
      { n: "Hardware Hacking", l: 77 },
      { n: "Network Analysis", l: 85 },
      { n: "Embedded Security", l: 70 },
      { n: "Low-Level Debugging", l: 72 },
    ],
  },
  {
    title: "Technical Communication",
    items: [
      { n: "Technical Writing", l: 84 },
      { n: "Verbal Explanation", l: 89 },
      { n: "Simplification", l: 81 },
      { n: "Documentation", l: 91 },
      { n: "Knowledge Sharing", l: 79 },
    ],
  },
];

function Skills() {
  return (
    <PageTransition>
      <LazyFloatingIcons variant="skills" />
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
          Also fluent in
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Linux Systems",
            "TCP/IP",
            "PCB Design",
            "Reverse Engineering",
            "Burp Suite",
            "Metasploit Framework",
            "ECU Tuning",
            "OSINT",
          ].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-sm font-mono text-primary">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <PageNav current="/skills" />
    </PageTransition>
  );
}
