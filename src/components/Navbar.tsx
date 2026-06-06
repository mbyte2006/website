import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center justify-between gap-4 px-5 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        {/* Logo — always routes to "/" */}
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-2.5 group shrink-0 focus:outline-none"
          aria-label="Go to home"
        >
          <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Mbyte
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <NavPill to="/docs">Documentation</NavPill>
          <NavPill to="/about">About Us</NavPill>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mt-2 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="flex flex-col p-2 gap-1">
              <MobileNavLink to="/docs"  onClick={close}>Documentation</MobileNavLink>
              <MobileNavLink to="/about" onClick={close}>About Us</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function NavPill({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
          isActive
            ? 'text-white bg-white/10'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function MobileNavLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
