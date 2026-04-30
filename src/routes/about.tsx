import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { FloatingIcons } from "@/components/FloatingIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tamim Mostafa" },
      { name: "description", content: "Cybersecurity & embedded systems student from Cairo, with a passion for cars and performance tuning." },
      { property: "og:title", content: "About — Tamim Mostafa" },
      { property: "og:description", content: "I explore systems, digital and mechanical." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="About"
        title="Hello, I'm Tamim."
        sub="Cybersecurity & embedded systems student. I split my curiosity between the keyboard and the engine bay."
      />

      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            I explore systems — digital and mechanical. Whether it's a packet on the wire,
            a binary in a debugger, or a stubborn engine refusing to start, I want to know
            <span className="text-primary"> exactly how it works</span>.
          </p>
          <p>
            On the digital side I live in Linux, scripting in Python and JavaScript, breaking
            things in Burp Suite and Wireshark, and learning more every CTF I lose. On the
            mechanical side I'm obsessed with cars — tuning, ECU mapping, and the small
            details that turn a stock setup into something that feels alive.
          </p>
          <p>
            I'm still a student, and that's exactly the point. I treat every mistake as a
            shortcut to the next thing worth learning.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-4"
        >
          {[
            { l: "Based in", v: "Cairo, EG" },
            { l: "Status", v: "Student" },
            { l: "Focus", v: "Cybersec · Embedded · Cars" },
            { l: "Currently", v: "Learning, breaking, rebuilding" },
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
          "You don't learn by <span className="italic text-gradient">getting it right</span> — you learn by getting it wrong."
        </blockquote>
      </motion.div>
    </PageTransition>
  );
}
