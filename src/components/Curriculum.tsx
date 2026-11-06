import React, { useState } from 'react';
import { ChevronDown, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { PURCHASE_LINK } from '../config.ts';

interface DayModule {
  day: number;
  title: string;
  sanskritConcept: string;
  chapterRef: string;
  theme: string;
  exercise: string;
  reflectionPrompt: string;
  practicalOutcome: string;
}

const modules: DayModule[] = [
  {
    day: 1,
    title: 'Notice what steals your attention.',
    sanskritConcept: 'Indriya-Samyama (Mastery over the senses)',
    chapterRef: 'Gita 2.58',
    theme: 'Sensory awareness & digital triggers',
    exercise: 'The 24-Hour Attention Audit: Log the 3 unconscious micro-distractions that hijack your workflow before noon.',
    reflectionPrompt: 'Where did I trade deep peace today for 5 seconds of instant dopamine?',
    practicalOutcome: 'Reclaim 60–90 minutes of fragmented time immediately.',
  },
  {
    day: 2,
    title: 'Train the mind to return.',
    sanskritConcept: 'Abhyasa Yoga (The art of returning without self-judgment)',
    chapterRef: 'Gita 6.26',
    theme: 'Gentle focus recalibration',
    exercise: 'The 3-Breath Anchor Protocol: Practice reclaiming wandering attention without getting angry at yourself.',
    reflectionPrompt: 'When my mind wandered today, did I punish myself or did I guide it back with kindness?',
    practicalOutcome: 'Stop the cycle of guilt when your concentration slips.',
  },
  {
    day: 3,
    title: 'Separate what you control.',
    sanskritConcept: 'Karmanye Vadhikaraste (Effort vs. Outcome)',
    chapterRef: 'Gita 2.47',
    theme: 'Decoupling anxiety from performance',
    exercise: 'The 2-Column Locus Matrix: Draw a line down your worksheet. Separate your effort today from the external result.',
    reflectionPrompt: 'What outcome am I obsessively checking that is completely outside my control right now?',
    practicalOutcome: 'Instant reduction in pre-exam and pre-meeting overthinking.',
  },
  {
    day: 4,
    title: 'Build discipline that can survive a bad day.',
    sanskritConcept: 'Samatvam (Equanimity in all conditions)',
    chapterRef: 'Gita 2.48',
    theme: 'Consistency during chaos',
    exercise: 'The Minimum Viable Effort (MVE) Standard: Design your emergency 5-minute routine for exhausted days.',
    reflectionPrompt: 'Can I keep a small promise to myself even when my mood is low?',
    practicalOutcome: 'Never completely break the habit chain, even on brutal days.',
  },
  {
    day: 5,
    title: 'Stop measuring your life against someone else’s.',
    sanskritConcept: 'Svadharma (Honoring your authentic trajectory)',
    chapterRef: 'Gita 3.35',
    theme: 'Comparison immunity',
    exercise: 'The Comparison Inventory: Identify who triggers your insecurity, uncover the hidden desire, and redirect toward your own work.',
    reflectionPrompt: 'Am I running my own marathon, or sprinting blindly in someone else’s lane?',
    practicalOutcome: 'Deep relief from social media envy and career comparison.',
  },
  {
    day: 6,
    title: 'Catch the reaction before it takes over.',
    sanskritConcept: 'Krodhad Bhavati Sammohah (The anatomy of impulse)',
    chapterRef: 'Gita 2.63',
    theme: 'Emotional poise & response time',
    exercise: 'The 90-Second Reaction Gap: A worksheet technique to halt emotional flare-ups before speaking or sending.',
    reflectionPrompt: 'Where did I respond from wisdom today, and where did I react from wounded ego?',
    practicalOutcome: 'Sharper composure in relationships, family dynamics, and high-stress meetings.',
  },
  {
    day: 7,
    title: 'Create a balanced plan you can repeat.',
    sanskritConcept: 'Yukta-Ahara-Vihara (The middle path of sustainable rhythm)',
    chapterRef: 'Gita 6.17',
    theme: 'Long-term lifestyle integration',
    exercise: 'The Sustainable Weekly Protocol: Synthesize your insights into an ongoing, friction-free daily framework.',
    reflectionPrompt: 'How will I protect this calmer baseline when the next week gets hectic?',
    practicalOutcome: 'A complete personal system that doesn’t require re-starting.',
  },
];

export const Curriculum: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };
  const purchaseHref = PURCHASE_LINK || '#pricing';
  const externalProps = PURCHASE_LINK
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-[#F3ECE1]/40 border-t border-[#1C1917]/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
              The 7-Day Curriculum
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight">
              One intentional theme each day. <br />
              <span className="italic font-normal text-[#1C1917]/80">Zero filler or fluff.</span>
            </h2>
          </div>

          <div className="text-left md:text-right shrink-0">
            <p className="text-xs text-[#1C1917]/60 mb-2">Click any day to preview the exercise</p>
            <a
              href={purchaseHref}
              {...externalProps}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7D3B] hover:text-[#7A5E24] transition-colors"
            >
              <span>Get Full Workbook for ₹50</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 7 Days Cards */}
        <div className="space-y-3.5">
          {modules.map((item) => {
            const isExpanded = expandedDay === item.day;

            return (
              <div
                key={item.day}
                className={`transition-all duration-300 rounded-xl border ${
                  isExpanded
                    ? 'bg-[#FAF7F2] border-[#9E7D3B]/40 shadow-sm'
                    : 'bg-[#FAF7F2]/70 hover:bg-[#FAF7F2] border-[#1C1917]/8'
                }`}
              >
                {/* Card Header Accordion Trigger */}
                <button
                  onClick={() => toggleDay(item.day)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-editorial text-xl sm:text-2xl font-bold text-[#9E7D3B] tabular-nums shrink-0">
                      Day {item.day < 10 ? `0${item.day}` : item.day}
                    </span>
                    
                    <div className="min-w-0">
                      <h3 className="font-editorial text-lg sm:text-xl font-semibold text-[#1C1917] truncate sm:whitespace-normal">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#1C1917]/50 mt-0.5 truncate">
                        <span>{item.sanskritConcept}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#9E7D3B] font-medium">{item.chapterRef}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs text-[#1C1917]/50 font-medium">
                      {isExpanded ? 'Hide Details' : 'View Exercise'}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#1C1917]/10 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#1C1917] text-white border-transparent' : 'text-[#1C1917]/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#1C1917]/6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                    
                    <div className="p-4 bg-[#F3ECE1]/60 rounded-lg border border-[#1C1917]/6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#9E7D3B] uppercase tracking-wider mb-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Daily Exercise (10 Mins)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1C1917]/85 leading-relaxed">
                        {item.exercise}
                      </p>
                    </div>

                    <div className="p-4 bg-[#F3ECE1]/60 rounded-lg border border-[#1C1917]/6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917]/70 uppercase tracking-wider mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#9E7D3B]" />
                        <span>Journaling Prompt</span>
                      </div>
                      <p className="text-xs sm:text-sm italic font-editorial text-[#1C1917] leading-relaxed">
                        "{item.reflectionPrompt}"
                      </p>
                    </div>

                    <div className="p-4 bg-[#FAF7F2] rounded-lg border border-[#9E7D3B]/30 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#9E7D3B] uppercase tracking-wider block mb-1">
                          Practical Shift
                        </span>
                        <p className="text-xs sm:text-sm text-[#1C1917]/85 font-medium leading-relaxed">
                          {item.practicalOutcome}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#1C1917]/8 flex items-center justify-between text-[11px] text-[#1C1917]/50">
                        <span>Includes formatted PDF worksheet</span>
                        <span className="text-[#9E7D3B]">Included in ₹50</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner note */}
        <div className="mt-12 p-6 rounded-xl bg-[#FAF7F2] border border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F3ECE1] flex items-center justify-center text-[#9E7D3B]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="font-editorial font-semibold text-[#1C1917] text-base">
                All 7 daily modules are immediately available in your PDF download.
              </p>
              <p className="text-xs text-[#1C1917]/60">
                Print it out or open directly on iPad, tablet, or phone (compatible with GoodNotes, Notability, and PDF readers).
              </p>
            </div>
          </div>
          <a
            href={purchaseHref}
            {...externalProps}
            className="w-full sm:w-auto text-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm shrink-0"
          >
            Get the Workbook – ₹50
          </a>
        </div>

      </div>
    </section>
  );
};
