import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, AlertTriangle, Award, Users, Clock, Ban } from 'lucide-react';

interface Rule {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const rules: Rule[] = [
  {
    id: 'eligibility',
    title: 'Eligibility Criteria',
    icon: <Users className="w-5 h-5" />,
    content: [
      'Participants must be currently enrolled students from recognized institutions',
      'Valid college ID card is mandatory for registration and entry',
      'Age limit: 18-25 years for all events',
      'Inter-college teams are allowed for hackathon only',
      'Faculty advisors may accompany teams but cannot participate',
    ],
  },
  {
    id: 'registration',
    title: 'Registration Guidelines',
    icon: <Shield className="w-5 h-5" />,
    content: [
      'Online registration closes 48 hours before the event',
      'Registration fee is non-refundable once confirmed',
      'Each participant can register for maximum 3 events',
      'Team leader must complete registration for all team members',
      'Spot registration available with 20% additional fee',
    ],
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    icon: <AlertTriangle className="w-5 h-5" />,
    content: [
      'Participants must maintain professional behavior at all times',
      'Harassment, discrimination, or misconduct will result in immediate disqualification',
      'Respect fellow participants, judges, and organizers',
      'Any form of cheating or plagiarism is strictly prohibited',
      'Participants are responsible for their personal belongings',
      'Follow all safety guidelines and emergency procedures',
    ],
  },
  {
    id: 'prizes',
    title: 'Prizes & Awards',
    icon: <Award className="w-5 h-5" />,
    content: [
      'Prize money will be distributed within 15 working days',
      'Winners must provide valid bank account details and ID proof',
      'Certificates will be provided to all participants digitally',
      'Special awards for Best Innovation, Most Creative, and Peoples Choice',
      'Internship opportunities from sponsor companies for top performers',
    ],
  },
  {
    id: 'timing',
    title: 'Timing & Schedules',
    icon: <Clock className="w-5 h-5" />,
    content: [
      'Participants must report 30 minutes before their event',
      'Late arrivals may be denied entry to ongoing events',
      'Event schedules are subject to minor changes',
      'Lunch and refreshment breaks are included for all participants',
      'Overnight stay arrangements available for hackathon participants',
    ],
  },
  {
    id: 'prohibited',
    title: 'Prohibited Items',
    icon: <Ban className="w-5 h-5" />,
    content: [
      'Alcohol, drugs, and any intoxicating substances',
      'Weapons or dangerous objects of any kind',
      'Outside food (except for medical requirements)',
      'Professional recording equipment without permission',
      'Any promotional materials without prior approval',
    ],
  },
];

const RulesSection = () => {
  const [openSection, setOpenSection] = useState<string | null>('eligibility');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section id="rules" className="relative py-20 md:py-32">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, hsl(263 84% 67% / 0.08) 0%, transparent 50%)',
        }}
      />

      {/* HUD Corner Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 hidden lg:block" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/20 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/20 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p className="font-inter text-sm tracking-[0.3em] text-primary mb-4">
            MISSION PROTOCOLS
          </motion.p>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">RULES & </span>
            <span className="gradient-text">REGULATIONS</span>
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Essential guidelines for a successful and fair mission
          </p>
        </motion.div>

        {/* Rules Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="holographic rounded-lg overflow-hidden">
                {/* Header */}
                <motion.button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => toggleSection(rule.id)}
                  whileHover={{ backgroundColor: 'hsl(187 100% 50% / 0.05)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{rule.icon}</div>
                    <span className="font-orbitron font-semibold text-lg">{rule.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openSection === rule.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.button>

                {/* Content */}
                <AnimatePresence>
                  {openSection === rule.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-primary/10">
                        <ul className="space-y-3">
                          {rule.content.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 p-6 glass-panel rounded-lg border-l-4 border-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-orbitron font-semibold mb-2 text-primary">Mission Control Advisory</h4>
          <p className="text-sm text-muted-foreground">
            The organizing committee reserves the right to modify rules and make final decisions in case of disputes. 
            All participants are expected to accept these terms during registration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;
