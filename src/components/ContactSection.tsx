import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
            Official Contact &amp; Location
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight drop-shadow-md">
            Visit &amp; Contact Al Hamd Multan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-xl mx-auto font-semibold">
            Reach out via 1-Click WhatsApp, Direct Phone Call, or Visit our Nagana Chowk Branch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">

            {/* 1. WHATSAPP VIP CONTACT CARD */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-950/80 to-slate-900/90 relative overflow-hidden group hover:border-emerald-400 transition-all">
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-bl-xl shadow-md">
                Fastest Response
              </div>
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <MessageCircle className="w-6 h-6 fill-emerald-400 text-slate-950" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base">WhatsApp Hotline &amp; Orders</h4>
                  <p className="text-[11px] text-emerald-300 font-bold">24/7 Fast Chat Support</p>
                </div>
              </div>
              <p className="text-xl font-black text-emerald-400 pl-1">
                0312 6382499 / +92 312 6382499
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/923126382499?text=Assalam-o-Alaikum%20Al%20Hamd%20Biryani%20%26%20BBQ%2C%20I%20want%20to%20place%20an%20order!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>1-CLICK CHAT ON WHATSAPP (0312 6382499)</span>
                </a>
              </div>
            </div>

            {/* 2. DIRECT PHONE CALL CARD */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/20 bg-gradient-to-br from-amber-950/40 to-slate-900/90 relative overflow-hidden group hover:border-amber-400 transition-all">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base">Direct Phone Call</h4>
                  <p className="text-[11px] text-amber-300 font-bold">Call Us Direct for Instant Orders</p>
                </div>
              </div>
              <p className="text-xl font-black text-amber-400 pl-1">
                +92 312 6382499
              </p>
              <div className="pt-2">
                <a
                  href="tel:+923126382499"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 fill-slate-950 text-amber-500" />
                  <span>CALL NOW (+92 312 6382499)</span>
                </a>
              </div>
            </div>

            {/* 3. LOCATION & ADDRESS CARD */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-amber-500/40 shadow-xl bg-slate-900/90">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-heading text-sm uppercase tracking-wide">Multan Branch Location</h4>
                  <p className="text-[11px] text-amber-400/90 font-bold">Nagana Chowk Multan</p>
                </div>
              </div>
              <p className="text-xs text-body font-extrabold leading-relaxed pl-1">
                Nagana Chowk, Near Total Petrol Pump, M.A. Jinnah Road, Multan, Pakistan
              </p>
              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Nagana+Chowk+Multan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl border border-amber-500/30 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* 4. EMAIL & SOCIAL MEDIA CARD */}
            <div className="glass-card p-6 rounded-3xl space-y-4 border border-slate-700 shadow-xl bg-slate-900/90">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-black text-heading text-sm uppercase tracking-wide">Email &amp; Social Links</h4>
              </div>

              <div className="space-y-3.5 pl-1">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Official Email</span>
                  <a
                    href="mailto:alhamdbiryani@gmail.com"
                    className="text-xs font-black text-amber-400 hover:underline"
                  >
                    alhamdbiryani@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://instagram.com/alhamdbiryanii"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-pink-500/15 border border-pink-500/40 text-pink-400 font-extrabold text-xs flex items-center gap-1.5 hover:bg-pink-500 hover:text-white transition-all shadow-md"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@alhamdbiryanii</span>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-400 font-extrabold text-xs flex items-center gap-1.5 hover:bg-blue-500 hover:text-white transition-all shadow-md"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Al hamd biryani</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 5. OPENING HOURS CARD */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-slate-700 shadow-xl bg-slate-900/90">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-black text-heading text-sm uppercase tracking-wide">Restaurant Opening Hours</h4>
              </div>
              <div className="text-xs text-body font-medium pl-1 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-300">Monday - Sunday:</span>
                  <span className="text-emerald-400 font-black px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-lg">12:00 PM - 03:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DIRECT FEEDBACK & INQUIRY FORM */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl bg-slate-900/95 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="font-black text-heading text-xl uppercase tracking-tight">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Inquiries, party bookings, or custom catering requests</p>
                </div>
                <span className="text-xs font-black text-amber-400 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40">
                  Quick Reply
                </span>
              </div>

              {sent ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="font-black text-heading text-xl">Message Sent Successfully!</h4>
                  <p className="text-xs text-body font-semibold max-w-md mx-auto">
                    Thank you! The Al Hamd Biryani &amp; BBQ team will reply to your message via email (<strong className="text-amber-400">alhamdbiryani@gmail.com</strong>) or phone hotline shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 px-6 py-2.5 bg-amber-500 text-slate-950 font-black text-xs rounded-xl hover:bg-amber-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sultan Ahmed"
                        className="w-full input-field border border-slate-700 focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs font-semibold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Phone Number / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="0312 6382499"
                        className="w-full input-field border border-slate-700 focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alhamdbiryani@gmail.com"
                      className="w-full input-field border border-slate-700 focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Event Daig Catering, Family Reservation, Feedback"
                      className="w-full input-field border border-slate-700 focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Message / Order Requirements</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message or party order details here..."
                      className="w-full input-field border border-slate-700 focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND DIRECT MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
