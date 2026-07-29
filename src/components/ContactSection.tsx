import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest badge-accent px-3.5 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight">
            Visit &amp; Contact Al Hamd Multan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-amber-500/40 shadow-xl">
              <div className="flex items-center gap-3 text-amber-500">
                <MapPin className="w-5 h-5" />
                <h4 className="font-bold text-heading text-sm">Restaurant Address &amp; Location</h4>
              </div>
              <p className="text-xs text-body font-extrabold leading-relaxed pl-8">
                Nagana Chowk, Near Total Petrol Pump, M.A. Jinnah Road, Multan, Pakistan
              </p>
            </div>

            {/* Phone & Hotline Card */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 text-amber-500">
                <Phone className="w-5 h-5" />
                <h4 className="font-bold text-heading text-sm">Direct Phone &amp; Order Hotline</h4>
              </div>
              <a href="tel:+923126382499" className="text-sm font-extrabold text-amber-500 pl-8 block hover:underline">
                +92 312 6382499
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 text-amber-500">
                <Mail className="w-5 h-5" />
                <h4 className="font-bold text-heading text-sm">Official Email Address</h4>
              </div>
              <a
                href="mailto:alhamdbiryani@gmail.com"
                className="text-xs font-bold text-heading hover:text-amber-500 transition-colors pl-8 block"
              >
                alhamdbiryani@gmail.com
              </a>
            </div>

            {/* Social Media Card */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 text-amber-500">
                <Instagram className="w-5 h-5" />
                <h4 className="font-bold text-heading text-sm">Social Media &amp; Messaging</h4>
              </div>
              <div className="pl-8 space-y-2 text-xs font-semibold text-body">
                <a
                  href="https://instagram.com/alhamdbiryanii"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-pink-500 hover:underline"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: @alhamdbiryanii</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook / Messenger: Al hamd biryani</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center gap-3 text-amber-500">
                <Clock className="w-5 h-5" />
                <h4 className="font-bold text-heading text-sm">Opening Hours</h4>
              </div>
              <div className="text-xs text-body font-medium pl-8 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sun:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">12:00 PM - 03:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="font-bold text-heading text-xl mb-4">Send Us a Direct Message</h3>

            {sent ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-heading text-lg">Message Sent Successfully!</h4>
                <p className="text-xs text-body font-medium">Al Hamd team will reply back to your email (alhamdbiryani@gmail.com) shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="input-field border focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="input-field border focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full input-field border focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs"
                />
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message, party order inquiry or feedback..."
                  className="w-full input-field border focus:border-amber-500 rounded-xl p-3 text-xs outline-none shadow-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
