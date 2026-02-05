import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { Code2, Presentation, Brain, Video, MessageSquare, Map } from 'lucide-react';

const events = [
  {
    id: 'innoverse',
    title: 'InnoVerse',
    description: 'InnoVerse is a platform for innovators to showcase research, ideas, and emerging solutions in Artificial Intelligence and Data Science. Participants may present individually or as a team, defending their work through clarity, originality, and technical depth. It\'s where ideas meet insight and innovation takes center stage.',
    icon: <Presentation className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(330 100% 50% / 0.3), hsl(350 100% 50% / 0.1))',
    teamSize: '1–4 Members',
    duration: '1 Round',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'Participants may present individually or as a team',
      'Defend work through clarity, originality, and technical depth',
      'Ideas must be original',
    ],
  },
  {
    id: 'think-ink',
    title: 'Think and Ink 3.0',
    description: 'Think and Ink 3.0 is a multi-round technical challenge that tests analytical thinking, AI awareness, and real-time decision-making. Teams progress through carefully designed rounds that push them to detect deception, evaluate intelligence, and deliver logical verdicts under pressure.',
    icon: <Brain className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(263 84% 67% / 0.3), hsl(300 100% 50% / 0.1))',
    teamSize: '2–3 Members',
    duration: '3 Rounds',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'Tests analytical thinking and AI awareness',
      'Real-time decision-making under pressure',
      'Teams must detect deception and evaluate intelligence',
    ],
  },
  {
    id: 'screen-scene',
    title: 'Screen 2 Scene',
    description: 'Screen 2 Scene challenges participants to transform visual input into meaningful interpretation. Teams analyze, connect, and creatively represent scenes with precision and imagination—all within a single intense round.',
    icon: <Video className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(187 100% 50% / 0.3), hsl(210 100% 50% / 0.1))',
    teamSize: '2 Members',
    duration: '1 Round',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'Transform visual input into meaningful interpretation',
      'Analyze, connect, and creatively represent scenes',
      'Precision and imagination required',
    ],
  },
  {
    id: 'galactic-conversation',
    title: 'Galactic Conversation',
    description: 'Galactic Conversation is a communication-driven event that explores the art of asking the right questions. Participants engage with non-human intelligence through structured dialogue, where logic, creativity, and intent shape the outcome.',
    icon: <MessageSquare className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(45 100% 50% / 0.3), hsl(30 100% 50% / 0.1))',
    teamSize: '1–2 Members',
    duration: '2 Rounds',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'Art of asking the right questions',
      'Engage with non-human intelligence via structured dialogue',
      'Logic, creativity, and intent match outcome',
    ],
  },
  {
    id: 'cosmic-compile',
    title: 'Cosmic Compile',
    description: 'Cosmic Compile is a two-stage interstellar coding challenge where teams decode logic and race against time. Success in the first round unlocks the next signal, pushing participants to combine reasoning speed with coding accuracy.',
    icon: <Code2 className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(200 100% 50% / 0.3), hsl(220 100% 50% / 0.1))',
    teamSize: '2 Members',
    duration: '2 Rounds',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'Two-stage coding challenge',
      'Decode logic and race against time',
      'Combine reasoning speed with coding accuracy',
    ],
  },
  {
    id: 'pressure-treasure',
    title: 'Pressure & Treasure',
    description: 'Pressure & Treasure is a high-stakes, multi-level treasure hunt that tests teamwork, strategy, and calm under pressure. Teams must crack challenges across five themed levels, each unlocking the path forward. One mistake costs time—one smart move leads closer to victory.',
    icon: <Map className="w-10 h-10" />,
    gradient: 'linear-gradient(135deg, hsl(120 100% 40% / 0.3), hsl(180 100% 50% / 0.1))',
    teamSize: '2–3 Members',
    duration: '5 Rounds',
    prize: '1st: ₹1000, 2nd: ₹750, 3rd: ₹500',
    registrationLink: null,
    rules: [
      'High-stakes multi-level treasure hunt',
      'Crack challenges across five themed levels',
      'One mistake costs time',
    ],
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-20 md:py-32">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(263 84% 67% / 0.1) 0%, transparent 50%)',
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            MISSION BRIEFING
          </motion.p>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">STELLAR </span>
            <span className="gradient-text">EVENTS</span>
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Choose your mission and compete with the brightest minds in the galaxy
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
