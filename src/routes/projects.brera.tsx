import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import breraDiagram from "@/assets/brera_diagram.png";
import breraEngine from "@/assets/brera_engine.png";
import turboBrera from "@/assets/turbo_brera.png";

export const Route = createFileRoute("/projects/brera")({
  head: () => ({
    meta: [
      { title: "Alfa Romeo Brera — Sleeper Build · Tamim Mostafa" },
      { name: "description", content: "Alfa Romeo Brera 1750 TBI sleeper build — Stage 2+ targeting 320–360 hp." },
      { property: "og:title", content: "Alfa Romeo Brera — Sleeper Build" },
      { property: "og:description", content: "1750 TBI · Stage 2+ · 320–360 hp" },
    ],
  }),
  component: BreraPage,
});

function BreraPage() {
  return (
    <PageTransition>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={16} /> All projects
      </Link>

      <SectionHeader
        kicker="Future plan · Car Tuning"
        title="Alfa Romeo Brera — Sleeper Build."
        sub="1750 TBI · Stage 2+ · 320–360 hp"
      />

      <div className="grid md:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            A future build I'm planning from now: an <span className="text-primary">Alfa Romeo Brera</span> on
            the 1750 TBI, targeted at <span className="text-primary">Stage 2+ (320–360 hp)</span>. Custom ECU map,
            upgraded intake/exhaust path, reinforced clutch — innocent on the outside, properly mean once the
            throttle opens.
          </p>
          <p>
            Still on paper today, but the spec is already locked in my head. The Brera is the perfect canvas: a
            grand tourer body that hides what's actually underneath. Stock it's a sharp Italian coupé. Tuned
            properly, it's a sleeper that will surprise people who think they know what they're looking at.
          </p>
          <p>
            On the hardware side: upgraded intercooler, larger turbo inlet, 3" downpipe and decat, uprated fuel
            pump, and a stronger clutch + LSD to actually put the power down. On the software side: a custom map
            built around the new hardware — boost, fueling, ignition, and torque limiters all rewritten from
            scratch rather than slapped on top of the stock map.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-3"
        >
          {[
            { l: "Platform", v: "Alfa Romeo Brera" },
            { l: "Engine", v: "1750 TBI" },
            { l: "Target", v: "320–360 hp · Stage 2+" },
            { l: "Status", v: "Planning" },
          ].map((row) => (
            <div key={row.l} className="flex justify-between p-4 rounded-xl border border-border bg-surface/40">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{row.l}</span>
              <span className="font-medium">{row.v}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <motion.figure
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <img
            src={breraDiagram}
            alt="Alfa Romeo Brera engine and tuning diagram"
            className="w-full rounded-2xl border border-border shadow-2xl"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm font-mono text-muted-foreground text-center">
            The build plan — laid out
          </figcaption>
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={breraEngine}
            alt="Alfa Romeo Brera 1750 TBI engine"
            className="w-full rounded-2xl border border-border shadow-2xl"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm font-mono text-muted-foreground text-center">
            The 1750 TBI — the heart of it
          </figcaption>
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0, y: 30, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={turboBrera}
            alt="Alfa Romeo Brera turbo upgrade"
            className="w-full rounded-2xl border border-border shadow-2xl"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm font-mono text-muted-foreground text-center">
            Turbo upgrade — where the real numbers come from
          </figcaption>
        </motion.figure>
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
