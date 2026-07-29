import React from 'react';
import { Flame, Award, UtensilsCrossed } from 'lucide-react';

export const BrandingSection: React.FC = () => {
  return (
    <section id="branding" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest badge-accent px-3.5 py-1 rounded-full">
            Our Culinary Legacy
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight">
            The Secrets of Royal Dum Handi
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-body">
            Every handi is prepared following centuries-old Nizami traditions to guarantee an unmatched explosion of flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-heading text-xl">Kashmiri Saffron &amp; Spices</h3>
            <p className="text-xs text-body leading-relaxed">
              Infused with genuine Kashmir shahi saffron, whole mace, green cardamom, star anise, and 32 hand-picked herbs freshly ground before every batch.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-heading text-xl">Sealed Copper Handi Dum</h3>
            <p className="text-xs text-body leading-relaxed">
              Poured into heavy copper handis, sealed tightly with dough, and slow-cooked over coal embers to lock in every drop of rich natural juice.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-heading text-xl">Aged Long-Grain Basmati</h3>
            <p className="text-xs text-body leading-relaxed">
              We exclusively use 2-year extra-long grain Daawat Shahi Basmati rice that expands up to 24mm, ensuring light, fluffy non-sticky grains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
