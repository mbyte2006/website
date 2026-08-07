import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type Accent = 'violet' | 'blue' | 'emerald' | 'amber';

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: Accent;
};

const FEATURES: Feature[] = [
  {
    title: 'LiDAR SLAM Navigation',
    body: 'Real-time map building and autonomous path planning — no pre-mapping required.',
    icon: <LidarIcon />,
    accent: 'violet',
  },
  {
    title: 'On-Device Edge AI',
    body: 'All inference runs locally on embedded hardware. No cloud round-trips, no latency.',
    icon: <ChipIcon />,
    accent: 'blue',
  },
  {
    title: 'Obstacle Avoidance',
    body: '360° real-time detection and dynamic re-routing around people and objects.',
    icon: <ShieldIcon />,
    accent: 'emerald',
  },
  {
    title: 'Adaptive Camera Intelligence',
    body: 'Camera handles uncertain and special situations LiDAR cannot. Every edge case makes the system smarter.',
    icon: <CameraIcon />,
    accent: 'amber',
  },
];

const ACCENT: Record<Accent, { border: string; bg: string; text: string; glow: string }> = {
  violet:  { border: 'border-violet-500/20',  bg: 'bg-violet-500/10',  text: 'text-violet-400',  glow: 'rgba(139,92,246,0.1)'  },
  blue:    { border: 'border-blue-500/20',    bg: 'bg-blue-500/10',    text: 'text-blue-400',    glow: 'rgba(59,130,246,0.1)'  },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'rgba(16,185,129,0.1)'  },
  amber:   { border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   glow: 'rgba(245,158,11,0.1)'  },
};

export default function FlagshipMobility() {
  return (
    <section
      id="mobility"
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.11)_0%,transparent_70%)] pointer-events-none" />
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
            Flagship Product · MVP In Development
          </span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-white"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Autonomous Wheelchair System
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Self-navigating indoor mobility powered by LiDAR SLAM, Edge AI inference,
            and real-time obstacle avoidance — no internet required.
          </p>
        </motion.div>

        {/* Main showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.07), transparent 65%), rgba(255,255,255,0.025)',
            boxShadow: '0 0 0 1px rgba(139,92,246,0.15), 0 32px 80px rgba(0,0,0,0.45)',
          }}
        >
          {/* Gradient accent bar */}
          <div
            className="h-[2px] w-full"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #7c3aed 25%, #a855f7 60%, transparent 100%)' }}
          />

          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Left — description + use cases + status */}
              <div className="flex flex-col gap-7 lg:w-[38%] shrink-0">
                <div className="flex flex-col gap-4">
                  <p className="text-white/65 text-base leading-[1.9]">
                    We are building the first Edge AI autopilot system for indoor wheelchairs —
                    fully autonomous navigation with on-device intelligence, designed for
                    structured indoor environments.
                  </p>
                  <p className="text-white/35 text-sm leading-relaxed">
                    Hospitals, airports, and shopping malls require reliable, silent, and
                    privacy-safe passenger transport. We are solving that.
                  </p>
                </div>

                {/* Environment pills */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-3">
                    Target Environments
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Hospitals', 'Airports', 'Shopping Malls', 'Exhibition Halls'].map(place => (
                      <span
                        key={place}
                        className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development status */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0 mt-1" />
                  <div>
                    <p className="text-white/75 text-sm font-semibold mb-0.5">MVP In Active Development</p>
                    <p className="text-white/30 text-xs leading-relaxed">
                      Seeking pilot partners for first hospital and airport deployments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {FEATURES.map((feat, i) => (
                  <FeatureCard key={feat.title} feature={feat} index={i} />
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <motion.a
                href="mailto:mbyte2026@gmail.com?subject=Partnership%20Inquiry%20%E2%80%94%20Autonomous%20Wheelchair"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_48px_rgba(139,92,246,0.65)] transition-shadow duration-300"
              >
                Partner with us
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <p className="text-white/25 text-xs leading-relaxed max-w-xs">
                We are actively looking for hospital and airport partners for our pilot program.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Feature card ───────────────────────────────────────────────────────── */

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const c = ACCENT[feature.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
      className={`flex flex-col gap-4 p-5 rounded-2xl border ${c.border}`}
      style={{
        background: `radial-gradient(ellipse 140% 80% at 50% 0%, ${c.glow}, transparent 70%), rgba(255,255,255,0.02)`,
      }}
    >
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${c.bg} ${c.border} ${c.text}`}>
        {feature.icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
        <p className="text-white/40 text-xs leading-relaxed">{feature.body}</p>
      </div>
    </motion.div>
  );
}

/* ─── SVG icons ──────────────────────────────────────────────────────────── */

function LidarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 6a6 6 0 0 1 6 6" />
      <path d="M12 10a2 2 0 0 1 2 2" />
      <path d="M2 12a10 10 0 0 0 10 10" strokeOpacity="0.3" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M7 9H4M7 12H4M7 15H4" />
      <path d="M17 9h3M17 12h3M17 15h3" />
      <path d="M9 7V4M12 7V4M15 7V4" />
      <path d="M9 17v3M12 17v3M15 17v3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v7c0 4.4 3.8 8.5 9 9.5 5.2-1 9-5.1 9-9.5V7l-9-5z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
