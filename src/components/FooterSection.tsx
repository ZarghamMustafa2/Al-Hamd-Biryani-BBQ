import React from 'react';
import { Flame, Heart, Instagram, Facebook, Phone, Mail, MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';
import { AlHamdLogo } from './AlHamdLogo';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative z-10 bg-slate-950/95 dark:bg-slate-950/95 light:bg-slate-900 border-t-2 border-amber-500/80 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <AlHamdLogo size="md" />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl text-white tracking-wide flex items-center gap-2 uppercase">
                  AL HAMD BIRYANI &amp; BBQ <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
                </span>
                <span className="text-xs text-amber-400 font-extrabold tracking-wider uppercase">
                  Authentic Nizami Dum Handi &amp; Charcoal BBQ
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium max-w-md leading-relaxed">
              Serving Multan's most authentic Nizami Dum Biryani, hand-crafted in sealed copper pots, along with smoky charcoal-grilled BBQ delicacies and royal desserts.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/40 space-y-2">
              <p className="text-xs text-amber-400 font-black flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Nagana Chowk, Near Total Petrol Pump, M.A. Jinnah Road, Multan, Pakistan</span>
              </p>
              <div className="pl-6">
                <a
                  href="https://maps.google.com/?q=Nagana+Chowk+Multan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-slate-300 hover:text-amber-400 underline inline-flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3 text-amber-400" />
                  <span>Open Location in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Social Media Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://instagram.com/alhamdbiryanii"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400 hover:bg-pink-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
                title="Instagram: @alhamdbiryanii"
              >
                <Instagram className="w-4 h-4" />
                <span>@alhamdbiryanii</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5"
                title="Facebook: Al hamd biryani"
              >
                <Facebook className="w-4 h-4" />
                <span>Al hamd biryani</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 md:col-span-3">
            <h4 className="font-black text-amber-400 text-sm uppercase tracking-wider border-b border-amber-500/30 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-200">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-black">›</span> Home Page
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-black">›</span> Menu &amp; BBQ Specialties
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-black">›</span> Customer Reviews
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-black">›</span> Table &amp; Daig Booking
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-black">›</span> Contact Multan Branch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support Section */}
          <div className="space-y-3 md:col-span-4">
            <h4 className="font-black text-amber-400 text-sm uppercase tracking-wider border-b border-amber-500/30 pb-2">
              Contact &amp; Hotline Support
            </h4>

            {/* Direct Phone */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Phone Order Hotline</span>
              <a href="tel:+923126382499" className="text-sm font-black text-amber-400 hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 fill-amber-400/20 animate-pulse" />
                <span>+92 312 6382499 / 0312 6382499</span>
              </a>
            </div>

            {/* WhatsApp Direct Button */}
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 space-y-1.5">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">WhatsApp Direct Order</span>
              <a
                href="https://wa.me/923126382499?text=Assalam-o-Alaikum%20Al%20Hamd%20Biryani%20%26%20BBQ!"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>CHAT ON WHATSAPP (0312 6382499)</span>
              </a>
            </div>

            {/* Email & Hours */}
            <div className="text-xs text-slate-300 font-medium space-y-1 pt-1">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold text-slate-200">alhamdbiryani@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Open 7 Days a Week: <strong className="text-emerald-400 font-extrabold">12:00 PM - 03:00 AM</strong></span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-semibold gap-4">
          <p>&copy; {new Date().getFullYear()} Al Hamd Biryani and BBQ, Multan. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-300">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-bounce" />
            <span>for Authentic Dum Biryani &amp; BBQ Lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
