## Fill template gaps with your real content

### Projects (`src/routes/projects.tsx`)
Reduce grid from 4 cards to **3 real projects**:

1. **Alfa Romeo Brera — Sleeper Street Build**
   - Year: `coming soon`
   - Role/Category: `Car Tuning`
   - Tag: `1750 TBI · Stage 2+`
   - Desc: "Personal sleeper build on the 1750 TBI engine, tuned to Stage 2+ targeting 320–360 hp. Custom ECU map, upgraded intake/exhaust path, reinforced clutch — daily-driveable on the outside, properly mean once the throttle opens."
   - URL: `#`

2. **ESP32 Multi-Band Network Analyzer**
   - Year: `2025`
   - Role/Category: `Embedded · Security`
   - Tag: `ESP32 · Wi-Fi/BLE`
   - Desc: "All-in-one ESP32 tool combining multi-band scanning, packet capture, and exploit modules. Built to learn radio + protocol attack surface hands-on, packaged as a single portable device."
   - URL: `#`

3. **Fiat Bravo '09 — 1.4 T-Jet Build (280–300 hp)**
   - Year: `2018 — now`
   - Role/Category: `Car Tuning · Family Build`
   - Tag: `1.4 T-Jet · 280–300 hp`
   - Desc: "Started by my father, continued by me. A 1.4 T-Jet pushed to 280–300 hp through staged tuning, hardware upgrades, and lots of road miles. The platform that taught me ECU mapping and how engines actually behave under load."
   - URL: `#`

### Experience (`src/routes/experience.tsx`)
Reduce timeline from 4 to **4 real entries**:

1. `2021 — 2022` · **DECI Programming — Level 1** @ Digital Egypt Cubs Initiative — "First certificate in the DECI program. Where the journey officially started: programming fundamentals, problem-solving, and getting comfortable thinking in code."
2. `2022 — 2023` · **DECI Programming — Level 2** @ Digital Egypt Cubs Initiative — "Second DECI certificate. Deeper programming work, more structured projects, and the first real taste of building things end-to-end."
3. `2023 — 2024` · **Self-Taught: Linux & Networks** @ Independent — "Spent the year going deep on Kali/Linux, networking concepts, and the basics of cybersecurity. Tools, protocols, and a lot of late-night labs."
4. `2025 — now` · **Embedded Systems & Cybersecurity Track** @ DECI + Self-Study — "Working with microcontrollers and embedded projects, on track for the third DECI certificate (Cybersecurity). Stacking free online certifications from Cisco and other vendors along the way."

### Contact (`src/routes/contact.tsx`)
Update the `SOCIALS` constant — keep only the two that exist, remove LinkedIn and Twitter entries entirely so they don't render at all:

- GitHub → `https://www.github.com/tamimmostafa` (handle: `@tamimmostafa`)
- Instagram → `https://instagram.com/tamimmostafaa` (handle: `@tamimmostafaa`)

LinkedIn and Twitter rows removed from the array (rather than left as empty strings) — cleaner and avoids "in/tamim" placeholder ever leaking.

### Secret page (`src/routes/secret.tsx`)
Leave untouched per your choice.

### Notes
- All copy is editable later; constants stay at the top of each file.
- Removing 1 project card and the 2 unused social slots means no empty/placeholder UI anywhere on the live site.