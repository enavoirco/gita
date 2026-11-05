import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address for workbook delivery.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setEmail('');
    setPhone('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#1C1917] w-full max-w-lg rounded-2xl border border-[#1C1917]/15 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#1C1917]/10 flex items-center justify-between bg-[#F3ECE1]/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#9E7D3B]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#1C1917]">
                Get the 7-Day Mind Reset
              </h3>
              <p className="text-[11px] text-[#1C1917]/50">Digital PDF Workbook · ₹50 One-Time</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            aria-label="Close checkout modal"
            className="p-1.5 rounded-full text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-4 space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-[#9E7D3B]/10 text-[#9E7D3B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-editorial text-2xl font-bold text-[#1C1917] mb-2">
                  Priority Checkout Intent Noted
                </h4>
                <p className="text-xs sm:text-sm text-[#1C1917]/75 leading-relaxed max-w-sm mx-auto">
                  Thank you! We have registered your delivery address (<strong>{email}</strong>).
                </p>
              </div>

              <div className="p-4 bg-[#F3ECE1]/80 rounded-xl border border-[#1C1917]/8 text-left text-xs text-[#1C1917]/80 space-y-2">
                <p className="font-semibold text-[#1C1917]">Next Stage Integration Notice:</p>
                <p>
                  As planned for this first phase, payment gateways (Razorpay) and automatic PDF delivery (Resend) will be connected in Stage 2. Your contact is safely on the priority list for immediate notification.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] transition-colors"
              >
                Back to Landing Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Product Order Summary Strip */}
              <div className="p-4 rounded-xl bg-[#F3ECE1]/60 border border-[#1C1917]/8 flex items-center justify-between text-xs">
                <div>
                  <p className="font-editorial font-bold text-sm text-[#1C1917]">7-Day Mind Reset Workbook</p>
                  <p className="text-[11px] text-[#1C1917]/60">Printable & Tablet-ready PDF (42 Pages)</p>
                </div>
                <div className="text-right">
                  <span className="font-editorial text-xl font-bold text-[#9E7D3B]">₹50</span>
                  <span className="block text-[10px] uppercase text-[#1C1917]/50">All inclusive</span>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="checkout-email" className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Delivery Email Address <span className="text-[#9E7D3B]">*</span>
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="e.g. arjun@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#1C1917]/35 focus:outline-none focus:ring-2 focus:ring-[#9E7D3B]/40 focus:border-[#9E7D3B]"
                  />
                  <p className="text-[11px] text-[#1C1917]/50 mt-1">
                    Your PDF workbook and receipts will be sent here.
                  </p>
                </div>

                <div>
                  <label htmlFor="checkout-phone" className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Phone / WhatsApp Number <span className="text-[10px] text-[#1C1917]/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1917]/15 text-sm text-[#1C1917] placeholder:text-[#1C1917]/35 focus:outline-none focus:ring-2 focus:ring-[#9E7D3B]/40 focus:border-[#9E7D3B]"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Action Button */}
              <div>
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all shadow-md"
                >
                  <span>Proceed to Payment – ₹50</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Security reassure */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1C1917]/50 pt-1">
                <Lock className="w-3 h-3 text-[#9E7D3B]" />
                <span>SSL Secured · Razorpay Gateway Ready · Instant PDF Access</span>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
