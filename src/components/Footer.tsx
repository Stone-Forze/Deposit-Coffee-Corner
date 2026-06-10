import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent text-charcoal/80 dark:text-cream/80 py-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-coffee/10 mt-12 transition-colors">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
             <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-coffee flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-latte rounded-sm rotate-45 flex items-center justify-center">
                    <span className="text-[10px] text-white -rotate-45 font-bold">D</span>
                  </div>
                </div>
                <span className="font-heading text-xl font-bold tracking-tight text-charcoal dark:text-white uppercase">
                  Deposit
                </span>
             </a>
             <p className="font-sans text-xs leading-relaxed mb-6 italic text-charcoal/70 dark:text-white/70">
               Crafted coffee, fresh food, and memorable moments. Your premium cafe destination in Lancaster, PA.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-xl bg-charcoal dark:bg-white/10 text-white flex items-center justify-center hover:bg-coffee transition-colors shadow-sm">
                 <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-xl bg-charcoal dark:bg-white/10 text-white flex items-center justify-center hover:bg-coffee transition-colors shadow-sm">
                 <Facebook className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-xl bg-charcoal dark:bg-white/10 text-white flex items-center justify-center hover:bg-coffee transition-colors shadow-sm">
                 <Twitter className="w-4 h-4" />
               </a>
             </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-charcoal dark:text-white mb-6 text-[10px] uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 font-sans text-xs italic">
              <li><a href="#about" className="hover:text-coffee transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-coffee transition-colors">Featured Menu</a></li>
              <li><a href="#gallery" className="hover:text-coffee transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-coffee transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-charcoal dark:text-white mb-6 text-[10px] uppercase tracking-[0.2em]">Contact Info</h4>
            <ul className="space-y-4 font-sans text-xs italic text-charcoal/70 dark:text-white/70">
              <li>100 N Queen St,<br/>Lancaster, PA 17603</li>
              <li>+1 717-383-9062</li>
              <li>hello@deposit.coffee</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-charcoal dark:text-white mb-6 text-[10px] uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="font-sans text-xs mb-4 italic text-charcoal/70 dark:text-white/70">Subscribe to receive updates and exclusive deals.</p>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white dark:bg-white/5 border border-coffee/10 px-4 py-2 rounded-l-xl focus:outline-none focus:border-coffee w-full text-xs font-sans shadow-sm"
              />
              <button className="bg-coffee text-white px-4 py-2 rounded-r-xl font-bold text-[10px] uppercase tracking-wider hover:bg-charcoal transition-colors shadow-sm">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-6 border-t border-coffee/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] text-charcoal/50 dark:text-white/40 font-bold uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} DEPOSIT COFFEE CORNER - By STONE FORZE</div>
          <div className="flex gap-6">
             <span className="hover:text-coffee transition-colors cursor-pointer">Instagram</span>
             <span className="hover:text-coffee transition-colors cursor-pointer">Facebook</span>
             <span className="hover:text-coffee transition-colors cursor-pointer">Twitter</span>
          </div>
          <div>Handcrafted in Pennsylvania</div>
        </div>
      </div>
    </footer>
  );
}
