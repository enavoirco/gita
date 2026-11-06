import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PURCHASE_LINK } from '../config.ts';

export const StickyBottomCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 500px (hero passed)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const purchaseHref = PURCHASE_LINK || '#pricing';
  const externalProps = PURCHASE_LINK
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <aside
      aria-label="Quick purchase bar"
      className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#1C1917]/10 py-2.5 px-4 sm:px-6 shadow-[0_-4px_20px_rgba(28,25,23,0.06)] animate-in slide-in-from-bottom duration-300 md:hidden"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-4 h-4 text-[#9E7D3B] shrink-0" />
          <div className="truncate">
            <span className="font-editorial text-sm font-bold text-[#1C1917] block truncate leading-tight">
              7-Day Mind Reset
            </span>
            <span className="text-[11px] text-[#1C1917]/60 block leading-tight">
              ₹50 · Instant PDF
            </span>
          </div>
        </div>

        <a
          href={purchaseHref}
          {...externalProps}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm shrink-0"
        >
          <span>Get – ₹50</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
};
