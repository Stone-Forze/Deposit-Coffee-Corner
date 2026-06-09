import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Navbar({ toggleDark, isDark }: { toggleDark: () => void, isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/50 dark:bg-dark/50 backdrop-blur-md border-b border-coffee/10 shadow-sm' : 'bg-transparent pt-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex justify-between items-center bg-white/50 dark:bg-dark/50 backdrop-blur-md rounded-2xl px-6 border border-coffee/10">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-coffee flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-latte rounded-sm rotate-45 flex items-center justify-center">
                  <span className="text-[10px] text-white -rotate-45 font-bold">D</span>
                </div>
              </div>
              <h1 className="font-heading text-xl font-bold tracking-tight text-charcoal dark:text-white uppercase hidden sm:block">
                DEPOSIT <span className="text-coffee dark:text-caramel">COFFEE CORNER</span>
              </h1>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs font-bold uppercase tracking-[0.1em] transition-colors text-coffee/70 dark:text-latte/70 hover:text-coffee dark:hover:text-caramel"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 border-l border-coffee/20 pl-4">
                 <button 
                  onClick={toggleDark}
                  className="p-2 rounded-full text-coffee/70 dark:text-latte/70 hover:text-coffee dark:hover:text-caramel transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <div className="px-6 py-2 bg-coffee text-white text-xs font-bold uppercase tracking-tighter rounded-full shadow-lg hover:bg-charcoal transition-colors cursor-pointer">
                  Book a Table
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button 
                onClick={toggleDark}
                className="p-2 rounded-full text-coffee/70 dark:text-latte/70"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-coffee/70 dark:text-latte/70"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-latte to-caramel origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-cream dark:bg-dark pt-32 px-6 lg:hidden"
        >
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl text-charcoal dark:text-white hover:text-caramel dark:hover:text-caramel transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 px-6 py-4 bg-coffee text-white text-lg font-bold uppercase tracking-tighter rounded-full shadow-lg cursor-pointer">
              Book a Table
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
