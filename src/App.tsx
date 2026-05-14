/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, BookOpen, Info, Mail, LogIn, Menu, X, Github, Twitter, Linkedin, ChevronRight, Heart, Monitor, Home, ArrowLeft, Eye, EyeOff, Ear, Mic, Brain, Plus } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'landing' | 'login'>('landing');
  const { scrollY } = useScroll();
  const navBgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 10]);

  if (currentPage === 'login') {
    return <LoginPage onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      {/* Mesh Background */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      {/* Navigation */}
      <motion.nav
        style={{ 
          backgroundColor: `rgba(10, 10, 10, ${navBgOpacity.get()})`,
          backdropFilter: `blur(${navBlur.get()}px)`
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentPage('landing')}>
            <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Mbyte</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#test-api">Test API</NavLink>
            <NavLink href="#docs">Documentation</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
            <button 
              onClick={() => setCurrentPage('login')}
              className="ml-4 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 font-medium"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-xl font-medium">
            <a href="#test-api" onClick={() => setIsMenuOpen(false)}>Test API</a>
            <a href="#docs" onClick={() => setIsMenuOpen(false)}>Documentation</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <button 
              onClick={() => {
                setCurrentPage('login');
                setIsMenuOpen(false);
              }}
              className="w-full py-4 rounded-xl bg-brand-purple text-center font-bold"
            >
              Login
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6 tracking-wide uppercase">
              The Future of Robotics is Here
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
              BUILD YOUR <br />
              <span className="text-gradient-purple">AI ROBOT</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              You build the body, <span className="text-white">we provide the brain.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-purple hover:bg-purple-600 font-bold text-lg transition-all glow-purple flex items-center justify-center gap-2 group">
                GET STARTED
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold text-lg transition-all">
                ENTERPRISE SOLUTION
              </button>
            </div>
          </motion.div>

          {/* Service Buttons Grid */}
          <div className="text-center mb-12 mt-32 relative z-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Service provided</h2>
            <p className="text-white/50 text-lg">Intelligent modules to breathe life into your robots.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
            <ServiceButton 
              icon={<div className="flex gap-2"><Ear className="w-6 h-6"/><Mic className="w-6 h-6"/></div>}
              title="AI Communication"
              description="Communicate with your robot via audio using our specialized API services."
            />
            <ServiceButton 
              icon={<Eye className="w-8 h-8"/>}
              title="AI Image"
              description="Comprehensive image project services for visual recognition and processing."
            />
            <ServiceButton 
              icon={<Brain className="w-8 h-8"/>}
              title="Machine Learning/Deeplearning"
              description="Train models in-platform and deploy them to hardware like ESP32."
            />
            <ServiceButton 
              icon={<Plus className="w-8 h-8 text-white/20" />}
              title="More to come"
              description="Stay tuned for even more neural capabilities coming soon."
            />
          </div>
        </div>
      </section>


      {/* Features Grid (Bonus for "High-Converting") */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 relative z-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">We support</h2>
            <p className="text-white/50 text-lg">Robust infrastructure and seamless integration for robotic systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Neural Engine"
              description="Proprietary LLM optimized for real-time spatial reasoning and motor control."
            />
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6" />}
              title="SDK Integration"
              description="Universal API compatible with ROS2, Python, and C++ hardware frameworks."
            />
            <FeatureCard 
              icon={<Info className="w-6 h-6" />}
              title="Cloud Intelligence"
              description="Massive-scale neural networks processing complex tasks in our secure cloud infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Focus Fields Section */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Focus</h2>
            <p className="text-white/50 text-lg">Specialized brains for specialized bodies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard 
              icon={<Heart className="w-8 h-8 text-pink-500" />}
              title="AI Companion Robot"
              description="Emotional intelligence and social interaction for the next generation of personal companions."
            />
            <FocusCard 
              icon={<Monitor className="w-8 h-8 text-blue-500" />}
              title="Desktop Robot"
              description="Productivity-focused intelligence for robotic arms and desktop assistants."
            />
            <FocusCard 
              icon={<Home className="w-8 h-8 text-emerald-500" />}
              title="Smart Home"
              description="Integrated brain systems for autonomous home maintenance and security robots."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 opacity-70" />
            <span className="text-xl font-bold tracking-tighter opacity-70">Mbyte</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>

          <div className="flex gap-6">
            <SocialLink icon={<Twitter className="w-5 h-5" />} />
            <SocialLink icon={<Github className="w-5 h-5" />} />
            <SocialLink icon={<Linkedin className="w-5 h-5" />} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Mbyte Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="/IMG-20260109-WA0043.jpg" 
        alt="Mbyte Logo" 
        className="w-32 h-auto object-contain""
      />
    </div>
  );
}
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-semibold text-white/70 hover:text-white transition-colors tracking-wide"
    >
      {children}
    </a>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/50 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ServiceButton({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.08] transition-all text-left flex flex-col group h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:glow-purple transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{description}</p>
    </motion.button>
  );
}

function FocusCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all hover:border-purple-500/30"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/50 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function LoginPage({ onBack }: { onBack: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-10">
            <Logo className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-white/50 mt-2">Enter your credentials to access your brain</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-brand-purple" />
                <span className="text-white/50 group-hover:text-white/70 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-brand-purple hover:text-purple-400 font-medium transition-colors">Forgot password?</a>
            </div>

            <button className="w-full py-4 rounded-xl bg-brand-purple hover:bg-purple-600 font-bold text-lg transition-all glow-purple shadow-lg shadow-purple-500/20">
              Sign In
            </button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#121212] px-2 text-white/30 backdrop-blur-xl">Or continue with</span>
            </div>
          </div>

          <button className="mt-6 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-semibold transition-all flex items-center justify-center gap-3 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google Account
          </button>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/50 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-white font-bold hover:text-brand-purple transition-colors">sign up now</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10">
      {icon}
    </a>
  );
}
