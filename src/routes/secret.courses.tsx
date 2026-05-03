import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, BookOpen, ExternalLink, Download, ShieldAlert } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/secret/courses")({
  head: () => ({
    meta: [
      { title: "—" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SecretCoursesPage,
});

/*
  ====================================================
  ✏️  EDIT THE COURSES LIST BELOW
  Add / remove items in the COURSES array.
  Each entry: { title, description, url }
  ====================================================
*/
const COURSES: { title: string; description: string; url: string }[] = [
  {
    title: "Machine Learning — Fundamentals of Python Machine Learning",
    description: "A practical intro to ML with Python. Build intuition for models, training, and evaluation.",
    url: "https://mega.nz/file/TQI1xJ4A#7ZlUQ5bs5PeiayklYzj9jN8J-JnJVmT-Obr2Mmm7zyU",
  },
  {
    title: "DeepSeek R1 & ChatGPT — How to Supercharge AI with 20+ Tools",
    description: "Get the most out of modern AI assistants with a curated toolbox of workflows.",
    url: "https://mega.nz/file/TQI1xJ4A#7ZlUQ5bs5PeiayklYzj9jN8J-JnJVmT-Obr2Mmm7zyU",
  },
  {
    title: "Cybersecurity 101 — The Fundamentals of Cybersecurity",
    description: "Foundational concepts: threats, defenses, and how to think like both attacker and defender.",
    url: "https://mega.nz/file/PJAXUR5Y#n0iF0UPnbMZ3irbgI71R9T-MultWkilu4pgGnwmh5jY",
  },
  {
    title: "Adobe Photoshop — Complete Beginners Course (2025)",
    description: "From zero to confident in Photoshop. Tools, layers, retouching, and creative workflows.",
    url: "https://mega.nz/file/TF4X0LxY#KDja6CNh83BbHigHUcntq9CNFnv6mvpt7wpophQbvwY",
  },
  {
    title: "Cybersecurity Bootcamp",
    description: "A deeper, structured ride into security: networks, systems, and hands-on practice.",
    url: "https://mega.nz/file/amoASYoa#PZ6rNE793g_7yYxF9UJmOHywTvQvDs_4_AggyPdsJoM",
  },
  {
    title: "Internet of Things (IoT) — Fundamentals (101 level)",
    description: "Understand connected devices: sensors, protocols, and the architecture behind IoT.",
    url: "https://mega.nz/file/uUJlgbJI#ekd8HMY4uuDXk12fI98Fgf523EWzFyiN606flk4vK9w",
  },
  {
    title: "Learn Facebook Ads & Facebook Marketing Strategies",
    description: "A complete walkthrough of running effective ad campaigns and marketing on Facebook.",
    url: "https://mega.nz/file/qERTkQbS#_7VGUV5pT5ComQIgB9eUG01WMiN7r1LCF_FLUobgVyc",
  },
  {
    title: "More tools & courses — ZeroLord Library",
    description: "A bigger catalog if you want to keep exploring beyond this list.",
    url: "https://www.zerolord.com/browse",
  },
];

function SecretCoursesPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  if (loading || !user) return null;

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto"
      >
        <Link
          to="/secret"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft size={14} /> back
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-6 glow-md">
            <BookOpen className="text-primary" size={32} />
          </div>
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            — courses
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-gradient">
            A small head start
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Curated free courses in modern Computer Science. Start from the top and work down.
          </p>
        </div>

        <div className="space-y-4">
          {COURSES.map((c, i) => (
            <motion.a
              key={c.url}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group block glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:translate-x-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://filecr.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group mt-8 block glass rounded-2xl p-6 border border-accent/40 hover:border-accent/70 transition-all hover:translate-x-1"
        >
          <div className="flex items-start gap-4">
            <Download className="text-accent shrink-0 mt-1" size={22} />
            <div className="flex-1">
              <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                Free software downloads — FileCR
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                A library of free software you can grab when you need a tool fast.
              </p>
            </div>
            <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent shrink-0 mt-1 transition-colors" />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 glass rounded-2xl p-6 border border-destructive/40 bg-destructive/5"
        >
          <div className="flex items-start gap-4">
            <ShieldAlert className="text-destructive shrink-0 mt-1" size={22} />
            <div className="text-sm leading-relaxed text-foreground/90 space-y-2">
              <p className="font-display font-semibold text-base text-destructive">
                Stay safe when downloading
              </p>
              <p>
                Do <strong>not</strong> download anything online unless you have checked it for
                viruses first.
              </p>
              <p>
                Open <strong>Task Manager</strong> and watch for <strong>100% disk usage</strong>{" "}
                or any weird <code className="font-mono text-xs px-1 py-0.5 rounded bg-muted">.exe</code>{" "}
                files you don't recognize. Right-click the suspicious process → <em>End task</em>.
              </p>
              <p>
                If it keeps coming back, run a proper antivirus.{" "}
                <strong>Windows Defender is not recommended.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
