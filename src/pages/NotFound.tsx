import { motion } from 'framer-motion';
import { Rocket, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="text-center px-4 relative z-10">
        {/* Floating Astronaut */}
        <motion.div
          className="mb-8"
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Rocket className="w-24 h-24 mx-auto text-primary opacity-50" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          className="font-orbitron text-8xl md:text-9xl font-black gradient-text mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          LOST IN SPACE
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          The coordinates you're looking for don't exist in our galaxy. 
          Let's get you back to Mission Control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/">
            <motion.button
              className="btn-cosmic group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-primary-foreground transition-colors">
                <Home className="w-4 h-4" />
                RETURN HOME
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
