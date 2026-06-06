import React from 'react';
import { motion } from 'motion/react';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero / Mission statement */}
      <div className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase">
              Who We Are
            </span>

            <h1
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              Our Mission
            </h1>

            {/* Slogan */}
            <p
              className="text-3xl md:text-4xl font-bold leading-snug"
              style={{
                backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              "You build the body,<br className="hidden sm:block" /> we provide the brain."
            </p>

            {/* Narrative */}
            <div className="max-w-2xl space-y-5 text-white/60 text-lg leading-[1.85]">
              <p>
                We are a <span className="text-white font-semibold">Physical AI infrastructure company.</span>
              </p>
              <p>
                We believe that the future of robotics shouldn't be stalled by the complexity of AI development.
                We are building the foundational infrastructure that allows any hardware manufacturer—whether creating
                systems for <span className="text-white/80">elderly care</span>,{' '}
                <span className="text-white/80">interactive education</span>, or{' '}
                <span className="text-white/80">autonomous workplace assistance</span>—to instantly grant their
                machines the ability to hear, remember, and act in the physical world.
              </p>
              <p>
                We handle the heavy cognitive computing so creators can focus on{' '}
                <span className="text-white/80">form, mechanics, and physical function.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Three pillars */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              Three Pillars of Machine Intelligence
            </h2>
            <p className="text-white/40 text-base">The core capabilities we deliver to every robot on our platform.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              index={0}
              word="HEAR"
              icon={<HearIcon />}
              accentGradient="linear-gradient(135deg, #8b5cf6, #6d28d9)"
              glowColor="rgba(139,92,246,0.15)"
              borderColor="rgba(139,92,246,0.2)"
              iconBg="bg-violet-500/10 border-violet-500/20"
              iconColor="text-violet-400"
              body="Real-time, ultra-low latency audio streaming processed by our neural speech engine."
            />
            <PillarCard
              index={1}
              word="REMEMBER"
              icon={<RememberIcon />}
              accentGradient="linear-gradient(135deg, #3b82f6, #1d4ed8)"
              glowColor="rgba(59,130,246,0.15)"
              borderColor="rgba(59,130,246,0.2)"
              iconBg="bg-blue-500/10 border-blue-500/20"
              iconColor="text-blue-400"
              body="Persistent long-term memory and contextual personality that evolves with every interaction."
            />
            <PillarCard
              index={2}
              word="ACT"
              icon={<ActIcon />}
              accentGradient="linear-gradient(135deg, #10b981, #047857)"
              glowColor="rgba(16,185,129,0.15)"
              borderColor="rgba(16,185,129,0.2)"
              iconBg="bg-emerald-500/10 border-emerald-500/20"
              iconColor="text-emerald-400"
              body="Spatial reasoning mapped directly to physical motor control for precise, real-world action."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Pillar card ────────────────────────────────────────────────────────── */

interface PillarCardProps {
  index: number;
  word: string;
  icon: React.ReactNode;
  accentGradient: string;
  glowColor: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
  body: string;
}

function PillarCard({
  index, word, icon, accentGradient, glowColor, borderColor, iconBg, iconColor, body,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col rounded-2xl overflow-hidden border"
      style={{
        borderColor,
        background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${glowColor}, transparent 70%), rgba(255,255,255,0.025)`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Gradient accent bar */}
      <div className="h-1 w-full" style={{ background: accentGradient }} />

      <div className="flex flex-col gap-5 p-7">
        {/* Icon + word */}
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${iconBg} ${iconColor} shrink-0`}>
            {icon}
          </div>
          <span
            className="text-2xl font-black tracking-widest"
            style={{
              backgroundImage: accentGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-orbitron)',
            }}
          >
            {word}
          </span>
        </div>

        {/* Body */}
        <p className="text-white/50 text-sm leading-relaxed">{body}</p>
      </div>
    </motion.div>
  );
}

/* ─── Pillar SVG icons ───────────────────────────────────────────────────── */

function HearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  );
}

function RememberIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
      <path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
    </svg>
  );
}

function ActIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
