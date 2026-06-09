import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    review: "Absolutely the best coffee in Lancaster. The atmosphere is gorgeous and the staff knows exactly how to craft the perfect latte. It's my new daily spot.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    review: "The truffle burger is out of this world. Combining a high-end cafe feel with restaurant-quality food makes Deposit Coffee Corner truly special.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    review: "Stunning interior and impeccable service. Their freshly baked croissants taste like they were flown in from Paris this morning.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-coffee/90 dark:bg-dark text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-colors duration-300 shadow-xl">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none"></div>
      
      <div className="w-full relative z-10">
        
        <div className="mb-12 border-b border-white/10 pb-6">
          <h3 className="text-xs font-bold text-latte uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-latte"></span> Testimonials
          </h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            Spoken by <span className="text-latte italic">Guests</span>
          </motion.h2>
        </div>

        <div className="relative bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-white/5 rotate-180" />
          
          <div className="min-h-[200px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-caramel text-caramel" />
                  ))}
                </div>
                <p className="font-sans text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[current].review}"
                </p>
                <h4 className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
                  {testimonials[current].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
