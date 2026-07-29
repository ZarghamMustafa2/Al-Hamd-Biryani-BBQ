import React from 'react';
import { Award, Flame, Star, Quote } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto glass-card rounded-3xl p-8 sm:p-12 overflow-hidden relative shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Chef Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                alt="Master Chef Zulfiqar"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 glass-card rounded-xl border border-amber-500/30 text-center">
                <h4 className="font-bold text-white text-sm">Chef Master Zulfiqar</h4>
                <p className="text-[11px] text-amber-300 font-bold">Head Ustaad &amp; Spice Master</p>
              </div>
            </div>
          </div>

          {/* Chef Details & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest badge-accent px-3.5 py-1 rounded-full">
                Master Culinary Craftsman
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-heading uppercase tracking-tight">
                Meet Ustaad Zulfiqar
              </h2>
            </div>

            {/* Quote */}
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500 relative shadow-sm">
              <Quote className="w-8 h-8 text-amber-500/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-heading font-script italic leading-relaxed">
                &ldquo;True Dum Biryani is not just mixed rice and meat. It is a sacred symphony where heat, steam, copper, and hand-ground spices come together to create magic.&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-body leading-relaxed">
              Trained under traditional court chefs in Hyderabad, Chef Zulfiqar has dedicated over 28 years to perfecting the delicate ratio of saffron, aromatic herbs, and fire intensity needed for flawless Dum Biryani.
            </p>

            {/* Accolades */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="glass-card p-3 rounded-xl text-center">
                <Award className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <div className="font-bold text-heading text-xs">Golden Handi 2024</div>
                <div className="text-[10px] text-muted">Best Biryani Award</div>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <div className="font-bold text-heading text-xs">28+ Years</div>
                <div className="text-[10px] text-muted">Mastery Experience</div>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto mb-1" />
                <div className="font-bold text-heading text-xs">Michelin Guide</div>
                <div className="text-[10px] text-muted">Recommended 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
