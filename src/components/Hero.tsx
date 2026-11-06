import React from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { PURCHASE_LINK } from '../config.ts';

export const Hero: React.FC = () => {
  const purchaseHref = PURCHASE_LINK || '#pricing';
  const externalProps = PURCHASE_LINK
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#EAE1D2]/40 via-[#FAF7F2]/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Quiet kicker with antique gold highlight */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-4">
              <span>Bhagavad Gita-Inspired Practical Journal</span>
              <span aria-hidden="true">·</span>
              <span>Self-Paced Guided Edition</span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold text-[#1C1917] tracking-tight mb-6 [text-wrap:balance]">
              A calmer mind. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1C1917]/90">A more intentional 7 days.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#1C1917]/75 font-normal leading-relaxed max-w-xl mb-8">
              Seven days. Fifteen minutes a day. Practical exercises inspired by the Bhagavad Gita to help you focus better, manage distractions and build everyday discipline.
            </p>

            {/* Metadata specs - Unboxed text with subtle typographic separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#1C1917]/70 font-medium mb-9 border-y border-[#1C1917]/10 py-3.5 max-w-xl">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#9E7D3B]" />
                7 guided days
              </span>
              <span aria-hidden="true" className="text-[#1C1917]/30">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9E7D3B]" />
                10–15 minutes daily
              </span>
              <span aria-hidden="true" className="text-[#1C1917]/30">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9E7D3B]" />
                Practical exercises
              </span>
              <span aria-hidden="true" className="text-[#1C1917]/30">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B]" />
                Instant digital download
              </span>
            </div>

            {/* CTAs and guarantee */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href={purchaseHref}
                {...externalProps}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(28,25,23,0.15)] whitespace-nowrap"
              >
                <span>Get the Workbook – ₹50</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#preview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1C1917] bg-[#F3ECE1] hover:bg-[#EAE1D2] rounded-md border border-[#1C1917]/10 transition-colors whitespace-nowrap"
              >
                <span>Browse Inside Pages</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#1C1917]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D3B]" />
              <span>One-time payment of ₹50 · Printable & Tablet-ready PDF · Instant delivery</span>
            </div>
          </div>

          {/* Right Column: Realistic 3D-Style Workbook Mockup Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[420px] w-full">
              
              {/* Soft decorative shadow pedestal */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-[#9E7D3B]/20 via-[#EAE1D2]/30 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"
                aria-hidden="true"
              />

              {/* 3D Mockup Container */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(28,25,23,0.25)] border border-[#1C1917]/10 bg-[#FAF7F2] transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                <img
                  src="/src/assets/images/workbook_cover_mockup_1793867605326.jpg"
                  alt="7-Day Mind Reset physical workbook mockup titled in embossed gold foil"
                  className="w-full h-auto object-cover object-center aspect-[4/3] block"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle luxury caption strip */}
                <div className="p-4 bg-[#F8F4EC] border-t border-[#1C1917]/10 flex items-center justify-between text-xs text-[#1C1917]/80">
                  <div>
                    <p className="font-editorial font-semibold text-sm text-[#1C1917]">7-Day Mind Reset</p>
                    <p className="text-[11px] text-[#1C1917]/60">Interactive & Printable PDF Workbook</p>
                  </div>
                  <div className="text-right">
                    <span className="font-editorial text-lg font-bold text-[#9E7D3B]">₹50</span>
                    <span className="block text-[10px] uppercase tracking-wider text-[#1C1917]/50">Lifetime access</span>
                  </div>
                </div>
              </div>

              {/* Floating quote note pinned to side */}
              <div className="hidden sm:block absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-sm p-3.5 rounded-lg border border-[#1C1917]/10 shadow-[0_10px_25px_rgba(28,25,23,0.08)] max-w-[210px]">
                <p className="text-[11px] italic font-editorial text-[#1C1917] leading-snug">
                  "For the mind is restless, turbulent, obstinate and very strong..."
                </p>
                <p className="text-[10px] text-[#9E7D3B] font-semibold mt-1 uppercase tracking-wider">
                  Gita Chapter 6 · Verse 34
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
