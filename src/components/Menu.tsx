import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuData = {
  "Coffee": [
    { name: "Espresso", desc: "Rich and bold single shot", price: "$3.50", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=400&q=80" },
    { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam", price: "$4.50", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
    { name: "Latte", desc: "Espresso with steamed milk and light foam", price: "$4.75", img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=400&q=80" },
    { name: "Americano", desc: "Espresso pulled over hot water", price: "$3.75", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=400&q=80" },
    { name: "Mocha", desc: "Espresso, dark chocolate, and steamed milk", price: "$5.25", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400&q=80" }
  ],
  "Bakery": [
    { name: "Butter Croissant", desc: "Flaky, buttery, baked fresh daily", price: "$3.50", img: "https://images.unsplash.com/photo-1555507036-ab1d4075c6f5?auto=format&fit=crop&w=400&q=80" },
    { name: "Blueberry Muffin", desc: "Loaded with fresh blueberries", price: "$3.75", img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=400&q=80" },
    { name: "Chocolate Chip Cookie", desc: "Warm and gooey center", price: "$2.75", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80" },
    { name: "Fudge Brownie", desc: "Decadent dark chocolate fudge", price: "$4.00", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" }
  ],
  "Food": [
    { name: "Avocado Toast", desc: "Sourdough, smashed avocado, chili flakes", price: "$8.50", img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=400&q=80" },
    { name: "Breakfast Sandwich", desc: "Egg, bacon, and cheese on brioche", price: "$7.50", img: "https://images.unsplash.com/photo-1525351484163-834c93f0b094?auto=format&fit=crop&w=400&q=80" },
    { name: "Quinoa Salad", desc: "Mixed greens, quinoa, roasted veggies", price: "$10.50", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { name: "Truffle Burger", desc: "Wagyu beef, truffle mayo, caramelized onions", price: "$14.50", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" }
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Coffee");

  return (
    <section id="menu" className="bg-white dark:bg-[#151515] rounded-[2rem] p-8 md:p-12 shadow-xl border border-coffee/10 transition-colors duration-300 flex flex-col">
      <div className="w-full">
        
        <div className="mb-12 flex justify-between items-end flex-wrap gap-6 border-b border-coffee/10 pb-6">
          <div className="text-left">
            <h3 className="text-xs font-bold text-coffee uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-coffee"></span> Today's Selection
            </h3>
            <h2 className="font-heading text-4xl text-charcoal dark:text-cream">
              Featured <span className="text-caramel italic">Menu</span>
            </h2>
          </div>
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3">
            {(Object.keys(menuData) as Array<keyof typeof menuData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl font-action font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-coffee text-white shadow-md'
                    : 'bg-latte/10 text-charcoal hover:bg-latte/20 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-coffee/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {menuData[activeTab].map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-cream dark:bg-dark/50 border border-coffee/5 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-bold text-lg text-charcoal dark:text-cream leading-tight">{item.name}</h4>
                    <span className="text-coffee dark:text-caramel font-mono font-bold">{item.price}</span>
                  </div>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 italic line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
