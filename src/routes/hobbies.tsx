import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mountain, Camera, BookOpen, Music, Coffee, Bike } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Alex Carter" },
      { name: "description", content: "Things I do when I'm not at the keyboard." },
      { property: "og:title", content: "Hobbies — Alex Carter" },
      { property: "og:description", content: "Climbing, photography, music, and other obsessions." },
    ],
  }),
  component: Hobbies,
});

const hobbies = [
  { i: Mountain, t: "Bouldering", d: "Currently projecting V7s. The best UX research I do happens mid-route." },
  { i: Camera, t: "Film photography", d: "Shooting Portra 400 on a Pentax K1000. Low-fidelity is a feature." },
  { i: BookOpen, t: "Reading", d: "Mostly essays and design history. Currently rereading Christopher Alexander." },
  { i: Music, t: "Synth noodling", d: "An OP-1 Field and a small modular rig that mostly judges me." },
  { i: Coffee, t: "Coffee", d: "Three pour-overs deep before noon. Ethiopian naturals, please." },
  { i: Bike, t: "Cycling", d: "Long Sunday rides through the Sintra hills with no destination." },
];

function Hobbies() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Hobbies"
        title="Off the clock."
        sub="The things I'm bad at, the things I love, and the few things that overlap."
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
