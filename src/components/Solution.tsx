import React from 'react';
import { PenTool, Check, Compass, Focus, Sparkles } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold mb-3">
              The Pragmatic Philosophy
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight leading-tight [text-wrap:balance] mb-6">
              Ancient clarity translated into fifteen minutes of daily, tangible action.
            </h2>
            <p className="text-base sm:text-lg text-[#1C1917]/75 leading-relaxed mb-6">
              The Bhagavad Gita is not a book of passive contemplation. It was spoken on a battlefield to an individual paralyzed by indecision, high expectations, and self-doubt.
            </p>
            <p className="text-base text-[#1C1917]/75 leading-relaxed">
              We took these timeless psychological principles and stripped away cryptic jargon. In this workbook, you don’t merely highlight quotes—you complete structured exercises, audit your thought patterns, and build habits that outlast momentary motivation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-[#1C1917]/10 shadow-[0_15px_35px_rgba(28,25,23,0.08)] bg-[#F3ECE1]">
              <img
                src="/src/assets/images/intentional_morning_desk_1793867605682.jpg"
                alt="Mindful intentional morning routine with open journal and warm tea"
                className="w-full h-auto object-cover aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FAF7F2] border-t border-[#1C1917]/8 text-xs text-[#1C1917]/70">
                <span className="font-editorial italic text-sm text-[#1C1917] block mb-0.5">
                  "Action is superior to inaction. Even the maintenance of your body requires action."
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#9E7D3B] font-semibold">
                  Bhagavad Gita 3.8
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of the Method */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#1C1917]/8">
          
          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-[#F3ECE1] border border-[#1C1917]/10 flex items-center justify-center text-[#9E7D3B] mb-5">
              <Focus className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-semibold text-[#1C1917] mb-2">
              1. Abhyasa (Intentional Repetition)
            </h3>
            <p className="text-sm text-[#1C1917]/75 leading-relaxed">
              Discipline is not an inborn personality trait; it is a muscle. Each day introduces one single microscopic mental adjustment you practice for 10 minutes until calm focus becomes your natural default.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-[#F3ECE1] border border-[#1C1917]/10 flex items-center justify-center text-[#9E7D3B] mb-5">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-semibold text-[#1C1917] mb-2">
              2. Karmanye Vadhikaraste (Effort Over Anxiety)
            </h3>
            <p className="text-sm text-[#1C1917]/75 leading-relaxed">
              90% of procrastination stems from dreading the outcome or judging your speed. This workbook trains you to cleanly decouple the effort you control from the outcomes you cannot.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-[#F3ECE1] border border-[#1C1917]/10 flex items-center justify-center text-[#9E7D3B] mb-5">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl font-semibold text-[#1C1917] mb-2">
              3. Practical Reflection Worksheets
            </h3>
            <p className="text-sm text-[#1C1917]/75 leading-relaxed">
              Passive reading leaves the mind unchanged. By filling out the daily worksheets—identifying triggers, auditing time leaks, and committing to action—you encode the shift into your neurology.
            </p>
          </div>

        </div>

        {/* Contrast Table: Passive Motivation vs Active Reset */}
        <div className="mt-16 bg-[#F3ECE1]/70 rounded-2xl p-6 sm:p-10 border border-[#1C1917]/10">
          <div className="max-w-2xl mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1C1917] mb-2">
              Why this workbook actually works
            </h3>
            <p className="text-sm text-[#1C1917]/70">
              A transparent comparison between standard internet motivation and our structured 7-day protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Usual Way */}
            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#1C1917]/10">
              <p className="text-xs uppercase tracking-wider text-[#1C1917]/50 font-semibold mb-4">
                Generic Internet Self-Improvement
              </p>
              <ul className="space-y-3 text-sm text-[#1C1917]/70">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1C1917]/40 text-base leading-none">✕</span>
                  <span>Endless 300-page books that repeat one concept 20 times.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1C1917]/40 text-base leading-none">✕</span>
                  <span>Feel-good motivational quotes that fade after 20 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1C1917]/40 text-base leading-none">✕</span>
                  <span>Extreme 5 AM routines and rigid systems doomed to break.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#1C1917]/40 text-base leading-none">✕</span>
                  <span>Guilt-inducing trackers that make a bad day feel like total failure.</span>
                </li>
              </ul>
            </div>

            {/* The 7-Day Mind Reset Way */}
            <div className="bg-[#FAF7F2] p-6 rounded-xl border-2 border-[#9E7D3B]/40 shadow-sm relative">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-wider text-[#9E7D3B] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  The 7-Day Mind Reset Protocol
                </p>
                <span className="text-[11px] font-semibold text-[#1C1917] bg-[#F3ECE1] px-2 py-0.5 rounded">
                  ₹49 One-time
                </span>
              </div>
              <ul className="space-y-3 text-sm text-[#1C1917]/85">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <span>10 to 15 focused minutes each morning or evening.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <span>Tactile worksheets that force real introspection and concrete decisions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <span>Rooted in proven 2,500-year-old Vedic and Gita psychology.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <span>Built for students and working professionals facing real modern friction.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
