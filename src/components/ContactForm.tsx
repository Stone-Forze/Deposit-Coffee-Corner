import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="bg-white dark:bg-dark rounded-[2rem] p-8 md:p-12 shadow-xl border border-coffee/10 transition-colors duration-300 relative overflow-hidden">
      
      <div className="w-full">
        <div className="mb-12 border-b border-coffee/10 pb-6 text-center">
           <h3 className="text-xs font-bold text-coffee uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2">
             <span className="w-8 h-[1px] bg-coffee"></span> Inquiry
           </h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl text-charcoal dark:text-cream"
          >
            Send us a <span className="text-caramel italic">Message</span>
          </motion.h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
              <h3 className="font-heading text-2xl text-green-800 dark:text-green-400 mb-2">Thank You</h3>
              <p className="text-green-600 dark:text-green-500 font-sans">Your message has been received. We'll get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 font-action text-sm font-semibold text-green-700 dark:text-green-400 underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-cream dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-caramel transition-shadow dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-cream dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-caramel transition-shadow dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-cream dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-caramel transition-shadow dark:text-white" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-cream dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-caramel transition-shadow resize-none dark:text-white" placeholder="How can we help you?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-charcoal text-white font-action font-bold rounded-xl hover:bg-coffee transition-colors disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm shadow-md"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
