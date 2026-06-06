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
              <SocialRowLink href="#" icon={<GitHubIcon />} label="GitHub" />
              <SocialRowLink href="#" icon={<TikTokIcon />} label="TikTok" />
              <SocialRowLink href="#" icon={<XIcon />} label="Twitter / X" />
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

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
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

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
