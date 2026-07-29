import React, { useState } from 'react';
import { ShoppingBag, Flame, Menu, X, Sun, Moon, Calendar, Utensils, Phone, MessageCircle, MapPin } from 'lucide-react';
import { AlHamdLogo } from './AlHamdLogo';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenMenuPage: () => void;
  onOpenHomePage: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  currentPage: 'home' | 'menu';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  onOpenMenuPage,
  onOpenHomePage,
  theme,
  onToggleTheme,
  currentPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Ultra-Prominent Top Contact Announcement Hotline Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-emerald-600 to-red-600 text-white text-[11px] font-extrabold py-1.5 px-4 text-center flex items-center justify-between gap-2 overflow-x-auto shadow-md">
        <div className="flex items-center gap-4 mx-auto">
          <a href="tel:03126382499" className="flex items-center gap-1 hover:underline">
            <Phone className="w-3.5 h-3.5 text-amber-200 fill-amber-200 animate-pulse" />
            <span>Hotline: <strong className="text-amber-200">0312 6382499</strong></span>
          </a>
          <span className="hidden sm:inline text-white/50">•</span>
          <a href="https://wa.me/923126382499" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1 hover:underline">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-200 fill-emerald-200" />
            <span>WhatsApp: <strong className="text-emerald-200">0312 6382499</strong></span>
          </a>
          <span className="hidden md:inline text-white/50">•</span>
          <span className="hidden md:flex items-center gap-1 text-slate-100">
            <MapPin className="w-3.5 h-3.5 text-amber-200" />
            <span>Nagana Chowk, Near Total Petrol Pump, M.A. Jinnah Road, Multan</span>
          </span>
        </div>
      </div>

      <div className="glass-panel border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button onClick={onOpenHomePage} className="flex items-center gap-3 group cursor-pointer text-left">
            <AlHamdLogo size="md" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-xl text-heading tracking-tight flex items-center gap-1.5 transition-colors uppercase">
                AL HAMD BIRYANI &amp; BBQ <Flame className="w-4 h-4 text-amber-500 animate-pulse fill-amber-500" />
              </span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-extrabold tracking-wider uppercase">
                Authentic Dum Handi &amp; Charcoal BBQ
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={onOpenHomePage}
              className={`text-xs font-bold uppercase tracking-wider py-1 relative group cursor-pointer ${
                currentPage === 'home' ? 'text-amber-500 font-extrabold' : 'text-heading hover:text-amber-600'
              }`}
            >
              Home
            </button>

            <button
              onClick={onOpenMenuPage}
              className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                currentPage === 'menu'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                  : 'text-amber-500 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-950'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Full Menu Page</span>
            </button>

            <a href="#testimonials" onClick={onOpenHomePage} className="text-xs font-bold text-heading hover:text-amber-600 uppercase tracking-wider py-1">
              Reviews
            </a>
            <a href="#reservation" onClick={onOpenHomePage} className="text-xs font-bold text-heading hover:text-amber-600 uppercase tracking-wider py-1">
              Book Table
            </a>
            <a href="#contact" onClick={onOpenHomePage} className="text-xs font-bold text-amber-400 hover:text-amber-500 uppercase tracking-wider py-1 px-2.5 bg-amber-500/10 rounded-lg border border-amber-500/30">
              Contact Us
            </a>
          </nav>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-[11px] font-extrabold text-amber-300">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-800 fill-slate-800" />
                  <span className="text-[11px] font-extrabold text-slate-900">Dark Mode</span>
                </>
              )}
            </button>

            {/* Table Booking */}
            <a
              href="#reservation"
              onClick={onOpenHomePage}
              className="px-3.5 py-2 rounded-xl text-xs font-bold glass-card text-heading border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Book Table</span>
            </a>

            {/* Order Online CTA */}
            <button
              onClick={onOpenOrderModal}
              className="px-4 py-2 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-red-600/30 transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ORDER NOW</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 bg-amber-500/20 text-amber-800 dark:text-amber-300 rounded-xl"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onOpenMenuPage}
              className="p-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1"
            >
              <Utensils className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-heading"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
            <div className="flex flex-col gap-2 mb-3">
              <button
                onClick={() => {
                  onOpenHomePage();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-xs font-bold text-heading p-2 rounded-lg glass-card"
              >
                Home Page
              </button>
              <button
                onClick={() => {
                  onOpenMenuPage();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-xs font-bold text-amber-400 p-2 rounded-lg bg-amber-500/20 border border-amber-500/40"
              >
                Full Menu Page
              </button>
              <a
                href="#contact"
                onClick={() => {
                  onOpenHomePage();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-xs font-bold text-emerald-400 p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Hotline: 0312 6382499</span>
              </a>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={onToggleTheme}
                className="w-full py-2 bg-amber-500/20 text-heading text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button>
              <button
                onClick={() => {
                  onOpenOrderModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-red-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER NOW</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
