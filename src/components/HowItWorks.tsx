import React from 'react';
import { motion } from 'motion/react';

const STEPS = [
  {
    number: '01',
    title: 'Configure Your AI',
    body: "Sign up to our dashboard and customize your robot's personality and memory settings.",
    icon: <ConfigureIcon />,
  },
  {
    number: '02',
    title: 'Get Your Auth Token',
    body: 'Generate and copy your secure authentication token with a single click.',
    icon: <TokenIcon />,
  },
  {
    number: '03',
    title: 'Flash Your Hardware',
    body: 'Paste the token into our custom library, then compile and flash your hardware to bring it to life.',
    icon: <FlashIcon />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-black py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
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
            How It Works
          </h2>
          <p className="text-white/50 text-lg">Live in 3 simple steps.</p>
        </motion.div>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.number}>
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="flex-1 flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #60a5fa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40">
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>

              {/* Connector between steps */}
              {i < STEPS.length - 1 && (
                <>
                  {/* Desktop: horizontal arrow */}
                  <div className="hidden md:flex items-start pt-[3.75rem] px-1 shrink-0">
                    <div className="flex items-center gap-0 text-white/15">
                      <div
                        className="w-8 border-t border-dashed border-white/15"
                        style={{ borderTopStyle: 'dashed' }}
                      />
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 -ml-px">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile: vertical divider */}
                  <div className="md:hidden flex items-center gap-3 px-1 py-1">
                    <div className="flex flex-col items-center gap-1 ml-8">
                      <div className="w-px h-3 bg-violet-500/30" />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-violet-500/40">
                        <path d="M6 2v8M2 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Step icons ────────────────────────────────────────────────────────── */

function ConfigureIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}

function TokenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="15" r="4" />
      <path d="M12 11.5V7a4 4 0 0 1 8 0v3" />
      <rect x="14" y="10" width="6" height="7" rx="1" />
      <circle cx="17" cy="13.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FlashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" />
      <path d="M12 9l-2 3h4l-2 3" />
    </svg>
  );
}
