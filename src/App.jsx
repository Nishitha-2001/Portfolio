import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';

const FuturisticFooter = () => (
  <footer className="py-32 border-t border-forest/5 text-center bg-white relative overflow-hidden">
    {/* Refractive Light Effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-30" />

    <div className="relative z-10 space-y-8">
      <h4 className="text-6xl md:text-9xl font-display font-black text-forest/5 tracking-tighter uppercase whitespace-nowrap overflow-hidden">Integrated Systems</h4>
      <div className="space-y-4">
        <p className="text-forest/30 text-[10px] tracking-[0.6em] uppercase font-black">Nishitha Ravula • Digital Archive v2.0</p>
        <p className="text-moss/40 text-[9px] tracking-widest uppercase">Encryption Standard • SEC-256-BIT • © 2026</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <main className="relative min-h-screen bg-sage-50 overflow-x-hidden selection:bg-mint selection:text-forest font-sans">
      {/* Dynamic Global Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,204,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(74,103,65,0.02)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <FuturisticFooter />
      </div>

      <ContactForm />
      <ScrollToTop />
    </main>
  );
}

export default App;
