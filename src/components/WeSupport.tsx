import React from 'react';
import { motion } from 'motion/react';

export default function WeSupport() {
  return (
    <section className="relative bg-black py-28 px-6 overflow-hidden">
      {/* Bottom-center radial glow — contrasts with CoreBrainModules' top glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(99,102,241,0.07)_0%,transparent_70%)] pointer-events-none" />
      {/* Thin top separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            We Support
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Robust infrastructure and seamless integration for robotic systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfraCard
            delay={0}
            glowColor="rgba(139,92,246,0.12)"
            borderGlow="rgba(139,92,246,0.25)"
            iconColor="text-violet-400"
            iconBg="bg-violet-500/10 border-violet-500/15"
            icon={<NeuralIcon />}
            title="Neural Engine"
            body="Proprietary LLM optimized for real-time spatial reasoning and motor control."
          />
          <InfraCard
            delay={0.1}
            glowColor="rgba(59,130,246,0.12)"
            borderGlow="rgba(59,130,246,0.25)"
            iconColor="text-blue-400"
            iconBg="bg-blue-500/10 border-blue-500/15"
            icon={<SdkIcon />}
            title="SDK Integration"
            body="Universal API compatible with ROS2, Python, and C++ hardware frameworks."
          />
          <InfraCard
            delay={0.2}
            glowColor="rgba(20,184,166,0.12)"
            borderGlow="rgba(20,184,166,0.25)"
            iconColor="text-teal-400"
            iconBg="bg-teal-500/10 border-teal-500/15"
            icon={<CloudIcon />}
            title="Cloud Intelligence"
            body="Massive-scale neural networks processing complex tasks in our secure cloud infrastructure."
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Reusable card ─────────────────────────────────────────────────────── */

interface InfraCardProps {
  delay: number;
  glowColor: string;
  borderGlow: string;
  iconColor: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}

function InfraCard({ delay, glowColor, borderGlow, iconColor, iconBg, icon, title, body }: InfraCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className="relative flex flex-col gap-6 p-7 rounded-2xl border border-white/[0.07] overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 120% 80% at 50% 0%, ${glowColor}, transparent 70%), rgba(255,255,255,0.025)`,
        boxShadow: `0 0 0 1px ${borderGlow}, 0 8px 40px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Subtle scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Icon */}
      <div className={`relative z-10 w-12 h-12 rounded-xl border flex items-center justify-center ${iconBg} ${iconColor}`}>
        {icon}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{body}</p>
      </div>
    </motion.div>
  );
}

/* ─── SVG icons ─────────────────────────────────────────────────────────── */

function NeuralIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Central node */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Satellite nodes */}
      <circle cx="12" cy="4"  r="1.5" />
      <circle cx="20" cy="8"  r="1.5" />
      <circle cx="20" cy="16" r="1.5" />
      <circle cx="12" cy="20" r="1.5" />
      <circle cx="4"  cy="16" r="1.5" />
      <circle cx="4"  cy="8"  r="1.5" />
      {/* Connections */}
      <line x1="12" y1="5.5"  x2="12" y2="9.5"  />
      <line x1="18.7" y1="8.75"  x2="14.2" y2="10.8" />
      <line x1="18.7" y1="15.25" x2="14.2" y2="13.2" />
      <line x1="12" y1="18.5" x2="12" y2="14.5" />
      <line x1="5.3" y1="15.25" x2="9.8"  y2="13.2" />
      <line x1="5.3" y1="8.75"  x2="9.8"  y2="10.8" />
    </svg>
  );
}

function SdkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Terminal prompt */}
      <rect x="2" y="3" width="20" height="16" rx="2.5" />
      {/* Prompt arrow */}
      <polyline points="6 8 9 11 6 14" />
      {/* Cursor line */}
      <line x1="12" y1="14" x2="18" y2="14" />
      {/* Dots at top (traffic lights style) */}
      <circle cx="5"  cy="6" r="0.6" fill="currentColor" />
      <circle cx="8"  cy="6" r="0.6" fill="currentColor" />
      <circle cx="11" cy="6" r="0.6" fill="currentColor" />
      {/* API connection nodes below terminal */}
      <circle cx="7"  cy="22" r="1.2" />
      <circle cx="12" cy="22" r="1.2" />
      <circle cx="17" cy="22" r="1.2" />
      <line x1="7"  y1="19" x2="7"  y2="20.8" />
      <line x1="12" y1="19" x2="12" y2="20.8" />
      <line x1="17" y1="19" x2="17" y2="20.8" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cloud shape */}
      <path d="M17.5 19H9a5 5 0 1 1 .92-9.923A6 6 0 0 1 22 14.5a5 5 0 0 1-4.5 4.5z" />
      {/* Lock body */}
      <rect x="9.5" y="13" width="5" height="4" rx="0.8" />
      {/* Lock shackle */}
      <path d="M10.5 13v-1.5a1.5 1.5 0 0 1 3 0V13" />
      {/* Keyhole dot */}
      <circle cx="12" cy="15.2" r="0.6" fill="currentColor" />
    </svg>
  );
}
