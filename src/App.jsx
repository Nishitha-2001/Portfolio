import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center">
    <div className="flex justify-center gap-6 mb-8">
      {[
        { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@nishitha.com" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#" },
        { icon: <Instagram className="w-5 h-5" />, href: "#" }
      ].map((social, i) => (
        <a key={i} href={social.href} className="text-gold/40 hover:text-gold transition-colors duration-300">
          {social.icon}
        </a>
      ))}
    </div>
    <p className="text-champagne/30 text-xs tracking-widest uppercase mb-2">Designed for the Discerning</p>
    <p className="text-gold/20 text-[10px] tracking-widest uppercase">© 2026 Nishitha Ravula</p>
  </footer>
);

function App() {
  return (
    <main className="relative min-h-screen bg-emerald-950 overflow-x-hidden selection:bg-gold selection:text-emerald-950">
      {/* Subtle global gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(6,78,59,0.3)_0%,rgba(2,44,34,1)_100%)] pointer-events-none" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Footer />
      </div>

      {/* Very subtle floating navigation dot for 'back to top' */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gold/60 hover:text-gold border-gold/10 hover:border-gold/40 transition-all duration-300 z-50"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-current" />
      </motion.button>
    </main>
  );
}

export default App;
