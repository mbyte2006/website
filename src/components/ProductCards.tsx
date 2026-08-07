import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

type Product = {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  to: string;
  cta: string;
  dashboardHref?: string;
  accentBar: string;
  glow: string;
  border: string;
  tagCls: string;
  pillCls: string;
  ctaCls: string;
};

const PRODUCTS: Product[] = [
  {
    tag: 'Flagship · Hardware',
    title: 'Indoor Autopilot System',
    description:
      'Edge AI navigation for any indoor mobile platform. Starting with self-driving wheelchairs for hospitals, airports, and malls.',
    pills: ['LiDAR SLAM', 'Machine Vision', 'Edge AI'],
    to: '/autopilot',
    cta: 'Learn More',
    accentBar: 'linear-gradient(90deg, #7c3aed, #a855f7)',
    glow: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    tagCls: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    pillCls: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    ctaCls:
      'bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_36px_rgba(139,92,246,0.55)]',
  },
  {
    tag: 'Infrastructure · PaaS',
    title: 'Voice AI Platform',
    description:
      'Cloud AI brain for any voice-enabled robot — speech recognition, language intelligence, memory, and voice synthesis.',
    pills: ['Speech Recognition', 'Memory', 'Language AI'],
    to: '/docs',
    cta: 'Explore Docs',
    dashboardHref: 'https://dashboard.mbyte.my/',
    accentBar: 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
    glow: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    tagCls: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    pillCls: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    ctaCls:
      'bg-gradient-to-br from-blue-500 to-blue-800 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_36px_rgba(59,130,246,0.5)]',
  },
];

export default function ProductCards() {
  return (
    <section id="product-cards" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="text-white/30 text-sm uppercase tracking-[0.2em] font-semibold">
            What we build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${p.border}`,
                background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${p.glow}, transparent 70%), rgba(255,255,255,0.025)`,
                boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
              }}
            >
              {/* Accent bar */}
              <div className="h-[2px] w-full shrink-0" style={{ background: p.accentBar }} />

              <div className="flex flex-col gap-6 p-8 flex-1">
                {/* Tag */}
                <span className={`w-fit text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${p.tagCls}`}>
                  {p.tag}
                </span>

                {/* Title + description */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="text-2xl font-black tracking-tight text-white leading-tight"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-[1.85]">{p.description}</p>
                </div>

                {/* Capability pills */}
                <div className="flex flex-wrap gap-2">
                  {p.pills.map(pill => (
                    <span
                      key={pill}
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${p.pillCls}`}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to={p.to}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white transition-shadow duration-300 ${p.ctaCls}`}
                  >
                    {p.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {p.dashboardHref && (
                    <a
                      href={p.dashboardHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white/70 bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:text-white transition-all duration-200"
                    >
                      Open Dashboard
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
