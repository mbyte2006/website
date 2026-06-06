import { useState } from 'react';
import { motion } from 'motion/react';
import Footer from '../components/Footer';

type Track = 'C++' | 'Python' | 'ROS';

const TRACKS: Track[] = ['C++', 'Python', 'ROS'];

const FILE_NAMES: Record<Track, string> = {
  'C++':    'robot_brain.cpp',
  'Python': 'robot_brain.py',
  'ROS':    'robot_node.cpp',
};

const LANG_LABELS: Record<Track, string> = {
  'C++':    'C++',
  'Python': 'Python 3',
  'ROS':    'ROS 2 / C++',
};

export default function DocsPage() {
  const [activeTrack, setActiveTrack] = useState<Track>('C++');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Page header */}
      <div className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(139,92,246,0.09)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-5 tracking-widest uppercase">
            Developer Reference
          </span>
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Documentation
          </h1>
          <p className="text-white/50 text-lg max-w-lg">
            Developer guides and API references for integrating our AI brain.
          </p>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar — desktop */}
          <aside className="hidden md:flex flex-col gap-1 w-48 shrink-0 pt-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 px-3 mb-2">
              SDK Tracks
            </p>
            {TRACKS.map(track => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all duration-200 ${
                  activeTrack === track
                    ? 'bg-white/[0.08] text-white border-l-2 border-violet-500 pl-[10px]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04] border-l-2 border-transparent pl-[10px]'
                }`}
              >
                <TrackIcon track={track} active={activeTrack === track} />
                {track}
              </button>
            ))}

            {/* Status note */}
            <div className="mt-6 px-3 py-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
              <p className="text-amber-400/70 text-xs leading-relaxed">
                SDK under active development. Docs will update as endpoints are finalized.
              </p>
            </div>
          </aside>

          {/* Mobile tab strip */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {TRACKS.map(track => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTrack === track
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'bg-white/[0.04] text-white/40 border border-white/[0.07] hover:text-white/70'
                }`}
              >
                <TrackIcon track={track} active={activeTrack === track} />
                {track}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1 min-w-0"
          >
            {/* Track header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">{activeTrack} SDK</h2>
              <p className="text-white/40 text-sm">{LANG_LABELS[activeTrack]} · Mbyte AI Brain Integration</p>
            </div>

            {/* Code window */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c0c]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-amber-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-3 text-xs text-white/30 font-mono tracking-wide">
                  {FILE_NAMES[activeTrack]}
                </span>
                <span className="ml-auto text-[10px] text-white/20 font-mono uppercase tracking-widest">
                  {LANG_LABELS[activeTrack]}
                </span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="flex gap-5">
                  {/* Line numbers */}
                  <div className="flex flex-col gap-[5px] text-white/15 text-right text-xs pt-[2px] select-none shrink-0">
                    {Array.from({ length: 12 }, (_, i) => (
                      <span key={i + 1}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                    <span className="text-emerald-400/55">
                      {'/**'}
                    </span>
                    <span className="text-emerald-400/55">
                      {' * Documentation Coming Soon.'}
                    </span>
                    <span className="text-emerald-400/55">
                      {' * SDK and API endpoints are currently'}
                    </span>
                    <span className="text-emerald-400/55">
                      {' * under active development.'}
                    </span>
                    <span className="text-emerald-400/55">
                      {' */'}
                    </span>
                    <span className="text-white/0">&nbsp;</span>
                    <span className="text-violet-400/40">
                      {'#include <mbyte_brain.h>'}
                    </span>
                    <span className="text-white/0">&nbsp;</span>
                    <span className="text-blue-400/35">
                      {'MbyteBrain'}
                      <span className="text-white/30">{' brain;'}</span>
                    </span>
                    <span className="text-white/0">&nbsp;</span>
                    <span className="text-white/20">
                      {'// ...'}
                    </span>
                    <span className="text-white/25">
                      <span className="cursor-blink">▌</span>
                    </span>
                  </div>
                </div>

                {/* Skeleton placeholder lines */}
                <div className="mt-8 flex flex-col gap-2.5 pl-10">
                  {[68, 45, 78, 35, 55, 42].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-sm bg-white/[0.06] animate-pulse"
                      style={{ width: `${w}%`, animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Coming soon info cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Authentication', 'Audio Streaming', 'Memory API'].map((topic, i) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <div className="w-2 h-2 rounded-full bg-violet-500/50 animate-pulse shrink-0" />
                  <span className="text-sm text-white/40 font-medium">{topic}</span>
                  <span className="ml-auto text-[10px] text-amber-400/60 font-semibold uppercase tracking-wider shrink-0">
                    Soon
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Track icon ─────────────────────────────────────────────────────────── */

function TrackIcon({ track, active }: { track: Track; active: boolean }) {
  const cls = `transition-colors duration-200 ${active ? 'text-violet-400' : 'text-white/25'}`;
  if (track === 'C++') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cls}>
      <path d="M6 12h4M8 10v4" />
      <path d="M14 12h4M16 10v4" />
    </svg>
  );
  if (track === 'Python') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M12 2C8 2 7 4 7 6v2h5v1H5C3 9 2 10 2 13s1 4 3 4h2v-2c0-2 1-3 5-3s5 1 5 3v2h2c2 0 3-1 3-4s-1-4-3-4h-7V8h5V6c0-2-1-4-5-4z" />
      <circle cx="9.5" cy="5.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}
