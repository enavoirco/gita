import React from 'react';
import { X, Shield, FileText, RotateCcw } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'refund' | null;

interface PolicyModalProps {
  policy: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#1C1917] w-full max-w-2xl rounded-2xl border border-[#1C1917]/15 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1C1917]/10 flex items-center justify-between bg-[#F3ECE1]/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#9E7D3B]">
              {policy === 'privacy' && <Shield className="w-4 h-4" />}
              {policy === 'terms' && <FileText className="w-4 h-4" />}
              {policy === 'refund' && <RotateCcw className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#1C1917]">
                {policy === 'privacy' && 'Privacy Policy'}
                {policy === 'terms' && 'Terms and Conditions'}
                {policy === 'refund' && 'Refund Policy'}
              </h3>
              <p className="text-[11px] text-[#1C1917]/50">7-Day Mind Reset · Legal & Transparency</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-[#1C1917]/80 leading-relaxed space-y-4">
          {policy === 'privacy' && (
            <>
              <p>
                <strong>Last Updated: November 2026</strong>
              </p>
              <p>
                At <strong>7-Day Mind Reset</strong>, we respect your privacy. This policy outlines how we collect and protect your information when purchasing our digital workbook.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">1. Information We Collect</h4>
              <p>
                We collect your email address and basic transaction identifiers purely for delivering your purchased PDF workbook and transactional receipts. We do not sell, rent, or trade your contact details with any third parties.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">2. Payment Security</h4>
              <p>
                All financial transactions are processed securely through certified PCI-DSS compliant payment gateways (Razorpay). We never see or store your credit card, debit card, UPI PIN, or bank passwords on our servers.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">3. Communications</h4>
              <p>
                We only send order confirmations, the workbook download link, and important product updates. You may unsubscribe at any time.
              </p>
            </>
          )}

          {policy === 'terms' && (
            <>
              <p>
                <strong>Last Updated: November 2026</strong>
              </p>
              <p>
                By purchasing or accessing the <strong>7-Day Mind Reset</strong> workbook, you agree to these Terms and Conditions.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">1. Digital Product & Personal License</h4>
              <p>
                The 7-Day Mind Reset is a digital PDF workbook. Your one-time ₹49 purchase grants you a single, non-transferable, personal license for reading and private printing.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">2. Intellectual Property</h4>
              <p>
                All texts, worksheets, curated commentary, and formatting are copyrighted. You may not resell, redistribute, upload to public repositories, or commercialize the workbook without prior written permission.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">3. Educational Disclaimer</h4>
              <p>
                The exercises are self-improvement and reflective tools inspired by philosophical literature (the Bhagavad Gita). They do not constitute licensed medical, clinical, or psychological therapy.
              </p>
            </>
          )}

          {policy === 'refund' && (
            <>
              <p>
                <strong>Last Updated: November 2026</strong>
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">Digital Delivery & Refund Guarantee</h4>
              <p>
                Because the 7-Day Mind Reset is an immediately downloadable digital PDF workbook priced at an accessible nominal rate of ₹49, standard physical returns do not apply.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">Delivery & Technical Support</h4>
              <p>
                If for any reason you do not receive your email download link within 15 minutes of payment, or if the PDF file is corrupted or unreadable on your device, please email our support team at <strong>support@7daymindreset.com</strong> with your transaction reference. We will promptly reissue your files or process a full refund within 48 hours.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1C1917]/10 bg-[#F3ECE1]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
