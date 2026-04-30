import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { LazyFloatingIcons } from "@/components/LazyFloatingIcons";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tamim Mostafa" },
      { name: "description", content: "Reach out about projects, collaborations, or just to talk shop." },
      { property: "og:title", content: "Contact — Tamim Mostafa" },
      { property: "og:description", content: "Let's talk." },
    ],
  }),
  component: Contact,
});

// ============================================================
// EDIT ME — your contact email & social links.
// Leave a value as "" to hide that social card.
// ============================================================
const CONTACT_EMAIL = "support.tamim@gmail.com";

const SOCIALS: { i: typeof Github; t: string; h: string; url: string }[] = [
  { i: Github,    t: "GitHub",    h: "@tamimmostafa",  url: "https://www.github.com/tamimmostafa" },
  { i: Instagram, t: "Instagram", h: "@tamimmostafaa", url: "https://instagram.com/tamimmostafaa" },
];
// ============================================================

const subjectOptions = ["Question", "Project", "Collaboration", "Other"];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().max(50).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject || null,
      message: result.data.message,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not send. Try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent — I'll get back to you.");
  };

  const visibleSocials = SOCIALS.filter((s) => s.url.trim() !== "");

  return (
    <PageTransition>
      <LazyFloatingIcons variant="contact" />
      <SectionHeader
        kicker="Contact"
        title="Let's talk."
        sub="Drop a line about a project, a question, or just to say hi."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative p-8 md:p-10 rounded-3xl border border-border bg-surface/40 backdrop-blur overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative flex flex-col items-center justify-center text-center py-16"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 glow-primary">
                <CheckCircle2 size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gradient">Message sent.</h3>
              <p className="mt-3 text-muted-foreground max-w-sm">
                Thanks {form.name.split(" ")[0]}. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjectOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setForm({ ...form, subject: b })}
                      className={`px-4 py-2 rounded-full border text-xs font-mono transition-all ${
                        form.subject === b
                          ? "border-primary bg-primary/10 text-primary glow-sm"
                          : "border-border bg-surface/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what's on your mind…"
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  maxLength={2000}
                />
                {errors.message && <p className="mt-2 text-xs text-destructive font-mono">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </form>
          )}
        </motion.div>

        <div className="lg:col-span-5 space-y-4">
          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            className="group block relative p-8 rounded-2xl border border-border bg-gradient-to-br from-surface to-background overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition-all duration-700" />
            <div className="relative">
              <Mail className="text-primary mb-4" size={24} strokeWidth={1.5} />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Or email directly
              </div>
              <div className="text-xl md:text-2xl font-display font-bold text-gradient flex items-center gap-2 flex-wrap break-all">
                {CONTACT_EMAIL}
                <ArrowUpRight className="group-hover:rotate-45 transition-transform shrink-0" size={20} />
              </div>
            </div>
          </motion.a>

          {visibleSocials.map((s, i) => (
            <motion.a
              key={s.t}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ x: 6 }}
              className="group flex items-center justify-between p-5 rounded-2xl border border-border bg-surface/40 backdrop-blur hover:border-primary/50 hover:glow-sm transition-all"
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
    </PageTransition>
  );
}

function Field({
  label, id, value, onChange, error, placeholder, type = "text",
}: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
      {error && <p className="mt-2 text-xs text-destructive font-mono">{error}</p>}
    </div>
  );
}
