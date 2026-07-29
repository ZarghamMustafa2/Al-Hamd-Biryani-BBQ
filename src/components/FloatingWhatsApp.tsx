import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = 'https://wa.me/923126382499?text=Assalam-o-Alaikum%20Al%20Hamd%20Biryani%20%26%20BBQ%2C%20I%20want%20to%20place%20an%20order!';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group border-2 border-white/20"
      title="Order via WhatsApp: 0312 6382499"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      <span className="hidden sm:inline-block text-xs font-black tracking-wide pr-1">
        WhatsApp Order: 0312 6382499
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
      </span>
    </a>
  );
};
