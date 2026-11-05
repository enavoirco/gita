import React from 'react';
import { ArrowRight, Check, ShieldCheck, Download, Sparkles, BookCheck } from 'lucide-react';

interface PricingProps {
  onOpenCheckout: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight [text-wrap:balance]">
            An intentional investment in your peace of mind.
          </h2>
          <p className="text-base text-[#1C1917]/70 mt-4 leading-relaxed">
            Less than the cost of a single specialty coffee. Priced intentionally to make timeless mental clarity accessible to every student and professional.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-[#F3ECE1]/70 rounded-2xl border-2 border-[#9E7D3B]/40 p-8 sm:p-12 shadow-[0_20px_50px_rgba(28,25,23,0.06)] overflow-hidden">
          
          {/* Antique gold accent ribbon */}
          <div className="absolute top-0 right-0 bg-[#9E7D3B] text-white text-[11px] font-semibold uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-sm">
            Complete Digital Edition
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Offer details */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9E7D3B] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Downloadable PDF Workbook</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] mb-3">
                7-Day Mind Reset
              </h3>

              <p className="text-sm text-[#1C1917]/75 leading-relaxed mb-6">
                The complete guided workbook with 7 daily lessons, structured practical exercises, evening reflection prompts, and lifetime personal usage rights.
              </p>

              {/* What's included checklist */}
              <div className="space-y-3 pt-2 border-t border-[#1C1917]/10 text-xs sm:text-sm text-[#1C1917]/85">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0" />
                  <span>Full 42-page formatted PDF workbook</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0" />
                  <span>7 daily lessons rooted in the Bhagavad Gita</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0" />
                  <span>Daily practical worksheets (10–15 mins each)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0" />
                  <span>Evening introspective prompts & 7-Day scorecard</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0" />
                  <span>Compatible with iPad, tablets, or printable at home</span>
                </div>
              </div>
            </div>

            {/* Right Col: Price block and CTA */}
            <div className="md:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#1C1917]/10 text-center flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#1C1917]/50 font-medium block">
                  One-Time Payment
                </span>
                
                <div className="my-3 flex items-baseline justify-center gap-1">
                  <span className="font-editorial text-5xl sm:text-6xl font-bold text-[#1C1917]">
                    ₹50
                  </span>
                  <span className="text-xs text-[#1C1917]/50 font-medium">only</span>
                </div>

                <p className="text-xs text-[#1C1917]/60 mb-6">
                  No monthly subscriptions. No hidden upgrades. Lifetime ownership.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenCheckout}
                  className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(28,25,23,0.12)] whitespace-nowrap mb-3"
                >
                  <span>Get Your Workbook – ₹50</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#1C1917]/50">
                  <Download className="w-3 h-3 text-[#9E7D3B]" />
                  <span>Instant PDF download to your email</span>
                </div>
              </div>
            </div>

          </div>

          {/* Trust reassurance banner */}
          <div className="mt-8 pt-6 border-t border-[#1C1917]/10 flex flex-wrap items-center justify-around gap-4 text-xs text-[#1C1917]/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9E7D3B]" />
              Safe & secure checkout
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#1C1917]/20">·</span>
            <span className="flex items-center gap-1.5">
              <BookCheck className="w-4 h-4 text-[#9E7D3B]" />
              Authentic Vedic philosophy distilled
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#1C1917]/20">·</span>
            <span className="flex items-center gap-1.5">
              <Download className="w-4 h-4 text-[#9E7D3B]" />
              Direct PDF access
            </span>
          </div>

        </div>

        {/* Audience Fit Note */}
        <div className="mt-12 text-center text-xs text-[#1C1917]/60">
          <p>
            Designed specifically for college students preparing for demanding exams, young professionals managing cognitive overload, and anyone seeking sustainable inner peace.
          </p>
        </div>

      </div>
    </section>
  );
};
