import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FlaskConical, Bike, Gauge, Dumbbell } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { PageNav } from "@/components/PageNav";

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
    t: "Chemistry & Pharmaceuticals",
    d: "My father is one of the very few people in Egypt running Research & Development at his level in the pharmaceutical industry. Growing up around that, he taught me a real slice of what he knows — compounds, reactions, how molecules actually behave, and how a drug ends up doing what it does in the body. I'm not in a lab every day, but the curiosity stuck.",
  },
  {
    i: Bike,
    t: "Bikes",
    d: "I started loving bikes alongside cars only since last year — and the world of motorbikes is genuinely magical to me. The mechanics, the riding, the community. This kind of vehicle has its own lifestyle, and I'm completely sold on it.",
  },
  {
    i: Gauge,
    t: "Car Tuning",
    d: "My dad started a 2009 Fiat Bravo project as a tuning hobby and somehow kept balancing everything: full-time work, his hobbies, a family car for us, and a high-performance street machine — all in the same car. I was ambitious to be like him since I was a kid. I started my own path online, learning the basics of tuning, playing with fresh maps, software, and slowly building real knowledge from scratch.",
  },
  {
    i: Dumbbell,
    t: "Gym & Fitness",
    d: "At 12 I was a 75 kg fatty — huge for that age. I started cutting weight in my first 2 years gradually with light gym, cardio, and swimming. By 14 I had an amazing body at the same weight, but full of muscle. Then I cut 2 years out for hard study to get into high school, and once that was done I went straight back to the gym — and I've kept at it since.",
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

      <PageNav current="/hobbies" />
    </PageTransition>
  );
}
