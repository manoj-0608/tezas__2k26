import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Clock, Trophy } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  teamSize: string;
  duration: string;
  prize: string;
  registrationLink: string;
  rules: string[];
}

interface EventCardProps {
  event: Event;
  index: number;
}

const generalRules = [
  "All participants must carry valid college ID cards",
  "Registration is mandatory before the event starts",
  "Participants must follow the event coordinator's instructions",
  "Judges' decisions will be final and binding",
  "Any form of malpractice will lead to disqualification",
  "Formal dress code is mandatory"
];

const EventCard = ({ event, index }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        className="event-card cursor-pointer"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ y: -8 }}
      >
        {/* Card Gradient Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: event.gradient }}
        />

        {/* Card Content */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Icon Area */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{
              background: `linear-gradient(135deg, hsl(187 100% 50% / 0.1), hsl(263 84% 67% / 0.1))`,
              border: '1px solid hsl(187 100% 50% / 0.3)',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-primary">{event.icon}</div>
          </motion.div>

          {/* Title */}
          <h3 className="font-orbitron text-xl font-bold text-center mb-3 text-foreground">
            {event.title}
          </h3>

          {event.title === "InnoVerse" ? <h5 className="text-center"> Presentation </h5> : <p></p>}




          {/* Description */}
          <p className="font-inter text-sm text-muted-foreground text-center mb-6 flex-grow line-clamp-3">
            {event.description}
          </p>

          {/* Quick Info */}
          <div className="flex justify-center gap-4 mb-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{event.duration}</span>
            </div>
          </div>

          {/* Register Button */}
          <motion.button
            className="w-full py-3 rounded-lg font-orbitron text-sm font-semibold relative overflow-hidden group"
            style={{
              background: 'hsl(var(--glass-bg))',
              border: '1px solid hsl(187 100% 50% / 0.3)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'var(--gradient-accent)' }}
            />
            <span className="relative z-10 text-foreground group-hover:text-primary-foreground transition-colors">
              VIEW DETAILS
            </span>
          </motion.button>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 0 0 hsl(187 100% 50% / 0)',
              '0 0 20px 0 hsl(187 100% 50% / 0.2)',
              '0 0 0 0 hsl(187 100% 50% / 0)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative glass-panel rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <AnimatePresence>
                {showRules && (
                  <motion.div
                    className="absolute inset-0 z-20 bg-background/95 backdrop-blur-sm p-6 flex flex-col"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <motion.button
                      className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                      onClick={() => setShowRules(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>

                    <div className="flex-1 overflow-y-auto mt-8">
                      <h3 className="font-orbitron text-xl font-bold text-center mb-6 text-primary"> Rules</h3>
                      <ul className="space-y-4">
                        {generalRules.map((rule, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {rule}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30">
                    <div className="text-primary">{event.icon}</div>
                  </div>
                  <h2 className="font-orbitron text-2xl font-bold mb-2">{event.title}</h2>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="glass-panel rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Team Size</p>
                    <p className="font-semibold">{event.teamSize}</p>
                  </div>
                  <div className="glass-panel rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold">{event.duration}</p>
                  </div>
                </div>

                <div className="glass-panel rounded-lg p-4 mb-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">Prize Pool</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {event.prize.split(',').map((p, i) => (
                        <span key={i} className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
                          {p.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rules 
                <div className="mb-6">
                  <h3 className="font-orbitron text-lg font-semibold mb-3">Rules & Guidelines</h3>
                  <ul className="space-y-2">
                    {event.rules.map((rule, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {rule}
                      </motion.li>
                    ))}
                  </ul>
                </div> 
                
                */}

                {/* Register Button & Rules */}
                <div className="grid grid-cols-[1fr,2fr] gap-4">
                  <motion.button
                    className="py-4 rounded-lg font-orbitron font-bold text-sm bg-muted text-muted-foreground border border-white/10 hover:bg-muted/80 hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowRules(true)}
                  >
                    RULES
                  </motion.button>

                  <motion.button
                    className="w-full py-4 rounded-lg font-orbitron font-bold text-primary-foreground relative overflow-hidden"
                    style={{ background: 'var(--gradient-accent)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(event.registrationLink, '_blank')}
                  >
                    REGISTER NOW
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventCard;
