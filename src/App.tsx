/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Problems } from './components/Problems.tsx';
import { Solution } from './components/Solution.tsx';
import { Curriculum } from './components/Curriculum.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { ProductPreview } from './components/ProductPreview.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { PolicyModal, PolicyType } from './components/PolicyModal.tsx';
import { StickyBottomCTA } from './components/StickyBottomCTA.tsx';

export default function App() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const handleOpenPolicy = (type: PolicyType) => {
    setActivePolicy(type);
  };

  const handleClosePolicy = () => {
    setActivePolicy(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col font-sans selection:bg-[#EAE2D5] selection:text-[#1C1917]">
      {/* 3-Zone Top Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem Section */}
        <Problems />

        {/* 3. Solution Section (Gita Philosophy to Practical Action) */}
        <Solution />

        {/* 4. What's Inside: 7 Days Breakdown */}
        <Curriculum />

        {/* 5. How It Works: 4 Steps */}
        <HowItWorks />

        {/* 6. Product Preview: Realistic Sample Sheets */}
        <ProductPreview />

        {/* 7. Transparent Pricing Section */}
        <Pricing />

        {/* 8. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer with Legal Policies & Social Links */}
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Mobile Sticky Purchase Bar (Within 15% height budget) */}
      <StickyBottomCTA />

      {/* Legal Policies Modal (Privacy, Terms, Refund) */}
      <PolicyModal policy={activePolicy} onClose={handleClosePolicy} />
    </div>
  );
}
