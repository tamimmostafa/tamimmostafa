import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Designer & Developer" },
      { name: "description", content: "Crafting interfaces, products, and experiences at the intersection of design and code." },
      { property: "og:title", content: "Alex Carter — Portfolio" },
      { property: "og:description", content: "Designer & developer building thoughtful digital products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageTransition>
      <section className="relative min-h-[80vh] flex flex-col justify-center grid-bg -mx-6 px-6 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur text-xs font-mono mb-8">
            <Sparkles size={12} className="text-primary" />
            <span className="text-muted-foreground">Available for new projects — Q3 2026</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9]">
            Designing
            <br />
            <span className="text-gradient italic font-light">soft systems</span>
            <br />
            for hard problems.
          </h1>

          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm Alex — a designer & developer working at the seam between human intent and machine
            execution. I build interfaces that feel inevitable.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all"
            >
              See my work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-4 text-sm font-semibold hover:border-primary/50 transition-colors"
            >
              Let's talk
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-6">
        {[
          { k: "12+", v: "Years building products" },
          { k: "40+", v: "Shipped projects" },
          { k: "9", v: "Industry awards" },
        ].map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/40 transition-colors"
          >
            <div className="text-5xl font-display font-bold text-gradient-primary">{s.k}</div>
            <div className="mt-3 text-sm font-mono text-muted-foreground uppercase tracking-wider">{s.v}</div>
          </motion.div>
        ))}
      </section>

      <section className="mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden border-y border-border py-8"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap text-5xl md:text-7xl font-display font-bold"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {["Design Engineering", "★", "Product Design", "★", "Creative Code", "★", "Brand Systems", "★"].map((w, j) => (
                  <span key={j} className={j % 2 === 1 ? "text-primary" : "text-foreground/30"}>
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
