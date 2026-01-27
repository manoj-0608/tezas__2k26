import { motion } from 'framer-motion';
import { ChevronDown, CalendarDays, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import spaceNebulaBg from '@/assets/space-nebula-bg.jpg';
import astronautImg from '@/assets/astronaut-transparent-final.png';
import saturnImg from '@/assets/saturn-planet.png';

const HeroSection = () => {
  // Target date for the symposium
  const targetDate = new Date('2026-02-09T00:00:00');

  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Deep Space Nebula */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src={spaceNebulaBg}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, hsl(231 70% 10% / 0.8) 70%)',
            }}
          />
        </motion.div>

        {/* Layer 2: Saturn Planet */}
        <motion.div
          className="absolute -right-20 top-20 w-64 md:w-96 lg:w-[500px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{
            filter: 'brightness(0.7) saturate(0.8) hue-rotate(-10deg)',
            mixBlendMode: 'screen',
          }}
        >
          <img
            src={saturnImg}
            alt=""
            className="w-full h-auto opacity-40 drop-shadow-[0_0_60px_hsl(var(--primary)/0.18)]"
          />
        </motion.div>

        {/* Layer 3: Floating Astronaut */}
        <motion.div
          className="absolute left-5 md:left-20 bottom-20 md:bottom-32 w-32 md:w-48 lg:w-64"
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src={astronautImg}
            alt=""
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.p
          className="font-inter text-sm md:text-base tracking-[0.3em] text-primary/80 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="gradient-text inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            TEZAS
          </motion.span>
          <span className="text-foreground ml-2 md:ml-4">2K26</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Embark on an interstellar journey of innovation, technology, and discovery
        </motion.p>

        {/* Event Details */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-foreground/80">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span>February 9, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="w-5 h-5 text-primary" />
            <span> R.M.K COLLEGE OF ENGINEERING AND TECHNOLOGY </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p className="font-orbitron text-sm tracking-widest text-muted-foreground mb-6">
            LAUNCH COUNTDOWN
          </p>
          <CountdownTimer targetDate={targetDate} />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToEvents}
          className="btn-cosmic group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-primary-foreground transition-colors">
            EXPLORE EVENTS
            <ChevronDown className="w-4 h-4" />
          </span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="scroll-indicator cursor-pointer"
          onClick={scrollToEvents}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
