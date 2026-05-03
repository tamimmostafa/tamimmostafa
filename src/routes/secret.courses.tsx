import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
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
    title: "CS50: Introduction to Computer Science — Harvard",
    description: "The classic starting point. Covers C, Python, algorithms, data structures, and web basics.",
    url: "https://cs50.harvard.edu/x/",
  },
  {
    title: "Python for Everybody — University of Michigan",
    description: "A gentle intro to programming with Python. Great first language path.",
    url: "https://www.py4e.com/",
  },
  {
    title: "freeCodeCamp — Responsive Web Design",
    description: "Hands-on HTML & CSS, build real projects from day one.",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
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
      </motion.div>
    </PageTransition>
  );
}
