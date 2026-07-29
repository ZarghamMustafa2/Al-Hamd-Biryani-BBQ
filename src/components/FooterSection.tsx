import React from 'react';
import { Flame, Heart, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { AlHamdLogo } from './AlHamdLogo';

export const FooterSection: React.FC = () => {
  return (
    <footer className="glass-panel border-t border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <AlHamdLogo size="md" />
              <span className="font-display font-black text-xl text-heading tracking-wide flex items-center gap-1.5 uppercase">
                AL HAMD BIRYANI &amp; BBQ <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              </span>
            </div>
            <p className="text-xs text-body font-medium max-w-sm leading-relaxed">
              Authentic Nizami Dum Biryani hand-crafted in sealed copper pots &amp; fresh charcoal grilled BBQ delicacies.
            </p>
            <p className="text-xs text-amber-500 font-bold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Nagana Chowk, Near Total Petrol Pump, M.A. Jinnah Road, Multan, Pakistan</span>
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/alhamdbiryanii"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card text-pink-500 hover:scale-110 transition-transform"
                title="Instagram: alhamdbiryanii"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card text-blue-500 hover:scale-110 transition-transform"
                title="Facebook: Al hamd biryani"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-heading text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-1 text-xs font-semibold text-body">
              <li><a href="#hero" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Menu &amp; BBQ</a></li>
              <li><a href="#testimonials" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Reviews</a></li>
              <li><a href="#reservation" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Book a Table</a></li>
            </ul>
          </div>

          {/* Opening & Hotline */}
          <div className="space-y-2">
            <h4 className="font-bold text-heading text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Contact &amp; Support
            </h4>
            <p className="text-xs text-body font-bold flex items-center gap-1.5 text-amber-500">
              <Phone className="w-3.5 h-3.5" />
              <span>+92 312 6382499</span>
            </p>
            <p className="text-xs text-body font-semibold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>alhamdbiryani@gmail.com</span>
            </p>
            <p className="text-xs text-body font-semibold">Open 7 Days a week (12PM - 3AM)</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-medium gap-4">
          <p>&copy; {new Date().getFullYear()} Al Hamd Biryani and BBQ, Multan. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for Authentic Biryani &amp; BBQ Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
