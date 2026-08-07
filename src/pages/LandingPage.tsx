import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import ProductCards from '../components/ProductCards';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <HeroBanner />
      <ProductCards />
      <Footer />
    </>
  );
}

function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero_banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] uppercase"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            <span className="block text-white drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]">
              BUILD YOUR
            </span>
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c084fc 100%)' }}
            >
              AI ROBOT
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed"
          >
            You build the body,{' '}
            <span className="text-white font-semibold">we provide the brain.</span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('product-cards')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-2 flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base tracking-wide bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_55px_rgba(139,92,246,0.75)] transition-shadow duration-300"
          >
            See Our Flagship
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
