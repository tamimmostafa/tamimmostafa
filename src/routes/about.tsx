import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter" },
      { name: "description", content: "About Alex Carter: background, philosophy, and approach to design and engineering." },
      { property: "og:title", content: "About — Alex Carter" },
      { property: "og:description", content: "Designer & developer who builds at the seam of intent and execution." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="About"
        title="Hello, I'm Alex."
        sub="A designer-engineer based in Lisbon. I help teams turn ambiguous ideas into products people actually use."
      />

      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            For the past decade I've worked across early-stage startups and design studios,
            shipping software that ranges from financial dashboards to generative art tools.
          </p>
          <p>
            I care most about the <span className="text-primary">space between disciplines</span> — the
            handoff that doesn't exist, the edge case that wasn't drawn, the animation that
            communicates trust. That's where I do my best work.
          </p>
          <p>
            Outside of client work I write essays on craft, mentor at design schools, and spend
            unreasonable amounts of time in the bouldering gym.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-4"
        >
          {[
            { l: "Based in", v: "Lisbon, PT" },
            { l: "Working since", v: "2014" },
            { l: "Languages", v: "EN · PT · ES" },
            { l: "Currently", v: "Independent + advising 2 startups" },
          ].map((row) => (
            <div key={row.l} className="flex justify-between p-4 rounded-xl border border-border bg-surface/40">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{row.l}</span>
              <span className="font-medium">{row.v}</span>
            </div>
          ))}
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 p-12 rounded-3xl border border-border bg-gradient-to-br from-surface to-background relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="font-mono text-xs tracking-widest uppercase text-primary mb-6">Philosophy</div>
        <blockquote className="text-3xl md:text-5xl font-display font-light leading-tight max-w-4xl">
          "Good software disappears. Great software <span className="italic text-gradient">earns its presence</span>."
        </blockquote>
      </motion.div>
    </PageTransition>
  );
}
