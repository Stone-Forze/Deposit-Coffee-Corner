import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === Math.floor(end)) {
          clearInterval(timer);
          setCount(end); // ensure we hit the exact decimal if needed, though here we use mostly ints
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-latte/10 dark:bg-[#1A1A1A]/80 rounded-[2rem] p-8 md:p-12 border border-coffee/10 relative overflow-hidden transition-colors duration-300">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" 
                  alt="Cafe Interior"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
                />
             </div>
             {/* Abstract shape decoration */}
             <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-latte/20 rounded-full blur-3xl -z-10" />
             <div className="absolute -top-8 -right-8 w-48 h-48 bg-caramel/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xs font-bold text-coffee uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-coffee"></span> The Heritage
            </h3>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal dark:text-cream mb-6 leading-tight">
              Our Story, <br/> Your <span className="text-caramel italic">Sanctuary</span>.
            </h2>
            <p className="font-sans text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed font-light">
              Nestled in the heart of Lancaster, Deposit Coffee Corner is more than just a cafe—it's a destination for coffee purists and culinary enthusiasts alike. Since our founding, we've remained dedicated to sourcing the finest ethical beans and crafting meals that turn everyday moments into memorable experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Google Reviews", value: 49, suffix: "+" },
                { label: "Star Rating", value: 4.9, suffix: "★" },
                { label: "Premium Roasts", value: 12, suffix: "+" },
                { label: "Daily Pastries", value: 24, suffix: "+" }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#2B2B2B] border border-coffee/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-heading text-3xl font-bold text-coffee dark:text-caramel mb-2">
                    {/* Using simple counter for integers, static for 4.9 */}
                    {stat.value === 4.9 ? "4.9★" : <Counter end={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="font-sans text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
