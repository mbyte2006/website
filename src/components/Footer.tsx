import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialRowLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.08] pt-16 pb-8 px-6">
      {/* Very subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1: Branding */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/img_rb.png"
                alt="Mbyte"
                className="w-10 h-10 object-contain drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]"
              />
              <span className="text-xl font-black tracking-tight text-white">Mbyte</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                BUILD YOUR AI ROBOT
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                You build the body, we provide the brain.
              </p>
            </div>
            <p className="text-xs text-white/20">© 2026 Mbyte Technologies.</p>
          </div>

          {/* Col 2: Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#docs">Documentation</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
            </nav>
          </div>

          {/* Col 3: Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              Platform
            </h3>
            <nav className="flex flex-col gap-3">
              <FooterLink href="#core-brain">AI Communication</FooterLink>
              <FooterLink href="#">SDK Integration</FooterLink>
              <FooterLink href="#">Neural Engine</FooterLink>
            </nav>
          </div>

          {/* Col 4: Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              Community
            </h3>
            <div className="flex flex-col gap-3">
              <SocialRowLink href="https://www.instagram.com/mbyte.3d?igsh=MWlrbml3dzRicGV4dw==" icon={<InstagramIcon />} label="Instagram" />
              <SocialRowLink href="https://www.tiktok.com/@mbyte11?_r=1&_t=ZS-96yMYV49BQ5" icon={<TikTokIcon />} label="TikTok" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs">
          <span>All rights reserved. Mbyte Technologies 2026.</span>
          <div className="flex gap-5">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function SocialRowLink({ href, icon, label }: SocialRowLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 group text-white/40 hover:text-white transition-colors duration-200"
    >
      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/[0.09] group-hover:border-white/15 transition-all duration-200">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

/* ─── Social SVG icons ───────────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  );
}
