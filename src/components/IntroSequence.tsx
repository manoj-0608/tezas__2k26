import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [phase, setPhase] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2s
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    
    // Phase transitions
    const phase1Timer = setTimeout(() => setPhase(1), 1000);
    const phase2Timer = setTimeout(() => setPhase(2), 3000);
    const phase3Timer = setTimeout(() => setPhase(3), 4000);
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 1,
  }));

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#000000] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Stars Background */}
      <AnimatePresence>
        {phase >= 0 && (
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1],
                  scale: [0, 1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  delay: star.delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Space Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 0 ? 0.6 : 0 }}
        transition={{ duration: 2 }}
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(231 70% 10%) 70%, hsl(270 45% 15% / 0.5) 100%)',
        }}
      />

      {/* Department Text - Phase 1 */}
      <AnimatePresence>
        {phase >= 1 && phase < 3 && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="text-center">
              {['DEPARTMENT', 'OF', 'ARTIFICIAL INTELLIGENCE','AND','DATA SCIENCE'].map((word, index) => (
                <motion.span
                  key={word}
                  className="block font-orbitron text-lg md:text-2xl tracking-widest text-white/80 mb-2"
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    letterSpacing: '0.3em',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRESENTS - Phase 2 */}
      <AnimatePresence>
        {phase >= 2 && phase < 3 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ top: '60%' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1], // Elastic easing
            }}
          >
            <div className="relative">
              <motion.span 
                className="font-orbitron text-2xl md:text-4xl tracking-[0.5em] text-primary glow-text"
                initial={{ letterSpacing: '0.3em' }}
                animate={{ letterSpacing: '0.15em' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                PRESENTS
              </motion.span>
              {/* Lens flare effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '200%', opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.3 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.4), transparent)',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wormhole Transition - Phase 3 */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          >
            {/* Spiral effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: 'linear' }}
              style={{
                background: 'radial-gradient(ellipse at center, hsl(187 100% 50% / 0.1) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && phase < 3 && (
          <motion.button
            className="absolute bottom-8 right-8 font-orbitron text-sm text-white/50 hover:text-primary transition-colors duration-200 px-4 py-2 glass-panel rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={onComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SKIP →
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IntroSequence;
