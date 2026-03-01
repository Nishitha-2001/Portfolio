import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

const FuturisticFooter = () => (
  <footer className="py-32 border-t border-emerald-deep/5 text-center bg-transparent relative overflow-hidden">
    <div className="relative z-10 space-y-8">
      <h4 className="text-6xl md:text-9xl font-serif font-black text-emerald-deep/5 tracking-tighter uppercase whitespace-nowrap overflow-hidden">Nishitha Ravula</h4>
      <div className="space-y-4">
        <p className="text-emerald-rich/40 text-[10px] tracking-[0.6em] uppercase font-bold">Designer • Developer • Creator</p>
        <p className="text-emerald-soft/30 text-[9px] tracking-widest uppercase">© 2026 • Premium Portfolio v3.0</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <main className="relative min-h-screen selection:bg-gold-champagne selection:text-emerald-deep font-sans">
      <Background />

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
