import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, Users, MessageSquare, Database } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Tamim" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

interface Profile {
  id: string;
  display_name: string | null;
  email: string | null;
  created_at: string;
}
interface RoleRow {
  user_id: string;
  role: string;
}
interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  budget: string | null;
  created_at: string;
}

function AdminPage() {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [roles, setRoles] = useState<RoleRow[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate({ to: "/login" });
      return;
    }
    if (role && role !== "admin") {
      navigate({ to: "/secret" });
      return;
    }
    if (role === "admin") loadData();
  }, [user, role, loading, navigate]);

  async function loadData() {
    setDataLoading(true);
    const [p, r, m] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("user_roles").select("user_id, role"),
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
    ]);
    setProfiles((p.data as Profile[]) ?? []);
    setRoles((r.data as RoleRow[]) ?? []);
    setMessages((m.data as Message[]) ?? []);
    setDataLoading(false);
  }

  if (loading || !user || role !== "admin") return null;

  const stats = [
    { label: "Members", value: profiles.length, icon: Users },
    { label: "Messages", value: messages.length, icon: MessageSquare },
    { label: "Roles assigned", value: roles.length, icon: ShieldCheck },
  ];

  return (
    <PageTransition>
      <SectionHeader
        kicker="root // tamim"
        title="Command Center"
        sub="Live view of users, roles, and inbound messages from the contact form."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
            <s.icon className="text-primary mb-3" size={20} />
            <div className="font-display text-4xl font-bold text-gradient">{s.value}</div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {dataLoading ? (
        <div className="font-mono text-sm text-muted-foreground">loading database…</div>
      ) : (
        <div className="space-y-12">
          <Section title="Users" icon={Users}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profiles.map((p) => {
                  const r = roles.find((x) => x.user_id === p.id);
                  return (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.display_name ?? "—"}</TableCell>
                      <TableCell className="font-mono text-xs">{p.email ?? "—"}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono ${
                            r?.role === "admin"
                              ? "bg-primary/15 text-primary border border-primary/30"
                              : "bg-secondary text-muted-foreground border border-border"
                          }`}
                        >
                          {r?.role ?? "member"}
                        </span>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {new Date(p.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {profiles.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                      No users yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Section>

          <Section title="Contact Messages" icon={MessageSquare}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>When</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>
                      <div className="font-medium">{m.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{m.email}</div>
                    </TableCell>
                    <TableCell>{m.subject ?? "—"}</TableCell>
                    <TableCell className="max-w-md truncate text-muted-foreground">
                      {m.message}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{m.budget ?? "—"}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {new Date(m.created_at).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
                {messages.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      No messages yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Section>
        </div>
      )}
    </PageTransition>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Database;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl border border-border/50 overflow-hidden"
    >
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
        <Icon size={16} className="text-primary" />
        <h2 className="font-display font-bold tracking-tight">{title}</h2>
      </div>
      <div className="p-2">{children}</div>
    </motion.section>
  );
}
