import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Visual Card Stack */}
        <div className="relative space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-card border border-amber-500/20">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop"
              alt="Handi Dum Cooking"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-amber-500/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-md">
                  35+
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Years of Culinary Heritage</h4>
                  <p className="text-xs text-amber-300 font-semibold">Passed down through 3 generations of Royal Khansamas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Story Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest badge-accent px-3.5 py-1 rounded-full">
              The Royal Heritage
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight leading-tight">
              Crafted by Tradition, <br />
              <span className="text-amber-600 dark:text-amber-400">Perfected by Passion</span>
            </h2>
          </div>

          <p className="text-sm text-heading font-semibold leading-relaxed">
            Our biryani isn’t just food; it’s an art form. Rooted in the royal kitchens of the 18th century Nizams, every pot of biryani is cooked using the traditional <strong className="text-amber-600 dark:text-amber-400 font-extrabold">Dum Pukht</strong> method—slow cooking in sealed copper handis over hot coals.
          </p>

          <p className="text-sm text-body leading-relaxed">
            This ancient technique traps steam inside the vessel, forcing the aromatic spices deep into every grain of rice and succulent cut of meat. The result is an unmatched harmony of aroma, tender texture, and royal taste.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="glass-card p-4 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-heading text-xs">Authentic Recipe</h4>
                <p className="text-[11px] text-body">Original Nizami blend</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-heading text-xs">Slow Dum Cooking</h4>
                <p className="text-[11px] text-body">Sealed copper handi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
