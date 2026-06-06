import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// To enable real submissions, add VITE_FORMSPREE_URL to your .env file:
// VITE_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID
const FORM_ACTION = import.meta.env.VITE_FORMSPREE_URL;

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(FORM_ACTION, {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    });
    setSubmitted(true);
  };

  const displayRating = hoveredStar || rating;

  return (
    <section className="relative bg-black py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            We Value Your Feedback
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Help us shape the future of robotic intelligence. Let us know your thoughts!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center py-8 gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank you for your feedback!
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                      Your thoughts help us build better AI for the next generation of robots. We truly appreciate it!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setRating(0);
                      setMessage('');
                    }}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  action={FORM_ACTION}
                  method="POST"
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    />
                  </div>

                  {/* Star rating */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Rating
                    </label>
                    <div
                      className="flex gap-1"
                      onMouseLeave={() => setHoveredStar(0)}
                    >
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          className={`transition-colors duration-100 ${
                            star <= displayRating ? 'text-amber-400' : 'text-white/20'
                          } hover:scale-110 transition-transform`}
                          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                        >
                          <StarIcon />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                      Your Feedback
                    </label>
                    <textarea
                      name="message"
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Tell us what you think..."
                      rows={4}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-1 w-full py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-shadow duration-300"
                  >
                    Submit Feedback
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */

function StarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
