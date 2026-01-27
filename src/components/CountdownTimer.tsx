import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { value: 0, label: 'DAYS' },
    { value: 0, label: 'HOURS' },
    { value: 0, label: 'MINS' },
    { value: 0, label: 'SECS' },
  ]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeUnits([
          { value: days, label: 'DAYS' },
          { value: hours, label: 'HOURS' },
          { value: minutes, label: 'MINS' },
          { value: seconds, label: 'SECS' },
        ]);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="timer-segment min-w-[70px] sm:min-w-[90px] md:min-w-[100px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ 
            boxShadow: '0 0 30px hsl(187 100% 50% / 0.4)',
            transition: { duration: 0.2 }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-primary glow-text"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
          <div className="font-inter text-[10px] sm:text-xs text-muted-foreground mt-2 tracking-widest">
            {unit.label}
          </div>
        </motion.div>
      ))}

      {/* Separators - Hidden on small screens */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="mx-24 text-primary/50 text-4xl font-bold"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          >
            :
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
