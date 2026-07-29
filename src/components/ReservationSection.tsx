import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-07-24',
    time: '07:30 PM',
    seating: 'VIP Royal Lounge',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto bg-slate-900/90 dark:bg-slate-900/90 light:bg-white rounded-3xl p-8 sm:p-12 border border-slate-700/80 light:border-amber-200 shadow-2xl relative overflow-hidden backdrop-blur-md">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 dark:text-amber-300 light:text-amber-800 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-500/40">
            Royal Dining Experience
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 uppercase tracking-tight drop-shadow-md">
            Reserve Your Royal Table
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-700 font-semibold">
            Book in advance to ensure fresh Dum Handi preparation right as you arrive.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900">Table Reservation Confirmed!</h3>
            <p className="text-xs text-slate-200 dark:text-slate-200 light:text-slate-700 max-w-md mx-auto font-medium">
              Thank you, <strong className="text-amber-400 font-bold">{formData.name || 'Valued Guest'}</strong>! We have reserved your table for <strong className="text-amber-400 font-bold">{formData.guests}</strong> on <strong className="text-amber-400 font-bold">{formData.date}</strong> at <strong className="text-amber-400 font-bold">{formData.time}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-md hover:bg-amber-400 transition-colors"
            >
              Book Another Reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sultan Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests (Couple)</option>
                  <option value="4 Guests">4 Guests (Family)</option>
                  <option value="6 Guests">6 Guests (Party)</option>
                  <option value="8+ Guests">8+ Royal Banquet</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Seating Area</label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                >
                  <option value="VIP Royal Lounge">VIP Royal Lounge</option>
                  <option value="Main Dining Hall">Main Dining Hall</option>
                  <option value="Rooftop Star Gazing">Rooftop Terrace</option>
                  <option value="Private Family Enclosure">Private Family Room</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Reservation Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Time Slot</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
                >
                  <option value="01:00 PM">01:00 PM (Lunch)</option>
                  <option value="02:30 PM">02:30 PM (Lunch)</option>
                  <option value="07:30 PM">07:30 PM (Dinner)</option>
                  <option value="09:00 PM">09:00 PM (Late Dinner)</option>
                  <option value="10:30 PM">10:30 PM (Midnight Feast)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">Special Notes / Dietary Requirements</label>
              <textarea
                rows={3}
                placeholder="e.g. Birthday celebration, extra spicy handi, high chair required..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border border-slate-700 light:border-slate-300 focus:border-amber-500 rounded-xl p-3 text-xs text-white dark:text-white light:text-slate-900 font-medium outline-none shadow-xs transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
            >
              CONFIRM TABLE RESERVATION
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
