import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { PageNav } from "@/components/PageNav";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Tamim Mostafa" },
      { name: "description", content: "Timeline of roles, studies, and milestones." },
      { property: "og:title", content: "Experience — Tamim Mostafa" },
      { property: "og:description", content: "The path so far." },
    ],
  }),
  component: Experience,
});

// ============================================================
// EDIT ME — fill in your 4 timeline entries below.
// ============================================================
import certLevel1 from "@/assets/certificate_level1.jpg";
import certLevel2 from "@/assets/certificate_level2.jpg";
import linuxImg from "@/assets/linux.png";
import embeddedImg from "@/assets/embedded.jpg";

const items = [
  { y: "2021 — 2022", role: "DECI Programming — Level 1", co: "Digital Egypt Cubs Initiative", desc: "First certificate in the DECI program. Where the journey officially started: programming fundamentals, problem-solving, and getting comfortable thinking in code.", img: certLevel1, alt: "DECI Programming Level 1 certificate" },
  { y: "2022 — 2023", role: "DECI Programming — Level 2", co: "Digital Egypt Cubs Initiative", desc: "Second DECI certificate. Deeper programming work, more structured projects, and the first real taste of building things end-to-end.", img: certLevel2, alt: "DECI Programming Level 2 certificate" },
  { y: "2023 — 2024", role: "Self-Taught: Linux & Networks", co: "Independent", desc: "Spent the year going deep on Kali/Linux, networking concepts, and the basics of cybersecurity. Tools, protocols, and a lot of late-night labs.", img: linuxImg, alt: "Linux / Kali terminal" },
  { y: "2025 — now", role: "Embedded Systems & Cybersecurity Track", co: "DECI + Self-Study", desc: "Working with microcontrollers and embedded projects, on track for the third DECI certificate (Cybersecurity). Stacking free online certifications from Cisco and other vendors along the way.", img: embeddedImg, alt: "Embedded systems hardware" },
];
// ============================================================

function Experience() {
  return (
    <PageTransition>
      <LazyFloatingIcons variant="experience" />
      <SectionHeader
        kicker="Experience"
        title="The path so far."
        sub="From first lines of code to embedded systems and cybersecurity."
      />

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className="hidden md:flex md:[direction:ltr] items-start justify-center px-4">
                {it.img && (
                  <motion.img
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    initial={{ opacity: 0, rotate: i % 2 === 0 ? -3 : 3 }}
                    whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -3 : 3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-h-72 w-auto rounded-xl border border-border shadow-2xl object-cover"
                  />
                )}
              </div>
              <div className="md:[direction:ltr] pl-8 md:pl-12 relative">
                <div className="absolute left-0 md:-left-[9px] top-2 h-4 w-4 rounded-full bg-primary glow-sm ring-4 ring-background" />
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{it.y}</div>
                <h3 className="text-2xl font-display font-semibold tracking-tight">{it.role}</h3>
                <div className="text-sm text-muted-foreground mb-3 font-mono">@ {it.co}</div>
                <p className="text-foreground/80 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PageNav current="/experience" />
    </PageTransition>
  );
}
