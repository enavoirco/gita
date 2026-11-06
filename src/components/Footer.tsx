import React from 'react';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { PolicyType } from './PolicyModal.tsx';
import { PURCHASE_LINK } from '../config.ts';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const purchaseHref = PURCHASE_LINK || '#pricing';
  const externalProps = PURCHASE_LINK
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#1C1917]/10 pt-16 pb-12 text-[#1C1917]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1C1917]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#1C1917] block mb-3">
              7-Day Mind Reset
            </span>
            <p className="text-sm text-[#1C1917]/70 leading-relaxed max-w-sm mb-6">
              A calmer mind. A more intentional 7 days. A practical Bhagavad Gita-inspired workbook designed to overcome distraction, anxiety, and inconsistency.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#1C1917]/60">
              <span>Format: Printable & Interactive PDF</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#9E7D3B] font-semibold">₹49 One-time</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9E7D3B] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#1C1917]/75">
              <li>
                <a href="#overview" className="hover:text-[#1C1917] transition-colors">
                  The Daily Friction
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#1C1917] transition-colors">
                  The Gita Method
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[#1C1917] transition-colors">
                  7-Day Curriculum
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-[#1C1917] transition-colors">
                  Sample Page Previews
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1C1917] transition-colors">
                  Pricing & Details
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9E7D3B] mb-4">
              Connect & Support
            </h4>
            <div className="space-y-3 text-xs text-[#1C1917]/80 mb-6">
              <a
                href="mailto:support@7daymindreset.com"
                className="flex items-center gap-2 hover:text-[#9E7D3B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#9E7D3B]" />
                <span>support@7daymindreset.com</span>
              </a>
              <a
                href="https://instagram.com/7daymindreset"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#9E7D3B] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#9E7D3B]" />
                <span>@7daymindreset</span>
                <ArrowUpRight className="w-3 h-3 text-[#1C1917]/40" />
              </a>
            </div>

            <a
              href={purchaseHref}
              {...externalProps}
              className="inline-block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all whitespace-nowrap text-center"
            >
              Get Workbook – ₹49
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1C1917]/60">
          <p>© {new Date().getFullYear()} 7-Day Mind Reset. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#1C1917] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#1C1917]/20">·</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#1C1917] transition-colors"
            >
              Terms and Conditions
            </button>
            <span aria-hidden="true" className="text-[#1C1917]/20">·</span>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-[#1C1917] transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
