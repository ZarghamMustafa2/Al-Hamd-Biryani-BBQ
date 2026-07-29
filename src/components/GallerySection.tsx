import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Sealed Copper Handi Dum',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop',
    tag: 'Dum Cooking',
  },
  {
    id: 2,
    title: 'Kashmiri Saffron & Spices',
    url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop',
    tag: 'Ingredients',
  },
  {
    id: 3,
    title: 'Tandoori Seekh Kebabs',
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    tag: 'Starters',
  },
  {
    id: 4,
    title: 'Royal Dining Experience',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    tag: 'Ambience',
  },
  {
    id: 5,
    title: 'Fresh Coriander & Mint Herbs',
    url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop',
    tag: 'Kitchen',
  },
  {
    id: 6,
    title: 'Shahi Gulab Jamun Dessert',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop',
    tag: 'Desserts',
  },
];

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 dark:text-amber-300 light:text-amber-800 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-500/40">
            Visual Journey
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 uppercase tracking-tight drop-shadow-md">
            Royal Food Gallery
          </h2>
          <p className="max-w-lg mx-auto text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-700 font-semibold">
            A glimpse into our kitchen, handcrafted ingredients, and memorable dining moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img.url)}
              className="rounded-3xl overflow-hidden relative group h-72 cursor-pointer border border-slate-700 shadow-2xl bg-slate-900"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-amber-300 bg-amber-500/30 px-2.5 py-0.5 rounded-md border border-amber-500/40">
                    {img.tag}
                  </span>
                  <h3 className="font-bold text-base mt-1 text-white">{img.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <img src={activeImage} alt="Expanded view" className="w-full h-full object-contain" />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-3 bg-slate-900 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
