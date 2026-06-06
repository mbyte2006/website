import React from 'react';
import { motion } from 'motion/react';

interface FocusCardProps {
  index: number;
  icon: React.ReactNode;
  iconClass: string;
  iconBg: string;
  headerGlow: string;
  title: string;
  body: string;
}

export default function OurCoreFocus() {
  return (
    <section id="our-focus" className="relative bg-black py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            Our Core Focus
          </h2>
          <p className="text-white/50 text-lg">Specialized brains for specialized bodies.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FocusCard
            index={0}
            icon={<CompanionRobotIcon />}
            iconClass="text-pink-400"
            iconBg="bg-pink-500/10 border border-pink-500/20"
            headerGlow="rgba(236,72,153,0.1)"
            title="AI Companion Robot"
            body="Emotional intelligence and social interaction for the next generation of personal companions."
          />
          <FocusCard
            index={1}
            icon={<DesktopRobotIcon />}
            iconClass="text-blue-400"
            iconBg="bg-blue-500/10 border border-blue-500/20"
            headerGlow="rgba(59,130,246,0.1)"
            title="Desktop Robot"
            body="Productivity-focused intelligence for robotic arms and desktop assistants."
          />
          <FocusCard
            index={2}
            icon={<SmartHomeIcon />}
            iconClass="text-emerald-400"
            iconBg="bg-emerald-500/10 border border-emerald-500/20"
            headerGlow="rgba(16,185,129,0.1)"
            title="Smart Home"
            body="Integrated brain systems for autonomous home maintenance and security robots."
          />
        </div>
      </div>
    </section>
  );
}

function FocusCard({ index, icon, iconClass, iconBg, headerGlow, title, body }: FocusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden"
    >
      {/* Icon header area */}
      <div
        className="h-32 flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse 100% 100% at 50% 100%, ${headerGlow}, transparent)`,
        }}
      >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} ${iconClass}`}>
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Content */}
      <div className="p-7 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{body}</p>
      </div>
    </motion.div>
  );
}

/* ─── SVG icons ─────────────────────────────────────────────────────────── */

function CompanionRobotIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Heart */}
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      {/* Neural crosshair inside */}
      <circle cx="12" cy="11.5" r="1.4" />
      <path d="M12 8.5V10M12 13V14.5M9 11.5H10.5M13.5 11.5H15" />
    </svg>
  );
}

function DesktopRobotIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Base */}
      <path d="M2 21h7" />
      {/* Vertical arm */}
      <path d="M5.5 21V13" />
      {/* Elbow joint */}
      <circle cx="5.5" cy="12" r="1.5" />
      {/* Horizontal arm */}
      <path d="M5.5 12H15" />
      {/* Wrist joint */}
      <circle cx="15" cy="12" r="1.5" />
      {/* Gripper fingers */}
      <path d="M17 10l2.5-1.5M17 14l2.5 1.5" />
    </svg>
  );
}

function SmartHomeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* House roof */}
      <path d="M3 11L12 3l9 8" />
      {/* Walls */}
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      {/* Shield inside */}
      <path d="M12 8l3 1.5v3c0 1.5-3 2.5-3 2.5S9 14 9 12.5v-3L12 8z" />
    </svg>
  );
}
