import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Clock } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  type: 'keynote' | 'event' | 'break';
}



const timelineEvents: TimelineEvent[] = [
  { time: '9:00AM to 9:30AM', title: 'INAUGRATION', description: 'Inaugural address and keynote by industry leaders', type: 'keynote' },
  { time: '9:30AM to 12PM', title: 'InnoVerse', description: 'Presentation', type: 'event' },
  { time: '9:30AM to 10:30AM', title: 'Pressure & Treasure', description: 'Pressure & Treasure is a high-stakes, multi-level treasure hunt that tests teamwork, strategy, and calm under pressure. Teams must crack challenges across five themed levels, each unlocking the path forward. One mistake costs time—one smart move leads closer to victory.', type: 'event' },
  { time: '9:30AM to 10:30AM', title: 'Cosmic Compile', description: 'Decode logic and code accurately in this stage interstellar race against time.', type: 'event' },
  { time: '9:30AM to 10:30AM', title: 'Screen 2 Scene', description: 'A single, intense round where teams interpret and creatively transform visual input with precision.', type: 'event' },
  { time: '11AM to 12PM', title: 'Think and Ink 3.0', description: 'technical challenge that tests analytical thinking', type: 'event' },
  { time: '11AM to 12PM', title: 'Galactic Conversation', description: 'Master the art of the ask. Use logic and creativity to navigate structured dialogues with non-human intelligence', type: 'event' },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, hsl(187 100% 50% / 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Rotating Galaxy (subtle) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        style={{
          background: 'conic-gradient(from 0deg, transparent, hsl(187 100% 50% / 0.1), transparent, hsl(263 84% 67% / 0.1), transparent)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-inter text-sm tracking-[0.3em] text-primary mb-4"
          >
            MISSION TIMELINE
          </motion.p>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">EVENT </span>
            <span className="gradient-text">SCHEDULE</span>
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Navigate through our carefully planned constellation of events
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* SVG Path */}
          <svg
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1"
            preserveAspectRatio="none"
          >
            {/* Background Line */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="hsl(231 30% 25%)"
              strokeWidth="2"
            />
            {/* Animated Progress Line */}
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="hsl(187 100% 50%)"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Node */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10 ${event.type === 'keynote'
                    ? 'bg-primary w-6 h-6'
                    : event.type === 'break'
                      ? 'bg-secondary'
                      : 'bg-muted border-2 border-primary'
                    }`}
                  whileInView={{
                    scale: [0, 1.2, 1],
                    transition: { duration: 0.4 }
                  }}
                  viewport={{ once: true }}
                >
                  {event.type === 'keynote' && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass-panel rounded-lg p-4 md:p-6 hover:border-primary/40 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-orbitron text-sm text-primary">{event.time}</span>
                    </div>
                    <h3 className="font-orbitron text-lg font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rocket at end */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-4 rounded-full bg-primary/10 border border-primary/30"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
