import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="contact" className="bg-dark rounded-[2rem] p-8 md:p-12 shadow-xl border border-white/10 transition-colors duration-300 text-white flex flex-col">
      <div className="w-full">
        
        <div className="mb-12 border-b border-white/10 pb-6">
          <h3 className="text-xs font-bold text-caramel uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-caramel"></span> Find Our Corner
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Connect <span className="italic text-caramel">With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#2B2B2B]/50 p-8 rounded-3xl border border-white/5"
          >
            <p className="text-white/50 text-xs uppercase tracking-widest leading-loose mb-8">
              We'd love to hear from you. Drop by for a cup, or contact us.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-caramel" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visit Us</h4>
                  <p className="text-white/60 text-xs italic tracking-wide">100 N Queen St,<br/>Lancaster, PA 17603</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-caramel" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <p className="text-white/60 text-xs italic tracking-wide">+1 717-383-9062</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-caramel" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                  <p className="text-white/60 text-xs italic tracking-wide">Mon - Fri: 7am - 8pm<br/>Sat - Sun: 8am - 9pm</p>
                </div>
              </div>
            </div>

             <a 
                href="https://maps.google.com/?q=100+N+Queen+St,+Lancaster,+PA+17603" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-caramel text-dark font-bold rounded-xl hover:bg-white transition-colors text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                Get Directions
              </a>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-[#2B2B2B] relative flex items-center justify-center"
          >
             <div className="absolute w-2 h-2 bg-caramel rounded-full animate-ping z-10"></div>
             <div className="absolute text-[10px] text-white/30 text-center px-4 font-bold tracking-widest mt-12 z-10 pointer-events-none">MAP PREVIEW<br/>STATIONARY</div>
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.417383748281!2d-76.30788648461756!3d40.04381367940989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6248c897f1f23%3A0xe0a149cfa74d081e!2s100%20N%20Queen%20St%2C%20Lancaster%2C%20PA%2017603%2C%20USA!5e0!3m2!1sen!2s!4v1714578000000!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full border-0 mix-blend-overlay opacity-30 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
