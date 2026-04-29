import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Lock, Mail, ArrowRight } from "lucide-react";

const schema = z.object({
  email: z.string().trim().email({ message: "Invalid email" }).max(255),
  password: z.string().min(6, { message: "Min 6 characters" }).max(72),
});

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Access — Tamim" },
      { name: "description", content: "Restricted access." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: roleRow } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .maybeSingle();
        if (roleRow?.role === "admin") navigate({ to: "/admin" });
        else navigate({ to: "/secret" });
      }
    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-24 pb-24 px-6 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10 noise opacity-40" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            — restricted
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-gradient">
            Authenticate
          </h1>
        </div>

        <div className="glass rounded-2xl p-8 border border-border/50 relative overflow-hidden">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Mail size={12} /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@example.com"
                required
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Lock size={12} /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="••••••••"
                required
                minLength={6}
                maxLength={72}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:glow-md transition-shadow disabled:opacity-60"
            >
              {loading ? "…" : "Sign in"}
              <ArrowRight size={16} />
            </motion.button>
          </form>
        </div>

        <p className="text-center mt-6 text-xs font-mono text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">← back to site</Link>
        </p>
      </motion.div>
    </main>
  );
}
