import { motion } from 'framer-motion';
import { Rocket, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(187 100% 50% / 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-primary" />
            <div>
              <span className="font-orbitron font-bold">TEZAS 2K26</span>
              <p className="text-xs text-muted-foreground">© 2026 Department of Artificial Intelligence and Data Science</p>
            </div>
          </div>

          {/* Spacer to balance layout on larger screens */}
          <div className="h-5" aria-hidden="true" />

          {/* Wormhole to Top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Launch Pad</span>
            <motion.div
              className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-4 h-4 transform -rotate-45" />
            </motion.div>
          </motion.button>
        </div>

        {/* Constellation Pattern (decorative) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
          <svg width="200" height="50" viewBox="0 0 200 50">
            <circle cx="20" cy="25" r="2" fill="currentColor" className="text-primary" />
            <circle cx="50" cy="15" r="1.5" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="35" r="2" fill="currentColor" className="text-primary" />
            <circle cx="110" cy="20" r="1.5" fill="currentColor" className="text-primary" />
            <circle cx="140" cy="30" r="2" fill="currentColor" className="text-primary" />
            <circle cx="170" cy="18" r="1.5" fill="currentColor" className="text-primary" />
            <line x1="20" y1="25" x2="50" y2="15" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
            <line x1="50" y1="15" x2="80" y2="35" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
            <line x1="80" y1="35" x2="110" y2="20" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
            <line x1="110" y1="20" x2="140" y2="30" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
            <line x1="140" y1="30" x2="170" y2="18" stroke="currentColor" className="text-primary" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
