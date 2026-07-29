import React from 'react';
import { Flame, Star, ShoppingBag, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { AlHamdLogo } from './AlHamdLogo';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrderModal,
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Prominent Official AH 3-Star Emblem */}
        <div className="flex justify-center mb-2">
          <div className="p-2 rounded-full bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 backdrop-blur-md border border-amber-500/50 shadow-2xl shadow-amber-500/20">
            <AlHamdLogo size="xl" showGlow={false} />
          </div>
        </div>

        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-accent text-xs font-extrabold tracking-wider uppercase shadow-xl animate-bounce">
          <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Voted #1 Al Hamd Biryani &amp; Charcoal BBQ</span>
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        </div>

        {/* Main Royal Heading */}
        <div className="space-y-4">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-heading tracking-tight leading-none uppercase drop-shadow-md">
            AL HAMD <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-500 bg-clip-text text-transparent">
              BIRYANI &amp; BBQ
            </span>
          </h1>

          <p className="font-script text-2xl sm:text-4xl text-amber-600 dark:text-amber-300 transform -rotate-1 font-bold">
            Authentic Dum Handi &amp; Live Charcoal Grill
          </p>
        </div>

        {/* Hero Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-body font-semibold leading-relaxed">
          Savor the legendary 300-year-old royal Hyderabadi Dum Biryani slow-cooked in copper handis, alongside sizzling smoke-grilled Tikka Kebabs and Malai Boti.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenOrderModal}
            className="px-8 py-4 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-display font-extrabold text-sm rounded-2xl shadow-2xl shadow-red-600/40 hover:scale-105 transition-all cursor-pointer flex items-center gap-3 group uppercase"
          >
            <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>ORDER AL HAMD BIRYANI &amp; BBQ ONLINE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#menu"
            className="px-7 py-4 glass-card hover:border-amber-500 text-heading font-extrabold text-sm rounded-2xl transition-all flex items-center gap-2 uppercase"
          >
            <span>EXPLORE MENU &amp; BBQ</span>
          </a>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10">
          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <Flame className="w-6 h-6 text-amber-500 mx-auto" />
            <div className="font-extrabold text-heading text-lg sm:text-xl">6 Hours</div>
            <div className="text-[11px] text-body font-bold uppercase tracking-wider">Slow Dum Cooked</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <Star className="w-6 h-6 text-amber-500 fill-amber-500 mx-auto" />
            <div className="font-extrabold text-heading text-lg sm:text-xl">4.9 / 5.0</div>
            <div className="text-[11px] text-body font-bold uppercase tracking-wider">18,000+ Reviews</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <ShieldCheck className="w-6 h-6 text-amber-500 mx-auto" />
            <div className="font-extrabold text-heading text-lg sm:text-xl">100% Halal</div>
            <div className="text-[11px] text-body font-bold uppercase tracking-wider">Pure Ingredients</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <Clock className="w-6 h-6 text-amber-500 mx-auto" />
            <div className="font-extrabold text-heading text-lg sm:text-xl">30 Mins</div>
            <div className="text-[11px] text-body font-bold uppercase tracking-wider">Hot &amp; Fresh Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};
