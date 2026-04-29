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
      { title: "Login — Alex Carter" },
      { name: "description", content: "Sign in to your account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
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
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { display_name: displayName || email.split("@")[0] },
          },
        });
        if (error) throw error;
        toast.success("Account created. Signing you in…");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
      }

      // Route based on role
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
    } catch (err: any) {
      toast.error(err.message ?? "Something went wrong");
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
            — secure access
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-gradient">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {mode === "login"
              ? "Sign in to access protected sections."
              : "Members get a secret hidden message."}
          </p>
        </div>

        <div className="glass rounded-2xl p-8 border border-border/50 relative overflow-hidden">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" && (
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <UserIcon size={12} /> Display name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Person 1"
                  maxLength={100}
                />
              </div>
            )}

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
              {loading ? "…" : mode === "login" ? "Sign in" : "Create account"}
              <ArrowRight size={16} />
            </motion.button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
            {mode === "login" ? "No account?" : "Already have one?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-primary hover:underline font-medium"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>

        <p className="text-center mt-6 text-xs font-mono text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">← back to site</Link>
        </p>
      </motion.div>
    </main>
  );
}
