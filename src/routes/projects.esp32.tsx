import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Wifi, Radio, ShieldAlert } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import esp32Final from "@/assets/esp32final.jpg";

export const Route = createFileRoute("/projects/esp32")({
  head: () => ({
    meta: [
      { title: "ESP32 Multi-Band Network Analyzer · Tamim Mostafa" },
      { name: "description", content: "ESP32-based multi-band scanner, packet capture, and exploit toolkit packaged as a portable device." },
      { property: "og:title", content: "ESP32 Multi-Band Network Analyzer" },
      { property: "og:description", content: "Embedded · Security · Wi-Fi/BLE" },
    ],
  }),
  component: Esp32Page,
});

function Esp32Page() {
  return (
    <PageTransition>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={16} /> All projects
      </Link>

      <SectionHeader
        kicker="2025 — now · Embedded · Security"
        title="ESP32 Multi-Band Network Analyzer."
        sub="Scanner. Sniffer. Toolkit. One ESP32, in your hand."
      />

      <div className="grid md:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            An all-in-one <span className="text-primary">ESP32</span> tool combining multi-band scanning, packet
            capture, and exploit modules. Built to learn radio + protocol attack surface hands-on, packaged as
            a single portable device you can drop in your pocket and walk around with.
          </p>
          <p>
            The project started from a simple question: what does the airspace around me actually look like? Not
            just Wi-Fi networks in a list, but devices, beacons, BLE advertisements, deauth frames, probe requests
            — the layer of invisible traffic that's always there and that most people never see.
          </p>
          <p>
            From there it grew into a real toolkit: scanning across bands, capturing packets to flash, surfacing
            information about nearby devices, and running offensive modules where it makes sense in a learning
            context. The goal was never to ship a hacking gadget — it was to <span className="text-primary">understand</span>{" "}
            every layer by building it myself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-3"
        >
          {[
            { l: "Hardware", v: "ESP32" },
            { l: "Bands", v: "Wi-Fi 2.4 GHz · BLE" },
            { l: "Form factor", v: "Portable · self-contained" },
            { l: "Status", v: "Active build" },
          ].map((row) => (
            <div key={row.l} className="flex justify-between p-4 rounded-xl border border-border bg-surface/40">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{row.l}</span>
              <span className="font-medium">{row.v}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {[
          { i: Wifi, t: "Multi-Band Scanning", d: "Sweeps Wi-Fi and BLE, surfaces SSIDs, BSSIDs, signal strength, channel, vendor, and probe activity in real time." },
          { i: Radio, t: "Packet Capture", d: "Promiscuous-mode capture into flash. Pull off frames for offline analysis in Wireshark — the same workflow as professional tools, but on a $5 chip." },
          { i: ShieldAlert, t: "Exploit Modules", d: "Educational offensive modules — deauth, evil twin, BLE spam — used inside a controlled lab to actually understand the protocol weakness, not just read about it." },
        ].map((c) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur"
          >
            <c.i className="text-primary mb-4" size={26} strokeWidth={1.5} />
            <h3 className="text-lg font-display font-semibold mb-2">{c.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </motion.div>
        ))}
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 40, rotate: 1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 max-w-3xl mx-auto"
      >
        <img
          src={esp32Final}
          alt="ESP32 multi-band network analyzer — final build"
          className="w-full rounded-2xl border border-border shadow-2xl"
          loading="lazy"
        />
        <figcaption className="mt-4 text-sm font-mono text-muted-foreground text-center">
          The final device — assembled and running
        </figcaption>
      </motion.figure>

      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/40 backdrop-blur hover:border-primary/50 hover:glow-sm transition-all font-mono text-sm"
        >
          <ArrowLeft size={16} /> Back to all projects
        </Link>
      </div>
    </PageTransition>
  );
}
