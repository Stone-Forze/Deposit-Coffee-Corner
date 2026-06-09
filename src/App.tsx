import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
    
    // Simulate loading screen
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-cream dark:bg-dark flex items-center justify-center flex-col gap-4"
          >
            <div className="relative w-16 h-16">
               <div className="absolute inset-0 border-4 border-latte rounded-full animate-ping opacity-20"></div>
               <div className="absolute inset-0 border-4 border-t-caramel border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <h1 className="font-heading text-2xl text-charcoal dark:text-cream animate-pulse">Deposit Coffee</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-cream dark:bg-dark relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-coffee) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <Navbar toggleDark={toggleDark} isDark={isDark} />
        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 relative z-10">
          <Hero />
          <About />
          <Features />
          <Menu />
          <Gallery />
          <Testimonials />
          <Location />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
