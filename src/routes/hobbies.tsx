import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Cpu, Flag, Radio, Gauge } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Alex Carter" },
      { name: "description", content: "Wrenching, soldering, and hacking — the things I do for fun." },
      { property: "og:title", content: "Hobbies — Alex Carter" },
      { property: "og:description", content: "Garage builds, CTFs, and homebrew electronics." },
    ],
  }),
  component: Hobbies,
});

const hobbies = [
  { i: Wrench, t: "Wrenching", d: "Weekends under a hood. Currently mid-build on a turbocharged E30 daily driver." },
  { i: Flag, t: "CTF Competitions", d: "Captain of a small team. We mostly play pwn and hardware categories — winning sometimes." },
  { i: Cpu, t: "Homebrew Electronics", d: "Custom PCBs, retro computer mods, and weird MIDI controllers built from junk-bin parts." },
  { i: ShieldCheck, t: "Bug Bounties", d: "Casual hunting on IoT and automotive aftermarket gear. A few hall-of-fames, a few free t-shirts." },
  { i: Radio, t: "Ham Radio & SDR", d: "Licensed operator. Lately decoding satellite telemetry with an RTL-SDR and a coat-hanger antenna." },
  { i: Gauge, t: "Track Days", d: "Open lapping days whenever I can. Going slowly enough to learn, fast enough to scare myself." },
];

function Hobbies() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Hobbies"
        title="Off the clock."
        sub="The things I'm bad at, the things I love, and the few that overlap with work."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur overflow-hidden cursor-default"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-2xl transition-all duration-500" />
            <h.i className="text-primary mb-5" size={28} strokeWidth={1.5} />
            <h3 className="text-xl font-display font-semibold mb-2">{h.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.d}</p>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
}
