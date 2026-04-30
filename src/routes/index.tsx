import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Wifi, Radar, Cpu, Gauge, Terminal, Zap, Radio, Activity } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamim Mostafa — Cybersecurity & Embedded Systems" },
      { name: "description", content: "Tamim Mostafa — Cybersecurity & embedded systems student from Cairo. I explore systems, both digital and mechanical." },
      { property: "og:title", content: "Tamim Mostafa — Portfolio" },
      { property: "og:description", content: "Cybersecurity, embedded systems, and car tuning." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageTransition>
      <section className="relative min-h-[85vh] flex items-center grid-bg -mx-6 px-6 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/25 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent/25 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="relative grid lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-surface/50 backdrop-blur text-xs font-mono mb-8 glow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-muted-foreground">Cairo, EG — always learning</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Tamim
              <br />
              <span className="text-gradient italic font-light">Mostafa</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I explore systems — digital and mechanical. Cybersecurity & embedded systems
              student, driven by a passion for cars and performance tuning.
            </p>

            <p className="mt-6 max-w-xl text-base italic text-foreground/70 border-l-2 border-primary/60 pl-4">
              "You don't learn by getting it right — you learn by getting it wrong."
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all"
              >
                See my work
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-4 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-colors"
              >
                Let's talk
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/30 glow-primary">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary via-transparent to-accent opacity-60 blur-md pointer-events-none" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Portrait of Tamim Mostafa"
                  width={768}
                  height={896}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
                }} />
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background/70 backdrop-blur-md text-xs font-mono"
              >
                <MapPin size={12} className="text-primary" />
                <span className="text-muted-foreground">Cairo, EG</span>
                <span className="ml-auto text-primary">v1.0</span>
              </motion.div>
            </div>

            <div className="absolute -top-3 -left-3 text-[10px] font-mono text-primary/70">​</div>
            <div className="absolute -bottom-3 -right-3 text-accent/70 text-sm font-serif font-semibold text-left">TM</div>
          </motion.div>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-6">
        {[
          { k: "CYBER", v: "Offensive security & tooling" },
          { k: "EMBED", v: "Low-level systems & protocols" },
          { k: "AUTO", v: "Tuning, ECU mapping, builds" },
        ].map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/40 hover:glow-sm transition-all"
          >
            <div className="text-4xl font-display font-bold text-gradient-primary">{s.k}</div>
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
                {["Cybersecurity", "★", "Embedded", "★", "Car Tuning", "★", "Linux", "★"].map((w, j) => (
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
