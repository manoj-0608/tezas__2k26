import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSequence from '@/components/IntroSequence';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import TimelineSection from '@/components/TimelineSection';
import RulesSection from '@/components/RulesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if intro has been shown this session
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const sections = ['home', 'events', 'timeline', 'rules', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen bg-background">
          <StarField />
          <Navigation activeSection={activeSection} />
          <main>
            <HeroSection />
            <EventsSection />
            <TimelineSection />
            {  /*<RulesSection />*/}
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
