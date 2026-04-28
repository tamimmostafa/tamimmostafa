import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Alex Carter" },
      { name: "description", content: "Career timeline: roles, companies, and milestones." },
      { property: "og:title", content: "Experience — Alex Carter" },
      { property: "og:description", content: "A decade of design engineering work." },
    ],
  }),
  component: Experience,
});

const items = [
  { y: "2024 — now", role: "Independent Security Researcher", co: "Self-employed", desc: "Firmware audits and red-team engagements for IoT and automotive clients across the EU." },
  { y: "2021 — 2024", role: "Senior Embedded Engineer", co: "Helix Robotics", desc: "Led firmware for a Cortex-M7 motor controller shipped in 40k+ units. Owned the secure boot and OTA stack." },
  { y: "2019 — 2021", role: "Offensive Security Engineer", co: "Vantage Labs", desc: "Reverse-engineered automotive infotainment and telematics units. Authored 6 published CVEs." },
  { y: "2018 — 2019", role: "Embedded Software Intern", co: "Bosch Mobility", desc: "AUTOSAR component work on engine control modules. First taste of CAN bus and the joy of MISRA C." },
  { y: "2017 — now", role: "Garage Mechanic (after-hours)", co: "Self-taught", desc: "Engine rebuilds, suspension work, and electrical diagnostics on classic German and Japanese cars." },
];

function Experience() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Experience"
        title="The path so far."
        sub="A decade of design engineering — across studios, startups, and independent practice."
      />

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.co}
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
