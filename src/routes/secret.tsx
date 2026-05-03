import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Lock, Sparkles, ArrowRight } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/secret")({
  head: () => ({
    meta: [
      { title: "—" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SecretPage,
});

function SecretPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  if (loading || !user) return null;

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-6 glow-md"
          >
            <Lock className="text-primary" size={32} />
          </motion.div>
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            — private
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gradient">
            For your eyes only
          </h1>
        </div>

        <div className="glass rounded-2xl p-10 md:p-14 border border-border/50 relative overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6">
            <Sparkles size={12} className="text-accent" />
            decrypted_payload.txt
          </div>

          <div className="prose prose-invert max-w-none space-y-5 text-foreground/90 text-lg leading-relaxed">
            <p>Hey! I hope you are doing well.</p>
            <p>
              I've been doing a lot of thinking lately and realized I need to focus more on myself
              and my own independence. I'm working on creating my own character, which means I'm
              becoming much more private about my 'inner me' and where I spend my energy. Along
              with that, I want to ensure you that I keep my matters private; no one knows about
              this message or our situation, and I intend to keep it that way.
            </p>
            <p>
              Still, I was raised to be helpful, and I heard your brother is interested in
              technology. I gathered some courses in modern Computer Science for him so he can get
              a head start and be excellently taught at a young age. Since they are in English—and
              I know you are all brilliantly taught in English—I'm sure he could finish them
              perfectly in about a month.
            </p>
            <p>
              I don't want to cause any tension or problems between you and your mother, so please
              don't feel like you have to reply to this. This is just my way of leaving a good
              impression and doing one last helpful thing before I move on with my own path. You
              have the choice to accept or decline.
            </p>
            <p>Be safe.</p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/secret/courses"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/40 text-primary hover:bg-primary/20 transition-all glow-md font-mono text-sm tracking-wide"
            >
              Check courses
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
