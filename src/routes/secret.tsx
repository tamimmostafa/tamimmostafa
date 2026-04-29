import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Lock, Sparkles } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/secret")({
  head: () => ({
    meta: [
      { title: "Secret — Members Only" },
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
            — classified // members only
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gradient">
            Secret Message
          </h1>
        </div>

        {/*
          ====================================================
          ✏️  WRITE YOUR HIDDEN MESSAGE HERE
          Replace the placeholder text below with whatever
          you want members (Person 1, etc.) to see.
          ====================================================
        */}
        <div className="glass rounded-2xl p-10 md:p-14 border border-border/50 relative overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6">
            <Sparkles size={12} className="text-accent" />
            decrypted_payload.txt
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              [ Your secret message goes here ]
            </p>
            <p className="mt-4 text-muted-foreground">
              Open <code className="text-primary">src/routes/secret.tsx</code> and replace this
              block with anything you'd like members to read.
            </p>
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
