import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

/* ─── Data ───────────────────────────────────────────────────────────────── */

type Accent = 'violet' | 'blue' | 'emerald' | 'amber';

type VideoEntry = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
  accent: Accent;
};

// To add a new video in the future, just push a new object here.
const VIDEOS: VideoEntry[] = [
  {
    id: 'qK0F5SAb7Xg',
    title: 'SLAM Floorplan Mapping',
    description: 'Real-time LiDAR-based floor plan generation using simultaneous localization and mapping.',
    tag: 'Navigation',
  },
  {
    id: '2M_RCnrJXfY',
    title: 'AMCL & Nav2 Autonomous Navigation',
    description: 'Full autonomous waypoint navigation using Adaptive Monte Carlo Localization and ROS 2 Nav2.',
    tag: 'Autonomy',
  },
];

const FEATURES: Feature[] = [
  {
    title: 'LiDAR SLAM Navigation',
    body: 'Real-time map building and path planning — no pre-mapping required.',
    icon: <LidarIcon />,
    accent: 'violet',
  },
  {
    title: 'Adaptive Camera Intelligence',
    body: 'Camera handles uncertain situations LiDAR cannot. Every edge case makes the system smarter.',
    icon: <CameraIcon />,
    accent: 'amber',
  },
  {
    title: 'On-Device Edge AI',
    body: 'All inference runs locally on embedded hardware. No cloud, no latency.',
    icon: <ChipIcon />,
    accent: 'blue',
  },
  {
    title: 'Obstacle Avoidance',
    body: '360° real-time detection and dynamic re-routing around people and objects.',
    icon: <ShieldIcon />,
    accent: 'emerald',
  },
];

const ACCENT: Record<Accent, { border: string; bg: string; text: string; glow: string }> = {
  violet:  { border: 'border-violet-500/20',  bg: 'bg-violet-500/10',  text: 'text-violet-400',  glow: 'rgba(139,92,246,0.1)'  },
  blue:    { border: 'border-blue-500/20',    bg: 'bg-blue-500/10',    text: 'text-blue-400',    glow: 'rgba(59,130,246,0.1)'  },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'rgba(16,185,129,0.1)'  },
  amber:   { border: 'border-amber-500/20',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   glow: 'rgba(245,158,11,0.1)'  },
};

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AutopilotPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* ── Page header ── */}
      <div className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-7 max-w-3xl"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase">
                Flagship Product
              </span>
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                MVP In Development
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              Indoor Autopilot System
            </h1>

            {/* Primary tagline */}
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Edge AI navigation stack for indoor mobile platforms.{' '}
              <span className="text-white/90">No internet required.</span>
            </p>

            {/* Secondary clarifier */}
            <p className="text-white/30 text-sm max-w-xl leading-relaxed">
              Starting with self-driving wheelchairs for hospitals, airports, and malls —
              built to run on any indoor mobile platform.
            </p>

            {/* CTA */}
            <motion.a
              href="https://wa.me/60143021032?text=Hi%20Reagan%2C%20I%20found%20you%20from%20your%20website%20and%20I%27m%20interested%20in%20partnering%20with%20Mbyte%20Technologies!%20%F0%9F%91%8B"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-fit items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_48px_rgba(139,92,246,0.65)] transition-shadow duration-300"
            >
              Partner with us
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── How It Works + Context ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              How It Works
            </h2>
            <p className="text-white/40 text-base max-w-lg">
              Four layers of intelligence working together in real time.
            </p>
          </motion.div>

          {/* Big card: left context + right 2×2 feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.07), transparent 65%), rgba(255,255,255,0.025)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.15), 0 32px 80px rgba(0,0,0,0.45)',
            }}
          >
            <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent, #7c3aed 30%, #a855f7 70%, transparent)' }} />

            <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-10">

              {/* Left — context, environments, status */}
              <div className="flex flex-col gap-7 lg:w-[36%] shrink-0">
                <div className="flex flex-col gap-3">
                  <p className="text-white/60 text-base leading-[1.9]">
                    Designed for structured indoor environments where reliable,
                    silent, and privacy-safe autonomous transport is critical.
                  </p>
                  <p className="text-white/30 text-sm leading-relaxed">
                    Starting with wheelchairs — built to run on any indoor mobile platform.
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

                {/* Status */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0 mt-1" />
                  <div>
                    <p className="text-white/75 text-sm font-semibold mb-0.5">MVP In Active Development</p>
                    <p className="text-white/30 text-xs leading-relaxed">
                      Seeking pilot partners for hospital and airport deployments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — 2×2 feature grid */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {FEATURES.map((feat, i) => (
                  <FeatureCard key={feat.title} feature={feat} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Simulations & Demos ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              Simulations &amp; Demos
            </h2>
            <p className="text-white/40 text-base max-w-lg">
              Early-stage prototypes running on ROS 2. Hardware in progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {VIDEOS.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
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
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
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

/* ─── Video card ─────────────────────────────────────────────────────────── */

function VideoCard({ video, index }: { video: VideoEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]"
    >
      {/* 16:9 responsive iframe */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      {/* Caption */}
      <div className="p-5 flex flex-col gap-2">
        <span className="w-fit px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-wider">
          {video.tag}
        </span>
        <h3 className="text-white font-bold text-base">{video.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{video.description}</p>
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

function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
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
