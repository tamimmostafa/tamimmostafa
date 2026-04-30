import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FlaskConical, Bike, Gauge, Dumbbell } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Tamim Mostafa" },
      { name: "description", content: "Chemistry, bikes, car tuning, and the gym — what I do off the clock." },
      { property: "og:title", content: "Hobbies — Tamim Mostafa" },
      { property: "og:description", content: "Off-the-clock interests." },
    ],
  }),
  component: Hobbies,
});

const hobbies = [
  {
    i: FlaskConical,
    t: "Chemistry & Pharmaceutical Knowledge",
    d: "I read and tinker with chemistry and pharmaceutical concepts — understanding compounds, reactions, and how they affect the body.",
  },
  {
    i: Bike,
    t: "Bike Enthusiast",
    d: "Two wheels, real feedback. I love everything about bikes — the mechanics, the riding, and the freedom.",
  },
  {
    i: Gauge,
    t: "Car Tuning Expert",
    d: "Mapping, dyno time, and chasing the right balance of power and reliability. Cars are my favourite kind of system.",
  },
  {
    i: Dumbbell,
    t: "Gym & Fitness",
    d: "Discipline outside the keyboard. Heavy lifts, consistent routine, and the mental reset that comes with it.",
  },
];

function Hobbies() {
  return (
    <PageTransition>
      <LazyFloatingIcons variant="hobbies" />
      <SectionHeader
        kicker="Hobbies"
        title="Off the clock."
        sub="Four things I genuinely love spending time on."
      />

      <div className="grid sm:grid-cols-2 gap-6">
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
