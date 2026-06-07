import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CoreBrainModules() {
  return (
    <section
      id="core-brain"
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
      {/* Subtle top-center radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.09)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Core Brain Modules
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Intelligent modules to breathe life into your robots.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Active */}
          <motion.a
            href="https://dashboard.mbyte.my/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col gap-6 p-7 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-blue-500/55 hover:bg-white/[0.08] transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icons row */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
                <MicIcon />
              </div>
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
                <EarIcon />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">
                AI Communication
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Communicate with your robot via audio using our specialized API
                services.
              </p>
            </div>

            {/* CTA row — appears on hover */}
            <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              Access module
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.a>

          {/* Card 2 — Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative flex flex-col gap-6 p-7 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.07] cursor-not-allowed select-none opacity-65"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-wide">
              Coming Soon
            </span>

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <EyeIcon />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white/60">AI Image</h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Comprehensive image project services for visual recognition and
                processing.
              </p>
            </div>
          </motion.div>

          {/* Card 3 — Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="relative flex flex-col gap-6 p-7 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.07] cursor-not-allowed select-none opacity-65"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 tracking-wide">
              Coming Soon
            </span>

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <ChipIcon />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white/60">
                Machine Learning &amp; Deep Learning
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Train models in-platform and deploy them to hardware like ESP32.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SVG icons ─────────────────────────────────────────────────────────── */

function MicIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  );
}

function EarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 0 4 0" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M7 9H4M7 12H4M7 15H4" />
      <path d="M17 9h3M17 12h3M17 15h3" />
      <path d="M9 7V4M12 7V4M15 7V4" />
      <path d="M9 17v3M12 17v3M15 17v3" />
    </svg>
  );
}
