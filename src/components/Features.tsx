import { motion } from 'motion/react';
import { Leaf, Users, Coffee, Clock, ShieldCheck, Heart } from 'lucide-react';

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, organic produce for every meal." },
  { icon: Users, title: "Expert Baristas", desc: "Crafting your perfect cup with passion and precision." },
  { icon: Heart, title: "Cozy Environment", desc: "A warm, inviting space to work, relax, or connect." },
  { icon: Clock, title: "Fast Service", desc: "Premium quality without the agonizing wait times." },
  { icon: Coffee, title: "Premium Beans", desc: "Ethically traded, carefully roasted specialty coffee." },
  { icon: ShieldCheck, title: "Satisfaction Guaranteed", desc: "We aren't happy until your experience is perfect." }
];

export default function Features() {
  return (
    <section id="features" className="bg-coffee dark:bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-colors duration-300 shadow-xl border border-coffee/10">
       <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[50px] pointer-events-none"/>
       
      <div className="w-full relative z-10">
        <div className="mb-12 border-b border-white/10 pb-6">
           <h3 className="text-xs font-bold text-latte uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
             <span className="w-8 h-[1px] bg-latte"></span> The Environment
           </h3>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Why <span className="text-latte italic">Choose Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-coffee group-hover:scale-110 transition-transform">
                   <feature.icon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-white/50 bg-white/10 px-2 py-1 rounded-md uppercase tracking-wider">
                  Premium
                </span>
              </div>
              <h4 className="font-bold text-lg text-white mb-2 font-sans tracking-tight">
                {feature.title}
              </h4>
              <p className="font-sans text-xs text-white/60 leading-relaxed italic">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
