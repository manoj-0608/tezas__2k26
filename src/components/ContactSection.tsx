import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, ExternalLink} from 'lucide-react';
import aravindan from '/images/crew/aravindan.jpeg';
import joel from '/images/crew/joel.jpeg';
import siva from '/images/crew/siva.jpeg';
import bala from '/images/crew/bala.jpeg';
import placeholder from '/placeholder.svg';

interface Coordinator {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

const coordinators: Coordinator[] = [
  {
    name: 'ARAVINDAN P B',
    role: 'PRESIDENT',
    phone: '+91 63698 90793',
    email: 'aravad004@rmkcet.ac.in',
    image: aravindan,
  },
  {
    name: 'JOEL SAMUEL.J',
    role: 'VICE PRESIDENT',
    phone: '+91 88388 76098',
    email: 'joelad043@rmkcet.ac.in',
    image: joel,
  },
  {
    name: 'SIVA PARVATHI N',
    role: 'JOINT SECRETARY',
    phone: '+91 63699 87691',
    email: 'sivaad083@rmkcet.ac.in',
    image: siva,
  },
  {
    name: 'BALAVIGNESH P',
    role: 'Event Manager',
    phone: '+91 80726 10974',
    email: 'balaad009@rmkcet.ac.in',
    image: bala,
  },
];

const CoordinatorCard = ({ coordinator, index }: { coordinator: Coordinator; index: number }) => {
  return (
    <motion.div
      className="flip-card aspect-[3/4] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front Face */}
        <div className="flip-card-front w-full h-full glass-panel rounded-xl overflow-hidden">
          {/* Image */}
          <div className="relative h-2/3 overflow-hidden">
            <img
              src={coordinator.image}
              alt={coordinator.name}
              className="w-full h-full object-cover"
            />
            {/* Hexagonal Border Effect */}
            <motion.div
              className="absolute inset-4 border-2 border-primary/30 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            />
            {/* Scanline Effect */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(187 100% 50% / 0.1) 2px, hsl(187 100% 50% / 0.1) 4px)',
              }}
            />
          </div>

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
            <h3 className="font-orbitron font-semibold text-lg">{coordinator.name}</h3>
            <p className="text-sm text-primary">{coordinator.role}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back w-full h-full glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center">
          {/* Radar Pulse Background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full border border-primary/20"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              />
            ))}
          </motion.div>

          <h3 className="font-orbitron font-semibold text-xl mb-2 relative z-10">{coordinator.name}</h3>
          <p className="text-sm text-primary mb-6 relative z-10">{coordinator.role}</p>

          <div className="space-y-4 relative z-10">
            <a
              href={`tel:${coordinator.phone}`}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {coordinator.phone}
            </a>
            <a
              href={`mailto:${coordinator.email}`}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {coordinator.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(187 100% 50% / 0.08) 0%, transparent 50%)',
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
          <motion.p className="font-inter text-sm tracking-[0.3em] text-primary mb-4">
            MISSION CONTROL
          </motion.p>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">CONTACT </span>
            <span className="gradient-text">CREW</span>
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team is here to guide you through the mission
          </p>
        </motion.div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coordinators.map((coordinator, index) => (
            <CoordinatorCard key={coordinator.name} coordinator={coordinator} index={index} />
          ))}
        </div>

        {/* Contact Info & Map */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            className="glass-panel rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    R.M.K College of Engineering and Technology<br />
                    RSM Nagar, Gummidipoondi Taluk, <br />
                    Puduvoyal, Thiruvallur, Tamil Nadu 601206 <br />
                    Department of Artificial Intelligence and Data Science<br />

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:tezas2k26@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">

                    tezas2k26@gmail.com
                  </a>
                </div>
              </div>


            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },

                ].map((social) => (
                  <motion.a
                    key={social.label}
                    target='_blank'
                    href="https://www.instagram.com/tezas_2k26?igsh=MWN6YWhkYjR3dnRqNg=="
                    className="p-3 rounded-lg glass-panel text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="glass-panel rounded-xl overflow-hidden relative min-h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Holographic Corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 z-10" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50 z-10" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50 z-10" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 z-10" />

            {/* Map Iframe */}
            <div className="absolute inset-0">
              <iframe
                src="https://maps.google.com/maps?q=R.M.K%20College%20of%20Engineering%20and%20Technology%20RSM%20Nagar%2C%20Gummidipoondi%20Taluk%2C%20Puduvoyal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Overlay Actions */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-4 left-4 pointer-events-auto">
                <motion.a
                  href="https://maps.app.goo.gl/AsX6FMxFLYyja62F6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur text-primary border border-primary/20 hover:bg-primary/20 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Coordinates Display */}
            <motion.div
              className="absolute top-4 right-4 p-2 glass-panel rounded-lg z-10 bg-background/50 backdrop-blur text-[10px] font-mono text-primary/70"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div>13.3435° N</div>
              <div>80.1552° E</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
