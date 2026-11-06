import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '1. Is this a physical book?',
    answer:
      'No. It is a downloadable PDF workbook. You can read and write directly on it using any tablet or smartphone (such as Apple iPad with Apple Pencil, GoodNotes, Notability, or Android PDF apps), or print it out on standard A4 paper at home or your local print shop.',
  },
  {
    question: '2. How much time do I need daily?',
    answer:
      'Approximately 10–15 minutes. The workbook was purposefully engineered for individuals with busy work or academic schedules. You read a concise 1-page principle, complete a brief targeted exercise, and jot down 2–3 sentences in the evening.',
  },
  {
    question: '3. Do I need prior knowledge of the Bhagavad Gita?',
    answer:
      'No. The explanations are written in simple modern English. You do not need to know Sanskrit or have any religious background. We focus purely on the practical psychological techniques of attention mastery, mental calmness, and action without paralyzing anxiety.',
  },
  {
    question: '4. How will I receive the workbook?',
    answer:
      'It will be delivered to your email after successful payment verification. You will receive a direct, high-speed download link for the high-resolution PDF workbook along with full printing guidelines.',
  },
  {
    question: '5. Is this a subscription?',
    answer:
      'No. It is a one-time payment of ₹49. There are no recurring fees, no surprise charges, and no hidden subscriptions. Once you purchase the workbook, it is yours to keep and use forever.',
  },
  {
    question: '6. Can I print it out or use it on my iPad / tablet?',
    answer:
      'Yes, absolutely. The PDF is optimized at 300 DPI high resolution for clean, crisp home printing. It also features standard digital margins and interactive form fields so you can type or write digitally with a stylus.',
  },
  {
    question: '7. What if I miss a day or fall behind?',
    answer:
      'The workbook is completely self-paced. If a hectic day interrupts your routine, simply resume where you left off. In fact, Day 4 teaches you the exact Gita principle of "Samatvam"—how to show up with equanimity without self-criticism or guilt.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F3ECE1]/40 border-t border-[#1C1917]/8">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
            Common Inquiries
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#1C1917]/70 mt-4 leading-relaxed">
            Everything you need to know about the format, delivery, and practice before beginning your 7-day reset.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`transition-all duration-200 rounded-xl border ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#9E7D3B]/40 shadow-sm'
                    : 'bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] border-[#1C1917]/8'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-editorial text-lg sm:text-xl font-semibold text-[#1C1917]">
                    {faq.question}
                  </span>
                  
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#1C1917]/10 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1C1917] text-white border-transparent' : 'text-[#1C1917]/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#1C1917]/80 leading-relaxed border-t border-[#1C1917]/6 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#FAF7F2] border border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F3ECE1] flex items-center justify-center text-[#9E7D3B]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1C1917]">Have another question?</p>
              <p className="text-xs text-[#1C1917]/60">We reply to every message within 24 hours.</p>
            </div>
          </div>
          <a
            href="mailto:support@7daymindreset.com"
            className="text-xs font-semibold uppercase tracking-wider text-[#9E7D3B] hover:text-[#7A5E24] border-b border-[#9E7D3B]/40 pb-0.5 transition-colors"
          >
            support@7daymindreset.com
          </a>
        </div>

      </div>
    </section>
  );
};
