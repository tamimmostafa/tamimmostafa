import { motion } from "framer-motion";
import {
  Wifi, Radar, Cpu, Zap, Terminal, Radio, Gauge, Activity,
  Bluetooth, Satellite, CircuitBoard, Binary, Waves, Signal,
  Bug, Lock, KeyRound, Fingerprint, ShieldAlert, Wrench,
  Cog, Flame, Disc3, Hexagon, Triangle, Orbit, Atom, Crosshair,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Deco = {
  Icon: LucideIcon;
  className: string;
  size: number;
  motion: "float" | "spin" | "pulse" | "drift";
  delay?: number;
  tone?: "primary" | "accent";
};

const presets: Record<string, Deco[]> = {
  home: [
    { Icon: Wifi, className: "top-12 right-10", size: 36, motion: "float", tone: "accent" },
    { Icon: Radar, className: "bottom-16 left-8", size: 42, motion: "drift", tone: "primary", delay: 0.6 },
    { Icon: Cpu, className: "top-1/3 left-1/2", size: 56, motion: "spin", tone: "accent" },
    { Icon: Zap, className: "bottom-24 right-1/3", size: 28, motion: "pulse", tone: "primary" },
  ],
  about: [
    { Icon: Fingerprint, className: "top-20 right-12", size: 44, motion: "pulse", tone: "primary" },
    { Icon: CircuitBoard, className: "bottom-32 left-10", size: 50, motion: "drift", tone: "accent", delay: 0.4 },
    { Icon: Atom, className: "top-1/2 right-1/4", size: 38, motion: "spin", tone: "primary" },
    { Icon: Binary, className: "bottom-12 right-16", size: 28, motion: "float", tone: "accent", delay: 0.8 },
  ],
  projects: [
    { Icon: Terminal, className: "top-16 left-12", size: 40, motion: "pulse", tone: "accent" },
    { Icon: Wrench, className: "bottom-24 right-10", size: 44, motion: "drift", tone: "primary", delay: 0.5 },
    { Icon: Cog, className: "top-1/3 right-16", size: 56, motion: "spin", tone: "accent" },
    { Icon: Hexagon, className: "bottom-1/3 left-1/4", size: 32, motion: "float", tone: "primary", delay: 1 },
  ],
  skills: [
    { Icon: ShieldAlert, className: "top-14 right-14", size: 42, motion: "pulse", tone: "primary" },
    { Icon: Lock, className: "bottom-28 left-12", size: 36, motion: "float", tone: "accent", delay: 0.3 },
    { Icon: Bug, className: "top-1/2 left-10", size: 30, motion: "drift", tone: "primary" },
    { Icon: KeyRound, className: "bottom-16 right-1/4", size: 38, motion: "spin", tone: "accent", delay: 0.7 },
  ],
  experience: [
    { Icon: Signal, className: "top-12 left-10", size: 40, motion: "pulse", tone: "accent" },
    { Icon: Satellite, className: "bottom-24 right-12", size: 48, motion: "drift", tone: "primary", delay: 0.6 },
    { Icon: Orbit, className: "top-1/3 right-1/4", size: 56, motion: "spin", tone: "accent" },
    { Icon: Waves, className: "bottom-1/4 left-1/4", size: 34, motion: "float", tone: "primary", delay: 0.4 },
  ],
  hobbies: [
    { Icon: Flame, className: "top-16 right-10", size: 40, motion: "pulse", tone: "primary" },
    { Icon: Disc3, className: "bottom-20 left-12", size: 48, motion: "spin", tone: "accent" },
    { Icon: Gauge, className: "top-1/2 right-1/4", size: 38, motion: "drift", tone: "primary", delay: 0.5 },
    { Icon: Triangle, className: "bottom-1/3 left-1/3", size: 30, motion: "float", tone: "accent", delay: 0.9 },
  ],
  contact: [
    { Icon: Bluetooth, className: "top-14 right-12", size: 40, motion: "pulse", tone: "accent" },
    { Icon: Radio, className: "bottom-24 left-10", size: 44, motion: "drift", tone: "primary", delay: 0.4 },
    { Icon: Crosshair, className: "top-1/3 left-1/3", size: 52, motion: "spin", tone: "accent" },
    { Icon: Activity, className: "bottom-16 right-1/4", size: 30, motion: "float", tone: "primary", delay: 0.8 },
  ],
};

const animations = {
  float: { y: [0, -12, 0], rotate: [0, 8, 0] },
  drift: { y: [0, 10, 0], x: [0, 6, 0] },
  spin: { rotate: 360 },
  pulse: { y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] },
};

const transitions = {
  float: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  drift: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  spin: { duration: 24, repeat: Infinity, ease: "linear" as const },
  pulse: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

export function FloatingIcons({ variant = "home" }: { variant?: keyof typeof presets }) {
  const items = presets[variant] ?? presets.home;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((d, i) => (
        <motion.div
          key={i}
          animate={animations[d.motion]}
          transition={{ ...transitions[d.motion], delay: d.delay ?? 0 }}
          className={`absolute hidden md:block ${d.className} ${
            d.tone === "accent" ? "text-accent/35" : "text-primary/35"
          }`}
        >
          <d.Icon size={d.size} strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
