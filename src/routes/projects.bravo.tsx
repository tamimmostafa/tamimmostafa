import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Wrench, Zap, Gauge } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/projects/bravo")({
  head: () => ({
    meta: [
      { title: "Fiat Bravo '09 — 1.4 T-Jet Build · Tamim Mostafa" },
      { name: "description", content: "Fiat Bravo '09 1.4 T-Jet — Stage 2+ family build, 280–300 hp." },
      { property: "og:title", content: "Fiat Bravo '09 — 1.4 T-Jet Build" },
      { property: "og:description", content: "1.4 T-Jet · Stage 2+ · 280–300 hp" },
    ],
  }),
  component: BravoPage,
});

function BravoPage() {
  return (
    <PageTransition>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={16} /> All projects
      </Link>

      <SectionHeader
        kicker="2012 — now · Car Tuning · Family Build"
        title="Fiat Bravo '09 — 1.4 T-Jet Build."
        sub="Started by my father. Continued by me."
      />

      <div className="grid md:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            A 1.4 T-Jet pushed to <span className="text-primary">Stage 2+ (280–300 hp)</span> through staged tuning,
            hardware upgrades, and a lot of road miles. It's the platform that taught me ECU mapping and how engines
            actually behave under load.
          </p>
          <p>
            My father started it as a tuning hobby and somehow kept everything balanced at the same time: full-time
            work, family life, the family car for us, and a high-performance street machine — all in the same chassis.
            I was ambitious to be like him since I was a kid. So when it came my turn to put my hands on it, I went
            online, learned the basics, started playing with fresh maps and software, and built real knowledge from
            scratch.
          </p>
          <p>
            Today the Bravo is more than a build — it's a record of two generations of the same obsession. Every
            change to the map, every bolt-on, every dyno session is a step in a story that started before I could
            drive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-3"
        >
          {[
            { l: "Platform", v: "Fiat Bravo '09" },
            { l: "Engine", v: "1.4 T-Jet" },
            { l: "Output", v: "280–300 hp · Stage 2+" },
            { l: "Status", v: "Active · 2012 — now" },
          ].map((row) => (
            <div key={row.l} className="flex justify-between p-4 rounded-xl border border-border bg-surface/40">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{row.l}</span>
              <span className="font-medium">{row.v}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {[
          { i: Wrench, t: "Hardware", d: "Upgraded turbo, intercooler, exhaust, fueling, and clutch — built to actually live with 300 hp on the road, not just hit a number on a dyno." },
          { i: Zap, t: "ECU Mapping", d: "Custom maps built per stage. Boost, fueling, ignition, and torque limiters tuned around the hardware — not just a generic file flashed in." },
          { i: Gauge, t: "Daily Driveable", d: "Still a family car. Smooth on the cold start, calm in traffic, and ready when the road opens up. That's the part most people skip." },
        ].map((c) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur"
          >
            <c.i className="text-primary mb-4" size={26} strokeWidth={1.5} />
            <h3 className="text-lg font-display font-semibold mb-2">{c.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/40 backdrop-blur hover:border-primary/50 hover:glow-sm transition-all font-mono text-sm"
        >
          <ArrowLeft size={16} /> Back to all projects
        </Link>
      </div>
    </PageTransition>
  );
}
