import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, LogIn, LogOut, ShieldCheck } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);
  const { user, role, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-primary glow-sm group-hover:scale-125 transition-transform" />
          <span className="font-display font-bold tracking-tight">tamim.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${active ? "text-foreground" : ""}`}>{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <Link
                to={role === "admin" ? "/admin" : "/secret"}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border border-primary/30 bg-primary/10 text-primary hover:glow-sm transition-shadow"
              >
                <ShieldCheck size={12} />
                console
              </Link>
              <button
                onClick={handleSignOut}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="sign out"
              >
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="login"
            >
              <LogIn size={14} />
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to={role === "admin" ? "/admin" : "/secret"}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-secondary"
                >
                  Console
                </Link>
                <button
                  onClick={() => { setOpen(false); handleSignOut(); }}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
                >
                  Sign out
                </button>
              </>
            ) : null}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
