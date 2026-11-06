import React from 'react';
import { ShoppingBag, Sunrise, PenLine, Compass } from 'lucide-react';

interface Step {
  step: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    step: '01',
    title: 'Purchase the workbook.',
    duration: 'Instant digital delivery',
    description:
      'Complete the simple one-time payment of ₹49. Receive immediate access to your downloadable, high-resolution PDF workbook directly in your inbox.',
    icon: ShoppingBag,
  },
  {
    step: '02',
    title: 'Complete one short exercise each day.',
    duration: '10–15 minutes daily',
    description:
      'Read the brief, beautifully explained concept from the Bhagavad Gita and execute the single practical activity designed for your morning or evening routine.',
    icon: Sunrise,
  },
  {
    step: '03',
    title: 'Reflect on your progress.',
    duration: '3–5 minutes journaling',
    description:
      'Fill out the structured worksheet prompts to examine where your attention leaked, what you successfully decoupled, and how your calm baseline is strengthening.',
    icon: PenLine,
  },
  {
    step: '04',
    title: 'Build a routine you can continue.',
    duration: 'Lifelong mental resilience',
    description:
      'By Day 7, you formulate your personalized weekly maintenance ritual so you maintain clarity, focus, and emotional steadiness throughout the months ahead.',
    icon: Compass,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
            The Process
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight">
            How it works. <br />
            <span className="italic font-normal text-[#1C1917]/80">Four straightforward steps.</span>
          </h2>
          <p className="text-base text-[#1C1917]/70 mt-4 leading-relaxed">
            Designed for busy college students and working professionals. No bulky reading assignments or complex rituals—just clean, actionable mental clarity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative bg-[#F3ECE1]/50 p-6 rounded-xl border border-[#1C1917]/8 flex flex-col justify-between hover:bg-[#F3ECE1]/80 transition-colors"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-2xl font-bold text-[#9E7D3B] tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#1C1917]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl font-semibold text-[#1C1917] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9E7D3B] mb-3">
                    {item.duration}
                  </p>

                  <p className="text-xs sm:text-sm text-[#1C1917]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1917]/8 flex items-center justify-between text-[11px] text-[#1C1917]/40">
                  <span>Phase {index + 1} of 4</span>
                  <span>Self-paced</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
