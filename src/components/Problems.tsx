import React from 'react';
import { Smartphone, HelpCircle, Users2, Flame, AlertCircle } from 'lucide-react';

interface ProblemItem {
  id: string;
  number: string;
  title: string;
  trigger: string;
  description: string;
  icon: React.ElementType;
}

const problems: ProblemItem[] = [
  {
    id: 'phone',
    number: '01',
    title: 'Constant phone distractions',
    trigger: 'The endless scroll trap',
    description:
      'You open your device for a 30-second task and look up 45 minutes later feeling drained. Every ping pulls your mental energy away from what actually matters.',
    icon: Smartphone,
  },
  {
    id: 'overthinking',
    number: '02',
    title: 'Overthinking small decisions',
    trigger: 'Analysis paralysis',
    description:
      'Replaying conversations, anticipating worst-case scenarios, and hesitating so long before starting a task that your willpower evaporates before you even begin.',
    icon: HelpCircle,
  },
  {
    id: 'comparison',
    number: '03',
    title: 'Comparing yourself with others',
    trigger: 'The silent self-doubt',
    description:
      'Measuring your backstage struggles against someone else’s curated highlight reel on LinkedIn or Instagram, creating an invisible weight of feeling constantly behind.',
  icon: Users2,
  },
  {
    id: 'habits',
    number: '04',
    title: 'Starting habits but abandoning them',
    trigger: 'The high-motivation burnout loop',
    description:
      'Relying on bursts of motivation that last 48 hours. When life gets busy or energy dips, routines collapse into guilt, restarting the cycle from square one.',
    icon: Flame,
  },
  {
    id: 'reaction',
    number: '05',
    title: 'Reacting emotionally instead of thoughtfully',
    trigger: 'Short-fused mental exhaustion',
    description:
      'Snapping at messages, taking constructive feedback personally, and feeling like your emotions are driving the steering wheel while your rational self watches helpless.',
    icon: AlertCircle,
  },
];

export const Problems: React.FC = () => {
  return (
    <section id="overview" className="py-20 md:py-28 bg-[#F3ECE1]/60 border-y border-[#1C1917]/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
            The Everyday Dilemma
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#1C1917] tracking-tight leading-tight [text-wrap:balance]">
            You know what you should be doing. So why is it so difficult to stay consistent?
          </h2>
          <p className="text-base text-[#1C1917]/70 mt-4 leading-relaxed">
            It is rarely a lack of intelligence or desire. The modern mind is constantly bombarded with micro-stimuli that hijack your nervous system. Willpower alone cannot fight an engineered attention economy.
          </p>
        </div>

        {/* Problems Grid - Clean Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`bg-[#FAF7F2] p-7 rounded-xl border border-[#1C1917]/8 transition-all duration-300 hover:shadow-md hover:border-[#9E7D3B]/40 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 bg-[#FDFBF7]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-editorial text-xl font-bold text-[#9E7D3B] tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F3ECE1] flex items-center justify-center text-[#1C1917]/70">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl font-semibold text-[#1C1917] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-[#9E7D3B] font-medium mb-3">
                    {item.trigger}
                  </p>

                  <p className="text-sm text-[#1C1917]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1917]/6 flex items-center justify-between text-[11px] text-[#1C1917]/50 font-medium">
                  <span>Workbook Solves On Day {index + 1 > 7 ? 7 : index + 1}</span>
                  <span className="text-[#9E7D3B]">Guided reset</span>
                </div>
              </div>
            );
          })}

          {/* Synthesis Card: Why Traditional Advice Fails */}
          <div className="bg-[#1C1917] text-[#FAF7F2] p-7 rounded-xl border border-[#1C1917] flex flex-col justify-between md:col-span-2 lg:col-span-1 shadow-sm">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-4">
                The Root Truth
              </span>
              <h3 className="font-editorial text-2xl font-semibold text-[#FAF7F2] mb-3 leading-snug">
                You don't need more pressure. You need a calmer system.
              </h3>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
                When you try to force discipline through self-criticism, the mind rebels. The Bhagavad Gita understood this 2,500 years ago: true focus is cultivated through gentle, regular practice (<i>Abhyasa</i>) and detachment from noisy outcomes (<i>Vairagya</i>).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#FAF7F2]/60 flex items-center justify-between">
              <span>7 Days to rewire your baseline</span>
              <span className="text-[#C5A059] font-medium">₹50 Workbook</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
