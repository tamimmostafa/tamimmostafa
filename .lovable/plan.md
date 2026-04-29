## Personalize site to Tamim Mostafa

### 1. Identity & copy (everywhere)
- Replace every "Alex Carter" reference with **Tamim Mostafa**.
- Tagline: *"You don't learn by getting it right—you learn by getting it wrong."*
- Location: **Cairo, EG**
- Bio: *"I explore systems—digital and mechanical. Cybersecurity & embedded systems student, driven by a passion for cars and performance tuning."*
- Contact email: **support.tamim@gmail.com** (extra socials left as easy-to-edit constants at top of `contact.tsx` for you to fill in manually).
- Update root `__root.tsx` `<title>`, meta description, and footer.
- Update each page's SEO `head()` (title + description) to match Tamim.

### 2. Home (`index.tsx`)
- Hero name → Tamim Mostafa. Role → "Cybersecurity & Embedded Systems Student".
- Replace stats with neutral / relevant ones (e.g. Projects, CTFs, Builds, Years tinkering) — kept minimal.
- Tagline quote shown prominently.

### 3. About (`about.tsx`)
- Rewrite bio block using the provided bio, expanded slightly to fill the layout (still in Tamim's voice — student, cars, performance, systems).
- Location card: Cairo, EG.

### 4. Skills (`skills.tsx`) — wipe existing, replace with exactly:
- **Languages & Low-Level**: Python, JavaScript, PHP, Binary & Hex
- **Networks & Hardware**: Networks & Protocols, CAN bus & OBD, ECU Tuning & Mapping
- **Security Toolkit**: Burp Suite, Wireshark, Nmap, Hydra, Kali Linux tools, Linux (expert)
- "Fluent in" badge highlighting Python + the security tools.
- Remove all other skill entries (C/C++, Ghidra, JTAG, MIG welding, etc.).

### 5. Projects (`projects.tsx`)
- Remove all existing project cards.
- Render exactly **4 blank/template cards** with placeholder title, description, tech tags, and link — clearly marked `// EDIT ME` so you can fill them in.

### 6. Hobbies (`hobbies.tsx`) — exactly 4:
1. Chemistry & Pharmaceutical Knowledge (Flask icon)
2. Bike Enthusiast (Bike icon)
3. Car Tuning Expert (Wrench / Gauge icon)
4. Gym & Fitness (Dumbbell icon)

Remove all others (CTF, Ham Radio, Track Days, etc.).

### 7. Experience (`experience.tsx`)
- Wipe fictional jobs (Helix Robotics, Bosch). Replace with **4 blank timeline entries** (role / org / dates / blurb placeholders) for you to edit manually, matching the same template idea as projects.

### 8. Contact (`contact.tsx`)
- Replace email with `support.tamim@gmail.com`.
- Add a clearly commented `SOCIALS` constant block at the top of the file (GitHub, LinkedIn, X/Twitter, Instagram — empty strings) so you can paste your URLs in one place; renders only the ones with values.

### 9. Nav / footer
- Brand mark → "TM" or "Tamim".
- Footer → `© 2026 Tamim Mostafa`.

### 10. Login & allowed users
- Login page copy: rename to Tamim's restricted console; remove any "Alex" reference.
- After login, redirect:
  - `tamim@tamimmostafa.site` → `/admin`
  - `nona@tamimmostafa.site` → `/secret`
- **Account creation** (done via backend tools, not in code):
  - Create auth user `tamim@tamimmostafa.site` with password `TeMO@#2009!?$%*&`, display name "Tamim", role `admin`.
  - Create auth user `nona@tamimmostafa.site` with password `NonA2962010#$`, display name "Nona", role `member`.
  - Both email-confirmed so they can sign in immediately.
  - Signup remains disabled (already configured), so only these two can ever log in.
- Admin dashboard (`admin.tsx`) header → "Tamim // Command Center"; member secret page (`secret.tsx`) keeps placeholder message area untouched (still yours to write).

### Technical notes
- All edits are content-level in existing route files + one auth migration/admin call to seed the two users. No schema changes.
- Social links and the 4 project/experience templates are wired as top-of-file constants/arrays with `// EDIT ME` comments so you can change everything without hunting through JSX.
- Passwords will be set via the backend admin API (server-side seed), never committed to the repo.
