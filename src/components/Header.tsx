import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(28,25,23,0.04)] border-b border-[#1C1917]/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element brand wordmark */}
          <a
            href="#"
            className="font-editorial text-2xl sm:text-2xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            7-Day Mind Reset
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-[#1C1917]/70 font-medium">
            <a
              href="#overview"
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              The Challenge
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Gita Method
            </a>
            <a
              href="#curriculum"
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              7-Day Breakdown
            </a>
            <a
              href="#preview"
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Workbook Preview
            </a>
            <a
              href="#faqs"
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenCheckout}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Get Workbook – ₹50</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#1C1917] rounded-md hover:bg-[#1C1917]/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#1C1917]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1C1917]/80 mb-6">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C1917] border-b border-[#1C1917]/5"
            >
              The Challenge
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C1917] border-b border-[#1C1917]/5"
            >
              Gita Method
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C1917] border-b border-[#1C1917]/5"
            >
              7-Day Breakdown
            </a>
            <a
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C1917] border-b border-[#1C1917]/5"
            >
              Workbook Preview
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1C1917] border-b border-[#1C1917]/5"
            >
              FAQs
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCheckout();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Get the Workbook – ₹50</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
