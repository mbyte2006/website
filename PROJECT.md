# Mbyte Technologies — Project Reference

> Snapshot of architecture, content, and integration details.  
> Update this file whenever structural or strategic decisions change.

---

## Company Identity

| Field | Value |
|---|---|
| Name | Mbyte Technologies |
| Email | mbyte2026@gmail.com |
| Stage | Deep-tech startup — MVP in active development |
| Slogan | "You build the body, we provide the brain." |
| Dashboard (Voice PaaS) | https://dashboard.mbyte.my/ |
| Logo | `/public/img_rb.png` |

### Strategic Position (Post-Pivot)

**Flagship:** Edge AI autonomous wheelchair — indoor autopilot systems for hospitals, airports, and malls.  
**Secondary:** Voice PaaS (mbyte_audio_robot) — cloud AI infrastructure for any voice-enabled robot or connected device.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript (`.tsx`) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` block) |
| Animation | `motion/react` — import from `motion/react`, **not** `framer-motion` |
| Routing | React Router DOM v6 (`BrowserRouter` in `main.tsx`) |
| Icons | `lucide-react` for utility icons; custom inline SVGs for brand icons |
| Fonts | Orbitron (headings) · Inter (body) — both via Google Fonts |
| Forms | Formspree (`https://formspree.io/f/xnjynboe`) |
| Env vars | Vite `VITE_` prefix, declared in `src/vite-env.d.ts` |

### Global CSS (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  --font-orbitron: "Orbitron", ui-sans-serif, system-ui, sans-serif;
  --color-brand-purple: #8b5cf6;
}

@layer base {
  html { scroll-behavior: smooth; }
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor-blink { animation: cursor-blink 1.1s step-end infinite; }
```

### Recurring Style Patterns

| Purpose | Classes / Values |
|---|---|
| Page background | `bg-black text-white` |
| Accent colour | `#8b5cf6` / `violet-500` |
| Glassmorphic card | `bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl` |
| Active sidebar item | `bg-white/[0.08] text-white border-l-2 border-violet-500` |
| Section top glow | `bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.09),transparent_70%)]` |
| Section separator | `absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent` |
| Orbitron heading | `style={{ fontFamily: 'var(--font-orbitron)' }}` |
| Scroll reveal | `whileInView={{ opacity:1, y:0 }} viewport={{ once: true, margin: '-80px' }}` |
| CTA button | `bg-gradient-to-br from-violet-500 to-purple-700 rounded-full shadow-[0_0_24px_rgba(139,92,246,0.35)]` |

---

## Project Structure

```
mbyte---ai-robot-brain-paas/
├── public/
│   ├── img_rb.png               # Company logo
│   ├── hero_banner.mp4          # Landing page hero video
│   ├── wiring_diagram2.jpeg     # Hardware wiring diagram (Pin Diagram docs)
│   └── ELECTRIC_circuit.png     # Electric circuit diagram (Pin Diagram docs)
├── src/
│   ├── main.tsx                 # Entry point — wraps App in BrowserRouter
│   ├── App.tsx                  # Route definitions
│   ├── index.css                # Tailwind v4 + Google Fonts + custom animations
│   ├── vite-env.d.ts            # ImportMeta env type declarations
│   ├── components/
│   │   ├── Navbar.tsx           # Floating pill navbar (fixed, top-center)
│   │   ├── Logo.tsx             # img_rb.png with violet drop-shadow
│   │   ├── FlagshipMobility.tsx # [NEW] Autonomous wheelchair showcase section
│   │   ├── CoreBrainModules.tsx # "The Unified Cognitive Layer" — Voice PaaS cards
│   │   ├── WeSupport.tsx        # Infrastructure pillars (Neural Engine, SDK, Cloud)
│   │   ├── HowItWorks.tsx       # 3-step horizontal flow section
│   │   ├── OurCoreFocus.tsx     # Core focus values section
│   │   ├── FeedbackSection.tsx  # Formspree feedback form with 5-star rating
│   │   └── Footer.tsx           # 4-column footer with Instagram + TikTok
│   └── pages/
│       ├── LandingPage.tsx          # Composes all landing sections
│       ├── DocsPage.tsx             # SDK track selector page
│       ├── ArduinoLibraryDocsPage.tsx # 10-section Arduino library docs
│       └── AboutPage.tsx            # Mission + Three Pillars page
└── .env                         # VITE_FORMSPREE_URL=https://formspree.io/f/xnjynboe
```

---

## Routes

| Path | Component | Notes |
|---|---|---|
| `/` | `LandingPage` | Hero + all landing sections |
| `/docs` | `DocsPage` | SDK track selector (Arduino IDE / Python / ROS) |
| `/docs/arduino-library` | `ArduinoLibraryDocsPage` | Full 10-section Arduino library docs |
| `/about` | `AboutPage` | Mission statement + Three Pillars |

---

## Pages

### LandingPage (`/`)

Section order (top → bottom):

1. **HeroBanner** — full-screen `<video>` (`/hero_banner.mp4`)
   - H1: "Redefining Indoor Autonomy with Edge AI" (3-line Orbitron, last line gradient)
   - Subtitle: "We build Edge AI autopilot systems for indoor mobility, starting with self-driving wheelchairs for hospitals, airports, and malls."
   - Tagline: *"You build the body, we provide the brain."*
   - CTA button: "See Our Flagship" → scrolls to `#mobility`

2. **FlagshipMobility** (`id="mobility"`) — autonomous wheelchair MVP showcase
   - Badge: "Flagship Product · MVP In Development"
   - H2: "Autonomous Wheelchair System"
   - Two-column card: left = description + environment pills + status; right = 4 feature cards
   - Feature cards: LiDAR SLAM Navigation (violet), On-Device Edge AI (blue), Obstacle Avoidance (emerald), Fleet Dashboard (amber)
   - CTA: "Partner with us" → `mailto:mbyte2026@gmail.com`

3. **CoreBrainModules** (`id="core-brain"`) — Voice PaaS developer access
   - Badge: "For Developers"
   - H2: "The Unified Cognitive Layer"
   - Subtitle: "The same AI infrastructure powering our autonomous systems — available to developers building any voice-enabled robot or connected device."
   - 3 cards: AI Communication (active → dashboard.mbyte.my), AI Image (Coming Soon), ML/DL (Coming Soon)

4. **WeSupport** — infrastructure pillars (Neural Engine / violet, SDK Integration / blue, Cloud Intelligence / teal)

5. **HowItWorks** — 3-step horizontal flow with connectors

6. **OurCoreFocus** — core focus values

7. **FeedbackSection** — Formspree form + 5-star rating

8. **Footer**

---

### DocsPage (`/docs`)

- Sidebar (desktop) + horizontal tab strip (mobile)
- Track type: `'Arduino IDE' | 'Python' | 'ROS'`
- Default active: `'Arduino IDE'`
- **Arduino IDE** → `ArduinoReadyPanel` with "Available now" badge and two buttons:
  - "View Full Documentation" → `Link to="/docs/arduino-library"`
  - "Download Library" → `https://github.com/mbyte2026/mbyte_audio_robot/releases/download/v1.0.0/mbyte_audio_robot-v1.0.0.zip`
- **Python / ROS** → Coming Soon placeholder (skeleton code + pulsing dots)

---

### ArduinoLibraryDocsPage (`/docs/arduino-library`)

10-section sidebar docs for the `mbyte_audio_robot` ESP32-S3 Arduino library.

| # | Section ID | Label |
|---|---|---|
| 1 | `overview` | Overview |
| 2 | `installation` | Installation |
| 3 | `settings` | IDE Settings |
| 4 | `pins` | Pin Diagram |
| 5 | `quickstart` | Quick Start |
| 6 | `firstboot` | First Boot Setup |
| 7 | `wifi` | Changing WiFi / ID |
| 8 | `api` | API Reference |
| 9 | `troubleshooting` | Troubleshooting |
| 10 | `changelog` | Changelog |

**Download URL** (used in page header + DocsPage):
```
https://github.com/mbyte2026/mbyte_audio_robot/releases/download/v1.0.0/mbyte_audio_robot-v1.0.0.zip
```

**Required Arduino IDE settings:**

| Setting | Value |
|---|---|
| Board | `ESP32S3 Dev Module` |
| Partition Scheme | `Huge APP (3MB No OTA/1MB SPIFFS)` ← most common build failure cause |
| Flash Size | Match board (commonly 4MB or 8MB) |
| PSRAM | Enable if supported |

**Pin wiring — Microphone (I2S, e.g. INMP441):**

| Component | Pin (ESP32) |
|---|---|
| Mic SCK | GPIO 6 |
| Mic WS | GPIO 5 |
| Mic SD | GPIO 4 |
| Mic L/R | GND |
| Mic GND | GND |
| Mic VDD | 3.3V |

**Pin wiring — Speaker amp (I2S, e.g. MAX98357A):**

| Component | Pin (ESP32) |
|---|---|
| Speaker BCLK | GPIO 12 |
| Speaker LRC | GPIO 13 |
| Speaker DIN | GPIO 11 |
| Speaker GAIN | 3.3V |
| Speaker SD | --- |
| Speaker GND | GND |
| Speaker VIN | 3.3V |

**Diagram images** (shown above tables in Pin Diagram section):
- `/wiring_diagram2.jpeg` — Wiring Diagram
- `/ELECTRIC_circuit.png` — Circuit Diagram

**API Reference:**

```cpp
mbyte.setMicPin(ws=GPIO5, sck=GPIO6, din=GPIO4)             // call before begin()
mbyte.setSpeakerPin(dout=GPIO11, bclk=GPIO12, lrck=GPIO13)  // call before begin()
mbyte.setMicSens(int sensitivity)  // 1 = normal, 0 = less sensitive
mbyte.begin(const char* deviceId = nullptr)  // starts WiFi + cloud + audio pipeline
mbyte.run()                        // call once in loop(), runs forever internally
```

---

### AboutPage (`/about`)

- Badge: "Who We Are"
- H1: "Our Mission" (Orbitron)
- Slogan: *"You build the body, we provide the brain."* (violet gradient text)
- Three narrative paragraphs about robots / kiosks / connected devices
- **Three Pillars of Machine Intelligence** grid:
  - **HEAR** (violet) — real-time audio streaming, neural speech engine
  - **REMEMBER** (blue) — persistent long-term memory, contextual personality
  - **ACT** (emerald) — spatial reasoning → motor control

---

## Components

### Navbar

- Fixed, top-center: `fixed top-5 left-1/2 -translate-x-1/2 z-50`
- Glass style: `bg-black/40 backdrop-blur-xl border border-white/10 rounded-full max-w-xl`
- Logo: `Link to="/"` → `<img src="/img_rb.png">` (w-12 h-12) with violet glow
- Links: `NavLink` to `/docs` (Documentation) and `/about` (About Us)

### FlagshipMobility

- `id="mobility"` — hero CTA scrolls here
- Large glassmorphic card with top gradient accent bar
- Left column: description, environment pills (Hospitals / Airports / Shopping Malls / Exhibition Halls), status badge
- Right column: 4 feature cards with per-card colour accent (violet / blue / emerald / amber)
- "Partner with us" → `mailto:mbyte2026@gmail.com?subject=Partnership Inquiry`

### CoreBrainModules

- `id="core-brain"`
- Badge: "For Developers"
- H2: "The Unified Cognitive Layer"
- Card 1 — **AI Communication** (active): `href="https://dashboard.mbyte.my/"` — hover lifts, blue glow
- Card 2 — **AI Image** (Coming Soon): `cursor-not-allowed opacity-65`, amber badge
- Card 3 — **ML / Deep Learning** (Coming Soon): same treatment

### FeedbackSection

- Formspree POST via `fetch()` to `import.meta.env.VITE_FORMSPREE_URL`
- `useState` for `rating` (0–5) and `hoveredStar`
- `AnimatePresence` swaps form ↔ success message on submit

### Footer

- 4 columns: Company · Product · Developers · Community
- Community: Instagram + TikTok only
  - Instagram: `https://www.instagram.com/mbyte.3d?igsh=MWlrbml3dzRicGV4dw==`
  - TikTok: `https://www.tiktok.com/@mbyte11?_r=1&_t=ZS-96yMYV49BQ5`
- Copyright: `© 2026 Mbyte Technologies. All rights reserved.`

---

## Environment Variables

| Variable | Value |
|---|---|
| `VITE_FORMSPREE_URL` | `https://formspree.io/f/xnjynboe` |

Declare in `src/vite-env.d.ts`:

```ts
interface ImportMetaEnv {
  readonly VITE_FORMSPREE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## Known Quirks & Gotchas

- **Animation import:** use `motion/react`, not `framer-motion`
- **Tailwind v4:** uses `@import "tailwindcss"` + `@theme {}` — there is no `tailwind.config.js`
- **Vite env vars:** must have `VITE_` prefix; `import.meta.env` requires the `vite-env.d.ts` declaration
- **WeSupport.tsx:** requires `import React from 'react'` (uses `React.CSSProperties`)
- **Scroll animations:** always use `viewport={{ once: true }}` to prevent re-triggering
- **Arduino partition scheme:** "Huge APP" is mandatory — the default causes a "Sketch too big" compile error
- **Coming Soon cards:** use `cursor-not-allowed opacity-65 select-none` — no hover effects, amber badge top-right
