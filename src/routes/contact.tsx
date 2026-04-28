import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Carter" },
      { name: "description", content: "Get in touch about projects, collaborations, or coffee." },
      { property: "og:title", content: "Contact — Alex Carter" },
      { property: "og:description", content: "Let's talk — projects, collaborations, or coffee." },
    ],
  }),
  component: Contact,
});

const socials = [
  { i: Github, t: "GitHub", h: "@alexcarter" },
  { i: Twitter, t: "Twitter / X", h: "@alex_dot_dev" },
  { i: Linkedin, t: "LinkedIn", h: "in/alexcarter" },
];

function Contact() {
  return (
    <PageTransition>
      <SectionHeader
        kicker="Contact"
        title="Let's build something."
        sub="I'm currently taking on a small number of projects starting Q3 2026. Tell me what you're working on."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.a
          href="mailto:hello@alex.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group lg:col-span-7 relative p-12 rounded-3xl border border-border bg-gradient-to-br from-surface to-background overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition-all duration-700" />
          <div className="relative">
            <Mail className="text-primary mb-6" size={32} strokeWidth={1.5} />
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Best way to reach me
            </div>
            <div className="text-3xl md:text-5xl font-display font-bold text-gradient flex items-center gap-3 flex-wrap">
              hello@alex.dev
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={32} />
            </div>
            <p className="mt-6 text-muted-foreground max-w-md">
              I read every email. Expect a reply within two working days.
            </p>
          </div>
        </motion.a>

        <div className="lg:col-span-5 space-y-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.t}
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <s.i size={20} strokeWidth={1.5} className="text-primary" />
                <div>
                  <div className="font-medium">{s.t}</div>
                  <div className="text-sm text-muted-foreground font-mono">{s.h}</div>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-2xl border border-dashed border-border text-center"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">PS</div>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Not a project? Still write. I love hearing from people building thoughtful things —
          even if it's just to say hi.
        </p>
      </motion.div>
    </PageTransition>
  );
}
