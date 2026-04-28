import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter" },
      { name: "description", content: "Embedded systems engineer, security researcher, and amateur car mechanic." },
      { property: "og:title", content: "About — Alex Carter" },
      { property: "og:description", content: "I build firmware, break protocols, and rebuild engines on weekends." },
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
        sub="Embedded systems engineer and offensive security researcher. I split my time between firmware, exploits, and the engine bay."
      />

      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            I started by taking things apart — radios, hard drives, my parents' first car.
            I never really stopped. Today I design embedded firmware for ARM Cortex-M and
            RISC-V targets, and audit the same kind of devices for vulnerabilities.
          </p>
          <p>
            My favourite work lives at the <span className="text-primary">edge of physical and digital</span> —
            CAN bus fuzzing, glitch attacks on secure elements, custom OBD-II tooling, and
            the occasional engine swap that teaches me more about systems than any datasheet.
          </p>
          <p>
            When I'm not at the bench or in front of a disassembler, I'm under a hood with a
            torque wrench, or at a CTF chasing a flag at 3 AM.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-4"
        >
          {[
            { l: "Based in", v: "Berlin, DE" },
            { l: "Working since", v: "2017" },
            { l: "Focus", v: "Embedded · Security · Auto" },
            { l: "Currently", v: "Firmware audits + CTF team captain" },
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
          "If you can't <span className="italic text-gradient">break it</span>, you don't really understand it."
        </blockquote>
      </motion.div>
    </PageTransition>
  );
}
