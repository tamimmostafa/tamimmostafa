import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import {
  Wifi, Radar, Cpu, Zap, Terminal, Radio, Gauge, Activity,
  Bluetooth, Satellite, CircuitBoard, Binary, Waves, Signal,
  Bug, Lock, KeyRound, Fingerprint, ShieldAlert, Wrench,
  Cog, Flame, Disc3, Hexagon, Triangle, Orbit, Atom, Crosshair,
  Network, Server, HardDrive, Microchip, Antenna, Rss,
  Power, Battery, Plug, Cable, Usb, MemoryStick,
  Car, Fuel, Wind, Thermometer, Compass, Map,
  Skull, Eye, Scan, QrCode, Barcode, Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Deco = {
  Icon: LucideIcon;
  className: string;
  size: number;
  motion: "float" | "spin" | "pulse" | "drift";
  delay?: number;
  tone?: "primary" | "accent";
  parallax?: number; // scroll multiplier
  cursor?: number;   // cursor multiplier
};

const presets: Record<string, Deco[]> = {
  home: [
    { Icon: Wifi, className: "top-12 right-10", size: 36, motion: "float", tone: "accent", parallax: -80, cursor: 20 },
    { Icon: Radar, className: "bottom-16 left-8", size: 42, motion: "drift", tone: "primary", delay: 0.6, parallax: 60, cursor: -15 },
    { Icon: Cpu, className: "top-1/3 left-1/2", size: 56, motion: "spin", tone: "accent", parallax: -120, cursor: 30 },
    { Icon: Zap, className: "bottom-24 right-1/3", size: 28, motion: "pulse", tone: "primary", parallax: 100, cursor: -25 },
    { Icon: Network, className: "top-1/4 left-12", size: 32, motion: "drift", tone: "accent", delay: 0.3, parallax: -50, cursor: 18 },
    { Icon: Antenna, className: "bottom-1/3 right-16", size: 38, motion: "pulse", tone: "primary", delay: 0.9, parallax: 70, cursor: -22 },
    { Icon: Rss, className: "top-2/3 left-1/4", size: 30, motion: "float", tone: "accent", delay: 1.2, parallax: -40, cursor: 12 },
    { Icon: Server, className: "top-1/2 right-12", size: 34, motion: "spin", tone: "primary", parallax: 90, cursor: -18 },
  ],
  about: [
    { Icon: Fingerprint, className: "top-20 right-12", size: 44, motion: "pulse", tone: "primary", parallax: -90, cursor: 22 },
    { Icon: CircuitBoard, className: "bottom-32 left-10", size: 50, motion: "drift", tone: "accent", delay: 0.4, parallax: 80, cursor: -20 },
    { Icon: Atom, className: "top-1/2 right-1/4", size: 38, motion: "spin", tone: "primary", parallax: -110, cursor: 28 },
    { Icon: Binary, className: "bottom-12 right-16", size: 28, motion: "float", tone: "accent", delay: 0.8, parallax: 60, cursor: -14 },
    { Icon: Eye, className: "top-1/3 left-12", size: 36, motion: "pulse", tone: "primary", delay: 0.2, parallax: -50, cursor: 16 },
    { Icon: Scan, className: "bottom-1/4 left-1/3", size: 40, motion: "drift", tone: "accent", delay: 1.1, parallax: 100, cursor: -24 },
    { Icon: Database, className: "top-1/4 left-1/2", size: 32, motion: "float", tone: "primary", delay: 0.6, parallax: -70, cursor: 20 },
    { Icon: Microchip, className: "bottom-1/2 right-10", size: 42, motion: "spin", tone: "accent", parallax: 85, cursor: -18 },
  ],
  projects: [
    { Icon: Terminal, className: "top-16 left-12", size: 40, motion: "pulse", tone: "accent", parallax: -80, cursor: 20 },
    { Icon: Wrench, className: "bottom-24 right-10", size: 44, motion: "drift", tone: "primary", delay: 0.5, parallax: 70, cursor: -16 },
    { Icon: Cog, className: "top-1/3 right-16", size: 56, motion: "spin", tone: "accent", parallax: -120, cursor: 30 },
    { Icon: Hexagon, className: "bottom-1/3 left-1/4", size: 32, motion: "float", tone: "primary", delay: 1, parallax: 50, cursor: -14 },
    { Icon: Car, className: "top-1/2 left-1/3", size: 46, motion: "drift", tone: "accent", delay: 0.3, parallax: -90, cursor: 24 },
    { Icon: Fuel, className: "bottom-16 left-1/2", size: 30, motion: "pulse", tone: "primary", delay: 0.8, parallax: 65, cursor: -18 },
    { Icon: HardDrive, className: "top-1/4 right-1/3", size: 36, motion: "float", tone: "accent", delay: 1.2, parallax: -60, cursor: 16 },
    { Icon: MemoryStick, className: "bottom-1/2 right-1/4", size: 34, motion: "spin", tone: "primary", parallax: 95, cursor: -22 },
  ],
  skills: [
    { Icon: ShieldAlert, className: "top-14 right-14", size: 42, motion: "pulse", tone: "primary", parallax: -85, cursor: 22 },
    { Icon: Lock, className: "bottom-28 left-12", size: 36, motion: "float", tone: "accent", delay: 0.3, parallax: 70, cursor: -18 },
    { Icon: Bug, className: "top-1/2 left-10", size: 30, motion: "drift", tone: "primary", parallax: -55, cursor: 14 },
    { Icon: KeyRound, className: "bottom-16 right-1/4", size: 38, motion: "spin", tone: "accent", delay: 0.7, parallax: 100, cursor: -26 },
    { Icon: Skull, className: "top-1/4 left-1/3", size: 44, motion: "pulse", tone: "primary", delay: 0.5, parallax: -90, cursor: 24 },
    { Icon: QrCode, className: "bottom-1/3 right-12", size: 32, motion: "float", tone: "accent", delay: 1, parallax: 60, cursor: -16 },
    { Icon: Barcode, className: "top-2/3 right-1/3", size: 36, motion: "drift", tone: "primary", delay: 0.4, parallax: -65, cursor: 18 },
    { Icon: Binary, className: "bottom-1/2 left-1/4", size: 28, motion: "pulse", tone: "accent", delay: 1.3, parallax: 80, cursor: -20 },
  ],
  experience: [
    { Icon: Signal, className: "top-12 left-10", size: 40, motion: "pulse", tone: "accent", parallax: -75, cursor: 20 },
    { Icon: Satellite, className: "bottom-24 right-12", size: 48, motion: "drift", tone: "primary", delay: 0.6, parallax: 90, cursor: -22 },
    { Icon: Orbit, className: "top-1/3 right-1/4", size: 56, motion: "spin", tone: "accent", parallax: -120, cursor: 30 },
    { Icon: Waves, className: "bottom-1/4 left-1/4", size: 34, motion: "float", tone: "primary", delay: 0.4, parallax: 65, cursor: -16 },
    { Icon: Compass, className: "top-1/2 left-12", size: 38, motion: "spin", tone: "accent", delay: 0.2, parallax: -85, cursor: 22 },
    { Icon: Map, className: "bottom-1/3 right-1/3", size: 42, motion: "pulse", tone: "primary", delay: 1, parallax: 70, cursor: -18 },
    { Icon: Activity, className: "top-2/3 left-1/2", size: 30, motion: "drift", tone: "accent", delay: 0.8, parallax: -60, cursor: 16 },
    { Icon: Wifi, className: "top-1/4 right-10", size: 32, motion: "float", tone: "primary", delay: 1.1, parallax: 55, cursor: -14 },
  ],
  hobbies: [
    { Icon: Flame, className: "top-16 right-10", size: 40, motion: "pulse", tone: "primary", parallax: -80, cursor: 22 },
    { Icon: Disc3, className: "bottom-20 left-12", size: 48, motion: "spin", tone: "accent", parallax: 95, cursor: -24 },
    { Icon: Gauge, className: "top-1/2 right-1/4", size: 38, motion: "drift", tone: "primary", delay: 0.5, parallax: -70, cursor: 18 },
    { Icon: Triangle, className: "bottom-1/3 left-1/3", size: 30, motion: "float", tone: "accent", delay: 0.9, parallax: 60, cursor: -16 },
    { Icon: Car, className: "top-1/4 left-10", size: 44, motion: "drift", tone: "primary", delay: 0.3, parallax: -90, cursor: 24 },
    { Icon: Wind, className: "bottom-1/2 right-12", size: 36, motion: "float", tone: "accent", delay: 1.2, parallax: 75, cursor: -20 },
    { Icon: Thermometer, className: "top-2/3 left-1/4", size: 32, motion: "pulse", tone: "primary", delay: 0.7, parallax: -55, cursor: 14 },
    { Icon: Fuel, className: "bottom-16 right-1/3", size: 34, motion: "spin", tone: "accent", parallax: 85, cursor: -22 },
  ],
  contact: [
    { Icon: Bluetooth, className: "top-14 right-12", size: 40, motion: "pulse", tone: "accent", parallax: -80, cursor: 22 },
    { Icon: Radio, className: "bottom-24 left-10", size: 44, motion: "drift", tone: "primary", delay: 0.4, parallax: 75, cursor: -18 },
    { Icon: Crosshair, className: "top-1/3 left-1/3", size: 52, motion: "spin", tone: "accent", parallax: -110, cursor: 28 },
    { Icon: Activity, className: "bottom-16 right-1/4", size: 30, motion: "float", tone: "primary", delay: 0.8, parallax: 60, cursor: -16 },
    { Icon: Plug, className: "top-1/2 right-10", size: 36, motion: "pulse", tone: "accent", delay: 0.3, parallax: -65, cursor: 18 },
    { Icon: Cable, className: "bottom-1/3 left-1/4", size: 40, motion: "drift", tone: "primary", delay: 1, parallax: 80, cursor: -20 },
    { Icon: Usb, className: "top-1/4 left-12", size: 32, motion: "float", tone: "accent", delay: 0.6, parallax: -50, cursor: 14 },
    { Icon: Power, className: "bottom-1/2 right-1/3", size: 34, motion: "spin", tone: "primary", parallax: 90, cursor: -22 },
    { Icon: Battery, className: "top-2/3 right-16", size: 30, motion: "pulse", tone: "accent", delay: 1.3, parallax: -55, cursor: 16 },
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

function DecoIcon({ d, scrollY, mx, my }: { d: Deco; scrollY: MotionValue<number>; mx: MotionValue<number>; my: MotionValue<number> }) {
  const py = useTransform(scrollY, [0, 1000], [0, d.parallax ?? 0]);
  const cx = useTransform(mx, (v) => v * (d.cursor ?? 0));
  const cy = useTransform(my, (v) => v * (d.cursor ?? 0));
  return (
    <motion.div
      style={{ y: py, x: cx, translateY: cy }}
      className={`absolute ${d.className} ${
        d.tone === "accent" ? "text-accent/35" : "text-primary/35"
      }`}
    >
      <motion.div
        animate={animations[d.motion]}
        transition={{ ...transitions[d.motion], delay: d.delay ?? 0 }}
      >
        <d.Icon size={d.size} strokeWidth={1.2} />
      </motion.div>
    </motion.div>
  );
}

export function FloatingIcons({ variant = "home" }: { variant?: keyof typeof presets }) {
  const items = presets[variant] ?? presets.home;
  const { scrollY } = useScroll();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 50, damping: 20, mass: 0.5 });
  const my = useSpring(rawY, { stiffness: 50, damping: 20, mass: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      rawX.set((e.clientX / w - 0.5) * 2); // -1..1
      rawY.set((e.clientY / h - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((d, i) => (
        <DecoIcon key={i} d={d} scrollY={scrollY} mx={mx} my={my} />
      ))}
    </div>
  );
}
