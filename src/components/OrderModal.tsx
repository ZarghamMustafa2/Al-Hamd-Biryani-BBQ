import React, { useState } from 'react';
import { X, Flame, Check, ShoppingBag, Clock, PhoneCall, Plus, Minus, Bike, MapPin, MessageCircle } from 'lucide-react';
import { NEW_OFFICIAL_MENU } from './MenuSection';
import { AlHamdLogo } from './AlHamdLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({
    'bb1': 1, // Default 1 Chicken Tikka Biryani
  });

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    address: 'Nagana Chowk, Multan',
    notes: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const updateQuantity = (id: string, delta: number) => {
    const current = selectedItems[id] || 0;
    const updated = Math.max(0, current + delta);
    if (updated === 0) {
      const copy = { ...selectedItems };
      delete copy[id];
      setSelectedItems(copy);
    } else {
      setSelectedItems({ ...selectedItems, [id]: updated });
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    Object.entries(selectedItems).forEach(([id, qty]) => {
      const item = NEW_OFFICIAL_MENU.find((m) => m.id === id);
      if (item) {
        const numericPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        total += numericPrice * qty;
      }
    });
    return total;
  };

  const totalPrice = calculateTotal();

  // Create WhatsApp message string
  const getWhatsAppMessage = () => {
    let text = `*New Order - Al Hamd Biryani %26 BBQ Multan*\n\n`;
    text += `*Customer:* ${deliveryDetails.name || 'Guest'}\n`;
    text += `*Phone:* ${deliveryDetails.phone || '03126382499'}\n`;
    text += `*Delivery Address:* ${deliveryDetails.address}\n\n`;
    text += `*Items Ordered:*\n`;

    Object.entries(selectedItems).forEach(([id, qty]) => {
      const item = NEW_OFFICIAL_MENU.find((m) => m.id === id);
      if (item && qty > 0) {
        text += `- ${item.name} x ${qty} = ${item.price}\n`;
      }
    });

    text += `\n*Total Amount:* Rs ${totalPrice}\n`;
    text += `*Location:* Nagana Chowk, M.A. Jinnah Road, Multan`;

    return encodeURIComponent(text);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <AlHamdLogo size="md" />
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-1.5 uppercase">
                Online Order - Al Hamd Multan <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              </h3>
              <p className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900 inline" />
                <span>WhatsApp Order Hotline: 0312 6382499</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderPlaced ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-extrabold text-2xl text-white">Order Confirmed!</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-400">{deliveryDetails.name || 'Valued Guest'}</strong>! Your order for <strong className="text-amber-400">Rs {totalPrice}</strong> has been received by Al Hamd Biryani &amp; BBQ Multan kitchen.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/923126382499?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>SEND ORDER TO WHATSAPP (0312 6382499)</span>
              </a>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-1 max-w-md mx-auto text-left">
              <p><strong className="text-slate-200">Delivery Address:</strong> {deliveryDetails.address}</p>
              <p><strong className="text-slate-200">WhatsApp Hotline:</strong> 0312 6382499</p>
              <p><strong className="text-slate-200">Estimated Delivery:</strong> 25-35 Minutes</p>
            </div>

            <button
              onClick={() => {
                setOrderPlaced(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
            >
              Close &amp; Back to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {/* Select Dishes */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
                Select Your Items:
              </h4>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {NEW_OFFICIAL_MENU.map((item) => {
                  const qty = selectedItems[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                        qty > 0 ? 'bg-slate-800/90 border-amber-500/50' : 'bg-slate-950/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                        />
                        <div>
                          <h5 className="font-bold text-xs text-white">{item.name}</h5>
                          <span className="text-xs text-amber-400 font-extrabold">{item.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-xs text-amber-400">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold hover:bg-amber-400"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Contact Details */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
                Delivery Details:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={deliveryDetails.name}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                  className="bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3 text-xs text-white outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number (0312 6382499)"
                  value={deliveryDetails.phone}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
                  className="bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3 text-xs text-white outline-none"
                />
              </div>

              <input
                type="text"
                required
                placeholder="Full Delivery Address in Multan"
                value={deliveryDetails.address}
                onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3 text-xs text-white outline-none"
              />
            </div>

            {/* Total Price & Submit */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Total Order Amount:</span>
                <span className="text-2xl font-black text-amber-400">Rs {totalPrice}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/923126382499?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp Order</span>
                </a>

                <button
                  type="submit"
                  disabled={totalPrice === 0}
                  className="flex-1 sm:flex-initial px-6 py-3.5 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 hover:from-red-700 hover:to-orange-600 disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bike className="w-4 h-4" />
                  <span>CONFIRM ORDER</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
