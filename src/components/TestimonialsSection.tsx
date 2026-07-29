import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Tariq Mahmood',
    role: 'Food Critic, Foodies Guild',
    rating: 5,
    comment: 'Hands down the most authentic Dum Biryani in the city. The Kashmir saffron aroma hits you the moment the handi seal is broken!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Ayesha Siddiqui',
    role: 'Verified Gourmet Diner',
    rating: 5,
    comment: 'The chicken literally falls off the bone, and every grain of Basmati rice is distinct and fragrant. 10/10 recommendation!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sameer Khan',
    role: 'Corporate Event Organizer',
    rating: 5,
    comment: 'Ordered 5 Family Buckets for our company gala dinner. Everyone was raving about the spice blend and hot delivery!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 dark:text-amber-300 light:text-amber-800 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-500/40">
            Real Foodie Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 uppercase tracking-tight drop-shadow-md">
            Loved By 50,000+ Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/90 dark:bg-slate-900/90 light:bg-white p-7 rounded-3xl space-y-4 relative flex flex-col justify-between border border-slate-700/80 light:border-amber-200 shadow-2xl backdrop-blur-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/40" />
                </div>

                <p className="text-sm sm:text-base text-slate-100 dark:text-slate-100 light:text-slate-800 font-semibold leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/50"
                />
                <div>
                  <h4 className="font-extrabold text-white dark:text-white light:text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                  </h4>
                  <p className="text-xs text-amber-300 dark:text-amber-300 light:text-amber-800 font-bold">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
