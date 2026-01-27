import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface MeteorProps {
  delay: number;
  onComplete: () => void;
}

const Meteor = ({ delay, onComplete }: MeteorProps) => {
  const startX = Math.random() * 50;
  const startY = -10;
  
  return (
    <motion.div
      className="absolute w-1 h-20 pointer-events-none"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        background: 'linear-gradient(to bottom, hsl(187 100% 50% / 0.8), transparent)',
        borderRadius: '50%',
        filter: 'blur(1px)',
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ 
        x: '120vw', 
        y: '120vh', 
        opacity: [0, 1, 1, 0],
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: 'linear',
      }}
      onAnimationComplete={onComplete}
    />
  );
};

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<number[]>([]);
  const meteorIdRef = useRef(0);

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = [];
      const count = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    // Meteor shower every 30-45 seconds
    const spawnMeteor = () => {
      const id = ++meteorIdRef.current;
      setMeteors(prev => [...prev, id]);
    };

    const meteorInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        spawnMeteor();
      }
    }, 15000);

    // Initial meteor after 5 seconds
    const initialTimeout = setTimeout(spawnMeteor, 5000);

    return () => {
      clearInterval(meteorInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const removeMeteor = (id: number) => {
    setMeteors(prev => prev.filter(m => m !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Stars */}
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
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((id) => (
        <Meteor
          key={id}
          delay={0}
          onComplete={() => removeMeteor(id)}
        />
      ))}
    </div>
  );
};

export default StarField;
