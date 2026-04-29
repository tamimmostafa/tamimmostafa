import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Tamim Mostafa" },
      { name: "description", content: "Timeline of roles, studies, and milestones." },
      { property: "og:title", content: "Experience — Tamim Mostafa" },
      { property: "og:description", content: "The path so far." },
    ],
  }),
  component: Experience,
});

// ============================================================
// EDIT ME — fill in your 4 timeline entries below.
// ============================================================
const items = [
  { y: "20XX — now", role: "Your Role", co: "Organization", desc: "Short description of what you do/did here. Replace this text with your own." },
  { y: "20XX — 20XX", role: "Your Role", co: "Organization", desc: "Short description of what you do/did here. Replace this text with your own." },
  { y: "20XX — 20XX", role: "Your Role", co: "Organization", desc: "Short description of what you do/did here. Replace this text with your own." },
  { y: "20XX — 20XX", role: "Your Role", co: "Organization", desc: "Short description of what you do/did here. Replace this text with your own." },
];
// ============================================================

function Experience() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Experience"
        title="The path so far."
        sub="Four slots — fill them with your real timeline."
      />

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className="hidden md:block" />
              <div className="md:[direction:ltr] pl-8 md:pl-12 relative">
                <div className="absolute left-0 md:-left-[9px] top-2 h-4 w-4 rounded-full bg-primary glow-sm ring-4 ring-background" />
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{it.y}</div>
                <h3 className="text-2xl font-display font-semibold tracking-tight">{it.role}</h3>
                <div className="text-sm text-muted-foreground mb-3 font-mono">@ {it.co}</div>
                <p className="text-foreground/80 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
