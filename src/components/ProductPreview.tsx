import React, { useState } from 'react';
import { Eye, BookOpen, PenLine, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

type PreviewTab = 'lesson' | 'worksheet' | 'reflection' | 'review';

interface TabItem {
  id: PreviewTab;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const tabs: TabItem[] = [
  {
    id: 'lesson',
    title: 'Daily Lesson Page',
    subtitle: 'Distilled Gita Wisdom',
    icon: BookOpen,
  },
  {
    id: 'worksheet',
    title: 'Exercise Worksheet',
    subtitle: 'Tactile 10-Min Action',
    icon: FileText,
  },
  {
    id: 'reflection',
    title: 'Reflection Page',
    subtitle: 'Evening Introspection',
    icon: PenLine,
  },
  {
    id: 'review',
    title: '7-Day Progress Review',
    subtitle: 'Weekly Synthesis',
    icon: CheckCircle2,
  },
];

import { PURCHASE_LINK } from '../config.ts';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTab>('lesson');
  const purchaseHref = PURCHASE_LINK || '#pricing';
  const externalProps = PURCHASE_LINK
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <section id="preview" className="py-20 md:py-28 bg-[#F3ECE1]/60 border-y border-[#1C1917]/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
            <span>Inside the Digital Workbook</span>
            <span aria-hidden="true">·</span>
            <span>Realistic Sample Sheets</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight">
            Look inside the workbook. <br />
            <span className="italic font-normal text-[#1C1917]/80">Crafted with typographic grace.</span>
          </h2>
          <p className="text-base text-[#1C1917]/70 mt-4 leading-relaxed">
            Every page is meticulously typeset with calm margins, spacious lines for handwriting, and clear guidance. Preview sample sheets below (these are visual workbook layouts, not customer testimonials).
          </p>
        </div>

        {/* Tab Selection Buttons - Interactive Segmented Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#FAF7F2] rounded-xl border border-[#1C1917]/10 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm'
                    : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-[#F3ECE1]/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Page Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Spread (Paper Sheet Simulation) */}
          <div className="lg:col-span-8">
            <div className="relative bg-[#FAF7F2] rounded-2xl border border-[#1C1917]/12 shadow-[0_20px_45px_rgba(28,25,23,0.08)] overflow-hidden min-h-[520px] p-6 sm:p-10 flex flex-col justify-between">
              
              {/* Subtle page header watermark / pagination */}
              <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-4 mb-6 text-xs text-[#1C1917]/50 font-editorial tracking-wider">
                <span className="uppercase tracking-widest text-[#9E7D3B] font-semibold">
                  7-Day Mind Reset · Workbook Edition
                </span>
                <span>
                  {activeTab === 'lesson' && 'Page 08 of 42'}
                  {activeTab === 'worksheet' && 'Page 09 of 42'}
                  {activeTab === 'reflection' && 'Page 10 of 42'}
                  {activeTab === 'review' && 'Page 38 of 42'}
                </span>
              </div>

              {/* Dynamic Content based on Active Tab */}
              {activeTab === 'lesson' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="text-center max-w-lg mx-auto pb-4 border-b border-[#1C1917]/8">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-2">
                      Day 01 · Morning Lesson
                    </p>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917] mb-3">
                      Notice What Steals Your Attention
                    </h3>
                    <p className="text-xs italic font-editorial text-[#1C1917]/80 bg-[#F3ECE1]/60 py-2 px-4 rounded-md inline-block">
                      ॥ यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः । इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥
                    </p>
                    <p className="text-[11px] text-[#1C1917]/60 mt-1">
                      Bhagavad Gita Chapter 2, Verse 58 — Like a tortoise withdrawing its limbs, the wise withdraw attention from distractions.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-[#1C1917]/80 leading-relaxed font-sans">
                    <p className="first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#9E7D3B]">
                      Attention is the currency of consciousness. Before you attempt to force yourself into high productivity or ruthless discipline, you must observe the invisible leaks in your mental reservoir. Most mental fatigue is not produced by hard work; it is caused by constant, fragmented switching.
                    </p>
                    <p>
                      Today’s purpose is non-judgmental observation. When you open your phone automatically or get pulled away by sudden anxiety, do not criticize yourself. Merely make a mental note: <i>"My attention was captured here."</i> That small pause creates freedom.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F3ECE1]/50 rounded-lg border border-[#1C1917]/8 text-xs text-[#1C1917]/80">
                    <span className="font-semibold text-[#9E7D3B] uppercase tracking-wider block mb-1">
                      Today’s Guiding Mantra
                    </span>
                    <p className="font-editorial text-base italic text-[#1C1917]">
                      "I do not fight distraction with anger. I observe it, and gently bring my attention back home."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'worksheet' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold">
                        Practical Worksheet
                      </span>
                      <span className="text-xs text-[#1C1917]/50">Time: 10 mins</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#1C1917]">
                      The 24-Hour Attention Leak Audit
                    </h3>
                  </div>

                  <p className="text-xs text-[#1C1917]/70">
                    Identify the top 3 triggers that hijacked your mental focus today. Check the boxes as you observe them:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-md border border-[#1C1917]/10 flex items-start gap-3">
                      <input type="checkbox" defaultChecked className="mt-1 accent-[#9E7D3B]" />
                      <div className="text-xs">
                        <span className="font-semibold text-[#1C1917]">Trigger A: Reflexive Phone Pickup</span>
                        <p className="text-[#1C1917]/60 mt-0.5">
                          Checked notification bar while waiting in elevator or between browser tabs.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-md border border-[#1C1917]/10 flex items-start gap-3">
                      <input type="checkbox" defaultChecked className="mt-1 accent-[#9E7D3B]" />
                      <div className="text-xs">
                        <span className="font-semibold text-[#1C1917]">Trigger B: Emotional Avoidance Scroll</span>
                        <p className="text-[#1C1917]/60 mt-0.5">
                          Felt friction starting a tough assignment, instantly opened social feed to escape discomfort.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-md border border-[#1C1917]/10 flex items-start gap-3">
                      <input type="checkbox" className="mt-1 accent-[#9E7D3B]" />
                      <div className="text-xs">
                        <span className="font-semibold text-[#1C1917]">Trigger C: Replaying a Past Disagreement</span>
                        <p className="text-[#1C1917]/60 mt-0.5">
                          Lost 20 minutes drafting imaginary arguments in the shower or during study.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lined writing area simulation */}
                  <div>
                    <p className="text-xs font-semibold text-[#1C1917]/70 mb-2">
                      My Concrete Counter-Measure for Tomorrow Morning:
                    </p>
                    <div className="border-b border-[#1C1917]/15 py-1 text-xs font-editorial italic text-[#1C1917]/80">
                      I will keep my phone in another room for the first 45 minutes after waking up...
                    </div>
                    <div className="border-b border-[#1C1917]/15 py-2"></div>
                  </div>
                </div>
              )}

              {activeTab === 'reflection' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold block mb-1">
                      Evening Decompression
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-[#1C1917]">
                      Closing The Day With Equanimity
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F3ECE1]/60 rounded-lg border border-[#1C1917]/6">
                      <p className="text-xs font-semibold text-[#1C1917] mb-1">
                        Where did I act with calm intention?
                      </p>
                      <p className="text-xs text-[#1C1917]/60 italic">
                        "Paused for 3 deep breaths before replying to a tense work message at 3 PM."
                      </p>
                    </div>

                    <div className="p-4 bg-[#F3ECE1]/60 rounded-lg border border-[#1C1917]/6">
                      <p className="text-xs font-semibold text-[#1C1917] mb-1">
                        Where did I slip into overthinking?
                      </p>
                      <p className="text-xs text-[#1C1917]/60 italic">
                        "Worried about the outcome of an interview rather than preparing the materials."
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#1C1917]/80 mb-2">
                      The Gita Release Prompt:
                    </p>
                    <p className="text-xs text-[#1C1917]/70 mb-3">
                      Write down the one fear or comparison you choose to let go of tonight before sleep:
                    </p>
                    <div className="p-4 bg-white rounded-lg border border-[#1C1917]/10 text-xs italic font-editorial text-[#1C1917]/80">
                      "I surrender the obsession with whether everyone approves of my pace. My duty is only with my honest effort today. The rest belongs to time."
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'review' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold block mb-1">
                      Day 07 · Weekly Synthesis
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-[#1C1917]">
                      The 7-Day Mind Reset Scorecard
                    </h3>
                  </div>

                  <p className="text-xs text-[#1C1917]/70">
                    A panoramic review of your 7 days. Notice the subtle shifts in your emotional response time and focus longevity:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-white rounded-lg border border-[#1C1917]/10 text-center">
                      <span className="text-[10px] uppercase text-[#1C1917]/50 font-semibold block">Day 1 & 2</span>
                      <p className="text-xs font-medium text-[#1C1917] mt-1">Attention Aware</p>
                      <span className="text-[10px] text-[#9E7D3B] font-semibold">Completed</span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#1C1917]/10 text-center">
                      <span className="text-[10px] uppercase text-[#1C1917]/50 font-semibold block">Day 3 & 4</span>
                      <p className="text-xs font-medium text-[#1C1917] mt-1">Control & Equanimity</p>
                      <span className="text-[10px] text-[#9E7D3B] font-semibold">Completed</span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#1C1917]/10 text-center">
                      <span className="text-[10px] uppercase text-[#1C1917]/50 font-semibold block">Day 5 & 6</span>
                      <p className="text-xs font-medium text-[#1C1917] mt-1">Comparison Pause</p>
                      <span className="text-[10px] text-[#9E7D3B] font-semibold">Completed</span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#9E7D3B]/40 bg-[#FDFBF7] text-center">
                      <span className="text-[10px] uppercase text-[#9E7D3B] font-semibold block">Day 7</span>
                      <p className="text-xs font-semibold text-[#1C1917] mt-1">Repeatable Plan</p>
                      <span className="text-[10px] text-[#9E7D3B] font-semibold">Sustainable</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F3ECE1]/60 rounded-lg border border-[#1C1917]/8 text-xs text-[#1C1917]/80">
                    <span className="font-semibold text-[#1C1917] block mb-1">
                      Your Sustainable Routine Ahead:
                    </span>
                    <p className="leading-relaxed">
                      You now possess a permanent mental toolkit. Keep the 42-page PDF saved on your tablet or printed in a binder to revisit whenever stress threatens your peace.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom footer bar on the paper sheet */}
              <div className="mt-8 pt-4 border-t border-[#1C1917]/8 flex items-center justify-between text-xs text-[#1C1917]/50">
                <span className="italic">Standard A4 / US Letter printable format</span>
                <span className="text-[#9E7D3B] font-medium">Included in ₹50 PDF download</span>
              </div>

            </div>
          </div>

          {/* Right Column: Physical Print & Tablet Context Showcase */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Real photo visual of the open spread */}
            <div className="rounded-xl overflow-hidden border border-[#1C1917]/10 shadow-md bg-[#FAF7F2]">
              <img
                src="/src/assets/images/workbook_open_spread_1793867606305.jpg"
                alt="High-resolution printed workbook spread with Sanskrit verse and reflection lines"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FAF7F2] text-xs text-[#1C1917]/70">
                <p className="font-editorial font-semibold text-sm text-[#1C1917] mb-0.5">
                  Designed for Real Handwriting & Screen Use
                </p>
                <p className="text-[11px] text-[#1C1917]/60">
                  Wide margins, lay-flat styling, and crisp typography that prints cleanly in black & white or sepia.
                </p>
              </div>
            </div>

            {/* Feature Checklist Box */}
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#1C1917]/8">
              <h4 className="font-editorial text-lg font-semibold text-[#1C1917] mb-3">
                Workbook Specifications
              </h4>
              <ul className="space-y-2.5 text-xs text-[#1C1917]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                  <span>42 total thoughtfully formatted pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                  <span>7 daily lesson chapters + exercise sheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                  <span>Fillable PDF fields for iPad & tablet users</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                  <span>Print-ready 300 DPI vector clarity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                  <span>One-time purchase of ₹50 with lifetime rights</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-[#1C1917]/8">
                <a
                  href={purchaseHref}
                  {...externalProps}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#1C1917] rounded-md hover:bg-[#332F2B] active:scale-[0.98] transition-all shadow-sm"
                >
                  <span>Get the Workbook – ₹50</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
