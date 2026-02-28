import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Footer = () => (
  <footer className="py-24 border-t border-forest/5 text-center bg-sage-50">
    <div className="flex justify-center gap-8 mb-12">
      {[
        { icon: <Mail className="w-6 h-6" />, href: "mailto:pnishitha03@gmail.com" },
        { icon: <Linkedin className="w-6 h-6" />, href: "#" },
        { icon: <Globe className="w-6 h-6" />, href: "#" }
      ].map((social, i) => (
        <a key={i} href={social.href} className="text-forest/40 hover:text-moss transition-all duration-300 transform hover:scale-110">
          {social.icon}
        </a>
      ))}
    </div>
    <div className="space-y-4">
      <p className="text-forest/30 text-[10px] tracking-[0.4em] uppercase font-black">Nishitha Ravula | B. Tech Portfolio</p>
      <p className="text-moss/40 text-[9px] tracking-widest uppercase">© 2026 Developed with Vision</p>
    </div>
  </footer>
);

function App() {
  return (
    <main className="relative min-h-screen bg-sage-50 overflow-x-hidden selection:bg-forest selection:text-sage-50">
      {/* Subtle global gradient overlay for light theme */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,197,185,0.15)_0%,rgba(240,247,244,1)_100%)] pointer-events-none" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </div>

      {/* Very subtle floating navigation dot for 'back to top' */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-forest/40 hover:text-moss border-forest/5 hover:border-moss/20 transition-all duration-300 z-50 shadow-lg"
      >
        <div className="w-2 h-2 rounded-full bg-current" />
      </motion.button>
    </main>
  );
}

export default App;
