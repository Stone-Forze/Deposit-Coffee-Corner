import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] rounded-[2rem] flex items-center overflow-hidden shadow-2xl group border border-coffee/20 mt-28">
      {/* Background  */}
      <div className="absolute inset-0 bg-dark"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-dark via-dark/40 to-transparent z-10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-coffee/20 flex items-center justify-center opacity-40 z-10 pointer-events-none hidden md:flex">
         <div className="w-[30rem] h-[30rem] border border-white/10 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-[20rem] h-[20rem] border border-white/20 rounded-full flex items-center justify-center">
               <div className="w-[12rem] h-[12rem] border border-white/30 rounded-full"></div>
            </div>
         </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-end py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
            <Star className="w-4 h-4 fill-caramel text-caramel" />
            <span className="font-action text-[10px] font-bold text-white/80 uppercase tracking-wider">4.9 Rating (49 Reviews)</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl font-light text-white leading-none mb-6"
        >
          Deposit <br />
          <span className="italic text-caramel">Coffee Corner</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-white/60 max-w-md text-lg mb-10 font-light leading-relaxed"
        >
          Crafted Coffee. Fresh Food. Memorable Moments. Experience Lancaster's most refined coffee destination.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#menu"
            className="group px-8 py-4 bg-caramel text-dark font-action font-bold rounded-xl hover:bg-white transition-colors flex items-center gap-2"
          >
            View Menu
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-action font-bold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

    </section>
  );
}
