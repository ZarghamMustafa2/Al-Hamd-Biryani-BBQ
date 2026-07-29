import React, { useState } from 'react';
import { Star, ShoppingBag, Flame, Search, ArrowLeft, Award, Sparkles, X, Eye, CheckCircle2 } from 'lucide-react';
import { NEW_OFFICIAL_MENU, MenuItem } from './MenuSection';

interface MenuPageProps {
  onBackToHome: () => void;
  onOpenOrderModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onBackToHome, onOpenOrderModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePreviewDish, setActivePreviewDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'bbq_biryani', label: '1. BBQ Biryani / Pulao' },
    { id: 'bbq', label: '2. BBQ Specials' },
    { id: 'rolls', label: '3. Paratha Rolls' },
    { id: 'desserts_extras', label: '4. Desserts & Salads' },
    { id: 'daig_pakwan', label: '5. Daig & Pakwan' },
  ];

  const filteredDishes = NEW_OFFICIAL_MENU.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 py-8 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <button
            onClick={onBackToHome}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-500 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Al Hamd Multan Gourmet Gallery</span>
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-accent text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Interactive Dish Preview Experience</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight drop-shadow-2xl">
            Our Official Full Menu
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
            Click on any dish image for an HD preview, detailed ingredients breakdown, and instant 1-click ordering!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative bg-slate-900/90 p-2 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md">
          <Search className="w-5 h-5 text-slate-400 absolute left-6 top-5" />
          <input
            type="text"
            placeholder="Search items (e.g. Tikka Biryani, Malai Boti, Paratha Roll, Qorma, Daig)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-2xl pl-14 pr-4 py-3.5 text-xs text-white outline-none shadow-xs font-medium"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white shadow-xl shadow-amber-500/25 scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-slate-900/60 rounded-3xl border border-slate-800">
            <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Items Found</h3>
            <p className="text-xs text-slate-400">Try searching with another keyword.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDishes.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-2xl border border-slate-800 hover:border-amber-500/60 transition-all duration-300 hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                <div>
                  {/* Clickable Dish Image Container */}
                  <div
                    onClick={() => setActivePreviewDish(item)}
                    className="relative h-56 w-full overflow-hidden cursor-pointer group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Zoom Icon Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-xs">
                      <Eye className="w-5 h-5 text-amber-400" />
                      <span>Click to Zoom HD</span>
                    </div>

                    {item.isBestseller && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-lg shadow-md">
                        Bestseller
                      </div>
                    )}

                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-amber-400 text-[10px] font-bold rounded-lg border border-amber-500/30 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span>{item.spiceLevel}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30">
                        {item.categoryLabel}
                      </span>
                      <span className="font-display font-extrabold text-amber-400 text-xl">{item.price}</span>
                    </div>

                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenOrderModal}
                    className="w-full py-3 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ORDER THIS DISH</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HD Dish Preview Lightbox Modal */}
      {activePreviewDish && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-6 text-white max-h-[90vh] overflow-y-auto">
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={activePreviewDish.image}
                alt={activePreviewDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

              <button
                onClick={() => setActivePreviewDish(null)}
                className="absolute top-4 right-4 p-2.5 bg-slate-950/80 hover:bg-red-600 text-white rounded-xl backdrop-blur-md border border-slate-700 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-md border border-amber-500/30 uppercase tracking-widest">
                    {activePreviewDish.categoryLabel}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white mt-1 uppercase">
                    {activePreviewDish.name}
                  </h3>
                </div>
                <span className="font-display font-black text-2xl text-amber-400 bg-slate-950/80 px-4 py-1.5 rounded-xl border border-amber-500/30">
                  {activePreviewDish.price}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 pt-0">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {activePreviewDish.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>Spice Heat Level: <strong>{activePreviewDish.spiceLevel}</strong></span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Customer Rating: <strong>{activePreviewDish.rating} / 5.0</strong></span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setActivePreviewDish(null);
                    onOpenOrderModal();
                  }}
                  className="flex-1 py-3.5 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ORDER THIS DISH NOW ({activePreviewDish.price})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
